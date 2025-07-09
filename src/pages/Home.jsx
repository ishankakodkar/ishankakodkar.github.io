import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div style={{ padding: '3rem', textAlign: 'center' }}>
    <h1 style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>Ishan Kakodkar</h1>
    <h2 style={{ color: '#888', marginBottom: '2rem' }}>Masters Student in Financial Engineering</h2>
    <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>
      Passionate about Financial Engineering, Machine Learning, and solving real-world problems with data and technology.
    </p>
    <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem' }}>
      <Link to="/projects" className="cta-btn">View Projects</Link>
      <Link to="/blog" className="cta-btn">Read Blog</Link>
      <Link to="/contact" className="cta-btn">Contact Me</Link>
    </div>
  </div>
);

export default Home; 