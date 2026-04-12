import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import igesLogo from '../../assets/logos/IGES LOGO DRAFT141827022025.webp';
import kccaLogo from '../../assets/logos/kcca-logo.webp';
import makerereLogo from '../../assets/logos/makerere-logo.svg';
import mtslLogo from '../../assets/logos/mtsl-logo.webp';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid">
          {/* Column 1: Quick Links */}
          <div className="footer-col">
            <div className="footer-about">
              <img src={igesLogo} alt="IGES Logo" className="footer-logo" />
              <p>Integrated Green Energy Solutions (IGES) is transforming organic waste into clean energy.</p>
            </div>
            <ul className="footer-links">
              <li><Link to="/">Home</Link></li>
              <li><Link to="/about">About Us</Link></li>
              <li><Link to="/technology">Technology</Link></li>
              <li><Link to="/contact">Contact</Link></li>
            </ul>
          </div>

          {/* Column 2: Social Media */}
          <div className="footer-col">
            <h4>Follow Us</h4>
            <div className="footer-socials">
              <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
              <a href="#" aria-label="Twitter"><i className="fab fa-twitter"></i></a>
              <a href="#" aria-label="Instagram"><i className="fab fa-instagram"></i></a>
              <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
            </div>
            <div className="footer-contact-minimal">
              <p>+256 700 103-446</p>
              <p>whoorigpei@gmail.com</p>
            </div>
          </div>

          {/* Column 3: Newsletter */}
          <div className="footer-col">
            <h4>Stay Updated</h4>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <form className="newsletter-form" onSubmit={(e) => e.preventDefault()}>
              <input type="email" placeholder="Email Address" required />
              <button type="submit" className="btn-newsletter">Join</button>
            </form>
          </div>

          <div className="footer-col">
            <h4 className="footer-title">Our Partners</h4>
            <div className="footer-partners">
              <img src={makerereLogo} alt="Makerere University" className="partner-logo" />
              <img src={kccaLogo} alt="KCCA" className="partner-logo" />
              <img src={mtslLogo} alt="MTSL" className="partner-logo" />
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {new Date().getFullYear()} Integrated Green Energy Solutions (IGES). All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
