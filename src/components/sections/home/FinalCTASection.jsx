import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

export default function FinalCTASection() {
  return (
    <section
      id="cta-final"
      className="relative w-full overflow-hidden py-14 sm:py-16 lg:py-20"
      style={{ backgroundColor: '#ffffff', backgroundImage: 'none' }}
    >
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6">
        <div
          className="relative overflow-hidden rounded-[1.75rem] px-8 py-12 sm:rounded-[2rem] sm:px-12 sm:py-14 lg:px-16 lg:py-16"
          style={{
            background:
              'radial-gradient(ellipse 90% 120% at 100% 50%, rgba(0,194,199,0.55) 0%, transparent 55%), radial-gradient(ellipse 70% 100% at 85% 80%, rgba(26,110,191,0.5) 0%, transparent 50%), radial-gradient(ellipse 50% 80% at 70% 20%, rgba(13,34,64,0.9) 0%, transparent 45%), linear-gradient(115deg, #0a1220 0%, #0D2240 42%, #12304f 70%, #0a3d4a 100%)',
          }}
        >
          {/* Soft mesh glow accents */}
          <div
            className="pointer-events-none absolute -right-10 top-0 h-full w-[55%] opacity-70"
            style={{
              background:
                'radial-gradient(circle at 60% 30%, rgba(0,194,199,0.35), transparent 50%), radial-gradient(circle at 80% 70%, rgba(26,110,191,0.4), transparent 45%)',
            }}
            aria-hidden="true"
          />
          <div
            className="pointer-events-none absolute inset-0 opacity-20"
            style={{
              backgroundImage:
                'linear-gradient(to right, rgba(255,255,255,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.06) 1px, transparent 1px)',
              backgroundSize: '48px 48px',
              maskImage: 'linear-gradient(90deg, transparent 0%, black 40%, black 100%)',
            }}
            aria-hidden="true"
          />

          <div className="relative z-10 max-w-2xl text-left">
            <h2
              className="!m-0 !text-[clamp(1.85rem,4.5vw,3rem)] !font-normal leading-[1.15] tracking-[-0.02em] text-white"
              style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
            >
              Leave old radio waves behind.
              <br />
              <span className="text-[var(--lumen-cyan)]">Live at the speed of light.</span>
            </h2>

            <p
              className="!mt-5 max-w-xl !text-sm !font-normal leading-relaxed text-white/70 sm:!text-base"
              style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
            >
              Upgrade your home to internet delivered through light — faster, private, and free of
              radio congestion.
            </p>

            <div className="mt-8 flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
              <Link
                href="/products"
                prefetch={false}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm !font-normal !text-[#0D2240] transition-opacity hover:opacity-90"
              >
                Order Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/30 bg-transparent px-8 text-sm !font-normal text-white transition-colors hover:border-white hover:bg-white/5"
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
