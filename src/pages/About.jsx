import React from 'react';

const About = () => {
  return (
    <div className="about">
      <section className="page-section">
        <div className="content-wrapper">
          <div className="section-header">
            <h1>About Me</h1>
            <p>
              I'm a passionate Financial Engineering graduate student at Stevens Institute of Technology, 
              with a strong foundation in electrical engineering and a deep interest in applying machine learning 
              and quantitative methods to solve complex financial problems.
            </p>
          </div>

          <div className="about-content">
            <div className="about-section">
              <h2>🎓 Education</h2>
              <div className="education-item">
                <h3>Master of Science in Financial Engineering</h3>
                <p className="institution">Stevens Institute of Technology, Hoboken, NJ</p>
                <p className="date">Expected 2025</p>
                <p className="details">Focusing on quantitative finance, risk management, and financial modeling with advanced computational techniques.</p>
              </div>
              <div className="education-item">
                <h3>Bachelor of Technology in Electrical & Electronics Engineering</h3>
                <p className="institution">National Institute of Technology (NIT) Goa, India</p>
                <p className="date">2019 - 2023</p>
                <p className="details">Strong foundation in mathematics, programming, and analytical problem-solving.</p>
              </div>
            </div>

            <div className="about-section">
              <h2>💼 Professional Experience</h2>
              
              <div className="experience-item">
                <h3>Research Fellow</h3>
                <p className="company">IHUB-Data, IIIT Hyderabad</p>
                <p className="date">2023</p>
                <p className="description">Conducted research in data science and machine learning applications, contributing to innovative solutions in technology.</p>
              </div>

              <div className="experience-item">
                <h3>Research Consultant</h3>
                <p className="company">WorldQuant Brain</p>
                <p className="date">2022 - 2023</p>
                <p className="description">Developed quantitative research models and trading strategies using advanced mathematical and statistical techniques.</p>
              </div>

              <div className="experience-item">
                <h3>Graduate Engineer Trainee</h3>
                <p className="company">Reliance Jio Infocomm Limited</p>
                <p className="date">2022</p>
                <p className="description">Gained experience in telecommunications technology and engineering solutions in a fast-paced corporate environment.</p>
              </div>
            </div>

            <div className="about-section">
              <h2>🛠️ Technical Expertise</h2>
              <div className="skills-grid">
                <div className="skill-category">
                  <h3>Programming Languages</h3>
                  <ul>
                    <li>Python</li>
                    <li>C++</li>
                    <li>R</li>
                    <li>SQL</li>
                    <li>MATLAB</li>
                    <li>JavaScript</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Financial Tools & Libraries</h3>
                  <ul>
                    <li>Bloomberg Terminal</li>
                    <li>QuantLib</li>
                    <li>Pandas</li>
                    <li>NumPy</li>
                    <li>SciPy</li>
                    <li>PyTorch</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Data Science & ML</h3>
                  <ul>
                    <li>TensorFlow</li>
                    <li>Scikit-learn</li>
                    <li>Deep Learning</li>
                    <li>Time Series Analysis</li>
                    <li>Statistical Modeling</li>
                    <li>Data Visualization</li>
                  </ul>
                </div>
                <div className="skill-category">
                  <h3>Development Tools</h3>
                  <ul>
                    <li>Git</li>
                    <li>Docker</li>
                    <li>AWS</li>
                    <li>Linux</li>
                    <li>Jupyter</li>
                    <li>VS Code</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>🎯 Professional Interests</h2>
              <div className="grid-2">
                <div className="interest-card">
                  <h3>Quantitative Finance</h3>
                  <p>Developing mathematical models for pricing derivatives, risk assessment, and portfolio optimization.</p>
                </div>
                <div className="interest-card">
                  <h3>Machine Learning in Finance</h3>
                  <p>Applying ML algorithms to predict market movements, automate trading strategies, and enhance decision-making.</p>
                </div>
                <div className="interest-card">
                  <h3>Risk Management</h3>
                  <p>Implementing robust risk frameworks and developing models for Value at Risk (VaR) and stress testing.</p>
                </div>
                <div className="interest-card">
                  <h3>FinTech Innovation</h3>
                  <p>Exploring blockchain technology, algorithmic trading, and digital financial services.</p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>🏆 Achievements & Certifications</h2>
              <div className="grid-3">
                <div className="achievement-item">
                  <h3>Financial Risk Manager (FRM) Part 1</h3>
                  <p>Global Association of Risk Professionals (GARP)</p>
                </div>
                <div className="achievement-item">
                  <h3>WorldQuant Brain Research</h3>
                  <p>Developed quantitative research models and trading strategies</p>
                </div>
                <div className="achievement-item">
                  <h3>Publications</h3>
                  <p>Contributed to research publications in machine learning and data science</p>
                </div>
              </div>
            </div>

            <div className="about-section">
              <h2>🚀 Career Goals</h2>
              <p>
                I aspire to work at the intersection of finance and technology, developing innovative solutions 
                that leverage quantitative methods and machine learning to solve complex financial challenges. 
                My goal is to contribute to the evolution of financial markets through data-driven insights 
                and robust mathematical modeling, while continuously expanding my expertise in emerging financial technologies.
              </p>
            </div>

            <div className="about-section">
              <h2>🌟 Beyond Work</h2>
              <p>
                When I'm not diving into financial models or coding, I enjoy staying updated with the latest 
                developments in FinTech, reading about market trends, and exploring new technologies. 
                I'm also passionate about continuous learning and regularly participate in online courses 
                and financial engineering workshops to stay at the forefront of the field.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About; 