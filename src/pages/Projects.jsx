import React from 'react';

const projects = [
  {
    title: 'Algorithmic Trading Simulator',
    description: 'A comprehensive backtesting platform for quantitative trading strategies with real-time market data integration, performance analytics, and risk management features.',
    detailedDescription: 'Built a full-stack trading simulator that allows for strategy development, backtesting, and performance evaluation. Includes features like Sharpe ratio calculation, maximum drawdown analysis, and Monte Carlo simulations for risk assessment.',
    tech: ['Python', 'Pandas', 'NumPy', 'Matplotlib', 'Plotly', 'Yahoo Finance API'],
    category: 'Quantitative Finance',
    status: 'Completed',
    highlights: [
      'Implemented multiple trading strategies (Mean Reversion, Momentum, Pairs Trading)',
      'Real-time data integration with market APIs',
      'Risk metrics calculation and visualization',
      'Portfolio optimization using Modern Portfolio Theory'
    ],
    link: '#',
    github: '#'
  },
  {
    title: 'Credit Risk Prediction Model',
    description: 'Machine learning pipeline for credit risk assessment using ensemble methods and advanced feature engineering on large financial datasets.',
    detailedDescription: 'Developed a comprehensive credit scoring model using gradient boosting and neural networks. The model incorporates traditional credit factors with alternative data sources to improve prediction accuracy.',
    tech: ['Python', 'scikit-learn', 'XGBoost', 'TensorFlow', 'Pandas', 'SHAP'],
    category: 'Machine Learning',
    status: 'Completed',
    highlights: [
      'Achieved 92% accuracy in default prediction',
      'Feature importance analysis using SHAP values',
      'Handling imbalanced datasets with SMOTE',
      'Model interpretability for regulatory compliance'
    ],
    link: '#',
    github: '#'
  },
  {
    title: 'Portfolio Optimization Tool',
    description: 'Interactive web application for portfolio optimization using Modern Portfolio Theory, Black-Litterman model, and risk parity approaches.',
    detailedDescription: 'Full-stack web application that allows users to input their investment preferences and generates optimized portfolios. Includes Monte Carlo simulations for efficient frontier calculation.',
    tech: ['React', 'Python', 'Flask', 'Plotly', 'NumPy', 'SciPy'],
    category: 'Financial Engineering',
    status: 'In Progress',
    highlights: [
      'Multiple optimization algorithms implementation',
      'Interactive efficient frontier visualization',
      'Risk budgeting and constraint handling',
      'Real-time portfolio performance tracking'
    ],
    link: '#',
    github: '#'
  },
  {
    title: 'Options Pricing Engine',
    description: 'Comprehensive derivatives pricing library implementing Black-Scholes, Monte Carlo, and binomial tree methods for European and American options.',
    detailedDescription: 'Built a robust pricing engine that handles various option types with different numerical methods. Includes Greeks calculation and sensitivity analysis.',
    tech: ['Python', 'NumPy', 'SciPy', 'QuantLib', 'Matplotlib'],
    category: 'Quantitative Finance',
    status: 'Completed',
    highlights: [
      'Multiple pricing methodologies implementation',
      'Greeks calculation and risk management',
      'Volatility surface modeling',
      'American options pricing using binomial trees'
    ],
    link: '#',
    github: '#'
  },
  {
    title: 'Cryptocurrency Market Analysis',
    description: 'Real-time analysis platform for cryptocurrency markets using sentiment analysis, technical indicators, and machine learning predictions.',
    detailedDescription: 'Developed a comprehensive crypto analysis tool that combines traditional technical analysis with alternative data sources like social media sentiment and on-chain metrics.',
    tech: ['Python', 'BeautifulSoup', 'NLTK', 'CoinGecko API', 'Streamlit'],
    category: 'FinTech',
    status: 'In Progress',
    highlights: [
      'Social media sentiment analysis integration',
      'Real-time price prediction models',
      'Technical indicator automation',
      'Risk-adjusted return calculations'
    ],
    link: '#',
    github: '#'
  },
  {
    title: 'VaR Model Implementation',
    description: 'Value at Risk calculation system using historical simulation, parametric, and Monte Carlo methods for portfolio risk management.',
    detailedDescription: 'Implemented comprehensive VaR models for different asset classes with backtesting capabilities and stress testing scenarios.',
    tech: ['Python', 'Pandas', 'NumPy', 'SciPy', 'Matplotlib'],
    category: 'Risk Management',
    status: 'Completed',
    highlights: [
      'Multiple VaR methodologies comparison',
      'Backtesting and model validation',
      'Stress testing scenarios',
      'Expected Shortfall calculations'
    ],
    link: '#',
    github: '#'
  }
];

const Projects = () => {
  const categories = ['All', ...new Set(projects.map(p => p.category))];
  const [selectedCategory, setSelectedCategory] = React.useState('All');
  
  const filteredProjects = selectedCategory === 'All' 
    ? projects 
    : projects.filter(p => p.category === selectedCategory);

  return (
    <div style={{ padding: '2rem' }}>
      {/* Hero Section */}
      <section style={{ padding: '3rem 0', textAlign: 'center', background: 'var(--bg-secondary)', margin: '-2rem -2rem 3rem', borderRadius: '20px 20px 0 0' }}>
        <h1 className="animate-fadeInUp">Projects</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '600px', margin: '0 auto' }}>
          A showcase of my work in quantitative finance, machine learning, and financial technology.
        </p>
      </section>

      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Category Filter */}
        <section className="mb-4">
          <h2 className="mb-3">Filter by Category</h2>
          <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap', marginBottom: '2rem' }}>
            {categories.map(category => (
              <button
                key={category}
                onClick={() => setSelectedCategory(category)}
                className={`skill-item ${selectedCategory === category ? 'active' : ''}`}
                style={{
                  cursor: 'pointer',
                  border: 'none',
                  background: selectedCategory === category ? 'var(--accent-color)' : 'var(--bg-secondary)',
                  color: selectedCategory === category ? 'white' : 'var(--text-secondary)'
                }}
              >
                {category}
              </button>
            ))}
          </div>
        </section>

        {/* Projects Grid */}
        <section>
          <div className="grid-2">
            {filteredProjects.map((project, idx) => (
              <div key={idx} className="project-card animate-fadeInUp" style={{ animationDelay: `${idx * 0.1}s` }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '1rem' }}>
                  <h3>{project.title}</h3>
                  <span 
                    className="skill-item"
                    style={{ 
                      background: project.status === 'Completed' ? 'var(--success-color)' : 'var(--warning-color)',
                      color: 'white',
                      fontSize: '0.8rem'
                    }}
                  >
                    {project.status}
                  </span>
                </div>
                
                <div style={{ marginBottom: '1rem' }}>
                  <span className="skill-item" style={{ background: 'var(--accent-color)', color: 'white' }}>
                    {project.category}
                  </span>
                </div>

                <p style={{ marginBottom: '1rem' }}>{project.description}</p>
                
                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Key Highlights:</h4>
                  <ul style={{ paddingLeft: '1.2rem', fontSize: '0.9rem' }}>
                    {project.highlights.map((highlight, i) => (
                      <li key={i} style={{ marginBottom: '0.3rem' }}>{highlight}</li>
                    ))}
                  </ul>
                </div>

                <div style={{ marginBottom: '1.5rem' }}>
                  <h4 style={{ fontSize: '1rem', marginBottom: '0.5rem', color: 'var(--text-secondary)' }}>Tech Stack:</h4>
                  <div style={{ display: 'flex', gap: '0.3rem', flexWrap: 'wrap' }}>
                    {project.tech.map((tech, i) => (
                      <span key={i} className="skill-item" style={{ fontSize: '0.8rem' }}>
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>

                <div style={{ display: 'flex', gap: '1rem' }}>
                  {project.link !== '#' && (
                    <a href={project.link} target="_blank" rel="noopener noreferrer" className="cta-btn">
                      View Project
                    </a>
                  )}
                  {project.github !== '#' && (
                    <a href={project.github} target="_blank" rel="noopener noreferrer" className="cta-btn btn-secondary">
                      GitHub
                    </a>
                  )}
                  {project.link === '#' && project.github === '#' && (
                    <span style={{ color: 'var(--text-light)', fontSize: '0.9rem', fontStyle: 'italic' }}>
                      Code available upon request
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* Skills Summary */}
        <section className="mt-4">
          <div className="card" style={{ textAlign: 'center', background: 'var(--gradient-accent)', color: 'white' }}>
            <h2 style={{ color: 'white', marginBottom: '1rem' }}>Skills Demonstrated</h2>
            <p style={{ color: 'rgba(255, 255, 255, 0.9)', marginBottom: '1.5rem' }}>
              These projects showcase my expertise across the full spectrum of quantitative finance and technology.
            </p>
            <div style={{ display: 'flex', flexWrap: 'wrap', gap: '0.5rem', justifyContent: 'center' }}>
              {[
                'Quantitative Analysis', 'Machine Learning', 'Risk Management', 'Portfolio Theory',
                'Derivatives Pricing', 'Data Science', 'Python Programming', 'Financial Modeling',
                'Algorithmic Trading', 'Statistical Analysis'
              ].map((skill, i) => (
                <span 
                  key={i} 
                  style={{ 
                    background: 'rgba(255, 255, 255, 0.2)', 
                    color: 'white', 
                    padding: '0.5rem 1rem',
                    borderRadius: '8px',
                    fontSize: '0.9rem'
                  }}
                >
                  {skill}
                </span>
              ))}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Projects; 