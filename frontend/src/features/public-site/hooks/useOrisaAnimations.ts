import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

declare global {
  interface Window {
    initOrisa?: () => void;
    ScrollTrigger?: {
      refresh: () => void;
      getAll: () => Array<{ kill: () => void }>;
    };
    ScrollSmoother?: {
      get: () => { kill: () => void } | undefined;
    };
  }
}

export const useOrisaAnimations = () => {
  const location = useLocation();

  useEffect(() => {
    // Scroll window to top on route change
    window.scrollTo(0, 0);

    const timer = setTimeout(() => {
      if (typeof window.initOrisa === 'function') {
        try {
          window.initOrisa();
        } catch (err) {
          console.warn('Orisa animation initialization error:', err);
        }
      }

      if (window.ScrollTrigger) {
        try {
          window.ScrollTrigger.refresh();
        } catch {
          // ignore
        }
      }
    }, 120);

    return () => {
      clearTimeout(timer);
    };
  }, [location.pathname]);
};
