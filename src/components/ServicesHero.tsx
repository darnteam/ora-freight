import React from 'react';
import { AnimatedHero } from './ui/animated-hero';

const ServicesHero: React.FC = () => {
  return (
    <AnimatedHero 
      titles={[
        "Virtual Carrier",
        "Flex Solutions",
        "Instant Payments",
        "Load Booking",
        "Compliance"
      ]}
      mainText="Professional trucking services with"
      description="Choose from our tailored solutions designed specifically for independent truckers and small fleet owners. Our technology-driven platform makes managing your trucking business easier than ever."
      primaryButtonText="Explore Solutions"
      secondaryButtonText="Schedule a Demo"
      primaryButtonHref="#service-options"
      secondaryButtonHref="#/contact"
    />
  );
};

export default ServicesHero;
