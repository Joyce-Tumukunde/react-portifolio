import React, { useState } from 'react';
import '../css/Contact.css'; // Make sure this file contains the appropriate styles
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {

  faRedditAlien,
  faDiscord,
  faInstagram,
  faLinkedinIn,
  faGithub
} from '@fortawesome/free-brands-svg-icons';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    website: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form Submitted', formData);
    // You can clear the form or send to a backend/API here
  };

  return (
    <section id="Contact" className="contact-section">
      <div className="contact-form__wrapper">
        <form onSubmit={handleSubmit} className="contact-form">
          <input
            type="text"
            name="name"
            placeholder="Your name"
            value={formData.name}
            onChange={handleChange}
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={formData.email}
            onChange={handleChange}
            required
          />
          <input
            type="text"
            name="website"
            placeholder="Your website (if exists)"
            value={formData.website}
            onChange={handleChange}
          />
          <textarea
            name="message"
            placeholder="How can I help?*"
            value={formData.message}
            onChange={handleChange}
            required
          />
          <button type="submit" className="button">
            Get in Touch
          </button>
        </form>

        <div className="contact-social">
  <a href="https://www.instagram.com/am_joyce35/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faInstagram} />
  </a>
  <a href="https://www.linkedin.com/in/joyce-tumukunde-70598425a/" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faLinkedinIn} />
  </a>
  <a href="https://github.com/Joyce-Tumukunde" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faGithub} />
  </a>
  <a href="https://reddit.com/user/your-username" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faRedditAlien} />
  </a>
  <a href="https://discord.com/users/your-user-id" target="_blank" rel="noopener noreferrer">
    <FontAwesomeIcon icon={faDiscord} />
  </a>
</div>

      </div>

      <div className="contact-text">
        <h1 className="contact-title">
          Let's <span>talk</span> for <br /> Something special
        </h1>
        <p className="contact-description">
          I seek to push the limits of creativity to create high-engaging, user-friendly, and memorable interactive experiences.
        </p>
        <p className="contact-info">jtumukunde60@gmail.com</p>
        <p className="contact-info">+250 780 621 151</p>
      </div>
    </section>
  );
}

export default Contact;
