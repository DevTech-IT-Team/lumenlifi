import Head from 'next/head';
import Link from 'next/link';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ProductsFaqSection from '../../components/sections/products/ProductsFaqSection';
import { FAQ_ITEMS, OPS_EMAIL, SALES_EMAIL } from '../../components/sections/products/faqData';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const CONTACT_OPTIONS = [
  {
    label: 'Sales & partnerships',
    email: SALES_EMAIL,
    desc: 'Orders, kit questions, and collaboration inquiries.',
  },
  {
    label: 'Operations & support',
    email: OPS_EMAIL,
    desc: 'Delivery, installation help, and technical support.',
  },
];

export default function HelpPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip lumen-page-bg text-[var(--lumen-navy)] antialiased">
      <Head>
        <title>Lumen LIFI — Help &amp; FAQ</title>
        <meta
          name="description"
          content="Browse all frequently asked questions about LumenFi Li-Fi kits, coverage, installation, and security — or email our team with any query."
        />
        <link rel="canonical" href="https://lifilumen.com/help" />
      </Head>

      <Header />

      <main className="relative z-10">
        <section
          className="relative overflow-hidden pt-28 pb-14 sm:pt-32 sm:pb-16"
          style={{
            background:
              'linear-gradient(180deg, #06131d 0%, #0D2240 45%, #143356 78%, #1A3F6E 100%)',
          }}
        >
          <div className="mx-auto max-w-3xl px-4 text-center sm:px-6 lg:px-8">
            <p
              className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
              style={inter}
            >
              Help Center
            </p>
            <h1
              className="!mt-4 !m-0 !text-[clamp(2rem,5vw,3.25rem)] !font-bold leading-[1.1] tracking-[-0.03em] text-[#EBF5FF]"
              style={geist}
            >
              Answers for every Li-Fi question
            </h1>
            <p
              className="!mx-auto !mt-4 max-w-xl !text-base !font-normal leading-relaxed text-white/60"
              style={inter}
            >
              Explore the full FAQ below. Still stuck? Reach us by email — we typically respond within
              24 hours.
            </p>
          </div>
        </section>

        <ProductsFaqSection
          items={FAQ_ITEMS}
          limit={null}
          showViewMore={false}
          showSearch
          title="All Frequently Asked Questions"
        />

        <section
          id="connect"
          className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
          style={{
            background: 'linear-gradient(180deg, #ffffff 0%, #EBF5FF 100%)',
          }}
        >
          <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
            <div className="text-center">
              <span className="inline-flex h-12 w-12 items-center justify-center rounded-full bg-[#0D2240]/06 text-[var(--lumen-cyan)]">
                <MessageCircle className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h2
                className="!mt-5 !m-0 !text-[clamp(1.75rem,4vw,2.5rem)] !font-bold tracking-tight text-[#0D2240]"
                style={geist}
              >
                Connect with us
              </h2>
              <p
                className="!mx-auto !mt-3 max-w-lg !text-base !font-normal leading-relaxed text-[#0D2240]/60"
                style={inter}
              >
                Have any other query? Email the right team and we&apos;ll get back to you quickly.
              </p>
            </div>

            <ul className="mt-10 grid list-none gap-4 p-0 sm:grid-cols-2 sm:gap-5">
              {CONTACT_OPTIONS.map((option) => (
                <li
                  key={option.email}
                  className="rounded-[1.25rem] border border-[#0D2240]/08 bg-white px-6 py-6 sm:px-7 sm:py-7"
                >
                  <p
                    className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.16em] text-[#0D2240]/45"
                    style={inter}
                  >
                    {option.label}
                  </p>
                  <a
                    href={`mailto:${option.email}?subject=LumenFi%20Help%20Inquiry`}
                    className="mt-3 inline-flex items-center gap-2 !text-base !font-normal text-[#0D2240] transition-colors hover:text-[var(--lumen-cyan)] sm:!text-lg"
                    style={geist}
                  >
                    <Mail className="h-4 w-4 shrink-0 text-[var(--lumen-cyan)]" strokeWidth={1.75} />
                    {option.email}
                  </a>
                  <p
                    className="!mt-2 !mb-0 !text-sm !font-normal leading-relaxed text-[#0D2240]/55"
                    style={inter}
                  >
                    {option.desc}
                  </p>
                </li>
              ))}
            </ul>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3">
              <a
                href={`mailto:${OPS_EMAIL}?subject=LumenFi%20Help%20Inquiry`}
                className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-[#0D2240] px-8 text-sm !font-normal !text-white transition-opacity hover:opacity-90"
                style={inter}
              >
                Email support
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-[#0D2240]/20 bg-white px-8 text-sm !font-normal !text-[#0D2240] transition-colors hover:border-[var(--lumen-cyan)]/50"
                style={inter}
              >
                Contact form
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
