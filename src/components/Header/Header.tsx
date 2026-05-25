import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { FaBars, FaTimes, FaChevronDown } from 'react-icons/fa';
import { services } from '../../data/services';
import { locations } from '../../data/locations';
import './Header.css';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isServicesOpen, setIsServicesOpen] = useState(false);
  const [isLocationsOpen, setIsLocationsOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
    }
    return () => {
      document.body.style.overflow = '';
    };
  }, [isMobileMenuOpen]);

  // Handle dropdown toggle for mobile (click instead of hover)
  const handleDropdownToggle = (dropdownType: 'services' | 'locations') => {
    if (window.innerWidth <= 768) {
      if (dropdownType === 'services') {
        setIsServicesOpen(!isServicesOpen);
        setIsLocationsOpen(false);
      } else {
        setIsLocationsOpen(!isLocationsOpen);
        setIsServicesOpen(false);
      }
    } else {
      if (dropdownType === 'services') {
        setIsServicesOpen(!isServicesOpen);
        setIsLocationsOpen(false);
      } else {
        setIsLocationsOpen(!isLocationsOpen);
        setIsServicesOpen(false);
      }
    }
  };

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About Us', path: '/about' },
    { name: 'Services', path: '#', hasDropdown: true, dropdownType: 'services' },
    { name: 'Locations', path: '#', hasDropdown: true, dropdownType: 'locations' },
    { name: 'Contact Us', path: '/contact' }
  ];

  return (
    <motion.header
      className={`header ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="header-container container">
        <Link to="/" className="logo" onClick={() => setIsMobileMenuOpen(false)}>
          <motion.div
            className="logo-content"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <div className="logo-icon-wrapper">
              <div className="astro-icon">
                <div className="sun-symbol">☉</div>
                <div className="moon-symbol">☽</div>
                <div className="star-symbol">✦</div>
              </div>
            </div>
            <div className="logo-text-wrapper">
              <span className="logo-main-text">Master Gautham</span>
              <span className="logo-sub-text">Best Astrologer & Psychic Reader Gautham</span>
            </div>
          </motion.div>
        </Link>

        <nav className={`nav ${isMobileMenuOpen ? 'mobile-open' : ''}`}>
          {navLinks.map((link) => (
            <div
              key={link.name}
              className="nav-item"
              onMouseEnter={() => {
                if (window.innerWidth > 768) {
                  if (link.dropdownType === 'services') setIsServicesOpen(true);
                  if (link.dropdownType === 'locations') setIsLocationsOpen(true);
                }
              }}
              onMouseLeave={() => {
                if (window.innerWidth > 768) {
                  if (link.dropdownType === 'services') setIsServicesOpen(false);
                  if (link.dropdownType === 'locations') setIsLocationsOpen(false);
                }
              }}
            >
              {link.hasDropdown ? (
                <div className="dropdown-wrapper">
                  <button 
                    className="nav-link"
                    onClick={() => handleDropdownToggle(link.dropdownType as 'services' | 'locations')}
                  >
                    {link.name}
                    <FaChevronDown className={`dropdown-icon ${(link.dropdownType === 'services' && isServicesOpen) || (link.dropdownType === 'locations' && isLocationsOpen) ? 'open' : ''}`} />
                  </button>
                  <AnimatePresence>
                    {link.dropdownType === 'services' && isServicesOpen && (
                      <motion.div
                        className="services-dropdown"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {services.map((service) => (
                          <Link
                            key={service.id}
                            to={`/services/${service.id}`}
                            className="dropdown-item"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsServicesOpen(false);
                            }}
                          >
                            {service.title}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                    {link.dropdownType === 'locations' && isLocationsOpen && (
                      <motion.div
                        className="services-dropdown"
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.2 }}
                      >
                        {locations.map((location) => (
                          <Link
                            key={location.id}
                            to={`/locations/${location.id}`}
                            className="dropdown-item"
                            onClick={() => {
                              setIsMobileMenuOpen(false);
                              setIsLocationsOpen(false);
                            }}
                          >
                            {location.name}
                          </Link>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              ) : (
                <Link 
                  to={link.path} 
                  className="nav-link"
                  onClick={() => {
                    setIsMobileMenuOpen(false);
                    setIsServicesOpen(false);
                    setIsLocationsOpen(false);
                  }}
                >
                  {link.name}
                </Link>
              )}
            </div>
          ))}
        </nav>

        <button 
          className="mobile-menu-toggle"
          onClick={() => {
            setIsMobileMenuOpen(!isMobileMenuOpen);
            if (!isMobileMenuOpen) {
              setIsServicesOpen(false);
              setIsLocationsOpen(false);
            }
          }}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
        </button>
      </div>
    </motion.header>
  );
};

export default Header;
