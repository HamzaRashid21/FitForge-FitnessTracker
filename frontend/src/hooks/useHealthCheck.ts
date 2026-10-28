import { useState, useEffect, useCallback } from 'react';
import { fetchHealthStatus } from '../services/healthService.js';
import type { HealthStatusResponse } from '../types/api.js';

export interface UseHealthCheckReturn {
  data: HealthStatusResponse | null;
  isLoading: boolean;
  error: string | null;
  refetch: () => Promise<void>;
}

export function useHealthCheck(autoFetch = true): UseHealthCheckReturn {
  const [data, setData] = useState<HealthStatusResponse | null>(null);
  const [isLoading, setIsLoading] = useState<boolean>(autoFetch);
  const [error, setError] = useState<string | null>(null);

  const refetch = useCallback(async () => {
    setIsLoading(true);
    setError(null);
    try {
      const response = await fetchHealthStatus();
      setData(response);
    } catch (err) {
      const message = err instanceof Error ? err.message : 'Failed to reach API server';
      setError(message);
    } finally {
      setIsLoading(false);
    }
  }, []);

  useEffect(() => {
    if (autoFetch) {
      void refetch();
    }
  }, [autoFetch, refetch]);

  return { data, isLoading, error, refetch };
}
