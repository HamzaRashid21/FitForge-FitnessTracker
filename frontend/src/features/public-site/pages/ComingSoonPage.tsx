import { memo } from 'react';

function ComingSoon() {
  return (
    <main className="bg-neutral-0">
      <div className="sec-1-coming-soon overflow-hidden pt-150">
        <div className="container pb-60">
          <div className="row g-4 align-items-end">
            <div className="col-xxl-6 col-lg-8">
              <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                <span className="text-uppercase">
                  <span className="text-1">
                    We are On the Way
                  </span>
                  {' '}
                  <span className="text-2">
                    We are On the Way
                  </span>
                </span>
                {' '}
                <i>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                  </svg>
                  {' '}
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                  </svg>
                </i>
              </span>
              <h1 className="reveal-text mb-40 fz-ds-1 fw-500 lh-1">
                Coming Soon
              </h1>
              <p className="fw-400 fz-font-3xl neutral-900 mb-40 w-75 lh-sm">
                We are forging advanced workout tools — smart tracking routines for active athletes.
              </p>
              <div className="d-flex flex-wrap align-items-center gap-5">
                <a href="tel:+18005553488" className="fz-font-lg neutral-500 fw-500">
                  [ (800) 555-3488 ]
                </a>
                {' '}
                <a href="mailto:support@fitforge.app" className="fz-font-lg neutral-500 fw-500">
                  [ support@fitforge.app ]
                </a>
              </div>
            </div>
            <div className="col-xxl-6 pt-xxl-0 pt-100">
              <div className="box-count box-count-square mb-50">
                <div className="deals-countdown justify-content-end" data-countdown="2026/09/12 00:00:00"></div>
              </div>
            </div>
          </div>
        </div>
        <div className="at-banner-thumb overflow-hidden scale-up-img pt-md-0 pt-20">
          <img className="img-cover scale-up" data-speed=".8" src="/assets/imgs/thegrind/The-Grind-RunClub-10-kopie.webp" alt="FitForge fitness platform" />
        </div>
      </div>
      <div className="sec-2-coming-soon pb-20 p-relative z-n1">
        <div className="container">
          <div className="client-capsule-wrapper-box" data-t-throwable-scene="true">
            <div className="client-capsule-wrapper">
              <p data-t-throwable-el="">
                <span className="client-box bg-neutral-500 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  GARMIN
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '17px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.71-.93 2.73 1.01.08 2.01-.48 2.63-1.23z"/></svg>
                  APPLE HEALTH
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M15.387 17.944l-2.089-4.116h-3.065L15.387 24l5.154-10.172h-3.066m-7.008-5.599l2.836 5.598h4.172L10.468 0 5.314 10.173h4.173"/></svg>
                  STRAVA
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box bg-neutral-500 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.08em', fontSize: '19px' }}>
                  WHOOP
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><circle cx="12" cy="12" r="9"/></svg>
                  OURA RING
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box bg-neutral-500 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.07em', fontSize: '18px' }}>
                  POLAR
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  FITBIT
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.07em', fontSize: '18px' }}>
                  PELOTON
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  SUUNTO
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '16px' }}>
                  MYFITNESSPAL
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box bg-neutral-500 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  WAHOO
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  CONCEPT2
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default memo(ComingSoon);
