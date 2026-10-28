import morgan from 'morgan';
import type { RequestHandler } from 'express';
import { config } from '../../config/env.js';

export const requestLogger: RequestHandler = morgan(
  ':remote-addr - :method :url HTTP/:http-version :status :res[content-length] - :response-time ms',
  {
    skip: () => config.nodeEnv === 'test',
  }
);
