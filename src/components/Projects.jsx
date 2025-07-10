import React, { useState } from 'react';

const Projects = () => {
  const [activeFilter, setActiveFilter] = useState('all');

  const projects = [
    {
      id: 1,
      title: "SEC Filings RAG System",
      category: "fintech",
      description: "Developed a Retrieval-Augmented Generation (RAG) system for analyzing SEC filings using advanced NLP techniques and large language models.",
      highlights: [
        "Implemented RAG architecture for document analysis",
        "Natural language processing for financial documents",
        "Automated extraction of key financial metrics",
        "Enhanced regulatory compliance analysis"
      ],
      techStack: ["Python", "LangChain", "FAISS", "OpenAI API", "Pandas", "BeautifulSoup"],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 2,
      title: "Deep Q-Learning Trading Agent",
      category: "trading",
      description: "Built an autonomous trading agent using Deep Q-Learning for algorithmic trading strategies in financial markets.",
      highlights: [
        "Reinforcement learning for trading decisions",
        "Real-time market data integration",
        "Risk management and position sizing",
        "Backtesting and performance evaluation"
      ],
      techStack: ["Python", "TensorFlow", "Keras", "OpenAI Gym", "yfinance", "NumPy"],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 3,
      title: "Road Quality Index Prediction",
      category: "ml",
      description: "Developed a machine learning model to predict road quality indices using sensor data and computer vision techniques.",
      highlights: [
        "Computer vision for road condition analysis",
        "Sensor data integration and processing",
        "Predictive modeling for infrastructure maintenance",
        "Real-time quality assessment system"
      ],
      techStack: ["Python", "OpenCV", "Scikit-learn", "TensorFlow", "Pandas", "Matplotlib"],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 4,
      title: "ASL Detection System",
      category: "ml",
      description: "Created an American Sign Language detection system using computer vision and deep learning for real-time gesture recognition.",
      highlights: [
        "Real-time hand gesture recognition",
        "Deep learning for sign language classification",
        "Computer vision preprocessing pipeline",
        "Accessible communication interface"
      ],
      techStack: ["Python", "OpenCV", "TensorFlow", "MediaPipe", "NumPy", "Keras"],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 5,
      title: "Portfolio Optimization Engine",
      category: "finance",
      description: "Advanced portfolio optimization tool using Modern Portfolio Theory and machine learning techniques for risk-adjusted returns.",
      highlights: [
        "Mean-variance optimization implementation",
        "Risk parity and factor-based strategies",
        "Monte Carlo simulation for scenario analysis",
        "Real-time portfolio rebalancing recommendations"
      ],
      techStack: ["Python", "SciPy", "NumPy", "Pandas", "Matplotlib", "yfinance"],
      status: "In Development",
      github: "#",
      demo: "#"
    },
    {
      id: 6,
      title: "Options Pricing Engine",
      category: "finance",
      description: "Comprehensive options pricing platform implementing Black-Scholes, Monte Carlo, and binomial tree models.",
      highlights: [
        "Multiple pricing model implementations",
        "Greeks calculation and risk analysis",
        "Volatility surface modeling",
        "Real-time options chain analysis"
      ],
      techStack: ["Python", "QuantLib", "NumPy", "SciPy", "Matplotlib", "Streamlit"],
      status: "In Development",
      github: "#",
      demo: "#"
    },
    {
      id: 7,
      title: "VaR Model Implementation",
      category: "risk",
      description: "Value at Risk (VaR) modeling system with multiple methodologies for comprehensive risk assessment.",
      highlights: [
        "Historical simulation VaR",
        "Parametric and Monte Carlo VaR",
        "Expected Shortfall calculation",
        "Stress testing and scenario analysis"
      ],
      techStack: ["Python", "Pandas", "NumPy", "SciPy", "Matplotlib", "Risk Analytics"],
      status: "Completed",
      github: "#",
      demo: "#"
    },
    {
      id: 8,
      title: "Crypto Market Analysis Dashboard",
      category: "fintech",
      description: "Real-time cryptocurrency market analysis platform with advanced charting and sentiment analysis.",
      highlights: [
        "Real-time market data visualization",
        "Technical indicator implementation",
        "Sentiment analysis from social media",
        "Automated alert system"
      ],
      techStack: ["Python", "Dash", "Plotly", "CoinGecko API", "NLTK", "Redis"],
      status: "In Development",
      github: "#",
      demo: "#"
    }
  ];

  const categories = [
    { id: 'all', name: 'All Projects' },
    { id: 'finance', name: 'Finance' },
    { id: 'trading', name: 'Trading' },
    { id: 'risk', name: 'Risk Management' },
    { id: 'ml', name: 'Machine Learning' },
    { id: 'fintech', name: 'FinTech' }
  ];

  const filteredProjects = activeFilter === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeFilter);

  const skillsFromProjects = [...new Set(projects.flatMap(project => project.techStack))];

  return (
    <div className="projects">
      <div className="container">
        <div className="projects-header">
          <h1>My Projects</h1>
          <p>A collection of my work in financial engineering, machine learning, and quantitative analysis</p>
        </div>

        <div className="projects-filters">
          {categories.map(category => (
            <button
              key={category.id}
              className={`filter-btn ${activeFilter === category.id ? 'active' : ''}`}
              onClick={() => setActiveFilter(category.id)}
            >
              {category.name}
            </button>
          ))}
        </div>

        <div className="projects-grid">
          {filteredProjects.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
                <span className={`status ${project.status.toLowerCase().replace(' ', '-')}`}>
                  {project.status}
                </span>
              </div>
              
              <p className="project-description">{project.description}</p>
              
              <div className="project-highlights">
                <h4>Key Features:</h4>
                <ul>
                  {project.highlights.map((highlight, index) => (
                    <li key={index}>{highlight}</li>
                  ))}
                </ul>
              </div>
              
              <div className="project-tech">
                <h4>Tech Stack:</h4>
                <div className="tech-tags">
                  {project.techStack.map((tech, index) => (
                    <span key={index} className="tech-tag">{tech}</span>
                  ))}
                </div>
              </div>
              
              <div className="project-links">
                <a href={project.github} className="btn-secondary">
                  <span>📂</span> Code
                </a>
                <a href={project.demo} className="btn-primary">
                  <span>🚀</span> Demo
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="skills-summary">
          <h2>Technologies & Tools</h2>
          <div className="skills-cloud">
            {skillsFromProjects.map((skill, index) => (
              <span key={index} className="skill-bubble">{skill}</span>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects; 