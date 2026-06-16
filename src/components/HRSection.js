import React from 'react';
import './SectionPage.css';

const hrQuestions = [
  {
    icon: '🙋',
    question: 'Tell me about yourself.',
    color: '#3B82F6',
    answer: `Start with your name, degree, and college. Then mention 1–2 relevant skills or projects. End with why you're excited about this role. Keep it to 60–90 seconds.\n\nExample: "I'm Pawan, a final-year CSE student at Chennai Institute of Technology. I've worked on projects involving web development and database management, and I recently earned a Python certification from Cisco. I'm excited about this opportunity because I want to work on real-world software challenges and grow in a team environment."`,
  },
  {
    icon: '💪',
    question: 'What are your strengths?',
    color: '#10B981',
    answer: `Pick 2 strengths relevant to IT. Back each one with a one-line example.\n\nGood answer: "I'm good at breaking down complex problems — I did this during my DBMS project where I optimized queries that were taking too long. I'm also a quick learner; I picked up React in under two weeks for a personal project."`,
  },
  {
    icon: '🔍',
    question: 'What is your weakness?',
    color: '#F59E0B',
    answer: `Pick a real weakness, but show what you're actively doing about it. Never say "I'm a perfectionist" — interviewers see through it.\n\nGood answer: "I used to struggle with public speaking, which made me nervous during presentations. I've been working on it by presenting at my college tech fests and volunteering to lead group discussions. It's improved significantly."`,
  },
  {
    icon: '🎯',
    question: 'Why do you want to join this company?',
    color: '#8B5CF6',
    answer: `Research the company before the interview — don't give a generic answer. Mention something specific: a product they made, their training program, a value they stand for.\n\nExample for TCS: "I admire TCS's scale and the variety of domains they work in. Their Ignite training program is well-known for building strong technical foundations in freshers, and I want to be part of an organization where I can work on diverse projects from day one."`,
  },
  {
    icon: '🚀',
    question: 'Where do you see yourself in 5 years?',
    color: '#06B6D4',
    answer: `Show ambition but stay realistic. Tie it to the company, not around leaving it.\n\nGood answer: "In five years, I see myself as a senior developer who has contributed to meaningful projects and developed strong technical depth. I hope to take on leadership responsibilities — mentoring juniors or leading small modules — while continuing to grow within the company."`,
  },
  {
    icon: '🤝',
    question: 'Why should we hire you?',
    color: '#F97316',
    answer: `Summarize your value in 3 sentences: skills + attitude + commitment.\n\nExample: "I bring solid fundamentals in programming and databases, hands-on project experience, and a genuine eagerness to learn. I'm someone who takes ownership of my work and doesn't stop at good enough. I'm confident I can contribute from early on and grow with the team."`,
  },
  {
    icon: '😤',
    question: 'Describe a challenge you faced and how you handled it.',
    color: '#EF4444',
    answer: `Use the STAR method: Situation → Task → Action → Result.\n\nExample: "During my final-year project, our team hit a roadblock when our API integration kept failing two days before the deadline. I took the initiative to debug the issue overnight, identified a mismatch in data formatting, and fixed it. We submitted on time and got a good review from our professor."`,
  },
  {
    icon: '🔄',
    question: 'Are you comfortable with relocation or rotational shifts?',
    color: '#A3E635',
    answer: `Be honest, but frame it positively. If you are open: "Yes, I'm open to relocation — I see it as a chance to experience new environments and contribute to different projects across locations."\n\nIf you have a constraint: "I'm open to it, though I'd prefer Chennai for the first year as I settle in. I'm happy to discuss this based on what the role needs."`,
  },
  {
    icon: '❓',
    question: 'Do you have any questions for us?',
    color: '#60A5FA',
    answer: `Always ask at least one question — it shows genuine interest. Don't ask about salary here.\n\nGood questions: "What does the onboarding / training process look like for freshers?" or "What kind of projects do new joiners typically start with?" or "What qualities do the most successful people on your team share?"`,
  },
];

export default function HRSection() {
  return (
    <div className="section-page">
      <div className="section-header">
        <span className="section-eyebrow">🎤 HR Prep</span>
        <h1 className="section-title">Don't Freeze in the HR Round</h1>
        <p className="section-sub">
          Most students lose here — not because they're weak, but because they weren't prepared.
          These questions always come up. Read the model answers, then make them your own.
        </p>
      </div>

      <div className="hr-grid">
        {hrQuestions.map((item, i) => (
          <div
            className="hr-card"
            key={i}
            style={{ '--accent': item.color }}
          >
            <div className="hr-question">
              <span className="hr-icon">{item.icon}</span>
              {item.question}
            </div>
            <div className="hr-answer">
              {item.answer.split('\n\n').map((para, j) => (
                <p key={j} style={{ marginBottom: j < item.answer.split('\n\n').length - 1 ? '0.75rem' : 0 }}>
                  {para}
                </p>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
