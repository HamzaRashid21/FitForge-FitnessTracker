import type { DatabaseHealth } from '../../database/connection.js';

export interface HealthCheckData {
  status: 'ok' | 'degraded';
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
  version: string;
  services: {
    database: DatabaseHealth;
  };
}
