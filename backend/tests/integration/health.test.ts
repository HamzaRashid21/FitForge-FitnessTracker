import { describe, it, expect } from 'vitest';
import request from 'supertest';
import { app } from '../../src/app.js';

describe('GET /api/v1/health', () => {
  it('should return a structured health response', async () => {
    const res = await request(app).get('/api/v1/health');

    // The endpoint returns 200 (if connected) or 503 (if disconnected)
    expect([200, 503]).toContain(res.status);
    expect(res.body).toHaveProperty('success', true);
    expect(res.body).toHaveProperty('data');
    expect(res.body.data).toHaveProperty('status');
    expect(res.body.data).toHaveProperty('timestamp');
    expect(res.body.data).toHaveProperty('uptimeSeconds');
    expect(res.body.data).toHaveProperty('environment');
    expect(res.body.data).toHaveProperty('services');
    expect(res.body.data.services).toHaveProperty('database');
    expect(res.body.data.services.database).toHaveProperty('status');
  });
});
