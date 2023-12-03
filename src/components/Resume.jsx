import React from 'react';

const Resume = () => {
  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <h2>Resume</h2>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Your Name</h5>
            <h6 className="card-subtitle mb-2 text-muted">Job Title</h6>
            <p className="card-text">Brief description about yourself, your skills, and experience.</p>
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Education: Your Education Details</li>
            <li className="list-group-item">Experience: Your Work Experience</li>
            <li className="list-group-item">Skills: Your Skills</li>
            {/* Add more sections as needed */}
          </ul>
          <div className="card-body">
            <a href="#" className="card-link">Link to your resume/CV</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
