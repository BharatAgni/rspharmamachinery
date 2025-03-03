import React, { useReducer, useState } from 'react';
import './Contact.css';


const initialState = { 
  name: '', 
  phone: '', 
  email: '', 
  message: '', 
  access_key: '0893bb49-10d8-41e2-994a-8b3c59cfdb89' 
};

const formReducer = (state, action) => {
  switch (action.type) {
    case 'SET_FIELD':  
      return { ...state, [action.field]: action.value };
    case 'RESET_FIELD':  
      return initialState; 
    default:
      return state;
  }
};

const Contact = () => {
  const [state, dispatch] = useReducer(formReducer, initialState);
  const [isLoading, setIsLoading] = useState(false);
  const [messageResponse, setMessageResponse] = useState(null);

  const handleChange = (e) => {
    dispatch({ type: 'SET_FIELD', field: e.target.name, value: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);

    if (!state.name || !state.phone || !state.email || !state.message) {
      alert("⚠ Please fill all fields before submitting!");
      setIsLoading(false);
      return;
    }

    const json = JSON.stringify(state);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          accept: "application/json"
        },
        body: json
      });

      const response = await res.json();
      setIsLoading(false);

      if (response.success) {
        setMessageResponse("✅ Message sent successfully!");
        dispatch({ type: 'RESET_FIELD' });
      } else {
        setMessageResponse("❌ Message not sent. Please try again.");
      }
    } catch (error) {
      setIsLoading(false);
      setMessageResponse("⚠ An error occurred. Please try again.");
      console.error("Fetch error:", error);
    }
  };

  return (
    <div className="Contact-page">
      <div className="contact-container">
        <form onSubmit={handleSubmit} className="contact-form">
          <h2>Get in Touch</h2>

          <input 
            type="text" 
            name="name" 
            value={state.name} 
            onChange={handleChange} 
            placeholder="Your Name"
            required 
          />

          <input 
            type="tel" 
            name="phone" 
            value={state.phone} 
            onChange={handleChange} 
            placeholder="Your Phone Number"
            required 
          />

          <input 
            type="email" 
            name="email" 
            value={state.email} 
            onChange={handleChange} 
            placeholder="Your Email"
            required 
          />

          <textarea 
            name="message" 
            value={state.message} 
            onChange={handleChange} 
            placeholder="Your Message"
            rows="4"
            required
          ></textarea>

          <button type="submit">
            {isLoading ? "Sending..." : "Send Message"}
          </button>

          {messageResponse && <span className="response">{messageResponse}</span>}
        </form>

        {/* Why Us Section */}
        <div className="why-us">
          <h3>Why Choose Us?</h3>
          <ul>
            <li>✔ High-Quality Products</li>
            <li>✔ Excellent Customer Support</li>
            <li>✔ Competitive Pricing</li>
            <li>✔ Fast & Secure Services</li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Contact;












