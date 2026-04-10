import React from 'react';
import { Link } from 'react-router-dom';
import './HubHighlight.css';
import hubImage from '../../assets/images/dumpisite-with-people-on-site.JPG';

const HubHighlight = () => {
  return (
    <section className="hub-highlight section">
      <div className="container">
        <div className="hub-grid">
          <div className="hub-text">
            <span className="section-subtitle">Recycling Hub Highlight</span>
            <h2 className="section-title">Empowering Communities Through Recycling</h2>
            <p>
              Our recycling hub serves as a center for waste collection, sorting, and transformation, while supporting waste workers, traders, and environmental initiatives.
            </p>
            <Link to="/recycling" className="btn btn-primary">Learn More About Our Hub</Link>
          </div>
          <div className="hub-image">
            <img src={hubImage} alt="Community Recycling Activities" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default HubHighlight;
