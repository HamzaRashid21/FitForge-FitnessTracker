import React from 'react';
import { Dumbbell, PieChart, LineChart, Flame, Timer, ShieldCheck } from 'lucide-react';

interface FeatureItem {
  icon: React.ReactNode;
  title: string;
  description: string;
  tag: string;
}

export const FeatureSpotlight: React.FC = () => {
  const features: FeatureItem[] = [
    {
      icon: <Dumbbell size={24} />,
      title: 'Workout Logging & Progressive Overload',
      description:
        'Track sets, reps, weight, and RPE with automated previous-set comparisons, rest timer vibration cues, and superset grouping.',
      tag: 'Core Engine',
    },
    {
      icon: <PieChart size={24} />,
      title: 'Precision Macro & Hydration Engine',
      description:
        'Personalized macronutrient splits, calorie pacing throughout the day, and quick-add water tracking to optimize performance and recovery.',
      tag: 'Nutrition',
    },
    {
      icon: <LineChart size={24} />,
      title: 'Volume & 1RM Analytics',
      description:
        'Instant calculations for tonnage, exercise volume per muscle group, and Brzycki/Epley 1RM curve estimations for strength milestones.',
      tag: 'Data Science',
    },
    {
      icon: <Flame size={24} />,
      title: 'Habit Streaks & Motivation',
      description:
        'Maintain consistent gym discipline with daily logging streaks, milestone badges, workout heatmaps, and weekly consistency reports.',
      tag: 'Discipline',
    },
    {
      icon: <Timer size={24} />,
      title: 'Integrated Gym Rest Timers',
      description:
        'Customizable smart countdown timers between sets with audio and visual cues to keep your workout density dialed in.',
      tag: 'Gym Ready',
    },
    {
      icon: <ShieldCheck size={24} />,
      title: '100% Data Privacy & Offline First',
      description:
        'Your workout data belongs strictly to you. No predatory ad trackers, no paywalls on your raw logs, and complete offline capability.',
      tag: 'Privacy',
    },
  ];

  return (
    <section id="features" className="ff-section" style={{ backgroundColor: 'var(--color-bg-surface)' }}>
      <div className="ff-container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <span className="ff-section-eyebrow">Platform Capabilities</span>
          <h2 className="ff-section-title">Built For Lifters Who Demand Precision</h2>
          <p className="ff-section-desc" style={{ margin: '0 auto' }}>
            Every tool in FitForge is crafted to eliminate friction during your training sessions
            and give you crystal-clear clarity on your physical evolution.
          </p>
        </div>

        <div className="ff-features-grid">
          {features.map((feature) => (
            <div key={feature.title} className="ff-feature-card">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                }}
              >
                <div className="ff-feature-icon-box">{feature.icon}</div>
                <span
                  style={{
                    fontSize: '0.75rem',
                    fontWeight: 700,
                    textTransform: 'uppercase',
                    letterSpacing: '0.05em',
                    color: 'var(--color-primary)',
                    backgroundColor: 'var(--color-primary-subtle)',
                    padding: '0.25rem 0.65rem',
                    borderRadius: 'var(--radius-full)',
                  }}
                >
                  {feature.tag}
                </span>
              </div>
              <h3 className="ff-feature-title">{feature.title}</h3>
              <p className="ff-feature-desc">{feature.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
