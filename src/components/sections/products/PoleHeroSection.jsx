import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight, Home, Lightbulb, Shield } from 'lucide-react';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const FEATURES = [
  {
    icon: Lightbulb,
    title: 'Light that connects',
    desc: 'A beautiful indoor pole that lights your room and sends fast internet through LiFi.',
  },
  {
    icon: Home,
    title: 'Designed for the home',
    desc: 'Made to look like home décor — fits living rooms, offices, and stylish indoor spaces.',
  },
  {
    icon: Shield,
    title: 'Private by design',
    desc: 'LiFi stays inside the lit space, so your home network stays more secure.',
  },
];

export function PoleFeaturesSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#EBF5FF' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="!m-0 !text-[clamp(1.75rem,4vw,2.5rem)] !font-bold tracking-tight text-[#0D2240]"
            style={geist}
          >
            Why LiFi Pole
          </h2>
          <p
            className="!mt-4 !text-base !font-normal leading-relaxed text-[#0D2240]/60"
            style={inter}
          >
            Home décor that lights your room and connects your devices with LiFi — launching soon.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-8 p-0 sm:grid-cols-3 sm:gap-10">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <li key={title}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0D2240]/10 bg-white text-[var(--lumen-cyan)]">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3
                className="!mt-5 !m-0 !text-xl !font-normal tracking-tight text-[#0D2240]"
                style={geist}
              >
                {title}
              </h3>
              <p
                className="!mt-3 !text-sm !font-normal leading-relaxed text-[#0D2240]/60 sm:!text-[15px]"
                style={inter}
              >
                {desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

export default function PoleHeroSection() {
  return (
    <section className="relative min-h-[min(100svh,880px)] overflow-hidden bg-[#0D2240]">
      <Image
        src="/images/pole/poles_ind.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(13,34,64,0.88) 0%, rgba(13,34,64,0.65) 34%, rgba(13,34,64,0.22) 58%, transparent 78%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,880px)] max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="max-w-xl">
          <div className="flex flex-wrap items-center gap-3">
            <p
              className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
              style={inter}
            >
              Indoor LiFi
            </p>
            <span
              className="inline-flex items-center rounded-full border border-[var(--lumen-cyan)]/40 bg-[var(--lumen-cyan)]/10 px-3 py-1 !text-[10px] !font-normal uppercase tracking-[0.16em] text-[var(--lumen-cyan)]"
              style={inter}
            >
              Coming soon
            </span>
          </div>
          <h1
            className="!mt-4 !m-0 !text-[clamp(2.25rem,5vw,3.75rem)] !font-normal leading-[1.08] tracking-[-0.03em] text-[#EBF5FF]"
            style={geist}
          >
            LiFi Pole
          </h1>
          <p
            className="!mt-6 max-w-md !text-sm !font-normal leading-[1.75] text-white/70 sm:!text-[15px]"
            style={inter}
          >
            An indoor décor pole for your home — stylish lighting with built-in LiFi technology.
            This product is coming soon.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-white px-7 text-sm !font-normal !text-[#0D2240] transition-opacity hover:opacity-90"
              style={inter}
            >
              Get notified
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <Link
              href="/products"
              prefetch={false}
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-white/25 px-7 text-sm !font-normal !text-white transition-colors hover:border-white/50"
              style={inter}
            >
              View products
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}
