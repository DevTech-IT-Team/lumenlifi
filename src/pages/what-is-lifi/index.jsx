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
        <section className="relative overflow-hidden py-24 bg-[var(--lumen-light)] dark:bg-[#0b1329]/30">
          {/* ── ABSOLUTE BACKGROUND GRID LAYER ── */}
          <div
            className="absolute inset-0 pointer-events-none z-0 opacity-50 dark:opacity-30"
            style={{
              backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)',
              backgroundSize: '64px 64px'
            }}
          />

          {/* ── CONTENT CONTAINER ── */}
          <div className="relative z-10 max-w-6xl mx-auto px-6">
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
                <Link href="/products" className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-2xl font-bold text-sm tracking-wide border-2 border-[var(--lumen-blue)] text-[var(--lumen-blue)] bg-[rgba(26,110,191,0.03)] hover:scale-[1.02] transition-all">
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
                    src="/images/lifi/how.jpg"
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
          className="relative py-32 bg-[#081A35] overflow-hidden border-t border-b border-white/10 transition-all duration-300"
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
                  <div className="text-3xl font-black text-white tracking-tight">224 Gbps</div>
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
              <div className="lg:col-span-2 flex justify-center items-center order-1 lg:order-2 px-2">
                <div
                  className="w-full max-w-[780px] rounded-[28px] border border-white/[0.12] bg-slate-950/20 p-2 overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#00D4FF]/30"
                  style={{
                    boxShadow: '0 0 80px rgba(0,170,255,0.15)'
                  }}
                  onMouseEnter={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 95px rgba(0,170,255,0.3)';
                  }}
                  onMouseLeave={(e) => {
                    e.currentTarget.style.boxShadow = '0 0 80px rgba(0,170,255,0.15)';
                  }}
                >
                  <img
                    src="/images/lifi/how.jpg"
                    alt="LiFi Showcase Illustration"
                    className="w-full h-auto max-h-[480px] object-contain rounded-[24px]"
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


        {/* 5. GLOBAL STANDARDS ALLIANCE SECTOR */}
        <NetworkSimulatorExperiment />
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