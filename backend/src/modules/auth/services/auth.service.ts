import crypto from 'node:crypto';
import { User } from '../../users/models/user.model.js';
import type {
  RegisterDto,
  LoginDto,
  ResetPasswordDto,
  AuthTokens,
  AuthSessionResponse,
} from '../types/auth.types.js';
import type { ISafeUser } from '../../users/types/user.types.js';
import {
  BadRequestError,
  ConflictError,
  ForbiddenError,
  NotFoundError,
  UnauthorizedError,
} from '../../../common/errors/httpErrors.js';
import {
  generateAccessToken,
  generateRefreshToken,
  generateRandomToken,
  hashToken,
  verifyRefreshToken,
} from '../utils/token.util.js';
import { emailService } from './email.service.js';

export class AuthService {
  /**
   * Register a new user account. Always defaults to role 'User' and tier 'Free'.
   */
  public async register(dto: RegisterDto): Promise<ISafeUser> {
    const existing = await User.findOne({ email: dto.email.toLowerCase() });
    if (existing) {
      throw new ConflictError('An account with this email address already exists.');
    }

    const passwordHash = await User.hashPassword(dto.password);
    const verificationRawToken = generateRandomToken(32);
    const verificationTokenHash = hashToken(verificationRawToken);
    const verificationTokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000); // 24 hours

    const user = await User.create({
      fullName: dto.fullName.trim(),
      email: dto.email.toLowerCase().trim(),
      passwordHash,
      role: 'User',
      subscriptionTier: 'Free',
      isEmailVerified: false,
      isOnboardingCompleted: false,
      accountStatus: 'active',
      verificationTokenHash,
      verificationTokenExpiresAt,
      verificationLastSentAt: new Date(),
      refreshTokens: [],
    });

    // Send verification email asynchronously
    emailService
      .sendVerificationEmail(user.email, user.fullName, verificationRawToken)
      .catch((err) => {
        // Log error but don't fail registration if mail transport is unreachable
        console.error('Failed to dispatch registration email:', err);
      });

    return user.toSafeUser();
  }

  /**
   * Log in user with email & password. Issues access and refresh tokens.
   */
  public async login(dto: LoginDto): Promise<AuthSessionResponse & { tokens: AuthTokens }> {
    const user = await User.findOne({ email: dto.email.toLowerCase().trim() }).select(
      '+passwordHash +refreshTokens'
    );

    if (!user) {
      throw new UnauthorizedError('Invalid email or password.');
    }

    const isMatch = await user.comparePassword(dto.password);
    if (!isMatch) {
      throw new UnauthorizedError('Invalid email or password.');
    }

    if (user.accountStatus !== 'active') {
      throw new ForbiddenError('Your account has been deactivated or suspended.');
    }

    user.lastLoginAt = new Date();

    // Generate tokens
    const accessToken = generateAccessToken({
      sub: user._id.toString(),
      email: user.email,
      role: user.role,
      subscriptionTier: user.subscriptionTier,
      isEmailVerified: user.isEmailVerified,
      isOnboardingCompleted: user.isOnboardingCompleted,
    });

    const jti = crypto.randomUUID();
    const family = crypto.randomUUID();
    const refreshToken = generateRefreshToken({ sub: user._id.toString(), jti, family }, dto.rememberMe);

    const refreshExpiry = new Date(
      Date.now() + (dto.rememberMe ? 30 * 24 * 60 * 60 * 1000 : 7 * 24 * 60 * 60 * 1000)
    );

    // Filter out expired refresh tokens and add the new one
    const now = new Date();
    user.refreshTokens = user.refreshTokens.filter((rt) => rt.expiresAt > now);
    user.refreshTokens.push({
      tokenHash: hashToken(refreshToken),
      family,
      expiresAt: refreshExpiry,
      createdAt: now,
    });

    await user.save();

    return {
      user: user.toSafeUser(),
      accessToken,
      tokens: {
        accessToken,
        refreshToken,
      },
    };
  }

  /**
   * Refresh access token and rotate refresh token.
   */
  public async refresh(oldRefreshToken: string): Promise<AuthSessionResponse & { tokens: AuthTokens }> {
    const payload = verifyRefreshToken(oldRefreshToken);
    const user = await User.findById(payload.sub).select('+refreshTokens');

    if (!user) {
      throw new UnauthorizedError('User session not found.');
    }

    if (user.accountStatus !== 'active') {
      throw new ForbiddenError('Account is inactive.');
    }

    const oldTokenHash = hashToken(oldRefreshToken);
    const tokenIndex = user.refreshTokens.findIndex((rt) => rt.tokenHash === oldTokenHash);

    if (tokenIndex === -1) {
      // Refresh token reuse / stolen token detected! Revoke all tokens in family
      user.refreshTokens = user.refreshTokens.filter((rt) => rt.family !== payload.family);
      await user.save();
      throw new UnauthorizedError('Session revoked due to token reuse detection. Please sign in again.');
    }

    // Generate rotated tokens
    const newAccessToken = generateAccessToken({
      sub: user._id.toString(),
      email: user.email,
      role: user.role,
      subscriptionTier: user.subscriptionTier,
      isEmailVerified: user.isEmailVerified,
      isOnboardingCompleted: user.isOnboardingCompleted,
    });

    const newJti = crypto.randomUUID();
    const newRefreshToken = generateRefreshToken({
      sub: user._id.toString(),
      jti: newJti,
      family: payload.family,
    });

    const refreshExpiry = new Date(Date.now() + 7 * 24 * 60 * 60 * 1000);

    // Replace old refresh token with new one (Token Rotation)
    user.refreshTokens.splice(tokenIndex, 1, {
      tokenHash: hashToken(newRefreshToken),
      family: payload.family,
      expiresAt: refreshExpiry,
      createdAt: new Date(),
    });

    // Cleanup expired tokens
    const now = new Date();
    user.refreshTokens = user.refreshTokens.filter((rt) => rt.expiresAt > now);

    await user.save();

    return {
      user: user.toSafeUser(),
      accessToken: newAccessToken,
      tokens: {
        accessToken: newAccessToken,
        refreshToken: newRefreshToken,
      },
    };
  }

  /**
   * Invalidate refresh token session on logout.
   */
  public async logout(userId: string, refreshToken?: string): Promise<void> {
    const user = await User.findById(userId).select('+refreshTokens');
    if (!user) return;

    if (refreshToken) {
      const hashed = hashToken(refreshToken);
      user.refreshTokens = user.refreshTokens.filter((rt) => rt.tokenHash !== hashed);
    } else {
      user.refreshTokens = [];
    }

    await user.save();
  }

  /**
   * Verify email with one-time verification token.
   */
  public async verifyEmail(token: string): Promise<ISafeUser> {
    const hashed = hashToken(token);
    const user = await User.findOne({
      verificationTokenHash: hashed,
      verificationTokenExpiresAt: { $gt: new Date() },
    }).select('+verificationTokenHash');

    if (!user) {
      throw new BadRequestError('Verification token is invalid or has expired.');
    }

    user.isEmailVerified = true;
    user.verificationTokenHash = undefined;
    user.verificationTokenExpiresAt = undefined;
    await user.save();

    return user.toSafeUser();
  }

  /**
   * Resend email verification link with rate-limiting / throttling.
   */
  public async resendVerification(email: string): Promise<{ message: string }> {
    const user = await User.findOne({ email: email.toLowerCase().trim() }).select(
      '+verificationTokenHash'
    );

    // Return non-revealing message if account doesn't exist to prevent enumeration
    if (!user) {
      return { message: 'If an unverified account exists, a new verification link has been sent.' };
    }

    if (user.isEmailVerified) {
      return { message: 'This account has already been verified. You can proceed to sign in.' };
    }

    // 1-minute cooldown to prevent email spamming
    if (
      user.verificationLastSentAt &&
      Date.now() - user.verificationLastSentAt.getTime() < 60 * 1000
    ) {
      const remainingSeconds = Math.ceil(
        (60 * 1000 - (Date.now() - user.verificationLastSentAt.getTime())) / 1000
      );
      throw new BadRequestError(
        `Please wait ${remainingSeconds} second${remainingSeconds === 1 ? '' : 's'} before requesting another verification email.`
      );
    }

    const verificationRawToken = generateRandomToken(32);
    user.verificationTokenHash = hashToken(verificationRawToken);
    user.verificationTokenExpiresAt = new Date(Date.now() + 24 * 60 * 60 * 1000);
    user.verificationLastSentAt = new Date();
    await user.save();

    await emailService.sendVerificationEmail(user.email, user.fullName, verificationRawToken);

    return { message: 'A new verification link has been sent to your email address.' };
  }

  /**
   * Initiate forgot password flow.
   */
  public async forgotPassword(email: string): Promise<{ message: string }> {
    const user = await User.findOne({ email: email.toLowerCase().trim() }).select(
      '+passwordResetTokenHash'
    );

    // Prevent user enumeration: always return standard message
    const standardMessage = 'If that email address is in our system, we have sent a password reset link.';

    if (!user) {
      return { message: standardMessage };
    }

    const rawToken = generateRandomToken(32);
    user.passwordResetTokenHash = hashToken(rawToken);
    user.passwordResetExpiresAt = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    await user.save();

    await emailService.sendPasswordResetEmail(user.email, user.fullName, rawToken);

    return { message: standardMessage };
  }

  /**
   * Reset password with valid reset token.
   */
  public async resetPassword(dto: ResetPasswordDto): Promise<{ message: string }> {
    const hashed = hashToken(dto.token);
    const user = await User.findOne({
      passwordResetTokenHash: hashed,
      passwordResetExpiresAt: { $gt: new Date() },
    }).select('+passwordResetTokenHash +refreshTokens');

    if (!user) {
      throw new BadRequestError('Password reset link is invalid or has expired.');
    }

    user.passwordHash = await User.hashPassword(dto.password);
    user.passwordResetTokenHash = undefined;
    user.passwordResetExpiresAt = undefined;

    // Invalidate all active sessions for security after password change
    user.refreshTokens = [];
    await user.save();

    return { message: 'Your password has been reset successfully. You may now sign in with your new password.' };
  }

  /**
   * Get current authenticated user profile.
   */
  public async getMe(userId: string): Promise<ISafeUser> {
    const user = await User.findById(userId);
    if (!user) {
      throw new NotFoundError('User not found.');
    }
    return user.toSafeUser();
  }
}

export const authService = new AuthService();
