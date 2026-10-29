import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

interface FaqItem {
  question: string;
  answer: string;
}

export const FaqAccordion: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  const faqs: FaqItem[] = [
    {
      question: 'How does FitForge help with progressive overload?',
      answer:
        'FitForge automatically pulls up your exact weight, reps, and RPE from the previous session whenever you open an exercise. It prompts you with micro-progression targets (e.g. +1 rep or +2.5 kg) so you consistently stimulate muscular hypertrophy without guessing.',
    },
    {
      question: 'Is FitForge free to use?',
      answer:
        'Yes! FitForge has a generous Free Starter plan that gives you unlimited workout logging, 300+ exercises, and basic macro tracking forever. Our optional Premium plan unlocks lifetime volume analytics, custom routines, and priority beta access.',
    },
    {
      question: 'Does FitForge work offline in basements or gym dead zones?',
      answer:
        'Absolutely. FitForge is designed offline-first. Your entire exercise catalog and current workout session operate seamlessly without an active internet connection and automatically sync when you reconnect.',
    },
    {
      question: 'Is my personal fitness and health data private?',
      answer:
        '100%. We never sell your personal data or fitness habits to third-party ad networks. Your logs, biometrics, and notes belong entirely to you and can be exported at any time in CSV or JSON format.',
    },
    {
      question: 'Can I track both strength workouts and daily nutrition in one place?',
      answer:
        'Yes, that is the primary reason FitForge was created! Instead of juggling three different apps for lifting, calories, and body measurements, FitForge provides a unified dashboard for all your physical goals.',
    },
  ];

  const toggle = (idx: number) => {
    setOpenIndex(openIndex === idx ? null : idx);
  };

  return (
    <section className="ff-section">
      <div className="ff-container">
        <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto' }}>
          <span className="ff-section-eyebrow">Frequently Asked Questions</span>
          <h2 className="ff-section-title">Everything You Need To Know</h2>
          <p className="ff-section-desc" style={{ margin: '0 auto' }}>
            Got questions about FitForge? Here are straightforward answers about our philosophy,
            features, and platform pricing.
          </p>
        </div>

        <div className="ff-faq-list">
          {faqs.map((faq, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div key={faq.question} className={`ff-faq-item ${isOpen ? 'open' : ''}`}>
                <button
                  className="ff-faq-header"
                  onClick={() => toggle(idx)}
                  aria-expanded={isOpen}
                >
                  <span>{faq.question}</span>
                  <ChevronDown
                    size={20}
                    style={{
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                      transition: 'transform var(--transition-fast)',
                      color: isOpen ? 'var(--color-primary)' : 'var(--color-text-secondary)',
                      flexShrink: 0,
                    }}
                  />
                </button>
                {isOpen && <div className="ff-faq-body">{faq.answer}</div>}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};
