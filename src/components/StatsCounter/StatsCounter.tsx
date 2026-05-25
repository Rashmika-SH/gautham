import { motion } from 'framer-motion';
import { useCountUp } from '../../hooks/useCountUp';
import './StatsCounter.css';

const StatsCounter = () => {
  const { count: experience, elementRef: expRef } = useCountUp(30);
  const { count: followers, elementRef: followersRef } = useCountUp(20000);
  const { count: satisfaction, elementRef: satisfactionRef } = useCountUp(99);

  return (
    <section className="stats-section section">
      <div className="container">
        <motion.div
          className="stats-grid"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="stat-card glass" ref={expRef}>
            <div className="stat-icon">📅</div>
            <div className="stat-number">{experience}+</div>
            <div className="stat-label">Years Experience</div>
          </div>

          <div className="stat-card glass" ref={followersRef}>
            <div className="stat-icon">👥</div>
            <div className="stat-number">{followers.toLocaleString()}+</div>
            <div className="stat-label">Followers</div>
          </div>

          <div className="stat-card glass" ref={satisfactionRef}>
            <div className="stat-icon">⭐</div>
            <div className="stat-number">{satisfaction}%</div>
            <div className="stat-label">Satisfaction</div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default StatsCounter;
