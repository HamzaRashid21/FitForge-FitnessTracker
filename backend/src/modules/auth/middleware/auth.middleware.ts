import type { Request, Response, NextFunction } from 'express';
import { UnauthorizedError, ForbiddenError } from '../../../common/errors/httpErrors.js';
import { verifyAccessToken } from '../utils/token.util.js';
import type { JwtAccessPayload } from '../types/auth.types.js';
import type { UserRole } from '../../users/types/user.types.js';

export interface AuthenticatedRequest extends Request {
  user?: JwtAccessPayload;
}

/**
 * Middleware to verify JWT Access Token from Authorization: Bearer <token>
 */
export function authenticate(req: AuthenticatedRequest, _res: Response, next: NextFunction): void {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    throw new UnauthorizedError('Authentication required. Missing Bearer token.');
  }

  const token = authHeader.split(' ')[1];
  if (!token) {
    throw new UnauthorizedError('Authentication required. Malformed authorization header.');
  }

  try {
    const payload = verifyAccessToken(token);
    req.user = payload;
    next();
  } catch (error) {
    next(error);
  }
}

/**
 * Middleware to enforce specific roles (e.g. Admin only, or Admin + User)
 */
export function requireRole(...roles: UserRole[]) {
  return (req: AuthenticatedRequest, _res: Response, next: NextFunction): void => {
    if (!req.user) {
      throw new UnauthorizedError('Authentication required.');
    }

    if (!roles.includes(req.user.role)) {
      throw new ForbiddenError(
        `Access denied. Requires one of the following roles: ${roles.join(', ')}.`
      );
    }

    next();
  };
}

/**
 * Middleware ensuring the account has verified their email address
 */
export function requireEmailVerified(
  req: AuthenticatedRequest,
  _res: Response,
  next: NextFunction
): void {
  if (!req.user) {
    throw new UnauthorizedError('Authentication required.');
  }

  if (!req.user.isEmailVerified) {
    throw new ForbiddenError('Email verification required to access this resource.');
  }

  next();
}
