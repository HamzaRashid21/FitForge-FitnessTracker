import { memo } from 'react';
import { Link } from 'react-router-dom';
import { PageBreadcrumb } from '../components/PageBreadcrumb.js';

function About() {
  return (
    <main className="bg-neutral-0">
      <PageBreadcrumb
        title="About FitForge"
        subtitle="We unite workout tracking, nutrition insight, and intelligent planning to help you build strength, stay consistent, and reach your goals."
        tag="ABOUT US"
        currentPage="About Us"
      />
      <div className="sec-1-about pt-90 overflow-hidden">
        <div className="container pb-100">
          <div className="row align-items-center g-4">
            <div className="col-12">
              <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                <span className="text-uppercase">
                  <span className="text-1">
                    About Us
                  </span>
                  {' '}
                  <span className="text-2">
                    About Us
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
            </div>
            <div className="col-lg-7 h-100">
              <h2 className="section-title fw-600 lh-1 reveal-text">
                We are a modern fitness platform powering consistent workout progress
              </h2>
            </div>
            <div className="col-lg-5 ms-auto">
              <h3 className="h6 mb-4 fw-600">
                We combine training, nutrition, and technology to help athletes track, improve, and succeed in an ever-evolving fitness journey.
              </h3>
              <div className="sec-2-home-5__avatars-row d-flex gap-2">
                <div className="sec-2-home-5__avatar-sm at-offcanvas-gallery-img">
                  <img className="img-cover" src="/assets/imgs/template/avatar/avatar-10.webp" alt="FitForge athlete" />
                </div>
                <div className="sec-2-home-5__avatar-sm at-offcanvas-gallery-img">
                  <img className="img-cover" src="/assets/imgs/template/avatar/avatar-11.webp" alt="FitForge athlete" />
                </div>
                <div className="sec-2-home-5__avatar-sm at-offcanvas-gallery-img">
                  <img className="img-cover" src="/assets/imgs/template/avatar/avatar-12.webp" alt="FitForge member" />
                </div>
                <div className="sec-2-home-5__avatar-sm at-offcanvas-gallery-img">
                  <img className="img-cover" src="/assets/imgs/template/avatar/avatar-13.webp" alt="FitForge member" />
                </div>
                <div className="sec-2-home-5__avatar-sm at-offcanvas-gallery-img d-none d-md-block">
                  <img className="img-cover" src="/assets/imgs/template/avatar/avatar-14.webp" alt="FitForge coach" />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="at-item-anime-area">
          <div className="swiper about-me-slider-active">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="about-me-slider-thumb at-item-anime marque">
                  <img className="w-100 rounded-4" src="/assets/imgs/thegrind/IMG_1212.webp" alt="FitForge workout" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="about-me-slider-thumb at-item-anime marque">
                  <img className="w-100 rounded-4" src="/assets/imgs/thegrind/don-IBIZA-DAG-2-Running-6.webp" alt="FitForge training" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="about-me-slider-thumb at-item-anime marque">
                  <img className="w-100 rounded-4" src="/assets/imgs/thegrind/4J9A1524.webp" alt="FitForge fitness" />
                </div>
              </div>
              <div className="swiper-slide">
                <div className="about-me-slider-thumb at-item-anime marque">
                  <img className="w-100 rounded-4" src="/assets/imgs/thegrind/pexels-cristian-rojas-8809594.webp" alt="FitForge analytics" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-2-section-9 at-item-anime-area">
        <div className="container pt-100 pb-100">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 col-6 text-center">
              <h2 className="h1 fz-ds-1 fw-500 mb-0 text-nowrap">
                <span className="odometer" data-count="150"></span>
                +
              </h2>
              <h3 className="h6 fw-500">
                Curated exercises inside{' '}
                <br />
                {' '}movement library
              </h3>
            </div>
            <div className="col-lg-4 col-md-6 col-6 text-center">
              <h2 className="h1 fz-ds-1 fw-500 mb-0 text-nowrap">
                <span className="odometer" data-count="100"></span>
                %
              </h2>
              <h3 className="h6 fw-500">
                Personalized routine{' '}
                <br />
                {' '}flexibility
              </h3>
            </div>
            <div className="col-lg-4 col-md-6 col-6 text-center">
              <h2 className="h1 fz-ds-1 fw-500 mb-0 text-nowrap">
                <span className="odometer" data-count="24"></span>
                /7
              </h2>
              <h3 className="h6 fw-500">
                Workout tracking{' '}
                <br />
                {' '}with FitForge
              </h3>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-2-about block-journey pt-120 pb-120 bg-neutral-900 changeless">
        <div className="container">
          <div className="row align-items-end pb-60">
            <div className="col-lg-7 col-md-7">
              <span className="at-btn text-white bg-transparent mb-10 rounded-0 p-0">
                <span className="text-uppercase text-white">
                  <span className="text-1">
                    Who We Are
                  </span>
                  {' '}
                  <span className="text-2">
                    Who We Are
                  </span>
                </span>
                {' '}
                <i>
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="#fff" />
                  </svg>
                  {' '}
                  <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="#fff" />
                  </svg>
                </i>
              </span>
              <h3 className="text-white reveal-text">
                Our Journey
              </h3>
              <p className="text-white fz-font-lg">
                A timeline of focus, effort, and measurable results. From a{' '}
                <br />
                {' '}simple idea to forging fitness experiences that matter.
              </p>
            </div>
            <div className="col-lg-3 col-md-5 ms-auto d-flex justify-content-md-end">
              <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                <Link className="at-btn-circle bg-neutral-700" to="/pricing">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
                  </svg>
                </Link>
                {' '}
                <Link className="at-btn z-index-1 bg-neutral-700" to="/pricing">
                  Start Training
                </Link>
                {' '}
                <Link className="at-btn-circle bg-neutral-700" to="/pricing">
                  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                    <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="row g-4">
            <div className="col-lg-4">
              <div className="alt-portfolio-item mb-30 at-hover-item">
                <a href="#" className="alt-portfolio-thumb mb-15 p-relative fix d-block">
                  <img className="w-100 scale-img-from-to" data-value-1="1.5" data-value-2="1" src="/assets/imgs/thegrind/the-grind-mindset-52.webp" alt="FitForge" />
                  <div className="alt-portfolio-btn">
                    <div className="content">
                      <span className="bg-transparent text-uppercase border px-3 py-1 rounded-pill text-white fz-font-label">
                        Since 2024
                      </span>
                      <h2 className="fw-400 fz-font-3xl text-white mb-0 mt-20">
                        Intelligent tracking and sports data analytics
                      </h2>
                      <p className="text-white fz-font-md mb-0 mt-10 text-truncate-2 des">
                        We always provide athletes a complete solution focused on personal fitness
                      </p>
                    </div>
                  </div>
                </a>
                <div className="alt-portfolio-content d-flex justify-content-between align-items-center bg-neutral-700">
                  <h3 className="h5 alt-portfolio-title mb-0">
                    <a href="#" className="common-underline text-white">
                      FitForge Pro
                      <sup>
                        ®
                      </sup>
                    </a>
                  </h3>
                  <span className="alt-portfolio-plus text-white">
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="11" viewBox="0 0 12 11" fill="none">
                      <path d="M4.512 10.8V0H6.984V10.8H4.512ZM0 6.6V4.2H11.52V6.6H0Z" fill="currentColor" />
                    </svg>
                  </span>
                </div>
              </div>
            </div>
            <div className="col-lg-7 ms-auto pt-80">
              <ul className="journey-list">
                <li className="journey-list__item scroll-move-up">
                  <span className="journey-list__date">
                    2024 — Building the Foundation
                  </span>
                  <div className="journey-list__body">
                    <h3 className="h6 journey-list__title neutral-0">
                      From Workout Logger to Complete Platform
                    </h3>
                    <p className="journey-list__desc">
                      As athletes joined, so did our ambitions. We expanded into workout builder, live tracking, and nutrition tools — building reliable features for everyday fitness routines.
                    </p>
                  </div>
                  <a href="#" className="journey-list__link" aria-label="View details">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                    </svg>
                  </a>
                </li>
                <li className="journey-list__item scroll-move-up">
                  <span className="journey-list__date">
                    2025 — Trusted by Dedicated Athletes
                  </span>
                  <div className="journey-list__body">
                    <h3 className="h6 journey-list__title neutral-0">
                      Fitness Analytics Platform{' '}
                      <span className="journey-list__company">
                        Building Lifelong Habits
                      </span>
                    </h3>
                    <p className="journey-list__desc">
                      We began supporting goal-driven athletes and daily runners, focusing on workout consistency instead of quick fixes. Our logging matured, and training progress became visible.
                    </p>
                  </div>
                  <a href="#" className="journey-list__link" aria-label="View details">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                    </svg>
                  </a>
                </li>
                <li className="journey-list__item scroll-move-up">
                  <span className="journey-list__date">
                    2026 — Designing for Next-Gen Fitness
                  </span>
                  <div className="journey-list__body">
                    <h3 className="h6 journey-list__title neutral-0">
                      Smart Insights, Streaks, and What’s Next
                    </h3>
                    <p className="journey-list__desc">
                      Today, we continue to evolve — introducing smart guidance, hydration counters, and habit milestones. Our journey is ongoing, and we’re just getting started.
                    </p>
                  </div>
                  <a href="#" className="journey-list__link" aria-label="View details">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                    </svg>
                  </a>
                </li>
                <li className="journey-list__item scroll-move-up">
                  <span className="journey-list__date">
                    2027+ — Beyond Daily Workouts
                  </span>
                  <div className="journey-list__body">
                    <h3 className="h6 journey-list__title neutral-0">
                      The Next Evolution
                    </h3>
                    <p className="journey-list__desc">
                      With an athlete-first mindset and a passion for health, we’re shaping what’s next in fitness tracking — together with motivated users around the world.
                    </p>
                  </div>
                  <a href="#" className="journey-list__link" aria-label="View details">
                    <svg width="11" height="11" viewBox="0 0 11 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                    </svg>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-3-about bg-neutral-50 pt-120 pb-120">
        <div className="container">
          <div className="row align-items-end">
            <div className="col-lg-3 col-md-6">
              <h2 className="h1 fw-500 fz-ds-1 mb-0">
                Awards.
              </h2>
            </div>
            <div className="col-lg-3 col-md-4 ms-auto mb-lg-4 d-flex justify-content-lg-end">
              <div className="at-btn-group at-btn-group-transparent at_fade_anim" data-delay=".5" data-fade-from="bottom" data-ease="bounce">
                <Link className="at-btn-circle" to="/404">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.00013 13.9999L5 5.00003L7 5L7.0001 11.9999L17.1719 12L13.2222 8.05027L14.6364 6.63606L21.0003 13L14.6364 19.364L13.2222 17.9497L17.1719 14L5.00013 13.9999Z" fill="currentColor" />
                  </svg>
                </Link>
                {' '}
                <Link className="at-btn z-index-1" to="/404">
                  View All Awards
                </Link>
                {' '}
                <Link className="at-btn-circle" to="/404">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                    <path d="M5.00013 13.9999L5 5.00003L7 5L7.0001 11.9999L17.1719 12L13.2222 8.05027L14.6364 6.63606L21.0003 13L14.6364 19.364L13.2222 17.9497L17.1719 14L5.00013 13.9999Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>
          </div>
          <div className="row pt-120">
            <div className="col-12">
              <div className="card-award style-1 scroll-move-up" data-img-award="/assets/imgs/thegrind/don-IBIZA-DAG-1-Running-35-p-2000.webp">
                <a href="#" className="card-award-link">
                  <span className="card-award-date">
                    [ 19 Oct 2024 ]
                  </span>
                  <div className="card-award-content">
                    <div className="card-award-image">
                      <img src="/assets/imgs/thegrind/don-IBIZA-DAG-1-Running-35-p-2000.webp" alt="FitForge Award" className="w-100 h-100" />
                    </div>
                    <h3 className="h6 card-award-title mb-0">
                      Best Fitness Tracker Platform
                    </h3>
                  </div>
                  <h4 className="h6 card-award-web-excellence mb-0">
                    Health Excellence Awards
                  </h4>
                  <div className="card-award-meta">
                    <span className="card-award-url fz-font-lg">
                      fitforge.app
                    </span>
                  </div>
                  <div className="card-award-icon ms-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="card-award style-1 scroll-move-up" data-img-award="/assets/imgs/thegrind/4J9A1524.webp">
                <a href="#" className="card-award-link">
                  <span className="card-award-date">
                    [ 12 Feb 2026 ]
                  </span>
                  <div className="card-award-content">
                    <div className="card-award-image">
                      <img src="/assets/imgs/thegrind/4J9A1524.webp" alt="FitForge Award" className="w-100 h-100" />
                    </div>
                    <h3 className="h6 card-award-title mb-0">
                      Fitness App of the Year
                    </h3>
                  </div>
                  <h4 className="h6 card-award-web-excellence mb-0">
                    Global Sports Tech Awards
                  </h4>
                  <div className="card-award-meta">
                    <span className="card-award-url fz-font-lg">
                      fitforge.app
                    </span>
                  </div>
                  <div className="card-award-icon ms-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="card-award style-1 scroll-move-up" data-img-award="/assets/imgs/thegrind/The-Grind-RunClub-10-kopie.webp">
                <a href="#" className="card-award-link">
                  <span className="card-award-date">
                    [ 08 Aug 2025 ]
                  </span>
                  <div className="card-award-content">
                    <div className="card-award-image">
                      <img src="/assets/imgs/thegrind/The-Grind-RunClub-10-kopie.webp" alt="FitForge Award" className="w-100 h-100" />
                    </div>
                    <h3 className="h6 card-award-title mb-0">
                      Innovation in Workout Experience
                    </h3>
                  </div>
                  <h4 className="h6 card-award-web-excellence mb-0">
                    Athletic Tech Awards
                  </h4>
                  <div className="card-award-meta">
                    <span className="card-award-url fz-font-lg">
                      fitforge.app
                    </span>
                  </div>
                  <div className="card-award-icon ms-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="card-award style-1 scroll-move-up" data-img-award="/assets/imgs/thegrind/the-grind-mindset-52.webp">
                <a href="#" className="card-award-link">
                  <span className="card-award-date">
                    [ 19 Oct 2024 ]
                  </span>
                  <div className="card-award-content">
                    <div className="card-award-image">
                      <img src="/assets/imgs/thegrind/the-grind-mindset-52.webp" alt="FitForge Award" className="w-100 h-100" />
                    </div>
                    <h3 className="h6 card-award-title mb-0">
                      Best Integrated Fitness Suite
                    </h3>
                  </div>
                  <h4 className="h6 card-award-web-excellence mb-0">
                    Wellness Design Awards
                  </h4>
                  <div className="card-award-meta">
                    <span className="card-award-url fz-font-lg">
                      fitforge.app
                    </span>
                  </div>
                  <div className="card-award-icon ms-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
              </div>
              <div className="card-award style-1 scroll-move-up" data-img-award="/assets/imgs/thegrind/IMG_1212.webp">
                <a href="#" className="card-award-link">
                  <span className="card-award-date">
                    [ 03 Apr 2026 ]
                  </span>
                  <div className="card-award-content">
                    <div className="card-award-image">
                      <img src="/assets/imgs/thegrind/IMG_1212.webp" alt="FitForge Award" className="w-100 h-100" />
                    </div>
                    <h3 className="h6 card-award-title mb-0">
                      Athlete-Driven Fitness Platform
                    </h3>
                  </div>
                  <h4 className="h6 card-award-web-excellence mb-0">
                    Fitness App Awards
                  </h4>
                  <div className="card-award-meta">
                    <span className="card-award-url fz-font-lg">
                      fitforge.app
                    </span>
                  </div>
                  <div className="card-award-icon ms-auto">
                    <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
                      <path d="M10.0208 3.41421L1.41421 12.0208L0 10.6066L8.60659 2H1.02082V0H12.0208V11H10.0208V3.41421Z" fill="currentColor" />
                    </svg>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div className="row">
            <div className="col-lg-7 col-12 ms-auto pt-80">
              <div className="award-description d-flex gap-5">
                <div className="icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="83" height="83" viewBox="0 0 83 83" fill="none">
                    <path fillRule="evenodd" clipRule="evenodd" d="M41.5 0H0L41.5 41.5H0L41.5 83H83L41.5 41.5H83L41.5 0Z" fill="currentColor" />
                  </svg>
                </div>
                <div className="content">
                  <h5 className="revert-text mb-0 reveal-text">
                    FitForge is a fitness platform empowering consistent workout routines. We think like athletes and build with precision, discipline, and performance.
                  </h5>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-3-section-9 p-relative">
        <div className="position-absolute w-100 h-100 d-grid top-0 md:grid-cols-7 gap-0 z-n1 opacity-10">
          <div className="position-relative h-100 overflow-hidden d-md-block border-dark/01">
            <div className="absolute bottom-0 left-0 right-0 border-white/10"></div>
          </div>
          <div className="position-relative h-100 overflow-hidden d-md-block border-dark/01">
            <div className="absolute bottom-0 left-0 right-0 border-white/10"></div>
          </div>
          <div className="position-relative h-100 overflow-hidden d-md-block border-dark/01">
            <div className="absolute bottom-0 left-0 right-0 border-white/10"></div>
          </div>
          <div className="position-relative h-100 border-r border-dark/01 md:border-none">
            <div className="absolute bottom-0 left-0 right-0 border-white/10"></div>
            <div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b from-white/5 to-transparent pointer-events-none"></div>
          </div>
          <div className="position-relative h-100 overflow-hidden d-md-block border-dark/01">
            <div className="absolute bottom-0 left-0 right-0 border-white/10"></div>
          </div>
          <div className="position-relative h-100 overflow-hidden d-md-block border-dark/01">
            <div className="absolute bottom-0 left-0 right-0 border-white/10"></div>
          </div>
          <div className="position-relative h-100 overflow-hidden d-md-block border-dark/01">
            <div className="absolute bottom-0 left-0 right-0 border-white/10"></div>
          </div>
        </div>
        <div className="pt-120 overflow-hidden">
          <div className="container">
            <div className="row align-items-center">
              <div className="col-12">
                <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                  <span className="text-uppercase">
                    <span className="text-1">
                      MEET OUR TEAM
                    </span>
                    {' '}
                    <span className="text-2">
                      MEET OUR TEAM
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
              </div>
              <div className="col-lg-5 h-100">
                <h1 className="section-title fw-500 fz-ds-1 lh-1 reveal-text">
                  Athletes &amp; Engineers
                </h1>
              </div>
              <div className="col-lg-5 ms-auto">
                <p className="fz-font-3xl mb-4">
                  Fitness experts creating reliable workout experiences that help motivated athletes train smarter and achieve their goals.
                </p>
                <div className="at-btn-group at_fade_anim" data-delay=".4" data-fade-from="bottom" data-ease="bounce">
                  <Link className="at-btn-circle" to="/404">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                      <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
                    </svg>
                  </Link>
                  {' '}
                  <Link className="at-btn z-index-1" to="/404">
                    Join FitForge
                  </Link>
                  {' '}
                  <Link className="at-btn-circle" to="/404">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                      <path d="M0.0001297 8.99993L0 3.00407e-05L2 0L2.0001 6.99993L12.1719 7.00003L8.22224 3.05027L9.63644 1.63606L16.0003 8.00003L9.63644 14.364L8.22224 12.9497L12.1719 9.00003L0.0001297 8.99993Z" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
              </div>
            </div>
            <div className="row pt-80 g-4">
              <div className="col-lg-3 col-md-6 pt-md-5 changeless">
                <div className="team-card">
                  <div className="team-card-image">
                    <div className="anim-zoomin">
                      <img src="/assets/imgs/pages/img-17.webp" alt="Darrell Steward" className="img-cover" />
                    </div>
                  </div>
                  <Link to="/404" className="team-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M7.85986 2.43872L1.7123 8.58629L0.702148 7.57614L6.84971 1.42857H1.43131V0H9.28843V7.85714H7.85986V2.43872Z" fill="currentColor" />
                    </svg>
                  </Link>
                  <div className="team-card-content">
                    <Link to="/404" className="team-card-name">
                      <h2 className="h6 fz-font-2xl">
                        Marisja Groen
                      </h2>
                    </Link>
                    <p className="team-card-position fz-font-sm m-0 common-white">
                      Head Performance Coach
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 changeless">
                <div className="team-card">
                  <div className="team-card-image">
                    <div className="anim-zoomin">
                      <img src="/assets/imgs/pages/img-18.webp" alt="Amelia Courtney" className="img-cover" />
                    </div>
                  </div>
                  <Link to="/404" className="team-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M7.85986 2.43872L1.7123 8.58629L0.702148 7.57614L6.84971 1.42857H1.43131V0H9.28843V7.85714H7.85986V2.43872Z" fill="currentColor" />
                    </svg>
                  </Link>
                  <div className="team-card-content">
                    <Link to="/404" className="team-card-name">
                      <h2 className="h6 fz-font-2xl">
                        Amelia Courtney
                      </h2>
                    </Link>
                    <p className="team-card-position fz-font-sm m-0 common-white">
                      Strength &amp; Conditioning Coach
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 pt-md-5 changeless">
                <div className="team-card">
                  <div className="team-card-image">
                    <div className="anim-zoomin">
                      <img src="/assets/imgs/pages/img-19.webp" alt="Esther Howard" className="img-cover" />
                    </div>
                  </div>
                  <Link to="/404" className="team-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M7.85986 2.43872L1.7123 8.58629L0.702148 7.57614L6.84971 1.42857H1.43131V0H9.28843V7.85714H7.85986V2.43872Z" fill="currentColor" />
                    </svg>
                  </Link>
                  <div className="team-card-content">
                    <Link to="/404" className="team-card-name">
                      <h2 className="h6 fz-font-2xl">
                        Esther Howard
                      </h2>
                    </Link>
                    <p className="team-card-position fz-font-sm m-0 common-white">
                      Athletic Mobility Specialist
                    </p>
                  </div>
                </div>
              </div>
              <div className="col-lg-3 col-md-6 changeless">
                <div className="team-card">
                  <div className="team-card-image">
                    <div className="anim-zoomin">
                      <img src="/assets/imgs/pages/img-20.webp" alt="Jacob Jones" className="img-cover" />
                    </div>
                  </div>
                  <Link to="/404" className="team-card-icon">
                    <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10" fill="none">
                      <path d="M7.85986 2.43872L1.7123 8.58629L0.702148 7.57614L6.84971 1.42857H1.43131V0H9.28843V7.85714H7.85986V2.43872Z" fill="currentColor" />
                    </svg>
                  </Link>
                  <div className="team-card-content">
                    <Link to="/404" className="team-card-name">
                      <h2 className="h6 fz-font-2xl">
                        Jacob Jones
                      </h2>
                    </Link>
                    <p className="team-card-position fz-font-sm m-0 common-white">
                      Sports Nutrition Specialist
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col-12 order-5">
                <div className="d-flex flex-wrap align-items-center justify-content-lg-between justify-content-center pb-50 pt-50 gap-md-4 gap-2 at_fade_anim" data-fade-from="bottom" data-duration="2">
                  <p className="neutral-900 mb-0">
                    [ Goal-focused ]
                  </p>
                  <p className="neutral-900 mb-0">
                    [ Data-driven ]
                  </p>
                  <p className="neutral-900 mb-0">
                    [ Built for athletes ]
                  </p>
                  <p className="neutral-900 mb-0">
                    [ Habit-centric ]
                  </p>
                  <p className="neutral-900 mb-0">
                    [Results-proven]
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-4-about bg-neutral-50 pt-120 pb-120">
        <div className="container">
          <div className="row g-4 align-items-end mb-50">
            <div className="col-lg-6">
              <span className="at-btn common-black bg-transparent mb-10 rounded-0 p-0">
                <span className="text-uppercase">
                  <span className="text-1">
                    cONTACT US
                  </span>
                  {' '}
                  <span className="text-2">
                    cONTACT US
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
              <h2 className="h1 alt-section-title fz-ds-1 lh-1 fw-500 mb-30 reveal-text mb-0">
                Get in touch
              </h2>
            </div>
            <div className="col-xxl-4 col-lg-6 col-md-8 ms-lg-auto text-lg-end">
              <div className="scroll-rotate d-lg-inline-block d-none">
                <svg xmlns="http://www.w3.org/2000/svg" width="100" height="100" viewBox="0 0 100 100" fill="none">
                  <path fillRule="evenodd" clipRule="evenodd" d="M53.5715 0H46.4286V41.3778L17.17 12.1193L12.1193 17.17L41.3778 46.4286H0V53.5715H41.3778L12.1193 82.83L17.17 87.8805L46.4286 58.622V100H53.5715V58.622L82.83 87.8805L87.8805 82.83L58.622 53.5715H100V46.4286H58.622L87.8805 17.17L82.83 12.1193L53.5715 41.3778V0Z" fill="currentColor" />
                </svg>
              </div>
              <p className="fz-font-lg pt-lg-4 mb-0">
                Start your journey by reaching our team.{' '}
                <br />
                {' '}Our coaches will respond within 1–2 business days.
              </p>
            </div>
          </div>
          <div className="row">
            <div className="col-xxl-4 col-lg-5">
              <div className="row g-4">
                <div className="col-lg-12 col-md-6">
                  <div className="d-flex gap-4">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M20 40V20H0L20 0L40 20V40H20Z" fill="currentColor" />
                        <path d="M0 20L20 40H0V20Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="h6 fw-600">
                        Headquarters
                      </h3>
                      <div className="d-flex flex-wrap gap-md-5 gap-4">
                        <span className="fz-font-md neutral-500">
                          FitForge Athletic Center, Suite 400{' '}
                          <br className="d-block" />
                          {' '}San Francisco, CA 94107, USA{' '}
                          <br className="d-block" />
                          {' '}Phone:{' '}
                          <span className="neutral-900">
                            <a href="tel:+18005553488">
                              (800) 555-3488
                            </a>
                          </span>
                          {' '}
                          <br className="d-block" />
                          {' '}Email:{' '}
                          <span className="neutral-900">
                            <a href="mailto:support@fitforge.app">
                              support@fitforge.app
                            </a>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-12 col-md-6">
                  <div className="d-flex gap-4 pt-lg-5">
                    <div className="icon">
                      <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M20 20V10L30 0H40V10L30 20H20Z" fill="currentColor" />
                        <path d="M20 30V20H10L20 10L10 0H0V20H10L0 30V40H10L20 30Z" fill="currentColor" />
                        <path d="M20 30L30 40H40V20H30L20 30Z" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <h3 className="h6 fw-600">
                        Performance Lab
                      </h3>
                      <div className="d-flex flex-wrap gap-md-5 gap-4">
                        <span className="fz-font-md neutral-500">
                          FitForge Performance Lab, Suite 1200{' '}
                          <br className="d-block" />
                          {' '}New York, NY 10010, USA{' '}
                          <br className="d-block" />
                          {' '}Phone:{' '}
                          <span className="neutral-900">
                            <a href="tel:+18005553489">
                              (800) 555-3489
                            </a>
                          </span>
                          {' '}
                          <br className="d-block" />
                          {' '}Email:{' '}
                          <span className="neutral-900">
                            <a href="mailto:contact@fitforge.app">
                              contact@fitforge.app
                            </a>
                          </span>
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="row">
                <div className="col-xxl-6 col-lg-8 mx-auto">
                  <ul className="at-social-list list-unstyled d-flex flex-wrap gap-md-4 gap-3 pt-50">
                    <li>
                      <a href="#" className="at-social__link d-flex align-items-center gap-2" aria-label="Twitter">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 16 15" fill="none" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M0 0H5.25L8.98421 5.21053L13.5 0H15.5L9.8895 6.47368L16 15H10.75L7.01579 9.7895L2.5 15H0.5L6.11053 8.52632L0 0ZM11.5204 13.5L2.92043 1.5H4.47957L13.0796 13.5H11.5204Z" fill="currentColor" />
                        </svg>
                        {' '}
                        <span className="fw-500">
                          Twitter
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="at-social__link d-flex align-items-center gap-2" aria-label="Facebook">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                          <path d="M12.4024 18V11.0344H14.7347L15.0838 8.3265H12.4024V6.59765C12.4024 5.81364 12.62 5.27934 13.7443 5.27934L15.1783 5.27867V2.85676C14.9302 2.82382 14.0791 2.75006 13.0888 2.75006C11.0213 2.75006 9.606 4.01198 9.606 6.32952V8.3265H7.2677V11.0344H9.606V18H1C0.44772 18 0 17.5523 0 17V1C0 0.44772 0.44772 0 1 0H17C17.5523 0 18 0.44772 18 1V17C18 17.5523 17.5523 18 17 18H12.4024Z" fill="currentColor" />
                        </svg>
                        {' '}
                        <span className="fw-500">
                          Facebook
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="at-social__link d-flex align-items-center gap-2" aria-label="LinkedIn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                          <path d="M15.3352 15.339H12.6697V11.1622C12.6697 10.1662 12.6495 8.8845 11.2807 8.8845C9.89102 8.8845 9.67872 9.9683 9.67872 11.0887V15.339H7.01322V6.75H9.57372V7.9207H9.60822C9.96602 7.2457 10.836 6.53325 12.1357 6.53325C14.8365 6.53325 15.336 8.3108 15.336 10.6245L15.3352 15.339ZM4.00275 5.57475C3.14475 5.57475 2.4555 4.88025 2.4555 4.026C2.4555 3.1725 3.1455 2.47875 4.00275 2.47875C4.85775 2.47875 5.55075 3.1725 5.55075 4.026C5.55075 4.88025 4.857 5.57475 4.00275 5.57475ZM5.33925 15.339H2.66625V6.75H5.33925V15.339ZM16.6687 0H1.32825C0.594 0 0 0.5805 0 1.29675V16.7033C0 17.4202 0.594 18 1.32825 18H16.6665C17.4 18 18 17.4202 18 16.7033V1.29675C18 0.5805 17.4 0 16.6665 0H16.6687Z" fill="currentColor" />
                        </svg>
                        {' '}
                        <span className="fw-500">
                          Linkedin
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="at-social__link d-flex align-items-center gap-2" aria-label="Instagram">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 18 18" fill="none" aria-hidden="true">
                          <path d="M9.92475 0C10.9376 0.00167406 11.4509 0.00703828 11.8945 0.0202418L12.0692 0.025948C12.2709 0.0331213 12.47 0.0421215 12.7101 0.0533719C13.6678 0.0976265 14.3211 0.249129 14.8949 0.471887C15.4881 0.700648 15.9892 1.00966 16.4894 1.50993C16.9889 2.0102 17.298 2.51271 17.5275 3.10448C17.7494 3.67751 17.901 4.33153 17.946 5.28931C17.9567 5.52933 17.9653 5.72841 17.9725 5.93024L17.9781 6.10492C17.9913 6.5484 17.9973 7.06177 17.9992 8.07471L17.9999 8.74577C18 8.82777 18 8.91237 18 8.99967L17.9999 9.25357L17.9994 9.92472C17.9977 10.9376 17.9923 11.451 17.9791 11.8944L17.9734 12.0691C17.9662 12.271 17.9572 12.4701 17.946 12.7101C17.9017 13.6679 17.7494 14.3211 17.5275 14.8949C17.2987 15.4882 16.9889 15.9892 16.4894 16.4895C15.9892 16.989 15.4859 17.298 14.8949 17.5275C14.3211 17.7495 13.6678 17.901 12.7101 17.946C12.47 17.9567 12.2709 17.9654 12.0692 17.9725L11.8945 17.9781C11.4509 17.9914 10.9376 17.9973 9.92475 17.9993L9.25359 18C9.1716 18 9.087 18 8.99969 18H8.7458L8.07464 17.9994C7.06175 17.9977 6.54839 17.9924 6.1049 17.9791L5.93022 17.9734C5.72839 17.9662 5.5293 17.9572 5.2893 17.946C4.33151 17.9018 3.67899 17.7495 3.10448 17.5275C2.51195 17.2988 2.01018 16.989 1.50992 16.4895C1.00965 15.9892 0.701394 15.4859 0.471886 14.8949C0.249129 14.3211 0.0983735 13.6679 0.053372 12.7101C0.0426796 12.4701 0.0339582 12.271 0.026893 12.0691L0.0212318 11.8944C0.00806435 11.451 0.00206123 10.9376 0.000117163 9.92472L0 8.07471C0.00167406 7.06177 0.00702925 6.5484 0.0202327 6.10492L0.0259479 5.93024C0.0331212 5.72841 0.0421216 5.52933 0.053372 5.28931C0.0976175 4.33078 0.249129 3.67825 0.471886 3.10448C0.700638 2.51196 1.00965 2.0102 1.50992 1.50993C2.01018 1.00966 2.51271 0.701396 3.10448 0.471887C3.67825 0.249129 4.33077 0.0983735 5.2893 0.0533719C5.5293 0.0426885 5.72839 0.0339673 5.93022 0.026902L6.1049 0.0212407C6.54839 0.00806417 7.06175 0.00206102 8.07464 0.000116949L9.92475 0ZM8.99969 4.49953C6.51298 4.49953 4.49952 6.51518 4.49952 8.99967C4.49952 11.4864 6.51517 13.4998 8.99969 13.4998C11.4864 13.4998 13.4998 11.4842 13.4998 8.99967C13.4998 6.513 11.4841 4.49953 8.99969 4.49953ZM8.99969 6.2996C10.491 6.2996 11.6998 7.50805 11.6998 8.99967C11.6998 10.4909 10.4913 11.6998 8.99969 11.6998C7.50843 11.6998 6.29958 10.4914 6.29958 8.99967C6.29958 7.50841 7.50798 6.2996 8.99969 6.2996ZM13.7249 3.14949C13.1045 3.14949 12.5998 3.65342 12.5998 4.27376C12.5998 4.89411 13.1037 5.39882 13.7249 5.39882C14.3452 5.39882 14.8499 4.89489 14.8499 4.27376C14.8499 3.65342 14.3443 3.14871 13.7249 3.14949Z" fill="currentColor" />
                        </svg>
                        {' '}
                        <span className="fw-500">
                          Instagram
                        </span>
                      </a>
                    </li>
                    <li>
                      <a href="#" className="at-social__link d-flex align-items-center gap-2" aria-label="Youtube">
                        <svg xmlns="http://www.w3.org/2000/svg" width="18" height="13" viewBox="0 0 18 13" fill="none" aria-hidden="true">
                          <path fillRule="evenodd" clipRule="evenodd" d="M16.0322 0.388283C16.8071 0.602295 17.4162 1.23059 17.6237 2.03009C17.9985 3.47775 18 6.49997 18 6.49997C18 6.49997 18 9.52214 17.6237 10.9698C17.4162 11.7694 16.8071 12.3977 16.0322 12.6116C14.6291 13 8.99997 13 8.99997 13C8.99997 13 3.37092 13 1.96772 12.6116C1.1928 12.3977 0.583804 11.7694 0.376354 10.9698C-3.83173e-08 9.52214 0 6.49997 0 6.49997C0 6.49997 -3.83173e-08 3.47775 0.376354 2.03009C0.583804 1.23059 1.1928 0.602295 1.96772 0.388283C3.37092 1.18595e-07 8.99997 0 8.99997 0C8.99997 0 14.6291 1.18595e-07 16.0322 0.388283ZM11.8751 6.50027L7.19879 9.2855V3.71499L11.8751 6.50027Z" fill="currentColor" />
                        </svg>
                        {' '}
                        <span className="fw-500">
                          Youtube
                        </span>
                      </a>
                    </li>
                  </ul>
                </div>
                <div className="col-lg-3 col-md-4"></div>
              </div>
            </div>
            <div className="col-xxl-8 col-lg-7 ms-auto pt-lg-0 pt-30">
              <form className="sec-4-about-form" action="#" method="post">
                <div className="sec-4-about-form__field">
                  <input type="text" className="sec-4-about-form__input" name="name" placeholder="Your name *" required aria-label="Your name" />
                </div>
                <div className="sec-4-about-form__field">
                  <input type="email" className="sec-4-about-form__input" name="email" placeholder="Your email *" required aria-label="Your email" />
                </div>
                <div className="sec-4-about-form__field">
                  <input type="tel" className="sec-4-about-form__input" name="phone" placeholder="Your phone *" required aria-label="Your phone" />
                </div>
                <div className="sec-4-about-form__field">
                  <textarea className="sec-4-about-form__input sec-4-about-form__textarea" name="message" placeholder="Your message *" rows={5} required aria-label="Your message" />
                </div>
                <div className="sec-4-about-form__actions">
                  <button type="submit" className="sec-4-about-form__btn at-btn">
                    <span>
                      <span className="text-1 text-capitalize">
                        Send Message
                      </span>
                      {' '}
                      <span className="text-2 text-capitalize">
                        Send Message
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
                  </button>
                </div>
                <p className="sec-4-about-form__disclaimer">
                  By submitting, you agree to our{' '}
                  <a href="#" className="sec-4-about-form__link">
                    Terms
                  </a>
                  {' '}and{' '}
                  <a href="#" className="sec-4-about-form__link">
                    Privacy Policy
                  </a>
                  .
                </p>
              </form>
            </div>
          </div>
        </div>
      </div>
      <div className="home-3-section-11 overflow-hidden pb-100">
        <div className="container section-fix pt-100">
          <div className="row g-4 section-title-pin ">
            <div className="col-xxl-6 col-lg-5 h-100">
              <span className="at-btn common-black text-uppercase bg-transparent mb-10 rounded-0 p-0">
                <span className="text-uppercase">
                  <span className="text-1">
                    Fitness Insights
                  </span>
                  {' '}
                  <span className="text-2">
                    Fitness Insights
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
              <h3 className="reveal-text fz-ds-1 mb-30 fw-500 lh-1">
                Explore our Training Journal
              </h3>
              <Link className="at-btn" to="/404">
                <span>
                  <span className="text-1">
                    ALL INSIGHTS
                  </span>
                  {' '}
                  <span className="text-2">
                    ALL INSIGHTS
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
              </Link>
            </div>
            <div className="col-xxl-6 col-lg-7 p-relative">
              <div className="scroll-section vertical-section section">
                <div className="wrapper">
                  <div role="list" className="list">
                    <div className="item">
                      <article className="blog-card-2 bg-neutral-0 py-5">
                        <div className="blog-card-2__left flex-grow-1">
                          <span className="blog-card-2__category">
                            Strength
                          </span>
                          <h4 className="h6 blog-card-2__title">
                            <Link to="/404" className="blog-card-2__title-link">
                              Progressive Overload: Structuring Routines for Consistent Strength Gains
                            </Link>
                          </h4>
                          <p className="blog-card-2__meta">
                            <span className="blog-card-2__meta-text">
                              By
                            </span>
                            {' '}
                            <Link to="/404" className="blog-card-2__author">
                              Marcus
                            </Link>
                            {' '}
                            <span className="blog-card-2__meta-text">
                              – July 8, 2026
                            </span>
                          </p>
                        </div>
                        <div className="blog-card-2__thumb hover-effect-1">
                          <a href="#" className="blog-card-2__img-link">
                            <img src="/assets/imgs/thegrind/4J9A1524.webp" className="blog-card-2__img" alt="FitForge workout" />
                          </a>
                        </div>
                      </article>
                    </div>
                    <div className="item">
                      <article className="blog-card-2 bg-neutral-0 py-5">
                        <div className="blog-card-2__left flex-grow-1">
                          <span className="blog-card-2__category">
                            Nutrition
                          </span>
                          <h4 className="h6 blog-card-2__title">
                            <Link to="/404" className="blog-card-2__title-link">
                              Macronutrient Essentials: Fueling Workouts and Post-Exercise Recovery
                            </Link>
                          </h4>
                          <p className="blog-card-2__meta">
                            <span className="blog-card-2__meta-text">
                              By
                            </span>
                            {' '}
                            <Link to="/404" className="blog-card-2__author">
                              Sarah
                            </Link>
                            {' '}
                            <span className="blog-card-2__meta-text">
                              – July 3, 2026
                            </span>
                          </p>
                        </div>
                        <div className="blog-card-2__thumb hover-effect-1">
                          <a href="#" className="blog-card-2__img-link">
                            <img src="/assets/imgs/thegrind/don-IBIZA-DAG-1-Running-35-p-2000.webp" className="blog-card-2__img" alt="FitForge nutrition" />
                          </a>
                        </div>
                      </article>
                    </div>
                    <div className="item">
                      <article className="blog-card-2 bg-neutral-0 py-5">
                        <div className="blog-card-2__left flex-grow-1">
                          <span className="blog-card-2__category">
                            Recovery
                          </span>
                          <h4 className="h6 blog-card-2__title">
                            <Link to="/404" className="blog-card-2__title-link">
                              Sleep Architecture and Muscle Repair: The Real Key to Better Performance
                            </Link>
                          </h4>
                          <p className="blog-card-2__meta">
                            <span className="blog-card-2__meta-text">
                              By
                            </span>
                            {' '}
                            <Link to="/404" className="blog-card-2__author">
                              David
                            </Link>
                            {' '}
                            <span className="blog-card-2__meta-text">
                              – July 17, 2026
                            </span>
                          </p>
                        </div>
                        <div className="blog-card-2__thumb hover-effect-1">
                          <a href="#" className="blog-card-2__img-link">
                            <img src="/assets/imgs/thegrind/don-IBIZA-DAG-2-Running-6.webp" className="blog-card-2__img" alt="FitForge recovery" />
                          </a>
                        </div>
                      </article>
                    </div>
                    <div className="item">
                      <article className="blog-card-2 bg-neutral-0 py-5">
                        <div className="blog-card-2__left flex-grow-1">
                          <span className="blog-card-2__category">
                            Hydration
                          </span>
                          <h4 className="h6 blog-card-2__title">
                            <Link to="/404" className="blog-card-2__title-link">
                              Hydration Timing: Maintaining Peak Physical Output During Intense Sessions
                            </Link>
                          </h4>
                          <p className="blog-card-2__meta">
                            <span className="blog-card-2__meta-text">
                              By
                            </span>
                            {' '}
                            <Link to="/404" className="blog-card-2__author">
                              Elena
                            </Link>
                            {' '}
                            <span className="blog-card-2__meta-text">
                              – July 28, 2026
                            </span>
                          </p>
                        </div>
                        <div className="blog-card-2__thumb hover-effect-1">
                          <a href="#" className="blog-card-2__img-link">
                            <img src="/assets/imgs/thegrind/IMG_1212.webp" className="blog-card-2__img" alt="FitForge hydration" />
                          </a>
                        </div>
                      </article>
                    </div>
                    <div className="item">
                      <article className="blog-card-2 bg-neutral-0 py-5">
                        <div className="blog-card-2__left flex-grow-1">
                          <span className="blog-card-2__category">
                            Habits
                          </span>
                          <h4 className="h6 blog-card-2__title">
                            <Link to="/404" className="blog-card-2__title-link">
                              Workout Consistency: Building Sustainable Long-Term Fitness Habits
                            </Link>
                          </h4>
                          <p className="blog-card-2__meta">
                            <span className="blog-card-2__meta-text">
                              By
                            </span>
                            {' '}
                            <Link to="/404" className="blog-card-2__author">
                              Marcus
                            </Link>
                            {' '}
                            <span className="blog-card-2__meta-text">
                              – July 08, 2026
                            </span>
                          </p>
                        </div>
                        <div className="blog-card-2__thumb hover-effect-1">
                          <a href="#" className="blog-card-2__img-link">
                            <img src="/assets/imgs/thegrind/IMG_1213.webp" className="blog-card-2__img" alt="FitForge habits" />
                          </a>
                        </div>
                      </article>
                    </div>
                    <div className="item">
                      <article className="blog-card-2 bg-neutral-0 py-5">
                        <div className="blog-card-2__left flex-grow-1">
                          <span className="blog-card-2__category">
                            Mobility
                          </span>
                          <h4 className="h6 blog-card-2__title">
                            <Link to="/404" className="blog-card-2__title-link">
                              Dynamic Warmups and Joint Health: Staying Injury-Free Through Heavy Cycles
                            </Link>
                          </h4>
                          <p className="blog-card-2__meta">
                            <span className="blog-card-2__meta-text">
                              By
                            </span>
                            {' '}
                            <Link to="/404" className="blog-card-2__author">
                              Emma
                            </Link>
                            {' '}
                            <span className="blog-card-2__meta-text">
                              – July 17, 2026
                            </span>
                          </p>
                        </div>
                        <div className="blog-card-2__thumb hover-effect-1">
                          <a href="#" className="blog-card-2__img-link">
                            <img src="/assets/imgs/thegrind/pexels-cristian-rojas-10042883.webp" className="blog-card-2__img" alt="FitForge mobility" />
                          </a>
                        </div>
                      </article>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-5-about pt-65 pb-65">
        <div className="at-brand-scroll carouselTicker carouselTicker-right">
          <ul className="at-brand-scroll-wrap d-flex justify-content-center gap-2 carouselTicker__list">
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="garmin">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Garmin</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="apple-health">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Apple Health</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="strava">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Strava</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="whoop">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">WHOOP</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="oura">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Oura Ring</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="polar">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Polar</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="fitbit">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Fitbit</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="peloton">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Peloton</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="suunto">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Suunto</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="myfitnesspal">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">MyFitnessPal</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="concept2">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Concept2</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="wahoo">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Wahoo</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="nikerun">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Nike Run Club</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="coros">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">COROS</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="zwift">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Zwift</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="garmin">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Garmin</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="strava">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Strava</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="whoop">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">WHOOP</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="apple-health">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Apple Health</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="oura">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Oura Ring</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="peloton">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Peloton</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="polar">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Polar</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="concept2">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Concept2</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="myfitnesspal">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">MyFitnessPal</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="fitbit">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Fitbit</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="wahoo">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Wahoo</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="suunto">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Suunto</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="nikerun">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Nike Run Club</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="coros">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">COROS</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="garmin">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Garmin</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="whoop">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">WHOOP</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="apple-health">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Apple Health</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="strava">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Strava</span>
                  </span>
                </span>
              </div>
            </li>
            <li className="at-brand-item">
              <div className="brand">
                <span className="brand-logo-slide" data-logo="concept2">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Concept2</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="peloton">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Peloton</span>
                  </span>
                </span>
                {' '}
                <span className="brand-logo-slide" data-logo="oura">
                  <span className="platform-brand-badge">
                    <span className="platform-brand-name">Oura Ring</span>
                  </span>
                </span>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </main>
  );
}

export default memo(About);
