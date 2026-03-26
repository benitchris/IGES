import React from 'react';
import TechIntro from '../components/TechIntro/TechIntro';
import ImpactStats from '../components/ImpactStats/ImpactStats';
import facilityImg from '../assets/images/buyala-facility.JPG';

const Technology = () => {
  return (
    <div className="tech-page">
       <section className="internal-hero section">
        <div className="container">
          <span className="section-subtitle">How We Do It</span>
          <h1 className="section-title">Hydrothermal <span className="text-energy">Technology</span></h1>
          <p className="section-desc">
            Our proprietary HTT process is at the core of our innovation, allowing us to process complex organic waste into high-grade energy without harmful emissions.
          </p>
        </div>
      </section>
      
      <TechIntro />

      <section className="section bg-card">
        <div className="container">
          <div className="hub-grid">
            <div className="hub-image">
              <img src={facilityImg} alt="Technological Facility" />
            </div>
            <div className="hub-text">
              <h2>Key Benefits</h2>
              <ul className="hub-features">
                <li><strong>Zero Emission:</strong> Closed-loop system ensures no harmful gases escape into the atmosphere.</li>
                <li><strong>High Efficiency:</strong> Processes wet organic waste without the need for energy-intensive drying.</li>
                <li><strong>Modular Design:</strong> Can be scaled to fit the needs of any municipality or industrial partner.</li>
                <li><strong>Resource Recovery:</strong> Produces bio-char and distilled water as valuable by-products.</li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      
      <ImpactStats />
      
      <section className="section">
        <div className="container text-center">
            <span className="section-subtitle">Scalability</span>
            <h2>Future of Energy in Uganda</h2>
            <p className="section-desc" style={{margin:'2rem auto'}}>Currently operating at the Buyala facility, our technology is designed to be modular and scalable to any municipal waste stream, from rural centers to the heart of Kampala.</p>
            <button className="btn btn-primary">Request Tech Specifications</button>
        </div>
      </section>
    </div>
  );
};

export default Technology;
