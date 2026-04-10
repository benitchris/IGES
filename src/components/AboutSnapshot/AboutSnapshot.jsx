import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSnapshot.css';
import kccaImage from '../../assets/images/kcca-people-visit-at-dumpsite.JPG';

const AboutSnapshot = () => {
  return (
    <section className="about-snapshot section" id="about">
      <div className="container">
        <div className="about-grid-split">
          <div className="about-image">
            <img src={kccaImage} alt="IGES team at dumpsite" />
          </div>
          <div className="about-text-content">
            <h2 className="section-title">Who We Are</h2>
            <p>
              Integrated Green Energy Solutions (IGES) is a sustainability-driven organization dedicated to revolutionizing waste management and renewable energy generation in Uganda. Through innovative hydrothermal technology, we convert waste into usable energy while creating economic opportunities for local communities.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '20px' }}>Read More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
