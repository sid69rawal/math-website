'use client';

import Header from '@/components/Header';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import WhatWeOfferSection from '@/components/WhatWeOfferSection';
import OurApproachSection from '@/components/OurApproachSection';
import TestimonialsSection from '@/components/TestimonialsSection';
import CallToActionSection from '@/components/CallToActionSection';
export default function Home() {
  return (
    <div className="min-h-screen bg-gray-50">

      {/* Header with Navigation */}
      <Header />

      {/* Hero Section */}
      <HeroSection />

      {/* What We Offer Section */}
      <WhatWeOfferSection />

      {/* Our Unique Math Approach Section */}
      <OurApproachSection />

      {/* Testimonials Section */}
      <TestimonialsSection />

      {/* Call to Action Section */}
      <CallToActionSection />

      {/* Footer */}
      <Footer />
    </div>
  );
}
