import React from 'react';

export interface ContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  size?: 'sm' | 'md' | 'lg' | 'xl' | 'full';
}

export const Container: React.FC<ContainerProps> = ({
  children,
  size = 'lg',
  className = '',
  style,
  ...props
}) => {
  const maxWidths = {
    sm: '640px',
    md: '768px',
    lg: '1024px',
    xl: '1280px',
    full: '100%',
  };

  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: maxWidths[size],
    marginLeft: 'auto',
    marginRight: 'auto',
    paddingLeft: 'var(--space-4)',
    paddingRight: 'var(--space-4)',
    ...style,
  };

  return (
    <div style={containerStyle} className={`fitforge-container ${className}`} {...props}>
      {children}
    </div>
  );
};
