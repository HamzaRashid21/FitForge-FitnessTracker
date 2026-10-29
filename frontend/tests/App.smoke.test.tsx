import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App.js';

describe('App Smoke Test — Phase 1 Public Website', () => {
  it('renders application shell, FitForge brand, and hero headline without crashing', () => {
    render(<App />);

    // Brand wordmark in navigation
    expect(screen.getAllByText(/FORGE/i)[0]).toBeInTheDocument();

    // Orisa index-7 split hero headline
    expect(
      screen.getByRole('heading', { name: /FORGE YOUR PHYSIQUE\. TRACK WITH PRECISION\./i })
    ).toBeInTheDocument();

    // Public navigation links
    expect(screen.getAllByRole('link', { name: /Pricing/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /About/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Contact/i })[0]).toBeInTheDocument();

    // Theme toggle button
    expect(screen.getByRole('button', { name: /switch to light mode/i })).toBeInTheDocument();
  });
});
