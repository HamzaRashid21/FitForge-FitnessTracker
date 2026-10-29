import React from 'react';
import { HeroSection } from '../components/public/HeroSection.js';
import { MarqueeTicker } from '../components/public/MarqueeTicker.js';
import { FeatureSpotlight } from '../components/public/FeatureSpotlight.js';
import { ProcessEngine } from '../components/public/ProcessEngine.js';
import { FaqAccordion } from '../components/public/FaqAccordion.js';
import { CtaBanner } from '../components/public/CtaBanner.js';

export const HomePage: React.FC = () => {
  return (
    <div style={{ display: 'flex', flexDirection: 'column' }}>
      {/* Orisa Home 7 Split Hero */}
      <HeroSection />

      {/* Live Metric Marquee */}
      <MarqueeTicker />

      {/* Core Platform Modules */}
      <FeatureSpotlight />

      {/* The 4-Phase Process Engine */}
      <ProcessEngine />

      {/* Interactive FAQ Accordion */}
      <FaqAccordion />

      {/* Closing High-Conversion CTA */}
      <CtaBanner />
    </div>
  );
};
