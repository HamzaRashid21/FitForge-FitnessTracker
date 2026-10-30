import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { User, Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext.js';
import { AuthInput } from '../components/AuthInput.js';
import { PasswordInput } from '../components/PasswordInput.js';
import { PasswordStrengthIndicator } from '../components/PasswordStrengthIndicator.js';
import { AuthButton } from '../components/AuthButton.js';
import { AuthAlert } from '../components/AuthAlert.js';

export const RegisterPage: React.FC = () => {
  const navigate = useNavigate();
  const { register } = useAuth();

  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [termsAccepted, setTermsAccepted] = useState(false);

  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};

    if (!fullName.trim()) {
      newErrors.fullName = 'Full name is required.';
    } else if (fullName.trim().length < 2) {
      newErrors.fullName = 'Full name must be at least 2 characters.';
    }

    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Please enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 8) {
      newErrors.password = 'Password must be at least 8 characters.';
    } else if (!/[A-Z]/.test(password) || !/[a-z]/.test(password) || !/[0-9]/.test(password)) {
      newErrors.password = 'Must include uppercase, lowercase, and numbers.';
    }

    if (!confirmPassword) {
      newErrors.confirmPassword = 'Please confirm your password.';
    } else if (password !== confirmPassword) {
      newErrors.confirmPassword = 'Passwords do not match.';
    }

    if (!termsAccepted) {
      newErrors.terms = 'You must agree to the Terms of Service & Privacy Policy.';
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
      await register({
        fullName: fullName.trim(),
        email: email.trim(),
        password,
        confirmPassword,
        termsAccepted,
      });

      // Redirect to verification notice page with email query param
      navigate(`/verify-email?email=${encodeURIComponent(email.trim())}`);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Registration failed. Please check your information.';
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <p className="ff-auth-eyebrow">START TODAY</p>
      <h2>Create Your Account</h2>
      <p className="ff-auth-sub">Join thousands of athletes transforming their bodies and minds with FitForge.</p>

      <AuthAlert type="error" message={serverError} />

      <form onSubmit={handleSubmit} noValidate>
        <AuthInput
          id="fullName"
          label="Full Name"
          type="text"
          autoComplete="name"
          placeholder="e.g. John Doe"
          value={fullName}
          onChange={(e) => {
            setFullName(e.target.value);
            if (errors.fullName) setErrors((prev) => ({ ...prev, fullName: '' }));
          }}
          error={errors.fullName}
          icon={<User size={18} />}
        />

        <AuthInput
          id="email"
          label="Email Address"
          type="email"
          inputMode="email"
          autoComplete="email"
          placeholder="you@example.com"
          value={email}
          onChange={(e) => {
            setEmail(e.target.value);
            if (errors.email) setErrors((prev) => ({ ...prev, email: '' }));
          }}
          error={errors.email}
          icon={<Mail size={18} />}
        />

        <PasswordInput
          id="password"
          label="Password"
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
          label="Confirm Password"
          autoComplete="new-password"
          placeholder="Repeat your password"
          value={confirmPassword}
          onChange={(e) => {
            setConfirmPassword(e.target.value);
            if (errors.confirmPassword) setErrors((prev) => ({ ...prev, confirmPassword: '' }));
          }}
          error={errors.confirmPassword}
        />

        <div className="ff-field" style={{ marginTop: '16px' }}>
          <label className="ff-chk" style={{ alignItems: 'flex-start' }}>
            <input
              type="checkbox"
              id="terms"
              checked={termsAccepted}
              onChange={(e) => {
                setTermsAccepted(e.target.checked);
                if (errors.terms) setErrors((prev) => ({ ...prev, terms: '' }));
              }}
            />
            <span className="ff-box" style={{ marginTop: '2px' }}>
              <Check size={14} />
            </span>
            <span style={{ fontSize: '13px', lineHeight: 1.45, color: 'var(--ff-muted)' }}>
              I agree to the FitForge{' '}
              <a href="/terms" target="_blank" rel="noreferrer" className="ff-auth-link">
                Terms of Service
              </a>{' '}
              and{' '}
              <a href="/privacy" target="_blank" rel="noreferrer" className="ff-auth-link">
                Privacy Policy
              </a>
            </span>
          </label>
          {errors.terms && (
            <p className="ff-err" role="alert">
              {errors.terms}
            </p>
          )}
        </div>

        <AuthButton
          type="submit"
          isLoading={isSubmitting}
          loadingText="Creating account..."
          icon={<ArrowRight size={18} />}
        >
          Create Free Account
        </AuthButton>
      </form>

      <p className="ff-signup-prompt">
        Already have an account?{' '}
        <Link to="/login" className="ff-auth-link">
          Sign In
        </Link>
      </p>

      <div className="ff-safe-badge">
        <ShieldCheck size={15} />
        <span>Your data is safe with us</span>
      </div>
    </>
  );
};

export default RegisterPage;
