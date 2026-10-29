import React, { useState } from 'react';
import { Mail, MessageSquare, Clock, Send, CheckCircle2 } from 'lucide-react';

export const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    category: 'general',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) return;

    setIsLoading(true);
    setTimeout(() => {
      setIsLoading(false);
      setSubmitted(true);
    }, 600);
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      <section className="ff-section">
        <div className="ff-container">
          <div style={{ maxWidth: '750px', margin: '0 auto', textAlign: 'center' }}>
            <span className="ff-section-eyebrow">Get In Touch</span>
            <h1 className="ff-section-title" style={{ fontSize: '3rem' }}>
              We’re Here To Support Your Journey
            </h1>
            <p className="ff-section-desc" style={{ margin: '0 auto' }}>
              Have a question about tracking routines, feature suggestions, or trainer
              partnerships? Reach out to our engineering and coaching team.
            </p>
          </div>

          <div
            style={{
              display: 'grid',
              gridTemplateColumns: '1fr 1fr',
              gap: '3rem',
              marginTop: '4rem',
              alignItems: 'start',
            }}
          >
            {/* Contact Form */}
            <div
              style={{
                backgroundColor: 'var(--color-bg-card)',
                border: '1px solid var(--color-border)',
                borderRadius: 'var(--radius-2xl)',
                padding: '2.5rem',
              }}
            >
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '2rem 1rem' }}>
                  <div
                    style={{
                      width: '3.5rem',
                      height: '3.5rem',
                      borderRadius: '50%',
                      backgroundColor: 'var(--color-success-bg)',
                      color: 'var(--color-success)',
                      display: 'flex',
                      alignItems: 'center',
                      justifyContent: 'center',
                      margin: '0 auto 1.5rem',
                    }}
                  >
                    <CheckCircle2 size={32} />
                  </div>
                  <h3 style={{ fontSize: '1.5rem', fontWeight: 800, marginBottom: '0.75rem' }}>
                    Message Dispatched!
                  </h3>
                  <p
                    style={{
                      color: 'var(--color-text-secondary)',
                      lineHeight: 1.6,
                      marginBottom: '1.5rem',
                    }}
                  >
                    Thank you, <strong>{formData.name}</strong>. A FitForge support engineer will
                    review your inquiry and respond to <code>{formData.email}</code> within 24 hours.
                  </p>
                  <button
                    className="ff-btn ff-btn-outline"
                    onClick={() => {
                      setSubmitted(false);
                      setFormData({ name: '', email: '', category: 'general', message: '' });
                    }}
                  >
                    Send Another Inquiry
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1.25rem' }}>
                  <div>
                    <label
                      htmlFor="contact-name"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                      }}
                    >
                      Your Full Name *
                    </label>
                    <input
                      id="contact-name"
                      type="text"
                      required
                      placeholder="e.g. Alex Hunter"
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-bg-surface)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-email"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                      }}
                    >
                      Email Address *
                    </label>
                    <input
                      id="contact-email"
                      type="email"
                      required
                      placeholder="alex@example.com"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-bg-surface)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                      }}
                    />
                  </div>

                  <div>
                    <label
                      htmlFor="contact-category"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                      }}
                    >
                      Inquiry Type
                    </label>
                    <select
                      id="contact-category"
                      value={formData.category}
                      onChange={(e) => setFormData({ ...formData, category: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-bg-surface)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                      }}
                    >
                      <option value="general">General Inquiries & Questions</option>
                      <option value="feedback">Feature Requests & Feedback</option>
                      <option value="partnership">Coaches & Trainer Partnerships</option>
                      <option value="billing">Subscriptions & Billing</option>
                      <option value="bug">Report a Bug</option>
                    </select>
                  </div>

                  <div>
                    <label
                      htmlFor="contact-message"
                      style={{
                        display: 'block',
                        fontSize: '0.875rem',
                        fontWeight: 600,
                        marginBottom: '0.5rem',
                      }}
                    >
                      How can we help? *
                    </label>
                    <textarea
                      id="contact-message"
                      rows={5}
                      required
                      placeholder="Tell us what you need help with or share your ideas..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      style={{
                        width: '100%',
                        padding: '0.75rem 1rem',
                        borderRadius: 'var(--radius-md)',
                        backgroundColor: 'var(--color-bg-surface)',
                        border: '1px solid var(--color-border)',
                        color: 'var(--color-text-primary)',
                        resize: 'vertical',
                      }}
                    />
                  </div>

                  <button
                    type="submit"
                    className="ff-btn ff-btn-primary"
                    disabled={isLoading}
                    style={{ padding: '0.875rem', marginTop: '0.5rem', width: '100%' }}
                  >
                    {isLoading ? 'Transmitting...' : 'Send Message'} <Send size={16} />
                  </button>
                </form>
              )}
            </div>

            {/* Direct Support Channels */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  display: 'flex',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-bg-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0,
                  }}
                >
                  <Mail size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Direct Email Support</h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      marginTop: '0.25rem',
                    }}
                  >
                    For account inquiries, bug reports, or general assistance:
                  </p>
                  <a
                    href="mailto:support@fitforge.local"
                    style={{
                      display: 'inline-block',
                      marginTop: '0.5rem',
                      fontWeight: 700,
                      color: 'var(--color-primary)',
                    }}
                  >
                    support@fitforge.local
                  </a>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  display: 'flex',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-bg-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-accent)',
                    flexShrink: 0,
                  }}
                >
                  <MessageSquare size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Athlete Community Discord</h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      marginTop: '0.25rem',
                    }}
                  >
                    Connect directly with fellow lifters, share routines, and talk directly with the
                    developers.
                  </p>
                  <a
                    href="https://discord.com"
                    target="_blank"
                    rel="noreferrer"
                    style={{
                      display: 'inline-block',
                      marginTop: '0.5rem',
                      fontWeight: 700,
                      color: 'var(--color-accent)',
                    }}
                  >
                    Join the Discord Server →
                  </a>
                </div>
              </div>

              <div
                style={{
                  backgroundColor: 'var(--color-bg-card)',
                  border: '1px solid var(--color-border)',
                  borderRadius: 'var(--radius-xl)',
                  padding: '2rem',
                  display: 'flex',
                  gap: '1.25rem',
                }}
              >
                <div
                  style={{
                    width: '3rem',
                    height: '3rem',
                    borderRadius: 'var(--radius-lg)',
                    backgroundColor: 'var(--color-bg-surface)',
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    color: 'var(--color-primary)',
                    flexShrink: 0,
                  }}
                >
                  <Clock size={22} />
                </div>
                <div>
                  <h3 style={{ fontSize: '1.15rem', fontWeight: 700 }}>Response Time Guarantee</h3>
                  <p
                    style={{
                      fontSize: '0.875rem',
                      color: 'var(--color-text-secondary)',
                      marginTop: '0.25rem',
                      lineHeight: 1.6,
                    }}
                  >
                    Our core team monitors inquiries 7 days a week. We aim to reply to all athlete
                    messages within <strong>24 business hours</strong>.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};
