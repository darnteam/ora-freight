import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionIconTrigger } from "./ui/accordion";
import { Truck, DollarSign, ShieldCheck, HeadphonesIcon } from "lucide-react";
import { ParticlesBackground } from './ui/particles-background';

const faqItems = [
  {
    id: "1",
    icon: <Truck size={16} strokeWidth={2} className="shrink-0 opacity-60" />,
    title: "How does the Virtual Carrier service work?",
    content:
      "Our Virtual Carrier service allows you to operate under our motor carrier authority without the hassle of maintaining your own. We handle compliance, insurance, and regulatory paperwork so you can focus on driving and generating revenue."
  },
  {
    id: "2",
    icon: <DollarSign size={16} strokeWidth={2} className="shrink-0 opacity-60" />,
    title: "How quickly can I get paid for completed loads?",
    content:
      "With our instant payment system, you can receive payment as soon as the proof-of-delivery is submitted and verified. This typically happens within hours, not days or weeks, significantly improving your cash flow."
  },
  {
    id: "3",
    icon: <ShieldCheck size={16} strokeWidth={2} className="shrink-0 opacity-60" />,
    title: "What compliance requirements do you handle?",
    content:
      "We manage all regulatory filings, DOT compliance, insurance requirements, IFTA reporting, and other paperwork that's typically burdensome for independent operators. Our compliance team stays up-to-date with the latest regulations to keep you operating legally."
  },
  {
    id: "4",
    icon: <HeadphonesIcon size={16} strokeWidth={2} className="shrink-0 opacity-60" />,
    title: "How can I contact customer support?",
    content:
      "Our customer support team is available 24/7 via phone, email, or through our mobile app. Every client is assigned a dedicated account manager who understands your specific business needs and can provide personalized assistance."
  },
];

const FAQ: React.FC = () => {
  return (
    <ParticlesBackground className="py-16 bg-white dark:bg-neutral-950">
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <h2 className="section-subtitle mb-4">FAQ</h2>
          <p className="gradient-text section-title mb-6 max-w-4xl mx-auto">
            Frequently Asked Questions
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto tracking-tight">
            Find answers to common questions about our services and how we can help optimize your trucking operations.
          </p>
        </div>
        
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="w-full" defaultValue="1">
            {faqItems.map((item) => (
              <AccordionItem 
                value={item.id} 
                key={item.id} 
                className="py-2 border-b border-gray-200 dark:border-gray-700"
              >
                <AccordionIconTrigger 
                  icon={item.icon} 
                  title={item.title}
                />
                <AccordionContent className="pb-2 ps-7 text-gray-600 dark:text-gray-400">
                  {item.content}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
          
          <div className="mt-12 text-center">
            <p className="text-lg text-neutral-700 dark:text-neutral-300">
              Still have questions? <a href="#/contact" className="text-indigo-600 dark:text-indigo-400 hover:underline">Contact us</a> for more information.
            </p>
          </div>
        </div>
      </div>
    </ParticlesBackground>
  );
};

export default FAQ;
