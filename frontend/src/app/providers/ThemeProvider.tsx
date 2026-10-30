import React, { createContext, useContext, useEffect, useState } from 'react';

export type ThemeMode = 'dark' | 'light';

interface ThemeContextType {
  theme: ThemeMode;
  toggleTheme: () => void;
  setTheme: (theme: ThemeMode) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

const THEME_STORAGE_KEY = 'theme';

export const ThemeProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [theme, setThemeState] = useState<ThemeMode>(() => {
    if (typeof window === 'undefined') return 'dark';
    const saved = (localStorage.getItem('theme') || localStorage.getItem('fitforge-theme') || localStorage.getItem('ff-theme')) as ThemeMode | null;
    if (saved === 'dark' || saved === 'light') {
      return saved;
    }
    const htmlTheme = (document.documentElement.getAttribute('data-bs-theme') || document.documentElement.getAttribute('data-theme')) as ThemeMode | null;
    if (htmlTheme === 'dark' || htmlTheme === 'light') {
      return htmlTheme;
    }
    return 'dark'; // FitForge defaults to dark mode
  });

  useEffect(() => {
    document.documentElement.setAttribute('data-bs-theme', theme);
    document.documentElement.setAttribute('data-theme', theme);
    localStorage.setItem(THEME_STORAGE_KEY, theme);
    localStorage.setItem('fitforge-theme', theme);
    localStorage.setItem('ff-theme', theme);
    document.querySelectorAll<HTMLInputElement>('#switch, input.dark-light-checkbox').forEach((cb) => {
      cb.checked = theme === 'dark';
    });
  }, [theme]);

  const toggleTheme = () => {
    setThemeState((prev) => (prev === 'dark' ? 'light' : 'dark'));
  };

  const setTheme = (newTheme: ThemeMode) => {
    setThemeState(newTheme);
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme, setTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// eslint-disable-next-line react-refresh/only-export-components
export const useTheme = (): ThemeContextType => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
