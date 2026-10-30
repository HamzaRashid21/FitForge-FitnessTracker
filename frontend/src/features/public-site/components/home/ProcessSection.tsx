import React from 'react';

export const ProcessSection: React.FC = () => {
  return (
    <div className="sec-6-home-7 p-relative bg-neutral-0">
                    <div className="container-2200 px-lg-5 px-3">

                        {/* Header row: eyebrow + big title + description */}
                        <div className="sec-6-home-7__header row g-0 pt-100 pb-50">
                            <div className="col-lg-7 col-12">
                                <a href="/pricing" className="sec-6-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-3 text-uppercase">
                                    <span className="text-scramble" data-scramble-text="Training Engine">Training Engine</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                                    </svg>
                                </a>
                                <h2 className="sec-6-home-7__title mb-0 reveal-text">The Process</h2>
                            </div>
                            <div className="col-lg-5 col-12 mt-4 mt-lg-0 d-flex align-items-end justify-content-lg-end">
                                <p className="sec-6-home-7__desc text-lg-end mb-0 at_fade_anim">
                                    Consistent routines for dedicated lifters. How you take your fitness from starting goals to permanent physical athletic mastery.
                                </p>
                            </div>
                        </div>

                        {/* Waterfall chip labels (staircase pattern) */}
                        <div className="sec-6-home-7__chips d-none d-lg-flex flex-column mb-80">
                            <span className="sec-6-home-7__chip sec-6-home-7__chip--1 at_fade_anim" data-delay="0.1">
                                <span className="sec-6-home-7__chip-text">Profile &amp; Fitness Goals</span>
                            </span>
                            <span className="sec-6-home-7__chip sec-6-home-7__chip--2 at_fade_anim" data-fade-offset="100" data-delay="0.2">
                                <span className="sec-6-home-7__chip-text">Routine &amp; Meal Planning</span>
                            </span>
                            <span className="sec-6-home-7__chip sec-6-home-7__chip--3 at_fade_anim" data-fade-offset="100" data-delay="0.3">
                                <span className="sec-6-home-7__chip-text">Live Workout Tracking</span>
                            </span>
                            <span className="sec-6-home-7__chip sec-6-home-7__chip--4 at_fade_anim" data-fade-offset="100" data-delay="0.4">
                                <span className="sec-6-home-7__chip-text">Progress &amp; Analytics</span>
                            </span>
                        </div>

                        {/* 4 process cards */}
                        <div className="sec-6-home-7__cards pb-120">
                            <div className="sec-6-home-7__card-wrap at_fade_anim" data-delay="0.1">
                                <div className="sec-6-home-7__card">
                                    <div className="sec-6-home-7__card-body">
                                        <p className="sec-6-home-7__card-num mb-0">[01]</p>
                                        <h3 className="sec-6-home-7__card-title mb-0">Profile &amp; Fitness Goals</h3>
                                        <p className="sec-6-home-7__card-desc mb-0">
                                            Setting baseline fitness metrics by creating custom goals that maximize training results with practical everyday schedules.
                                        </p>
                                    </div>
                                    <div className="sec-6-home-7__card-media">
                                        <img src="/assets/imgs/pages/home-7/step-1.webp" alt="Profile and Fitness Goals" />
                                    </div>
                                </div>
                            </div>

                            <div className="sec-6-home-7__card-wrap at_fade_anim" data-delay="0.3">
                                <div className="sec-6-home-7__card">
                                    <div className="sec-6-home-7__card-body">
                                        <p className="sec-6-home-7__card-num mb-0">[02]</p>
                                        <h3 className="sec-6-home-7__card-title mb-0">Routine &amp; Meal Planning</h3>
                                        <p className="sec-6-home-7__card-desc mb-0">
                                            Transforming targets into structured workout plans and nutritional targets before stepping onto the gym floor for exercise.
                                        </p>
                                    </div>
                                    <div className="sec-6-home-7__card-media">
                                        <img src="/assets/imgs/pages/home-7/step-2.webp" alt="Routine and Meal Planning" />
                                    </div>
                                </div>
                            </div>

                            <div className="sec-6-home-7__card-wrap at_fade_anim" data-delay="0.5">
                                <div className="sec-6-home-7__card">
                                    <div className="sec-6-home-7__card-body">
                                        <p className="sec-6-home-7__card-num mb-0">[03]</p>
                                        <h3 className="sec-6-home-7__card-title mb-0">Live Workout Tracking</h3>
                                        <p className="sec-6-home-7__card-desc mb-0">
                                            Recording each repetition, set, and resting interval using our responsive logging interface that athletes can depend on.
                                        </p>
                                    </div>
                                    <div className="sec-6-home-7__card-media">
                                        <img src="/assets/imgs/pages/home-7/step-3.webp" alt="Live Workout Tracking" />
                                    </div>
                                </div>
                            </div>

                            <div className="sec-6-home-7__card-wrap at_fade_anim" data-delay="0.7">
                                <div className="sec-6-home-7__card">
                                    <div className="sec-6-home-7__card-body">
                                        <p className="sec-6-home-7__card-num mb-0">[04]</p>
                                        <h3 className="sec-6-home-7__card-title mb-0">Progress &amp; Analytics</h3>
                                        <p className="sec-6-home-7__card-desc mb-0">
                                            Analyzing, refining, and celebrating visual records that show your progression from initial workouts to peak physical form.
                                        </p>
                                    </div>
                                    <div className="sec-6-home-7__card-media">
                                        <img src="/assets/imgs/pages/home-7/step-4.webp" alt="Progress and Analytics" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  );
};

export default ProcessSection;
