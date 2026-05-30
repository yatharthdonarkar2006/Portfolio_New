import React, { useState, useEffect } from 'react';

const ResumeSection = ({ triggerToast }) => {
  const [downloadStatus, setDownloadStatus] = useState('idle'); // 'idle' | 'downloading' | 'success'
  const [progress, setProgress] = useState(0);

  const handleDownload = (e) => {
    e.preventDefault();
    if (downloadStatus !== 'idle') return;

    setDownloadStatus('downloading');
    setProgress(0);
    
    // Simulate download progress bar
    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            // Trigger actual PDF file download
            const link = document.createElement('a');
            link.href = '/Yatharth_Donarkar_Resume.pdf';
            link.download = 'Yatharth_Donarkar_Resume.pdf';
            document.body.appendChild(link);
            link.click();
            document.body.removeChild(link);

            setDownloadStatus('success');
            triggerToast('Resume Downloaded Successfully!', 'success');

            // Reset back to idle after a few seconds
            setTimeout(() => {
              setDownloadStatus('idle');
            }, 3000);
          }, 300);
          return 100;
        }
        return prev + 10;
      });
    }, 120);
  };

  return (
    <section id="resume" className="section resume">
      <div className="container">
        <div className="section-header">
          <h2 className="section-title">Resume / CV</h2>
          <p className="section-subtitle">A quick preview of my qualifications and technical capabilities</p>
        </div>

        <div className="resume-container">
          <div className="resume-card">
            {/* Download Progress Bar inside the card */}
            {downloadStatus === 'downloading' && (
              <div 
                className="download-progress-bar" 
                style={{ width: `${progress}%` }}
              />
            )}

            <div className="resume-header">
              <div className="resume-header-left">
                <h3>Yatharth Donarkar</h3>
                <p className="title">MERN Stack &amp; AI Developer</p>
                <div className="meta">
                  <span><i className="fas fa-envelope"></i> yatharthdonarkar13@gmail.com</span>
                  <span><i className="fas fa-map-marker-alt"></i> Nagpur, India</span>
                </div>
              </div>
              <div className="resume-header-right">
                <button 
                  className={`btn ${downloadStatus === 'success' ? 'btn-secondary' : 'btn-primary'}`} 
                  onClick={handleDownload}
                  disabled={downloadStatus === 'downloading'}
                  style={{ minWidth: '180px' }}
                >
                  {downloadStatus === 'idle' && (
                    <>
                      <i className="fas fa-download"></i> Download CV
                    </>
                  )}
                  {downloadStatus === 'downloading' && (
                    <>
                      <i className="fas fa-spinner fa-spin"></i> Downloading {progress}%
                    </>
                  )}
                  {downloadStatus === 'success' && (
                    <>
                      <i className="fas fa-check"></i> Downloaded!
                    </>
                  )}
                </button>
              </div>
            </div>

            <div className="resume-grid">
              {/* Left Column */}
              <div className="resume-col-left">
                <div className="resume-block">
                  <h4><i className="fas fa-graduation-cap"></i> Education</h4>
                  <div className="resume-timeline">
                    <div className="resume-timeline-item">
                      <div className="date">2024 - 2028</div>
                      <h5>Bachelor of Technology - Computer Engineering</h5>
                      <p className="org">Suryodaya College of Engineering &amp; Technology, Nagpur</p>
                    </div>
                  </div>
                </div>

                <div className="resume-block">
                  <h4><i className="fas fa-star"></i> Core Strengths</h4>
                  <div className="resume-skills-list">
                    <span className="resume-skill-tag">Full-Stack MERN Development</span>
                    <span className="resume-skill-tag">AI Application Concepts</span>
                    <span className="resume-skill-tag">Security &amp; JWT Authentication</span>
                    <span className="resume-skill-tag">API Design &amp; Integration</span>
                    <span className="resume-skill-tag">Responsive UI &amp; Modern Styling</span>
                    <span className="resume-skill-tag">Problem Solving &amp; Logic</span>
                  </div>
                </div>
              </div>

              {/* Right Column */}
              <div className="resume-col-right">
                <div className="resume-block">
                  <h4><i className="fas fa-tools"></i> Tech Stack</h4>
                  <div className="resume-skills-list">
                    <span className="resume-skill-tag">HTML5</span>
                    <span className="resume-skill-tag">CSS3</span>
                    <span className="resume-skill-tag">JavaScript (ES6)</span>
                    <span className="resume-skill-tag">React</span>
                    <span className="resume-skill-tag">Node.js</span>
                    <span className="resume-skill-tag">Express.js</span>
                    <span className="resume-skill-tag">MongoDB</span>
                    <span className="resume-skill-tag">JWT Auth</span>
                    <span className="resume-skill-tag">Java</span>
                    <span className="resume-skill-tag">Python</span>
                    <span className="resume-skill-tag">Linux</span>
                    <span className="resume-skill-tag">Git</span>
                    <span className="resume-skill-tag">GitHub</span>
                  </div>
                </div>

                <div className="resume-block">
                  <h4><i className="fas fa-trophy"></i> Ambitions</h4>
                  <p style={{ color: 'var(--text-muted)', fontSize: '0.9rem' }}>
                    Placement-ready engineer looking to contribute to scalable web platforms, 
                    learn advanced machine learning architectures, and participate in collaborative hackathons.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResumeSection;
