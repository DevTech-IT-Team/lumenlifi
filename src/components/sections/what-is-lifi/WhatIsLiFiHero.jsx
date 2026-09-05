import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

export default function WhatIsLiFiHero() {
  return (
    <section className="relative isolate flex min-h-[min(100svh,920px)] w-full flex-col overflow-hidden">
      <div className="absolute inset-0 -z-20">
        <Image
          src="/images/about/about_L.png"
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
          aria-hidden="true"
        />
      </div>

      {/* Content pinned bottom-left like reference */}
      <div className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-1 flex-col justify-end px-5 pb-12 pt-28 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
        <div className="flex max-w-3xl flex-col items-start gap-10 sm:gap-14 lg:gap-16">
          <h1
            className="!m-0 max-w-[14ch] !text-[clamp(2.75rem,6.8vw,4.75rem)] !font-normal leading-[1.05] tracking-[-0.035em] text-[#EBF5FF]"
            style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
          >
            What is LiFi?
            <br />
            Internet through light.
          </h1>

          <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
            <p
              className="!m-0 max-w-[280px] !text-[15px] !font-normal leading-snug text-white/65"
              style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
            >
              Unlock wireless capacity, remove RF congestion, and see your connection metrics improve
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
              All without radio waves or wall-penetrating signals
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
