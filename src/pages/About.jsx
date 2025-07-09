import React from 'react';

const About = () => (
  <div style={{ padding: '2rem', maxWidth: '800px', margin: '0 auto' }}>
    <h1>About Me</h1>
    <p>
      <b>Name:</b> Ishan Kakodkar<br/>
      <b>Current Program:</b> Masters in Financial Engineering<br/>
      <b>Interests:</b> Financial Engineering, Machine Learning, Data Science, Quantitative Finance
    </p>
    <h2>Education</h2>
    <ul>
      <li><b>Masters in Financial Engineering</b> (in progress)</li>
      <li>Bachelor's in [Your Undergrad Major], [Your University]</li>
    </ul>
    <h2>Skills</h2>
    <ul>
      <li>Programming: Python, R, SQL, C++</li>
      <li>Machine Learning: scikit-learn, pandas, numpy, Jupyter</li>
      <li>Finance: Portfolio Optimization, Risk Management, Derivatives, Financial Modeling</li>
      <li>Tools: Git, Excel, LaTeX</li>
    </ul>
    <h2>About</h2>
    <p>
      I am passionate about leveraging quantitative methods and machine learning to solve complex problems in finance. My academic journey and projects reflect my drive to combine technical skills with financial knowledge to create innovative solutions.
    </p>
  </div>
);

export default About; 