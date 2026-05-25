import { motion } from 'framer-motion';
import Hero from '../../components/Hero/Hero';
import ServiceCard from '../../components/ServiceCard/ServiceCard';
import StatsCounter from '../../components/StatsCounter/StatsCounter';
import Testimonials from '../../components/Testimonials/Testimonials';
import SEO from '../../components/SEO/SEO';
import SchemaMarkup from '../../components/SchemaMarkup/SchemaMarkup';
import { services } from '../../data/services';
import { locations } from '../../data/locations';
import { pageSEO } from '../../config/seo';
import { Link } from 'react-router-dom';
import './Home.css';

const Home = () => {
  return (
    <div className="home-page">
      <SEO
        title={pageSEO.home.title}
        description={pageSEO.home.description}
        keywords={pageSEO.home.keywords}
        url="/"
      />
      <SchemaMarkup type="person" data={{}} />
      <SchemaMarkup type="localBusiness" data={{}} />
      
      <Hero />
      
      <StatsCounter />

      {/* Divine Blessings Section */}
      <section className="divine-blessings-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2>Divine Blessings</h2>
            <p className="section-subtitle">
              Guided by the grace of divine powers for your spiritual journey
            </p>
          </motion.div>

          <div className="deities-grid">
            <motion.div
              className="deity-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <p className="deity-author">Best Astrologer & Psychic Reader Gautham</p>
              <div className="deity-image-wrapper">
                <img src="/ganesha.png" alt="Lord Ganesha" className="deity-image" />
              </div>
              <h3>Lord Ganesha</h3>
              <p>Remover of obstacles and lord of beginnings</p>
              <div className="deity-contact">
                <a className="contact-phone" href="tel:+17042366628">+1(704)236-6628</a>
                <a className="contact-email" href="mailto:mastergautham2006@gmail.com">mastergautham2006@gmail.com</a>
              </div>
            </motion.div>

            <motion.div
              className="deity-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
            >
              <p className="deity-author">Best Astrologer & Psychic Reader Gautham</p>
              <div className="deity-image-wrapper">
                <img src="/shiva.png" alt="Lord Shiva" className="deity-image" />
              </div>
              <h3>Lord Shiva</h3>
              <p>The supreme deity of transformation and meditation</p>
              <div className="deity-contact">
                <a className="contact-phone" href="tel:+17042366628">+1(704)236-6628</a>
                <a className="contact-email" href="mailto:mastergautham2006@gmail.com">mastergautham2006@gmail.com</a>
              </div>
            </motion.div>

            <motion.div
              className="deity-card glass"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
            >
              <p className="deity-author">Best Astrologer & Psychic Reader Gautham</p>
              <div className="deity-image-wrapper">
                <img src="/lakshmi.png" alt="Goddess Lakshmi" className="deity-image" />
              </div>
              <h3>Goddess Lakshmi</h3>
              <p>Goddess of wealth, prosperity, and abundance</p>
              <div className="deity-contact">
                <a className="contact-phone" href="tel:+17042366628">+1(704)236-6628</a>
                <a className="contact-email" href="mailto:mastergautham2006@gmail.com">mastergautham2006@gmail.com</a>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2>Astrology Services</h2>
            <p className="section-subtitle">
              Comprehensive astrological solutions tailored to illuminate your life's journey
            </p>
          </motion.div>

          <div className="services-grid">
            {services.map((service, index) => (
              <ServiceCard key={service.id} service={service} index={index} />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="about-section section">
        <div className="container">
          <div className="about-grid">
            <motion.div
              className="about-image"
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <div className="about-image-wrapper glass">
                <div className="astro-icon">🕉️</div>
              </div>
            </motion.div>

            <motion.div
              className="about-content"
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <h2>Master Gautham</h2>
              <p>
                Master Gautham, Best Astrologer & Psychic Reader Gautham offers a wide range of astrology services, including personalized
                horoscope readings, compatibility assessments, and detailed birth chart analyses. His
                consultations are tailored to address specific concerns related to career, relationships,
                health, and financial stability.
              </p>
              <p>
                Utilizing a combination of traditional astrological methods and modern techniques, he
                provides accurate predictions and practical remedies designed to help clients navigate
                life's challenges with confidence and ease.
              </p>
              <Link to="/about" className="btn btn-primary">Learn More About Us</Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Black Magic Section */}
      <section className="black-magic-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2>Why People Use Black Magic? And How We Help You Remove It?</h2>
          </motion.div>

          <motion.div
            className="black-magic-content glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <p>
              This kind of magic has been a menace since ancient times. Mostly this kind of magic was
              used as a weapon of war, but now it has become an easy tool where people harass others
              because of uncontrollable greed, lust, anger and fearful of others' growth.
            </p>
            <p>
              There are so many instances where this tool was used but was not cured for a long time,
              sometimes never cured, either because there are not many experts with this skill and
              knowledge to remove the dark energy or just people don't want to believe and started to
              live with it or few so-called experts are fake gurus with zero skills and honesty.
            </p>
            <p>
              <strong>This is where we come in.</strong> Our experts have practiced Vedic and ancient
              traditions to remove black magic. No matter how powerful it is or how long ago the magic
              was cast upon you, we can assure you 100% that it can be resolved.
            </p>
          </motion.div>
        </div>
      </section>

      <Testimonials />


      {/* Locations Section */}
      <section id="locations" className="locations-section section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2>Serving Across the USA</h2>
            <p className="section-subtitle">
              Expert astrological services available in major cities
            </p>
          </motion.div>

          <div className="locations-grid-compact">
            {locations.slice(0, 12).map((location, index) => (
              <motion.div
                key={location.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.04 }}
              >
                <Link to={`/locations/${location.id}`} className="location-pill glass">
                  📍 {location.name}
                </Link>
              </motion.div>
            ))}
          </div>

          <div className="text-center" style={{ marginTop: '1.5rem' }}>
            <Link to="/locations" className="btn btn-primary">View All Cities</Link>
          </div>

          <motion.div
            className="map-wrapper glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            style={{ marginTop: '2rem', borderRadius: '12px', overflow: 'hidden' }}
          >
            <iframe
              src="https://maps.google.com/maps?q=9550+Community+Commons+Ln+Apt+165,+Charlotte,+NC+28277&output=embed&z=15"
              width="100%"
              height="400"
              style={{ border: 0, display: 'block' }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Master Gautham Location"
            />
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
