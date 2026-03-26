import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import buyalaFacility from '../../assets/images/buyala-facility.JPG';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${buyalaFacility})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Turning Waste into <span className="highlight">Sustainable Energy</span> Solutions</h1>
        <p className="hero-subtitle">
          IGES – Integrated Green Energy Solutions, innovating for a cleaner, greener Uganda.
        </p>
        <div className="hero-ctas">
          <Link to="/about" className="btn btn-primary">Learn More</Link>
          <Link to="/contact" className="btn btn-outline-white">Join Our Efforts</Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
        <div className="scroll-arrows">
          <span className="arrow-down"></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
