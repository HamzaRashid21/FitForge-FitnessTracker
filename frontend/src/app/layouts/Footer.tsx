import React from 'react';
import { Link } from 'react-router-dom';
import { Flame } from 'lucide-react';

export const Footer: React.FC = () => {
  return (
    <footer className="footer-7 overflow-hidden">
      <div className="container-2200 px-lg-5 px-3">
        {/* Top navigation */}
        <div className="footer-7__top">
          <nav className="footer-7__nav" aria-label="Footer navigation">
            <Link className="footer-7__nav-link" to="/">
              <span>Home</span>
              <svg
                className="footer-7__nav-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link className="footer-7__nav-link" to="/about">
              <span>About</span>
              <svg
                className="footer-7__nav-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link className="footer-7__nav-link" to="/pricing">
              <span>Pricing</span>
              <svg
                className="footer-7__nav-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link className="footer-7__nav-link" to="/contact">
              <span>Contact</span>
              <svg
                className="footer-7__nav-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
            <Link className="footer-7__nav-link" to="/coming-soon">
              <span>Coming Soon</span>
              <svg
                className="footer-7__nav-arrow"
                xmlns="http://www.w3.org/2000/svg"
                width="14"
                height="13"
                viewBox="0 0 14 13"
                fill="none"
                aria-hidden="true"
              >
                <path
                  d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
                  fill="currentColor"
                />
              </svg>
            </Link>
          </nav>
        </div>

        <div className="footer-7__mid py-80">
          <div className="row g-5 align-items-center">
            {/* Brand */}
            <div className="col-xxl-4 col-lg-5 col-md-6">
              <Link to="/" className="d-flex align-items-center gap-2 text-decoration-none mb-3">
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
                  }}
                >
                  <Flame size={18} />
                </div>
                <p className="h6 fw-700 fz-24 text-white mb-0">FITFORGE</p>
              </Link>
              <p className="text-white opacity-75 mb-0" style={{ maxWidth: '340px' }}>
                Engineering precision fitness tools for lifters who refuse to settle. Progressive
                overload, smart macros, and real-time volume load curves.
              </p>
            </div>

            {/* Newsletter Subscription */}
            <div className="col-xxl-5 col-lg-7 col-md-6 ms-auto">
              <h4 className="h5 text-white mb-3">Subscribe to Athletic Research Updates</h4>
              <form
                onSubmit={(e) => {
                  e.preventDefault();
                  alert('Thank you for subscribing to FitForge updates!');
                }}
                className="d-flex gap-2 flex-wrap"
              >
                <input
                  type="email"
                  required
                  placeholder="Enter your email address"
                  className="form-control"
                  style={{
                    maxWidth: '320px',
                    backgroundColor: 'rgba(255, 255, 255, 0.08)',
                    borderColor: 'rgba(255, 255, 255, 0.15)',
                    color: '#fff',
                  }}
                />
                <button type="submit" className="at-btn sec-1-home-7__cta-btn">
                  <span>
                    <span className="text-1">Subscribe</span>
                    <span className="text-2">Subscribe</span>
                  </span>
                </button>
              </form>
            </div>
          </div>
        </div>

        {/* Footer bottom */}
        <div className="footer-7__bottom py-4 border-top border-white-10 d-flex flex-wrap justify-content-between align-items-center gap-3">
          <p className="text-white opacity-50 mb-0 small">
            © {new Date().getFullYear()} FitForge Fitness Tracker. All rights reserved.
          </p>
          <div className="d-flex gap-4">
            <span className="text-white opacity-50 small">100% Privacy & Data Ownership</span>
            <span className="text-white opacity-50 small">Offline-First Engine</span>
          </div>
        </div>
      </div>
    </footer>
  );
};
