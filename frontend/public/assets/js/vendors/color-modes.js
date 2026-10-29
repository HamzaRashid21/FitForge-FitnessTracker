'use strict';

(function () {
  function getPreferredTheme() {
    var savedTheme = localStorage.getItem('theme') || localStorage.getItem('fitforge-theme');
    if (savedTheme === 'dark' || savedTheme === 'light') {
      return savedTheme;
    }
    var htmlTheme = document.documentElement.getAttribute('data-bs-theme');
    if (htmlTheme === 'dark' || htmlTheme === 'light') {
      return htmlTheme;
    }
    return 'dark';
  }

  function syncCheckboxes(isDark) {
    var switchers = document.querySelectorAll('.dark-light-switcher #switch, #switch, input.dark-light-checkbox');
    switchers.forEach(function (checkbox) {
      checkbox.checked = isDark;
    });
  }

  function applyTheme(theme) {
    var isDark = theme === 'dark';
    document.documentElement.setAttribute('data-bs-theme', theme);
    try {
      localStorage.setItem('theme', theme);
      localStorage.setItem('fitforge-theme', theme);
    } catch (e) {}
    syncCheckboxes(isDark);
  }

  // Initial apply
  var initialTheme = getPreferredTheme();
  applyTheme(initialTheme);

  // Sync checkboxes on DOM ready & window load
  document.addEventListener('DOMContentLoaded', function () {
    syncCheckboxes(getPreferredTheme() === 'dark');
  });
  window.addEventListener('load', function () {
    syncCheckboxes(getPreferredTheme() === 'dark');
  });

  // Global click delegation for any .dark-light-switcher element (works even after React renders/re-renders)
  document.addEventListener('click', function (e) {
    var switcher = e.target.closest && e.target.closest('.dark-light-switcher');
    if (!switcher) return;

    e.preventDefault();
    var currentTheme = document.documentElement.getAttribute('data-bs-theme') || 'dark';
    var newTheme = currentTheme === 'dark' ? 'light' : 'dark';
    applyTheme(newTheme);

    // Notify any custom listeners
    window.dispatchEvent(new CustomEvent('themechange', { detail: { theme: newTheme } }));
  });

  // Watch for external data-bs-theme changes
  var observer = new MutationObserver(function (mutations) {
    mutations.forEach(function (m) {
      if (m.type === 'attributes' && m.attributeName === 'data-bs-theme') {
        var t = document.documentElement.getAttribute('data-bs-theme');
        syncCheckboxes(t === 'dark');
      }
    });
  });
  observer.observe(document.documentElement, { attributes: true, attributeFilter: ['data-bs-theme'] });

  window.orisaColorMode = {
    get: getPreferredTheme,
    set: applyTheme,
    toggle: function () {
      var current = document.documentElement.getAttribute('data-bs-theme') || 'dark';
      applyTheme(current === 'dark' ? 'light' : 'dark');
    },
  };
})();
