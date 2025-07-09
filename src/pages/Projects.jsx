import React from 'react';

const projects = [
  {
    title: 'Algorithmic Trading Simulator',
    description: 'A simulator for backtesting and analyzing algorithmic trading strategies using Python and Pandas.',
    tech: 'Python, Pandas, Matplotlib',
    link: '#'
  },
  {
    title: 'Credit Risk Prediction',
    description: 'Machine learning model to predict credit risk using financial datasets.',
    tech: 'Python, scikit-learn, Jupyter',
    link: '#'
  },
  {
    title: 'Portfolio Optimization Tool',
    description: 'Web app for optimizing investment portfolios using modern portfolio theory.',
    tech: 'React, Python (Flask), Plotly',
    link: '#'
  }
];

const Projects = () => (
  <div style={{ padding: '2rem' }}>
    <h1>Projects</h1>
    <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem', marginTop: '2rem' }}>
      {projects.map((project, idx) => (
        <div key={idx} style={{ border: '1px solid #eee', borderRadius: '8px', padding: '1.5rem' }}>
          <h2>{project.title}</h2>
          <p>{project.description}</p>
          <p><b>Tech Stack:</b> {project.tech}</p>
          {project.link !== '#' && <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>}
        </div>
      ))}
    </div>
  </div>
);

export default Projects; 