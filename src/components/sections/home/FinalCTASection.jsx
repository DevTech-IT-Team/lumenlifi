import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function FinalCTASection() {
  return (
    <section
      id="cta-final"
      className="relative w-full overflow-hidden pb-0 pt-14 sm:pt-16 lg:pt-20"
      style={{
        background: 'linear-gradient(180deg, #E8F3FF 0%, #F0F7FF 40%, #EBF5FF 100%)',
      }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <div
          className="rounded-t-[2.75rem] rounded-b-none border border-b-0 border-[#0D2240]/10 px-10 pb-16 pt-16 sm:rounded-t-[3.25rem] sm:px-14 sm:pb-20 sm:pt-20 lg:px-16 lg:pb-24 lg:pt-24"
          style={{
            background:
              'linear-gradient(180deg, #0D2240 0%, #143356 40%, #1E4A72 70%, #2A5F8A 100%)',
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="!m-0 !text-[clamp(1.85rem,4.5vw,2.85rem)] !font-bold leading-[1.15] tracking-[-0.03em] text-white"
              style={geist}
            >
              Leave old radio waves behind.
              <br />
              Live at the speed of light.
            </h2>

            <p
              className="!mx-auto !mt-5 max-w-2xl !text-base !font-normal leading-relaxed text-white/65 sm:!text-lg"
              style={inter}
            >
              Upgrade your home to internet delivered through light — faster, private, and free of
              radio congestion.
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <Link
                href="/products"
                prefetch={false}
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white px-9 text-base !font-normal !text-[#0D2240] transition-opacity hover:opacity-90"
                style={inter}
              >
                Order Now
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </Link>
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/25 px-9 text-base !font-normal !text-white transition-colors hover:border-white/50"
                style={inter}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
