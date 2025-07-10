import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => (
  <div>
    {/* Hero Section */}
    <section className="home-hero">
      <div className="animate-fadeInUp">
        <h1>Ishan Kakodkar</h1>
        <h2>Masters Student in Financial Engineering</h2>
        <p style={{ fontSize: '1.2rem', color: 'rgba(255, 255, 255, 0.8)', maxWidth: '600px', margin: '0 auto 2rem' }}>
          Passionate about quantitative finance, machine learning, and building innovative solutions 
          at the intersection of technology and financial markets.
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
          <Link to="/projects" className="cta-btn">View Projects</Link>
          <Link to="/about" className="cta-btn btn-secondary">Learn More</Link>
          <Link to="/contact" className="cta-btn">Get In Touch</Link>
        </div>
      </div>
    </section>

    {/* Quick Highlights */}
    <section style={{ padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="text-center mb-4">What I Do</h2>
        <div className="grid-3">
          <div className="card animate-fadeInUp">
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>📊</div>
            <h3>Financial Engineering</h3>
            <p>
              Developing quantitative models for portfolio optimization, risk management, 
              and derivative pricing using advanced mathematical and statistical techniques.
            </p>
          </div>
          <div className="card animate-fadeInUp" style={{ animationDelay: '0.2s' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>🤖</div>
            <h3>Machine Learning</h3>
            <p>
              Applying ML algorithms to financial data for predictive modeling, 
              algorithmic trading strategies, and automated decision-making systems.
            </p>
          </div>
          <div className="card animate-fadeInUp" style={{ animationDelay: '0.4s' }}>
            <div style={{ fontSize: '2.5rem', marginBottom: '1rem' }}>💡</div>
            <h3>Innovation</h3>
            <p>
              Bridging the gap between traditional finance and emerging technologies 
              to create next-generation financial solutions.
            </p>
          </div>
        </div>
      </div>
    </section>

    {/* Featured Projects Preview */}
    <section style={{ padding: '4rem 2rem', background: 'var(--bg-secondary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Featured Projects</h2>
        <div className="grid-2">
          <div className="project-card">
            <h3>Algorithmic Trading Simulator</h3>
            <p>
              A comprehensive backtesting platform for quantitative trading strategies 
              with real-time market data integration and performance analytics.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span className="skill-item">Python</span>
              <span className="skill-item">Pandas</span>
              <span className="skill-item">Matplotlib</span>
            </div>
            <Link to="/projects" className="cta-btn">View Details</Link>
          </div>
          <div className="project-card">
            <h3>Credit Risk ML Model</h3>
            <p>
              Machine learning pipeline for credit risk assessment using ensemble methods 
              and feature engineering on large financial datasets.
            </p>
            <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '1rem' }}>
              <span className="skill-item">Python</span>
              <span className="skill-item">scikit-learn</span>
              <span className="skill-item">XGBoost</span>
            </div>
            <Link to="/projects" className="cta-btn">View Details</Link>
          </div>
        </div>
        <div className="text-center mt-4">
          <Link to="/projects" className="cta-btn btn-secondary">View All Projects</Link>
        </div>
      </div>
    </section>

    {/* Skills & Interests */}
    <section style={{ padding: '4rem 2rem' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        <h2 className="text-center mb-4">Core Competencies</h2>
        <div className="grid-3">
          <div>
            <h3>Programming & Tools</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="skill-item">Python</span>
              <span className="skill-item">R</span>
              <span className="skill-item">SQL</span>
              <span className="skill-item">C++</span>
              <span className="skill-item">MATLAB</span>
              <span className="skill-item">Git</span>
            </div>
          </div>
          <div>
            <h3>Finance & Quant</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="skill-item">Derivatives</span>
              <span className="skill-item">Risk Management</span>
              <span className="skill-item">Portfolio Theory</span>
              <span className="skill-item">Stochastic Calculus</span>
              <span className="skill-item">Financial Modeling</span>
            </div>
          </div>
          <div>
            <h3>Machine Learning</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
              <span className="skill-item">Scikit-learn</span>
              <span className="skill-item">TensorFlow</span>
              <span className="skill-item">Pandas</span>
              <span className="skill-item">NumPy</span>
              <span className="skill-item">Time Series</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    {/* Call to Action */}
    <section style={{ padding: '4rem 2rem', background: 'var(--gradient-primary)', color: 'white', textAlign: 'center' }}>
      <div style={{ maxWidth: '800px', margin: '0 auto' }}>
        <h2 style={{ color: 'white', marginBottom: '1rem' }}>Let's Connect</h2>
        <p style={{ fontSize: '1.1rem', marginBottom: '2rem', color: 'rgba(255, 255, 255, 0.9)' }}>
          Interested in quantitative finance, machine learning, or just want to chat about the latest in fintech? 
          I'd love to hear from you!
        </p>
        <div style={{ display: 'flex', justifyContent: 'center', gap: '1rem', flexWrap: 'wrap' }}>
          <Link to="/contact" className="cta-btn" style={{ background: 'white', color: 'var(--primary-color)' }}>
            Contact Me
          </Link>
          <Link to="/blog" className="cta-btn btn-secondary" style={{ borderColor: 'white', color: 'white' }}>
            Read My Blog
          </Link>
        </div>
      </div>
    </section>
  </div>
);

export default Home; 