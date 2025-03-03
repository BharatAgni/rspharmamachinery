import React from 'react';
import './AboutDetails.css';
import main_img from '../../assets/about-img-1.png';
import About_img from '../../assets/about-img-1.png';

const AboutDetails = () => {
  return (
    <div className='about-details'>
      <div className='main-img'>
        <img src={main_img} alt='Main' className='main-img-style' />
      </div>
      <div className='about-details-container'>
        <div className='left-item'>
          <h3>Leader in Executive Project</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus eaque commodi in.
            Architecto animi ratione, consectetur illum sapiente rem incidunt. Alias exercitationem culpa
            voluptates, aut similique voluptatum labore quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus eaque commodi in.
            Architecto animi ratione, consectetur illum sapiente rem incidunt. Alias exercitationem culpa
            voluptates, aut similique voluptatum labore quasi.
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Deserunt ducimus eaque commodi in.
            Architecto animi ratione, consectetur illum sapiente rem incidunt. Alias exercitationem culpa
            voluptates, aut similique voluptatum labore quasi.
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

