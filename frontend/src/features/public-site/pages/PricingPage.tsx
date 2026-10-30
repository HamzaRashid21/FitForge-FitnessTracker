import { memo } from 'react';
import { Link } from 'react-router-dom';
import { PageBreadcrumb } from '../components/PageBreadcrumb.js';

function Pricing() {
  return (
    <main className="bg-neutral-0">
      <PageBreadcrumb
        title="Plans & Pricing"
        subtitle="Transparent, flexible subscriptions engineered to accelerate your personal fitness transformation."
        tag="MEMBERSHIPS"
        currentPage="Pricing"
      />
      <div className="container-2200">
        <div className="home-2-section-12 rounded-5 overflow-hidden mx-lg-3 mx-2 mt-60 p-relative pt-100 pb-100">
          <div className="p-absolute top-0 left-0 w-100 h-100 rounded-5 opacity-10 z-0 d-none" data-background="/assets/imgs/pages/noise.gif"></div>
          <div className="container p-relative z-1">
            <div className="row g-4">
              <div className="col-lg-2 p-relative d-flex flex-column justify-content-between align-items-start">
                <span className="at-btn common-black bg-transparent rounded-0 p-0">
                  <span className="text-uppercase">
                    <span className="text-1">
                      price &amp; plans
                    </span>
                    {' '}
                    <span className="text-2">
                      price &amp; plans
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
                <div className="at-about-svg-wrap move-up d-none d-xxl-block">
                  <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
                    <path opacity="0.1" d="M0 0L56.4024 33.572V90.336L0 56.46V0Z" fill="#515151" />
                  </svg>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="113" height="68" viewBox="0 0 113 68" fill="none">
                    <path opacity="0.3" d="M0 33.876L56.4024 0L112.805 33.876V34.1294L56.4024 68.0054L0 34.1294V33.876Z" fill="#515151" />
                  </svg>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="57" height="91" viewBox="0 0 57 91" fill="none">
                    <path opacity="0.2" d="M56.4009 0L8.7738e-05 33.5367V90.2413L56.4009 56.4008V0Z" fill="#515151" />
                  </svg>
                </div>
              </div>
              <div className="col-3xl-8 col-xxl-10 col-lg-10 col-md-12">
                <div className="row align-items-end mb-60 g-4">
                  <div className="col-lg-8">
                    <h2 className="h3 reveal-text fw-700 mb-0">
                      Flexible subscription plans designed to support your personal fitness journey
                    </h2>
                  </div>
                  <div className="col-lg-4 ms-lg-auto">
                    <div className="change-price-plan jus mt-6 wow img-custom-anim-top">
                      <span className="price-plan-toggle-label" data-plan="personal">
                        Monthly
                      </span>
                      {' '}
                      <label className="price-plan-toggle">
                        <input type="checkbox" className="price-plan-toggle__input" id="price-plan-toggle" aria-label="Select Annual plan" />
                        {' '}
                        <span className="price-plan-toggle__track"></span>
                        {' '}
                        <span className="price-plan-toggle__thumb"></span>
                      </label>
                      {' '}
                      <span className="price-plan-toggle-label" data-plan="business">
                        Annual
                      </span>
                    </div>
                  </div>
                </div>
                <div className="row justify-content-center g-4">
                  <div className="col-lg-6 col-md-6">
                    <div className="home-2-pricing-card bg-neutral-50 h-100">
                      <div className="home-2-pricing-card__body">
                        <h3 className="h4 home-2-pricing-card__title">
                          Free
                        </h3>
                        <div className="home-2-pricing-card__price">
                          <span className="home-2-pricing-card__price-value text-price-starter">
                            $0
                          </span>
                          {' '}
                          <span className="home-2-pricing-card__price-period">
                            /forever
                          </span>
                        </div>
                        <p className="home-2-pricing-card__desc">
                          Essential workout logging and movement tracking designed for every athlete.
                        </p>
                        <a className="at-btn px-5" href="#">
                          <span>
                            <span className="text-1 text-capitalize">
                              Start Free
                            </span>
                            {' '}
                            <span className="text-2 text-capitalize">
                              Start Free
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
                        </a>
                      </div>
                      <ul className="home-2-pricing-card__features">
                        <li>
                          <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {' '}Workout logging &amp; history
                        </li>
                        <li>
                          <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {' '}150+ exercise library
                        </li>
                        <li>
                          <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {' '}Body weight &amp; metrics
                        </li>
                        <li>
                          <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {' '}Daily hydration tracker
                        </li>
                        <li>
                          <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {' '}Basic progress analytics
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                    <div className="home-2-pricing-card bg-neutral-50 home-2-pricing-card--popular h-100">
                      <span className="home-2-pricing-card__badge">
                        Most popular
                      </span>
                      <div className="home-2-pricing-card__body">
                        <h3 className="h4 home-2-pricing-card__title">
                          Premium
                        </h3>
                        <div className="home-2-pricing-card__price">
                          <span className="home-2-pricing-card__price-value text-price-growth">
                            $12
                          </span>
                          {' '}
                          <span className="home-2-pricing-card__price-period">
                            /monthly
                          </span>
                        </div>
                        <p className="home-2-pricing-card__desc">
                          Advanced intelligence, custom workout builders, and in-depth analytics.
                        </p>
                        <a className="at-btn px-5" href="#">
                          <span>
                            <span className="text-1 text-capitalize">
                              Explore Premium
                            </span>
                            {' '}
                            <span className="text-2 text-capitalize">
                              Explore Premium
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
                        </a>
                      </div>
                      <ul className="home-2-pricing-card__features">
                        <li>
                          <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {' '}Personalized workout builder
                        </li>
                        <li>
                          <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {' '}AI fitness workout assistant
                        </li>
                        <li>
                          <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {' '}Nutrition &amp; macro tracker
                        </li>
                        <li>
                          <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {' '}Advanced progress analytics
                        </li>
                        <li>
                          <span className="home-2-pricing-card__feature-icon dark-mode-invert">
                            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none">
                              <path d="M9 0C13.9706 0 18 4.02944 18 9C18 13.9706 13.9706 18 9 18C4.02944 18 0 13.9706 0 9C0 4.02944 4.02944 0 9 0ZM8 5V8H5V10H8V13H10V10H13V8H10V5H8Z" fill="currentColor" />
                            </svg>
                          </span>
                          {' '}Priority features &amp; export
                        </li>
                      </ul>
                    </div>
                  </div>
                  <div className="col-lg-5">
                    <div className="d-flex gap-3 mt-60">
                      <div className="icon">
                        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                          <path fillRule="evenodd" clipRule="evenodd" d="M10 20C5.286 20 2.929 20 1.464 18.535C0 17.072 0 14.714 0 10C0 5.286 0 2.929 1.464 1.464C2.93 0 5.286 0 10 0C14.714 0 17.071 0 18.535 1.464C20 2.93 20 5.286 20 10C20 14.714 20 17.071 18.535 18.535C17.072 20 14.714 20 10 20ZM10 5.75C9.379 5.75 8.875 6.254 8.875 6.875C8.875 7.07391 8.79598 7.26468 8.65533 7.40533C8.51468 7.54598 8.32391 7.625 8.125 7.625C7.92609 7.625 7.73532 7.54598 7.59467 7.40533C7.45402 7.26468 7.375 7.07391 7.375 6.875C7.37501 6.44494 7.48069 6.02146 7.68274 5.64182C7.88479 5.26218 8.17702 4.93799 8.53374 4.69777C8.89046 4.45754 9.30073 4.30865 9.72849 4.26416C10.1562 4.21968 10.5884 4.28098 10.9869 4.44266C11.3854 4.60435 11.7381 4.86147 12.0139 5.19142C12.2898 5.52137 12.4803 5.91403 12.5688 6.33489C12.6573 6.75575 12.6411 7.19191 12.5215 7.60501C12.4019 8.01811 12.1826 8.3955 11.883 8.704C11.791 8.79867 11.703 8.88767 11.619 8.971C11.4165 9.16504 11.2258 9.37108 11.048 9.588C10.828 9.87 10.75 10.077 10.75 10.25V11C10.75 11.1989 10.671 11.3897 10.5303 11.5303C10.3897 11.671 10.1989 11.75 10 11.75C9.80109 11.75 9.61032 11.671 9.46967 11.5303C9.32902 11.3897 9.25 11.1989 9.25 11V10.25C9.25 9.595 9.555 9.064 9.864 8.667C10.093 8.373 10.38 8.087 10.614 7.853C10.6847 7.783 10.749 7.71833 10.807 7.659C10.9611 7.5004 11.0651 7.2999 11.1059 7.08255C11.1467 6.8652 11.1225 6.64065 11.0364 6.43696C10.9503 6.23326 10.8061 6.05947 10.6217 5.93729C10.4374 5.81511 10.2211 5.74997 10 5.75ZM10 15C10.2652 15 10.5196 14.8946 10.7071 14.7071C10.8946 14.5196 11 14.2652 11 14C11 13.7348 10.8946 13.4804 10.7071 13.2929C10.5196 13.1054 10.2652 13 10 13C9.73478 13 9.48043 13.1054 9.29289 13.2929C9.10536 13.4804 9 13.7348 9 14C9 14.2652 9.10536 14.5196 9.29289 14.7071C9.48043 14.8946 9.73478 15 10 15Z" fill="currentColor" />
                        </svg>
                      </div>
                      <div>
                        <h4 className="h6 fw-600">
                          Questions about plans?
                        </h4>
                        <p className="fz-font-lg neutral-700">
                          Explore how FitForge adapts to your training routine. Reach out to our team for feature guidance and platform assistance.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="col-lg-3"></div>
                </div>
              </div>
              <div className="col-xxl-2 text-end d-flex flex-column gap-2">
                <Link to="/contact" className="text-decoration-underline">
                  Contact Us
                </Link>
                <p className="h6 fw-600 mb-0">
                  <a href="mailto:support@fitforge.app">
                    support@fitforge.app
                  </a>
                </p>
                <p className="h6 fw-600 mb-0">
                  <a href="tel:18005553488">
                    (800) 555-3488
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-4-services-details pb-120 pt-120 bg-neutral-50">
        <div className="container">
          <div className="row g-4">
            <div className="col-lg-6">
              <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                <span className="text-uppercase">
                  <span className="text-1">
                    OUR METHOD
                  </span>
                  {' '}
                  <span className="text-2">
                    OUR METHOD
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
              <h3 className="reveal-text mb-20">
                How FitForge guides training
              </h3>
              <h3 className="h6 fw-500 mb-0">
                We combine tracking, exercise science, and smart analytics into a clear, goal-driven platform.
              </h3>
            </div>
            <div className="col-lg-4 col-md-8 ms-auto text-end">
              <div className="scroll-rotate d-md-inline-block d-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M53.5715 0H46.4286V41.3778L17.17 12.1193L12.1193 17.17L41.3778 46.4286H0V53.5715H41.3778L12.1193 82.83L17.17 87.8805L46.4286 58.622V100H53.5715V58.622L82.83 87.8805L87.8805 82.83L58.622 53.5715H100V46.4286H58.622L87.8805 17.17L82.83 12.1193L53.5715 41.3778V0Z" fill="currentColor" />
                </svg>
              </div>
            </div>
          </div>
          <div className="row g-3 pt-100">
            <div className="col-xxl-3 col-md-6">
              <div className="at-service-card hover-up card-1 no-before rounded-2 overflow-hidden p-relative bg-neutral-0 z-index-3">
                <a href="#" className="p-absolute top-0 left-0 w-100 h-100"></a>
                <div className="at-service-card-content m-lg-5 m-4">
                  <div className="at-service-card-number">
                    <h3 className="h6 fw-600 neutral-300">
                      [01]
                    </h3>
                  </div>
                  <h4 className="mt-3 fw-600">
                    <a href="#">
                      Log
                    </a>
                  </h4>
                  <div className="at-service-card-description">
                    <p className="mb-0 neutral-900">
                      Record daily exercises, sets, repetitions, and weights
                    </p>
                  </div>
                  <div className="at-service-card-img rounded-2 fix mt-4 hover-effect-1">
                    <img className="img-cover rounded-2" src="/assets/imgs/thegrind/IMG_1212.webp" alt="FitForge workout logging" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="at-service-card hover-up card-2 rounded-2 overflow-hidden p-relative bg-neutral-0">
                <a href="#" className="p-absolute top-0 left-0 w-100 h-100"></a>
                <div className="at-service-card-content m-lg-5 m-4">
                  <div className="at-service-card-number">
                    <h3 className="h6 fw-600 neutral-300">
                      [02]
                    </h3>
                  </div>
                  <h4 className="mt-3 fw-600">
                    <a href="#">
                      Analyze
                    </a>
                  </h4>
                  <div className="at-service-card-description">
                    <p className="mb-0 neutral-900">
                      Turn workout data into measurable progress insights
                    </p>
                  </div>
                  <div className="at-service-card-img rounded-2 fix mt-4 hover-effect-1">
                    <img className="img-cover rounded-2" src="/assets/imgs/thegrind/pexels-cristian-rojas-8809594.webp" alt="FitForge progress analytics" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="at-service-card hover-up card-3 rounded-2 overflow-hidden p-relative bg-neutral-0">
                <a href="#" className="p-absolute top-0 left-0 w-100 h-100"></a>
                <div className="at-service-card-content m-lg-5 m-4">
                  <div className="at-service-card-number">
                    <h3 className="h6 fw-600 neutral-300">
                      [03]
                    </h3>
                  </div>
                  <h4 className="mt-3 fw-600">
                    <a href="#">
                      Plan
                    </a>
                  </h4>
                  <div className="at-service-card-description">
                    <p className="mb-0 neutral-900">
                      Build tailored routines matching target fitness goals
                    </p>
                  </div>
                  <div className="at-service-card-img rounded-2 fix mt-4 hover-effect-1">
                    <img className="img-cover rounded-2" src="/assets/imgs/thegrind/don-IBIZA-DAG-2-Running-6.webp" alt="FitForge routine planning" />
                  </div>
                </div>
              </div>
            </div>
            <div className="col-xxl-3 col-md-6">
              <div className="at-service-card hover-up card-2 rounded-2 overflow-hidden p-relative bg-neutral-0">
                <a href="#" className="p-absolute top-0 left-0 w-100 h-100"></a>
                <div className="at-service-card-content m-lg-5 m-4">
                  <div className="at-service-card-number">
                    <h3 className="h6 fw-600 neutral-300">
                      [04]
                    </h3>
                  </div>
                  <h4 className="mt-3 fw-600">
                    <a href="#">
                      Progress
                    </a>
                  </h4>
                  <div className="at-service-card-description">
                    <p className="mb-0 neutral-900">
                      Achieve personal milestones and maintain consistency
                    </p>
                  </div>
                  <div className="at-service-card-img rounded-2 fix mt-4 hover-effect-1">
                    <img className="img-cover rounded-2" src="/assets/imgs/thegrind/don-IBIZA-DAG-1-Running-35-p-2000.webp" alt="FitForge fitness milestones" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-7-about py-5 overflow-hidden">
        <div className="container py-5">
          <div className="row g-5">
            <div className="col-lg-4">
              <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                <span className="text-uppercase">
                  <span className="text-1">
                    FAQ
                  </span>
                  {' '}
                  <span className="text-2">
                    FAQ
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
              <h3 className="section-title lh-1 reveal-text">
                Frequently{' '}
                <br />
                {' '}Asked Questions
              </h3>
              <h4 className="h6 fz-font-lg fw-500">
                Your questions about our tracker, features,{' '}
                <br className="d-none d-xxl-block" />
                {' '}and plans—answered.
              </h4>
            </div>
            <div className="col-lg-7 ms-lg-auto">
              <div className="accordion pt-80" id="accordionExample">
                <div className="at-faq-item bg-neutral-0 border-100 scroll-move-up rounded-4">
                  <div className="at-faq-header d-flex gap-2">
                    <div className="box-number">
                      <span className="at-faq-number">
                        1
                      </span>
                    </div>
                    <button className="at-faq-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                      What is included in the Free plan?
                    </button>
                  </div>
                  <div id="collapseOne" className="at-faq-collapse collapse show" data-bs-parent="#accordionExample">
                    <div className="at-faq-body">
                      <p>
                        The Free plan includes workout tracking, 150+ exercise library movements, basic metrics, hydration logging, and session history.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="at-faq-item bg-neutral-0 border-100 scroll-move-up rounded-4">
                  <div className="at-faq-header d-flex gap-2">
                    <div className="box-number">
                      <span className="at-faq-number">
                        2
                      </span>
                    </div>
                    <button className="at-faq-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
                      How does the Premium subscription work?
                    </button>
                  </div>
                  <div id="collapseTwo" className="at-faq-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="at-faq-body">
                      <p>
                        Premium unlocks the AI fitness assistant, personalized routine builder, advanced progress analytics, nutrition goals, and data export.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="at-faq-item bg-neutral-0 border-100 scroll-move-up rounded-4">
                  <div className="at-faq-header d-flex gap-2">
                    <div className="box-number">
                      <span className="at-faq-number">
                        3
                      </span>
                    </div>
                    <button className="at-faq-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree">
                      Can I switch between Free and Premium anytime?
                    </button>
                  </div>
                  <div id="collapseThree" className="at-faq-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="at-faq-body">
                      <p>
                        Yes — you can manage your membership anytime directly within your account settings without losing your saved workout data.
                      </p>
                    </div>
                  </div>
                </div>
                <div className="at-faq-item bg-neutral-0 border-100 scroll-move-up rounded-4">
                  <div className="at-faq-header d-flex gap-2">
                    <div className="box-number">
                      <span className="at-faq-number">
                        4
                      </span>
                    </div>
                    <button className="at-faq-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseFour" aria-expanded="false" aria-controls="collapseFour">
                      Is my workout and biometric data secure?
                    </button>
                  </div>
                  <div id="collapseFour" className="at-faq-collapse collapse" data-bs-parent="#accordionExample">
                    <div className="at-faq-body">
                      <p>
                        Yes — we prioritize user privacy and secure data storage, ensuring your personal fitness logs and metrics remain confidential.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}

export default memo(Pricing);
