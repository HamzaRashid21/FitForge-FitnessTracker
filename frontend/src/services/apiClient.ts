import { env } from '../lib/env.js';
import type { ApiResponse, ApiErrorResponse } from '../types/api.js';

export class ApiError extends Error {
  public readonly code: string;
  public readonly statusCode: number;
  public readonly details?: unknown;

  constructor(message: string, code = 'API_ERROR', statusCode = 500, details?: unknown) {
    super(message);
    this.name = 'ApiError';
    this.code = code;
    this.statusCode = statusCode;
    this.details = details;
  }
}

export interface RequestOptions extends RequestInit {
  timeoutMs?: number;
}

let currentAccessToken: string | null = null;

export function setAccessToken(token: string | null): void {
  currentAccessToken = token;
}

export function getAccessToken(): string | null {
  return currentAccessToken;
}

export async function request<T>(endpoint: string, options: RequestOptions = {}): Promise<T> {
  const { timeoutMs = 10000, headers = {}, ...customConfig } = options;

  // Cleanly join base URL with endpoint and prevent duplicate api/v1 prefix
  const cleanBase = env.apiUrl.replace(/\/$/, '');
  let cleanEndpoint = endpoint.replace(/^\//, '');
  if (cleanBase.endsWith('/api/v1') && cleanEndpoint.startsWith('api/v1/')) {
    cleanEndpoint = cleanEndpoint.replace(/^api\/v1\//, '');
  }
  const url = endpoint.startsWith('http') ? endpoint : `${cleanBase}/${cleanEndpoint}`;

  const controller = typeof AbortController !== 'undefined' ? new AbortController() : null;
  const timeoutId = controller ? setTimeout(() => controller.abort(), timeoutMs) : null;

  const defaultHeaders: Record<string, string> = {
    'Content-Type': 'application/json',
    Accept: 'application/json',
    ...(currentAccessToken ? { Authorization: `Bearer ${currentAccessToken}` } : {}),
  };

  try {
    const fetchOptions: RequestInit = {
      credentials: 'include',
      ...customConfig,
      headers: {
        ...defaultHeaders,
        ...(headers as Record<string, string>),
      },
    };

    if (controller && typeof AbortSignal !== 'undefined' && controller.signal instanceof AbortSignal) {
      fetchOptions.signal = controller.signal;
    }

    const response = await fetch(url, fetchOptions);

    if (timeoutId) clearTimeout(timeoutId);

    const contentType = response.headers.get('content-type');
    const isJson = contentType && contentType.includes('application/json');

    if (!response.ok) {
      if (isJson) {
        const errorJson = (await response.json()) as ApiErrorResponse;
        throw new ApiError(
          errorJson.error?.message || `HTTP ${response.status} Error`,
          errorJson.error?.code || 'HTTP_ERROR',
          response.status,
          errorJson.error?.details
        );
      } else {
        const textError = await response.text();
        throw new ApiError(
          textError || `HTTP ${response.status} ${response.statusText}`,
          'NETWORK_ERROR',
          response.status
        );
      }
    }

    if (response.status === 204) {
      return {} as T;
    }

    const json = (await response.json()) as ApiResponse<T>;
    return json.data;
  } catch (error) {
    if (timeoutId) clearTimeout(timeoutId);

    if (error instanceof ApiError) {
      throw error;
    }

    if (error instanceof DOMException && error.name === 'AbortError') {
      throw new ApiError('Request timed out. Please try again.', 'TIMEOUT_ERROR', 408);
    }

    throw new ApiError(
      error instanceof Error ? error.message : 'Network connection failure',
      'CONNECTION_FAILED',
      0
    );
  }
}

export const apiClient = {
  get: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'GET' }),
  post: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, {
      ...options,
      method: 'POST',
      body: body ? JSON.stringify(body) : undefined,
    }),
  put: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, {
      ...options,
      method: 'PUT',
      body: body ? JSON.stringify(body) : undefined,
    }),
  patch: <T>(endpoint: string, body?: unknown, options?: RequestOptions) =>
    request<T>(endpoint, {
      ...options,
      method: 'PATCH',
      body: body ? JSON.stringify(body) : undefined,
    }),
  delete: <T>(endpoint: string, options?: RequestOptions) =>
    request<T>(endpoint, { ...options, method: 'DELETE' }),
};
