/**
 * FitForge Subscription Tiers
 * Strictly exactly 'Free' and 'Premium' per architectural specification.
 * Subscription tier and User role are separate concepts.
 */
export const SUBSCRIPTION_TIERS = {
  FREE: 'Free',
  PREMIUM: 'Premium',
} as const;

export type SubscriptionTier = (typeof SUBSCRIPTION_TIERS)[keyof typeof SUBSCRIPTION_TIERS];

export const VALID_SUBSCRIPTION_TIERS: readonly SubscriptionTier[] = [
  SUBSCRIPTION_TIERS.FREE,
  SUBSCRIPTION_TIERS.PREMIUM,
];
