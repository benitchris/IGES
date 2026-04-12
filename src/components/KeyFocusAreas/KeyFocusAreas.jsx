import React from 'react';
import './KeyFocusAreas.css';

const KeyFocusAreas = () => {
  const areas = [
    { title: 'Organic Waste Processing', icon: 'fa-leaf' },
    { title: 'IGES Recycling Hub', icon: 'fa-recycle' },
    { title: 'Waste Workers Empowerment', icon: 'fa-users' },
    { title: 'Buyala Waste Workers SACCO', icon: 'fa-dollar-sign' }
  ];

  return (
    <section className="key-focus section">
      <div className="container">
        <div className="section-header text-center mb-lg">
          <span className="section-subtitle">Our Impact</span>
          <h2 className="section-title orange-strick">Our Key <span className="text-secondary">Focus Areas</span></h2>
        </div>
        <div className="focus-grid">
          {areas.map((area, index) => (
            <div key={index} className="focus-card reveal active">
              <div className="focus-icon">
                <i className={`fas ${area.icon}`}></i>
              </div>
              <p className="focus-title">{area.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default KeyFocusAreas;
