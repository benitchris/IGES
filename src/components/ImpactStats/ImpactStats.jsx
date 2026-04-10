import React from 'react';
import './ImpactStats.css';

const ImpactStats = () => {
  const stats = [
    { target: "250+", label: "Tons of Waste Processed" },
    { target: "120+", label: "Community Members Supported" },
    { target: "50+", label: "Energy Units Produced" }
  ];

  return (
    <section className="impact-stats section">
      <div className="container">
        <div className="text-center mb-lg">
          <span className="section-subtitle" style={{color: 'rgba(255,255,255,0.7)'}}>Our Impact So Far</span>
          <h2 className="section-title text-white">Making a Difference</h2>
        </div>
        <div className="stats-grid">
          {stats.map((stat, index) => (
            <div className="stat-card" key={index}>
              <h2 className="stat-number">{stat.target}</h2>
              <p className="stat-label">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ImpactStats;
