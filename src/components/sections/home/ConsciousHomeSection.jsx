import Link from 'next/link';
import { Package, Play, ShieldCheck, Heart, Lightbulb, Home, Zap } from 'lucide-react';

const stats = [
  { icon: ShieldCheck, value: '100%', label: 'Safe & Private Results' },
  { icon: Heart, value: '98%', label: 'Satisfaction rate' },
];

const features = [
  {
    step: '01',
    icon: Lightbulb,
    title: 'Automatic Smart Lighting',
    desc: 'Invisible light connects devices as you walk in — no apps, no switches.',
  },
  {
    step: '02',
    icon: Home,
    title: 'Virtual Living Room',
    desc: 'Ceiling light streams ultra-fast data for lag-free 3D and headset experiences.',
  },
  {
    step: '03',
    icon: ShieldCheck,
    title: 'Private Light Signal',
    desc: 'Light cannot pass through walls, so your network stays inside the room.',
  },
  {
    step: '04',
    icon: Zap,
    title: 'Instant Conversations',
    desc: 'Voice assistants respond the moment you finish speaking.',
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function ConsciousHomeSection() {
  return (
    <section
      id="conscious-home"
      className="relative w-full overflow-hidden"
      style={{ backgroundColor: '#ffffff', backgroundImage: 'none' }}
    >
      <div className="mx-auto grid max-w-[1520px] grid-cols-1 lg:grid-cols-12 lg:min-h-[min(100svh,880px)]">
        {/* Left — brand story */}
        <div className="relative z-20 flex flex-col justify-center px-6 py-16 sm:px-10 lg:col-span-5 lg:py-20 xl:px-16">
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

        {/* Right — open feature list on navy plane */}
        <div className="relative lg:col-span-7">
          <div
            className="pointer-events-none absolute inset-0 bg-[#0D2240]"
            style={{
              clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
              backgroundImage:
                'radial-gradient(ellipse 70% 55% at 78% 30%, rgba(0,194,199,0.22) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex h-full flex-col justify-center px-6 py-14 sm:px-10 lg:pl-16 lg:pr-12 xl:pl-20 xl:pr-16">
            <p
              className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.2em] text-[var(--lumen-cyan)]"
              style={inter}
            >
              How light powers the home
            </p>

            <ul className="mt-8 m-0 list-none space-y-0 p-0">
              {features.map(({ step, icon: Icon, title, desc }, idx) => (
                <li
                  key={title}
                  className={`group grid grid-cols-[auto_1fr] gap-4 border-white/10 py-6 sm:gap-6 sm:py-7 ${
                    idx > 0 ? 'border-t' : ''
                  }`}
                >
                  <div className="flex flex-col items-start gap-2 pt-0.5">
                    <span className="text-[var(--lumen-cyan)]">
                      <Icon size={20} strokeWidth={1.5} />
                    </span>
                    <span
                      className="!text-xs !font-normal tracking-[0.16em] text-white/35"
                      style={inter}
                    >
                      {step}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="!m-0 !text-lg !font-normal leading-snug tracking-tight text-[#EBF5FF] transition-colors group-hover:text-[var(--lumen-cyan)] sm:!text-xl"
                      style={geist}
                    >
                      {title}
                    </h3>
                    <p
                      className="!mt-2 max-w-md !text-sm !font-normal leading-relaxed text-white/55 sm:!text-[15px]"
                      style={inter}
                    >
                      {desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
