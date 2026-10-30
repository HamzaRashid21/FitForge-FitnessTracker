import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import { useTheme } from '../../../app/providers/ThemeProvider.js';
import { Dumbbell, Utensils, TrendingUp, Users, Sun, Moon } from 'lucide-react';
import '../styles/auth.css';

export const AuthLayout: React.FC = () => {
  const { theme, setTheme } = useTheme();

  return (
    <main className="ff-auth-stage">
      <div className="ff-auth-photo" role="img" aria-label="Athlete training in modern fitness facility" />
      <div className="ff-auth-shade" />

      <header className="ff-auth-header">
        <Link to="/" className="ff-auth-brand" aria-label="FitForge home">
          <img src="/assets/auth/logo.png" alt="FitForge Logo" />
          <span>
            <b>FitForge</b>
            <small>FITNESS TRACKER</small>
          </span>
        </Link>

        <div className="ff-auth-toggle" role="group" aria-label="Theme toggle">
          <button
            type="button"
            id="tLight"
            aria-pressed={theme === 'light'}
            aria-label="Switch to light theme"
            onClick={() => setTheme('light')}
          >
            <Sun size={18} />
          </button>
          <button
            type="button"
            id="tDark"
            aria-pressed={theme === 'dark'}
            aria-label="Switch to dark theme"
            onClick={() => setTheme('dark')}
          >
            <Moon size={18} />
          </button>
        </div>
      </header>

      <section className="ff-auth-hero">
        <p className="ff-auth-tag">TRACK &nbsp;&bull;&nbsp; IMPROVE &nbsp;&bull;&nbsp; ACHIEVE</p>
        <h1>
          <span>Your Fitness</span>
          <span>
            <em>Journey</em>
          </span>
          <span>Starts Here</span>
        </h1>
        <p className="ff-auth-lead">
          Build better habits, track your progress, reach your goals. FitForge gives you everything you need to become
          your strongest self.
        </p>

        <ul className="ff-auth-feats">
          <li>
            <span className="ff-auth-ring">
              <Dumbbell size={18} />
            </span>
            <div>
              <b>Track Workouts</b>
              <span>Log &amp; monitor your training sessions</span>
            </div>
          </li>
          <li>
            <span className="ff-auth-ring">
              <Utensils size={18} />
            </span>
            <div>
              <b>Nutrition</b>
              <span>Track meals, calories &amp; macros</span>
            </div>
          </li>
          <li>
            <span className="ff-auth-ring">
              <TrendingUp size={18} />
            </span>
            <div>
              <b>See Progress</b>
              <span>Measure results &amp; stay motivated</span>
            </div>
          </li>
          <li>
            <span className="ff-auth-ring">
              <Users size={18} />
            </span>
            <div>
              <b>Join Community</b>
              <span>Connect, compete &amp; grow together</span>
            </div>
          </li>
        </ul>

        <div className="ff-auth-foot">Better habits. Stronger you.</div>
      </section>

      <section className="ff-auth-panel">
        <Outlet />
      </section>
    </main>
  );
};

export default AuthLayout;
