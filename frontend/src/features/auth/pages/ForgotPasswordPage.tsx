import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Mail, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext.js';
import { AuthInput } from '../components/AuthInput.js';
import { AuthButton } from '../components/AuthButton.js';
import { AuthAlert } from '../components/AuthAlert.js';

export const ForgotPasswordPage: React.FC = () => {
  const { forgotPassword } = useAuth();

  const [email, setEmail] = useState('');
  const [error, setError] = useState<string | null>(null);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError(null);

    if (!email.trim() || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      setError('Please enter a valid email address.');
      return;
    }

    setIsSubmitting(true);
    try {
      await forgotPassword(email.trim());
      setIsSubmitted(true);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to submit request. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <>
      <p className="ff-auth-eyebrow">RECOVER ACCESS</p>
      <h2>Forgot Password?</h2>

      {isSubmitted ? (
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
            Check Your Email
          </h3>
          <p className="ff-auth-sub">
            If an account is associated with <strong style={{ color: 'var(--ff-text)' }}>{email}</strong>, you will
            receive instructions to reset your password shortly.
          </p>

          <div style={{ marginTop: '28px' }}>
            <Link to="/login" className="ff-btn">
              Return to Sign In
            </Link>
          </div>
        </div>
      ) : (
        <>
          <p className="ff-auth-sub">
            Enter the email address associated with your FitForge account and we will send you a secure reset link.
          </p>

          <AuthAlert type="error" message={error} />

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
                if (error) setError(null);
              }}
              icon={<Mail size={18} />}
            />

            <AuthButton
              type="submit"
              isLoading={isSubmitting}
              loadingText="Sending reset link..."
              icon={<ArrowRight size={18} />}
            >
              Send Reset Link
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

export default ForgotPasswordPage;
