import React from 'react';
import { Link } from 'react-router-dom';

interface PageBreadcrumbProps {
  title: string;
  subtitle?: string;
  tag?: string;
  currentPage: string;
}

export const PageBreadcrumb: React.FC<PageBreadcrumbProps> = ({
  title,
  subtitle,
  tag = 'FITFORGE',
  currentPage,
}) => {
  return (
    <section className="fitforge-breadcrumb-hero position-relative overflow-hidden">
      <div className="fitforge-breadcrumb-hero__bg" aria-hidden="true">
        <div className="fitforge-breadcrumb-hero__bg-left"></div>
        <div className="fitforge-breadcrumb-hero__bg-right"></div>
      </div>
      <div className="container position-relative z-1">
        <div className="row align-items-center g-4">
          <div className="col-lg-9">
            <div className="d-inline-flex align-items-center gap-2 mb-3">
              <span className="text-white text-opacity-75 text-uppercase fw-600 fz-14" style={{ letterSpacing: '0.12em' }}>
                [ {tag} ]
              </span>
            </div>
            <h1 className="h1 text-white fw-700 display-4 mb-3 text-uppercase" style={{ letterSpacing: '-0.02em' }}>
              {title}
            </h1>
            {subtitle && (
              <p className="text-white text-opacity-75 fz-font-lg mb-4" style={{ maxWidth: '640px', lineHeight: 1.6 }}>
                {subtitle}
              </p>
            )}
            <nav aria-label="breadcrumb">
              <ol className="breadcrumb fitforge-breadcrumb-list mb-0 align-items-center">
                <li className="breadcrumb-item">
                  <Link to="/" className="text-white text-opacity-75 text-decoration-none fw-500 hover-opacity-100">
                    Home
                  </Link>
                </li>
                <li className="breadcrumb-item active text-white fw-600" aria-current="page">
                  {currentPage}
                </li>
              </ol>
            </nav>
          </div>
          <div className="col-lg-3 text-lg-end d-none d-lg-block">
            <div className="d-inline-block opacity-25">
              <svg width="110" height="110" viewBox="0 0 100 100" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" clipRule="evenodd" d="M53.5715 0H46.4286V41.3778L17.17 12.1193L12.1193 17.17L41.3778 46.4286H0V53.5715H41.3778L12.1193 82.83L17.17 87.8805L46.4286 58.622V100H53.5715V58.622L82.83 87.8805L87.8805 82.83L58.622 53.5715H100V46.4286H58.622L87.8805 17.17L82.83 12.1193L53.5715 41.3778V0Z" fill="#ffffff" />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PageBreadcrumb;
