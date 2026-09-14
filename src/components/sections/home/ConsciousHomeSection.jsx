import Link from 'next/link';
import { ArrowUpRight, Lightbulb, Network, Laptop, Radio } from 'lucide-react';

const features = [
  {
    step: '01',
    icon: Network,
    title: 'Centralized Connectivity',
    desc: 'Connect your network infrastructure, access points, and Li-Fi devices through one intelligent gateway.',
  },
  {
    step: '02',
    icon: Lightbulb,
    title: 'Light-Based Communication',
    desc: 'Deliver high-speed data through photonic antennas while maintaining reliable network connectivity.',
  },
  {
    step: '03',
    icon: Laptop,
    title: 'Flexible Device Support',
    desc: 'Connect laptops, tablets, and other compatible devices through dedicated Li-Fi receivers.',
  },
  {
    step: '04',
    icon: Radio,
    title: 'Scalable Coverage',
    desc: 'Extend Li-Fi coverage across your environment with multiple access points and antennas.',
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
            The Lumenfi Ecosystem
          </p>

          <h2
            className="!m-0 !text-[clamp(1.75rem,4vw,2.75rem)] !font-normal leading-[1.1] tracking-[-0.03em]"
            style={geist}
          >
            <span className="block text-[#161C3B]/70">One Gateway.</span>
            <span className="mt-1 block text-[#0D2240]">Multiple Ways to Connect.</span>
          </h2>

          <div className="mt-8 flex max-w-md gap-4">
            <span className="mt-1 w-px shrink-0 bg-[var(--lumen-cyan)]" aria-hidden="true" />
            <p
              className="!m-0 !text-sm !font-normal leading-[1.8] text-[#0D2240]/70 sm:!text-base"
              style={inter}
            >
              The central hub for next-generation Li-Fi. Bridge your existing network with photonic
              antennas and devices to experience light-based communication.
            </p>
          </div>

          <div className="mt-10 flex flex-wrap items-center gap-5">
            <Link
              href="/products"
              prefetch={false}
              className="inline-flex items-center gap-2 rounded-full bg-[var(--lumen-cyan)] px-6 py-3.5 text-sm !font-normal !text-[#0c1228] transition-opacity hover:opacity-90"
            >
              Explore Ecosystem
              <ArrowUpRight className="h-4 w-4" />
            </Link>
          </div>

          <div className="mt-12 max-w-sm">
            <p className="!m-0 !text-base !font-normal text-[#0D2240]" style={geist}>
              Ready to upgrade your network?
            </p>
            <p className="!mt-2 !text-sm !font-normal leading-relaxed text-[#0D2240]/55" style={inter}>
              Experience the stability and security of Li-Fi today.
            </p>
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
              How the gateway connects
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
                      <Icon size={18} strokeWidth={1.5} />
                    </span>
                    <span
                      className="!text-[10px] !font-normal tracking-[0.16em] text-white/35"
                      style={inter}
                    >
                      {step}
                    </span>
                  </div>
                  <div>
                    <h3
                      className="!m-0 !text-base !font-normal leading-snug tracking-tight text-[#EBF5FF] transition-colors group-hover:text-[var(--lumen-cyan)] sm:!text-lg"
                      style={geist}
                    >
                      {title}
                    </h3>
                    <p
                      className="!mt-1.5 max-w-md !text-xs !font-normal leading-relaxed text-white/55 sm:!text-sm"
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
