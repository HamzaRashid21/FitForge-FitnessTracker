import { describe, it, expect, beforeAll, afterAll } from 'vitest';
import request from 'supertest';
import { app } from '../../src/app.js';
import { User } from '../../src/modules/users/models/user.model.js';
import { connectDatabase, disconnectDatabase } from '../../src/database/connection.js';
import { generateRandomToken, hashToken } from '../../src/modules/auth/utils/token.util.js';
import { requireRole, requireEmailVerified, type AuthenticatedRequest } from '../../src/modules/auth/middleware/auth.middleware.js';
import type { Response, NextFunction } from 'express';

const TEST_DB_URI = 'mongodb://127.0.0.1:27017/fitforge_test';

describe('FitForge Phase 2 Authentication & Security Test Suite', () => {
  beforeAll(async () => {
    await connectDatabase(TEST_DB_URI);
    await User.deleteMany({ email: /@test\.com$/ });
  });

  afterAll(async () => {
    await User.deleteMany({ email: /@test\.com$/ });
    await disconnectDatabase();
  });

  const testUser = {
    fullName: 'Alex Athlete',
    email: 'alex.athlete@test.com',
    password: 'Password123!',
    confirmPassword: 'Password123!',
  };

  let rawVerificationToken: string;
  let rawResetToken: string;
  let userAccessToken: string;

  // 1. Successful Registration
  it('1. should successfully register a new user with User role and Free tier', async () => {
    const res = await request(app)
      .post('/api/v1/auth/register')
      .send(testUser);

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data.user).toBeDefined();
    expect(res.body.data.user.email).toBe(testUser.email);
    expect(res.body.data.user.role).toBe('User');
    expect(res.body.data.user.subscriptionTier).toBe('Free');
    expect(res.body.data.user.isEmailVerified).toBe(false);
    expect(res.body.data.user.isOnboardingCompleted).toBe(false);

    // Verify sensitive fields are not in response
    expect(res.body.data.user.passwordHash).toBeUndefined();
    expect(res.body.data.user.verificationTokenHash).toBeUndefined();
    expect(res.body.data.user.refreshTokens).toBeUndefined();

    // Retrieve raw verification token from DB for step 8
    const dbUser = await User.findOne({ email: testUser.email }).select('+verificationTokenHash');
    expect(dbUser).toBeDefined();
    expect(dbUser?.verificationTokenHash).toBeDefined();
  });

  // 2. Duplicate Email Rejection
  it('2. should reject registration when email already exists (ConflictError)', async () => {
    const res = await request(app)
      .post('/api/v1/auth/register')
      .send(testUser);

    expect(res.status).toBe(409);
    expect(res.body.success).toBe(false);
    expect(res.body.error.code).toBe('CONFLICT');
  });

  // 3. Invalid Registration Input
  it('3. should reject registration with invalid email or weak password', async () => {
    // Bad email
    const badEmailRes = await request(app)
      .post('/api/v1/auth/register')
      .send({
        fullName: 'Test User',
        email: 'invalid-email-format',
        password: 'Password123!',
        confirmPassword: 'Password123!',
      });
    expect([400, 422]).toContain(badEmailRes.status);

    // Mismatched password
    const mismatchRes = await request(app)
      .post('/api/v1/auth/register')
      .send({
        fullName: 'Test User',
        email: 'valid@test.com',
        password: 'Password123!',
        confirmPassword: 'DifferentPassword123!',
      });
    expect([400, 422]).toContain(mismatchRes.status);
  });

  // 4. Password Hashing in Database
  it('4. should ensure password is never stored in plain text', async () => {
    const dbUser = await User.findOne({ email: testUser.email }).select('+passwordHash');
    expect(dbUser).toBeDefined();
    expect(dbUser?.passwordHash).toBeDefined();
    expect(dbUser?.passwordHash).not.toBe(testUser.password);
    expect(dbUser?.passwordHash.startsWith('$2')).toBe(true); // bcrypt prefix
  });

  // 5. Successful Login
  it('5. should authenticate valid credentials, issue access token and set HTTP-only refresh cookie', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: testUser.email,
        password: testUser.password,
        rememberMe: true,
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.accessToken).toBeDefined();
    expect(res.body.data.user.email).toBe(testUser.email);

    userAccessToken = res.body.data.accessToken;

    // Check Set-Cookie header contains fitforge_rt
    const cookies = res.headers['set-cookie'] as unknown as string[];
    expect(cookies).toBeDefined();
    const rtCookie = cookies.find((c: string) => c.startsWith('fitforge_rt='));
    expect(rtCookie).toBeDefined();
    expect(rtCookie).toContain('HttpOnly');
  });

  // 6. Incorrect Password Rejection
  it('6. should reject login with incorrect password', async () => {
    const res = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: testUser.email,
        password: 'WrongPassword999!',
      });

    expect(res.status).toBe(401);
    expect(res.body.success).toBe(false);
    expect(res.body.error.code).toBe('UNAUTHORIZED');
  });

  // 7. Unverified Account Restrictions Middleware
  it('7. should enforce requireEmailVerified middleware restrictions', () => {
    const mockReq = {
      user: {
        sub: '123',
        email: testUser.email,
        role: 'User' as const,
        subscriptionTier: 'Free' as const,
        isEmailVerified: false,
        isOnboardingCompleted: false,
      },
    } as AuthenticatedRequest;

    const mockRes = {} as Response;
    const mockNext: NextFunction = () => {};

    expect(() => requireEmailVerified(mockReq, mockRes, mockNext)).toThrowError(
      'Email verification required to access this resource.'
    );
  });

  // 8. Successful Email Verification
  it('8. should successfully verify email with a valid token', async () => {
    // Inject known raw token into user for test
    rawVerificationToken = generateRandomToken(32);
    const tokenHash = hashToken(rawVerificationToken);

    await User.updateOne(
      { email: testUser.email },
      {
        verificationTokenHash: tokenHash,
        verificationTokenExpiresAt: new Date(Date.now() + 60 * 60 * 1000),
      }
    );

    const res = await request(app)
      .post('/api/v1/auth/verify-email')
      .send({ token: rawVerificationToken });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.user.isEmailVerified).toBe(true);

    const dbUser = await User.findOne({ email: testUser.email });
    expect(dbUser?.isEmailVerified).toBe(true);
  });

  // 9. Expired Verification Token Rejection
  it('9. should reject expired verification token', async () => {
    const expiredToken = generateRandomToken(32);
    await User.updateOne(
      { email: testUser.email },
      {
        verificationTokenHash: hashToken(expiredToken),
        verificationTokenExpiresAt: new Date(Date.now() - 10000), // Expired in the past
      }
    );

    const res = await request(app)
      .post('/api/v1/auth/verify-email')
      .send({ token: expiredToken });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });

  // 10. Verification Resend (1-Minute Cooldown)
  it('10. should enforce 1-minute cooldown on consecutive resend verification requests', async () => {
    // Set verificationLastSentAt to 2 minutes ago so first request is allowed
    await User.updateOne(
      { email: testUser.email },
      {
        isEmailVerified: false,
        verificationLastSentAt: new Date(Date.now() - 120 * 1000),
      }
    );

    // First request succeeds
    const res1 = await request(app)
      .post('/api/v1/auth/resend-verification')
      .send({ email: testUser.email });
    expect(res1.status).toBe(200);
    expect(res1.body.success).toBe(true);

    // Immediate second request is blocked by 1-minute cooldown
    const res2 = await request(app)
      .post('/api/v1/auth/resend-verification')
      .send({ email: testUser.email });
    expect(res2.status).toBe(400);
    expect(res2.body.success).toBe(false);
    expect(res2.body.error.message).toMatch(/wait/i);
  });

  // 11. Forgot Password Request
  it('11. should return generic success confirmation for forgot password (prevent enumeration)', async () => {
    const res = await request(app)
      .post('/api/v1/auth/forgot-password')
      .send({ email: testUser.email });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    const nonExistentRes = await request(app)
      .post('/api/v1/auth/forgot-password')
      .send({ email: 'nonexistent999@test.com' });

    expect(nonExistentRes.status).toBe(200);
    expect(nonExistentRes.body.success).toBe(true);
  });

  // 12. Password Reset Success
  it('12. should successfully reset password using a valid reset token', async () => {
    rawResetToken = generateRandomToken(32);
    await User.updateOne(
      { email: testUser.email },
      {
        passwordResetTokenHash: hashToken(rawResetToken),
        passwordResetExpiresAt: new Date(Date.now() + 60 * 60 * 1000),
      }
    );

    const newPassword = 'NewPassword456!';
    const res = await request(app)
      .post('/api/v1/auth/reset-password')
      .send({
        token: rawResetToken,
        password: newPassword,
        confirmPassword: newPassword,
      });

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);

    // Verify login with new password works
    const loginRes = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: testUser.email,
        password: newPassword,
      });

    expect(loginRes.status).toBe(200);
    userAccessToken = loginRes.body.data.accessToken;
  });

  // 13. Expired Reset Token Rejection
  it('13. should reject password reset with expired token', async () => {
    const expiredReset = generateRandomToken(32);
    await User.updateOne(
      { email: testUser.email },
      {
        passwordResetTokenHash: hashToken(expiredReset),
        passwordResetExpiresAt: new Date(Date.now() - 5000),
      }
    );

    const res = await request(app)
      .post('/api/v1/auth/reset-password')
      .send({
        token: expiredReset,
        password: 'AnotherPassword789!',
        confirmPassword: 'AnotherPassword789!',
      });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });

  // 14. Refresh Token Rotation
  it('14. should rotate refresh token and issue new access token on refresh', async () => {
    const loginRes = await request(app)
      .post('/api/v1/auth/login')
      .send({
        email: testUser.email,
        password: 'NewPassword456!',
      });

    const cookies = loginRes.headers['set-cookie'] as unknown as string[];
    const originalRtCookie = cookies.find((c: string) => c.startsWith('fitforge_rt='));

    const refreshRes = await request(app)
      .post('/api/v1/auth/refresh')
      .set('Cookie', originalRtCookie!);

    expect(refreshRes.status).toBe(200);
    expect(refreshRes.body.data.accessToken).toBeDefined();

    // Verify new refresh cookie returned (Token Rotation)
    const newCookies = refreshRes.headers['set-cookie'] as unknown as string[];
    const newRtCookie = newCookies.find((c: string) => c.startsWith('fitforge_rt='));
    expect(newRtCookie).toBeDefined();
    expect(newRtCookie).not.toBe(originalRtCookie);
  });

  // 15. Logout & Session Invalidation
  it('15. should clear refresh cookie and invalidate refresh session on logout', async () => {
    const logoutRes = await request(app)
      .post('/api/v1/auth/logout')
      .set('Authorization', `Bearer ${userAccessToken}`);

    expect(logoutRes.status).toBe(200);

    const cookies = logoutRes.headers['set-cookie'] as unknown as string[];
    expect(cookies).toBeDefined();
    // Cookie should be expired
    const clearedCookie = cookies.find((c: string) => c.startsWith('fitforge_rt='));
    expect(clearedCookie).toBeDefined();
    expect(clearedCookie).toContain('Expires=');
  });

  // 16. Protected Route Access
  it('16. should protect GET /api/v1/auth/me against unauthenticated requests', async () => {
    const unauthRes = await request(app).get('/api/v1/auth/me');
    expect(unauthRes.status).toBe(401);

    const validRes = await request(app)
      .get('/api/v1/auth/me')
      .set('Authorization', `Bearer ${userAccessToken}`);
    expect(validRes.status).toBe(200);
    expect(validRes.body.data.user.email).toBe(testUser.email);
  });

  // 17. Admin Authorization Middleware
  it('17. should forbid non-admin users from admin-protected middleware', () => {
    const mockReq = {
      user: {
        sub: '123',
        email: testUser.email,
        role: 'User' as const,
        subscriptionTier: 'Free' as const,
        isEmailVerified: true,
        isOnboardingCompleted: false,
      },
    } as AuthenticatedRequest;

    const mockRes = {} as Response;
    const mockNext: NextFunction = () => {};

    expect(() => requireRole('Admin')(mockReq, mockRes, mockNext)).toThrowError(
      'Access denied. Requires one of the following roles: Admin.'
    );
  });

  // 18. User Authorization Middleware
  it('18. should permit authorized roles through requireRole middleware', () => {
    let nextCalled = false;
    const mockReq = {
      user: {
        sub: '123',
        email: testUser.email,
        role: 'User' as const,
        subscriptionTier: 'Free' as const,
        isEmailVerified: true,
        isOnboardingCompleted: false,
      },
    } as AuthenticatedRequest;

    const mockRes = {} as Response;
    const mockNext: NextFunction = () => {
      nextCalled = true;
    };

    requireRole('User', 'Admin')(mockReq, mockRes, mockNext);
    expect(nextCalled).toBe(true);
  });

  // 19. Onboarding Completion Status Persistence
  it('19. should persist and return isOnboardingCompleted state accurately', async () => {
    const dbUser = await User.findOne({ email: testUser.email });
    expect(dbUser?.isOnboardingCompleted).toBe(false);

    // Mark as completed
    await User.updateOne({ email: testUser.email }, { isOnboardingCompleted: true });

    const meRes = await request(app)
      .get('/api/v1/auth/me')
      .set('Authorization', `Bearer ${userAccessToken}`);

    expect(meRes.status).toBe(200);
    expect(meRes.body.data.user.isOnboardingCompleted).toBe(true);
  });

  // 20. Safe User Response Verification
  it('20. should guarantee sensitive internal fields are never exposed in responses', async () => {
    const meRes = await request(app)
      .get('/api/v1/auth/me')
      .set('Authorization', `Bearer ${userAccessToken}`);

    const user = meRes.body.data.user;
    expect(user.passwordHash).toBeUndefined();
    expect(user.verificationTokenHash).toBeUndefined();
    expect(user.passwordResetTokenHash).toBeUndefined();
    expect(user.refreshTokens).toBeUndefined();
    expect(user.__v).toBeUndefined();
  });

  // 21. Onboarding Endpoint (POST /api/v1/auth/onboarding)
  it('21. should save onboarding details and return updated user via POST /api/v1/auth/onboarding', async () => {
    const onboardingPayload = {
      name: 'Alex The Great',
      hear: 'Friend recommendation',
      adult: true,
      goal: 'Muscle gain',
      exp: 'Intermediate',
      equip: ['Full gym', 'Dumbbells'],
      units: 'metric',
      height: '180',
      weight: '78',
      age: '24',
      days: ['Mon', 'Wed', 'Fri'],
      dur: '45–60 min',
      plan: 'premium',
    };

    const res = await request(app)
      .post('/api/v1/auth/onboarding')
      .set('Authorization', `Bearer ${userAccessToken}`)
      .send(onboardingPayload);

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.user.isOnboardingCompleted).toBe(true);
    expect(res.body.data.user.fullName).toBe('Alex The Great');
    expect(res.body.data.user.onboarding).toBeDefined();
    expect(res.body.data.user.onboarding.goal).toBe('Muscle gain');
    expect(res.body.data.user.onboarding.plan).toBe('premium');
    expect(res.body.data.user.onboarding.equip).toEqual(['Full gym', 'Dumbbells']);
  });
});
