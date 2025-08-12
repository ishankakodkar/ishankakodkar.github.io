import React from 'react';

const Resume = () => (
  <div className="resume-page">
    <div className="container-centered">
      <div className="resume-header">
        <h1>My Resume</h1>
      </div>
      <iframe
        src="/Resume.pdf"
        title="Resume"
        className="resume-iframe"
      />
      <div className="resume-download">
        <a href="/Resume.pdf" download>Download PDF</a>
      </div>
    </div>
  </div>
);

export default Resume; 