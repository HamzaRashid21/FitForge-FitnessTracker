import { createBrowserRouter } from 'react-router-dom';
import { WebsiteLayout } from '../../website/layouts/WebsiteLayout.js';
import HomePage from '../../website/pages/HomePage.js';
import AboutPage from '../../website/pages/AboutPage.js';
import PricingPage from '../../website/pages/PricingPage.js';
import ContactPage from '../../website/pages/ContactPage.js';
import ComingSoonPage from '../../website/pages/ComingSoonPage.js';
import NotFoundPage from '../../website/pages/NotFoundPage.js';

export const router = createBrowserRouter([
  {
    path: '/',
    element: <WebsiteLayout />,
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
