import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowLeft, Flame, AlertCircle } from 'lucide-react';

export const NotFoundPage: React.FC = () => {
  return (
    <div
      style={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '70vh',
        padding: '3rem 1.5rem',
        textAlign: 'center',
      }}
    >
      <div
        style={{
          width: '4rem',
          height: '4rem',
          borderRadius: '50%',
          backgroundColor: 'var(--color-primary-subtle)',
          color: 'var(--color-primary)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          marginBottom: '1.5rem',
        }}
      >
        <AlertCircle size={36} />
      </div>

      <div
        style={{
          fontSize: '5rem',
          fontWeight: 900,
          lineHeight: 1,
          letterSpacing: '-0.04em',
          color: 'var(--color-primary)',
          marginBottom: '1rem',
        }}
      >
        404
      </div>

      <h1
        style={{
          fontSize: '2rem',
          fontWeight: 800,
          color: 'var(--color-text-primary)',
          marginBottom: '1rem',
        }}
      >
        404 — Page Not Found
      </h1>

      <p
        style={{
          fontSize: '1.1rem',
          color: 'var(--color-text-secondary)',
          maxWidth: '520px',
          lineHeight: 1.6,
          marginBottom: '2.5rem',
        }}
      >
        Looks like you missed this rep! The route you are trying to access doesn’t exist or has been
        moved in the current architecture.
      </p>

      <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap', justifyContent: 'center' }}>
        <Link
          to="/"
          className="ff-btn ff-btn-primary"
          style={{ padding: '0.875rem 2rem' }}
          role="button"
        >
          <ArrowLeft size={16} /> Back to Home
        </Link>
        <Link to="/contact" className="ff-btn ff-btn-outline" style={{ padding: '0.875rem 1.75rem' }}>
          <Flame size={16} /> Contact Support
        </Link>
      </div>
    </div>
  );
};
