import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Scale, FileText } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const COMPANY = 'Lumen LIFI';
const BRAND = 'Lumen LIFI';
const WEBSITE = 'lifilumen.com'; // Updated domain
const EMAIL = 'operations@lumenlifi.com';

export default function TermsAndConditions() {
  return (
    <div className="relative overflow-hidden min-h-screen bg-white text-slate-800 antialiased selection:bg-emerald-100">
      <Head>
        <title>Lumen LIFI — Terms &amp; Conditions</title>
        <meta
          name="description"
          content={`${BRAND} terms of service — subscription, payment, shipping, refund, and usage policies.`}
        />
      </Head>

      {/* ── ABSOLUTE BACKGROUND GRID LAYER ── */}
      <div
        className="absolute inset-0 pointer-events-none z-0 opacity-50 dark:opacity-30"
        style={{
          backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)',
          backgroundSize: '64px 64px'
        }}
      />

      <div className="relative z-10">
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
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600 font-mono text-[10px] font-bold uppercase">
              <Scale className="w-3.5 h-3.5" /> Institutional Service Charter
            </div>
            <h1 className="text-4xl font-black text-slate-900 tracking-tight">Terms &amp; Conditions</h1>
            <p className="text-sm text-slate-400 font-mono">Effective Date: June 17, 2026</p>
          </div>

          <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-600">
            <p>
              These Terms &amp; Conditions (&quot;Terms&quot;) govern your access to and use of the website at{' '}
              <a href={`https://${WEBSITE}`} className="text-emerald-600 hover:underline">
                {WEBSITE}
              </a>{' '}
              and the purchase of products and services offered by <strong>{COMPANY}</strong> under the{' '}
              <strong>{BRAND}</strong> brand. By accessing our website, creating an account, or completing a
              purchase, you agree to be bound by these Terms.
            </p>

            <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-2">
              <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                <FileText className="w-3.5 h-3.5 text-slate-700" /> Agreement
              </h3>
              <p className="text-xs text-slate-500">
                Please read these Terms carefully before using our services. If you do not agree to these Terms,
                you may not access or use our website or purchase our products.
              </p>
            </div>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              1. Services &amp; Products
            </h3>
            <p>
              {BRAND} provides residential LiFi (Light Fidelity) internet connectivity solutions, including
              hardware components (core routers, ceiling antennas, USB dongles) and subscription-based internet
              service plans. Product specifications, availability, and pricing are subject to change without
              prior notice.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              2. Eligibility
            </h3>
            <p>
              You must be at least 18 years of age and capable of entering into a legally binding contract to
              use our services. By using our services, you represent and warrant that you meet these requirements.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              3. Account Registration
            </h3>
            <p>
              Certain features require account registration. You are responsible for maintaining the
              confidentiality of your account credentials and for all activities that occur under your account.
              You agree to provide accurate, current, and complete information and to update it as necessary.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              4. Pricing &amp; Payment
            </h3>
            <p>
              All prices are listed in US Dollars (USD) unless otherwise stated and are inclusive of applicable
              taxes unless noted. We reserve the right to modify pricing at any time. Payment must be made at the
              time of purchase or on the billing date for subscription plans.
            </p>
            <p>
              We accept payment through authorized third-party payment processors. By providing payment
              information, you authorize us to charge your selected payment method for all fees incurred. You
              agree to provide valid, up-to-date payment information and to pay all charges incurred.
            </p>
            <p>
              Failed payments may result in suspension of service until the outstanding balance is resolved.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              5. Subscriptions &amp; Billing
            </h3>
            <p>
              Subscription plans renew automatically on a recurring basis (monthly or annually, as selected)
              unless cancelled before the renewal date. You authorize us to charge your payment method on each
              renewal date for the applicable subscription fee.
            </p>
            <p>
              You may cancel your subscription at any time by contacting{' '}
              <a href={`mailto:${EMAIL}`} className="text-emerald-600 hover:underline">
                {EMAIL}
              </a>
              . Cancellation takes effect at the end of the current billing period. No partial refunds are
              provided for unused portions of a billing period unless required by law.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              6. Shipping &amp; Delivery
            </h3>
            <p>
              Hardware orders are shipped to the address you provide at checkout. Delivery times are estimates
              and not guaranteed. Risk of loss and title for hardware pass to you upon delivery to the carrier.
              You are responsible for providing an accurate shipping address.
            </p>
            <p>
              Installation services, where offered, are subject to availability in your area and may require
              additional scheduling.
            </p>

            <h3 id="refund-policy" className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              7. Refund &amp; Cancellation Policy
            </h3>
            <p>
              <strong>30-Day Satisfaction Guarantee:</strong> New customers may request a full refund within
              thirty (30) days of hardware delivery if the LiFi system does not meet the performance parameters
              described at the time of purchase, subject to our technical assessment.
            </p>
            <p>
              <strong>Hardware returns:</strong> To initiate a return, contact{' '}
              <a href={`mailto:${EMAIL}`} className="text-emerald-600 hover:underline">
                {EMAIL}
              </a>{' '}
              within the return window. Hardware must be returned in original condition with all components and
              packaging. Return shipping costs may apply unless the return is due to our error or a defective
              product.
            </p>
            <p>
              <strong>Refunds:</strong> Approved refunds are processed to the original payment method within
              seven to fourteen (7–14) business days after we receive and inspect returned hardware. Subscription
              fees are non-refundable except as stated above or as required by applicable law.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              8. Hardware Ownership &amp; Warranty
            </h3>
            <p>
              LiFi hardware shipped to you remains the property of {COMPANY} unless explicitly purchased
              outright. You agree not to modify, disassemble, or tamper with hardware components. A limited
              warranty covers manufacturing defects for twelve (12) months from the date of delivery. This
              warranty does not cover damage caused by misuse, unauthorized modification, or normal wear.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              9. Acceptable Use
            </h3>
            <p>You agree not to:</p>
            <ul className="list-disc pl-5 space-y-1">
              <li>Use our services for any unlawful purpose or in violation of any applicable laws.</li>
              <li>Interfere with or disrupt the integrity or performance of our network or services.</li>
              <li>Attempt to gain unauthorized access to our systems, networks, or other users&apos; accounts.</li>
              <li>Transmit malware, spam, or other harmful content.</li>
              <li>Resell or redistribute our services without prior written authorization.</li>
            </ul>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              10. Service Availability &amp; Limitations
            </h3>
            <p>
              LiFi connectivity depends on line-of-sight between transmitter and receiver components within your
              premises. Physical obstructions, environmental factors, or improper installation may affect
              performance. We are not liable for temporary service interruptions caused by factors outside our
              reasonable control.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              11. Intellectual Property
            </h3>
            <p>
              All content, trademarks, logos, software, and technology on our website and in our products are
              owned by or licensed to {COMPANY} and are protected by intellectual property laws. You may not
              copy, modify, distribute, or create derivative works without our prior written consent.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              12. Limitation of Liability
            </h3>
            <p>
              To the maximum extent permitted by applicable law, {COMPANY} and its officers, directors,
              employees, and agents shall not be liable for any indirect, incidental, special, consequential, or
              punitive damages, including loss of profits, data, or goodwill, arising from your use of our
              services.
            </p>
            <p>
              Our total liability for any claim arising from these Terms or your use of our services shall not
              exceed the amount you paid to us in the twelve (12) months preceding the claim.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              13. Indemnification
            </h3>
            <p>
              You agree to indemnify and hold harmless {COMPANY} from any claims, damages, losses, or expenses
              (including reasonable legal fees) arising from your violation of these Terms or misuse of our
              services.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              14. Governing Law &amp; Dispute Resolution
            </h3>
            <p>
              These Terms are governed by the laws of the State of Washington. Any disputes arising from these
              Terms shall be subject to the exclusive jurisdiction of the courts located in Washington. Before
              initiating formal proceedings, you agree to contact us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-emerald-600 hover:underline">
                {EMAIL}
              </a>{' '}
              to attempt informal resolution.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              15. Changes to These Terms
            </h3>
            <p>
              We may revise these Terms at any time by posting the updated version on this page. Material
              changes will be indicated by updating the &quot;Effective Date.&quot; Your continued use of our
              services after changes constitutes acceptance of the revised Terms.
            </p>

            <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">
              16. Contact Information
            </h3>
            <p>For questions about these Terms, billing, refunds, or cancellations, contact:</p>
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
              <Link href="/privacy" className="text-emerald-600 hover:underline">
                Privacy Policy
              </Link>
              .
            </p>
          </div>
        </main>

        <Footer />
      </div>
    </div>
  );
}