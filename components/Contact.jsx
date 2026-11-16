
"use client";

import { useState } from "react";
import {
  Mail,
  MapPin,
  Phone,
  Send,
  ArrowUpRight,
} from "lucide-react";
import "../app/globals.css"

import { FaGithub, FaLinkedin } from "react-icons/fa";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const [status, setStatus] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

const handleSubmit = (e) => {
  e.preventDefault();

  const { name, email, subject, message } = formData;

  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=hammadyaseen825@gmail.com&su=${encodeURIComponent(
    subject
  )}&body=${encodeURIComponent(
    `Name: ${name}\nEmail: ${email}\n\n${message}`
  )}`;

  window.open(gmailUrl, "_blank");

  setStatus("Gmail compose window opened.");
};


  return (
    <section className="contact-section" id="contact">
      <div className="container">
        <div className="contact-heading">
          <span className="section-label">GET IN TOUCH</span>
          <h2>
            Let's Work <span>Together.</span>
          </h2>
          <p>
            Have a project in mind or want to discuss an opportunity?
            Feel free to reach out. I'd love to hear from you.
          </p>
        </div>

        <div className="contact-grid">
          <div className="contact-info">
            <h3>Let's talk about your project</h3>
            <p className="contact-info-text">
              I'm always open to discussing new projects, creative ideas,
              and opportunities to be part of your vision.
            </p>

            <div className="contact-detail">
              <div className="contact-icon">
                <Mail size={21} />
              </div>
              <div>
                <span>Email Me</span>
                <a href="mailto:hammadyaseen825@gmail.com">
                  hammadyaseen825@gmail.com
                </a>
              </div>
            </div>

            <div className="contact-detail">
              <div className="contact-icon">
                <MapPin size={20} />
              </div>
              <div>
                <span>Location</span>
                <p>Karachi, Pakistan</p>
              </div>
            </div>

            <div className="contact-socials">
              <a
                href="https://github.com/HammadMaqsoodi"
                target="_blank"
                rel="noreferrer"
                aria-label="GitHub"
              >
                <FaGithub size={20} />
              </a>

              <a
                href="https://www.linkedin.com/in/hammad-yaseen-2400962b4"
                target="_blank"
                rel="noreferrer"
                aria-label="LinkedIn"
              >
                <FaLinkedin  size={20} />
              </a>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            <div className="form-row">
              <div className="form-group">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
              </div>

              <div className="form-group">
                <label htmlFor="email">Your Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
            </div>

            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input
                id="subject"
                name="subject"
                type="text"
                placeholder="What is this about?"
                value={formData.subject}
                onChange={handleChange}
                required
              />
            </div>

            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea
                id="message"
                name="message"
                rows="5"
                placeholder="Write your message..."
                value={formData.message}
                onChange={handleChange}
                required
              />
            </div>

            <button type="submit" className="contact-submit">
              Send Message <Send size={20} />
            </button>

            {status && <p className="contact-status">{status}</p>}
          </form>
        </div>
      </div>
    </section>
  );
}
