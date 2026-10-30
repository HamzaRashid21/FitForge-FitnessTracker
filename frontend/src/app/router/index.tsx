import { createBrowserRouter } from 'react-router-dom';
import { PublicLayout } from '../../layouts/public/PublicLayout.js';
import HomePage from '../../features/public-site/pages/HomePage.js';
import AboutPage from '../../features/public-site/pages/AboutPage.js';
import PricingPage from '../../features/public-site/pages/PricingPage.js';
import ContactPage from '../../features/public-site/pages/ContactPage.js';
import ComingSoonPage from '../../features/public-site/pages/ComingSoonPage.js';
import NotFoundPage from '../../features/public-site/pages/NotFoundPage.js';

export const router = createBrowserRouter([
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
]);

export default router;
