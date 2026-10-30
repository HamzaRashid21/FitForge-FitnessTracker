import React from 'react';
import { Loader2 } from 'lucide-react';

export interface AuthButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isLoading?: boolean;
  loadingText?: string;
  icon?: React.ReactNode;
}

export const AuthButton: React.FC<AuthButtonProps> = ({
  children,
  isLoading = false,
  loadingText = 'Please wait...',
  icon,
  className = '',
  disabled,
  ...props
}) => {
  return (
    <button
      className={`ff-btn ${className}`}
      disabled={disabled || isLoading}
      aria-busy={isLoading}
      {...props}
    >
      {isLoading ? (
        <>
          <Loader2 size={18} className="spinner" style={{ animation: 'spin 1s linear infinite' }} />
          <span>{loadingText}</span>
        </>
      ) : (
        <>
          <span>{children}</span>
          {icon}
        </>
      )}
    </button>
  );
};
