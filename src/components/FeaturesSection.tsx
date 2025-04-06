import React from 'react';
import { FeaturesSectionWithHoverEffects } from './ui/features-section-with-hover-effects';
import { ParticlesBackground } from './ui/particles-background';

const FeaturesSection: React.FC = () => {
  return (
    <ParticlesBackground className="py-16 bg-white dark:bg-neutral-950">
      <div id="features" className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-subtitle mb-4">Features</h2>
          <p className="gradient-text section-title mb-6 max-w-4xl mx-auto">
            All-in-One Solution for Independent Truckers
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto tracking-tight">
            Ora Freight provides everything you need to optimize your operations and increase profitability.
            Explore our comprehensive features designed for owner-operators.
          </p>
        </div>
        
        <FeaturesSectionWithHoverEffects />
      </div>
    </ParticlesBackground>
  );
};

export default FeaturesSection;
