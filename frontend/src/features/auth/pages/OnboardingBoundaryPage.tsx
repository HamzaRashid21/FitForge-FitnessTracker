import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Sparkles, CheckCircle2, LogOut, ArrowRight } from 'lucide-react';
import { useAuth } from '../context/AuthContext.js';
import { AuthButton } from '../components/AuthButton.js';

export const OnboardingBoundaryPage: React.FC = () => {
  const { user, logout } = useAuth();
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate('/login');
  };

  return (
    <div style={{ textAlign: 'center', padding: '12px 0' }}>
      <p className="ff-auth-eyebrow">PHASE 2 &rarr; PHASE 3 INTEGRATION BOUNDARY</p>
      <h2>Welcome, {user?.fullName || 'Athlete'}!</h2>

      <div
        style={{
          width: '60px',
          height: '60px',
          borderRadius: '50%',
          background: 'rgba(240, 38, 31, 0.12)',
          border: '1px solid rgba(240, 38, 31, 0.35)',
          color: '#f0261f',
          display: 'grid',
          placeItems: 'center',
          margin: '0 auto 20px',
        }}
      >
        <Sparkles size={28} />
      </div>

      <div
        style={{
          background: 'var(--ff-field)',
          border: '1px solid var(--ff-field-line)',
          borderRadius: '12px',
          padding: '24px',
          marginBottom: '28px',
          textAlign: 'left',
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px', marginBottom: '14px' }}>
          <CheckCircle2 size={18} color="#10b981" />
          <strong style={{ color: 'var(--ff-text)', fontSize: '14.5px' }}>Account Status: Verified</strong>
        </div>

        <p style={{ fontSize: '13.5px', color: 'var(--ff-muted)', lineHeight: 1.6, margin: '0 0 16px' }}>
          Your email address (<strong>{user?.email}</strong>) has been verified and your Phase 2 authentication
          session is active.
        </p>

        <div
          style={{
            borderTop: '1px solid var(--ff-card-line)',
            paddingTop: '16px',
            fontSize: '13px',
            color: 'var(--ff-muted)',
            lineHeight: 1.5,
          }}
        >
          <strong>Phase 3 Scope Notice:</strong> As specified in the roadmap, the complete interactive Onboarding
          Wizard (fitness goals, body measurements, target metrics) will be implemented in Phase 3.
        </div>
      </div>

      <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
        <AuthButton onClick={() => navigate('/')} icon={<ArrowRight size={18} />}>
          Explore Public Website
        </AuthButton>

        <button type="button" className="ff-btn-secondary" onClick={handleLogout}>
          <LogOut size={16} />
          <span>Sign Out</span>
        </button>
      </div>
    </div>
  );
};

export default OnboardingBoundaryPage;
