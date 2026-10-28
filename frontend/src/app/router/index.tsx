import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout.js';
import { HomePage } from '../../pages/HomePage.js';
import { NotFoundPage } from '../../pages/NotFoundPage.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        index: true,
        element: <HomePage />,
      },
      // Architectural routes structure for future phases:
      // Phase 2: Auth routes (/auth/login, /auth/register, /auth/forgot-password)
      // Phase 3: Dashboard & Onboarding (/dashboard, /onboarding)
      // Phase 4: Exercises (/exercises)
      // Phase 5-6: Workouts (/workouts)
      // Phase 7: Nutrition (/nutrition)
      // Phase 8: Progress (/progress)
      // Phase 14: Subscriptions (/billing)
      // Phase 16: Admin (/admin)
      {
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
