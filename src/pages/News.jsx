import React from 'react';
import NewsSnippet from '../components/NewsSnippet/NewsSnippet';
import visitImg from '../assets/images/on-dumbiste-visit-explanation.JPG';

const News = () => {
  return (
    <div className="news-page">
       <section className="internal-hero section">
        <div className="container">
          <span className="section-subtitle">Stay Current</span>
          <h1 className="section-title">Latest <span className="text-primary">Developments</span></h1>
          <p className="section-desc">
            Follow our journey as we expand our operations and impact across Uganda, from institutional partnerships to community breakthroughs.
          </p>
        </div>
      </section>
      
      <NewsSnippet />

      <section className="archive-section section bg-card">
        <div className="container">
          <div className="text-center mb-lg">
            <h2>Media Archive</h2>
          </div>
          <div className="news-grid">
            <div className="news-card">
              <span className="news-date">Aug 20, 2025</span>
              <h3>Press Briefing at Buyala</h3>
              <p>Discussing the environmental roadmap for 2026.</p>
            </div>
            <div className="news-card">
              <span className="news-date">Jul 15, 2025</span>
              <h3>UIRI Certification Process</h3>
              <p>Updates on technology verification milestones.</p>
            </div>
            <div className="news-card">
              <span className="news-date">Jun 05, 2025</span>
              <h3>MTSL Strategic Integration</h3>
              <p>Formalizing the operational partnership.</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default News;
