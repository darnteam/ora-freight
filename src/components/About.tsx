import React from 'react';
import { Truck, User, CheckCircle, BarChart3 } from 'lucide-react';
import { ParticlesBackground } from './ui/particles-background';

const About: React.FC = () => {
  const stats = [
    { label: 'Fleet Partners', value: '500+' },
    { label: 'Years Experience', value: '12+' },
    { label: 'Loads Delivered', value: '250K+' },
    { label: 'Revenue Generated', value: '$75M+' }
  ];

  const values = [
    {
      icon: <Truck className="h-8 w-8 text-neutral-600 dark:text-neutral-400" />,
      title: 'Carrier-First Approach',
      description: 'We build our technology with carriers in mind, focusing on what truly matters to your business.'
    },
    {
      icon: <CheckCircle className="h-8 w-8 text-neutral-600 dark:text-neutral-400" />,
      title: 'Quality Service',
      description: 'Our commitment to excellence ensures that we provide the highest level of service to all our partners.'
    },
    {
      icon: <User className="h-8 w-8 text-neutral-600 dark:text-neutral-400" />,
      title: 'Trust & Transparency',
      description: 'We believe in complete transparency in our operations, pricing, and communication.'
    },
    {
      icon: <BarChart3 className="h-8 w-8 text-neutral-600 dark:text-neutral-400" />,
      title: 'Data-Driven Solutions',
      description: 'Our platform leverages data analytics to provide insights that help your business grow.'
    }
  ];

  return (
    <ParticlesBackground className="py-16 md:py-24 bg-white dark:bg-neutral-950">
      <div id="about" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center mb-16">
          <h2 className="section-subtitle mb-4">About Us</h2>
          <p className="gradient-text section-title mb-6 max-w-4xl mx-auto">
            Technology-Driven Solutions for Modern Truckers
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto tracking-tight">
            Founded with the mission to empower owner-operators, we've built an all-in-one platform that
            addresses the biggest challenges in the trucking industry.
          </p>
        </div>

        {/* Stats Section */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-10 mb-16">
          {stats.map((stat, index) => (
            <div 
              key={index} 
              className="flex flex-col items-center p-6 bg-gray-50 dark:bg-neutral-900 
                         rounded-lg border border-gray-100 dark:border-neutral-800 transition-transform 
                         hover:transform hover:-translate-y-1 hover:shadow-lg"
            >
              <p className="text-3xl md:text-4xl font-bold gradient-text mb-2">{stat.value}</p>
              <p className="text-sm text-gray-600 dark:text-gray-400 uppercase tracking-wider">{stat.label}</p>
            </div>
          ))}
        </div>

        {/* Main Content with Image */}
        <div className="flex flex-col md:flex-row gap-10 mb-16">
          <div className="md:w-1/2">
            <h3 className="text-2xl md:text-3xl font-bold mb-6 tracking-tight text-neutral-800 dark:text-neutral-200">
              Our Story & Mission
            </h3>
            
            <div className="prose prose-lg dark:prose-invert max-w-none tracking-tight">
              <p>
                Ora Freight is a technology-driven platform designed to streamline business management for 
                independent truckers. By combining innovative technology with deep industry expertise, we offer tools that simplify 
                load booking, optimize cash flow management, and ensure compliance, all while maximizing your 
                revenue potential.
              </p>
              
              <p>
                Whether you're an experienced owner-operator or just starting out, Ora Freight provides the 
                support and solutions you need to succeed in today's competitive transportation landscape.
              </p>
              
              <p className="font-medium border-l-4 border-neutral-900 dark:border-neutral-100 pl-4 italic">
                Our mission is simple: to help independent truckers build more profitable and sustainable businesses.
              </p>
            </div>
          </div>
          
          <div className="md:w-1/2 rounded-lg overflow-hidden h-[400px]">
            <img 
              src="https://images.unsplash.com/photo-1601584115197-04ecc0da31d7?auto=format&fit=crop&w=2000&q=80" 
              alt="Trucks on the highway" 
              className="w-full h-full object-cover rounded-lg shadow-lg"
            />
          </div>
        </div>

        {/* Our Values Section */}
        <div>
          <h3 className="text-2xl md:text-3xl font-bold mb-10 text-center tracking-tight text-neutral-800 dark:text-neutral-200">
            Our Core Values
          </h3>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => (
              <div 
                key={index}
                className="flex flex-col items-center text-center p-6 bg-gray-50 dark:bg-neutral-900 rounded-lg border border-gray-100 dark:border-neutral-800 transition-all hover:shadow-lg"
              >
                <div className="rounded-full bg-gray-100 dark:bg-neutral-800 p-3 mb-4">
                  {value.icon}
                </div>
                <h4 className="text-xl font-bold mb-2 text-neutral-800 dark:text-neutral-200">{value.title}</h4>
                <p className="text-gray-600 dark:text-gray-400">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </ParticlesBackground>
  );
};

export default About;
