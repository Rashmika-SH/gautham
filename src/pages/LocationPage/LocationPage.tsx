import { useParams, Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaPhone, FaEnvelope, FaMapMarkerAlt, FaArrowLeft } from 'react-icons/fa';
import { getLocationById } from '../../data/locations';
import { services } from '../../data/services';
import SEO from '../../components/SEO/SEO';
import { locationSEO } from '../../config/seo';
import './LocationPage.css';

const LocationPage = () => {
  const { locationId } = useParams<{ locationId: string }>();
  const location = locationId ? getLocationById(locationId) : undefined;

  if (!location) {
    return (
      <div className="location-page">
        <div className="container section">
          <h1>Location Not Found</h1>
          <Link to="/" className="btn btn-primary">Return Home</Link>
        </div>
      </div>
    );
  }

  const seoData = locationSEO[location.id as keyof typeof locationSEO];

  return (
    <div className="location-page">
      <SEO
        title={seoData?.title || `Astrology Services in ${location.name} - Master Gautham`}
        description={seoData?.description || location.description}
        keywords={seoData?.keywords || ['astrology', location.name.toLowerCase(), 'vedic astrology']}
        url={`/locations/${location.id}`}
      />
      
      <section className="location-hero">
        <div className="container">
          <Link to="/#locations" className="back-link">
            <FaArrowLeft /> Back to Locations
          </Link>
          
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="location-hero-content"
          >
            <div className="location-hero-icon">📍</div>
            <h1>Astrology Services in {location.name}</h1>
            <p className="location-hero-description">{location.description}</p>
          </motion.div>
        </div>
      </section>

      <section className="location-content section">
        <div className="container">
          <div className="location-grid">
            <motion.div
              className="location-info glass"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>Contact Information</h2>
              <div className="info-list">
                <div className="info-item">
                  <FaMapMarkerAlt />
                  <div>
                    <strong>Location</strong>
                    <p>{location.address}</p>
                  </div>
                </div>
                <div className="info-item">
                  <FaPhone />
                  <div>
                    <strong>Phone</strong>
                    <p><a href={`tel:${location.phone}`}>{location.phone}</a></p>
                  </div>
                </div>
                <div className="info-item">
                  <FaEnvelope />
                  <div>
                    <strong>Email</strong>
                    <p><a href={`mailto:${location.email}`}>{location.email}</a></p>
                  </div>
                </div>
              </div>
              
              <div className="cta-buttons">
                <a href={`tel:${location.phone}`} className="btn btn-primary">
                  <FaPhone /> Call Now
                </a>
                <Link to="/contact" className="btn btn-secondary">
                  Contact Form
                </Link>
              </div>
            </motion.div>

            <motion.div
              className="services-available"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              <div className="glass" style={{ padding: 'var(--spacing-xl)' }}>
                <h2>Services Available in {location.name}</h2>
                <p>All our comprehensive astrological services are available for clients in {location.name}:</p>
                <ul className="services-list">
                  {services.slice(0, 6).map((service) => (
                    <li key={service.id}>
                      <Link to={`/services/${service.id}`}>
                        {service.icon} {service.title}
                      </Link>
                    </li>
                  ))}
                </ul>
                <Link to="/#services" className="view-all-link">
                  View All Services →
                </Link>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default LocationPage;
