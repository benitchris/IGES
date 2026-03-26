import React from 'react';
import { Link } from 'react-router-dom';
import './SaccoSnippet.css';
import saccoImg from '../../assets/images/MTSL-people-talking-on-office.JPG';
import bwwLogo from '../../assets/logos/BWW LOGO DRAFT11122025.jpg';

const SaccoSnippet = () => {
  return (
    <section className="sacco-snippet section" id="sacco">
      <div className="container">
        <div className="sacco-grid">
          <div className="sacco-text">
            <div className="sacco-title-row">
              <img src={bwwLogo} alt="BWW SACCO Logo" className="sacco-logo" />
              <h2 className="section-title">Buyala Waste Workers <span className="text-secondary">SACCO</span></h2>
            </div>
            <p>
              The Buyala Waste Workers SACCO is a community-driven initiative supported by IGES. We empower local waste workers through financial literacy, savings schemes, and collective bargaining power.
            </p>
            <p>
              By formalizing the waste collection sector, we provide dignity, security, and growth opportunities for our most valuable stakeholders.
            </p>
            <div className="sacco-actions">
              <Link to="/sacco" className="btn btn-secondary">Learn More</Link>
              <Link to="/sacco" className="btn btn-link">Join The SACCO ➜</Link>
            </div>
          </div>
          <div className="sacco-image">
            <img src={saccoImg} alt="MTSL and SACCO members talking" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaccoSnippet;
