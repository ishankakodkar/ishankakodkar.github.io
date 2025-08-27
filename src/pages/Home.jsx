import React from 'react';
import { Link } from 'react-router-dom';

const Home = () => {
  return (
    <div className="home">
      <style>
        {`
        .libutton {
          display: flex;
          flex-direction: column;
          justify-content: center;
          padding: 7px;
          text-align: center;
          outline: none;
          text-decoration: none !important;
          color: #ffffff !important;
          width: 200px;
          height: 32px;
          border-radius: 16px;
          background-color: #0A66C2;
          font-family: "SF Pro Text", Helvetica, sans-serif;
        }
        `}
      </style>
      {/* Hero Section */}
      <section className="home-hero">
        <div className="hero-content">
          <div className="hero-text">
            <h1>Ishan Kakodkar</h1>
            <h2>Financial Engineering Graduate Student | Quantitative Research | Machine Learning</h2>
            <p>
              M.S. Financial Engineering candidate and quantitative researcher specializing in systematic 
              trading strategies, risk modeling, and machine learning applications in finance. Experienced 
              in developing and validating models through academic research and industry roles at WorldQuant 
              Brain, IHUB-Data, and Jio Platforms.
            </p>
            <div className="hero-cta">
              <Link to="/projects" className="cta-btn">View My Projects</Link>
              <Link to="/contact" className="btn-secondary">Get In Touch</Link>
              <a className="libutton" href="https://www.linkedin.com/comm/mynetwork/discovery-see-all?usecase=PEOPLE_FOLLOWS&followMember=ishan-kakodkar" target="_blank" rel="noopener noreferrer">Follow on LinkedIn</a>
            </div>
          </div>
          <div className="hero-photo">
            <img src="/photo.jpg" alt="Ishan Kakodkar" className="profile-photo" />
          </div>
        </div>
      </section>

      {/* What I Do Section */}
      <section className="page-section">
        <div className="content-wrapper">
          <div className="section-header">
            <h2>What I Do</h2>
          </div>
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
                <li>Time series forecasting models</li>
              </ul>
            </div>
            <div className="card">
              <h3>💡 Research & Innovation</h3>
              <p>Contributing to cutting-edge research in quantitative finance and data science applications.</p>
              <ul>
                <li>WorldQuant Brain research consultant</li>
                <li>IHUB-Data research fellow</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Projects Section */}
      <section className="page-section">
        <div className="content-wrapper">
          <div className="section-header">
            <h2>Featured Projects</h2>
            <p>Coming soon - I'm currently working on some exciting projects in financial engineering and machine learning!</p>
          </div>
        </div>
      </section>

      {/* Experience Highlights */}
      <section className="page-section">
        <div className="content-wrapper">
          <div className="section-header">
            <h2>Professional Experience</h2>
          </div>
          <div className="timeline">
            <div className="timeline-item">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <h3>Quantitative Researcher</h3>
                <p className="company">Graduate Student Managed Investment Fund (GSMIF)</p>
                <p>Conduct quantitative research and modeling on macroeconomic trends and multi-asset ETFs for portfolio construction.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2025</div>
              <div className="timeline-content">
                <h3>Student Research Assistant</h3>
                <p className="company">Stevens Institute of Technology</p>
                <p>Developed and optimized reinforcement learning-based trading agents within a high-frequency trading simulation.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023-2024</div>
              <div className="timeline-content">
                <h3>Junior Research Fellow</h3>
                <p className="company">IHUB-Data, IIIT Hyderabad</p>
                <p>Engineered real-time data processing pipeline for multi-sensor integration achieving 99.5% accuracy.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2023-2024</div>
              <div className="timeline-content">
                <h3>Brain Research Consultant</h3>
                <p className="company">WorldQuant Research (India) Private Limited</p>
                <p>Developed 20+ profitable alpha strategies for global equity markets achieving Sharpe ratios greater than 2.0.</p>
              </div>
            </div>
            <div className="timeline-item">
              <div className="timeline-date">2022-2023</div>
              <div className="timeline-content">
                <h3>Engineer</h3>
                <p className="company">Jio Platforms Limited</p>
                <p>Built high-performance Python APIs and optimized in-memory database Redis, cutting query latency by 10%.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Core Competencies */}
      <section className="page-section">
        <div className="content-wrapper">
          <div className="section-header">
            <h2>Core Competencies</h2>
          </div>
          <div className="skills-grid">
            <div className="skill-category">
              <h3>Programming</h3>
              <div className="skills-list">
                <span className="skill-item">Python</span>
                <span className="skill-item">C++</span>
                <span className="skill-item">R</span>
                <span className="skill-item">SQL</span>
                <span className="skill-item">MATLAB</span>
              </div>
            </div>
            <div className="skill-category">
              <h3>Financial Tools</h3>
              <div className="skills-list">
                <span className="skill-item">Bloomberg Terminal</span>
                <span className="skill-item">QuantLib</span>
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
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Open to Work Section */}
      <section className="page-section">
        <div className="content-wrapper">
          <div className="open-to-work">
            <h2>🚀 Open to Work</h2>
            <p>Seeking opportunities in quantitative finance, machine learning, and financial technology</p>
            <div className="roles-grid">
              <div className="role-item">
                <h3>Quantitative Researcher</h3>
                <p>Algorithm development, model validation, risk analysis</p>
              </div>
              <div className="role-item">
                <h3>Quantitative Analyst</h3>
                <p>Derivatives pricing, portfolio optimization, market analysis</p>
              </div>
              <div className="role-item">
                <h3>Machine Learning Engineer</h3>
                <p>ML model development, financial data analysis, automation</p>
              </div>
              <div className="role-item">
                <h3>Data Scientist</h3>
                <p>Statistical analysis, predictive modeling, data visualization</p>
              </div>
              <div className="role-item">
                <h3>Quantitative Developer</h3>
                <p>Algorithmic trading systems, financial software, data pipelines</p>
              </div>
              <div className="role-item">
                <h3>Financial Data Analyst</h3>
                <p>Market research, financial modeling, business intelligence</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="page-section">
        <div className="content-wrapper">
          <div className="section-header">
            <h2>Let's Connect</h2>
            <p>Interested in quantitative finance, machine learning, or potential collaborations?</p>
          </div>
          <div className="contact-info-quick">
            <a href="mailto:ishanmain10@gmail.com" className="contact-quick-item">
              <span className="contact-quick-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/>
                </svg>
              </span>
              <span>ishanmain10@gmail.com</span>
            </a>
            <a href="https://www.linkedin.com/in/ishan-kakodkar" target="_blank" rel="noopener noreferrer" className="contact-quick-item">
              <span className="contact-quick-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M20.5 2h-17A1.5 1.5 0 002 3.5v17A1.5 1.5 0 003.5 22h17a1.5 1.5 0 001.5-1.5v-17A1.5 1.5 0 0020.5 2zM8 19H5v-9h3zM6.5 8.25A1.75 1.75 0 118.3 6.5a1.78 1.78 0 01-1.8 1.75zM19 19h-3v-4.74c0-1.42-.6-1.93-1.38-1.93A1.74 1.74 0 0013 14.19a.66.66 0 000 .14V19h-3v-9h2.9v1.3a3.11 3.11 0 012.7-1.4c1.55 0 3.36.86 3.36 3.66z"/>
                </svg>
              </span>
              <span>LinkedIn Profile</span>
            </a>
            <a href="https://github.com/ishankakodkar" target="_blank" rel="noopener noreferrer" className="contact-quick-item">
              <span className="contact-quick-icon">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0c-6.626 0-12 5.373-12 12 0 5.302 3.438 9.8 8.207 11.387.599.111.793-.261.793-.577v-2.234c-3.338.726-4.033-1.416-4.033-1.416-.546-1.387-1.333-1.756-1.333-1.756-1.089-.745.083-.729.083-.729 1.205.084 1.839 1.237 1.839 1.237 1.07 1.834 2.807 1.304 3.492.997.107-.775.418-1.305.762-1.604-2.665-.305-5.467-1.334-5.467-5.931 0-1.311.469-2.381 1.236-3.221-.124-.303-.535-1.524.117-3.176 0 0 1.008-.322 3.301 1.23.957-.266 1.983-.399 3.003-.404 1.02.005 2.047.138 3.006.404 2.291-1.552 3.297-1.23 3.297-1.23.653 1.653.242 2.874.118 3.176.77.84 1.235 1.911 1.235 3.221 0 4.609-2.807 5.624-5.479 5.921.43.372.823 1.102.823 2.222v3.293c0 .319.192.694.801.576 4.765-1.589 8.199-6.086 8.199-11.386 0-6.627-5.373-12-12-12z"/>
                </svg>
              </span>
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