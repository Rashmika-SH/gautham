import { motion } from 'framer-motion';
import StatsCounter from '../../components/StatsCounter/StatsCounter';
import SEO from '../../components/SEO/SEO';
import { pageSEO } from '../../config/seo';
import './About.css';

const About = () => {
  return (
    <div className="about-page">
      <SEO
        title={pageSEO.about.title}
        description={pageSEO.about.description}
        keywords={pageSEO.about.keywords}
        url="/about"
      />
      
      <section className="about-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="about-hero-content text-center"
          >
            <div className="about-hero-icon">🕉️</div>
            <h1>About Master Gautham</h1>
            <p className="about-hero-description">
              Over 30 years of dedicated service in Vedic astrology and spiritual guidance
            </p>
          </motion.div>
        </div>
      </section>

      <section className="about-story section">
        <div className="container">
          <div className="about-content-grid">
            <motion.div
              className="about-text glass"
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
            >
              <h2>Our Journey</h2>
              <p>
                Master Gautham is a renowned astrology services provider known for his deep
                expertise and intuitive insights in the field of Vedic astrology. With years of
                experience and a profound understanding of ancient astrological principles, Master Gautham
                Anagh has established himself as a trusted guide for individuals seeking clarity
                and direction in various aspects of their lives.
              </p>
              <p>
                His journey in astrology began over three decades ago, driven by a passion for
                understanding the cosmic forces that shape our destinies. Through dedicated study
                and practice of ancient Vedic traditions, he has mastered the art of interpreting
                celestial patterns and their influence on human life.
              </p>
            </motion.div>

            <motion.div
              className="about-text glass"
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.3 }}
            >
              <h2>Our Approach</h2>
              <p>
                Master Gautham offers personalized astrology services tailored to illuminate
                life's journey with cosmic wisdom. With a blend of expertise and empathy, Master Gautham
                delves deep into astrological charts, unveiling insights to navigate challenges and
                embrace opportunities.
              </p>
              <p>
                His guidance fosters self-awareness, empowering individuals to align with their true
                path and potential. Whether seeking clarity in relationships, career decisions, or
                personal growth, Master Gautham's consultations provide practical, transformative advice.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      <StatsCounter />

      <section className="about-expertise section">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-header text-center"
          >
            <h2>Areas of Expertise</h2>
            <p className="section-subtitle">
              Comprehensive astrological services backed by decades of experience
            </p>
          </motion.div>

          <div className="expertise-grid">
            {[
              { icon: '📊', title: 'Vedic Astrology', description: 'Traditional birth chart analysis and predictions' },
              { icon: '💑', title: 'Relationship Guidance', description: 'Compatibility assessments and relationship counseling' },
              { icon: '💼', title: 'Career Consulting', description: 'Professional guidance and timing for career moves' },
              { icon: '🛡️', title: 'Spiritual Protection', description: 'Black magic removal and negative energy cleansing' },
              { icon: '🔮', title: 'Remedial Solutions', description: 'Practical remedies and spiritual healing techniques' },
              { icon: '✨', title: 'Life Path Guidance', description: 'Understanding your purpose and life direction' }
            ].map((item, index) => (
              <motion.div
                key={index}
                className="expertise-card glass"
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="expertise-icon">{item.icon}</div>
                <h3>{item.title}</h3>
                <p>{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <section className="about-philosophy section">
        <div className="container">
          <motion.div
            className="philosophy-content glass"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2>Our Philosophy</h2>
            <p>
              We believe that astrology is not just about predicting the future, but about
              empowering individuals to make informed decisions and take control of their destiny.
              Our approach combines ancient wisdom with modern understanding, providing practical
              solutions that work in today's world.
            </p>
            <p>
              Every consultation is conducted with the utmost confidentiality and respect for your
              personal journey. We are committed to providing honest, accurate, and compassionate
              guidance that helps you navigate life's challenges with confidence and clarity.
            </p>
            <div className="philosophy-values">
              <div className="value-item">
                <span className="value-icon">🎯</span>
                <span>Accuracy</span>
              </div>
              <div className="value-item">
                <span className="value-icon">❤️</span>
                <span>Compassion</span>
              </div>
              <div className="value-item">
                <span className="value-icon">🔒</span>
                <span>Confidentiality</span>
              </div>
              <div className="value-item">
                <span className="value-icon">⚡</span>
                <span>Results</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default About;
