import { memo } from 'react';

// Static markup converted 1:1 from the original template.
// (No state/props: the legacy jQuery/GSAP scripts own this DOM after mount.)
function BackToTop() {
  return (
    <>
      <div className="back-to-top-wrapper">
        <button id="back_to_top" type="button" className="back-to-top-btn">
          <svg width="12" height="7" viewBox="0 0 12 7" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M11 6L6 1L1 6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
          </svg>
        </button>
      </div>
    </>
  );
}

export default memo(BackToTop);
