import React from 'react';
import { ThemeProvider } from './ThemeProvider.js';
import { AuthProvider } from '../../features/auth/context/AuthContext.js';

export interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return (
    <ThemeProvider>
      <AuthProvider>{children}</AuthProvider>
    </ThemeProvider>
  );
};
