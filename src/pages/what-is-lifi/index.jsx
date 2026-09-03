import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import NetworkSimulatorExperiment from '../../components/NetworkSimulatorExperiment';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Activity,
  Lightbulb,
  CheckCircle2,
  ArrowRight,
  Shield,
  Radio,
  Globe,
  Cpu,
  Lock,
  Wifi,
  Sparkles,
  Play
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

/* ─────────────────────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: (i = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

export default function WhatIsLiFiPage() {
  const [tick, setTick] = useState(0);

  const quickFacts = [
    '💡 Radio Frequencies are congested.',
    '⚡ Light offers 1,000x data density.',
    '🔒 Photons do not penetrate solid walls.',
    '🚀 Fully integrated multi-gigabit ecosystem.',
  ];

  useEffect(() => {
    const t = setInterval(() => setTick(p => (p + 1) % quickFacts.length), 3000);
    return () => clearInterval(t);
  }, [quickFacts.length]);

  return (
    <div className="flex min-h-screen flex-col bg-slate-50 text-slate-900 antialiased font-sans selection:bg-cyan-500/20">
      <Head>
        <title>What is LiFi? Technology & Applications — Lumen LiFi</title>
        <meta
          name="description"
          content="Discover LiFi technology: a fast, reliable, and secure mobile wireless communications technology that uses light waves rather than radio frequencies to transmit data."
        />
      </Head>

      <Header />

      <main className="flex-grow pt-24 pb-16">
        {/* HERO & MAIN SECTION: SPLIT SCREEN LAYOUT */}
        <section className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-12 lg:gap-8">
            
            {/* LEFT COLUMN: Narrative & Content Structure */}
            <div className="flex flex-col justify-center lg:col-span-6 space-y-12">
              
              {/* Hero Header */}
              <div className="space-y-6">
                
                <motion.h1
                  custom={1}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="text-4xl font-extrabold tracking-tight sm:text-5xl lg:text-6xl text-slate-900"
                >
                  Wireless Data at the{' '}
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-600 to-cyan-500">
                    Speed of Light
                  </span>
                </motion.h1>

                <motion.p
                  custom={2}
                  variants={fadeUp}
                  initial="hidden"
                  animate="visible"
                  className="text-lg text-slate-600 leading-relaxed max-w-2xl"
                >
                  LiFi replaces radio frequency congestion with ultra-fast, highly secure optical transmissions. By harnessing light, it enables near-zero latency and physical isolation for critical communications.
                </motion.p>

                <div className="flex flex-wrap items-center gap-4 pt-2">
                  <Link
                    href="#how-it-works"
                    className="inline-flex items-center justify-center gap-2 rounded-xl bg-blue-600 px-6 py-3.5 text-sm font-semibold text-white shadow-md hover:bg-blue-700 transition-all active:scale-[0.98]"
                  >
                    Explore How It Works
                    <ArrowRight className="w-4 h-4" />
                  </Link>
                  <Link
                    href="#cta-final"
                    className="inline-flex items-center justify-center rounded-xl bg-white border border-slate-200 px-6 py-3.5 text-sm font-semibold text-slate-700 shadow-sm hover:bg-slate-50 hover:border-slate-300 transition-all"
                  >
                    Get Connected
                  </Link>
                </div>
              </div>

              {/* Step-by-Step Mechanism Breakdown */}
              <div id="how-it-works" className="space-y-6 pt-6 border-t border-slate-200">
                <div className="space-y-1">
                  <span className="text-xs font-bold tracking-wider uppercase text-blue-600">
                    Simplified Architecture
                  </span>
                  <h2 className="text-2xl font-bold text-slate-900">How LiFi Operates</h2>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      step: '01',
                      title: 'Optical Transmission',
                      desc: 'LED transmitters emit imperceptible high-speed light modulations carrying digital packets.',
                      icon: Lightbulb,
                    },
                    {
                      step: '02',
                      title: 'Photodiode Decoding',
                      desc: 'A specialized optical receiver catches light variations and decodes them back into high-speed binary data.',
                      icon: Cpu,
                    },
                    {
                      step: '03',
                      title: 'Instant Device Connection',
                      desc: 'Connected end-user devices experience low-latency network performance with zero RF interference.',
                      icon: Zap,
                    },
                  ].map((item) => (
                    <div
                      key={item.step}
                      className="group flex items-start gap-4 p-4 rounded-2xl bg-white border border-slate-200 shadow-sm hover:border-blue-300 hover:shadow-md transition-all"
                    >
                      <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                        <item.icon className="h-6 w-6" />
                      </div>
                      <div className="space-y-1">
                        <div className="flex items-center gap-2">
                          <span className="text-xs font-mono font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                            Step {item.step}
                          </span>
                          <h3 className="font-semibold text-slate-900">{item.title}</h3>
                        </div>
                        <p className="text-sm text-slate-600 leading-relaxed">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Key Features Matrix */}
              <div className="space-y-6 pt-6 border-t border-slate-200">
                <h2 className="text-2xl font-bold text-slate-900">Core Advantages</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="p-2.5 w-fit rounded-lg bg-emerald-50 text-emerald-600">
                      <ShieldCheck className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-slate-900">Physical Containment</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Light cannot leak through walls, preventing unauthorized external eavesdropping by default.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="p-2.5 w-fit rounded-lg bg-cyan-50 text-cyan-600">
                      <Radio className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-slate-900">Zero RF Interference</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Operates entirely outside RF spectrum, making it optimal for hospitals, aircraft, and hazardous zones.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="p-2.5 w-fit rounded-lg bg-indigo-50 text-indigo-600">
                      <Activity className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-slate-900">Massive Density</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Provides 1,000x greater spectrum bandwidth compared to saturated radio frequencies.
                    </p>
                  </div>

                  <div className="p-5 bg-white rounded-2xl border border-slate-200 shadow-sm space-y-2">
                    <div className="p-2.5 w-fit rounded-lg bg-amber-50 text-amber-600">
                      <Zap className="w-5 h-5" />
                    </div>
                    <h3 className="font-semibold text-slate-900">Ultra-Low Latency</h3>
                    <p className="text-xs text-slate-600 leading-relaxed">
                      Sub-millisecond data delivery ideal for real-time industrial automation and AR/VR applications.
                    </p>
                  </div>
                </div>
              </div>

            </div>

            {/* RIGHT COLUMN: Sticky Video & Interactive Demonstration Container */}
            <div className="lg:col-span-6">
              <div className="sticky top-28 space-y-6">
                
                {/* Main Visual / Video Simulator Frame */}
                <div className="overflow-hidden rounded-2xl bg-slate-900 border border-slate-200 shadow-2xl">
                  {/* Decorative Header Bar */}
                  <div className="flex items-center justify-between border-b border-slate-800 bg-slate-950/80 px-4 py-3 text-xs text-slate-400">
                    <div className="flex items-center gap-2">
                      <span className="h-2.5 w-2.5 rounded-full bg-red-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-amber-500/80" />
                      <span className="h-2.5 w-2.5 rounded-full bg-emerald-500/80" />
                      <span className="ml-2 font-mono text-[11px] text-slate-400">Optical Simulator</span>
                    </div>
                    <span className="inline-flex items-center gap-1.5 rounded-full bg-cyan-500/10 px-2.5 py-0.5 text-[10px] font-medium text-cyan-400 border border-cyan-500/20">
                      <span className="h-1.5 w-1.5 rounded-full bg-cyan-400 animate-ping" />
                      Live Feed
                    </span>
                  </div>

                  {/* Interactive / Video Container */}
                  <div className="relative aspect-video w-full bg-slate-950">
                    <NetworkSimulatorExperiment embedded />
                  </div>

                  {/* Context Overlay Footer */}
                  <div className="p-4 bg-slate-900 border-t border-slate-800 flex items-center justify-between">
                    <div>
                      <h4 className="text-xs font-semibold text-white">LiFi vs WiFi Transmission Dynamics</h4>
                      <p className="text-[11px] text-slate-400">Interactive simulation showing optical data isolation</p>
                    </div>
                    <div className="flex gap-2">
                      <span className="inline-flex items-center gap-1 rounded bg-slate-800 px-2 py-1 text-[10px] font-medium text-slate-300">
                        <Lock className="w-3 h-3 text-emerald-400" /> Air-Gapped
                      </span>
                    </div>
                  </div>
                </div>

                {/* Performance Comparison Highlights Card */}
                <div className="rounded-2xl bg-white border border-slate-200 p-6 shadow-sm space-y-4">
                  <h3 className="text-sm font-bold text-slate-900 uppercase tracking-wider">
                    Performance Metrics
                  </h3>
                  
                  <div className="grid grid-cols-2 gap-4 text-center">
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-xs text-slate-500 block mb-1">Optical Speed</span>
                      <span className="text-2xl font-extrabold text-blue-600">100+ Mbps</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">Gigabit-capable</span>
                    </div>
                    
                    <div className="p-3 rounded-xl bg-slate-50 border border-slate-100">
                      <span className="text-xs text-slate-500 block mb-1">Latency</span>
                      <span className="text-2xl font-extrabold text-cyan-600">&lt; 2 ms</span>
                      <span className="text-[10px] text-slate-400 block mt-0.5">Near-instant</span>
                    </div>
                  </div>

                  <div className="p-3 rounded-xl bg-blue-50/50 border border-blue-100 flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-blue-600 text-white shrink-0">
                      <Globe className="w-4 h-4" />
                    </div>
                    <p className="text-xs text-blue-900 leading-snug">
                      <strong>Future-Proof Connectivity:</strong> Designed to supplement 5G/6G infrastructure without consuming restricted RF bands.
                    </p>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </section>

        {/* CALL TO ACTION SECTION */}
        <section id="cta-final" className="mt-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="rounded-3xl bg-gradient-to-r from-blue-600 to-cyan-600 p-8 sm:p-12 text-white shadow-xl relative overflow-hidden">
            <div className="relative z-10 max-w-2xl space-y-4">
              <h2 className="text-3xl font-extrabold sm:text-4xl">
                Ready to Upgrade to Light-Based Wireless?
              </h2>
              <p className="text-blue-100 text-base leading-relaxed">
                Transform your network infrastructure with tailored LiFi solutions for enterprise, industrial, and high-security deployment.
              </p>
              <div className="pt-2 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3.5 text-sm font-semibold text-blue-600 shadow-sm hover:bg-blue-50 transition-all"
                >
                  Contact Sales Team
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}