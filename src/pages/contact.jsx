import React, { useState } from "react";
import { motion } from "framer-motion";

function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    inquiryType: "general",
    message: "",
    subscribe: false,
    file: null,
  });

  const [errors, setErrors] = useState({});

  // Handle Input Change
  const handleChange = (e) => {
    const { name, value, type, checked, files } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : type === "file" ? files[0] : value,
    });

    // Live Validation
    if (value.trim() === "" && name !== "file") {
      setErrors((prev) => ({ ...prev, [name]: `${name} is required` }));
    } else {
      setErrors((prev) => ({ ...prev, [name]: "" }));
    }
  };

  // Handle Form Submit
  const handleSubmit = (e) => {
    e.preventDefault();
    let validationErrors = {};

    Object.keys(formData).forEach((key) => {
      if (!formData[key] && key !== "file") {
        validationErrors[key] = `${key} is required`;
      }
    });

    if (Object.keys(validationErrors).length > 0) {
      setErrors(validationErrors);
      return;
    }

    alert("Form Submitted Successfully!");
    console.log(formData);
  };

  return (
    <div className="contact-page">
      <h1 className="contact-title">Contact Us</h1>
      <p className="contact-subtitle">
        Have any questions? Fill out the form below, and we'll get back to you ASAP!
      </p>

      <motion.form initial={{opacity:0,translateX:"-100%"}}
    whileInView={{opacity:1,translateX:0}}
    transition={{duration:2}} className="contact-form" onSubmit={handleSubmit}>
        <label>Name</label>
        <input type="text" name="name" value={formData.name} onChange={handleChange} />
        {errors.name && <span className="error">{errors.name}</span>}

        <label>Email</label>
        <input type="email" name="email" value={formData.email} onChange={handleChange} />
        {errors.email && <span className="error">{errors.email}</span>}

        <label>Inquiry Type</label>
        <select name="inquiryType" value={formData.inquiryType} onChange={handleChange}>
          <option value="general">General Inquiry</option>
          <option value="order">Order Issue</option>
          <option value="refund">Refund Request</option>
          <option value="collab">Business Collaboration</option>
        </select>

        <label>Message</label>
        <textarea name="message" value={formData.message} onChange={handleChange} />
        {errors.message && <span className="error">{errors.message}</span>}

        <label>Attach a File (Optional)</label>
        <input type="file" name="file" onChange={handleChange} />

        <div className="subscribe-container">
          <input type="checkbox" name="subscribe" checked={formData.subscribe} onChange={handleChange} />
          <label>Subscribe to our newsletter</label>
        </div>

        <button className="submit-btn" type="submit">Send Message</button>
      </motion.form>

      {/* New Balance Headquarters Address */}
      <motion.div  initial={{opacity:0, scale:0}}
        whileInView={{opacity:1,scale:1}}
        transition={{duration:1}} className="contact-info">
        <h2>Our Headquarters</h2>
        <p><strong>New Balance Headquarters</strong></p>
        <p>100 Guest Street, Boston, MA 02135, USA</p>

        {/* Google Maps Embed */}
        <iframe
          title="New Balance HQ Map"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2945.317791833742!2d-71.14457912418752!3d42.35644993521313!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89e379f7a6d63e8d%3A0x295cd451727f20a3!2sNew%20Balance!5e0!3m2!1sen!2sin!4v1709656865847!5m2!1sen!2sin"
          width="100%"
          height="300"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
        ></iframe>
      </motion.div>
    </div>
  );
}

export default ContactPage;
