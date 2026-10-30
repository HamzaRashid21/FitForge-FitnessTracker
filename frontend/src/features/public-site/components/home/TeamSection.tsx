import React from 'react';

export const TeamSection: React.FC = () => {
  return (
    <div className="sec-8-home-7 p-relative bg-neutral-0">
                    <div className="container-2200 px-lg-5 px-3">
                        <div className="row g-0 align-items-start">

                            {/* LEFT: Eyebrow + huge heading + description + CTA */}
                            <div className="col-xl-5 col-lg-5 col-12 sec-8-home-7__lead">
                                <a href="team.html" className="sec-8-home-7__eyebrow d-inline-flex align-items-center gap-2 mb-4 text-uppercase ">
                                    <span className="text-scramble" data-scramble-text="Meet Our Team">Meet Our Team</span>
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="13" viewBox="0 0 14 13" fill="none">
                                        <path d="M11.0037 3.41421L2.39712 12.0208L0.98291 10.6066L9.5895 2H2.00373V0H13.0037V11H11.0037V3.41421Z" fill="currentColor" />
                                    </svg>
                                </a>

                                <h2 className="sec-8-home-7__heading mb-40 reveal-text">
                                    Dedicated Team
                                </h2>

                                <p className="sec-8-home-7__desc mb-40 reveal-text">
                                    Fitness professionals engineering intelligent workout software that helps everyday athletes train smarter and achieve their targets.
                                </p>

                                <div className="sec-4-home-7__cta d-inline-flex align-items-stretch mb-60  at_fade_anim">
                                    <a href="/pricing" className="at-btn sec-4-home-7__cta-btn text-capitalize">
                                        <span>
                                            <span className="text-1">Explore Plans</span>
                                            <span className="text-2">Explore Plans</span>
                                        </span>
                                    </a>
                                    <a href="/pricing" className="sec-4-home-7__cta-circle d-inline-flex align-items-center justify-content-center text-white" aria-label="Explore Plans">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                                            <path d="M7 17L17 7M17 7H9M17 7V15" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </a>
                                </div>
                            </div>

                            {/* RIGHT: Staggered 2-column team grid */}
                            <div className="col-xl-7 col-lg-7 col-12 mt-5 mt-lg-0">
                                <div className="sec-8-home-7__grid">

                                    {/* Column 1 */}
                                    <div className="sec-8-home-7__col">
                                        {/* Card 1: Darrell Steward */}
                                        <a href="/about" className="sec-8-home-7__card " aria-label="Darrell Steward — Fitness UX Designer">
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
                                                <h3 className="sec-8-home-7__name mb-0 at_fade_anim">Darrell <br />Steward</h3>
                                                <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">Fitness UX Designer</p>
                                            </div>
                                        </a>

                                        {/* Card 2: Amelia Courtney (dark badge) */}
                                        <a href="/about" className="sec-8-home-7__card " aria-label="Amelia Courtney — Strength Coach">
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
                                                <h3 className="sec-8-home-7__name mb-0 at_fade_anim">Amelia <br />Courtney</h3>
                                                <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">Strength Coach</p>
                                            </div>
                                        </a>
                                    </div>

                                    {/* Column 2 (offset down for staircase effect on desktop) */}
                                    <div className="sec-8-home-7__col sec-8-home-7__col--offset">
                                        {/* Card 3: Esther Howard */}
                                        <a href="/about" className="sec-8-home-7__card " aria-label="Esther Howard — Platform Engineer">
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
                                                <h3 className="sec-8-home-7__name mb-0 at_fade_anim">Esther <br />Howard</h3>
                                                <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">Platform Engineer</p>
                                            </div>
                                        </a>

                                        {/* Card 4: Jacob Jones */}
                                        <a href="/about" className="sec-8-home-7__card " aria-label="Jacob Jones — Nutrition Specialist">
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
                                                <h3 className="sec-8-home-7__name mb-0 at_fade_anim">Jacob <br />Jones</h3>
                                                <p className="sec-8-home-7__role mb-0 at_fade_anim" data-delay="0.1">Nutrition Specialist</p>
                                            </div>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
  );
};

export default TeamSection;
