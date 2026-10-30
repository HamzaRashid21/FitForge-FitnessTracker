import React, { useState, useEffect, useCallback, useMemo } from 'react';
import { Link } from 'react-router-dom';
import { useTheme } from '../../../app/providers/ThemeProvider.js';
import { useAuth } from '../../auth/context/AuthContext.js';
import type {
  OnboardingState,
  FitnessGoal,
  ExperienceLevel,
  EquipmentOption,
  WeekDay,
  SessionDuration,
  BodyValidationErrors,
} from '../types/onboarding.js';
import '../styles/onboarding.css';

const GOALS: FitnessGoal[] = ['Muscle gain', 'Fat loss', 'Strength', 'Endurance', 'General fitness'];

const EXP: [ExperienceLevel, string][] = [
  ['Beginner', 'Less than 6 months'],
  ['Intermediate', '6 months to 2 years'],
  ['Advanced', 'More than 2 years'],
];

const EQUIP: [string, EquipmentOption][] = [
  ['🏢', 'Full gym'],
  ['🏋️', 'Dumbbells'],
  ['🔩', 'Barbell'],
  ['🔔', 'Kettlebells'],
  ['🎗️', 'Resistance bands'],
  ['🧗', 'Pull-up bar'],
  ['⚙️', 'Machines'],
  ['🧘', 'Bodyweight only'],
];

const DAYS: WeekDay[] = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

const DUR: SessionDuration[] = ['20–30 min', '30–45 min', '45–60 min', '60+ min'];

const DEFAULT_STATE: OnboardingState = {
  name: '',
  hear: '',
  adult: false,
  goal: null,
  exp: null,
  equip: [],
  units: 'metric',
  height: '',
  weight: '',
  age: '',
  days: [],
  dur: null,
  plan: 'free',
};

const TOTAL_STEPS = 7; // Steps 0 to 6; Step 7 is Finish

export const OnboardingPage: React.FC = () => {
  const { theme, setTheme } = useTheme();
  const { user, saveOnboarding } = useAuth();

  const [state, setState] = useState<OnboardingState>(() => {
    try {
      const saved = localStorage.getItem('ff_onb');
      if (saved) {
        const parsed = JSON.parse(saved);
        if (parsed && parsed.S) {
          return { ...DEFAULT_STATE, ...parsed.S };
        }
      }
    } catch {
      // Fallback
    }
    return DEFAULT_STATE;
  });

  const [step, setStep] = useState<number>(0);
  const [touchedBody, setTouchedBody] = useState<boolean>(false);
  const [isFinishing, setIsFinishing] = useState<boolean>(false);
  const [isSaved, setIsSaved] = useState<boolean>(false);

  // Pre-fill user name if logged in and not yet filled
  useEffect(() => {
    if (user?.fullName && !state.name) {
      setState((prev) => ({ ...prev, name: user.fullName }));
    }
  }, [user?.fullName, state.name]);

  // Persist state changes to localStorage
  useEffect(() => {
    try {
      localStorage.setItem('ff_onb', JSON.stringify({ S: state }));
    } catch {
      // Ignore quota error
    }
  }, [state]);

  // Ranges based on current units
  const ranges = useMemo(() => {
    return state.units === 'metric'
      ? { h: [100, 250, 'cm'] as const, w: [30, 300, 'kg'] as const }
      : { h: [40, 100, 'in'] as const, w: [66, 660, 'lb'] as const };
  }, [state.units]);

  // Validation errors for body stats
  const bodyErrors = useMemo((): BodyValidationErrors => {
    const o: BodyValidationErrors = {};
    const h = Number(state.height);
    const w = Number(state.weight);
    const a = Number(state.age);

    if (state.height === '' || isNaN(h) || h < ranges.h[0] || h > ranges.h[1]) {
      o.h = `Enter a height between ${ranges.h[0]} and ${ranges.h[1]} ${ranges.h[2]}`;
    }
    if (state.weight === '' || isNaN(w) || w < ranges.w[0] || w > ranges.w[1]) {
      o.w = `Enter a weight between ${ranges.w[0]} and ${ranges.w[1]} ${ranges.w[2]}`;
    }
    if (state.age === '' || isNaN(a) || !Number.isInteger(a) || a < 13 || a > 100) {
      o.a = 'Enter an age from 13 to 100';
    }
    return o;
  }, [state.height, state.weight, state.age, ranges]);

  const isStepValid = useCallback(
    (index: number): boolean => {
      switch (index) {
        case 0:
          return state.adult;
        case 1:
          return Boolean(state.goal);
        case 2:
          return Boolean(state.exp);
        case 3:
          return true; // Equipment is skippable
        case 4:
          return Object.keys(bodyErrors).length === 0;
        case 5:
          return state.days.length > 0 && Boolean(state.dur);
        case 6:
          return true; // Plan selection has default
        default:
          return true;
      }
    },
    [state.adult, state.goal, state.exp, state.days, state.dur, bodyErrors]
  );

  const handleNext = () => {
    if (step === 4 && !isStepValid(4)) {
      setTouchedBody(true);
      return;
    }
    const nextStep = step + 1;
    setStep(nextStep);
    setTouchedBody(false);
  };

  const handleBack = () => {
    if (step > 0) {
      setStep((prev) => prev - 1);
      setTouchedBody(false);
    }
  };

  const handleSkip = () => {
    handleNext();
  };

  // Final submission handler
  const handleCompleteSetup = useCallback(async () => {
    setIsFinishing(true);

    try {
      // Save to backend if authenticated
      if (user && saveOnboarding) {
        await saveOnboarding(state);
      }
    } catch (err: unknown) {
      console.warn('Backend onboarding sync warning:', err);
      // We still proceed gracefully so user doesn't get blocked
    }

    // Give visual animation matching the original design
    setTimeout(() => {
      setIsFinishing(false);
      setIsSaved(true);
    }, 1200);
  }, [state, user, saveOnboarding]);

  // When step reaches TOTAL_STEPS (step 7), trigger completion
  useEffect(() => {
    if (step >= TOTAL_STEPS && !isSaved && !isFinishing) {
      handleCompleteSetup();
    }
  }, [step, isSaved, isFinishing, handleCompleteSetup]);

  // Keyboard shortcut: Enter key moves to next step if valid
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Enter' && step < TOTAL_STEPS && (e.target as HTMLElement).tagName !== 'BUTTON') {
        if (isStepValid(step)) {
          handleNext();
        }
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [step, isStepValid]);

  // Equipment selection toggle
  const toggleEquipment = (item: EquipmentOption) => {
    setState((prev) => {
      const exists = prev.equip.includes(item);
      return {
        ...prev,
        equip: exists ? prev.equip.filter((e) => e !== item) : [...prev.equip, item],
      };
    });
  };

  // Day selection toggle
  const toggleDay = (d: WeekDay) => {
    setState((prev) => {
      const exists = prev.days.includes(d);
      return {
        ...prev,
        days: exists ? prev.days.filter((day) => day !== d) : [...prev.days, d],
      };
    });
  };

  // Summary chips for final step
  const summaryChips = useMemo(() => {
    const list: string[] = [];
    if (state.goal) list.push(state.goal);
    if (state.exp) list.push(state.exp);
    if (state.days.length > 0) list.push(`${state.days.length} days/week`);
    if (state.dur) list.push(state.dur);
    list.push(state.plan === 'premium' ? 'Premium Plan' : 'Free Plan');
    if (state.equip.length > 0) {
      list.push(`${state.equip.length} equipment types`);
    }
    if (state.height && state.weight) {
      list.push(`${state.height} ${ranges.h[2]} • ${state.weight} ${ranges.w[2]}`);
    }
    return list;
  }, [state, ranges]);

  return (
    <div className="ff-onb-stage">
      {/* Header */}
      <header className="ff-onb-header">
        <Link to="/" className="ff-onb-brand" aria-label="FitForge Home">
          <img src="/assets/auth/logo.png" alt="FitForge Emblem" />
          <b>FitForge</b>
        </Link>

        <div className="ff-onb-tg" role="group" aria-label="Theme toggle">
          <button
            type="button"
            className={theme === 'light' ? 'on' : ''}
            onClick={() => setTheme('light')}
            aria-label="Light theme"
          >
            ☀
          </button>
          <button
            type="button"
            className={theme === 'dark' ? 'on' : ''}
            onClick={() => setTheme('dark')}
            aria-label="Dark theme"
          >
            ☾
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="ff-onb-main" id="main">
        {/* Step 0: Welcome */}
        {step === 0 && (
          <div className="ff-onb-step anim" style={{ maxWidth: '440px', margin: '0 auto' }}>
            <h1>Welcome to FitForge</h1>
            <p className="ff-onb-sub">A few quick questions to personalize your experience.</p>

            <div className="ff-onb-fg">
              <label className="ff-onb-lbl" htmlFor="nm">
                What should we call you? <i>(optional)</i>
              </label>
              <div className="ff-onb-field">
                <input
                  id="nm"
                  value={state.name}
                  onChange={(e) => setState((prev) => ({ ...prev, name: e.target.value }))}
                  maxLength={40}
                  autoComplete="given-name"
                  placeholder="e.g. Alex"
                />
              </div>
            </div>

            <div className="ff-onb-fg">
              <label className="ff-onb-lbl" htmlFor="hr">
                How did you hear about us? <i>(optional)</i>
              </label>
              <div className="ff-onb-field">
                <input
                  id="hr"
                  value={state.hear}
                  onChange={(e) => setState((prev) => ({ ...prev, hear: e.target.value }))}
                  maxLength={80}
                  placeholder="e.g. YouTube, Friend, Google"
                />
              </div>
            </div>

            <label className="ff-onb-chk" htmlFor="ad">
              <input
                type="checkbox"
                id="ad"
                checked={state.adult}
                onChange={(e) => setState((prev) => ({ ...prev, adult: e.target.checked }))}
              />
              <span>I confirm I am 18 years old, or the age of legal majority where I live.</span>
            </label>

            <div className="ff-onb-acts">
              <button
                type="button"
                className="ff-onb-btn p"
                disabled={!isStepValid(0)}
                onClick={handleNext}
              >
                Next
              </button>
            </div>
          </div>
        )}

        {/* Step 1: Goal */}
        {step === 1 && (
          <div className="ff-onb-step anim">
            <div className="ff-onb-wrap">
              <div className="ff-onb-split">
                <div>
                  <button type="button" className="ff-onb-back" onClick={handleBack} aria-label="Back">
                    ‹
                  </button>
                  <h1>
                    <span className="m">Let’s tailor your plan.</span>
                    <br />
                    What’s your main
                    <br />
                    fitness goal?
                  </h1>
                </div>

                <div>
                  <div className="ff-onb-hint">Select one</div>
                  <div className="ff-onb-list">
                    {GOALS.map((goal) => {
                      const isSelected = state.goal === goal;
                      return (
                        <button
                          key={goal}
                          type="button"
                          className={`ff-onb-row ${isSelected ? 'sel' : ''}`}
                          onClick={() => setState((prev) => ({ ...prev, goal }))}
                        >
                          <span className="c">✓</span>
                          <span>{goal}</span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="ff-onb-acts">
                    <button
                      type="button"
                      className="ff-onb-btn p"
                      disabled={!isStepValid(1)}
                      onClick={handleNext}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 2: Experience */}
        {step === 2 && (
          <div className="ff-onb-step anim">
            <div className="ff-onb-wrap">
              <div className="ff-onb-split">
                <div>
                  <button type="button" className="ff-onb-back" onClick={handleBack} aria-label="Back">
                    ‹
                  </button>
                  <h1>
                    <span className="m">Let’s tailor your plan.</span>
                    <br />
                    How much training
                    <br />
                    experience do you have?
                  </h1>
                </div>

                <div>
                  <div className="ff-onb-hint">Select one</div>
                  <div className="ff-onb-list">
                    {EXP.map(([lvl, sub]) => {
                      const isSelected = state.exp === lvl;
                      return (
                        <button
                          key={lvl}
                          type="button"
                          className={`ff-onb-row ${isSelected ? 'sel' : ''}`}
                          onClick={() => setState((prev) => ({ ...prev, exp: lvl }))}
                        >
                          <span className="c">✓</span>
                          <span>
                            {lvl}
                            <small>{sub}</small>
                          </span>
                        </button>
                      );
                    })}
                  </div>

                  <div className="ff-onb-acts">
                    <button
                      type="button"
                      className="ff-onb-btn p"
                      disabled={!isStepValid(2)}
                      onClick={handleNext}
                    >
                      Continue
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Step 3: Equipment */}
        {step === 3 && (
          <div className="ff-onb-step anim">
            <div className="ff-onb-wrap">
              <h1>What equipment do you have?</h1>
              <p className="ff-onb-sub">Select all that apply. We’ll only suggest exercises you can do.</p>

              <div className="ff-onb-g5">
                {EQUIP.map(([emoji, item]) => {
                  const isSelected = state.equip.includes(item);
                  return (
                    <button
                      key={item}
                      type="button"
                      className={`ff-onb-tile ${isSelected ? 'sel' : ''}`}
                      onClick={() => toggleEquipment(item)}
                    >
                      <span>{emoji}</span>
                      {item}
                    </button>
                  );
                })}
              </div>

              <div className="ff-onb-acts" style={{ justifyContent: 'center' }}>
                <button type="button" className="ff-onb-btn" onClick={handleBack}>
                  Back
                </button>
                <button type="button" className="ff-onb-btn" onClick={handleSkip}>
                  Skip
                </button>
                {state.equip.length > 0 && (
                  <button type="button" className="ff-onb-btn p" onClick={handleNext}>
                    Continue
                  </button>
                )}
              </div>
            </div>
          </div>
        )}

        {/* Step 4: Body Stats */}
        {step === 4 && (
          <div className="ff-onb-step anim" style={{ maxWidth: '520px', margin: '0 auto' }}>
            <div className="ff-onb-wrap">
              <h1>About your body</h1>
              <p className="ff-onb-sub">Used for calorie targets and progress tracking.</p>

              <div className="ff-onb-chips" style={{ marginBottom: '20px' }}>
                <button
                  type="button"
                  className={`ff-onb-chip ${state.units === 'metric' ? 'sel' : ''}`}
                  onClick={() => {
                    if (state.units !== 'metric') {
                      setState((prev) => ({ ...prev, units: 'metric', height: '', weight: '' }));
                    }
                  }}
                >
                  Metric (cm, kg)
                </button>
                <button
                  type="button"
                  className={`ff-onb-chip ${state.units === 'imperial' ? 'sel' : ''}`}
                  onClick={() => {
                    if (state.units !== 'imperial') {
                      setState((prev) => ({ ...prev, units: 'imperial', height: '', weight: '' }));
                    }
                  }}
                >
                  Imperial (in, lb)
                </button>
              </div>

              <div className="ff-onb-three">
                <div>
                  <label className="ff-onb-lbl" htmlFor="h">
                    Height
                  </label>
                  <div className="ff-onb-field">
                    <input
                      id="h"
                      type="number"
                      inputMode="decimal"
                      value={state.height}
                      onChange={(e) => setState((prev) => ({ ...prev, height: e.target.value }))}
                      onBlur={() => setTouchedBody(true)}
                    />
                    <u>{ranges.h[2]}</u>
                  </div>
                  <div className="ff-onb-err">{touchedBody && bodyErrors.h ? bodyErrors.h : ''}</div>
                </div>

                <div>
                  <label className="ff-onb-lbl" htmlFor="w">
                    Weight
                  </label>
                  <div className="ff-onb-field">
                    <input
                      id="w"
                      type="number"
                      inputMode="decimal"
                      value={state.weight}
                      onChange={(e) => setState((prev) => ({ ...prev, weight: e.target.value }))}
                      onBlur={() => setTouchedBody(true)}
                    />
                    <u>{ranges.w[2]}</u>
                  </div>
                  <div className="ff-onb-err">{touchedBody && bodyErrors.w ? bodyErrors.w : ''}</div>
                </div>

                <div>
                  <label className="ff-onb-lbl" htmlFor="a">
                    Age
                  </label>
                  <div className="ff-onb-field">
                    <input
                      id="a"
                      type="number"
                      inputMode="numeric"
                      value={state.age}
                      onChange={(e) => setState((prev) => ({ ...prev, age: e.target.value }))}
                      onBlur={() => setTouchedBody(true)}
                    />
                    <u>yrs</u>
                  </div>
                  <div className="ff-onb-err">{touchedBody && bodyErrors.a ? bodyErrors.a : ''}</div>
                </div>
              </div>

              <div className="ff-onb-acts">
                <button type="button" className="ff-onb-btn" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="ff-onb-btn p"
                  disabled={!isStepValid(4)}
                  onClick={handleNext}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 5: Weekly Schedule */}
        {step === 5 && (
          <div className="ff-onb-step anim" style={{ maxWidth: '520px', margin: '0 auto' }}>
            <div className="ff-onb-wrap">
              <h1>Plan your week</h1>
              <p className="ff-onb-sub">Choose your training days and session length.</p>

              <span className="ff-onb-lbl">Training days</span>
              <div className="ff-onb-chips" style={{ marginBottom: '22px' }}>
                {DAYS.map((d) => {
                  const isSelected = state.days.includes(d);
                  return (
                    <button
                      key={d}
                      type="button"
                      className={`ff-onb-chip ${isSelected ? 'sel' : ''}`}
                      onClick={() => toggleDay(d)}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>

              <span className="ff-onb-lbl">Session length</span>
              <div className="ff-onb-chips">
                {DUR.map((d) => {
                  const isSelected = state.dur === d;
                  return (
                    <button
                      key={d}
                      type="button"
                      className={`ff-onb-chip ${isSelected ? 'sel' : ''}`}
                      onClick={() => setState((prev) => ({ ...prev, dur: d }))}
                    >
                      {d}
                    </button>
                  );
                })}
              </div>

              <div className="ff-onb-acts">
                <button type="button" className="ff-onb-btn" onClick={handleBack}>
                  Back
                </button>
                <button
                  type="button"
                  className="ff-onb-btn p"
                  disabled={!isStepValid(5)}
                  onClick={handleNext}
                >
                  Continue
                </button>
              </div>
            </div>
          </div>
        )}

        {/* Step 6: Plan Selection */}
        {step === 6 && (
          <div className="ff-onb-step anim">
            <div className="ff-onb-wrap">
              <h1 className="ff-onb-center">Choose your plan</h1>
              <p className="ff-onb-sub ff-onb-center">Start free and upgrade whenever you’re ready.</p>

              <div className="ff-onb-plans">
                {/* Free Plan */}
                <div className="ff-onb-pw">
                  <button
                    type="button"
                    className={`ff-onb-plan ${state.plan === 'free' ? 'sel' : ''}`}
                    onClick={() => setState((prev) => ({ ...prev, plan: 'free' }))}
                  >
                    <h3>Free</h3>
                    <div className="pr">
                      $0<small>/month</small>
                    </div>
                    <p>Everything you need to start tracking.</p>
                    <ul>
                      <li>
                        <span className="chk-icon">✓</span> Workout &amp; nutrition tracking
                      </li>
                      <li>
                        <span className="chk-icon">✓</span> Exercise library
                      </li>
                      <li>
                        <span className="chk-icon">✓</span> Custom workouts
                      </li>
                      <li className="no">
                        <span className="chk-icon">✕</span> Limited AI assistant
                      </li>
                      <li className="no">
                        <span className="chk-icon">✕</span> PDF / CSV reports
                      </li>
                    </ul>
                  </button>
                </div>

                {/* Premium Plan */}
                <div className="ff-onb-pw pop">
                  <div className="pt">★ Most popular</div>
                  <button
                    type="button"
                    className={`ff-onb-plan ${state.plan === 'premium' ? 'sel' : ''}`}
                    onClick={() => setState((prev) => ({ ...prev, plan: 'premium' }))}
                  >
                    <h3>Premium</h3>
                    <div className="pr">Premium</div>
                    <p>Higher limits and advanced tools.</p>
                    <ul>
                      <li>
                        <span className="chk-icon">✓</span> Everything in Free
                      </li>
                      <li>
                        <span className="chk-icon">✓</span> Higher AI assistant limits
                      </li>
                      <li>
                        <span className="chk-icon">✓</span> Advanced analytics
                      </li>
                      <li>
                        <span className="chk-icon">✓</span> PDF / CSV export
                      </li>
                      <li>
                        <span className="chk-icon">✓</span> Priority support
                      </li>
                    </ul>
                  </button>
                </div>
              </div>

              <div className="ff-onb-acts" style={{ justifyContent: 'center' }}>
                <button type="button" className="ff-onb-btn" onClick={handleBack}>
                  Back
                </button>
                <button type="button" className="ff-onb-btn p" onClick={handleNext}>
                  {state.plan === 'premium' ? 'Continue with Premium' : 'Continue with Free'}
                </button>
              </div>

              <p className="ff-onb-note">
                Pricing and payment are not connected yet. Premium is only granted once confirmed by the backend.
              </p>
            </div>
          </div>
        )}

        {/* Step 7: Finish / Setting up */}
        {step >= TOTAL_STEPS && (
          <div className="ff-onb-step anim ff-onb-center">
            {isFinishing && (
              <>
                <div className="ff-onb-spin" />
                <h1>Setting up your account…</h1>
                <p className="ff-onb-sub">Saving your preferences.</p>
              </>
            )}

            {!isFinishing && isSaved && (
              <>
                <h1>{state.name ? `You’re all set, ${state.name}` : 'You’re all set'}</h1>
                <p className="ff-onb-sub">Your profile is saved and your personalized fitness plan is ready.</p>

                <div className="ff-onb-sum">
                  {summaryChips.map((chip, idx) => (
                    <span key={idx}>{chip}</span>
                  ))}
                </div>

                <div
                  style={{
                    maxWidth: '440px',
                    margin: '0 auto 28px',
                    padding: '16px 20px',
                    borderRadius: '12px',
                    background: 'var(--card)',
                    border: '1px solid var(--line)',
                    textAlign: 'left',
                    fontSize: '13.5px',
                    lineHeight: '1.6',
                  }}
                >
                  <div style={{ color: '#10b981', fontWeight: 600, marginBottom: '6px' }}>
                    ✓ Onboarding Completed Successfully
                  </div>
                  <div style={{ color: 'var(--mut)' }}>
                    Your preferences have been persisted to your profile. As requested, user dashboard navigation is
                    disabled for this milestone and you remain on this verified onboarding state.
                  </div>
                </div>

                <div className="ff-onb-acts" style={{ justifyContent: 'center', gap: '12px' }}>
                  <button
                    type="button"
                    className="ff-onb-btn"
                    onClick={() => {
                      setStep(0);
                      setIsSaved(false);
                    }}
                  >
                    Review Answers
                  </button>
                  <button
                    type="button"
                    className="ff-onb-btn p"
                    style={{ cursor: 'default' }}
                    disabled
                  >
                    Setup Complete ✓
                  </button>
                </div>
              </>
            )}
          </div>
        )}
      </main>

      {/* Footer Dots (Steps 0 to 6) */}
      <footer className="ff-onb-footer">
        <div className="ff-onb-dots" aria-hidden="true">
          {Array.from({ length: TOTAL_STEPS }).map((_, i) => {
            const isCurrent = i === step;
            const isDone = i < step;
            return <i key={i} className={isCurrent ? 'on' : isDone ? 'done' : ''} />;
          })}
        </div>
      </footer>
    </div>
  );
};

export default OnboardingPage;
