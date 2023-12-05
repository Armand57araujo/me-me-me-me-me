import React from 'react';

const Footer = () => {
  return (
    <footer className="bg-light text-center py-4 fixed-bottom">
      <div className="container">
        <p>&copy; 2023 My Portfolio. All rights reserved.</p>
        <div className="social-links">
          {/* Add your social media icons or links here */}
          <a href="#" className="social-icon">
            <i className="fab fa-twitter"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="#" className="social-icon">
            <i className="fab fa-github"></i>
          </a>
          {/* Add more social media icons or links as needed */}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
