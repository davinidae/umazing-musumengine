import { ApiResponse } from '../utils';

/**
 * healthHandler (async).
 * @returns Type: `Promise<ApiResponse>`.
 */
export async function healthHandler() {
  return new ApiResponse(200, {
    status: 'ok',
    timestamp: new Date().toISOString(),
    env: process.env.NODE_ENV || 'production',
  });
}

/**
 * rootHandler (async).
 * @returns Type: `Promise<ApiResponse>`.
 */
export async function rootHandler() {
  return new ApiResponse(200, {
    name: 'umazing-musumengine API',
    version: '1.0.0',
    endpoints: {
      'GET /health': 'Health check',
      'POST /login': 'Start a session',
    },
  });
}
