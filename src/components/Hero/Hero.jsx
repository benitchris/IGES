import React from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import buyalaFacility from '../../assets/images/buyala-facility.JPG';

const Hero = () => {
  return (
    <section className="hero" id="home" style={{ backgroundImage: `url(${buyalaFacility})` }}>
      <div className="hero-overlay"></div>
      <div className="container hero-content">
        <h1 className="hero-title reveal">
          Transforming Waste into <br />
          <span className="text-accent">Sustainable Energy</span>
        </h1>
        <p className="hero-subtitle reveal">
          IGES under MTSL Energies Limited working with key institutions including Kampala Capital City Authority (KCCA) and Makerere University to drive innovative waste management solutions in Uganda.
        </p>
        <div className="hero-ctas reveal">
          <Link to="/technology" className="btn btn-primary">Explore Our Solutions</Link>
          <Link to="/contact" className="btn btn-secondary">Partner With Us</Link>
        </div>
      </div>
      
      {/* Scroll Indicator */}
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
