import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import './Hero.css';

const Hero = () => {
  return (
    <section className="hero">
      <div className="hero-background">
        <div className="hero-particles"></div>
      </div>
      
      <div className="hero-content container">
        <motion.div
          className="hero-text"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Master<br />
            Gautham
          </motion.h1>
          
          <motion.p
            className="hero-subtitle"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.8 }}
          >
            Illuminate Your Life's Journey with Cosmic Wisdom
          </motion.p>
          
          <motion.p
            className="hero-description"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.8 }}
          >
            Master Gautham, Best Astrologer & Psychic Reader Gautham is internationally renowned and resides in Brisbane. A specialist in palm reading, horoscope interpretation, black magic removal, and other services to solve all your problems through special protective prayers, pujas mantras, and yantras.

          </motion.p>
          
          <motion.div
            className="hero-buttons"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <Link to="/contact" className="btn btn-primary btn-large">
              Contact Us
            </Link>
          </motion.div>
        </motion.div>
        
        <motion.div
          className="hero-image"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.4, duration: 0.8 }}
        >
          <div className="hero-image-wrapper">
            <div className="cosmic-circle"></div>
            <div className="astro-symbol">🔮</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;
