import type { Response } from 'express';

export interface StandardSuccessResponse<T> {
  success: true;
  message?: string;
  data: T;
  timestamp: string;
}

export interface StandardErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
    stack?: string;
  };
  timestamp: string;
}

export function sendSuccess<T>(
  res: Response,
  data: T,
  message?: string,
  statusCode = 200
): Response {
  const body: StandardSuccessResponse<T> = {
    success: true,
    ...(message ? { message } : {}),
    data,
    timestamp: new Date().toISOString(),
  };
  return res.status(statusCode).json(body);
}

export function sendError(
  res: Response,
  code: string,
  message: string,
  statusCode = 500,
  details?: unknown,
  stack?: string
): Response {
  const body: StandardErrorResponse = {
    success: false,
    error: {
      code,
      message,
      ...(details !== undefined ? { details } : {}),
      ...(stack ? { stack } : {}),
    },
    timestamp: new Date().toISOString(),
  };
  return res.status(statusCode).json(body);
}
