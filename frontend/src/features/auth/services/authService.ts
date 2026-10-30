import { apiClient, setAccessToken } from '../../../services/apiClient.js';
import type {
  AuthResponseData,
  AuthUser,
  LoginCredentials,
  RegisterCredentials,
  ResetPasswordPayload,
  OnboardingData,
} from '../types/auth.js';

export const authService = {
  async register(data: RegisterCredentials): Promise<{ user: AuthUser }> {
    return apiClient.post<{ user: AuthUser }>('auth/register', data);
  },

  async login(credentials: LoginCredentials): Promise<AuthResponseData> {
    const data = await apiClient.post<AuthResponseData>('auth/login', credentials);
    if (data?.accessToken) {
      setAccessToken(data.accessToken);
    }
    return data;
  },

  async refresh(): Promise<AuthResponseData> {
    const data = await apiClient.post<AuthResponseData>('auth/refresh');
    if (data?.accessToken) {
      setAccessToken(data.accessToken);
    }
    return data;
  },

  async logout(): Promise<void> {
    try {
      await apiClient.post('auth/logout');
    } finally {
      setAccessToken(null);
    }
  },

  async verifyEmail(token: string): Promise<{ user: AuthUser }> {
    return apiClient.post<{ user: AuthUser }>('auth/verify-email', { token });
  },

  async resendVerification(email: string): Promise<void> {
    return apiClient.post('auth/resend-verification', { email });
  },

  async forgotPassword(email: string): Promise<void> {
    return apiClient.post('auth/forgot-password', { email });
  },

  async resetPassword(payload: ResetPasswordPayload): Promise<void> {
    return apiClient.post('auth/reset-password', payload);
  },

  async getMe(): Promise<{ user: AuthUser }> {
    return apiClient.get<{ user: AuthUser }>('auth/me');
  },

  async saveOnboarding(data: OnboardingData): Promise<{ user: AuthUser }> {
    return apiClient.post<{ user: AuthUser }>('auth/onboarding', data);
  },
};
