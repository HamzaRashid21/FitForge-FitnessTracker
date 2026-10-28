import React from 'react';
import { AlertCircle, CheckCircle, Info, AlertTriangle } from 'lucide-react';

export type AlertType = 'info' | 'success' | 'warning' | 'danger';

export interface AlertProps extends React.HTMLAttributes<HTMLDivElement> {
  type?: AlertType;
  title?: string;
  children: React.ReactNode;
}

export const Alert: React.FC<AlertProps> = ({
  type = 'info',
  title,
  children,
  className = '',
  style,
  ...props
}) => {
  const typeConfig = {
    info: {
      icon: <Info size={18} color="var(--color-info)" />,
      bg: 'var(--color-info-bg)',
      border: 'rgba(59, 130, 246, 0.3)',
      titleColor: 'var(--color-info)',
    },
    success: {
      icon: <CheckCircle size={18} color="var(--color-success)" />,
      bg: 'var(--color-success-bg)',
      border: 'rgba(16, 185, 129, 0.3)',
      titleColor: 'var(--color-success)',
    },
    warning: {
      icon: <AlertTriangle size={18} color="var(--color-warning)" />,
      bg: 'var(--color-warning-bg)',
      border: 'rgba(245, 158, 11, 0.3)',
      titleColor: 'var(--color-warning)',
    },
    danger: {
      icon: <AlertCircle size={18} color="var(--color-danger)" />,
      bg: 'var(--color-danger-bg)',
      border: 'rgba(239, 68, 68, 0.3)',
      titleColor: 'var(--color-danger)',
    },
  };

  const current = typeConfig[type];

  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'flex-start',
        gap: '0.75rem',
        padding: '0.875rem 1rem',
        borderRadius: 'var(--radius-md)',
        backgroundColor: current.bg,
        border: `1px solid ${current.border}`,
        color: 'var(--color-text-primary)',
        fontSize: '0.9375rem',
        ...style,
      }}
      className={`fitforge-alert fitforge-alert-${type} ${className}`}
      role="alert"
      {...props}
    >
      <div style={{ flexShrink: 0, marginTop: '2px' }}>{current.icon}</div>
      <div style={{ flex: 1 }}>
        {title && (
          <div
            style={{
              fontWeight: 600,
              marginBottom: '0.25rem',
              color: current.titleColor,
            }}
          >
            {title}
          </div>
        )}
        <div style={{ color: 'var(--color-text-secondary)', lineHeight: 1.4 }}>{children}</div>
      </div>
    </div>
  );
};
