import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NetworkSimulatorExperiment from '../../components/NetworkSimulatorExperiment';
import { motion, AnimatePresence } from 'framer-motion';
import ctaImg from '../../../public/images/hero/cta.png';
import {
  Zap,
  ShieldCheck,
  Layers,
  Activity,
  WifiOff,
  Cpu,
  Tv,
  Smartphone,
  Eye,
  ArrowRight,
  Network,
  Lock,
  Radio,
  Clock,
  Gauge,
  Sparkles,
  Sliders,
  Star,
  Globe,
  Shield,
  GitBranch,
  Beaker,
  Lightbulb,
  Info
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS (Identical to Homepage)
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ─────────────────────────────────────────────────────────────
   INTERACTIVE SIMULATOR STATIC CONFIGURATIONS
───────────────────────────────────────────────────────────── */
const METRICS_DATA = {
  wifi: { speed: 15, latency: 85, security: 20, interference: 90, status: 'Congested / Vulnerable' },
  lifi: { speed: 100, latency: 2, security: 100, interference: 0, status: 'Ultra-Fast / Isolated' }
};

const WIFI_PACKETS = Array.from({ length: 35 }).map((_, i) => ({
  id: i,
  startX: 180 + (Math.random() - 0.5) * 20,
  startY: 140 + (Math.random() - 0.5) * 20,
  tx: (Math.random() - 0.5) * 350,
  ty: (Math.random() - 0.5) * 250,
  duration: 2 + Math.random() * 2,
  delay: Math.random() * 2
}));

export default function WhatIsLiFiPage() {
  const [tick, setTick] = useState(0);

  // Interactive Simulator Hook Matrices
  const [mode, setMode] = useState('wifi');
  const [userCount, setUserCount] = useState(1);
  const [hackStatus, setHackStatus] = useState('idle');

  const quickFacts = [
    '💡 Radio Frequencies are congested.',
    '⚡ Light offers 1,000x data density.',
    '🔒 Photons do not penetrate solid walls.',
  ];

  useEffect(() => {
    const t = setInterval(() => setTick(p => (p + 1) % quickFacts.length), 2500);
    return () => clearInterval(t);
  }, [quickFacts.length]);

  // Handle Dynamic WiFi Network Deterioration Real-Time Updates
  useEffect(() => {
    let interval;
    if (mode === 'wifi') {
      interval = setInterval(() => {
        setUserCount(prev => (prev < 5 ? prev + 1 : 1));
      }, 4000);
    } else {
      setUserCount(1);
    }
    return () => clearInterval(interval);
  }, [mode]);

  const currentMetrics = {
    speed: mode === 'wifi' ? Math.max(5, METRICS_DATA.wifi.speed - (userCount - 1) * 3) : METRICS_DATA.lifi.speed,
    latency: mode === 'wifi' ? Math.min(250, METRICS_DATA.wifi.latency + (userCount - 1) * 35) : METRICS_DATA.lifi.latency,
    security: mode === 'wifi' ? METRICS_DATA.wifi.security : METRICS_DATA.lifi.security,
    interference: mode === 'wifi' ? Math.min(100, METRICS_DATA.wifi.interference + (userCount - 1) * 2) : METRICS_DATA.lifi.interference,
    status: mode === 'wifi'
      ? (userCount > 3 ? 'Critical Congestion' : 'Signal Degraded')
      : 'Optimal Optical Connection'
  };

  const triggerHackChallenge = () => {
    setHackStatus('hacking');
    setTimeout(() => {
      setHackStatus(mode === 'wifi' ? 'success' : 'blocked');
    }, 2500);
  };

  return (
    <div className="flex flex-col min-h-screen antialiased font-sans lumen-page-bg text-[var(--lumen-navy)] selection:bg-cyan-500/20">
      <Head>
        <title>What is LiFi? Technology & Applications — Lumen LiFi</title>
        <meta name="description" content="Discover LiFi technology: a fast, reliable, and secure mobile wireless communications technology that uses light waves rather than radio frequencies to transmit data." />
      </Head>
      <Header />

      <main className="flex-grow">

        {/* 1. HERO SHOWCASE SECTION */}
        <section className="relative w-full pt-32 pb-20 overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/4 w-[600px] h-[500px] rounded-full blur-[140px] opacity-60 dark:opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.18) 0%, transparent 75%)' }} />
            <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-50 dark:opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.15) 0%, transparent 70%)' }} />
            <div className="absolute inset-0 lumen-grid-pattern-hero opacity-45" />
          </div>

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-mono font-bold shadow-sm bg-[rgba(26,110,191,0.06)] border border-[var(--lumen-border)] text-[#1A6EBF]">
              <span className="w-2 h-2 rounded-full animate-pulse inline-block bg-[var(--lumen-cyan)]" />
              <AnimatePresence mode="wait">
                <motion.span key={tick} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}>
                  {quickFacts[tick]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl text-[#0D2240]">
              Wireless Data at the{' '}
              <span className="text-gradient-lumen bg-clip-text text-transparent bg-gradient-to-r from-[#1A6EBF] to-[#00C2C7]">
                Speed of Light
              </span>
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-[#4A6080]">
              LiFi holds the key to solving challenges faced by WiFi and 5G networks. It is fast, highly reliable, virtually interference-free, and uniquely secure.
            </motion.p>
          </div>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(13,34,64,0.15)] border bg-[#0D2240] border-[var(--lumen-border)] p-2">
              <div className="w-full h-11 bg-[#0A192F] flex items-center px-4 gap-2 border-b border-white/5 rounded-t-2xl">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
              </div>
              <div className="relative w-full overflow-hidden rounded-b-2xl bg-slate-900">
                <NetworkSimulatorExperiment embedded />
              </div>
            </div>
          </motion.div>
        </section>


        {/* 2. OPERATIONAL OVERVIEW SECTION (WITH EMBEDDED SIMULATOR ARRAY) */}
        <section className="relative overflow-hidden border-y border-white/10 bg-[#071b34] py-24 sm:py-28">
          <div className="pointer-events-none absolute inset-0 z-0 select-none">
            <div
              className="absolute inset-0 opacity-[0.16]"
              style={{
                backgroundImage: 'radial-gradient(rgba(0,194,199,0.8) 1px, transparent 1px)',
                backgroundSize: '34px 34px',
                maskImage: 'linear-gradient(to right, black, transparent 75%)',
              }}
            />
            <div className="absolute -left-40 top-1/2 h-[600px] w-[600px] -translate-y-1/2 rounded-full bg-[#1A6EBF]/15 blur-[150px]" />
            <div className="absolute -right-32 top-1/3 h-[520px] w-[520px] rounded-full bg-[#00C2C7]/10 blur-[140px]" />
            <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-[#00C2C7]/60 to-transparent" />
          </div>

          <div className="relative z-10 mx-auto max-w-7xl px-5 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-12 lg:gap-20">
              <div className="lg:col-span-7">


                <h2 className="mt-6 max-w-3xl text-4xl font-black leading-[1.08] tracking-[-0.035em] text-white sm:text-5xl lg:text-6xl">
                  The internet you know,{' '}
                  <span className="bg-gradient-to-r from-[#38bdf8] via-[#00C2C7] to-[#5eead4] bg-clip-text text-transparent">
                    delivered through light.
                  </span>
                </h2>

                <p className="mt-6 max-w-2xl text-base leading-8 text-blue-100/75 sm:text-lg">
                  LiFi is a wireless communication technology that carries data through rapid, invisible changes in light. Your devices connect just like WiFi—but with greater speed, privacy, and freedom from radio interference.
                </p>

                <div className="mt-10 grid gap-3 sm:grid-cols-3">
                  {[
                    { number: '01', icon: Lightbulb, title: 'Light transmits', text: 'An LED sends data at imperceptible speed.' },
                    { number: '02', icon: Network, title: 'Receiver decodes', text: 'A LiFi receiver converts light into data.' },
                    { number: '03', icon: Zap, title: 'Devices connect', text: 'Your internet responds with near-zero delay.' },
                  ].map(({ number, icon: StepIcon, title, text }) => (
                    <div
                      key={number}
                      className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.045] p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300/30 hover:bg-white/[0.07]"
                    >
                      <div className="mb-5 flex items-center justify-between">
                        <div className="flex h-10 w-10 items-center justify-center rounded-xl border border-cyan-300/20 bg-cyan-300/10 text-cyan-300">
                          <StepIcon size={18} aria-hidden="true" />
                        </div>
                        <span className="font-mono text-[10px] font-bold tracking-[0.18em] text-white/30">{number}</span>
                      </div>
                      <h3 className="text-sm font-bold text-white">{title}</h3>
                      <p className="mt-2 text-xs leading-relaxed text-blue-100/60">{text}</p>
                    </div>
                  ))}
                </div>

                <div className="mt-7 flex flex-wrap gap-3">
                  {['No radio frequencies', 'Room-level privacy', 'High-density ready'].map((benefit) => (
                    <span
                      key={benefit}
                      className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#0A192F]/70 px-3.5 py-2 text-[11px] font-semibold text-blue-100/75"
                    >
                      <span className="text-[#00C2C7]">✓</span>
                      {benefit}
                    </span>
                  ))}
                </div>
              </div>

              <div className="relative flex justify-center lg:col-span-5 lg:justify-end">
                <div className="pointer-events-none absolute left-1/2 top-1/2 h-[85%] w-[85%] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C2C7]/20 blur-[80px]" />
                <div className="relative w-full max-w-[350px]">
                  <div className="relative overflow-hidden rounded-[28px] border border-cyan-300/30 bg-[#061022] p-2 shadow-[0_35px_90px_rgba(0,0,0,0.45),0_0_50px_rgba(0,194,199,0.12)]">
                    <div className="flex h-9 items-center justify-between px-2 pb-2">
                      <div className="flex gap-1.5">
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F56]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#FFBD2E]/80" />
                        <span className="h-2.5 w-2.5 rounded-full bg-[#27C93F]/80" />
                      </div>
                      <span className="font-mono text-[9px] font-bold uppercase tracking-[0.16em] text-cyan-300/70">
                        LiFi explained
                      </span>
                    </div>

                    <div className="relative aspect-[9/16] overflow-hidden rounded-[20px] bg-[#020817]">
                      <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        controls
                        preload="metadata"
                        className="h-full w-full object-cover"
                        aria-label="Explanation of how LiFi technology works"
                      >
                        <source src="/videos/lifi explain.mp4" type="video/mp4" />
                        Your browser does not support HTML video.
                      </video>
                      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-[#020817]/50 to-transparent" />

                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 3. CORE MATRIX SHOWCASE (Matches Section Wash Primary / Secondary Alternation Layout) */}
        <section className="relative overflow-hidden py-24 bg-white">
          <div className="relative z-10 max-w-6xl mx-auto px-6 space-y-24">

            {/* Row A: Military-Grade Security */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border bg-[#0D2240] border-[var(--lumen-border)] group">
                  <Image
                    src="/images/lifi/security.png"
                    alt="Physical Boundary Containment Mapping Network Data Cones"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain w-full h-full p-2 transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col space-y-4 order-1 lg:order-2">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--lumen-blue)]">Digital Privacy Vault</span>
                <h3 className="text-3xl font-black text-[#0D2240] tracking-tight">Military Grade Security</h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A6080]">
                  LiFi wireless communications provide native physical isolation by default. Light does not penetrate walls or leak through materials like canvas or curtains. This effectively eliminates interception loops and man-in-the-middle exploits completely outside the room footprint.
                </p>
                <div className="inline-flex self-start px-4 py-2 rounded-xl text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/60">
                  ✓ Core Protection: Air-Gapped Physical Shielding
                </div>
              </div>
            </div>

            {/* Row B: Real World Performance */}
            <div className="flex flex-col lg:flex-row-reverse items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border bg-[#0D2240] border-[var(--lumen-border)] group">
                  <Image
                    src="/images/lifi/how.jpg"
                    alt="LiFi Real-World High Throughput Performance Tracking Chart"
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain w-full h-full p-2 transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="absolute top-4 left-4 backdrop-blur-md text-[10px] font-mono font-bold px-3 py-1.5 rounded-md text-white bg-[#0D2240]/80 border border-[var(--lumen-cyan)]/30">
                    Spectrum Analysis
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col space-y-4">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--lumen-cyan)]">Unthrottled Throughput</span>
                <h3 className="text-3xl font-black text-[#0D2240] tracking-tight">Real World Performance</h3>
                <p className="text-sm sm:text-base leading-relaxed text-[#4A6080]">
                  Radio frequency (RF) paths suffer from localized degradation, signal absorption, and multi-user throttling. LiFi overcomes these constraints completely by delivering consistent high-bandwidth streams that remain entirely unaffected by surrounding electronic ambient noise.
                </p>
                <div className="inline-flex self-start px-4 py-2 rounded-xl text-xs font-mono font-bold text-cyan-700 dark:text-cyan-400 bg-cyan-50 dark:bg-cyan-950/30 border border-cyan-100 dark:border-cyan-900/60">
                  ✓ Core Capability: Consistent Multi-User Density Matrix
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 4. PERFORMANCE PILLARS GRID */}
        <section
          className="relative py-32 bg-[#0D2240] overflow-hidden border-t border-b border-white/10 transition-all duration-300"
          id="technology-benefits"
        >
          {/* Background Glows (Option B - Radial Glow) */}
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0095ff]/10 rounded-full blur-[140px] z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7DF9FF]/5 rounded-full blur-[120px] z-0" />
          </div>

          {/* Background Faint Network Grid (Option C - 3% Opacity) */}
          <div
            className="absolute inset-0 opacity-[0.03] pointer-events-none z-0 select-none"
            style={{
              backgroundImage: `radial-gradient(rgba(255, 255, 255, 0.15) 1px, transparent 0)`,
              backgroundSize: '24px 24px'
            }}
          />

          <div className="relative max-w-7xl mx-auto px-6 z-10 flex flex-col items-center">

            {/* Header Section */}
            <div className="text-center max-w-[700px] mx-auto mb-20 relative z-20 w-full flex flex-col items-center">
              {/* Premium Typography Header */}
              <h2 className="text-5xl md:text-[72px] font-extrabold tracking-[-2px] leading-[1.1] bg-gradient-to-b from-[#FFFFFF] via-[#7DD3FC] to-[#00E5FF] bg-clip-text text-transparent drop-shadow-md mb-6 pb-2">
                Why LiFi <br /> Changes Everything
              </h2>

              {/* Subtitle */}
              <p className="text-[18px] text-white/70 font-medium leading-relaxed max-w-[650px]">
                LiFi transmits data using light instead of radio waves, delivering unmatched speed, security, and reliability.
              </p>
            </div>

            {/* Symmetrical Layout Grid */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-8 items-center z-20">

              {/* Left Metrics Stack */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                {/* Card 1: Speed */}
                <div className="group relative rounded-[20px] bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.12] p-6 shadow-xl transition-all duration-300 hover:border-[#00D4FF]/40 hover:-translate-y-1">
                  <div className="text-white/80 group-hover:text-[#00D4FF] transition-colors mb-3">
                    <Zap size={24} className="stroke-[2]" />
                  </div>
                  <div className="text-3xl font-black text-white tracking-tight">Fast</div>
                  <div className="text-xs font-bold text-[#7DF9FF] uppercase tracking-wider mt-1">Peak Speed</div>
                </div>

                {/* Card 2: Security */}
                <div className="group relative rounded-[20px] bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.12] p-6 shadow-xl transition-all duration-300 hover:border-[#00D4FF]/40 hover:-translate-y-1">
                  <div className="text-white/80 group-hover:text-[#00D4FF] transition-colors mb-3">
                    <Shield size={24} className="stroke-[2]" />
                  </div>
                  <div className="text-3xl font-black text-white tracking-tight">100%</div>
                  <div className="text-xs font-bold text-[#7DF9FF] uppercase tracking-wider mt-1">Light Contained / Secure</div>
                </div>
              </div>

              {/* Center Illustration Container (Strict Sizing: 780px Max) */}
              <div className="lg:col-span-2 flex justify-center items-center order-1 lg:order-2 px-2 w-full">
                <div
                  className="relative w-full max-w-[780px] rounded-[28px] border border-white/[0.12] bg-slate-950/20 p-2 overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#00D4FF]/30"
                  style={{
                    boxShadow: '0 0 80px rgba(0,170,255,0.15)',
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 95px rgba(0,170,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 80px rgba(0,170,255,0.15)';
                  }}
                >
                  <Image
                    src="/images/lifi/Lumen.jpg"
                    alt="LiFi Showcase Illustration"
                    width={1024}
                    height={559}
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 780px"
                    className="w-full h-auto object-contain rounded-[24px]"
                  />
                </div>
              </div>

              {/* Right Metrics Stack */}
              <div className="flex flex-col gap-6 order-3">
                {/* Card 3: Spectrum */}
                <div className="group relative rounded-[20px] bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.12] p-6 shadow-xl transition-all duration-300 hover:border-[#00D4FF]/40 hover:-translate-y-1">
                  <div className="text-white/80 group-hover:text-[#00D4FF] transition-colors mb-3">
                    <Radio size={24} className="stroke-[2]" />
                  </div>
                  <div className="text-3xl font-black text-white tracking-tight">1000×</div>
                  <div className="text-xs font-bold text-[#7DF9FF] uppercase tracking-wider mt-1">More Spectrum</div>
                </div>

                {/* Card 4: Zero RF */}
                <div className="group relative rounded-[20px] bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.12] p-6 shadow-xl transition-all duration-300 hover:border-[#00D4FF]/40 hover:-translate-y-1">
                  <div className="text-white/80 group-hover:text-[#00D4FF] transition-colors mb-3">
                    <Globe size={24} className="stroke-[2]" />
                  </div>
                  <div className="text-3xl font-black text-white tracking-tight">Zero RF</div>
                  <div className="text-xs font-bold text-[#7DF9FF] uppercase tracking-wider mt-1">Sustainable Tech</div>
                </div>

              </div>
            </div>
            <div className="flex flex-wrap justify-center gap-3 mb-6">
              <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#7DF9FF] bg-[#7DF9FF]/10 border border-[#7DF9FF]/20 rounded-full backdrop-blur-sm">
                <Zap size={12} className="stroke-[2.5]" /> Faster
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#7DF9FF] bg-[#7DF9FF]/10 border border-[#7DF9FF]/20 rounded-full backdrop-blur-sm">
                <Shield size={12} className="stroke-[2.5]" /> Secure
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#7DF9FF] bg-[#7DF9FF]/10 border border-[#7DF9FF]/20 rounded-full backdrop-blur-sm">
                <Radio size={12} className="stroke-[2.5]" /> Zero RF
              </span>
              <span className="flex items-center gap-1 px-3 py-1 text-xs font-semibold uppercase tracking-wider text-[#7DF9FF] bg-[#7DF9FF]/10 border border-[#7DF9FF]/20 rounded-full backdrop-blur-sm">
                <Globe size={12} className="stroke-[2.5]" /> Eco Friendly
              </span>
            </div>


          </div>

          {/* Section Divider Fading Out at Bottom */}
          <div
            className="absolute bottom-0 left-0 w-full h-32 pointer-events-none"
            style={{
              background: 'linear-gradient(180deg, transparent, rgba(255,255,255,0.03))'
            }}
          />
        </section>


        {/* 6. CALL TO ACTION: PREMIUM NEWSLETTER UPGRADE */}
        <section className="py-28 relative overflow-hidden bg-white" id="cta-final">
          <div className="absolute inset-0 pointer-events-none z-0"><Image src={ctaImg} filter="brightness(20%)" alt="cta" fill loading="lazy" />
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
              <div className="rounded-[2.5rem] p-10 sm:p-14 md:p-20 relative overflow-hidden section-wash-navy shadow-[0_32px_80px_rgba(13,34,64,0.3)] border border-white/5 group">
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: 'radial-gradient(circle at 50% 10%, rgba(0,194,199,0.12) 0%, transparent 50%)' }}
                />

                <div className="relative z-10 text-center max-w-3xl mx-auto">
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05]" style={{ color: "#FFFFFF" }}>
                    Step out of the radio age.<br />

                    <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2C7] via-[#0FB89A] to-[#00C2C7] bg-[size:200%_auto] animate-pulse" style={{ animationDuration: '4s' }}>
                      Live at the speed of light.
                    </span>
                  </h2>

                  <p className="text-blue-100/80 text-sm sm:text-base md:text-lg mb-12 max-w-xl mx-auto font-medium leading-relaxed">
                    Upgrade your environment's footprint to the ultimate benchmark in light wave hardware wireless throughput. Secure, radiant, instantaneous.
                  </p>

                  <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-14">
                    <Link
                      href="/products"
                      className="glow-cyan inline-flex items-center justify-center gap-2.5 h-14 px-10 rounded-2xl text-[#0D2240] font-black text-sm tracking-wider transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(0,194,199,0.4)] w-full sm:w-auto"
                      style={{ background: 'linear-gradient(135deg, #00C2C7 0%, #0FB89A 100%)' }}
                    >
                      Explore Home Kits
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
                      { icon: Sparkles, label: 'Fast Active Ready' },
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
        </section >
      </main >

      <Footer />
    </div >
  );
}