import React, { useState } from 'react';

const Projects = () => {
  return (
    <div className="projects">
      <div className="container-centered">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>Coming soon - I'm currently working on some exciting projects in financial engineering, machine learning, and quantitative analysis!</p>
        </div>

        <div className="coming-soon-section">
          <div className="coming-soon-card">
            <h2>🚀 Under Development</h2>
            <p>I'm actively developing projects that showcase my expertise in:</p>
            <ul>
              <li>Quantitative Finance & Risk Management</li>
              <li>Machine Learning in Finance</li>
              <li>Algorithmic Trading Systems</li>
              <li>Financial Data Analysis</li>
              <li>Portfolio Optimization</li>
            </ul>
            <p>Check back soon to see my latest work!</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 