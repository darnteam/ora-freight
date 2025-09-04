import React from "react";
import { AnimatedHero } from "./ui/animated-hero";

const AboutHero: React.FC = () => {
  return (
    <AnimatedHero
      titles={[
        "experienced",
        "innovative",
        "dedicated",
        "customer-focused",
        "tech-driven",
      ]}
      mainText="A team that's truly"
      description="At Ora Freight, we combine deep industry expertise with cutting-edge technology to create solutions that address the real challenges faced by independent truckers and small fleets."
      primaryButtonText="Apply Now"
      secondaryButtonText="Book a Demo"
      primaryButtonHref="https://www.jotform.com/build/252234291018147?iak=dae4eff51219b6094cb16302b76e055a-a139263544e2ec56"
      secondaryButtonHref="#/get-started"
    />
  );
};

export default AboutHero;
