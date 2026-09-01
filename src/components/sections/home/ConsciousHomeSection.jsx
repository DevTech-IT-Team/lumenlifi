import { useState } from 'react';
import Image from 'next/image';
import { Activity, Eye, ShieldCheck, Zap } from 'lucide-react';
import lifiImg from '../../../../public/images/lifi/conscioushero.jpeg';

const experiences = [
  {
    id: 'lighting',
    icon: Activity,
    title: 'Automatic Smart Lighting',
    sub: 'No More Light Switches',
    desc: 'Walk into a room and the lights adjust automatically. Your smart devices connect instantly through invisible light beams — no apps, no setup. The house simply knows what you need.',
    highlight: 'ceiling',
  },
  {
    id: 'vr',
    icon: Eye,
    title: 'The 3D Virtual Living Room',
    sub: 'TV Screens are Old News',
    desc: 'Put on a headset and ceiling light delivers ultra-fast data straight to your eyes. Zero lag. Games and videos render in 3D across your living room floor.',
    highlight: 'headset',
  },
  {
    id: 'safe',
    icon: ShieldCheck,
    title: 'The Ultimate Safe Space',
    sub: 'Private Light Signal',
    desc: 'Light cannot pass through walls. Your internet signal stays inside the room — completely isolated from hackers and neighbors on crowded Wi-Fi.',
    highlight: 'shield',
  },
  {
    id: 'voice',
    icon: Zap,
    title: 'Instant Conversations',
    sub: 'No More Waiting Around',
    desc: 'Voice assistants respond the instant you finish speaking. Light-speed connectivity makes every interaction feel like talking to someone in the same room.',
    highlight: 'voice',
  },
];

const stats = [
  { label: 'Peak Speed', display: 'Fast' },
  { label: 'Latency', display: '<2 ms' },
  { label: 'RF Interference', display: '0 RF' },
  { label: 'Signal Type', display: 'Private Light Signal' },
];

const highlightZones = {
  ceiling: { cx: 200, cy: 55, r: 28 },
  headset: { cx: 280, cy: 130, r: 22 },
  shield: { cx: 120, cy: 130, r: 22 },
  voice: { cx: 200, cy: 165, r: 24 },
};

function HomeIllustration({ activeHighlight }) {
  const active = highlightZones[activeHighlight] || highlightZones.ceiling;

  return (
    <svg viewBox="0 0 400 220" className="w-full max-w-2xl mx-auto h-auto" aria-hidden="true">
      <defs>
        <linearGradient id="coneGrad" x1="0%" y1="0%" x2="0%" y2="100%">
          <stop offset="0%" stopColor="#22d3ee" stopOpacity="0.45" />
          <stop offset="100%" stopColor="#22d3ee" stopOpacity="0" />
        </linearGradient>
      </defs>

      <path d="M160 55 L240 55 L280 170 L120 170 Z" fill="url(#coneGrad)" opacity="0.5" />

      <rect x="178" y="178" width="44" height="16" rx="3" fill="#0f172a" stroke="#22d3ee" strokeWidth="1" />
      <text x="200" y="189" textAnchor="middle" fill="#94a3b8" fontSize="7" fontFamily="monospace">
        ROUTER
      </text>

      {[
        { cx: 130, cy: 145 },
        { cx: 270, cy: 145 },
        { cx: 200, cy: 155 },
        { cx: 200, cy: 75 },
      ].map((d, i) => (
        <circle key={i} cx={d.cx} cy={d.cy} r="4" fill="#1e293b" stroke="rgba(34,211,238,0.5)" strokeWidth="1" />
      ))}

      <circle
        cx={active.cx}
        cy={active.cy}
        r={active.r}
        fill="none"
        stroke="#22d3ee"
        strokeWidth="1.5"
        opacity="0.85"
      />

      <path d="M200 194 L200 170" stroke="rgba(34,211,238,0.35)" strokeWidth="1" strokeDasharray="4 4" />
      <path d="M200 170 L130 145 M200 170 L270 145 M200 170 L200 155" stroke="rgba(34,211,238,0.2)" strokeWidth="1" />
      <path d="M200 75 L200 55" stroke="rgba(139,92,246,0.3)" strokeWidth="1" />
    </svg>
  );
}

function FeaturedCard({ item }) {
  const Icon = item.icon;
  return (
    <div
      key={item.id}
      className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-cyan-500/60 via-violet-500/40 to-cyan-500/60 shadow-[0_16px_48px_rgba(0,194,199,0.15)] transition-opacity duration-300"
    >
      <div className="relative rounded-[14px] bg-[#050b14]/92 p-8 sm:p-10 min-h-[280px] flex flex-col justify-between">
        <div className="space-y-4">
          <div className="flex items-start justify-between gap-4">
            <div>
              <span className="text-[10px] font-mono font-bold tracking-[0.2em] text-cyan-400/80 uppercase">
                {item.sub}
              </span>
              <h3 className="text-2xl sm:text-3xl font-black text-white tracking-tight mt-2 leading-tight">
                {item.title}
              </h3>
            </div>
            <div className="p-2.5 rounded-xl bg-cyan-500/10 border border-cyan-500/25 text-cyan-300">
              <Icon className="w-5 h-5" />
            </div>
          </div>
          <p className="text-sm sm:text-base text-slate-300 leading-relaxed max-w-xl font-light">{item.desc}</p>
        </div>
        <div className="flex items-center gap-2 mt-6 pt-4 border-t border-white/[0.06]">
          <Icon className="w-4 h-4 text-cyan-400" />
          <span className="text-[10px] font-mono text-slate-400 uppercase tracking-widest">Featured Experience</span>
        </div>
      </div>
    </div>
  );
}

function SecondaryCard({ item, index, onSelect }) {
  const Icon = item.icon;
  return (
    <button
      type="button"
      onClick={() => onSelect(index)}
      className="w-full text-left rounded-2xl p-[1px] bg-white/10 hover:bg-white/15 transition-colors duration-200"
    >
      <div className="rounded-[14px] bg-[#08111f]/85 opacity-85 hover:opacity-100 p-4 sm:p-5 min-h-[100px] flex items-center gap-4 transition-opacity duration-200">
        <div className="p-2 rounded-lg bg-white/5 border border-white/10 text-cyan-300 shrink-0">
          <Icon className="w-4 h-4" />
        </div>
        <div className="min-w-0 flex-1">
          <p className="text-[9px] font-mono text-slate-400 uppercase tracking-wider">{item.sub}</p>
          <p className="text-sm font-bold text-white truncate mt-0.5">{item.title}</p>
        </div>
        <span className="text-cyan-500/50 text-sm">→</span>
      </div>
    </button>
  );
}

export default function ConsciousHomeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const active = experiences[activeIndex];

  return (
    <section
      id="conscious-home"
      className="relative w-full overflow-hidden py-12 sm:py-20"
    >
      <div className="max-w-5xl mx-auto px-6">
        <Image src={lifiImg} alt="" loading="lazy" className="w-full h-auto rounded-3xl border border-white/10 shadow-2xl" sizes="100vw" />
      </div>

      {false && (
        <>
          <div className="absolute inset-0 bg-[#020617]/65 z-[1]" />
          <div
            className="absolute inset-0 z-[2] pointer-events-none"
            style={{
              background:
                'radial-gradient(ellipse 80% 50% at 50% 0%, rgba(26,110,191,0.28), transparent 60%), radial-gradient(ellipse 50% 40% at 85% 90%, rgba(0,194,199,0.1), transparent)',
            }}
          />
          <div className="absolute inset-0 lumen-grid-pattern-dark opacity-[0.06] pointer-events-none z-[3]" />

          <div className="relative z-10 w-full max-w-7xl mx-auto px-6">
            {/* Heading */}
            <div className="max-w-3xl mx-auto mb-14 sm:mb-16 p-[1px] rounded-2xl bg-gradient-to-br from-cyan-500/40 to-violet-500/30">
              <div className="rounded-[14px] bg-[#050b14]/80 px-6 sm:px-10 py-8 text-center">
                <h2 className="text-2xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white leading-[1.15]">
                  Welcome to the{' '}
                  <span className="text-cyan-400">&ldquo;Conscious Home&rdquo;</span>
                  <br className="hidden sm:block" />
                  <span className="text-white"> Powered by Lumen LiFi.</span>
                </h2>
                <p className="text-xs sm:text-sm text-slate-300 max-w-xl mx-auto mt-5 font-light leading-relaxed">
                  When you use light instead of slow Wi-Fi, your house feels alive — everything connects instantly, without apps or buttons.
                </p>
              </div>
            </div>


            {/* Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-8 mb-14 sm:mb-16">
              <div className="lg:col-span-8">
                <FeaturedCard item={active} />
              </div>
              <div className="lg:col-span-4 flex flex-col gap-3">
                {experiences.map((item, idx) =>
                  idx !== activeIndex ? (
                    <SecondaryCard
                      key={item.id}
                      item={item}
                      index={idx}
                      onSelect={setActiveIndex}
                    />
                  ) : null
                )}
              </div>
            </div>

            {/* Stats — static, no counters */}
            <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-10 sm:mb-12">
              {stats.map((s) => (
                <div
                  key={s.label}
                  className="text-center px-4 py-3 rounded-2xl bg-white/[0.04] border border-white/[0.08]"
                >
                  <p className="text-lg sm:text-xl font-black text-white tracking-tight">{s.display}</p>
                  <p className="text-[10px] font-mono text-slate-400 uppercase tracking-widest mt-1">{s.label}</p>
                </div>
              ))}
            </div>

            {/* Progress indicator — CSS only */}
            <div className="max-w-md mx-auto text-center space-y-3">
              <div className="flex items-center justify-center gap-2">
                {experiences.map((_, i) => (
                  <button
                    key={i}
                    type="button"
                    onClick={() => setActiveIndex(i)}
                    aria-label={`Experience ${i + 1}`}
                    className={`w-2.5 h-2.5 rounded-full border transition-colors duration-200 ${i === activeIndex ? 'bg-cyan-400 border-cyan-300' : 'bg-transparent border-slate-600 hover:border-slate-400'
                      }`}
                  />
                ))}
              </div>
              <div className="h-0.5 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-gradient-to-r from-cyan-400 to-violet-500 transition-[width] duration-300 ease-out"
                  style={{ width: `${((activeIndex + 1) / experiences.length) * 100}%` }}
                />
              </div>
              <p className="text-[10px] font-mono tracking-[0.2em] text-slate-400 uppercase">
                Experience {activeIndex + 1} of {experiences.length} — {active.title}
              </p>
            </div>
          </div>
        </>
      )}
    </section>
  );
}
