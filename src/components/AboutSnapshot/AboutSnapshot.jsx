import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSnapshot.css';
import kccaImage from '../../assets/images/kcca-people-visit-at-dumpsite.webp';

const AboutSnapshot = () => {
  return (
    <section className="about-snapshot section section-bg-glow" id="about">
      <div className="container asymmetric-container">
        <div className="about-image-side reveal">
          <div className="image-stack">
            <img src={kccaImage} alt="IGES team at dumpsite" className="img-main" />
            <div className="image-accent-box"></div>
            <div className="experience-badge">
              <span className="years">2+</span>
              <span className="text">Years of <br />Innovation</span>
            </div>
          </div>
        </div>
        
        <div className="about-content-side reveal">
          <span className="section-subtitle">Who We Are</span>
          <h2 className="section-title">Revolutionizing Waste Management in Uganda</h2>
          <p className="lead">
            IGES is at the forefront of the circular economy, transforming environmental challenges into sustainable energy resources.
          </p>
          <p>
            Working closely with MSTL Energies, KCCA, and Makerere University, we deploy advanced technology to process organic waste efficiently while supporting local communities and improving livelihoods.
          </p>
          <div className="btn-group" style={{ marginTop: '2rem' }}>
            <Link to="/about" className="btn btn-primary btn-animated">Learn Our Story</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
