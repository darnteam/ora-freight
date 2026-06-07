import React from "react";

const LAST_UPDATED = "June 7, 2026";
const COMPANY = "Ora Freight";
const CONTACT_EMAIL = "operations@orafreight.com";

const Section: React.FC<{
  id?: string;
  title: string;
  children: React.ReactNode;
}> = ({ id, title, children }) => (
  <section id={id} className="mb-10 scroll-mt-24">
    <h2 className="text-2xl font-bold mb-4 text-neutral-900 dark:text-white">
      {title}
    </h2>
    <div className="space-y-4 text-neutral-600 dark:text-neutral-300 leading-relaxed">
      {children}
    </div>
  </section>
);

const TermsPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-950 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="section-title gradient-text mb-2">Terms of Service</h1>
        <p className="mb-10 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: {LAST_UPDATED}
        </p>

        <p className="mb-10 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          These Terms of Service ("Terms") govern your use of the {COMPANY}{" "}
          website and services. By accessing our website, submitting a form, or
          opting in to communications from us, you agree to these Terms. Please
          read them carefully together with our{" "}
          <a className="underline hover:text-neutral-900 dark:hover:text-white" href="#/privacy">Privacy Policy</a>.
        </p>

        <Section title="1. Use of Our Website and Services">
          <p>
            You agree to use our website and services only for lawful purposes
            and in a manner that does not infringe the rights of, or restrict
            the use of, our website by any third party. The content on this
            website is provided for general information about {COMPANY} and its
            services for independent truckers and carriers.
          </p>
        </Section>

        <Section title="2. Submissions and Communications">
          <p>
            When you submit information through our forms, you confirm that the
            information you provide is accurate and that you are authorized to
            provide it. By providing your contact details, you agree that we may
            contact you to respond to your inquiry and, where you have opted in,
            to send you the communications described below.
          </p>
        </Section>

        <Section id="sms" title="3. SMS / Text Messaging Terms">
          <p>
            By providing your mobile phone number and opting in through our
            website, you agree to receive text (SMS) messages from {COMPANY}.
            These messages may include customer-care and conversational messages
            (such as replies, follow-ups, and consultation scheduling) and,
            where you have consented, promotional and marketing messages.
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Consent:</strong> Your consent to receive marketing text messages is not a condition of any purchase.</li>
            <li><strong>Message frequency:</strong> Message frequency varies based on your interaction with us.</li>
            <li><strong>Rates:</strong> Message and data rates may apply, depending on your mobile carrier and plan.</li>
            <li><strong>Opt out:</strong> Reply <strong>STOP</strong> at any time to stop receiving messages. You will receive a confirmation, and no further messages will be sent unless you opt in again.</li>
            <li><strong>Help:</strong> Reply <strong>HELP</strong> for assistance, or email <a className="underline hover:text-neutral-900 dark:hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.</li>
            <li><strong>Privacy:</strong> Mobile opt-in data and consent are never shared with third parties or affiliates for marketing purposes. See our <a className="underline hover:text-neutral-900 dark:hover:text-white" href="#/privacy">Privacy Policy</a>.</li>
            <li>Carriers are not liable for delayed or undelivered messages.</li>
          </ul>
        </Section>

        <Section title="4. Intellectual Property">
          <p>
            All content on this website, including text, graphics, logos, and
            images, is the property of {COMPANY} or its licensors and is
            protected by applicable intellectual property laws. You may not
            reproduce or distribute it without our prior written permission.
          </p>
        </Section>

        <Section title="5. Disclaimer of Warranties">
          <p>
            Our website and services are provided on an "as is" and "as
            available" basis without warranties of any kind, whether express or
            implied. We do not warrant that the website will be uninterrupted,
            error-free, or free of harmful components.
          </p>
        </Section>

        <Section title="6. Limitation of Liability">
          <p>
            To the fullest extent permitted by law, {COMPANY} will not be liable
            for any indirect, incidental, or consequential damages arising out
            of or in connection with your use of our website, services, or any
            communications you receive from us.
          </p>
        </Section>

        <Section title="7. Changes to These Terms">
          <p>
            We may update these Terms from time to time. When we do, we will
            revise the "Last updated" date above. Your continued use of our
            website or services after changes take effect constitutes acceptance
            of the updated Terms.
          </p>
        </Section>

        <Section title="8. Contact Us">
          <p>If you have any questions about these Terms, please contact us:</p>
          <address className="not-italic space-y-1">
            <p className="font-semibold text-neutral-900 dark:text-white">{COMPANY}</p>
            <p>
              Email:{" "}
              <a className="underline hover:text-neutral-900 dark:hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>
            </p>
          </address>
        </Section>
      </div>
    </div>
  );
};

export default TermsPage;
