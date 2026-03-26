import React from 'react';
import groupPhoto from '../assets/images/MTSL-people-talking-on-office.JPG';
import mtslLogo from '../assets/logos/mtsl-logo.png';

const About = () => {
  const values = [
    { title: "Innovation", desc: "Pushing the boundaries of waste-to-energy technology.", icon: "💡" },
    { title: "Community", desc: "Empowering local waste workers through inclusion.", icon: "🤝" },
    { title: "Sustainability", desc: "Designing systems that nourish the earth.", icon: "🌍" },
    { title: "Integrity", desc: "Transparent operations and verified impact.", icon: "🛡️" }
  ];

  return (
    <div className="about-page">
      <section className="internal-hero section">
        <div className="container">
          <span className="section-subtitle">Our Journey</span>
          <h1 className="section-title">Rooted in <span className="text-primary">Sustainability</span> and Community</h1>
          <p className="section-desc">
            Integrated Green Energy Solutions (IGES) is a visionary environmental technology company dedicated to solving Uganda's waste challenges while creating clean energy.
          </p>
        </div>
      </section>

      <section className="mission-vision section">
        <div className="container">
          <div className="stats-grid">
            <div className="premium-card">
              <div className="stat-icon">🎯</div>
              <h3 style={{color: 'var(--primary-green)', marginBottom: '1rem'}}>Our Mission</h3>
              <p style={{fontSize: '1.2rem'}}>To bridge the gap between waste management and renewable energy through innovative technology and community empowerment.</p>
            </div>
            <div className="premium-card">
              <div className="stat-icon">👁️</div>
              <h3 style={{color: 'var(--energy-gold)', marginBottom: '1rem'}}>Our Vision</h3>
              <p style={{fontSize: '1.2rem'}}>A cleaner, greener Uganda where every ton of waste is transformed into a building block for sustainable development.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="core-values section bg-light">
        <div className="container">
          <div className="text-center mb-lg">
            <span className="section-subtitle">Our Principles</span>
            <h2 className="section-title">Core <span className="text-energy">Values</span></h2>
          </div>
          <div className="news-grid">
            {values.map((v, i) => (
              <div key={i} className="premium-card text-center" style={{padding: '3rem 2rem'}}>
                <div className="stat-icon" style={{fontSize: '3rem', marginBottom: '1.5rem'}}>{v.icon}</div>
                <h3 style={{marginBottom: '1rem'}}>{v.title}</h3>
                <p style={{color: 'var(--text-muted)'}}>{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-content section">
        <div className="container">
          <div className="hub-grid">
             <div className="hub-text">
                <span className="section-subtitle">MTSL Affiliation</span>
                <h2>Stronger Together</h2>
                <p>As an affiliate of MTSL, IGES leverages decades of industrial expertise and infrastructure management. This partnership allows us to scale our environmental solutions with the reliability of established engineering practices.</p>
                <div className="affiliation-box" style={{ background: 'rgba(255,255,255,0.02)', border: '1px solid var(--border-color)', borderRadius: '24px', padding: '2rem' }}>
                  <img src={mtslLogo} alt="MTSL Logo" className="snapshot-logo" style={{height: '60px'}} />
                  <div style={{marginLeft: '2rem'}}>
                    <h4 style={{margin: 0, color: 'var(--energy-gold)'}}>Strategic Partner</h4>
                    <p style={{margin: 0, fontSize: '0.9rem', color: 'var(--text-muted)'}}>Industrial Engineering & Infrastructure</p>
                  </div>
                </div>
             </div>
             <div className="hub-image">
                <img src={groupPhoto} alt="MTSL Team discussed sustainability" style={{borderRadius: '40px', border: '1px solid var(--border-color)'}} />
             </div>
          </div>
        </div>
      </section>

      <section className="cta-section section text-center">
         <div className="container" style={{maxWidth: '800px'}}>
            <h2>Building the Future</h2>
            <p className="section-desc" style={{margin:'2rem auto'}}>From our hub at Buyala to operations across Uganda, we are committed to long-term environmental restoration.</p>
            <button className="btn btn-primary">Join the Movement</button>
         </div>
      </section>
    </div>
  );
};

export default About;
