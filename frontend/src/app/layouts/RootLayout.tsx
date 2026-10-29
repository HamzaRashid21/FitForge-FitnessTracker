import React from 'react';
import { Outlet } from 'react-router-dom';
import { Navbar } from './Navbar.js';
import { Footer } from './Footer.js';

export const RootLayout: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
      <Navbar />
      <main style={{ flex: 1, display: 'flex', flexDirection: 'column' }}>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export const PublicLayout = RootLayout;
