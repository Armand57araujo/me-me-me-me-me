import React from 'react';

const Portfolio = () => {
  return (
    <div className="row">
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Project 1</h5>
          <p className="card-text">Description of project 1.</p>
          <a href="#" className="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Project 2</h5>
          <p className="card-text">Description of project 2.</p>
          <a href="#" className="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
    <div className="col-md-4">
      <div className="card">
        <div className="card-body">
          <h5 className="card-title">Project 3</h5>
          <p className="card-text">Description of project 3.</p>
          <a href="#" className="btn btn-primary">View Project</a>
        </div>
      </div>
    </div>
  </div>
);
};

export default Portfolio;
