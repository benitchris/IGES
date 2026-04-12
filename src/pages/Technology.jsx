import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import './Technology.css';
import techHero from '../assets/images/buyala-facility.webp';

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
      <PageHero 
        title="Hydrothermal Technology (HTT)"
        subtitle="Transforming organic waste into high-value energy through advanced heat and pressure treatment systems."
        backgroundImage={techHero}
        accentText="Technology"
      />

      <section className="how-it-works section">
        <div className="container">
          <div className="text-center mb-lg">
            <span className="section-subtitle">Process Flow</span>
            <h2 className="section-title">How It <span className="text-primary">Works</span></h2>
          </div>
          <div className="steps-detailed">
            {steps.map((s, i) => (
              <div key={i} className="step-row reveal active">
                 <div className="step-number-circle">{i+1}</div>
                 <div className="step-info">
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
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
               <div key={i} className="premium-card reveal active">
                  <h3>{b.title}</h3>
                  <p>{b.desc}</p>
               </div>
             ))}
          </div>
        </div>
      </section>

      <section className="research-section section">
        <div className="container">
          <div className="research-box text-center">
             <h2 className="section-title">Research & <span className="text-primary">Case Studies</span></h2>
             <p className="section-desc mb-lg">Documents and publications detailing our technological impact and research findings.</p>
             <div className="btn-group">
                <button className="btn btn-outline" disabled>Download Whitepaper (Soon)</button>
                <button className="btn btn-outline" disabled>Research Summary (Soon)</button>
             </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
