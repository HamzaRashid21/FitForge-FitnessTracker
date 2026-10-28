import { describe, it, expect, vi } from 'vitest';
import { render, screen, waitFor } from '@testing-library/react';
import App from '../src/App.js';

vi.mock('../src/services/healthService.js', () => ({
  fetchHealthStatus: vi.fn().mockResolvedValue({
    status: 'ok',
    timestamp: '2026-10-29T00:00:00.000Z',
    uptimeSeconds: 120,
    environment: 'test',
    version: '0.1.0',
    services: {
      database: {
        status: 'connected',
        readyState: 1,
      },
    },
  }),
}));

describe('App Smoke Test', () => {
  it('renders application shell and FitForge header without crashing', async () => {
    render(<App />);

    expect(screen.getByRole('heading', { name: /FitForge Fitness Platform/i })).toBeInTheDocument();
    expect(screen.getByText('FOUNDATION')).toBeInTheDocument();
    expect(screen.getByText('Phase 0 Active')).toBeInTheDocument();

    await waitFor(() => {
      expect(screen.getByText('System Health Verification')).toBeInTheDocument();
    });
  });
});
