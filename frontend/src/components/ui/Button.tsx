import React from 'react';
import { Spinner } from '../feedback/Spinner.js';

export type ButtonVariant = 'primary' | 'secondary' | 'outline' | 'ghost' | 'danger';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant;
  size?: ButtonSize;
  isLoading?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Button: React.FC<ButtonProps> = ({
  children,
  variant = 'primary',
  size = 'md',
  isLoading = false,
  leftIcon,
  rightIcon,
  disabled,
  className = '',
  style,
  ...props
}) => {
  const baseStyles: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: '0.5rem',
    borderRadius: 'var(--radius-md)',
    fontWeight: 600,
    cursor: disabled || isLoading ? 'not-allowed' : 'pointer',
    opacity: disabled || isLoading ? 0.65 : 1,
    transition: 'all var(--transition-fast)',
    border: '1px solid transparent',
    outline: 'none',
    textDecoration: 'none',
    ...style,
  };

  const sizeStyles: Record<ButtonSize, React.CSSProperties> = {
    sm: { padding: '0.375rem 0.75rem', fontSize: '0.875rem' },
    md: { padding: '0.5rem 1rem', fontSize: '0.9375rem' },
    lg: { padding: '0.75rem 1.5rem', fontSize: '1rem' },
  };

  const variantStyles: Record<ButtonVariant, React.CSSProperties> = {
    primary: {
      backgroundColor: 'var(--color-primary)',
      color: '#090d16',
      boxShadow: 'var(--shadow-sm)',
    },
    secondary: {
      backgroundColor: 'var(--color-bg-elevated)',
      color: 'var(--color-text-primary)',
      borderColor: 'var(--color-border)',
    },
    outline: {
      backgroundColor: 'transparent',
      borderColor: 'var(--color-border-subtle)',
      color: 'var(--color-text-primary)',
    },
    ghost: {
      backgroundColor: 'transparent',
      color: 'var(--color-text-secondary)',
    },
    danger: {
      backgroundColor: 'var(--color-danger)',
      color: '#ffffff',
    },
  };

  const combinedStyles: React.CSSProperties = {
    ...baseStyles,
    ...sizeStyles[size],
    ...variantStyles[variant],
  };

  return (
    <button
      disabled={disabled || isLoading}
      style={combinedStyles}
      className={`fitforge-btn fitforge-btn-${variant} ${className}`}
      {...props}
    >
      {isLoading ? <Spinner size="sm" /> : leftIcon}
      {children}
      {!isLoading && rightIcon}
    </button>
  );
};
