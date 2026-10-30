import type { Request, Response, NextFunction } from 'express';
import { authService } from '../services/auth.service.js';
import { sendSuccess } from '../../../common/utils/apiResponse.js';
import { config } from '../../../config/env.js';
import { UnauthorizedError } from '../../../common/errors/httpErrors.js';
import type { AuthenticatedRequest } from '../middleware/auth.middleware.js';

const REFRESH_COOKIE_NAME = 'fitforge_rt';

function setRefreshCookie(res: Response, token: string, rememberMe = false): void {
  const maxAge = rememberMe
    ? 30 * 24 * 60 * 60 * 1000 // 30 days
    : 7 * 24 * 60 * 60 * 1000; // 7 days

  res.cookie(REFRESH_COOKIE_NAME, token, {
    httpOnly: true,
    secure: config.nodeEnv === 'production',
    sameSite: config.nodeEnv === 'production' ? 'strict' : 'lax',
    path: `${config.apiPrefix}/auth`,
    maxAge,
  });
}

function clearRefreshCookie(res: Response): void {
  res.clearCookie(REFRESH_COOKIE_NAME, {
    httpOnly: true,
    secure: config.nodeEnv === 'production',
    sameSite: config.nodeEnv === 'production' ? 'strict' : 'lax',
    path: `${config.apiPrefix}/auth`,
  });
}

export class AuthController {
  public async register(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await authService.register(req.body);
      sendSuccess(
        res,
        { user },
        'Registration successful. Please check your email to verify your account.',
        201
      );
    } catch (error) {
      next(error);
    }
  }

  public async login(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const { user, accessToken, tokens } = await authService.login(req.body);
      setRefreshCookie(res, tokens.refreshToken, req.body.rememberMe);

      sendSuccess(
        res,
        {
          user,
          accessToken,
        },
        'Signed in successfully.'
      );
    } catch (error) {
      next(error);
    }
  }

  public async refresh(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const refreshToken = req.cookies?.[REFRESH_COOKIE_NAME];
      if (!refreshToken) {
        throw new UnauthorizedError('No refresh session found. Please sign in.');
      }

      const { user, accessToken, tokens } = await authService.refresh(refreshToken);
      setRefreshCookie(res, tokens.refreshToken);

      sendSuccess(
        res,
        {
          user,
          accessToken,
        },
        'Session refreshed successfully.'
      );
    } catch (error) {
      clearRefreshCookie(res);
      next(error);
    }
  }

  public async logout(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      const refreshToken = req.cookies?.[REFRESH_COOKIE_NAME];
      if (req.user?.sub) {
        await authService.logout(req.user.sub, refreshToken);
      }
      clearRefreshCookie(res);

      sendSuccess(res, null, 'Signed out successfully.');
    } catch (error) {
      clearRefreshCookie(res);
      next(error);
    }
  }

  public async verifyEmail(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const user = await authService.verifyEmail(req.body.token);
      sendSuccess(res, { user }, 'Email verified successfully. You may now continue to your account.');
    } catch (error) {
      next(error);
    }
  }

  public async resendVerification(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await authService.resendVerification(req.body.email);
      sendSuccess(res, null, result.message);
    } catch (error) {
      next(error);
    }
  }

  public async forgotPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await authService.forgotPassword(req.body.email);
      sendSuccess(res, null, result.message);
    } catch (error) {
      next(error);
    }
  }

  public async resetPassword(req: Request, res: Response, next: NextFunction): Promise<void> {
    try {
      const result = await authService.resetPassword(req.body);
      clearRefreshCookie(res);
      sendSuccess(res, null, result.message);
    } catch (error) {
      next(error);
    }
  }

  public async getMe(req: AuthenticatedRequest, res: Response, next: NextFunction): Promise<void> {
    try {
      if (!req.user?.sub) {
        throw new UnauthorizedError('Authentication required.');
      }
      const user = await authService.getMe(req.user.sub);
      sendSuccess(res, { user }, 'User profile retrieved successfully.');
    } catch (error) {
      next(error);
    }
  }
}

export const authController = new AuthController();
