import React from 'react';
import { Link } from 'react-router-dom';
import './SolutionsSection.css';
import techImage from '../../assets/images/buyala-facility.webp';
import hubImage from '../../assets/images/plastic-bottles.webp';
import saccoImage from '../../assets/images/sacco-office.webp';

const SolutionsSection = () => {
  const cards = [
    {
      title: 'HTT Technology',
      image: techImage,
      link: '/technology'
    },
    {
      title: 'Recycling Hub',
      image: hubImage,
      link: '/recycling'
    },
    {
      title: 'Waste Workers SACCO',
      image: saccoImage,
      link: '/sacco'
    }
  ];

  return (
    <section className="solutions-section section" id="solutions">
      <div className="container">
        <div className="text-center mb-lg reveal">
          <h2 className="section-title">Our Specialized Solutions</h2>
        </div>
        <div className="solutions-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="solution-card reveal" style={{ animationDelay: `${idx * 0.1}s` }}>
              <div className="solution-image-container">
                <img src={card.image} alt={card.title} className="solution-image" />
                <div className="solution-overlay"></div>
              </div>
              <div className="solution-content">
                <h3>{card.title}</h3>
                <Link to={card.link} className="btn btn-primary solution-btn btn-animated">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
