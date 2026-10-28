import { config } from '../../config/env.js';

type LogLevel = 'info' | 'warn' | 'error' | 'debug';

const SENSITIVE_KEYS = ['password', 'token', 'secret', 'authorization', 'cookie', 'key'];

function sanitize(data: unknown): unknown {
  if (!data || typeof data !== 'object') {
    return data;
  }

  if (Array.isArray(data)) {
    return data.map(sanitize);
  }

  const sanitized: Record<string, unknown> = {};
  for (const [key, value] of Object.entries(data as Record<string, unknown>)) {
    const isSensitive = SENSITIVE_KEYS.some((sensitive) => key.toLowerCase().includes(sensitive));
    if (isSensitive) {
      sanitized[key] = '[REDACTED]';
    } else if (typeof value === 'object' && value !== null) {
      sanitized[key] = sanitize(value);
    } else {
      sanitized[key] = value;
    }
  }
  return sanitized;
}

function formatMessage(level: LogLevel, message: string, meta?: unknown): string {
  const timestamp = new Date().toISOString();
  const metaStr = meta ? ` | ${JSON.stringify(sanitize(meta))}` : '';
  return `[${timestamp}] [${level.toUpperCase()}] ${message}${metaStr}`;
}

export const logger = {
  info(message: string, meta?: unknown): void {
    if (config.nodeEnv !== 'test') {
      console.log(formatMessage('info', message, meta));
    }
  },
  warn(message: string, meta?: unknown): void {
    if (config.nodeEnv !== 'test') {
      console.warn(formatMessage('warn', message, meta));
    }
  },
  error(message: string, meta?: unknown): void {
    if (config.nodeEnv !== 'test') {
      console.error(formatMessage('error', message, meta));
    }
  },
  debug(message: string, meta?: unknown): void {
    if (config.nodeEnv === 'development') {
      console.debug(formatMessage('debug', message, meta));
    }
  },
};
