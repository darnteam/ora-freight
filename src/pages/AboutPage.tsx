import React from "react";
import About from "../components/About";
import AboutHero from "../components/AboutHero";
import { ParticlesBackground } from "../components/ui/particles-background";
import { Button } from "../components/ui/button";
import { MoveRight } from "lucide-react";

const AboutPage: React.FC = () => {
  const team = [
    {
      name: "Jane Smith",
      role: "CEO & Founder",
      image:
        "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Former trucking company owner with 15+ years of industry experience.",
    },
    {
      name: "Michael Johnson",
      role: "CTO",
      image:
        "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Tech expert with a passion for solving transportation logistics challenges.",
    },
    {
      name: "David Williams",
      role: "Operations Director",
      image:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
      bio: "Former fleet manager with expertise in optimizing trucking operations.",
    },
  ];

  return (
    <>
      <AboutHero />
      <About />

      {/* Team Section -- Commented until future updates*/}
      {/* <ParticlesBackground className="py-16 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 relative z-10">
          <div className="text-center mb-12">
            <h2 className="section-subtitle mb-4">Our Team</h2>
            <p className="gradient-text section-title mb-6">
              Meet the Experts Behind Ora Freight
            </p>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto tracking-tight">
              Our leadership team combines decades of trucking industry experience with cutting-edge technological expertise.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {team.map((member, index) => (
              <div 
                key={index} 
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-800 overflow-hidden"
              >
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.image} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center"
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-bold text-neutral-800 dark:text-neutral-200">
                    {member.name}
                  </h3>
                  <p className="text-neutral-600 dark:text-neutral-400 font-medium mb-2">
                    {member.role}
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>
          
          <div className="text-center mt-16">
            <a href="#/contact">
              <Button size="lg" className="px-8">
                Get in Touch With Our Team <MoveRight className="ml-2 h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </ParticlesBackground> */}
    </>
  );
};

export default AboutPage;
