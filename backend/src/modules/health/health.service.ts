import { getDatabaseHealth } from '../../database/connection.js';
import { config } from '../../config/env.js';
import type { HealthCheckData } from './health.types.js';

export function getSystemHealth(): HealthCheckData {
  const dbHealth = getDatabaseHealth();
  const isHealthy = dbHealth.status === 'connected';

  return {
    status: isHealthy ? 'ok' : 'degraded',
    timestamp: new Date().toISOString(),
    uptimeSeconds: Math.floor(process.uptime()),
    environment: config.nodeEnv,
    version: '0.1.0',
    services: {
      database: dbHealth,
    },
  };
}
