import crypto from 'node:crypto';
import jwt from 'jsonwebtoken';
import { config } from '../../../config/env.js';
import type { JwtAccessPayload, JwtRefreshPayload } from '../types/auth.types.js';
import { UnauthorizedError } from '../../../common/errors/httpErrors.js';

/**
 * Generate a cryptographically secure random token (hex string).
 */
export function generateRandomToken(bytes = 32): string {
  return crypto.randomBytes(bytes).toString('hex');
}

/**
 * Hash a sensitive token (verification token, reset token, refresh token)
 * using SHA-256 before storing it in MongoDB.
 */
export function hashToken(token: string): string {
  return crypto.createHash('sha256').update(token).digest('hex');
}

/**
 * Sign a short-lived JWT Access Token.
 */
export function generateAccessToken(payload: JwtAccessPayload): string {
  return jwt.sign(payload, config.jwt.accessSecret, {
    expiresIn: config.jwt.accessExpiresIn as jwt.SignOptions['expiresIn'],
    algorithm: 'HS256',
  });
}

/**
 * Sign a long-lived JWT Refresh Token.
 */
export function generateRefreshToken(payload: JwtRefreshPayload, rememberMe = false): string {
  const expiresIn = rememberMe ? '30d' : config.jwt.refreshExpiresIn;
  return jwt.sign(payload, config.jwt.refreshSecret, {
    expiresIn: expiresIn as jwt.SignOptions['expiresIn'],
    algorithm: 'HS256',
  });
}

/**
 * Verify and decode an Access Token.
 */
export function verifyAccessToken(token: string): JwtAccessPayload {
  try {
    return jwt.verify(token, config.jwt.accessSecret) as JwtAccessPayload;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      throw new UnauthorizedError('Access token expired. Please refresh your session.');
    }
    throw new UnauthorizedError('Invalid or corrupted access token.');
  }
}

/**
 * Verify and decode a Refresh Token.
 */
export function verifyRefreshToken(token: string): JwtRefreshPayload {
  try {
    return jwt.verify(token, config.jwt.refreshSecret) as JwtRefreshPayload;
  } catch (err) {
    if (err instanceof jwt.TokenExpiredError) {
      throw new UnauthorizedError('Refresh token expired. Please sign in again.');
    }
    throw new UnauthorizedError('Invalid or corrupted refresh token.');
  }
}
