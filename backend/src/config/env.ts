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
  JWT_ACCESS_SECRET: z.string().default('fitforge_dev_jwt_access_secret_key_32charsmin!'),
  JWT_REFRESH_SECRET: z.string().default('fitforge_dev_jwt_refresh_secret_key_32charsmin!'),
  JWT_ACCESS_EXPIRES_IN: z.string().default('15m'),
  JWT_REFRESH_EXPIRES_IN: z.string().default('7d'),
  FRONTEND_URL: z.string().default('http://localhost:5173'),
  SMTP_HOST: z.string().optional(),
  SMTP_PORT: z.coerce.number().int().positive().default(587),
  SMTP_USER: z.string().optional(),
  SMTP_PASS: z.string().optional(),
  SMTP_FROM: z.string().default('FitForge <no-reply@fitforge.com>'),
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
  frontendUrl: parsedEnv.data.FRONTEND_URL,
  rateLimit: {
    windowMs: parsedEnv.data.RATE_LIMIT_WINDOW_MS,
    max: parsedEnv.data.RATE_LIMIT_MAX_REQUESTS,
  },
  database: {
    uri: parsedEnv.data.MONGODB_URI,
    debug: parsedEnv.data.MONGODB_DEBUG,
  },
  jwt: {
    accessSecret: parsedEnv.data.JWT_ACCESS_SECRET,
    refreshSecret: parsedEnv.data.JWT_REFRESH_SECRET,
    accessExpiresIn: parsedEnv.data.JWT_ACCESS_EXPIRES_IN,
    refreshExpiresIn: parsedEnv.data.JWT_REFRESH_EXPIRES_IN,
  },
  email: {
    host: parsedEnv.data.SMTP_HOST,
    port: parsedEnv.data.SMTP_PORT,
    user: parsedEnv.data.SMTP_USER,
    pass: parsedEnv.data.SMTP_PASS,
    from: parsedEnv.data.SMTP_FROM,
  },
} as const;

export type AppConfig = typeof config;
