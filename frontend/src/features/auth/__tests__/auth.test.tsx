import { describe, it, expect, vi } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { ThemeProvider } from '../../../app/providers/ThemeProvider.js';
import { AuthProvider } from '../context/AuthContext.js';
import LoginPage from '../pages/LoginPage.js';
import RegisterPage from '../pages/RegisterPage.js';
import ForgotPasswordPage from '../pages/ForgotPasswordPage.js';
import VerifyEmailPage from '../pages/VerifyEmailPage.js';
import { PasswordStrengthIndicator } from '../components/PasswordStrengthIndicator.js';
import AuthLayout from '../layouts/AuthLayout.js';

import { authService } from '../services/authService.js';

describe('Frontend Authentication Feature Tests', () => {
  it('renders LoginPage with email, password, remember me, and toggles password visibility', () => {
    vi.spyOn(authService, 'refresh').mockRejectedValue(new Error('No session'));
    render(
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <LoginPage />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(screen.getByLabelText(/Email Address/i)).toBeInTheDocument();
    const pwInput = screen.getByLabelText(/^Password$/i);
    expect(pwInput).toBeInTheDocument();
    expect(pwInput).toHaveAttribute('type', 'password');

    // Click visibility toggle
    const eyeBtn = screen.getByLabelText(/Show password/i);
    fireEvent.click(eyeBtn);
    expect(pwInput).toHaveAttribute('type', 'text');

    fireEvent.click(eyeBtn);
    expect(pwInput).toHaveAttribute('type', 'password');

    // Check submit button
    expect(screen.getByRole('button', { name: /Sign In/i })).toBeInTheDocument();
  });

  it('triggers inline validation on empty LoginPage submission', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <LoginPage />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    );

    const submitBtn = screen.getByRole('button', { name: /Sign In/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Email address is required/i)).toBeInTheDocument();
      expect(screen.getByText(/Password is required/i)).toBeInTheDocument();
    });
  });

  it('renders RegisterPage and detects mismatched passwords', async () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <RegisterPage />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    );

    fireEvent.change(screen.getByLabelText(/Full Name/i), { target: { value: 'Jane Doe' } });
    fireEvent.change(screen.getByLabelText(/Email Address/i), { target: { value: 'jane@example.com' } });
    fireEvent.change(screen.getByLabelText(/^Password/i), { target: { value: 'Password123!' } });
    fireEvent.change(screen.getByLabelText(/Confirm Password/i), { target: { value: 'Different123!' } });

    const submitBtn = screen.getByRole('button', { name: /Create Free Account/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Passwords do not match/i)).toBeInTheDocument();
    });
  });

  it('dynamically computes password strength in PasswordStrengthIndicator', () => {
    const { rerender } = render(<PasswordStrengthIndicator password="abc" />);
    expect(screen.getByText(/Weak/i)).toBeInTheDocument();

    rerender(<PasswordStrengthIndicator password="Pass1234" />);
    expect(screen.getByText(/Fair|Good/i)).toBeInTheDocument();

    rerender(<PasswordStrengthIndicator password="StrongPassword123!" />);
    expect(screen.getByText(/Strong password/i)).toBeInTheDocument();
  });

  it('renders ForgotPasswordPage and displays confirmation state after submission', async () => {
    vi.spyOn(authService, 'forgotPassword').mockResolvedValue(undefined);
    render(
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <ForgotPasswordPage />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    );

    const emailInput = screen.getByLabelText(/Email Address/i);
    fireEvent.change(emailInput, { target: { value: 'user@example.com' } });

    const submitBtn = screen.getByRole('button', { name: /Send Reset Link/i });
    fireEvent.click(submitBtn);

    await waitFor(() => {
      expect(screen.getByText(/Check Your Email/i)).toBeInTheDocument();
    });
  });

  it('renders VerifyEmailPage with instructions and resend action', () => {
    render(
      <MemoryRouter initialEntries={['/verify-email?email=athlete@example.com']}>
        <ThemeProvider>
          <AuthProvider>
            <VerifyEmailPage />
          </AuthProvider>
        </ThemeProvider>
      </MemoryRouter>
    );

    expect(screen.getByText(/Verify Your Email/i)).toBeInTheDocument();
    expect(screen.getByText(/athlete@example.com/i)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Resend Verification Email/i })).toBeInTheDocument();
  });

  it('renders AuthLayout with FitForge branding and theme toggling', () => {
    render(
      <BrowserRouter>
        <ThemeProvider>
          <AuthLayout />
        </ThemeProvider>
      </BrowserRouter>
    );

    expect(screen.getByText(/FITNESS TRACKER/i)).toBeInTheDocument();
    expect(screen.getByText(/TRACK • IMPROVE • ACHIEVE/i)).toBeInTheDocument();
    expect(screen.getByText(/Track Workouts/i)).toBeInTheDocument();
    expect(screen.getByText(/Nutrition/i)).toBeInTheDocument();

    // Theme buttons
    const lightBtn = screen.getByLabelText(/Switch to light theme/i);
    const darkBtn = screen.getByLabelText(/Switch to dark theme/i);
    expect(lightBtn).toBeInTheDocument();
    expect(darkBtn).toBeInTheDocument();

    fireEvent.click(lightBtn);
    expect(document.documentElement.getAttribute('data-theme')).toBe('light');

    fireEvent.click(darkBtn);
    expect(document.documentElement.getAttribute('data-theme')).toBe('dark');
  });
});
