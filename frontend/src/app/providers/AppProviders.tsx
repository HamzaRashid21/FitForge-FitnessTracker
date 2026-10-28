import React from 'react';

export interface AppProvidersProps {
  children: React.ReactNode;
}

export const AppProviders: React.FC<AppProvidersProps> = ({ children }) => {
  return <React.Fragment>{children}</React.Fragment>;
};
