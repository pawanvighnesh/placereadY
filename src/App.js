import React, { useState } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import DSASection from './components/DSASection';
import CompaniesSection from './components/CompaniesSection';
import HRSection from './components/HRSection';
import ResumeSection from './components/ResumeSection';
import Footer from './components/Footer';
import './App.css';

function App() {
  const [activePage, setActivePage] = useState('home');

  const renderPage = () => {
    switch (activePage) {
      case 'dsa': return <DSASection />;
      case 'companies': return <CompaniesSection />;
      case 'hr': return <HRSection />;
      case 'resume': return <ResumeSection />;
      default: return <Hero setActivePage={setActivePage} />;
    }
  };

  return (
    <div className="app">
      <Navbar activePage={activePage} setActivePage={setActivePage} />
      <main className="main-content">
        {renderPage()}
      </main>
      <Footer />
    </div>
  );
}

export default App;
