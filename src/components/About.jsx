import React, { useRef, useEffect } from 'react';

const About = () => {
  const card1Ref = useRef(null);
  const card2Ref = useRef(null);

  const handleScrollTo = (e, targetId) => {
    e.preventDefault();
    const element = document.getElementById(targetId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: 'smooth'
      });
    }
  };

  useEffect(() => {
    const cards = [card1Ref.current, card2Ref.current];
    
    cards.forEach(card => {
      if (!card) return;

      const handleMouseMove = (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        const centerX = rect.width / 2;
        const centerY = rect.height / 2;
        
        const rotateX = (y - centerY) / 12;
        const rotateY = (centerX - x) / 12;
        
        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.01, 1.01, 1.01)`;
      };

      const handleMouseLeave = () => {
        card.style.transform = 'perspective(1000px) rotateX(0deg) rotateY(0deg) scale3d(1, 1, 1)';
      };

      card.addEventListener('mousemove', handleMouseMove);
      card.addEventListener('mouseleave', handleMouseLeave);

      return () => {
        card.removeEventListener('mousemove', handleMouseMove);
        card.removeEventListener('mouseleave', handleMouseLeave);
      };
    });
  }, []);

  return (
    <section id="about" class="about">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">About Me</h2>
          <p class="section-subtitle">Confident, innovative, and placement-ready developer</p>
        </div>
        
        <div class="row row-cols-1 row-cols-md-2 g-4 about-grid">
          <div class="col">
            <div class="about-card" ref={card1Ref} style={{ transition: 'transform 0.1s ease' }}>
              <div class="card-icon">
                <i class="fas fa-laptop-code"></i>
              </div>
              <h3>What I Do</h3>
              <p>I design and develop fast, responsive web applications with clean UI and a problem-solving mindset. My focus is on building secure, scalable systems that provide excellent user experiences.</p>
              <ul class="feature-list">
                <li>Full-stack MERN applications with authentication and role-based access</li>
                <li>Responsive, accessible UI with modern CSS and JavaScript</li>
                <li>RESTful APIs and database design with security best practices</li>
                <li>Git workflows and collaborative development</li>
              </ul>
            </div>
          </div>
          
          <div class="col">
            <div class="about-card" ref={card2Ref} style={{ transition: 'transform 0.1s ease', height: '100%' }}>
              <div class="card-icon">
                <i class="fas fa-rocket"></i>
              </div>
              <h3>What I'm Looking For</h3>
              <p>Seeking internship opportunities in Frontend/Full-Stack development, hackathon collaborations, and innovative engineering challenges where I can contribute meaningfully and learn rapidly.</p>
              
              <div class="d-flex gap-3 flex-wrap mt-4">
                <a href="#contact" class="btn btn-primary" onClick={(e) => handleScrollTo(e, 'contact')}>
                  Get In Touch
                </a>
                <a href="#projects" class="btn btn-outline-light" onClick={(e) => handleScrollTo(e, 'projects')}>
                  View Work
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
