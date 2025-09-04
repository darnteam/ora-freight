import React from "react";
import { AnimatedHero } from "./ui/animated-hero";

const ServicesHero: React.FC = () => {
  return (
    <AnimatedHero
      titles={[
        "Virtual Carrier",
        "Flex Solutions",
        "Instant Payments",
        "Load Booking",
        "Compliance",
      ]}
      mainText="Professional trucking services with"
      description="Choose from our tailored solutions designed specifically for independent truckers and small fleet owners. Our technology-driven platform makes managing your trucking business easier than ever."
      primaryButtonText="Start Applying"
      secondaryButtonText="Schedule a Demo"
      primaryButtonHref="https://www.jotform.com/build/252234291018147?iak=dae4eff51219b6094cb16302b76e055a-a139263544e2ec56"
      secondaryButtonHref="#/contact"
    />
  );
};

export default ServicesHero;
