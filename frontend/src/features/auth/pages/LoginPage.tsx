import React, { useState } from 'react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck, Check } from 'lucide-react';
import { useAuth } from '../context/AuthContext.js';
import { AuthInput } from '../components/AuthInput.js';
import { PasswordInput } from '../components/PasswordInput.js';
import { AuthButton } from '../components/AuthButton.js';
import { AuthAlert } from '../components/AuthAlert.js';

export const LoginPage: React.FC = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const { login } = useAuth();

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [rememberMe, setRememberMe] = useState(true);
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [serverError, setServerError] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const newErrors: Record<string, string> = {};
    if (!email.trim()) {
      newErrors.email = 'Email address is required.';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      newErrors.email = 'Enter a valid email address.';
    }

    if (!password) {
      newErrors.password = 'Password is required.';
    } else if (password.length < 6) {
      newErrors.password = 'Password must be at least 6 characters.';
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
      const user = await login({ email: email.trim(), password, rememberMe });

      if (!user.isEmailVerified) {
        navigate('/verify-email');
        return;
      }

      if (user.role !== 'Admin' && !user.isOnboardingCompleted) {
        navigate('/onboarding');
        return;
      }

      const from = (location.state as { from?: { pathname?: string } })?.from?.pathname || '/';
      navigate(from, { replace: true });
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Invalid credentials. Please try again.';
      setServerError(message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <p className="ff-auth-eyebrow">WELCOME BACK</p>
      <h2>Sign In to FitForge</h2>
      <p className="ff-auth-sub">Continue your fitness journey. Track your progress, reach your goals.</p>

      <AuthAlert type="error" message={serverError} />

      <form onSubmit={handleSubmit} noValidate>
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
          autoComplete="current-password"
          placeholder="Enter your password"
          value={password}
          onChange={(e) => {
            setPassword(e.target.value);
            if (errors.password) setErrors((prev) => ({ ...prev, password: '' }));
          }}
          error={errors.password}
        />

        <div className="ff-row">
          <label className="ff-chk">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
            />
            <span className="ff-box">
              <Check size={14} />
            </span>
            Remember me
          </label>
          <Link to="/forgot-password" className="ff-auth-link">
            Forgot password?
          </Link>
        </div>

        <AuthButton
          type="submit"
          isLoading={isSubmitting}
          loadingText="Signing in..."
          icon={<ArrowRight size={18} />}
        >
          Sign In
        </AuthButton>
      </form>

      <div className="ff-or">OR CONTINUE WITH</div>

      <button
        type="button"
        className="ff-google-btn"
        onClick={() => setServerError('Google OAuth is an optional upcoming integration for Phase 3.')}
      >
        <svg viewBox="0 0 24 24" style={{ width: '20px', height: '20px' }}>
          <path
            fill="#4285F4"
            d="M23.5 12.3c0-.8-.1-1.6-.2-2.3H12v4.5h6.5a5.6 5.6 0 0 1-2.4 3.7v3h3.9c2.3-2.1 3.5-5.2 3.5-8.9z"
          />
          <path
            fill="#34A853"
            d="M12 24c3.2 0 6-1.1 8-2.9l-3.9-3c-1.1.7-2.5 1.2-4.1 1.2-3.1 0-5.800-2.1-6.700-5H1.300v3.100A12 12 0 0 0 12 24z"
          />
          <path
            fill="#FBBC05"
            d="M5.300 14.300a7.200 7.200 0 0 1 0-4.600V6.600H1.300a12 12 0 0 0 0 10.800l4-3.100z"
          />
          <path
            fill="#EA4335"
            d="M12 4.800c1.800 0 3.300.6 4.500 1.800l3.400-3.400A12 12 0 0 0 1.300 6.600l4 3.100C6.200 6.900 8.900 4.800 12 4.800z"
          />
        </svg>
        <span>Continue with Google</span>
      </button>

      <p className="ff-signup-prompt">
        Don&apos;t have an account?{' '}
        <Link to="/register" className="ff-auth-link">
          Create one
        </Link>
      </p>

      <div className="ff-safe-badge">
        <ShieldCheck size={15} />
        <span>Your data is safe with us</span>
      </div>
    </>
  );
};

export default LoginPage;
