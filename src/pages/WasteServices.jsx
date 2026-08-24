import React from 'react';
import './WasteServices.css';

// Import local assets
import bannerImg from '../assets/images/waste-services-banner.jpg';
import collectionImg from '../assets/images/waste-collection-workers.jpg';
import facilityImg from '../assets/images/waste-truck-facility.jpg';
import jointLogoImg from '../assets/logos/waste-services-logo.jpg';
import mtslLogoImg from '../assets/logos/mtsl-logo.webp';

const WasteServices = () => {
  return (
    <div className="waste-services-page">
      {/* HERO SECTION */}
      <section className="waste-hero section-bg-glow">
        <div className="container">
          <div className="hero-grid">
            <div className="hero-text-content reveal active">
              <span className="badge-tag">Joint Venture Initiative</span>
              <h1 className="main-title">
                Waste <span className="highlight-text">Services</span>
              </h1>
              <p className="hero-lead">
                Reliable, efficient, and environmentally responsible waste management and cleaning solutions 
                tailored to households, businesses, and institutions.
              </p>
              
              <div className="quick-contacts">
                <a href="mailto:info@iws.iges.ug" className="contact-pill">
                  <span className="icon">✉</span> info@iws.iges.ug
                </a>
                <a href="tel:+256770477720" className="contact-pill">
                  <span className="icon">📞</span> +256 770 477 720
                </a>
                <a href="tel:+256750000000" className="contact-pill">
                  <span className="icon">📞</span> +256 750 000 000
                </a>
              </div>
            </div>
            
            <div className="hero-banner-container reveal active">
              <div className="banner-wrapper">
                <img 
                  src={bannerImg} 
                  alt="IGES Waste Services Banner" 
                  className="banner-image"
                />
                <div className="banner-overlay-glow"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* JOINT VENTURE SECTION */}
      <section className="jv-section section">
        <div className="container">
          <div className="text-center mb-lg">
            <span className="section-subtitle">Synergy & Partnership</span>
            <h2 className="section-title">A Strategic <span className="text-secondary">Joint Venture</span></h2>
            <p className="section-desc max-w-md mx-auto">
              IGES Waste Services is built on a strong partnership, combining professional expertise, 
              efficient logistics, and advanced technological solutions.
            </p>
          </div>

          <div className="jv-flow-container">
            {/* MTSL Card */}
            <div className="jv-partner-card premium-card reveal active">
              <div className="partner-logo-box">
                <img src={mtslLogoImg} alt="MTSL Logo" className="partner-logo" />
              </div>
              <h3>MTSL</h3>
              <p className="partner-role">Technology & Engineering Partner</p>
              <p className="partner-text">
                MTSL provides core technical expertise, research resources, and strategic engineering support 
                for processing systems and circular economy scaling.
              </p>
            </div>

            {/* Connection Node */}
            <div className="jv-connection-node">
              <div className="node-circle">
                <span className="node-text">JV</span>
                <div className="node-pulse"></div>
              </div>
              <div className="connection-line"></div>
            </div>

            {/* Deers Mart Limited Card */}
            <div className="jv-partner-card premium-card reveal active">
              <div className="partner-logo-box deersmart-box">
                <div className="deersmart-logo-placeholder">
                  <span className="deer-icon">🦌</span>
                  <span className="logo-txt">Deers Mart</span>
                </div>
              </div>
              <h3>Deers Mart Limited</h3>
              <p className="partner-role">Logistics & Operations Partner</p>
              <p className="partner-text">
                Deers Mart Limited spearheads community outreach, operational fleet management, and dependable 
                logistics networks for waste collection systems.
              </p>
              <a 
                href="https://deersmartuganda.com/" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="partner-link-btn btn-outline btn"
              >
                Visit Deers Mart uganda ↗
              </a>
            </div>
          </div>

          {/* Unified Result Card */}
          <div className="unified-card glass-card reveal active">
            <div className="unified-logo-wrap">
              <img src={jointLogoImg} alt="IGES Waste Services Logo" className="joint-logo" />
            </div>
            <div className="unified-text">
              <h3>IGES Waste Services</h3>
              <p>
                Established as a joint venture between <strong>MTSL</strong> and <strong>Deers Mart Limited</strong>, 
                we combine advanced waste-to-energy capabilities with local operations to deliver cleaner 
                and healthier environments. We blend expert knowledge with dependable logistics to raise 
                environmental standards across communities.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CORE SERVICES */}
      <section className="services-section section bg-soft">
        <div className="container">
          <div className="text-center mb-lg">
            <span className="section-subtitle">What We Do</span>
            <h2 className="section-title">Our Core <span className="text-orange">Services</span></h2>
          </div>

          <div className="services-grid">
            {/* Service 1 */}
            <div className="service-showcase-card premium-card reveal active">
              <div className="service-image-box">
                <img 
                  src={collectionImg} 
                  alt="Waste collection workers in action" 
                  className="service-img" 
                />
              </div>
              <div className="service-content">
                <span className="service-num">01</span>
                <h3>Waste Collection & Transportation</h3>
                <p>
                  We provide structured waste collection schedules tailored to meet the dynamic needs of households, 
                  businesses, institutions, and community zones. Equipped with modern compactor trucks, 
                  our professional teams ensure timely, hygienic, and reliable waste retrieval.
                </p>
                <ul className="service-features">
                  <li>Regular scheduled residential collection</li>
                  <li>Commercial & office waste removal</li>
                  <li>Segregated waste pickups for institutions</li>
                  <li>Environmentally safe transport protocols</li>
                </ul>
              </div>
            </div>

            {/* Service 2 */}
            <div className="service-showcase-card premium-card reveal active">
              <div className="service-image-box">
                <img 
                  src={facilityImg} 
                  alt="IGES Waste Service truck at Buyala Facility" 
                  className="service-img" 
                />
              </div>
              <div className="service-content">
                <span className="service-num">02</span>
                <h3>Cleaning & Environmental Services</h3>
                <p>
                  Beyond collection, we deliver a range of environmental management and sanitization 
                  solutions. From post-event cleaning to municipal sanitization, we keep public spaces 
                  clean and hazard-free, supported by our operations based at the Buyala Solid Waste Management Facility.
                </p>
                <ul className="service-features">
                  <li>Institutional cleaning & floor care</li>
                  <li>Industrial site sanitation & sorting support</li>
                  <li>Drainage cleaning and neighborhood cleanups</li>
                  <li>Processing partnership with Buyala facilities</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VISION & VALUE STATEMENT */}
      <section className="mission-banner section text-center">
        <div className="container">
          <div className="banner-content-wrap reveal active">
            <div className="quote-mark">“</div>
            <h2 className="vision-quote">
              Our goal is simple: to make waste management cleaner, safer, more efficient, and sustainable for everyone.
            </h2>
            <div className="divider mx-auto"></div>
            
            <div className="value-pillars">
              <div className="pillar">
                <span className="pillar-icon">🌱</span>
                <h4>Eco Responsible</h4>
                <p>Prioritizing sorting, recycling, and sustainable disposal.</p>
              </div>
              <div className="pillar">
                <span className="pillar-icon">⏰</span>
                <h4>Dependable & Timely</h4>
                <p>Committed to strict service timelines and professional support.</p>
              </div>
              <div className="pillar">
                <span className="pillar-icon">🤝</span>
                <h4>Community First</h4>
                <p>Empowering local workers and promoting public health.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default WasteServices;
