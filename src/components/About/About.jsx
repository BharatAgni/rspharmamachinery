import React from 'react';
import './About.css';
import Title from '../Title/Title';
import About_main_img from '../../assets/raipid mixture Granulator(High shear mixture).png';
import About_img_1 from '../../assets/Photos-img-1.png';
import About_img_2 from '../../assets/Photos-img-2.png';
import About_img_3 from '../../assets/Photos-img-3.png';
import About_img_4 from '../../assets/Photos-img-4.png';
import Knowledge_icon from '../../assets/knowledge.png';
import play_icon from '../../assets/play-icon.png';

const About = ({ setHideVideoPlayer }) => {
  return (
    <div className="about">
      {/* Top Section */}
      <div className="about-top">
        <div className="item-left">
          <img src={About_main_img} alt="About RS Pharma Machinery" />
          <span className="play-icon" onClick={() => setHideVideoPlayer(false)}>
            <img src={play_icon} alt="Play Video" />
             
          </span>
        </div>
        <div className="item-right">
          <Title title="About Us" titleText="Who We Are & What We Do" />
          <p>
            At <strong>RS Pharma Machinery</strong>, we specialize in designing, manufacturing, 
            and exporting high-quality pharmaceutical, chemical, and food processing machinery. 
            Established in 2022 in Vasai, Mumbai, we have quickly built a reputation for delivering 
            innovative and reliable solutions tailored to industry needs. With a commitment to 
            precision, efficiency, and customer satisfaction, we provide state-of-the-art equipment 
            that meets global standards. Our expertise extends to engineering advanced machinery 
            for drying, granulation, and coating processes, ensuring optimal performance across 
            various industries.
          </p>
        </div>
      </div>

      {/* Image Gallery */}
      <div className="about-middle">
        {[About_img_1, About_img_2, About_img_3, About_img_4].map((img, index) => (
          <div className="item" key={index}>
            <img src={img} alt={`About Gallery ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* Key Features */}
      <div className="about-bottom">
        {[
          { title: 'Quality Machinery', text: 'Precision-engineered machines ensuring efficiency and durability.' },
          { title: 'Global Reach', text: 'Expanding to international markets with a trusted reputation.' },
          { title: 'Innovation & Technology', text: 'Continuous R&D to develop advanced pharmaceutical solutions.' },
          { title: 'Customer-Centric Approach', text: 'Customized solutions with reliable after-sales support.' }
        ].map((feature, index) => (
          <div className="item" key={index}>
            <div className="icon">
              <img src={Knowledge_icon} alt={feature.title} />
            </div>
            <h3>{feature.title}</h3>
            <p>{feature.text}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;



