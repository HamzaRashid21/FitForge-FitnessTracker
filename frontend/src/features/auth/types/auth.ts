export type UserRole = 'Admin' | 'User';
export type SubscriptionTier = 'Free' | 'Premium';
export type AccountStatus = 'active' | 'suspended' | 'deactivated';

export interface OnboardingData {
  name: string;
  hear: string;
  adult: boolean;
  goal: string | null;
  exp: string | null;
  equip: string[];
  units: 'metric' | 'imperial';
  height: string;
  weight: string;
  age: string;
  days: string[];
  dur: string | null;
  plan: 'free' | 'premium';
}

export interface AuthUser {
  id: string;
  fullName: string;
  email: string;
  role: UserRole;
  subscriptionTier: SubscriptionTier;
  isEmailVerified: boolean;
  isOnboardingCompleted: boolean;
  profileImage?: string;
  accountStatus: AccountStatus;
  onboarding?: OnboardingData;
  lastLoginAt?: string;
  createdAt: string;
  updatedAt: string;
}

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface RegisterCredentials {
  fullName: string;
  email: string;
  password: string;
  confirmPassword: string;
  termsAccepted: boolean;
}

export interface ResetPasswordPayload {
  token: string;
  password: string;
  confirmPassword: string;
}

export interface AuthResponseData {
  user: AuthUser;
  accessToken: string;
}

export interface AuthState {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  error: string | null;
}
