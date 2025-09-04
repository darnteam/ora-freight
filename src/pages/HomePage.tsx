import React from "react";
import Hero from "../components/Hero";
import FeaturesSection from "../components/FeaturesSection";
import FAQ from "../components/FAQ";
import { Button } from "../components/ui/button";
import { ParticlesBackground } from "../components/ui/particles-background";
import { MoveRight } from "lucide-react";

const HomePage: React.FC = () => {
  return (
    <>
      <Hero />
      <FeaturesSection />
      <FAQ />

      {/* Call-to-Action Section */}
      <ParticlesBackground className="py-24 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="gradient-text section-title mb-6">
              Ready to Optimize Your Trucking Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 tracking-tight">
              Explore our services designed specifically for independent
              truckers and small fleet owners. We help you manage your business
              more efficiently and maximize profitability.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a href="#/services">
                <Button size="lg" className="px-8">
                  Explore Services <MoveRight className="ml-2 h-5 w-5" />
                </Button>
              </a>
              <a href="#/get-started">
                <Button size="lg" variant="outline" className="px-8">
                  Contact Us
                </Button>
              </a>
            </div>
          </div>
        </div>
      </ParticlesBackground>
    </>
  );
};

export default HomePage;
