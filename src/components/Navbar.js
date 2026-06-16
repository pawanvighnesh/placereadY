import React, { useState, useEffect } from 'react';
import './Navbar.css';

const navLinks = [
  { id: 'home', label: 'Home' },
  { id: 'dsa', label: 'DSA' },
  { id: 'companies', label: 'Companies' },
  { id: 'hr', label: 'HR Prep' },
  { id: 'resume', label: 'Resume' },
];

export default function Navbar({ activePage, setActivePage }) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (id) => {
    setActivePage(id);
    setMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="nav-container">
        <button className="nav-logo" onClick={() => handleNav('home')}>
          <span className="logo-bracket">{'<'}</span>
          PlaceReady
          <span className="logo-bracket">{'/>'}</span>
        </button>

        <div className={`nav-links ${menuOpen ? 'open' : ''}`}>
          {navLinks.map(link => (
            <button
              key={link.id}
              className={`nav-link ${activePage === link.id ? 'active' : ''}`}
              onClick={() => handleNav(link.id)}
            >
              {link.label}
            </button>
          ))}
        </div>

        <button
          className="hamburger"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="Toggle menu"
        >
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
          <span className={menuOpen ? 'open' : ''}></span>
        </button>
      </div>
    </nav>
  );
}
