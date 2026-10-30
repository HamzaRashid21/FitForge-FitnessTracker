import React, { useState } from 'react';
import { Lock, Eye, EyeOff } from 'lucide-react';

export interface PasswordInputProps extends Omit<React.InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string;
  error?: string;
}

export const PasswordInput: React.FC<PasswordInputProps> = ({
  label,
  id = 'password',
  error,
  className = '',
  ...props
}) => {
  const [showPassword, setShowPassword] = useState(false);

  return (
    <div className="ff-field">
      <label className="ff-label" htmlFor={id}>
        {label}
      </label>
      <div className={`ff-in ${error ? 'bad' : ''} ${className}`}>
        <span className="ff-in-icon">
          <Lock size={18} />
        </span>
        <input
          id={id}
          type={showPassword ? 'text' : 'password'}
          aria-invalid={!!error}
          aria-describedby={error ? `${id}-err` : undefined}
          {...props}
        />
        <button
          type="button"
          className="ff-eye-btn"
          onClick={() => setShowPassword((prev) => !prev)}
          aria-label={showPassword ? 'Hide password' : 'Show password'}
          tabIndex={-1}
        >
          {showPassword ? <EyeOff size={18} /> : <Eye size={18} />}
        </button>
      </div>
      {error && (
        <p className="ff-err" id={`${id}-err`} role="alert">
          {error}
        </p>
      )}
    </div>
  );
};
