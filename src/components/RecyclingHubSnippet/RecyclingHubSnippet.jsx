import React from 'react';
import { Link } from 'react-router-dom';
import './RecyclingHubSnippet.css';
import hubImg from '../../assets/images/kcca-people-visit-at-dumpsite.JPG';

const RecyclingHubSnippet = () => {
  return (
    <section className="hub-snippet section" id="recycling">
      <div className="container">
        <div className="hub-grid">
          <div className="hub-image">
            <img src={hubImg} alt="KCCA Visit at Buyala Dumpsite" />
          </div>
          <div className="hub-text">
            <span className="section-subtitle">Community Engagement</span>
            <h2 className="section-title">The <span className="text-primary">Recycling Hub</span></h2>
            <p>
              Our hub is more than just a facility; it's a center for community engagement and local empowerment. We work closely with partners like KCCA to ensure sustainable waste management practices that benefit the entire region.
            </p>
            <ul className="hub-features">
              <li>Local Employment Opportunities</li>
              <li>Waste Sorting & Management Workshops</li>
              <li>Sustainable Infrastructure Development</li>
            </ul>
            <Link to="/recycling" className="btn btn-primary">Visit Our Hub</Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default RecyclingHubSnippet;
