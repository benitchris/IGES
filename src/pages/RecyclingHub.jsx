import React from 'react';
import hubImg from '../assets/images/buyala-facility.JPG';
import visitImg from '../assets/images/kcca-people-visit-at-dumpsite-2.JPG';

const RecyclingHub = () => {
  return (
    <div className="hub-page">
       <section className="internal-hero section">
        <div className="container">
          <span className="section-subtitle">Our Operations Center</span>
          <h1 className="section-title">The Buyala <span className="text-primary">Recycling Hub</span></h1>
          <p className="section-desc">
            Located at the heart of waste management in Uganda, our hub is where technology meets community action.
          </p>
        </div>
      </section>

      <section className="section">
         <div className="container">
            <div className="hub-grid">
                <div className="hub-image">
                    <img src={hubImg} alt="Buyala facility overview" />
                </div>
                <div className="hub-text">
                    <h2>Modern Infrastructure</h2>
                    <p>Our hub features state-of-the-art sorting lines, processing chambers, and community training facilities. It serves as the primary collection point for organic waste streams from across the region.</p>
                    <ul className="hub-features">
                      <li>Advanced Sorting Systems</li>
                      <li>HTT Processing Units</li>
                      <li>Community Training Center</li>
                      <li>Biogas Collection Points</li>
                    </ul>
                </div>
            </div>
         </div>
      </section>

      <section className="section bg-light">
        <div className="container">
           <div className="hub-grid">
              <div className="hub-text">
                  <span className="section-subtitle">External Verification</span>
                  <h2>Partner Visits</h2>
                  <p>We regularly host delegations from KCCA, UIRI, and other stakeholders to demonstrate our progress and transparency in operations.</p>
                  <p>Our goal is to set the standard for high-impact recycling hubs in Sub-Saharan Africa.</p>
              </div>
              <div className="hub-image">
                  <img src={visitImg} alt="KCCA partners visiting the hub" />
              </div>
           </div>
        </div>
      </section>
    </div>
  );
};

export default RecyclingHub;
