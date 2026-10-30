import React from 'react';

export const ServicesSection: React.FC = () => {
  return (
    <div className="sec-5-home-7 bg-neutral-0 overflow-hidden">
                    <div className="container-2200 px-lg-5 px-3 pt-120 pb-80">
                        <div className="row g-4 g-xl-5 align-items-start">
                            <div className="col-xl-4 col-lg-5 col-12">
                                <div className="sec-5-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase">
                                    <span className="text-scramble" data-scramble-text="Fitness Capabilities">Fitness Capabilities</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none" aria-hidden="true">
                                        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                                    </svg>
                                </div>
                                <h2 className="sec-5-home-7__title mb-4 mb-xl-5 reveal-text">We Build Tools That Athletes Depend On.</h2>
                                <div className="sec-5-home-7__cta d-inline-flex align-items-stretch at_fade_anim">
                                    <a href="/pricing" className="at-btn sec-5-home-7__cta-btn text-capitalize">
                                        <span>
                                            <span className="text-1">Explore plans</span>
                                            <span className="text-2">Explore plans</span>
                                        </span>
                                    </a>
                                    <a href="/pricing" className="sec-5-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label="Explore plans">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>
                            <div className="col-xl-3 col-lg-5 col-12 mx-lg-auto">
                                <div className="sec-5-home-7__photo scroll-move-up">
                                    <div className="fix anim-zoomin">
                                        <img src="/assets/imgs/pages/home-7/sec-5-founder.webp" alt="Athlete training with FitForge tracker" className="w-100 h-100 object-fit-cover" width="493" height="582" loading="lazy" />
                                    </div>

                                </div>
                            </div>
                            <div className="col-xl-4 col-lg-12 col-12">
                                <div className="accordion accordion-flush sec-5-home-7__accordion" id="accordionSec5Home7">
                                    <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                                        <h3 className="accordion-header" id="headingSec5H71">
                                            <button className="accordion-button sec-5-home-7__acc-btn" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H71" aria-expanded="true" aria-controls="collapseSec5H71">
                                                <span className="sec-5-home-7__acc-title">01. Workout Builder</span>
                                                <span className="sec-5-home-7__acc-toggle" aria-hidden="true">
                                                    <svg className="sec-5-home-7__acc-plus" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        <div id="collapseSec5H71" className="accordion-collapse collapse show" data-bs-parent="#accordionSec5Home7">
                                            <div className="accordion-body sec-5-home-7__acc-body">
                                                <p className="sec-5-home-7__acc-text mb-0">Go from plan to an effective, trackable routine in record time. We focus on clear movements that challenge your strength and inspire continuous progress.</p>
                                                <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                                                    <span className="sec-5-home-7__tag">Custom Routines</span>
                                                    <span className="sec-5-home-7__tag">Exercise Library</span>
                                                    <span className="sec-5-home-7__tag">Progressive Overload</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                                        <h3 className="accordion-header" id="headingSec5H72">
                                            <button className="accordion-button sec-5-home-7__acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H72" aria-expanded="false" aria-controls="collapseSec5H72">
                                                <span className="sec-5-home-7__acc-title">02. Nutrition Tracking</span>
                                                <span className="sec-5-home-7__acc-toggle" aria-hidden="true">
                                                    <svg className="sec-5-home-7__acc-plus" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        <div id="collapseSec5H72" className="accordion-collapse collapse" data-bs-parent="#accordionSec5Home7">
                                            <div className="accordion-body sec-5-home-7__acc-body">
                                                <p className="sec-5-home-7__acc-text mb-0">We balance intuitive logging and comprehensive macronutrient tools that make your daily nutrition simple and sustainable from day one.</p>
                                                <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                                                    <span className="sec-5-home-7__tag">Calorie Targets</span>
                                                    <span className="sec-5-home-7__tag">Macro Breakdown</span>
                                                    <span className="sec-5-home-7__tag">Hydration Log</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                                        <h3 className="accordion-header" id="headingSec5H73">
                                            <button className="accordion-button sec-5-home-7__acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H73" aria-expanded="false" aria-controls="collapseSec5H73">
                                                <span className="sec-5-home-7__acc-title">03. Progress Analytics</span>
                                                <span className="sec-5-home-7__acc-toggle" aria-hidden="true">
                                                    <svg className="sec-5-home-7__acc-plus" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        <div id="collapseSec5H73" className="accordion-collapse collapse" data-bs-parent="#accordionSec5Home7">
                                            <div className="accordion-body sec-5-home-7__acc-body">
                                                <p className="sec-5-home-7__acc-text mb-0">Modern tracking built for progress. We organize clean, detailed, and high-performance metrics that handle your fitness history without confusion.</p>
                                                <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                                                    <span className="sec-5-home-7__tag">Volume Trends</span>
                                                    <span className="sec-5-home-7__tag">Body Metrics</span>
                                                    <span className="sec-5-home-7__tag">Strength Curves</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="accordion-item sec-5-home-7__acc-item scroll-move-up">
                                        <h3 className="accordion-header" id="headingSec5H74">
                                            <button className="accordion-button sec-5-home-7__acc-btn collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseSec5H74" aria-expanded="false" aria-controls="collapseSec5H74">
                                                <span className="sec-5-home-7__acc-title">04. AI Fitness Guidance</span>
                                                <span className="sec-5-home-7__acc-toggle" aria-hidden="true">
                                                    <svg className="sec-5-home-7__acc-plus" xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                                        <path d="M6 1V11M1 6H11" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" />
                                                    </svg>
                                                </span>
                                            </button>
                                        </h3>
                                        <div id="collapseSec5H74" className="accordion-collapse collapse" data-bs-parent="#accordionSec5Home7">
                                            <div className="accordion-body sec-5-home-7__acc-body">
                                                <p className="sec-5-home-7__acc-text mb-0">Smart workouts driven by data. We convert your past session data into clear recommendations that optimize recovery and elevate personal performance.</p>
                                                <div className="sec-5-home-7__tags d-flex flex-wrap gap-2 pt-4">
                                                    <span className="sec-5-home-7__tag">Recovery Insights</span>
                                                    <span className="sec-5-home-7__tag">Streak Records</span>
                                                    <span className="sec-5-home-7__tag">Adaptive Plans</span>
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
                            <h6 className="mb-4 mb-xl-5 reveal-text">Connecting with dedicated athletes and fitness innovators to redefine healthy living.</h6>
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
  );
};

export default ServicesSection;
