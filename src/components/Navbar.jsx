import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeSection, setActiveSection] = useState('home');
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const navLinks = [
    { id: 'about', label: 'About' },
    { id: 'skills', label: 'Skills' },
    { id: 'resume', label: 'Resume' },
    { id: 'projects', label: 'Projects' },
    { id: 'education', label: 'Education' },
    { id: 'contact', label: 'Contact' }
  ];

  useEffect(() => {
    const handleScroll = () => {
      // 1. Navbar transparent vs solid-blur state
      if (window.scrollY > 50) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }

      // 2. Active section Scrollspy logic
      const sections = ['home', ...navLinks.map(link => link.id)];
      let current = 'home';

      for (const sectionId of sections) {
        const element = document.getElementById(sectionId);
        if (element) {
          const rect = element.getBoundingClientRect();
          // If the top of the section is near the middle/top of the screen
          if (rect.top <= 120 && rect.bottom >= 120) {
            current = sectionId;
            break;
          }
        }
      }
      setActiveSection(current);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    // Initial check
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleLinkClick = (e, targetId) => {
    e.preventDefault();
    setIsMobileOpen(false);

    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80; // Account for fixed navbar height
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-transparent fixed-top border-bottom"
         style={{
           background: isScrolled ? 'rgba(15, 23, 42, 0.95)' : 'rgba(15, 23, 42, 0.8)',
           backdropFilter: 'blur(20px)',
           transition: 'all 0.3s ease'
         }}>
      <div className="container">
        <a className="navbar-brand logo-font" href="#home" onClick={(e) => handleLinkClick(e, 'home')}>
          Yatharth Donarkar
        </a>
        
        {/* Responsive Hamburger Toggle */}
        <button 
          className="navbar-toggler border-0" 
          type="button" 
          onClick={() => setIsMobileOpen(!isMobileOpen)}
          aria-controls="navbarNav" 
          aria-expanded={isMobileOpen} 
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navigation Items */}
        <div className={`collapse navbar-collapse ${isMobileOpen ? 'show' : ''}`} id="navbarNav">
          <ul className="navbar-nav ms-auto align-items-lg-center">
            {navLinks.map((link) => (
              <li key={link.id} className="nav-item">
                <a 
                  className={`nav-link ${activeSection === link.id ? 'active' : ''}`} 
                  href={`#${link.id}`}
                  onClick={(e) => handleLinkClick(e, link.id)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li className="nav-item ms-lg-2 mt-2 mt-lg-0">
              <a 
                className="btn btn-primary" 
                href="#contact"
                onClick={(e) => handleLinkClick(e, 'contact')}
              >
                Hire Me
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
