import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Flame, Shield } from 'lucide-react';

export const CtaBanner: React.FC = () => {
  return (
    <div className="ff-container" style={{ paddingBottom: '6rem' }}>
      <div className="ff-cta-banner">
        <div
          style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            padding: '0.35rem 0.85rem',
            borderRadius: 'var(--radius-full)',
            backgroundColor: 'var(--color-primary-subtle)',
            color: 'var(--color-primary)',
            fontSize: '0.8125rem',
            fontWeight: 700,
            marginBottom: '1.25rem',
          }}
        >
          <Flame size={15} />
          <span>JOIN THOUSANDS OF DRIVEN ATHLETES</span>
        </div>

        <h2 className="ff-cta-title">Ready To Stop Guessing And Start Progressing?</h2>
        <p className="ff-cta-desc">
          Take full control of your strength training and nutrition. No fluff, no useless bells and
          whistles — just pure, data-backed progression.
        </p>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1rem',
            flexWrap: 'wrap',
          }}
        >
          <Link
            to="/pricing"
            className="ff-btn ff-btn-primary"
            style={{ padding: '1rem 2.25rem', fontSize: '1.05rem' }}
          >
            Start Your Journey Free <ArrowRight size={18} />
          </Link>
          <Link
            to="/about"
            className="ff-btn ff-btn-outline"
            style={{ padding: '1rem 2rem', fontSize: '1.05rem' }}
          >
            Explore Scientific Principles
          </Link>
        </div>

        <div
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            gap: '1.5rem',
            marginTop: '2rem',
            fontSize: '0.8125rem',
            color: 'var(--color-text-muted)',
          }}
        >
          <span style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}>
            <Shield size={14} color="var(--color-success)" /> No credit card required
          </span>
          <span>•</span>
          <span>Instant web setup</span>
          <span>•</span>
          <span>Cancel anytime</span>
        </div>
      </div>
    </div>
  );
};
