import React from 'react';
import saccoImg from '../assets/images/MTSL-people-talking-on-office.JPG';
import bwwLogo from '../assets/logos/BWW LOGO DRAFT11122025.jpg';

const Sacco = () => {
  return (
    <div className="sacco-page">
       <section className="internal-hero section">
        <div className="container">
          <span className="section-subtitle">Empowering Our People</span>
          <h1 className="section-title">Buyala Waste Workers <span className="text-gold">SACCO</span></h1>
          <p className="section-desc">
            We believe that financial inclusion is key to sustainable and dignified waste management.
          </p>
        </div>
      </section>

      <section className="section">
         <div className="container">
            <div className="hub-grid">
                <div className="hub-text">
                    <div className="sacco-title-row">
                      <img src={bwwLogo} alt="BWW Logo" className="sacco-logo" style={{height:'120px', width:'120px'}} />
                      <h2>Strength in Unity</h2>
                    </div>
                    <p>The SACCO empowers its members through collective savings, insurance coverage, and access to low-interest loans, enabling them to build a better future for their families.</p>
                    <div className="premium-card">
                       <h3 style={{color:'var(--energy-gold)'}}>Member Benefits</h3>
                       <ul className="hub-features" style={{marginTop:'1rem'}}>
                          <li>Savings & Credit Facilities</li>
                          <li>Financial Literacy Programs</li>
                          <li>Health & Safety Equipment</li>
                          <li>Emergency Support Funds</li>
                       </ul>
                    </div>
                </div>
                <div className="hub-image">
                    <img src={saccoImg} alt="SACCO community meeting" />
                </div>
            </div>
         </div>
      </section>

      <section className="cta-section section text-center">
         <div className="container">
            <h2>Ready to Join?</h2>
            <p className="section-desc" style={{margin:'2rem auto'}}>Become a part of a growing community dedicated to financial independence and sustainable waste management.</p>
            <button className="btn btn-secondary">Apply for Membership</button>
         </div>
      </section>
    </div>
  );
};

export default Sacco;
