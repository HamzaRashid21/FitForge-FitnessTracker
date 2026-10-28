import React, { useState } from 'react';
import {
  Server,
  Database,
  Layers,
  Cpu,
  RefreshCw,
  CheckCircle2,
  AlertCircle,
  Clock,
  Sparkles,
} from 'lucide-react';
import { Container } from '../components/ui/Container.js';
import { Card } from '../components/ui/Card.js';
import { Button } from '../components/ui/Button.js';
import { Badge } from '../components/ui/Badge.js';
import { Input } from '../components/ui/Input.js';
import { Alert } from '../components/feedback/Alert.js';
import { Spinner } from '../components/feedback/Spinner.js';
import { useHealthCheck } from '../hooks/useHealthCheck.js';
import { formatUptime, formatDate } from '../utils/formatters.js';

export const HomePage: React.FC = () => {
  const { data: health, isLoading, error, refetch } = useHealthCheck(true);
  const [testInput, setTestInput] = useState('');

  return (
    <Container size="xl">
      <div style={{ display: 'flex', flexDirection: 'column', gap: 'var(--space-8)' }}>
        {/* Hero / Overview Banner */}
        <div style={{ maxWidth: '800px' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              gap: '0.5rem',
              marginBottom: 'var(--space-3)',
            }}
          >
            <Badge variant="primary">Phase 0: Foundation & Architecture</Badge>
            <Badge variant="default">TypeScript Strict Mode</Badge>
          </div>
          <h1
            style={{
              fontSize: '2.5rem',
              fontWeight: 800,
              lineHeight: 1.15,
              color: 'var(--color-text-primary)',
              letterSpacing: '-0.03em',
              marginBottom: 'var(--space-4)',
            }}
          >
            FitForge Fitness Platform
          </h1>
          <p
            style={{
              fontSize: '1.125rem',
              color: 'var(--color-text-secondary)',
              lineHeight: 1.6,
            }}
          >
            Production-oriented full-stack MERN architecture established with strict separation of
            responsibilities, centralized configuration, and modular scalability.
          </p>
        </div>

        {/* Live Backend & Database Health Check Panel */}
        <Card variant="elevated">
          <div
            style={{
              display: 'flex',
              flexWrap: 'wrap',
              alignItems: 'center',
              justifyContent: 'space-between',
              gap: '1rem',
              borderBottom: '1px solid var(--color-border)',
              paddingBottom: 'var(--space-4)',
              marginBottom: 'var(--space-6)',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  width: '2.5rem',
                  height: '2.5rem',
                  borderRadius: 'var(--radius-md)',
                  backgroundColor: 'var(--color-bg-subtle)',
                  color: 'var(--color-primary)',
                }}
              >
                <Server size={22} />
              </div>
              <div>
                <h2 style={{ fontSize: '1.25rem', fontWeight: 600 }}>System Health Verification</h2>
                <p style={{ fontSize: '0.875rem', color: 'var(--color-text-secondary)' }}>
                  Live API endpoint: <code>/api/v1/health</code>
                </p>
              </div>
            </div>

            <Button
              variant="outline"
              size="sm"
              isLoading={isLoading}
              leftIcon={<RefreshCw size={14} />}
              onClick={() => void refetch()}
            >
              Check Health
            </Button>
          </div>

          {isLoading && !health && (
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                padding: '2rem 0',
                gap: '0.75rem',
              }}
            >
              <Spinner size="md" color="var(--color-primary)" />
              <span style={{ color: 'var(--color-text-secondary)' }}>
                Querying backend health endpoint...
              </span>
            </div>
          )}

          {error && (
            <Alert type="danger" title="Backend Connection Issue">
              {error}. Ensure the Express backend server is running on port 5000 and accessible via
              CORS.
            </Alert>
          )}

          {health && (
            <div
              style={{
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))',
                gap: 'var(--space-4)',
              }}
            >
              {/* API Status */}
              <div
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    Backend API
                  </span>
                  {health.status === 'ok' ? (
                    <Badge variant="success">OK (200)</Badge>
                  ) : (
                    <Badge variant="warning">DEGRADED (503)</Badge>
                  )}
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  <CheckCircle2 size={18} color="var(--color-success)" />
                  <span style={{ fontWeight: 600, fontSize: '1rem' }}>v{health.version}</span>
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Environment: {health.environment}
                </span>
              </div>

              {/* Database Status */}
              <div
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    Database (MongoDB)
                  </span>
                  <Database size={16} color="var(--color-text-secondary)" />
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                  {health.services.database.status === 'connected' ? (
                    <>
                      <CheckCircle2 size={18} color="var(--color-success)" />
                      <span style={{ fontWeight: 600, color: 'var(--color-success)' }}>
                        Connected
                      </span>
                    </>
                  ) : (
                    <>
                      <AlertCircle size={18} color="var(--color-warning)" />
                      <span style={{ fontWeight: 600, color: 'var(--color-warning)' }}>
                        {health.services.database.status}
                      </span>
                    </>
                  )}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Mongoose State: {health.services.database.readyState}
                </span>
              </div>

              {/* Uptime */}
              <div
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    Server Uptime
                  </span>
                  <Clock size={16} color="var(--color-text-secondary)" />
                </div>
                <div style={{ fontWeight: 600, fontSize: '1rem' }}>
                  {formatUptime(health.uptimeSeconds)}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  Active node process
                </span>
              </div>

              {/* Report Time */}
              <div
                style={{
                  backgroundColor: 'var(--color-bg-surface)',
                  padding: 'var(--space-4)',
                  borderRadius: 'var(--radius-md)',
                  border: '1px solid var(--color-border)',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                    marginBottom: '0.5rem',
                  }}
                >
                  <span style={{ fontSize: '0.8125rem', color: 'var(--color-text-muted)' }}>
                    Last Check
                  </span>
                  <Cpu size={16} color="var(--color-text-secondary)" />
                </div>
                <div style={{ fontWeight: 500, fontSize: '0.875rem' }}>
                  {formatDate(health.timestamp)}
                </div>
                <span style={{ fontSize: '0.75rem', color: 'var(--color-text-muted)' }}>
                  ISO 8601 UTC
                </span>
              </div>
            </div>
          )}
        </Card>

        {/* Architectural Principles Cards */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))',
            gap: 'var(--space-6)',
          }}
        >
          {/* Roles & Subscriptions */}
          <Card>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: 'var(--space-3)',
              }}
            >
              <Layers size={18} color="var(--color-primary)" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>Access & Entitlements Model</h3>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Application roles and subscription tiers are decoupled architectural concepts.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  Mandatory Roles
                </span>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <Badge variant="primary">Admin</Badge>
                  <Badge variant="default">User</Badge>
                </div>
              </div>
              <div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    color: 'var(--color-text-muted)',
                    textTransform: 'uppercase',
                  }}
                >
                  Subscription Tiers
                </span>
                <div style={{ display: 'flex', gap: '0.5rem', marginTop: '0.25rem' }}>
                  <Badge variant="info">Free</Badge>
                  <Badge variant="warning">Premium</Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* UI Component Foundation Demo */}
          <Card>
            <div
              style={{
                display: 'flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginBottom: 'var(--space-3)',
              }}
            >
              <Sparkles size={18} color="var(--color-primary)" />
              <h3 style={{ fontSize: '1.125rem', fontWeight: 600 }}>UI Component Foundation</h3>
            </div>
            <p
              style={{
                fontSize: '0.875rem',
                color: 'var(--color-text-secondary)',
                marginBottom: 'var(--space-4)',
              }}
            >
              Accessible, restrained, dark-themed UI system with unified design tokens.
            </p>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              <Input
                placeholder="Interactive input verification..."
                value={testInput}
                onChange={(e) => setTestInput(e.target.value)}
                helperText="Verified responsive input component"
              />
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                <Button variant="primary" size="sm">
                  Primary
                </Button>
                <Button variant="secondary" size="sm">
                  Secondary
                </Button>
                <Button variant="outline" size="sm">
                  Outline
                </Button>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </Container>
  );
};
