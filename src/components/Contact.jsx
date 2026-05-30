import React, { useState } from 'react';

const Contact = ({ triggerToast }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [focusedFields, setFocusedFields] = useState({});

  const handleFocus = (field) => {
    setFocusedFields(prev => ({ ...prev, [field]: true }));
  };

  const handleBlur = (field, value) => {
    if (!value) {
      setFocusedFields(prev => ({ ...prev, [field]: false }));
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const { name, email, subject, message } = formData;

    // Validation
    if (!name || !email || !subject || !message) {
      triggerToast('Please fill in all fields.', 'error');
      return;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      triggerToast('Please enter a valid email address.', 'error');
      return;
    }

    // Set loading state
    setIsSubmitting(true);

    // Create mailto link
    const subjectLine = `Portfolio Contact: ${subject}`;
    const bodyText = `Hello Yatharth,\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}\n\nBest regards,\n${name}`;
    const mailtoLink = `mailto:yatharthdonarkar13@gmail.com?subject=${encodeURIComponent(subjectLine)}&body=${encodeURIComponent(bodyText)}`;

    // Open email client with interactive timeout
    setTimeout(() => {
      window.location.href = mailtoLink;
      
      setTimeout(() => {
        setIsSubmitting(false);
        triggerToast('Email client opened successfully!', 'success');
        setFormData({
          name: '',
          email: '',
          subject: '',
          message: ''
        });
        setFocusedFields({});
      }, 1000);
    }, 800);
  };

  return (
    <section id="contact" class="contact">
      <div class="container">
        <div class="section-header">
          <h2 class="section-title">Let's Build Something Together</h2>
          <p class="section-subtitle">Ready for internships, hackathons, and innovative collaborations</p>
        </div>
        
        <div class="contact-grid">
          <div class="contact-info">
            <h3>Get In Touch</h3>
            <p>I'm actively seeking opportunities to contribute to meaningful projects. Whether it's an internship, hackathon team, or collaborative challenge, I'm ready to make an impact.</p>
            
            <div class="contact-links">
              <a href="mailto:yatharthdonarkar13@gmail.com" class="contact-link">
                <div class="link-icon">
                  <i class="fas fa-envelope"></i>
                </div>
                <div class="link-content">
                  <div class="link-title">Email</div>
                  <div class="link-value">yatharthdonarkar13@gmail.com</div>
                </div>
              </a>
              
              <a href="https://github.com/yatharthdonarkar2006" target="_blank" rel="noreferrer" class="contact-link">
                <div class="link-icon">
                  <i class="fab fa-github"></i>
                </div>
                <div class="link-content">
                  <div class="link-title">GitHub</div>
                  <div class="link-value">github.com/yatharthdonarkar2006</div>
                </div>
              </a>
              
              <a href="https://www.linkedin.com/in/yatharth-donarkar-662549350" target="_blank" rel="noreferrer" class="contact-link">
                <div class="link-icon">
                  <i class="fab fa-linkedin"></i>
                </div>
                <div class="link-content">
                  <div class="link-title">LinkedIn</div>
                  <div class="link-value">linkedin.com/in/yatharth-donarkar-662549350</div>
                </div>
              </a>
              
              <a href="https://instagram.com/yatharth_donarkar___" target="_blank" rel="noreferrer" class="contact-link">
                <div class="link-icon">
                  <i class="fab fa-instagram"></i>
                </div>
                <div class="link-content">
                  <div class="link-title">Instagram</div>
                  <div class="link-value">instagram.com/yatharth_donarkar___</div>
                </div>
              </a>
            </div>
          </div>
          
          <div class="contact-form-container">
            <form class="contact-form" onSubmit={handleSubmit}>
              <h3>Send a Message</h3>
              
              <div className={`form-group mb-3 ${focusedFields.name ? 'focused' : ''}`}>
                <label htmlFor="name" class="form-label">Your Name</label>
                <input 
                  type="text" 
                  id="name" 
                  name="name" 
                  className="form-control" 
                  value={formData.name}
                  onChange={handleChange}
                  onFocus={() => handleFocus('name')}
                  onBlur={(e) => handleBlur('name', e.target.value)}
                  required 
                />
              </div>
              
              <div className={`form-group mb-3 ${focusedFields.email ? 'focused' : ''}`}>
                <label htmlFor="email" class="form-label">Your Email</label>
                <input 
                  type="email" 
                  id="email" 
                  name="email" 
                  className="form-control" 
                  value={formData.email}
                  onChange={handleChange}
                  onFocus={() => handleFocus('email')}
                  onBlur={(e) => handleBlur('email', e.target.value)}
                  required 
                />
              </div>
              
              <div className={`form-group mb-3 ${focusedFields.subject ? 'focused' : ''}`}>
                <label htmlFor="subject" class="form-label">Subject</label>
                <select 
                  id="subject" 
                  name="subject" 
                  className="form-select" 
                  value={formData.subject}
                  onChange={handleChange}
                  onFocus={() => handleFocus('subject')}
                  onBlur={(e) => handleBlur('subject', e.target.value)}
                  required
                >
                  <option value=""></option>
                  <option value="internship">Internship Opportunity</option>
                  <option value="hackathon">Hackathon Collaboration</option>
                  <option value="project">Project Discussion</option>
                  <option value="other">Other</option>
                </select>
              </div>
              
              <div className={`form-group mb-3 ${focusedFields.message ? 'focused' : ''}`}>
                <label htmlFor="message" class="form-label">Message</label>
                <textarea 
                  id="message" 
                  name="message" 
                  rows="5" 
                  className="form-control" 
                  placeholder="Tell me about the opportunity or project..." 
                  value={formData.message}
                  onChange={handleChange}
                  onFocus={() => handleFocus('message')}
                  onBlur={(e) => handleBlur('message', e.target.value)}
                  required
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-primary w-100" disabled={isSubmitting}>
                {isSubmitting ? (
                  <>
                    <i class="fas fa-spinner fa-spin me-2"></i> Opening Email...
                  </>
                ) : (
                  <>
                    <i class="fas fa-paper-plane me-2"></i> Send Message
                  </>
                )}
              </button>
            </form>
          </div>
        </div>
        
        <div class="contact-cta mt-5">
          <div class="cta-content">
            <h3>Ready to hire or collaborate?</h3>
            <p>Let's discuss how I can contribute to your next project or join your team.</p>
            <div class="cta-buttons">
              <a href="mailto:yatharthdonarkar13@gmail.com?subject=Opportunity%20for%20Yatharth" class="btn btn-primary">
                <i class="fas fa-handshake me-2"></i> Schedule a Chat
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
