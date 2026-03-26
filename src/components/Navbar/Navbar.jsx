import React, { useState, useEffect } from 'react';
import { NavLink, Link } from 'react-router-dom';
import './Navbar.css';
import igesLogo from '../../assets/logos/IGES LOGO DRAFT141827022025.png';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setIsMenuOpen(!isMenuOpen);
  const closeMenu = () => setIsMenuOpen(false);

  const navLinks = [
    { to: '/', label: 'Home', end: true },
    { to: '/about', label: 'About Us' },
    { to: '/technology', label: 'Technology' },
    { to: '/recycling', label: 'Recycling Hub' },
    { to: '/sacco', label: 'SACCO' },
    { to: '/news', label: 'News' },
  ];

  return (
    <>
      <nav className={`navbar ${isScrolled || isMenuOpen ? 'scrolled' : ''}`}>
        <div className="container nav-container">
          <Link to="/" className="navbar-logo" onClick={closeMenu}>
            <img src={igesLogo} alt="IGES Logo" className="logo-img" />
            <span className="logo-text">IGES</span>
          </Link>

          <ul className="navbar-links-desktop">
            {navLinks.map((link) => (
              <li key={link.to}>
                <NavLink 
                  to={link.to} 
                  end={link.end} 
                  className={({isActive}) => isActive ? 'active-link' : ''}
                >
                  {link.label}
                </NavLink>
              </li>
            ))}
            <li>
              <Link to="/contact" className="nav-cta">Get Started</Link>
            </li>
          </ul>

          <button 
            className={`navbar-toggle ${isMenuOpen ? 'open' : ''}`} 
            onClick={toggleMenu}
            aria-label="Toggle Menu"
          >
            <span className="bar"></span>
            <span className="bar"></span>
            <span className="bar"></span>
          </button>
        </div>
      </nav>

      {/* MOBILE DRAWER */}
      <div className={`mobile-drawer ${isMenuOpen ? 'open' : ''}`}>
        <div className="drawer-links">
          {navLinks.map((link) => (
            <NavLink 
              key={link.to} 
              to={link.to} 
              end={link.end} 
              className={({isActive}) => isActive ? 'drawer-link active-link' : 'drawer-link'}
              onClick={closeMenu}
            >
              {link.label}
            </NavLink>
          ))}
          <Link to="/contact" className="drawer-cta" onClick={closeMenu}>Get Started</Link>
        </div>
      </div>

      {isMenuOpen && <div className="mobile-backdrop" onClick={closeMenu}></div>}
    </>
  );
};

export default Navbar;
