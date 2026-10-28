/**
 * Subscription Tiers
 * Strictly Free and Premium per architectural specification.
 */
export const SUBSCRIPTION_TIERS = {
  FREE: 'Free',
  PREMIUM: 'Premium',
} as const;

export type SubscriptionTier = (typeof SUBSCRIPTION_TIERS)[keyof typeof SUBSCRIPTION_TIERS];
