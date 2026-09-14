import Head from 'next/head';
import Image from 'next/image';
import { ArrowRight, Mail } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { ContactFormBlock } from '../../components/sections/contact';

export default function ContactPage() {
  return (
    <div className="relative min-h-screen overflow-x-hidden bg-[#030914] text-slate-800 antialiased">
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
        {/* Hero — contact.png, text left / hardware right */}
        <section className="relative isolate flex min-h-[min(100svh,920px)] w-full flex-col overflow-hidden bg-[#030914]">
          <div className="absolute inset-0 -z-20">
            <Image
              src="/images/contact/contact1.png"
              alt="LumenFi RevF hardware under LiFi light"
              fill
              priority
              sizes="100vw"
              className="object-cover object-right"
            />
          </div>
          <div
            className="pointer-events-none absolute inset-0 -z-10"
            style={{
              background:
                'linear-gradient(105deg, rgba(3,9,20,0.92) 0%, rgba(3,9,20,0.72) 38%, rgba(3,9,20,0.28) 62%, rgba(3,9,20,0.08) 100%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-1 flex-col justify-end px-5 pb-14 pt-28 sm:px-8 sm:pb-16 sm:pt-32 lg:px-12 lg:pb-20">
            <div className="flex max-w-xl flex-col items-start lg:max-w-lg">
              <span
                className="!text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                Contact
              </span>

              <h1
                className="!mt-4 !m-0 !text-[clamp(2.75rem,6.5vw,4.5rem)] !font-normal leading-[1.05] tracking-[-0.035em] text-[#EBF5FF]"
                style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
              >
                Let&apos;s{' '}
                <span className="text-[var(--lumen-cyan)]">connect.</span>
              </h1>

              <p
                className="!mt-5 max-w-md !text-[15px] !font-normal leading-relaxed text-white/65 sm:!text-base"
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                Exploring LiFi for your home, need help with an order, or want to partner with us —
                we&apos;d love to hear from you.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-3">
                <a
                  href="mailto:operations@lumenlifi.com?subject=Get%20Started%20with%20LumenFi"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-[#EBF5FF] px-7 text-sm !font-normal text-black transition-colors hover:bg-white"
                  style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                >
                  Get Started
                  <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
                </a>
                <a
                  href="mailto:rupali@lifilumen.com?subject=LumenFi%20Inquiry"
                  className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-white/5 px-7 text-sm !font-normal text-[#EBF5FF] transition-colors hover:border-[var(--lumen-cyan)]/50 hover:bg-white/10"
                  style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                >
                  <Mail className="h-4 w-4" strokeWidth={1.75} />
                  Email Us
                </a>
              </div>
            </div>
          </div>
        </section>

        <section
          id="contact-form"
          className="relative py-14 sm:py-16 lg:py-24"
          style={{ backgroundColor: '#EBF5FF', backgroundImage: 'none' }}
        >
          <div className="mx-auto max-w-7xl px-4 sm:px-6">
            <ContactFormBlock />
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}
