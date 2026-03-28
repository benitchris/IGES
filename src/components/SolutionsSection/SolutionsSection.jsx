import React from 'react';
import { Link } from 'react-router-dom';
import './SolutionsSection.css';
import techImage from '../../assets/images/buyala-facility.JPG';
import hubImage from '../../assets/images/dumpisite-with-people-on-site.JPG';
import saccoImage from '../../assets/images/MTSL-people-talking-on-office.JPG';

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
        <h2 className="section-title text-center">Our Solutions</h2>
        <div className="solutions-grid">
          {cards.map((card, idx) => (
            <div key={idx} className="solution-card">
              <img src={card.image} alt={card.title} className="solution-image" />
              <div className="solution-content">
                <h3>{card.title}</h3>
                <Link to={card.link} className="btn btn-primary solution-btn">Learn More</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionsSection;
