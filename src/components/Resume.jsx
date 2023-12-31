import React from 'react';
import myResume from '../assets/FakeResume.pdf';
const Resume = () => {
  const handleDownload = () => {
    fetch(myResume).then((response) => {
      response.blob().then((blob) => {
        const fileURL = window.URL.createObjectURL(blob);
        let alink = document.createElement("a");
        alink.href = fileURL;
        alink.download = "FakeResume.pdf";
        alink.click(); //takes user immediately to adobe
      });
    });
  };
  return (
    <div className="row">
      <div className="col-md-8 mx-auto">
        <h2>Resume</h2>
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Armand Araujo</h5>
            {/* <h6 className="card-subtitle mb-2 text-muted">Graduate</h6> */}
            {/* <p className="card-text">Brief description about yourself, your skills, and experience.</p> */}
          </div>
          <ul className="list-group list-group-flush">
            <li className="list-group-item">Education: Graduate Of Berkeley Coding Bootcamp</li>
            <li className="list-group-item">Experience: </li>
            <li className="list-group-item">Skills: HTML, CSS, CSS Libraries (Materialize, Bootstrap, Bulma), Javascript, jQuery, Node.Js, NPM, Express.js, MySQL, MongoDB, React </li>
            {/* Add more sections as needed */}
          </ul>
          <div className="card-body">
            <a href="#" onClick={handleDownload} className="card-link" >Link to your resume</a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Resume;
