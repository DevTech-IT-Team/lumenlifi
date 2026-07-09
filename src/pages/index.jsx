import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '../../public/images/hero/hero.png';
import logoPl from '../../public/brand/logo.png';
import roomBg from '../../public/images/hero/room-bg.jpg';

import {
  ArrowRight, CheckCircle, Zap, Shield, Lock, Wifi, WifiOff,
  Monitor, Gamepad2, Cpu, Home, Building2, Factory, GraduationCap,
  Stethoscope, ChevronRight, Star, Sparkles, Eye, ShieldCheck, Activity, Sliders, Flame, Lightbulb, Globe
} from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';
import ctaImg from '../../public/images/hero/cta.png';
import enterpriseImg from '../../public/images/hero/enterprise.png';


// ── CLIENT IMAGES 1 TO 5 (RESIDENTIAL ARCHITECTURE INTEGRATION) ──
import homeAutomationImg from '../../public/images/hero/home-automation.png';
import gamingImg from '../../public/images/hero/gaming.png';
import streamingImg from '../../public/images/hero/streaming.png';
import infiniteDevicesImg from '../../public/images/hero/infinite.png';
import invisibleInfraImg from '../../public/images/hero/invisible.png';

// ── CLIENT IMAGES 6 TO 9 (COMMERCIAL ECOSYSTEM PATHWAYS) ──
import corporateBoardroomImg from '../../public/images/hero/corporate.png';
import manufacturingImg from '../../public/images/hero/manufacturing.png';
import datacenterImg from '../../public/images/hero/data-centers.png';
import schoolImg from '../../public/images/hero/education.png';

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ─────────────────────────────────────────────────────────────
   SECTION 1 — HERO SHOWCASE
───────────────────────────────────────────────────────────── */
function HeroSection() {
  const logoDisplay = {
    imgSrc: logoPl,
    width: "200px",
    height: "50px",
    link: "#",
  };

  useEffect(() => {
    const t = setInterval(() => (p => (p + 1) % 3), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative w-full pt-32 pb-20 overflow-hidden bg-gradient-to-b from-[var(--lumen-light)] via-[var(--lumen-bg)] to-[var(--lumen-light)] dark:from-[#070e1b] dark:via-[var(--lumen-bg)] dark:to-[#091222]"
    >
      {/* Dynamic Luminous Ambient Layer */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[600px] h-[500px] rounded-full blur-[140px] opacity-60 dark:opacity-40"
          style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.18) 0%, transparent 75%)' }} />
        <div className="absolute -top-20 right-1/4 w-[500px] h-[500px] rounded-full blur-[120px] opacity-50 dark:opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.15) 0%, transparent 70%)' }} />
      </div>

      {/* Grid Overlay Vector Matrix */}
      <div className="absolute inset-0 pointer-events-none z-0 opacity-50 dark:opacity-30"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mb-16">

        <div className="mb-12 flex justify-center w-full">
          <AnimatePresence mode="wait">
            <motion.div
              key={logoDisplay.link}
              initial={{ opacity: 0, y: 6, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -6, scale: 0.98 }}
              transition={{ duration: 0.3, ease: 'easeOut' }}
              className="relative w-full max-w-lg sm:max-w-xl md:max-w-2xl h-20 sm:h-28 md:h-32 flex items-center justify-center px-4"
            >
              <Image
                src={logoDisplay.imgSrc}
                alt="LumenFi Logo"
                fill
                className="object-contain object-center"
                priority
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 700px, 850px"
              />
            </motion.div>
          </AnimatePresence>
        </div>
        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible" className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.1] mb-6 max-w-4xl text-[var(--lumen-navy)]">
          The Speed of Light.{' '}
          <span className="text-gradient-lumen">
            Now in Your Living Room.
          </span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible" className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-[var(--lumen-muted)]">
          Super fast internet made from light. Lumen LiFi turns your normal ceiling lights into an ultra-fast internet connection. No internet traffic jams. Just clean, fast light power.
        </motion.p>

        <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible" className="flex flex-col sm:flex-row items-center gap-4">
          <Link href="/what-is-lifi" className="glow-blue inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl w-full sm:w-auto" style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
            What is LiFi? <ArrowRight size={16} />
          </Link>
          <Link href="/contact" className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border-2 transition-all hover:scale-[1.02] w-full sm:w-auto border-[var(--lumen-blue)] text-[var(--lumen-blue)] bg-[rgba(26,110,191,0.03)]">
            Order Now
          </Link>
        </motion.div>
      </div>

      <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible" className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(13,34,64,0.15)] dark:shadow-none border bg-[#0D2240] border-[var(--lumen-border)]">
          <div className="w-full h-11 bg-[#0A192F] flex items-center px-4 gap-2 border-b border-white/5">
            <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
            <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
            <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
            <div className="mx-auto bg-[#0D2240] text-[11px] font-mono text-[var(--lumen-cyan)] px-4 py-1 rounded-md border border-white/5 tracking-wider">
              Lumen LiFi uses light instead of radio waves to give you faster internet, zero lag, better privacy, and no slowdowns.
            </div>
          </div>
          <div className="relative w-full aspect-[16/7.2] min-h-[320px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px]">
            <Image src={heroImg} alt="Lumen LiFi Ecosystem Matrix Graphic" fill priority className="object-contain w-full h-full p-2" sizes="(max-width: 1280px) 100vw, 1280px" />
          </div>
        </div>

        <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-12 pt-8 border-t border-dashed border-[var(--lumen-border)] text-center">
          {[
            { val: '10 Gbps', label: 'Top Speed' },
            { val: '80 sec', label: 'To download a huge movie' },
            { val: 'Zero RF', label: 'No radio waves' },
          ].map(({ val, label }) => (
            <div key={label} className="flex flex-col items-center">
              <div className="font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-[var(--lumen-navy)]">{val}</div>
              <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest mt-1 text-[var(--lumen-muted)]">{label}</div>
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 2 — SPEED COMPARISON MATRIX
───────────────────────────────────────────────────────────── */
function SpeedTableSection() {
  const [activeIndex, setActiveIndex] = useState(2);

  const rows = [
    {
      type: "Old Wi-Fi",
      speed: "20 Mbps",
      time: "45 mins",
      note: "Unstable lag",
      highlight: false,
      icon: Wifi // Replaces 📶
    },
    {
      type: "Standard Fiber",
      speed: "100 Mbps",
      time: "9 mins",
      note: "Average",
      highlight: false,
      icon: Cpu // Replaces 🌐
    },
    {

      type: "Lumen LiFi",
      speed: "1 Gbps+",
      time: " Instant",
      note: "Pure Light Stream",
      highlight: true,
      icon: Lightbulb // Replaces 🚀 or 💡
    }
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-slate-950 text-white" id="speed">
      {/* --- 🌟 AMBIENT BACKGROUND GLOW BLOBS --- */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#00E5FF] blur-[150px] opacity-25 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#FF4D6D] blur-[180px] opacity-20 pointer-events-none" style={{ animationDuration: '8s' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 h-80 w-80 rounded-full bg-[#00FF9D] blur-[160px] opacity-10 pointer-events-none" />

      {/* --- 🎈 FLOATING PARTICLES --- */}
      <div className="absolute inset-0 pointer-events-none overflow-hidden opacity-30">
        {[...Array(12)].map((_, idx) => (
          <motion.div
            key={idx}
            className="absolute w-1.5 h-1.5 bg-cyan-400 rounded-full blur-[0.5px]"
            style={{
              top: `${(idx * 73) % 100}%`,
              left: `${(idx * 37) % 100}%`,
            }}
            animate={{
              y: [0, -30, 0],
              opacity: [0.2, 0.7, 0.2],
            }}
            transition={{
              duration: 5 + (idx % 4),
              repeat: Infinity,
              ease: "easeInOut",
              delay: idx * 0.3
            }}
          />
        ))}
      </div>

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* --- HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold mb-4 bg-white/5 border border-white/10 text-cyan-300 shadow-[0_0_15px_rgba(0,229,255,0.15)]">
            <Zap size={12} className="animate-pulse" /> Super Fast Speed
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white drop-shadow-[0_0_20px_rgba(255,255,255,0.1)]">
            Internet at{' '}
            <span className="block md:inline bg-gradient-to-r from-[#00E5FF] via-[#7B61FF] via-[#FF4D6D] to-[#FFB703] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,229,255,0.3)]">
              Light Speed.
            </span>
          </h2>
          <p className="text-slate-400 max-w-xl mx-auto text-base">
            Slide through standard legacy protocols to see how next-gen light-wave systems accelerate data streams down the track.
          </p>
        </motion.div>

        {/* --- 🏎️ THE UNIFIED SPEEDWAY TRACK PANEL --- */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.3)] mb-6 group">

          <div className="flex justify-between text-[10px] font-mono font-bold text-slate-500 uppercase tracking-widest mb-6 px-1">
            <div>Start Gate</div>
            <div>The Light Finish</div>
          </div>

          {/* Interactive Core Light Beam Rail */}
          <div className="relative h-12 flex items-center mb-8 px-1">
            {/* Horizontal Line Rail Track Background */}
            <div className="absolute left-0 right-0 h-2 bg-white/10 rounded-full" />

            {/* The Animated Light Beam Line Fill */}
            <motion.div
              className="absolute left-0 h-2 rounded-full bg-gradient-to-r from-slate-500 via-[#7B61FF] via-[#FF4D6D] to-[#00E5FF] shadow-[0_0_20px_rgba(0,229,255,0.5)]"
              initial={{ width: '0%' }}
              animate={{ width: `${(activeIndex / Math.max(1, (rows || []).length - 1)) * 100}%` }}
              transition={{ type: 'spring', stiffness: 100, damping: 16 }}
            />

            {/* Clickable Custom Nodes / Anchors Layer */}
            <div className="absolute inset-x-0 flex justify-between pointer-events-none">
              {(rows || []).map((row, index) => {
                const isSelected = activeIndex === index;
                const NodeIcon = row.icon || Globe;

                return (
                  <button
                    key={index}
                    onClick={() => setActiveIndex(index)}
                    className="pointer-events-auto relative flex flex-col items-center justify-center focus:outline-none"
                  >
                    {/* Floating Node Bubble Wrapper */}
                    <motion.div
                      className={`w-10 h-10 rounded-xl flex items-center justify-center border transition-all duration-300 ${isSelected
                        ? 'bg-white text-slate-950 border-white shadow-[0_0_20px_rgba(255,255,255,0.4)] scale-110 font-bold'
                        : 'bg-slate-900 text-slate-400 border-white/10 hover:border-white/30 hover:text-slate-200'
                        }`}
                    >
                      <NodeIcon size={16} strokeWidth={2} />
                    </motion.div>

                    {/* Node Label featuring updated top-padding utility styling override */}
                    <span className={`absolute -bottom-6 pt-[10px] font-mono text-[11px] font-bold tracking-wide transition-colors ${isSelected ? 'text-slate-400' : 'text-slate-500'}`}>
                      {row.type}
                    </span>
                  </button>
                );
              })}
            </div>
          </div>

          {/* SINGLE SLIDER ELEMENT INTERFACE */}
          <div className="mt-8 px-1 relative z-20">
            <input
              type="range"
              min="0"
              max={Math.max(1, (rows || []).length - 1)}
              value={activeIndex}
              onChange={(e) => setActiveIndex(Number(e.target.value))}
              className="w-full h-1 bg-transparent appearance-none cursor-pointer accent-white focus:outline-none"
              style={{ WebkitAppearance: 'none' }}
            />
            <style>{`
          input[type=range]::-webkit-slider-thumb {
            height: 20px; width: 20px; border-radius: 50%; background: #ffffff;
            cursor: pointer; -webkit-appearance: none; margin-top: -6px;
            box-shadow: 0 0 15px rgba(0, 229, 255, 0.6); border: 2px solid #0f172a;
            transition: transform 0.12s cubic-bezier(0.16, 1, 0.3, 1);
          }
          input[type=range]::-webkit-slider-thumb:hover { transform: scale(1.2); }
        `}</style>
          </div>

        </div>

        {/* --- DYNAMIC METRIC DISPATCH PANEL --- */}
        <AnimatePresence mode="wait">
          {rows && rows[activeIndex] && (() => {
            const isLiFi = !!rows[activeIndex].highlight;
            const isFiber = rows[activeIndex].note?.toLowerCase().includes('fast') || rows[activeIndex].type?.toLowerCase().includes('fiber');

            const BadgeIcon = isLiFi ? Lightbulb : isFiber ? Orbit : Wifi;

            return (
              <motion.div
                key={activeIndex}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -12 }}
                transition={{ duration: 0.2 }}
                className={`w-full bg-slate-900/60 rounded-3xl border p-6 md:p-8 grid grid-cols-1 md:grid-cols-3 gap-6 items-center transition-all duration-300 ${rows[activeIndex].highlight
                  ? 'border-cyan-500/40 shadow-[0_0_40px_rgba(0,229,255,0.15)] bg-gradient-to-br from-slate-900/90 to-cyan-950/10'
                  : 'border-white/5'
                  }`}
              >
                {/* Identity Column */}
                <div className="space-y-1.5">
                  <span className="block text-[10px] font-mono uppercase tracking-widest text-slate-500 font-bold">Selected Protocol</span>
                  <h3 className="text-2xl font-black text-white tracking-tight">{rows[activeIndex].type}</h3>
                  <div className="pt-0.5">
                    <div className={`inline-flex items-center gap-1.5 px-3 py-1 rounded-md text-[11px] font-mono tracking-wide uppercase font-bold ${rows[activeIndex].highlight
                      ? 'bg-gradient-to-r from-[#00E5FF] to-[#00FF9D] text-slate-950 font-black shadow-[0_0_15px_rgba(0,255,157,0.4)]'
                      : isFiber
                        ? 'bg-indigo-500/20 text-indigo-300 border border-indigo-500/30'
                        : 'bg-slate-800 text-slate-400 border border-slate-700'
                      }`}>
                      <BadgeIcon size={12} strokeWidth={2.5} />
                      <span>
                        {rows[activeIndex].highlight ? 'Blazing LiFi' : isFiber ? 'Fiber Fast' : 'WiFi Slow'}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Performance Stats Column */}
                <div className="flex flex-col gap-4 py-4 md:py-0 md:px-6 border-y md:border-y-0 md:border-x border-white/5">
                  <div>
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">Tested Bandwidth</span>
                    <span className={`text-xl font-black ${rows[activeIndex].highlight ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#00E5FF] to-[#00FF9D]' : 'text-slate-100'}`}>
                      {rows[activeIndex].speed}
                    </span>
                  </div>
                  <div>
                    <span className="block text-[9px] font-mono uppercase tracking-wider text-slate-500 mb-0.5">Download Countdown Duration</span>
                    <span className={`text-xl font-black ${rows[activeIndex].highlight ? 'text-[#FF4D6D] drop-shadow-[0_0_10px_rgba(255,77,109,0.3)]' : 'text-slate-100'}`}>
                      {rows[activeIndex].time}
                    </span>
                  </div>
                </div>

                {/* Benchmark Insight Verdict Summary Column */}
                <div className="text-slate-400 text-sm font-medium leading-relaxed">
                  {rows[activeIndex].highlight
                    ? "Lumen Li-Fi channels secure internet signals across pure illumination spectrum waves, running completely unhindered by crowded local structural signals."
                    : "Legacy connectivity grids leverage crowded airwaves that yield significant signal decay profiles under standard modern heavy deployment loads."
                  }
                </div>

              </motion.div>
            );
          })()}
        </AnimatePresence>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 3 — AMBIENT INTELLIGENCE
───────────────────────────────────────────────────────────── */
function ConsciousHomeSection() {
  const conceptualPoints = [
    {
      lucide: Activity,
      title: 'Automatic Smart Lighting',
      sub: 'No More Light Switches',
      desc: "You never have to look for a light switch again. As you walk into a room, the lights turn on automatically at just the right brightness. Your smart devices connect instantly using invisible light beams without any setup. The house just knows what you want.",
    },
    {
      lucide: Eye,
      title: 'The 3D Virtual Living Room',
      sub: 'TV Screens are Old News',
      desc: "The TV is old news. When you put on a headset, the light from the ceiling sends ultra-fast internet straight to your eyes. There is zero lag or buffering. Games and videos appear right in front of you in 3D on your living room floor.",
    },
    {
      lucide: ShieldCheck,
      title: 'The Ultimate Safe Space',
      sub: 'Private Light Signal',
      desc: "Wi-Fi signals travel through walls, which means hackers can steal your data. But light cannot go through walls. Since your internet signal stays trapped inside the room, your private information is completely safe from the outside world.",
    },
    {
      lucide: Zap,
      title: 'Instant Conversations',
      sub: 'No More Waiting Around',
      desc: "Say goodbye to waiting for smart assistants to respond. Because of the super-fast light connection, your voice devices answer you the exact second you finish speaking. It feels like talking to a real person standing next to you.",
    }
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const AUTOROTATE_TIME = 6000;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % conceptualPoints.length);
    }, AUTOROTATE_TIME);
    return () => clearInterval(timer);
  }, [conceptualPoints.length]);

  return (
    <section
      className="py-20 text-slate-300 relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[900px] flex flex-col justify-center"
      id="conscious-home"
      style={{ backgroundImage: "url('/images/hero/bg3.png')" }}
    >
      {/* Dark section-wide background overlay for text readability */}
      {/* --- PARENT CONTAINER BLOCK START --- */}
      <section
        className="py-24 text-slate-300 relative overflow-hidden bg-cover bg-center bg-no-repeat min-h-[1000px] flex flex-col justify-center bg-[#030712]"
        id="conscious-home"
        style={{ backgroundImage: "url('/images/hero/bg3.png')" }}
      >
        {/* High density section deep back shadow overlay veil */}
        <div className="absolute inset-0 bg-[#020617]/75 pointer-events-none z-0" />

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">

          {/* --- UNIFIED CONTAINER TO MATCH SOURCE & DESTINATION COORDINATES --- */}
          <div className="relative w-full">

            {/* --- HEADER CHROME CARD WITH MOTION GLOW BORDER --- */}
            <div id="main-header-glow-card" className="w-full max-w-3xl mx-auto p-[2px] rounded-2xl relative z-20 mb-20 bg-[length:200%_200%] bg-gradient-to-r from-cyan-400 via-violet-600 to-cyan-400 animate-shimmer shadow-[0_0_30px_rgba(34,211,238,0.2)]">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full bg-[#050b14]/95 backdrop-blur-xl p-8 rounded-[14px] text-center"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
                  Welcome to the <span className="text-cyan-400">“Conscious Home”</span> Powered by Lumen LiFi.
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                  When you use light instead of slow Wi-Fi, your house feels alive. You do not need annoying apps or buttons. Everything connects instantly and perfectly.
                </p>
              </motion.div>
            </div>

            {/* --- SVG NETWORK DATA FLOW PATHWAY CONNECTION SYSTEM --- */}
            <svg className="absolute inset-0 pointer-events-none hidden lg:block z-10 w-full h-full">
              <defs>
                <linearGradient id="flowGradient">
                  <stop offset="0%" stopColor="#22d3ee" />
                  <stop offset="50%" stopColor="#8b5cf6" />
                  <stop offset="100%" stopColor="#22d3ee" />
                </linearGradient>
              </defs>

              <path className="network-path" id="path1" d="M640 120 C600 220 420 250 200 360" />
              <path className="network-path" id="path2" d="M640 120 C620 220 540 250 470 360" />
              <path className="network-path" id="path3" d="M640 120 C670 220 760 250 820 360" />
              <path className="network-path" id="path4" d="M640 120 C730 220 980 250 1090 360" />

              {/* Path 1 Energy Particles */}
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" repeatCount="indefinite"><mpath href="#path1" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="0.5s" repeatCount="indefinite"><mpath href="#path1" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="1s" repeatCount="indefinite"><mpath href="#path1" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="1.5s" repeatCount="indefinite"><mpath href="#path1" /></animateMotion></circle>

              {/* Path 2 Energy Particles */}
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" repeatCount="indefinite"><mpath href="#path2" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="0.5s" repeatCount="indefinite"><mpath href="#path2" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="1s" repeatCount="indefinite"><mpath href="#path2" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="1.5s" repeatCount="indefinite"><mpath href="#path2" /></animateMotion></circle>

              {/* Path 3 Energy Particles */}
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" repeatCount="indefinite"><mpath href="#path3" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="0.5s" repeatCount="indefinite"><mpath href="#path3" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="1s" repeatCount="indefinite"><mpath href="#path3" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="1.5s" repeatCount="indefinite"><mpath href="#path3" /></animateMotion></circle>

              {/* Path 4 Energy Particles */}
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" repeatCount="indefinite"><mpath href="#path4" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="0.5s" repeatCount="indefinite"><mpath href="#path4" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="1s" repeatCount="indefinite"><mpath href="#path4" /></animateMotion></circle>
              <circle r="4" fill="#22d3ee"><animateMotion dur="2s" begin="1.5s" repeatCount="indefinite"><mpath href="#path4" /></animateMotion></circle>
            </svg>

            {/* --- ORGANIC CONCEPT GRAPH MATRIX GRID STAGE --- */}
            <div className="space-y-8 relative w-full z-20">

              {/* ── TIER 1: TOP 4 PRIMARY GEOMETRIC SHAPES ROW (FIXED STRUCTURES) ── */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                {conceptualPoints.slice(0, 4).map((item, idx) => {
                  const isActive = activeIndex === idx;
                  const IconComponent = item.icon;

                  const premiumShapes = [
                    { borderRadius: "20px 80px 20px 80px" },
                    { clipPath: "polygon(0 12%,12% 0,88% 0,100% 12%,100% 88%,88% 100%,12% 100%,0 88%)" },
                    { clipPath: "polygon(0 12%,12% 0,88% 0,100% 12%,100% 88%,88% 100%,12% 100%,0 88%)" },
                    { borderRadius: "80px 20px 80px 20px" },
                    { borderRadius: "80px 80px 25px 25px" },
                    { borderRadius: "25px 25px 80px 80px" },
                    { borderRadius: "55% 45% 50% 50%" },
                    { borderRadius: "50% 30% 70% 40%" }
                  ];
                  const shapeStyle = premiumShapes[idx];

                  return (
                    <div key={idx} className="relative w-full group">
                      <div
                        className="relative p-[2px] overflow-hidden transition-all duration-300 w-full"
                        style={{
                          ...shapeStyle,
                          background: 'linear-gradient(90deg, #22d3ee, #8b5cf6, #22d3ee)',
                          transform: "none"
                        }}
                      >
                        {/* Flow Animation Inner Mask */}

                        <button
                          onClick={() => setActiveIndex(idx)}
                          className={`text-left p-7 w-full h-full min-h-[250px] relative z-10 flex flex-col justify-between transition-colors premium-glow-btn ${isActive ? 'bg-[#060c18]/95' : 'bg-[#08111f] hover:bg-[#070d1a]'
                            }`}
                          style={shapeStyle}
                        >
                          <div className="w-full space-y-3.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-mono text-slate-500 font-bold tracking-widest uppercase">{item.sub}</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
                            </div>
                            <div className="p-2 w-fit rounded-lg border bg-[#081726] border-cyan-500/30 text-cyan-300 transition-colors">
                              {IconComponent && <IconComponent className="w-4.5 h-4.5 stroke-[1.5]" />}
                            </div>
                            <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed font-light font-sans mt-3">{item.desc}</p>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

              {/* ── TIER 2: BOTTOM 3 FLUID ORGANIC SHAPES ROW ── */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-5xl mx-auto pt-2 items-center">
                {conceptualPoints.slice(4, 7).map((item, idx) => {
                  const globalIdx = idx + 4;
                  const isActive = activeIndex === globalIdx;
                  const IconComponent = item.icon;
                  const isMainMiddleCard = idx === 1;

                  const premiumShapes = [
                    { borderRadius: "20px 80px 20px 80px" },
                    { clipPath: "polygon(0 12%,12% 0,88% 0,100% 12%,100% 88%,88% 100%,12% 100%,0 88%)" },
                    { clipPath: "polygon(0 12%,12% 0,88% 0,100% 12%,100% 88%,88% 100%,12% 100%,0 88%)" },
                    { borderRadius: "80px 20px 80px 20px" },
                    { borderRadius: "80px 80px 25px 25px" },
                    { borderRadius: "25px 25px 80px 80px" },
                    { borderRadius: "55% 45% 50% 50%" },
                    { borderRadius: "50% 30% 70% 40%" }
                  ];
                  const shapeStyle = premiumShapes[globalIdx];

                  return (
                    <div key={globalIdx} className="relative w-full group">
                      {isMainMiddleCard && (
                        <div className="absolute bottom-0 left-0 w-52 h-52 bg-cyan-400/10 blur-3xl rounded-full pointer-events-none -z-10 animate-pulse" />
                      )}

                      <div
                        className="relative p-[2px] overflow-hidden transition-all duration-300 w-full"
                        style={{
                          ...shapeStyle,
                          background: 'linear-gradient(90deg, #22d3ee, #8b5cf6, #22d3ee)',
                          transform: "none"
                        }}
                      >
                        {/* Flow Animation Inner Mask */}
                        <div className="absolute inset-0 rounded-[inherit] overflow-hidden">
                          <div className="absolute inset-[-150%] border-flow" />
                        </div>

                        <button
                          onClick={() => setActiveIndex(globalIdx)}
                          className={`text-left p-7 w-full h-full min-h-[250px] relative z-10 flex flex-col justify-between transition-colors premium-glow-btn ${isActive ? 'bg-[#060c18]/95' : 'bg-[#08111f] hover:bg-[#070d1a]'
                            }`}
                          style={shapeStyle}
                        >
                          <div className="w-full space-y-3.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-mono text-slate-500 font-bold tracking-widest uppercase">{item.sub}</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
                            </div>
                            <div className="p-2 w-fit rounded-lg border bg-[#081726] border-cyan-500/30 text-cyan-300 transition-colors">
                              {IconComponent && <IconComponent className="w-4.5 h-4.5 stroke-[1.5]" />}
                            </div>
                            <h3 className="text-base font-bold text-white tracking-tight">{item.title}</h3>
                          </div>
                          <p className="text-[11px] text-slate-400 leading-relaxed font-light font-sans mt-3">{item.desc}</p>
                        </button>
                      </div>
                    </div>
                  );
                })}
              </div>

            </div>

            {/* --- BOTTOM SECTION MATRIX RUNNING RUNWAY FOOTER TEXT --- */}
            <div className="w-full text-center pt-16">
              <p className="text-[10px] font-mono tracking-widest text-slate-600 uppercase">
                THIS IS WHAT IT FEELS LIKE TO LIVE WITH LIGHT-SPEED INTERNET.
              </p>
            </div>

          </div>
        </div>
      </section>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 4 — RESIDENTIAL ASSETS SHOWCASE
───────────────────────────────────────────────────────────── */
function HomeFeaturesSection() {
  const premiumShowcase = [
    {
      title: "Zero-Lag Gaming",
      subtitle: "Say goodbye to lag spikes",
      desc: "Normal Wi-Fi bounces waves around the house, which causes lag and ruins your games. LiFi sends a straight beam of light to your device so your moves happen instantly. It is faster than plugging a cable into the wall.",
      img: gamingImg,
      badge: "Pure Light Connection",
      accent: "var(--lumen-blue)"
    },
    {
      title: "Smooth 4K & 8K Streaming",
      subtitle: "No more buffering videos",
      desc: "Every single light bulb sends its own fast internet beam. This means you can watch high-quality videos in the living room while someone else downloads a huge game upstairs, without anyone slowing down.",
      img: streamingImg,
      badge: "Ultra-Fast Signal",
      accent: "var(--lumen-teal)"
    },
    {
      title: "Connect Countless Devices",
      subtitle: "No network overload",
      desc: "Too many smart devices can easily slow down normal Wi-Fi. With LiFi's massive speed, you can connect hundreds of smart gadgets in one room and your internet will never get slow.",
      img: infiniteDevicesImg,
      badge: "No Signal Jams",
      accent: "var(--lumen-blue)"
    },
    {
      title: "Hidden Network Hardware",
      subtitle: "Invisible Setup",
      desc: "Stop trying to hide ugly routers with big antennas behind your furniture. The internet is built right inside your light bulbs. If the lights are on, you are connected.",
      img: invisibleInfraImg,
      badge: "Clean Ceiling Build",
      accent: "var(--lumen-cyan)"
    }
  ];

  return (
    <section className="py-24 section-wash-secondary">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-20 text-center max-w-3xl mx-auto">

          <h2 className="text-4xl font-black tracking-tight text-[var(--lumen-navy)] leading-tight">
            From basic internet to a fully connected life<br />
            <span className="text-gradient-lumen">
              Experience the next generation of wireless with Lumen Li-Fi.
            </span>
          </h2>
          <p className="text-sm md:text-base text-[var(--lumen-muted)] mt-4 font-mono font-bold uppercase tracking-widest text-[var(--lumen-blue)]">
            Leave old radio waves behind and move at the speed of light.
          </p>
        </motion.div>

        <div className="flex flex-col gap-24">
          {premiumShowcase.map((item, idx) => {
            const isEven = idx % 2 === 0;
            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 32 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-100px" }}
                transition={{ duration: 0.65 }}
                className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-10 lg:gap-16`}
              >
                <div className="w-full lg:w-1/2">
                  <div className="relative w-full aspect-video rounded-2xl overflow-hidden shadow-xl border bg-[#0D2240] border-[var(--lumen-border)] group">
                    <Image src={item.img} alt={item.title} fill sizes="(max-width: 1024px) 100vw, 600px" className="object-contain w-full h-full p-2 transition-transform duration-500 group-hover:scale-[1.01]" />
                  </div>
                </div>

                <div className="w-full lg:w-1/2 flex flex-col">
                  <span className="text-xs font-mono font-bold tracking-widest uppercase mb-2" style={{ color: item.accent }}>{item.subtitle}</span>
                  <h3 className="text-2xl sm:text-3xl font-black text-[var(--lumen-navy)] tracking-tight mb-4">{item.title}</h3>
                  <p className="text-sm sm:text-base leading-relaxed text-[var(--lumen-muted)]">{item.desc}</p>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 5 — ENTERPRISE INFRASTRUCTURE FORGE
───────────────────────────────────────────────────────────── */
function EnterpriseSection() {
  return (
    <section className="py-24 bg-[#0D2240] text-white relative overflow-hidden" id="enterprise">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--lumen-cyan)] blur-[140px]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[var(--lumen-cyan)] mb-2 block">Business Settings</span>
          <h2 className="text-4xl font-black tracking-tight mb-6 text-white">Super Safe for Work</h2>
          <p className="text-slate-300 leading-relaxed mb-6">Because light cannot travel through solid building walls, your data stays perfectly safe inside your office. No one outside can see your files, track your data, or mess with your network connection.</p>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-800/60 px-4 py-2 rounded-xl">
            🔒 Perfect Physical Safety Standard
          </div>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0A192F] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-2 text-center font-mono text-xs text- Grey">
          <div className="relative w-full h-full">
            <Image src={enterpriseImg} alt="Enterprise" fill />
          </div>

          <div className="text-[10px] text-cyan-400/50 mt-1">Fast Light Systems Ready</div>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 6 — COMMERCIAL ECOSYSTEM SECTORS
───────────────────────────────────────────────────────────── */
function EcosystemSection() {
  const sectors = [
    {
      id: 'corp',
      title: 'Holographic Boardroom',
      subtitle: 'Corporate Office Sectors',
      icon: Building2,
      desc: 'Make office teamwork better with fast light hubs. Show smooth 3D presentations, share files instantly, and remove all messy internet cables from the building.',
      img: corporateBoardroomImg,
      metric: 'Private Walls Protection',
    },
    {
      id: 'factory',
      title: 'Industrial Manufacturing Floors',
      subtitle: 'Heavy Machinery Automation',
      icon: Factory,
      desc: 'Keep factory robots running smoothly without any network problems. Light waves never get mixed up by big factory machines, sending data right where it needs to go.',
      img: manufacturingImg,
      metric: '0% Radio Interference',
    },
    {
      id: 'data',
      title: 'Next-Gen Data Centers',
      subtitle: 'Inter-Rack Optical Pipes',
      icon: Cpu,
      desc: 'Get rid of messy piles of internet cables by using fast beams of light between server racks. This keeps computer rooms cooler and makes them transfer files much faster.',
      img: datacenterImg,
      metric: 'Fast Core Node Matrix',
    },
    {
      id: 'school',
      title: 'Smart Schools & Campuses',
      subtitle: 'High-Density Classroom Networks',
      icon: GraduationCap,
      desc: 'Stop school internet from slowing down when all students go online at once. Every light bulb gives a direct connection straight down to each desk without any lag.',
      img: schoolImg,
      metric: 'Safe and Lag-Free Link',
    }
  ];

  const [activeTab, setActiveTab] = useState('corp');
  const current = sectors.find(s => s.id === activeTab) || sectors[0];

  return (
    <section className="py-24 section-wash-primary border-t border-b border-[var(--lumen-border)]" id="shop">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center max-w-2xl mx-auto mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 section-wash-secondary border border-[var(--lumen-border)] text-[var(--lumen-blue)]">
            🛒 Business Places
          </div>
          <h2 className="text-4xl font-black tracking-tight text-[var(--lumen-navy)]">Made for Businesses</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {sectors.map(s => {
            const Icon = s.icon;
            const isActive = s.id === activeTab;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all border shadow-sm"
                style={{
                  background: isActive ? '#0D2240' : 'var(--lumen-surface)',
                  color: isActive ? 'var(--lumen-cyan)' : 'var(--lumen-muted)',
                  borderColor: isActive ? '#0D2240' : 'var(--lumen-border)',
                }}
              >
                <Icon size={16} style={{ color: isActive ? 'var(--lumen-cyan)' : 'var(--lumen-blue)' }} />
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="card-surface rounded-3xl p-6 lg:p-10 shadow-xl flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--lumen-blue)] mb-2 block">{current.subtitle}</span>
            <h3 className="text-3xl font-black text-[var(--lumen-navy)] tracking-tight mb-4">Lumen for {current.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--lumen-muted)] mb-8">{current.desc}</p>
            <div className="inline-flex self-start px-4 py-2 rounded-xl text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/60">
              ✓ Core Features: {current.metric}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-video bg-[#0D2240] rounded-2xl overflow-hidden border border-[var(--lumen-border)]">
              <AnimatePresence mode="wait">
                <motion.div key={current.id} initial={{ opacity: 0, scale: 0.98 }} animate={{ opacity: 1, scale: 1 }} exit={{ opacity: 0, scale: 0.98 }} transition={{ duration: 0.4 }} className="relative w-full h-full">
                  <Image src={current.img} alt={current.title} fill sizes="(max-width: 1024px) 100vw, 600px" className="object-contain w-full h-full p-2" />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link href="/products" className="glow-blue inline-flex items-center gap-2 h-12 px-8 rounded-2xl text-white font-bold text-sm transition-all hover:scale-[1.03] hover:shadow-xl" style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
            View Production Catalog <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 7 — ANALYTICAL COUNTERS HOOK
───────────────────────────────────────────────────────────── */
function useCounter(targetValue, startTrigger, duration = 2000) {
  const [count, setCount] = useState(0);
  useEffect(() => {
    if (!startTrigger) return;
    let start = 0;
    const end = parseInt(targetValue);
    if (start === end) return;
    let incrementDuration = Math.floor(duration / end);
    let timer = setInterval(() => {
      start += 1;
      setCount(start);
      if (start === end) clearInterval(timer);
    }, incrementDuration);
    return () => clearInterval(timer);
  }, [targetValue, startTrigger]);
  return count;
}

/* ─────────────────────────────────────────────────────────────
   SECTION 8 — FINAL CALL TO ACTION
───────────────────────────────────────────────────────────── */
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
              <h2 className="text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05]">
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

/* ─────────────────────────────────────────────────────────────
   ROOT PAGE GLOBAL SYSTEM MODULE EXPORT
───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen antialiased font-sans transition-colors duration-300 bg-[var(--lumen-bg)] text-[var(--lumen-navy)]">
      <Head>
        <title>Lumen LiFi — Internet at the Speed of Light</title>
        <meta name="description" content="Lumen LiFi turns your everyday ceiling lights into a super-fast 10 Gbps internet connection. No Wi-Fi, no radio waves — just pure light-speed connectivity." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;900&family=JetBrains+Mono:wght@500;700&display=swap" rel="stylesheet" />
      </Head>

      <Header />

      <main className="flex-grow">
        <HeroSection />
        <SpeedTableSection />
        <ConsciousHomeSection />
        <HomeFeaturesSection />
        <EnterpriseSection />
        <EcosystemSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}