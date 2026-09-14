import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function ProductsHeroSection() {
  return (
    <section className="relative isolate flex min-h-[min(100svh,920px)] w-full flex-col overflow-hidden bg-[#06131d]">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/products/products_bgs.png"
          alt=""
          fill
          priority
          className="object-contain object-center"
          sizes="100vw"
        />
      </div>
      <div
        className="pointer-events-none absolute inset-0 -z-10"
        style={{
          background:
            'linear-gradient(90deg, rgba(6,19,29,0.72) 0%, rgba(6,19,29,0.35) 45%, rgba(6,19,29,0.1) 100%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-1 flex-col justify-end px-5 pb-12 pt-28 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="flex max-w-3xl flex-col items-start gap-10 sm:gap-14 lg:gap-16">
          <h1
            className="!m-0 max-w-[14ch] !text-[clamp(2.75rem,6.8vw,4.75rem)] !font-normal leading-[1.05] tracking-[-0.035em] text-[#EBF5FF]"
            style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
          >
            Shop the
            <br />
            Conscious Home.
          </h1>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p
              className="!m-0 max-w-[280px] !text-[15px] !font-normal leading-snug text-white/65"
              style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
            >
              Every device has built-in light receivers — zero lag, safe security, and unlimited speed
            </p>
            <ArrowRight
              className="hidden h-4 w-4 shrink-0 text-white/40 sm:block"
              strokeWidth={1.5}
              aria-hidden="true"
            />
            <p
              className="!m-0 max-w-[200px] !text-[15px] !font-normal leading-snug text-white/65"
              style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
            >
              The world&apos;s first home run entirely on light
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
