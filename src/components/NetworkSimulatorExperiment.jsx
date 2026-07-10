import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

export default function NetworkSimulatorExperiment() {
  // State Modules
  const [mode, setMode] = useState('wifi'); // 'wifi' | 'lifi'
  const [hackStatus, setHackStatus] = useState('idle'); // 'idle' | 'hacking' | 'success' | 'blocked'
  const [userCount, setUserCount] = useState(14);

  // Updated Telemetry Metrics with your new light-theme metrics mapping context targets dynamically
  const currentMetrics = mode === 'wifi'
    ? { leakage: 95, security: 18, penetration: 'YES', status: 'RF SIGNAL LEAKING' }
    : { leakage: 0, security: 100, penetration: 'BLOCKED', status: 'COMPLETELY SECURE' };

  // Perimeter Threat Simulated Loop Trigger
  const triggerHackChallenge = () => {
    setHackStatus('hacking');
    setTimeout(() => {
      setHackStatus(mode === 'wifi' ? 'success' : 'blocked');
    }, 2200);
  };

  // Simulating minor ambient network load fluctuations
  useEffect(() => {
    if (mode === 'wifi') {
      const interval = setInterval(() => {
        setUserCount(prev => Math.max(8, Math.min(24, prev + (Math.random() > 0.5 ? 1 : -1))));
      }, 4000);
      return () => clearInterval(interval);
    }
  }, [mode]);

  return (
    <div className="w-full bg-gradient-to-br from-sky-50 via-white to-cyan-50 text-slate-900 rounded-3xl border border-slate-200 shadow-xl overflow-hidden p-6 sm:p-8">
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-200 pb-6 mb-6 gap-4">
        <div>
          <h3 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-sky-600 to-cyan-600">
            LIVE NETWORK SIMULATOR EXPERIMENT
          </h3>
          <p className="text-xs text-slate-600 mt-1">
            Toggle channels to visualize the dynamic physical differences between spectrum bounds.
          </p>
        </div>

        {/* Control Center Switch Module */}
        <div className="flex items-center gap-2 bg-slate-100 p-1.5 rounded-xl border border-slate-200">
          <button
            onClick={() => { setMode('wifi'); setHackStatus('idle'); }}
            className={`px-4 py-2 rounded-lg font-bold text-xs font-mono tracking-wider transition-all ${mode === 'wifi' ? 'bg-red-500/10 text-red-600 border border-red-200 shadow-sm' : 'text-slate-600 hover:text-slate-800'}`}
          >
            WiFi Radio Waves
          </button>
          <button
            onClick={() => { setMode('lifi'); setHackStatus('idle'); }}
            className={`px-4 py-2 rounded-lg font-bold text-xs font-mono tracking-wider transition-all ${mode === 'lifi' ? 'bg-cyan-500/10 text-cyan-600 border border-cyan-200 shadow-sm' : 'text-slate-600 hover:text-slate-800'}`}
          >
            LiFi Optical Light
          </button>
        </div>
      </div>

      {/* Simulation Environment Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Vector Stage Screen */}
        <div className="lg:col-span-8 bg-white rounded-2xl border border-slate-200 relative overflow-hidden min-h-[420px]">

          {/* Floating Contextual Diagnostics Map */}
          <div className="absolute top-4 left-4 z-10 pointer-events-none flex flex-col gap-1.5">
            <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-2 py-0.5 rounded border backdrop-blur-md ${mode === 'wifi' ? 'bg-red-50/80 border-red-200 text-red-600' : 'bg-cyan-50/80 border-cyan-200 text-cyan-600'}`}>
              SPECTRUM: {mode === 'wifi' ? 'Omnidirectional RF Leaking' : 'Localized Optical Cone'}
            </span>
            {mode === 'wifi' && (
              <span className="text-[9px] font-mono bg-amber-50/80 border border-amber-200 text-amber-700 px-2 py-0.5 rounded animate-pulse">
                Congestion Strain: {userCount} Users Competing for Bandwidth
              </span>
            )}
          </div>

          {/* Core Vector Environment Drawing */}
          <svg viewBox="0 0 800 420" className="w-full h-full select-none">
            <defs>
              <filter id="sim-glow-cyan" x="-20%" y="-20%" width="140%" height="140%">
                <feGaussianBlur stdDeviation="6" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>
              <linearGradient id="beam" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.5" />
                <stop offset="70%" stopColor="#22d3ee" stopOpacity="0.2" />
                <stop offset="100%" stopColor="#22d3ee" stopOpacity="0.0" />
              </linearGradient>

              {/* Pattern for Opaque Concrete Wall Texture */}
              <pattern id="concrete-wall" width="16" height="16" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="16" stroke="#94A3B8" strokeWidth="1" opacity="0.4" />
                <line x1="0" y1="0" x2="16" y2="0" stroke="#94A3B8" strokeWidth="1" opacity="0.4" />
              </pattern>

              {/* Clip Path to ensure no LiFi beams exist after the wall boundary */}
              <clipPath id="officeArea">
                <rect x="0" y="0" width="500" height="420" />
              </clipPath>
            </defs>

            {/* Room Architecture Background Grid Lines */}
            <g opacity="0.25">
              <path d="M0,50 L800,50 M0,100 L800,100 M0,150 L800,150 M0,200 L800,200 M0,250 L800,250 M0,300 L800,300 M0,350 L800,350 M0,400 L800,400" stroke="#CBD5E1" strokeWidth="1" />
              <path d="M100,0 L100,420 M200,0 L200,420 M300,0 L300,420 M400,0 L400,420 M500,0 L500,420 M600,0 L600,420 M700,0 L700,420" stroke="#CBD5E1" strokeWidth="1" />
            </g>

            {/* Structural Boundary Text Labels */}
            <text x="250" y="410" fill="#64748B" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">INSIDE OFFICE</text>
            <text x="660" y="410" fill="#64748B" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="1">OUTSIDE BUILDING</text>

            {/* WiFi Propagation State Elements */}
            {mode === 'wifi' && (
              <g>
                {/* Expanding Concentric Wavefront Radii */}
                <g id="wifi-waves" transform="translate(180, 150)" fill="none" stroke="#EF4444" strokeWidth="1.5">
                  <motion.circle r={40} animate={{ r: [20, 450], opacity: [1, 0] }} transition={{ duration: 4, repeat: Infinity, ease: "linear" }} />
                  <motion.circle r={80} animate={{ r: [20, 450], opacity: [1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 1, ease: "linear" }} />
                  <motion.circle r={120} animate={{ r: [20, 450], opacity: [1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 2, ease: "linear" }} />
                  <motion.circle r={160} animate={{ r: [20, 450], opacity: [1, 0] }} transition={{ duration: 4, repeat: Infinity, delay: 3, ease: "linear" }} />
                </g>

                {/* Direct Attenuated RF Leakage Paths going THROUGH the Wall */}
                {/* Before Wall Segment (Full Strength) */}
                <g fill="none" stroke="#EF4444" strokeWidth="3" opacity="1">
                  <motion.path d="M 180 150 C 300 140, 420 145, 500 150" strokeDasharray="8 8" animate={{ strokeDashoffset: [50, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                  <motion.path d="M 180 150 C 280 180, 400 200, 500 210" strokeDasharray="8 8" animate={{ strokeDashoffset: [50, 0] }} transition={{ duration: 2.3, repeat: Infinity, ease: "linear" }} />
                </g>
                {/* Attenuated Leakage after Wall Segment */}
                <g fill="none" stroke="#EF4444" strokeWidth="2.5" opacity="0.4">
                  <motion.path d="M 536 152 C 580 155, 630 165, 680 180" strokeDasharray="6 6" animate={{ strokeDashoffset: [50, 0] }} transition={{ duration: 2, repeat: Infinity, ease: "linear" }} />
                  <motion.path d="M 536 212 C 580 215, 630 220, 680 230" strokeDasharray="6 6" animate={{ strokeDashoffset: [50, 0] }} transition={{ duration: 2.3, repeat: Infinity, ease: "linear" }} />
                </g>
              </g>
            )}

            {/* LiFi Structured Optical Fields clipped cleanly inside Wall boundary */}
            <g clipPath="url(#officeArea)">
              {mode === 'lifi' && (
                <g>
                  {/* Three Structural Dynamic Light Cone Beams */}
                  <polygon points="120 40, 60 380, 180 380" fill="url(#beam)" />
                  <polygon points="260 40, 200 380, 320 380" fill="url(#beam)" />
                  <polygon points="400 40, 310 380, 490 380" fill="url(#beam)" />
                </g>
              )}
            </g>

            {/* Opaque Concrete Shield Wall Layout */}
            <g>
              <rect x="500" y="20" width="36" height="380" fill="#E2E8F0" stroke="#64748B" strokeWidth="2" rx="6" />
              <rect x="500" y="20" width="36" height="380" fill="url(#concrete-wall)" rx="6" />
              <text x="519" y="210" fill="#475569" fontSize="9" fontWeight="bold" textAnchor="middle" transform="rotate(90 519 210)" letterSpacing="1.5">
                OPAQUE WALL
              </text>
            </g>

            {/* Optical Barrier Absorbed/Blocked Spark Effect */}
            {mode === 'lifi' && (
              <g>
                <motion.circle cx="500" cy="170" r="20" fill="#22D3EE" animate={{ opacity: [0, 0.7, 0], scale: [1, 1.5, 2] }} transition={{ duration: 1.5, repeat: Infinity }} />
                <motion.circle cx="500" cy="270" r="16" fill="#22D3EE" animate={{ opacity: [0, 0.6, 0], scale: [1, 1.4, 1.8] }} transition={{ duration: 1.8, repeat: Infinity, delay: 0.4 }} />
              </g>
            )}

            {/* Redesigned Network Infrastructure Nodes */}
            {/* 1. Large 26px WiFi Access Point Router */}
            <g transform="translate(180, 150)">
              <circle cx="0" cy="0" r="22" fill="#F8FAFC" stroke={mode === 'wifi' ? '#EF4444' : '#94A3B8'} strokeWidth="2" />
              <text x="0" y="7" fontSize="22" textAnchor="middle">📶</text>
              <text x="0" y="34" fill="#475569" fontSize="8" fontWeight="bold" textAnchor="middle">AP ROUTER</text>
            </g>

            {/* 2. Ceiling Mounted Downlink LED Luminaire Assemblies */}
            <g transform="translate(260, 20)">
              <line x1="0" y1="0" x2="0" y2="20" stroke="#64748B" strokeWidth="2" />
              <circle cx="0" cy="20" r="14" fill="#F8FAFC" stroke={mode === 'lifi' ? '#06B6D4' : '#94A3B8'} strokeWidth="2" />
              <text x="0" y="25" fontSize="15" textAnchor="middle">💡</text>
              <text x="0" y="-4" fill="#475569" fontSize="8" fontWeight="bold" textAnchor="middle">LED LAMP</text>
            </g>

            {/* Connected Workplace Endpoint Machines */}
            {/* Authorized User Terminals */}
            <g transform="translate(320, 350)">
              <rect x="-20" y="-15" width="40" height="24" rx="3" fill="#F1F5F9" stroke={mode === 'lifi' ? '#06B6D4' : '#64748B'} strokeWidth="2" filter={mode === 'lifi' ? 'url(#sim-glow-cyan)' : ''} />
              <rect x="-16" y="-11" width="32" height="16" fill="#0F172A" />
              <path d="M-4,9 L4,9 L6,15 L-6,15 Z" fill="#475569" />
              <text x="0" y="26" fill="#475569" fontSize="8" fontWeight="bold" textAnchor="middle">AUTHORIZED USER</text>
            </g>

            {/* Threat Actor Outside Building Array */}
            <g transform="translate(680, 230)">
              {/* Threat Icon Group */}
              <g>
                <circle cx="0" cy="-20" r="14" fill="#F8FAFC" stroke={hackStatus === 'success' ? '#EF4444' : hackStatus === 'blocked' ? '#10B981' : '#64748B'} strokeWidth="2" />
                <text x="0" y="-13" fontSize="16" textAnchor="middle">👨‍💻</text>
              </g>

              {/* Context-Driven Threat State Visual Badge Response */}
              <g transform="translate(0, 12)">
                <rect x="-46" y="-4" width="92" height="14" rx="4" fill="#F1F5F9" stroke="#CBD5E1" strokeWidth="1" />
                {hackStatus === 'idle' && <text x="0" y="6" fill="#64748B" fontSize="8" fontWeight="bold" textAnchor="middle">Searching...</text>}
                {hackStatus === 'hacking' && <text x="0" y="6" fill="#D97706" fontSize="8" fontWeight="bold" textAnchor="middle" className="animate-pulse">Sniffing Link...</text>}
                {hackStatus === 'success' && <text x="0" y="6" fill="#EF4444" fontSize="8" fontWeight="bold" textAnchor="middle">WiFi Signal Found!</text>}
                {hackStatus === 'blocked' && <text x="0" y="6" fill="#10B981" fontSize="8" fontWeight="bold" textAnchor="middle">LiFi: No Signal</text>}
              </g>

              {/* Adaptive Threat Status Shield Overlays */}
              <AnimatePresence>
                {hackStatus === 'success' && (
                  <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    <circle cx="0" cy="-20" r="30" fill="none" stroke="#EF4444" strokeWidth="1.5" strokeDasharray="4 4" className="origin-center animate-[spin_15s_linear_infinite]" />
                    <rect x="-55" y="-55" width="110" height="18" rx="4" fill="#FEF2F2" stroke="#FCA5A5" strokeWidth="1" />
                    <text x="0" y="-43" fill="#B91C1C" fontSize="8" fontWeight="bold" textAnchor="middle">BREACH VIA WALLS</text>
                  </motion.g>
                )}
                {hackStatus === 'blocked' && (
                  <motion.g initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}>
                    {/* Security Shield SVG Component Rendering */}
                    <g transform="translate(-10, -56) scale(0.85)">
                      <motion.path
                        d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"
                        fill="#10B981"
                        stroke="#065F46"
                        strokeWidth="1"
                        animate={{ scale: [1, 1.15, 1] }}
                        transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }}
                        className="origin-center"
                      />
                    </g>
                    <rect x="-55" y="-76" width="110" height="16" rx="4" fill="#ECFDF5" stroke="#A7F3D0" strokeWidth="1" />
                    <text x="0" y="-65" fill="#047857" fontSize="8" fontWeight="bold" textAnchor="middle">WALL PENETRATION BLOCKED</text>
                  </motion.g>
                )}
              </AnimatePresence>
              <text x="0" y="42" fill="#475569" fontSize="8" fontWeight="bold" textAnchor="middle">UNAUTHORIZED USER</text>
            </g>
          </svg>
        </div>

        {/* Live Real-Time Telemetry Metrics Console Panel */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-4">
          <div className="bg-slate-50 p-5 rounded-2xl border border-slate-200 space-y-4 font-mono">
            <div className="text-[10px] tracking-wider text-slate-600 font-bold uppercase">
              Live Telemetry Output
            </div>

            {/* Speed / Signal Leakage Track */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600">Signal Leakage</span>
                <span className={`font-bold ${mode === 'lifi' ? 'text-emerald-600' : 'text-red-600'}`}>
                  {currentMetrics.leakage}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300">
                <motion.div
                  className={`h-full rounded-full ${mode === 'lifi' ? 'bg-emerald-500' : 'bg-red-500'}`}
                  animate={{ width: `${currentMetrics.leakage}%` }}
                  transition={{ type: "spring", stiffness: 70 }}
                />
              </div>
            </div>

            {/* Security Track */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600">Physical Isolation</span>
                <span className={`font-bold ${mode === 'lifi' ? 'text-emerald-600' : 'text-red-600'}`}>
                  {currentMetrics.security}% Containment
                </span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300">
                <motion.div
                  className={`h-full rounded-full ${mode === 'lifi' ? 'bg-emerald-500' : 'bg-red-600'}`}
                  animate={{ width: `${currentMetrics.security}%` }}
                />
              </div>
            </div>

            {/* Wall Penetration Tracker */}
            <div className="space-y-1">
              <div className="flex justify-between text-xs">
                <span className="text-slate-600">Wall Penetration</span>
                <span className={`font-bold ${mode === 'wifi' ? 'text-red-600' : 'text-emerald-600'}`}>
                  {currentMetrics.penetration}
                </span>
              </div>
              <div className="h-2 w-full bg-slate-200 rounded-full overflow-hidden p-0.5 border border-slate-300">
                <motion.div
                  className={`h-full rounded-full ${mode === 'wifi' ? 'bg-red-500' : 'bg-emerald-500'}`}
                  animate={{ width: mode === 'wifi' ? '100%' : '0%' }}
                />
              </div>
            </div>

            <div className="p-2.5 bg-white rounded-lg border border-slate-200 text-center">
              <p className="text-[10px] text-slate-600 uppercase">Security Status</p>
              <p className={`text-xs font-bold mt-0.5 ${mode === 'lifi' ? 'text-cyan-600' : 'text-amber-600'}`}>
                {currentMetrics.status}
              </p>
            </div>
          </div>

          {/* Active Penetration Signal Exploit Controller Tool */}
          <div className="bg-slate-50 p-4 rounded-2xl border border-slate-200 space-y-2.5">
            <div className="text-[10px] font-mono text-slate-600 font-bold uppercase tracking-wider">
              Threat Matrix Trigger
            </div>
            <p className="text-[11px] text-slate-600 leading-normal">
              Launch an immediate perimeter attack loop to test structural network containment bounds.
            </p>
            <button
              onClick={triggerHackChallenge}
              disabled={hackStatus === 'hacking'}
              className={`w-full py-2.5 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all border ${hackStatus === 'hacking'
                ? 'bg-amber-600/10 text-amber-600 border-amber-300/40 cursor-not-allowed'
                : 'bg-white text-slate-800 border-slate-300 hover:bg-slate-50 hover:border-slate-400 active:scale-[0.99] shadow-sm'
                }`}
            >
              {hackStatus === 'hacking' ? 'Intercepting Vector Loops...' : 'Simulate Perimeter Attack'}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}