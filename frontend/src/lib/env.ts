/**
 * Environment configuration for FitForge Frontend.
 * Only variables with the VITE_ prefix are exposed to the client bundle.
 */
export const env = {
  apiUrl: import.meta.env.VITE_API_URL || 'http://localhost:5000/api/v1',
  appEnv: import.meta.env.VITE_APP_ENV || 'development',
  appName: import.meta.env.VITE_APP_NAME || 'FitForge Fitness Tracker',
  isDev: import.meta.env.DEV,
  isProd: import.meta.env.PROD,
} as const;
