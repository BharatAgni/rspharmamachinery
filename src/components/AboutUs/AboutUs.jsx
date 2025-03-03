import React from 'react';
import './AboutUs.css'; // ✅ Import CSS
import photo1 from '../../assets/about-img-3.png';
// import photo2 from '../../assets/IMG-2.jpg';
import photo3 from '../../assets/about-img-1.png';
// import photo4 from '../../assets/IMG-4.jpg';
// import photo5 from '../../assets/IMG-5.jpg';
// import photo6 from '../../assets/IMG-6.jpg';

const AboutUs = () => {
  return (
    <div className="about-container">
      
      {/* ✅ Hero Section */}
      <div className='about-page'>
      <div className="hero-section">
        <div className="hero-overlay">
          <h1>About Us</h1>
          <p>Your Trusted Partner in Pharma Machinery Solutions</p>
        </div>
      </div>

      {/* ✅ Company Overview */}
      <div className="about-content">
        <div className="text-content">
          <h2>Who We Are</h2>
          <p>
            Founded in 2022, <b>RS Pharma Machinery</b> has established itself as a leader in 
            manufacturing and exporting high-quality machinery for industries such as 
            Pharma, Oil Refineries, API, Food, Chemical, and more. We ensure top-tier products 
            that meet global standards.
          </p>
        </div>
        <img src={photo1} alt="Company Overview" className="about-img" />
      </div>

      {/* ✅ Our Expertise */}
      <div className="about-content reverse">
        {/* <img src={photo2} alt="Manufacturing Facility" className="about-img" /> */}
        <div className="text-content">
          <h2>Our Expertise</h2>
          <p>
            We have successfully supplied over 60 machines and aim to expand exports to the US, 
            UK, Nigeria, and South Africa. Our expertise lies in developing advanced solutions 
            for drying, granulating, and coating operations.
          </p>
        </div>
      </div>

      {/* ✅ Quality Assurance */}
      <div className="about-content">
        <div className="text-content">
          <h2>Quality & Innovation</h2>
          <p>
            At <b>RS Pharma Machinery</b>, quality is our priority. Every machine is engineered 
            with precision to enhance productivity while adhering to strict industry regulations.
          </p>
        </div>
        <img src={photo3} alt="Quality Control" className="about-img" />
      </div>

      {/* ✅ Image Gallery */}
      <div className="image-gallery">
        {/* <img src={photo4} alt="Factory" className="gallery-img" />
        <img src={photo5} alt="Machinery" className="gallery-img" />
        <img src={photo6} alt="Workers" className="gallery-img" /> */}
      </div>
    </div>
    </div>
  );
};

export default AboutUs;





