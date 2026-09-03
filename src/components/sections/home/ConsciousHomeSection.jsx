import Link from 'next/link';
import { ArrowRight, Package, Play, ShieldCheck, Heart, Lightbulb, Home, Zap } from 'lucide-react';

const stats = [
  { icon: ShieldCheck, value: '100%', label: 'Safe & Private Results' },
  { icon: Heart, value: '98%', label: 'Satisfaction rate' },
];

const featureCards = [
  {
    icon: Lightbulb,
    title: 'Automatic Smart Lighting',
    desc: 'Invisible light connects devices as you walk in — no apps, no switches.',
    flex: '0.72',
    tall: false,
  },
  {
    icon: Home,
    title: 'Virtual Living Room',
    desc: 'Ceiling light streams ultra-fast data for lag-free 3D and headset experiences.',
    flex: '1.45',
    tall: true,
  },
  {
    icon: ShieldCheck,
    title: 'Private Light Signal',
    desc: 'Light cannot pass through walls, so your network stays inside the room.',
    flex: '1.45',
    tall: true,
  },
  {
    icon: Zap,
    title: 'Instant Conversations',
    desc: 'Voice assistants respond the moment you finish speaking.',
    flex: '0.72',
    tall: false,
  },
];

function FeatureCard({ icon: Icon, title, desc, flex, tall }) {
  return (
    <Link
      href="/products"
      prefetch={false}
      className={`group relative flex min-h-0 flex-col justify-between overflow-hidden rounded-[1.25rem] border border-[#0D2240]/8 bg-[#EBF5FF] shadow-lg transition-shadow hover:shadow-xl sm:rounded-[1.5rem] ${
        tall ? 'p-6 sm:p-8' : 'p-5 sm:p-6'
      }`}
      style={{ flex: flex }}
    >
      <Icon
        className={`shrink-0 text-[#0D2240] ${tall ? 'h-7 w-7 sm:h-8 sm:w-8' : 'h-5 w-5 sm:h-6 sm:w-6'}`}
        strokeWidth={1.5}
      />
      <div className={`mt-auto ${tall ? 'pt-8' : 'pt-6'}`}>
        <h3
          className={`!m-0 !font-normal leading-snug text-[#0D2240] ${
            tall ? '!text-2xl sm:!text-3xl' : '!text-base sm:!text-lg'
          }`}
          style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
        >
          {title}
        </h3>
        <p
          className={`!mt-2 !font-normal leading-relaxed text-[#0D2240]/65 ${
            tall ? '!text-base sm:!text-lg' : '!text-xs sm:!text-sm'
          }`}
          style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
        >
          {desc}
        </p>
        <span
          className={`mt-4 inline-flex items-center gap-1.5 !font-normal text-[var(--lumen-cyan)] transition-opacity group-hover:opacity-80 ${
            tall ? 'text-sm sm:text-base' : 'text-xs sm:text-sm'
          }`}
        >
          Learn More
          <ArrowRight className={tall ? 'h-4 w-4' : 'h-3.5 w-3.5'} />
        </span>
      </div>
    </Link>
  );
}

export default function ConsciousHomeSection() {
  return (
    <section
      id="conscious-home"
      className="relative w-full overflow-visible"
      style={{ backgroundColor: '#ffffff', backgroundImage: 'none' }}
    >
      <div className="mx-auto grid min-h-[min(100svh,920px)] max-w-[1520px] grid-cols-1 overflow-visible lg:grid-cols-12">
        {/* Left — content */}
        <div className="relative z-20 flex flex-col justify-center px-6 py-16 sm:px-10 lg:col-span-6 lg:py-20 xl:px-16">
          <p
            className="!mb-4 !text-[11px] !font-normal uppercase tracking-[0.2em] text-[var(--lumen-cyan)] sm:!text-xs"
            style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
          >
            Welcome to the future
          </p>

          <h2
            className="!m-0 !text-[clamp(2.5rem,6vw,4.25rem)] !font-normal leading-[1.05] tracking-[-0.03em]"
            style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
          >
            <span className="block text-[#161C3B]/35">The Conscious</span>
            <span className="mt-1 block text-[#0D2240]">Home</span>
          </h2>

          <div className="mt-8 flex max-w-md gap-4">
            <span className="mt-1 w-px shrink-0 bg-[#0D2240]/20" aria-hidden="true" />
            <p
              className="!m-0 !text-sm !font-normal leading-[1.8] text-[#0D2240]/70 sm:!text-base"
              style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
            >
              Powered by Light. Faster. Safer. Smarter than Wi-Fi — order LiFi kits, install through
              your ceiling lights, and get private high-speed internet anytime, anywhere,
              hassle-free.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/products"
              prefetch={false}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--lumen-cyan)] px-6 py-3.5 text-sm !font-normal !text-[#0c1228] transition-opacity hover:opacity-90"
            >
              <Package className="h-4 w-4" />
              Order Now
            </Link>
            <Link
              href="/what-is-lifi"
              prefetch={false}
              className="inline-flex items-center gap-2 text-sm !font-normal text-[#0D2240] transition-opacity hover:opacity-70"
            >
              <span className="flex h-8 w-8 items-center justify-center rounded-full border border-[#0D2240]/15 bg-[#EBF5FF]">
                <Play className="h-3 w-3 fill-[#0D2240] text-[#0D2240]" />
              </span>
              See How It Works
            </Link>
          </div>

          <div className="mt-12 flex flex-wrap gap-8 sm:gap-12">
            {stats.map((item) => {
              const Icon = item.icon;
              return (
                <div key={item.label} className="flex items-start gap-3">
                  <Icon className="mt-0.5 h-4 w-4 shrink-0 text-[var(--lumen-cyan)]" />
                  <div>
                    <p
                      className="!m-0 !text-sm !font-normal text-[#0D2240]"
                      style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
                    >
                      {item.value}
                    </p>
                    <p
                      className="!mt-0.5 !text-xs !font-normal text-[#0D2240]/55"
                      style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                    >
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — staggered feature cards + tilted dark bg */}
        <div className="relative min-h-[560px] overflow-visible lg:col-span-6 lg:min-h-full">
          <div
            className="pointer-events-none absolute inset-y-0 -left-4 right-0 z-0 bg-[#0D2240] sm:-left-6 lg:-left-8"
            style={{
              clipPath: 'polygon(22% 0%, 100% 0%, 100% 100%, 0% 100%)',
              backgroundImage:
                'radial-gradient(ellipse 70% 55% at 75% 35%, rgba(0,194,199,0.22) 0%, transparent 70%)',
              backgroundColor: '#0D2240',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex h-full min-h-[480px] gap-3 py-12 pl-2 pr-5 sm:min-h-[520px] sm:gap-4 sm:pl-0 sm:pr-8 lg:-ml-8 lg:min-h-[560px] lg:py-14 lg:pr-8 xl:-ml-12">
            {/* Left column — short top, tall bottom */}
            <div className="flex w-1/2 flex-col gap-3 sm:gap-4">
              <FeatureCard {...featureCards[0]} />
              <FeatureCard {...featureCards[1]} />
            </div>

            {/* Right column — tall top, short bottom */}
            <div className="flex w-1/2 flex-col gap-3 sm:gap-4">
              <FeatureCard {...featureCards[2]} />
              <FeatureCard {...featureCards[3]} />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
