import React from 'react';
import PageHero from '../components/PageHero/PageHero';
import './Sacco.css';
import saccoHero from '../assets/images/MTSL-people-talking-on-office.webp';

const Sacco = () => {
  const steps = [
    { title: 'Registration', desc: 'Securely register as a verified IGES waste worker member.' },
    { title: 'Save & Transact', desc: 'Contribute regular savings and conduct small transactions.' },
    { title: 'Access Funds', desc: 'Access low-interest loans and emergency support funds.' }
  ];

  const testimonials = [
    { name: 'Joseph K.', text: 'The SACCO helped me buy protective gear and save for my children\'s school fees.' },
    { name: 'Mary A.', text: 'I was able to get a small loan to start a side trading business at the hub.' }
  ];

  return (
    <div className="sacco-page">
      <PageHero 
        title="Financial Empowerment"
        subtitle="Establishing a secure financial foundation for the backbone of our recycling initiatives."
        backgroundImage={saccoHero}
        accentText="Financial"
      />

      <section className="about-sacco section bg-light">
        <div className="container">
            <div className="hub-grid reveal active">
               <div className="hub-image">
                  <img src={saccoHero} alt="SACCO community" />
               </div>
               <div className="hub-text">
                  <h2 className="section-title left-align">Our Purpose</h2>
                  <p>The Buyala Waste Workers SACCO was founded to solve the financial exclusion faced by many in the waste management sector. By pooling resources, we provide a safety net and growth opportunities for our members.</p>
               </div>
            </div>
        </div>
      </section>

      <section className="how-it-works section">
        <div className="container">
          <div className="text-center mb-lg">
             <span className="section-subtitle">Membership Flow</span>
             <h2 className="section-title">How It <span className="text-primary">Works</span></h2>
          </div>
           <div className="news-grid">
              {steps.map((s, i) => (
                 <div key={i} className="premium-card text-center reveal active">
                    <div className="step-badge">Step {i+1}</div>
                    <h3>{s.title}</h3>
                    <p>{s.desc}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      <section className="transparency section bg-light">
        <div className="container">
           <div className="text-center mb-lg">
              <span className="section-subtitle">Trust & Reports</span>
              <h2 className="section-title">Financial <span className="text-primary">Transparency</span></h2>
           </div>
            <div className="stats-grid">
               <div className="premium-card reveal active">
                  <h4>Savings Growth</h4>
                  <div className="progress-bar">
                     <div className="progress-fill green" style={{width:'75%'}}></div>
                  </div>
                  <p className="stat-desc">75% increase in annual savings pool</p>
               </div>
               <div className="premium-card reveal active">
                  <h4>Loan Usage</h4>
                  <div className="progress-bar">
                     <div className="progress-fill orange" style={{width:'60%'}}></div>
                  </div>
                  <p className="stat-desc">60% of loans used for small business expansion</p>
               </div>
            </div>
        </div>
      </section>

      <section className="testimonials section">
        <div className="container">
          <div className="text-center mb-lg">
             <span className="section-subtitle">Success Stories</span>
             <h2 className="section-title">Member <span className="text-primary">Testimonials</span></h2>
          </div>
           <div className="news-grid">
              {testimonials.map((t, i) => (
                 <div key={i} className="premium-card testimonial-card reveal active">
                    <p className="quote">"{t.text}"</p>
                    <p className="author">— {t.name}</p>
                 </div>
              ))}
           </div>
        </div>
      </section>

      <section className="cta-section section text-center">
        <div className="container">
           <h2 className="section-title">Empower Your Future</h2>
           <button className="btn btn-primary">Become a Member</button>
        </div>
      </section>
    </div>
  );
};

export default Sacco;
