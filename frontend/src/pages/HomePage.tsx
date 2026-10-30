import React, { useState } from 'react';
import { Link } from 'react-router-dom';

export const HomePage: React.FC = () => {
  const [activeAccordion, setActiveAccordion] = useState<number | null>(0);

  const toggleAcc = (idx: number) => {
    setActiveAccordion(activeAccordion === idx ? null : idx);
  };

  return (
    <div id="smooth-wrapper">
      <div id="smooth-content">
        <main>
          {/* ========================================================================= */}
          {/* Home 7 Section 1 (Hero - Forge Your Physique. Track With Precision.)      */}
          {/* ========================================================================= */}
          <div className="sec-1-home-7 p-relative z-index-1 overflow-hidden">
            {/* Split background: vermilion (left) + maroon (right) */}
            <div className="sec-1-home-7__bg d-flex">
              <div className="sec-1-home-7__bg-left"></div>
              <div className="sec-1-home-7__bg-right"></div>
            </div>

            {/* Decorative 8-point asterisk sitting on the split */}
            <div className="sec-1-home-7__star d-none d-lg-flex">
              <img
                className="at-scroll-rotate"
                src="/assets/imgs/pages/home-7/star-asterisk.svg"
                alt="decorative star"
                style={{ animation: 'spin 20s linear infinite' }}
              />
            </div>

            <div className="sec-1-home-7__img-wrap">
              <div className="anim-zoomin">
                <img
                  className="sec-1-home-7__img"
                  src="/assets/imgs/thegrind/4J9A2840.webp"
                  alt="FitForge athlete training"
                />
              </div>
            </div>

            <div className="container-fluid p-relative">
              <div className="row g-0 align-items-stretch">
                {/* LEFT: Hero image + overlays */}
                <div className="col-lg-6 p-relative sec-1-home-7__left">
                  {/* Coordinates pinned below the header */}
                  <div className="sec-1-home-7__coords d-flex align-items-center gap-2">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="22"
                      height="17"
                      viewBox="0 0 27 20"
                      fill="none"
                    >
                      <path
                        d="M13.3203 20C5.9637 20 0 15.5228 0 10C0 4.47715 5.9637 0 13.3203 0C20.6769 0 26.6406 4.47715 26.6406 10C26.6406 15.5228 20.6769 20 13.3203 20ZM10.27 17.6674C8.98779 15.6259 8.20174 13.3742 8.02857 11H2.7465C3.27413 14.1765 6.28238 16.7747 10.27 17.6674ZM10.6971 11C10.8975 13.4388 11.8255 15.7297 13.3203 17.752C14.8151 15.7297 15.7431 13.4388 15.9435 11H10.6971ZM23.8941 11H18.6121C18.4389 13.3742 17.6529 15.6259 16.3707 17.6674C20.3582 16.7747 23.3665 14.1765 23.8941 11ZM2.7465 9H8.02857C8.20174 6.62577 8.98779 4.37407 10.27 2.33256C6.28238 3.22533 3.27413 5.8235 2.7465 9ZM10.6971 9H15.9435C15.7431 6.56122 14.8151 4.27025 13.3203 2.24799C11.8255 4.27025 10.8975 6.56122 10.6971 9ZM16.3707 2.33256C17.6529 4.37407 18.4389 6.62577 18.6121 9H23.8941C23.3665 5.8235 20.3582 3.22533 16.3707 2.33256Z"
                        fill="currentColor"
                      />
                    </svg>
                    <span className="fw-500 text-uppercase text-scramble">
                      FITFORGE ENGINE • v0.1.0 • ATHLETIC LABS
                    </span>
                  </div>

                  {/* Tag chips pinned above the image bottom */}
                  <div className="sec-1-home-7__tags d-flex flex-wrap gap-2">
                    <Link to="/pricing" className="sec-1-home-7__tag">
                      <span>Progressive Overload</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                      >
                        <path
                          d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link to="/pricing" className="sec-1-home-7__tag">
                      <span>Smart Macro Engine</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                      >
                        <path
                          d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                    <Link to="/pricing" className="sec-1-home-7__tag">
                      <span>Volume Load Curves</span>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="9"
                        height="10"
                        viewBox="0 0 9 10"
                        fill="none"
                      >
                        <path
                          d="M5.62494 9.99994L0.562517 10L0.5625 8.75003L4.49994 8.74996L4.5 2.39273L2.27828 4.86124L1.48278 3.97739L5.0625 0L8.64225 3.97739L7.84676 4.86124L5.625 2.3927L5.62494 9.99994Z"
                          fill="currentColor"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* RIGHT: Copy + CTA */}
                <div className="col-lg-6 sec-1-home-7__right">
                  <div className="sec-1-home-7__content">
                    {/* [ BUILD ] [ GROW ] [ SCALE ] [ BOOST ] */}
                    <ul className="sec-1-home-7__brackets list-unstyled d-flex flex-wrap gap-4 mb-30">
                      <li>[ HYPERTROPHY ]</li>
                      <li>[ MACROS ]</li>
                      <li>[ ANALYTICS ]</li>
                      <li>[ PROGRESSION ]</li>
                    </ul>

                    {/* Headline with diagonal arrow */}
                    <div className="sec-1-home-7__headline-wrap p-relative">
                      <h1 className="sec-1-home-7__headline text-white text-uppercase fw-700 mb-30">
                        <span className="d-block">Mastering</span>
                        <span className="d-block text-nowrap">Your Fitness</span>
                        <span className="d-block">Journey</span>
                      </h1>
                      <span className="sec-1-home-7__headline-arrow-cover d-none d-md-inline-block">
                        <span className="sec-1-home-7__headline-arrow">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="70"
                            height="53"
                            viewBox="0 0 69 53"
                            fill="none"
                          >
                            <path
                              d="M40.2 0L67.72 25.4267L69 26.7141L67.72 27.6797L40.2 53.1064L38.6 51.4971L64.2 27.6797H-59V25.4267H64.2L38.6 1.60928L40.2 0Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                      </span>
                    </div>

                    {/* Description */}
                    <p className="sec-1-home-7__desc text-white mb-40">
                      FitForge replaces gym guesswork with systematic progressive overload,
                      effortless macro tracking, and real-time volume load curves. Built
                      specifically for lifters committed to scientific adaptation.
                    </p>

                    {/* CTA Button + circular arrow pill */}
                    <div className="sec-1-home-7__cta d-flex align-items-center gap-2 mb-40">
                      <Link to="/pricing" className="sec-1-home-7__cta-btn">
                        Start Free Trial
                      </Link>
                      <Link
                        to="/pricing"
                        className="sec-1-home-7__cta-arrow"
                        aria-label="Start Free Trial"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="18"
                          height="18"
                          viewBox="0 0 18 18"
                          fill="none"
                        >
                          <path
                            d="M1 9H17M17 9L9.5 1.5M17 9L9.5 16.5"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                          />
                        </svg>
                      </Link>
                    </div>

                    {/* Proof block: avatars + count copy */}
                    <div className="sec-1-home-7__proof d-flex align-items-center gap-3">
                      <div className="sec-1-home-7__avatars" aria-hidden="true">
                        <span className="sec-1-home-7__avatar">
                          <img src="/assets/imgs/pages/home-7/avatar-1.webp" alt="Lifter avatar" />
                        </span>
                        <span className="sec-1-home-7__avatar">
                          <img src="/assets/imgs/pages/home-7/avatar-2.webp" alt="Lifter avatar" />
                        </span>
                        <span className="sec-1-home-7__avatar">
                          <img src="/assets/imgs/pages/home-7/avatar-3.webp" alt="Lifter avatar" />
                        </span>
                        <span className="sec-1-home-7__avatar">
                          <img src="/assets/imgs/pages/home-7/avatar-4.webp" alt="Lifter avatar" />
                        </span>
                        <span className="sec-1-home-7__avatar">
                          <img src="/assets/imgs/pages/home-7/avatar-5.webp" alt="Lifter avatar" />
                        </span>
                      </div>
                      <p className="sec-1-home-7__proof-text text-white mb-0">
                        Over <strong>10,000+ PRs</strong> logged by lifters aiming for peak
                        performance.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Home 7 Section 2 (We Power Serious Athletic Progression Worldwide)         */}
          {/* ========================================================================= */}
          <div className="sec-2-home-7 p-relative bg-neutral-0">
            <div className="container-2200 px-lg-5 px-3">
              {/* Intro row: eyebrow + split heading + rich description */}
              <div className="sec-2-home-7__intro row g-0 pt-100 pb-60">
                <div className="col-lg-7 col-12 pe-lg-4">
                  <Link
                    to="/about"
                    className="sec-2-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-30 text-uppercase"
                  >
                    <span>About FitForge</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <path
                        d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                  <h2 className="sec-2-home-7__headline mb-0">
                    <span className="sec-2-home-7__headline-strong">
                      We Power Serious Athletic Progression Worldwide
                    </span>
                  </h2>
                </div>
                <div className="col-lg-5 col-12 mt-4 mt-lg-0 ps-lg-4 d-flex align-items-end">
                  <p className="sec-2-home-7__desc mb-0">
                    <strong>FitForge</strong> is more than a workout logger; we are a strategic
                    training partner for athletes who demand scientific adaptation. We{' '}
                    <strong>combine rapid logging</strong> with sports science analytics to{' '}
                    <strong>turn discipline</strong> into measurable muscle and strength.
                  </p>
                </div>
              </div>

              {/* Staircase grid: 5 virtual columns, 3 rows */}
              <div className="sec-2-home-7__grid">
                {/* Row 1: image @ col 1, feature @ col 2, stat @ col 4 */}
                <div className="sec-2-home-7__row">
                  <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-1">
                    <div className="sec-2-home-7__img-wrap">
                      <div className="thumb fix anim-zoomin">
                        <img src="/assets/imgs/pages/home-7/sec2-img-1.webp" alt="FitForge" />
                      </div>
                    </div>
                  </div>
                  <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-2">
                    <div className="ps-4">
                      <div className="sec-2-home-7__feature-icon mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M40 20V0H20H0V20V40H20L40 20ZM40 20H20V40L0 20L20 0L40 20Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <h3 className="sec-2-home-7__feature-title">Velocity First</h3>
                      <p className="sec-2-home-7__feature-desc mb-0">
                        In the gym, speed is life. We’ve optimized our interface to log sets, reps,
                        and RPE in under 3 seconds between sets, with zero lag or distraction.
                      </p>
                    </div>
                  </div>
                  <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-4">
                    <h3 className="sec-2-home-7__stat-value mb-3">
                      <span>500</span>+
                    </h3>
                    <p className="sec-2-home-7__stat-label mb-0">
                      Standardized exercises & muscle movements cataloged
                    </p>
                  </div>
                </div>

                {/* Row 2: stat @ col 1, image @ col 3, feature @ col 5 */}
                <div className="sec-2-home-7__row">
                  <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-1">
                    <h3 className="sec-2-home-7__stat-value mb-3">
                      <span>100</span>k+
                    </h3>
                    <p className="sec-2-home-7__stat-label mb-0">
                      Sets and workout sessions logged across all training cycles
                    </p>
                  </div>
                  <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-3">
                    <div className="sec-2-home-7__img-wrap">
                      <div className="thumb fix anim-zoomin">
                        <img src="/assets/imgs/pages/home-7/sec2-img-2.webp" alt="FitForge" />
                      </div>
                    </div>
                  </div>
                  <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-5">
                    <div className="ps-4">
                      <div className="sec-2-home-7__feature-icon mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            fillRule="evenodd"
                            clipRule="evenodd"
                            d="M20 0H0V20H20V0ZM40 20H20V40H40V20Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <h3 className="sec-2-home-7__feature-title">Progressive Overload</h3>
                      <p className="sec-2-home-7__feature-desc mb-0">
                        Automatic past-performance prompts notify you when it’s time to add 2.5 kg
                        or squeeze out an extra rep to maintain adaptive tension.
                      </p>
                    </div>
                  </div>
                </div>

                {/* Row 3: feature @ col 2, stat @ col 3, image @ col 5 */}
                <div className="sec-2-home-7__row">
                  <div className="sec-2-home-7__cell sec-2-home-7__cell--feature sec-2-home-7__col-2">
                    <div className="ps-4">
                      <div className="sec-2-home-7__feature-icon mb-3">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="40"
                          height="40"
                          viewBox="0 0 40 40"
                          fill="none"
                        >
                          <path
                            d="M20 0L40 20L20 40L0 20L20 0ZM20 10L10 20L20 30L30 20L20 10Z"
                            fill="currentColor"
                          />
                        </svg>
                      </div>
                      <h3 className="sec-2-home-7__feature-title">Data Privacy & Ownership</h3>
                      <p className="sec-2-home-7__feature-desc mb-0">
                        Zero predatory ad networks. Complete offline functionality. Export your raw
                        historical logs whenever you want with 100% data autonomy.
                      </p>
                    </div>
                  </div>
                  <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-3">
                    <h3 className="sec-2-home-7__stat-value mb-3">
                      <span>99.9</span>%
                    </h3>
                    <p className="sec-2-home-7__stat-label mb-0">
                      Uptime reliability across our global sync architecture
                    </p>
                  </div>
                  <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-5">
                    <div className="sec-2-home-7__img-wrap">
                      <div className="thumb fix anim-zoomin">
                        <img src="/assets/imgs/pages/home-7/sec2-img-3.webp" alt="FitForge" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Home 7 Section 4 (Our Mission / Dual-tone statement)                      */}
          {/* ========================================================================= */}
          <div className="sec-4-home-7 bg-neutral-50 pt-120 pb-120">
            <div className="container-2200 px-lg-5 px-3">
              <div className="row g-4 g-xl-5 align-items-start">
                <div className="col-xl-3 col-lg-4 col-12">
                  <div className="sec-4-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                    <span>Our mission</span>
                    <svg
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
                  </div>
                  <div className="sec-4-home-7__frame overflow-hidden mt-4">
                    <img
                      className="sec-4-home-7__img fix anim-zoomin"
                      src="/assets/imgs/pages/home-7/sec-4-helmet.webp"
                      alt="FitForge mission"
                      width="377"
                      height="471"
                      loading="lazy"
                    />
                  </div>
                </div>
                <div className="col-xl-9 col-lg-8 col-12">
                  <h2 className="sec-4-home-7__title mb-4 mb-lg-5">
                    <span className="sec-4-home-7__title-part sec-4-home-7__title-part--950">
                      More than a tracker, FitForge acts as your digital strength coach, delivering
                      intelligent, user-focused data that drives muscular hypertrophy, physical
                      strength, and athletic breakthroughs.
                    </span>
                  </h2>
                  <div className="sec-4-home-7__cta d-inline-flex align-items-stretch mb-60">
                    <Link to="/about" className="at-btn sec-4-home-7__cta-btn text-capitalize">
                      <span>
                        <span className="text-1">Read Scientific Principles</span>
                        <span className="text-2">Read Scientific Principles</span>
                      </span>
                    </Link>
                    <Link
                      to="/about"
                      className="sec-4-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white"
                      aria-label="Read Scientific Principles"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17L17 7M17 7H9M17 7V15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                  <div className="sec-4-home-7__locations row g-4 g-lg-5">
                    <div className="col-lg-6 col-12">
                      <div className="d-flex gap-4">
                        <div className="sec-4-home-7__pin flex-shrink-0" aria-hidden="true">
                          <img
                            src="/assets/imgs/pages/home-7/sec-4-pin-icon.svg"
                            width="40"
                            height="40"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 min-w-0">
                          <h3 className="sec-4-home-7__loc-title h6 mb-3">FitForge Cloud Engine</h3>
                          <div className="sec-4-home-7__loc-body">
                            <p className="mb-0">
                              Distributed worldwide, offline-first syncing across all smartphones,
                              wearables, and desktops.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div className="col-lg-6 col-12">
                      <div className="d-flex gap-4">
                        <div className="sec-4-home-7__pin flex-shrink-0" aria-hidden="true">
                          <img
                            src="/assets/imgs/pages/home-7/sec-4-pin-icon.svg"
                            width="40"
                            height="40"
                            alt=""
                          />
                        </div>
                        <div className="flex-grow-1 min-w-0">
                          <h3 className="sec-4-home-7__loc-title h6 mb-3">Athletic Community</h3>
                          <div className="sec-4-home-7__loc-body">
                            <p className="mb-0">
                              Thousands of natural bodybuilders, powerlifters, and fitness athletes
                              sharing routines and progressive milestones.
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Home 7 Section 5 (Specialized Services + Accordion)                       */}
          {/* ========================================================================= */}
          <div className="sec-5-home-7 bg-neutral-0 overflow-hidden">
            <div className="container-2200 px-lg-5 px-3 pt-120 pb-80">
              <div className="row g-4 g-xl-5 align-items-start">
                <div className="col-xl-4 col-lg-5 col-12">
                  <div className="sec-5-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                    <span>Core Disciplines</span>
                    <svg
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
                  </div>
                  <h2 className="sec-5-home-7__title mb-4 mb-xl-5">
                    We Build Tools That Driven Athletes Dream Of.
                  </h2>
                  <div className="sec-5-home-7__cta d-inline-flex align-items-stretch">
                    <Link
                      to="/pricing"
                      className="at-btn sec-5-home-7__cta-btn text-capitalize"
                    >
                      <span>
                        <span className="text-1">Explore Pricing Plans</span>
                        <span className="text-2">Explore Pricing Plans</span>
                      </span>
                    </Link>
                    <Link
                      to="/pricing"
                      className="sec-5-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white"
                      aria-label="Explore Pricing Plans"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17L17 7M17 7H9M17 7V15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                <div className="col-xl-3 col-lg-5 col-12 mx-lg-auto">
                  <div className="sec-5-home-7__photo">
                    <div className="fix anim-zoomin">
                      <img
                        src="/assets/imgs/pages/home-7/sec-5-founder.webp"
                        alt="Athlete in training"
                        className="w-100 h-100 object-fit-cover"
                        width="493"
                        height="582"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                <div className="col-xl-4 col-lg-12 col-12">
                  <div className="accordion accordion-flush sec-5-home-7__accordion">
                    {/* Item 1 */}
                    <div className="accordion-item sec-5-home-7__acc-item">
                      <h3 className="accordion-header">
                        <button
                          className={`accordion-button sec-5-home-7__acc-btn ${activeAccordion === 0 ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleAcc(0)}
                        >
                          <span className="sec-5-home-7__acc-title">
                            01. Workout Logging & Overload
                          </span>
                        </button>
                      </h3>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 0 ? 'show' : ''}`}
                      >
                        <div className="accordion-body sec-5-home-7__acc-body">
                          <p className="mb-0">
                            Automatic previous-set comparisons, rest timer vibration cues, superset
                            grouping, and micro-increment calculations.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item 2 */}
                    <div className="accordion-item sec-5-home-7__acc-item">
                      <h3 className="accordion-header">
                        <button
                          className={`accordion-button sec-5-home-7__acc-btn ${activeAccordion === 1 ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleAcc(1)}
                        >
                          <span className="sec-5-home-7__acc-title">
                            02. Macro & Caloric Engine
                          </span>
                        </button>
                      </h3>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 1 ? 'show' : ''}`}
                      >
                        <div className="accordion-body sec-5-home-7__acc-body">
                          <p className="mb-0">
                            Custom protein, carbohydrate, fat, and hydration goals tailored to your
                            hypertrophy phase or cutting cut-off timeline.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item 3 */}
                    <div className="accordion-item sec-5-home-7__acc-item">
                      <h3 className="accordion-header">
                        <button
                          className={`accordion-button sec-5-home-7__acc-btn ${activeAccordion === 2 ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleAcc(2)}
                        >
                          <span className="sec-5-home-7__acc-title">
                            03. Visual Volume Heatmaps
                          </span>
                        </button>
                      </h3>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 2 ? 'show' : ''}`}
                      >
                        <div className="accordion-body sec-5-home-7__acc-body">
                          <p className="mb-0">
                            Weekly tonnage curves, set volume distribution per muscle group, and
                            Brzycki 1RM progression charts.
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Item 4 */}
                    <div className="accordion-item sec-5-home-7__acc-item">
                      <h3 className="accordion-header">
                        <button
                          className={`accordion-button sec-5-home-7__acc-btn ${activeAccordion === 3 ? '' : 'collapsed'}`}
                          type="button"
                          onClick={() => toggleAcc(3)}
                        >
                          <span className="sec-5-home-7__acc-title">
                            04. Consistency & Habit Streaks
                          </span>
                        </button>
                      </h3>
                      <div
                        className={`accordion-collapse collapse ${activeAccordion === 3 ? 'show' : ''}`}
                      >
                        <div className="accordion-body sec-5-home-7__acc-body">
                          <p className="mb-0">
                            Workout streak calendars, personal record alerts, and achievement
                            badges that turn discipline into identity.
                          </p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Home 7 Section 6 (The Process — Growth Engine)                            */}
          {/* ========================================================================= */}
          <div className="sec-6-home-7 p-relative bg-neutral-0">
            <div className="container-2200 px-lg-5 px-3">
              {/* Header row: eyebrow + big title + description */}
              <div className="sec-6-home-7__header row g-0 pt-100 pb-50">
                <div className="col-lg-7 col-12">
                  <Link
                    to="/about"
                    className="sec-6-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-3 text-uppercase"
                  >
                    <span>The Growth Engine</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <path
                        d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>
                  <h2 className="sec-6-home-7__title mb-0">The FitForge Process</h2>
                </div>
                <div className="col-lg-5 col-12 mt-4 mt-lg-0 d-flex align-items-end justify-content-lg-end">
                  <p className="sec-6-home-7__desc text-lg-end mb-0">
                    Systematic science for ambitious lifters. How we turn random workouts into
                    compounded physical adaptation.
                  </p>
                </div>
              </div>

              {/* Waterfall chip labels (staircase pattern) */}
              <div className="sec-6-home-7__chips d-none d-lg-flex flex-column mb-80">
                <span className="sec-6-home-7__chip sec-6-home-7__chip--1">
                  <span className="sec-6-home-7__chip-text">01. Goal Blueprint</span>
                </span>
                <span className="sec-6-home-7__chip sec-6-home-7__chip--2">
                  <span className="sec-6-home-7__chip-text">02. Frictionless Logging</span>
                </span>
                <span className="sec-6-home-7__chip sec-6-home-7__chip--3">
                  <span className="sec-6-home-7__chip-text">03. Macro Precision</span>
                </span>
                <span className="sec-6-home-7__chip sec-6-home-7__chip--4">
                  <span className="sec-6-home-7__chip-text">04. Visual Breakthroughs</span>
                </span>
              </div>

              {/* 4 process cards */}
              <div className="sec-6-home-7__cards pb-120">
                <div className="sec-6-home-7__card-wrap">
                  <div className="sec-6-home-7__card">
                    <div className="sec-6-home-7__card-body">
                      <p className="sec-6-home-7__card-num mb-0">[01]</p>
                      <h3 className="sec-6-home-7__card-title mb-0">Goal Blueprint</h3>
                      <p className="sec-6-home-7__card-desc mb-0">
                        Set specific targets for strength, hypertrophy, or fat loss. FitForge
                        computes your daily caloric balance and baseline volume landmarks.
                      </p>
                    </div>
                    <div className="sec-6-home-7__card-media">
                      <img
                        src="/assets/imgs/pages/home-7/step-1.webp"
                        alt="Goal Blueprint"
                      />
                    </div>
                  </div>
                </div>

                <div className="sec-6-home-7__card-wrap">
                  <div className="sec-6-home-7__card">
                    <div className="sec-6-home-7__card-body">
                      <p className="sec-6-home-7__card-num mb-0">[02]</p>
                      <h3 className="sec-6-home-7__card-title mb-0">Frictionless Logging</h3>
                      <p className="sec-6-home-7__card-desc mb-0">
                        Record sets, reps, and RPE in under 3 seconds between sets. Prior-session
                        comparisons keep progressive overload top of mind.
                      </p>
                    </div>
                    <div className="sec-6-home-7__card-media">
                      <img
                        src="/assets/imgs/pages/home-7/step-2.webp"
                        alt="Frictionless Logging"
                      />
                    </div>
                  </div>
                </div>

                <div className="sec-6-home-7__card-wrap">
                  <div className="sec-6-home-7__card">
                    <div className="sec-6-home-7__card-body">
                      <p className="sec-6-home-7__card-num mb-0">[03]</p>
                      <h3 className="sec-6-home-7__card-title mb-0">Macro Precision</h3>
                      <p className="sec-6-home-7__card-desc mb-0">
                        Log protein, carbs, fats, and water intake effortlessly. Real-time nutrient
                        tracking guarantees peak recovery and muscle preservation.
                      </p>
                    </div>
                    <div className="sec-6-home-7__card-media">
                      <img
                        src="/assets/imgs/pages/home-7/step-3.webp"
                        alt="Macro Precision"
                      />
                    </div>
                  </div>
                </div>

                <div className="sec-6-home-7__card-wrap">
                  <div className="sec-6-home-7__card">
                    <div className="sec-6-home-7__card-body">
                      <p className="sec-6-home-7__card-num mb-0">[04]</p>
                      <h3 className="sec-6-home-7__card-title mb-0">Visual Breakthroughs</h3>
                      <p className="sec-6-home-7__card-desc mb-0">
                        Examine automated weekly volume load curves and estimated 1RM trajectories.
                        Diagnose plateaus before they stall your gains.
                      </p>
                    </div>
                    <div className="sec-6-home-7__card-media">
                      <img
                        src="/assets/imgs/pages/home-7/step-4.webp"
                        alt="Visual Breakthroughs"
                      />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Home 7 Section 7 (CTA — Ready to Build the Future?)                       */}
          {/* ========================================================================= */}
          <div className="sec-7-home-7 overflow-hidden py-4">
            <div className="container-2200 px-lg-5 px-3 py-120">
              <div className="row align-items-center g-4 g-xxl-5">
                {/* Left: Image block */}
                <div className="col-xxl-5 col-xl-6 col-12">
                  <div className="sec-7-home-7__media">
                    <div className="fix anim-zoomin">
                      <img
                        src="/assets/imgs/pages/home-7/sec-7-photo.webp"
                        alt="FitForge training"
                        width="798"
                        height="798"
                        loading="lazy"
                      />
                    </div>
                  </div>
                </div>

                {/* Right: Content */}
                <div className="col-xxl-7 col-xl-6 col-12">
                  <div className="sec-7-home-7__content ms-xxl-4">
                    <div className="sec-7-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-3 text-uppercase">
                      <span>Ready to Build Your Peak Physique?</span>
                      <img
                        className="sec-7-home-7__eyebrow-icon"
                        src="/assets/imgs/pages/home-7/sec-7-eyebrow-arrow.svg"
                        alt=""
                        width="14"
                        height="13"
                      />
                    </div>

                    <p className="sec-7-home-7__headline mb-4 mb-lg-40">
                      Stop guessing, start executing. Whether you're beginning your first hypertrophy
                      program or dialing in a contest prep, FitForge gives you the tools to succeed.
                    </p>

                    <ul className="sec-7-home-7__features list-unstyled mb-4 mb-lg-60">
                      <li className="sec-7-home-7__feature">
                        <img
                          src="/assets/imgs/pages/home-7/sec-7-plus.svg"
                          alt=""
                          width="18"
                          height="18"
                          aria-hidden="true"
                        />
                        <span>Scientific Volume Pacing</span>
                      </li>
                      <li className="sec-7-home-7__feature">
                        <img
                          src="/assets/imgs/pages/home-7/sec-7-plus.svg"
                          alt=""
                          width="18"
                          height="18"
                          aria-hidden="true"
                        />
                        <span>Clear Progressive Overload Prompts</span>
                      </li>
                      <li className="sec-7-home-7__feature">
                        <img
                          src="/assets/imgs/pages/home-7/sec-7-plus.svg"
                          alt=""
                          width="18"
                          height="18"
                          aria-hidden="true"
                        />
                        <span>Automated 1RM Estimation Curves</span>
                      </li>
                      <li className="sec-7-home-7__feature">
                        <img
                          src="/assets/imgs/pages/home-7/sec-7-plus.svg"
                          alt=""
                          width="18"
                          height="18"
                          aria-hidden="true"
                        />
                        <span>100% Private Offline Logging</span>
                      </li>
                    </ul>

                    <div className="sec-7-home-7__cta d-inline-flex align-items-stretch">
                      <Link to="/pricing" className="at-btn sec-7-home-7__cta-btn">
                        <span>
                          <span className="text-1">Start Free Today</span>
                          <span className="text-2">Start Free Today</span>
                        </span>
                      </Link>
                      <Link
                        to="/pricing"
                        className="sec-7-home-7__cta-circle"
                        aria-label="Start Free Today"
                      >
                        <img
                          src="/assets/imgs/pages/home-7/sec-7-btn-arrow.svg"
                          alt=""
                          width="24"
                          height="24"
                          aria-hidden="true"
                        />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Decorative rotating star */}
            <div className="sec-7-home-7__star" aria-hidden="true">
              <img
                src="/assets/imgs/pages/home-7/sec-7-rotating.svg"
                alt=""
                width="100"
                height="100"
              />
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Home 7 Section 8 (Team — Dedicated Team + Staggered Portrait Grid)        */}
          {/* ========================================================================= */}
          <div className="sec-8-home-7 p-relative bg-neutral-0">
            <div className="container-2200 px-lg-5 px-3">
              <div className="row g-0 align-items-start">
                {/* LEFT: Eyebrow + huge heading + description + CTA */}
                <div className="col-xl-5 col-lg-5 col-12 sec-8-home-7__lead">
                  <Link
                    to="/about"
                    className="sec-8-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase"
                  >
                    <span>Advisory Board</span>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="14"
                      height="13"
                      viewBox="0 0 14 13"
                      fill="none"
                    >
                      <path
                        d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z"
                        fill="currentColor"
                      />
                    </svg>
                  </Link>

                  <h2 className="sec-8-home-7__heading mb-40">Dedicated Team</h2>

                  <p className="sec-8-home-7__desc mb-40">
                    Strength coaches, exercise physiologists, and engineers dedicated to building
                    the most friction-free athletic software on earth.
                  </p>

                  <div className="sec-4-home-7__cta d-inline-flex align-items-stretch mb-60">
                    <Link
                      to="/contact"
                      className="at-btn sec-4-home-7__cta-btn text-capitalize"
                    >
                      <span>
                        <span className="text-1">Trainer Inquiries</span>
                        <span className="text-2">Trainer Inquiries</span>
                      </span>
                    </Link>
                    <Link
                      to="/contact"
                      className="sec-4-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white"
                      aria-label="Trainer Inquiries"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="24"
                        height="24"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                      >
                        <path
                          d="M7 17L17 7M17 7H9M17 7V15"
                          stroke="currentColor"
                          strokeWidth="1.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </Link>
                  </div>
                </div>

                {/* RIGHT: Staggered 2-column team grid */}
                <div className="col-xl-7 col-lg-7 col-12 mt-5 mt-lg-0">
                  <div className="sec-8-home-7__grid">
                    {/* Column 1 */}
                    <div className="sec-8-home-7__col">
                      <div className="sec-8-home-7__card">
                        <div className="sec-8-home-7__photo">
                          <div className="fix anim-zoomin">
                            <img
                              src="/assets/imgs/pages/home-7/team-1-darrell.webp"
                              alt="Marcus Vance"
                            />
                          </div>
                        </div>
                        <span className="sec-8-home-7__badge">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M12.57 3.905L2.74 13.74 1.26 12.26 11.095 2.43 2.29 2.43V0.33L14.42 0.33V12.46H12.32L12.57 3.905Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="sec-8-home-7__info">
                          <h3 className="sec-8-home-7__name mb-0">Marcus Vance</h3>
                          <p className="sec-8-home-7__role mb-0">Head of Strength Engineering</p>
                        </div>
                      </div>

                      <div className="sec-8-home-7__card">
                        <div className="sec-8-home-7__photo">
                          <div className="fix anim-zoomin">
                            <img
                              src="/assets/imgs/pages/home-7/team-2-amelia.webp"
                              alt="Dr. Elena Ward"
                            />
                          </div>
                        </div>
                        <span className="sec-8-home-7__badge sec-8-home-7__badge--dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M12.57 3.905L2.74 13.74 1.26 12.26 11.095 2.43 2.29 2.43V0.33L14.42 0.33V12.46H12.32L12.57 3.905Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="sec-8-home-7__info">
                          <h3 className="sec-8-home-7__name mb-0">Dr. Elena Ward</h3>
                          <p className="sec-8-home-7__role mb-0">Hypertrophy Physiologist</p>
                        </div>
                      </div>
                    </div>

                    {/* Column 2 */}
                    <div className="sec-8-home-7__col">
                      <div className="sec-8-home-7__card">
                        <div className="sec-8-home-7__photo">
                          <div className="fix anim-zoomin">
                            <img
                              src="/assets/imgs/pages/home-7/team-3-esther.webp"
                              alt="Sarah Lin"
                            />
                          </div>
                        </div>
                        <span className="sec-8-home-7__badge">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M12.57 3.905L2.74 13.74 1.26 12.26 11.095 2.43 2.29 2.43V0.33L14.42 0.33V12.46H12.32L12.57 3.905Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="sec-8-home-7__info">
                          <h3 className="sec-8-home-7__name mb-0">Sarah Lin</h3>
                          <p className="sec-8-home-7__role mb-0">Sports Nutrition Director</p>
                        </div>
                      </div>

                      <div className="sec-8-home-7__card">
                        <div className="sec-8-home-7__photo">
                          <div className="fix anim-zoomin">
                            <img
                              src="/assets/imgs/pages/home-7/team-4-jacob.webp"
                              alt="Jacob Kim"
                            />
                          </div>
                        </div>
                        <span className="sec-8-home-7__badge sec-8-home-7__badge--dark">
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="16"
                            height="15"
                            viewBox="0 0 16 15"
                            fill="none"
                          >
                            <path
                              d="M12.57 3.905L2.74 13.74 1.26 12.26 11.095 2.43 2.29 2.43V0.33L14.42 0.33V12.46H12.32L12.57 3.905Z"
                              fill="currentColor"
                            />
                          </svg>
                        </span>
                        <div className="sec-8-home-7__info">
                          <h3 className="sec-8-home-7__name mb-0">Jacob Kim</h3>
                          <p className="sec-8-home-7__role mb-0">Biomechanics Lead</p>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* ========================================================================= */}
          {/* Home 7 Section 9 (Marquee Ticker)                                         */}
          {/* ========================================================================= */}
          <div className="sec-9-home-7 py-4">
            <div className="sec-9-home-7__row">
              <div className="sec-9-home-7__ticker py-3 changeless">
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: '2.5rem',
                    overflow: 'hidden',
                    whiteSpace: 'nowrap',
                  }}
                >
                  <div
                    style={{
                      display: 'flex',
                      alignItems: 'center',
                      gap: '2.5rem',
                      animation: 'ff-marquee 30s linear infinite',
                    }}
                  >
                    <span className="text-uppercase fw-700 fz-24 text-white">
                      PROGRESSIVE OVERLOAD
                    </span>
                    <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" width="20" />
                    <span className="text-uppercase fw-700 fz-24 text-white">
                      HYPERTROPHY VOLUMES
                    </span>
                    <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" width="20" />
                    <span className="text-uppercase fw-700 fz-24 text-white">
                      PRECISION MACRO ENGINE
                    </span>
                    <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" width="20" />
                    <span className="text-uppercase fw-700 fz-24 text-white">
                      1RM ESTIMATION CURVES
                    </span>
                    <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" width="20" />
                    <span className="text-uppercase fw-700 fz-24 text-white">
                      100% PRIVATE & OFFLINE
                    </span>
                    <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" width="20" />
                    <span className="text-uppercase fw-700 fz-24 text-white">
                      PROGRESSIVE OVERLOAD
                    </span>
                    <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" width="20" />
                    <span className="text-uppercase fw-700 fz-24 text-white">
                      HYPERTROPHY VOLUMES
                    </span>
                    <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" width="20" />
                    <span className="text-uppercase fw-700 fz-24 text-white">
                      PRECISION MACRO ENGINE
                    </span>
                    <img src="/assets/imgs/pages/home-7/marquee-star.svg" alt="" width="20" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
};
