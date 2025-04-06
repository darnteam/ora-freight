import React from 'react';
import { StackedCircularFooter } from './ui/stacked-circular-footer';
import { ParticlesBackground } from './ui/particles-background';

const Footer: React.FC = () => {
  return (
    <ParticlesBackground className="bg-white dark:bg-neutral-950">
      <StackedCircularFooter />
    </ParticlesBackground>
  );
};

export default Footer;
