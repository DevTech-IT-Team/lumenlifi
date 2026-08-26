import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Headphones, ShoppingBag, Handshake } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { ContactFormBlock } from '../../components/sections/contact';

const TOPICS = [
  {
    icon: ShoppingBag,
    title: 'Products & Orders',
    desc: 'Home kits, hardware specs, shipping, and order status.',
    email: 'operations@lumenlifi.com',
  },
  {
    icon: Headphones,
    title: 'Support & Billing',
    desc: 'Subscriptions, payments, installation, and troubleshooting.',
    email: 'operations@lumenlifi.com',
  },
  {
    icon: Handshake,
    title: 'Sales & Partnerships',
    desc: 'Pricing, enterprise deployments, and partner programs.',
    email: 'rupali@lifilumen.com',
  },
];

function BackgroundPaths() {
  const paths = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    d: `M-${200 + i * 20} ${100 + i * 15} C ${200 + i * 30} ${300 - i * 10}, ${400 + i * 20} ${-50 + i * 20}, ${1200 + i * 30} ${200 + i * 15}`,
    duration: 15 + (i % 5) * 3,
    delay: (i % 4) * 0.5,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      <svg
        className="h-full min-h-[300px] w-full min-w-[1000px]"
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="var(--lumen-cyan, #00bdc7)"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            className="animate-pulse"
            style={{
              animationDuration: `${path.duration}s`,
              animationDelay: `${path.delay}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden lumen-page-bg-white text-slate-800 antialiased">
      <Head>
        <title>Lumen LIFI — Contact Us</title>
        <meta
          name="description"
          content="Get in touch with Lumen LIFI for product questions, orders, billing, technical support, and partnership inquiries."
        />
        <link rel="canonical" href="https://lifilumen.com/contact" />
      </Head>

      <Header />

      <main className="relative z-10">
        <section className="contact-hero section-wash-white relative overflow-hidden pt-24 pb-12 sm:pt-28 sm:pb-20">
          <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
            <div className="mx-auto mb-8 flex max-w-2xl flex-col items-center text-center sm:mb-12">
              <span className="contact-hero-kicker">Contact</span>
              <h1 className="contact-hero-title">
                Let&apos;s <span>connect.</span>
              </h1>
              <p className="contact-hero-lead">
                Exploring LiFi for your home, need help with an order, or want to partner with us — we&apos;d love to hear from you.
              </p>
            </div>

            <div className="grid w-full grid-cols-1 gap-4 sm:gap-6 md:grid-cols-3 md:items-stretch">
              {TOPICS.map(({ icon: Icon, title, desc, email }) => (
                <a
                  key={title}
                  href={`mailto:${email}?subject=${encodeURIComponent(title)}`}
                  className="group flex h-full flex-col rounded-lg border border-[var(--lumen-border)] bg-white p-5 sm:p-6 text-left transition-all hover:border-[var(--lumen-cyan)]/40 hover:shadow-md"
                >
                  <div className="mb-5 flex h-11 w-11 items-center justify-center rounded-lg border border-[var(--lumen-cyan)]/30 text-[var(--lumen-cyan)] transition-colors group-hover:border-[var(--lumen-cyan)]">
                    <Icon className="h-5 w-5" />
                  </div>
                  <h2 className="contact-hero-card-title">{title}</h2>
                  <p className="contact-hero-card-text">{desc}</p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-5 text-xs font-semibold uppercase tracking-wider text-[var(--lumen-blue)] transition-all group-hover:gap-2">
                    Email us <ArrowRight className="h-3 w-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="contact-form" className="relative section-wash-navy py-12 sm:py-16 lg:py-24">
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <ContactFormBlock />
          </div>
        </section>

        <section className="relative flex items-center justify-center overflow-hidden border-t border-[var(--lumen-border)]/20 py-16 sm:py-20 section-wash-navy">
          <BackgroundPaths />
          <div className="relative z-10 mx-auto max-w-3xl px-4 text-center sm:px-6">
            <p className="lumen-body-sm-light text-base leading-relaxed sm:text-lg">
              Looking for policy details? Read our{' '}
              <Link href="/privacy" className="font-semibold text-[var(--lumen-cyan)] transition-colors hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="font-semibold text-[var(--lumen-cyan)] transition-colors hover:underline">
                Terms &amp; Conditions
              </Link>
              . For product info, visit the{' '}
              <Link href="/products" className="font-semibold text-[var(--lumen-cyan)] transition-colors hover:underline">
                Products
              </Link>{' '}
              page or{' '}
              <Link href="/what-is-lifi" className="font-semibold text-[var(--lumen-cyan)] transition-colors hover:underline">
                What is LiFi?
              </Link>
            </p>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
