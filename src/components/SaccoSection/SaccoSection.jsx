import React from 'react';
import { Link } from 'react-router-dom';
import './SaccoSection.css';
import saccoGroup from '../../assets/images/MTSL-people-talking-on-office.JPG';

const SaccoSection = () => {
  return (
    <section className="sacco-section section bg-light">
      <div className="container">
        <div className="sacco-row">
          <div className="sacco-image">
            <img src={saccoGroup} alt="SACCO community meeting" />
            <div className="sacco-stats">
              <div className="stat-pill">
                <span className="pill-num">100+</span>
                <span className="pill-label">Members</span>
              </div>
            </div>
          </div>
          <div className="sacco-content">
            <span className="section-subtitle">Financial Empowerment</span>
            <h2 className="section-title">Buyala Waste<br />Workers SACCO</h2>
            <p>
              Supporting financial empowerment for waste workers through savings, loans, and cooperative community development opportunities.
            </p>
            <Link to="/sacco" className="btn btn-primary">Join the SACCO</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SaccoSection;
