import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import {
  Wifi,
  Sun,
  ShieldAlert,
  ShieldCheck,
  Unlock
} from 'lucide-react';

export default function NetworkSimulatorExperiment() {
  const [mode, setMode] = useState('wifi');
  const [hackStatus, setHackStatus] = useState('idle');
  const [userCount, setUserCount] = useState(14);

  const currentMetrics = mode === 'wifi'
    ? { leakage: 95, security: 18, penetration: 'YES', status: 'RF SIGNAL LEAKING' }
    : { leakage: 0, security: 100, penetration: 'BLOCKED', status: 'COMPLETELY SECURE' };

  const triggerHackChallenge = () => {
    setHackStatus('hacking');
    setTimeout(() => {
      setHackStatus(mode === 'wifi' ? 'success' : 'blocked');
    }, 2200);
  };

  useEffect(() => {
    if (mode === 'wifi') {
      const interval = setInterval(() => {
        setUserCount(prev => Math.max(8, Math.min(24, prev + (Math.random() > 0.5 ? 1 : -1))));
      }, 3000);
      return () => clearInterval(interval);
    }
  }, [mode]);

  return (
    <div className="w-full bg-gradient-to-br from-slate-900 via-slate-950 to-indigo-950 text-slate-100 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden p-6 sm:p-8 font-sans">

      {/* Header Controls */}
      <div className="flex flex-col md:flex-row items-center justify-between border-b border-slate-800/80 pb-6 mb-6 gap-4">
        <div>
          <div className="flex items-center gap-2">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
              <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-500"></span>
            </span>
            <h3 className="text-xl font-black tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-indigo-300">
              PHYSICAL LAYER NETWORK SIMULATOR
            </h3>
          </div>
          <p className="text-xs text-slate-400 mt-1">
            Visualizing physical spectrum bounds, containment mechanics, and perimeter threat vulnerabilities.
          </p>
        </div>

        {/* Mode Selector Switch */}
        <div className="flex items-center gap-2 bg-slate-900/90 p-1.5 rounded-2xl border border-slate-800">
          <button
            onClick={() => { setMode('wifi'); setHackStatus('idle'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs tracking-wider transition-all ${mode === 'wifi'
              ? 'bg-red-500/20 text-red-400 border border-red-500/40 shadow-lg shadow-red-500/10'
              : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Wifi className="w-4 h-4" />
            WiFi (2.4 / 5 GHz)
          </button>
          <button
            onClick={() => { setMode('lifi'); setHackStatus('idle'); }}
            className={`flex items-center gap-2 px-4 py-2 rounded-xl font-bold text-xs tracking-wider transition-all ${mode === 'lifi'
              ? 'bg-cyan-500/20 text-cyan-300 border border-cyan-500/40 shadow-lg shadow-cyan-500/10'
              : 'text-slate-400 hover:text-slate-200'
              }`}
          >
            <Sun className="w-4 h-4" />
            LiFi (Optical VLC)
          </button>
        </div>
      </div>

      {/* Main Grid Visual Stage */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">

        {/* Canvas Visualizer */}
        <div className="lg:col-span-8 bg-slate-950/80 rounded-2xl border border-slate-800 relative overflow-hidden min-h-[440px] backdrop-blur-md shadow-inner">

          {/* Overlay Diagnostics */}
          <div className="absolute top-4 left-4 z-20 pointer-events-none flex flex-col gap-2">
            <span className={`text-[10px] font-mono font-bold tracking-widest uppercase px-3 py-1 rounded-full border backdrop-blur-md shadow-sm ${mode === 'wifi'
              ? 'bg-red-950/60 border-red-500/40 text-red-300'
              : 'bg-cyan-950/60 border-cyan-500/40 text-cyan-300'
              }`}>
              MEDIUM: {mode === 'wifi' ? 'Omnidirectional RF Radiation' : 'Directional Optical Light Wave'}
            </span>
            {mode === 'wifi' && (
              <span className="text-[10px] font-mono bg-amber-950/60 border border-amber-500/40 text-amber-300 px-3 py-1 rounded-full animate-pulse">
                Network Load: {userCount} Active Contending Nodes
              </span>
            )}
          </div>

          {/* SVG Vector Drawing Engine */}
          <svg viewBox="0 0 800 420" className="w-full h-full select-none">
            <defs>
              {/* Glow Filters */}
              <filter id="glow-cyan" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              <filter id="glow-red" x="-30%" y="-30%" width="160%" height="160%">
                <feGaussianBlur stdDeviation="8" result="blur" />
                <feComposite in="SourceGraphic" in2="blur" operator="over" />
              </filter>

              {/* Dynamic Gradients */}
              <linearGradient id="optical-cone" x1="0" y1="0" x2="0" y2="1">
                <stop offset="0%" stopColor="#06b6d4" stopOpacity="0.8" />
                <stop offset="60%" stopColor="#0891b2" stopOpacity="0.25" />
                <stop offset="100%" stopColor="#0e7490" stopOpacity="0.0" />
              </linearGradient>

              {/* Concrete Pattern */}
              <pattern id="concrete-grid" width="12" height="12" patternUnits="userSpaceOnUse" patternTransform="rotate(45)">
                <line x1="0" y1="0" x2="0" y2="12" stroke="#334155" strokeWidth="1" />
              </pattern>

              {/* Office Area Clip Boundary */}
              <clipPath id="officeBoundary">
                <rect x="0" y="0" width="500" height="420" />
              </clipPath>
            </defs>

            {/* Architectural Grid Layer */}
            <g opacity="0.15">
              <path d="M0,60 L800,60 M0,120 L800,120 M0,180 L800,180 M0,240 L800,240 M0,300 L800,300 M0,360 L800,360" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
              <path d="M100,0 L100,420 M200,0 L200,420 M300,0 L300,420 M400,0 L400,420 M500,0 L500,420 M600,0 L600,420 M700,0 L700,420" stroke="#94A3B8" strokeWidth="1" strokeDasharray="4 4" />
            </g>

            {/* Room Boundary Labels */}
            <text x="250" y="402" fill="#475569" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="2">
              SECURE FACILITY INTERIOR
            </text>
            <text x="650" y="402" fill="#475569" fontSize="10" fontFamily="monospace" fontWeight="bold" textAnchor="middle" letterSpacing="2">
              UNTRUSTED EXTERIOR
            </text>

            {/* WIFI SPECIFIC: Omnidirectional Leaking Waves */}
            {mode === 'wifi' && (
              <g>
                {/* Expanding Concentric Pulsing Wave Rings */}
                <g transform="translate(180, 130)" fill="none" stroke="#ef4444" strokeWidth="1.5">
                  <motion.circle r={30} animate={{ r: [20, 480], opacity: [0.8, 0] }} transition={{ duration: 3.5, repeat: Infinity, ease: "easeOut" }} />
                  <motion.circle r={60} animate={{ r: [20, 480], opacity: [0.8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 0.8, ease: "easeOut" }} />
                  <motion.circle r={90} animate={{ r: [20, 480], opacity: [0.8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 1.6, ease: "easeOut" }} />
                  <motion.circle r={120} animate={{ r: [20, 480], opacity: [0.8, 0] }} transition={{ duration: 3.5, repeat: Infinity, delay: 2.4, ease: "easeOut" }} />
                </g>

                {/* RF Data Packet Flow Vectors */}
                <g fill="none" stroke="#f87171" strokeWidth="2" strokeDasharray="6 6">
                  {/* Inside Room Route */}
                  <motion.path d="M 180 130 Q 250 220 300 280" animate={{ strokeDashoffset: [40, 0] }} transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }} />

                  {/* Leaking Outside Through Wall Route */}
                  <motion.path d="M 180 130 C 350 140, 500 180, 670 230" opacity="0.8" animate={{ strokeDashoffset: [50, 0] }} transition={{ duration: 1.8, repeat: Infinity, ease: "linear" }} />
                </g>

                {/* Floating RF Packets */}
                {[...Array(5)].map((_, i) => (
                  <motion.circle
                    key={`rf-pkt-${i}`}
                    r="3"
                    fill="#ef4444"
                    animate={{
                      cx: [180, 500 + i * 35, 670],
                      cy: [130, 180 + i * 10, 230],
                      opacity: [0, 1, 0.4]
                    }}
                    transition={{
                      duration: 2.5,
                      repeat: Infinity,
                      delay: i * 0.5,
                      ease: "easeInOut"
                    }}
                  />
                ))}
              </g>
            )}

            {/* LIFI SPECIFIC: Visual Light Beams inside Office Boundary */}
            <g clipPath="url(#officeBoundary)">
              {mode === 'lifi' && (
                <g>
                  {/* Optical Cones */}
                  <polygon points="300 45, 180 320, 420 320" fill="url(#optical-cone)" />

                  {/* Surface Light Illumination Spot */}
                  <ellipse cx="300" cy="320" rx="120" ry="16" fill="#06b6d4" opacity="0.25" filter="url(#glow-cyan)" />

                  {/* Stream of Downward Light Photons */}
                  {[...Array(8)].map((_, i) => (
                    <motion.circle
                      key={`photon-${i}`}
                      r={i % 2 === 0 ? "2.5" : "1.5"}
                      fill="#67e8f9"
                      animate={{
                        cx: [300 + (i - 4) * 12, 300 + (i - 4) * 22],
                        cy: [45, 320],
                        opacity: [0, 0.9, 0]
                      }}
                      transition={{
                        duration: 1.2 + (i % 3) * 0.3,
                        repeat: Infinity,
                        delay: i * 0.2,
                        ease: "linear"
                      }}
                    />
                  ))}
                </g>
              )}
            </g>

            {/* Structural Concrete Wall Divider */}
            <g>
              <rect x="492" y="20" width="32" height="370" fill="#1e293b" rx="6" stroke="#475569" strokeWidth="2" />
              <rect x="492" y="20" width="32" height="370" fill="url(#concrete-grid)" rx="6" opacity="0.7" />
              <text x="508" y="205" fill="#94a3b8" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle" transform="rotate(90 508 205)" letterSpacing="2">
                OPAQUE BARRIER / WALL
              </text>
            </g>

            {/* Wall Absorption / Block Particle Effect */}
            {mode === 'lifi' && (
              <g transform="translate(492, 180)">
                <motion.circle cx="0" cy="0" r="16" fill="#06b6d4" opacity="0.3" filter="url(#glow-cyan)" animate={{ scale: [0.8, 1.4, 0.8], opacity: [0.2, 0.5, 0.2] }} transition={{ duration: 2, repeat: Infinity }} />
                <path d="M -10 -15 L -2 -2 L -10 10" stroke="#22d3ee" strokeWidth="2" fill="none" opacity="0.6" />
              </g>
            )}

            {/* --- HARDWARE & ENDPOINT NODES --- */}

            {/* 1. REALISTIC WI-FI ROUTER / MODEM */}
            <g transform="translate(180, 130)">
              {/* Antennas */}
              <rect x="-14" y="-28" width="3" height="24" rx="1.5" fill="#475569" />
              <rect x="11" y="-28" width="3" height="24" rx="1.5" fill="#475569" />
              <circle cx="-12.5" cy="-28" r="2" fill="#ef4444" className={mode === 'wifi' ? "animate-pulse" : ""} />
              <circle cx="12.5" cy="-28" r="2" fill="#ef4444" className={mode === 'wifi' ? "animate-pulse" : ""} />

              {/* Router Main Chassis */}
              <rect x="-24" y="-6" width="48" height="18" rx="4" fill="#0f172a" stroke={mode === 'wifi' ? '#ef4444' : '#475569'} strokeWidth="1.5" filter={mode === 'wifi' ? 'url(#glow-red)' : ''} />
              <rect x="-20" y="-2" width="40" height="3" rx="1" fill="#1e293b" />

              {/* Router Front LED Lights */}
              <circle cx="-16" cy="6" r="1.5" fill={mode === 'wifi' ? "#22c55e" : "#64748b"} />
              <circle cx="-11" cy="6" r="1.5" fill={mode === 'wifi' ? "#22c55e" : "#64748b"} />
              <circle cx="-6" cy="6" r="1.5" fill={mode === 'wifi' ? "#3b82f6" : "#64748b"} className={mode === 'wifi' ? "animate-ping" : ""} />
              <circle cx="-1" cy="6" r="1.5" fill={mode === 'wifi' ? "#ef4444" : "#64748b"} />

              <text x="0" y="26" fill="#94a3b8" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">WI-FI MODEM / ROUTER</text>
            </g>

            {/* 2. REALISTIC LIFI LUMINAIRE LIGHT FIXTURE */}
            <g transform="translate(300, 35)">
              {/* Ceiling Cable Mounts */}
              <line x1="-15" y1="-30" x2="-15" y2="0" stroke="#475569" strokeWidth="1.5" />
              <line x1="15" y1="-30" x2="15" y2="0" stroke="#475569" strokeWidth="1.5" />

              {/* Overhead LED Light Panel */}
              <rect x="-32" y="0" width="64" height="14" rx="3" fill="#0f172a" stroke={mode === 'lifi' ? '#22d3ee' : '#475569'} strokeWidth="1.5" filter={mode === 'lifi' ? 'url(#glow-cyan)' : ''} />
              {/* Emitting Diffuser Surface */}
              <rect x="-28" y="10" width="56" height="3" rx="1" fill={mode === 'lifi' ? '#a5f3fc' : '#334155'} />

              <text x="0" y="-8" fill="#94a3b8" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">LIFI CEILING PANEL</text>
            </g>

            {/* 3. REALISTIC AUTHORIZED LAPTOP ON DESK */}
            <g transform="translate(300, 280)">
              {/* Office Desk */}
              <rect x="-50" y="38" width="100" height="6" rx="2" fill="#334155" />
              <rect x="-42" y="44" width="5" height="30" fill="#1e293b" />
              <rect x="37" y="44" width="5" height="30" fill="#1e293b" />

              {/* Laptop Base / Keyboard Deck */}
              <polygon points="-28,38 28,38 24,30 -24,30" fill="#0f172a" stroke="#475569" strokeWidth="1" />
              {/* Trackpad */}
              <rect x="-5" y="34" width="10" height="3" rx="0.5" fill="#334155" />

              {/* Open Laptop Screen */}
              <rect x="-20" y="6" width="40" height="25" rx="3" fill="#0284c7" stroke={mode === 'lifi' ? '#38bdf8' : '#475569'} strokeWidth="1.5" filter={mode === 'lifi' ? 'url(#glow-cyan)' : ''} />
              {/* Screen Display Content Visual */}
              <rect x="-17" y="9" width="34" height="19" rx="1" fill="#0f172a" />
              <line x1="-12" y1="14" x2="2" y2="14" stroke="#38bdf8" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="-12" y1="18" x2="-3" y2="18" stroke="#f43f5e" strokeWidth="1.5" strokeLinecap="round" />
              <line x1="-12" y1="22" x2="8" y2="22" stroke="#4ade80" strokeWidth="1.5" strokeLinecap="round" />

              <text x="0" y="56" fill="#cbd5e1" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">AUTHORIZED LAPTOP</text>
            </g>

            {/* 4. REALISTIC UNAUTHORIZED / HACKER WORKSTATION */}
            <g transform="translate(670, 230)">
              {/* Dynamic Sniffing Ray Animation */}
              {hackStatus === 'hacking' && (
                <motion.line
                  x1="-20"
                  y1="10"
                  x2="-160"
                  y2="-70"
                  stroke="#ef4444"
                  strokeWidth="2"
                  strokeDasharray="4 4"
                  animate={{ strokeDashoffset: [20, 0] }}
                  transition={{ duration: 0.5, repeat: Infinity, ease: "linear" }}
                />
              )}

              {/* Exterior Desk */}
              <rect x="-40" y="28" width="80" height="5" rx="2" fill="#334155" />
              <rect x="-32" y="33" width="4" height="25" fill="#1e293b" />
              <rect x="28" y="33" width="4" height="25" fill="#1e293b" />

              {/* Hacker Laptop */}
              <polygon points="-22,28 22,28 18,22 -18,22" fill="#0f172a" stroke="#ef4444" strokeWidth="1" />
              <rect x="-16" y="2" width="32" height="20" rx="2" fill="#022c22" stroke={hackStatus === 'success' ? '#ef4444' : '#10b981'} strokeWidth="1.5" />

              {/* Terminal Screen Lines */}
              <rect x="-14" y="4" width="28" height="16" fill="#020617" />
              <text x="-11" y="10" fill="#22c55e" fontSize="5" fontFamily="monospace">&gt; sniffing...</text>
              {hackStatus === 'success' && <text x="-11" y="16" fill="#ef4444" fontSize="5" fontFamily="monospace" fontWeight="bold">&gt; DATA LEAK!</text>}

              {/* External Yagi High-Gain Directional Antenna */}
              <line x1="-28" y1="28" x2="-28" y2="5" stroke="#64748b" strokeWidth="2" />
              <line x1="-34" y1="8" x2="-22" y2="8" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="-32" y1="12" x2="-24" y2="12" stroke="#ef4444" strokeWidth="1.5" />
              <line x1="-30" y1="16" x2="-26" y2="16" stroke="#ef4444" strokeWidth="1.5" />

              {/* Status Indicator Badge */}
              <g transform="translate(0, 44)">
                {hackStatus === 'idle' && (
                  <text x="0" y="0" fill="#64748b" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">INACTIVE</text>
                )}
                {hackStatus === 'hacking' && (
                  <text x="0" y="0" fill="#f59e0b" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle" className="animate-pulse">SNIFFING SPECTRUM...</text>
                )}
                {hackStatus === 'success' && (
                  <g>
                    <rect x="-55" y="-10" width="110" height="16" rx="4" fill="#450a0a" stroke="#ef4444" strokeWidth="1" />
                    <text x="0" y="1" fill="#fca5a5" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">EXPLOIT: LEAK DETECTED</text>
                  </g>
                )}
                {hackStatus === 'blocked' && (
                  <g>
                    <rect x="-55" y="-10" width="110" height="16" rx="4" fill="#064e3b" stroke="#10b981" strokeWidth="1" />
                    <text x="0" y="1" fill="#a7f3d0" fontSize="8" fontFamily="monospace" fontWeight="bold" textAnchor="middle">BLOCKED BY BARRIER</text>
                  </g>
                )}
              </g>

              <text x="0" y="60" fill="#94a3b8" fontSize="9" fontFamily="monospace" fontWeight="bold" textAnchor="middle">UNAUTHORIZED NODE</text>
            </g>

          </svg>
        </div>

        {/* Real-Time Telemetry & Threat Matrix Panel */}
        <div className="lg:col-span-4 flex flex-col justify-between gap-4">

          {/* Diagnostic Metrics Display */}
          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-4 font-mono shadow-md">
            <div className="flex items-center justify-between border-b border-slate-800 pb-2">
              <span className="text-[11px] tracking-wider text-slate-400 font-bold uppercase flex items-center gap-1.5">
                <ShieldCheck className="w-3.5 h-3.5 text-cyan-400" /> Real-time Telemetry
              </span>
              <span className="text-[10px] text-slate-500">LAYER 1 DIAGNOSTICS</span>
            </div>

            {/* Signal Leakage Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Signal Leakage (Perimeter):</span>
                <span className={`font-bold ${mode === 'lifi' ? 'text-emerald-400' : 'text-red-400'}`}>
                  {currentMetrics.leakage}%
                </span>
              </div>
              <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <motion.div
                  className={`h-full rounded-full ${mode === 'lifi' ? 'bg-emerald-500 shadow-sm shadow-emerald-500' : 'bg-red-500 shadow-sm shadow-red-500'}`}
                  animate={{ width: `${currentMetrics.leakage}%` }}
                  transition={{ type: "spring", stiffness: 80 }}
                />
              </div>
            </div>

            {/* Containment Security Progress Bar */}
            <div className="space-y-1.5">
              <div className="flex justify-between text-xs">
                <span className="text-slate-400">Physical Isolation Level:</span>
                <span className={`font-bold ${mode === 'lifi' ? 'text-cyan-400' : 'text-amber-400'}`}>
                  {currentMetrics.security}% Containment
                </span>
              </div>
              <div className="h-2 w-full bg-slate-950 rounded-full overflow-hidden p-0.5 border border-slate-800">
                <motion.div
                  className={`h-full rounded-full ${mode === 'lifi' ? 'bg-cyan-400 shadow-sm shadow-cyan-400' : 'bg-amber-500'}`}
                  animate={{ width: `${currentMetrics.security}%` }}
                />
              </div>
            </div>

            {/* Structural Wall Penetration Badge */}
            <div className="p-3 bg-slate-950/80 rounded-xl border border-slate-800/80 flex items-center justify-between">
              <span className="text-xs text-slate-400">Wall Penetration:</span>
              <span className={`text-xs font-bold px-2 py-0.5 rounded ${mode === 'wifi' ? 'bg-red-500/20 text-red-400 border border-red-500/30' : 'bg-emerald-500/20 text-emerald-400 border border-emerald-500/30'
                }`}>
                {currentMetrics.penetration}
              </span>
            </div>

            {/* Status Indicator */}
            <div className="p-3 bg-slate-950 rounded-xl border border-slate-800 text-center">
              <p className="text-[10px] text-slate-500 uppercase tracking-widest">Security Containment Status</p>
              <p className={`text-xs font-bold mt-1 tracking-wider ${mode === 'lifi' ? 'text-cyan-300' : 'text-red-400'}`}>
                {currentMetrics.status}
              </p>
            </div>
          </div>

          {/* Threat Execution Trigger Box */}
          <div className="bg-slate-900/90 p-5 rounded-2xl border border-slate-800 space-y-3">
            <div className="flex items-center gap-2 text-[11px] font-mono text-slate-300 font-bold uppercase tracking-wider">
              <ShieldAlert className="w-4 h-4 text-amber-400" /> Perimeter Attack Vector
            </div>
            <p className="text-xs text-slate-400 leading-relaxed">
              Execute an eavesdropping exploit to test whether network signals traverse exterior structural walls.
            </p>
            <button
              onClick={triggerHackChallenge}
              disabled={hackStatus === 'hacking'}
              className={`w-full py-3 rounded-xl text-xs font-mono font-bold tracking-wider uppercase transition-all flex items-center justify-center gap-2 border ${hackStatus === 'hacking'
                ? 'bg-amber-500/10 text-amber-400 border-amber-500/30 cursor-not-allowed'
                : 'bg-gradient-to-r from-indigo-600 to-cyan-600 hover:from-indigo-500 hover:to-cyan-500 text-white border-cyan-400/30 shadow-lg shadow-indigo-500/20 active:scale-[0.98]'
                }`}
            >
              {hackStatus === 'hacking' ? (
                <>
                  <motion.div animate={{ rotate: 360 }} transition={{ duration: 1, repeat: Infinity, ease: "linear" }}>
                    <ShieldAlert className="w-4 h-4 text-amber-400" />
                  </motion.div>
                  Executing Perimeter Intercept...
                </>
              ) : (
                <>
                  <Unlock className="w-4 h-4" /> Simulate Perimeter Attack
                </>
              )}
            </button>
          </div>

        </div>
      </div>
    </div>
  );
}