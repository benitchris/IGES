import React from 'react';
import { Link } from 'react-router-dom';
import './CallToAction.css';

const CallToAction = () => {
  return (
    <section className="cta-section section">
      <div className="container">
        <h2 className="cta-title">Join us in transforming waste for a greener future.</h2>
        <p className="cta-desc">Working together to drive innovative waste management and sustainable energy solutions in Uganda.</p>
        <Link to="/contact" className="btn btn-secondary cta-btn">Contact Us</Link>
      </div>
    </section>
  );
};

export default CallToAction;
