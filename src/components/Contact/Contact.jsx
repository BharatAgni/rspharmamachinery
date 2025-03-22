import { useState } from "react";
import "./Contact.css";
import about_img_1 from "../../assets/industries-photos-1.jpg";
import about_img_2 from "../../assets/industries-photos-2.jpg";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    country: "",
    email: "",
    tel: "",
    company: "",
    whatsapp: "",
    inquiry: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const form = new FormData();
    form.append("access_key", "e7ffcc26-13e1-46f4-bdbc-6aab252d341e"); // Tumhara Web3Forms Access Key
    Object.keys(formData).forEach((key) => form.append(key, formData[key]));

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      body: form,
    });

    const result = await response.json();
    if (result.success) {
      alert("Message sent successfully!");
      setFormData({ name: "", country: "", email: "", tel: "", company: "", whatsapp: "", inquiry: "" });
    } else {
      alert("Failed to send message. Please try again.");
    }
  };

  return (
    <div className="contact-container">
      <h2 className="contact-title">RS PHARMA MACHINERY Co., Ltd</h2>
      <hr className="contact-divider" />

      <div className="contact-content">
        <div className="contact-info">
          <p><strong>Tel:</strong> +91 87440 16025 /  +91 7757873724</p>
          <p><strong>Phone/Whatsapp:</strong> +91 87440 16025</p>
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

        {/* Address Section */}
        <div className="map-address">
          <p><strong>SPM Office Add:</strong> 04/20111, JABAR PADA, UMAR COMPOUND ROAD VASAI EAST MAHARASHTRA, 401208</p>
          <p><strong>SPM Factory Add:</strong> 04/20111, JABAR PADA, UMAR COMPOUND ROAD VASAI EAST MAHARASHTRA, 401208</p>
        </div>

        {/* Image Below Map */}
        <div className="location-image">
          <img src={about_img_2} alt="Location Info" />
        </div>
      </div>

      {/* New Section - Get in Touch Form */}
      <div className="contact-section">
        <div className="contact-form">
          <h2>Get in Touch with Us</h2>
          <form onSubmit={handleSubmit}>
            <div className="form-group">
              <input type="text" name="name" placeholder="Name *" required onChange={handleChange} value={formData.name} />
              <input type="text" name="country" placeholder="Country *" required onChange={handleChange} value={formData.country} />
            </div>
            <div className="form-group">
              <input type="email" name="email" placeholder="Email *" required onChange={handleChange} value={formData.email} />
              <input type="text" name="tel" placeholder="Tel *" required onChange={handleChange} value={formData.tel} />
            </div>
            <div className="form-group">
              <input type="text" name="company" placeholder="Company" onChange={handleChange} value={formData.company} />
              <input type="text" name="whatsapp" placeholder="WhatsApp" onChange={handleChange} value={formData.whatsapp} />
            </div>
            <textarea name="inquiry" placeholder="Inquiry *" required onChange={handleChange} value={formData.inquiry}></textarea>
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













