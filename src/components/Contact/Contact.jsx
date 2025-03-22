import React from "react";
import "./Contact.css";
import about_img_1 from "../../assets/industries-photos-1.jpg";
import about_img_2 from "../../assets/industries-photos-2.jpg";

const Contact = () => {
  return (
    <div className="contact-container">
      <h2 className="contact-title">RS PHARMA MACHINERY Co., Ltd</h2>
      <hr className="contact-divider" />
      
      <div className="contact-content">
        <div className="contact-info">
          <p><strong>Tel:</strong> +91 87440 16025</p>
          <p><strong>Phone/Wechat/Whatsapp:</strong> +91 87440 16025</p>
          <p><strong>E-mail:</strong> rspharmamachinery@gmail.com</p>
          <p><strong>RS PHARMA Add:</strong>CVQM+HXJ, Pelhar, Maharashtra 401208</p>
          <p><strong>RS PHARMA Factory Add:</strong> CVQM+HXJ, Pelhar, Maharashtra 401208</p>
        </div>
        <div className="contact-image">
          <img src={about_img_1} alt="Company Building" />
        </div>
      </div>

      {/* Header Section */}
      <div className="agents-banner">
        <p><strong>REGIONAL AGENTS WANTED, <em>Contact us Now</em></strong></p>
      </div>

      {/* Google Map Embed */}
      <div className="map-container">
        <h3>You Can Find Us In</h3>
        <iframe
          title="Company Location"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3762.3828933429095!2d72.88482619999999!3d19.4390517!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7a9000446fb13%3A0x3a056fed4a982197!2sRS%20PHARMA%20MACHINERY!5e0!3m2!1sen!2sin!4v1742629751347!5m2!1sen!2sin"
          width="100%"
          height="400"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
        ></iframe>
        {/* Image Below Map */}
        <div className="location-image">
          <img src={about_img_2} alt="Location Info" />
        </div>
        </div>

      {/* New Section - Get in Touch Form */}
   <div className="contact-section">
      {/* Left Side: Form */}
      <div className="contact-form">
        <h2>Get in Touch with Us</h2>
        <form>
          <div className="form-group">
            <input type="text" placeholder="Name *" required />
            <input type="text" placeholder="Country *" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Email *" required />
            <input type="text" placeholder="Tel *" required />
          </div>
          <div className="form-group">
            <input type="text" placeholder="Company" />
            <input type="text" placeholder="WhatsApp" />
          </div>
          <textarea placeholder="Inquiry *" required></textarea>
          <button type="submit" className="submit-btn">SUBMIT</button>
        </form>
      </div>

      {/* Right Side: Contact Info */}
      <div className="contact-info-box">
        <h2>Contact Us</h2>
        <p>Our professional team will reply to you as soon as possible.</p>

        <div className="contact-item">
          <span className="icon">📧</span>
          <div>
            <strong>Email</strong>
            <p>rspharmamachinery@gmail.com</p>
          </div>
        </div>

        <div className="contact-item">
          <span className="icon">📞</span>
          <div>
            <strong>Tel</strong>
            <p>+91 87440 16025 / +91 7757873724</p>
          </div>
        </div>

        <div className="contact-item">
          <span className="icon">💬</span>
          <div>
            <strong>WhatsApp/Skype</strong>
            <p>+91 87440 16025</p>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
};

export default Contact;












