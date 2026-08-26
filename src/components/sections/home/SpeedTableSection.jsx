import { useRef, useState } from 'react';
import { motion, useInView } from 'framer-motion';

/* ─── Dataset ──────────────────────────────────────────────────────── */
const techs = [
  {
    id: 'wifi',
    label: 'Wi-Fi',
    speed: 300,
    speedLabel: '300 Mbps',
    time: 83,
    timeLabel: '1 hr 23 min',
    color: '#f97316',
    glow: 'rgba(249,115,22,0.55)',
    dotSize: 10,
  },
  {
    id: 'fiber',
    label: 'Fiber',
    speed: 1000,
    speedLabel: '1 Gbps',
    time: 13.3,
    timeLabel: '13 min 20 sec',
    color: '#38bdf8',
    glow: 'rgba(56,189,248,0.55)',
    dotSize: 12,
  },
  {
    id: 'lifi',
    label: 'Li-Fi',
    speed: 10000,
    speedLabel: '10 Gbps+',
    time: 1.3,
    timeLabel: '1 min 20 sec',
    color: '#00f5ff',
    glow: 'rgba(0,245,255,0.75)',
    dotSize: 16,
    isWinner: true,
  },
];

/* ─── Chart geometry ────────────────────────────────────────────────── */
const CHART_W = 560;
const CHART_H = 320;
const PAD = { top: 24, right: 32, bottom: 56, left: 68 };
const innerW = CHART_W - PAD.left - PAD.right;
const innerH = CHART_H - PAD.top - PAD.bottom;

const speedMin = 200, speedMax = 15000;
const timeMin  = 0.8, timeMax  = 100;

function logScale(value, min, max, outputSize) {
  const logMin = Math.log10(min);
  const logMax = Math.log10(max);
  const logVal = Math.log10(value);
  return ((logVal - logMin) / (logMax - logMin)) * outputSize;
}

function toChartXY(tech) {
  return {
    x: PAD.left + logScale(tech.speed, speedMin, speedMax, innerW),
    y: PAD.top  + innerH - logScale(tech.time, timeMin, timeMax, innerH),
  };
}

const speedTicks = [300, 1000, 10000];
const timeTicks  = [1, 5, 20, 80];

function xTick(speed) {
  return PAD.left + logScale(speed, speedMin, speedMax, innerW);
}
function yTick(time) {
  return PAD.top + innerH - logScale(time, timeMin, timeMax, innerH);
}

const labelOffset = {
  wifi:  { dx:  10, dy: -14 },
  fiber: { dx:  10, dy: -16 },
  lifi:  { dx:  12, dy: -18 },
};

/* ─── Component ─────────────────────────────────────────────────────── */
export default function SpeedTableSection() {
  const sectionRef = useRef(null);
  const isInView   = useInView(sectionRef, { once: true, margin: '-60px' });
  const [hovered, setHovered] = useState(null);

  return (
    <section
      className="page-screen relative w-full flex flex-col justify-center items-center overflow-hidden section-wash-navy text-white"
      id="speed-vertical"
    >
      {/* ── heading ── */}
      <motion.div
        initial={{ opacity: 0, y: 22 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.55, ease: 'easeOut' }}
        className="text-center mb-8 md:mb-10 px-4"
      >
        <h2 className="lumen-h2-light mb-2">
          Speed at a Glance:{' '}
          <span className="text-[var(--lumen-cyan)]">100 GB Download</span>
        </h2>
        <p className="lumen-body-sm-light max-w-xl mx-auto">
          A log-scale chart showing how transmission speed directly collapses
          download time — Li-Fi leads by orders of magnitude.
        </p>
      </motion.div>

      {/* ── chart card ── */}
      <div ref={sectionRef} className="w-full max-w-3xl mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="bg-slate-900/50 border border-slate-700/40 rounded-3xl p-5 md:p-8 backdrop-blur-sm"
        >
          {/* SVG chart */}
          <div className="w-full overflow-x-auto">
            <svg
              viewBox={`0 0 ${CHART_W} ${CHART_H}`}
              className="w-full"
              style={{ minWidth: 300 }}
              aria-label="Histogram comparing Wi-Fi, Fiber, and Li-Fi download speeds"
            >
              {/* ── defs ── */}
              <defs>
                {techs.map(t => (
                  <filter key={t.id} id={`glow-${t.id}`} x="-60%" y="-60%" width="220%" height="220%">
                    <feGaussianBlur stdDeviation="5" result="blur" />
                    <feMerge>
                      <feMergeNode in="blur" />
                      <feMergeNode in="SourceGraphic" />
                    </feMerge>
                  </filter>
                ))}
                <linearGradient id="lineGrad" x1="0%" y1="0%" x2="100%" y2="0%">
                  <stop offset="0%"   stopColor="#f97316" stopOpacity="0.7" />
                  <stop offset="50%"  stopColor="#38bdf8" stopOpacity="0.7" />
                  <stop offset="100%" stopColor="#00f5ff" stopOpacity="1" />
                </linearGradient>
              </defs>

              {/* ── horizontal grid lines ── */}
              {timeTicks.map(t => (
                <line
                  key={t}
                  x1={PAD.left} y1={yTick(t)}
                  x2={PAD.left + innerW} y2={yTick(t)}
                  stroke="rgba(148,163,184,0.12)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* ── vertical grid lines ── */}
              {speedTicks.map(s => (
                <line
                  key={s}
                  x1={xTick(s)} y1={PAD.top}
                  x2={xTick(s)} y2={PAD.top + innerH}
                  stroke="rgba(148,163,184,0.10)"
                  strokeWidth="1"
                  strokeDasharray="4 4"
                />
              ))}

              {/* ── axes ── */}
              <line
                x1={PAD.left} y1={PAD.top + innerH}
                x2={PAD.left + innerW} y2={PAD.top + innerH}
                stroke="rgba(148,163,184,0.30)" strokeWidth="1.5"
              />
              <line
                x1={PAD.left} y1={PAD.top}
                x2={PAD.left} y2={PAD.top + innerH}
                stroke="rgba(148,163,184,0.30)" strokeWidth="1.5"
              />

              {/* ── Y axis ticks & labels ── */}
              {timeTicks.map(t => (
                <g key={t}>
                  <line
                    x1={PAD.left - 5} y1={yTick(t)}
                    x2={PAD.left}     y2={yTick(t)}
                    stroke="rgba(148,163,184,0.4)" strokeWidth="1"
                  />
                  <text
                    x={PAD.left - 9} y={yTick(t) + 4}
                    textAnchor="end" fontSize="9"
                    fill="rgba(148,163,184,0.7)" fontFamily="monospace"
                  >
                    {t >= 60 ? `${Math.round(t / 60)}h` : `${t}m`}
                  </text>
                </g>
              ))}

              {/* ── X axis ticks & labels ── */}
              {speedTicks.map(s => (
                <g key={s}>
                  <line
                    x1={xTick(s)} y1={PAD.top + innerH}
                    x2={xTick(s)} y2={PAD.top + innerH + 5}
                    stroke="rgba(148,163,184,0.4)" strokeWidth="1"
                  />
                  <text
                    x={xTick(s)} y={PAD.top + innerH + 18}
                    textAnchor="middle" fontSize="9"
                    fill="rgba(148,163,184,0.7)" fontFamily="monospace"
                  >
                    {s >= 1000 ? `${s / 1000}G` : `${s}M`}
                  </text>
                </g>
              ))}

              {/* ── axis labels ── */}
              <text
                x={PAD.left + innerW / 2} y={CHART_H - 4}
                textAnchor="middle" fontSize="10"
                fill="rgba(148,163,184,0.55)" fontFamily="monospace"
              >
                Speed (log scale, bps)
              </text>
              <text
                x={14} y={PAD.top + innerH / 2}
                textAnchor="middle" fontSize="10"
                fill="rgba(148,163,184,0.55)" fontFamily="monospace"
                transform={`rotate(-90, 14, ${PAD.top + innerH / 2})`}
              >
                Download Time (log)
              </text>

              {/* ── connecting gradient line ── */}
              {isInView && (() => {
                const pts = techs.map(toChartXY);
                const d = pts.map((p, i) => `${i === 0 ? 'M' : 'L'} ${p.x} ${p.y}`).join(' ');
                return (
                  <motion.path
                    d={d}
                    fill="none"
                    stroke="url(#lineGrad)"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeDasharray="400"
                    strokeDashoffset={400}
                    animate={{ strokeDashoffset: 0 }}
                    transition={{ duration: 1.4, delay: 0.4, ease: 'easeInOut' }}
                    opacity="0.6"
                  />
                );
              })()}

              {/* ── horizontal drop reference lines ── */}
              {isInView && techs.map((tech, i) => {
                const { x, y } = toChartXY(tech);
                return (
                  <motion.line
                    key={tech.id + '-hline'}
                    x1={PAD.left} y1={y} x2={x} y2={y}
                    stroke={tech.color} strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity={0}
                    animate={{ opacity: hovered === null || hovered === tech.id ? 0.35 : 0.08 }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                  />
                );
              })}

              {/* ── vertical drop reference lines ── */}
              {isInView && techs.map((tech, i) => {
                const { x, y } = toChartXY(tech);
                return (
                  <motion.line
                    key={tech.id + '-vline'}
                    x1={x} y1={PAD.top + innerH} x2={x} y2={y}
                    stroke={tech.color} strokeWidth="1"
                    strokeDasharray="4 3"
                    opacity={0}
                    animate={{ opacity: hovered === null || hovered === tech.id ? 0.35 : 0.08 }}
                    transition={{ duration: 0.7, delay: 0.3 + i * 0.2 }}
                  />
                );
              })}

              {/* ── dots + labels ── */}
              {techs.map((tech, i) => {
                const { x, y } = toChartXY(tech);
                const isHov = hovered === tech.id;
                return (
                  <motion.g
                    key={tech.id}
                    style={{ cursor: 'pointer' }}
                    onMouseEnter={() => setHovered(tech.id)}
                    onMouseLeave={() => setHovered(null)}
                  >
                    {/* pulse ring */}
                    {isInView && (
                      <motion.circle
                        cx={x} cy={y} r={tech.dotSize + 6}
                        fill="none"
                        stroke={tech.color}
                        strokeWidth="1.5"
                        opacity={0}
                        animate={
                          isHov || tech.isWinner
                            ? { opacity: [0, 0.5, 0], r: [tech.dotSize + 4, tech.dotSize + 14, tech.dotSize + 4] }
                            : { opacity: 0 }
                        }
                        transition={
                          isHov || tech.isWinner
                            ? { duration: 1.8, repeat: Infinity, ease: 'easeOut' }
                            : {}
                        }
                      />
                    )}

                    {/* main dot */}
                    {isInView && (
                      <motion.circle
                        cx={x} cy={y} r={0}
                        fill={tech.color}
                        animate={{ r: isHov ? tech.dotSize + 3 : tech.dotSize }}
                        transition={
                          isHov
                            ? { duration: 0.2 }
                            : { duration: 0.5, delay: 0.5 + i * 0.25, ease: [0.34, 1.56, 0.64, 1] }
                        }
                        style={{ filter: `drop-shadow(0 0 8px ${tech.glow})` }}
                      />
                    )}

                    {/* text labels */}
                    {isInView && (
                      <motion.g
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.4, delay: 0.8 + i * 0.25 }}
                      >
                        <text
                          x={x + labelOffset[tech.id].dx}
                          y={y + labelOffset[tech.id].dy}
                          fontSize="11" fontWeight="700"
                          fill={tech.color} fontFamily="monospace"
                        >
                          {tech.label}
                        </text>
                        <text
                          x={x + labelOffset[tech.id].dx}
                          y={y + labelOffset[tech.id].dy + 12}
                          fontSize="9"
                          fill="rgba(203,213,225,0.75)" fontFamily="monospace"
                        >
                          {tech.speedLabel}
                        </text>
                      </motion.g>
                    )}
                  </motion.g>
                );
              })}
            </svg>
          </div>

          {/* ── stat legend cards ── */}
          <div className="mt-6 grid grid-cols-3 gap-3">
            {techs.map((tech, i) => (
              <motion.div
                key={tech.id}
                initial={{ opacity: 0, y: 14 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.45, delay: 1.1 + i * 0.12 }}
                onMouseEnter={() => setHovered(tech.id)}
                onMouseLeave={() => setHovered(null)}
                className="relative rounded-xl p-3 md:p-4 cursor-pointer transition-all duration-300"
                style={{
                  background: hovered === tech.id
                    ? `linear-gradient(135deg, ${tech.color}18, ${tech.color}08)`
                    : 'rgba(15,23,42,0.55)',
                  border: `1px solid ${hovered === tech.id ? tech.color + '55' : 'rgba(148,163,184,0.12)'}`,
                  boxShadow: hovered === tech.id ? `0 0 18px ${tech.glow}` : 'none',
                }}
              >
                {tech.isWinner && (
                  <div
                    className="absolute -top-2.5 left-1/2 -translate-x-1/2 text-[9px] md:text-[10px] font-black px-2 py-0.5 rounded-full tracking-widest uppercase whitespace-nowrap"
                    style={{ background: tech.color, color: '#0d1117' }}
                  >
                    Fastest
                  </div>
                )}
                <div className="flex items-center gap-2 mb-2">
                  <span
                    className="inline-block rounded-full shrink-0"
                    style={{ width: 9, height: 9, background: tech.color, boxShadow: `0 0 7px ${tech.glow}` }}
                  />
                  <span className="text-xs md:text-sm font-bold tracking-wide" style={{ color: tech.color }}>
                    {tech.label}
                  </span>
                </div>
                <div className="text-sm md:text-base font-black font-mono text-white leading-tight">
                  {tech.speedLabel}
                </div>
                <div className="text-[10px] md:text-xs font-mono text-slate-400 mt-0.5">
                  {tech.timeLabel}
                </div>
              </motion.div>
            ))}
          </div>

          <p className="mt-5 text-center text-[10px] md:text-xs font-mono text-slate-500">
            Both axes are logarithmic. Data represents a 100 GB 4K file download.
            Li-Fi transmits via modulated light — no radio spectrum congestion.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
