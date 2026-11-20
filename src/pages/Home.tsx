import React from 'react';
import { SEO } from '../components/common/SEO';
import { Hero } from '../components/home/Hero';
import { HomeAboutGlimpse } from '../components/home/HomeAboutGlimpse';
import { HomeServicesGlimpse } from '../components/home/HomeServicesGlimpse';
import { HomeGalleryGlimpse } from '../components/home/HomeGalleryGlimpse';
import { HomeWhyChooseUs } from '../components/home/HomeWhyChooseUs';
import { HomeContactCTA } from '../components/home/HomeContactCTA';

export const Home: React.FC = () => {
  return (
    <div className="w-full">
      {/* Search Engine Optimization */}
      <SEO
        title="Best Second Hand Cars in Kolkata & Certified Pre-Owned Dealership"
        description="Indiacarbazar is Kolkata's premier multi-brand showroom for certified second hand cars, instant vehicle buying & selling, complete RTO registration, car insurance renewal, and low-EMI car finance."
      />

      {/* 1. Hero with 3 rotating images & luxury Framer Motion sequence */}
      <Hero />

      {/* 2. Glimpse of About Page */}
      <HomeAboutGlimpse />

      {/* 3. Glimpse of Services Page (Interactive cards with deep routing) */}
      <HomeServicesGlimpse />

      {/* 4. Glimpse of Gallery Page (with Box Screen / Lightbox popup) */}
      <HomeGalleryGlimpse />

      {/* 5. Why Choose Us / Trust Metrics */}
      <HomeWhyChooseUs />

      {/* 6. Glimpse of Contact & Direct Helpline */}
      <HomeContactCTA />
    </div>
  );
};

export default Home;
