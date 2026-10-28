import React from 'react';

export type BadgeVariant = 'default' | 'success' | 'warning' | 'danger' | 'info' | 'primary';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

export const Badge: React.FC<BadgeProps> = ({
  children,
  variant = 'default',
  className = '',
  style,
  ...props
}) => {
  const variantStyles: Record<BadgeVariant, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--color-bg-subtle)',
      color: 'var(--color-text-secondary)',
    },
    primary: {
      backgroundColor: 'var(--color-primary-subtle)',
      color: 'var(--color-primary)',
      border: '1px solid rgba(16, 185, 129, 0.25)',
    },
    success: {
      backgroundColor: 'var(--color-success-bg)',
      color: 'var(--color-success)',
      border: '1px solid rgba(16, 185, 129, 0.25)',
    },
    warning: {
      backgroundColor: 'var(--color-warning-bg)',
      color: 'var(--color-warning)',
      border: '1px solid rgba(245, 158, 11, 0.25)',
    },
    danger: {
      backgroundColor: 'var(--color-danger-bg)',
      color: 'var(--color-danger)',
      border: '1px solid rgba(239, 68, 68, 0.25)',
    },
    info: {
      backgroundColor: 'var(--color-info-bg)',
      color: 'var(--color-info)',
      border: '1px solid rgba(59, 130, 246, 0.25)',
    },
  };

  const badgeStyle: React.CSSProperties = {
    display: 'inline-flex',
    alignItems: 'center',
    gap: '0.25rem',
    padding: '0.125rem 0.5rem',
    fontSize: '0.75rem',
    fontWeight: 600,
    borderRadius: 'var(--radius-full)',
    textTransform: 'uppercase',
    letterSpacing: '0.05em',
    ...variantStyles[variant],
    ...style,
  };

  return (
    <span
      style={badgeStyle}
      className={`fitforge-badge fitforge-badge-${variant} ${className}`}
      {...props}
    >
      {children}
    </span>
  );
};
