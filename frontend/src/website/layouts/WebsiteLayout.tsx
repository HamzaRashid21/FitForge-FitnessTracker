import React, { useEffect } from 'react';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import Header from '../components/Header.js';
import Footer from '../components/Footer.js';
import BackToTop from '../components/BackToTop.js';
import { initPageScripts, teardownPageScripts } from '../runtime/pageScripts';

const TITLES: Record<string, string> = {
  '/': 'Orisa - Advancing Startup Innovation',
  '/about': 'About Us - Orisa',
  '/pricing': 'Pricing Plans - Orisa',
  '/contact': 'Contact Us - Orisa',
  '/coming-soon': 'Coming Soon - Orisa',
  '/404': 'Page Not Found - Orisa',
};
const DEFAULT_TITLE = 'Orisa - Creative Agency & Portfolio HTML Template';

function Shell() {
  const navigate = useNavigate();
  const { pathname } = useLocation();

  // SPA navigation for links the legacy scripts clone (e.g. mobile menu) + no-op forms.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      if (e.defaultPrevented || e.button !== 0 || e.metaKey || e.ctrlKey || e.shiftKey || e.altKey) return;
      const target = e.target as HTMLElement | null;
      const a = target?.closest && (target.closest('a[href]') as HTMLAnchorElement | null);
      if (!a || a.target === '_blank' || a.hasAttribute('download')) return;
      const href = a.getAttribute('href');
      if (!href || !href.startsWith('/') || href.startsWith('//') || href.startsWith('/assets/')) return;
      e.preventDefault();
      navigate(href);
    };
    const onSubmit = (e: Event) => {
      const target = e.target as HTMLElement | null;
      const action = target?.getAttribute && target.getAttribute('action');
      if (!action || action === '#') e.preventDefault();
    };
    document.addEventListener('click', onClick);
    document.addEventListener('submit', onSubmit);
    return () => {
      document.removeEventListener('click', onClick);
      document.removeEventListener('submit', onSubmit);
    };
  }, [navigate]);

  useEffect(() => {
    document.title = TITLES[pathname] || DEFAULT_TITLE;
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
    let cancelled = false;
    initPageScripts(() => cancelled);
    return () => {
      cancelled = true;
      teardownPageScripts();
    };
  }, [pathname]);

  return (
    <>
      <Header />
      <div id="smooth-wrapper">
        <div id="smooth-content">
          <Outlet />
          <Footer />
        </div>
      </div>
      <BackToTop />
    </>
  );
}

export const WebsiteLayout: React.FC = () => {
  const { pathname } = useLocation();
  return <Shell key={pathname} />;
};

export default WebsiteLayout;
