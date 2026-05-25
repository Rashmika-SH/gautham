import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt } from 'react-icons/fa';
import { locations } from '../../data/locations';
import SEO from '../../components/SEO/SEO';
import './Locations.css';

const Locations = () => {
  return (
    <div className="locations-page">
      <SEO
        title="Locations - Master Gautham | Astrology Services Across USA"
        description="Master Gautham provides expert astrology and spiritual guidance services across major US cities."
        keywords={['astrologer usa', 'vedic astrology', 'master gautham locations']}
        url="/locations"
      />

      <section className="locations-hero">
        <div className="container">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} className="text-center">
            <h1>Our Locations</h1>
            <p>Serving clients across the United States</p>
          </motion.div>
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="locations-grid">
            {locations.map((location, i) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.02 }}
              >
                <Link to={`/locations/${location.id}`} className="location-card glass">
                  <FaMapMarkerAlt className="location-icon" />
                  <span>{location.name}</span>
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Locations;
