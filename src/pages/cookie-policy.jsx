import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Cookie } from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

const COMPANY = 'Lumen LIFI';
const BRAND = 'Lumen LIFI';
const WEBSITE = 'lifilumen.com';
const EMAIL = 'operations@lumenlifi.com';

export default function CookiePolicy() {
  return (
    <div className="relative min-h-screen overflow-x-clip lumen-page-bg-white text-slate-800 antialiased selection:bg-emerald-100">
      <Head>
        <title>Cookie Policy | Lumen LiFi</title>
        <meta
          name="description"
          content="Learn how Lumen LiFi uses cookies and similar technologies, and how you can manage your cookie preferences."
        />
        <meta
          name="keywords"
          content="cookie policy, cookies, cookie preferences, LiFi Lumen cookies, LumenFi, Lumen LiFi"
        />
        <link rel="canonical" href={`https://${WEBSITE}/cookie-policy`} />
      </Head>

      <div className="relative z-10">
        <Header />

        <main className="mx-auto min-h-0 max-w-4xl px-4 pb-16 pt-28 font-sans sm:min-h-[100svh] sm:px-6 sm:pb-24 sm:pt-32">
          <Link
            href="/"
            className="mb-12 inline-flex items-center gap-2 font-mono text-xs font-bold text-slate-400 transition-colors hover:text-emerald-600 group"
          >
            <ArrowLeft className="h-3.5 w-3.5 transform transition-transform group-hover:-translate-x-0.5" />
            BACK TO HOME
          </Link>

          <div className="mb-8 space-y-6 border-b border-slate-100 pb-8">
            <h1 className="lumen-h1">Cookie Policy</h1>
            <p className="font-mono text-sm text-slate-400">Last Updated: September 29, 2026</p>
          </div>

          <div className="lumen-prose">
            <p>
              This Cookie Policy explains how <strong>{COMPANY}</strong> (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;),
              operating the <strong>{BRAND}</strong> brand at{' '}
              <a href={`https://${WEBSITE}`} className="text-emerald-600 hover:underline">
                {WEBSITE}
              </a>
              , uses cookies and similar technologies when you visit our website.
            </p>

            <div className="space-y-2 rounded-xl border border-slate-200/60 bg-slate-50 p-4">
              <h3 className="flex items-center gap-2">
                <Cookie className="h-3.5 w-3.5 text-emerald-600" /> What Are Cookies?
              </h3>
              <p>
                Cookies are small text files stored on your device when you visit a website. They help the site
                remember your preferences, keep sessions secure, and understand how pages are used so we can
                improve the experience.
              </p>
            </div>

            <h3>1. How We Use Cookies</h3>
            <p>We may use cookies and similar technologies to:</p>
            <ul>
              <li>
                <strong>Essential / necessary:</strong> enable core site functions such as page navigation,
                security, form submissions, and remembering basic preferences.
              </li>
              <li>
                <strong>Performance / analytics:</strong> understand traffic, popular pages, and how visitors
                move through the site so we can improve content and usability.
              </li>
              <li>
                <strong>Functionality:</strong> remember choices you make (for example language or region) to
                provide a more personalized experience.
              </li>
              <li>
                <strong>Marketing (if enabled):</strong> measure campaign effectiveness or show relevant
                messages. We only use these where allowed and in line with applicable law.
              </li>
            </ul>

            <h3>2. Types of Cookies We May Use</h3>
            <ul>
              <li>
                <strong>Session cookies:</strong> temporary cookies that expire when you close your browser.
              </li>
              <li>
                <strong>Persistent cookies:</strong> remain on your device for a set period or until you delete
                them.
              </li>
              <li>
                <strong>First-party cookies:</strong> set by us on {WEBSITE}.
              </li>
              <li>
                <strong>Third-party cookies:</strong> set by trusted partners (for example analytics or payment
                providers) when their services run on our pages.
              </li>
            </ul>

            <h3>3. Managing Your Preferences</h3>
            <p>
              You can control or delete cookies through your browser settings. Most browsers let you refuse or
              clear cookies, or alert you when a cookie is being set. If you disable cookies, some parts of the
              site may not work as intended.
            </p>
            <p>
              For guidance on common browsers, see their help pages for Chrome, Firefox, Safari, or Edge. You
              can also use industry tools such as the Network Advertising Initiative or Your Online Choices
              where available.
            </p>

            <h3>4. Third-Party Services</h3>
            <p>
              Our website may use third-party tools (for example analytics, embedded forms, or payment
              checkout). Those providers may set their own cookies under their own policies. We recommend
              reviewing their privacy and cookie notices.
            </p>

            <h3>5. Updates to This Policy</h3>
            <p>
              We may update this Cookie Policy from time to time. The &quot;Last Updated&quot; date at the top
              shows when changes were made. Continued use of the site after updates means you accept the revised
              policy.
            </p>

            <h3>6. Contact Us</h3>
            <p>
              Questions about cookies or this policy? Contact us at{' '}
              <a href={`mailto:${EMAIL}`} className="text-emerald-600 hover:underline">
                {EMAIL}
              </a>
              .
            </p>

            <p className="pt-4">
              See also our{' '}
              <Link href="/privacy-policy" className="text-emerald-600 hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms-and-conditions" className="text-emerald-600 hover:underline">
                Terms &amp; Conditions
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
