import React, { useState, useEffect } from 'react';
import './Hero.css';

const stats = [
  { value: '150+', label: 'DSA Problems' },
  { value: '12+', label: 'Companies Covered' },
  { value: '60+', label: 'HR Questions' },
  { value: '100%', label: 'Free Forever' },
];

const features = [
  {
    id: 'dsa',
    icon: '🧩',
    title: 'DSA Practice',
    desc: 'Arrays to DP — topic-wise questions with difficulty levels and pattern hints.',
    color: '#3B82F6',
  },
  {
    id: 'companies',
    icon: '🏢',
    title: 'Company Wise',
    desc: 'TCS, Infosys, Wipro, Accenture and more — know exactly what each company asks.',
    color: '#10B981',
  },
  {
    id: 'hr',
    icon: '🎤',
    title: 'HR Prep',
    desc: 'The questions that trip most candidates. Model answers you can make your own.',
    color: '#8B5CF6',
  },
  {
    id: 'resume',
    icon: '📄',
    title: 'Resume Tips',
    desc: 'ATS-friendly structure, what to include as a fresher, and common mistakes to avoid.',
    color: '#F59E0B',
  },
];

export default function Hero({ setActivePage }) {
  const [meter, setMeter] = useState(0);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(true);
    const timer = setTimeout(() => {
      let val = 0;
      const interval = setInterval(() => {
        val += 1;
        setMeter(val);
        if (val >= 72) clearInterval(interval);
      }, 18);
      return () => clearInterval(interval);
    }, 600);
    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="hero">
      {/* Background grid */}
      <div className="hero-grid" aria-hidden="true" />

      <div className={`hero-content ${visible ? 'visible' : ''}`}>
        <div className="hero-badge">
          <span className="badge-dot" />
          Built by Pawan · CSE 2025–2029
        </div>

        <h1 className="hero-title">
          Your shortcut to
          <br />
          <span className="hero-accent">cracking placements.</span>
        </h1>

        <p className="hero-sub">
          DSA problems, company-specific prep, HR tips, and resume advice —
          everything a CSE student needs, organized and free.
        </p>

        {/* Readiness Meter — signature element */}
        <div className="meter-wrapper">
          <div className="meter-header">
            <span className="meter-label">Your Placement Readiness</span>
            <span className="meter-value">{meter}%</span>
          </div>
          <div className="meter-track">
            <div className="meter-fill" style={{ width: `${meter}%` }} />
            <div className="meter-glow" style={{ left: `${meter}%` }} />
          </div>
          <p className="meter-tip">Complete all sections to reach 100% 🚀</p>
        </div>

        <div className="hero-cta">
          <button className="btn-primary" onClick={() => setActivePage('dsa')}>
            Start with DSA
          </button>
          <button className="btn-secondary" onClick={() => setActivePage('companies')}>
            Company Wise Prep
          </button>
        </div>
      </div>

      {/* Stats bar */}
      <div className={`stats-bar ${visible ? 'visible' : ''}`}>
        {stats.map((s, i) => (
          <div className="stat-item" key={i}>
            <span className="stat-value">{s.value}</span>
            <span className="stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      {/* Feature cards */}
      <div className="features-grid">
        {features.map((f, i) => (
          <button
            key={f.id}
            className="feature-card"
            style={{ '--accent': f.color, animationDelay: `${i * 0.1}s` }}
            onClick={() => setActivePage(f.id)}
          >
            <span className="feature-icon">{f.icon}</span>
            <h3 className="feature-title">{f.title}</h3>
            <p className="feature-desc">{f.desc}</p>
            <span className="feature-arrow">→</span>
          </button>
        ))}
      </div>
    </div>
  );
}
