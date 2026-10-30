import { memo } from 'react';
import { Link } from 'react-router-dom';

function Home() {
  return (
    <main>
      {' '}
      <div className="sec-1-home-7 p-relative z-index-1 overflow-hidden">
        <div className="sec-1-home-7__bg d-flex">
          <div className="sec-1-home-7__bg-left"></div>
          <div className="sec-1-home-7__bg-right"></div>
        </div>
        <div className="sec-1-home-7__star d-none d-lg-flex">
          <img className="at-scroll-rotate" data-rotate-duration="18" data-rotate-sensitivity="0.18" data-rotate-boost="12" src="/assets/imgs/pages/home-7/star-asterisk.svg" alt="decorative star" />
        </div>
        <div className="sec-1-home-7__img-wrap">
          <div className="anim-zoomin">
            <img className="sec-1-home-7__img" src="/assets/imgs/pages/home-7/hero-tracker.png" alt="Futuristic VR experience" />
          </div>
        </div>
        <div className="container-fluid p-relative">
          <div className="row g-0 align-items-stretch">
            <div className="col-lg-6 p-relative sec-1-home-7__left">
              <div className="sec-1-home-7__coords d-flex align-items-center gap-2">
                <svg xmlns="http://www.w3.org/2000/svg" width="22" height="17" viewBox="0 0 27 20" fill="none">
                  <path d="M13.3203 20C5.9637 20 0 15.5228 0 10C0 4.47715 5.9637 0 13.3203 0C20.6769 0 26.6406 4.47715 26.6406 10C26.6406 15.5228 20.6769 20 13.3203 20ZM10.27 17.6674C8.98779 15.6259 8.20174 13.3742 8.02857 11H2.7465C3.27413 14.1765 6.28238 16.7747 10.27 17.6674ZM10.6971 11C10.8975 13.4388 11.8255 15.7297 13.3203 17.752C14.8151 15.7297 15.7431 13.4388 15.9435 11H10.6971ZM23.8941 11H18.6121C18.4389 13.3742 17.6529 15.6259 16.3707 17.6674C20.3582 16.7747 23.3665 14.1765 23.8941 11ZM2.7465 9H8.02857C8.20174 6.62577 8.98779 4.37407 10.27 2.33256C6.28238 3.22533 3.27413 5.8235 2.7465 9ZM10.6971 9H15.9435C15.7431 6.56122 14.8151 4.27025 13.3203 2.24799C11.8255 4.27025 10.8975 6.56122 10.6971 9ZM16.3707 2.33256C17.6529 4.37407 18.4389 6.62577 18.6121 9H23.8941C23.3665 5.8235 20.3582 3.22533 16.3707 2.33256Z" fill="currentColor" />
                </svg>
                {' '}
                <span className="fw-500 text-uppercase text-scramble" data-scramble-text="37.7749° N, 122.4194° W">
                  37.7749° N, 122.4194° W
                </span>
              </div>
              <div className="sec-1-home-7__tags d-flex flex-wrap gap-2">
                <Link to="/pricing" className="sec-1-home-7__tag at_fade_anim" data-start="100%" data-delay="0.1">
                  <span>
                    Live Tracking
                  </span>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
                  </svg>
                </Link>
                {' '}
                <Link to="/about" className="sec-1-home-7__tag at_fade_anim" data-start="100%" data-delay="0.2">
                  <span>
                    Workout Plans
                  </span>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
                  </svg>
                </Link>
                {' '}
                <Link to="/about" className="sec-1-home-7__tag at_fade_anim" data-start="100%" data-delay="0.4">
                  <span>
                    Smart Analytics
                  </span>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
                  </svg>
                </Link>
                {' '}
                <Link to="/about" className="sec-1-home-7__tag at_fade_anim" data-start="100%" data-delay="0.1">
                  <span>
                    Nutrition Goals
                  </span>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
                  </svg>
                </Link>
                {' '}
                <Link to="/about" className="sec-1-home-7__tag at_fade_anim" data-start="100%" data-delay="0.3">
                  <span>
                    Hydration Monitor
                  </span>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-lg-6 sec-1-home-7__right">
              <div className="sec-1-home-7__content">
                <ul className="sec-1-home-7__brackets list-unstyled d-flex flex-wrap gap-4 mb-30">
                  <li className="at_fade_anim" data-start="100%" data-delay="0.1">
                    [ PLAN ]
                  </li>
                  <li className="at_fade_anim" data-start="100%" data-delay="0.2">
                    [ TRACK ]
                  </li>
                  <li className="at_fade_anim" data-start="100%" data-delay="0.3">
                    [ TRAIN ]
                  </li>
                  <li className="at_fade_anim" data-start="100%" data-delay="0.4">
                    [ FORGE ]
                  </li>
                </ul>
                <div className="sec-1-home-7__headline-wrap p-relative">
                  <h1 className="sec-1-home-7__headline text-white text-uppercase fw-700 mb-30 at_fade_anim" data-start="100%" data-delay="0.3">
                    Mastering <br />
                    Your Fitness <br />
                    Journey
                  </h1>
                  <span className="sec-1-home-7__headline-arrow-cover d-none d-md-inline-block">
                    <span className="sec-1-home-7__headline-arrow at_fade_anim" data-start="100%" data-delay="0.6">
                      <svg xmlns="http://www.w3.org/2000/svg" width="70" height="53" viewBox="0 0 69 53" fill="none">
                        <path d="M40.2 0L67.72 25.4267L69 26.7141L67.72 27.6797L40.2 53.1064L38.6 51.4971L64.2 27.6797H-59V25.4267H64.2L38.6 1.60928L40.2 0Z" fill="currentColor" />
                      </svg>
                    </span>
                  </span>
                </div>
                <p className="sec-1-home-7__desc text-white mb-40 at_fade_anim" data-start="100%" data-delay="0.5">
                  From daily workouts to long-term goals, we deliver the intelligent tools and data-driven guidance athletes need to elevate their performance. Track every rep with confidence.
                </p>
                <div className="sec-1-home-7__cta d-flex align-items-center flex-wrap gap-2 mb-60">
                  <Link to="/pricing" className="sec-1-home-7__cta-btn at_fade_anim" data-start="100%" data-delay="0.3">
                    <span>
                      Start Your Training
                    </span>
                  </Link>
                  {' '}
                  <Link to="/pricing" className="sec-1-home-7__cta-arrow" aria-label="Start Your Training">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 11" fill="none">
                      <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
                <div className="sec-1-home-7__proof d-flex align-items-center flex-wrap gap-3">
                  <div className="sec-1-home-7__avatars">
                    <span className="sec-1-home-7__avatar at_fade_anim" data-start="100%" data-delay="0.1">
                      <img src="/assets/imgs/pages/home-7/avatar-1.webp" alt="Athlete 1" />
                    </span>
                    {' '}
                    <span className="sec-1-home-7__avatar at_fade_anim" data-start="100%" data-delay="0.2">
                      <img src="/assets/imgs/pages/home-7/avatar-2.webp" alt="Athlete 2" />
                    </span>
                    {' '}
                    <span className="sec-1-home-7__avatar at_fade_anim" data-start="100%" data-delay="0.3">
                      <img src="/assets/imgs/pages/home-7/avatar-3.webp" alt="Athlete 3" />
                    </span>
                    {' '}
                    <span className="sec-1-home-7__avatar at_fade_anim" data-start="100%" data-delay="0.4">
                      <img src="/assets/imgs/pages/home-7/avatar-4.webp" alt="Athlete 4" />
                    </span>
                    {' '}
                    <span className="sec-1-home-7__avatar at_fade_anim" data-start="100%" data-delay="0.5">
                      <img src="/assets/imgs/pages/home-7/avatar-5.webp" alt="Athlete 5" />
                    </span>
                  </div>
                  <p className="sec-1-home-7__proof-text text-white fw-700 mb-0 at_fade_anim" data-start="100%" data-delay="0.6">
                    50+ Workouts designed with{' '}
                    <br className="d-none d-xl-inline" />
                    FitForge training tools
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-2-home-7 p-relative bg-neutral-0">
        <div className="container-2200 px-lg-5 px-3">
          <div className="sec-2-home-7__intro row g-0 pt-100 pb-60">
            <div className="col-lg-7 col-12 pe-lg-4">
              <Link to="/about" className="sec-2-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-30 text-uppercase">
                <span className="text-scramble" data-scramble-text="About Us">
                  About Us
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </Link>
              <h2 className="sec-2-home-7__headline mb-0">
                <span className="sec-2-home-7__headline-strong reveal-text">
                  We Power Your Consistent Daily Fitness Growth
                </span>
              </h2>
            </div>
            <div className="col-lg-5 col-12 mt-4 mt-lg-0 ps-lg-4 d-flex align-items-end">
              <p className="sec-2-home-7__desc mb-0  reveal-text">
                <strong>
                  FitForge
                </strong>
                {' '}is more than a fitness tracker; we are a dedicated companion for athletes who aim to progress. We{' '}
                <strong>
                  combine smart
                </strong>
                {' '}workout logging with personalized analytics to{' '}
                <strong>
                  turn daily
                </strong>
                {' '}efforts into measurable long-term fitness.
              </p>
            </div>
          </div>
          <div className="sec-2-home-7__grid">
            <div className="sec-2-home-7__row">
              <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-1">
                <div className="sec-2-home-7__img-wrap">
                  <div className="thumb fix anim-zoomin">
                    <img data-speed=".8" src="/assets/imgs/thegrind/pexels-cristian-rojas-10042883.webp" alt="FitForge workout" />
                  </div>
                </div>
              </div>
              <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-2">
                <div className="ps-4">
                  <div className="sec-2-home-7__feature-icon mb-3 at_fade_anim">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M40 20V0H20H0V20V40H20L40 20ZM40 20H20V40L0 20L20 0L40 20Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="sec-2-home-7__feature-title at-char-animation">
                    Workout Builder
                  </h3>
                  <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">
                    In your daily training, consistency is vital. We have designed our system to structure personalized workouts in minutes, keeping every session purposeful.
                  </p>
                </div>
              </div>
              <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-4">
                <h3 className="sec-2-home-7__stat-value mb-3">
                  <span className="odometer" data-count="150">
                    0
                  </span>
                  +
                </h3>
                <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">
                  Exercise variations with step-by-step technique guides
                </p>
              </div>
            </div>
            <div className="sec-2-home-7__row">
              <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-2">
                <div className="sec-2-home-7__img-wrap ms-2">
                  <div className="thumb fix anim-zoomin">
                    <img data-speed=".8" src="/assets/imgs/thegrind/pexels-cristian-rojas-8809594.webp" alt="FitForge athlete" />
                  </div>
                </div>
              </div>
              <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-3">
                <div className="ps-4">
                  <div className="sec-2-home-7__feature-icon mb-3 at_fade_anim">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path d="M40 12L32 20V8H20L28 0H40V12Z" fill="currentColor" />
                      <path d="M8 20L20 8L32 20L20 32L8 20Z" fill="currentColor" />
                      <path d="M8 20L0 28V40H12L20 32L28 40H40V28L32 20V32H20H8V20Z" fill="currentColor" />
                      <path d="M8 20L0 12V0H12L20 8H8V20Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="sec-2-home-7__feature-title at-char-animation">
                    Active Analytics
                  </h3>
                  <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">
                    We do not just log numbers; we reveal insights. Our dashboard focuses on personal milestones, weekly trends, and body metrics over time.
                  </p>
                </div>
              </div>
              <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-5">
                <h3 className="sec-2-home-7__stat-value mb-3">
                  <span className="odometer" data-count="24">
                    0
                  </span>
                  /7
                </h3>
                <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">
                  Hours Daily Access to Your Fitness Logs
                </p>
              </div>
            </div>
            <div className="sec-2-home-7__row">
              <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-1">
                <h3 className="sec-2-home-7__stat-value mb-3">
                  <span className="odometer" data-count="100">
                    0
                  </span>
                  %
                </h3>
                <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">
                  Calorie and macronutrient calculation accuracy.
                </p>
              </div>
              <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-3">
                <div className="sec-2-home-7__img-wrap ms-2">
                  <div className="thumb fix anim-zoomin">
                    <img data-speed=".8" src="/assets/imgs/thegrind/pexels-mastercowley-1153370.webp" alt="FitForge training" />
                  </div>
                </div>
              </div>
              <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-4">
                <div className="ps-4">
                  <div className="sec-2-home-7__feature-icon mb-3 at_fade_anim">
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                      <path fillRule="evenodd" clipRule="evenodd" d="M39.5 0.5L26.5 13.5L13.5 0.5L0.5 13.5V39.5L13.5 26.5L26.5 39.5L39.5 26.5V0.5ZM13.5 26.5V13.5H26.5V26.5H13.5Z" fill="currentColor" />
                    </svg>
                  </div>
                  <h3 className="sec-2-home-7__feature-title at-char-animation">
                    Habit Streaks
                  </h3>
                  <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">
                    We build routines that stay with you. Our streak tracking is designed to encourage your first 7 days and your first 365 days just as powerfully.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="home-2-section-8 py-4 ">
        <div className="swiper about-me-slider-active at-item-anime-area">
          <div className="swiper-wrapper">
            <div className="swiper-slide">
              <div className="about-me-slider-thumb at-item-anime marque">
                <img className="w-100 rounded-4" src="/assets/imgs/thegrind/IMG_1212.webp" alt="FitForge athlete training" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="about-me-slider-thumb at-item-anime marque">
                <img className="w-100 rounded-4" src="/assets/imgs/thegrind/don-IBIZA-DAG-1-Running-35-p-2000.webp" alt="FitForge gym workout" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="about-me-slider-thumb at-item-anime marque">
                <img className="w-100 rounded-4" src="/assets/imgs/thegrind/4J9A1524.webp" alt="FitForge fitness routine" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="about-me-slider-thumb at-item-anime marque">
                <img className="w-100 rounded-4" src="/assets/imgs/thegrind/don-IBIZA-DAG-2-Running-6.webp" alt="FitForge body training" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="about-me-slider-thumb at-item-anime marque">
                <img className="w-100 rounded-4" src="/assets/imgs/thegrind/IMG_1213.webp" alt="FitForge athlete session" />
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-4-home-7 bg-neutral-50 pt-120 pb-120">
        <div className="container-2200 px-lg-5 px-3">
          <div className="row g-4 g-xl-5 align-items-start">
            <div className="col-xl-3 col-lg-4 col-12">
              <div className="sec-4-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                <span className="text-scramble" data-scramble-text="Our mission">
                  Our mission
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </div>
              <div className="sec-4-home-7__frame overflow-hidden mt-4 at-hover-parallax" data-parallax-strength="18" data-parallax-scale="1.05">
                <img className="sec-4-home-7__img fix anim-zoomin" src="/assets/imgs/thegrind/the-grind-mindset-52.webp" alt="FitForge athletic focus" width="377" height="471" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-12">
              <h2 className="sec-4-home-7__title mb-4 mb-lg-5">
                <span className="reveal-text sec-4-home-7__title-part sec-4-home-7__title-part--950">
                  More than a tracker, we act as your fitness partner, delivering intelligent, personalized insights that drive health and strength.
                </span>
              </h2>
              <div className="sec-4-home-7__cta d-inline-flex align-items-stretch mb-60  at_fade_anim">
                <Link to="/about" className="at-btn sec-4-home-7__cta-btn text-capitalize">
                  <span>
                    <span className="text-1">
                      Explore Features
                    </span>
                    {' '}
                    <span className="text-2">
                      Explore Features
                    </span>
                  </span>
                </Link>
                {' '}
                <Link to="/about" className="sec-4-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label="Explore Features">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
              <div className="sec-4-home-7__locations row g-4 g-lg-5">
                <div className="col-lg-6 col-12">
                  <div className="d-flex gap-4">
                    <div className="sec-4-home-7__pin flex-shrink-0" aria-hidden="true">
                      <img src="/assets/imgs/pages/home-7/sec-4-pin-icon.svg" width="40" height="40" alt="" />
                    </div>
                    <div className="flex-grow-1 min-w-0">
                      <h3 className="sec-4-home-7__loc-title h6 mb-3 at-char-animation">
                        Headquarters
                      </h3>
                      <div className="sec-4-home-7__loc-body at_fade_anim">
                        <p className="mb-2">
                          FitForge Athletic Center, Suite 810
                          <br />
                          San Francisco, CA 94107, USA
                        </p>
                        <p className="mb-2">
                          Phone:{' '}
                          <a href="tel:+18005553488" className="sec-4-home-7__loc-strong">
                            (800) 555-3488
                          </a>
                        </p>
                        <p className="mb-0">
                          Email:{' '}
                          <a href="mailto:support@fitforge.app" className="sec-4-home-7__loc-strong">
                            support@fitforge.app
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="sec-4-home-7__loc-body sec-4-home-7__loc-body--solo ps-lg-4 at_fade_anim">
                    <p className="mb-2">
                      FitForge Performance Lab, Suite 1800
                      <br />
                      New York, NY 10016, USA
                    </p>
                    <p className="mb-2">
                      Phone:{' '}
                      <a href="tel:+18005553489" className="sec-4-home-7__loc-strong">
                        (800) 555-3489
                      </a>
                    </p>
                    <p className="mb-0">
                      Email:{' '}
                      <a href="mailto:contact@fitforge.app" className="sec-4-home-7__loc-strong">
                        contact@fitforge.app
                      </a>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-5-home-7 bg-neutral-0 overflow-hidden">
        <div className="container-2200 px-lg-5 px-3 pt-120 pb-80">
          <div className="row g-4 g-xl-5 align-items-start">
            <div className="col-xl-4 col-lg-5 col-12">
              <div className="sec-5-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                <span className="text-scramble" data-scramble-text="Core Capabilities">
                  Core Capabilities
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="sec-5-home-7__title mb-4 mb-xl-5 reveal-text">
                We Build Features That Athletes Rely On.
              </h2>
              <div className="sec-5-home-7__cta d-inline-flex align-items-stretch at_fade_anim">
                <Link to="/pricing" className="at-btn sec-5-home-7__cta-btn text-capitalize">
                  <span>
                    <span className="text-1">
                      Start Free Trial
                    </span>
                    {' '}
                    <span className="text-2">
                      Start Free Trial
                    </span>
                  </span>
                </Link>
                {' '}
                <Link to="/pricing" className="sec-5-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label="Start Free Trial">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-12 mx-lg-auto">
              <div className="sec-5-home-7__photo scroll-move-up">
                <div className="fix anim-zoomin">
                  <img src="/assets/imgs/thegrind/Marisja-Groen---Coach.webp" alt="Athlete tracking fitness goals" className="w-100 h-100 object-fit-cover" width="493" height="582" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-12">
              <div className="accordion accordion-flush sec-5-home-7__accordion" id="accordionSec5Home7">
                <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                  <h3 className="accordion-header" id="headingSec5H71">
                    <button className="accordion-button sec-5-home-7__acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H71" aria-expanded="true" aria-controls="collapseSec5H71">
                      <span className="sec-5-home-7__acc-title">
                        01. Live Workout Tracker
                      </span>
                      {' '}
                      <span className="sec-5-home-7__acc-toggle" aria-hidden="true">
                        <svg className="sec-5-home-7__acc-plus" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div id="collapseSec5H71" className="accordion-collapse collapse show" data-bs-parent="#accordionSec5Home7">
                    <div className="accordion-body sec-5-home-7__acc-body">
                      <p className="sec-5-home-7__acc-text mb-0">
                        Log your sets, repetitions, and rest intervals in real time. We focus on seamless logging that captures every effort and keeps your training organized.
                      </p>
                      <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                        <span className="sec-5-home-7__tag">
                          Sets &amp; Reps
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Rest Timers
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Exercise Logs
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                  <h3 className="accordion-header" id="headingSec5H72">
                    <button className="accordion-button sec-5-home-7__acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H72" aria-expanded="false" aria-controls="collapseSec5H72">
                      <span className="sec-5-home-7__acc-title">
                        02. Nutrition &amp; Macros
                      </span>
                      {' '}
                      <span className="sec-5-home-7__acc-toggle" aria-hidden="true">
                        <svg className="sec-5-home-7__acc-plus" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div id="collapseSec5H72" className="accordion-collapse collapse" data-bs-parent="#accordionSec5Home7">
                    <div className="accordion-body sec-5-home-7__acc-body">
                      <p className="sec-5-home-7__acc-text mb-0">
                        Log your daily calories, water intake, and macronutrients with clear visual breakdowns that keep you accountable day after day.
                      </p>
                      <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                        <span className="sec-5-home-7__tag">
                          Calorie Tracking
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Hydration Logs
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Macro Split
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                  <h3 className="accordion-header" id="headingSec5H73">
                    <button className="accordion-button sec-5-home-7__acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H73" aria-expanded="false" aria-controls="collapseSec5H73">
                      <span className="sec-5-home-7__acc-title">
                        03. Body &amp; Metric Analytics
                      </span>
                      {' '}
                      <span className="sec-5-home-7__acc-toggle" aria-hidden="true">
                        <svg className="sec-5-home-7__acc-plus" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div id="collapseSec5H73" className="accordion-collapse collapse" data-bs-parent="#accordionSec5Home7">
                    <div className="accordion-body sec-5-home-7__acc-body">
                      <p className="sec-5-home-7__acc-text mb-0">
                        Monitor body weight changes, waist measurements, and visual progress with responsive charts that reveal your body recomposition over time.
                      </p>
                      <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                        <span className="sec-5-home-7__tag">
                          Weight Charts
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Body Metrics
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Visual Trends
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                  <h3 className="accordion-header" id="headingSec5H74">
                    <button className="accordion-button sec-5-home-7__acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H74" aria-expanded="false" aria-controls="collapseSec5H74">
                      <span className="sec-5-home-7__acc-title">
                        04. AI Fitness Assistant
                      </span>
                      {' '}
                      <span className="sec-5-home-7__acc-toggle" aria-hidden="true">
                        <svg className="sec-5-home-7__acc-plus" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                          <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                        </svg>
                      </span>
                    </button>
                  </h3>
                  <div id="collapseSec5H74" className="accordion-collapse collapse" data-bs-parent="#accordionSec5Home7">
                    <div className="accordion-body sec-5-home-7__acc-body">
                      <p className="sec-5-home-7__acc-text mb-0">
                        Training is a daily discipline. FitForge will provide smart recommendations, automated streak tracking, and personalized exercise adjustments.
                      </p>
                      <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                        <span className="sec-5-home-7__tag">
                          Smart Guidance
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Streak Milestones
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Weekly Insights
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="container-fluid px-0 text-center">
          <div className="scroll-move-up">
            <h6 className="mb-4 mb-xl-5 reveal-text">
              Compatible with modern fitness equipment, health platforms, and wearable technology.
            </h6>
          </div>
        </div>
        <div className="container-fluid px-0">
          <div className="client-capsule-wrapper-box" data-t-throwable-scene="true">
            <div className="client-capsule-wrapper">
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                  GARMIN
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box bg-neutral-500 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '17px' }}>
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor"><path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M15.97 6.38c.62-.75 1.04-1.8 0.93-2.85-.9.04-1.99.6-2.63 1.35-.57.65-1.07 1.71-.93 2.73 1.01.08 2.01-.48 2.63-1.23z"/></svg>
                  APPLE HEALTH
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
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
                <span className="client-box client-box--brand-h7 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
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
                <span className="client-box bg-neutral-500 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  FITBIT
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.07em', fontSize: '18px' }}>
                  PELOTON
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  SUUNTO
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.05em', fontSize: '16px' }}>
                  MYFITNESSPAL
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box bg-neutral-500 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  WAHOO
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7 d-inline-flex align-items-center justify-content-center gap-2 px-4 text-white fw-700 text-uppercase" style={{ letterSpacing: '0.06em', fontSize: '18px' }}>
                  CONCEPT2
                </span>
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-6-home-7 p-relative bg-neutral-0">
        <div className="container-2200 px-lg-5 px-3">
          <div className="sec-6-home-7__header row g-0 pt-100 pb-50">
            <div className="col-lg-7 col-12">
              <Link to="/about" className="sec-6-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-3 text-uppercase">
                <span className="text-scramble" data-scramble-text="The Fitness Engine">
                  The Fitness Engine
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </Link>
              <h2 className="sec-6-home-7__title mb-0 reveal-text">
                How It Works
              </h2>
            </div>
            <div className="col-lg-5 col-12 mt-4 mt-lg-0 d-flex align-items-end justify-content-lg-end">
              <p className="sec-6-home-7__desc text-lg-end mb-0 at_fade_anim">
                Simple routines for dedicated athletes. How we take your fitness from random workouts to structured, measurable progress.
              </p>
            </div>
          </div>
          <div className="sec-6-home-7__chips d-none d-lg-flex flex-column mb-80">
            <span className="sec-6-home-7__chip sec-6-home-7__chip--1 at_fade_anim" data-delay="0.1">
              <span className="sec-6-home-7__chip-text">
                1. Goal Setup &amp; Profile
              </span>
            </span>
            {' '}
            <span className="sec-6-home-7__chip sec-6-home-7__chip--2 at_fade_anim" data-fade-offset="100" data-delay="0.2">
              <span className="sec-6-home-7__chip-text">
                2. Custom Workout Plan
              </span>
            </span>
            {' '}
            <span className="sec-6-home-7__chip sec-6-home-7__chip--3 at_fade_anim" data-fade-offset="100" data-delay="0.3">
              <span className="sec-6-home-7__chip-text">
                3. Track Live Sessions
              </span>
            </span>
            {' '}
            <span className="sec-6-home-7__chip sec-6-home-7__chip--4 at_fade_anim" data-fade-offset="100" data-delay="0.4">
              <span className="sec-6-home-7__chip-text">
                4. Review &amp; Progress
              </span>
            </span>
          </div>
          <div className="sec-6-home-7__cards pb-120">
            <div className="sec-6-home-7__card-wrap at_fade_anim" data-delay="0.1">
              <div className="sec-6-home-7__card">
                <div className="sec-6-home-7__card-body">
                  <p className="sec-6-home-7__card-num mb-0">
                    [01]
                  </p>
                  <h3 className="sec-6-home-7__card-title mb-0">
                    Profile &amp; Goal Setup
                  </h3>
                  <p className="sec-6-home-7__card-desc mb-0">
                    Establish your fitness profile, baseline measurements, and target milestones to generate your customized training direction.
                  </p>
                </div>
                <div className="sec-6-home-7__card-media">
                  <img src="/assets/imgs/thegrind/pexels-artempodrez-6253345.webp" alt="Profile & Goal Setup" />
                </div>
              </div>
            </div>
            <div className="sec-6-home-7__card-wrap at_fade_anim" data-delay="0.3">
              <div className="sec-6-home-7__card">
                <div className="sec-6-home-7__card-body">
                  <p className="sec-6-home-7__card-num mb-0">
                    [02]
                  </p>
                  <h3 className="sec-6-home-7__card-title mb-0">
                    Workout Planning
                  </h3>
                  <p className="sec-6-home-7__card-desc mb-0">
                    Assemble exercise routines from the library with targeted sets, repetition ranges, and scheduled rest days each week.
                  </p>
                </div>
                <div className="sec-6-home-7__card-media">
                  <img src="/assets/imgs/thegrind/VIDEO_POSTER.webp" alt="Workout Planning" />
                </div>
              </div>
            </div>
            <div className="sec-6-home-7__card-wrap at_fade_anim" data-delay="0.5">
              <div className="sec-6-home-7__card">
                <div className="sec-6-home-7__card-body">
                  <p className="sec-6-home-7__card-num mb-0">
                    [03]
                  </p>
                  <h3 className="sec-6-home-7__card-title mb-0">
                    Active Session Log
                  </h3>
                  <p className="sec-6-home-7__card-desc mb-0">
                    Log your live sets, monitor rest timers, and record personal weights smoothly as you complete each exercise.
                  </p>
                </div>
                <div className="sec-6-home-7__card-media">
                  <img src="/assets/imgs/thegrind/4J9A2355.webp" alt="Active Session Log" />
                </div>
              </div>
            </div>
            <div className="sec-6-home-7__card-wrap at_fade_anim" data-delay="0.7">
              <div className="sec-6-home-7__card">
                <div className="sec-6-home-7__card-body">
                  <p className="sec-6-home-7__card-num mb-0">
                    [04]
                  </p>
                  <h3 className="sec-6-home-7__card-title mb-0">
                    Review Progress
                  </h3>
                  <p className="sec-6-home-7__card-desc mb-0">
                    Analyze weekly volume, body recomposition stats, and streak achievements to consistently progress toward your ultimate peak.
                  </p>
                </div>
                <div className="sec-6-home-7__card-media">
                  <img src="/assets/imgs/thegrind/IMG_1213-p-500.webp" alt="Review Progress" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-7-home-7 overflow-hidden py-4">
        <div className="container-2200 px-lg-5 px-3 py-120">
          <div className="row align-items-center g-4 g-xxl-5">
            <div className="col-xxl-5 col-xl-6 col-12">
              <div className="sec-7-home-7__media">
                <div className="fix anim-zoomin">
                  <img src="/assets/imgs/thegrind/The-Grind-RunClub-10-kopie.webp" alt="FitForge athlete training" width="798" height="798" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-12">
              <div className="sec-7-home-7__content ms-xxl-4">
                <div className="sec-7-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-3 text-uppercase">
                  <span className="text-scramble" data-scramble-text="Ready to Transform Your Fitness ?">
                    Ready to Transform Your Fitness ?
                  </span>
                  {' '}
                  <img className="sec-7-home-7__eyebrow-icon" src="/assets/imgs/pages/home-7/sec-7-eyebrow-arrow.svg" alt="" width="14" height="13" />
                </div>
                <p className="sec-7-home-7__headline mb-4 mb-lg-40 reveal-text">
                  Stop guessing, start tracking. Whether you are beginning your first routine or chasing a new personal record, FitForge is built for you.
                </p>
                <ul className="sec-7-home-7__features list-unstyled mb-4 mb-lg-60">
                  <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.1">
                    <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                    {' '}
                    <span>
                      Structured workout routines
                    </span>
                  </li>
                  <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.2">
                    <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                    {' '}
                    <span>
                      Detailed exercise breakdowns
                    </span>
                  </li>
                  <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.3">
                    <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                    {' '}
                    <span>
                      Real-time rest timers
                    </span>
                  </li>
                  <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.4">
                    <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                    {' '}
                    <span>
                      Visual progression charts
                    </span>
                  </li>
                </ul>
                <div className="sec-7-home-7__cta d-inline-flex align-items-stretch at_fade_anim">
                  <Link to="/pricing" className="at-btn sec-7-home-7__cta-btn">
                    <span>
                      <span className="text-1">
                        Start Your Training
                      </span>
                      {' '}
                      <span className="text-2">
                        Start Your Training
                      </span>
                    </span>
                  </Link>
                  {' '}
                  <Link to="/pricing" className="sec-7-home-7__cta-circle" aria-label="Start Your Training">
                    <img src="/assets/imgs/pages/home-7/sec-7-btn-arrow.svg" alt="" width="24" height="24" aria-hidden="true" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="sec-7-home-7__star" aria-hidden="true">
          <img src="/assets/imgs/pages/home-7/sec-7-rotating.svg" alt="" width="100" height="100" />
        </div>
      </div>
      <div className="sec-8-home-7 p-relative bg-neutral-0">
        <div className="container-2200 px-lg-5 px-3">
          <div className="row g-0 align-items-start">
            <div className="col-xl-5 col-lg-5 col-12 sec-8-home-7__lead">
              <Link to="/about" className="sec-8-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase ">
                <span className="text-scramble" data-scramble-text="FitForge Team">
                  FitForge Team
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </Link>
              <h2 className="sec-8-home-7__heading mb-40 reveal-text">
                Fitness Experts
              </h2>
              <p className="sec-8-home-7__desc mb-40 reveal-text">
                Certified trainers and engineers creating intuitive fitness tools that help dedicated athletes train smarter and reach their peak.
              </p>
              <div className="sec-4-home-7__cta d-inline-flex align-items-stretch mb-60  at_fade_anim">
                <Link to="/about" className="at-btn sec-4-home-7__cta-btn text-capitalize">
                  <span>
                    <span className="text-1">
                      Explore Features
                    </span>
                    {' '}
                    <span className="text-2">
                      Explore Features
                    </span>
                  </span>
                </Link>
                {' '}
                <Link to="/about" className="sec-4-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label="Explore Features">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-xl-7 col-lg-7 col-12 mt-5 mt-lg-0">
              <div className="sec-8-home-7__grid">
                <div className="sec-8-home-7__col">
                  {' '}
                  <Link to="/about" className="sec-8-home-7__card " aria-label="Darrell Steward — Fitness UX Designer">
                    <div className="sec-8-home-7__photo">
                      <div className="fix anim-zoomin">
                        <img src="/assets/imgs/pages/home-7/team-1-darrell.webp" alt="Darrell Steward" />
                      </div>
                    </div>
                    <span className="sec-8-home-7__badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                        <path d="M12.57 3.905L2.74 13.74 1.26 12.26 11.095 2.43 2.29 2.43V0.33L14.42 0.33V12.46H12.32L12.57 3.905Z" fill="currentColor" />
                      </svg>
                    </span>
                    <div className="sec-8-home-7__info">
                      <h3 className="sec-8-home-7__name mb-0 at_fade_anim">
                        Darrell{' '}
                        <br />
                        Steward
                      </h3>
                      <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">
                        Fitness UX Designer
                      </p>
                    </div>
                  </Link>
                  {' '}
                  {' '}
                  <Link to="/about" className="sec-8-home-7__card " aria-label="Amelia Courtney — Strength & Conditioning Coach">
                    <div className="sec-8-home-7__photo">
                      <div className="fix anim-zoomin">
                        <img src="/assets/imgs/pages/home-7/team-2-amelia.webp" alt="Amelia Courtney" />
                      </div>
                    </div>
                    <span className="sec-8-home-7__badge sec-8-home-7__badge--dark">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                        <path d="M12.57 3.905L2.74 13.74 1.26 12.26 11.095 2.43 2.29 2.43V0.33L14.42 0.33V12.46H12.32L12.57 3.905Z" fill="currentColor" />
                      </svg>
                    </span>
                    <div className="sec-8-home-7__info">
                      <h3 className="sec-8-home-7__name mb-0 at_fade_anim">
                        Amelia{' '}
                        <br />
                        Courtney
                      </h3>
                      <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">
                        Strength &amp; Conditioning Coach
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="sec-8-home-7__col sec-8-home-7__col--offset">
                  {' '}
                  <Link to="/about" className="sec-8-home-7__card " aria-label="Esther Howard — Lead Platform Engineer">
                    <div className="sec-8-home-7__photo">
                      <div className="fix anim-zoomin">
                        <img src="/assets/imgs/pages/home-7/team-3-esther.webp" alt="Esther Howard" />
                      </div>
                    </div>
                    <span className="sec-8-home-7__badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                        <path d="M12.57 3.905L2.74 13.74 1.26 12.26 11.095 2.43 2.29 2.43V0.33L14.42 0.33V12.46H12.32L12.57 3.905Z" fill="currentColor" />
                      </svg>
                    </span>
                    <div className="sec-8-home-7__info">
                      <h3 className="sec-8-home-7__name mb-0 at_fade_anim">
                        Esther{' '}
                        <br />
                        Howard
                      </h3>
                      <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">
                        Lead Platform Engineer
                      </p>
                    </div>
                  </Link>
                  {' '}
                  {' '}
                  <Link to="/about" className="sec-8-home-7__card " aria-label="Jacob Jones — Sports Nutrition Specialist">
                    <div className="sec-8-home-7__photo">
                      <div className="fix anim-zoomin">
                        <img src="/assets/imgs/pages/home-7/team-4-jacob.webp" alt="Jacob Jones" />
                      </div>
                    </div>
                    <span className="sec-8-home-7__badge">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="15" viewBox="0 0 16 15" fill="none">
                        <path d="M12.57 3.905L2.74 13.74 1.26 12.26 11.095 2.43 2.29 2.43V0.33L14.42 0.33V12.46H12.32L12.57 3.905Z" fill="currentColor" />
                      </svg>
                    </span>
                    <div className="sec-8-home-7__info">
                      <h3 className="sec-8-home-7__name mb-0 at_fade_anim">
                        Jacob{' '}
                        <br />
                        Jones
                      </h3>
                      <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">
                        Sports Nutrition Specialist
                      </p>
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="sec-9-home-7 py-4">
        <div className="sec-9-home-7__row">
          <div className="sec-9-home-7__ticker py-3 changeless carouselTicker carouselTicker-left">
            <ul className="d-flex align-items-center gap-4 carouselTicker__list scroll-move-left list-unstyled mb-0 sec-9-home-7__list">
              <li className="sec-9-home-7__item">
                Workout Tracking
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Exercise Library
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Custom Routines
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Calorie Counter
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Hydration Goals
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Strength Metrics
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Body Measurements
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Progress Analytics
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                AI Assistant
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Streak Milestones
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Smart Reminders
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Workout Tracking
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Exercise Library
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Custom Routines
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Calorie Counter
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Hydration Goals
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Strength Metrics
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Body Measurements
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Progress Analytics
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                AI Assistant
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Streak Milestones
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Smart Reminders
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
        <div className="sec-9-home-7__row">
          <div className="sec-9-home-7__ticker py-3 changeless carouselTicker carouselTicker-right">
            <ul className="d-flex align-items-center gap-4 carouselTicker__list scroll-move-right list-unstyled mb-0 sec-9-home-7__list">
              <li className="sec-9-home-7__item">
                Workout Tracking
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Exercise Library
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Custom Routines
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Calorie Counter
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Hydration Goals
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Strength Metrics
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Body Measurements
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Progress Analytics
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                AI Assistant
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Streak Milestones
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Smart Reminders
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Workout Tracking
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Exercise Library
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Custom Routines
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Calorie Counter
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Hydration Goals
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Strength Metrics
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Body Measurements
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Progress Analytics
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                AI Assistant
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Streak Milestones
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Smart Reminders
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>

      <div className="sec-11-home-7 pt-120 pb-120">
        <div className="container-2200 px-lg-5 px-3">
          <div className="row align-items-start g-4 g-xl-5">
            <div className="col-xl-5 col-lg-6 col-12">
              <div className="sec-11-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                <span className="text-scramble" data-scramble-text="Contact us">
                  Contact us
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="sec-11-home-7__title mb-0 reveal-text">
                Connect With FitForge
              </h2>
            </div>
            <div className="col-xl-6 col-lg-6 ms-lg-auto">
              <form className="sec-4-about-form sec-11-home-7__form" action="#" method="post">
                <div className="sec-4-about-form__field at_fade_anim">
                  <input type="text" className="sec-4-about-form__input" name="name" placeholder="Your name *" required aria-label="Your name" />
                </div>
                <div className="sec-4-about-form__field at_fade_anim">
                  <input type="email" className="sec-4-about-form__input" name="email" placeholder="Your email *" required aria-label="Your email" />
                </div>
                <div className="sec-4-about-form__field at_fade_anim">
                  <input type="tel" className="sec-4-about-form__input" name="phone" placeholder="Your phone *" required aria-label="Your phone" />
                </div>
                <div className="sec-4-about-form__field at_fade_anim">
                  <textarea className="sec-4-about-form__input sec-4-about-form__textarea" name="message" placeholder="Your message *" rows={5} required aria-label="Your message" />
                </div>
                <div className="sec-4-about-form__actions at_fade_anim">
                  <button type="submit" className="sec-4-about-form__btn at-btn at_fade_anim">
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
                <p className="sec-4-about-form__disclaimer at_fade_anim" data-delay="0.1">
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
    </main>
  );
}

export default memo(Home);
