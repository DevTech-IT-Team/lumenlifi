import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Lock } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const COMPANY = 'Lumen LIFI';
const BRAND = 'Lumen LIFI';
const WEBSITE = 'lumenlifi.com';
const EMAIL = 'operations@lumenlifi.com';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-emerald-100">
      <Head>
        <title>Lumen LIFI — Privacy Policy</title>
        <meta
          name="description"
          content={`${BRAND} privacy policy — how we collect, use, and protect your personal and payment information.`}
        />
      </Head>

      <Header />

      <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 font-sans">
        <Link
          href="/"
          className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-emerald-600 transition-colors mb-12 font-bold group"
        >
          <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
          BACK TO HOME
        </Link>

        <div className="space-y-6 border-b border-slate-100 pb-8 mb-8">
          <h1 className="text-4xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
          <p className="text-sm text-slate-400 font-mono">Last Updated: June 17, 2026</p>
        </div>

        <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-600">
          <p>
            This Privacy Policy describes how <strong>{COMPANY}</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
            operating the <strong>{BRAND}</strong> brand at{' '}
            <a href={`https://${WEBSITE}`} className="text-emerald-600 hover:underline">
              {WEBSITE}
            </a>
            , collects, uses, discloses, and protects your personal information when you visit our website,
            purchase products, subscribe to services, or otherwise interact with us.
          </p>

          <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-2">
            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
              <Lock className="w-3.5 h-3.5 text-emerald-600" /> Our Commitment
            </h3>
            <p className="text-xs text-slate-500">
              We are committed to protecting your privacy and handling your data responsibly. We collect only
              the information necessary to provide our LiFi hardware and subscription services, process payments,
              and fulfill orders.
            </p>
          </div>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            1. Information We Collect
          </h3>
          <p>We may collect the following categories of information:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Identity &amp; contact data:</strong> name, email address, phone number, billing address,
              and shipping/installation address.
            </li>
            <li>
              <strong>Account data:</strong> username, password (stored in encrypted form), subscription plan
              details, and order history.
            </li>
            <li>
              <strong>Payment data:</strong> payment method type, transaction identifiers, and billing records.
              We do <strong>not</strong> store full credit or debit card numbers on our servers.
            </li>
            <li>
              <strong>Technical data:</strong> IP address, browser type, device information, pages visited,
              and cookies or similar tracking technologies.
            </li>
            <li>
              <strong>Communications:</strong> messages you send us via email, contact forms, or customer support
              channels.
            </li>
          </ul>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            2. How We Use Your Information
          </h3>
          <p>We use your information to:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>Process and fulfill orders for LiFi hardware and subscription services.</li>
            <li>Manage recurring billing and subscription renewals.</li>
            <li>Provide customer support and respond to inquiries.</li>
            <li>Send transactional communications (order confirmations, shipping updates, billing notices).</li>
            <li>Improve our website, products, and services.</li>
            <li>Detect, prevent, and address fraud, security issues, and legal compliance.</li>
            <li>Send marketing communications where you have opted in (you may unsubscribe at any time).</li>
          </ul>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            3. Payment Processing
          </h3>
          <p>
            All payment transactions are processed through PCI-DSS compliant third-party payment processors
            and merchant service providers. When you make a purchase, your payment information is transmitted
            directly to our payment processor using industry-standard encryption (SSL/TLS). We receive only
            limited payment confirmation data (such as the last four digits of your card and transaction status)
            necessary to complete your order and maintain billing records.
          </p>
          <p>
            By submitting payment information, you authorize us and our payment processors to charge the
            payment method you provide for the total amount of your purchase, including applicable taxes and
            shipping fees.
          </p>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            4. How We Share Your Information
          </h3>
          <p>We do not sell your personal information. We may share your information with:</p>
          <ul className="list-disc pl-5 space-y-1">
            <li>
              <strong>Payment processors:</strong> to process transactions and prevent fraud.
            </li>
            <li>
              <strong>Shipping &amp; logistics partners:</strong> to deliver hardware to your address.
            </li>
            <li>
              <strong>Service providers:</strong> who assist us with hosting, analytics, email delivery, and
              customer support, under contractual obligations to protect your data.
            </li>
            <li>
              <strong>Legal authorities:</strong> when required by law, court order, or to protect our rights,
              safety, and property.
            </li>
            <li>
              <strong>Business transfers:</strong> in connection with a merger, acquisition, or sale of assets,
              with notice to affected users where required by law.
            </li>
          </ul>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            5. Cookies &amp; Tracking Technologies
          </h3>
          <p>
            We use cookies and similar technologies to maintain your session, remember preferences, analyze
            site traffic, and improve user experience. You can control cookies through your browser settings.
            Disabling cookies may limit certain features of our website.
          </p>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            6. Data Retention
          </h3>
          <p>
            We retain your personal information for as long as necessary to fulfill the purposes described in
            this policy, including to satisfy legal, accounting, and tax requirements. Transaction and billing
            records are typically retained for a minimum of seven (7) years as required by applicable law.
          </p>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            7. Data Security
          </h3>
          <p>
            We implement appropriate technical and organizational measures to protect your personal information,
            including encryption in transit, access controls, and secure server infrastructure. However, no method
            of transmission over the Internet is 100% secure, and we cannot guarantee absolute security.
          </p>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            8. Your Rights
          </h3>
          <p>
            Depending on your location, you may have the right to access, correct, update, or delete your
            personal information; withdraw consent; object to or restrict processing; and request data
            portability. Residents of India may exercise rights under applicable data protection laws, including
            the Digital Personal Data Protection Act, 2023.
          </p>
          <p>
            To exercise any of these rights, contact us at{' '}
            <a href={`mailto:${EMAIL}`} className="text-emerald-600 hover:underline">
              {EMAIL}
            </a>
            . We will respond within a reasonable timeframe as required by applicable law.
          </p>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            9. Children&apos;s Privacy
          </h3>
          <p>
            Our services are not directed to individuals under the age of 18. We do not knowingly collect
            personal information from children. If you believe we have collected information from a child,
            please contact us and we will promptly delete it.
          </p>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            10. International Data Transfers
          </h3>
          <p>
            Your information may be processed and stored in India or other countries where we or our service
            providers operate. By using our services, you consent to the transfer of your information to
            countries that may have different data protection laws than your country of residence.
          </p>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            11. Third-Party Links
          </h3>
          <p>
            Our website may contain links to third-party websites. We are not responsible for the privacy
            practices of those sites. We encourage you to review their privacy policies before providing any
            personal information.
          </p>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            12. Changes to This Policy
          </h3>
          <p>
            We may update this Privacy Policy from time to time. The &quot;Last Updated&quot; date at the top
            of this page will reflect the most recent revision. Material changes will be posted on this page.
            Your continued use of our services after changes constitutes acceptance of the updated policy.
          </p>

          <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
            13. Contact Us
          </h3>
          <p>
            If you have questions or concerns about this Privacy Policy or our data practices, please contact:
          </p>
          <ul className="list-none pl-0 space-y-1">
            <li>
              <strong>{COMPANY}</strong>
            </li>
            <li>
              Email:{' '}
              <a href={`mailto:${EMAIL}`} className="text-emerald-600 hover:underline">
                {EMAIL}
              </a>
            </li>
            <li>
              Website:{' '}
              <a href={`https://${WEBSITE}`} className="text-emerald-600 hover:underline">
                https://{WEBSITE}
              </a>
            </li>
          </ul>
          <p className="pt-2">
            See also our{' '}
            <Link href="/terms" className="text-emerald-600 hover:underline">
              Terms &amp; Conditions
            </Link>
            .
          </p>
        </div>
      </main>

      <Footer />
    </div>
  );
}
