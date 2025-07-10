import React from 'react';

const About = () => (
  <div style={{ padding: '2rem' }}>
    {/* Hero Section */}
    <section style={{ padding: '3rem 0', textAlign: 'center', background: 'var(--bg-secondary)', margin: '-2rem -2rem 3rem', borderRadius: '20px 20px 0 0' }}>
      <h1 className="animate-fadeInUp">About Me</h1>
      <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
        Bridging the gap between traditional finance and cutting-edge technology through quantitative methods and machine learning.
      </p>
    </section>

    <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
      {/* Personal Introduction */}
      <section className="mb-4">
        <div className="card">
          <h2>👋 Personal Introduction</h2>
          <p>
            I'm <strong>Ishan Kakodkar</strong>, a Masters student in Financial Engineering with a deep passion for 
            quantitative finance and machine learning. My academic journey and professional interests center around 
            leveraging data science and mathematical modeling to solve complex problems in financial markets.
          </p>
          <p>
            I believe in the power of technology to transform traditional finance, and I'm excited to be part of 
            this evolution. Whether it's developing algorithmic trading strategies, building risk management models, 
            or exploring new applications of AI in finance, I'm always eager to push the boundaries of what's possible.
          </p>
        </div>
      </section>

      {/* Education & Academic Background */}
      <section className="mb-4">
        <h2 className="mb-3">🎓 Education & Academic Journey</h2>
        <div className="grid-2">
          <div className="card">
            <h3>Masters in Financial Engineering</h3>
            <p><strong>Current Program</strong> | Expected Graduation: 2024</p>
            <ul style={{ marginTop: '1rem', paddingLeft: '1.5rem' }}>
              <li>Quantitative Risk Management</li>
              <li>Derivative Securities and Pricing Models</li>
              <li>Portfolio Theory and Asset Management</li>
              <li>Stochastic Calculus for Finance</li>
              <li>Machine Learning in Finance</li>
              <li>Fixed Income Securities</li>
            </ul>
          </div>
          <div className="card">
            <h3>Undergraduate Studies</h3>
            <p><strong>Bachelor's Degree</strong> | Completed</p>
            <p style={{ marginTop: '1rem' }}>
              Strong foundation in mathematics, statistics, and computer science, 
              which provided the quantitative skills essential for financial engineering.
            </p>
            <div style={{ marginTop: '1rem' }}>
              <span className="skill-item">Mathematics</span>
              <span className="skill-item">Statistics</span>
              <span className="skill-item">Computer Science</span>
            </div>
          </div>
        </div>
      </section>

      {/* Technical Skills */}
      <section className="mb-4">
        <h2 className="mb-3">🛠️ Technical Expertise</h2>
        <div className="grid-3">
          <div className="card">
            <h3>Programming Languages</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              <span className="skill-item">Python</span>
              <span className="skill-item">R</span>
              <span className="skill-item">SQL</span>
              <span className="skill-item">C++</span>
              <span className="skill-item">MATLAB</span>
              <span className="skill-item">JavaScript</span>
            </div>
          </div>
          <div className="card">
            <h3>Financial Tools & Platforms</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              <span className="skill-item">Bloomberg Terminal</span>
              <span className="skill-item">QuantLib</span>
              <span className="skill-item">Excel/VBA</span>
              <span className="skill-item">MATLAB Financial Toolbox</span>
              <span className="skill-item">Monte Carlo Simulations</span>
            </div>
          </div>
          <div className="card">
            <h3>Data Science & ML</h3>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', marginTop: '1rem' }}>
              <span className="skill-item">Pandas</span>
              <span className="skill-item">NumPy</span>
              <span className="skill-item">Scikit-learn</span>
              <span className="skill-item">TensorFlow</span>
              <span className="skill-item">Jupyter</span>
              <span className="skill-item">Time Series Analysis</span>
            </div>
          </div>
        </div>
      </section>

      {/* Professional Interests */}
      <section className="mb-4">
        <h2 className="mb-3">💼 Professional Interests & Focus Areas</h2>
        <div className="grid-2">
          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📈</div>
            <h3>Quantitative Finance</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Derivative pricing and risk-neutral valuation</li>
              <li>Portfolio optimization and mean-variance theory</li>
              <li>Credit risk modeling and stress testing</li>
              <li>Interest rate and fixed income modeling</li>
            </ul>
          </div>
          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>🤖</div>
            <h3>Machine Learning in Finance</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Algorithmic trading strategy development</li>
              <li>Fraud detection and anomaly identification</li>
              <li>Natural language processing for financial texts</li>
              <li>Reinforcement learning for trading</li>
            </ul>
          </div>
          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>⚡</div>
            <h3>Financial Technology</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Blockchain and cryptocurrency analysis</li>
              <li>High-frequency trading systems</li>
              <li>RegTech and compliance automation</li>
              <li>Digital banking and fintech innovation</li>
            </ul>
          </div>
          <div className="card">
            <div style={{ fontSize: '2rem', marginBottom: '1rem' }}>📊</div>
            <h3>Risk Management</h3>
            <ul style={{ paddingLeft: '1.5rem' }}>
              <li>Value at Risk (VaR) modeling</li>
              <li>Market, credit, and operational risk</li>
              <li>Regulatory capital requirements</li>
              <li>Stress testing and scenario analysis</li>
            </ul>
          </div>
        </div>
      </section>

      {/* Career Goals */}
      <section className="mb-4">
        <div className="card" style={{ background: 'var(--gradient-primary)', color: 'white' }}>
          <h2 style={{ color: 'white', marginBottom: '1rem' }}>🚀 Career Goals & Vision</h2>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
            My goal is to become a leading quantitative analyst who bridges the gap between academic research 
            and practical financial applications. I aspire to work in roles where I can develop innovative 
            financial models, create algorithmic trading strategies, and contribute to the evolution of 
            financial technology.
          </p>
          <p style={{ color: 'rgba(255, 255, 255, 0.9)', lineHeight: '1.8' }}>
            I'm particularly interested in opportunities within investment banks, hedge funds, asset management 
            firms, and fintech companies where I can apply my quantitative skills to real-world financial challenges 
            and continue learning from experienced professionals in the field.
          </p>
        </div>
      </section>

      {/* Personal Interests */}
      <section className="mb-4">
        <h2 className="mb-3">🌟 Beyond Finance</h2>
        <div className="card">
          <p>
            When I'm not immersed in financial models or coding, I enjoy staying updated with the latest 
            developments in technology and finance through industry publications and research papers. 
            I'm also passionate about teaching and sharing knowledge, which has led me to start writing 
            about complex financial concepts and making them accessible to a broader audience.
          </p>
          <div style={{ marginTop: '1.5rem', display: 'flex', flexWrap: 'wrap', gap: '0.5rem' }}>
            <span className="skill-item">Financial Research</span>
            <span className="skill-item">Technical Writing</span>
            <span className="skill-item">Data Visualization</span>
            <span className="skill-item">Open Source Contributing</span>
          </div>
        </div>
      </section>
    </div>
  </div>
);

export default About; 