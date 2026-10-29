import React from 'react';
import { ThemeProvider } from './ThemeProvider.js';

export interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <ThemeProvider>{children}</ThemeProvider>;
};
