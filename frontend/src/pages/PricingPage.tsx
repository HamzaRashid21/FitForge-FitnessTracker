import React, { useState } from 'react';
import { Check, ArrowRight, ShieldCheck, Zap } from 'lucide-react';
import { FaqAccordion } from '../components/public/FaqAccordion.js';

export const PricingPage: React.FC = () => {
  const [isAnnual, setIsAnnual] = useState(false);

  const freeFeatures = [
    'Unlimited workout & set logging',
    'Full exercise library (300+ movements)',
    'Rest timer with haptic and audio cues',
    'Daily calorie, macro & water entry',
    '30-day historical log retention',
    'Standard community Discord access',
  ];

  const proFeatures = [
    'Everything in Free Starter Plan',
    'Unlimited lifetime history & data backup',
    'Full volume load & 1RM progression analytics',
    'Custom superset & dropset builder',
    'Advanced macro pacing & nutrient timing',
    'Raw CSV & JSON data export anytime',
    'Priority invitation to iOS & Android betas',
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Pricing Header & Billing Toggle */}
      <section className="ff-section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="ff-container">
          <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
            <span className="ff-section-eyebrow">Predictable & Honest Pricing</span>
            <h1 className="ff-section-title" style={{ fontSize: '3rem' }}>
              Invest In Your Physical Progression
            </h1>
            <p className="ff-section-desc" style={{ margin: '0 auto' }}>
              Get started completely free or unlock advanced volume analytics with FitForge Pro. No
              predatory contracts, no hidden charges.
            </p>

            {/* Monthly / Annual Billing Toggle */}
            <div className="ff-pricing-toggle-wrap">
              <button
                className={`ff-pricing-toggle-btn ${!isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(false)}
                type="button"
              >
                Monthly Billing
              </button>
              <button
                className={`ff-pricing-toggle-btn ${isAnnual ? 'active' : ''}`}
                onClick={() => setIsAnnual(true)}
                type="button"
                style={{ display: 'inline-flex', alignItems: 'center', gap: '0.35rem' }}
              >
                <span>Annual Billing</span>
                <span
                  style={{
                    backgroundColor: 'var(--color-accent)',
                    color: '#0b0f13',
                    fontSize: '0.7rem',
                    fontWeight: 800,
                    padding: '0.15rem 0.45rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  SAVE 20%
                </span>
              </button>
            </div>
          </div>

          {/* Pricing Grid */}
          <div className="ff-pricing-grid">
            {/* Free Starter Card */}
            <div className="ff-pricing-card">
              <div>
                <h3 className="ff-pricing-plan-name">Free Starter</h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    marginTop: '0.5rem',
                  }}
                >
                  Essential workout and calorie logging for lifters starting their progressive overload journey.
                </p>
              </div>

              <div className="ff-pricing-price">
                $0 <span>/ forever</span>
              </div>

              <button
                className="ff-btn ff-btn-outline"
                style={{ width: '100%', padding: '0.875rem 1rem' }}
                onClick={() => {
                  alert('Free tier is instantly accessible! Welcome to FitForge.');
                }}
              >
                Get Started Free <ArrowRight size={16} />
              </button>

              <ul className="ff-pricing-features">
                {freeFeatures.map((feat) => (
                  <li key={feat} className="ff-pricing-feature">
                    <Check size={18} />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Pro Card (Featured) */}
            <div className="ff-pricing-card featured">
              <span className="ff-pricing-badge">RECOMMENDED</span>
              <div>
                <h3 className="ff-pricing-plan-name">FitForge Pro</h3>
                <p
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    marginTop: '0.5rem',
                  }}
                >
                  Complete analytical power, unlimited historical trends, and advanced gym tools for serious athletes.
                </p>
              </div>

              <div className="ff-pricing-price">
                ${isAnnual ? '7.99' : '9.99'}{' '}
                <span>/ month {isAnnual ? '(billed annually)' : ''}</span>
              </div>

              <button
                className="ff-btn ff-btn-primary"
                style={{ width: '100%', padding: '0.875rem 1rem' }}
                onClick={() => {
                  alert('FitForge Pro checkout simulation: Phase 1 public presentation active.');
                }}
              >
                Start 14-Day Free Trial <ArrowRight size={16} />
              </button>

              <ul className="ff-pricing-features">
                {proFeatures.map((feat) => (
                  <li key={feat} className="ff-pricing-feature">
                    <Check size={18} color="var(--color-primary)" />
                    <span>{feat}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Guarantee Badges */}
          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              gap: '2.5rem',
              marginTop: '4rem',
              flexWrap: 'wrap',
              color: 'var(--color-text-secondary)',
              fontSize: '0.875rem',
            }}
          >
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <ShieldCheck size={20} color="var(--color-success)" />
              <span>14-day full money-back guarantee</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
              <Zap size={20} color="var(--color-primary)" />
              <span>Cancel anytime with 1-click</span>
            </div>
          </div>
        </div>
      </section>

      {/* Pricing FAQs */}
      <FaqAccordion />
    </div>
  );
};
