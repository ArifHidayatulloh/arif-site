import React, { useState } from "react";
import "../style/Contact.css";
import axios from "axios";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "", // tetap gunakan huruf kecil untuk nama properti di state
    email: "", // tetap gunakan huruf kecil untuk nama properti di state
    chat: "", // ubah "message" menjadi "chat"
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value }); // nama input tetap dengan huruf kecil
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      // pastikan data yang dikirim sesuai dengan key yang dibutuhkan oleh API
      const response = await axios.post(
        "https://operasional.kkisyariah.com/api/send-email",
        {
          name: formData.name,  // sesuaikan dengan key yang diharapkan API
          email: formData.email, // sesuaikan dengan key yang diharapkan API
          chat: formData.chat, // sesuaikan dengan key yang diharapkan API
        }
      );
      alert(response.data.message);
    } catch (error) {
      console.error(error);
      alert("Failed to send email. Please try again.");
    }
  };

  return (
    <section id="contact" className="contact-section">
      <div className="contact-container">
        <h2 className="section-title">Contact Me</h2>
        <p className="contact-description">
          Have a project in mind? Want to collaborate? Feel free to reach out!
        </p>
        <form className="contact-form" onSubmit={handleSubmit} method="post">
          <div className="form-group">
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              name="name" // nama input tetap "name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              id="email"
              name="email" // nama input tetap "email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="chat">Message</label> {/* Ganti "message" dengan "chat" */}
            <textarea
              id="chat" // Ganti "message" dengan "chat"
              name="chat" // Ganti "message" dengan "chat"
              placeholder="Your Message"
              rows="5"
              value={formData.chat} // Ganti "message" dengan "chat"
              onChange={handleChange}
              required
            ></textarea>
          </div>
          <button type="submit" className="btn-submit">
            Send Message
          </button>
        </form>
      </div>
    </section>
  );
};

export default Contact;
