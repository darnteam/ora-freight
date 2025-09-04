import React from "react";
import { AnimatedHero } from "./ui/animated-hero";

const ContactHero: React.FC = () => {
  return (
    <AnimatedHero
      titles={[
        "24/7 available",
        "ready to help",
        "just a call away",
        "quick to respond",
        "here for you",
      ]}
      mainText="Support that's"
      description="Have questions or need assistance? Our team of transportation experts is ready to help you navigate any challenges and find the right solutions for your business."
      primaryButtonText="Apply Now"
      secondaryButtonText="Book a Demo"
      primaryButtonHref="https://www.jotform.com/build/252234291018147?iak=dae4eff51219b6094cb16302b76e055a-a139263544e2ec56"
      secondaryButtonHref="#/get-started"
    />
  );
};

export default ContactHero;
