import React from 'react';
import { Target, Dumbbell, UtensilsCrossed, TrendingUp } from 'lucide-react';

interface ProcessStep {
  number: string;
  icon: React.ReactNode;
  heading: string;
  description: string;
}

export const ProcessEngine: React.FC = () => {
  const steps: ProcessStep[] = [
    {
      number: '01',
      icon: <Target size={24} color="var(--color-primary)" />,
      heading: 'Goal Blueprint',
      description:
        'Set specific targets for strength, hypertrophy, or body recomposition. FitForge computes your daily caloric targets and baseline training volume.',
    },
    {
      number: '02',
      icon: <Dumbbell size={24} color="var(--color-accent)" />,
      heading: 'Frictionless Logging',
      description:
        'Record sets, reps, weight, and RPE in under 3 seconds between sets. Instant comparison with your previous session keeps progressive overload front and center.',
    },
    {
      number: '03',
      icon: <UtensilsCrossed size={24} color="var(--color-primary)" />,
      heading: 'Macro Precision',
      description:
        'Log protein, carbs, fats, and water intake effortlessly. Real-time nutrient pacing ensures muscle protein synthesis and optimal workout recovery.',
    },
    {
      number: '04',
      icon: <TrendingUp size={24} color="var(--color-accent)" />,
      heading: 'Visual Breakthroughs',
      description:
        'Watch weekly volume load curves, estimated 1RM trajectories, and body composition changes. Identify plateaus before they stall your gains.',
    },
  ];

  return (
    <section id="how-it-works" className="ff-section">
      <div className="ff-container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <span className="ff-section-eyebrow">The FitForge Method</span>
          <h2 className="ff-section-title">Engineered For Progressive Adaptation</h2>
          <p className="ff-section-desc" style={{ margin: '0 auto' }}>
            Transforming random gym sessions into systematic progress. Follow our four-phase cycle
            to continuously trigger muscular adaptation and break through plateaus.
          </p>
        </div>

        <div className="ff-process-grid">
          {steps.map((step) => (
            <div key={step.number} className="ff-process-card">
              <div
                style={{
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'space-between',
                  marginBottom: '0.5rem',
                }}
              >
                <span className="ff-process-num">{step.number}</span>
                <div
                  style={{
                    padding: '0.5rem',
                    borderRadius: 'var(--radius-md)',
                    backgroundColor: 'var(--color-bg-surface)',
                    border: '1px solid var(--color-border)',
                  }}
                >
                  {step.icon}
                </div>
              </div>
              <h3 className="ff-process-heading">{step.heading}</h3>
              <p className="ff-process-text">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
