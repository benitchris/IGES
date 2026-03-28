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
            <h2 className="section-title">About IGES</h2>
            <p>
              Integrated Green Energy Solution (IGES), under MTSL Energies Limited, operates at the Buyala Dumpsite to transform waste into valuable resources. We focus on organic waste processing using hydrothermal technology (HTT) and partner with KCCA and Makerere University to drive sustainable and innovative waste management solutions in Uganda.
            </p>
            <Link to="/about" className="btn btn-primary" style={{ marginTop: '20px' }}>Read More</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSnapshot;
