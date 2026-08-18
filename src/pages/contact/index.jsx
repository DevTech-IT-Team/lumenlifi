import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, MessageSquare, Headphones, ShoppingBag, Handshake } from 'lucide-react';
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

export default function ContactPage() {
  return (
    <div className="relative overflow-hidden min-h-screen lumen-page-bg-white text-slate-800 antialiased">
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
        {/* Hero */}
        <section className="relative pt-32 pb-16 overflow-hidden lumen-hero-wash">
          <div className="absolute inset-0 lumen-grid-pattern-hero opacity-45 pointer-events-none z-0" />
          <div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--lumen-border)] text-[var(--lumen-blue)] font-mono text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
              <MessageSquare className="w-3 h-3" />
              Contact Us
            </div>
            <h1 className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.15] mb-5 text-[var(--lumen-navy)] overflow-visible pb-1">
              Let&apos;s{' '}
              <span className="text-gradient-lumen">Connect</span>
            </h1>
            <p className="text-base sm:text-lg max-w-2xl mx-auto leading-relaxed text-[var(--lumen-muted)]">
              Whether you&apos;re exploring LiFi for your home, need help with an order, or want to partner with us — we&apos;d love to hear from you.
            </p>
          </div>
        </section>

        {/* Topic cards */}
        <section className="relative py-12 border-b border-[var(--lumen-border)]">
          <div className="max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
              {TOPICS.map(({ icon: Icon, title, desc, email }) => (
                <a
                  key={title}
                  href={`mailto:${email}?subject=${encodeURIComponent(title)}`}
                  className="group p-6 rounded-2xl bg-white border border-[var(--lumen-border)] hover:border-[var(--lumen-cyan)]/40 hover:shadow-md transition-all"
                >
                  <div className="p-2.5 rounded-xl bg-[rgba(26,110,191,0.06)] text-[var(--lumen-blue)] w-fit mb-4 group-hover:bg-[rgba(0,194,199,0.10)] group-hover:text-[var(--lumen-cyan)] transition-colors">
                    <Icon className="w-5 h-5" />
                  </div>
                  <h2 className="text-base font-bold text-[var(--lumen-navy)] mb-2">{title}</h2>
                  <p className="text-sm text-[var(--lumen-muted)] leading-relaxed mb-3">{desc}</p>
                  <span className="inline-flex items-center gap-1 text-xs font-mono font-bold text-[var(--lumen-blue)] group-hover:gap-2 transition-all">
                    Email us <ArrowRight className="w-3 h-3" />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>

        {/* Form */}
        <section id="contact-form" className="relative py-16 sm:py-20">
          <div className="max-w-7xl mx-auto px-6">
            <ContactFormBlock />
          </div>
        </section>

        {/* FAQ strip */}
        <section className="relative py-12 bg-[rgba(26,110,191,0.03)] border-t border-[var(--lumen-border)]">
          <div className="max-w-3xl mx-auto px-6 text-center">
            <p className="text-sm text-[var(--lumen-muted)] leading-relaxed">
              Looking for policy details? Read our{' '}
              <Link href="/privacy" className="text-[var(--lumen-blue)] font-semibold hover:underline">
                Privacy Policy
              </Link>{' '}
              and{' '}
              <Link href="/terms" className="text-[var(--lumen-blue)] font-semibold hover:underline">
                Terms &amp; Conditions
              </Link>
              . For product info, visit the{' '}
              <Link href="/products" className="text-[var(--lumen-blue)] font-semibold hover:underline">
                Products
              </Link>{' '}
              page or{' '}
              <Link href="/what-is-lifi" className="text-[var(--lumen-blue)] font-semibold hover:underline">
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
