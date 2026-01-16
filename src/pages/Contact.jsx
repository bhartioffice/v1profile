import React, { useState } from "react";
import "./Contact.css";

const Contact = () => {
  // Form State
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  // Copy Feedback State
  const [copyStatus, setCopyStatus] = useState(null);

  // Handle Input Change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // 1. SMART FORM: Handles "No Backend" by opening Email Client
  const handleSubmit = (e) => {
    e.preventDefault();

    // Construct the mailto link
    const recipient = "nalinbharti@iitp.ac.in";
    const subject = encodeURIComponent(
      formData.subject || "Inquiry via Website"
    );
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );

    // Open default mail client
    window.location.href = `mailto:${recipient}?subject=${subject}&body=${body}`;
  };

  // 2. EXTRA: Copy to Clipboard Feature
  const copyToClipboard = (text, type) => {
    navigator.clipboard.writeText(text).then(() => {
      setCopyStatus(type); // 'email' or 'phone' or 'address'
      setTimeout(() => setCopyStatus(null), 2000); // Reset after 2 seconds
    });
  };

  return (
    <>
      <section className="page-header container fade-in-item is-visible">
        <h1 className="page-title">Get in Touch</h1>
        <p className="center-text-sm">
          Reach out for research collaborations, speaking engagements, or
          academic inquiries.
        </p>
      </section>

      <div className="container contact-section fade-in-item is-visible">
        <div className="contact-grid">
          {/* --- LEFT COLUMN: CONTACT INFO --- */}
          <div className="contact-info-wrapper">
            {/* Address Card */}
            <div
              className="contact-card"
              onClick={() =>
                copyToClipboard(
                  "IIT Patna, Bihta, Patna – 801106, India",
                  "address"
                )
              }
              style={{ cursor: "pointer" }}
              title="Click to copy address"
            >
              <div className="contact-icon">
                <i className="fa-solid fa-map-location-dot"></i>
              </div>
              <div className="contact-details">
                <h4>Office Location</h4>
                <p>
                  Dept. of Humanities & Social Sciences,
                  <br />
                  <strong>Indian Institute of Technology Patna</strong>,<br />
                  Bihta, Patna – 801106, India
                </p>
                {copyStatus === "address" && (
                  <span
                    className="sub-text"
                    style={{ color: "var(--color-accent)", fontWeight: "bold" }}
                  >
                    Address Copied! <i className="fa-solid fa-check"></i>
                  </span>
                )}
              </div>
            </div>

            {/* Email Card */}
            <div
              className="contact-card"
              onClick={() => copyToClipboard("nalinbharti@iitp.ac.in", "email")}
              style={{ cursor: "pointer" }}
              title="Click to copy email"
            >
              <div className="contact-icon">
                <i className="fa-solid fa-envelope-open-text"></i>
              </div>
              <div className="contact-details">
                <h4>Email Address</h4>
                <span className="contact-link">nalinbharti@iitp.ac.in</span>
                {copyStatus === "email" ? (
                  <span
                    className="sub-text"
                    style={{ color: "var(--color-accent)", fontWeight: "bold" }}
                  >
                    Copied! <i className="fa-solid fa-check"></i>
                  </span>
                ) : (
                  <span className="sub-text">Click to copy</span>
                )}
              </div>
            </div>

            {/* Phone Card */}
            <div
              className="contact-card"
              onClick={() => copyToClipboard("+91-6115-233017", "phone")}
              style={{ cursor: "pointer" }}
              title="Click to copy phone"
            >
              <div className="contact-icon">
                <i className="fa-solid fa-phone-volume"></i>
              </div>
              <div className="contact-details">
                <h4>Phone</h4>
                <span className="contact-link">+91-6115-233 017</span>
                {copyStatus === "phone" ? (
                  <span
                    className="sub-text"
                    style={{ color: "var(--color-accent)", fontWeight: "bold" }}
                  >
                    Copied! <i className="fa-solid fa-check"></i>
                  </span>
                ) : (
                  <span className="sub-text">Mon-Fri, 9am - 5pm IST</span>
                )}
              </div>
            </div>

            {/* Social Connect */}
            <div
              className="contact-card"
              style={{ borderLeft: "4px solid var(--color-accent)" }}
            >
              <div className="contact-details" style={{ width: "100%" }}>
                <h4>Connect on Social Media</h4>
                <div className="social-row">
                  <a
                    href="https://www.linkedin.com/in/nalin-bharti-439b3815/"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="LinkedIn"
                  >
                    <i className="fa-brands fa-linkedin-in"></i>
                  </a>
                  <a
                    href="https://x.com/nalinbharti"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Twitter"
                  >
                    <i className="fa-brands fa-x-twitter"></i>
                  </a>
                  <a
                    href="https://www.facebook.com/nalin.bharti"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="Facebook"
                  >
                    <i className="fa-brands fa-facebook-f"></i>
                  </a>
                  <a
                    href="https://www.researchgate.net/profile/Nalin-Bharti"
                    target="_blank"
                    rel="noreferrer"
                    aria-label="ResearchGate"
                  >
                    <i className="fa-brands fa-researchgate"></i>
                  </a>
                </div>
              </div>
            </div>
          </div>

          {/* --- RIGHT COLUMN: CONTACT FORM --- */}
          <div className="contact-form-wrapper fade-in-item is-visible">
            <h3>Send a Message</h3>
            <p
              style={{
                marginBottom: "2rem",
                fontSize: "0.9rem",
                color: "var(--color-text-muted)",
              }}
            >
              This form will open your default email client with the details
              pre-filled.
            </p>

            <form className="modern-form" onSubmit={handleSubmit}>
              <div className="form-group">
                <input
                  type="text"
                  name="name"
                  id="name"
                  placeholder=" "
                  required
                  value={formData.name}
                  onChange={handleChange}
                />
                <label htmlFor="name">Your Name</label>
              </div>

              <div className="form-group">
                <input
                  type="email"
                  name="email"
                  id="email"
                  placeholder=" "
                  required
                  value={formData.email}
                  onChange={handleChange}
                />
                <label htmlFor="email">Your Email</label>
              </div>

              <div className="form-group">
                <input
                  type="text"
                  name="subject"
                  id="subject"
                  placeholder=" "
                  required
                  value={formData.subject}
                  onChange={handleChange}
                />
                <label htmlFor="subject">Subject</label>
              </div>

              <div className="form-group">
                <textarea
                  name="message"
                  id="message"
                  rows="5"
                  placeholder=" "
                  required
                  value={formData.message}
                  onChange={handleChange}
                ></textarea>
                <label htmlFor="message">Message</label>
              </div>

              <button type="submit" className="btn btn-accent submit-btn">
                <i className="fa-regular fa-paper-plane"></i> Send via Email App
              </button>
            </form>
          </div>
        </div>
      </div>

      {/* --- MAP SECTION --- */}
      <div
        className="map-section fade-in-item is-visible"
        style={{ marginTop: "4rem" }}
      >
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3600.3277762692225!2d84.84906931501254!3d25.53578798373981!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39ed577f6954af4b%3A0x133d3c73400e947d!2sIndian%20Institute%20of%20Technology%20Patna!5e0!3m2!1sen!2sin!4v1625227743210!5m2!1sen!2sin"
          width="100%"
          height="450"
          style={{ border: 0 }}
          allowFullScreen=""
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          title="IIT Patna Map"
        ></iframe>
      </div>
    </>
  );
};

export default Contact;
