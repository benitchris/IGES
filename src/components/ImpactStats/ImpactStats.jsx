import React from 'react';
import './ImpactStats.css';

const ImpactStats = () => {
  const stats = [
    { target: "10,000+", label: "Tons of Waste Processed" },
    { target: "500+", label: "Waste Workers Supported" },
    { target: "3+", label: "Circular Systems" },
    { target: "3+", label: "SACCO Support" }
  ];

  return (
    <section className="impact-stats section">
      <div className="container">
        <h2 className="section-title text-center text-white">Our Impact</h2>
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
