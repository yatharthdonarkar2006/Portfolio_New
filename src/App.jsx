import React, { useState, useCallback } from 'react';
import './App.css';

// Components
import Navbar from './components/Navbar';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './components/Hero';
import About from './components/About';
import ResumeSection from './components/ResumeSection';
import Skills from './components/Skills';
import Projects from './components/Projects';
import Education from './components/Education';
import Contact from './components/Contact';
import Footer from './components/Footer';
import ScrollToTop from './components/ScrollToTop';

function App() {
  const [toasts, setToasts] = useState([]);

  // Performant useCallback to trigger a toast from any sub-component
  const triggerToast = useCallback((message, type = 'info') => {
    const id = Date.now();
    const newToast = { id, message, type };

    setToasts((prev) => [...prev, newToast]);

    // Automatically dismiss toast after 4 seconds
    setTimeout(() => {
      setToasts((prev) => prev.filter((t) => t.id !== id));
    }, 4000);
  }, []);

  return (
    <>
      {/* Dynamic Background Canvas Particles */}
      <ParticlesBackground />

      {/* Navigation Header */}
      <Navbar />

      {/* Page Sections */}
      <main id="main">
        {/* Intro Hero Section */}
        <Hero />

        {/* Detailed About Section */}
        <About />

        {/* Premium Resume/CV Download Section */}
        <ResumeSection triggerToast={triggerToast} />

        {/* Interactive Skills Categories */}
        <Skills />

        {/* Grid of Projects with State Tabs Filters */}
        <Projects />

        {/* Education Timeline */}
        <Education />

        {/* Message Contact Form with Float Label Effects */}
        <Contact triggerToast={triggerToast} />
      </main>

      {/* Footer copyright */}
      <Footer />

      {/* Floating Action Button */}
      <ScrollToTop />

      {/* React Global Toast Notifications Viewport */}
      <div className="react-toast-container">
        {toasts.map((toast) => (
          <div 
            key={toast.id} 
            className={`react-toast react-toast-${toast.type}`}
          >
            <i 
              className={`fas ${
                toast.type === 'success' 
                  ? 'fa-check-circle' 
                  : toast.type === 'error' 
                  ? 'fa-exclamation-circle' 
                  : 'fa-info-circle'
              }`} 
            />
            <span className="toast-msg">{toast.message}</span>
          </div>
        ))}
      </div>
    </>
  );
}

export default App;
