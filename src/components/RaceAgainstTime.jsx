import React from 'react';
import { motion } from 'framer-motion';
import { Zap, Wifi, Orbit, Coffee, Rocket, Sparkles } from 'lucide-react';

export default function RaceAgainstTime() {
  const races = [
    {
      id: 'wifi',
      name: 'Old Wi-Fi',
      emoji: '🐢',
      icon: Wifi,
      speed: '20 Mbps',
      time: '11 hrs 23 mins',
      color: '#F97316',
      bgBar: 'bg-orange-500',
      label: 'Go make coffee ☕',
      // Multiplier determining width/progress inverse relation to speed
      progressWidth: '100%',
      duration: 12,
    },
    {
      id: 'fiber',
      name: 'Fiber Internet',
      emoji: '🚗',
      icon: Orbit,
      speed: '1 Gbps',
      time: '13 mins 20 sec',
      color: '#3B82F6',
      bgBar: 'bg-blue-500',
      label: 'Quick enough 🚀',
      progressWidth: '25%',
      duration: 4,
    },
    {
      id: 'lifi',
      name: 'Li-Fi',
      emoji: '⚡',
      icon: Zap,
      speed: '10 Gbps+',
      time: '1 min 20 sec',
      color: '#00F5FF',
      bgBar: 'bg-cyan-400',
      label: 'Done before you sit down ⚡',
      progressWidth: '5%',
      duration: 1.5,
    },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#071B34] text-white" id="speed">
      {/* --- 🌟 AMBIENT BACKGROUND GLOW BLOBS --- */}
      <div className="absolute -top-40 -left-40 h-96 w-96 rounded-full bg-[#00F5FF] blur-[150px] opacity-15 animate-pulse pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-[500px] w-[500px] rounded-full bg-[#3B82F6] blur-[180px] opacity-15 pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        {/* --- HERO HEADER --- */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-mono font-bold mb-4 bg-white/5 border border-white/10 text-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.15)]">
            <Zap size={12} className="animate-pulse" /> Download Race
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight mb-4 text-white">
            🏁 Race to Download a 2.5 Hour 4K Movie<br />
            <span className="bg-gradient-to-r from-[#00F5FF] via-[#3B82F6] to-[#FFD700] bg-clip-text text-transparent drop-shadow-[0_0_30px_rgba(0,245,255,0.2)]">
              Who finishes downloading a 100GB 4K movie first?
            </span>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-base">
            All three networks start moving simultaneously at <strong>GO!</strong> Watch Li-Fi blast to the finish while legacy connections struggle down the track.
          </p>
        </motion.div>

        {/* --- 🏎️ THE HIGH-SPEED SPEEDWAY TRACK PANEL --- */}
        <div className="backdrop-blur-xl bg-white/5 border border-white/10 rounded-3xl p-6 md:p-8 shadow-[0_20px_50px_rgba(0,0,0,0.4)] mb-8">

          {/* Race Track Top Utilities */}
          <div className="flex justify-between items-center text-[10px] font-mono font-bold text-slate-400 uppercase tracking-widest mb-8 border-b border-white/5 pb-4">
            <div>🚦 START</div>
            <div className="text-center bg-cyan-500/10 text-cyan-300 px-3 py-1 rounded-full border border-cyan-400/20 animate-pulse">
              3... 2... 1... GO! 🚀
            </div>
            <div className="text-[#FFD700] flex items-center gap-1">🏁 FINISH</div>
          </div>

          {/* Speedway Tracks Container */}
          <div className="space-y-12 relative">
            {[
              {
                id: 'wifi',
                name: 'Wi-Fi',
                emoji: '🐢',
                icon: Wifi,
                speed: '20 Mbps',
                time: '11 hr 23 min',
                color: '#FF8A00',
                bgBar: 'bg-orange-500',
                duration: 18,
                statusText: 'Still crawling... ☕',
              },
              {
                id: 'fiber',
                name: 'Fiber',
                emoji: '🚗',
                icon: Orbit,
                speed: '1 Gbps',
                time: '13 min 20 sec',
                color: '#3B82F6',
                bgBar: 'bg-blue-500',
                duration: 8,
                statusText: 'Moving steadily...',
                winnerText: '✓ Complete',
              },
              {
                id: 'lifi',
                name: 'Li-Fi',
                emoji: '⚡',
                icon: Zap,
                speed: '10 Gbps+',
                time: '1 min 20 sec',
                color: '#00F5FF',
                bgBar: 'bg-cyan-400',
                duration: 3,
                statusText: 'Blasting at light speed! 💥',
                winnerText: '✓ Download Complete 🏆',
                isWinner: true,
              },
            ].map((row) => {
              const IconComponent = row.icon;
              return (
                <div key={row.id} className="space-y-3">
                  {/* Track Meta Header */}
                  <div className="flex justify-between items-end px-1">
                    <div className="flex items-center gap-2">
                      <span className="text-2xl">{row.emoji}</span>
                      <span className="font-bold tracking-tight text-sm md:text-base">{row.name}</span>
                      <span className="text-xs font-mono px-2 py-0.5 rounded bg-white/5 text-slate-400 border border-white/10">
                        {row.speed}
                      </span>
                    </div>
                    <div className="text-xs font-mono font-bold text-slate-400">
                      {row.time}
                    </div>
                  </div>

                  {/* Visual Rail Container */}
                  <div className="relative h-12 bg-slate-950/70 rounded-xl flex items-center border border-white/5 overflow-hidden px-4">
                    {/* Lane Track Grid Line Pattern */}
                    <div className="absolute inset-x-0 h-[1px] border-t border-dashed border-white/10 pointer-events-none" />

                    {/* Bounded Wrapper Track Zone to prevent icon clipping near finish */}
                    <div className="absolute left-4 right-14 top-0 bottom-0 flex items-center">

                      {/* Dynamic Filling Tail Glow Behind Icon */}
                      <motion.div
                        className={`absolute left-0 h-1 rounded-full ${row.bgBar} filter blur-[1px]`}
                        initial={{ width: 0 }}
                        whileInView={{ width: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: row.duration, ease: 'linear' }}
                      />

                      {/* Moving Icon Object Layer */}
                      <motion.div
                        className="absolute"
                        initial={{ left: '0%' }}
                        whileInView={{ left: '100%' }}
                        viewport={{ once: true }}
                        transition={{ duration: row.duration, ease: 'linear' }}
                        style={{ x: '-50%' }}
                      >
                        <div
                          className="w-9 h-9 rounded-xl flex items-center justify-center border text-slate-950 font-black relative"
                          style={{
                            backgroundColor: row.color,
                            borderColor: row.color,
                            boxShadow: `0 0 20px ${row.color}BF`
                          }}
                        >
                          <IconComponent size={18} strokeWidth={2.5} />

                          {/* Confetti / Burst Particle Flash Effects for Winner */}
                          {row.isWinner && (
                            <>
                              <motion.span
                                className="absolute -inset-2 rounded-xl border border-cyan-400 opacity-0 pointer-events-none"
                                whileInView={{ scale: [1, 1.4, 1.1], opacity: [0, 0.8, 0] }}
                                viewport={{ once: true }}
                                transition={{ delay: row.duration, duration: 0.5 }}
                              />
                              <motion.span
                                className="absolute -top-1 -right-1 flex h-3 w-3"
                                initial={{ scale: 0 }}
                                whileInView={{ scale: [0, 1.2, 1] }}
                                viewport={{ once: true }}
                                transition={{ delay: row.duration, duration: 0.3 }}
                              >
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-300"></span>
                              </motion.span>
                            </>
                          )}
                        </div>
                      </motion.div>
                    </div>

                    {/* Fixed Goal Flags aligned right next to track finish limit */}
                    <div className="absolute right-4 text-sm text-[#FFD700] opacity-40 select-none z-10">🏁</div>
                  </div>

                  {/* Status Update Indicators */}
                  <div className="flex justify-between items-center px-1 text-xs font-mono">
                    <span className="text-slate-500">{row.statusText}</span>
                    {row.winnerText && (
                      <motion.span
                        initial={{ opacity: 0, scale: 0.95 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: row.duration, type: 'spring', stiffness: 120 }}
                        className={`font-bold uppercase tracking-wider ${row.isWinner ? 'text-cyan-400 drop-shadow-[0_0_12px_rgba(0,245,255,0.5)]' : 'text-blue-400'}`}
                      >
                        {row.winnerText}
                      </motion.span>
                    )}
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        {/* --- 🚀 SPEED METRIC INSIGHT VERDICT CARDS --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/60 rounded-2xl border border-cyan-500/20 p-5 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            <div className="w-12 h-12 rounded-xl bg-cyan-400/10 flex items-center justify-center text-cyan-400 shrink-0 text-xl font-bold">🚀</div>
            <div>
              <span className="block text-[10px] font-mono tracking-wider text-cyan-400 uppercase font-bold">Next-Gen Light Wave Metric</span>
              <h4 className="text-xl font-black text-white">8.5× Faster than Fiber</h4>
              <p className="text-xs text-slate-400 mt-0.5">By the time traditional fiber infrastructure finishes a single movie stream, Li-Fi could download 10 additional movies.</p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-slate-900/60 rounded-2xl border border-orange-500/20 p-5 flex items-center gap-4 shadow-[0_10px_30px_rgba(0,0,0,0.2)]"
          >
            <div className="w-12 h-12 rounded-xl bg-orange-400/10 flex items-center justify-center text-orange-400 shrink-0 text-xl font-bold">⚡</div>
            <div>
              <span className="block text-[10px] font-mono tracking-wider text-orange-400 uppercase font-bold">Legacy Protocol Decay</span>
              <h4 className="text-xl font-black text-white">500× Faster than Old Wi-Fi</h4>
              <p className="text-xs text-slate-400 mt-0.5">Li-Fi completely satisfies the full multi-gigabit file download package before standard home airwaves reach even 2% total progress.</p>
            </div>
          </motion.div>
        </div>

        {/* Technical Footnote */}
        <p className="text-[10px] text-center text-slate-500 font-mono max-w-2xl mx-auto leading-normal mt-8">
          * Relative track speed timelines have been proportionately compressed for presentation benchmarks (Li-Fi: 3s, Fiber: 8s, Wi-Fi: 18s). Network configuration architecture factors an ideal lab test file envelope size of 100 GB.
        </p>

      </div>
    </section>
  );
}
