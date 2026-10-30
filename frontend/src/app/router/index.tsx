import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from '../../layouts/public/PublicLayout.js';
import HomePage from '../../features/public-site/pages/HomePage.js';
import AboutPage from '../../features/public-site/pages/AboutPage.js';
import PricingPage from '../../features/public-site/pages/PricingPage.js';
import ContactPage from '../../features/public-site/pages/ContactPage.js';
import ComingSoonPage from '../../features/public-site/pages/ComingSoonPage.js';
import NotFoundPage from '../../features/public-site/pages/NotFoundPage.js';

import AuthLayout from '../../features/auth/layouts/AuthLayout.js';
import LoginPage from '../../features/auth/pages/LoginPage.js';
import RegisterPage from '../../features/auth/pages/RegisterPage.js';
import VerifyEmailPage from '../../features/auth/pages/VerifyEmailPage.js';
import ForgotPasswordPage from '../../features/auth/pages/ForgotPasswordPage.js';
import ResetPasswordPage from '../../features/auth/pages/ResetPasswordPage.js';
import OnboardingPage from '../../features/onboarding/pages/OnboardingPage.js';
import { PublicOnlyRoute } from '../../features/auth/components/PublicOnlyRoute.js';

export const router = createBrowserRouter([
  // Public Website Routes
  {
    path: '/',
    element: <PublicLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      {
        path: 'about',
        element: <AboutPage />,
      },
      {
        path: 'pricing',
        element: <PricingPage />,
      },
      {
        path: 'contact',
        element: <ContactPage />,
      },
      {
        path: 'coming-soon',
        element: <ComingSoonPage />,
      },
      {
        path: '404',
        element: <NotFoundPage />,
      },
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },

  // Dedicated Onboarding Route (Standalone Full-Viewport Wizard)
  {
    path: 'onboarding',
    element: <OnboardingPage />,
  },

  // Dedicated Authentication Routes (Phase 2)
  {
    element: <AuthLayout />,
    children: [
      {
        path: 'login',
        element: (
          <PublicOnlyRoute>
            <LoginPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: 'register',
        element: (
          <PublicOnlyRoute>
            <RegisterPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: 'verify-email',
        element: <VerifyEmailPage />,
      },
      {
        path: 'forgot-password',
        element: (
          <PublicOnlyRoute>
            <ForgotPasswordPage />
          </PublicOnlyRoute>
        ),
      },
      {
        path: 'reset-password',
        element: (
          <PublicOnlyRoute>
            <ResetPasswordPage />
          </PublicOnlyRoute>
        ),
      },
    ],
  },
]);

export default router;
