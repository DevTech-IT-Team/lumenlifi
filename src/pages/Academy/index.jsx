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
import communityFactoryImg from '../../../public/images/hero/partner-factory.png';
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
    id: 'gaming',
    title: 'Ultra-Low Latency Gaming',
    subtitle: 'COMPETITIVE ESPORTS & VR',
    desc: 'Eliminate ping and packet loss with direct light-based transmission.',
    img: 'https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=800&q=80',
    metric: '<1ms Latency',
    icon: Gamepad2,
  },
  {
    id: 'ai',
    title: 'AI Data Mesh Systems',
    subtitle: 'HIGH-SPEED NEURAL TRAINING',
    desc: 'Stream gigabytes of real-time AI sensor data instantaneously.',
    img: aiMesh,
    metric: '100 Gbps Link',
    icon: Cpu,
  },
  {
    id: 'manufacturing',
    title: 'Industrial Manufacturing',
    subtitle: 'HEAVY MACHINERY AUTOMATION',
    desc: 'Keep factory robots running smoothly without network interference.',
    img: 'https://images.unsplash.com/photo-1581091226825-a6a2a5aee158?auto=format&fit=crop&w=800&q=80',
    metric: '0% Radio Interference',
    icon: Factory,
  },
  {
    id: 'schools',
    title: 'Smart Schools & Campuses',
    subtitle: 'HIGH-DENSITY CLASSROOMS',
    desc: 'Prevent bandwidth slowdowns when hundreds of students log on together.',
    img: education,
    metric: 'Lag-Free Optical Link',
    icon: GraduationCap,
  },
  {
    id: 'internet',
    title: 'Next-Gen Broadband',
    subtitle: 'OPTICAL WIRELESS ACCESS',
    desc: 'Replace congested Wi-Fi spectrum with localized light fidelity.',
    img: 'https://images.unsplash.com/photo-1544197150-b99a580bb7a8?auto=format&fit=crop&w=800&q=80',
    metric: 'LiFi Spectrum',
    icon: Wifi,
  },
  {
    id: 'transportation',
    title: 'Autonomous Transportation',
    subtitle: 'VEHICLE-TO-INFRASTRUCTURE',
    desc: 'Enable instant V2I communication between vehicles and street fixtures.',
    img: Transport,
    metric: 'Real-Time V2X',
    icon: Car,
  },
  {
    id: 'robotics',
    title: 'Autonomous Robotics',
    subtitle: 'FLEET SWARM COORDINATION',
    desc: 'Synchronize warehouse and logistics robot swarms via overhead optical transmitters.',
    img: 'https://images.unsplash.com/photo-1485827404703-89b55fcc595e?auto=format&fit=crop&w=800&q=80',
    metric: 'Sub-Millimeter Sync',
    icon: Bot,
  },
  {
    id: 'entertainment',
    title: 'Immersive Entertainment',
    subtitle: 'LIVE STADIUMS & HOLOGRAMS',
    desc: 'Stream high-bitrate 8K video feeds and interactive spatial audio in packed arenas.',
    img: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?auto=format&fit=crop&w=800&q=80',
    metric: '8K Capacity',
    icon: Tv,
  },
  {
    id: 'healthcare',
    title: 'Medical & Healthcare',
    subtitle: 'EMI-SENSITIVE SURGERY',
    desc: 'Safely transmit vital signs and live diagnostic feeds in surgical wards.',
    img: 'https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&w=800&q=80',
    metric: 'Medical Grade',
    icon: Stethoscope,
  },
  {
    id: 'smart-devices',
    title: 'Smart Devices & IoT',
    subtitle: 'OPTICAL SMART HOME MESH',
    desc: 'Connect household IoT devices directly to ambient ceiling illumination.',
    img: 'https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=800&q=80',
    metric: 'Zero-RF Mesh',
    icon: Lightbulb,
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
        // Skip JS positional calculations if user is actively hovering this card
        if (item.matches(':hover')) return;

        const itemRect = item.getBoundingClientRect();
        const itemCenter = itemRect.left + itemRect.width / 2;
        const distanceFromCenter = itemCenter - viewportCenter;

        const normalizedDistance = Math.max(
          -1,
          Math.min(1, distanceFromCenter / (window.innerWidth / 1.6))
        );

        const absDist = Math.abs(normalizedDistance);

        const rotateY = -normalizedDistance * 32;
        const rotateX = absDist * 5;
        const translateY = absDist * 24;

        let translateZ = 0;
        let scale = 1;

        if (absDist < 0.15) {
          scale = 1.1;
          translateZ = 160;
        } else if (absDist < 0.55) {
          scale = 0.85 + (1 - (absDist - 0.15) / 0.4) * (1.1 - 0.85);
          translateZ = 70 + (1 - (absDist - 0.15) / 0.4) * 90;
        } else {
          scale = 0.7 + (1 - Math.min(1, (absDist - 0.55) / 0.45)) * (0.85 - 0.7);
          translateZ = -50 + (1 - Math.min(1, (absDist - 0.55) / 0.45)) * 120;
        }

        const zIndex = Math.round(1000 - absDist * 800);

        item.style.transform = `perspective(1800px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${translateY}px) scale(${scale})`;
        item.style.zIndex = zIndex;

        const img = item.querySelector('img');
        const glow = item.querySelector('.hero-glow');

        if (absDist < 0.18) {
          item.style.opacity = '1';
          item.style.filter = 'brightness(1.1) saturate(1.2)';
          item.style.boxShadow =
            '0 30px 90px rgba(0, 0, 0, 0.4), 0 0 80px rgba(188, 203, 216, 0.3)';

          if (img) img.style.filter = 'saturate(1.2)';
          if (glow) glow.style.opacity = '1';
        } else if (absDist < 0.5) {
          item.style.opacity = '0.75';
          item.style.filter = 'brightness(0.85) saturate(0.9)';
          item.style.boxShadow =
            '0 20px 60px rgba(0, 0, 0, 0.3), 0 0 50px rgba(0, 194, 199, 0.1)';

          if (img) img.style.filter = 'saturate(1)';
          if (glow) glow.style.opacity = '0';
        } else {
          item.style.opacity = '0.25';
          item.style.filter = 'brightness(0.6) saturate(0.7)';
          item.style.boxShadow = '0 10px 25px rgba(0,0,0,0.4)';

          if (img) img.style.filter = 'saturate(0.8)';
          if (glow) glow.style.opacity = '0';
        }
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
    <section
      className="relative w-full pt-28 pb-21 overflow-hidden"
      style={{
        background: 'linear-gradient(to bottom, #fff 100%, #eaf5f7 50%, #def3f9 0%)',
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
      /* Carousel Container with extended vertical overflow so scaling cards aren't clipped */
      .carousel-container {
        perspective: 1800px;
        overflow-x: hidden;
        overflow-y: blur;
        width: 100%;
        padding: 80px 0;
        mask-image: linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%);
        -webkit-mask-image: linear-gradient(to right, transparent 0%, black 25%, black 75%, transparent 100%);
      }

      /* Continuous Track */
      .carousel-track {
        display: flex;
        gap: 32px;
        width: max-content;
        animation: scroll 55s linear infinite;
        transform-style: preserve-3d;
      }

      .carousel-track:hover {
        animation-play-state: paused;
      }

      /* TRANSPARENT BACKGROUND CARDS: 260px x 350px */
      .carousel-item {
        width: 260px;
        height: 350px;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        transition: transform 0.35s ease, box-shadow 0.35s ease, filter 0.35s ease, opacity 0.35s ease;
        transform-origin: center center;
        will-change: transform, opacity, filter;

        /* Fully Transparent Card Background */
        background: transparent;
        backdrop-filter: blur(8px);
        -webkit-backdrop-filter: blur(8px);
        border: 1px solid rgba(255, 255, 255, 0.3);
      }

      /* PREMIUM SUBTLE HOVER */
      .carousel-item:hover {
        transform:
          perspective(1800px)
          translateZ(80px)
          rotateY(0deg)
          rotateX(0deg)
          translateY(-8px)
          scale(1.06) !important;

        z-index: 999 !important;
        opacity: 1 !important;

        filter: brightness(1.08) saturate(1.1) !important;

        box-shadow:
          0 20px 50px rgba(0, 0, 0, 0.20),
          0 0 35px rgba(0, 194, 199, 0.25) !important;

        border-color: rgba(0, 194, 199, 0.6);
        background: transparent !important;
      }

      /* Animated Light Sweep */
      .carousel-item::before {
        content: "";
        position: absolute;
        top: 0;
        left: -120%;
        width: 70%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.2), transparent);
        transform: skewX(-25deg);
        animation: shine 6s infinite ease-in-out;
        z-index: 15;
        pointer-events: none;
      }

      @keyframes shine {
        0%, 60% { left: -120%; }
        100% { left: 220%; }
      }

      /* Image Parallax */
      .carousel-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.04);
        transition: transform 0.35s ease;
      }

      .carousel-item:hover img {
        transform: scale(1.08) translateY(-2px);
      }

      /* Transparent Gradient Overlay for Text Legibility */
      .carousel-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 20%, rgba(4, 18, 40, 0.85) 100%);
        pointer-events: none;
        z-index: 5;
      }

      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-50% - 16px)); }
      }

      .floating-particle {
        animation: floatParticle 12s infinite ease-in-out;
      }

      @keyframes floatParticle {
        0%, 100% { transform: translateY(0px) translateX(0px); }
        50% { transform: translateY(-30px) translateX(15px); }
      }
    `,
        }}
      />

      {/* Layered Ambient Background */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div
          className="absolute top-10 left-1/2 -translate-x-1/2 w-[900px] h-[550px] rounded-full blur-[140px] opacity-40"
          style={{
            background: 'radial-gradient(circle, rgba(26,110,191,0.3) 0%, rgba(0,194,199,0.15) 50%, transparent 80%)',
          }}
        />
        <div
          className="absolute -top-20 right-1/4 w-[650px] h-[500px] rounded-full blur-[130px] opacity-30"
          style={{
            background: 'radial-gradient(circle, rgba(0,194,199,0.25) 0%, transparent 70%)',
          }}
        />

        <div
          className="absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage:
              'linear-gradient(var(--lumen-border, #1A6EBF) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border, #1A6EBF) 1px, transparent 1px)',
            backgroundSize: '64px 64px',
          }}
        />

        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#00C2C7]/60 blur-[1px] floating-particle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#1A6EBF]/50 blur-[2px] floating-particle" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-[#00C2C7]/40 blur-[1px] floating-particle" style={{ animationDelay: '6s' }} />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 flex flex-col items-center text-center">
        {/* Main Heading */}
        <motion.h1
          custom={1}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.1] mb-4 text-[#0D2240] max-w-4xl"
        >
          Welcome to <span className="text-gradient-lumen">LumenFi Academy</span>
          <br />
          Shaping the Future of <span className="text-gradient-lumen">Light Connectivity!</span>
        </motion.h1>

        {/* Subtitle Paragraph */}
        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="text-base md:text-lg max-w-2xl mb-2 leading-relaxed text-[#4A6080] font-semibold"
        >
          Our free membership grants you access to live classes, a thriving community of innovators, and an incredible opportunity to monetize this cutting-edge technology.
        </motion.p>

        {/* Holographic 3D Floating Carousel */}
        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="w-full my-2 relative"
        >
          <div className="carousel-container">
            <div className="carousel-track" ref={trackRef}>
              {[...heroSectors, ...heroSectors].map((sector, index) => {
                const IconComponent = sector.icon;
                return (
                  <div
                    className="carousel-item flex flex-col justify-end p-5 text-left"
                    key={`${sector.id}-${index}`}
                  >
                    {/* Active Hero Background Glow */}
                    <div
                      className="hero-glow absolute -inset-10 -z-10 rounded-full blur-[100px] opacity-0 transition-opacity duration-500 pointer-events-none"
                      style={{
                        background: 'radial-gradient(circle, rgba(0, 194, 199, 0.6) 0%, rgba(26, 110, 191, 0.3) 60%, transparent 80%)',
                      }}
                    />

                    {/* Card Background Image */}
                    <img
                      src={typeof sector.img === 'string' ? sector.img : sector.img?.src}
                      alt={sector.title}
                      className="absolute inset-0 z-0"
                    />

                    <div className="carousel-overlay" />

                    {/* Compact Typography & Content Layout */}
                    <div className="relative z-10 space-y-1.5">
                      {/* Glass Pill Badge */}
                      <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 shadow-[0_0_12px_rgba(0,194,199,0.25)]">
                        <IconComponent className="w-3 h-3 text-cyan-300" />
                        <span className="font-mono text-[10px] font-bold text-cyan-300 tracking-wide">
                          {sector.metric}
                        </span>
                      </div>

                      {/* Subtitle */}
                      <p className="font-mono text-[11px] uppercase tracking-[1.5px] text-[#b8c4ff] font-semibold pt-0.5">
                        {sector.subtitle}
                      </p>

                      {/* Title */}
                      <h3 className="font-bold text-[18px] text-white leading-snug tracking-tight">
                        {sector.title}
                      </h3>

                      {/* Description */}
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

        {/* Center Action Buttons */}
        <motion.div
          custom={4}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row items-center justify-center gap-4 mt-4 w-full z-20"
        >
          <a
            href="#join"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl w-full sm:w-auto glow-blue"
            style={{
              background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)',
            }}
          >
            Join for FREE <ArrowRight size={16} />
          </a>
          <a
            href="#curriculum"
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border-2 transition-all hover:scale-[1.02] w-full sm:w-auto border-[#1A6EBF] text-[#1A6EBF] bg-[rgba(26,110,191,0.03)]"
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
          className="grid grid-cols-3 gap-8 sm:gap-16 mt-10 pt-8 border-t border-dashed border-[var(--lumen-border,#1A6EBF)]/30 max-w-2xl w-full justify-center z-20"
        >
          {[
            { val: 'Learn', label: 'Master Li-Fi' },
            { val: 'Connect', label: 'Global Network' },
            { val: 'Monetize', label: 'Lucrative Biz' },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center text-center">
              <div className="font-black text-2xl sm:text-3xl tracking-tight text-[#0D2240]">
                {val}
              </div>
              <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest mt-1 text-[#4A6080]">
                {label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="relative z-10 h-16 bg-gradient-to-b from-transparent to-[#EBF3FC]" />
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
    <section id="curriculum" className="relative overflow-hidden py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
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
          <Image src={communityCreatorImg} alt="Lumenfi Curriculum" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
            {[
              { label: 'Beginner to Expert', sub: 'Actionable Lessons' },
              { label: 'Complex Concepts', sub: 'Easy to Understand' },
            ].map(({ label, sub }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-[var(--lumen-border)] shadow-md">
                <div>
                  <div className="font-black text-sm text-[#0D2240]">{label}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#4A6080]">{sub}</div>
                </div>
              </div>
            ))}
          </div>
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
    <section className="relative overflow-hidden py-24 bg-[#EBF3FC]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
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
              <Image src={active.image} alt={active.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
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
    <section className="relative overflow-hidden py-24 bg-[#F4F9FC]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
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
    <section className="relative overflow-hidden py-24 bg-[#EBF3FC]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

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
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--lumen-border)] aspect-[4/3]">
              <Image src={communityFactoryImg} alt="Turnkey Business Opportunities" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-[var(--lumen-border)] shadow-xl p-5 max-w-[200px]">
              <div className="font-black text-3xl text-gradient-lumen mb-1">Empower</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#4A6080]">Lucrative<br />Business Model</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl border border-[var(--lumen-border)] shadow-xl p-4 max-w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#00C2C7] animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-[#4A6080] uppercase">Certified Resellers</span>
              </div>
              <div className="font-black text-2xl text-[#0D2240]">Join Now</div>
              <div className="text-[10px] font-mono text-[#4A6080] mt-0.5">Start building today</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 6: REGISTRATION FORM ── */
function ApplicationForm() {
  const [formState, setFormState] = useState({
    firstName: '', lastName: '', email: '', interest: '', agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-[var(--lumen-border)] bg-white text-sm text-[#0D2240] placeholder:text-[#4A6080]/60 focus:outline-none focus:border-[#1A6EBF] focus:ring-2 focus:ring-[rgba(26,110,191,0.12)] transition-all duration-200 font-sans";
  const labelCls = "block text-xs font-bold font-mono uppercase tracking-wider text-[#4A6080] mb-1.5";

  return (
    <section id="join" className="relative overflow-hidden py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.2) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.18) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2240] mb-4">
            Join <span className="text-gradient-lumen">LumenFi Academy</span> Today.
          </h2>
          <p className="text-[#4A6080] max-w-xl mx-auto text-base leading-relaxed">
            Join LumenFi Academy today for FREE and start building your future at the speed of light!
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-[var(--lumen-border)] shadow-2xl shadow-[rgba(13,34,64,0.08)] overflow-hidden">
          <div className="px-8 py-4 border-b border-[var(--lumen-border)] flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, rgba(26,110,191,0.05) 0%, rgba(0,194,199,0.05) 100%)' }}>
            <div className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
              <Users size={15} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-black text-[#0D2240] uppercase tracking-wider">Free Registration</div>
              <div className="text-[10px] font-mono text-[#4A6080]">Your information stays secure</div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00C2C7] animate-pulse" />
              <span className="text-[10px] font-mono text-[#4A6080] uppercase">Encrypted Form</span>
            </div>
          </div>

          {submitted ? (
            <div className="px-8 py-20 flex flex-col items-center justify-center text-center">
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="h-20 w-20 rounded-full flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
                <CheckCircle size={36} className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-black text-[#0D2240] mb-3">Welcome to the Academy!</h3>
              <p className="text-[#4A6080] max-w-md leading-relaxed text-sm">
                You are now enrolled in LumenFi Academy. Check your inbox for details on accessing classes, the community, and certification programs.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { val: 'Learn', label: 'Master Li-Fi' },
                  { val: 'Connect', label: 'Global Network' },
                  { val: 'Grow', label: 'Monetize Tech' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div className="font-black text-xl text-gradient-lumen">{val}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#4A6080]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                <div>
                  <label htmlFor="comm-fname" className={labelCls}>First Name *</label>
                  <input id="comm-fname" name="firstName" type="text" required placeholder="First name" value={formState.firstName} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="comm-lname" className={labelCls}>Last Name *</label>
                  <input id="comm-lname" name="lastName" type="text" required placeholder="Last name" value={formState.lastName} onChange={handleChange} className={inputCls} />
                </div>
              </div>
              <div>
                <label htmlFor="comm-email" className={labelCls}>Email Address *</label>
                <input id="comm-email" name="email" type="email" required placeholder="your@email.com" value={formState.email} onChange={handleChange} className={inputCls} />
              </div>
              <div>
                <label htmlFor="comm-interest" className={labelCls}>Primary Goal *</label>
                <select id="comm-interest" name="interest" required value={formState.interest} onChange={handleChange} className={inputCls}>
                  <option value="" disabled>Select your goal...</option>
                  <option>I want to learn about Li-Fi</option>
                  <option>I want to become a certified reseller</option>
                  <option>I want to join the community</option>
                  <option>I want to explore industry applications</option>
                </select>
              </div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input type="checkbox" name="agreed" id="comm-agreed" required checked={formState.agreed} onChange={handleChange} className="sr-only" />
                  <div className={`h-[18px] w-[18px] rounded border-2 flex items-center justify-center transition-all duration-200 ${formState.agreed ? 'border-[#1A6EBF] bg-[#1A6EBF]' : 'border-[var(--lumen-border)] bg-white group-hover:border-[#1A6EBF]'}`}>
                    {formState.agreed && <CheckCircle size={12} className="text-white" />}
                  </div>
                </div>
                <span className="text-xs text-[#4A6080] leading-relaxed">
                  I agree to Lumenfi&#39;s{' '}
                  <Link href="/terms" className="text-[#1A6EBF] hover:underline font-semibold" target="_blank">Terms &amp; Conditions</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-[#1A6EBF] hover:underline font-semibold" target="_blank">Privacy Policy</Link>.
                  I consent to receiving academy updates and class schedules.
                </span>
              </label>
              <button type="submit" disabled={loading} id="comm-submit-btn"
                className="w-full h-14 rounded-2xl text-white font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)', boxShadow: '0 8px 32px rgba(0,194,199,0.28)' }}>
                {loading ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full" />
                    Enrolling...
                  </>
                ) : (
                  <>Join for FREE <ArrowRight size={16} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Shield, label: 'Your Data is Safe', desc: 'We keep your information secure and never share it without your consent.' },
            { icon: Mail, label: 'Instant Access', desc: 'You will receive an email with login details immediately after enrolling.' },
            { icon: DollarSign, label: '100% Free', desc: 'The core curriculum and community access are completely free.' },
          ].map(({ icon: TIcon, label, desc }) => (
            <div key={label} className="flex items-start gap-3 p-4 rounded-2xl bg-[#EAF3FA] border border-[var(--lumen-border)]">
              <TIcon size={15} className="shrink-0 mt-0.5 text-[#1A6EBF]" />
              <div>
                <div className="text-xs font-bold text-[#0D2240]">{label}</div>
                <div className="text-[11px] text-[#4A6080] mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── SECTION 7: FINAL CALL TO ACTION ── */
function FinalCTASection() {
  return (
    <section className="py-28 relative overflow-hidden section-wash-primary" id="cta-final">
      <div className="absolute inset-0 pointer-events-none z-0"><Image src={ctaImg} alt="cta" fill />
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
          transition={{ duration: 0.6, ease: "easeOut" }}
        >
          <div className="rounded-[2.5rem] p-10 sm:p-14 md:p-20 relative overflow-hidden bg-[#0D2240] text-white shadow-[0_32px_80px_rgba(13,34,64,0.3)] border border-white/5 group">

            <div
              className="absolute inset-0 pointer-events-none opacity-25 mix-blend-overlay transition-transform duration-1000 group-hover:scale-105"
              style={{
                backgroundImage: 'linear-gradient(rgba(0,194,199,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,199,0.15) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />

            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-80"
              style={{ background: 'radial-gradient(circle at 50% 10%, rgba(0,194,199,0.18) 0%, transparent 50%)' }}
            />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="!text-white text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05]">
                Leave old radio waves behind.<br />
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2C7] via-[#0FB89A] to-[#00C2C7] bg-[size:200%_auto] animate-pulse" style={{ animationDuration: '4s' }}>
                  Live at the speed of light.
                </span>
              </h2>

              <p className="text-blue-100/80 text-sm sm:text-base md:text-lg mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                Upgrade your home or office to the fastest and safest internet ever made. It is clean, private, and works instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
                <Link
                  href="/what-is-lifi"
                  className="glow-cyan inline-flex items-center justify-center gap-2.5 h-14 px-10 rounded-2xl text-[#0D2240] font-black text-sm tracking-wider transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(0,194,199,0.4)] w-full sm:w-auto"
                  style={{ background: 'linear-gradient(135deg, #00C2C7 0%, #0FB89A 100%)' }}
                >
                  What is LiFi?
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}>
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
    <div className="flex flex-col min-h-screen antialiased font-sans bg-[#F4F9FC] text-[#0D2240]">
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
