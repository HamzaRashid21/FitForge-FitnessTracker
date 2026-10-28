import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLDivElement> {
  variant?: 'default' | 'elevated' | 'bordered';
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card: React.FC<CardProps> = ({
  children,
  variant = 'default',
  padding = 'md',
  className = '',
  style,
  ...props
}) => {
  const paddingMap = {
    none: '0',
    sm: 'var(--space-3)',
    md: 'var(--space-6)',
    lg: 'var(--space-8)',
  };

  const variantStyles: Record<string, React.CSSProperties> = {
    default: {
      backgroundColor: 'var(--color-bg-surface)',
      border: '1px solid var(--color-border)',
    },
    elevated: {
      backgroundColor: 'var(--color-bg-elevated)',
      border: '1px solid var(--color-border-subtle)',
      boxShadow: 'var(--shadow-md)',
    },
    bordered: {
      backgroundColor: 'transparent',
      border: '1px solid var(--color-border-subtle)',
    },
  };

  const cardStyle: React.CSSProperties = {
    borderRadius: 'var(--radius-lg)',
    padding: paddingMap[padding],
    ...variantStyles[variant],
    ...style,
  };

  return (
    <div
      style={cardStyle}
      className={`fitforge-card fitforge-card-${variant} ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
