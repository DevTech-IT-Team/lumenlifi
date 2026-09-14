import Link from 'next/link';
import { ArrowRight, Wifi, Zap, Coins } from 'lucide-react';

const LAYERS = [
  { icon: Wifi, label: 'Wi-Fi 7' },
  { icon: Zap, label: 'Li-Fi' },
  { icon: Coins, label: 'DePIN' },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function RouterCtaSection() {
  return (
    <section className="relative overflow-hidden bg-[#0D2240] py-16 sm:py-20 lg:py-24">
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 55% 70% at 90% 50%, rgba(0,194,199,0.22) 0%, transparent 55%), radial-gradient(ellipse 40% 50% at 10% 80%, rgba(26,110,191,0.18) 0%, transparent 50%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col gap-12 px-4 sm:px-6 lg:flex-row lg:items-end lg:justify-between lg:gap-16">
        <div className="max-w-xl">
          <p
            className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
            style={inter}
          >
            One router. Three revolutions.
          </p>

          <h2
            className="!mt-4 !m-0 !text-[clamp(1.85rem,4vw,2.85rem)] !font-bold leading-[1.1] tracking-[-0.03em] text-[#EBF5FF]"
            style={geist}
          >
            Upgrade your network today.
          </h2>

          <p
            className="!mt-5 max-w-md !text-sm !font-normal leading-relaxed text-white/60 sm:!text-[15px]"
            style={inter}
          >
            Wi-Fi 7 for every device. Li-Fi for speed and security radio cannot match. DePIN rewards
            that turn your router into an asset.
          </p>

          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 p-0 list-none m-0">
            {LAYERS.map(({ icon: Icon, label }) => (
              <li key={label} className="inline-flex items-center gap-2 text-sm text-white/70">
                <span className="inline-flex h-7 w-7 items-center justify-center rounded-full border border-white/15 bg-white/5 text-[var(--lumen-cyan)]">
                  <Icon className="h-3.5 w-3.5" strokeWidth={1.75} />
                </span>
                <span style={inter}>{label}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="flex flex-col gap-3 sm:flex-row sm:items-center lg:flex-col lg:items-stretch xl:flex-row">
          <Link
            href="/products"
            className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-full bg-[var(--lumen-cyan)] px-7 text-sm !font-normal !text-[#0c1228] transition-opacity hover:opacity-90"
            style={inter}
          >
            Explore Catalog
            <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            href="/contact"
            className="inline-flex h-12 min-w-[180px] items-center justify-center gap-2 rounded-full border border-white/25 px-7 text-sm !font-normal text-[#EBF5FF] transition-colors hover:border-white/50"
            style={inter}
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </section>
  );
}
