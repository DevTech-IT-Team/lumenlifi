'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight } from 'lucide-react';
import { fadeUp, heroFadeUp } from './variants';

const CARDS = [
  {
    id: 'course-1',
    title: 'Welcome to Light-Speed Internet',
    desc: 'Start here — how LiFi works and why light can carry your internet.',
    img: '/images/academy/course-1.png',
  },
  {
    id: 'course-2',
    title: 'Setup & First Connection',
    desc: 'Plug in, connect your first device, and get online with LiFi.',
    img: '/images/academy/course-2.png',
  },
  {
    id: 'course-3',
    title: 'Living with LiFi Every Day',
    desc: 'Work, stream, and stay connected at home with light-speed internet.',
    img: '/images/academy/course-3.png',
  },
  {
    id: 'course-4',
    title: 'Getting More From Your System',
    desc: 'Optimize coverage, devices, and performance across your space.',
    img: '/images/academy/course-4.png',
  },
  {
    id: 'course-5',
    title: 'Troubleshooting & Getting Help',
    desc: 'Fix common issues fast and know when to reach support.',
    img: '/images/academy/course-5.png',
  },
  {
    id: 'course-6',
    title: 'Trust, Privacy & Making Sense of the Claims',
    desc: 'Understand security, privacy, and what LiFi claims really mean.',
    img: '/images/academy/course-6.png',
  },
];

const LOOP = [...CARDS, ...CARDS, ...CARDS];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function HeroSection() {
  const trackRef = useRef(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const loopWidthRef = useRef(0);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return undefined;

    const measure = () => {
      loopWidthRef.current = track.scrollWidth / 3;
    };

    measure();
    window.addEventListener('resize', measure);

    let raf = 0;
    const SPEED = 1;

    const tick = () => {
      if (!pausedRef.current) {
        offsetRef.current -= SPEED;
        const loopW = loopWidthRef.current;
        if (loopW > 0 && Math.abs(offsetRef.current) >= loopW) {
          offsetRef.current += loopW;
        }
        track.style.transform = `translate3d(${offsetRef.current}px, 0, 0)`;
      }

      const center = window.innerWidth / 2;
      const half = Math.max(window.innerWidth * 0.5, 280);

      track.querySelectorAll('.academy-hero-card').forEach((item) => {
        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        const n = Math.max(-1, Math.min(1, (itemCenter - center) / half));
        const abs = Math.abs(n);

        const scale = 1 - abs * 0.2;
        const rotateY = n * -40;
        const translateZ = (1 - abs) * 70 - 30;
        const opacity = 1 - abs * 0.25;

        item.style.transform = `perspective(1400px) translateZ(${translateZ}px) rotateY(${rotateY}deg) scale(${scale})`;
        item.style.opacity = String(opacity);
        item.style.zIndex = String(Math.round((1 - abs) * 30));
      });

      raf = requestAnimationFrame(tick);
    };

    raf = requestAnimationFrame(tick);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', measure);
    };
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#05070a] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 55% at 50% 0%, #1a2a4a 0%, #0a1220 42%, #05070a 72%)',
          }}
        />
        <div
          className="absolute left-1/2 top-[12%] h-[420px] w-[min(900px,90vw)] -translate-x-1/2 rounded-full opacity-50 blur-[100px]"
          style={{
            background:
              'radial-gradient(circle, rgba(0,194,199,0.22) 0%, rgba(26,110,191,0.12) 45%, transparent 70%)',
          }}
        />
      </div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-5 pb-0 pt-28 text-center sm:px-8 sm:pt-32 lg:pt-36">
        <motion.h1
          custom={1}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          className="!m-0 max-w-4xl !text-[clamp(2.35rem,6vw,4.25rem)] !font-normal leading-[1.08] tracking-[-0.035em] text-white"
          style={{ ...geist, fontSize: 'clamp(2.35rem, 6vw, 4.25rem)' }}
        >
          LumenFi Academy
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="!mt-5 max-w-xl !text-[15px] !font-normal leading-relaxed text-white/60 sm:!mt-6 sm:!text-base"
          style={inter}
        >
          Shaping the Future of Light Connectivity. Free membership with live classes, a thriving
          community of innovators, and the chance to monetize cutting-edge LiFi technology.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mt-8 flex flex-col items-center justify-center gap-3 sm:mt-10 sm:flex-row sm:gap-4"
        >
          <a
            href="#cta-final"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full px-7 text-sm !font-normal text-[#0D2240] transition-transform hover:scale-[1.03]"
            style={{
              ...inter,
              background: 'linear-gradient(90deg, #00C2C7 0%, #38bdf8 100%)',
              boxShadow: '0 0 28px rgba(0, 194, 199, 0.45)',
            }}
          >
            Join for FREE
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
          <a
            href="#curriculum"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full border border-white/25 bg-transparent px-7 text-sm !font-normal text-white transition-colors hover:border-white/50 hover:bg-white/5"
            style={inter}
          >
            Explore Curriculum
            <ArrowUpRight className="h-4 w-4" strokeWidth={2} />
          </a>
        </motion.div>
      </div>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 mt-12 w-full overflow-hidden pb-10 sm:mt-14 sm:pb-12 lg:mt-16"
        style={{ perspective: '1400px' }}
        onMouseEnter={() => {
          pausedRef.current = true;
        }}
        onMouseLeave={() => {
          pausedRef.current = false;
        }}
      >
        <div
          ref={trackRef}
          className="flex w-max items-center gap-4 py-8 will-change-transform sm:gap-5 sm:py-10"
          style={{ transformStyle: 'preserve-3d' }}
        >
          {LOOP.map((card, i) => (
            <article
              key={`${card.id}-${i}`}
              className="academy-hero-card group relative h-[160px] w-[280px] shrink-0 overflow-hidden rounded-[1.25rem] border border-white/15 bg-[#0D2240] shadow-[0_20px_50px_rgba(0,0,0,0.4)] sm:h-[210px] sm:w-[380px] sm:rounded-[1.5rem] lg:h-[240px] lg:w-[440px]"
              style={{
                transformOrigin: 'center center',
                backfaceVisibility: 'hidden',
                willChange: 'transform, opacity',
              }}
            >
              <img
                src={card.img}
                alt={card.title}
                className="h-full w-full object-cover object-center"
                draggable={false}
              />

              <div className="absolute inset-0 flex flex-col justify-end bg-[#0c1228]/0 p-4 opacity-0 backdrop-blur-0 transition-all duration-300 ease-out group-hover:bg-[#0c1228]/65 group-hover:opacity-100 group-hover:backdrop-blur-md sm:p-5">
                <span
                  className="!text-[10px] !font-normal uppercase tracking-[0.16em] text-[var(--lumen-cyan)]"
                  style={inter}
                >
                  Course {card.id.replace('course-', '')}
                </span>
                <p
                  className="!m-0 !mt-1.5 !text-base !font-normal text-white sm:!text-lg"
                  style={geist}
                >
                  {card.title}
                </p>
                <p
                  className="!mb-0 !mt-1.5 !text-xs !font-normal leading-relaxed text-white/75 sm:!text-sm"
                  style={inter}
                >
                  {card.desc}
                </p>
              </div>
            </article>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
