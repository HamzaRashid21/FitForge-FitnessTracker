import React, { useState } from 'react';
import { Smartphone, Sparkles, Watch, Send, CheckCircle2, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';

export const ComingSoonPage: React.FC = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  const upcomingFeatures = [
    {
      icon: <Smartphone size={24} color="var(--color-primary)" />,
      title: 'Native iOS & Android Apps',
      status: 'In Alpha Testing',
      desc: 'Supercharged offline logging, instant lock-screen rest timer widgets, and seamless cloud syncing.',
    },
    {
      icon: <Sparkles size={24} color="var(--color-accent)" />,
      title: 'AI Form & Bar Path Analysis',
      status: 'In Development',
      desc: 'Record your heavy squats and bench presses. Computer vision tracking visualizes barbell velocity, bar path tilt, and rep cadence.',
    },
    {
      icon: <Watch size={24} color="var(--color-primary)" />,
      title: 'Apple Watch & Garmin Sync',
      status: 'Design Phase',
      desc: 'Automatic rest timer haptics directly on your wrist, plus resting heart rate and calorie expenditure auto-import.',
    },
  ];

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    setSubscribed(true);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <section className="ff-section">
        <div className="ff-container">
          <div style={{ maxWidth: '800px', margin: '0 auto', textAlign: 'center' }}>
            <span className="ff-section-eyebrow">FitForge Roadmap</span>
            <h1 className="ff-section-title" style={{ fontSize: '3.5rem' }}>
              The Next Evolution Of Athletic Tracking Is Coming
            </h1>
            <p className="ff-section-desc" style={{ margin: '0 auto', fontSize: '1.2rem' }}>
              We’re expanding the FitForge ecosystem with native mobile experiences, computer vision
              bar path analysis, and wearable device synchronization.
            </p>

            {/* Waitlist Subscription Box */}
            <div
              style={{
                marginTop: '3rem',
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-2xl)',
                padding: '2.5rem',
                maxWidth: '600px',
                margin: '3rem auto 0',
              }}
            >
              {subscribed ? (
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: '0.75rem' }}>
                  <CheckCircle2 size={24} color="var(--color-success)" />
                  <span style={{ fontWeight: 700, fontSize: '1.1rem' }}>
                    You’re on the VIP Beta List! Watch your inbox.
                  </span>
                </div>
              ) : (
                <form onSubmit={handleSubscribe}>
                  <h3 style={{ fontSize: '1.25rem', fontWeight: 800, marginBottom: '0.5rem' }}>
                    Join the Mobile Beta Waitlist
                  </h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      marginBottom: '1.5rem',
                    }}
                  >
                    Be among the first 500 athletes to test our native iOS and Android apps before
                    the public app store launch.
                  </p>
                  <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap' }}>
                    <input
                      type="email"
                      required
                      placeholder="Enter your athlete email..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={{
                        flex: '1 1 240px',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-full)',
                        backgroundColor: 'var(--color-bg-surface)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                      }}
                    />
                    <button
                      type="submit"
                      className="ff-btn ff-btn-primary"
                      style={{ padding: '0.75rem 1.75rem' }}
                    >
                      Request Invite <Send size={15} />
                    </button>
                  </div>
                </form>
              )}
            </div>
          </div>

          {/* Upcoming Features Grid */}
          <div
            style={{
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
              gap: '2rem',
              marginTop: '5rem',
            }}
          >
            {upcomingFeatures.map((item) => (
              <div
                key={item.title}
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2.5rem',
                  display: 'flex',
                  flexDirection: 'column',
                  gap: '1rem',
                }}
              >
                <div
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'space-between',
                  }}
                >
                  <div
                    style={{
                      width: '3.25rem',
                      height: '3.25rem',
                      borderRadius: 'var(--radius-lg)',
                      backgroundColor: 'var(--color-bg-surface)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      border: '1px solid var(--color-border)',
                    }}
                  >
                    {item.icon}
                  </div>
                  <span
                    style={{
                      fontSize: '0.75rem',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                      backgroundColor: 'var(--color-accent-subtle)',
                      padding: '0.25rem 0.65rem',
                      borderRadius: 'var(--radius-full)',
                    }}
                  >
                    {item.status}
                  </span>
                </div>
                <h3 style={{ fontSize: '1.25rem', fontWeight: 800 }}>{item.title}</h3>
                <p
                  style={{
                    fontSize: '0.9rem',
                    color: 'var(--color-text-secondary)',
                    lineHeight: 1.6,
                  }}
                >
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '4rem' }}>
            <Link to="/" className="ff-btn ff-btn-outline">
              Back to FitForge Home <ArrowRight size={16} />
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};
