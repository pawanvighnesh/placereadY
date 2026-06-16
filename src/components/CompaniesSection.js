import React from 'react';
import './SectionPage.css';

const companies = [
  {
    name: 'TCS',
    icon: '🔵',
    type: 'Mass Recruiter',
    color: '#3B82F6',
    rounds: ['TCS NQT', 'Technical Round', 'Managerial Round', 'HR Round'],
    tips: [
      'Focus on C, Java basics — NQT tests verbal, quant, and coding (1–2 problems)',
      'Pattern: String manipulation, sorting, basic logic — no advanced DSA',
      'TCS Digital (higher package) has harder coding — prep medium-level DSA',
      'HR round is mostly about relocation, notice period, and attitude',
      'Practice on TCS iON platform — closest to the real test experience',
    ],
  },
  {
    name: 'Infosys',
    icon: '🟢',
    type: 'Mass Recruiter',
    color: '#10B981',
    rounds: ['InfyTQ Certification', 'Online Test', 'HR Interview'],
    tips: [
      'Get InfyTQ certified before campus interviews — gives direct shortlist',
      'Online test: 10 aptitude + 5 pseudocode + 2 coding questions',
      'Coding focuses on basic sorting, strings, math logic — easy to medium',
      'HR is conversational — prepare your introduction and strength/weakness answers',
      'SP (Specialist Programmer) track: harder test, ₹9.5L package — needs DSA prep',
    ],
  },
  {
    name: 'Wipro',
    icon: '🟡',
    type: 'Mass Recruiter',
    color: '#F59E0B',
    rounds: ['Online Test (NLTH)', 'Technical Interview', 'HR Interview'],
    tips: [
      'NLTH has 3 sections: aptitude, written communication, coding (2 questions)',
      'Coding difficulty: easy to medium — focus on arrays, strings, basic math',
      'Technical round asks OOP concepts, DBMS basics, your project details',
      'Turbo category (higher pay): needs stronger coding, OS and networks basics',
      'Practice your spoken intro — technical interview starts with "tell me about yourself"',
    ],
  },
  {
    name: 'Cognizant',
    icon: '🔷',
    type: 'Mass Recruiter',
    color: '#06B6D4',
    rounds: ['GenC / GenC Next Test', 'Technical Interview', 'HR Round'],
    tips: [
      'GenC (regular): aptitude + verbal + coding (easy level) — most students clear',
      'GenC Next (₹5L+): harder coding, expects solid problem-solving skills',
      'Ace (₹7L+): hardest tier — needs competitive-level DSA preparation',
      'Technical interview focuses on your projects, OOP, SQL basics',
      'HR is behavioral — use the STAR method for situation-based questions',
    ],
  },
  {
    name: 'Accenture',
    icon: '🟣',
    type: 'Mass Recruiter',
    color: '#8B5CF6',
    rounds: ['Communication Test', 'Cognitive Aptitude', 'Technical + HR (combined)'],
    tips: [
      'Communication skills matter as much as coding — practice speaking clearly',
      'Cognitive test: pattern recognition, logical reasoning, basic quant',
      'Coding test has 2 easy problems — basic arrays and string questions',
      'Final interview is a mix of technical (SQL, OOP) and HR questions together',
      'Good GPA (above 7.0) helps for shortlisting — verify your college cutoff',
    ],
  },
  {
    name: 'HCL',
    icon: '🔴',
    type: 'Mass Recruiter',
    color: '#EF4444',
    rounds: ['Online Test', 'Group Discussion', 'Technical + HR Interview'],
    tips: [
      'HCLTech: aptitude test + coding (2 questions, beginner level)',
      'Group discussion is uncommon but can appear — stay confident, concise',
      'Technical interview: C/Java basics, data structures theory, OS concepts',
      'TechBee program (after 12th): different track, not for final-year students',
      'Average package ₹3.5–4.5L — negotiate if you have competing offers',
    ],
  },
  {
    name: 'Zoho',
    icon: '🟠',
    type: 'Product Company',
    color: '#F97316',
    rounds: ['Written Test', 'Technical Rounds (3–5)', 'HR Round'],
    tips: [
      'Hardest mass recruiter to crack — needs genuine problem-solving skills',
      'Written test: programming logic, attention to detail, pattern problems',
      'Multiple technical rounds — each gets progressively harder',
      'Focus on clean code, explaining your thought process out loud',
      'No relocation required for many Chennai roles — great for Tamil Nadu students',
    ],
  },
  {
    name: 'Capgemini',
    icon: '🔵',
    type: 'Mass Recruiter',
    color: '#0EA5E9',
    rounds: ['Pseudo Code Test', 'Technical Interview', 'HR Round'],
    tips: [
      'Pseudo code test is unique — tests logic without actual coding syntax',
      'Aptitude section: time and work, profit and loss, number series',
      'Technical interview covers OOP, DBMS, networking basics — prepare definitions',
      'They value communication well — dress formal, speak confidently',
      'Package varies by role (₹4–7L) — ask about band/role during interview',
    ],
  },
];

export default function CompaniesSection() {
  return (
    <div className="section-page">
      <div className="section-header">
        <span className="section-eyebrow">🏢 Company Wise</span>
        <h1 className="section-title">Know What They Actually Ask</h1>
        <p className="section-sub">
          Each company has its own pattern, package tiers, and what they value.
          Don't prepare blindly — prepare for the right things.
        </p>
      </div>

      <div className="company-grid">
        {companies.map((company) => (
          <div
            key={company.name}
            className="company-card"
            style={{ '--accent': company.color }}
          >
            <div className="company-top">
              <div className="company-logo">{company.icon}</div>
              <div>
                <div className="company-name">{company.name}</div>
                <div className="company-type" style={{ color: company.color }}>
                  {company.type}
                </div>
              </div>
            </div>

            <div className="company-rounds">
              {company.rounds.map((r, i) => (
                <span key={i} className="round-tag">{r}</span>
              ))}
            </div>

            <ul className="company-tips">
              {company.tips.map((tip, i) => (
                <li key={i}>{tip}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
