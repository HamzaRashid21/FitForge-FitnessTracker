import React, { useEffect, useState } from 'react';
import { Link, useSearchParams, useNavigate } from 'react-router-dom';
import { MailCheck, RefreshCw, ArrowRight, ShieldCheck, CheckCircle2 } from 'lucide-react';
import { useAuth } from '../context/AuthContext.js';
import { AuthButton } from '../components/AuthButton.js';
import { AuthAlert } from '../components/AuthAlert.js';

export const VerifyEmailPage: React.FC = () => {
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();
  const { user, verifyEmail, resendVerification } = useAuth();

  const tokenParam = searchParams.get('token');
  const emailParam = searchParams.get('email') || user?.email || '';

  const [verifying, setVerifying] = useState(false);
  const [verifiedSuccess, setVerifiedSuccess] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [successMessage, setSuccessMessage] = useState<string | null>(null);

  // 1-minute cooldown timer
  const [cooldown, setCooldown] = useState(0);
  const [resending, setResending] = useState(false);

  // Auto-verify if token is present in URL
  useEffect(() => {
    if (!tokenParam) return;

    let isMounted = true;
    async function executeVerification() {
      setVerifying(true);
      setError(null);
      try {
        await verifyEmail(tokenParam!);
        if (isMounted) {
          setVerifiedSuccess(true);
          setSuccessMessage('Your email address has been successfully verified! You may now sign in.');
        }
      } catch (err) {
        if (isMounted) {
          setError(
            err instanceof Error
              ? err.message
              : 'Verification token is invalid or has expired. Please request a new link.'
          );
        }
      } finally {
        if (isMounted) setVerifying(false);
      }
    }

    executeVerification();

    return () => {
      isMounted = false;
    };
  }, [tokenParam, verifyEmail]);

  // Cooldown countdown
  useEffect(() => {
    if (cooldown <= 0) return;
    const timer = setInterval(() => {
      setCooldown((prev) => (prev > 0 ? prev - 1 : 0));
    }, 1000);
    return () => clearInterval(timer);
  }, [cooldown]);

  const handleResend = async () => {
    if (!emailParam) {
      setError('Please provide an email address to resend the verification link.');
      return;
    }

    setResending(true);
    setError(null);
    setSuccessMessage(null);

    try {
      await resendVerification(emailParam);
      setSuccessMessage('A fresh verification link has been sent to your email address.');
      setCooldown(60); // 1-minute cooldown
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Unable to resend verification email.');
    } finally {
      setResending(false);
    }
  };

  return (
    <>
      <p className="ff-auth-eyebrow">ACCOUNT SECURITY</p>
      <h2>Verify Your Email</h2>

      {verifiedSuccess ? (
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
            Email Verified!
          </h3>
          <p className="ff-auth-sub">{successMessage}</p>

          <AuthButton onClick={() => navigate('/login')} icon={<ArrowRight size={18} />}>
            Sign In to Continue
          </AuthButton>
        </div>
      ) : verifying ? (
        <div style={{ textAlign: 'center', padding: '32px 0' }}>
          <div
            style={{
              width: '48px',
              height: '48px',
              border: '3px solid rgba(240, 38, 31, 0.2)',
              borderTopColor: '#f0261f',
              borderRadius: '50%',
              animation: 'spin 0.8s linear infinite',
              margin: '0 auto 20px',
            }}
          />
          <p style={{ color: 'var(--ff-text)', fontSize: '16px', fontWeight: 600 }}>
            Verifying your security token...
          </p>
          <p className="ff-auth-sub">Please wait while we confirm your credentials.</p>
        </div>
      ) : (
        <>
          <p className="ff-auth-sub">
            We sent a verification link to{' '}
            <strong style={{ color: 'var(--ff-text)' }}>{emailParam || 'your email'}</strong>. Please check your inbox
            and click the link to activate your FitForge account.
          </p>

          <AuthAlert type="error" message={error} />
          <AuthAlert type="success" message={successMessage} />

          <div
            style={{
              background: 'var(--ff-field)',
              border: '1px solid var(--ff-field-line)',
              borderRadius: '10px',
              padding: '20px',
              marginBottom: '24px',
              display: 'flex',
              gap: '14px',
              alignItems: 'center',
            }}
          >
            <div
              style={{
                width: '44px',
                height: '44px',
                borderRadius: '50%',
                background: 'var(--ff-red-soft)',
                color: 'var(--ff-red)',
                display: 'grid',
                placeItems: 'center',
                flexShrink: 0,
              }}
            >
              <MailCheck size={22} />
            </div>
            <div style={{ fontSize: '13px', lineHeight: 1.5, color: 'var(--ff-muted)' }}>
              Didn&apos;t receive the email? Check your spam folder or request a new verification link below.
            </div>
          </div>

          <AuthButton
            type="button"
            onClick={handleResend}
            disabled={cooldown > 0 || resending}
            isLoading={resending}
            loadingText="Sending email..."
            icon={<RefreshCw size={17} />}
          >
            {cooldown > 0 ? `Resend available in ${cooldown}s` : 'Resend Verification Email'}
          </AuthButton>

          <div style={{ marginTop: '16px', textAlign: 'center' }}>
            <Link to="/login" className="ff-auth-link" style={{ fontSize: '13.5px' }}>
              &larr; Back to Sign In
            </Link>
          </div>
        </>
      )}

      <div className="ff-safe-badge" style={{ marginTop: '28px' }}>
        <ShieldCheck size={15} />
        <span>Your data is safe with us</span>
      </div>
    </>
  );
};

export default VerifyEmailPage;
