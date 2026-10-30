import React from 'react';

export const CtaSection: React.FC = () => {
  return (
    <div className="sec-7-home-7 overflow-hidden py-4">
                    <div className="container-2200 px-lg-5 px-3 py-120">
                        <div className="row align-items-center g-4 g-xxl-5">
                            {/* Left: Image block */}
                            <div className="col-xxl-5 col-xl-6 col-12">
                                <div className="sec-7-home-7__media">
                                    <div className="fix anim-zoomin">
                                        <img src="/assets/imgs/pages/home-7/sec-7-photo.webp" alt="FitForge fitness community" width="798" height="798" loading="lazy" />
                                    </div>

                                </div>
                            </div>

                            {/* Right: Content */}
                            <div className="col-xxl-7 col-xl-6 col-12">
                                <div className="sec-7-home-7__content ms-xxl-4">
                                    <div className="sec-7-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-3 text-uppercase">
                                        <span className="text-scramble" data-scramble-text="Ready to Elevate Your Fitness ?">Ready to Elevate Your Fitness ?</span>
                                        <img className="sec-7-home-7__eyebrow-icon" src="/assets/imgs/pages/home-7/sec-7-eyebrow-arrow.svg" alt="" width="14" height="13" />
                                    </div>

                                    <p className="sec-7-home-7__headline mb-4 mb-lg-40 reveal-text">
                                        Stop wishing, start tracking. Whether you're at day one or an experienced athlete, our tools support your everyday fitness targets.
                                    </p>

                                    <ul className="sec-7-home-7__features list-unstyled mb-4 mb-lg-60">
                                        <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.1">
                                            <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                                            <span>Personalized fitness profiles</span>
                                        </li>
                                        <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.2">
                                            <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                                            <span>Exercise and workout planner</span>
                                        </li>
                                        <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.3">
                                            <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                                            <span>Macronutrient balance logs</span>
                                        </li>
                                        <li className="sec-7-home-7__feature at_fade_anim" data-delay="0.4">
                                            <img src="/assets/imgs/pages/home-7/sec-7-plus.svg" alt="" width="18" height="18" aria-hidden="true" />
                                            <span>Detailed progress analytics</span>
                                        </li>
                                    </ul>

                                    <div className="sec-7-home-7__cta d-inline-flex align-items-stretch at_fade_anim">
                                        <a href="/pricing" className="at-btn sec-7-home-7__cta-btn">
                                            <span>
                                                <span className="text-1">Start Your Training</span>
                                                <span className="text-2">Start Your Training</span>
                                            </span>
                                        </a>
                                        <a href="/pricing" className="sec-7-home-7__cta-circle" aria-label="Start Your Training">
                                            <img src="/assets/imgs/pages/home-7/sec-7-btn-arrow.svg" alt="" width="24" height="24" aria-hidden="true" />
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Decorative rotating star */}
                    <div className="sec-7-home-7__star" aria-hidden="true">
                        <img src="/assets/imgs/pages/home-7/sec-7-rotating.svg" alt="" width="100" height="100" />
                    </div>
                </div>
  );
};

export default CtaSection;
