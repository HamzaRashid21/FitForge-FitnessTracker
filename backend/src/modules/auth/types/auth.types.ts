import type { ISafeUser, UserRole, SubscriptionTier } from '../../users/types/user.types.js';

export interface RegisterDto {
  fullName: string;
  email: string;
  password: string;
  confirmPassword?: string;
  termsAccepted?: boolean;
}

export interface LoginDto {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface VerifyEmailDto {
  token: string;
}

export interface ResendVerificationDto {
  email: string;
}

export interface ForgotPasswordDto {
  email: string;
}

export interface ResetPasswordDto {
  token: string;
  password: string;
  confirmPassword?: string;
}

export interface JwtAccessPayload {
  sub: string;
  email: string;
  role: UserRole;
  subscriptionTier: SubscriptionTier;
  isEmailVerified: boolean;
  isOnboardingCompleted: boolean;
}

export interface JwtRefreshPayload {
  sub: string;
  jti: string;
  family: string;
}

export interface AuthTokens {
  accessToken: string;
  refreshToken: string;
}

export interface AuthSessionResponse {
  user: ISafeUser;
  accessToken: string;
}
