import React, { useState, useEffect } from 'react';

const ScrollToTop = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 400) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener('scroll', toggleVisibility, { passive: true });
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <button 
      className="scroll-to-top"
      onClick={scrollToTop}
      aria-label="Scroll to top"
      style={{
        position: 'fixed',
        bottom: '2rem',
        right: '2rem',
        width: '50px',
        height: '50px',
        background: 'linear-gradient(135deg, var(--primary), #0099cc)',
        border: 'none',
        borderRadius: '50%',
        color: '#0a0e1a',
        fontSize: '1.25rem',
        cursor: 'pointer',
        boxShadow: '0 4px 20px rgba(0, 212, 255, 0.3)',
        transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
        opacity: isVisible ? '1' : '0',
        visibility: isVisible ? 'visible' : 'hidden',
        transform: isVisible ? 'translateY(0)' : 'translateY(20px)',
        zIndex: 1000,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.transform = 'translateY(-3px) scale(1.08)';
        e.currentTarget.style.boxShadow = '0 6px 25px rgba(0, 212, 255, 0.6)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = isVisible ? 'translateY(0) scale(1)' : 'translateY(20px) scale(1)';
        e.currentTarget.style.boxShadow = '0 4px 20px rgba(0, 212, 255, 0.3)';
      }}
    >
      <i className="fas fa-arrow-up"></i>
    </button>
  );
};

export default ScrollToTop;
