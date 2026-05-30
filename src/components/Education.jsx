import React from 'react';

const Education = () => {
  return (
    <section id="education" class="education">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Education</h2>
          <p class="section-subtitle">Building strong foundations for a tech career</p>
        </div>
        
        <div class="education-timeline">
          <div class="timeline-item">
            <div class="timeline-marker"></div>
            <div class="timeline-content">
              <div class="timeline-period">2024 - 2028</div>
              <h3>Bachelor of Technology - Computer Engineering</h3>
              <div class="institution">Suryodaya College of Engineering and Technology, Nagpur</div>
              <p>Focused on software engineering, web development, and modern programming practices. Active involvement in coding projects and technical skill development.</p>
              <div class="education-highlights">
                <div class="highlight">
                  <i class="fas fa-code"></i>
                  <span>Web Development Focus</span>
                </div>
                <div class="highlight">
                  <i class="fas fa-project-diagram"></i>
                  <span>Software Engineering Practices</span>
                </div>
                <div class="highlight">
                  <i class="fas fa-brain"></i>
                  <span>AI &amp; Machine Learning Fundamentals</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
