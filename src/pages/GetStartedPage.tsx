import React, { useEffect } from 'react';
import Cal, { getCalApi } from "@calcom/embed-react";
import { ParticlesBackground } from '../components/ui/particles-background';
import { Button } from '../components/ui/button';
import { motion } from 'framer-motion';
import { 
  Calendar, 
  Clock, 
  User, 
  CheckCircle, 
  Truck, 
  Phone,
  Mail,
  Zap,
  BarChart3
} from 'lucide-react';

const GetStartedPage: React.FC = () => {
  useEffect(() => {
    (async function () {
      const cal = await getCalApi({"namespace":"15min"});
      cal("ui", {"hideEventTypeDetails":false,"layout":"month_view"});
    })();
  }, []);

  const benefits = [
    {
      icon: <Truck className="w-6 h-6" />,
      title: "Video Consultation",
      description: "Face-to-face discussion about your trucking needs"
    },
    {
      icon: <User className="w-6 h-6" />,
      title: "Expert Guidance",
      description: "Get personalized advice from industry professionals"
    },
    {
      icon: <CheckCircle className="w-6 h-6" />,
      title: "Custom Solutions",
      description: "Tailored strategies for your specific business goals"
    },
    {
      icon: <Zap className="w-6 h-6" />,
      title: "Quick Setup",
      description: "Fast implementation with minimal downtime"
    }
  ];

  const features = [
    {
      icon: <BarChart3 className="w-5 h-5" />,
      text: "100% Free Consultation"
    },
    {
      icon: <Clock className="w-5 h-5" />,
      text: "15-Minute Quick Start"
    },
    {
      icon: <CheckCircle className="w-5 h-5" />,
      text: "No Commitment Required"
    },
    {
      icon: <Phone className="w-5 h-5" />,
      text: "Instant Support Available"
    }
  ];

  return (
    <>
      {/* Hero Section */}
      <ParticlesBackground className="min-h-screen flex items-center justify-center bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 relative z-10">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="max-w-4xl mx-auto text-center"
          >
            <div className="mb-6">
              <span className="inline-block px-4 py-2 rounded-full bg-gray-100 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 text-neutral-600 dark:text-neutral-400 text-sm font-medium">
                Free Consultation Available
              </span>
            </div>
            
            <h1 className="text-5xl sm:text-6xl md:text-7xl font-bold mb-8 tracking-tight">
              <span className="gradient-text">Book Your</span>
              <br />
              <span className="text-neutral-900 dark:text-white">Demo Today</span>
            </h1>
            
            <p className="text-xl md:text-2xl text-gray-600 dark:text-gray-400 mb-12 max-w-3xl mx-auto leading-relaxed">
              Schedule a personalized 15-minute consultation to discover how Ora Freight can transform your trucking business operations.
            </p>

            {/* Feature badges */}
            <div className="flex flex-wrap justify-center gap-4 mb-12">
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  transition={{ delay: 0.2 + index * 0.1 }}
                  className="flex items-center gap-2 px-4 py-2 rounded-full bg-gray-50 dark:bg-neutral-900 shadow-md border border-gray-100 dark:border-neutral-800"
                >
                  {feature.icon}
                  <span className="text-sm font-medium text-neutral-700 dark:text-neutral-300">
                    {feature.text}
                  </span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </ParticlesBackground>

      {/* Benefits Section */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="section-subtitle mb-4">What You'll Get</h2>
              <p className="gradient-text section-title mb-6">
                Your Demo Includes
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto">
                Every demo session is designed to provide maximum value and actionable insights for your trucking business.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="text-center group"
                >
                  <div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-gray-100 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 mb-6 group-hover:scale-110 transition-transform duration-300">
                    {benefit.icon}
                  </div>
                  <h3 className="text-xl font-bold text-neutral-900 dark:text-white mb-3">
                    {benefit.title}
                  </h3>
                  <p className="text-gray-600 dark:text-gray-400 leading-relaxed">
                    {benefit.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Calendar Section */}
      <ParticlesBackground className="py-20 bg-gray-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="section-subtitle mb-4">Schedule Now</h2>
              <p className="gradient-text section-title mb-6">
                Choose Your Preferred Time
              </p>
              <p className="text-lg text-gray-600 dark:text-gray-400 max-w-2xl mx-auto mb-8">
                Select a time that works best for you. Our team is ready to help you optimize your trucking operations.
              </p>
            </div>

            {/* Calendar Container */}
            <div className="bg-white dark:bg-neutral-900 rounded-2xl shadow-2xl border border-gray-200 dark:border-neutral-800 overflow-hidden">
              <div className="p-6 border-b border-gray-200 dark:border-neutral-800 bg-gray-100 dark:bg-neutral-800">
                <div className="flex items-center gap-3">
                  <Calendar className="w-6 h-6 text-neutral-600 dark:text-neutral-400" />
                  <div>
                    <h3 className="text-xl font-bold text-neutral-900 dark:text-white">
                      Book Your Free Demo
                    </h3>
                    <p className="text-sm text-gray-600 dark:text-gray-400">
                      15-minute consultation with our trucking experts
                    </p>
                  </div>
                </div>
              </div>
              
              <div className="p-2">
                <Cal 
                  namespace="15min"
                  calLink="artin-rexhepi-h3y5ft/15min"
                  style={{width:"100%",height:"600px",overflow:"scroll"}}
                  config={{"layout":"month_view","theme":"auto"}}
                />
              </div>
            </div>
          </div>
        </div>
      </ParticlesBackground>

      {/* Call to Action Section */}
      <section className="py-20 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="gradient-text section-title mb-6">
              Ready to Transform Your Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 mb-10 tracking-tight">
              Join hundreds of truckers who have already optimized their operations with Ora Freight. 
              Your success story starts with a simple conversation.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
              <Button size="lg" className="px-8 py-4 text-lg">
                <Mail className="mr-2 h-5 w-5" />
                Schedule Demo
              </Button>
              <a href="#/contact">
                <Button size="lg" variant="outline" className="px-8 py-4 text-lg">
                  <Phone className="mr-2 h-5 w-5" />
                  Call Us Instead
                </Button>
              </a>
            </div>

            <div className="text-sm text-gray-500 dark:text-gray-400">
              <p className="mb-2">Your information is secure and private</p>
              <p>No spam, just valuable insights for your business</p>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default GetStartedPage; 