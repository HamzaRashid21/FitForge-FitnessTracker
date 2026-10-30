import { describe, it, expect, vi, beforeEach } from 'vitest';
import { render, screen, fireEvent, waitFor } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { AuthProvider } from '../../auth/context/AuthContext.js';
import { ThemeProvider } from '../../../app/providers/ThemeProvider.js';
import { OnboardingPage } from '../pages/OnboardingPage.js';

// Mock authService
vi.mock('../../auth/services/authService.js', () => ({
  authService: {
    me: vi.fn().mockResolvedValue({
      user: {
        id: 'usr-1',
        fullName: 'Hamza Rashid',
        email: 'hamza@example.com',
        role: 'User',
        subscriptionTier: 'Free',
        isEmailVerified: true,
        isOnboardingCompleted: false,
        accountStatus: 'active',
        createdAt: '2026-10-30T00:00:00.000Z',
        updatedAt: '2026-10-30T00:00:00.000Z',
      },
      accessToken: 'dummy-token',
    }),
    saveOnboarding: vi.fn().mockResolvedValue({
      user: {
        id: 'usr-1',
        fullName: 'Hamza Rashid',
        email: 'hamza@example.com',
        role: 'User',
        subscriptionTier: 'Free',
        isEmailVerified: true,
        isOnboardingCompleted: true,
        accountStatus: 'active',
        createdAt: '2026-10-30T00:00:00.000Z',
        updatedAt: '2026-10-30T00:00:00.000Z',
      },
    }),
    login: vi.fn(),
    register: vi.fn(),
    logout: vi.fn(),
    verifyEmail: vi.fn(),
    resendVerification: vi.fn(),
    forgotPassword: vi.fn(),
    resetPassword: vi.fn(),
    refreshAccessToken: vi.fn().mockRejectedValue(new Error('No refresh token')),
  },
}));

describe('OnboardingPage Component', () => {
  beforeEach(() => {
    localStorage.clear();
    vi.clearAllMocks();
  });

  const renderOnboarding = () =>
    render(
      <BrowserRouter>
        <ThemeProvider>
          <AuthProvider>
            <OnboardingPage />
          </AuthProvider>
        </ThemeProvider>
      </BrowserRouter>
    );

  it('renders Step 0 (Welcome) with Next button disabled until adult consent is checked', async () => {
    renderOnboarding();

    expect(screen.getByText('Welcome to FitForge')).toBeDefined();
    expect(screen.getByLabelText(/What should we call you/i)).toBeDefined();
    expect(screen.getByLabelText(/How did you hear about us/i)).toBeDefined();

    const nextBtn = screen.getByRole('button', { name: 'Next' }) as HTMLButtonElement;
    expect(nextBtn.disabled).toBe(true);

    const checkbox = screen.getByRole('checkbox');
    fireEvent.click(checkbox);
    expect(nextBtn.disabled).toBe(false);

    fireEvent.click(nextBtn);

    // Should advance to Step 1 (Goal)
    await waitFor(() => {
      expect(screen.getByText(/What’s your main/i)).toBeDefined();
      expect(screen.getByText('Muscle gain')).toBeDefined();
    });
  });

  it('allows selecting goal and experience then proceeding', async () => {
    renderOnboarding();

    // Step 0 -> Check adult box and click Next
    fireEvent.click(screen.getByRole('checkbox'));
    fireEvent.click(screen.getByRole('button', { name: 'Next' }));

    // Step 1 -> Select Muscle gain
    await waitFor(() => {
      expect(screen.getByText('Muscle gain')).toBeDefined();
    });
    const goalBtn = screen.getByText('Muscle gain').closest('button');
    if (goalBtn) fireEvent.click(goalBtn);

    const continueBtn = screen.getByRole('button', { name: 'Continue' });
    expect((continueBtn as HTMLButtonElement).disabled).toBe(false);
    fireEvent.click(continueBtn);

    // Step 2 -> Select Intermediate
    await waitFor(() => {
      expect(screen.getByText('Intermediate')).toBeDefined();
    });
    const expBtn = screen.getByText('Intermediate').closest('button');
    if (expBtn) fireEvent.click(expBtn);

    const continueBtn2 = screen.getByRole('button', { name: 'Continue' });
    fireEvent.click(continueBtn2);

    // Step 3 -> Equipment screen
    await waitFor(() => {
      expect(screen.getByText('What equipment do you have?')).toBeDefined();
    });
  });
});
