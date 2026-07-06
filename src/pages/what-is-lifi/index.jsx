import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
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
  HelpCircle,
  Network,
  Lock,
  Radio,
  Clock,
  Gauge,
  Sparkles,
  Sliders,
  Star,
  Globe,
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
    '🚀 Fully integrated multi-gigabit ecosystem.',
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
    <div className="flex flex-col min-h-screen antialiased font-sans transition-colors duration-300 bg-[var(--lumen-bg)] text-[var(--lumen-navy)] selection:bg-cyan-500/20">
      <Head>
        <title>What is LiFi? Technology & Applications — Lumen LiFi</title>
        <meta name="description" content="Discover LiFi technology: a fast, reliable, and secure mobile wireless communications technology that uses light waves rather than radio frequencies to transmit data." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />
      </Head>
      <Header />

      <main className="flex-grow">

        {/* 1. HERO SHOWCASE SECTION */}
        <section className="relative w-full pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[var(--lumen-light)] via-[var(--lumen-bg)] to-[var(--lumen-light)] dark:from-[#070e1b] dark:via-[var(--lumen-bg)] dark:to-[#091222]">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/4 w-[600px] h-[500px] rounded-full blur-[140px] opacity-60 dark:opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.18) 0%, transparent 75%)' }} />
            <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-50 dark:opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.15) 0%, transparent 70%)' }} />
          </div>

          <div className="absolute inset-0 pointer-events-none z-0 opacity-50 dark:opacity-30"
            style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

          <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-mono font-bold shadow-sm bg-[rgba(26,110,191,0.06)] dark:bg-[rgba(6,182,212,0.06)] border border-[var(--lumen-border)] text-[var(--lumen-blue)] dark:text-[var(--lumen-cyan)]">
              <span className="w-2 h-2 rounded-full animate-pulse inline-block bg-[var(--lumen-cyan)]" />
              <AnimatePresence mode="wait">
                <motion.span key={tick} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}>
                  {quickFacts[tick]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl text-[var(--lumen-navy)]">
              Wireless Data at the{' '}
              <span className="text-gradient-lumen bg-clip-text text-transparent bg-gradient-to-r from-[#1A6EBF] to-[#00C2C7]">
                Speed of Light
              </span>
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-[var(--lumen-muted)]">
              LiFi holds the key to solving challenges faced by WiFi and 5G networks. It is fast, highly reliable, virtually interference-free, and uniquely secure.
            </motion.p>
          </div>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="relative z-10 max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(13,34,64,0.15)] border bg-[#0D2240] border-[var(--lumen-border)] p-2">
              <div className="w-full h-11 bg-[#0A192F] flex items-center px-4 gap-2 border-b border-white/5 rounded-t-2xl">
                <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
                <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
                <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
                <div className="mx-auto bg-[#0D2240] text-[11px] font-mono text-[var(--lumen-cyan)] px-4 py-1 rounded-md border border-white/5 tracking-wider">
                  Lumen LiFi Architecture Topology Diagram
                </div>
              </div>
              <div className="relative w-full overflow-hidden rounded-b-2xl group bg-slate-900">
                <Image
                  src="/images/lifi/what-is-lifi.png"
                  alt="Lumen LiFi Architecture Topology Diagram"
                  width={1200}
                  height={650}
                  className="w-full h-auto object-cover opacity-90 transition-transform duration-700 group-hover:scale-[1.01]"
                  priority
                />
              </div>
            </div>
          </motion.div>
        </section>


        {/* 2. OPERATIONAL OVERVIEW SECTION (WITH EMBEDDED SIMULATOR ARRAY) */}
        <section className="py-24 bg-[var(--lumen-light)] dark:bg-[#0b1329]/30">
          <div className="max-w-6xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start mb-16">
              <div className="lg:col-span-7 space-y-5">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold bg-white dark:bg-slate-900 border border-[var(--lumen-border)] text-[var(--lumen-blue)]">
                  <Zap size={12} /> Operational Overview
                </div>
                <h2 className="text-4xl font-black tracking-tight text-[var(--lumen-navy)]">
                  What is LiFi & <br />
                  <span className="text-gradient-lumen">How Does it Work?</span>
                </h2>
                <p className="text-[var(--lumen-muted)] text-base leading-relaxed">
                  LiFi is a fully networked mobile wireless communications technology that uses light rather than radio frequencies to transmit data. The experience of using LiFi mirrors standard WiFi but offers unprecedented physical layer speed and scaling vectors.
                </p>
                <p className="text-[var(--lumen-muted)] text-base leading-relaxed">
                  It introduces immediate connectivity optimization targets for high-density settings, secure office complexes, immersive spatial rendering setups, and zero-RF hazardous configurations.
                </p>
              </div>

              <div className="lg:col-span-5 lg:pt-8 flex lg:justify-end">
                <Link href="/faqs" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl font-bold text-sm tracking-wide border-2 border-[var(--lumen-blue)] text-[var(--lumen-blue)] bg-[rgba(26,110,191,0.03)] hover:scale-[1.02] transition-all">
                  <HelpCircle size={14} /> View LiFi FAQs
                </Link>
              </div>
            </div>

            {/* LIVE COMPARISON SIMULATOR CONTAINER ENGINE */}

          </div>
        </section>


        {/* 3. CORE MATRIX SHOWCASE (Matches Section Wash Primary / Secondary Alternation Layout) */}
        <section className="py-24 section-wash-primary">
          <div className="max-w-6xl mx-auto px-6 space-y-24">

            {/* Row A: Military-Grade Security */}
            <div className="flex flex-col lg:flex-row items-center gap-10 lg:gap-16">
              <div className="w-full lg:w-1/2 order-2 lg:order-1">
                <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border bg-[#0D2240] border-[var(--lumen-border)] group">
                  <Image
                    src="/images/lifi/security.png"
                    alt="Physical Boundary Containment Mapping Network Data Cones"
                    fill
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain w-full h-full p-2 transition-transform duration-500 group-hover:scale-[1.01]"
                  />
                  <div className="absolute top-4 left-4 backdrop-blur-md text-[10px] font-mono font-bold px-3 py-1.5 rounded-md text-white bg-[#0D2240]/80 border border-emerald-500/30">
                    Physical Containment
                  </div>
                </div>
              </div>

              <div className="w-full lg:w-1/2 flex flex-col space-y-4 order-1 lg:order-2">
                <span className="text-xs font-mono font-bold tracking-widest uppercase text-[var(--lumen-blue)]">Digital Privacy Vault</span>
                <h3 className="text-3xl font-black text-[var(--lumen-navy)] tracking-tight">Military Grade Security</h3>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--lumen-muted)]">
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
                    src="/images/lifi/how-it-work.png"
                    alt="LiFi Real-World High Throughput Performance Tracking Chart"
                    fill
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
                <h3 className="text-3xl font-black text-[var(--lumen-navy)] tracking-tight">Real World Performance</h3>
                <p className="text-sm sm:text-base leading-relaxed text-[var(--lumen-muted)]">
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
          className="relative py-24 bg-[#EAF2F8] overflow-hidden border-t border-b border-slate-300 bg-cover bg-center bg-no-repeat transition-all duration-300"
          id="technology-benefits"
          style={{ backgroundImage: "url('/images/lifi/benefits.png')" }}
        >
          <div className="absolute inset-y-0 left-0 w-1/2 pointer-events-none opacity-5 hidden md:block z-10">
            <svg className="w-full h-full stroke-amber-600" fill="none" strokeWidth="1.5">
              <path d="M 0,150 L 120,250 L 300,220 L 320,400" />
              <path d="M 50,600 L 220,520 L 320,580 L 450,750" />
              <circle cx="320" cy="220" r="4" className="fill-amber-500" />
              <circle cx="320" cy="580" r="4" className="fill-amber-500" />
            </svg>
          </div>

          <div className="relative max-w-7xl mx-auto px-6 z-10 flex flex-col items-center">
            <div className="absolute left-6 top-6 hidden xl:flex bg-white/40 backdrop-blur-sm px-4 py-2 rounded-xl flex-col border border-slate-300/50 z-20 max-w-xs">
              <span className="text-[11px] font-sans text-slate-900 font-extrabold leading-tight whitespace-nowrap">LiFi sends giant blocks of data instantly</span>
              <div className="w-full h-[1px] bg-slate-300 my-1.5" />
              <div className="flex gap-1 items-center text-[9px] font-mono text-slate-700 font-bold whitespace-nowrap">
                <Info size={10} className="text-slate-900 stroke-[2.5]" /> FAST_LIGHT_SPEED
              </div>
            </div>

            <div className="absolute right-6 top-6 hidden xl:flex bg-white/40 backdrop-blur-sm px-5 py-2.5 rounded-xl flex-col border border-slate-300/50 z-20 text-center max-w-xs">
              <span className="text-2xl font-black text-slate-900 tracking-tight whitespace-nowrap">1,000x</span>
              <span className="text-[10px] uppercase font-mono font-bold tracking-wider text-slate-700 mt-0.5 whitespace-nowrap">More Room For Data</span>
            </div>

            <div className="text-center max-w-4xl mx-auto mb-16 relative z-20 w-full">
              <div className="px-8 py-3 inline-block max-w-full bg-white/40 backdrop-blur-md border border-slate-300/30 rounded-md shadow-xs">
                <h2 className="text-4xl md:text-6xl font-black tracking-tight font-sans bg-gradient-to-r from-[var(--lumen-navy)] to-[var(--lumen-cyan)] bg-clip-text text-transparent drop-shadow-sm">
                  Why LiFi Is Awesome
                </h2>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full max-w-5xl z-20">
              {/* Card 1: Speed */}
              <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-slate-300/50 border-t-4 border-t-amber-500 p-6 flex flex-col justify-between shadow-md transition-transform duration-200 hover:scale-[1.01]">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300/40">
                    <div className="p-2.5 rounded-xl bg-amber-50 border border-amber-500/20 text-amber-600">
                      <Gauge size={20} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-600 tracking-wider uppercase whitespace-nowrap">Super Fast Stream</span>
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 tracking-tight text-slate-900">Crazy High Speeds</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">This tech blasts super fast internet straight to your devices using light. It easily beats old limits to give you amazing downloading power.</p>
                </div>
              </div>

              {/* Card 2: No Congestion */}
              <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-slate-300/50 border-t-4 border-t-cyan-500 p-6 flex flex-col justify-between shadow-md transition-transform duration-200 hover:scale-[1.01]">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300/40">
                    <div className="p-2.5 rounded-xl bg-cyan-50 border border-cyan-500/20 text-cyan-600">
                      <Layers size={20} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-600 tracking-wider uppercase whitespace-nowrap">No Traffic Jams</span>
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 tracking-tight text-slate-900">No Slowdowns</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">Regular Wi-Fi gets crowded when too many people use it. LiFi gets around this problem by using light waves, completely ignoring everyone else's wireless signals.</p>
                </div>
              </div>

              {/* Card 3: Reliability */}
              <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-slate-300/50 border-t-4 border-t-emerald-500 p-6 flex flex-col justify-between shadow-md transition-transform duration-200 hover:scale-[1.01]">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300/40">
                    <div className="p-2.5 rounded-xl bg-emerald-50 border border-emerald-500/20 text-emerald-600">
                      <Activity size={20} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-600 tracking-wider uppercase whitespace-nowrap">Super Strong Setup</span>
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 tracking-tight text-slate-900">Always Reliable</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">Because light has 1,000 times more room to hold data than radio waves do, your internet stays completely steady and never drops out unexpectedly.</p>
                </div>
              </div>

              {/* Card 4: Low Latency */}
              <div className="relative rounded-2xl bg-white/60 backdrop-blur-md border border-slate-300/50 border-t-4 border-t-indigo-500 p-6 flex flex-col justify-between shadow-md transition-transform duration-200 hover:scale-[1.01]">
                <div>
                  <div className="flex items-center justify-between pb-3 mb-4 border-b border-slate-300/40">
                    <div className="p-2.5 rounded-xl bg-indigo-50 border border-indigo-500/20 text-indigo-600">
                      <Clock size={20} className="stroke-[2.5]" />
                    </div>
                    <span className="text-[10px] font-mono font-black text-slate-600 tracking-wider uppercase whitespace-nowrap">Instant Response</span>
                  </div>
                  <h3 className="text-lg font-extrabold mb-2 tracking-tight text-slate-900">Zero Lag Time</h3>
                  <p className="text-sm text-slate-700 leading-relaxed font-medium">LiFi reacts up to three times faster than standard Wi-Fi. This means zero lag time, making web games, streaming, and videos react smoothly without freezing.</p>
                </div>
              </div>
            </div>
          </div>
        </section>


        {/* 5. GLOBAL STANDARDS ALLIANCE SECTOR */}
        <div className="w-full bg-[#030712] text-slate-100 rounded-3xl border border-[var(--lumen-border)] shadow-2xl overflow-hidden p-6 sm:p-8">
          <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-800 pb-6 mb-6 gap-4">
            <div>
              <h3 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-teal-400">
                LIVE NETWORK SIMULATOR EXPERIMENT
              </h3>
              <p className="text-xs text-slate-400 mt-1">
                Toggle channels to visualize the dynamic physical differences between spectrum bounds.
              </p>
            </div>

            {/* Control Center Switch Module */}
            <div className="flex items-center gap-2 bg-slate-900 p-1.5 rounded-xl border border-slate-800">
              <button
                onClick={() => { setMode('wifi'); setHackStatus('idle'); }}
                className={`px-4 py-2 rounded-lg font-bold text-xs font-mono tracking-wider transition-all ${mode === 'wifi' ? 'bg-red-500/20 text-red-400 border border-red-500/30 shadow-md shadow-red-500/5' : 'text-slate-400 hover:text-slate-200'}`}
              >
                WiFi Radio Waves
              </button>
              <button
                onClick={() => { setMode('lifi'); setHackStatus('idle'); }}
                className={`px-4 py-2 rounded-lg font-bold text-xs font-mono tracking-wider transition-all ${mode === 'lifi' ? 'bg-cyan-500/20 text-cyan-400 border border-cyan-500/30 shadow-md shadow-cyan-500/5' : 'text-slate-400 hover:text-slate-200'}`}
              >
                LiFi Optical Light
              </button>
            </div>
          </div>

          {/* Simulation Environment Layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* Vector Stage Screen */}
            <div className="lg:col-span-8 bg-slate-950/40 rounded-2xl border border-slate-900 relative overflow-hidden min-h-[380px]">

              {/* Floating Contextual Diagnostics Map */}
              <div className="absolute top-4 left-4 z-10 pointer-events-none flex flex-col gap-1.5">
                <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded border backdrop-blur-md ${mode === 'wifi' ? 'bg-red-950/60 border-red-900/40 text-red-400' : 'bg-cyan-950/60 border-cyan-900/40 text-cyan-400'}`}>
                  SPECTRUM: {mode === 'wifi' ? 'Omnidirectional RF Leaking' : 'Localized Optical Cone'}
                </span>
                {mode === 'wifi' && (
                  <span className="text-[9px] font-mono bg-amber-950/50 border border-amber-900/40 text-amber-400 px-2 py-0.5 rounded animate-pulse">
                    Congestion Strain: {userCount} Users Competing for Bandwidth
                  </span>
                )}
              </div>

              {/* Core Vector Environment Drawing */}
              <svg viewBox="0 0 800 420" className="w-full h-full select-none">
                <defs>
                  <filter id="sim-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feComposite in="SourceGraphic" in2="blur" operator="over" />
                  </filter>
                  <linearGradient id="sim-lamp-cone" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.4" />
                    <stop offset="40%" stopColor="#22d3ee" stopOpacity="0.15" />
                    <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
                  </linearGradient>
                </defs>

                {/* Infrastructure Blueprint Lines */}
                <g opacity="0.08">
                  <path d="M0,50 L800,50 M0,100 L800,100 M0,150 L800,150 M0,200 L800,200 M0,250 L800,250 M0,300 L800,300 M0,350 L800,350" stroke="#94a3b8" strokeWidth="1" />
                  <path d="M100,0 L100,420 M200,0 L200,420 M300,0 L300,420 M400,0 L400,420 M500,0 L500,420 M600,0 L600,420 M700,0 L700,420" stroke="#94a3b8" strokeWidth="1" />
                </g>

                {/* Structural Boundary Separation Isolation Wall */}
                <g>
                  <rect x="520" y="30" width="20" height="360" fill="#1e293b" rx="4" stroke="#334155" strokeWidth="1.5" />
                  <text x="531" y="210" fill="#475569" fontSize="9" fontWeight="bold" textAnchor="middle" transform="rotate(90 531 210)" letterSpacing="1.5">
                    OPAQUE ROOM SHIELD WALL
                  </text>
                </g>

                {/* WiFi State Wave Propagation Modules */}
                {mode === 'wifi' && (
                  <g>
                    {/* Central Wireless Transceiver Router */}
                    <g transform="translate(180, 150)">
                      <circle cx="0" cy="0" r="14" fill="#1e1b4b" stroke="#f43f5e" strokeWidth="2" />
                      <path d="M-6,-3 Q0,-9 6,-3 M-10,-6 Q0,-16 10,-6 M-14,-9 Q0,-22 14,-9" fill="none" stroke="#f43f5e" strokeWidth="2" className="animate-pulse" />
                      <circle cx="0" cy="0" r="3" fill="#f43f5e" />
                    </g>

                    {/* Omnidirectional RF Leaking Visualization Loops */}
                    <circle cx="180" cy="150" r="90" fill="none" stroke="#f43f5e" strokeWidth="1" strokeDasharray="4,6" opacity="0.3" className="origin-center animate-[spin_25s_linear_infinite]" />
                    <circle cx="180" cy="150" r="230" fill="none" stroke="#f43f5e" strokeWidth="1" strokeDasharray="6,10" opacity="0.2" className="origin-center animate-[spin_40s_linear_infinite]" />

                    {/* Scatter-packet Vector Matrix Flows */}
                    {WIFI_PACKETS.map((p) => (
                      <motion.circle
                        key={p.id}
                        cx={p.startX}
                        cy={p.startY}
                        r="2.5"
                        fill={p.id % 3 === 0 ? '#fb7185' : p.id % 2 === 0 ? '#38bdf8' : '#fbbf24'}
                        animate={{
                          x: [0, p.tx * 0.4, p.tx * 0.8, p.tx],
                          y: [0, p.ty * 0.4, p.ty * 0.8, p.ty],
                          opacity: [0, 0.8, 0.8, 0]
                        }}
                        transition={{ duration: p.duration, repeat: Infinity, delay: p.delay, ease: "linear" }}
                      />
                    ))}
                  </g>
                )}

                {/* LiFi State Concentrated Signal Cones */}
                {mode === 'lifi' && (
                  <g>
                    {/* Ceiling Downlink Optical Grid Luminaire Assembly */}
                    <g transform="translate(260, 30)">
                      <polygon points="-40,360 40,360 12,0 -12,0" fill="url(#sim-lamp-cone)" />
                      <path d="M-15,0 L15,0 L12,8 L-12,8 Z" fill="#475569" />
                      <circle cx="0" cy="7" r="7" fill="#e2e8f0" filter="url(#sim-glow-cyan)" />
                    </g>

                    {/* Secondary Secondary User Array */}
                    <g transform="translate(110, 30)">
                      <polygon points="-25,250 25,250 8,0 -8,0" fill="url(#sim-lamp-cone)" opacity="0.4" />
                      <circle cx="0" cy="5" r="5" fill="#e2e8f0" opacity="0.7" />
                    </g>

                    {/* Controlled Non-Interfering Data Paths */}
                    {[110, 245, 275].map((posX, tIdx) => (
                      Array.from({ length: 3 }).map((_, dIdx) => (
                        <motion.circle
                          key={`lf-dot-${posX}-${dIdx}`}
                          cx={posX}
                          cy={35}
                          r="3"
                          fill="#22d3ee"
                          filter="url(#sim-glow-cyan)"
                          animate={{
                            y: [35, posX === 110 ? 260 : 360],
                            opacity: [0, 1, 1, 0]
                          }}
                          transition={{ duration: 1.3, repeat: Infinity, delay: dIdx * 0.4 + tIdx * 0.2, ease: "linear" }}
                        />
                      ))
                    ))}
                  </g>
                )}

                {/* Internal Office Consumer Terminals */}
                {/* Workspace Desk Machine Setup */}
                <g transform="translate(250, 350)">
                  <rect x="-22" y="-18" width="44" height="28" rx="3" fill={mode === 'lifi' ? '#0f172a' : '#1e293b'} stroke={mode === 'lifi' ? '#22d3ee' : '#64748b'} strokeWidth="2" filter={mode === 'lifi' ? 'url(#sim-glow-cyan)' : ''} />
                  <rect x="-18" y="-14" width="36" height="20" fill="#020617" />
                  <path d="M-5,10 L5,10 L8,18 L-8,18 Z" fill="#475569" />
                </g>

                {/* Portable Mobile Slate Setup */}
                <g transform="translate(100, 250)">
                  <rect x="-12" y="-18" width="24" height="36" rx="4" fill={mode === 'lifi' ? '#0f172a' : '#1e293b'} stroke={mode === 'lifi' ? '#22d3ee' : '#64748b'} strokeWidth="1.5" transform="rotate(90)" filter={mode === 'lifi' ? 'url(#sim-glow-cyan)' : ''} />
                  <rect x="-14" y="-9" width="28" height="18" fill="#020617" />
                </g>

                {/* Threat Actor Perimeter Station Array */}
                <g transform="translate(680, 230)">
                  <circle cx="0" cy="-22" r="10" fill="#334155" stroke={hackStatus === 'success' ? '#f43f5e' : hackStatus === 'blocked' ? '#10b981' : '#475569'} strokeWidth="2" />
                  <path d="M-16,12 L16,12 L12,-10 L-12,-10 Z" fill="#1e293b" stroke={hackStatus === 'success' ? '#f43f5e' : hackStatus === 'blocked' ? '#10b981' : '#475569'} strokeWidth="2" />
                  <rect x="-14" y="3" width="28" height="10" fill="#020617" stroke="#64748b" />

                  {/* Hack State Interaction Badges */}
                  {hackStatus === 'hacking' && (
                    <path d="M-35,-5 Q-15,-20 0,-5 T35,-5" fill="none" stroke="#f59e0b" strokeWidth="1.5" strokeDasharray="3,3" className="animate-bounce" />
                  )}

                  <AnimatePresence>
                    {hackStatus === 'success' && (
                      <g>
                        <rect x="-45" y="-55" width="90" height="18" rx="4" fill="#991b1b" />
                        <text x="0" y="-43" fill="#fecdd3" fontSize="8" fontWeight="bold" textAnchor="middle">BREACH VIA WALLS</text>
                        <path d="M0,15 L-120,5" fill="none" stroke="#f43f5e" strokeWidth="1" strokeDasharray="2,2" />
                      </g>
                    )}
                    {hackStatus === 'blocked' && (
                      <g>
                        <rect x="-50" y="-55" width="100" height="18" rx="4" fill="#065f46" />
                        <text x="0" y="-43" fill="#d1fae5" fontSize="8" fontWeight="bold" textAnchor="middle">BLOCKED AT SHIELD</text>
                      </g>
                    )}
                  </AnimatePresence>
                  <text x="0" y="32" fill="#94a3b8" fontSize="9" fontWeight="bold" textAnchor="middle">Outside Boundary</text>
                </g>
              </svg>
            </div>

            {/* Live Real-Time Telemetry Metrics Console Panel */}
            <div className="lg:col-span-4 flex flex-col justify-between gap-4">
              <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4 font-mono">
                <div className="text-[10px] tracking-wider text-slate-400 font-bold uppercase">
                  Live Telemetry Output
                </div>

                {/* Speed Track */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Data Volatility Speed</span>
                    <span className={`font-bold ${mode === 'lifi' ? 'text-cyan-400' : 'text-red-400'}`}>
                      {currentMetrics.speed}% ({mode === 'lifi' ? '100 Gbps+' : `${currentMetrics.speed * 4} Mbps`})
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <motion.div
                      className={`h-full rounded-full ${mode === 'lifi' ? 'bg-gradient-to-r from-cyan-500 to-teal-400' : 'bg-red-500'}`}
                      animate={{ width: `${currentMetrics.speed}%` }}
                      transition={{ type: "spring", stiffness: 70 }}
                    />
                  </div>
                </div>

                {/* Security Track */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Physical Isolation</span>
                    <span className={`font-bold ${mode === 'lifi' ? 'text-emerald-400' : 'text-red-400'}`}>
                      {currentMetrics.security}% Containment
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <motion.div
                      className={`h-full rounded-full ${mode === 'lifi' ? 'bg-emerald-500' : 'bg-red-600'}`}
                      animate={{ width: `${currentMetrics.security}%` }}
                    />
                  </div>
                </div>

                {/* Congestion Interference Track */}
                <div className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-slate-400">Cross-Room Bleeding</span>
                    <span className={`font-bold ${currentMetrics.interference > 40 ? 'text-red-400' : 'text-emerald-400'}`}>
                      {currentMetrics.interference}% Noise
                    </span>
                  </div>
                  <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                    <motion.div
                      className={`h-full rounded-full ${currentMetrics.interference > 40 ? 'bg-red-500' : 'bg-emerald-500'}`}
                      animate={{ width: `${currentMetrics.interference}%` }}
                    />
                  </div>
                </div>

                <div className="p-2.5 bg-slate-950 rounded-lg border border-slate-800 text-center">
                  <p className="text-[10px] text-slate-500 uppercase">Operational Vector</p>
                  <p className={`text-xs font-bold mt-0.5 ${mode === 'lifi' ? 'text-cyan-400' : 'text-amber-500'}`}>
                    {currentMetrics.status}
                  </p>
                </div>
              </div>

              {/* Active Penetration Signal Exploit Controller Tool */}
              <div className="bg-slate-900/90 p-4 rounded-2xl border border-slate-800 space-y-2.5">
                <div className="text-[10px] font-mono text-slate-400 font-bold uppercase tracking-wider">
                  Threat Matrix Trigger
                </div>
                <p className="text-[11px] text-slate-400 leading-normal">
                  Launch an immediate perimeter attack loop to test structural network containment bounds.
                </p>
                <button
                  onClick={triggerHackChallenge}
                  disabled={hackStatus === 'hacking'}
                  className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all border ${hackStatus === 'hacking'
                    ? 'bg-amber-600/10 text-amber-400 border-amber-500/20 cursor-not-allowed'
                    : 'bg-slate-950 text-slate-200 border-slate-800 hover:bg-slate-900 hover:border-slate-700 active:scale-[0.99]'
                    }`}
                >
                  {hackStatus === 'hacking' ? 'Intercepting Vector Loops...' : 'Simulate Perimeter Attack'}
                </button>
              </div>
            </div>
          </div>
        </div>
        {/* 6. CALL TO ACTION: PREMIUM NEWSLETTER UPGRADE */}
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
                  <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05]">
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
      </main>

      <Footer />
    </div>
  );
}