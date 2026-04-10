import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section section">
      <div className="container">
        <h2 className="cta-title">Get Involved Today</h2>
        <p className="cta-desc">Join us in building a cleaner, greener future through sustainable waste management and renewable energy innovation.</p>
        <Link to="/contact" className="btn btn-secondary cta-btn">Contact Us</Link>
      </div>
    </section>
  );
};

export default CallToAction;
