import { useState, useEffect } from 'react';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { Activity, Eye, ShieldCheck, Zap } from 'lucide-react';
import bg3Img from '../../../../public/images/hero/bg3.webp';

const conceptualPoints = [
  {
    lucide: Activity,
    title: 'Automatic Smart Lighting',
    sub: 'No More Light Switches',
    desc: 'You never have to look for a light switch again. As you walk into a room, the lights turn on automatically at just the right brightness. Your smart devices connect instantly using invisible light beams without any setup. The house just knows what you want.',
  },
  {
    lucide: Eye,
    title: 'The 3D Virtual Living Room',
    sub: 'TV Screens are Old News',
    desc: 'The TV is old news. When you put on a headset, the light from the ceiling sends ultra-fast internet straight to your eyes. There is zero lag or buffering. Games and videos appear right in front of you in 3D on your living room floor.',
  },
  {
    lucide: ShieldCheck,
    title: 'The Ultimate Safe Space',
    sub: 'Private Light Signal',
    desc: 'Wi-Fi signals travel through walls, which means hackers can steal your data. But light cannot go through walls. Since your internet signal stays trapped inside the room, your private information is completely safe from the outside world.',
  },
  {
    lucide: Zap,
    title: 'Instant Conversations',
    sub: 'No More Waiting Around',
    desc: 'Say goodbye to waiting for smart assistants to respond. Because of the super-fast light connection, your voice devices answer you the exact second you finish speaking. It feels like talking to a real person standing next to you.',
  },
];

const premiumShapes = [
  { borderRadius: '20px 80px 20px 80px' },
  { clipPath: 'polygon(0 12%,12% 0,88% 0,100% 12%,100% 88%,88% 100%,12% 100%,0 88%)' },
  { clipPath: 'polygon(0 12%,12% 0,88% 0,100% 12%,100% 88%,88% 100%,12% 100%,0 88%)' },
  { borderRadius: '80px 20px 80px 20px' },
  { borderRadius: '80px 80px 25px 25px' },
  { borderRadius: '25px 25px 80px 80px' },
  { borderRadius: '55% 45% 50% 50%' },
  { borderRadius: '50% 30% 70% 40%' },
];

export default function ConsciousHomeSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const AUTOROTATE_TIME = 6000;

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % conceptualPoints.length);
    }, AUTOROTATE_TIME);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-20 text-slate-300 relative overflow-hidden min-h-[900px] flex flex-col justify-center" id="conscious-home">
      <Image
        src={bg3Img}
        alt="Lumen LiFi background"
        fill
        loading="lazy"
        className="absolute inset-0 object-cover"
        sizes="100vw"
      />
      <section className="py-24 text-slate-300 relative overflow-hidden section-wash-midnight min-h-[1000px] flex flex-col justify-center">
        <div className="absolute inset-0 bg-[#020617]/55 pointer-events-none z-0" />
        <div className="absolute inset-0 lumen-grid-pattern-dark opacity-[0.22] pointer-events-none z-[1]" />

        <div className="w-full max-w-7xl mx-auto px-6 relative z-10">
          <div className="relative w-full">
            <div
              id="main-header-glow-card"
              className="w-full max-w-3xl mx-auto p-[2px] rounded-2xl relative z-20 mb-20 bg-[length:200%_200%] bg-gradient-to-r from-cyan-400 via-violet-600 to-cyan-400 animate-shimmer shadow-[0_0_30px_rgba(34,211,238,0.2)]"
            >
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                className="w-full bg-[#050b14]/95 backdrop-blur-xl p-8 rounded-[14px] text-center"
              >
                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight mb-4 text-white leading-tight">
                  Welcome to the <span className="text-cyan-400">&ldquo;Conscious Home&rdquo;</span> Powered by Lumen LiFi.
                </h2>
                <p className="text-xs sm:text-sm text-slate-400 max-w-2xl mx-auto font-light leading-relaxed">
                  When you use light instead of slow Wi-Fi, your house feels alive. You do not need annoying apps or buttons. Everything connects instantly and perfectly.
                </p>
              </motion.div>
            </div>

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
              {[1, 2, 3, 4].map((pathNum) =>
                [0, 0.5, 1, 1.5].map((begin) => (
                  <circle key={`${pathNum}-${begin}`} r="4" fill="#22d3ee">
                    <animateMotion dur="2s" begin={`${begin}s`} repeatCount="indefinite">
                      <mpath href={`#path${pathNum}`} />
                    </animateMotion>
                  </circle>
                ))
              )}
            </svg>

            <div className="space-y-8 relative w-full z-20">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 items-center">
                {conceptualPoints.slice(0, 4).map((item, idx) => {
                  const isActive = activeIndex === idx;
                  const IconComponent = item.lucide;
                  const shapeStyle = premiumShapes[idx];

                  return (
                    <div key={idx} className="relative w-full group">
                      <div
                        className="relative p-[2px] overflow-hidden transition-all duration-300 w-full"
                        style={{
                          ...shapeStyle,
                          background: 'linear-gradient(90deg, #22d3ee, #8b5cf6, #22d3ee)',
                        }}
                      >
                        <button
                          type="button"
                          onClick={() => setActiveIndex(idx)}
                          className={`text-left p-7 w-full h-full min-h-[250px] relative z-10 flex flex-col justify-between transition-colors premium-glow-btn ${
                            isActive ? 'bg-[#060c18]/95' : 'bg-[#08111f] hover:bg-[#070d1a]'
                          }`}
                          style={shapeStyle}
                        >
                          <div className="w-full space-y-3.5">
                            <div className="flex items-center justify-between">
                              <span className="text-[9px] font-mono text-slate-500 font-bold tracking-widest uppercase">{item.sub}</span>
                              <div className="w-1.5 h-1.5 rounded-full bg-cyan-400 shadow-[0_0_10px_#22d3ee] animate-pulse" />
                            </div>
                            <div className="p-2 w-fit rounded-lg border bg-[#081726] border-cyan-500/30 text-cyan-300 transition-colors">
                              <IconComponent className="w-4.5 h-4.5 stroke-[1.5]" />
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
