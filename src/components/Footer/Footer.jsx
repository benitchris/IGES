import React from 'react';
import './Footer.css';
import igesLogo from '../../assets/logos/IGES LOGO DRAFT141827022025.png';
import mtslLogo from '../../assets/logos/mtsl-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-about">
          <img src={igesLogo} alt="IGES Logo" className="footer-logo" />
          <p>Integrated Green Energy Solutions (IGES) is committed to turning waste into sustainable energy solutions, innovating for a cleaner and greener Uganda.</p>
          <div className="footer-affiliation">
            <span>Affiliated with:</span>
            <img src={mtslLogo} alt="MTSL Logo" className="affiliation-logo" />
          </div>
        </div>

        <div className="footer-links">
          <h4>Quick Links</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#about">About Us</a></li>
            <li><a href="#technology">HTT Technology</a></li>
            <li><a href="#recycling">Recycling Hub</a></li>
            <li><a href="#sacco">Waste Workers SACCO</a></li>
            <li><a href="#news">News & Updates</a></li>
          </ul>
        </div>

        <div className="footer-contact">
          <h4>Contact Us</h4>
          <ul>
            <li><i className="fas fa-map-marker-alt"></i> Buyala Dumpsite, Uganda</li>
            <li><i className="fas fa-envelope"></i> info@iges.co.ug</li>
            <li><i className="fas fa-phone"></i> +256 123 456 789</li>
          </ul>
        </div>

        <div className="footer-partners">
          <h4>Our Partners</h4>
          <p>Collaborating with Makerere University, UIRI, and KCCA for a sustainable future.</p>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>&copy; {new Date().getFullYear()} Integrated Green Energy Solutions (IGES). All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
