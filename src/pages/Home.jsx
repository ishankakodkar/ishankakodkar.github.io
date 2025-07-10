import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-photo">
            <div className="photo-placeholder">
              <span>📸</span>
              <p>Your Photo Here</p>
            </div>
          </div>
          <div className="hero-text">
            <h1>Ishan Kakodkar</h1>
            <h2>Financial Engineering Graduate Student | Quantitative Research | Machine Learning</h2>
            <p>
              MS Financial Engineering student at Stevens Institute of Technology with expertise in 
              quantitative finance, machine learning, and algorithmic trading. Currently a Graduate Assistant 
              with experience in research roles at WorldQuant Brain and IHUB-Data.
            </p>
            <div className="hero-cta">
              <Link to="/projects" className="cta-btn">View My Projects</Link>
              <Link to="/contact" className="btn-secondary">Get In Touch</Link>
            </div>
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="what-i-do">
        <div className="container">
          <h2>What I Do</h2>
          <div className="grid-3">
            <div className="card">
              <h3>🏦 Financial Engineering</h3>
              <p>Developing mathematical models for derivatives pricing, risk management, and portfolio optimization using advanced quantitative techniques.</p>
              <ul>
                <li>Options pricing models (Black-Scholes, Monte Carlo)</li>
                <li>VaR and risk assessment frameworks</li>
                <li>Portfolio optimization algorithms</li>
              </ul>
            </div>
            <div className="card">
              <h3>🤖 Machine Learning in Finance</h3>
              <p>Applying ML algorithms to financial markets for trading strategies, risk prediction, and market analysis.</p>
              <ul>
                <li>Deep Q-Learning trading agents</li>
                <li>SEC filings analysis with RAG systems</li>
                <li>Time series forecasting models</li>
              </ul>
            </div>
            <div className="card">
              <h3>💡 Research & Innovation</h3>
              <p>Contributing to cutting-edge research in quantitative finance and data science applications.</p>
              <ul>
                <li>WorldQuant Brain research consultant</li>
                <li>IHUB-Data research fellow</li>
                <li>Published research in ML and data science</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="featured-projects">
        <div className="container">
          <h2>Featured Projects</h2>
          <div className="grid-2">
            <div className="project-card">
              <h3>SEC Filings RAG System</h3>
              <p>Advanced NLP system for analyzing SEC filings using Retrieval-Augmented Generation architecture.</p>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">LangChain</span>
                <span className="tech-tag">FAISS</span>
                <span className="tech-tag">OpenAI API</span>
              </div>
              <Link to="/projects" className="project-link">Learn More →</Link>
            </div>
            <div className="project-card">
              <h3>Deep Q-Learning Trading Agent</h3>
              <p>Autonomous trading agent using reinforcement learning for algorithmic trading strategies.</p>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">TensorFlow</span>
                <span className="tech-tag">OpenAI Gym</span>
                <span className="tech-tag">yfinance</span>
              </div>
              <Link to="/projects" className="project-link">Learn More →</Link>
            </div>
            <div className="project-card">
              <h3>Road Quality Index Prediction</h3>
              <p>ML model for predicting road quality using sensor data and computer vision techniques.</p>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">OpenCV</span>
                <span className="tech-tag">Scikit-learn</span>
                <span className="tech-tag">TensorFlow</span>
              </div>
              <Link to="/projects" className="project-link">Learn More →</Link>
            </div>
            <div className="project-card">
              <h3>ASL Detection System</h3>
              <p>Real-time American Sign Language detection using computer vision and deep learning.</p>
              <div className="tech-stack">
                <span className="tech-tag">Python</span>
                <span className="tech-tag">OpenCV</span>
                <span className="tech-tag">MediaPipe</span>
                <span className="tech-tag">Keras</span>
              </div>
              <Link to="/projects" className="project-link">Learn More →</Link>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="experience-highlights">
        <div className="container">
          <h2>Professional Experience</h2>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">Current</div>
              <div className="timeline-content">
                <h3>Graduate Assistant</h3>
                <p className="company">Stevens Institute of Technology</p>
                <p>Supporting academic research and administrative functions while pursuing MS in Financial Engineering.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023</div>
              <div className="timeline-content">
                <h3>Research Fellow</h3>
                <p className="company">IHUB-Data, IIIT Hyderabad</p>
                <p>Conducted advanced research in data science and machine learning applications.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022-2023</div>
              <div className="timeline-content">
                <h3>Research Consultant</h3>
                <p className="company">WorldQuant Brain</p>
                <p>Developed quantitative research models and trading strategies using mathematical and statistical techniques.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022</div>
              <div className="timeline-content">
                <h3>Graduate Engineer Trainee</h3>
                <p className="company">Reliance Jio Infocomm Limited</p>
                <p>Gained experience in telecommunications technology and engineering solutions.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="core-competencies">
        <div className="container">
          <h2>Core Competencies</h2>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming</h3>
              <div className="skills-list">
                <span className="skill-item">Python</span>
                <span className="skill-item">C++</span>
                <span className="skill-item">R</span>
                <span className="skill-item">SQL</span>
                <span className="skill-item">MATLAB</span>
                <span className="skill-item">JavaScript</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Financial Tools</h3>
              <div className="skills-list">
                <span className="skill-item">Bloomberg Terminal</span>
                <span className="skill-item">QuantLib</span>
                <span className="skill-item">Risk Analytics</span>
                <span className="skill-item">Monte Carlo</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Machine Learning</h3>
              <div className="skills-list">
                <span className="skill-item">TensorFlow</span>
                <span className="skill-item">PyTorch</span>
                <span className="skill-item">Scikit-learn</span>
                <span className="skill-item">Deep Learning</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Certifications</h3>
              <div className="skills-list">
                <span className="skill-item">FRM Part 1</span>
                <span className="skill-item">WorldQuant Research</span>
                <span className="skill-item">Publications</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="contact-cta">
        <div className="container">
          <h2>Let's Connect</h2>
          <p>Interested in quantitative finance, machine learning, or potential collaborations?</p>
          <div className="contact-info-quick">
            <a href="mailto:ishanmain10@gmail.com" className="contact-quick-item">
              <span className="contact-quick-icon">📧</span>
              <span>ishanmain10@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/ishan-kakodkar" target="_blank" rel="noopener noreferrer" className="contact-quick-item">
              <span className="contact-quick-icon">💼</span>
              <span>LinkedIn Profile</span>
            </a>
            <a href="https://github.com/ishankakodkar" target="_blank" rel="noopener noreferrer" className="contact-quick-item">
              <span className="contact-quick-icon">💻</span>
              <span>GitHub</span>
            </a>
          </div>
          <Link to="/contact" className="cta-btn">Get In Touch</Link>
        </div>
      </section>
    </div>
  );
};

export default Home;