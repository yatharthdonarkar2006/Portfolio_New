import React, { useRef, useEffect } from 'react';

const Hero = () => {
  const cardRef = useRef(null);

  // Smooth scroll handler
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

  // 3D Tilt interactive effect for Hero Floating Card
  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;
      
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      
      const rotateX = (y - centerY) / 8;
      const rotateY = (centerX - x) / 8;
      
      card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
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
  }, []);

  return (
    <section id="home" class="hero">
      <div class="container">
        <div class="row align-items-center">
          <div class="col-12 col-lg-7">
            <div class="hero-badge">
              <span class="badge-text">Available for Internships & Hackathons</span>
            </div>
            
            <h1 class="hero-title">
              Building the future with <br/>
              <span class="gradient-text">MERN Stack</span> &amp; <span class="gradient-text">AI</span>
            </h1>
            
            <p class="hero-subtitle">
              I'm <strong>Yatharth Donarkar</strong>, a Training and Placement Coordinator and Computer Engineering student at Suryodaya College of Engineering and Technology, Nagpur. Passionate about Full-Stack Development, AI, and modern web technologies, I build secure and user-friendly applications that solve real-world problems while continuously enhancing my technical, leadership, and communication skills.
            </p>
            
            <div class="d-flex gap-3 flex-wrap">
              <a href="#projects" class="btn btn-primary" onClick={(e) => handleScrollTo(e, 'projects')}>
                View Projects
              </a>
              <a href="#resume" class="btn btn-outline-light" onClick={(e) => handleScrollTo(e, 'resume')}>
                <i className="fas fa-file-alt me-2"></i>Download CV
              </a>
              <a href="#contact" class="btn btn-outline" onClick={(e) => handleScrollTo(e, 'contact')}>
                Let's Connect
              </a>
            </div>
            
            <div class="hero-stats">
              <div class="stat">
                <div class="stat-number">7+</div>
                <div class="stat-label">Projects Built</div>
              </div>
              <div class="stat">
                <div class="stat-number">MERN</div>
                <div class="stat-label">Stack Specialist</div>
              </div>
              <div class="stat">
                <div class="stat-number">2024-28</div>
                <div class="stat-label">B.Tech Journey</div>
              </div>
            </div>
          </div>
          
          <div class="col-12 col-lg-5 mt-5 mt-lg-0">
            <div className="floating-card" ref={cardRef} style={{ transition: 'transform 0.1s ease' }}>
              <div class="card-content">
                <div class="card-icon">
                  <i class="fas fa-laptop-code"></i>
                </div>
                <h3>Full-Stack Developer</h3>
                <p>MERN • Security • Clean UI</p>
                <div class="tech-badges">
                  <span class="tech-badge">React</span>
                  <span class="tech-badge">Node.js</span>
                  <span class="tech-badge">Express.js</span>
                  <span class="tech-badge">MongoDB</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      <div class="scroll-indicator" onClick={(e) => handleScrollTo(e, 'about')} style={{ cursor: 'pointer' }}>
        <div class="scroll-dot"></div>
      </div>
    </section>
  );
};

export default Hero;
