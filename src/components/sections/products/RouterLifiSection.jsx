import { Zap } from 'lucide-react';

const FEATURES = [
  {
    title: 'Ultra-Fast Throughput',
    desc: 'Multi-gigabit light-wave speeds with Ethernet-like latency—fully wireless.',
  },
  {
    title: 'Zero Radio Interference',
    desc: 'Outside the RF spectrum, so crowded Wi-Fi never slows your link.',
  },
  {
    title: 'Military-Grade Security',
    desc: 'Light stops at walls. Closed room, contained network.',
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function RouterLifiSection() {
  return (
    <section
      id="lifi"
      className="relative overflow-hidden bg-[#0D2240] py-16 sm:py-24"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 60% 50% at 50% 0%, rgba(0,194,199,0.14) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        {/* Header — centered */}
        <div className="mx-auto max-w-2xl text-center">
          <div className="mb-5 inline-flex items-center justify-center gap-3">
            <span
              className="text-[11px] font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:text-xs"
              style={inter}
            >
              The Premium Layer
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-white/15 bg-white/5 text-[var(--lumen-cyan)]">
              <Zap className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          </div>

          <h2
            className="!m-0 !text-[clamp(1.85rem,4vw,2.85rem)] !font-bold leading-[1.1] tracking-[-0.03em] text-[#EBF5FF]"
            style={geist}
          >
            High-Speed Internet Li-Fi Technology
          </h2>

          <p
            className="mx-auto mt-5 max-w-md !text-sm !font-normal leading-relaxed text-white/60 sm:!text-[15px]"
            style={inter}
          >
            The speed and security of light—an interference-free hyper-lane.
          </p>
        </div>

        {/* Features — open columns, no cards */}
        <div className="mt-14 grid grid-cols-1 gap-0 border-t border-white/10 sm:mt-16 md:grid-cols-3 md:border-t-0 md:divide-x md:divide-white/10">
          {FEATURES.map((feature, fi) => (
            <div
              key={feature.title}
              className={`border-b border-white/10 py-8 last:border-b-0 md:border-b-0 md:px-8 md:py-2 ${
                fi === 0 ? 'md:pl-0' : ''
              } ${fi === FEATURES.length - 1 ? 'md:pr-0' : ''}`}
            >
              <span
                className="block !text-xs !font-normal tracking-[0.16em] text-[var(--lumen-cyan)]"
                style={inter}
              >
                0{fi + 1}
              </span>
              <h3
                className="!mt-4 !m-0 !text-lg !font-normal leading-snug tracking-tight text-[#EBF5FF] sm:!text-xl"
                style={geist}
              >
                {feature.title}
              </h3>
              <p
                className="!mt-3 !text-sm !font-normal leading-relaxed text-white/55"
                style={inter}
              >
                {feature.desc}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
