import React, { useState } from 'react';

const Projects = () => {
  const [filter, setFilter] = useState('all');

  const projectsData = [
    {
      id: 1,
      title: 'CampusVote',
      category: 'mern',
      tags: ['MERN Stack', 'Security'],
      placeholderIcon: 'fa-vote-yea',
      description: 'A secure campus voting platform with role-based access control and tamper-resistant workflows. Features real-time results, admin dashboard, and comprehensive audit trails.',
      features: [
        'JWT authentication with role-based permissions',
        'Real-time vote counting and results display',
        'Comprehensive admin panel for election management'
      ],
      demoLink: 'https://campusvote-1.onrender.com',
      codeLink: 'https://github.com/yatharthdonarkar2006/CampusVote'
    },
    {
      id: 2,
      title: 'AI Resume Screening Tool',
      category: 'ai',
      tags: ['Python', 'AI'],
      placeholderIcon: 'fa-robot',
      description: 'An intelligent resume screening system that automates candidate evaluation using AI concepts. Features keyword analysis, skills matching, and detailed scoring reports.',
      features: [
        'Automated resume parsing and analysis',
        'Skill-based candidate ranking system',
        'Detailed evaluation reports with recommendations'
      ],
      demoLink: 'https://yatharthdonarkar2006-resume-screening-ai-app-wkqzt8.streamlit.app/',
      codeLink: 'https://github.com/yatharthdonarkar2006/resume-screening-ai'
    },
    {
      id: 3,
      title: 'Fake News Detection System',
      category: 'ai',
      tags: ['Machine Learning', 'NLP'],
      placeholderIcon: 'fa-newspaper',
      description: 'Developed a Machine Learning-powered web application that detects fake news using NLP and text classification techniques. Trained and evaluated models on news datasets to accurately identify misleading information and improve content credibility assessment.',
      features: [
        'Detect fake and misleading news articles automatically.',
        'Reduce the spread of misinformation on digital platforms.',
        'Provide users with a quick and reliable method to verify news content.'
      ],
      demoLink: 'https://yatharthdonarkar2006-fake-news-detection-s-streamlit-app-em2yhq.streamlit.app/',
      codeLink: 'https://github.com/yatharthdonarkar2006/Fake-News-Detection-System'
    },
    {
      id: 4,
      title: 'NeuroGestureX',
      category: 'ai',
      tags: ['AI', 'Computer Vision'],
      placeholderIcon: 'fa-hand-paper',
      description: 'NeuroGestureX is an AI-powered tele-rehabilitation platform designed to assist patients recovering from neurological disorders, strokes, injuries, or mobility impairments. The system uses Artificial Intelligence, Machine Learning, and Computer Vision to monitor rehabilitation exercises remotely, analyze patient movements in real time, and provide instant feedback to improve recovery outcomes.',
      features: [
        'AI-based gesture and movement recognition.',
        'Real-time exercise monitoring and feedback.',
        'Progress tracking and performance analytics.',
        'Remote patient-doctor interaction.',
        'Personalized rehabilitation exercise recommendations.',
        'Secure cloud-based data storage and reporting.'
      ],
      demoLink: '#contact',
      codeLink: 'https://github.com/yatharthdonarkar2006/NeurogestureX',
      isCollaborate: true
    },
    {
      id: 5,
      title: '45 Days DSA in C++',
      category: 'other',
      tags: ['C++', 'DSA', 'Algorithms'],
      placeholderIcon: 'fa-laptop-code',
      description: 'A comprehensive Data Structures and Algorithms learning repository documenting a 45-day coding journey in C++. The repository contains daily solutions to algorithmic problems, covering fundamental and advanced DSA concepts while focusing on problem-solving skills, coding efficiency, and interview preparation.',
      features: [
        'Strengthen problem-solving and analytical thinking skills.',
        'Master fundamental and advanced Data Structures and Algorithms concepts.',
        'Improve coding efficiency and optimize solutions using C++ STL.',
        'Prepare for technical interviews and competitive programming challenges.',
        'Develop consistency through daily coding practice and algorithm implementation.'
      ],
      demoLink: '#',
      codeLink: 'https://github.com/yatharthdonarkar2006/DSA_45_Days_Challenge',
      onlyCode: true
    },
    {
      id: 6,
      title: '45 Days Python Challenge',
      category: 'other',
      tags: ['Python', 'Programming'],
      placeholderIcon: 'fab fa-python',
      description: 'A structured 45-day Python learning repository showcasing consistent daily practice and hands-on implementation of Python programming concepts. The repository demonstrates progressive learning from basic syntax to advanced programming techniques and problem-solving applications.',
      features: [
        'Build a strong foundation in Python programming concepts.',
        'Develop logical thinking and problem-solving abilities.',
        'Learn Object-Oriented Programming and real-world coding practices.',
        'Gain hands-on experience with Python libraries, file handling, and data structures.',
        'Establish a habit of continuous learning through daily coding exercises and projects.'
      ],
      demoLink: '#',
      codeLink: 'https://github.com/yatharthdonarkar2006/Python-45DAYS-Journey',
      onlyCode: true
    },
    {
      id: 7,
      title: 'TravelX',
      category: 'other',
      tags: ['Community', 'Travel Safety'],
      placeholderIcon: 'fa-plane',
      description: 'A blockchain-powered travel safety platform providing verified incident reports, trust-based recommendations, and community-driven safety alerts for travelers worldwide. ONGOING.',
      features: [
        'Decentralized incident reporting system',
        'Community-verified safety recommendations',
        'Trust-based traveler network'
      ],
      demoLink: '#contact',
      codeLink: 'https://github.com/Atharv226/Smart-Local-Service-Booking-Platform',
      isCollaborate: true
    }
  ];

  const filteredProjects = filter === 'all' 
    ? projectsData 
    : projectsData.filter(proj => proj.category === filter);

  return (
    <section id="projects" class="projects">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Featured Projects</h2>
          <p class="section-subtitle">Real-world applications showcasing modern development practices</p>
        </div>

        {/* Dynamic Project Filter Tabs */}
        <div className="project-filters">
          <button 
            className={`filter-btn ${filter === 'all' ? 'active' : ''}`}
            onClick={() => setFilter('all')}
          >
            All
          </button>
          <button 
            className={`filter-btn ${filter === 'mern' ? 'active' : ''}`}
            onClick={() => setFilter('mern')}
          >
            MERN Stack
          </button>
          <button 
            className={`filter-btn ${filter === 'ai' ? 'active' : ''}`}
            onClick={() => setFilter('ai')}
          >
            AI &amp; Python
          </button>
          <button 
            className={`filter-btn ${filter === 'other' ? 'active' : ''}`}
            onClick={() => setFilter('other')}
          >
            Other Projects
          </button>
        </div>
        
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-4 projects-grid">
          {filteredProjects.map((project) => (
            <div key={project.id} className="col project-item-fade">
              <div class="project-card" style={{ height: '100%', display: 'flex', flexDirection: 'column' }}>
                <div class="project-image">
                  <div class="project-overlay">
                    <div class="project-links">
                      {!project.onlyCode && (
                        <a href={project.demoLink} target="_blank" rel="noreferrer" class="project-link" title="View Demo">
                          <i class="fas fa-external-link-alt"></i>
                        </a>
                      )}
                      <a href={project.codeLink} target="_blank" rel="noreferrer" class="project-link" title="View Code">
                        <i class="fab fa-github"></i>
                      </a>
                    </div>
                  </div>
                  <div class="project-placeholder">
                    <i class={`fas ${project.placeholderIcon}`}></i>
                  </div>
                </div>
                <div class="project-content" style={{ display: 'flex', flexDirection: 'column', flexGrow: 1 }}>
                  <div class="project-tags">
                    {project.tags.map((tag) => (
                      <span key={tag} class="tag">{tag}</span>
                    ))}
                  </div>
                  <h3>{project.title}</h3>
                  <p style={{ flexGrow: 1 }}>{project.description}</p>
                  <ul class="project-features">
                    {project.features.map((feature, index) => (
                      <li key={index}>{feature}</li>
                    ))}
                  </ul>
                  <div class="project-cta mt-auto pt-3">
                    {project.onlyCode ? (
                      <a href={project.codeLink} target="_blank" rel="noreferrer" class="btn btn-sm btn-primary w-100 justify-content-center">
                        <i className="fab fa-github me-2"></i>View Repository
                      </a>
                    ) : (
                      <>
                        <a href={project.demoLink} target="_blank" rel="noreferrer" class="btn btn-sm btn-primary">
                          {project.isCollaborate ? 'Collaborate' : 'View Live'}
                        </a>
                        <a href={project.codeLink} target="_blank" rel="noreferrer" class="btn btn-sm btn-outline">
                          View Code
                        </a>
                      </>
                    )}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        <div class="projects-footer mt-5">
          <a href="https://github.com/yatharthdonarkar2006" target="_blank" rel="noreferrer" class="btn btn-outline">
            <i class="fab fa-github"></i>
            View More on GitHub
          </a>
        </div>
      </div>
    </section>
  );
};

export default Projects;
