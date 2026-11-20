import React, { useEffect } from 'react';
import { siteData } from '../../data/siteData';
import { TOP_SEO_KEYWORDS } from '../../data/seoKeywords';

export interface SEOProps {
  title?: string;
  description?: string;
  keywords?: string[];
  canonicalUrl?: string;
  ogImage?: string;
  ogType?: 'website' | 'article';
  schemaData?: Record<string, unknown>;
}

export const SEO: React.FC<SEOProps> = ({
  title,
  description = "Indiacarbazar is Kolkata's premier multi-brand showroom for certified second hand cars, instant vehicle buying & selling, complete RTO registration, car insurance renewal, and low-EMI car finance.",
  keywords = TOP_SEO_KEYWORDS,
  canonicalUrl,
  ogImage = '/images/hero-car-1.jpg',
  ogType = 'website',
  schemaData
}) => {
  useEffect(() => {
    // Determine dynamic site origin and current page URL
    const origin = typeof window !== 'undefined' ? window.location.origin : '';
    const currentUrl = canonicalUrl || (typeof window !== 'undefined' ? window.location.href : '/');
    const resolvedOgImage = ogImage.startsWith('http') ? ogImage : `${origin}${ogImage}`;

    // 1. Set document title
    const formattedTitle = title
      ? `${title} | Indiacarbazar Kolkata`
      : 'Indiacarbazar | Second Hand Cars in Kolkata & Certified Pre-Owned Dealership';
    document.title = formattedTitle;

    // Helper to update or create meta tags
    const setMetaTag = (attribute: 'name' | 'property', key: string, content: string) => {
      let element = document.querySelector(`meta[${attribute}="${key}"]`) as HTMLMetaElement | null;
      if (!element) {
        element = document.createElement('meta');
        element.setAttribute(attribute, key);
        document.head.appendChild(element);
      }
      element.setAttribute('content', content);
    };

    // 2. Core Search Engine Meta Tags
    setMetaTag('name', 'description', description);
    setMetaTag('name', 'keywords', Array.isArray(keywords) ? keywords.join(', ') : keywords);
    setMetaTag('name', 'author', 'Indiacarbazar');
    setMetaTag('name', 'robots', 'index, follow, max-image-preview:large, max-snippet:-1, max-video-preview:-1');
    setMetaTag('name', 'geo.region', 'IN-WB');
    setMetaTag('name', 'geo.placename', 'Kolkata');
    setMetaTag('name', 'telephone', siteData.company.helpline);

    // 3. OpenGraph / Facebook Tags
    setMetaTag('property', 'og:site_name', 'Indiacarbazar');
    setMetaTag('property', 'og:title', formattedTitle);
    setMetaTag('property', 'og:description', description);
    setMetaTag('property', 'og:url', currentUrl);
    setMetaTag('property', 'og:type', ogType);
    setMetaTag('property', 'og:image', resolvedOgImage);
    setMetaTag('property', 'og:locale', 'en_IN');

    // 4. Twitter Card Tags
    setMetaTag('name', 'twitter:card', 'summary_large_image');
    setMetaTag('name', 'twitter:title', formattedTitle);
    setMetaTag('name', 'twitter:description', description);
    setMetaTag('name', 'twitter:image', resolvedOgImage);

    // 5. Canonical Link
    let canonicalLink = document.querySelector('link[rel="canonical"]') as HTMLLinkElement | null;
    if (!canonicalLink) {
      canonicalLink = document.createElement('link');
      canonicalLink.setAttribute('rel', 'canonical');
      document.head.appendChild(canonicalLink);
    }
    canonicalLink.setAttribute('href', currentUrl);

    // 6. Structured Data Schema.org (JSON-LD)
    const defaultSchema = {
      '@context': 'https://schema.org',
      '@type': 'AutoDealer',
      name: 'Indiacarbazar',
      alternateName: 'India Car Bazar Kolkata',
      url: origin || currentUrl,
      logo: `${origin}/favicon.svg`,
      image: resolvedOgImage,
      description: description,
      telephone: siteData.company.helplineFormatted,
      priceRange: '₹₹₹',
      address: {
        '@type': 'PostalAddress',
        streetAddress: siteData.company.address.street,
        addressLocality: siteData.company.address.city,
        addressRegion: siteData.company.address.state,
        postalCode: siteData.company.address.pincode,
        addressCountry: 'IN'
      },
      geo: {
        '@type': 'GeoCoordinates',
        latitude: '22.5126',
        longitude: '88.3973'
      },
      openingHoursSpecification: [
        {
          '@type': 'OpeningHoursSpecification',
          dayOfWeek: [
            'Monday',
            'Tuesday',
            'Wednesday',
            'Thursday',
            'Friday',
            'Saturday',
            'Sunday'
          ],
          opens: '09:30',
          closes: '20:30'
        }
      ],
      keywords: TOP_SEO_KEYWORDS.join(', '),
      sameAs: [
        'https://facebook.com/indiacarbazar',
        'https://instagram.com/indiacarbazar'
      ]
    };

    let scriptTag = document.getElementById('schema-structured-data') as HTMLScriptElement | null;
    if (!scriptTag) {
      scriptTag = document.createElement('script');
      scriptTag.id = 'schema-structured-data';
      scriptTag.type = 'application/ld+json';
      document.head.appendChild(scriptTag);
    }
    scriptTag.textContent = JSON.stringify(schemaData || defaultSchema);
  }, [title, description, keywords, canonicalUrl, ogImage, ogType, schemaData]);

  return null;
};

export default SEO;
