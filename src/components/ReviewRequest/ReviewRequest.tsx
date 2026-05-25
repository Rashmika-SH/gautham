import { useState } from 'react';
import { motion } from 'framer-motion';
import { FaStar, FaGoogle, FaFacebook } from 'react-icons/fa';
import './ReviewRequest.css';

const ReviewRequest = () => {
  const [showReviewPrompt, setShowReviewPrompt] = useState(false);

  const handleSatisfactionClick = (satisfied: boolean) => {
    if (satisfied) {
      setShowReviewPrompt(true);
    } else {
      // If not satisfied, redirect to contact form for feedback
      window.location.href = '/contact';
    }
  };

  return (
    <div className="review-request-container">
      {!showReviewPrompt ? (
        <motion.div
          className="satisfaction-check glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>How was your experience?</h3>
          <p>We'd love to hear about your consultation with Master Gautham</p>
          <div className="satisfaction-buttons">
            <button 
              className="btn btn-primary"
              onClick={() => handleSatisfactionClick(true)}
            >
              <FaStar /> Excellent Experience
            </button>
            <button 
              className="btn btn-secondary"
              onClick={() => handleSatisfactionClick(false)}
            >
              Need Improvement
            </button>
          </div>
        </motion.div>
      ) : (
        <motion.div
          className="review-prompt glass"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
        >
          <h3>Thank you for your feedback!</h3>
          <p>Would you mind sharing your positive experience with others?</p>
          <div className="review-buttons">
            <a 
              href="https://search.google.com/local/writereview?placeid=YOUR_GOOGLE_PLACE_ID"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-google"
            >
              <FaGoogle /> Review on Google
            </a>
            <a 
              href="https://www.facebook.com/YOUR_FACEBOOK_PAGE/reviews"
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-facebook"
            >
              <FaFacebook /> Review on Facebook
            </a>
          </div>
          <p className="review-note">
            Your honest review helps others find the spiritual guidance they need
          </p>
        </motion.div>
      )}
    </div>
  );
};

export default ReviewRequest;
