import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaWhatsapp } from 'react-icons/fa';
import SEO from '../../components/SEO/SEO';
import { pageSEO } from '../../config/seo';
import { trackContactForm, trackPhoneCall, trackWhatsAppClick } from '../../components/GoogleAnalytics/GoogleAnalytics';
import './Contact.css';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: ''
  });

  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const text = `*New Enquiry from Website*\n\n*Name:* ${formData.name}\n*Email:* ${formData.email}\n*Phone:* ${formData.phone || 'N/A'}\n\n*Message:*\n${formData.message}`;
    const encoded = encodeURIComponent(text);
    window.open(`https://wa.me/17042366628?text=${encoded}`, '_blank');

    setSubmitStatus('success');
    setFormData({ name: '', email: '', phone: '', message: '' });
    trackContactForm();
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <div className="contact-page">
      <SEO
        title={pageSEO.contact.title}
        description={pageSEO.contact.description}
        keywords={pageSEO.contact.keywords}
        url="/contact"
      />

      <section className="contact-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="contact-hero-content text-center"
          >
            <h1>Contact Us</h1>
            <p className="contact-hero-description">
              Get in touch with us for personalized astrological guidance and consultations
            </p>
          </motion.div>
        </div>
      </section>

      <section className="contact-content section">
        <div className="container">
          <div className="contact-grid">
            <motion.div
              className="contact-form-wrapper"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="glass contact-form-card">
                <h2>Send Us a Message</h2>
                <form onSubmit={handleSubmit} className="contact-form">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      type="text"
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Enter your name"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      type="email"
                      id="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="Enter your email"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="phone">Phone Number</label>
                    <input
                      type="tel"
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="Enter your phone number"
                    />
                  </div>

                  <div className="form-group">
                    <label htmlFor="message">Message *</label>
                    <textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={6}
                      placeholder="Tell us how we can help you"
                    />
                  </div>

                  <button type="submit" className="btn btn-primary btn-block">
                    <FaWhatsapp /> Send via WhatsApp
                  </button>

                  {submitStatus === 'success' && (
                    <div className="form-message success">
                      ✅ WhatsApp opened with your message. Please hit send to complete your enquiry.
                    </div>
                  )}

                  {submitStatus === 'error' && (
                    <div className="form-message error">
                      ❌ Could not open WhatsApp. Please contact us directly at +1(704)236-6628.
                    </div>
                  )}
                </form>
              </div>
            </motion.div>

            <motion.div
              className="contact-info-wrapper"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="glass contact-info-card">
                <h2>Get in Touch</h2>
                <p>We're here to help you on your spiritual journey. Reach out to us through any of the following methods:</p>

                <div className="contact-methods">
                  <div className="contact-method">
                    <div className="method-icon">
                      <FaPhone />
                    </div>
                    <div className="method-details">
                      <h3>Phone</h3>
                      <a href="tel:+17042366628" onClick={trackPhoneCall}>+1(704)236-6628</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <FaEnvelope />
                    </div>
                    <div className="method-details">
                      <h3>Email</h3>
                      <a href="mailto:mastergautham2006@gmail.com">mastergautham2006@gmail.com</a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <FaWhatsapp />
                    </div>
                    <div className="method-details">
                      <h3>WhatsApp</h3>
                      <a href="https://wa.me/17042366628" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                        Chat with us
                      </a>
                    </div>
                  </div>

                  <div className="contact-method">
                    <div className="method-icon">
                      <FaMapMarkerAlt />
                    </div>
                    <div className="method-details">
                      <h3>Address</h3>
                      <p>9550 Community Commons Ln, Apt 165, Charlotte, NC</p>
                    </div>
                  </div>
                </div>

                <div className="quick-contact-buttons">
                  <a href="tel:+17042366628" className="btn btn-gold" onClick={trackPhoneCall}>
                    <FaPhone /> Call Now
                  </a>
                  <a href="https://wa.me/17042366628" className="btn btn-secondary" target="_blank" rel="noopener noreferrer" onClick={trackWhatsAppClick}>
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
