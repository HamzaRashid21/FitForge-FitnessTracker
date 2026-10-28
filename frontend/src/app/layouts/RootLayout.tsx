import React from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import { Activity, Shield, Terminal } from 'lucide-react';
import { Container } from '../../components/ui/Container.js';
import { Badge } from '../../components/ui/Badge.js';

export const RootLayout: React.FC = () => {
  const location = useLocation();

  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      {/* Top Application Header */}
      <header
        style={{
          borderBottom: '1px solid var(--color-border)',
          backgroundColor: 'rgba(15, 23, 42, 0.85)',
          backdropFilter: 'blur(8px)',
          position: 'sticky',
          top: 0,
          zIndex: 50,
        }}
      >
        <Container size="xl">
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              height: '4rem',
            }}
          >
            {/* Brand Title */}
            <Link
              to="/"
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.625rem',
                textDecoration: 'none',
              }}
            >
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.25rem',
                  height: '2.25rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-primary-subtle)',
                  color: 'var(--color-primary)',
                  border: '1px solid rgba(16, 185, 129, 0.25)',
                }}
              >
                <Activity size={20} />
              </div>
              <div>
                <span
                  style={{
                    fontSize: '1.25rem',
                    fontWeight: 700,
                    letterSpacing: '-0.025em',
                    color: 'var(--color-text-primary)',
                  }}
                >
                  FitForge
                </span>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-primary)',
                    marginLeft: '0.375rem',
                    fontWeight: 600,
                  }}
                >
                  FOUNDATION
                </span>
              </div>
            </Link>

            {/* Navigation & Status Indicators */}
            <nav style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
              <Link
                to="/"
                style={{
                  fontSize: '0.875rem',
                  fontWeight: 500,
                  color:
                    location.pathname === '/'
                      ? 'var(--color-primary)'
                      : 'var(--color-text-secondary)',
                }}
              >
                Overview
              </Link>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.5rem',
                  borderLeft: '1px solid var(--color-border)',
                  paddingLeft: '1.5rem',
                }}
              >
                <Badge variant="primary">Phase 0 Active</Badge>
              </div>
            </nav>
          </div>
        </Container>
      </header>

      {/* Main Page Area */}
      <main style={{ flex: 1, padding: 'var(--space-8) 0' }}>
        <Outlet />
      </main>

      {/* Footer */}
      <footer
        style={{
          borderTop: '1px solid var(--color-border)',
          backgroundColor: 'var(--color-bg-surface)',
          padding: 'var(--space-6) 0',
          marginTop: 'auto',
        }}
      >
        <Container size="xl">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              fontSize: '0.8125rem',
              color: 'var(--color-text-muted)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Shield size={16} />
              <span>
                FitForge Fitness Tracker &copy; {new Date().getFullYear()} — Production Foundation
              </span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
              <span style={{ display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                <Terminal size={14} /> MERN + TypeScript Architecture
              </span>
            </div>
          </div>
        </Container>
      </footer>
    </div>
  );
};
