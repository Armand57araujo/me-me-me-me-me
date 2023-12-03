import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css'; // Import Bootstrap CSS here

const PortfolioLayout = ({ children }) => {
  return (
    <div>
      {/* Your navigation bar */}
      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <a className="navbar-brand" href="#">Your Portfolio</a>
        {/* Other navigation items */}
      </nav>

      {/* Display the content of different sections */}
      <div className="container mt-4">
        {children}
      </div>

      {/* Footer */}
      <footer className="footer text-center py-2">
        Your Footer Content
      </footer>
    </div>
  );
};

export default PortfolioLayout;
