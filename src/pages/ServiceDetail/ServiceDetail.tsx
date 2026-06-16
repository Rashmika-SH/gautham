import { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaWhatsapp, FaCheckCircle, FaArrowLeft } from 'react-icons/fa';
import { getServiceById } from '../../data/services';
import SEO from '../../components/SEO/SEO';
import { serviceSEO } from '../../config/seo';
import './ServiceDetail.css';

const ServiceDetail = () => {
  const { serviceId } = useParams<{ serviceId: string }>();
  const service = serviceId ? getServiceById(serviceId) : undefined;

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'instant' as ScrollBehavior });
  }, []);

  if (!service) {
    return (
      <div className="service-detail-page">
        <div className="container section">
          <h1>Service Not Found</h1>
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  const seoData = serviceSEO[service.id as keyof typeof serviceSEO];

  return (
    <div className="service-detail-page">
      <SEO
        title={seoData?.title || `${service.title} - Master Gautham USA`}
        description={seoData?.description || service.description}
        keywords={seoData?.keywords || ['astrology', 'vedic astrology', service.title.toLowerCase()]}
        url={`/services/${service.id}`}
        image={service.image}
      />
      
      <section className="service-hero">
        <div className="container">
          <Link to="/#services" className="back-link">
            <FaArrowLeft /> Back to Services
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="service-hero-content"
          >
            <div className="service-hero-icon">{service.icon}</div>
            <h1>{service.title}</h1>
            <p className="service-hero-description">{service.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="service-content section">
        <div className="container">
          {service.image && (
            <motion.div
              className="service-image-container"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
            >
              <img src={service.image} alt={service.title} className="service-detail-image" />
            </motion.div>
          )}
          
          <div className="service-detail-grid">
            <motion.div
              className="service-main-content"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="content-card glass">
                <h2>About This Service</h2>
                <p>{service.detailedDescription}</p>
              </div>

              <div className="content-card glass">
                <h2>Benefits</h2>
                <ul className="benefits-list">
                  {service.benefits.map((benefit, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, x: -20 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: 0.3 + index * 0.1 }}
                    >
                      <FaCheckCircle />
                      <span>{benefit}</span>
                    </motion.li>
                  ))}
                </ul>
              </div>
            </motion.div>

            <motion.aside
              className="service-sidebar"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <div className="sidebar-card glass">
                <h3>Get in Touch</h3>
                <p>Ready to transform your life? Contact us today for a personalized consultation.</p>
                
                <div className="contact-buttons">
                  <a href="tel:+17042366628" className="btn btn-primary">
                    <FaPhone /> Call Now
                  </a>
                  <a href="http://wa.me/+17042366628" className="btn btn-secondary" target="_blank" rel="noopener noreferrer">
                    <FaWhatsapp /> WhatsApp
                  </a>
                </div>

                <div className="contact-info">
                  <p><strong>Phone:</strong> +1(704)236-6628</p>
                  <p><strong>Email:</strong> mastergautham2006@gmail.com</p>
                </div>
              </div>

              <div className="sidebar-card glass">
                <h3>Why Choose Us?</h3>
                <ul className="why-choose-list">
                  <li>✨ 30+ Years Experience</li>
                  <li>🌟 20K+ Satisfied Clients</li>
                  <li>💯 99% Success Rate</li>
                  <li>🔒 100% Confidential</li>
                  <li>⚡ Fast Results</li>
                </ul>
              </div>
            </motion.aside>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ServiceDetail;
