import React from "react";
import "./Footer.css";

// Importing images/icons
import phoneIcon from "../../assets/phone-icon.png";
import emailIcon from "../../assets/mail-icon.png";
import whatsappIcon from "../../assets/whatsapp-icon.png";
import locationIcon from "../../assets/location-icon.png";
import facebookIcon from "../../assets/facebook-icon.png";
import Linkedinicon from "../../assets/linkedin-icon.png";
import instagramIcon from "../../assets/instagram-icon.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-container">
        
        {/* Contact Section */}
        <div className="footer-section">
          <h3>Contact Us</h3>
          <p>
            <img src={locationIcon} alt="Location" className="icon" />
            <a href="https://maps.app.goo.gl/J2xLurfp1pdkwNuj6?g_st=com.google.maps.preview.copy" 
              target="_blank" rel="noopener noreferrer">
              SURVEY NO. 50 JABAR PADA, Vasai East, Mumbai, Maharashtra, India
            </a>
          </p>
          <p>
            <img src={phoneIcon} alt="Phone" className="icon" />
            <a href="tel:+917757873724">+91 7757873724</a>
          </p>
          <p>
            <img src={emailIcon} alt="Email" className="icon" />
            <a href="mailto:rspharmamachinery@gmail.com">rspharmamachinery@gmail.com</a>
          </p>
          <p>
            <img src={whatsappIcon} alt="WhatsApp" className="icon" />
            <a href="https://wa.me/+917757873724" target="_blank" rel="noopener noreferrer">
              WhatsApp Us
            </a>
          </p>
        </div>

        {/* Quick Links */}
        <div className="footer-section">
          <h3>Quick Links</h3>
          <ul>
            <li><a href="/">Home</a></li>
            <li><a href="/about">About Us</a></li>
            <li><a href="/BlogPage">Blog</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social">
        <p>Follow us</p>
        <div className="social-icons">
          <a href="https://Linkedin.com" target="_blank" rel="noopener noreferrer">
            <img src={Linkedinicon} alt="Linkedin" />
          </a>
          <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
            <img src={facebookIcon} alt="Facebook" />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
            <img src={instagramIcon} alt="Instagram" />
          </a>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer-bottom">
        <p>Copyright © 2025 Your Company | Website Design by YourCompany</p>
      </div>
    </footer>
  );
};

export default Footer;







