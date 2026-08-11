import React, { useState, useEffect, useRef } from 'react';
import Image from 'next/image';
import { motion, AnimatePresence, useInView } from 'framer-motion';
import {
  ArrowRight,
  Check,
  Download,
  ShoppingCart,
  Star,
  Zap,
  Shield,
  Cable,
  Radio,
  Usb,
  Box,
} from 'lucide-react';

const KIT_COMPONENTS = [
  {
    id: 'router',
    order: 1,
    name: 'Router Box',
    fullName: 'LumenFi Router Box',
    sub: 'Enclosure & Intake Hub',
    icon: Box,
    timelineLabel: 'Router',
    duration: '30 sec',
    hotspot: { x: 16, y: 68 },
    zoom: { scale: 1.18, originX: 16, originY: 68 },
    specs: { speed: 10, latency: 2 },
    description: 'Central intake hub that receives your home fiber or broadband feed and routes it into the RevF optical stack.',
    benefits: ['Secure enclosure', 'Clean cable management', 'ISP-ready intake'],
    ports: ['Fiber / Ethernet WAN', 'RevF uplink', 'Status LED'],
    compatibility: ['All major ISPs', 'RevF Access Point', 'PoE+ Injector'],
  },
  {
    id: 'poe',
    order: 2,
    name: 'PoE Injector',
    fullName: 'Power over Ethernet Injector',
    sub: 'Single-Cable Energy Circuit',
    icon: Cable,
    timelineLabel: 'PoE',
    duration: '45 sec',
    hotspot: { x: 30, y: 55 },
    zoom: { scale: 1.14, originX: 30, originY: 55 },
    specs: { speed: 10, latency: 2 },
    description: 'Combines data and power on one line so the RevF controller runs without a separate power adapter.',
    benefits: ['One-cable install', 'IEEE 802.3at', 'Zero clutter'],
    ports: ['Data IN', 'PoE OUT', 'Power DC'],
    compatibility: ['RevF Access Point', 'Cat6 cable runs'],
  },
  {
    id: 'ap',
    order: 3,
    name: 'RevF Controller',
    fullName: 'LumenFi RevF Access Point',
    sub: 'Main Waveform Balanced Controller',
    icon: Radio,
    timelineLabel: 'Controller',
    duration: '1 min',
    hotspot: { x: 46, y: 42 },
    zoom: { scale: 1.2, originX: 46, originY: 42 },
    specs: { speed: 10, latency: 2 },
    description: 'The brain of the kit — balances optical waveforms and distributes light-speed data to ceiling antennas.',
    benefits: ['10 Gbps throughput', 'Sub-2 ms latency', 'Multi-antenna sync'],
    ports: ['PoE IN', 'Antenna ×2', 'Mgmt USB'],
    compatibility: ['Photonic Antennas', 'PoE+ Injector', 'Router Box'],
  },
  {
    id: 'antennas',
    order: 4,
    name: 'Photonic Antennas',
    fullName: 'Photonic Antennas (2)',
    sub: 'Ceiling Ambient Broadcast Nodes',
    icon: Zap,
    timelineLabel: 'Antenna',
    duration: '2 min',
    hotspot: { x: 64, y: 26 },
    hotspotSecondary: { x: 78, y: 22 },
    zoom: { scale: 1.16, originX: 70, originY: 28 },
    specs: { speed: 10, latency: 2 },
    description: 'Ceiling-mounted nodes that broadcast invisible infrared data cones across the room.',
    benefits: ['360° room coverage', 'No RF interference', 'Ambient lighting compatible'],
    ports: ['Optical link IN', 'Ceiling mount'],
    compatibility: ['RevF Controller', 'Standard junction boxes'],
  },
  {
    id: 'dongles',
    order: 5,
    name: 'USB LiFi Dongles',
    fullName: 'USB LiFi Dongles (2)',
    sub: 'Device Signal Decoders',
    icon: Usb,
    timelineLabel: 'Dongles',
    duration: '15 sec',
    hotspot: { x: 84, y: 50 },
    zoom: { scale: 1.15, originX: 84, originY: 50 },
    specs: { speed: 10, latency: 2 },
    description: 'Plug into any laptop or desktop to receive the optical beam — instant LiFi without replacing hardware.',
    benefits: ['Plug-and-play', 'USB-C ready', 'Private optical link'],
    ports: ['USB-C', 'Status LED'],
    compatibility: ['Windows', 'macOS', 'Linux'],
  },
];

const TIMELINE = KIT_COMPONENTS.map((c) => ({
  id: c.id,
  label: c.timelineLabel,
  title: c.fullName,
  desc:
    c.id === 'router'
      ? 'Plug your house internet feed into the LumenFi routing box.'
      : c.id === 'poe'
        ? 'Combine data and power into one cable run.'
        : c.id === 'ap'
          ? 'Connect the powered line to the RevF Access Point.'
          : c.id === 'antennas'
            ? 'Mount ceiling antennas to broadcast light cones.'
            : 'Plug dongles into laptops to catch optical signals.',
  duration: c.duration,
}));

const FLOW_ORDER = ['router', 'poe', 'ap', 'antennas', 'dongles'];

const SVG_NODES = {
  router: { x: 16, y: 68 },
  poe: { x: 30, y: 55 },
  ap: { x: 46, y: 42 },
  antennas: { x: 70, y: 24 },
  dongles: { x: 84, y: 50 },
};

const CONNECTION_PATH =
  'M 16 68 L 30 55 L 46 42 L 70 24 L 84 50';

const PHASE_NUMBERS = ['①', '②', '③', '④', '⑤'];

const stagger = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.08 } },
};

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.45, ease: [0.16, 1, 0.3, 1] } },
};

function CountUp({ value, suffix = '' }) {
  const [n, setN] = useState(0);
  useEffect(() => {
    let frame;
    const start = performance.now();
    const duration = 700;
    const tick = (now) => {
      const p = Math.min((now - start) / duration, 1);
      const eased = 1 - (1 - p) ** 3;
      setN(Math.round(value * eased));
      if (p < 1) frame = requestAnimationFrame(tick);
    };
    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [value]);
  return (
    <span>
      {n}
      {suffix}
    </span>
  );
}

function Hotspot({ x, y, label, active, highlighted, onSelect, onHover, onLeave }) {
  return (
    <button
      type="button"
      className="absolute z-20 -translate-x-1/2 -translate-y-1/2 group/hotspot"
      style={{ left: `${x}%`, top: `${y}%` }}
      onClick={onSelect}
      onMouseEnter={onHover}
      onMouseLeave={onLeave}
      aria-label={`Inspect ${label}`}
    >
      {(active || highlighted) && (
        <motion.span
          className="absolute inset-0 rounded-full bg-cyan-400/40"
          initial={{ scale: 0.8, opacity: 0.6 }}
          animate={{ scale: 2.2, opacity: 0 }}
          transition={{ duration: 1.4, repeat: Infinity, ease: 'easeOut' }}
          style={{ width: 28, height: 28, margin: '-14px 0 0 -14px' }}
        />
      )}
      <motion.span
        className={`relative flex items-center justify-center rounded-full border-2 shadow-lg transition-colors ${
          active || highlighted
            ? 'w-7 h-7 bg-cyan-500 border-white text-white'
            : 'w-5 h-5 bg-white/90 border-slate-300/80 text-slate-600 group-hover/hotspot:w-6 group-hover/hotspot:h-6'
        }`}
        animate={active || highlighted ? { scale: [1, 1.12, 1] } : { scale: 1 }}
        transition={{ duration: 1.2, repeat: active || highlighted ? Infinity : 0 }}
      >
        {(active || highlighted) && <span className="w-2 h-2 rounded-full bg-white" />}
      </motion.span>
      <AnimatePresence>
        {(active || highlighted) && (
          <motion.span
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 4 }}
            className="absolute left-1/2 -translate-x-1/2 top-full mt-2 whitespace-nowrap px-2.5 py-1 rounded-lg bg-slate-900/90 text-white text-[10px] font-mono font-bold tracking-wide backdrop-blur-sm border border-white/10 pointer-events-none"
          >
            {label}
          </motion.span>
        )}
      </AnimatePresence>
    </button>
  );
}

export default function RevFSystemKitExplorer() {
  const [activeId, setActiveId] = useState('router');
  const [hoveredId, setHoveredId] = useState(null);
  const timelineRef = useRef(null);
  const timelineInView = useInView(timelineRef, { once: true, margin: '-60px' });

  const active = KIT_COMPONENTS.find((c) => c.id === activeId) || KIT_COMPONENTS[0];
  const focusId = hoveredId || activeId;
  const focus = KIT_COMPONENTS.find((c) => c.id === focusId) || active;
  const activeIndex = FLOW_ORDER.indexOf(activeId);

  const glass =
    'bg-white/70 backdrop-blur-[20px] border border-white/30 shadow-lg shadow-slate-200/40';

  return (
    <motion.section
      id="concept-runbook"
      className={`${glass} rounded-3xl p-6 sm:p-10 space-y-10 scroll-mt-32`}
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: '-40px' }}
      variants={stagger}
    >
      {/* Header */}
      <motion.div variants={fadeUp} className="text-center space-y-2 pb-6 border-b border-white/40">
        <span className="inline-block text-[10px] font-mono font-bold tracking-[0.22em] text-[#1A6EBF] uppercase">
          Interactive Product Explorer
        </span>
        <h2 className="text-2xl sm:text-4xl font-black text-slate-950 tracking-tight">
          RevF System Kit
        </h2>
        <p className="text-sm text-slate-600 max-w-lg mx-auto">
          Understand every component in 30 seconds — hover hotspots or select a module to explore.
        </p>
      </motion.div>

      {/* Main grid: components + diagram */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 items-stretch">
        {/* Left — component cards */}
        <motion.div variants={fadeUp} className="lg:col-span-4 flex flex-col gap-2">
          <p className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase mb-1 px-1">
            Components
          </p>
          {KIT_COMPONENTS.map((item, idx) => {
            const isActive = activeId === item.id;
            const isPast = FLOW_ORDER.indexOf(item.id) < activeIndex;
            return (
              <motion.button
                key={item.id}
                type="button"
                onClick={() => setActiveId(item.id)}
                onMouseEnter={() => setHoveredId(item.id)}
                onMouseLeave={() => setHoveredId(null)}
                className={`relative w-full text-left p-4 rounded-2xl border transition-colors overflow-hidden ${glass} ${
                  isActive
                    ? 'border-[#1A6EBF]/50 ring-2 ring-[#1A6EBF]/20 shadow-[0_8px_32px_rgba(26,110,191,0.12)]'
                    : 'hover:border-[#1A6EBF]/30'
                }`}
                whileHover={{ x: 8, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 28 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="kit-active-glow"
                    className="absolute inset-0 bg-gradient-to-r from-[#1A6EBF]/8 to-cyan-500/5 pointer-events-none"
                  />
                )}
                <div className="relative flex items-start gap-3">
                  <div
                    className={`flex-shrink-0 w-9 h-9 rounded-xl flex items-center justify-center text-sm font-black ${
                      isActive
                        ? 'bg-gradient-to-br from-[#1A6EBF] to-[#00C2C7] text-white'
                        : isPast
                          ? 'bg-green-100 text-green-700'
                          : 'bg-slate-100 text-slate-600'
                    }`}
                  >
                    {isPast && !isActive ? <Check size={16} /> : item.order}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-center justify-between gap-2">
                      <p className={`text-sm font-bold truncate ${isActive ? 'text-[#1A6EBF]' : 'text-slate-900'}`}>
                        {item.name}
                      </p>
                      <motion.span animate={isActive ? { x: 4 } : { x: 0 }}>
                        <ArrowRight
                          size={14}
                          className={isActive ? 'text-[#1A6EBF]' : 'text-slate-400'}
                        />
                      </motion.span>
                    </div>
                    <p className="text-[10px] text-slate-500 uppercase mt-0.5 tracking-wider">{item.sub}</p>
                    {isActive && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: 'auto' }}
                        className="flex items-center gap-3 mt-2 pt-2 border-t border-slate-200/60"
                      >
                        <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-cyan-700">
                          <Zap size={10} />
                          <CountUp value={item.specs.speed} suffix=" Gbps" />
                        </span>
                        <span className="flex items-center gap-1 text-[10px] font-mono font-bold text-[#1A6EBF]">
                          <Shield size={10} />
                          <CountUp value={item.specs.latency} suffix=" ms" />
                        </span>
                        <span className="text-[9px] font-mono text-green-600 flex items-center gap-1">
                          <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse" />
                          Selected
                        </span>
                      </motion.div>
                    )}
                  </div>
                </div>
                {idx < KIT_COMPONENTS.length - 1 && (
                  <div className="absolute left-[22px] -bottom-2 w-px h-2 bg-gradient-to-b from-slate-300 to-transparent" />
                )}
              </motion.button>
            );
          })}
        </motion.div>

        {/* Right — interactive diagram */}
        <motion.div
          variants={fadeUp}
          className={`lg:col-span-8 relative min-h-[340px] sm:min-h-[400px] lg:min-h-[460px] rounded-2xl overflow-hidden ${glass}`}
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#F5FAF6] to-[#E8F4EC]" />

          {/* Zoomable product image */}
          <motion.div
            className="absolute inset-0"
            animate={{
              scale: focus.zoom.scale,
            }}
            style={{
              transformOrigin: `${focus.zoom.originX}% ${focus.zoom.originY}%`,
            }}
            transition={{ type: 'spring', stiffness: 120, damping: 22 }}
          >
            <Image
              src="/images/products/Lumenfi Product overview.png"
              alt="RevF System Kit diagram"
              fill
              loading="lazy"
              sizes="(max-width: 1024px) 100vw, 700px"
              className="object-contain p-4 sm:p-6"
            />
          </motion.div>

          {/* SVG connection lines */}
          <svg
            className="absolute inset-0 w-full h-full pointer-events-none z-10"
            viewBox="0 0 100 100"
            preserveAspectRatio="none"
          >
            <defs>
              <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                <stop offset="0%" stopColor="#1A6EBF" stopOpacity="0.3" />
                <stop offset="100%" stopColor="#00C2C7" stopOpacity="0.9" />
              </linearGradient>
              <filter id="glow">
                <feGaussianBlur stdDeviation="0.6" result="blur" />
                <feMerge>
                  <feMergeNode in="blur" />
                  <feMergeNode in="SourceGraphic" />
                </feMerge>
              </filter>
            </defs>
            <path
              d={CONNECTION_PATH}
              fill="none"
              stroke="rgba(148,163,184,0.35)"
              strokeWidth="0.35"
              vectorEffect="non-scaling-stroke"
            />
            <motion.path
              d={CONNECTION_PATH}
              fill="none"
              stroke="url(#lineGrad)"
              strokeWidth="0.55"
              strokeLinecap="round"
              filter="url(#glow)"
              vectorEffect="non-scaling-stroke"
              initial={{ pathLength: 0 }}
              animate={{ pathLength: (activeIndex + 1) / FLOW_ORDER.length }}
              transition={{ duration: 0.8, ease: 'easeInOut' }}
            />
            {FLOW_ORDER.slice(0, activeIndex + 1).map((id) => {
              const node = SVG_NODES[id];
              return (
                <motion.circle
                  key={id}
                  cx={node.x}
                  cy={node.y}
                  r="0.8"
                  fill="#00C2C7"
                  initial={{ scale: 0 }}
                  animate={{ scale: 1 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                />
              );
            })}
          </svg>

          {/* Hotspots */}
          {KIT_COMPONENTS.map((item) => (
            <Hotspot
              key={item.id}
              x={item.hotspot.x}
              y={item.hotspot.y}
              label={item.name}
              active={activeId === item.id}
              highlighted={hoveredId === item.id}
              onSelect={() => setActiveId(item.id)}
              onHover={() => setHoveredId(item.id)}
              onLeave={() => setHoveredId(null)}
            />
          ))}
          {KIT_COMPONENTS.find((c) => c.id === 'antennas')?.hotspotSecondary && (
            <Hotspot
              x={78}
              y={22}
              label="Antenna 2"
              active={activeId === 'antennas'}
              highlighted={hoveredId === 'antennas'}
              onSelect={() => setActiveId('antennas')}
              onHover={() => setHoveredId('antennas')}
              onLeave={() => setHoveredId(null)}
            />
          )}

          {/* Component preview panel */}
          <AnimatePresence mode="wait">
            <motion.div
              key={focusId}
              initial={{ opacity: 0, x: 24 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: 16 }}
              transition={{ type: 'spring', stiffness: 280, damping: 26 }}
              className={`absolute bottom-3 left-3 right-3 sm:left-auto sm:right-3 sm:max-w-xs p-4 rounded-xl ${glass} z-30`}
            >
              <p className="text-[10px] font-mono font-bold text-[#1A6EBF] uppercase tracking-wider mb-1">
                {focus.fullName}
              </p>
              <p className="text-xs text-slate-700 leading-relaxed mb-3">{focus.description}</p>
              <div className="grid grid-cols-2 gap-2 text-[10px]">
                <div>
                  <p className="font-mono font-bold text-slate-500 uppercase mb-1">Ports</p>
                  <ul className="space-y-0.5 text-slate-600">
                    {focus.ports.map((p) => (
                      <li key={p} className="flex items-center gap-1">
                        <Check size={9} className="text-green-600 shrink-0" /> {p}
                      </li>
                    ))}
                  </ul>
                </div>
                <div>
                  <p className="font-mono font-bold text-slate-500 uppercase mb-1">Benefits</p>
                  <ul className="space-y-0.5 text-slate-600">
                    {focus.benefits.map((b) => (
                      <li key={b} className="flex items-center gap-1">
                        <Check size={9} className="text-cyan-600 shrink-0" /> {b}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Installation timeline */}
      <motion.div variants={fadeUp} ref={timelineRef} className="space-y-5 pt-4 border-t border-white/40">
        <p className="text-[10px] font-mono font-bold tracking-widest text-slate-500 uppercase text-center">
          Installation Timeline
        </p>

        {/* Progress rail */}
        <div className="relative hidden sm:flex items-center justify-between px-4 max-w-3xl mx-auto">
          <div className="absolute left-8 right-8 top-1/2 h-0.5 bg-slate-200 -translate-y-1/2" />
          <motion.div
            className="absolute left-8 top-1/2 h-0.5 bg-gradient-to-r from-[#1A6EBF] to-[#00C2C7] -translate-y-1/2 origin-left"
            initial={{ scaleX: 0 }}
            animate={timelineInView ? { scaleX: (activeIndex + 1) / TIMELINE.length } : { scaleX: 0 }}
            style={{ width: 'calc(100% - 4rem)' }}
            transition={{ duration: 0.9, ease: 'easeInOut' }}
          />
          {TIMELINE.map((stage, idx) => {
            const lit = idx <= activeIndex;
            return (
              <button
                key={stage.id}
                type="button"
                onClick={() => setActiveId(stage.id)}
                className="relative z-10 flex flex-col items-center gap-1.5 group"
              >
                <motion.span
                  className={`w-3 h-3 rounded-full border-2 transition-colors ${
                    lit
                      ? 'bg-cyan-500 border-white shadow-[0_0_12px_rgba(0,194,199,0.6)]'
                      : 'bg-white border-slate-300 group-hover:border-[#1A6EBF]'
                  }`}
                  animate={lit && idx === activeIndex ? { scale: [1, 1.25, 1] } : {}}
                  transition={{ duration: 1.5, repeat: lit && idx === activeIndex ? Infinity : 0 }}
                />
                <span
                  className={`text-[9px] font-mono font-bold uppercase tracking-wide ${
                    lit ? 'text-[#1A6EBF]' : 'text-slate-400'
                  }`}
                >
                  {stage.label}
                </span>
              </button>
            );
          })}
        </div>

        {/* Phase cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
          {TIMELINE.map((stage, idx) => {
            const lit = idx <= activeIndex;
            const isCurrent = idx === activeIndex;
            return (
              <motion.button
                key={stage.id}
                type="button"
                onClick={() => setActiveId(stage.id)}
                className={`text-left p-4 rounded-2xl border transition-all ${glass} ${
                  isCurrent
                    ? 'border-[#1A6EBF]/40 ring-1 ring-[#1A6EBF]/20'
                    : lit
                      ? 'border-green-200/60'
                      : 'opacity-70 hover:opacity-100'
                }`}
                whileHover={{ y: -4, scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 400, damping: 25 }}
              >
                <div className="flex justify-between items-center mb-2">
                  <span
                    className={`text-lg font-black ${isCurrent ? 'text-[#1A6EBF]' : lit ? 'text-green-600' : 'text-slate-400'}`}
                  >
                    {lit && !isCurrent ? '✓' : PHASE_NUMBERS[idx]}
                  </span>
                  <span className="text-[9px] font-mono text-slate-500">{stage.duration}</span>
                </div>
                <h4 className="text-xs font-bold text-slate-950 font-mono leading-tight mb-1">
                  {stage.title.replace(/^LumenFi |\(2\)/g, '').slice(0, 28)}
                </h4>
                <p className="text-[10px] text-slate-600 leading-snug line-clamp-2">{stage.desc}</p>
              </motion.button>
            );
          })}
        </div>
      </motion.div>

      {/* CTA */}
      <motion.div
        variants={fadeUp}
        className={`rounded-2xl p-6 sm:p-8 ${glass} border-[#1A6EBF]/20`}
      >
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
          <div className="space-y-2">
            <div className="flex items-center gap-1 text-amber-500">
              {[1, 2, 3, 4, 5].map((s) => (
                <Star key={s} size={14} fill="currentColor" />
              ))}
              <span className="text-xs text-slate-500 ml-1 font-mono">4.9 · 128 reviews</span>
            </div>
            <h3 className="text-xl sm:text-2xl font-black text-slate-950">Buy RevF Kit</h3>
            <p className="text-3xl font-black text-[#1A6EBF]">
              $499
              <span className="text-sm font-normal text-slate-500 ml-2">Ships Worldwide</span>
            </p>
          </div>
          <div className="flex flex-col sm:flex-row gap-3 w-full md:w-auto">
            <motion.a
              href="https://rzp.io/rzp/vv8HFbfc"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl text-white font-bold text-sm tracking-wide shadow-lg glow-blue w-full sm:w-auto"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
              whileHover={{ scale: 1.03, boxShadow: '0 12px 40px rgba(0,194,199,0.35)' }}
              whileTap={{ scale: 0.98 }}
            >
              <ShoppingCart size={18} />
              Buy Now
              <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5 }}>
                <ArrowRight size={16} />
              </motion.span>
            </motion.a>
            <a
              href="#"
              className="inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl font-bold text-sm border-2 border-[#1A6EBF]/30 text-[#1A6EBF] bg-white/50 hover:bg-white/80 transition-colors w-full sm:w-auto"
            >
              <Download size={16} />
              View Datasheet
            </a>
          </div>
        </div>
      </motion.div>
    </motion.section>
  );
}
