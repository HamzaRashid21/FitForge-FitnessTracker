export interface ApiResponse<T> {
  success: boolean;
  message?: string;
  data: T;
  timestamp: string;
}

export interface ApiErrorResponse {
  success: false;
  error: {
    code: string;
    message: string;
    details?: unknown;
    stack?: string;
  };
  timestamp: string;
}

export interface HealthStatusResponse {
  status: 'ok' | 'degraded';
  timestamp: string;
  uptimeSeconds: number;
  environment: string;
  version: string;
  services: {
    database: {
      status: 'connected' | 'connecting' | 'disconnected' | 'disconnecting';
      readyState: number;
      host?: string;
      name?: string;
    };
  };
}
