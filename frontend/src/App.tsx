import React from 'react';
import { RouterProvider } from 'react-router-dom';
import { router } from './app/router/index.js';
import { AppProviders } from './app/providers/AppProviders.js';

export const App: React.FC = () => {
  return (
    <AppProviders>
      <RouterProvider router={router} />
    </AppProviders>
  );
};

export default App;
