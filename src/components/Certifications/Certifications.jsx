import React from 'react';
import logo1 from '../../assets/iso.png';
import logo2 from '../../assets/msme-logo.webp';
import logo3 from '../../assets/startup-india.webp';
import './Certifications.css';

const Certifications = () => {
  return (
    <div className="certifications-container">
      <img src={logo1} alt="Logo 1" className="certifications-logo" />
      <img src={logo2} alt="Logo 2" className="certifications-logo" />
      <img src={logo3} alt="Logo 3" className="certifications-logo" />
    </div>
  );
};

export default Certifications;
