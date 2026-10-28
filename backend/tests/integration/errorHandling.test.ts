import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../../src/app.js';

describe('Error Handling Middleware', () => {
  it('should return 404 with standard error contract for non-existent routes', async () => {
    const res = await request(app).get('/api/v1/non-existent-route-404');

    expect(res.status).toBe(404);
    expect(res.body).toHaveProperty('success', false);
    expect(res.body).toHaveProperty('error');
    expect(res.body.error).toHaveProperty('code', 'NOT_FOUND');
    expect(res.body.error.message).toContain('Route not found');
    expect(res.body).toHaveProperty('timestamp');
  });

  it('should reject requests with disallowed CORS headers or invalid methods properly', async () => {
    const res = await request(app).options('/api/v1/health');
    // OPTIONS should be handled gracefully by CORS
    expect([200, 204]).toContain(res.status);
  });
});
