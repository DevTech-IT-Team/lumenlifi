import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu,
  Gamepad2, Factory, Car, Star,
  Building2, TrendingUp, Award,
  Send, Mail, Handshake, Network, Rocket, MessageSquare,
  BookOpen, Activity, Anchor, DollarSign, Target, MonitorPlay, Focus,
  GraduationCap, Wifi, Bot, Tv, Stethoscope, Lightbulb, ArrowUpRight
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import FinalCTASection from '../../components/sections/home/FinalCTASection';
import aiMesh from '../../../public/images/academy/aiMesh.jpg';
import Transport from '../../../public/images/academy/autoTransport.jpg';
import education from '../../../public/images/academy/smartSchool.jpg';

import communityCreatorImg from '../../../public/images/hero/partner-creator.png';
import communityFactoryImg from '../../../public/images/academy/community.webp';
import healthcareImg from '../../../public/images/about/health1.webp';
import aviationImg from '../../../public/images/about/airplanes.png';
import smartEnvImg from '../../../public/images/about/environments.png';
import underwaterImg from '../../../public/images/about/underwater.png';

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
        let scale = 1;

        if (absDist < 0.15) {
          scale = 1.05;
          translateZ = 100;
        } else if (absDist < 0.55) {
          scale = 0.92 + (1 - (absDist - 0.15) / 0.4) * (1.05 - 0.92);
          translateZ = 40 + (1 - (absDist - 0.15) / 0.4) * 60;
        } else {
          scale = 0.88 + (1 - Math.min(1, (absDist - 0.55) / 0.45)) * (0.92 - 0.88);
          translateZ = -20 + (1 - Math.min(1, (absDist - 0.55) / 0.45)) * 60;
        }

        const zIndex = Math.round(1000 - absDist * 800);

        item.style.transform = `perspective(1800px) translateZ(${translateZ}px) rotateY(${rotateY}deg) rotateX(${rotateX}deg) translateY(${translateY}px) scale(${scale})`;
        item.style.zIndex = zIndex;

        const img = item.querySelector('img');
        const glow = item.querySelector('.hero-glow');

        if (absDist < 0.18) {
          item.style.opacity = '1';
          item.style.filter = 'brightness(1.06) saturate(1.1)';
          item.style.boxShadow =
            '0 24px 70px rgba(0, 0, 0, 0.28), 0 0 50px rgba(0, 194, 199, 0.18)';

          if (img) img.style.filter = 'saturate(1.1)';
          if (glow) glow.style.opacity = '1';
        } else if (absDist < 0.5) {
          item.style.opacity = '0.92';
          item.style.filter = 'brightness(0.95) saturate(0.98)';
          item.style.boxShadow =
            '0 16px 45px rgba(0, 0, 0, 0.22), 0 0 30px rgba(0, 194, 199, 0.08)';

          if (img) img.style.filter = 'saturate(1)';
          if (glow) glow.style.opacity = '0';
        } else {
          item.style.opacity = '0.82';
          item.style.filter = 'brightness(0.9) saturate(0.95)';
          item.style.boxShadow = '0 12px 30px rgba(0,0,0,0.25)';

          if (img) img.style.filter = 'saturate(0.95)';
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
      className="relative w-full overflow-x-hidden overflow-y-visible pt-28 pb-21"
      style={{
        background:
          'radial-gradient(ellipse 110% 90% at 50% -10%, #1a4468 0%, #0d2240 42%, #081628 78%, #050e1a 100%)',
      }}
    >
      <style
        dangerouslySetInnerHTML={{
          __html: `
      .carousel-container {
        perspective: 1800px;
        overflow-x: clip;
        overflow-y: visible;
        width: 100%;
        min-height: 390px;
        padding: 28px 0 36px;
      }

      .carousel-track {
        display: flex;
        align-items: center;
        gap: 28px;
        width: max-content;
        animation: scroll 55s linear infinite;
        transform-style: preserve-3d;
        padding: 0 12px;
      }

      .carousel-track:hover {
        animation-play-state: paused;
      }

      .carousel-item {
        flex-shrink: 0;
        width: 260px;
        height: 350px;
        border-radius: 20px;
        overflow: hidden;
        position: relative;
        transition: transform 0.35s ease, box-shadow 0.35s ease, filter 0.35s ease, opacity 0.35s ease;
        transform-origin: center center;
        will-change: transform, opacity, filter;
        background: rgba(13, 34, 64, 0.08);
        border: 1px solid rgba(255, 255, 255, 0.12);
      }

      .carousel-item:hover {
        transform:
          perspective(1800px)
          translateZ(60px)
          rotateY(0deg)
          rotateX(0deg)
          translateY(-6px)
          scale(1.04) !important;

        z-index: 999 !important;
        opacity: 1 !important;
        filter: brightness(1.08) saturate(1.1) !important;
        box-shadow:
          0 20px 50px rgba(0, 0, 0, 0.20),
          0 0 35px rgba(0, 194, 199, 0.25) !important;
        border-color: rgba(0, 194, 199, 0.6);
        background: rgba(13, 34, 64, 0.12) !important;
      }

      .carousel-item::before {
        content: "";
        position: absolute;
        top: 0;
        left: -120%;
        width: 70%;
        height: 100%;
        background: linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.06), transparent);
        transform: skewX(-25deg);
        animation: shine 6s infinite ease-in-out;
        z-index: 15;
        pointer-events: none;
      }

      @keyframes shine {
        0%, 60% { left: -120%; }
        100% { left: 220%; }
      }

      .carousel-item img {
        width: 100%;
        height: 100%;
        object-fit: cover;
        transform: scale(1.02);
        transition: transform 0.35s ease;
      }

      .carousel-item:hover img {
        transform: scale(1.05) translateY(-2px);
      }

      .carousel-overlay {
        position: absolute;
        inset: 0;
        background: linear-gradient(180deg, transparent 15%, rgba(4, 18, 40, 0.55) 100%);
        pointer-events: none;
        z-index: 5;
      }

      @keyframes scroll {
        0% { transform: translateX(0); }
        100% { transform: translateX(calc(-50% - 14px)); }
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

        <div className="absolute top-1/4 left-1/5 w-2 h-2 rounded-full bg-[#00C2C7]/60 blur-[1px] floating-particle" style={{ animationDelay: '0s' }} />
        <div className="absolute top-1/3 right-1/4 w-3 h-3 rounded-full bg-[#1A6EBF]/50 blur-[2px] floating-particle" style={{ animationDelay: '3s' }} />
        <div className="absolute bottom-1/3 left-1/3 w-2.5 h-2.5 rounded-full bg-[#00C2C7]/40 blur-[1px] floating-particle" style={{ animationDelay: '6s' }} />
      </div>

      <div className="relative z-10 mx-auto flex max-w-4xl flex-col items-center px-6 text-center">
        <motion.h1
          custom={1}
          variants={heroFadeUp}
          initial="hidden"
          animate="visible"
          className="mb-5 text-5xl font-black tracking-tight text-white sm:text-6xl md:text-7xl"
        >
          LumenFi Academy
        </motion.h1>

        <motion.p
          custom={2}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="mb-9 max-w-2xl text-base font-normal leading-relaxed text-white/65 sm:text-lg"
        >
          Shaping the Future of Light Connectivity. Free membership with live classes, a thriving community of innovators, and the chance to monetize cutting-edge LiFi technology.
        </motion.p>

        <motion.div
          custom={3}
          variants={fadeUp}
          initial="hidden"
          animate="visible"
          className="z-20 flex w-full flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4"
        >
          <a
            href="#join"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full bg-[var(--lumen-cyan)] px-7 text-sm font-bold tracking-wide text-[#0c1228] shadow-[0_0_28px_rgba(0,194,199,0.45)] transition-all hover:scale-[1.03] hover:shadow-[0_0_36px_rgba(0,194,199,0.55)] sm:w-auto"
          >
            Join for FREE <ArrowUpRight size={16} strokeWidth={2.25} />
          </a>
          <a
            href="#curriculum"
            className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-full border border-white/70 bg-transparent px-7 text-sm font-bold tracking-wide text-white transition-all hover:scale-[1.02] hover:border-white hover:bg-white/5 sm:w-auto"
          >
            Explore  <ArrowUpRight size={16} strokeWidth={2.25} />
          </a>
        </motion.div>
      </div>

      <motion.div
        custom={4}
        variants={fadeUp}
        initial="hidden"
        animate="visible"
        className="relative z-10 mt-10 w-full sm:mt-12"
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
                  <div
                    className="hero-glow pointer-events-none absolute -inset-10 -z-10 rounded-full opacity-0 blur-[100px] transition-opacity duration-500"
                    style={{
                      background: 'radial-gradient(circle, rgba(0, 194, 199, 0.6) 0%, rgba(26, 110, 191, 0.3) 60%, transparent 80%)',
                    }}
                  />

                  <img
                    src={typeof sector.img === 'string' ? sector.img : sector.img?.src}
                    alt={sector.title}
                    className="absolute inset-0 z-0 h-full w-full object-cover"
                  />

                  <div className="carousel-overlay" />

                  <div className="relative z-10 space-y-1.5">
                    <div className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white/10 px-2.5 py-0.5 shadow-[0_0_12px_rgba(0,194,199,0.25)] backdrop-blur-md">
                      <IconComponent className="h-3 w-3 text-cyan-300" />
                      <span className="font-mono text-[10px] font-bold tracking-wide text-cyan-300">
                        {sector.metric}
                      </span>
                    </div>

                    <p className="pt-0.5 font-mono text-[11px] font-semibold uppercase tracking-[1.5px] text-[#b8c4ff]">
                      {sector.subtitle}
                    </p>

                    <h3 className="text-[18px] font-bold leading-snug tracking-tight text-white">
                      {sector.title}
                    </h3>

                    <p className="line-clamp-2 text-[12px] leading-[1.5] text-slate-200">
                      {sector.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </motion.div>
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

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {pillars.map(({ icon: PillarIcon, label, desc }, idx) => (
            <motion.div
              key={label}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="group rounded-[1.75rem] border border-[#1A6EBF]/12 bg-white p-6 shadow-[0_12px_32px_rgba(13,34,64,0.06)] transition-all duration-300 hover:-translate-y-1 hover:border-[var(--lumen-cyan)]/40 hover:shadow-[0_20px_44px_rgba(0,194,199,0.12)] sm:p-7"
            >
              <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1A6EBF]/12 bg-[#EAF3FA] transition-transform duration-200 group-hover:scale-110">
                <PillarIcon size={18} className="text-[#1A6EBF]" />
              </div>
              <h4 className="mb-2 text-sm font-black leading-snug text-[#0D2240] sm:text-[0.95rem]">
                {label}
              </h4>
              <p className="text-xs leading-relaxed text-[#4A6080] sm:text-[13px]">
                {desc}
              </p>
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
    image: healthcareImg,
    alt: 'Healthcare Environments',
    color: '#00C2C7',
    tag: 'HEALTHCARE',
  },
  {
    icon: Rocket,
    title: 'Aviation',
    desc: 'Allowing for safe, high-speed connectivity on commercial airplanes without disrupting radar or communication systems.',
    highlight: 'High-speed connectivity without radar disruption.',
    image: aviationImg,
    alt: 'Aviation Sector',
    color: '#00C2C7',
    tag: 'AVIATION',
  },
  {
    icon: Building2,
    title: 'Smart Environments',
    desc: 'Utilizing street lamps and standard lighting for indoor positioning, asset tracking, and targeted advertising.',
    highlight: 'Indoor positioning and asset tracking via light.',
    image: smartEnvImg,
    alt: 'Smart Environments',
    color: '#00C2C7',
    tag: 'SMART ENVIRONMENTS',
  },
  {
    icon: Anchor,
    title: 'Underwater Communication',
    desc: 'Discovering how light can travel through water, offering new possibilities for underwater vehicle communication.',
    highlight: 'New possibilities for underwater communication.',
    image: underwaterImg,
    alt: 'Underwater Tech',
    color: '#00C2C7',
    tag: 'UNDERWATER',
  },
];

function ApplicationsSection() {
  const [hoveredIdx, setHoveredIdx] = useState(0);

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #0D2240 55%, #0A1628 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[420px] w-[720px] -translate-x-1/2 rounded-full opacity-40 blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.22) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-14"
        >
          <h2 className="mb-4 text-4xl font-black tracking-tight text-white md:text-5xl">
            Industry <span className="text-[var(--lumen-cyan)]">Applications</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base leading-relaxed text-white/60">
            We break down how Li-Fi is transforming critical sectors globally.
          </p>
        </motion.div>

        <div
          className="flex flex-col gap-4 lg:h-[440px] lg:flex-row lg:gap-4"
          onMouseLeave={() => setHoveredIdx(0)}
        >
          {sectors.map((sector, idx) => {
            const Icon = sector.icon;
            const isExpanded = hoveredIdx === idx;
            const isDimmed = hoveredIdx !== null && hoveredIdx !== idx;

            return (
              <motion.article
                key={sector.tag}
                initial={{ opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.05 }}
                onMouseEnter={() => setHoveredIdx(idx)}
                onFocus={() => setHoveredIdx(idx)}
                tabIndex={0}
                className={`group relative min-h-[300px] overflow-hidden rounded-[1.75rem] outline-none transition-[flex,opacity,box-shadow] duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] focus-visible:ring-2 focus-visible:ring-[var(--lumen-cyan)] lg:min-h-0 ${
                  isExpanded ? 'lg:flex-[3.4]' : 'lg:flex-[1]'
                } ${isDimmed ? 'lg:opacity-65' : 'lg:opacity-100'}`}
              >
                {/* Desktop expanded: white panel + image */}
                <div
                  className={`absolute inset-0 hidden lg:flex ${
                    isExpanded ? 'opacity-100' : 'pointer-events-none opacity-0'
                  } transition-opacity duration-300`}
                >
                  <div className="flex w-[46%] flex-col justify-between bg-white p-6 xl:p-8">
                    <div>
                      <div className="mb-5 inline-flex items-center gap-2">
                        <Icon size={15} className="text-[var(--lumen-cyan)]" />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[var(--lumen-cyan)]">
                          {sector.tag}
                        </span>
                      </div>
                      <h3 className="mb-3 text-2xl font-black leading-tight text-[#0D2240] xl:text-[1.75rem]">
                        {sector.title}
                      </h3>
                      <p className="mb-4 text-sm leading-relaxed text-[#4A6080]">
                        {sector.desc}
                      </p>
                      <p className="text-sm font-medium text-[#0D2240]/55">
                        {sector.highlight}
                      </p>
                    </div>
                    <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-bold text-[var(--lumen-cyan)]">
                      Read More <ArrowUpRight size={15} strokeWidth={2.25} />
                    </span>
                  </div>
                  <div className="relative flex-1">
                    <Image
                      src={sector.image}
                      alt={sector.alt}
                      fill
                      loading="lazy"
                      className="object-cover"
                      sizes="40vw"
                    />
                  </div>
                </div>

                {/* Collapsed / mobile view */}
                <div
                  className={`absolute inset-0 ${
                    isExpanded ? 'lg:pointer-events-none lg:opacity-0' : 'opacity-100'
                  } transition-opacity duration-300`}
                >
                  <Image
                    src={sector.image}
                    alt={sector.alt}
                    fill
                    loading="lazy"
                    className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                    sizes="(max-width: 1024px) 100vw, 20vw"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#06101f]/95 via-[#06101f]/35 to-transparent" />

                  <div className="absolute inset-x-0 bottom-0 p-5 sm:p-6">
                    {/* Mobile always shows content */}
                    <div className="mb-3 lg:hidden">
                      <div className="mb-3 inline-flex items-center gap-2 text-[var(--lumen-cyan)]">
                        <Icon size={14} />
                        <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em]">
                          {sector.tag}
                        </span>
                      </div>
                      <h3 className="mb-2 text-xl font-black text-white">{sector.title}</h3>
                      <p className="mb-2 text-sm leading-relaxed text-white/75">{sector.desc}</p>
                      <p className="text-xs font-medium text-[var(--lumen-cyan)]">{sector.highlight}</p>
                    </div>

                    {/* Desktop collapsed footer */}
                    <div className="hidden items-end justify-between gap-3 lg:flex">
                      <div>
                        <p className="font-mono text-[11px] font-bold uppercase tracking-[0.14em] text-white">
                          {sector.tag}
                        </p>
                        <p className="mt-1 text-xs font-medium text-white/70">Read More</p>
                      </div>
                      <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0c1228]/75 text-white transition-colors group-hover:bg-[var(--lumen-cyan)] group-hover:text-[#0c1228]">
                        <ArrowUpRight size={15} strokeWidth={2.25} />
                      </span>
                    </div>
                  </div>
                </div>
              </motion.article>
            );
          })}
        </div>

        <div className="mt-10 flex justify-center sm:mt-12">
          <a
            href="#join"
            className="inline-flex h-12 items-center justify-center gap-2 rounded-full bg-white px-8 text-sm font-bold tracking-wide text-[#0D2240] transition-opacity hover:opacity-90"
          >
            Join Academy <ArrowUpRight size={16} strokeWidth={2.25} />
          </a>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 4: THE LUMENFI COMMUNITY EXPERIENCE ── */
function CommunityExperienceSection() {
  const [activeIdx, setActiveIdx] = useState(0);

  const experiences = [
    {
      icon: MonitorPlay,
      title: 'Live Interactive Classes',
      desc: 'Engage directly with industry experts in real-time. Ask questions, participate in discussions, and get hands-on guidance.',
      label: '01 / CLASSES',
    },
    {
      icon: Network,
      title: 'Global Networking',
      desc: 'Connect with other tech enthusiasts, entrepreneurs, and forward-thinkers. Share ideas, collaborate on projects, and build a network that will support your journey.',
      label: '02 / NETWORK',
    },
    {
      icon: TrendingUp,
      title: 'Stay Ahead of the Curve',
      desc: 'Gain exclusive access to the latest research, developments, and breakthroughs in optical wireless communications.',
      label: '03 / INSIGHTS',
    },
  ];

  return (
    <section
      className="relative overflow-hidden py-20 sm:py-24"
      style={{
        background: 'linear-gradient(180deg, #F4F9FC 0%, #EBF5FF 50%, #F7FBFE 100%)',
      }}
    >
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-12 text-center sm:mb-14"
        >
          <h2 className="mb-4 text-4xl font-black tracking-tight text-[#0D2240] md:text-5xl">
            The LumenFi <span className="text-gradient-lumen">Community Experience.</span>
          </h2>
          <p className="mx-auto max-w-xl text-base leading-relaxed text-[#4A6080]">
            Learning doesn&apos;t happen in a vacuum. By joining LumenFi Academy, you become part of a movement.
          </p>
        </motion.div>

        <div
          className="grid grid-cols-1 items-stretch gap-5 md:grid-cols-3 md:gap-6"
          onMouseLeave={() => setActiveIdx(0)}
        >
          {experiences.map((exp, idx) => {
            const ExpIcon = exp.icon;
            const isActive = activeIdx === idx;

            return (
              <motion.article
                key={exp.title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                onMouseEnter={() => setActiveIdx(idx)}
                onFocus={() => setActiveIdx(idx)}
                tabIndex={0}
                className={`group relative flex min-h-[300px] flex-col justify-between p-7 outline-none transition-all duration-300 ease-out sm:p-8 ${
                  isActive
                    ? 'bg-[var(--lumen-cyan)] shadow-[0_24px_50px_rgba(0,194,199,0.28)]'
                    : 'bg-white shadow-[0_16px_40px_rgba(13,34,64,0.08)]'
                }`}
                style={{
                  borderRadius: '2.75rem 0.85rem 2.75rem 0.85rem',
                }}
              >
                <div>
                  <div
                    className={`mb-6 inline-flex h-11 w-11 items-center justify-center rounded-full transition-colors duration-300 ${
                      isActive ? 'bg-white text-[#0D2240]' : 'bg-[#0D2240] text-white'
                    }`}
                  >
                    <ExpIcon size={18} strokeWidth={1.75} />
                  </div>

                  <h3 className="mb-3 text-xl font-black leading-snug tracking-tight text-[#0D2240] sm:text-[1.35rem]">
                    {exp.title}
                  </h3>
                  <p className="text-sm leading-relaxed text-[#0D2240]/65 sm:text-[0.95rem]">
                    {exp.desc}
                  </p>
                </div>

                <div className="mt-8 flex items-center justify-between gap-3">
                  <span className="font-mono text-[11px] font-bold uppercase tracking-[0.16em] text-[#0D2240]/55">
                    {exp.label}
                  </span>
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full transition-colors duration-300 ${
                      isActive ? 'bg-[#0D2240] text-white' : 'bg-[#0D2240] text-white'
                    }`}
                  >
                    <ArrowRight size={16} strokeWidth={2} />
                  </span>
                </div>
              </motion.article>
            );
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
    <section
      className="relative overflow-hidden py-24"
      style={{
        background: 'linear-gradient(180deg, #0A1628 0%, #0D2240 50%, #0A1628 100%)',
      }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 h-[420px] w-[720px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-35 blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.2) 0%, transparent 70%)' }}
      />
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-14"
        >
          <h2 className="mb-5 text-4xl font-black leading-tight tracking-tight text-white md:text-5xl">
            Your Opportunity:<br />
            <span className="text-gradient-lumen">Monetize the Future.</span>
          </h2>
          <p className="text-base leading-relaxed text-white/65">
            LumenFi Academy isn&apos;t just about education; it&apos;s about empowerment. We provide a unique opportunity for our members to turn their knowledge into a lucrative business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-stretch gap-8 lg:grid-cols-2 lg:gap-10">
          <div className="flex h-full min-h-0 flex-col gap-4">
            {benefits.map(({ icon: BIcon, title, desc }, idx) => (
              <motion.div
                key={title}
                custom={idx}
                variants={fadeUp}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                className="group flex flex-1 items-start gap-4 rounded-[1.75rem] border border-white/10 bg-white p-5 shadow-[0_10px_28px_rgba(0,0,0,0.2)] transition-all duration-300 hover:border-[var(--lumen-cyan)]/50 hover:shadow-lg sm:p-6"
              >
                <div
                  className="flex h-12 w-12 shrink-0 items-center justify-center rounded-2xl transition-transform duration-200 group-hover:scale-110"
                  style={{
                    background: 'linear-gradient(135deg, rgba(26,110,191,0.1) 0%, rgba(0,194,199,0.1) 100%)',
                    border: '1px solid rgba(26,110,191,0.15)',
                  }}
                >
                  <BIcon size={20} className="text-[#1A6EBF]" />
                </div>
                <div className="min-w-0">
                  <h4 className="mb-1 text-base font-black text-[#0D2240]">{title}</h4>
                  <p className="text-xs leading-relaxed text-[#4A6080] sm:text-sm">{desc}</p>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="relative flex h-full min-h-[320px] items-center justify-center">
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.7 }}
              className="relative flex h-full w-full items-center justify-center overflow-hidden rounded-3xl bg-transparent"
            >
              <Image
                src={communityFactoryImg}
                alt="Turnkey Business Opportunities"
                className="block h-auto max-h-full w-full object-contain"
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
const ACADEMY_FORM_ID = 'bghQvMWZ1Czv5SyKPgnk';

function ApplicationForm() {
  const trustItems = [
    { icon: Shield, label: 'Your Data is Safe', desc: 'We keep your information secure and never share it without your consent.' },
    { icon: Mail, label: 'Instant Access', desc: 'You will receive an email with login details immediately after enrolling.' },
    { icon: DollarSign, label: '100% Free', desc: 'The core curriculum and community access are completely free.' },
  ];

  return (
    <section id="join" className="relative overflow-hidden py-24 section-wash-white">
      <div
        className="pointer-events-none absolute right-0 top-0 h-[500px] w-[500px] rounded-full opacity-30 blur-[160px]"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.2) 0%, transparent 70%)' }}
      />
      <div
        className="pointer-events-none absolute bottom-0 left-0 h-[400px] w-[400px] rounded-full opacity-25 blur-[140px]"
        style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.18) 0%, transparent 70%)' }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-2 lg:gap-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col"
          >
            <h2 className="mb-4 text-4xl font-black tracking-tight text-[#0D2240] md:text-5xl">
              Join <span className="text-gradient-lumen">LumenFi Academy</span> Today.
            </h2>
            <p className="mb-6 max-w-md text-base leading-relaxed text-[#4A6080]">
              Enroll for free and start building your future at the speed of light — curriculum, community, and reseller pathways in one place.
            </p>
            <ul className="mb-8 space-y-3">
              {[
                'Master Li-Fi fundamentals with hands-on learning',
                'Connect with creators, engineers, and partners',
                'Unlock pathways to certify and monetize',
              ].map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-[#0D2240]">
                  <CheckCircle size={18} className="mt-0.5 shrink-0 text-[#00C2C7]" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>

            <div className="flex flex-col gap-3">
              {trustItems.map(({ icon: TIcon, label, desc }) => (
                <div
                  key={label}
                  className="flex items-start gap-3 rounded-2xl border border-[var(--lumen-border)] bg-[#EAF3FA] p-4"
                >
                  <TIcon size={15} className="mt-0.5 shrink-0 text-[#1A6EBF]" />
                  <div>
                    <div className="text-xs font-bold text-[#0D2240]">{label}</div>
                    <div className="mt-0.5 text-[11px] leading-relaxed text-[#4A6080]">{desc}</div>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="w-full min-w-0"
          >
            <iframe
              src={`https://api.wonderengine.ai/widget/form/${ACADEMY_FORM_ID}`}
              title="LumenFi Academy Registration"
              className="block w-full border-0 bg-transparent"
              style={{ width: '100%', height: '820px', minHeight: '820px' }}
              allow="clipboard-write"
            />
          </motion.div>
        </div>
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
