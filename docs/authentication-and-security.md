# FitForge Phase 2: Authentication & Account Security Specification

## 1. Overview & Architecture

FitForge Phase 2 delivers a production-grade, secure, end-to-end authentication and authorization subsystem built upon the following architecture:

- **Frontend**: React 18, TypeScript, Vite, React Router v6.
- **Backend API**: Node.js, Express, TypeScript (ESM), Helmet, Cookie-Parser, Zod, Nodemailer.
- **Database**: MongoDB via Mongoose ORM.
- **Design System**: Dedicated two-column stage layout (`AuthLayout`), supporting seamless real-time Dark and Light theme switching, utilizing FitForge brand tokens (`#f0261f` crimson accent, glassmorphic card panels, and athletic fitness visual identity).

---

## 2. Token & Session Strategy

FitForge adheres to strict OWASP session and token recommendations:

1. **Access Token (Short-Lived)**:
   - Signed with `HS256` using `JWT_ACCESS_SECRET`.
   - Expires in 15 minutes (`JWT_ACCESS_EXPIRES_IN=15m`).
   - Stored **strictly in application memory** (JavaScript closures in `apiClient.ts` / `AuthContext.tsx`).
   - **Never persisted in `localStorage` or `sessionStorage`** to prevent Cross-Site Scripting (XSS) extraction.
   - Sent via standard `Authorization: Bearer <token>` header.

2. **Refresh Token (Long-Lived & Rotated)**:
   - Stored in an **HTTP-only, Secure, SameSite Cookie** (`fitforge_rt`) scoped specifically to `/api/v1/auth`.
   - Cannot be accessed or read by client-side JavaScript.
   - Token rotation is enforced on every `/refresh` request.
   - Stored in MongoDB as a SHA-256 hash. If token reuse / duplication is detected, all sessions belonging to that token family are revoked immediately.
   - Revoked completely upon logout or password reset.

---

## 3. Core Authentication Workflows

### 3.1 Registration (`POST /api/v1/auth/register`)
- Input: `fullName`, `email`, `password`, `confirmPassword`, `termsAccepted`.
- Validations: Email format, 8+ character password (upper, lower, digit, special symbol), password match.
- Role Assignment: **Strictly defaults to role `'User'` and subscription tier `'Free'`**. Public registration can never grant Admin permissions.
- Email Verification: A cryptographically secure random token (32 bytes) is generated, hashed with SHA-256, and stored in `verificationTokenHash` with a 24-hour expiration (`verificationTokenExpiresAt`).
- An email verification link is dispatched via `emailService`.

### 3.2 Login (`POST /api/v1/auth/login`)
- Input: `email`, `password`, `rememberMe`.
- Rate Limiting: 15 attempts per 15-minute window per IP.
- Account Check: Validates password using bcrypt. Verifies account status is `active`.
- Response: Issues in-memory access token and sets the HTTP-only refresh cookie (`maxAge: 7d` or `30d` if `rememberMe`).

### 3.3 Email Verification (`POST /api/v1/auth/verify-email`)
- Input: `token` (via query param `?token=...` or request body).
- Verification: SHA-256 hash is computed and matched against active, unexpired tokens.
- On success: Marks `isEmailVerified = true` and clears the token from the database.

### 3.4 Verification Resend (`POST /api/v1/auth/resend-verification`)
- Throttled: Minimum 2-minute cooldown between resend requests to protect mail infrastructure and prevent abuse.
- Security: Always returns non-revealing confirmation to prevent user enumeration.

### 3.5 Forgot Password & Recovery (`POST /api/v1/auth/forgot-password` & `POST /api/v1/auth/reset-password`)
- Request: User enters email. Generates single-use 1-hour reset token hashed with SHA-256.
- Response: Standard success message returned regardless of whether the email exists.
- Reset: Validates token expiration, hashes new password with bcrypt (12 rounds), clears reset token, and invalidates all existing refresh token sessions across all devices.

---

## 4. Authorization & Route Guards

### 4.1 Backend Middleware
- `authenticate`: Extracts and validates the Bearer access token.
- `requireRole(...roles)`: Enforces role authorization (e.g. `requireRole('Admin')`).
- `requireEmailVerified`: Ensures user has confirmed their email address before accessing protected endpoints.

### 4.2 Frontend Route Guards
- `PublicOnlyRoute`: Protects `/login`, `/register`, `/forgot-password`, `/reset-password` from being visited by already logged-in users.
- `ProtectedRoute`:
  - Unauthenticated users are redirected to `/login?from=<path>`.
  - Unverified accounts are redirected to `/verify-email`.
  - Verified users with incomplete onboarding (`isOnboardingCompleted: false`) are redirected to `/onboarding`.
  - Admins bypass the regular user onboarding flow.

---

## 5. Integration Boundary: Phase 2 to Phase 3 Onboarding

- Route: `/onboarding`
- As mandated by the architecture roadmap, the interactive fitness survey (goals, physical stats, preferences) will be created in Phase 3.
- In Phase 2, `/onboarding` serves as the verified post-auth boundary that prevents users from bypassing onboarding.
- `isOnboardingCompleted` is persisted in MongoDB on the User model.

---

## 6. Admin Account Provisioning

Admin accounts must never be registered through the public sign-up interface. To provision an administrator in production or staging:
1. Run a secure database seeding script or CLI command:
   ```bash
   node dist/scripts/seedAdmin.js --email="admin@fitforge.com" --name="System Administrator"
   ```
2. Or update an existing account directly in MongoDB with administrative privilege:
   ```javascript
   db.users.updateOne({ email: "admin@fitforge.com" }, { $set: { role: "Admin" } });
   ```

---

## 7. Environment Variables Reference

| Variable | Description | Default |
|---|---|---|
| `JWT_ACCESS_SECRET` | Secret key for signing access tokens | Strong dev key |
| `JWT_REFRESH_SECRET` | Secret key for signing refresh tokens | Strong dev key |
| `JWT_ACCESS_EXPIRES_IN` | Access token lifetime | `15m` |
| `JWT_REFRESH_EXPIRES_IN` | Refresh token lifetime | `7d` |
| `FRONTEND_URL` | Base URL for verification/reset email links | `http://localhost:5173` |
| `SMTP_HOST` | Outgoing SMTP mail server | (Optional in dev) |
| `SMTP_PORT` | Outgoing SMTP mail port | `587` |
| `SMTP_USER` | SMTP username | (Optional in dev) |
| `SMTP_PASS` | SMTP password | (Optional in dev) |
| `SMTP_FROM` | Sender display name and email address | `FitForge <no-reply@fitforge.com>` |

> **Development Mail Mode**: If SMTP variables are omitted, verification and password reset links are printed directly to the application console for testing.

---

## 8. Testing Instructions

### Backend Test Suite (Vitest + Supertest)
```bash
cd backend
npm test
```
Runs 26 test cases including all 20 Phase 2 security criteria.

### Frontend Test Suite (Vitest + JSDOM)
```bash
cd frontend
npm test
```
Runs unit and component tests verifying forms, strength indicators, and theme switches.
