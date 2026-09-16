import Link from 'next/link';
import { ArrowUpRight, Wifi, Zap, Sparkles, LayoutGrid } from 'lucide-react';

const features = [
  {
    step: '01',
    icon: Wifi,
    title: 'WiFi 7 Boosted Signal',
    desc: 'Strong, stable coverage across the room — next-gen WiFi 7 keeps every device connected without the usual dead zones.',
  },
  {
    step: '02',
    icon: Zap,
    title: 'Built-in LiFi',
    desc: 'High-speed internet through light, paired with WiFi so your home gets seamless, light-speed connectivity in one pole.',
  },
  {
    step: '03',
    icon: Sparkles,
    title: 'Fashionable & Decorative',
    desc: 'Designed for modern interiors — a sleek floor-to-ceiling pole that looks like décor while it powers your network.',
  },
  {
    step: '04',
    icon: LayoutGrid,
    title: 'Practical & Versatile',
    desc: 'Shelves, lighting, screens, and smart gear — one pole adapts to home offices, living rooms, and entertainment setups.',
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function ConsciousHomeSection() {
  return (
    <section
      id="conscious-home"
      className="relative w-full overflow-x-clip lg:overflow-visible"
      style={{ backgroundColor: '#ffffff', backgroundImage: 'none' }}
    >
      <div className="mx-auto grid max-w-[1520px] grid-cols-1 lg:grid-cols-12 lg:min-h-[min(100svh,880px)]">
        {/* Left — intro */}
        <div className="relative z-20 flex flex-col justify-center px-5 py-12 sm:px-8 sm:py-16 md:px-10 lg:col-span-5 lg:py-20 xl:px-16">
          <p
            className="!mb-3 !text-[10px] !font-normal uppercase tracking-[0.2em] text-[var(--lumen-cyan)] sm:!mb-4 sm:!text-xs"
            style={inter}
          >
            Coming Soon — LiFi Pole
          </p>

          <h2
            className="!m-0 !text-[clamp(1.6rem,5.5vw,2.75rem)] !font-normal leading-[1.12] tracking-[-0.03em]"
            style={geist}
          >
            <span className="block text-[#161C3B]/70">One Pole.</span>
            <span className="mt-1 block text-[#0D2240]">Connectivity Meets Design.</span>
          </h2>

          <div className="mt-6 flex max-w-md gap-3 sm:mt-8 sm:gap-4">
            <span className="mt-1 w-px shrink-0 bg-[var(--lumen-cyan)]" aria-hidden="true" />
            <p
              className="!m-0 !text-sm !font-normal leading-[1.75] text-[#0D2240]/70 sm:!text-base sm:leading-[1.8]"
              style={inter}
            >
              The LiFi Pole brings WiFi 7 and LiFi into a single decorative column — stylish enough
              for your living room, practical enough for every room in the home.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-4 sm:mt-10 sm:gap-5">
            <Link
              href="/products/lifi-pole"
              prefetch={false}
              className="inline-flex w-full items-center justify-center gap-2 rounded-full bg-[var(--lumen-cyan)] px-6 py-3.5 text-sm !font-normal !text-[#0c1228] transition-opacity hover:opacity-90 sm:w-auto"
            >
              Explore LiFi Pole
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-10 max-w-sm border-t border-[#0D2240]/08 pt-8 sm:mt-12 sm:border-0 sm:pt-0">
            <p className="!m-0 !text-base !font-normal text-[#0D2240]" style={geist}>
              Ready for the LiFi Pole?
            </p>
            <p className="!mt-2 !text-sm !font-normal leading-relaxed text-[#0D2240]/55" style={inter}>
              Home décor that lights your room and connects your devices — launching soon.
            </p>
          </div>
        </div>

        {/* Right — features panel */}
        <div className="relative lg:col-span-7">
          {/* Mobile / tablet: solid panel (no diagonal cut) */}
          <div
            className="pointer-events-none absolute inset-0 bg-[#0D2240] lg:hidden"
            style={{
              backgroundImage:
                'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(0,194,199,0.18) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />
          {/* Desktop: diagonal panel — bleed to viewport right on wide screens */}
          <div
            className="pointer-events-none absolute inset-y-0 left-0 hidden bg-[#0D2240] lg:block"
            style={{
              right: 'calc((min(100vw, 1520px) - 100vw) / 2)',
              clipPath: 'polygon(8% 0%, 100% 0%, 100% 100%, 0% 100%)',
              backgroundImage:
                'radial-gradient(ellipse 70% 55% at 78% 30%, rgba(0,194,199,0.22) 0%, transparent 70%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 flex h-full flex-col justify-center px-5 py-12 sm:px-8 sm:py-14 md:px-10 lg:pl-16 lg:pr-12 lg:py-20 xl:pl-20 xl:pr-16">
            <p
              className="!m-0 !text-[10px] !font-normal uppercase tracking-[0.2em] text-[var(--lumen-cyan)] sm:!text-[11px]"
              style={inter}
            >
              Why the LiFi Pole
            </p>

            <ul className="mt-6 m-0 list-none space-y-0 p-0 sm:mt-8">
              {features.map(({ step, icon: Icon, title, desc }, idx) => (
                <li
                  key={title}
                  className={`group grid grid-cols-[auto_1fr] gap-3 border-white/10 py-5 sm:gap-6 sm:py-7 ${
                    idx > 0 ? 'border-t' : ''
                  }`}
                >
                  <div className="flex flex-col items-start gap-1.5 pt-0.5 sm:gap-2">
                    <span className="text-[var(--lumen-cyan)]">
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <span
                      className="!text-[10px] !font-normal tracking-[0.16em] text-white/35"
                      style={inter}
                    >
                      {step}
                    </span>
                  </div>
                  <div className="min-w-0">
                    <h3
                      className="!m-0 !text-[0.95rem] !font-normal leading-snug tracking-tight text-[#EBF5FF] transition-colors group-hover:text-[var(--lumen-cyan)] sm:!text-lg"
                      style={geist}
                    >
                      {title}
                    </h3>
                    <p
                      className="!mt-1.5 !text-xs !font-normal leading-relaxed text-white/55 sm:!text-sm"
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
