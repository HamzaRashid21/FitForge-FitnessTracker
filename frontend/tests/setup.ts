import '@testing-library/jest-dom/vitest';

// Polyfill window.scrollTo in JSDOM environment
if (typeof window !== 'undefined') {
  window.scrollTo = () => {};
}

// Provide a safe fetch stub for local assets in test environment
if (typeof globalThis.fetch === 'function') {
  const originalFetch = globalThis.fetch;
  globalThis.fetch = async (input: RequestInfo | URL, init?: RequestInit) => {
    if (typeof input === 'string' && input.startsWith('/')) {
      return new Response('', { status: 200 });
    }
    return originalFetch(input, init);
  };
}
