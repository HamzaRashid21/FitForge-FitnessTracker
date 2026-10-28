import { apiClient } from './apiClient.js';
import type { HealthStatusResponse } from '../types/api.js';

export async function fetchHealthStatus(): Promise<HealthStatusResponse> {
  return apiClient.get<HealthStatusResponse>('health');
}
