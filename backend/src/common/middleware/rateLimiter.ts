import rateLimit from 'express-rate-limit';
import { config } from '../../config/env.js';
import { sendError } from '../utils/apiResponse.js';

export const apiRateLimiter = rateLimit({
  windowMs: config.rateLimit.windowMs,
  max: config.rateLimit.max,
  standardHeaders: true,
  legacyHeaders: false,
  handler: (_req, res) => {
    sendError(
      res,
      'RATE_LIMIT_EXCEEDED',
      'Too many requests from this client. Please try again later.',
      429
    );
  },
  skip: () => config.nodeEnv === 'test',
});
