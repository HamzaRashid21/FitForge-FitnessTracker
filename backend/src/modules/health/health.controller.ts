import type { Request, Response } from 'express';
import { getSystemHealth } from './health.service.js';
import { sendSuccess } from '../../common/utils/apiResponse.js';

export function getHealthHandler(_req: Request, res: Response): void {
  const healthData = getSystemHealth();
  const httpStatus = healthData.status === 'ok' ? 200 : 503;

  sendSuccess(res, healthData, 'System health report', httpStatus);
}
