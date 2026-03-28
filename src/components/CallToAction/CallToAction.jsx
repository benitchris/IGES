import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section section">
      <div className="container">
        <h2 className="cta-title">Join us in transforming waste for a greener future.</h2>
        <Link to="/contact" className="btn btn-secondary cta-btn">Contact Us</Link>
      </div>
    </section>
  );
};

export default CallToAction;
