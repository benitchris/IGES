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
    <section className="key-focus section" style={{ backgroundColor: '#ffffff' }}>
      <div className="container">
        <h2 className="section-title text-center" style={{ color: '#116038' }}>Our Key Focus Areas</h2>
        <div className="focus-grid">
          {areas.map((area, index) => (
            <div key={index} className="focus-card">
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
