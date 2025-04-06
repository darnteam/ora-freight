import React from 'react';
import { AnimatedHero } from './ui/animated-hero';

const ContactHero: React.FC = () => {
  return (
    <AnimatedHero 
      titles={[
        "24/7 available",
        "ready to help",
        "just a call away",
        "quick to respond",
        "here for you"
      ]}
      mainText="Support that's"
      description="Have questions or need assistance? Our team of transportation experts is ready to help you navigate any challenges and find the right solutions for your business."
      primaryButtonText="Contact Us Now"
      secondaryButtonText="Find Our Offices"
      primaryButtonHref="#contact"
      secondaryButtonHref="#locations"
    />
  );
};

export default ContactHero;
