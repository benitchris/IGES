import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './Hero.css';
import buyalaFacility from '../../assets/images/buyala-facility.webp';

const Hero = () => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <section 
      className="hero" 
      id="home" 
      style={{ 
        backgroundPosition: `center ${scrollY * 0.5}px`,
        backgroundImage: `url(${buyalaFacility})` 
      }}
    >
      <div className="hero-overlay"></div>
      
      {/* Decorative Orbs */}
      <div className="decorative-orb orb-1"></div>
      <div className="decorative-orb orb-2"></div>
      
      <div className="container hero-content">
        <h1 className="hero-title reveal">
          Transforming Waste into <br />
          <span className="text-accent">Sustainable Energy</span>
        </h1>
        <p className="hero-subtitle reveal">
          IGES under MTSL Energies Limited working with key institutions including Kampala Capital City Authority (KCCA) and Makerere University to drive innovative waste management solutions in Uganda.
        </p>
        <div className="hero-ctas reveal">
          <Link to="/technology" className="btn btn-primary btn-animated">Explore Our Solutions</Link>
          <Link to="/contact" className="btn btn-secondary btn-animated">Partner With Us</Link>
        </div>
      </div>
      
      <div className="scroll-indicator">
        <div className="mouse">
          <div className="wheel"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
