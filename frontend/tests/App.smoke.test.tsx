import { describe, it, expect } from 'vitest';
import { render, screen } from '@testing-library/react';
import App from '../src/App.js';

describe('App Smoke Test — Phase 1 Public Website', () => {
  it('renders application shell, brand logo, and navigation without crashing', () => {
    render(<App />);

    // Brand wordmark in navigation
    expect(screen.getAllByText(/FitForge/i)[0]).toBeInTheDocument();

    // Public navigation links
    expect(screen.getAllByRole('link', { name: /Pricing/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /About/i })[0]).toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /Contact/i })[0]).toBeInTheDocument();

    // Theme toggle switcher
    expect(screen.getByRole('button', { name: /Toggle dark\/light mode/i })).toBeInTheDocument();
  });
});
