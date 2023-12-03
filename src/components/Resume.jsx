import React from 'react';

function Resume() {
  const resumeLink = 'path_to_resume_pdf'; // Replace 'path_to_resume_pdf' with the actual link

  // Dummy proficiency data (replace with actual data)
  const proficiencies = ['JavaScript', 'React', 'Node.js', 'MongoDB', 'HTML', 'CSS'];

  return (
    <section>
      <div className="resume">
        <h2>Resume</h2>
        <div className="download-resume">
          <a href={resumeLink} target="_blank" rel="noopener noreferrer">
            Download Resume
          </a>
        </div>
        <div className="proficiencies">
          <h3>Proficiencies:</h3>
          <ul>
            {proficiencies.map((skill, index) => (
              <li key={index}>{skill}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Resume;
