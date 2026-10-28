/**
 * Application Roles
 * Strictly Admin and User per architectural specification.
 */
export const ROLES = {
  ADMIN: 'Admin',
  USER: 'User',
} as const;

export type UserRole = (typeof ROLES)[keyof typeof ROLES];
