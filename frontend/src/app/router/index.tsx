import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout.js';
import { HomePage } from '../../pages/HomePage.js';
import { AboutPage } from '../../pages/AboutPage.js';
import { PricingPage } from '../../pages/PricingPage.js';
import { ContactPage } from '../../pages/ContactPage.js';
import { ComingSoonPage } from '../../pages/ComingSoonPage.js';
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
        path: '*',
        element: <NotFoundPage />,
      },
    ],
  },
]);
