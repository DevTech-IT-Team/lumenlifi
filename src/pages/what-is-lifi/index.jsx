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
  Check,
  Router,
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
    <div className="flex min-h-screen flex-col overflow-x-clip antialiased font-sans lumen-page-bg text-[var(--lumen-navy)] selection:bg-cyan-500/20">
      <Head>
        <title>What is LiFi? Technology & Applications — Lumen LiFi</title>
        <meta name="description" content="Discover LiFi technology: a fast, reliable, and secure mobile wireless communications technology that uses light waves rather than radio frequencies to transmit data." />
      </Head>
      <Header />

      <main className="flex-grow">

        {/* 1. HERO SHOWCASE SECTION */}
        <section className="page-screen-top relative w-full overflow-hidden bg-white">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div className="absolute top-0 left-1/4 w-[600px] h-[500px] rounded-full blur-[140px] opacity-60 dark:opacity-40"
              style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.18) 0%, transparent 75%)' }} />
            <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-50 dark:opacity-30"
              style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.15) 0%, transparent 70%)' }} />
            <div className="absolute inset-0 lumen-grid-pattern-hero opacity-45" />
          </div>

          <div className="relative z-10 mx-auto mb-10 flex max-w-5xl flex-col items-center px-4 text-center sm:mb-16 sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-6 text-xs font-mono font-bold shadow-sm bg-[rgba(26,110,191,0.06)] border border-[var(--lumen-border)] text-[#1A6EBF]">
              <span className="w-2 h-2 rounded-full animate-pulse inline-block bg-[var(--lumen-cyan)]" />
              <AnimatePresence mode="wait">
                <motion.span key={tick} initial={{ opacity: 0, y: 4 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -4 }} transition={{ duration: 0.3 }}>
                  {quickFacts[tick]}
                </motion.span>
              </AnimatePresence>
            </div>

            <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="page-hero-heading lumen-display mb-6 max-w-4xl">
              Wireless Data at the{' '}
              <span className="text-gradient-lumen bg-clip-text text-transparent bg-gradient-to-r from-[#1A6EBF] to-[#00C2C7]">
                Speed of Light
              </span>
            </motion.h1>

            <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="lumen-lead max-w-2xl mb-8">
              LiFi holds the key to solving challenges faced by WiFi and 5G networks. It is fast, highly reliable, virtually interference-free, and uniquely secure.
            </motion.p>
          </div>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="relative z-10 mx-auto w-full max-w-6xl px-4 sm:px-5">
            <div className="relative w-full overflow-hidden rounded-lg shadow-[0_24px_70px_rgba(13,34,64,0.15)]">
              <div className="relative aspect-video w-full overflow-hidden bg-[#020817]">
                <NetworkSimulatorExperiment embedded />
              </div>
            </div>
          </motion.div>
        </section>


        <section className="lifi-features-ui relative overflow-hidden pt-24 pb-16">
          <div className="relative z-10 mx-auto max-w-[1280px]">
            <div className="relative z-10 flex flex-col items-center gap-10 text-center">
              <div className="mx-auto flex max-w-3xl flex-col items-center gap-4">
                <span className="lifi-features-kicker">The internet you know</span>
                <h2 className="lifi-features-title">
                  Delivered through <span>Light.</span>
                </h2>
                <p className="lifi-features-lead">
                  LiFi is a wireless communication technology that carries data through rapid, invisible changes
                  in light. Your devices connect just like WiFi—but with greater speed, privacy, and freedom from
                  radio interference.
                </p>
              </div>

              <div className="relative mx-auto mt-4 w-full max-w-5xl">
                <div className="lifi-features-cone pointer-events-none absolute -top-10 left-1/2 h-[120%] w-[80%] -translate-x-1/2 -z-10 opacity-40" />
                <div className="grid grid-cols-1 justify-center gap-6 md:grid-cols-3">
                  {[
                    {
                      number: '01',
                      icon: Lightbulb,
                      title: 'Light transmits',
                      text: 'An LED sends data at imperceptible speed.',
                      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAY7OCfB-1lfibyWmZifYKKpGwpvfyyQVtYxWvp7_nDd2CPX9QkvOsqfp4Pt2mN7-orajFcKa1g9JRIdmk9XYbs3xkeRVTOfX4XIIVKhohFnxGoAb23SVqPpoRNoCwXEJH-kW9iapsGyhGt9ygYBiBjVK6-BPJgwGZ3slsgarn2VTLK1Kd6TX94CIXYQudq91wCLdrbwus5-XByxN-MJhqhypVgswdpTS_QsqnmScKY-TpSWyy32m9JsQ',
                      object: 'object-left',
                    },
                    {
                      number: '02',
                      icon: Router,
                      title: 'Receiver decodes',
                      text: 'A LiFi receiver converts light into data.',
                      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDGzCjupHuwTNGQG9ZS2AKiLrkveaqaqjgYP3RPCEVr0T9IbTJ0D-YevnkayC5JDA5oGNifXIGaTNQIp4XktsahS-MY9GtmOn-nXU3blaNwQeIeD8ruRAf3Zbq7ywyb52R-FDRDdjisL-i-6Y-bWLNTWlp1LNqcsGiYmCtthoIuwrziqB7x6BNhGYaOJ1fFa3UzcbNnn0R0dWWxKrp3V64QYKyNoL35p9g1100I0ESNNtz8jtq7XJZzeA',
                      object: 'object-center',
                    },
                    {
                      number: '03',
                      icon: Zap,
                      title: 'Devices connect',
                      text: 'Your internet responds with near-zero delay.',
                      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDQoAke4Ij3HnQf5wuU3EqHlL5-tqaLtSnDvdD1e5J4ErtRw6kGYqmfbCOL_A6okvp0B9-toldED8PWZ0Nvt5HFQ7Rl3QyouhTVpncxkTMmoJ5eAeCcPlXkqPiTotjrDFcDc-JEYp8gLy8fbRAm0xS2DsZRrDMmstydZD-Y32Qi_8HlLHkTE3hTT76OCkfCYt8Ldh8_mNAqghdVOueA8iY2u53LPlJtii62mnIdVHZJhT_bfH2yrQtVnw',
                      object: 'object-right',
                    },
                  ].map(({ number, icon: StepIcon, title, text, img, object }) => (
                    <div key={number} className="lifi-features-card group relative w-full text-left">
                      <div className="lifi-features-card-inner relative flex w-full flex-col p-8">
                        <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden opacity-20">
                          <img src={img} alt="" className={`h-full w-full object-cover ${object}`} />
                        </div>
                        <div className="lifi-features-num absolute right-4 top-4">{number}</div>
                        <div className="mb-6 flex h-12 w-12 items-center justify-center rounded-full border border-[#44d9e4]/30 text-[#44d9e4] transition-colors group-hover:border-[#44d9e4]">
                          <StepIcon size={22} strokeWidth={1.75} fill="currentColor" />
                        </div>
                        <h3 className="lifi-features-card-title">{title}</h3>
                        <p className="lifi-features-card-text">{text}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 flex w-full flex-wrap justify-center gap-3">
                {['No radio frequencies', 'Room-level privacy', 'High-density ready'].map((benefit) => (
                  <div key={benefit} className="lifi-features-chip">
                    <Check size={14} className="text-[#44d9e4]" strokeWidth={2.5} />
                    {benefit}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>


        {/* 3. CORE MATRIX SHOWCASE (Matches Section Wash Primary / Secondary Alternation Layout) */}
        <section className="page-screen relative overflow-hidden bg-white">
          <div className="relative z-10 mx-auto max-w-6xl space-y-16 px-4 sm:space-y-24 sm:px-6">

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
                <h3 className="lumen-h2">Military Grade Security</h3>
                <p className="lumen-body-sm">
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
                <h3 className="lumen-h2">Real World Performance</h3>
                <p className="lumen-body-sm">
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
          className="page-screen section-wash-navy relative overflow-hidden border-t border-b border-white/10 transition-all duration-300"
          id="technology-benefits"
        >
          <div className="absolute inset-0 pointer-events-none overflow-hidden select-none">
            <div className="absolute -top-40 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-[#0095ff]/10 rounded-full blur-[140px] z-0" />
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#7DF9FF]/5 rounded-full blur-[120px] z-0" />
          </div>

          <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-4 sm:px-6">

            {/* Header Section */}
            <div className="text-center max-w-[700px] mx-auto mb-20 relative z-20 w-full flex flex-col items-center">
              {/* Premium Typography Header */}
              <h2 className="lumen-display-light bg-gradient-to-b from-[#FFFFFF] via-[#7DD3FC] to-[#00E5FF] bg-clip-text text-transparent drop-shadow-md mb-6 pb-2">
                Why LiFi <br /> Changes Everything
              </h2>

              {/* Subtitle */}
              <p className="lumen-lead-light max-w-[650px]">
                LiFi transmits data using light instead of radio waves, delivering unmatched speed, security, and reliability.
              </p>
            </div>

            {/* Symmetrical Layout Grid */}
            <div className="w-full max-w-6xl grid grid-cols-1 lg:grid-cols-4 gap-8 items-center z-20">

              {/* Left Metrics Stack */}
              <div className="flex flex-col gap-6 order-2 lg:order-1">
                {/* Card 1: Speed */}
                <div className="group relative rounded-lg bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.12] p-6 shadow-xl transition-all duration-300 hover:border-[#00D4FF]/40 hover:-translate-y-1">
                  <div className="text-white/80 group-hover:text-[#00D4FF] transition-colors mb-3">
                    <Zap size={24} className="stroke-[2]" />
                  </div>
                  <div className="lumen-stat text-white">224 Gbps</div>
                  <div className="text-xs font-bold text-[#7DF9FF] uppercase tracking-wider mt-1">Peak Speed</div>
                </div>

                {/* Card 2: Security */}
                <div className="group relative rounded-lg bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.12] p-6 shadow-xl transition-all duration-300 hover:border-[#00D4FF]/40 hover:-translate-y-1">
                  <div className="text-white/80 group-hover:text-[#00D4FF] transition-colors mb-3">
                    <Shield size={24} className="stroke-[2]" />
                  </div>
                  <div className="lumen-stat text-white">100%</div>
                  <div className="text-xs font-bold text-[#7DF9FF] uppercase tracking-wider mt-1">Light Contained / Secure</div>
                </div>
              </div>

              {/* Center Illustration Container (Strict Sizing: 780px Max) */}
              <div className="lg:col-span-2 flex justify-center items-center order-1 lg:order-2 px-2 w-full">
                <div
                  className="relative w-full max-w-[780px] rounded-lg border border-white/[0.12] bg-slate-950/20 p-2 overflow-hidden transition-all duration-300 ease-out hover:scale-[1.02] hover:border-[#00D4FF]/30"
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
                    className="w-full h-auto object-contain rounded-lg"
                  />
                </div>
              </div>

              {/* Right Metrics Stack */}
              <div className="flex flex-col gap-6 order-3">
                {/* Card 3: Spectrum */}
                <div className="group relative rounded-lg bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.12] p-6 shadow-xl transition-all duration-300 hover:border-[#00D4FF]/40 hover:-translate-y-1">
                  <div className="text-white/80 group-hover:text-[#00D4FF] transition-colors mb-3">
                    <Radio size={24} className="stroke-[2]" />
                  </div>
                  <div className="lumen-stat text-white">1000×</div>
                  <div className="text-xs font-bold text-[#7DF9FF] uppercase tracking-wider mt-1">More Spectrum</div>
                </div>

                {/* Card 4: Zero RF */}
                <div className="group relative rounded-lg bg-white/[0.04] backdrop-blur-[20px] border border-white/[0.12] p-6 shadow-xl transition-all duration-300 hover:border-[#00D4FF]/40 hover:-translate-y-1">
                  <div className="text-white/80 group-hover:text-[#00D4FF] transition-colors mb-3">
                    <Globe size={24} className="stroke-[2]" />
                  </div>
                  <div className="lumen-stat text-white">Zero RF</div>
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
        <section className="page-screen relative overflow-hidden bg-white" id="cta-final">
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

          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6">
            <motion.div
              initial={{ opacity: 0, y: 35, scale: 0.98 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <div className="rounded-lg p-10 sm:p-14 md:p-20 relative overflow-hidden section-wash-navy shadow-[0_32px_80px_rgba(13,34,64,0.3)] border border-white/5 group">
                <div
                  className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-80"
                  style={{ background: 'radial-gradient(circle at 50% 10%, rgba(0,194,199,0.12) 0%, transparent 50%)' }}
                />

                
              </div>
            </motion.div>
          </div>
        </section >
      </main >

      <Footer />
    </div >
  );
}