import React, { createContext, useContext, useEffect, useState, useCallback } from 'react';
import { authService } from '../services/authService.js';
import type {
  AuthUser,
  LoginCredentials,
  RegisterCredentials,
  ResetPasswordPayload,
  OnboardingData,
} from '../types/auth.js';

interface AuthContextType {
  user: AuthUser | null;
  accessToken: string | null;
  isAuthenticated: boolean;
  isLoading: boolean;
  login: (credentials: LoginCredentials) => Promise<AuthUser>;
  register: (credentials: RegisterCredentials) => Promise<AuthUser>;
  logout: () => Promise<void>;
  verifyEmail: (token: string) => Promise<AuthUser>;
  resendVerification: (email: string) => Promise<void>;
  forgotPassword: (email: string) => Promise<void>;
  resetPassword: (payload: ResetPasswordPayload) => Promise<void>;
  saveOnboarding: (data: OnboardingData) => Promise<AuthUser>;
  refreshSession: () => Promise<AuthUser | null>;
  setUser: React.Dispatch<React.SetStateAction<AuthUser | null>>;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [user, setUser] = useState<AuthUser | null>(null);
  const [accessToken, setAccessTokenState] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(true);

  // Restore session silently on mount using HTTP-only refresh cookie
  const refreshSession = useCallback(async (): Promise<AuthUser | null> => {
    try {
      const data = await authService.refresh();
      if (data?.user && data.accessToken) {
        setUser(data.user);
        setAccessTokenState(data.accessToken);
        return data.user;
      }
      return null;
    } catch {
      setUser(null);
      setAccessTokenState(null);
      return null;
    }
  }, []);

  useEffect(() => {
    let mounted = true;

    async function initSession() {
      try {
        await refreshSession();
      } finally {
        if (mounted) {
          setIsLoading(false);
        }
      }
    }

    initSession();

    return () => {
      mounted = false;
    };
  }, [refreshSession]);

  const login = async (credentials: LoginCredentials): Promise<AuthUser> => {
    const data = await authService.login(credentials);
    setUser(data.user);
    setAccessTokenState(data.accessToken);
    return data.user;
  };

  const register = async (credentials: RegisterCredentials): Promise<AuthUser> => {
    const data = await authService.register(credentials);
    // User is created but unverified; we store user in state for redirect handling if needed
    setUser(data.user);
    return data.user;
  };

  const logout = async (): Promise<void> => {
    try {
      await authService.logout();
    } finally {
      setUser(null);
      setAccessTokenState(null);
    }
  };

  const verifyEmail = async (token: string): Promise<AuthUser> => {
    const data = await authService.verifyEmail(token);
    setUser(data.user);
    return data.user;
  };

  const resendVerification = async (email: string): Promise<void> => {
    await authService.resendVerification(email);
  };

  const forgotPassword = async (email: string): Promise<void> => {
    await authService.forgotPassword(email);
  };

  const resetPassword = async (payload: ResetPasswordPayload): Promise<void> => {
    await authService.resetPassword(payload);
  };

  const saveOnboarding = async (data: OnboardingData): Promise<AuthUser> => {
    const res = await authService.saveOnboarding(data);
    setUser(res.user);
    return res.user;
  };

  const value: AuthContextType = {
    user,
    accessToken,
    isAuthenticated: !!user && !!accessToken,
    isLoading,
    login,
    register,
    logout,
    verifyEmail,
    resendVerification,
    forgotPassword,
    resetPassword,
    saveOnboarding,
    refreshSession,
    setUser,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

// eslint-disable-next-line react-refresh/only-export-components
export const useAuth = (): AuthContextType => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error('useAuth must be used within an AuthProvider');
  }
  return context;
};
