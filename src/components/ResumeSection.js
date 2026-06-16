import React from 'react';
import './SectionPage.css';

const resumeTips = [
  {
    icon: '📐',
    title: 'Structure & Format',
    tips: [
      'Keep it to 1 page — you\'re a fresher, not a 10-year veteran',
      'Use ATS-friendly format: standard fonts (Calibri, Latex), no tables or columns',
      'Section order: Contact → Education → Skills → Projects → Certifications → Activities',
      'Use PDF format — Word docs can corrupt on different systems',
      'Margins: 0.5–0.75 inches; font size: 10–12pt for body text',
    ],
  },
  {
    icon: '🎓',
    title: 'Education Section',
    tips: [
      'Include: Degree, Branch, College Name, Expected Graduation Year, CGPA',
      'List 10th and 12th if your percentage is 75%+ — else keep only college',
      'Never convert CGPA to percentage unless the job form asks for it',
      'Add relevant coursework only if directly related to the role',
    ],
  },
  {
    icon: '🛠️',
    title: 'Skills Section',
    tips: [
      'List: Programming Languages, Frameworks, Databases, Tools — in that order',
      'Don\'t list MS Word or Google Search as skills — it looks weak',
      'Only list skills you can actually answer questions about in an interview',
      'Proficiency levels (beginner/intermediate) are optional but show honesty',
      'Include soft skills only if backed by something: "Leadership (NCC Cadet, Section Commander)"',
    ],
  },
  {
    icon: '🚀',
    title: 'Projects Section',
    tips: [
      'Include 2–3 projects — at least one with a tech stack you know well',
      'Format: Project Name | Tech Stack | Date',
      'Write 2–3 bullet points per project using action verbs: "Built", "Designed", "Integrated"',
      'Add a GitHub link or live link where possible',
      'If it\'s a team project, mention your specific contribution',
    ],
  },
  {
    icon: '📜',
    title: 'Certifications',
    tips: [
      'Include only relevant, verifiable certifications — no random Udemy completions',
      'Good ones to list: Cisco Python, Google certifications, Coursera specializations',
      'Format: Certification Name | Issuer | Month & Year',
      'Virtual experience programs (Forage, etc.) are valid — mention them under activities',
    ],
  },
  {
    icon: '⚡',
    title: 'Action Verbs to Use',
    tips: [
      'Built, Developed, Designed, Implemented, Optimized, Reduced, Increased',
      'Collaborated, Led, Managed, Coordinated, Mentored, Presented',
      'Researched, Analyzed, Evaluated, Documented, Tested, Debugged',
      'Never use passive voice: "was responsible for" → "managed" or "led"',
    ],
  },
];

export default function ResumeSection() {
  return (
    <div className="section-page">
      <div className="section-header">
        <span className="section-eyebrow">📄 Resume Tips</span>
        <h1 className="section-title">Build a Resume That Gets Shortlisted</h1>
        <p className="section-sub">
          Recruiters spend 6–10 seconds on a resume. Here's how to make those seconds count
          as a fresher — ATS-friendly, honest, and impressive.
        </p>
      </div>

      <div className="resume-tips-grid">
        {resumeTips.map((tip, i) => (
          <div className="resume-tip-card" key={i}>
            <div className="rtc-icon">{tip.icon}</div>
            <h3 className="rtc-title">{tip.title}</h3>
            <ul className="rtc-list">
              {tip.tips.map((t, j) => (
                <li key={j}>{t}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div style={{ marginTop: '2rem' }}>
        <h2 style={{ fontFamily: 'Outfit, sans-serif', fontSize: '1.4rem', fontWeight: '700', color: 'var(--white)', marginBottom: '1rem', letterSpacing: '-0.5px' }}>
          Quick Dos & Don'ts
        </h2>
        <div className="resume-dos-donts">
          <div className="dos-card">
            <div className="dos-title">✓ Do These</div>
            <ul className="dos-list">
              <li>Tailor your resume for each company you apply to</li>
              <li>Quantify impact where possible: "reduced load time by 30%"</li>
              <li>Proofread twice — spelling mistakes are instant rejections</li>
              <li>Include your GitHub, LinkedIn, and a clean email ID</li>
              <li>Keep consistent formatting throughout (dates, bullets, fonts)</li>
              <li>Get your resume reviewed by a senior or professor</li>
            </ul>
          </div>
          <div className="donts-card">
            <div className="donts-title">✗ Avoid These</div>
            <ul className="donts-list">
              <li>Don't add a photo or date of birth — not expected in tech resumes</li>
              <li>Don't use fancy templates with colored columns — ATS can't read them</li>
              <li>Don't lie about skills or certifications — it ends interviews fast</li>
              <li>Don't add an "Objective" paragraph — it wastes valuable space</li>
              <li>Don't list every subject you studied as a skill</li>
              <li>Don't exceed 1 page as a fresher — ever</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
