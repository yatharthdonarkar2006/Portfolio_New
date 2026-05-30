import React from 'react';

const Footer = () => {
  const handleScrollToTop = (e) => {
    e.preventDefault();
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <footer class="footer">
      <div class="container">
        <div class="footer-content">
          <div class="footer-text">
            <p>&copy; {new Date().getFullYear()} Yatharth Donarkar. Built with React &amp; Vite.</p>
          </div>
          <div class="footer-links">
            <a href="#home" class="footer-link" onClick={handleScrollToTop}>
              <i className="fas fa-arrow-up me-2"></i>Back to Top
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
