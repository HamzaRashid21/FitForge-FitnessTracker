import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error?: string;
  helperText?: string;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  (
    {
      label,
      error,
      helperText,
      leftIcon,
      rightIcon,
      id,
      className = '',
      style,
      disabled,
      ...props
    },
    ref
  ) => {
    const inputId = id || (label ? label.toLowerCase().replace(/\s+/g, '-') : undefined);

    return (
      <div style={{ display: 'flex', flexDirection: 'column', gap: '0.375rem', width: '100%' }}>
        {label && (
          <label
            htmlFor={inputId}
            style={{
              fontSize: '0.875rem',
              fontWeight: 500,
              color: 'var(--color-text-secondary)',
            }}
          >
            {label}
          </label>
        )}
        <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
          {leftIcon && (
            <div
              style={{
                position: 'absolute',
                left: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-text-muted)',
                pointerEvents: 'none',
              }}
            >
              {leftIcon}
            </div>
          )}
          <input
            id={inputId}
            ref={ref}
            disabled={disabled}
            style={{
              width: '100%',
              padding: '0.625rem 0.875rem',
              paddingLeft: leftIcon ? '2.5rem' : '0.875rem',
              paddingRight: rightIcon ? '2.5rem' : '0.875rem',
              backgroundColor: 'var(--color-bg-elevated)',
              border: `1px solid ${error ? 'var(--color-danger)' : 'var(--color-border-subtle)'}`,
              borderRadius: 'var(--radius-md)',
              color: 'var(--color-text-primary)',
              fontSize: '0.9375rem',
              outline: 'none',
              transition: 'border-color var(--transition-fast)',
              opacity: disabled ? 0.6 : 1,
              ...style,
            }}
            className={`fitforge-input ${error ? 'fitforge-input-error' : ''} ${className}`}
            {...props}
          />
          {rightIcon && (
            <div
              style={{
                position: 'absolute',
                right: '0.75rem',
                display: 'flex',
                alignItems: 'center',
                color: 'var(--color-text-muted)',
              }}
            >
              {rightIcon}
            </div>
          )}
        </div>
        {error ? (
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-danger)' }}>{error}</span>
        ) : helperText ? (
          <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
            {helperText}
          </span>
        ) : null}
      </div>
    );
  }
);

Input.displayName = 'Input';
