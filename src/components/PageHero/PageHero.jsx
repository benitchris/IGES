import React, { useEffect, useState } from 'react';
import './PageHero.css';

const PageHero = ({ 
  title, 
  subtitle, 
  backgroundImage, 
  height = '60vh', 
  accentText = '',
  overlayOpacity = 0.6
}) => {
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Function to wrap words in span if they match accentText
  const renderTitle = () => {
    if (!accentText) return title;
    
    const parts = title.split(new RegExp(`(${accentText})`, 'gi'));
    return parts.map((part, i) => 
      part.toLowerCase() === accentText.toLowerCase() ? 
      <span key={i} className="text-accent">{part}</span> : part
    );
  };

  return (
    <section 
      className="page-hero" 
      style={{ 
        height,
        backgroundImage: `url(${backgroundImage})`,
        backgroundPosition: `center ${scrollY * 0.4}px`
      }}
    >
      <div className="hero-overlay" style={{ opacity: overlayOpacity }}></div>
      
      {/* Decorative Orbs */}
      <div className="decorative-orb orb-1"></div>
      <div className="decorative-orb orb-2"></div>
      
      <div className="container hero-content">
        <h1 className="hero-title reveal active">
          {renderTitle()}
        </h1>
        {subtitle && (
          <p className="hero-subtitle reveal active">
            {subtitle}
          </p>
        )}
      </div>
      
      <div className="hero-scroll-accent"></div>
    </section>
  );
};

export default PageHero;
