import React from 'react';

export interface FormGroupProps extends React.HTMLAttributes<HTMLDivElement> {
  gap?: 'sm' | 'md' | 'lg';
}

export const FormGroup: React.FC<FormGroupProps> = ({
  children,
  gap = 'md',
  className = '',
  style,
  ...props
}) => {
  const gapMap = {
    sm: 'var(--space-3)',
    md: 'var(--space-4)',
    lg: 'var(--space-6)',
  };

  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        gap: gapMap[gap],
        width: '100%',
        ...style,
      }}
      className={`fitforge-form-group ${className}`}
      {...props}
    >
      {children}
    </div>
  );
};
