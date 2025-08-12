import React from 'react';

const Blog = () => (
  <div className="blog-page">
    <section className="page-section">
      <div className="content-wrapper">
        <div className="section-header">
          <h1>Blog</h1>
          <p>Blog posts will appear here. To add a post, place a Markdown (.md) file in the <code>public/blog</code> folder.</p>
        </div>
        <div className="coming-soon-section">
          <div className="coming-soon-card">
            <h2>Coming Soon</h2>
            <p>I'm working on some interesting content about financial engineering, machine learning, and quantitative finance. Check back soon!</p>
          </div>
        </div>
      </div>
    </section>
  </div>
);

export default Blog; 