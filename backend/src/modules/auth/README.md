# Auth Module (Phase 2 Architectural Specification)

## Purpose

Manages user authentication, registration, email verification, password reset, and JWT session tokens.

## Architecture

- `auth.routes.ts`: Endpoints for register, login, logout, password recovery.
- `auth.controller.ts`: Handles HTTP request/response transformations and cookie/header token transmission.
- `auth.service.ts`: Core password hashing (bcrypt), token creation (JWT), and verification logic.
- `auth.validation.ts`: Zod schemas for input validation.
- `auth.types.ts`: TypeScript contracts for auth requests/responses.

## Security Constraints

- Role: Defaults strictly to `User`. Public registration cannot assign the `Admin` role.
- Tokens: Secure, HTTP-only cookie or Bearer tokens. Expiring single-use reset tokens.
