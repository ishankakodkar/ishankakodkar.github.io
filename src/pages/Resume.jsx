import React from 'react';

const Resume = () => (
  <div style={{ padding: '2rem' }}>
    <h1>My Resume</h1>
    <iframe
      src="/Resume.pdf"
      title="Resume"
      width="100%"
      height="600px"
      style={{ border: '1px solid #ccc', borderRadius: '8px' }}
    />
    <div style={{ marginTop: '1rem' }}>
      <a href="/Resume.pdf" download>Download PDF</a>
    </div>
  </div>
);

export default Resume; 