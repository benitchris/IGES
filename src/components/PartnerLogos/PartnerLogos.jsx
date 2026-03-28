import React from 'react';
import './PartnerLogos.css';
import igesLogo from '../../assets/logos/IGES LOGO DRAFT141827022025.png';

const PartnerLogos = () => {
  return (
    <div className="partner-strip">
      <div className="container partner-strip-container">
        <div className="partner-logo-item">
          <img src={igesLogo} alt="IGES" />
        </div>
        <div className="partner-logo-item">
          <img src="https://upload.wikimedia.org/wikipedia/en/5/5a/Kampala_Capital_City_Authority_Logo.png" alt="KCCA Logo" />
        </div>
        <div className="partner-logo-item">
          <img src="https://upload.wikimedia.org/wikipedia/en/2/27/Makerere_University_logo.png" alt="Makerere University Logo" />
        </div>
      </div>
    </div>
  );
};

export default PartnerLogos;
