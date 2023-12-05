import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4 fixed-bottom">
      <div className="container">
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        <div className="social-links">
          <a href="https://www.linkedin.com/in/armand-araujo-a82ba2291/" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/Armand57araujo" className="social-icon" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
          {/* Add more social media icons or links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
