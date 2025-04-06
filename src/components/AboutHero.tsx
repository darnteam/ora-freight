import React from 'react';
import { AnimatedHero } from './ui/animated-hero';

const AboutHero: React.FC = () => {
  return (
    <AnimatedHero 
      titles={[
        "experienced",
        "innovative",
        "dedicated",
        "customer-focused",
        "tech-driven"
      ]}
      mainText="A team that's truly"
      description="At Ora Freight, we combine deep industry expertise with cutting-edge technology to create solutions that address the real challenges faced by independent truckers and small fleets."
      primaryButtonText="Meet Our Team"
      secondaryButtonText="Our Story"
      primaryButtonHref="#team-section"
      secondaryButtonHref="#about"
    />
  );
};

export default AboutHero;
