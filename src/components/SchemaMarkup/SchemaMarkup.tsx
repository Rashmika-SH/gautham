import { Helmet } from 'react-helmet-async';

interface SchemaMarkupProps {
  type: 'person' | 'service' | 'organization' | 'localBusiness';
  data: any;
}

const SchemaMarkup: React.FC<SchemaMarkupProps> = ({ type, data }) => {
  const generateSchema = () => {
    const baseSchema = {
      "@context": "https://schema.org"
    };

    switch (type) {
      case 'person':
        return {
          ...baseSchema,
          "@type": "Person",
          "name": "Master Gautham",
          "url": "https://myastroshivaanagh.com",
          "image": "https://myastroshivaanagh.com/logo.jpeg",
          "jobTitle": "Vedic Astrologer",
          "description": "Expert Vedic astrologer with over 30 years of experience in horoscope readings, spiritual healing, and astrological guidance",
          "knowsAbout": [
            "Vedic Astrology",
            "Horoscope Reading", 
            "Spiritual Healing",
            "Black Magic Removal",
            "Palm Reading",
            "Vashikaran",
            "Psychic Reading",
            "Negative Energy Removal"
          ],
          "areaServed": {
            "@type": "Country",
            "name": "USA"
          },
          "hasOccupation": {
            "@type": "Occupation",
            "name": "Astrologer",
            "occupationLocation": {
              "@type": "Country",
              "name": "USA"
            }
          },
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+17042366628",
            "contactType": "customer service",
            "email": "mastergautham2006@gmail.com",
            "availableLanguage": ["English", "Hindi"]
          },
          "sameAs": [
            "https://myastroshivaanagh.com"
          ],
          ...data
        };

      case 'service':
        return {
          ...baseSchema,
          "@type": "Service",
          "name": data.name,
          "description": data.description,
          "provider": {
            "@type": "Person",
            "name": "Master Gautham",
            "url": "https://myastroshivaanagh.com"
          },
          "areaServed": {
            "@type": "Country",
            "name": "USA"
          },
          "availableChannel": {
            "@type": "ServiceChannel",
            "serviceUrl": `https://myastroshivaanagh.com/services/${data.id}`,
            "servicePhone": "+17042366628"
          },
          "category": "Astrology Services",
          "offers": {
            "@type": "Offer",
            "availability": "https://schema.org/InStock",
            "priceRange": "$$"
          },
          ...data
        };

      case 'localBusiness':
        return {
          ...baseSchema,
          "@type": "LocalBusiness",
          "name": "Master Gautham",
          "description": "Expert Vedic astrology services in Charlotte, North Carolina, USA",
          "url": "https://myastroshivaanagh.com",
          "telephone": "+17042366628",
          "email": "mastergautham2006@gmail.com",
          "priceRange": "$$",
          "paymentAccepted": "Cash, Credit Card, Bank Transfer",
          "currenciesAccepted": "AUD",
          "openingHours": "Mo-Su 09:00-21:00",
          "areaServed": [
            {
              "@type": "City",
              "name": "Charlotte",
              "addressRegion": "NC",
              "addressCountry": "US"
            },
            {
              "@type": "City", 
              "name": "Charlotte",
              "addressRegion": "NC",
              "addressCountry": "US"
            },
            {
              "@type": "City",
              "name": "Charlotte, North Carolina", 
              "addressRegion": "NC",
              "addressCountry": "US"
            }
          ],
          "serviceType": [
            "Vedic Astrology",
            "Horoscope Reading",
            "Spiritual Healing",
            "Black Magic Removal",
            "Vashikaran Services"
          ],
          "aggregateRating": {
            "@type": "AggregateRating",
            "ratingValue": "4.9",
            "reviewCount": "150",
            "bestRating": "5",
            "worstRating": "1"
          },
          ...data
        };

      case 'organization':
        return {
          ...baseSchema,
          "@type": "Organization",
          "name": "Master Gautham",
          "url": "https://myastroshivaanagh.com",
          "logo": "https://myastroshivaanagh.com/logo.jpeg",
          "description": "Leading Vedic astrology services provider in Charlotte, North Carolina, USA",
          "contactPoint": {
            "@type": "ContactPoint",
            "telephone": "+17042366628",
            "contactType": "customer service",
            "email": "mastergautham2006@gmail.com"
          },
          "founder": {
            "@type": "Person",
            "name": "Master Gautham"
          },
          "foundingDate": "1990",
          "numberOfEmployees": "1-5",
          "areaServed": {
            "@type": "Country",
            "name": "USA"
          },
          ...data
        };

      default:
        return baseSchema;
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(generateSchema())}
      </script>
    </Helmet>
  );
};

export default SchemaMarkup;
