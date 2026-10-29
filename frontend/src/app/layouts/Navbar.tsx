import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Flame, Sun, Moon, Menu, X, ArrowRight } from 'lucide-react';
import { useTheme } from '../providers/ThemeProvider.js';

export const Navbar: React.FC = () => {
  const { theme, toggleTheme } = useTheme();
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Features', href: '/#features' },
    { label: 'How It Works', href: '/#how-it-works' },
    { label: 'About', href: '/about' },
    { label: 'Pricing', href: '/pricing' },
    { label: 'Contact', href: '/contact' },
    { label: 'Coming Soon', href: '/coming-soon' },
  ];

  const handleLinkClick = (href: string) => {
    setIsMobileMenuOpen(false);
    if (href.startsWith('/#') && location.pathname === '/') {
      const element = document.getElementById(href.replace('/#', ''));
      if (element) {
        element.scrollIntoView({ behavior: 'smooth' });
      }
    }
  };

  const isActive = (href: string) => {
    if (href === '/') return location.pathname === '/';
    if (href.startsWith('/#')) return false;
    return location.pathname === href;
  };

  return (
    <header className="ff-header">
      <div className="ff-container">
        <nav className="ff-navbar" aria-label="Main Navigation">
          {/* Brand Logo */}
          <Link to="/" className="ff-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="ff-logo-badge">
              <Flame size={20} />
            </div>
            <span>
              FIT<span style={{ color: 'var(--color-primary)' }}>FORGE</span>
            </span>
          </Link>

          {/* Desktop Navigation Links */}
          <ul className="ff-nav-links">
            {navLinks.map((link) => (
              <li key={link.label}>
                <Link
                  to={link.href}
                  className={`ff-nav-link ${isActive(link.href) ? 'active' : ''}`}
                  onClick={() => handleLinkClick(link.href)}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>

          {/* Desktop Actions */}
          <div className="ff-nav-actions">
            {/* Dark / Light Mode Toggle */}
            <button
              className="ff-theme-toggle"
              onClick={toggleTheme}
              aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
              title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}
            >
              {theme === 'dark' ? (
                <Sun size={18} color="var(--color-accent)" />
              ) : (
                <Moon size={18} color="var(--color-primary)" />
              )}
            </button>

            {/* CTA Button */}
            <Link
              to="/pricing"
              className="ff-btn ff-btn-primary"
              style={{ display: 'none' }}
              onClick={() => setIsMobileMenuOpen(false)}
            >
              Get Started <ArrowRight size={16} />
            </Link>

            {/* Desktop Quick CTA */}
            <Link
              to="/pricing"
              className="ff-btn ff-btn-primary"
              style={{ padding: '0.625rem 1.25rem', fontSize: '0.875rem' }}
            >
              Get Started <ArrowRight size={14} />
            </Link>

            {/* Mobile Hamburger Menu Button */}
            <button
              className="ff-mobile-menu-btn"
              onClick={() => setIsMobileMenuOpen((prev) => !prev)}
              aria-label="Toggle navigation menu"
              aria-expanded={isMobileMenuOpen}
            >
              {isMobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
            </button>
          </div>
        </nav>
      </div>

      {/* Mobile Drawer Overlay */}
      {isMobileMenuOpen && (
        <div
          className="ff-drawer-overlay"
          onClick={() => setIsMobileMenuOpen(false)}
          aria-hidden="true"
        />
      )}

      {/* Mobile Offcanvas Drawer */}
      <aside className={`ff-mobile-drawer ${isMobileMenuOpen ? 'open' : ''}`}>
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <Link to="/" className="ff-logo" onClick={() => setIsMobileMenuOpen(false)}>
            <div className="ff-logo-badge">
              <Flame size={18} />
            </div>
            <span>
              FIT<span style={{ color: 'var(--color-primary)' }}>FORGE</span>
            </span>
          </Link>
          <button
            className="ff-theme-toggle"
            onClick={() => setIsMobileMenuOpen(false)}
            aria-label="Close menu"
          >
            <X size={20} />
          </button>
        </div>

        <nav style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
          {navLinks.map((link) => (
            <Link
              key={link.label}
              to={link.href}
              className={`ff-nav-link ${isActive(link.href) ? 'active' : ''}`}
              style={{ fontSize: '1.125rem' }}
              onClick={() => handleLinkClick(link.href)}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '1rem' }}>
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              padding: '0.75rem',
              backgroundColor: 'var(--color-bg-card)',
              borderRadius: 'var(--radius-lg)',
            }}
          >
            <span style={{ fontSize: '0.875rem', fontWeight: 600 }}>Theme</span>
            <button
              className="ff-theme-toggle"
              onClick={toggleTheme}
              aria-label="Toggle theme in mobile menu"
            >
              {theme === 'dark' ? (
                <Sun size={18} color="var(--color-accent)" />
              ) : (
                <Moon size={18} color="var(--color-primary)" />
              )}
            </button>
          </div>

          <Link
            to="/pricing"
            className="ff-btn ff-btn-primary"
            style={{ width: '100%' }}
            onClick={() => setIsMobileMenuOpen(false)}
          >
            Get Started Free <ArrowRight size={16} />
          </Link>
        </div>
      </aside>
    </header>
  );
};
