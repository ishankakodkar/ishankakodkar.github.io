import React from 'react';

const Contact = () => (
  <div style={{ padding: '2rem', maxWidth: '600px', margin: '0 auto' }}>
    <h1>Contact Me</h1>
    <p>You can reach me at <a href="mailto:your.email@example.com">your.email@example.com</a>.</p>
    <div style={{ marginTop: '1rem' }}>
      {/* Add your social links here */}
      <a href="https://www.linkedin.com/in/yourprofile" target="_blank" rel="noopener noreferrer">LinkedIn</a>
    </div>
  </div>
);

export default Contact; 