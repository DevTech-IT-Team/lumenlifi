import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu,
  Gamepad2, Factory, Car, Star, Sparkles,
  Building2, Users, TrendingUp, Award,
  Send, Mail, Handshake, Network, Rocket, MessageSquare,
  BookOpen, Activity, Anchor, DollarSign, Target, MonitorPlay, Focus, ShieldCheck, Sliders,
  GraduationCap, Wifi, Bot, Tv, Stethoscope, Lightbulb
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import aiMesh from '../../../public/images/academy/aiMesh.jpg';
import Transport from '../../../public/images/academy/autoTransport.jpg';
import education from '../../../public/images/academy/smartSchool.jpg';

import communityHeroImg from '../../../public/images/hero/partner-hero.png';
import communitySmartCityImg from '../../../public/images/hero/partner-smart-city.png';
import communityCreatorImg from '../../../public/images/hero/partner-creator.png';
import communityEvImg from '../../../public/images/hero/partner-ev.png';
import communityFactoryImg from '../../../public/images/academy/community.webp';
import communityAiImg from '../../../public/images/hero/partner-ai.png';
import ctaImg from '../../../public/images/hero/cta.png';
/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};
/* ── SECTION 1: HERO ── */

// Variants for Framer Motion animations
const heroFadeUp = {
  hidden: { opacity: 0, y: 0 },
  visible: (i = 1) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' },
  }),
};

const heroSectors = [
  {
    id: 'mesh',
    title: 'SERVICES',
    subtitle: 'GLOBAL MESH',
    desc: 'All devices directly connected with 0 congestion.',
    img: 'https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?auto=format&fit=crop&w=800&q=80',
    metric: 'Zero-RF Mesh',
    icon: Wifi,
    border: 'border-[#00ff88]',
    glow: 'rgba(0, 255, 136, 0.45)',
    badgeBg: 'bg-[#031f13]/85 text-[#00ff88] border-[#00ff88]/50',
    accentText: 'text-[#00ff88]',
  },
  {
    id: 'gaming',
    title: 'Ultra-Low Latency Gaming',
    subtitle: 'COMPETITIVE ESPORTS & VR',
    desc: 'Eliminate ping and packet loss with direct light-based transmission.',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    metric: '<1ms Latency',
    icon: Gamepad2,
    border: 'border-[#00C2C7]',
    glow: 'rgba(0, 194, 199, 0.55)',
    badgeBg: 'bg-[#021827]/85 text-[#00C2C7] border-[#00C2C7]/60',
    accentText: 'text-[#00C2C7]',
    featured: true,
  },
  {
    id: 'networks',
    title: 'NETWORKS',
    subtitle: 'LIGHT CONNECTIVITY',
    desc: 'Secure light-based transmission for enterprise and all.',
    img: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&w=800&q=80',
    metric: 'Optical Link',
    icon: Network,
    border: 'border-[#c084fc]',
    glow: 'rgba(192, 132, 252, 0.45)',
    badgeBg: 'bg-[#1e0a2e]/85 text-[#c084fc] border-[#c084fc]/50',
    accentText: 'text-[#c084fc]',
  },
  {
    id: 'ai',
    title: 'AI Data Mesh Systems',
    subtitle: 'HIGH-SPEED NEURAL TRAINING',
    desc: 'Stream gigabytes of real-time AI sensor data instantaneously.',
    img: aiMesh,
    metric: '100 Gbps Link',
    icon: Cpu,
    border: 'border-[#38bdf8]',
    glow: 'rgba(56, 189, 248, 0.45)',
    badgeBg: 'bg-[#051a2e]/85 text-[#38bdf8] border-[#38bdf8]/50',
    accentText: 'text-[#38bdf8]',
  },
  {
    id: 'manufacturing',
    title: 'Industrial Manufacturing',
    subtitle: 'HEAVY MACHINERY AUTOMATION',
    desc: 'Keep factory robots running smoothly without network interference.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    metric: '0% Radio Interference',
    icon: Factory,
    border: 'border-[#f59e0b]',
    glow: 'rgba(245, 158, 11, 0.45)',
    badgeBg: 'bg-[#261503]/85 text-[#f59e0b] border-[#f59e0b]/50',
    accentText: 'text-[#f59e0b]',
  },
  {
    id: 'schools',
    title: 'Smart Schools & Campuses',
    subtitle: 'HIGH-DENSITY CLASSROOMS',
    desc: 'Prevent bandwidth slowdowns when hundreds of students log on together.',
    img: education,
    metric: 'Lag-Free Optical Link',
    icon: GraduationCap,
    border: 'border-[#00C2C7]',
    glow: 'rgba(0, 194, 199, 0.45)',
    badgeBg: 'bg-[#021827]/85 text-[#00C2C7] border-[#00C2C7]/50',
    accentText: 'text-[#00C2C7]',
  },
  {
    id: 'transportation',
    title: 'Autonomous Transportation',
    subtitle: 'VEHICLE-TO-INFRASTRUCTURE',
    desc: 'Enable instant V2I communication between vehicles and street fixtures.',
    img: Transport,
    metric: 'Real-Time V2X',
    icon: Car,
    border: 'border-[#ec4899]',
    glow: 'rgba(236, 72, 153, 0.45)',
    badgeBg: 'bg-[#290518]/85 text-[#ec4899] border-[#ec4899]/50',
    accentText: 'text-[#ec4899]',
  },
];

function HeroSection() {
  const trackRef = useRef(null);

  useEffect(() => {
    let animationFrameId;

    const updateTransforms = () => {
      const track = trackRef.current;
      if (!track) return;

      const items = track.querySelectorAll('.carousel-item');
      const viewportCenter = window.innerWidth / 2;

      items.forEach((item) => {
        if (item.matches(':hover')) return;

        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distanceFromCenter = itemCenter - viewportCenter;

        const normalizedDistance = Math.max(
          -1,
          Math.min(1, distanceFromCenter / (window.innerWidth / 1.6))
        );

        const absDist = Math.abs(normalizedDistance);
        const rotateY = -normalizedDistance * 18;
        const rotateX = absDist * 3;
        const translateY = absDist * 10;

        let translateZ = 0;
        if (absDist < 0.18) {
          translateZ = 45;
        } else if (absDist < 0.5) {
          translateZ = 15;
        } else {
          translateZ = -20;
        }

        item.style.transform = `perspective(1800px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${translateY}px)`;
      });
    };

    const animate = () => {
      updateTransforms();
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <section className="relative w-full pt-28 pb-20 overflow-x-hidden overflow-y-visible bg-[#030712] text-white">
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .hero-cosmic-bg {
        background: radial-gradient(circle at 50% 15%, #081a38 0%, #030714 55%, #010309 100%);
      }

      .hero-neon-aura {
        background: radial-gradient(ellipse at center, rgba(0, 194, 199, 0.15) 0%, rgba(26, 110, 191, 0.1) 40%, transparent 75%);
        filter: blur(40px);
      }

      .carousel-container {
        perspective: 1800px;
        overflow-x: clip;
        overflow-y: visible;
        width: 100%;
        min-height: 420px;
        padding: 24px 0 32px;
      }

      .carousel-track {
        display: flex;
        align-items: center;
        gap: 28px;
        width: max-content;
        animation: scroll 60s linear infinite;
        transform-style: preserve-3d;
        padding: 0 16px;
      }

      .carousel-track:hover {
        animation-play-state: paused;
      }

      .carousel-item {
        flex-shrink: 0;
        width: 275px;
        height: 380px;
        border-radius: 24px;
        overflow: hidden;
        position: relative;
        transition: transform 0.35s ease, box-shadow 0.35s ease, filter 0.35s ease, opacity 0.35s ease;
        transform-origin: center center;
        will-change: transform, opacity, filter;
        background: #061022;
      }

      .carousel-item:hover {
        transform:
          perspective(1800px)
          translateZ(65px)
          rotateY(0deg)
          rotateX(0deg)
          translateY(-8px)
          scale(1.05) !important;
        z-index: 999 !important;
        opacity: 1 !important;
        filter: brightness(1.1) saturate(1.15) !important;
      }

      .carousel-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.03);
        transition: transform 0.4s ease;
      }

      .carousel-item:hover img {
        transform: scale(1.08) translateY(-2px);
      }

      .carousel-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, rgba(3, 7, 18, 0.15) 0%, rgba(3, 7, 18, 0.6) 45%, rgba(3, 7, 18, 0.95) 100%);
        pointer-events: none;
        z-index: 5;
      }

      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-50% - 14px)); }
      }

      .emblem-pulse {
        animation: emblemGlow 4s ease-in-out infinite alternate;
      }

      @keyframes emblemGlow {
        0% { filter: drop-shadow(0 0 15px rgba(0, 194, 199, 0.6)) drop-shadow(0 0 35px rgba(56, 189, 248, 0.4)); }
        100% { filter: drop-shadow(0 0 25px rgba(0, 255, 136, 0.8)) drop-shadow(0 0 50px rgba(0, 194, 199, 0.7)); }
      }

      .glow-border-cyan {
        box-shadow: 0 0 25px rgba(0, 194, 199, 0.45), inset 0 0 15px rgba(0, 194, 199, 0.25);
      }
      .glow-border-green {
        box-shadow: 0 0 25px rgba(0, 255, 136, 0.4), inset 0 0 15px rgba(0, 255, 136, 0.2);
      }
      .glow-border-purple {
        box-shadow: 0 0 25px rgba(192, 132, 252, 0.4), inset 0 0 15px rgba(192, 132, 252, 0.2);
      }
    `,
        }}
      />

      {/* Cosmic Background with bg.webp (shifted down on mobile so the top logo is fully visible) */}
      <div className="absolute inset-0 z-0 pointer-events-none overflow-hidden bg-[#02050f]">
        <div
          className="absolute top-12 sm:top-6 md:top-0 left-1/2 -translate-x-1/2 w-full max-w-[1920px] h-[850px] sm:h-[950px] md:h-[1100px] bg-top bg-no-repeat opacity-95"
          style={{
            backgroundImage: "url('/images/academy/bg.webp')",
            backgroundSize: '100% auto',
          }}
        />
        {/* Soft bottom vignette for clean section transition */}
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#02050f]/30 to-[#02050f]" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 pt-10 sm:pt-14 md:pt-20 lg:pt-24 flex flex-col items-center text-center">
        {/* Main Heading */}
        <motion.h1
          custom={1}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          className="text-3xl sm:text-5xl md:text-6xl font-extrabold tracking-tight text-white max-w-4xl drop-shadow-[0_0_25px_rgba(255,255,255,0.4)]"
        >
          LumenFi Academy
        </motion.h1>

        {/* Subheading */}
        <motion.h2
          custom={1.5}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          className="text-xl sm:text-3xl md:text-4xl font-bold tracking-tight mt-2 mb-3 text-transparent bg-clip-text bg-gradient-to-r from-[#38bdf8] via-[#00C2C7] to-[#818cf8] drop-shadow-[0_0_20px_rgba(0,194,199,0.35)]"
        >
          Shaping the Future of Light Connectivity!
        </motion.h2>

        {/* Description Paragraph */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-xs sm:text-sm md:text-base max-w-2xl mb-4 leading-relaxed text-slate-200"
        >
          Our free membership grants you access to live classes, a thriving community of innovators, and an incredible opportunity to monetize this cutting-edge technology.
        </motion.p>
      </div>

      {/* ── MOBILE VIEW: All Sliding Sector Cards with Neon Glow ── */}
      <motion.div
        custom={2.5}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full px-3 my-4 block md:hidden"
      >
        <div className="flex items-center justify-start gap-3.5 overflow-x-auto pb-3 pt-2 snap-x snap-mandatory no-scrollbar px-2">
          {heroSectors.map((sector) => {
            const IconComponent = sector.icon;
            return (
              <div
                key={sector.id}
                className={`shrink-0 w-[210px] h-[340px] rounded-3xl overflow-hidden relative border-2 ${sector.border} bg-[#04101e] snap-center shadow-lg`}
                style={{
                  boxShadow: `0 0 25px ${sector.glow}`,
                }}
              >
                <img
                  src={typeof sector.img === 'string' ? sector.img : sector.img?.src}
                  alt={sector.title}
                  className="absolute inset-0 w-full h-full object-cover"
                />
                <div className="carousel-overlay" />
                <div className="relative z-10 p-4 h-full flex flex-col justify-end text-left space-y-1">
                  <div className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full backdrop-blur-md border shadow-md w-fit ${sector.badgeBg}`}>
                    <IconComponent className="w-3 h-3" />
                    <span className="font-mono text-[10px] font-bold tracking-wide">
                      {sector.metric}
                    </span>
                  </div>
                  <p className={`font-mono text-[9px] uppercase tracking-[1.5px] font-bold pt-1 ${sector.accentText}`}>
                    {sector.subtitle}
                  </p>
                  <h3 className="font-bold text-base text-white leading-tight">
                    {sector.title}
                  </h3>
                  <p className="text-[11px] text-slate-200 leading-snug line-clamp-2">
                    {sector.desc}
                  </p>
                </div>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* ── DESKTOP VIEW: Holographic 3D Floating Infinite Carousel ── */}
      <motion.div
        custom={3}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 w-full my-6 hidden md:block"
      >
        <div className="carousel-container">
          <div className="carousel-track" ref={trackRef}>
            {[...heroSectors, ...heroSectors].map((sector, index) => {
              const IconComponent = sector.icon;
              return (
                <div
                  className={`carousel-item flex flex-col justify-end p-5 text-left border-2 ${sector.border}`}
                  key={`${sector.id}-${index}`}
                  style={{
                    boxShadow: `0 0 25px ${sector.glow}`,
                  }}
                >
                  <img
                    src={typeof sector.img === 'string' ? sector.img : sector.img?.src}
                    alt={sector.title}
                    className="absolute inset-0 z-0 object-cover w-full h-full"
                  />

                  <div className="carousel-overlay" />

                  <div className="relative z-10 space-y-1.5">
                    <div className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full backdrop-blur-md border shadow-md ${sector.badgeBg}`}>
                      <IconComponent className="w-3 h-3" />
                      <span className="font-mono text-[10px] font-bold tracking-wide">
                        {sector.metric}
                      </span>
                    </div>

                    <p className={`font-mono text-[11px] uppercase tracking-[1.5px] font-bold pt-0.5 ${sector.accentText}`}>
                      {sector.subtitle}
                    </p>

                    <h3 className="font-bold text-[18px] text-white leading-snug tracking-tight">
                      {sector.title}
                    </h3>

                    <p className="text-[12px] leading-[1.5] text-slate-200 line-clamp-2">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Center Action Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-6 w-full z-20"
        >
          <a
            href="#join"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-[1.03] hover:shadow-cyan-500/25 w-full sm:w-auto"
            style={{
              background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)',
              boxShadow: '0 0 25px rgba(0, 194, 199, 0.4)',
            }}
          >
            Join for FREE <ArrowRight size={16} />
          </a>
          <a
            href="#curriculum"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border-2 transition-all hover:scale-[1.02] w-full sm:w-auto border-[#00C2C7] text-[#00C2C7] bg-[#00C2C7]/10 hover:bg-[#00C2C7]/20 shadow-[0_0_15px_rgba(0,194,199,0.2)]"
          >
            Explore Curriculum
          </a>
        </motion.div>

        {/* Center Metrics Grid */}
        <motion.div
          custom={5}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="grid grid-cols-3 gap-8 sm:gap-16 mt-12 pt-8 border-t border-dashed border-cyan-500/30 max-w-2xl w-full justify-center z-20"
        >
          {[
            { val: 'Learn', label: 'Master Li-Fi' },
            { val: 'Connect', label: 'Global Network' },
            { val: 'Monetize', label: 'Lucrative Biz' },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="font-extrabold text-2xl sm:text-3xl tracking-tight text-white drop-shadow-[0_0_12px_rgba(0,194,199,0.4)]">
                {val}
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest mt-1 text-cyan-300">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}




/* ── SECTION 2: WHAT YOU WILL LEARN ── */
function CurriculumSection() {
  const pillars = [
    { icon: BookOpen, label: 'The Fundamentals of Li-Fi', desc: 'Understand the basic principles of Li-Fi, how it utilizes light antennas to transmit data through light waves, and why it is a powerful alternative to traditional Wi-Fi.' },
    { icon: Zap, label: 'Speed and Performance', desc: 'Discover how Li-Fi achieves gigabit-per-second speeds and how its high-speed data transfer capabilities outpace current Wi-Fi technology.' },
    { icon: Shield, label: 'Enhanced Security', desc: 'Learn why Li-Fi provides unparalleled, military-grade security. Since light cannot penetrate walls, data is contained within a specific physical space, eliminating outside interception.' },
    { icon: Focus, label: 'Interference-Free Environments', desc: 'Explore how Li-Fi operates in the visible light spectrum, making it completely immune to the electromagnetic interference that plagues standard RF networks.' },
  ];

  return (
    <section id="curriculum" className="relative overflow-hidden py-24 section-wash-white">
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-[160px] opacity-35 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.15) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2240] mb-4">
            What You Will <span className="text-gradient-lumen">Learn.</span>
          </h2>
          <p className="text-[#4A6080] max-w-2xl mx-auto text-base leading-relaxed">
            LumenFi Academy is designed to take you from a curious beginner to a Li-Fi expert. Our curriculum covers a wide range of subjects, breaking down complex concepts into easy-to-understand, actionable lessons.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(13,34,64,0.12)] border border-[var(--lumen-border)] mb-14"
          style={{ aspectRatio: '16/6' }}>
          <Image src={communityCreatorImg} alt="Lumenfi Curriculum" fill loading="lazy" className="object-cover" sizes="100vw" />
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ icon: PillarIcon, label, desc }, idx) => (
            <motion.div key={label} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-[#EAF3FA] border border-[var(--lumen-border)] hover:border-[#1A6EBF] hover:shadow-lg hover:shadow-[rgba(0,194,199,0.08)] transition-all duration-300">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, rgba(26,110,191,0.1) 0%, rgba(0,194,199,0.1) 100%)', border: '1px solid var(--lumen-border)' }}>
                <PillarIcon size={18} className="text-[#1A6EBF]" />
              </div>
              <h4 className="font-black text-sm text-[#0D2240] mb-2">{label}</h4>
              <p className="text-xs text-[#4A6080] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 3: INDUSTRY APPLICATIONS ── */
const sectors = [
  {
    icon: Activity,
    title: 'Healthcare',
    desc: 'Enabling secure data transmission in hospitals without interfering with sensitive medical equipment like MRI machines.',
    highlight: 'Secure data transmission without equipment interference.',
    image: communityEvImg,
    alt: 'Healthcare Environments',
    color: '#1A6EBF',
    tag: 'HEALTHCARE',
  },
  {
    icon: Rocket,
    title: 'Aviation',
    desc: 'Allowing for safe, high-speed connectivity on commercial airplanes without disrupting radar or communication systems.',
    highlight: 'High-speed connectivity without radar disruption.',
    image: communitySmartCityImg,
    alt: 'Aviation Sector',
    color: '#00C2C7',
    tag: 'AVIATION',
  },
  {
    icon: Building2,
    title: 'Smart Environments',
    desc: 'Utilizing street lamps and standard lighting for indoor positioning, asset tracking, and targeted advertising.',
    highlight: 'Indoor positioning and asset tracking via light.',
    image: communityFactoryImg,
    alt: 'Smart Environments',
    color: '#0FB89A',
    tag: 'SMART ENVIRONMENTS',
  },
  {
    icon: Anchor,
    title: 'Underwater Communication',
    desc: 'Discovering how light can travel through water, offering new possibilities for underwater vehicle communication.',
    highlight: 'New possibilities for underwater communication.',
    image: communityAiImg,
    alt: 'Underwater Tech',
    color: '#1A6EBF',
    tag: 'UNDERWATER',
  },
];

function ApplicationsSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = sectors[activeIdx];
  const ActiveIcon = active.icon;

  return (
    <section className="relative overflow-hidden py-24 section-wash-secondary">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.18) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2240] mb-4">
            Industry <span className="text-gradient-lumen">Applications.</span>
          </h2>
          <p className="text-[#4A6080] max-w-2xl mx-auto text-base leading-relaxed">
            We break down how Li-Fi is transforming critical sectors globally.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {sectors.map((opp, idx) => {
            const TabIcon = opp.icon;
            const isActive = idx === activeIdx;
            return (
              <button key={idx} onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${isActive
                  ? 'bg-white border-[#1A6EBF] text-[#0D2240] shadow-md'
                  : 'bg-white/50 border-[var(--lumen-border)] text-[#4A6080] hover:border-[#1A6EBF] hover:text-[#0D2240]'}`}
                style={isActive ? { boxShadow: `0 0 0 2px ${opp.color}22, 0 4px 20px rgba(26,110,191,0.12)` } : {}}>
                <TabIcon size={13} style={{ color: isActive ? opp.color : undefined }} />
                {opp.tag}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeIdx}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl border border-[var(--lumen-border)] shadow-xl overflow-hidden">
            <div className="relative w-full aspect-video lg:aspect-auto min-h-[280px]">
              <Image src={active.image} alt={active.alt} fill loading="lazy" className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute top-4 left-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white font-mono text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: `linear-gradient(135deg, ${active.color} 0%, #00C2C7 100%)` }}>
                  <ActiveIcon size={11} /> {active.tag}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-black text-[#0D2240] mb-4 leading-tight">{active.title}</h3>
              <p className="text-[#4A6080] leading-relaxed mb-6 text-sm md:text-base">{active.desc}</p>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#EAF3FA] border border-[var(--lumen-border)]">
                <Zap size={16} className="shrink-0 mt-0.5" style={{ color: active.color }} />
                <p className="text-sm font-semibold text-[#0D2240]">{active.highlight}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {sectors.map((_, idx) => (
            <button key={idx} onClick={() => setActiveIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIdx ? 'w-8 bg-[#1A6EBF]' : 'w-1.5 bg-[var(--lumen-border)]'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}


/* ── SECTION 4: THE LUMENFI COMMUNITY EXPERIENCE ── */
function CommunityExperienceSection() {
  const experiences = [
    {
      icon: MonitorPlay,
      title: 'Live Interactive Classes',
      desc: 'Engage directly with industry experts in real-time. Ask questions, participate in discussions, and get hands-on guidance.',
    },
    {
      icon: Network,
      title: 'Global Networking',
      desc: 'Connect with other tech enthusiasts, entrepreneurs, and forward-thinkers. Share ideas, collaborate on projects, and build a network that will support your journey.',
    },
    {
      icon: TrendingUp,
      title: 'Stay Ahead of the Curve',
      desc: 'Gain exclusive access to the latest research, developments, and breakthroughs in optical wireless communications.',
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 section-wash-primary">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[180px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.2) 0%, rgba(26,110,191,0.15) 50%, transparent 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2240] mb-4">
            The LumenFi <span className="text-gradient-lumen">Community Experience.</span>
          </h2>
          <p className="text-[#4A6080] max-w-xl mx-auto text-base leading-relaxed">
            Learning doesn't happen in a vacuum. By joining LumenFi Academy, you become part of a movement.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {experiences.map((exp, idx) => {
            const ExpIcon = exp.icon;
            return (
              <motion.div key={idx} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                className="relative flex flex-col rounded-3xl border border-[var(--lumen-border)] shadow-md hover:shadow-xl hover:border-[#1A6EBF] hover:scale-[1.01] transition-all duration-300 bg-white overflow-hidden">
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }} />
                <div className="p-8 flex-grow flex flex-col">
                  <div className="h-12 w-12 rounded-xl flex items-center justify-center mb-5"
                    style={{ background: 'linear-gradient(135deg, rgba(26,110,191,0.1) 0%, rgba(0,194,199,0.1) 100%)' }}>
                    <ExpIcon size={24} className="text-[#1A6EBF]" />
                  </div>
                  <h3 className="font-black text-xl text-[#0D2240] mb-3">{exp.title}</h3>
                  <p className="text-[#4A6080] text-sm leading-relaxed flex-grow">{exp.desc}</p>
                </div>
              </motion.div>
            )
          })}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 5: MONETIZE THE FUTURE ── */
function MonetizeSection() {
  const benefits = [
    { icon: Award, title: 'Become a Certified Reseller', desc: 'Once you complete our core curriculum, you\'ll have the opportunity to become an official LumenFi technology reseller.' },
    { icon: Cpu, title: 'The Hardware Advantage', desc: 'As a certified partner, you will have access to the latest in Li-Fi technology.' },
    { icon: Handshake, title: 'Turnkey Business Model', desc: 'We provide you with the marketing materials, sales strategies, and ongoing support you need to successfully pitch and sell Li-Fi solutions to businesses and consumers in your area.' },
  ];

  return (
    <section className="relative overflow-hidden py-24 section-wash-secondary">

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2240] mb-6 leading-tight">
                Your Opportunity:<br /> <span className="text-gradient-lumen">Monetize the Future.</span>
              </h2>
              <p className="text-[#4A6080] text-base leading-relaxed mb-10">
                LumenFi Academy isn't just about education; it's about empowerment. We provide a unique opportunity for our members to turn their knowledge into a lucrative business.
              </p>
            </motion.div>
            <div className="flex flex-col gap-5">
              {benefits.map(({ icon: BIcon, title, desc }, idx) => (
                <motion.div key={title} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="group p-5 rounded-2xl bg-white border border-[var(--lumen-border)] hover:border-[#1A6EBF] hover:shadow-lg transition-all duration-300 flex items-start gap-4">
                  <div className="h-12 w-12 shrink-0 rounded-xl flex items-center justify-center transition-transform group-hover:scale-110 duration-200"
                    style={{ background: 'linear-gradient(135deg, rgba(26,110,191,0.1) 0%, rgba(0,194,199,0.1) 100%)', border: '1px solid var(--lumen-border)' }}>
                    <BIcon size={20} className="text-[#1A6EBF]" />
                  </div>
                  <div>
                    <h4 className="font-black text-base text-[#0D2240] mb-1">{title}</h4>
                    <p className="text-xs text-[#4A6080] leading-relaxed">{desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--lumen-border)] bg-white">
              <Image
                src={communityFactoryImg}
                alt="Turnkey Business Opportunities"
                className="w-full h-auto object-contain block"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 6: REGISTRATION FORM ── */
function ApplicationForm() {
  useEffect(() => {
    if (!document.querySelector('script[src="https://api.wonderengine.ai/js/form_embed.js"]')) {
      const script = document.createElement('script');
      script.src = 'https://api.wonderengine.ai/js/form_embed.js';
      script.async = true;
      document.body.appendChild(script);
    }
  }, []);

  return (
    <section id="join" className="relative overflow-hidden py-16 sm:py-20 bg-[#F8FCFE] border-t border-[var(--lumen-border)]">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.3) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-20 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.2) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-[var(--lumen-border)] shadow-xl shadow-[rgba(13,34,64,0.06)] p-6 sm:p-8 lg:p-10"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
            {/* Left Column: Heading + Description + Trust Badges */}
            <div className="lg:col-span-5 flex flex-col justify-start">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[rgba(26,110,191,0.08)] border border-[rgba(26,110,191,0.2)] text-[#1A6EBF] text-xs font-mono font-bold uppercase tracking-wider mb-4 w-fit">
                <span className="h-2 w-2 rounded-full bg-[#00C2C7] animate-pulse" />
                Free Registration
              </div>

              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[#0D2240] mb-3 leading-tight">
                Join <span className="text-gradient-lumen">LumenFi Academy</span> Today.
              </h2>

              <p className="text-[#4A6080] text-sm leading-relaxed mb-6">
                Join LumenFi Academy today for FREE and start building your future at the speed of light!
              </p>

              <div className="space-y-3.5">
                {[
                  { icon: Shield, label: 'Your Data is Safe', desc: 'We keep your information secure and never share it without your consent.' },
                  { icon: Mail, label: 'Instant Access', desc: 'You will receive an email with login details immediately after enrolling.' },
                  { icon: DollarSign, label: '100% Free', desc: 'The core curriculum and community access are completely free.' },
                ].map(({ icon: TIcon, label, desc }) => (
                  <div key={label} className="flex items-start gap-3 p-3.5 rounded-2xl bg-[#F8FCFE] border border-[var(--lumen-border)]">
                    <div className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0 bg-[rgba(26,110,191,0.08)]">
                      <TIcon size={16} className="text-[#1A6EBF]" />
                    </div>
                    <div>
                      <div className="text-xs font-bold text-[#0D2240]">{label}</div>
                      <div className="text-[11px] text-[#4A6080] mt-0.5 leading-relaxed">{desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Column: WonderEngine Form Embed */}
            <div className="lg:col-span-7 w-full flex flex-col justify-start border-t lg:border-t-0 lg:border-l border-[var(--lumen-border)] pt-6 lg:pt-0 lg:pl-8">
              <iframe
                src="https://api.wonderengine.ai/widget/form/0LXv19xiVsNzt9xtK3Ih"
                style={{ width: '100%', height: '100%', minHeight: '620px', border: 'none', borderRadius: '8px' }}
                id="inline-0LXv19xiVsNzt9xtK3Ih"
                data-layout="{'id':'INLINE'}"
                data-trigger-type="alwaysShow"
                data-trigger-value=""
                data-activation-type="alwaysActivated"
                data-activation-value=""
                data-deactivation-type="neverDeactivate"
                data-deactivation-value=""
                data-form-name="Lumen Li-Fi Contact Form"
                data-height="616"
                data-layout-iframe-id="inline-0LXv19xiVsNzt9xtK3Ih"
                data-form-id="0LXv19xiVsNzt9xtK3Ih"
                title="Lumen Li-Fi Contact Form"
              />
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── SECTION 7: FINAL CALL TO ACTION ── */
function FinalCTASection() {
  return (
    <section className="py-28 relative overflow-hidden section-wash-primary" id="cta-final">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image src={ctaImg} alt="cta" fill loading="lazy" />
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[140px] opacity-40"
          style={{ background: 'radial-gradient(circle, var(--lumen-cyan) 0%, transparent 75%)' }}
        />
        <div
          className="absolute -bottom-36 left-1/3 w-[500px] h-[350px] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.2) 0%, transparent 75%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="rounded-[2.5rem] p-10 sm:p-14 md:p-20 relative overflow-hidden section-wash-navy shadow-[0_32px_80px_rgba(13,34,64,0.3)] border border-white/5 group">
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-80"
              style={{ background: 'radial-gradient(circle at 50% 10%, rgba(0,194,199,0.12) 0%, transparent 50%)' }}
            />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="!text-white text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05]">
                Leave old radio waves behind.
                <br />
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2C7] via-[#0FB89A] to-[#00C2C7] bg-[size:200%_auto] animate-pulse"
                  style={{ animationDuration: '4s' }}
                >
                  Live at the speed of light.
                </span>
              </h2>

              <p className="text-blue-100/80 text-sm sm:text-base md:text-lg mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                Upgrade your home or office to the fastest and safest internet ever made. It is clean, private, and works instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link
                  href="/what-is-lifi"
                  className="glow-cyan inline-flex items-center justify-center gap-2.5 h-14 px-10 rounded-2xl text-[#0D2240] font-black text-sm tracking-wider transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(0,194,199,0.4)] w-full sm:w-auto"
                  style={{ background: 'linear-gradient(135deg, #00C2C7 0%, #0FB89A 100%)' }}
                >
                  What is LiFi?
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl font-bold text-sm tracking-wider border-2 border-white/10 text-white hover:border-white/40 hover:bg-white/5 bg-transparent transition-all duration-300 w-full sm:w-auto"
                >
                  Request a Demo
                </Link>
              </div>

              <div className="mb-12 flex items-center justify-center gap-2 text-xs font-mono text-blue-200/70">
                <Mail size={14} className="text-[#00C2C7]" />
                <span>Sales ID:</span>
                <a
                  href="mailto:rupali@lifilumen.com"
                  className="text-white hover:text-[#00C2C7] underline underline-offset-4 font-semibold transition-colors"
                >
                  rupali@lifilumen.com
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-2xl mx-auto text-left sm:text-center">
                {[
                  { icon: Sparkles, label: '10 Gbps Active Ready' },
                  { icon: ShieldCheck, label: 'Military-Grade Security' },
                  { icon: Sliders, label: 'Zero Router Congestion' },
                ].map((feat, fIdx) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div key={fIdx} className="flex sm:flex-col items-center gap-3 sm:gap-1.5 justify-start sm:justify-center">
                      <FeatIcon size={14} className="text-[var(--lumen-cyan)] shrink-0" />
                      <span className="text-xs font-mono font-medium tracking-wide text-blue-200/60 uppercase">{feat.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── ROOT PAGE EXPORT ── */
export default function AcademyPage() {
  return (
    <div className="flex flex-col min-h-screen antialiased font-sans lumen-page-bg text-[#0D2240]">
      <Head>
        <title>LumenFi Academy — Shaping the Future of Light Connectivity</title>
        <meta name="description" content="At LumenFi Academy, we provide you with the tools, knowledge, and community to master Li-Fi technology." />
        <meta property="og:title" content="LumenFi Academy — Master Li-Fi Technology" />
        <meta property="og:description" content="Discover the future of the internet. Join for free, master Li-Fi, and become a certified reseller." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <CurriculumSection />
        <ApplicationsSection />
        <CommunityExperienceSection />
        <MonetizeSection />
        <ApplicationForm />
        <FinalCTASection />
      </main>
      <Footer />
    </div>
  );
}
