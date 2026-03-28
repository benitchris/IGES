import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import buyalaFacility from '../../assets/images/buyala-facility.JPG';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${buyalaFacility})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title">Transforming Waste<br />into Sustainable Energy</h1>
        <p className="hero-subtitle">
          IGES under MTSL Energies Limited working with key institutions including Kampala Capital City Authority (KCCA) and Makerere University to drive innovative
        </p>
        <div className="hero-ctas">
          <Link to="/technology" className="btn btn-primary">Explore Our Solutions</Link>
          <Link to="/contact" className="btn btn-secondary">Partner With Us</Link>
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
