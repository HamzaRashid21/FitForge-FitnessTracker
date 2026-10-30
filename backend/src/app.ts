import express, { type Express } from 'express';
import helmet from 'helmet';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import { config } from './config/env.js';
import { requestLogger } from './common/middleware/requestLogger.js';
import { notFoundHandler } from './common/middleware/notFoundHandler.js';
import { errorHandler } from './common/middleware/errorHandler.js';
import { healthRouter } from './modules/health/health.routes.js';
import { authRouter } from './modules/auth/routes/auth.routes.js';

export function createApp(): Express {
  const app = express();

  // 1. Security Headers
  app.use(helmet());

  // 2. CORS with Explicit Allowed Origins
  app.use(
    cors({
      origin: (origin, callback) => {
        // Allow requests with no origin (e.g. mobile apps, curl, server-to-server)
        if (!origin) {
          return callback(null, true);
        }
        if (config.corsOrigins.includes(origin) || config.corsOrigins.includes('*')) {
          return callback(null, true);
        }
        return callback(new Error(`CORS blocked request from origin: ${origin}`));
      },
      credentials: true,
      methods: ['GET', 'POST', 'PUT', 'PATCH', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization', 'X-Requested-With'],
    })
  );

  // 3. Request Parsing & Cookie Parsing with Size Limits
  app.use(express.json({ limit: '10kb' }));
  app.use(express.urlencoded({ extended: true, limit: '10kb' }));
  app.use(cookieParser());

  // 4. Request Logging
  app.use(requestLogger);

  // 5. API Route Registration
  app.use(`${config.apiPrefix}/health`, healthRouter);
  app.use(`${config.apiPrefix}/auth`, authRouter);

  // 7. 404 Route Not Found Handling
  app.use(notFoundHandler);

  // 8. Centralized Error Handling
  app.use(errorHandler);

  return app;
}

export const app = createApp();
