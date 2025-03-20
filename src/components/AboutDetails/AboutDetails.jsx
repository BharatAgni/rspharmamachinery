import React from 'react';
import './AboutDetails.css';
import main_img from '../../assets/about-img-3.png';
import About_img from '../../assets/industries-photos-1.jpg';

const AboutDetails = () => {
  return (
    <div className='about-details'>
      <div className='main-img'>
        <img src={main_img} alt='Main' className='main-img-style' />
      </div>
      <div className='about-details-container'>
        <div className='left-item'>
          <h3>Why Choose Us?</h3>
          <p>
          R S Pharma machinery is one of the leading manufacturers and suppliers of pharmaceutical, Chemical, and cosmetics machinery
          </p>
          <p>
          Our company has been claimed for quality and excellence in the range of products offered. We have committed ourselves to deliver only the finest products to our clients with 2 years of warranty, which is 2 time of our competitors.
          </p>
          <p>
            {/* Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus eaque commodi in.
            Architecto animi ratione, consectetur illum sapiente rem incidunt. Alias exercitationem culpa
            voluptates, aut similique voluptatum labore quasi. */}
          </p>
        </div>
        <div className='right-item'>
          <img src={About_img} alt='About' className='about-img-style' />
        </div>
      </div>
    </div>
  );
};

export default AboutDetails;

