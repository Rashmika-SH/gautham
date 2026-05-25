import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import type { Service } from '../../data/services';
import './ServiceCard.css';

interface ServiceCardProps {
  service: Service;
  index: number;
}

const ServiceCard = ({ service, index }: ServiceCardProps) => {
  const bgImage = `/service-bg-${index + 1}.jpg`;

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ delay: index * 0.1, duration: 0.5 }}
    >
      <Link to={`/services/${service.id}`} className="service-card gradient-border">
        <div
          className="service-card-bg"
          style={{ backgroundImage: `url(${bgImage})` }}
        />
        <motion.div
          className="service-card-content"
          whileHover={{ scale: 1.05 }}
          transition={{ duration: 0.3 }}
        >
          <div className="service-icon">
            {service.iconImage ? (
              <img
                src={service.iconImage}
                alt={`${service.title} icon`}
                className="service-icon-image"
              />
            ) : (
              service.icon
            )}
          </div>
          <h3 className="service-title">{service.title}</h3>
          <p className="service-description">{service.description}</p>
          <div className="service-link-arrow">→</div>
        </motion.div>
      </Link>
    </motion.div>
  );
};

export default ServiceCard;
