import { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Zap, Sparkles, Car, Trophy, Wifi } from 'lucide-react';

const columns = [
  {
    id: 'wifi',
    name: 'Wi-Fi',
    speed: '20 Mbps',
    time: '11 hr 23 min',
    HeaderIcon: Wifi,
    BarIcon: Wifi,
    heightPercent: 12,
    barGradient: 'from-orange-600 via-orange-500 to-amber-400',
    glowColor: 'rgba(249, 115, 22, 0.3)',
    textColor: 'text-orange-400',
    duration: 4.5,
    delay: 0.3,
  },
  {
    id: 'fiber',
    name: 'Fiber',
    speed: '1 Gbps',
    time: '13 min 20 sec',
    HeaderIcon: Car,
    BarIcon: Car,
    heightPercent: 48,
    barGradient: 'from-blue-600 via-blue-500 to-cyan-400',
    glowColor: 'rgba(59, 130, 246, 0.3)',
    textColor: 'text-blue-400',
    duration: 2.5,
    delay: 0.3,
  },
  {
    id: 'lifi',
    name: 'Li-Fi',
    speed: '10 Gbps+',
    time: '1 min 20 sec',
    HeaderIcon: Zap,
    BarIcon: Zap,
    heightPercent: 95,
    barGradient: 'from-cyan-500 via-teal-400 to-emerald-300',
    glowColor: 'rgba(0, 245, 255, 0.5)',
    textColor: 'text-cyan-300',
    duration: 1.2,
    delay: 0.3,
    isWinner: true,
  },
];

export default function SpeedTableSection() {
  const containerRef = useRef(null);
  const isInView = useInView(containerRef, { once: true, margin: '-50px' });

  return (
    <section
      className="relative w-full min-h-screen flex flex-col justify-center items-center overflow-hidden py-12 px-4 section-wash-dark text-white"
      id="speed-vertical"
    >
      <div className="absolute -top-40 left-1/2 -translate-x-1/2 h-96 w-[600px] rounded-full bg-[#00F5FF] blur-[160px] opacity-15 pointer-events-none" />
      <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-[#3B82F6] blur-[150px] opacity-10 pointer-events-none" />

      <div className="w-full max-w-4xl mx-auto relative z-10 flex flex-col justify-between h-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-6 md:mb-8"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs md:text-sm font-mono font-bold mb-3 bg-white/5 border border-white/10 text-cyan-400 shadow-[0_0_15px_rgba(0,245,255,0.15)]">
            <Zap size={14} className="animate-pulse" /> Live Performance Dashboard
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight mb-2">
            Download Race:{' '}
            <span className="bg-gradient-to-r from-[#00F5FF] via-[#3B82F6] to-[#FFD700] bg-clip-text text-transparent">
              100 GB 4K Movie
            </span>
          </h2>
          <p className="text-slate-300 max-w-xl mx-auto text-sm md:text-base">
            Watch bandwidth capacity in action as Li-Fi dominates standard transmission channels in real-time.
          </p>
        </motion.div>

        <div
          ref={containerRef}
          className="backdrop-blur-xl bg-slate-900/60 border border-white/10 rounded-3xl p-4 md:p-8 shadow-[0_25px_60px_rgba(0,0,0,0.5)] flex flex-col justify-between h-auto"
        >
          <div className="relative grid grid-cols-3 gap-3 md:gap-8 h-auto items-end px-2 md:px-6 pt-12 pb-2">
            <div className="absolute inset-x-0 top-12 bottom-12 flex flex-col justify-between pointer-events-none opacity-20 border-b border-white/10">
              <div className="border-b border-dashed border-white/30 w-full text-xs font-mono text-slate-400 pl-1">100% (100 GB)</div>
              <div className="border-b border-dashed border-white/30 w-full text-xs font-mono text-slate-400 pl-1">75%</div>
              <div className="border-b border-dashed border-white/30 w-full text-xs font-mono text-slate-400 pl-1">50%</div>
              <div className="border-b border-dashed border-white/30 w-full text-xs font-mono text-slate-400 pl-1">25%</div>
              <div className="w-full text-xs font-mono text-slate-400 pl-1">0%</div>
            </div>

            {columns.map((col) => {
              const HeaderIcon = col.HeaderIcon;
              const BarIcon = col.BarIcon;

              return (
                <div key={col.id} className="relative flex flex-col justify-end items-center z-10 group">
                  {col.isWinner && (
                    <motion.div
                      initial={{ opacity: 0, y: -20, scale: 0.5 }}
                      animate={isInView ? { opacity: 1, y: 0, scale: 1 } : {}}
                      transition={{ delay: col.duration + 0.2, type: 'spring', stiffness: 200 }}
                      className="absolute -top-14 flex flex-col items-center z-20"
                    >
                      <div className="relative">
                        <Trophy size={32} className="text-[#FFD700] drop-shadow-[0_0_15px_rgba(255,215,0,0.8)] animate-bounce" />
                        <Sparkles size={16} className="absolute -top-1 -right-2 text-cyan-300 animate-pulse" />
                      </div>
                      <span className="text-[10px] md:text-xs font-mono font-bold uppercase tracking-wider text-[#FFD700] bg-black/60 px-2 py-0.5 rounded-full border border-[#FFD700]/40 backdrop-blur-md">
                        Winner
                      </span>
                    </motion.div>
                  )}

                  <div className="mb-3 flex flex-col items-center gap-1">
                    <div className="p-1.5 md:p-2 rounded-xl bg-white/5 border border-white/10 text-slate-200 backdrop-blur-md shadow-sm">
                      <HeaderIcon size={18} />
                    </div>
                    <span className={`text-xs md:text-base font-black ${col.textColor}`}>{col.name}</span>
                  </div>

                  <div className="relative w-full max-w-[120px] h-72 md:h-96 bg-slate-950/60 rounded-2xl p-1.5 md:p-2 border border-white/10 flex items-end overflow-hidden shadow-inner">
                    <motion.div
                      initial={{ height: '0%' }}
                      animate={isInView ? { height: `${col.heightPercent}%` } : {}}
                      transition={{
                        duration: col.duration,
                        delay: col.delay,
                        ease: [0.16, 1, 0.3, 1],
                      }}
                      className={`w-full rounded-xl bg-gradient-to-t ${col.barGradient} relative flex flex-col justify-between items-center p-1.5 md:p-2`}
                      style={{ boxShadow: `0 0 25px ${col.glowColor}` }}
                    >
                      <div className="w-full h-1 bg-white/70 rounded-full blur-[1px]" />
                      {col.heightPercent > 30 && (
                        <div className="p-1.5 rounded-lg bg-black/20 backdrop-blur-xs text-white my-auto hidden md:block">
                          <BarIcon size={18} />
                        </div>
                      )}
                    </motion.div>
                  </div>

                  <div className="mt-3 text-center space-y-0.5">
                    <div className="text-xs md:text-base font-mono font-bold text-white tracking-tight">{col.speed}</div>
                    <div className="text-[10px] md:text-xs font-mono text-slate-400">{col.time}</div>
                  </div>
                </div>
              );
            })}
          </div>

          <div className="mt-6 pt-4 border-t border-white/5 text-center">
            <p className="text-[10px] md:text-xs font-mono text-slate-400">
              ⚡ <strong>Li-Fi transfers data via light waves</strong>, achieving multi-gigabit speeds instantly without spectrum congestion.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
