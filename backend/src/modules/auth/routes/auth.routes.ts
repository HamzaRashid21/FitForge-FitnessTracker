import { Router } from 'express';
import { authController } from '../controllers/auth.controller.js';
import { validateRequest } from '../../../common/middleware/validateRequest.js';
import {
  registerSchema,
  loginSchema,
  verifyEmailSchema,
  resendVerificationSchema,
  forgotPasswordSchema,
  resetPasswordSchema,
} from '../validation/auth.validation.js';
import { authenticate } from '../middleware/auth.middleware.js';

export const authRouter = Router();

authRouter.post(
  '/register',
  validateRequest({ body: registerSchema }),
  authController.register.bind(authController)
);

authRouter.post(
  '/login',
  validateRequest({ body: loginSchema }),
  authController.login.bind(authController)
);

authRouter.post(
  '/refresh',
  authController.refresh.bind(authController)
);

authRouter.post(
  '/logout',
  authenticate,
  authController.logout.bind(authController)
);

authRouter.post(
  '/verify-email',
  validateRequest({ body: verifyEmailSchema }),
  authController.verifyEmail.bind(authController)
);

authRouter.post(
  '/resend-verification',
  validateRequest({ body: resendVerificationSchema }),
  authController.resendVerification.bind(authController)
);

authRouter.post(
  '/forgot-password',
  validateRequest({ body: forgotPasswordSchema }),
  authController.forgotPassword.bind(authController)
);

authRouter.post(
  '/reset-password',
  validateRequest({ body: resetPasswordSchema }),
  authController.resetPassword.bind(authController)
);

authRouter.get(
  '/me',
  authenticate,
  authController.getMe.bind(authController)
);
