import React from 'react';
import groupPhoto from '../assets/images/MTSL-people-talking-on-office.JPG';
import kccaLogo from '../assets/logos/kcca-logo.png';
import makerereLogo from '../assets/logos/makerere-logo.svg';
import mtslLogo from '../assets/logos/mtsl-logo.png';

const About = () => {
  const milestones = [
    { year: 'Founded', title: 'Establishment of IGES initiative', desc: 'Starting with a vision to solve Uganda\'s waste challenges.' },
    { year: 'Partnership', title: 'Collaboration with Makerere University', desc: 'Laying the foundation for hydrothermal technological research.' },
    { year: 'Pilot Launch', title: 'HTT Implementation Begins', desc: 'First batch of organic waste converted into energy resources.' },
    { year: 'Expansion', title: 'Recycling Hub Operational', desc: 'Opening the Buyala hub to support hundreds of waste workers.' }
  ];

  const team = [
    { name: 'Dr. Jane Doe', pos: 'Executive Director', bio: 'Expert in environmental policy and community development.' },
    { name: 'Eng. John Smith', pos: 'Technical Lead', bio: 'Spearheading HTT research and implementation.' },
    { name: 'Sarah Namulondo', pos: 'Community Manager', bio: 'Dedicated to empowering the Buyala SACCO members.' }
  ];

  return (
    <div className="about-page">
      <section className="internal-hero section">
        <div className="container">
          <span className="section-subtitle">Our Journey</span>
          <h1 className="section-title">Rooted in <span className="text-primary">Sustainability</span> and Community</h1>
          <p className="section-desc">
            Integrated Green Energy Solutions (IGES) is a sustainability-driven organization dedicated to revolutionizing waste management and renewable energy generation in Uganda.
          </p>
        </div>
      </section>

      <section className="mission-vision section bg-light">
        <div className="container">
          <div className="stats-grid">
            <div className="premium-card">
              <div className="stat-icon">🎯</div>
              <h3 style={{color: 'var(--primary-green)', marginBottom: '1rem'}}>Our Mission</h3>
              <p style={{fontSize: '1.1rem'}}>To create sustainable waste-to-energy solutions that improve environmental health and empower communities.</p>
            </div>
            <div className="premium-card">
              <div className="stat-icon">👁️</div>
              <h3 style={{color: 'var(--energy-orange)', marginBottom: '1rem'}}>Our Vision</h3>
              <p style={{fontSize: '1.1rem'}}>To become Africa’s leading innovator in green energy and waste transformation.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="story-timeline section">
        <div className="container">
          <div className="text-center mb-lg">
            <span className="section-subtitle">Our Story</span>
            <h2 className="section-title">Milestones that <span className="text-energy">Define Us</span></h2>
          </div>
          <div className="timeline-container">
            {milestones.map((m, i) => (
              <div key={i} className="timeline-item">
                <div className="timeline-year">{m.year}</div>
                <div className="timeline-content">
                  <h4>{m.title}</h4>
                  <p>{m.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="team-section section bg-light">
        <div className="container">
          <div className="text-center mb-lg">
            <span className="section-subtitle">People Behind IGES</span>
            <h2 className="section-title">Meet Our <span className="text-primary">Team</span></h2>
          </div>
          <div className="news-grid">
            {team.map((member, i) => (
              <div key={i} className="premium-card text-center">
                <div className="team-avatar">
                   <div className="avatar-placeholder">{member.name[0]}</div>
                </div>
                <h3>{member.name}</h3>
                <h4 style={{color: 'var(--energy-orange)', marginBottom: '1rem'}}>{member.pos}</h4>
                <p style={{fontSize: '0.9rem', color: 'var(--text-muted)'}}>{member.bio}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="partners-section section text-center">
        <div className="container">
          <h2 className="section-title mb-lg">Our Strategic <span className="text-primary">Partners</span></h2>
          <div className="footer-partners" style={{justifyContent: 'center', gap: '4rem'}}>
            <img src={makerereLogo} alt="Makerere University" style={{height: '80px'}} />
            <img src={kccaLogo} alt="KCCA" style={{height: '80px'}} />
            <img src={mtslLogo} alt="MTSL" style={{height: '80px'}} />
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
