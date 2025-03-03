import React from "react";
import "./Footer.css";

// Importing images/icons
import phoneIcon from "../../assets/phone-icon.png";
import emailIcon from "../../assets/mail-icon.png";
import whatsappIcon from "../../assets/whatsapp-icon.png";
import locationIcon from "../../assets/location-icon.png";
import facebookIcon from "../../assets/facebook-icon.png";
import twitterIcon from "../../assets/twitter-icon.png";
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
            <a href="tel:+918884427770">+91 8884427770</a>
          </p>
          <p>
            <img src={emailIcon} alt="Email" className="icon" />
            <a href="mailto:agnivesh514@gmail.com">agnivesh514@gmail.com</a>
          </p>
          <p>
            <img src={whatsappIcon} alt="WhatsApp" className="icon" />
            <a href="https://wa.me/918884427770" target="_blank" rel="noopener noreferrer">
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
            <li><a href="/products">Products</a></li>
            <li><a href="/clients">Client List</a></li>
            <li><a href="/news">News & Events</a></li>
            <li><a href="/contact">Contact</a></li>
          </ul>
        </div>
      </div>

      {/* Social Media Links */}
      <div className="social">
        <p>Follow us</p>
        <div className="social-icons">
          <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
            <img src={twitterIcon} alt="Twitter" />
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







