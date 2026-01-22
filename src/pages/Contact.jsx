import { useState } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    alert('Thank you for your message! We will get back to you soon.');
    setFormData({ name: '', email: '', subject: '', message: '' });
  };

  return (
    <div className="page-container">
      <Navbar />
      <main>
        <section className="contact-hero">
          <div className="container">
            <h1>Get in Touch</h1>
            <p className="contact-subtitle">We'd love to hear from you. Let's start a conversation!</p>
          </div>
        </section>

        <section className="contact-content">
          <div className="container">
            <div className="contact-grid">
              <div className="contact-info">
                <h2>Contact Information</h2>
                <p>Fill out the form and our team will get back to you within 24 hours.</p>
                
                <div className="info-items">
                  <div className="info-item">
                    <div className="info-icon">📧</div>
                    <div>
                      <h4>Email</h4>
                      <p>hello@portfolio.com</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📱</div>
                    <div>
                      <h4>Phone</h4>
                      <p>+1 (555) 123-4567</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">📍</div>
                    <div>
                      <h4>Location</h4>
                      <p>123 Business St, Tech City, TC 12345</p>
                    </div>
                  </div>
                  <div className="info-item">
                    <div className="info-icon">🕐</div>
                    <div>
                      <h4>Business Hours</h4>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                    </div>
                  </div>
                </div>

                <div className="social-icons">
                  <a href="#" className="social-icon">💼</a>
                  <a href="#" className="social-icon">💻</a>
                  <a href="#" className="social-icon">🐦</a>
                  <a href="#" className="social-icon">📷</a>
                </div>
              </div>

              <div className="contact-form-container">
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="form-group">
                    <label htmlFor="name">Name</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="subject">Subject</label>
                    <input
                      type="text"
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      required
                      placeholder="How can we help?"
                    />
                  </div>
                  <div className="form-group">
                    <label htmlFor="message">Message</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows="6"
                      placeholder="Tell us more about your project..."
                    />
                  </div>
                  <button type="submit" className="submit-btn">
                    Send Message →
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

        <section className="map-section">
          <div className="map-placeholder">
            <div className="map-content">
              <span className="map-icon">🗺️</span>
              <p>Map Integration</p>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}

export default Contact;
