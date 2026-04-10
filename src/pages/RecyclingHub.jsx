import React from 'react';
import hubHero from '../assets/images/dumpisite-with-people-on-site.JPG';
import img1 from '../assets/images/dumpsite-1.JPG';
import img2 from '../assets/images/dumpsite-2.JPG';
import img3 from '../assets/images/kcca-people-visit-at-dumpsite.JPG';

const RecyclingHub = () => {
  const images = [img1, img2, img3];

  return (
    <div className="hub-page">
      <section className="internal-hero section" style={{ backgroundImage: `url(${hubHero})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', position: 'relative' }}>
        <div className="hero-overlay" style={{background: 'rgba(0,0,0,0.6)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}></div>
        <div className="container hero-content" style={{position: 'relative', zIndex: 2}}>
             <span className="section-subtitle" style={{color: 'var(--energy-orange)'}}>Our Center of Operations</span>
             <h1 className="section-title text-white">IGES Recycling Hub</h1>
             <p className="section-desc" style={{color: '#eee', maxWidth: '600px'}}>
                Our recycling hub serves as a center for waste collection, sorting, and transformation, while supporting waste workers, traders, and environmental initiatives.
             </p>
        </div>
      </section>

      <section className="engagement section">
        <div className="container">
          <div className="hub-grid">
             <div className="hub-text">
                <span className="section-subtitle">Community Engagement</span>
                <h2>Empowering Every <span className="text-primary">Stakeholder</span></h2>
                <p>We work closely with various groups to ensure a holistic circular economy.</p>
                <div className="engagement-cards" style={{marginTop:'2rem'}}>
                   <div className="premium-card mb-sm">
                      <h4>Waste Workers</h4>
                      <p>Providing safe working environments and fair compensation.</p>
                   </div>
                   <div className="premium-card mb-sm">
                      <h4>Buyers & Traders</h4>
                      <p>Connecting sorted materials with industrial buyers for reuse.</p>
                   </div>
                </div>
             </div>
             <div className="hub-image">
                <img src={img3} alt="Stakeholders meeting" style={{borderRadius:'40px', width:'100%'}} />
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
             <div className="premium-card">
                <h3>Technical Workshops</h3>
                <p>Skill-building programs for waste sorting and equipment operation.</p>
             </div>
             <div className="premium-card">
                <h3>Safety Programs</h3>
                <p>Establishing health and safety standards for all on-site workers.</p>
             </div>
             <div className="premium-card">
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
          <div className="gallery-grid" style={{display:'grid', gridTemplateColumns:'repeat(auto-fit, minmax(300px, 1fr))', gap:'1.5rem'}}>
             {images.map((img, i) => (
                <div key={i} className="gallery-item" style={{overflow:'hidden', borderRadius:'20px'}}>
                   <img src={img} alt={`Hub Gallery ${i+1}`} style={{width:'100%', height:'250px', objectFit:'cover', transition:'var(--transition)'}} onMouseOver={e=>e.currentTarget.style.transform='scale(1.05)'} onMouseOut={e=>e.currentTarget.style.transform='scale(1)'} />
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
