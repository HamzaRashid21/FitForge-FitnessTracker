import { z } from 'zod';
import dotenv from 'dotenv';

// Load environment variables from .env file if available
dotenv.config();

const envSchema = z.object({
  NODE_ENV: z.enum(['development', 'test', 'production']).default('development'),
  PORT: z.coerce.number().int().positive().default(5000),
  API_PREFIX: z.string().default('/api/v1'),
  CORS_ORIGIN: z.string().default('http://localhost:5173'),
  RATE_LIMIT_WINDOW_MS: z.coerce
    .number()
    .int()
    .positive()
    .default(15 * 60 * 1000),
  RATE_LIMIT_MAX_REQUESTS: z.coerce.number().int().positive().default(100),
  MONGODB_URI: z.string().default('mongodb://127.0.0.1:27017/fitforge_dev'),
  MONGODB_DEBUG: z
    .string()
    .optional()
    .transform((val) => val === 'true'),
});

const parsedEnv = envSchema.safeParse(process.env);

if (!parsedEnv.success) {
  const errorDetails = parsedEnv.error.issues
    .map((issue) => `  - ${issue.path.join('.')}: ${issue.message}`)
    .join('\n');
  console.error('CRITICAL: Invalid environment configuration:\n' + errorDetails);
  throw new Error('Environment configuration validation failed');
}

export const config = {
  nodeEnv: parsedEnv.data.NODE_ENV,
  port: parsedEnv.data.PORT,
  apiPrefix: parsedEnv.data.API_PREFIX,
  corsOrigins: parsedEnv.data.CORS_ORIGIN.split(',').map((origin) => origin.trim()),
  rateLimit: {
    windowMs: parsedEnv.data.RATE_LIMIT_WINDOW_MS,
    max: parsedEnv.data.RATE_LIMIT_MAX_REQUESTS,
  },
  database: {
    uri: parsedEnv.data.MONGODB_URI,
    debug: parsedEnv.data.MONGODB_DEBUG,
  },
} as const;

export type AppConfig = typeof config;
