import React from 'react';
import { Feature } from './ui/feature-with-image-comparison';
import { Button } from './ui/button';
import { ServiceFeatureSection } from './ui/service-feature-section';
import { CheckCircle, Truck, Briefcase } from 'lucide-react';
import { ParticlesBackground } from './ui/particles-background';

interface ServiceCompareFeatureProps {
  id?: string;
}

const ServiceCompareFeature: React.FC<ServiceCompareFeatureProps> = ({ id }) => {
  // Virtual Carrier features with detailed descriptions
  const virtualCarrierFeatures = [
    {
      title: "Motor Carrier Authority",
      description: "Operate under our authority without the hassle of getting your own"
    },
    {
      title: "Compliance Management",
      description: "We handle all regulatory paperwork and compliance requirements"
    },
    {
      title: "Instant Payments",
      description: "Get paid quickly after delivery, improving your cash flow"
    },
    {
      title: "Premium Load Access",
      description: "Gain access to high-quality loads from trusted brokers"
    },
    {
      title: "Insurance Coverage",
      description: "Operate under our comprehensive insurance policy"
    },
    {
      title: "24/7 Support",
      description: "Get help whenever you need it from our dedicated team"
    }
  ];
  
  // Flex features with detailed descriptions
  const flexFeatures = [
    {
      title: "Load Management",
      description: "Organize and manage your loads efficiently in one place"
    },
    {
      title: "Business Analytics",
      description: "Get insights into your operations to optimize profitability"
    },
    {
      title: "Smart Recommendations",
      description: "Receive data-driven load suggestions tailored to your needs"
    },
    {
      title: "System Integration",
      description: "Seamlessly connect with your existing business systems"
    },
    {
      title: "Business Growth Focus",
      description: "Concentrate on expanding while we handle the back-end"
    },
    {
      title: "Custom Reporting",
      description: "Generate reports tailored to your specific business needs"
    }
  ];

  // Left content (Virtual Carrier) - but with right-aligned text
  const virtualCarrierContent = (
    <div className="flex flex-col bg-gradient-to-br from-neutral-50 to-neutral-100/50 dark:from-neutral-950/50 dark:to-neutral-900/30 p-4 h-full text-right">
      <div className="flex items-center justify-end gap-3 mb-4">
        <h3 className="text-xl font-bold text-neutral-700 dark:text-neutral-300">Virtual Carrier</h3>
        <div className="p-2 rounded-full bg-neutral-100 dark:bg-neutral-800">
          <Truck className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
        </div>
      </div>
      
      <ServiceFeatureSection
        badge="Authority Solution"
        title="Operate under our carrier authority"
        description="Perfect for owner-operators who want to focus on driving without the administrative burden"
        features={virtualCarrierFeatures}
        variant="primary"
        className="text-right"
      />
      
      <div className="mt-auto pt-4 px-4">
        <a href="#/get-started">
          <Button variant="default" className="w-full">
            Get Started
          </Button>
        </a>
      </div>
    </div>
  );

  // Right content (Flex)
  const flexContent = (
    <div className="flex flex-col bg-gradient-to-br from-gray-50 to-gray-100/50 dark:from-gray-900/50 dark:to-gray-800/30 p-4 h-full">
      <div className="flex items-center gap-3 mb-4">
        <div className="p-2 rounded-full bg-gray-100 dark:bg-gray-800">
          <Briefcase className="w-6 h-6 text-gray-600 dark:text-gray-400" />
        </div>
        <h3 className="text-xl font-bold text-gray-700 dark:text-gray-300">Flex Solution</h3>
      </div>
      
      <ServiceFeatureSection
        badge="Own Authority"
        title="Use your existing authority"
        description="Ideal for carriers with established authority looking to streamline operations"
        features={flexFeatures}
        variant="secondary"
      />
      
      <div className="mt-auto pt-4 px-4">
        <Button variant="outline" className="w-full">
          Learn More
        </Button>
      </div>
    </div>
  );
  
  return (
    <ParticlesBackground className="py-12 md:py-24 bg-white dark:bg-neutral-950">
      <div id={id || "service-options"} className="relative z-10">
        {/* Comparison Feature with custom title */}
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center mb-12">
          <h2 className="section-subtitle mb-4">Service Options</h2>
          <p className="gradient-text section-title mb-6 max-w-4xl mx-auto">
            Choose the right service for your business needs
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-10 tracking-tight">
            Compare our two powerful options designed for different trucking operations
          </p>
        </div>
        
        <Feature 
          showHeader={false}
          leftContent={virtualCarrierContent}
          rightContent={flexContent}
          leftLabel="Virtual Carrier"
          rightLabel="Flex"
          className="relative"
        />
      </div>
    </ParticlesBackground>
  );
};

export default ServiceCompareFeature;
