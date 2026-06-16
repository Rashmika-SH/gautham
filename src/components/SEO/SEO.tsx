import { Helmet } from 'react-helmet-async';
import type { SEOConfig } from '../../config/seo';

interface SEOProps extends SEOConfig {
  children?: React.ReactNode;
}

const SEO: React.FC<SEOProps> = ({
  title,
  description,
  keywords,
  url,
  image = '/logo.jpeg',
  type = 'website',
  children
}) => {
  const fullUrl = url.startsWith('http') ? url : `https://myastroshivaanagh.com${url}`;
  const fullImageUrl = image.startsWith('http') ? image : `https://myastroshivaanagh.com${image}`;

  return (
    <Helmet>
      {/* Basic Meta Tags */}
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords.join(', ')} />
      <meta name="author" content="Master Gautham" />
      <meta name="robots" content="index, follow" />
      <link rel="canonical" href={fullUrl} />

      {/* Open Graph Meta Tags */}
      <meta property="og:title" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={fullUrl} />
      <meta property="og:type" content={type} />
      <meta property="og:image" content={fullImageUrl} />
      <meta property="og:image:alt" content={title} />
      <meta property="og:site_name" content="Master Gautham" />
      <meta property="og:locale" content="en_AU" />

      {/* Twitter Card Meta Tags */}
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:title" content={title} />
      <meta name="twitter:description" content={description} />
      <meta name="twitter:image" content={fullImageUrl} />

      {/* Additional SEO Meta Tags */}
      <meta name="geo.region" content="US" />
      <meta name="geo.placename" content="USA" />
      <meta name="language" content="English" />
      <meta name="distribution" content="global" />
      <meta name="rating" content="general" />

      {/* Schema.org Structured Data */}
      <script type="application/ld+json">
        {JSON.stringify({
          "@context": "https://schema.org",
          "@type": "Person",
          "name": "Master Gautham",
          "url": "https://myastroshivaanagh.com",
          "image": fullImageUrl,
          "jobTitle": "Vedic Astrologer",
          "description": description,
          "knowsAbout": [
            "Vedic Astrology",
            "Horoscope Reading",
            "Spiritual Healing",
            "Black Magic Removal",
            "Palm Reading",
            "Vashikaran",
            "Psychic Reading"
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
            fullUrl
          ]
        })}
      </script>

      {children}
    </Helmet>
  );
};

export default SEO;
