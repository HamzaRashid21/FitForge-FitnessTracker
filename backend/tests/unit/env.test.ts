import { describe, it, expect } from 'vitest';
import { ROLES, VALID_ROLES } from '../../src/common/constants/roles.js';
import {
  SUBSCRIPTION_TIERS,
  VALID_SUBSCRIPTION_TIERS,
} from '../../src/common/constants/subscriptions.js';
import { config } from '../../src/config/env.js';

describe('Configuration & Architecture Constants', () => {
  it('should define exactly Admin and User roles', () => {
    expect(ROLES.ADMIN).toBe('Admin');
    expect(ROLES.USER).toBe('User');
    expect(VALID_ROLES).toEqual(['Admin', 'User']);
    expect(Object.keys(ROLES)).toHaveLength(2);
  });

  it('should define exactly Free and Premium subscription tiers', () => {
    expect(SUBSCRIPTION_TIERS.FREE).toBe('Free');
    expect(SUBSCRIPTION_TIERS.PREMIUM).toBe('Premium');
    expect(VALID_SUBSCRIPTION_TIERS).toEqual(['Free', 'Premium']);
    expect(Object.keys(SUBSCRIPTION_TIERS)).toHaveLength(2);
  });

  it('should load default configuration settings safely', () => {
    expect(config).toBeDefined();
    expect(typeof config.port).toBe('number');
    expect(config.apiPrefix).toBe('/api/v1');
    expect(Array.isArray(config.corsOrigins)).toBe(true);
  });
});
