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
            <img className="sec-1-home-7__img" src="/assets/imgs/pages/home-7/hero-vr.webp" alt="Futuristic VR experience" />
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
                <span className="fw-500 text-uppercase text-scramble" data-scramble-text="27.1127° S, 109.3497° W">
                  27.1127° S, 109.3497° W
                </span>
              </div>
              <div className="sec-1-home-7__tags d-flex flex-wrap gap-2">
                <Link to="/404" className="sec-1-home-7__tag at_fade_anim" data-start="100%" data-delay="0.1">
                  <span>
                    MVP Launch
                  </span>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
                  </svg>
                </Link>
                {' '}
                <Link to="/404" className="sec-1-home-7__tag at_fade_anim" data-start="100%" data-delay="0.2">
                  <span>
                    Product Design
                  </span>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
                  </svg>
                </Link>
                {' '}
                <Link to="/404" className="sec-1-home-7__tag at_fade_anim" data-start="100%" data-delay="0.4">
                  <span>
                    Scalable Tech
                  </span>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
                  </svg>
                </Link>
                {' '}
                <Link to="/404" className="sec-1-home-7__tag at_fade_anim" data-start="100%" data-delay="0.1">
                  <span>
                    Growth Strategy
                  </span>
                  {' '}
                  <svg xmlns="http://www.w3.org/2000/svg" width="9" height="10" viewBox="0 0 9 10" fill="none">
                    <path d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z" fill="currentColor" />
                  </svg>
                </Link>
                {' '}
                <Link to="/404" className="sec-1-home-7__tag at_fade_anim" data-start="100%" data-delay="0.3">
                  <span>
                    UI/UX Excellence
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
                    [ BUILD ]
                  </li>
                  <li className="at_fade_anim" data-start="100%" data-delay="0.2">
                    [ GROW ]
                  </li>
                  <li className="at_fade_anim" data-start="100%" data-delay="0.3">
                    [ SCALE ]
                  </li>
                  <li className="at_fade_anim" data-start="100%" data-delay="0.4">
                    [ BOOST ]
                  </li>
                </ul>
                <div className="sec-1-home-7__headline-wrap p-relative">
                  <h1 className="sec-1-home-7__headline text-white text-uppercase fw-700 mb-30 at_fade_anim" data-start="100%" data-delay="0.3">
                    Advancing Startup Innovation
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
                  From MVP launch to global scaling, we provide the strategic design and high-performance technology startups need to dominate their market. Our team delivers products that matter.
                </p>
                <div className="sec-1-home-7__cta d-flex align-items-center flex-wrap gap-2 mb-60">
                  <Link to="/contact" className="sec-1-home-7__cta-btn at_fade_anim" data-start="100%" data-delay="0.3">
                    <span>
                      Start Your Journey
                    </span>
                  </Link>
                  {' '}
                  <Link to="/contact" className="sec-1-home-7__cta-arrow" aria-label="Start Your Journey">
                    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 11 11" fill="none">
                      <path d="M0.21967 9.40717C-0.0732232 9.70006 -0.0732232 10.1749 0.21967 10.4678C0.512563 10.7607 0.987437 10.7607 1.28033 10.4678L0.21967 9.40717ZM10.6875 0.75C10.6875 0.335786 10.3517 2.97145e-09 9.9375 1.50485e-07L3.1875 -2.70983e-07C2.77329 -2.70983e-07 2.4375 0.335786 2.4375 0.75C2.4375 1.16421 2.77329 1.5 3.1875 1.5H9.1875V7.5C9.1875 7.91421 9.52329 8.25 9.9375 8.25C10.3517 8.25 10.6875 7.91421 10.6875 7.5L10.6875 0.75ZM0.75 9.9375L1.28033 10.4678L10.4678 1.28033L9.9375 0.75L9.40717 0.21967L0.21967 9.40717L0.75 9.9375Z" fill="currentColor" />
                    </svg>
                  </Link>
                </div>
                <div className="sec-1-home-7__proof d-flex align-items-center flex-wrap gap-3">
                  <div className="sec-1-home-7__avatars">
                    <span className="sec-1-home-7__avatar at_fade_anim" data-start="100%" data-delay="0.1">
                      <img src="/assets/imgs/pages/home-7/avatar-1.webp" alt="Client 1" />
                    </span>
                    {' '}
                    <span className="sec-1-home-7__avatar at_fade_anim" data-start="100%" data-delay="0.2">
                      <img src="/assets/imgs/pages/home-7/avatar-2.webp" alt="Client 2" />
                    </span>
                    {' '}
                    <span className="sec-1-home-7__avatar at_fade_anim" data-start="100%" data-delay="0.3">
                      <img src="/assets/imgs/pages/home-7/avatar-3.webp" alt="Client 3" />
                    </span>
                    {' '}
                    <span className="sec-1-home-7__avatar at_fade_anim" data-start="100%" data-delay="0.4">
                      <img src="/assets/imgs/pages/home-7/avatar-4.webp" alt="Client 4" />
                    </span>
                    {' '}
                    <span className="sec-1-home-7__avatar at_fade_anim" data-start="100%" data-delay="0.5">
                      <img src="/assets/imgs/pages/home-7/avatar-5.webp" alt="Client 5" />
                    </span>
                  </div>
                  <p className="sec-1-home-7__proof-text text-white fw-700 mb-0 at_fade_anim" data-start="100%" data-delay="0.6">
                    500+ Ventures scaled with{' '}
                    <br className="d-none d-xl-inline" />
                    Orisa global expertise
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
                  We Power the World’s Fastest Growing Startups
                </span>
              </h2>
            </div>
            <div className="col-lg-5 col-12 mt-4 mt-lg-0 ps-lg-4 d-flex align-items-end">
              <p className="sec-2-home-7__desc mb-0  reveal-text">
                <strong>
                  Orisa
                </strong>
                {' '}is more than a design agency; we are a strategic partner for founders who dare to disrupt. We{' '}
                <strong>
                  combine rapid
                </strong>
                {' '}prototyping with world-class engineering to{' '}
                <strong>
                  turn bold
                </strong>
                {' '}visions into market-leading digital products.
              </p>
            </div>
          </div>
          <div className="sec-2-home-7__grid">
            <div className="sec-2-home-7__row">
              <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-1">
                <div className="sec-2-home-7__img-wrap">
                  <div className="thumb fix anim-zoomin">
                    <img data-speed=".8" src="/assets/imgs/pages/home-7/sec2-img-1.webp" alt="orisa" />
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
                    Velocity First
                  </h3>
                  <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">
                    In the startup world, speed is life. We’ve optimized our workflow to deliver high-fidelity MVPs in weeks, not months, without sacrificing quality.
                  </p>
                </div>
              </div>
              <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-4">
                <h3 className="sec-2-home-7__stat-value mb-3">
                  <span className="odometer" data-count="168">
                    0
                  </span>
                  +
                </h3>
                <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">
                  Countries where our partners have expanded globally
                </p>
              </div>
            </div>
            <div className="sec-2-home-7__row">
              <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-2">
                <div className="sec-2-home-7__img-wrap ms-2">
                  <div className="thumb fix anim-zoomin">
                    <img data-speed=".8" src="/assets/imgs/pages/home-7/sec2-img-2.webp" alt="orisa" />
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
                    Product Thinking
                  </h3>
                  <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">
                    We don’t just build features; we build solutions. Our process focuses on user needs, business goals, and product-market fit from day one.
                  </p>
                </div>
              </div>
              <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-5">
                <h3 className="sec-2-home-7__stat-value mb-3">
                  <span className="odometer" data-count="50">
                    0
                  </span>
                  k+
                </h3>
                <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">
                  Projects Carefully Crafted
                </p>
              </div>
            </div>
            <div className="sec-2-home-7__row">
              <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-1">
                <h3 className="sec-2-home-7__stat-value mb-3">
                  <span className="odometer" data-count="98">
                    0
                  </span>
                  %
                </h3>
                <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">
                  Client retention and post-launch growth support.
                </p>
              </div>
              <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-3">
                <div className="sec-2-home-7__img-wrap ms-2">
                  <div className="thumb fix anim-zoomin">
                    <img data-speed=".8" src="/assets/imgs/pages/home-7/sec2-img-3.webp" alt="orisa" />
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
                    Scalable Core
                  </h3>
                  <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">
                    We architect systems that grow with you. Our tech stack is designed to handle your first 1,000 users and your first 1,000,000 just as smoothly.
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
                <img className="w-100 rounded-4" src="/assets/imgs/pages/img-48.webp" alt="orisa" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="about-me-slider-thumb at-item-anime marque">
                <img className="w-100 rounded-4" src="/assets/imgs/pages/img-45.webp" alt="orisa" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="about-me-slider-thumb at-item-anime marque">
                <img className="w-100 rounded-4" src="/assets/imgs/pages/img-46.webp" alt="orisa" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="about-me-slider-thumb at-item-anime marque">
                <img className="w-100 rounded-4" src="/assets/imgs/pages/img-47.webp" alt="orisa" />
              </div>
            </div>
            <div className="swiper-slide">
              <div className="about-me-slider-thumb at-item-anime marque">
                <img className="w-100 rounded-4" src="/assets/imgs/pages/img-49.webp" alt="orisa" />
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
                <img className="sec-4-home-7__img fix anim-zoomin" src="/assets/imgs/pages/home-7/sec-4-helmet.webp" alt="orisa" width="377" height="471" loading="lazy" decoding="async" />
              </div>
            </div>
            <div className="col-xl-9 col-lg-8 col-12">
              <h2 className="sec-4-home-7__title mb-4 mb-lg-5">
                <span className="reveal-text sec-4-home-7__title-part sec-4-home-7__title-part--950">
                  More than an agency, we act as your startup partner, delivering intelligent, user focused solutions that drive growth and impact.
                </span>
              </h2>
              <div className="sec-4-home-7__cta d-inline-flex align-items-stretch mb-60  at_fade_anim">
                <Link to="/404" className="at-btn sec-4-home-7__cta-btn text-capitalize">
                  <span>
                    <span className="text-1">
                      Join our Team
                    </span>
                    {' '}
                    <span className="text-2">
                      Join our Team
                    </span>
                  </span>
                </Link>
                {' '}
                <Link to="/404" className="sec-4-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label="Join our Team">
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
                        We are here
                      </h3>
                      <div className="sec-4-home-7__loc-body at_fade_anim">
                        <p className="mb-2">
                          205 North Michigan Avenue, Suite 810
                          <br />
                          Chicago, 60601, USA
                        </p>
                        <p className="mb-2">
                          Phone:{' '}
                          <a href="tel:+11234567890" className="sec-4-home-7__loc-strong">
                            (123) 456-7890
                          </a>
                        </p>
                        <p className="mb-0">
                          Email:{' '}
                          <a href="mailto:hello@orisa.com" className="sec-4-home-7__loc-strong">
                            hello@orisa.com
                          </a>
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-6 col-12">
                  <div className="sec-4-home-7__loc-body sec-4-home-7__loc-body--solo ps-lg-4 at_fade_anim">
                    <p className="mb-2">
                      245 Fifth Avenue, Suite 1800
                      <br />
                      New York, NY 10016, USA
                    </p>
                    <p className="mb-2">
                      Phone:{' '}
                      <a href="tel:+12125557398" className="sec-4-home-7__loc-strong">
                        (212) 555-7398
                      </a>
                    </p>
                    <p className="mb-0">
                      Email:{' '}
                      <a href="mailto:sale@orisa.com" className="sec-4-home-7__loc-strong">
                        sale@orisa.com
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
                <span className="text-scramble" data-scramble-text="Specialized services">
                  Specialized services
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </div>
              <h2 className="sec-5-home-7__title mb-4 mb-xl-5 reveal-text">
                We Build Products That Founders Dream Of.
              </h2>
              <div className="sec-5-home-7__cta d-inline-flex align-items-stretch at_fade_anim">
                <Link to="/contact" className="at-btn sec-5-home-7__cta-btn text-capitalize">
                  <span>
                    <span className="text-1">
                      Get a free quote
                    </span>
                    {' '}
                    <span className="text-2">
                      Get a free quote
                    </span>
                  </span>
                </Link>
                {' '}
                <Link to="/contact" className="sec-5-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label="Get a free quote">
                  <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
            <div className="col-xl-3 col-lg-5 col-12 mx-lg-auto">
              <div className="sec-5-home-7__photo scroll-move-up">
                <div className="fix anim-zoomin">
                  <img src="/assets/imgs/pages/home-7/sec-5-founder.webp" alt="Founder working at a desk" className="w-100 h-100 object-fit-cover" width="493" height="582" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-xl-4 col-lg-12 col-12">
              <div className="accordion accordion-flush sec-5-home-7__accordion" id="accordionSec5Home7">
                <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                  <h3 className="accordion-header" id="headingSec5H71">
                    <button className="accordion-button sec-5-home-7__acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H71" aria-expanded="true" aria-controls="collapseSec5H71">
                      <span className="sec-5-home-7__acc-title">
                        01. MVP Development
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
                        Go from idea to a high-fidelity, functional product in record time. We focus on the core features that prove your concept and win over early adopters.
                      </p>
                      <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                        <span className="sec-5-home-7__tag">
                          Prototyping
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Fast-track Dev
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          User Validation
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                  <h3 className="accordion-header" id="headingSec5H72">
                    <button className="accordion-button sec-5-home-7__acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H72" aria-expanded="false" aria-controls="collapseSec5H72">
                      <span className="sec-5-home-7__acc-title">
                        02. Product Design
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
                        We craft intuitive interfaces and immersive user experiences that make your startup feel premium and established from day one.
                      </p>
                      <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                        <span className="sec-5-home-7__tag">
                          UI/UX Design
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Design Systems
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Visual Storytelling
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                  <h3 className="accordion-header" id="headingSec5H73">
                    <button className="accordion-button sec-5-home-7__acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H73" aria-expanded="false" aria-controls="collapseSec5H73">
                      <span className="sec-5-home-7__acc-title">
                        03. Scalable Engineering
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
                        Modern tech stacks built for growth. We architect clean, secure, and high-performance systems that handle traffic spikes without a blink.
                      </p>
                      <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                        <span className="sec-5-home-7__tag">
                          Next.js
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Cloud Architecture
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          API Integration
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                  <h3 className="accordion-header" id="headingSec5H74">
                    <button className="accordion-button sec-5-home-7__acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H74" aria-expanded="false" aria-controls="collapseSec5H74">
                      <span className="sec-5-home-7__acc-title">
                        04. Growth &amp; Strategy
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
                        Launching is just the start. We provide the data-driven insights and technical optimizations needed to scale your user base and retain them.
                      </p>
                      <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                        <span className="sec-5-home-7__tag">
                          Performance Opt
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          A/B Testing
                        </span>
                        {' '}
                        <span className="sec-5-home-7__tag">
                          Scalability Audit
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
              Collaborating with the world’s most ambitious companies to redefine what’s possible.
            </h6>
          </div>
        </div>
        <div className="container-fluid px-0">
          <div className="client-capsule-wrapper-box" data-t-throwable-scene="true">
            <div className="client-capsule-wrapper">
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-02.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-03.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-04.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box bg-neutral-500">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-05.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-07.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box bg-neutral-500">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-08.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box bg-neutral-500">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-02.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-01.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-06.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-09.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box bg-neutral-500">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-10.webp" alt="Partner logo" />
                </span>
              </p>
              <p data-t-throwable-el="">
                <span className="client-box client-box--brand-h7">
                  <img className="invert-1" src="/assets/imgs/template/logo/logo-brand-03.webp" alt="Partner logo" />
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
              <Link to="/404" className="sec-6-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-3 text-uppercase">
                <span className="text-scramble" data-scramble-text="The Growth Engine">
                  The Growth Engine
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </Link>
              <h2 className="sec-6-home-7__title mb-0 reveal-text">
                The Process
              </h2>
            </div>
            <div className="col-lg-5 col-12 mt-4 mt-lg-0 d-flex align-items-end justify-content-lg-end">
              <p className="sec-6-home-7__desc text-lg-end mb-0 at_fade_anim">
                Honest strategies for ambitious founders. How we take your vision from a bold concept to a market-ready digital product.
              </p>
            </div>
          </div>
          <div className="sec-6-home-7__chips d-none d-lg-flex flex-column mb-80">
            <span className="sec-6-home-7__chip sec-6-home-7__chip--1 at_fade_anim" data-delay="0.1">
              <span className="sec-6-home-7__chip-text">
                Discovery &amp; MVP Strategy
              </span>
            </span>
            {' '}
            <span className="sec-6-home-7__chip sec-6-home-7__chip--2 at_fade_anim" data-fade-offset="100" data-delay="0.2">
              <span className="sec-6-home-7__chip-text">
                Rapid Prototyping
              </span>
            </span>
            {' '}
            <span className="sec-6-home-7__chip sec-6-home-7__chip--3 at_fade_anim" data-fade-offset="100" data-delay="0.3">
              <span className="sec-6-home-7__chip-text">
                Agile Development
              </span>
            </span>
            {' '}
            <span className="sec-6-home-7__chip sec-6-home-7__chip--4 at_fade_anim" data-fade-offset="100" data-delay="0.4">
              <span className="sec-6-home-7__chip-text">
                Launch &amp; Scale
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
                    Discovery &amp; MVP Strategy
                  </h3>
                  <p className="sec-6-home-7__card-desc mb-0">
                    Defining product-market fit by identifying core features that deliver maximum user value with minimum time-to-market.
                  </p>
                </div>
                <div className="sec-6-home-7__card-media">
                  <img src="/assets/imgs/pages/home-7/step-1.webp" alt="Discovery & MVP Strategy" />
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
                    Rapid Prototyping
                  </h3>
                  <p className="sec-6-home-7__card-desc mb-0">
                    Transforming strategy into interactive prototypes to validate your vision before moving into full-scale engineering.
                  </p>
                </div>
                <div className="sec-6-home-7__card-media">
                  <img src="/assets/imgs/pages/home-7/step-2.webp" alt="Rapid Prototyping" />
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
                    Agile Development
                  </h3>
                  <p className="sec-6-home-7__card-desc mb-0">
                    Building a scalable, high-performance core using modern tech stacks that founders and investors can lean on.
                  </p>
                </div>
                <div className="sec-6-home-7__card-media">
                  <img src="/assets/imgs/pages/home-7/step-3.webp" alt="Agile Development" />
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
                    Launch &amp; Scale
                  </h3>
                  <p className="sec-6-home-7__card-desc mb-0">
                    Deploying, refining, and architecting the technical support needed to grow from your first user to your first million.
                  </p>
                </div>
                <div className="sec-6-home-7__card-media">
                  <img src="/assets/imgs/pages/home-7/step-4.webp" alt="Launch & Scale" />
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
                  <img src="/assets/imgs/pages/home-7/sec-7-photo.webp" alt="orisa" width="798" height="798" loading="lazy" />
                </div>
              </div>
            </div>
            <div className="col-xxl-7 col-xl-6 col-12">
              <div className="sec-7-home-7__content ms-xxl-4">
                <div className="sec-7-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-3 text-uppercase">
                  <span className="text-scramble" data-scramble-text="Ready to Build the Future ?">
                    Ready to Build the Future ?
                  </span>
                  {' '}
                  <img className="sec-7-home-7__eyebrow-icon" src="/assets/imgs/pages/home-7/sec-7-eyebrow-arrow.svg" alt="" width="14" height="13" />
                </div>
                <p className="sec-7-home-7__headline mb-4 mb-lg-40 reveal-text">
                  Stop dreaming, start executing. Whether you're at the "napkin sketch" stage or ready to scale, we’re here to ignite your journey.
                </p>
                <ul className="sec-7-home-7__features list-unstyled mb-4 mb-lg-60">
                  <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.1">
                    <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                    {' '}
                    <span>
                      Research insights summary
                    </span>
                  </li>
                  <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.2">
                    <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                    {' '}
                    <span>
                      Clear problem statements
                    </span>
                  </li>
                  <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.3">
                    <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                    {' '}
                    <span>
                      Opportunity mapping
                    </span>
                  </li>
                  <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.4">
                    <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                    {' '}
                    <span>
                      Prioritized initiatives
                    </span>
                  </li>
                </ul>
                <div className="sec-7-home-7__cta d-inline-flex align-items-stretch at_fade_anim">
                  <Link to="/contact" className="at-btn sec-7-home-7__cta-btn">
                    <span>
                      <span className="text-1">
                        Launch Your Project
                      </span>
                      {' '}
                      <span className="text-2">
                        Launch Your Project
                      </span>
                    </span>
                  </Link>
                  {' '}
                  <Link to="/contact" className="sec-7-home-7__cta-circle" aria-label="Launch Your Project">
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
              <Link to="/404" className="sec-8-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase ">
                <span className="text-scramble" data-scramble-text="Meet Our Team">
                  Meet Our Team
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </Link>
              <h2 className="sec-8-home-7__heading mb-40 reveal-text">
                Dedicated Team
              </h2>
              <p className="sec-8-home-7__desc mb-40 reveal-text">
                Creative experts designing meaningful digital experiences that help ambitious brands grow faster and lead their markets.
              </p>
              <div className="sec-4-home-7__cta d-inline-flex align-items-stretch mb-60  at_fade_anim">
                <Link to="/404" className="at-btn sec-4-home-7__cta-btn text-capitalize">
                  <span>
                    <span className="text-1">
                      Join our Team
                    </span>
                    {' '}
                    <span className="text-2">
                      Join our Team
                    </span>
                  </span>
                </Link>
                {' '}
                <Link to="/404" className="sec-4-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label="Join our Team">
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
                  <Link to="/404" className="sec-8-home-7__card " aria-label="Darrell Steward — UI/UX Designer">
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
                        UI/UX Designer
                      </p>
                    </div>
                  </Link>
                  {' '}
                  {' '}
                  <Link to="/404" className="sec-8-home-7__card " aria-label="Amelia Courtney — Project Manager">
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
                        Project Manager
                      </p>
                    </div>
                  </Link>
                </div>
                <div className="sec-8-home-7__col sec-8-home-7__col--offset">
                  {' '}
                  <Link to="/404" className="sec-8-home-7__card " aria-label="Esther Howard — Software Developer">
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
                        Software Developer
                      </p>
                    </div>
                  </Link>
                  {' '}
                  {' '}
                  <Link to="/404" className="sec-8-home-7__card " aria-label="Jacob Jones — Marketing CEO">
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
                        Marketing CEO
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
                Marketing strategy
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Customer insights
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Positioning
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Value proposition
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Brand identity
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Performance
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Rebranding
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Omnichannel
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Social ads
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Technical SEO
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                KPI tracking
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Marketing strategy
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Customer insights
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Positioning
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Value proposition
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Brand identity
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Performance
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Rebranding
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Omnichannel
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Social ads
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Technical SEO
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                KPI tracking
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
                Marketing strategy
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Customer insights
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Positioning
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Value proposition
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Brand identity
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Performance
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Rebranding
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Omnichannel
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Social ads
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Technical SEO
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                KPI tracking
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Marketing strategy
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Customer insights
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Positioning
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Value proposition
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Brand identity
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Performance
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Rebranding
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Omnichannel
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Social ads
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                Technical SEO
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
              <li className="sec-9-home-7__item">
                KPI tracking
              </li>
              <li className="sec-9-home-7__sep">
                <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" />
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="sec-10-home-7 bg-neutral-0 pt-120 pb-120">
        <div className="container-2200 px-lg-5 px-3">
          <div className="row align-items-end mb-50">
            <div className="col-xl-4 col-lg-4 col-12">
              <Link to="/404" className="sec-10-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                <span className="text-scramble" data-scramble-text="Inside Startup">
                  Inside Startup
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </Link>
              <h2 className="sec-10-home-7__title mb-0 reveal-text">
                Insights for{' '}
                <br className="d-none d-sm-inline" />
                Founders
              </h2>
            </div>
            <div className="col-xl-5 col-lg-6 col-12 mt-4 mt-xl-0">
              <p className="sec-10-home-7__lead mb-0 reveal-text">
                Explore expert perspectives on product scaling, venture capital, and the engineering behind the world’s most successful digital products.
              </p>
            </div>
            <div className="col-xl-3 col-lg-12 mt-4 mt-lg-4 mt-xl-0 ms-xl-auto text-xl-end">
              <Link to="/404" className="sec-10-home-7__btn-all d-inline-flex align-items-center gap-2 at_fade_anim">
                <span>
                  All insights
                </span>
                {' '}
                <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                  <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                </svg>
              </Link>
            </div>
          </div>
          <div className="row g-3 sec-10-home-7__grid">
            <div className="blog-card col-lg-3 col-md-6 col-12 mb-30" data-category="">
              <div className="blog-card__thumb hover-effect-1">
                <Link to="/404" className="blog-card__img-link">
                  <img src="/assets/imgs/pages/home-7/insight-1-retro.webp" className="blog-card__img22" alt="orisa" />
                </Link>
              </div>
              <div className="blog-card__content">
                <h2 className=" h6 blog-card__title">
                  <Link to="/404" className="blog-card__title-link">
                    The MVP Roadmap: How to Ship Faster Without Losing Quality
                  </Link>
                </h2>
                <p className="blog-card__meta">
                  <span className="blog-card__meta-text">
                    By
                  </span>
                  {' '}
                  <Link to="/404" className="blog-card__author">
                    Olivia
                  </Link>
                  {' '}
                  <span className="blog-card__meta-text">
                    – July 3, 2026
                  </span>
                </p>
              </div>
            </div>
            <div className="blog-card col-lg-3 col-md-6 col-12 mb-30" data-category="">
              <div className="blog-card__thumb hover-effect-1">
                <Link to="/404" className="blog-card__img-link">
                  <img src="/assets/imgs/pages/home-7/insight-2-office.webp" className="blog-card__img22" alt="orisa" />
                </Link>
              </div>
              <div className="blog-card__content">
                <h2 className=" h6 blog-card__title">
                  <Link to="/404" className="blog-card__title-link">
                    Scalable Architecture: Building Systems That Grow with Your Users
                  </Link>
                </h2>
                <p className="blog-card__meta">
                  <span className="blog-card__meta-text">
                    By
                  </span>
                  {' '}
                  <Link to="/404" className="blog-card__author">
                    Daniel
                  </Link>
                  {' '}
                  <span className="blog-card__meta-text">
                    – July 8, 2026
                  </span>
                </p>
              </div>
            </div>
            <div className="blog-card col-lg-3 col-md-6 col-12 mb-30" data-category="">
              <div className="blog-card__thumb hover-effect-1">
                <Link to="/404" className="blog-card__img-link">
                  <img src="/assets/imgs/pages/home-7/insight-3-fabric.webp" className="blog-card__img22" alt="orisa" />
                </Link>
              </div>
              <div className="blog-card__content">
                <h2 className=" h6 blog-card__title">
                  <Link to="/404" className="blog-card__title-link">
                    Fundraising Design: Crafting Pitch Decks That Close Seed Rounds
                  </Link>
                </h2>
                <p className="blog-card__meta">
                  <span className="blog-card__meta-text">
                    By
                  </span>
                  {' '}
                  <Link to="/404" className="blog-card__author">
                    Emma
                  </Link>
                  {' '}
                  <span className="blog-card__meta-text">
                    – July 12, 2026
                  </span>
                </p>
              </div>
            </div>
            <div className="blog-card col-lg-3 col-md-6 col-12 mb-30" data-category="">
              <div className="blog-card__thumb hover-effect-1">
                <Link to="/404" className="blog-card__img-link">
                  <img src="/assets/imgs/pages/home-7/insight-4-conference.webp" className="blog-card__img22" alt="orisa" />
                </Link>
              </div>
              <div className="blog-card__content">
                <h2 className=" h6 blog-card__title">
                  <Link to="/404" className="blog-card__title-link">
                    Product-Market Fit: Why User Validation is Your Strongest Asset
                  </Link>
                </h2>
                <p className="blog-card__meta">
                  <span className="blog-card__meta-text">
                    By
                  </span>
                  {' '}
                  <Link to="/404" className="blog-card__author">
                    Lucas
                  </Link>
                  {' '}
                  <span className="blog-card__meta-text">
                    – July 17, 2026
                  </span>
                </p>
              </div>
            </div>
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
                Get in touch
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
