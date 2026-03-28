import React from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';
import mtslLogo from '../../assets/logos/mtsl-logo.png';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-col">
          <h4>Quick Links</h4>
          <div className="footer-logo-block">
            <img src={mtslLogo} alt="MTSL Energies" className="footer-mtsl" />
          </div>
        </div>

        <div className="footer-col">
          <h4>About Us</h4>
          <div className="footer-logo-block">
            <h3 className="kcca-footer-text">KCCA</h3>
          </div>
        </div>

        <div className="footer-col">
          <h4>Contact Us</h4>
          <div className="footer-logo-block">
            <h3 className="makerere-footer-text">Makerere<br/><span>University</span></h3>
          </div>
          <ul className="footer-contact-info">
            <li><i className="fas fa-phone"></i> +256 700 103-446</li>
            <li><i className="fas fa-envelope"></i> whoorigpei@gmail.com</li>
          </ul>
          <div className="footer-socials">
            <a href="#"><i className="fab fa-facebook-f"></i></a>
            <a href="#"><i className="fab fa-twitter"></i></a>
            <a href="#"><i className="fab fa-instagram"></i></a>
            <a href="#"><i className="fab fa-linkedin-in"></i></a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
