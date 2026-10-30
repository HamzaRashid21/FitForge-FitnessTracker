import React from 'react';

export interface PasswordStrengthIndicatorProps {
  password: string;
}

export const PasswordStrengthIndicator: React.FC<PasswordStrengthIndicatorProps> = ({ password }) => {
  if (!password) return null;

  const hasMinLength = password.length >= 8;
  const hasLower = /[a-z]/.test(password);
  const hasUpper = /[A-Z]/.test(password);
  const hasNumber = /[0-9]/.test(password);
  const hasSpecial = /[^a-zA-Z0-9]/.test(password);

  const score = [hasMinLength, hasLower, hasUpper, hasNumber, hasSpecial].filter(Boolean).length;

  let level: 'weak' | 'fair' | 'good' | 'strong' = 'weak';
  let label = 'Weak';

  if (score <= 2) {
    level = 'weak';
    label = 'Weak (Needs upper, lower, number, special)';
  } else if (score === 3) {
    level = 'fair';
    label = 'Fair (Add special characters or length)';
  } else if (score === 4) {
    level = 'good';
    label = 'Good password';
  } else {
    level = 'strong';
    label = 'Strong password';
  }

  return (
    <div className="ff-strength-meter" aria-live="polite">
      <div className="ff-strength-bars">
        <div className={`ff-strength-bar ${score >= 1 ? `active-${level}` : ''}`} />
        <div className={`ff-strength-bar ${score >= 2 ? `active-${level}` : ''}`} />
        <div className={`ff-strength-bar ${score >= 3 ? `active-${level}` : ''}`} />
        <div className={`ff-strength-bar ${score >= 4 ? `active-${level}` : ''}`} />
      </div>
      <div className="ff-strength-label">
        <span>Security</span>
        <span>{label}</span>
      </div>
    </div>
  );
};
