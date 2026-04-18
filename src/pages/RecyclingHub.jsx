import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import './RecyclingHub.css';
import hubHero from '../assets/images/dumpisite-with-people-on-site.webp';
import img1 from '../assets/images/dumpsite-1.webp';
import img2 from '../assets/images/dumpsite-2.webp';
import img3 from '../assets/images/kcca-people-visit-at-dumpsite.webp';
import newImg1 from '../assets/images/dumpsite-gallery-1.webp';
import newImg3 from '../assets/images/landing-page-hero.webp';
import officeImg from '../assets/images/MTSL-people-talking-on-office.webp';
import facilityImg from '../assets/images/buyala-facility.webp';
import visitImg from '../assets/images/kcca-people-visit-at-dumpsite-2.webp';
import explanationImg from '../assets/images/on-dumbiste-visit-explanation.webp';

const RecyclingHub = () => {
  const images = [
    { src: newImg1, alt: "Sorting operations at the hub", category: "Operations" },
    { src: img3, alt: "Stakeholders meeting and collaboration", category: "Community" },
    { src: facilityImg, alt: "Our state-of-the-art waste processing facility", category: "Facility" },
    { src: img1, alt: "Initial site sorting and organization", category: "Site" },
    { src: visitImg, alt: "Institutional visits and site inspections", category: "Collaboration" },
    { src: newImg3, alt: "The vision for sustainable energy transformation", category: "Vision" },
    { src: explanationImg, alt: "On-site knowledge sharing and technical briefing", category: "Education" },
    { src: officeImg, alt: "MTSL team strategic planning and coordination", category: "Strategy" },
    { src: img2, alt: "Resource recovery and recycling flow", category: "Process" }
  ];

  return (
    <div className="hub-page">
      <PageHero 
        title="IGES Recycling Hub"
        subtitle="Our center for waste collection, sorting, and transformation, supporting workers and the environment."
        backgroundImage={hubHero}
        accentText="Recycling"
      />

      <section className="engagement section">
        <div className="container">
           <div className="hub-grid reveal active">
              <div className="hub-text">
                 <span className="section-subtitle">Community Engagement</span>
                 <h2 className="section-title left-align">Empowering Every <span className="text-secondary">Stakeholder</span></h2>
                 <p>We work closely with various groups to ensure a holistic circular economy.</p>
                 <div className="engagement-cards">
                    <div className="premium-card">
                       <h4>Waste Workers</h4>
                       <p>Providing safe working environments and fair compensation.</p>
                    </div>
                    <div className="premium-card">
                       <h4>Buyers & Traders</h4>
                       <p>Connecting sorted materials with industrial buyers for reuse.</p>
                    </div>
                 </div>
              </div>
              <div className="hub-image">
                 <img src={img3} alt="Stakeholders meeting" />
              </div>
           </div>
        </div>
      </section>

      <section className="training section bg-light">
        <div className="container">
          <div className="text-center mb-lg">
             <span className="section-subtitle">Capacity Development</span>
             <h2 className="section-title">Training <span className="text-primary">Programs</span></h2>
          </div>
           <div className="news-grid">
              <div className="premium-card reveal active">
                 <h3>Technical Workshops</h3>
                 <p>Skill-building programs for waste sorting and equipment operation.</p>
              </div>
              <div className="premium-card reveal active">
                 <h3>Safety Programs</h3>
                 <p>Establishing health and safety standards for all on-site workers.</p>
              </div>
              <div className="premium-card reveal active">
                 <h3>Business Training</h3>
                 <p>Assisting traders in managing their operations more effectively.</p>
              </div>
           </div>
        </div>
      </section>

      <section className="gallery-section section">
        <div className="container">
          <div className="text-center mb-lg">
             <span className="section-subtitle">Visual Journey</span>
             <h2 className="section-title">Hub <span className="text-primary">Gallery</span></h2>
          </div>
           <div className="gallery-layout-grid">
              {images.map((img, i) => (
                 <div key={i} className="gallery-item reveal active">
                    <img src={img.src} alt={img.alt} />
                    <div className="gallery-overlay">
                       <span className="gallery-category">{img.category}</span>
                       <p className="gallery-caption">{img.alt}</p>
                    </div>
                 </div>
              ))}
           </div>
        </div>
      </section>

      <section className="cta-section section text-center">
        <div className="container">
           <h2 className="section-title">Ready to Join Us?</h2>
           <p className="section-desc mb-lg">Become a part of our recycling hub and contribute to a cleaner environment.</p>
           <button className="btn btn-primary">Volunteer / Join the Hub</button>
        </div>
      </section>
    </div>
  );
};

export default RecyclingHub;
