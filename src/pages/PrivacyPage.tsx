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

const PrivacyPage: React.FC = () => {
  return (
    <div className="bg-white dark:bg-neutral-950 py-16 px-4">
      <div className="max-w-3xl mx-auto">
        <h1 className="section-title gradient-text mb-2">Privacy Policy</h1>
        <p className="mb-10 text-sm text-neutral-500 dark:text-neutral-400">
          Last updated: {LAST_UPDATED}
        </p>

        <p className="mb-10 text-neutral-600 dark:text-neutral-300 leading-relaxed">
          {COMPANY} ("we," "us," or "our") respects your privacy and is
          committed to protecting the personal information you share with us.
          This Privacy Policy explains what information we collect, how we use
          and protect it, and the choices you have — including how we handle
          mobile phone numbers and text (SMS) messaging.
        </p>

        <Section title="1. Information We Collect">
          <p>We may collect the following information when you contact us, request a consultation, or opt in to text messaging:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Contact details</strong> — your name, email address, mobile phone number, and company name.</li>
            <li><strong>Business details</strong> — information you provide such as fleet size, years in business, and the services you're interested in.</li>
            <li><strong>Consent records</strong> — whether and when you opted in to receive email or SMS communications.</li>
            <li><strong>Technical data</strong> — basic information such as your browser type and pages visited, collected to operate and improve our website.</li>
          </ul>
        </Section>

        <Section title="2. How We Use Your Information">
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and provide the services you request;</li>
            <li>Have a specialist contact you to discuss the best solution for your business;</li>
            <li>Send you account, service, and customer-care messages;</li>
            <li>With your consent, send you marketing and promotional messages about our services;</li>
            <li>Operate, maintain, and improve our website and services; and</li>
            <li>Comply with legal obligations.</li>
          </ul>
        </Section>

        <Section id="sms" title="3. SMS / Text Messaging">
          <p>
            If you provide your mobile phone number and opt in, {COMPANY} may
            send you text (SMS) messages. These may include both{" "}
            <strong>conversational / customer-care messages</strong> (such as
            replies to your inquiry, follow-ups, and consultation scheduling)
            and, where you have consented,{" "}
            <strong>promotional / marketing messages</strong> about our
            services.
          </p>

          <div className="rounded-xl border border-neutral-200 dark:border-neutral-800 bg-neutral-50 dark:bg-neutral-900 p-5">
            <p className="font-semibold text-neutral-900 dark:text-white mb-2">
              No mobile information is shared with third parties for marketing.
            </p>
            <p>
              No mobile information will be shared with third parties or
              affiliates for marketing or promotional purposes. All categories
              of information described in this Privacy Policy exclude text
              messaging originator opt-in data and consent; this information
              will <strong>not</strong> be shared with any third parties. We
              only share data with subcontractors who help us deliver these
              services (for example, our SMS provider), and only to the extent
              necessary to send the messages you requested.
            </p>
          </div>

          <p><strong>How you opt in.</strong> You provide express consent to receive text messages by submitting your phone number through a form on our website and checking the SMS consent box, or by otherwise agreeing in writing. Consent to receive marketing text messages is not a condition of any purchase.</p>

          <p><strong>Message frequency.</strong> Message frequency varies depending on your interaction with us.</p>

          <p><strong>Cost.</strong> Message and data rates may apply. Please check with your mobile carrier for details about your plan.</p>

          <p>
            <strong>Opt out.</strong> You can cancel SMS messages at any time by
            replying <strong>STOP</strong> to any message. After you send STOP,
            we will send a final confirmation message and will no longer send
            you SMS messages. To opt back in, sign up again as you did
            initially.
          </p>

          <p>
            <strong>Help.</strong> If you are experiencing issues, reply{" "}
            <strong>HELP</strong> for assistance, or contact us at{" "}
            <a className="underline hover:text-neutral-900 dark:hover:text-white" href={`mailto:${CONTACT_EMAIL}`}>{CONTACT_EMAIL}</a>.
          </p>

          <p>Carriers are not liable for delayed or undelivered messages.</p>
        </Section>

        <Section title="4. How We Share Information">
          <p>
            We do not sell your personal information. We may share information
            only with trusted service providers who perform services on our
            behalf (such as email and SMS delivery providers), and only as
            needed to provide those services. As stated above, text messaging
            opt-in data and consent are never shared with third parties or
            affiliates for marketing purposes.
          </p>
          <p>We may also disclose information where required by law or to protect our legal rights.</p>
        </Section>

        <Section title="5. Data Security">
          <p>
            We maintain reasonable administrative, physical, and technical
            safeguards designed to protect your personal information against
            unauthorized access, loss, or misuse. No method of transmission or
            storage is completely secure, but we work to protect your
            information and review our practices regularly.
          </p>
        </Section>

        <Section title="6. Your Choices and Rights">
          <ul className="list-disc pl-6 space-y-2">
            <li>You can opt out of marketing emails by using the unsubscribe link in any message.</li>
            <li>You can opt out of SMS messages at any time by replying STOP.</li>
            <li>You may request access to, correction of, or deletion of your personal information by contacting us using the details below.</li>
          </ul>
        </Section>

        <Section title="7. Children's Privacy">
          <p>Our website and services are not directed to children under 16, and we do not knowingly collect personal information from children.</p>
        </Section>

        <Section title="8. Changes to This Policy">
          <p>We may update this Privacy Policy from time to time. When we do, we will revise the "Last updated" date at the top of this page. Your continued use of our website or services after changes take effect constitutes acceptance of the updated policy.</p>
        </Section>

        <Section title="9. Contact Us">
          <p>If you have any questions about this Privacy Policy or our data practices, please contact us:</p>
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

export default PrivacyPage;
