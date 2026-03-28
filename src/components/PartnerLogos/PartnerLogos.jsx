import React from 'react';
import './PartnerLogos.css';
import igesLogo from '../../assets/logos/IGES LOGO DRAFT141827022025.png';
import kccaLogo from '../../assets/logos/kcca-logo.png';
import makerereLogoSrc from '../../assets/logos/makerere-logo.svg';

const PartnerLogos = () => {
  return (
    <div className="partner-strip">
      <div className="container partner-strip-container">
        <div className="partner-logo-item">
          <img src={igesLogo} alt="IGES" />
        </div>
        <div className="partner-divider" />
        <div className="partner-logo-item">
          <img src={kccaLogo} alt="Kampala Capital City Authority (KCCA)" />
        </div>
        <div className="partner-divider" />
        <div className="partner-logo-item">
          <img src={makerereLogoSrc} alt="Makerere University" />
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
