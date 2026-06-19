import { useState } from "react";
import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";

import "./Contact.css";

function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const validateForm = () => {
    const errors = {};

    // Name Validation
    if (!formData.name.trim()) {
        errors.name = "Name is required";
    } else if (formData.name.trim().length < 3) {
        errors.name = "Name must contain at least 3 characters";
    }

    // Email Validation
    if (!formData.email.trim()) {
        errors.email = "Email is required";
    } else {
        const emailRegex =
        /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

        if (!emailRegex.test(formData.email)) {
        errors.email =
            "Please enter a valid email address";
        }
    }

    // Subject Validation
    if (!formData.subject.trim()) {
        errors.subject = "Subject is required";
    } else if (formData.subject.trim().length < 5) {
        errors.subject =
        "Subject must contain at least 5 characters";
    }

    // Message Validation
    if (!formData.message.trim()) {
        errors.message = "Message is required";
    } else if (formData.message.trim().length < 10) {
        errors.message =
        "Message must contain at least 10 characters";
    }

    return errors;
    };

  const handleSubmit = (e) => {
    e.preventDefault();

    const validationErrors =
        validateForm();

    setErrors(validationErrors);

    if (
        Object.keys(validationErrors).length > 0
    ) {
        return;
    }

    alert("Message Sent Successfully!");

    setFormData({
        name: "",
        email: "",
        subject: "",
        message: "",
    });

    setErrors({});
    };

  return (
    <>
      <Navbar />

      <section className="contact-hero">
        <h1>Contact Us</h1>

        <p>
          We'd love to hear from you.
          Reach out to us anytime.
        </p>
      </section>

      <section className="contact-container">

        <div className="contact-info">

          <h2>Get In Touch</h2>

          <div className="info-box">
            <h3>Address</h3>

            <p>
              Main Boulevard,
              Lahore, Pakistan
            </p>
          </div>

          <div className="info-box">
            <h3>Phone</h3>

            <p>
              +92 300 1234567
            </p>
          </div>

          <div className="info-box">
            <h3>Email</h3>

            <p>
              info@flameandfork.com
            </p>
          </div>

          <div className="info-box">
            <h3>Opening Hours</h3>

            <p>
              Mon - Sun
              <br />
              10:00 AM - 11:00 PM
            </p>
          </div>

        </div>

        <div className="contact-form">

          <h2>Send Message</h2>

          <form onSubmit={handleSubmit}>

            <input
              type="text"
              name="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />

            {errors.name && (
              <span className="error">
                {errors.name}
              </span>
            )}

            <input
              type="email"
              name="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />

            {errors.email && (
              <span className="error">
                {errors.email}
              </span>
            )}

            <input
              type="text"
              name="subject"
              placeholder="Subject"
              value={formData.subject}
              onChange={handleChange}
            />

            {errors.subject && (
              <span className="error">
                {errors.subject}
              </span>
            )}

            <textarea
              rows="6"
              name="message"
              placeholder="Message"
              value={formData.message}
              onChange={handleChange}
            />

            {errors.message && (
              <span className="error">
                {errors.message}
              </span>
            )}

            <button type="submit">
              Send Message
            </button>

          </form>

        </div>

      </section>

      <section className="map-section">

        <h2>Find Us</h2>

        <iframe
          title="Restaurant Location"
          src="https://www.google.com/maps?q=Lahore,Pakistan&output=embed"
          allowFullScreen=""
          loading="lazy"
        ></iframe>

      </section>

      <Footer />
    </>
  );
}

export default Contact;