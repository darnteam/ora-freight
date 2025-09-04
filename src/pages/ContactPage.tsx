import React from "react";
import ContactForm from "../components/ContactForm";
import ContactHero from "../components/ContactHero";

const ContactPage: React.FC = () => {
  return (
    <>
      <ContactHero />
      <ContactForm />

      {/*
      <ParticlesBackground className="py-16 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-subtitle mb-4">Our Locations</h2>
            <p className="gradient-text section-title mb-6">
              Find Us Nationwide
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto tracking-tight">
              With offices across the country, we're strategically positioned to support truckers wherever they operate.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {offices.map((office, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-800 p-6"
              >
                <div className="flex items-center gap-2 mb-4">
                  <MapPin className="w-5 h-5 text-neutral-600 dark:text-neutral-400" />
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                    {office.city}
                  </h3>
                </div>
                <p className="text-gray-600 dark:text-gray-400 mb-4">
                  {office.address}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300 font-medium">
                  {office.phone}
                </p>
                <p className="text-neutral-700 dark:text-neutral-300">
                  {office.email}
                </p>
              </div>
            ))}
          </div>
          
         
          <div className="mt-16 bg-gray-100 dark:bg-neutral-800 rounded-xl h-96 flex items-center justify-center">
            <p className="text-gray-500 dark:text-gray-400">
              Interactive map would be displayed here
            </p>
          </div>
        </div>
      </ParticlesBackground>*/}
    </>
  );
};

export default ContactPage;
