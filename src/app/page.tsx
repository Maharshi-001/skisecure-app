'use client';

import React, { useState } from 'react';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { ContactModal } from '@/components/contact';
import HeroSection from '@/components/sections/hero/HeroSection';
import SecuritySection from '@/components/sections/security/SecuritySection';
import PlatformSection from '@/components/sections/platform/PlatformSection';
import ArchitectureSection from '@/components/sections/architecture/ArchitectureSection';
import CapabilitiesSection from '@/components/sections/capabilities/CapabilitiesSection';
import TeamSection from '@/components/sections/team/TeamSection';
import WhySkieSecureSection from '@/components/sections/why-skisecure/WhySkieSecureSection';
import PricingSection from '@/components/sections/pricing/PricingSection';
import FAQSection from '@/components/sections/faqs/FAQSection';
import { trackCtaClick } from '@/services/analytics';

export default function Home() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [modalTitle, setModalTitle] = useState('Join the Waitlist & Get Early Access');
  const [modalInterest, setModalInterest] = useState('Growth ($8/mo)');

  const handleOpenContactModal = (title?: string, interest?: string) => {
    const selectedTitle = title || 'Join the Waitlist & Get Early Access';
    const selectedInterest = interest || 'Growth ($8/mo)';

    setModalTitle(selectedTitle);
    setModalInterest(selectedInterest);
    setIsModalOpen(true);

    // Track analytics event
    trackCtaClick(selectedTitle, selectedInterest);
  };

  return (
    <main id="main-content">
      {/* Structural Top Navigation Header */}
      <Navbar onOpenModal={handleOpenContactModal} />

      {/* 1. Hero Section: Headline, CTAs, 3D Card, Horizon, Stats */}
      <HeroSection onOpenModal={handleOpenContactModal} />

      {/* 2. Security Section: Problem vs Solution Carousel */}
      <SecuritySection id="security" />

      {/* 3. The Platform: 4 Architectural Pillars */}
      <PlatformSection id="platform" />

      {/* 4. Architecture & Deployment: 3-Zone Diagram + 3 Deployment Cards */}
      <ArchitectureSection id="architecture" />

      {/* 5. Capabilities: 2x4 Feature Grid */}
      <CapabilitiesSection id="features" />

      {/* 6. Your Security Team: 3 Service Models + SOC Preview */}
      <TeamSection id="team" />

      {/* 7. Why SkieSecure: Security Operations Without Overhead + Stats */}
      <WhySkieSecureSection id="why-skisecure" />

      {/* 8. Pricing: 3 Tier Cards + 12 Feature Checklist */}
      <PricingSection id="pricing" onOpenModal={handleOpenContactModal} />

      {/* 9. Common Questions: FAQ Accordion */}
      <FAQSection id="faq" />

      {/* 10. Structural Footer: "Be First in Line" CTA + Footer Navigation */}
      <Footer id="contact" onOpenModal={handleOpenContactModal} />

      {/* Dedicated Contact / Waitlist Popup called from @/components/contact */}
      <ContactModal
        isOpen={isModalOpen}
        onClose={() => setIsModalOpen(false)}
        title={modalTitle}
        initialInterest={modalInterest}
      />
    </main>
  );
}
