import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import './WasteServices.css';

// Import local assets
import heroBg from '../assets/images/dumpsite-1.webp';

import jointLogoImg from '../assets/logos/waste-services-logo.jpg';
import mtslLogoImg from '../assets/logos/mtsl-logo.webp';

// Service Card Images
import residentialImg from '../assets/images/waste-collection-workers.jpg';
import commercialImg from '../assets/images/trash.webp';
import institutionalImg from '../assets/images/plastic-bottles.webp';
import transportImg from '../assets/images/waste-truck-facility.jpg';
import cleaningImg from '../assets/images/aftermeeting.webp';
import industrialImg from '../assets/images/plastic.webp';
import drainageImg from '../assets/images/kavera.webp';
import partnershipImg from '../assets/images/buyala-facility.webp';

const WasteServices = () => {
  // Service Groups
  const collectionServices = [
    {
      title: 'Regular Scheduled Residential Collection',
      image: residentialImg,
      desc: 'Dependable, scheduled collection services for households, estates, and residential neighborhoods to keep our living areas clean and healthy.'
    },
    {
      title: 'Commercial & Office Waste Removal',
      image: commercialImg,
      desc: 'Customized waste management plans, dumpsters, and collections for businesses, retail centers, and office spaces.'
    },
    {
      title: 'Segregated Waste Pickups for Institutions',
      image: institutionalImg,
      desc: 'Specialized, segregated collections for schools, universities, hospitals, and other large public or private organizations.'
    },
    {
      title: 'Environmentally Safe Transport Protocols',
      image: transportImg,
      desc: 'Secure, sealed, and reliable transportation of waste to treatment facilities, preventing leaks and secondary pollution.'
    }
  ];

  const environmentalServices = [
    {
      title: 'Institutional Cleaning & Floor Care',
      image: cleaningImg,
      desc: 'High-grade commercial cleaning, sanitation, and floor maintenance tailored for public spaces, offices, and large halls.'
    },
    {
      title: 'Industrial Site Sanitation & Sorting Support',
      image: industrialImg,
      desc: 'Comprehensive industrial waste solutions, on-site sanitation, and material segregation assistance for manufacturing plants.'
    },
    {
      title: 'Drainage Cleaning & Neighborhood Cleanups',
      image: drainageImg,
      desc: 'Active intervention in community hygiene, clearing drainage systems, and organizing local cleanups to prevent flooding and disease.'
    },
    {
      title: 'Processing Partnership with Buyala Facilities',
      image: partnershipImg,
      desc: 'Integration with Buyala Solid Waste Management Facility to ensure organic and recyclable waste is processed sustainably.'
    }
  ];

  return (
    <div className="waste-services-page">
      {/* PAGE HERO */}
      <PageHero 
        title="Waste Services"
        subtitle="Reliable, efficient, and environmentally responsible waste management and cleaning solutions."
        backgroundImage={heroBg}
        accentText="Services"
      />



      {/* JOINT VENTURE SECTION */}
      <section className="jv-section section">
        <div className="container">
          <div className="text-center mb-lg">
            <span className="section-subtitle">Synergy & Partnership</span>
            <h2 className="section-title">A Strategic <span className="text-secondary">Joint Venture</span></h2>
            <p className="section-desc max-w-md mx-auto">
              IGES Waste Services is established to combine professional expertise, efficient logistics, 
              and advanced technological solutions.
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
                Visit Deers Mart Uganda ↗
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

      {/* CORE SERVICES SECTION */}
      <section className="services-section section bg-soft">
        <div className="container">
          <div className="text-center mb-lg">
            <span className="section-subtitle">Our Operations</span>
            <h2 className="section-title">Waste Collection & <span className="text-primary">Logistics</span></h2>
            <p className="section-desc max-w-md mx-auto">
              Our core collection services are tailored to meet the needs of households, businesses, and institutions.
            </p>
          </div>

          <div className="services-grid-8 mb-lg">
            {collectionServices.map((service, index) => (
              <div key={index} className="service-card-premium premium-card reveal active">
                <div className="card-image-box">
                  <img src={service.image} alt={service.title} className="card-img" />
                  <div className="card-number">0{index + 1}</div>
                </div>
                <div className="card-content-box">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mb-lg mt-xl">
            <span className="section-subtitle">Sanitation Services</span>
            <h2 className="section-title">Cleaning & <span className="text-orange">Environmental Solutions</span></h2>
            <p className="section-desc max-w-md mx-auto">
              A range of related cleaning and environmental support systems designed to create healthier neighborhoods.
            </p>
          </div>

          <div className="services-grid-8">
            {environmentalServices.map((service, index) => (
              <div key={index} className="service-card-premium premium-card reveal active">
                <div className="card-image-box">
                  <img src={service.image} alt={service.title} className="card-img" />
                  <div className="card-number">0{index + 5}</div>
                </div>
                <div className="card-content-box">
                  <h3>{service.title}</h3>
                  <p>{service.desc}</p>
                </div>
              </div>
            ))}
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
