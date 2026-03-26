import React from 'react';
import { Link } from 'react-router-dom';
import './AboutSnapshot.css';
import mtslLogo from '../../assets/logos/mtsl-logo.png';

const AboutSnapshot = () => {
  return (
    <section className="about-snapshot section" id="about">
      <div className="container">
        <div className="about-grid">
          <div className="about-text">
            <span className="section-subtitle">Who We Are</span>
            <h2 className="section-title">Innovating for a <span className="text-primary">Cleaner Uganda</span></h2>
            <p>
              Integrated Green Energy Solutions (IGES), an affiliate of MTSL, is at the forefront of sustainable innovation in Uganda. Based at the Buyala dumpsite, we specialize in transforming organic waste into high-value energy resources using advanced Hydrothermal Technology (HTT).
            </p>
            <p>
              Our mission is to bridge the gap between waste management and renewable energy, creating a circular economy that benefits the environment and the local community.
            </p>
            <div className="affiliation-box">
              <span>Member of:</span>
              <img src={mtslLogo} alt="MTSL Affiliate" className="snapshot-logo" />
            </div>
            <Link to="/about" className="btn btn-outline">Read Our Full Story</Link>
          </div>

          <div className="about-partners">
            <h3>Strategic Partners</h3>
            <p>Collaborating with leading institutions to drive technological excellence and community impact.</p>
            <div className="partner-logos">
              <div className="partner-item">Makerere University</div>
              <div className="partner-item">UIRI</div>
              <div className="partner-item">KCCA</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
