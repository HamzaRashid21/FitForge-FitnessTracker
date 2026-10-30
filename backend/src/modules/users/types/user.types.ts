export type UserRole = 'Admin' | 'User';
export type SubscriptionTier = 'Free' | 'Premium';
export type AccountStatus = 'active' | 'suspended' | 'deactivated';

export interface IRefreshTokenSession {
  tokenHash: string;
  family: string;
  expiresAt: Date;
  createdAt: Date;
}

export interface IUserOnboarding {
  name?: string;
  hear?: string;
  adult?: boolean;
  goal?: string | null;
  exp?: string | null;
  equip?: string[];
  units?: 'metric' | 'imperial';
  height?: string;
  weight?: string;
  age?: string;
  days?: string[];
  dur?: string | null;
  plan?: 'free' | 'premium';
  completedAt?: Date;
}

export interface IUser {
  _id: string;
  fullName: string;
  email: string;
  passwordHash: string;
  role: UserRole;
  subscriptionTier: SubscriptionTier;
  isEmailVerified: boolean;
  isOnboardingCompleted: boolean;
  profileImage?: string;
  accountStatus: AccountStatus;
  verificationTokenHash?: string;
  verificationTokenExpiresAt?: Date;
  verificationLastSentAt?: Date;
  passwordResetTokenHash?: string;
  passwordResetExpiresAt?: Date;
  refreshTokens: IRefreshTokenSession[];
  onboarding?: IUserOnboarding;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}

export interface ISafeUser {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  subscriptionTier: SubscriptionTier;
  isEmailVerified: boolean;
  isOnboardingCompleted: boolean;
  profileImage?: string;
  accountStatus: AccountStatus;
  onboarding?: IUserOnboarding;
  lastLoginAt?: Date;
  createdAt: Date;
  updatedAt: Date;
}
