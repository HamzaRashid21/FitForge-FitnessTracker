import React from 'react';

export const AboutGridSection: React.FC = () => {
  return (
    <div className="sec-2-home-7 p-relative bg-neutral-0">
                    <div className="container-2200 px-lg-5 px-3">

                        {/* Intro row: eyebrow + split heading + rich description */}
                        <div className="sec-2-home-7__intro row g-0 pt-100 pb-60">
                            <div className="col-lg-7 col-12 pe-lg-4">
                                <a href="/about" className="sec-2-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-30 text-uppercase">
                                    <span className="text-scramble" data-scramble-text="About Us">About Us</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                                    </svg>
                                </a>
                                <h2 className="sec-2-home-7__headline mb-0">
                                    <span className="sec-2-home-7__headline-strong reveal-text">We Empower Dedicated Athletes Reaching Peak Fitness</span>
                                </h2>
                            </div>
                            <div className="col-lg-5 col-12 mt-4 mt-lg-0 ps-lg-4 d-flex align-items-end">
                                <p className="sec-2-home-7__desc mb-0  reveal-text">
                                    <strong>FitForge</strong> is more than a workout tracker; we are a dedicated companion for active lifters who aim to advance. We <strong>combine intelligent</strong> routines with comprehensive nutrition to <strong>turn ambitious</strong> training into measurable athletic results.
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
                                            <img data-speed=".8" src="/assets/imgs/pages/home-7/sec2-img-1.webp" alt="FitForge workout tracking" />
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
                                        <h3 className="sec-2-home-7__feature-title at-char-animation">Precision Tracking</h3>
                                        <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">In your fitness journey, consistency is key. We have built intuitive workflows to log repetitions, sets, and weights seamlessly during daily training.</p>
                                    </div>
                                </div>
                                <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-4">
                                    <h3 className="sec-2-home-7__stat-value mb-3"><span className="odometer" data-count="150">0</span>+</h3>
                                    <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">Curated exercises inside our verified movement library</p>
                                </div>
                            </div>

                            {/* Row 2: image @ col 2, feature @ col 3, stat @ col 5 */}
                            <div className="sec-2-home-7__row">
                                <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-2">
                                    <div className="sec-2-home-7__img-wrap ms-2">
                                        <div className="thumb fix anim-zoomin">
                                            <img data-speed=".8" src="/assets/imgs/pages/home-7/sec2-img-2.webp" alt="FitForge nutrition analytics" />
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
                                        <h3 className="sec-2-home-7__feature-title at-char-animation">Nutrition Balance</h3>
                                        <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">We connect meal logging directly with calorie targets. Track macronutrients, monitor hydration schedules, and reach optimal daily wellness milestones.</p>
                                    </div>
                                </div>
                                <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-5">
                                    <h3 className="sec-2-home-7__stat-value mb-3"><span className="odometer" data-count="100">0</span>%</h3>
                                    <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">Personalized routine adaptability and flexible scheduling</p>
                                </div>
                            </div>

                            {/* Row 3: stat @ col 1, image @ col 3, feature @ col 4 */}
                            <div className="sec-2-home-7__row">
                                <div className="sec-2-home-7__cell sec-2-home-7__cell--stat sec-2-home-7__col-1">
                                    <h3 className="sec-2-home-7__stat-value mb-3"><span className="odometer" data-count="24">0</span>/7</h3>
                                    <p className="sec-2-home-7__stat-label mb-0 at_fade_anim">Accessible progress analytics and workout history logging.</p>
                                </div>
                                <div className="sec-2-home-7__cell sec-2-home-7__cell--img sec-2-home-7__col-3">
                                    <div className="sec-2-home-7__img-wrap ms-2">
                                        <div className="thumb fix anim-zoomin">
                                            <img data-speed=".8" src="/assets/imgs/pages/home-7/sec2-img-3.webp" alt="FitForge progress analytics" />
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
                                        <h3 className="sec-2-home-7__feature-title at-char-animation">Measurable Growth</h3>
                                        <p className="sec-2-home-7__feature-desc mb-0 at_fade_anim">We visualize milestones that keep you motivated. Our platform charts strength improvements and body metrics so you always see your progress clearly.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  );
};

export default AboutGridSection;
