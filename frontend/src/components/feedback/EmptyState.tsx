import React from 'react';
import { Button } from '../ui/Button.js';

export interface EmptyStateProps {
  icon?: React.ReactNode;
  title: string;
  description: string;
  actionLabel?: string;
  onAction?: () => void;
  className?: string;
}

export const EmptyState: React.FC<EmptyStateProps> = ({
  icon,
  title,
  description,
  actionLabel,
  onAction,
  className = '',
}) => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 'var(--space-12) var(--space-4)',
        textAlign: 'center',
      }}
      className={`fitforge-empty-state ${className}`}
    >
      {icon && (
        <div
          style={{
            marginBottom: 'var(--space-4)',
            color: 'var(--color-text-muted)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
          }}
        >
          {icon}
        </div>
      )}
      <h3
        style={{
          fontSize: '1.25rem',
          fontWeight: 600,
          color: 'var(--color-text-primary)',
          marginBottom: 'var(--space-2)',
        }}
      >
        {title}
      </h3>
      <p
        style={{
          color: 'var(--color-text-secondary)',
          maxWidth: '420px',
          marginBottom: actionLabel ? 'var(--space-6)' : '0',
          fontSize: '0.9375rem',
        }}
      >
        {description}
      </p>
      {actionLabel && onAction && (
        <Button variant="primary" onClick={onAction}>
          {actionLabel}
        </Button>
      )}
    </div>
  );
};
