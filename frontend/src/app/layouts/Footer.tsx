import React from 'react';
import { Link } from 'react-router-dom';
import { Flame, ArrowUpRight, ShieldCheck, Heart } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="ff-footer">
      <div className="ff-container">
        <div className="ff-footer-grid">
          {/* Brand Info */}
          <div>
            <Link to="/" className="ff-logo">
              <div className="ff-logo-badge">
                <Flame size={20} />
              </div>
              <span>
                FIT<span style={{ color: 'var(--color-primary)' }}>FORGE</span>
              </span>
            </Link>
            <p className="ff-footer-brand-desc">
              Precision fitness engineering for dedicated athletes. Track progressive overload,
              dial in nutrition, and transform your physique with science-backed analytics.
            </p>
            <div
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '0.5rem',
                marginTop: '1.25rem',
                fontSize: '0.8125rem',
                color: 'var(--color-success)',
                fontWeight: 600,
              }}
            >
              <ShieldCheck size={16} />
              <span>100% Privacy & Data Ownership</span>
            </div>
          </div>

          {/* Product Links */}
          <div>
            <h4 className="ff-footer-col-title">Platform</h4>
            <ul className="ff-footer-links">
              <li>
                <Link to="/#features" className="ff-footer-link">
                  Workout Tracker
                </Link>
              </li>
              <li>
                <Link to="/#features" className="ff-footer-link">
                  Macro & Calorie Engine
                </Link>
              </li>
              <li>
                <Link to="/#features" className="ff-footer-link">
                  Progressive Overload
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="ff-footer-link">
                  Subscription Plans
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="ff-footer-link">
                  Mobile App Beta
                </Link>
              </li>
            </ul>
          </div>

          {/* Company Links */}
          <div>
            <h4 className="ff-footer-col-title">Company</h4>
            <ul className="ff-footer-links">
              <li>
                <Link to="/about" className="ff-footer-link">
                  About FitForge
                </Link>
              </li>
              <li>
                <Link to="/about" className="ff-footer-link">
                  Scientific Principles
                </Link>
              </li>
              <li>
                <Link to="/contact" className="ff-footer-link">
                  Contact Support
                </Link>
              </li>
              <li>
                <Link to="/coming-soon" className="ff-footer-link">
                  Roadmap 2026
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources & Community */}
          <div>
            <h4 className="ff-footer-col-title">Connect</h4>
            <ul className="ff-footer-links">
              <li>
                <a
                  href="https://discord.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ff-footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  Athlete Discord <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <a
                  href="https://twitter.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="ff-footer-link"
                  style={{ display: 'inline-flex', alignItems: 'center', gap: '0.25rem' }}
                >
                  Twitter / X <ArrowUpRight size={13} />
                </a>
              </li>
              <li>
                <Link to="/contact" className="ff-footer-link">
                  Trainer Partnerships
                </Link>
              </li>
              <li>
                <Link to="/pricing" className="ff-footer-link">
                  Enterprise Teams
                </Link>
              </li>
            </ul>
          </div>
        </div>

        {/* Footer Bottom Bar */}
        <div className="ff-footer-bottom">
          <p>© {new Date().getFullYear()} FitForge Fitness Tracker. All rights reserved.</p>
          <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
            <span>Engineered with</span>
            <Heart size={14} color="var(--color-primary)" fill="var(--color-primary)" />
            <span>for lifters worldwide</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
