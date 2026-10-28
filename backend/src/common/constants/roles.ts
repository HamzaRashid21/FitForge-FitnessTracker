/**
 * FitForge Application Roles
 * Strictly exactly 'Admin' and 'User' per architectural specification.
 */
export const ROLES = {
  ADMIN: 'Admin',
  USER: 'User',
} as const;

export type UserRole = (typeof ROLES)[keyof typeof ROLES];

export const VALID_ROLES: readonly UserRole[] = [ROLES.ADMIN, ROLES.USER];
