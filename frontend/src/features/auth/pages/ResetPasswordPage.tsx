import React, { useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext.js';
import { PasswordInput } from '../components/PasswordInput.js';
import { PasswordStrengthIndicator } from '../components/PasswordStrengthIndicator.js';
import { AuthButton } from '../components/AuthButton.js';
import { AuthAlert } from '../components/AuthAlert.js';

export const ResetPasswordPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { resetPassword } = useAuth();

  const token = searchParams.get('token') || '';

  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSuccess, setIsSuccess] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!token) {
      newErrors.token = 'Missing reset token. Please request a new password reset link.';
    }

    if (!password) {
      newErrors.password = 'New password is required.';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters long.';
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
      newErrors.password = 'Must include uppercase, lowercase, and numbers.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your new password.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setServerError(null);

    if (!validate()) return;

    setIsSubmitting(true);
    try {
      await resetPassword({
        token,
        password,
        confirmPassword,
      });
      setIsSuccess(true);
    } catch (err) {
      setServerError(
        err instanceof Error ? err.message : 'Unable to reset password. The link may have expired.'
      );
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <p className="ff-auth-eyebrow">NEW CREDENTIALS</p>
      <h2>Reset Password</h2>

      {isSuccess ? (
        <div style={{ textAlign: 'center', padding: '16px 0' }}>
          <div
            style={{
              width: '64px',
              height: '64px',
              borderRadius: '50%',
              background: 'rgba(16, 185, 129, 0.12)',
              border: '1px solid rgba(16, 185, 129, 0.35)',
              color: '#10b981',
              display: 'grid',
              placeItems: 'center',
              margin: '0 auto 20px',
            }}
          >
            <CheckCircle2 size={32} />
          </div>
          <h3 style={{ fontSize: '20px', color: 'var(--ff-text)', marginBottom: '8px' }}>
            Password Reset Successful!
          </h3>
          <p className="ff-auth-sub">
            Your password has been securely updated. You can now sign in with your new password.
          </p>

          <div style={{ marginTop: '28px' }}>
            <AuthButton onClick={() => navigate('/login')} icon={<ArrowRight size={18} />}>
              Sign In Now
            </AuthButton>
          </div>
        </div>
      ) : (
        <>
          <p className="ff-auth-sub">Choose a strong, unique password to secure your FitForge account.</p>

          <AuthAlert type="error" message={serverError || errors.token || null} />

          <form onSubmit={handleSubmit} noValidate>
            <PasswordInput
              id="password"
              label="New Password"
              autoComplete="new-password"
              placeholder="At least 8 characters with numbers"
              value={password}
              onChange={(e) => {
                setPassword(e.target.value);
                if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
              }}
              error={errors.password}
            />

            <PasswordStrengthIndicator password={password} />

            <PasswordInput
              id="confirmPassword"
              label="Confirm New Password"
              autoComplete="new-password"
              placeholder="Re-enter your new password"
              value={confirmPassword}
              onChange={(e) => {
                setConfirmPassword(e.target.value);
                if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: '' }));
              }}
              error={errors.confirmPassword}
            />

            <AuthButton
              type="submit"
              isLoading={isSubmitting}
              loadingText="Updating password..."
              icon={<ArrowRight size={18} />}
            >
              Reset Password
            </AuthButton>
          </form>

          <p className="ff-signup-prompt">
            Remember your password?{' '}
            <Link to="/login" className="ff-auth-link">
              Sign In
            </Link>
          </p>
        </>
      )}

      <div className="ff-safe-badge">
        <ShieldCheck size={15} />
        <span>Your data is safe with us</span>
      </div>
    </>
  );
};

export default ResetPasswordPage;
