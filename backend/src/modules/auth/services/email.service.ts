import nodemailer, { type Transporter } from 'nodemailer';
import { config } from '../../../config/env.js';
import { logger } from '../../../common/utils/logger.js';

class EmailService {
  private transporter: Transporter | null = null;
  private isConfigured = false;

  constructor() {
    this.initTransporter();
  }

  private initTransporter(): void {
    if (config.email.host && config.email.user && config.email.pass) {
      this.transporter = nodemailer.createTransport({
        host: config.email.host,
        port: config.email.port,
        secure: config.email.port === 465,
        auth: {
          user: config.email.user,
          pass: config.email.pass,
        },
      });
      this.isConfigured = true;
      logger.info(`EmailService: Configured SMTP transport with host ${config.email.host}`);
    } else {
      this.isConfigured = false;
      logger.warn(
        'EmailService: SMTP credentials not fully configured in environment. In development mode, verification and password reset links will be printed to application logs.'
      );
    }
  }

  /**
   * Helper to build a responsive, FitForge-branded HTML email template.
   */
  private buildEmailTemplate(title: string, preheader: string, contentHtml: string): string {
    return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>${title}</title>
  <style>
    body { margin:0; padding:0; background-color:#0b0f13; font-family:'Segoe UI',Roboto,Helvetica,Arial,sans-serif; color:#ffffff; }
    .wrapper { width:100%; table-layout:fixed; background-color:#0b0f13; padding: 40px 0; }
    .container { max-width:560px; margin:0 auto; background-color:#121820; border:1px solid rgba(255,255,255,0.1); border-radius:12px; overflow:hidden; }
    .header { padding: 32px 40px 24px; text-align:center; border-bottom:1px solid rgba(255,255,255,0.08); background: linear-gradient(180deg, #18202a 0%, #121820 100%); }
    .logo-badge { display:inline-block; font-size:24px; font-weight:800; letter-spacing:-0.5px; color:#ffffff; text-decoration:none; }
    .logo-badge span { color:#f0261f; }
    .logo-sub { display:block; font-size:10px; letter-spacing:3px; color:#a3a9b2; margin-top:4px; font-weight:600; }
    .body-content { padding: 36px 40px; font-size:15px; line-height:1.65; color:#cbd5e1; }
    .body-content h1 { font-size:22px; font-weight:700; color:#ffffff; margin:0 0 16px; letter-spacing:-0.3px; }
    .btn-container { text-align:center; margin:32px 0; }
    .cta-button { display:inline-block; background:linear-gradient(180deg, #f2342c 0%, #cf1111 100%); color:#ffffff !important; text-decoration:none; padding:14px 32px; border-radius:8px; font-weight:700; font-size:15px; box-shadow: 0 8px 24px rgba(240,38,31,0.35); }
    .alt-link { font-size:12px; color:#94a3b8; word-break:break-all; margin-top:20px; }
    .footer { padding: 24px 40px; text-align:center; font-size:12px; color:#64748b; border-top:1px solid rgba(255,255,255,0.06); background-color:#0e1319; }
    .footer p { margin: 4px 0; }
  </style>
</head>
<body>
  <div style="display:none;font-size:1px;color:#0b0f13;line-height:1px;max-height:0px;max-width:0px;opacity:0;overflow:hidden;">
    ${preheader}
  </div>
  <table class="wrapper" role="presentation" cellpadding="0" cellspacing="0">
    <tr>
      <td align="center">
        <table class="container" role="presentation" cellpadding="0" cellspacing="0">
          <tr>
            <td class="header">
              <div class="logo-badge">FIT<span>FORGE</span></div>
              <div class="logo-sub">FITNESS TRACKER</div>
            </td>
          </tr>
          <tr>
            <td class="body-content">
              ${contentHtml}
            </td>
          </tr>
          <tr>
            <td class="footer">
              <p>You received this email because an action was requested for your FitForge account.</p>
              <p>&copy; ${new Date().getFullYear()} FitForge Fitness Tracker. All rights reserved.</p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
  }

  /**
   * Send Email Verification Link.
   */
  public async sendVerificationEmail(email: string, fullName: string, token: string): Promise<void> {
    const verificationUrl = `${config.frontendUrl}/verify-email?token=${encodeURIComponent(token)}`;
    const subject = 'Verify your FitForge account';
    const preheader = 'Confirm your email address to activate your FitForge fitness tracking account.';
    const content = `
      <h1>Welcome to FitForge, ${fullName}!</h1>
      <p>Thank you for joining FitForge. To start tracking your workouts, measuring progress, and reaching your fitness goals, please verify your email address.</p>
      <div class="btn-container">
        <a class="cta-button" href="${verificationUrl}" target="_blank" rel="noopener noreferrer">Verify Email Address</a>
      </div>
      <p style="font-size:13px; color:#94a3b8;">This verification link will expire in 24 hours. If you did not create this account, please ignore this email.</p>
      <div class="alt-link">
        <p>If the button above does not work, copy and paste this URL into your browser:</p>
        <a href="${verificationUrl}" style="color:#f0261f;">${verificationUrl}</a>
      </div>
    `;

    await this.sendMail(email, subject, preheader, content, `Verification Link: ${verificationUrl}`);
  }

  /**
   * Send Password Reset Link.
   */
  public async sendPasswordResetEmail(email: string, fullName: string, token: string): Promise<void> {
    const resetUrl = `${config.frontendUrl}/reset-password?token=${encodeURIComponent(token)}`;
    const subject = 'Reset your FitForge password';
    const preheader = 'Instructions to reset your FitForge account password.';
    const content = `
      <h1>Password Reset Request</h1>
      <p>Hello ${fullName},</p>
      <p>We received a request to reset the password for your FitForge account. Click the button below to choose a new password.</p>
      <div class="btn-container">
        <a class="cta-button" href="${resetUrl}" target="_blank" rel="noopener noreferrer">Reset Password</a>
      </div>
      <p style="font-size:13px; color:#94a3b8;">This link will expire in 1 hour for security. If you did not request a password reset, no action is needed and your account remains secure.</p>
      <div class="alt-link">
        <p>If the button above does not work, copy and paste this URL into your browser:</p>
        <a href="${resetUrl}" style="color:#f0261f;">${resetUrl}</a>
      </div>
    `;

    await this.sendMail(email, subject, preheader, content, `Reset Password Link: ${resetUrl}`);
  }

  /**
   * Core mail dispatcher. Uses SMTP if configured, or logs in development.
   */
  private async sendMail(
    to: string,
    subject: string,
    preheader: string,
    contentHtml: string,
    devLinkInfo: string
  ): Promise<void> {
    const html = this.buildEmailTemplate(subject, preheader, contentHtml);

    if (this.isConfigured && this.transporter) {
      try {
        await this.transporter.sendMail({
          from: config.email.from,
          to,
          subject,
          html,
        });
        logger.info(`EmailService: Successfully dispatched email "${subject}" to ${to}`);
      } catch (error) {
        const message = error instanceof Error ? error.message : 'Unknown SMTP error';
        logger.error(`EmailService: Failed to send email to ${to}: ${message}`);
        throw new Error(`Email delivery failed: ${message}`);
      }
    } else {
      // In development / unconfigured environments, log the secure URL so developer can test workflows
      logger.info(
        `[DEV EMAIL NOTIFICATION] To: ${to} | Subject: "${subject}"\n  >> ${devLinkInfo}`
      );
    }
  }
}

export const emailService = new EmailService();
