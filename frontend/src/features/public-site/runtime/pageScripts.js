/*
 * Bridge between React and the original Orisa jQuery / GSAP scripts.
 *
 * The template's scripts (at-cursor.js, main.js, throwable.js) were written for
 * multi-page HTML: they run once on page load and query the DOM. In the React app
 * every route mounts a fresh DOM, so we (re)run those scripts after each mount and
 * clean up everything they registered when the route unmounts. The scripts
 * themselves are NOT modified, so all animations/effects are identical.
 */

const JS = '/assets/js/';
const PAGE_SCRIPTS = ['at-cursor.js', 'main.js', 'throwable.js'];
const sources = {};
let session = null;

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

function fetchSource(file) {
  if (!sources[file]) sources[file] = fetch(JS + file).then((r) => r.text());
  return sources[file];
}

function runScript(file, code) {
  try {
    // Indirect eval => executes in the global scope, like a classic <script>.
    (0, eval)(code + '\n//# sourceURL=' + JS + file);
  } catch (err) {
    console.error('[orisa] error while running ' + file, err);
  }
}

export async function initPageScripts(isCancelled = () => false) {
  if ('scrollRestoration' in history) history.scrollRestoration = 'manual';

  if (document.readyState !== 'complete') {
    await new Promise((r) => window.addEventListener('load', r, { once: true }));
  }
  const codes = await Promise.all(PAGE_SCRIPTS.map(fetchSource));
  if (isCancelled()) return;

  const { jQuery: $, gsap } = window;
  // Make sure GSAP plugins (and their global listeners) are registered *before* we start recording.
  if (gsap && typeof gsap.registerPlugin === 'function') {
    const plugins = [window.ScrollTrigger, window.ScrollSmoother, window.ScrollToPlugin, window.SplitText].filter(Boolean);
    gsap.registerPlugin(...plugins);
  }

  window.scrollTo({ top: 0, left: 0, behavior: 'instant' });

  const s = {
    listeners: [],
    intervals: [],
    tickers: [],
    mediaQueries: [],
    throwables: [],
    bodyChildren: new Set(Array.from(document.body.children)),
    bodyClass: document.body.className,
    restore: [],
  };
  session = s;

  // ---- record everything the legacy scripts register (so we can undo it) ---------------
  const proto = EventTarget.prototype;
  const origAdd = proto.addEventListener;
  proto.addEventListener = function (type, fn, opts) {
    if (this === document && type === 'DOMContentLoaded') {
      // The document is already loaded in an SPA: fire it ourselves.
      setTimeout(() => fn.call(document, new Event('DOMContentLoaded')), 0);
      return;
    }
    s.listeners.push([this, type, fn, opts]);
    return origAdd.call(this, type, fn, opts);
  };
  s.restore.push(() => (proto.addEventListener = origAdd));

  const origSetInterval = window.setInterval;
  window.setInterval = function (...a) {
    const id = origSetInterval.apply(window, a);
    s.intervals.push(id);
    return id;
  };
  s.restore.push(() => (window.setInterval = origSetInterval));

  if (gsap && gsap.ticker && typeof gsap.ticker.add === 'function') {
    const origTickerAdd = gsap.ticker.add;
    gsap.ticker.add = function (fn, ...rest) {
      s.tickers.push(fn);
      return origTickerAdd.call(gsap.ticker, fn, ...rest);
    };
    s.restore.push(() => (gsap.ticker.add = origTickerAdd));
  }

  if (gsap && typeof gsap.matchMedia === 'function') {
    const origMatchMedia = gsap.matchMedia;
    gsap.matchMedia = function (...a) {
      const mm = origMatchMedia.apply(gsap, a);
      s.mediaQueries.push(mm);
      return mm;
    };
    s.restore.push(() => (gsap.matchMedia = origMatchMedia));
  }

  // jQuery: put every handler into a private namespace so it can be removed in one go.
  if ($ && $.fn && typeof $.fn.on === 'function') {
    const origOn = $.fn.on;
    const ns = (t) =>
      typeof t === 'string'
        ? t.split(/\s+/).filter(Boolean).map((x) => x + '.pgrun').join(' ')
        : t;
    $.fn.on = function (types, ...rest) {
      if (types && typeof types === 'object') {
        const m = {};
        for (const k in types) m[ns(k)] = types[k];
        types = m;
      } else {
        types = ns(types);
      }
      return origOn.call(this, types, ...rest);
    };
    s.restore.push(() => ($.fn.on = origOn));
  }

  const unpatch = () => {
    s.restore.forEach((fn) => fn());
    s.restore = [];
  };

  // ---- run the original scripts in their original order --------------------------------
  try {
    runScript('at-cursor.js', codes[0]);
    runScript('main.js', codes[1]);
    runScript('throwable.js', codes[2]);

    await sleep(120); // let jQuery(document).ready callbacks run

    // Replay the window "load" handlers (the real event fired long ago).
    s.listeners
      .filter(([t, type]) => t === window && type === 'load')
      .forEach(([, , fn]) => {
        try {
          fn.call(window, new Event('load'));
        } catch (e) {
          console.error('[orisa] load handler failed', e);
        }
      });
    $(window).trigger('load.pgrun');

    await sleep(300);

    document.querySelectorAll('[data-t-throwable-scene]').forEach((el) => {
      const inst = $.data(el, 'plugin_tThrowable');
      if (inst) s.throwables.push(inst);
    });
  } finally {
    unpatch();
  }
  if (window.ScrollTrigger) window.ScrollTrigger.refresh();
}

export function teardownPageScripts() {
  const s = session;
  if (!s) return;
  session = null;
  s.restore.forEach((fn) => fn());

  const { jQuery: $, gsap, ScrollTrigger, ScrollSmoother } = window;
  const safe = (fn) => {
    try {
      fn();
    } catch (e) {
      /* element is already gone */
    }
  };

  s.throwables.forEach((t) => safe(() => t.destroy()));
  s.intervals.forEach((id) => clearInterval(id));
  s.tickers.forEach((fn) => safe(() => gsap.ticker.remove(fn)));
  s.mediaQueries.forEach((mm) => safe(() => mm.revert()));

  if (ScrollTrigger) safe(() => ScrollTrigger.getAll().forEach((t) => t.kill(true)));
  if (ScrollSmoother) safe(() => ScrollSmoother.get() && ScrollSmoother.get().kill());
  safe(() => gsap.globalTimeline.clear());

  // jQuery handlers on global objects + native listeners
  safe(() => $(window).add(document).add('html').add('body').off('.pgrun'));
  s.listeners.forEach(([t, type, fn, opts]) => safe(() => t.removeEventListener(type, fn, opts)));

  // Anything the scripts appended to <body> (popups, overlays...) or changed on it
  Array.from(document.body.children).forEach((el) => {
    if (!s.bodyChildren.has(el)) el.remove();
  });
  document.body.className = s.bodyClass;
  document.body.removeAttribute('style');
  document.documentElement.removeAttribute('style');
}
