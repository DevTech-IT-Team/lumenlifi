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
    label: '01 / LIGHTING',
    featured: false,
    tall: false,
  },
  {
    icon: Home,
    title: 'Virtual Living Room',
    desc: 'Ceiling light streams ultra-fast data for lag-free 3D and headset experiences.',
    label: '02 / LIVING',
    featured: false,
    tall: true,
  },
  {
    icon: ShieldCheck,
    title: 'Private Light Signal',
    desc: 'Light cannot pass through walls, so your network stays inside the room.',
    label: '03 / PRIVATE',
    featured: true,
    tall: true,
  },
  {
    icon: Zap,
    title: 'Instant Conversations',
    desc: 'Voice assistants respond the moment you finish speaking.',
    label: '04 / INSTANT',
    featured: false,
    tall: false,
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };
/** Leaf shape: large TL + BR */
const cardRadius = 'rounded-tl-[2.75rem] rounded-tr-xl rounded-bl-xl rounded-br-[2.75rem]';

function FeatureCard({ icon: Icon, title, desc, label, featured, tall }) {
  return (
    <article
      className={`group relative flex min-h-0 flex-col overflow-hidden ${cardRadius} ${
        featured ? 'bg-[var(--lumen-cyan)] text-[#0D2240]' : 'bg-[#EBF5FF] text-[#0D2240]'
      } ${tall ? 'flex-[1.45] p-6 sm:p-7' : 'flex-[0.72] p-5 sm:p-6'}`}
    >
      <div
        className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full ${
          featured ? 'bg-white text-[#0D2240]' : 'bg-[#0D2240] text-white'
        }`}
      >
        <Icon size={17} strokeWidth={1.75} />
      </div>

      <div className={`mt-auto ${tall ? 'pt-8' : 'pt-6'}`}>
        <h3
          className={`!m-0 !font-normal leading-snug tracking-tight text-[#0D2240] ${
            tall ? '!text-xl sm:!text-2xl' : '!text-base sm:!text-lg'
          }`}
          style={geist}
        >
          {title}
        </h3>
        <p
          className={`!mt-2 !font-normal leading-relaxed text-[#0D2240]/65 ${
            tall ? '!text-sm sm:!text-base' : '!text-xs sm:!text-sm'
          }`}
          style={inter}
        >
          {desc}
        </p>

        {/* <div className="mt-5 flex items-center justify-between gap-3">
          <span
            className={`!text-[10px] !font-normal uppercase tracking-[0.14em] sm:!text-[11px] ${
              featured ? 'text-[#0D2240]/55' : 'text-[var(--lumen-cyan)]'
            }`}
            style={inter}
          >
            {label}
          </span>
          <Link
            href="/products"
            prefetch={false}
            className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#0D2240] text-white transition-transform group-hover:scale-110 sm:h-9 sm:w-9"
            aria-label={`Learn more about ${title}`}
          >
            <ArrowRight size={14} strokeWidth={1.75} />
          </Link>
        </div> */}
      </div>
    </article>
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
            style={inter}
          >
            Welcome to the future
          </p>

          <h2
            className="!m-0 !text-[clamp(2.5rem,6vw,4.25rem)] !font-normal leading-[1.05] tracking-[-0.03em]"
            style={geist}
          >
            <span className="block text-[#161C3B]/70">The Conscious</span>
            <span className="mt-1 block text-[#0D2240]">Home</span>
          </h2>

          <div className="mt-8 flex max-w-md gap-4">
            <span className="mt-1 w-px shrink-0 bg-[var(--lumen-cyan)]" aria-hidden="true" />
            <p
              className="!m-0 !text-sm !font-normal leading-[1.8] text-[#0D2240]/70 sm:!text-base"
              style={inter}
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
                    <p className="!m-0 !text-sm !font-normal text-[#0D2240]" style={geist}>
                      {item.value}
                    </p>
                    <p className="!mt-0.5 !text-xs !font-normal text-[#0D2240]/55" style={inter}>
                      {item.label}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* Right — staggered leaf cards */}
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
            <div className="flex w-1/2 flex-col gap-3 sm:gap-4">
              <FeatureCard {...featureCards[0]} />
              <FeatureCard {...featureCards[1]} />
            </div>
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
