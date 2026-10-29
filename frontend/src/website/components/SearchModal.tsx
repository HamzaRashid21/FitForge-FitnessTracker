import React from 'react';

export const SearchModal: React.FC = () => {
  return (
    <>
      {/* search-form-start */}
    <div className="at-search-body-overlay"></div>
    <div className="at-search-form-toggle">
        <div className="container">
            <div className="row mb-60">
                <div className="col-lg-12">
                    <div className="at-search-top d-flex justify-content-between align-items-center">
                        <div className="at-header-logo at-search-logo">
                            <a href="/">
                                <img data-width="30" src="/assets/imgs/template/logo/favicon.svg" alt="Orisa" />
                                <p className="h6 fw-700 fz-24 mb-0">Orisa</p>
                            </a>
                        </div>
                        <button className="at-search-close">
                            <i className="fa-light fa-xmark"></i>
                        </button>
                    </div>
                </div>
            </div>
            <div className="row justify-content-center">
                <div className="col-lg-12">
                    <div className="at-search-form">
                        <form action="#">
                            <div className="at-search-form-input">
                                <input type="text" placeholder="Find what you need…" required />
                                <span className="at-search-focus-border"></span>
                                <button className="at-search-form-btn at-btn" type="submit">
                                    <span>
                                        <span className="text-1">Search</span>
                                        <span className="text-2">Search</span>
                                    </span>
                                    <i className="icon-arrow-right">
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                            <path d="M8.33333 1L13 5.66667M13 5.66667L8.33333 10.3333M13 5.66667H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                        <svg xmlns="http://www.w3.org/2000/svg" width="14" height="12" viewBox="0 0 14 12" fill="none">
                                            <path d="M8.33333 1L13 5.66667M13 5.66667L8.33333 10.3333M13 5.66667H1" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </i>
                                </button>
                            </div>
                        </form>
                    </div>
                </div>
                <div className="col-12">
                    <div className="at-categories">
                        <h3 className="at-categories-title">Popular searches</h3>
                        <ul className="at-categories-list">
                            <li><a href="#" className="at-categories-item">UI / UX Design</a></li>
                            <li><a href="#" className="at-categories-item">Photography</a></li>
                            <li><a href="#" className="at-categories-item">Digital Marketing</a></li>
                            <li><a href="#" className="at-categories-item">Creative</a></li>
                            <li><a href="#" className="at-categories-item">Innovative</a></li>
                            <li><a href="#" className="at-categories-item">Visionary</a></li>
                            <li><a href="#" className="at-categories-item">Disruptive</a></li>
                            <li><a href="#" className="at-categories-item">Adaptive</a></li>
                            <li><a href="#" className="at-categories-item">Reliable</a></li>
                            <li><a href="#" className="at-categories-item">Scalable</a></li>
                            <li><a href="#" className="at-categories-item">Impactful</a></li>
                            <li><a href="#" className="at-categories-item">Dynamic</a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </div>
    {/* search-form-end */}
    </>
  );
};

export default SearchModal;
