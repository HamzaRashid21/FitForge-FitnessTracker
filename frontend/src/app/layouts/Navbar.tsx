import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Sun, Moon } from 'lucide-react';
import { useTheme } from '../providers/ThemeProvider.js';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMenuOpen, setIsMenuOpen] = useState(true); // default open on desktop

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
    { label: 'Coming Soon', href: '/coming-soon' },
  ];

  const isActive = (href: string) => location.pathname === href;

  return (
    <header className={`header-7 ${isMenuOpen ? 'is-menu-open' : ''}`}>
      <div className="at-header-area at-header-spacing header-transparent">
        <div className="container-2200 px-lg-5 px-3">
          <div className="row align-items-center">
            {/* Logo */}
            <div className="col-xl-2 col-6">
              <div className="at-header-logo">
                <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none">
                  <div
                    style={{
                      width: '32px',
                      height: '32px',
                      borderRadius: '8px',
                      background: 'linear-gradient(135deg, #FF5500, #C7260A)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      color: '#fff',
                      boxShadow: '0 2px 8px rgba(255, 85, 0, 0.4)',
                    }}
                  >
                    <Flame size={18} />
                  </div>
                  <p className="h6 fw-700 fz-24 text-white mb-0" style={{ letterSpacing: '-0.02em' }}>
                    FIT<span style={{ color: 'var(--at-theme-primary, #FF5500)' }}>FORGE</span>
                  </p>
                </Link>
              </div>
            </div>

            {/* Menu & Actions */}
            <div className="col-xl-10 col-6">
              <div className="at-header-right gap-3 d-flex justify-content-end align-items-center">
                {/* Desktop Menu */}
                <div
                  id="header7Nav"
                  className="at-main-menu menu-light d-inline-flex justify-content-center style-1"
                  aria-label="Primary navigation"
                >
                  <nav className="at-mobile-menu-active">
                    <ul className="d-flex align-items-center mb-0 list-unstyled gap-4">
                      {navLinks.map((link) => (
                        <li key={link.label}>
                          <Link
                            to={link.href}
                            className={isActive(link.href) ? 'text-white fw-700' : 'text-white opacity-75'}
                            style={{ textDecoration: 'none' }}
                          >
                            {link.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </nav>
                </div>

                {/* Dark / Light Mode Switcher */}
                <button
                  type="button"
                  onClick={toggleTheme}
                  aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
                  style={{
                    background: 'rgba(255, 255, 255, 0.1)',
                    border: '1px solid rgba(255, 255, 255, 0.2)',
                    borderRadius: '50%',
                    width: '40px',
                    height: '40px',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: '#fff',
                    cursor: 'pointer',
                    transition: 'all 0.25s ease',
                  }}
                >
                  {theme === 'dark' ? (
                    <Sun size={17} color="#CCFF00" />
                  ) : (
                    <Moon size={17} color="#FF5500" />
                  )}
                </button>

                {/* CTA Button */}
                <div className="d-none d-sm-block">
                  <Link
                    to="/pricing"
                    className="at-btn sec-1-home-7__cta-btn"
                    style={{ height: '42px', padding: '0 20px', fontSize: '14px' }}
                  >
                    <span>
                      <span className="text-1">Get Started</span>
                      <span className="text-2">Get Started</span>
                    </span>
                  </Link>
                </div>

                {/* Hamburger Toggle */}
                <button
                  id="header7Toggle"
                  className="at-hamburger"
                  type="button"
                  aria-controls="header7Nav"
                  aria-expanded={isMenuOpen}
                  aria-label="Toggle navigation menu"
                  onClick={() => setIsMenuOpen((prev) => !prev)}
                >
                  <span className="at-hamburger__box" aria-hidden="true">
                    <span className="at-hamburger__bar"></span>
                    <span className="at-hamburger__bar"></span>
                    <span className="at-hamburger__bar"></span>
                  </span>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};
