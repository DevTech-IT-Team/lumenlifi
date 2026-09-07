'use client';

import React, { useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  ArrowUpRight,
  Wifi,
  Gamepad2,
  Network,
  Cpu,
  Factory,
  GraduationCap,
  Car,
} from 'lucide-react';
import { fadeUp, heroFadeUp } from './variants';
import aiMesh from '../../../../public/images/academy/aiMesh.jpg';
import Transport from '../../../../public/images/academy/autoTransport.jpg';
import education from '../../../../public/images/academy/smartSchool.jpg';

const CARDS = [
  {
    id: 'mesh',
    title: 'Global Mesh',
    subtitle: 'SERVICES',
    desc: 'All devices directly connected with 0 congestion.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    metric: 'Zero-RF Mesh',
    icon: Wifi,
    accent: '#00ff88',
  },
  {
    id: 'gaming',
    title: 'Ultra-Low Latency Gaming',
    subtitle: 'ESPORTS & VR',
    desc: 'Eliminate ping and packet loss with direct light-based transmission.',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    metric: '<1ms Latency',
    icon: Gamepad2,
    accent: '#00C2C7',
  },
  {
    id: 'networks',
    title: 'Light Connectivity',
    subtitle: 'NETWORKS',
    desc: 'Secure light-based transmission for enterprise and all.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    metric: 'Optical Link',
    icon: Network,
    accent: '#c084fc',
  },
  {
    id: 'ai',
    title: 'AI Data Mesh Systems',
    subtitle: 'NEURAL TRAINING',
    desc: 'Stream gigabytes of real-time AI sensor data instantaneously.',
    img: aiMesh,
    metric: '100 Gbps Link',
    icon: Cpu,
    accent: '#38bdf8',
  },
  {
    id: 'manufacturing',
    title: 'Industrial Manufacturing',
    subtitle: 'AUTOMATION',
    desc: 'Keep factory robots running smoothly without network interference.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    metric: '0% RF Interference',
    icon: Factory,
    accent: '#f59e0b',
  },
  {
    id: 'schools',
    title: 'Smart Schools & Campuses',
    subtitle: 'CLASSROOMS',
    desc: 'Prevent bandwidth slowdowns when hundreds of students log on together.',
    img: education,
    metric: 'Lag-Free Link',
    icon: GraduationCap,
    accent: '#00C2C7',
  },
  {
    id: 'transport',
    title: 'Autonomous Transportation',
    subtitle: 'V2I',
    desc: 'Enable instant V2I communication between vehicles and street fixtures.',
    img: Transport,
    metric: 'Real-Time V2X',
    icon: Car,
    accent: '#ec4899',
  },
];

const LOOP = [...CARDS, ...CARDS];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

function imgSrc(src) {
  return typeof src === 'string' ? src : src?.src;
}

function SectorCard({ card }) {
  const Icon = card.icon;
  return (
    <article
      className="academy-hero-card relative h-[340px] w-[230px] shrink-0 overflow-hidden rounded-[1.5rem] border sm:h-[380px] sm:w-[260px]"
      style={{
        borderColor: `${card.accent}66`,
        boxShadow: `0 16px 40px rgba(0,0,0,0.4), 0 0 22px ${card.accent}33`,
      }}
    >
      <img
        src={imgSrc(card.img)}
        alt={card.title}
        className="absolute inset-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
        draggable={false}
      />
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'linear-gradient(180deg, rgba(3,7,18,0.12) 0%, rgba(3,7,18,0.55) 48%, rgba(3,7,18,0.96) 100%)',
        }}
      />
      <div className="relative z-10 flex h-full flex-col justify-end p-4 text-left sm:p-5">
        <div
          className="mb-2 inline-flex w-fit items-center gap-1.5 rounded-full border px-2.5 py-0.5 backdrop-blur-md"
          style={{
            borderColor: `${card.accent}80`,
            backgroundColor: 'rgba(3,7,18,0.7)',
            color: card.accent,
          }}
        >
          <Icon className="h-3 w-3" />
          <span className="font-mono text-[10px] !font-normal tracking-wide" style={inter}>
            {card.metric}
          </span>
        </div>
        <p
          className="!m-0 !text-[10px] !font-normal uppercase tracking-[0.16em]"
          style={{ ...inter, color: card.accent }}
        >
          {card.subtitle}
        </p>
        <h3
          className="!mt-1 !m-0 !text-base !font-normal leading-snug tracking-tight text-white sm:!text-lg"
          style={geist}
        >
          {card.title}
        </h3>
        <p
          className="!mt-1.5 line-clamp-2 !text-[11px] !font-normal leading-snug text-white/75 sm:!text-xs"
          style={inter}
        >
          {card.desc}
        </p>
      </div>
    </article>
  );
}

export default function HeroSection() {
  const trackRef = useRef(null);

  useEffect(() => {
    let raf = 0;
    const updateFan = () => {
      const track = trackRef.current;
      if (!track) return;
      const center = window.innerWidth / 2;
      const half = Math.max(window.innerWidth * 0.55, 320);

      track.querySelectorAll('.academy-hero-card').forEach((item) => {
        if (item.matches(':hover')) return;

        const rect = item.getBoundingClientRect();
        const itemCenter = rect.left + rect.width / 2;
        // -1 = far left, 0 = center, 1 = far right
        const n = Math.max(-1, Math.min(1, (itemCenter - center) / half));
        const abs = Math.abs(n);

        // Concave fan: small in the middle, large at the edges
        const scale = 0.78 + abs * 0.42; // ~0.78 center → ~1.2 edges
        const rotateY = -n * 28; // face toward center
        const translateY = abs * 28; // edges drop down (bottom arc)
        const translateZ = -48 + abs * 95; // center recedes, edges come forward

        item.style.transform = `perspective(1600px) translateZ(${translateZ}px) rotateY(${rotateY}deg) translateY(${translateY}px) scale(${scale})`;
        item.style.zIndex = String(Math.round(abs * 20));
      });
      raf = requestAnimationFrame(updateFan);
    };
    raf = requestAnimationFrame(updateFan);
    return () => cancelAnimationFrame(raf);
  }, []);

  return (
    <section className="relative isolate w-full overflow-hidden bg-[#05070a] text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
            @keyframes academy-marquee-rtl {
              0% { transform: translateX(0); }
              100% { transform: translateX(-50%); }
            }
            .academy-hero-track {
              display: flex;
              align-items: flex-end;
              width: max-content;
              gap: 0.85rem;
              padding: 2.5rem 0 2.75rem;
              animation: academy-marquee-rtl 55s linear infinite;
              will-change: transform;
              transform-style: preserve-3d;
            }
            .academy-hero-track:hover {
              animation-play-state: paused;
            }
            .academy-hero-card {
              transition: filter 0.25s ease;
              transform-origin: center bottom;
              will-change: transform;
              backface-visibility: hidden;
            }
            .academy-hero-card:hover {
              transform: perspective(1600px) translateZ(70px) rotateY(0deg) translateY(-6px) scale(1.08) !important;
              z-index: 40 !important;
              filter: brightness(1.1);
            }
            @media (prefers-reduced-motion: reduce) {
              .academy-hero-track { animation: none; }
            }
          `,
        }}
      />

      {/* Background */}
      <div className="pointer-events-none absolute inset-0 -z-10" aria-hidden="true">
        <div
          className="absolute inset-0"
          style={{
            background:
              'radial-gradient(ellipse 80% 55% at 50% 0%, #1a2a4a 0%, #0a1220 42%, #05070a 72%)',
          }}
        />
        <div
          className="absolute inset-0 opacity-[0.35]"
          style={{
            backgroundImage: 'radial-gradient(rgba(148, 180, 220, 0.45) 1px, transparent 1px)',
            backgroundSize: '28px 28px',
            maskImage:
              'radial-gradient(ellipse 70% 60% at 50% 20%, black 20%, transparent 75%)',
            WebkitMaskImage:
              'radial-gradient(ellipse 70% 60% at 50% 20%, black 20%, transparent 75%)',
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

      {/* Infinite RTL marquee with content cards */}
      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 mt-12 w-full overflow-hidden sm:mt-14 lg:mt-16"
        style={{ perspective: '1600px' }}
      >
        <div className="academy-hero-track" ref={trackRef}>
          {LOOP.map((card, i) => (
            <SectorCard key={`${card.id}-${i}`} card={card} />
          ))}
        </div>
      </motion.div>
    </section>
  );
}
