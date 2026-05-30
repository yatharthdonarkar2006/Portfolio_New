import React, { useState } from 'react';

const Skills = () => {
  const [activeCategory, setActiveCategory] = useState(null);

  const skillsData = [
    {
      category: 'Frontend',
      icon: 'fa-laptop-code',
      items: [
        { name: 'HTML5', icon: 'fab fa-html5' },
        { name: 'CSS3', icon: 'fab fa-css3-alt' },
        { name: 'JavaScript', icon: 'fab fa-js' },
        { name: 'React', icon: 'fab fa-react' }
      ]
    },
    {
      category: 'Backend',
      icon: 'fa-server',
      items: [
        { name: 'Node.js', icon: 'fab fa-node-js' },
        { name: 'Express.js', icon: 'fas fa-server' },
        { name: 'MongoDB', icon: 'fas fa-database' },
        { name: 'JWT Auth', icon: 'fas fa-shield-alt' }
      ]
    },
    {
      category: 'Languages',
      icon: 'fa-code',
      items: [
        { name: 'Java', icon: 'fab fa-java' },
        { name: 'Python', icon: 'fab fa-python' },
        { name: 'JavaScript', icon: 'fab fa-js' }
      ]
    },
    {
      category: 'Tools & Others',
      icon: 'fa-terminal',
      items: [
        { name: 'Linux', icon: 'fab fa-linux' },
        { name: 'Git', icon: 'fab fa-git-alt' },
        { name: 'GitHub', icon: 'fab fa-github' },
        { name: 'CLI', icon: 'fas fa-terminal' }
      ]
    }
  ];

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

  return (
    <section id="skills" class="skills">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Skills &amp; Technologies</h2>
          <p class="section-subtitle">Focused stack with strong fundamentals. Click a category to highlight it.</p>
        </div>
        
        <div class="row g-4 skills-grid">
          {skillsData.map((cat, catIdx) => {
            const isHighlighted = activeCategory === catIdx;
            return (
              <div 
                key={cat.category} 
                class="col-12 col-md-6 col-lg-3"
                onClick={() => setActiveCategory(isHighlighted ? null : catIdx)}
                style={{ cursor: 'pointer' }}
              >
                <div 
                  className="skill-category"
                  style={{
                    borderColor: isHighlighted ? 'var(--primary)' : 'var(--border-color)',
                    boxShadow: isHighlighted ? '0 10px 30px rgba(0, 212, 255, 0.25)' : 'none',
                    transform: isHighlighted ? 'translateY(-5px) scale(1.02)' : 'none',
                    transition: 'all 0.3s cubic-bezier(0.16, 1, 0.3, 1)',
                    background: isHighlighted ? 'rgba(31, 41, 55, 0.7)' : 'rgba(31, 41, 55, 0.5)'
                  }}
                >
                  <h3 className="d-flex align-items-center justify-content-center gap-2">
                    <i className={`fas ${cat.icon}`} style={{ color: isHighlighted ? 'var(--primary)' : 'inherit' }}></i>
                    {cat.category}
                  </h3>
                  <div class="skill-items">
                    {cat.items.map((skill) => (
                      <div 
                        key={skill.name} 
                        class="skill-item"
                        style={{
                          borderColor: isHighlighted ? 'rgba(0, 212, 255, 0.3)' : 'var(--border-color)',
                          background: isHighlighted ? 'var(--bg-secondary)' : 'var(--bg-tertiary)'
                        }}
                      >
                        <i class={skill.icon}></i>
                        <span>{skill.name}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        
        <div class="skills-cta">
          <div class="cta-card">
            <h3>Ready for Opportunities</h3>
            <p>Looking for internships, hackathons, or development collaborations? Let's build something amazing together!</p>
            <a href="#contact" class="btn btn-primary" onClick={(e) => handleScrollTo(e, 'contact')}>
              Let's Talk
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Skills;
