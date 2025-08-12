import React from "react";
import ServicesHero from "../components/ServicesHero";
import ServiceCompareFeature from "../components/ServiceCompareFeature";
import FAQ from "../components/FAQ";
import { ParticlesBackground } from "../components/ui/particles-background";
import { Badge } from "../components/ui/badge";
import { Button } from "../components/ui/button";
import { CheckCircle, MoveRight } from "lucide-react";

const ServicesPage: React.FC = () => {
  const additionalServices = [
    {
      title: "Load Management",
      description:
        "Streamline your load bookings, tracking, and management in a single platform.",
      features: [
        "Multi-source load search & booking",
        "Real-time load tracking",
        "Document management system",
        "Custom route planning",
      ],
    },
    {
      title: "Financial Services",
      description:
        "Improve your cash flow and financial health with our specialized solutions.",
      features: [
        "Quick-pay options",
        "Expense tracking & management",
        "Tax preparation assistance",
        "Accounting software integration",
      ],
    },
    {
      title: "Compliance Management",
      description:
        "Stay compliant with regulations and focus on what you do best - driving.",
      features: [
        "Automated filing systems",
        "Regulatory updates",
        "Document management",
        "Audit preparation tools",
      ],
    },
  ];

  return (
    <>
      {/* New animated hero for Services page */}
      <ServicesHero />

      {/* Main Service Comparison */}
      <ServiceCompareFeature />

      {/* Additional Services Section */}
      <ParticlesBackground className="py-16 bg-white dark:bg-neutral-950">
        <div className="container mx-auto px-4 text-center relative z-10">
          <h2 className="section-subtitle mb-4">Support Services</h2>
          <p className="gradient-text section-title mb-6">
            Additional Tools to Streamline Your Operations
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-12 tracking-tight">
            Beyond our core offerings, we provide these specialized services to
            enhance your business efficiency.
          </p>

          <div className="grid md:grid-cols-3 gap-8 mt-12">
            {additionalServices.map((service, index) => (
              <div
                key={index}
                className="bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-800 p-6 text-left"
              >
                <h3 className="text-2xl font-bold mb-3 text-neutral-800 dark:text-neutral-200">
                  {service.title}
                </h3>
                <p className="text-gray-600 dark:text-gray-400 mb-6">
                  {service.description}
                </p>
                <ul className="space-y-2">
                  {service.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-2">
                      <CheckCircle className="h-5 w-5 text-green-500" />
                      <span className="text-neutral-700 dark:text-neutral-300">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </ParticlesBackground>

      {/* Call to Action Section */}
      <ParticlesBackground className="py-16 bg-neutral-50 dark:bg-neutral-900">
        <div className="container mx-auto px-4 text-center relative z-10">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-4">Get Started Today</Badge>
            <h2 className="gradient-text section-title mb-6">
              Ready to Transform Your Trucking Business?
            </h2>
            <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto mb-8 tracking-tight">
              Join hundreds of independent truckers who have streamlined their
              operations and increased their revenue with Ora Freight.
            </p>

            <div className="flex flex-col gap-4 justify-center items-center">
              <Button
                size="lg"
                onClick={() =>
                  window.open(
                    "https://form.jotform.com/252234291018147",
                    "_blank"
                  )
                }
                className="group"
              >
                Start Your Application
                <MoveRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Button>

              <p className="text-sm text-gray-500 dark:text-gray-400">
                No setup fees • Quick approval process
              </p>
            </div>
          </div>
        </div>
      </ParticlesBackground>

      {/* FAQ Section */}
      <FAQ />
    </>
  );
};

export default ServicesPage;
