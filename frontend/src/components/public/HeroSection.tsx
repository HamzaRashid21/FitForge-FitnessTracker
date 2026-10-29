import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, Compass, Dumbbell, Zap, TrendingUp, CheckCircle2 } from 'lucide-react';

export const HeroSection: React.FC = () => {
  return (
    <section className="ff-hero-7">
      {/* Split Background Effect */}
      <div className="ff-hero-7-bg" aria-hidden="true">
        <div className="ff-hero-7-bg-left" />
        <div className="ff-hero-7-bg-right" />
      </div>

      <div className="ff-container">
        <div className="ff-hero-7-content">
          {/* Left Column: Visual Showcase Card */}
          <div className="ff-hero-visual-card">
            <img
              src="/assets/imgs/pages/home-7/hero-vr.webp"
              alt="Athlete training in modern high-tech gym"
              className="ff-hero-visual-img"
              onError={(e) => {
                // Fallback if image path differs
                (e.target as HTMLElement).style.display = 'none';
              }}
            />
            <div className="ff-hero-visual-overlay" />

            {/* Top Coordinate Badge */}
            <div className="ff-hero-coords">
              <Compass size={14} />
              <span>FITFORGE ENGINE • v0.1.0</span>
            </div>

            {/* Interactive Feature Chips */}
            <div className="ff-hero-chips">
              <div className="ff-hero-chip">
                <Dumbbell size={15} color="var(--color-primary)" />
                <span>Progressive Overload</span>
              </div>
              <div className="ff-hero-chip">
                <Zap size={15} color="var(--color-accent)" />
                <span>Instant Rest Timers</span>
              </div>
              <div className="ff-hero-chip">
                <TrendingUp size={15} color="var(--color-primary)" />
                <span>Volume Load Curves</span>
              </div>
            </div>
          </div>

          {/* Right Column: Hero Typography & CTAs */}
          <div className="ff-hero-right">
            {/* Tech Bracket Tags */}
            <ul className="ff-hero-brackets" aria-label="Core fitness disciplines">
              <li>[ HYPERTROPHY ]</li>
              <li>[ MACRO ENGINE ]</li>
              <li>[ DATA ANALYTICS ]</li>
              <li>[ HABIT STREAKS ]</li>
            </ul>

            {/* Headline */}
            <h1 className="ff-hero-headline">
              FORGE YOUR PHYSIQUE.{' '}
              <span className="highlight">TRACK WITH PRECISION.</span>
            </h1>

            {/* Subtitle */}
            <p className="ff-hero-desc">
              FitForge replaces gym guesswork with systematic progressive overload, effortless macro
              tracking, and real-time volume load curves. Built specifically for athletes committed
              to scientific adaptation.
            </p>

            {/* CTAs */}
            <div className="ff-hero-actions">
              <Link
                to="/pricing"
                className="ff-btn ff-btn-primary"
                style={{ padding: '1rem 2.25rem', fontSize: '1rem' }}
              >
                Start Free Trial <ArrowRight size={18} />
              </Link>
              <a
                href="#features"
                className="ff-btn ff-btn-outline"
                style={{ padding: '1rem 2rem', fontSize: '1rem' }}
              >
                Explore Features
              </a>
            </div>

            {/* Social Proof Avatars */}
            <div className="ff-hero-proof">
              <div className="ff-hero-avatars" aria-hidden="true">
                <img
                  src="/assets/imgs/pages/home-7/avatar-1.webp"
                  alt="Athlete avatar"
                  className="ff-hero-avatar"
                />
                <img
                  src="/assets/imgs/pages/home-7/avatar-2.webp"
                  alt="Athlete avatar"
                  className="ff-hero-avatar"
                />
                <img
                  src="/assets/imgs/pages/home-7/avatar-3.webp"
                  alt="Athlete avatar"
                  className="ff-hero-avatar"
                />
                <img
                  src="/assets/imgs/pages/home-7/avatar-4.webp"
                  alt="Athlete avatar"
                  className="ff-hero-avatar"
                />
              </div>
              <div className="ff-hero-proof-text">
                <div style={{ display: 'flex', alignItems: 'center', gap: '0.35rem' }}>
                  <CheckCircle2 size={16} color="var(--color-success)" />
                  <strong>10,000+ PRs Logged</strong>
                </div>
                <span>by lifters aiming for peak performance</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
