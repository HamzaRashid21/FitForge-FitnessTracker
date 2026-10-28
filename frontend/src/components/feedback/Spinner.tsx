import React from 'react';

export interface SpinnerProps {
  size?: 'sm' | 'md' | 'lg';
  color?: string;
  className?: string;
}

export const Spinner: React.FC<SpinnerProps> = ({
  size = 'md',
  color = 'currentColor',
  className = '',
}) => {
  const pixelSizes = {
    sm: 16,
    md: 24,
    lg: 36,
  };

  const px = pixelSizes[size];

  return (
    <svg
      className={`fitforge-spinner ${className}`}
      width={px}
      height={px}
      viewBox="0 0 24 24"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      style={{
        animation: 'fitforge-spin 0.75s linear infinite',
      }}
      aria-label="Loading"
      role="status"
    >
      <circle cx="12" cy="12" r="10" stroke={color} strokeWidth="3" strokeOpacity="0.2" />
      <path d="M12 2a10 10 0 0 1 10 10" stroke={color} strokeWidth="3" strokeLinecap="round" />
      <style>{`
        @keyframes fitforge-spin {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </svg>
  );
};
