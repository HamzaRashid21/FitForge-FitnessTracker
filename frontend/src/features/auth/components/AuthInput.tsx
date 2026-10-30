import React from 'react';

export interface AuthInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  error?: string;
  icon?: React.ReactNode;
}

export const AuthInput: React.FC<AuthInputProps> = ({
  label,
  id,
  error,
  icon,
  className = '',
  ...props
}) => {
  return (
    <div className="ff-field">
      <label className="ff-label" htmlFor={id}>
        {label}
      </label>
      <div className={`ff-in ${error ? 'bad' : ''} ${className}`}>
        {icon && <span className="ff-in-icon">{icon}</span>}
        <input id={id} aria-invalid={!!error} aria-describedby={error ? `${id}-err` : undefined} {...props} />
      </div>
      {error && (
        <p className="ff-err" id={`${id}-err`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
