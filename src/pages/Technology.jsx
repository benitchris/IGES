import React from 'react';
import techHero from '../assets/images/buyala-facility.JPG';

const Technology = () => {
  const steps = [
    { title: 'Waste Collection', desc: 'Waste is collected from dumpsites and communities.' },
    { title: 'Processing', desc: 'Waste is processed and separated.' },
    { title: 'HTT Treatment', desc: 'Organic material undergoes hydrothermal treatment.' },
    { title: 'Energy Output', desc: 'Energy and reusable outputs are produced.' }
  ];

  const benefits = [
    { title: 'Environmental', desc: 'Reduces pollution and landfill waste.' },
    { title: 'Economic', desc: 'Creates jobs and local opportunities.' },
    { title: 'Social', desc: 'Supports cleaner communities.' },
    { title: 'Energy', desc: 'Produces renewable energy resources.' }
  ];

  return (
    <div className="tech-page">
      <section className="internal-hero section" style={{ backgroundImage: `url(${techHero})`, backgroundSize: 'cover', backgroundPosition: 'center', color: '#fff', position: 'relative' }}>
        <div className="hero-overlay" style={{background: 'rgba(0,0,0,0.6)', position: 'absolute', top: 0, left: 0, right: 0, bottom: 0}}></div>
        <div className="container hero-content" style={{position: 'relative', zIndex: 2}}>
             <span className="section-subtitle" style={{color: 'var(--energy-orange)'}}>Future of Energy</span>
             <h1 className="section-title text-white">Hydrothermal Technology (HTT)</h1>
             <p className="section-desc" style={{color: '#eee', maxWidth: '600px'}}>
                Hydrothermal Technology is an advanced waste-processing system that converts organic waste into energy through heat and pressure treatment.
             </p>
        </div>
      </section>

      <section className="how-it-works section">
        <div className="container">
          <div className="text-center mb-lg">
            <span className="section-subtitle">Process Flow</span>
            <h2 className="section-title">How It <span className="text-primary">Works</span></h2>
          </div>
          <div className="steps-detailed" style={{maxWidth: '800px', margin: '0 auto'}}>
            {steps.map((s, i) => (
              <div key={i} className="step-row" style={{display:'flex', alignItems:'flex-start', gap:'2rem', marginBottom:'3rem'}}>
                 <div className="step-number-circle" style={{width:'40px', height:'40px', background:'var(--primary-green)', color:'#fff', borderRadius:'50%', display:'flex', alignItems:'center', justifyContent:'center', flexShrink:0, fontWeight:'bold'}}>{i+1}</div>
                 <div className="step-info">
                    <h3 style={{marginBottom:'0.5rem'}}>{s.title}</h3>
                    <p style={{color:'var(--text-muted)'}}>{s.desc}</p>
                 </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="benefits-section section bg-light">
        <div className="container">
          <div className="text-center mb-lg">
            <span className="section-subtitle">Why HTT?</span>
            <h2 className="section-title">Key <span className="text-energy">Benefits</span></h2>
          </div>
          <div className="news-grid">
            {benefits.map((b, i) => (
              <div key={i} className="premium-card">
                 <h3 style={{color: 'var(--primary-green)', marginBottom: '1rem'}}>{b.title}</h3>
                 <p style={{color:'var(--text-muted)'}}>{b.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="research-section section">
        <div className="container">
          <div className="research-box text-center">
             <h2 className="section-title">Research & <span className="text-primary">Case Studies</span></h2>
             <p className="section-desc mb-lg" style={{maxWidth:'700px', margin:'0 auto 2rem'}}>Documents and publications detailing our technological impact and research findings.</p>
             <div className="btn-group" style={{display:'flex', gap:'1rem', justifyContent:'center', flexWrap:'wrap'}}>
                <button className="btn btn-outline" disabled>Download Whitepaper (Coming Soon)</button>
                <button className="btn btn-outline" disabled>Research Summary (Coming Soon)</button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
