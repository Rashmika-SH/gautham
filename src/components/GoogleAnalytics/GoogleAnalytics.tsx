import { useEffect } from 'react';

declare global {
  interface Window {
    gtag: (...args: any[]) => void;
    dataLayer: any[];
  }
}

const GoogleAnalytics = () => {
  useEffect(() => {
    // Replace with your actual Google Analytics 4 Measurement ID from analytics.google.com
    const GA_MEASUREMENT_ID = 'G-PLACEHOLDER123'; // Update this with your real GA4 ID
    
    // Load Google Analytics script
    const script1 = document.createElement('script');
    script1.async = true;
    script1.src = `https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`;
    document.head.appendChild(script1);

    // Initialize Google Analytics
    const script2 = document.createElement('script');
    script2.innerHTML = `
      window.dataLayer = window.dataLayer || [];
      function gtag(){dataLayer.push(arguments);}
      gtag('js', new Date());
      gtag('config', '${GA_MEASUREMENT_ID}', {
        page_title: document.title,
        page_location: window.location.href
      });
    `;
    document.head.appendChild(script2);

    // Set up gtag function
    window.gtag = function() {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push(arguments);
    };

    return () => {
      // Cleanup scripts on unmount
      document.head.removeChild(script1);
      document.head.removeChild(script2);
    };
  }, []);

  return null;
};

// Helper functions for tracking events
export const trackEvent = (eventName: string, parameters?: any) => {
  if (typeof window !== 'undefined' && window.gtag) {
    window.gtag('event', eventName, parameters);
  }
};

export const trackPhoneCall = () => {
  trackEvent('phone_call', {
    event_category: 'contact',
    event_label: 'phone_number_click',
    value: 1
  });
};

export const trackWhatsAppClick = () => {
  trackEvent('whatsapp_click', {
    event_category: 'contact',
    event_label: 'whatsapp_button',
    value: 1
  });
};

export const trackContactForm = () => {
  trackEvent('contact_form_submit', {
    event_category: 'contact',
    event_label: 'contact_form',
    value: 1
  });
};

export const trackServiceView = (serviceName: string) => {
  trackEvent('service_view', {
    event_category: 'engagement',
    event_label: serviceName,
    value: 1
  });
};

export default GoogleAnalytics;