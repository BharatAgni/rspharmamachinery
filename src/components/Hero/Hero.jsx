import React, { useState, useEffect } from "react";
import "./Hero.css";
import about_img_1 from "../../assets/about-img-3.png";
import about_img_3 from "../../assets/about-img-1.png";
import about_img_4 from "../../assets/Manufacturing-Vessels.png";

const Hero = () => {
  const images = [about_img_1, about_img_3, about_img_4];
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="hero">
      <div className="hero-image-container">
        {images.map((image, index) => (
          <div
            key={index}
            className={`hero-image zoom-fade-effect ${index === currentIndex ? "active" : ""}`}
            style={{ backgroundImage: `url(${image})` }}
          />
        ))}
      </div>
      {/* <div className="hero-overlay">
        <h1 className="hero-title">
          RS PHARMA <br /> <span>MACHINERY</span>
        </h1>
        <h6 className="hero-subtitle">Our Products</h6>
        <div className="hero-products">
          <button className="btn">MANAGEMENT</button>
          <button className="btn">MARKETING</button>
          <button className="btn">OPERATIONS</button>
          <button className="btn">FINANCE</button>
        </div>
      </div> */}
    </div>
  );
};

export default Hero;


