import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-inner">
        <div className="footer-brand">
          <span className="footer-logo">
            <span className="logo-bracket">{'<'}</span>
            PlaceReady
            <span className="logo-bracket">{'/>'}</span>
          </span>
          <p className="footer-desc">
            Built by <strong>Pawan</strong> · CSE Student, Chennai Institute of Technology
          </p>
        </div>
        <div className="footer-right">
          <p className="footer-note">Free for all CSE/IT students · Share it with your batchmates 🚀</p>
          <p className="footer-sub">Made with React · Hosted on GitHub Pages</p>
        </div>
      </div>
    </footer>
  );
}
