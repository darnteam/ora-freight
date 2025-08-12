import React, { useRef, useState } from "react";
import emailjs from "@emailjs/browser";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "./ui/accordion";
import { Input } from "./ui/input";
import { User, Mail, MapPin, Truck, Phone } from "lucide-react";
import { Button } from "./ui/button";

import { ParticlesBackground } from "./ui/particles-background";

interface FormSection {
  id: string;
  title: string;
  icon: React.ReactNode;
  children: React.ReactNode;
  isComplete?: boolean;
}

const ContactForm: React.FC = () => {
  const formRef = useRef<HTMLFormElement>(null);
  const [sending, setSending] = useState(false);
  const [sent, setSent] = useState(false);
  const [error, setError] = useState<string | null>(null);

  // Form state
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    company: "",
    fleetSize: "",
    years: "",
    interest: {
      virtualCarrier: false,
      flex: false,
      notSure: false,
    },
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value, type, checked } = e.target;
    if (name in form.interest) {
      setForm((prev) => ({
        ...prev,
        interest: { ...prev.interest, [name]: checked },
      }));
    } else {
      setForm((prev) => ({ ...prev, [name]: value }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setSending(true);
    setError(null);

    const templateParams = {
      first_name: form.firstName,
      last_name: form.lastName,
      email: form.email,
      phone: form.phone,
      company: form.company,
      fleet_size: form.fleetSize,
      years: form.years,
      interest: Object.entries(form.interest)
        .filter(([_, v]) => v)
        .map(([k]) => k)
        .join(", "),
    };

    try {
      await emailjs.send(
        "service_61oc16p",
        "template_cqsc4az",
        templateParams,
        "ZMTe85RW82QvzQAau"
      );
      setSent(true);
      setForm({
        firstName: "",
        lastName: "",
        email: "",
        phone: "",
        company: "",
        fleetSize: "",
        years: "",
        interest: { virtualCarrier: false, flex: false, notSure: false },
      });
    } catch (err) {
      setError("Failed to send. Please try again.");
    } finally {
      setSending(false);
    }
  };

  const sections: FormSection[] = [
    {
      id: "1",
      icon: (
        <User className="size-4 stroke-2 text-neutral-600 dark:text-neutral-400" />
      ),
      title: "Personal Information",
      children: (
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            name="firstName"
            placeholder="First Name"
            value={form.firstName}
            onChange={handleChange}
            required
          />
          <Input
            type="text"
            name="lastName"
            placeholder="Last Name"
            value={form.lastName}
            onChange={handleChange}
            required
          />
        </div>
      ),
    },
    {
      id: "2",
      icon: (
        <Mail className="size-4 stroke-2 text-neutral-600 dark:text-neutral-400" />
      ),
      title: "Contact Information",
      children: (
        <div className="flex flex-col gap-2">
          <Input
            type="email"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
            required
          />
          <Input
            type="tel"
            name="phone"
            placeholder="Phone"
            value={form.phone}
            onChange={handleChange}
          />
        </div>
      ),
    },
    {
      id: "3",
      icon: (
        <Truck className="size-4 stroke-2 text-neutral-600 dark:text-neutral-400" />
      ),
      title: "Business Information",
      children: (
        <div className="flex flex-col gap-2">
          <Input
            type="text"
            name="company"
            placeholder="Company Name (optional)"
            value={form.company}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="fleetSize"
            placeholder="Fleet Size"
            value={form.fleetSize}
            onChange={handleChange}
          />
          <Input
            type="text"
            name="years"
            placeholder="Years in Business"
            value={form.years}
            onChange={handleChange}
          />
        </div>
      ),
    },
    {
      id: "4",
      icon: (
        <MapPin className="size-4 stroke-2 text-neutral-600 dark:text-neutral-400" />
      ),
      title: "Service Interest",
      children: (
        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              id="virtual-carrier"
              name="virtualCarrier"
              checked={form.interest.virtualCarrier}
              onChange={handleChange}
              className="rounded"
            />
            <label htmlFor="virtual-carrier">Virtual Carrier</label>
          </div>
          <div className="flex items-center gap-2 mb-2">
            <input
              type="checkbox"
              id="flex"
              name="flex"
              checked={form.interest.flex}
              onChange={handleChange}
              className="rounded"
            />
            <label htmlFor="flex">Flex</label>
          </div>
          <div className="flex items-center gap-2">
            <input
              type="checkbox"
              id="not-sure"
              name="notSure"
              checked={form.interest.notSure}
              onChange={handleChange}
              className="rounded"
            />
            <label htmlFor="not-sure">Not sure - need consultation</label>
          </div>
        </div>
      ),
    },
  ];

  return (
    <ParticlesBackground className="py-16 bg-white dark:bg-neutral-950">
      <div
        id="contact"
        className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10"
      >
        <div className="text-center mb-12">
          <h2 className="section-subtitle mb-4">Contact Us</h2>
          <p className="gradient-text section-title mb-6 max-w-4xl mx-auto">
            Ready to Optimize Your Trucking Business?
          </p>
          <p className="text-lg md:text-xl text-gray-600 dark:text-gray-400 max-w-3xl mx-auto tracking-tight">
            Fill out the form below and one of our specialists will contact you
            to discuss the best solution for your needs.
          </p>
        </div>

        <div className="flex flex-col md:flex-row gap-8 items-start justify-center">
          {/* Form Section */}
          <form
            ref={formRef}
            onSubmit={handleSubmit}
            className="w-full max-w-md bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-6 border border-gray-100 dark:border-gray-700"
          >
            <Accordion type="single" collapsible className="w-full">
              {sections.map((section) => (
                <AccordionItem
                  key={section.id}
                  value={section.id}
                  className="border-b border-gray-200 dark:border-gray-700"
                >
                  <AccordionTrigger className="group">
                    <div className="flex items-center gap-2">
                      {section.icon}
                      <span className="text-neutral-800 dark:text-neutral-200">
                        {section.title}
                      </span>
                      {section.isComplete && (
                        <span className="ml-2 text-sm text-green-500">✓</span>
                      )}
                    </div>
                  </AccordionTrigger>
                  <AccordionContent>{section.children}</AccordionContent>
                </AccordionItem>
              ))}
            </Accordion>
            <div className="mt-6">
              <Button className="w-full" type="submit" disabled={sending}>
                {sending ? "Sending..." : sent ? "Sent!" : "Submit Request"}
              </Button>
              {error && (
                <p className="text-xs text-center text-red-500 mt-2">{error}</p>
              )}
              <p className="text-xs text-center text-gray-500 dark:text-gray-400 mt-3">
                We respect your privacy and will never share your information
                with third parties.
              </p>
            </div>
          </form>
          {/* Contact Info Section */}
          <div className="w-full max-w-md bg-white dark:bg-neutral-800 shadow-lg rounded-lg p-6 border border-gray-100 dark:border-gray-700">
            <h3 className="text-xl font-bold mb-9 text-neutral-800 dark:text-neutral-200">
              Get in Touch
            </h3>

            <div className="space-y-4">
              {/* <div className="flex items-start gap-3">
                <Phone className="w-5 h-5 text-neutral-600 dark:text-neutral-400 mt-1" />
                <div>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">Call Us</p>
                  <p className="text-gray-600 dark:text-gray-400">+1 (800) 555-1234</p>
                </div>
              </div> */}

              <div className="flex items-start gap-3">
                <Mail className="w-5 h-5 text-neutral-600 dark:text-neutral-400 mt-1" />
                <div>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">
                    Email Us
                  </p>
                  <p className="text-gray-600 dark:text-gray-400">
                    support@orafreight.com
                  </p>
                </div>
              </div>
              {/*
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-neutral-600 dark:text-neutral-400 mt-1" />
                <div>
                  <p className="font-medium text-neutral-800 dark:text-neutral-200">Visit Us</p>
                  <p className="text-gray-600 dark:text-gray-400">
                    123 Trucking Way<br />
                    San Francisco, CA 94107
                  </p>
                </div>
              </div>
              */}
            </div>

            <div className="mt-6">
              <h3 className="text-lg font-semibold mb-3 mt-14 text-neutral-800 dark:text-neutral-200">
                Business Hours
              </h3>
              <p className="text-gray-600 dark:text-gray-400">
                Monday - Friday: 8:00 AM - 8:00 PM EST
              </p>
              <p className="text-gray-600 dark:text-gray-400">
                Saturday: 9:00 AM - 5:00 PM EST
              </p>
              <p className="text-gray-600 dark:text-gray-400">Sunday: Closed</p>
            </div>
          </div>
        </div>
      </div>
    </ParticlesBackground>
  );
};

export default ContactForm;
