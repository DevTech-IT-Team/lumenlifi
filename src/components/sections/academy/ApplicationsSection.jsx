'use client';

import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { Activity, Rocket, Building2, Anchor, ArrowUpRight } from 'lucide-react';
import communityEvImg from '../../../../public/images/about/health1.webp';
import communitySmartCityImg from '../../../../public/images/about/airplanes.png';
import communityFactoryImg from '../../../../public/images/about/environments.png';
import communityAiImg from '../../../../public/images/about/underwater.png';

const sectors = [
  {
    icon: Activity,
    title: 'Healthcare',
    desc: 'Enabling secure data transmission in hospitals without interfering with sensitive medical equipment like MRI machines.',
    highlight: 'Secure data transmission without equipment interference.',
    image: communityEvImg,
    alt: 'Healthcare Environments',
    tag: 'HEALTHCARE',
  },
  {
    icon: Rocket,
    title: 'Aviation',
    desc: 'Allowing for safe, high-speed connectivity on commercial airplanes without disrupting radar or communication systems.',
    highlight: 'High-speed connectivity without radar disruption.',
    image: communitySmartCityImg,
    alt: 'Aviation Sector',
    tag: 'AVIATION',
  },
  {
    icon: Building2,
    title: 'Smart Environments',
    desc: 'Utilizing street lamps and standard lighting for indoor positioning, asset tracking, and targeted advertising.',
    highlight: 'Indoor positioning and asset tracking via light.',
    image: communityFactoryImg,
    alt: 'Smart Environments',
    tag: 'SMART ENVIRONMENTS',
  },
  {
    icon: Anchor,
    title: 'Underwater Communication',
    desc: 'Discovering how light can travel through water, offering new possibilities for underwater vehicle communication.',
    highlight: 'New possibilities for underwater communication.',
    image: communityAiImg,
    alt: 'Underwater Tech',
    tag: 'UNDERWATER',
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function ApplicationsSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#102342' }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-10 max-w-2xl text-center sm:mb-12"
        >
          <h2
            className="!m-0 !text-[clamp(2rem,4.5vw,3.25rem)] !font-normal leading-[1.1] tracking-[-0.03em] text-[#EBF5FF]"
            style={{ ...geist, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            Industry{' '}
            <span className="text-[var(--lumen-cyan)]">Applications</span>
          </h2>
          <p
            className="!mt-4 !text-sm !font-normal leading-relaxed text-white/55 sm:!text-base"
            style={inter}
          >
            We break down how Li-Fi is transforming critical sectors globally.
          </p>
        </motion.div>

        {/* Desktop / tablet horizontal accordion */}
        <div
          className="mx-auto hidden h-[300px] w-full max-w-[1280px] gap-3 sm:h-[320px] md:flex lg:h-[340px]"
          role="tablist"
          aria-label="Industry applications"
        >
          {sectors.map((sector, idx) => {
            const isActive = idx === activeIdx;
            const Icon = sector.icon;

            return (
              <motion.button
                key={sector.title}
                type="button"
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveIdx(idx)}
                onMouseEnter={() => setActiveIdx(idx)}
                layout
                transition={{ type: 'spring', stiffness: 280, damping: 32 }}
                className={`relative h-full overflow-hidden rounded-[1.5rem] text-left focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lumen-cyan)] ${
                  isActive ? 'flex-[2.8]' : 'flex-[0.85]'
                }`}
              >
                {isActive ? (
                  <div className="flex h-full w-full overflow-hidden bg-white">
                    <div className="flex w-[42%] min-w-[180px] flex-col justify-between p-5 lg:p-6">
                      <div>
                        <div className="inline-flex items-center gap-2 text-[var(--lumen-cyan)]">
                          <Icon size={16} strokeWidth={1.75} />
                          <span
                            className="!text-[10px] !font-normal uppercase tracking-[0.18em] lg:!text-[11px]"
                            style={inter}
                          >
                            {sector.tag}
                          </span>
                        </div>
                        <h3
                          className="!mt-5 !m-0 !text-[clamp(1.45rem,2.2vw,2rem)] !font-normal leading-tight tracking-[-0.02em] text-[#0D2240]"
                          style={geist}
                        >
                          {sector.title}
                        </h3>
                        <p
                          className="!mt-4 !text-sm !font-normal leading-relaxed text-[#0D2240]/65"
                          style={inter}
                        >
                          {sector.desc}
                        </p>
                      </div>
                      <p
                        className="!mt-6 !text-xs !font-normal text-[#0D2240]/45"
                        style={inter}
                      >
                        {sector.highlight}
                      </p>
                    </div>
                    <div className="relative min-w-0 flex-1">
                      <Image
                        src={sector.image}
                        alt={sector.alt}
                        fill
                        className="object-cover"
                        sizes="40vw"
                        priority={idx === 0}
                      />
                      <div
                        className="absolute inset-0"
                        style={{
                          background:
                            'linear-gradient(90deg, rgba(255,255,255,0.12) 0%, transparent 30%)',
                        }}
                      />
                    </div>
                  </div>
                ) : (
                  <div className="relative h-full w-full">
                    <Image
                      src={sector.image}
                      alt={sector.alt}
                      fill
                      className="object-cover"
                      sizes="20vw"
                    />
                    <div
                      className="absolute inset-0"
                      style={{
                        background:
                          'linear-gradient(180deg, rgba(8,20,40,0.25) 0%, rgba(8,20,40,0.55) 45%, rgba(8,20,40,0.92) 100%)',
                      }}
                    />
                    <div className="absolute inset-x-0 bottom-0 flex flex-col items-start gap-3 p-4 lg:p-5">
                      <h3
                        className="!m-0 !text-[13px] !font-normal uppercase leading-snug tracking-[0.06em] text-white lg:!text-sm"
                        style={geist}
                      >
                        {sector.tag}
                      </h3>
                      <div className="flex w-full items-center justify-between gap-2">
                        <span className="!text-xs !font-normal text-white/80" style={inter}>
                          Read More
                        </span>
                        <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white">
                          <ArrowUpRight size={14} strokeWidth={1.75} />
                        </span>
                      </div>
                    </div>
                  </div>
                )}
              </motion.button>
            );
          })}
        </div>

        {/* Mobile stacked accordion */}
        <div className="flex flex-col gap-3 md:hidden">
          {sectors.map((sector, idx) => {
            const isActive = idx === activeIdx;
            const Icon = sector.icon;
            return (
              <button
                key={sector.title}
                type="button"
                onClick={() => setActiveIdx(idx)}
                className={`overflow-hidden rounded-3xl text-left transition-all ${
                  isActive ? 'bg-white' : 'bg-[#0D2240]'
                }`}
              >
                {isActive ? (
                  <div>
                    <div className="relative aspect-[16/10] w-full">
                      <Image src={sector.image} alt={sector.alt} fill className="object-cover" sizes="100vw" />
                    </div>
                    <div className="p-5">
                      <div className="inline-flex items-center gap-2 text-[var(--lumen-cyan)]">
                        <Icon size={15} strokeWidth={1.75} />
                        <span className="!text-[10px] uppercase tracking-[0.16em]" style={inter}>
                          {sector.tag}
                        </span>
                      </div>
                      <h3 className="!mt-3 !m-0 !text-xl !font-normal text-[#0D2240]" style={geist}>
                        {sector.title}
                      </h3>
                      <p className="!mt-2 !text-sm !font-normal leading-relaxed text-[#0D2240]/65" style={inter}>
                        {sector.desc}
                      </p>
                      <p className="!mt-4 !text-xs !font-normal text-[#0D2240]/45" style={inter}>
                        {sector.highlight}
                      </p>
                    </div>
                  </div>
                ) : (
                  <div className="relative flex min-h-[120px] items-end overflow-hidden">
                    <Image src={sector.image} alt="" fill className="object-cover opacity-50" sizes="100vw" />
                    <div className="relative z-10 flex w-full items-center justify-between p-4">
                      <span className="!text-sm !font-normal uppercase tracking-[0.08em] text-white" style={geist}>
                        {sector.tag}
                      </span>
                      <span className="inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/40 text-white">
                        <ArrowUpRight size={14} strokeWidth={1.75} />
                      </span>
                    </div>
                  </div>
                )}
              </button>
            );
          })}
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href="#cta-final"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-7 text-sm !font-normal text-[#0D2240] shadow-[0_10px_30px_rgba(0,0,0,0.15)] transition-transform hover:scale-[1.03]"
            style={inter}
          >
            Join Academy
            <ArrowUpRight size={16} strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}
