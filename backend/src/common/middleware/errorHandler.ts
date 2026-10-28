import type { Request, Response, NextFunction } from 'express';
import { ZodError } from 'zod';
import { AppError } from '../errors/AppError.js';
import { sendError } from '../utils/apiResponse.js';
import { logger } from '../utils/logger.js';
import { config } from '../../config/env.js';

interface MongooseError extends Error {
  code?: number;
  name: string;
  errors?: Record<string, { message: string; path?: string }>;
}

export function errorHandler(err: Error, req: Request, res: Response, _next: NextFunction): void {
  // 1. Handled Operational Application Errors
  if (err instanceof AppError) {
    logger.warn(`Operational error: ${err.message}`, {
      statusCode: err.statusCode,
      errorCode: err.errorCode,
      path: req.originalUrl,
      method: req.method,
      details: err.details,
    });

    sendError(
      res,
      err.errorCode,
      err.message,
      err.statusCode,
      err.details,
      config.nodeEnv !== 'production' ? err.stack : undefined
    );
    return;
  }

  // 2. Zod Schema Validation Errors
  if (err instanceof ZodError) {
    const formattedErrors = err.issues.map((issue) => ({
      path: issue.path.join('.'),
      message: issue.message,
      code: issue.code,
    }));

    logger.warn('Request validation error', {
      path: req.originalUrl,
      issues: formattedErrors,
    });

    sendError(
      res,
      'VALIDATION_ERROR',
      'One or more validation constraints failed.',
      422,
      formattedErrors,
      config.nodeEnv !== 'production' ? err.stack : undefined
    );
    return;
  }

  // 3. Mongoose Validation and Cast Errors
  const mongoErr = err as MongooseError;
  if (mongoErr.name === 'ValidationError' && mongoErr.errors) {
    const validationErrors = Object.values(mongoErr.errors).map((e) => ({
      field: e.path,
      message: e.message,
    }));

    sendError(
      res,
      'VALIDATION_ERROR',
      'Database validation failed',
      422,
      validationErrors,
      config.nodeEnv !== 'production' ? err.stack : undefined
    );
    return;
  }

  if (mongoErr.code === 11000) {
    sendError(
      res,
      'CONFLICT',
      'A record with this unique identifier already exists.',
      409,
      undefined,
      config.nodeEnv !== 'production' ? err.stack : undefined
    );
    return;
  }

  if (mongoErr.name === 'CastError') {
    sendError(
      res,
      'BAD_REQUEST',
      'Malformed resource identifier provided.',
      400,
      undefined,
      config.nodeEnv !== 'production' ? err.stack : undefined
    );
    return;
  }

  // 4. Unexpected / Unhandled Server Errors
  logger.error(`Unhandled internal server error: ${err.message}`, {
    name: err.name,
    message: err.message,
    stack: err.stack,
    path: req.originalUrl,
    method: req.method,
  });

  sendError(
    res,
    'INTERNAL_SERVER_ERROR',
    config.nodeEnv === 'production' ? 'An unexpected internal server error occurred.' : err.message,
    500,
    undefined,
    config.nodeEnv !== 'production' ? err.stack : undefined
  );
}
