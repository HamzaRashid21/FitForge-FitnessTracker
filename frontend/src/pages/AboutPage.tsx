import React from 'react';
import { Link } from 'react-router-dom';
import { ArrowRight, ShieldCheck, Zap, BarChart3, Users, Flame } from 'lucide-react';
import { CtaBanner } from '../components/public/CtaBanner.js';

export const AboutPage: React.FC = () => {
  const pillars = [
    {
      icon: <BarChart3 size={28} color="var(--color-primary)" />,
      title: 'Science Over Hype',
      description:
        'Muscle growth and strength gains aren’t mystical. They are the physiological response to systematic mechanical tension, progressive overload, and sufficient protein intake. FitForge builds every feature on empirical exercise science.',
    },
    {
      icon: <Zap size={28} color="var(--color-accent)" />,
      title: 'Zero-Friction Logging',
      description:
        'When you’re catching your breath between heavy deadlift sets, you don’t have time to navigate five sub-menus. FitForge is designed for one-thumb, 3-second entry so your intensity never drops.',
    },
    {
      icon: <ShieldCheck size={28} color="var(--color-primary)" />,
      title: 'Data Ownership & Privacy',
      description:
        'Your health biometrics and workout logs are sacred. FitForge never sells user habits to advertising networks or locks your historical data behind restrictive walled gardens. Export your raw logs anytime.',
    },
  ];

  const metrics = [
    { label: 'Documented Exercises', value: '500+' },
    { label: 'Workout Log Latency', value: '< 2.5s' },
    { label: 'Uptime Reliability', value: '99.9%' },
    { label: 'Ad-Free Guarantee', value: '100%' },
  ];

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* About Hero Header */}
      <section className="ff-section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="ff-container">
          <div style={{ maxWidth: '820px', margin: '0 auto', textAlign: 'center' }}>
            <span className="ff-section-eyebrow">Our Mission & Philosophy</span>
            <h1 className="ff-section-title" style={{ fontSize: '3rem' }}>
              Built For Lifters Who Refuse To Settle For Average
            </h1>
            <p className="ff-section-desc" style={{ margin: '0 auto', fontSize: '1.2rem' }}>
              Most fitness apps are either bloated social networks or outdated spreadsheets. We
              engineered FitForge to give serious athletes the precision tools they need to break
              through plateaus and master their physical development.
            </p>
          </div>

          {/* Key Metrics Counter Strip */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
              gap: '1.5rem',
              marginTop: '4rem',
              padding: '2rem',
              backgroundColor: 'var(--color-bg-card)',
              border: '1px solid var(--color-border)',
              borderRadius: 'var(--radius-xl)',
            }}
          >
            {metrics.map((m) => (
              <div key={m.label} style={{ textAlign: 'center' }}>
                <div
                  style={{
                    fontSize: '2.5rem',
                    fontWeight: 900,
                    color: 'var(--color-primary)',
                    lineHeight: 1,
                  }}
                >
                  {m.value}
                </div>
                <div
                  style={{
                    fontSize: '0.875rem',
                    color: 'var(--color-text-secondary)',
                    marginTop: '0.5rem',
                    fontWeight: 600,
                  }}
                >
                  {m.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* The Story & Principles */}
      <section className="ff-section">
        <div className="ff-container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 3.5rem' }}>
            <span className="ff-section-eyebrow">The Principles</span>
            <h2 className="ff-section-title">How We Engineer Continuous Gains</h2>
            <p className="ff-section-desc" style={{ margin: '0 auto' }}>
              We reject arbitrary gimmicks in favor of the three non-negotiables of athletic
              progression.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
            }}
          >
            {pillars.map((pillar) => (
              <div
                key={pillar.title}
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '3.5rem',
                    height: '3.5rem',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-bg-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {pillar.icon}
                </div>
                <h3 style={{ fontSize: '1.35rem', fontWeight: 800 }}>{pillar.title}</h3>
                <p
                  style={{
                    fontSize: '0.95rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Founder Vision & Community */}
      <section className="ff-section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
        <div className="ff-container">
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              alignItems: 'center',
            }}
          >
            <div>
              <span className="ff-section-eyebrow">The Vision</span>
              <h2 className="ff-section-title">A Lifter’s Notebook, Powered By Code</h2>
              <p className="ff-section-desc" style={{ marginBottom: '1.5rem' }}>
                FitForge started with a simple frustration: why does logging workouts feel like doing
                taxes? Why can’t an app instantly tell you that your bench press volume dropped by
                12% this week, or that you need 28g more protein to hit your daily goal?
              </p>
              <p className="ff-section-desc" style={{ marginBottom: '2rem' }}>
                We built FitForge to be the digital coach and notebook we always wanted. Fast,
                unapologetic, and laser-focused on real physical adaptation.
              </p>
              <Link to="/pricing" className="ff-btn ff-btn-primary">
                Join The Movement <ArrowRight size={16} />
              </Link>
            </div>

            <div
              style={{
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-2xl)',
                padding: '3rem',
                display: 'flex',
                flexDirection: 'column',
                gap: '1.5rem',
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                <Flame size={24} color="var(--color-primary)" />
                <h3 style={{ fontSize: '1.25rem', fontWeight: 700 }}>Commitment to Athletes</h3>
              </div>
              <ul
                style={{
                  listStyle: 'none',
                  padding: 0,
                  margin: 0,
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                  color: 'var(--color-text-secondary)',
                }}
              >
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Users size={18} color="var(--color-accent)" />
                  <span>Driven by athlete community feedback on every release</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <ShieldCheck size={18} color="var(--color-accent)" />
                  <span>Strict zero dark-patterns and zero forced subscriptions</span>
                </li>
                <li style={{ display: 'flex', alignItems: 'center', gap: '0.75rem' }}>
                  <Zap size={18} color="var(--color-accent)" />
                  <span>Continuous speed and memory optimizations</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Closing CTA */}
      <CtaBanner />
    </div>
  );
};
