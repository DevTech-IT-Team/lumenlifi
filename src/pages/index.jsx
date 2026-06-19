import React, { useState, useEffect, useRef } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import heroImg from '../../public/images/hero/hero.png';
import roomBg from '../../public/images/hero/room-bg.jpg';
import {
  ArrowRight, CheckCircle, Zap, Shield, Lock, Wifi, WifiOff,
  Monitor, Gamepad2, Cpu, Home, Building2, Factory, GraduationCap,
  Stethoscope, ChevronRight, Star, Sparkles
} from 'lucide-react';
import Header from '../components/common/Header';
import Footer from '../components/common/Footer';

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
   SECTION 1 — HERO
───────────────────────────────────────────────────────────── */
function HeroSection() {
  const [tick, setTick] = useState(0);
  const facts = [
    '🐆 Cheetah — 120 km/h',
    '🦅 Peregrine Falcon — 390 km/h',
    '🚄 Maglev Train — 600 km/h',
    '💡 Light — 1,080,000,000 km/h',
  ];

  useEffect(() => {
    const t = setInterval(() => setTick(p => (p + 1) % facts.length), 2200);
    return () => clearInterval(t);
  }, []);

  return (
    <section
      className="relative min-h-screen pt-28 pb-0 flex items-center overflow-hidden"
      style={{ background: 'linear-gradient(160deg, #F0F8FF 0%, #E8F6FF 40%, #E0F7F8 100%)' }}
    >
      {/* Ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[-5%] left-1/4 w-[600px] h-[500px] rounded-full"
          style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.10) 0%, transparent 65%)' }} />
        <div className="absolute bottom-0 left-0 w-96 h-64 rounded-full blur-[100px]"
          style={{ background: 'rgba(26,110,191,0.06)' }} />
      </div>

      {/* Subtle grid */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(rgba(26,110,191,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(26,110,191,0.04) 1px, transparent 1px)', backgroundSize: '48px 48px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center pb-0">

        {/* ── Left: Text ── */}
        <div className="py-12 lg:py-20">
          {/* Speed ticker */}
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full mb-8 text-xs font-mono font-bold"
            style={{ background: 'rgba(0,194,199,0.10)', border: '1px solid rgba(0,194,199,0.25)', color: '#1A6EBF' }}>
            <span className="w-2 h-2 rounded-full animate-pulse inline-block" style={{ background: '#00C2C7' }} />
            <AnimatePresence mode="wait">
              <motion.span
                key={tick}
                initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -6 }}
                transition={{ duration: 0.4 }}
              >
                {facts[tick]}
              </motion.span>
            </AnimatePresence>
          </div>

          <motion.h1
            custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl lg:text-[68px] xl:text-[76px] font-black tracking-tight leading-[1.0] mb-6"
            style={{ color: '#0D2240' }}
          >
            The Speed of Light.
            <br />
            <span style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 60%, #0FB89A 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Now in Your
              <br />Living Room.
            </span>
          </motion.h1>

          <motion.p
            custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-lg max-w-lg mb-10 leading-relaxed"
            style={{ color: '#4A6080' }}
          >
            Lightning Fast. Literally. Lumen LiFi turns your everyday ceiling lights into a super-fast internet connection.
            No invisible traffic jams. No waiting. Just pure, endless speed straight to your devices.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row gap-4 mb-12">
            <Link href="/products"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)', boxShadow: '0 6px 30px rgba(0,194,199,0.30)' }}
            >
              Explore Home Kits <ArrowRight size={16} />
            </Link>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border-2 transition-all hover:scale-[1.02]"
              style={{ borderColor: '#1A6EBF', color: '#1A6EBF', background: 'rgba(26,110,191,0.05)' }}
            >
              Order Now
            </Link>
          </motion.div>

          {/* Mini stats row */}
          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="flex gap-8 pt-6 border-t"
            style={{ borderColor: 'rgba(26,110,191,0.12)' }}
          >
            {[
              { val: '10 Gbps', label: 'Peak Speed' },
              { val: '80 sec', label: 'To download 100 GB' },
              { val: 'Zero RF', label: 'No radio waves' },
            ].map(({ val, label }) => (
              <div key={label}>
                <div className="font-black text-lg" style={{ color: '#0D2240' }}>{val}</div>
                <div className="text-[10px] font-mono uppercase tracking-widest mt-0.5" style={{ color: '#4A6080' }}>{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* ── Right: Hero Image ── */}
        <motion.div
          custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="relative w-full h-full min-h-[500px] lg:min-h-screen flex items-stretch"
        >
<<<<<<< HEAD
          {/* Glow behind image */}
          <div className="absolute inset-0 pointer-events-none"
            style={{ background: 'radial-gradient(ellipse at 60% 40%, rgba(0,194,199,0.12) 0%, transparent 70%)' }} />
          <div className="relative w-full h-full min-h-[520px] lg:min-h-screen rounded-3xl lg:rounded-l-3xl lg:rounded-r-none overflow-hidden shadow-2xl"
            style={{ boxShadow: '0 20px 80px rgba(0,194,199,0.20), 0 4px 30px rgba(26,110,191,0.15)' }}
          >
            <Image
              src={heroImg}
              alt="Lumen LiFi — ceiling light beaming data at 10 Gbps to a laptop in a living room, download complete in 80 seconds"
              fill
              priority
              className="object-cover object-center w-full h-full"
            />
            {/* Subtle gradient overlay at top to blend with page */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'linear-gradient(to bottom, rgba(240,248,255,0.25) 0%, transparent 25%, transparent 75%, rgba(240,248,255,0.15) 100%)' }} />
            {/* Speed badge floating on image */}
            <motion.div
              initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 1.0 }}
              className="absolute bottom-6 left-6 flex items-center gap-3 px-4 py-3 rounded-2xl backdrop-blur-md"
              style={{ background: 'rgba(13,34,64,0.75)', border: '1px solid rgba(0,194,199,0.30)' }}
            >
              <div className="w-8 h-8 rounded-xl flex items-center justify-center" style={{ background: 'rgba(0,194,199,0.20)' }}>
                <Zap size={16} style={{ color: '#00C2C7' }} />
              </div>
              <div>
                <div className="text-xs font-black text-white">Download Complete</div>
                <div className="text-[10px] font-mono" style={{ color: '#00C2C7' }}>100 GB in 80 seconds · LiFi</div>
              </div>
            </motion.div>
          </div>
=======
          <Image
            src="/images/hero/Homebg.png"
            alt="Lumen LIFI"
            fill
            priority
            className="object-cover"
          />
>>>>>>> 3f0864a2b11d6f22933447709a4b5bd81bd6b260
        </motion.div>

      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 2 — SPEED TABLE
───────────────────────────────────────────────────────────── */
function SpeedTableSection() {
  const rows = [
    { type: 'Standard Home Wi-Fi', speed: '100 Mbps', time: '2.2 Hours', note: 'Grab some popcorn — you\'re waiting', highlight: false, emoji: '🐢' },
    { type: 'High-Speed Fiber Wi-Fi', speed: '1 Gbps', time: '13 Minutes', note: 'Better, but still a drag', highlight: false, emoji: '🚗' },
    { type: 'Lumen LiFi', speed: '10 Gbps', time: '80 Seconds', note: 'Done before you can blink', highlight: true, emoji: '⚡' },
  ];

  return (
    <section className="py-24 bg-white" id="speed">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4"
            style={{ background: 'rgba(0,194,199,0.10)', color: '#1A6EBF' }}>
            <Zap size={12} /> The Need For Speed
          </div>
          <h2 className="text-4xl font-black tracking-tight mb-4" style={{ color: '#0D2240' }}>
            Internet So Fast,{' '}
            <span style={{ background: 'linear-gradient(135deg, #1A6EBF, #00C2C7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              It's Made of Light.
            </span>
          </h2>
          <p className="text-[#4A6080] max-w-xl mx-auto text-base">
            What does 10 Gbps actually mean for your house? Here's how long it takes to download
            a massive 100 GB 4K Ultra HD movie across different connections.
          </p>
        </motion.div>

        <div className="rounded-3xl overflow-hidden border" style={{ borderColor: 'rgba(26,110,191,0.12)', boxShadow: '0 8px 40px rgba(0,194,199,0.10)' }}>
          {/* Table header */}
          <div className="grid grid-cols-4 px-6 py-4 text-xs font-mono font-bold uppercase tracking-widest"
            style={{ background: '#0D2240', color: 'rgba(255,255,255,0.6)' }}>
            <div>Connection Type</div>
            <div className="text-center">Speed</div>
            <div className="text-center">Download Time</div>
            <div className="text-center">Verdict</div>
          </div>
          {rows.map((row, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="grid grid-cols-4 px-6 py-5 items-center border-t"
              style={{
                borderColor: row.highlight ? 'rgba(0,194,199,0.2)' : 'rgba(26,110,191,0.08)',
                background: row.highlight
                  ? 'linear-gradient(135deg, rgba(0,194,199,0.06) 0%, rgba(15,184,154,0.06) 100%)'
                  : i % 2 === 0 ? '#FAFCFF' : '#FFFFFF',
              }}
            >
              <div className="flex items-center gap-3">
                <span className="text-xl">{row.emoji}</span>
                <div>
                  <div className="text-sm font-bold" style={{ color: row.highlight ? '#0D2240' : '#4A6080' }}>
                    {row.type}
                  </div>
                </div>
              </div>
              <div className="text-center font-mono font-bold text-sm"
                style={{ color: row.highlight ? '#1A6EBF' : '#4A6080' }}>
                {row.speed}
              </div>
              <div className="text-center">
                <span className="font-mono font-black text-base"
                  style={{ color: row.highlight ? '#00C2C7' : '#0D2240' }}>
                  {row.time}
                </span>
              </div>
              <div className="text-center text-xs" style={{ color: row.highlight ? '#0FB89A' : '#94A3B8' }}>
                {row.highlight && <span className="font-bold">✓ </span>}{row.note}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 3 — THE CONSCIOUS HOME
───────────────────────────────────────────────────────────── */
function ConsciousHomeSection() {
  const features = [
    {
      icon: '🌅',
      title: 'Ambient Intelligence',
      subtitle: 'The End of the Light Switch',
      desc: 'As you move through your house, the environmental AI maps your presence in real-time. Your biometric ring syncs sleep data via an invisible infrared beam, prompting the espresso machine to brew a double shot — because it knows you had a restless night.',
    },
    {
      icon: '🥽',
      title: 'The Holographic Living Room',
      subtitle: 'The TV is a Relic',
      desc: 'Slip on your spatial computing headset. With a dedicated 10 Gbps optical link beaming to your eyes, your living room dissolves entirely. Zero motion sickness, zero buffering. You\'re sitting courtside at the game — on your own couch.',
    },
    {
      icon: '🔒',
      title: 'Absolute Privacy Fortress',
      subtitle: 'Light Cannot Pass Through Walls',
      desc: 'Your personal AI operates on locally contained light beams. Light cannot pass through walls, and neither can your data. The ultimate luxury of the future isn\'t just speed — it\'s absolute, unbreachable privacy.',
    },
    {
      icon: '🎙️',
      title: 'Conversations, Not Commands',
      subtitle: 'Say Goodbye to "Hey Siri"',
      desc: 'Because your voice assistant is connected via sub-millisecond optical link, it processes complex requests and executes commands the precise millisecond your sentence ends. It feels like talking to a digital concierge standing right next to you.',
    },
  ];

  return (
    <section className="py-24" style={{ background: 'linear-gradient(160deg, #F0F8FF 0%, #E8F6FF 100%)' }} id="conscious-home">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4"
            style={{ background: 'rgba(26,110,191,0.10)', color: '#1A6EBF' }}>
            <Sparkles size={12} /> The Conscious Home
          </div>
          <h2 className="text-4xl font-black tracking-tight mb-4" style={{ color: '#0D2240' }}>
            Stop Calling It a{' '}
            <span style={{ background: 'linear-gradient(135deg, #1A6EBF, #00C2C7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              "Smart Home"
            </span>
          </h2>
          <p className="text-[#4A6080] max-w-2xl mx-auto">
            The smart home is dead. When you replace crowded Wi-Fi with multi-gigabit light,
            your house stops <em>reacting</em> to you and starts <em>anticipating</em> you.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.1 }}
              className="rounded-3xl p-8 bg-white border group hover:shadow-xl transition-all duration-300 cursor-default"
              style={{ borderColor: 'rgba(26,110,191,0.10)', boxShadow: '0 2px 20px rgba(0,194,199,0.06)' }}
              whileHover={{ y: -4 }}
            >
              <div className="text-4xl mb-4">{feat.icon}</div>
              <div className="text-[10px] font-mono font-bold uppercase tracking-widest mb-1" style={{ color: '#00C2C7' }}>
                {feat.subtitle}
              </div>
              <h3 className="text-xl font-black mb-3" style={{ color: '#0D2240' }}>{feat.title}</h3>
              <p className="text-sm leading-relaxed" style={{ color: '#4A6080' }}>{feat.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 4 — HOME FEATURES GRID
───────────────────────────────────────────────────────────── */
function HomeFeaturesSection() {
  const features = [
    {
      icon: <Gamepad2 size={24} />,
      title: 'Zero-Lag Gaming',
      desc: "Say goodbye to ping spikes. LiFi's sub-millisecond, line-of-sight optical connection means your inputs register the exact millisecond you press the button. Faster than being plugged directly into the wall.",
      color: '#1A6EBF',
    },
    {
      icon: <Monitor size={24} />,
      title: 'Unthrottled 4K & 8K Streaming',
      desc: "Buffering is dead. Every LiFi light casts its own dedicated broadband beam — stream an 8K movie in the living room without your bandwidth dropping while someone downloads a file upstairs.",
      color: '#00C2C7',
    },
    {
      icon: <Wifi size={24} />,
      title: 'Infinite Device Connections',
      desc: "Smart locks, cameras, and voice assistants constantly clog Wi-Fi. With LiFi's massive optical bandwidth, you can connect hundreds of smart devices in a single room and your 10 Gbps speeds won't flinch.",
      color: '#0FB89A',
    },
    {
      icon: <Home size={24} />,
      title: 'Invisible Infrastructure',
      desc: "Stop hiding ugly routers behind bookshelves. The network is built directly into your ceiling lights. If the room is lit, the room is wired.",
      color: '#2AABDB',
    },
  ];

  return (
    <section className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4"
            style={{ background: 'rgba(0,194,199,0.10)', color: '#1A6EBF' }}>
            <Star size={12} /> Stop Sharing Wi-Fi. Start Surfing Light.
          </div>
          <h2 className="text-4xl font-black tracking-tight" style={{ color: '#0D2240' }}>
            Wi-Fi was built to connect computers.
            <br />
            <span style={{ background: 'linear-gradient(135deg, #1A6EBF, #00C2C7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Lumen LiFi is built to connect your life.
            </span>
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {features.map((feat, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }} transition={{ delay: i * 0.08 }}
              className="flex gap-5 p-7 rounded-2xl border transition-all hover:shadow-lg cursor-default group"
              style={{ borderColor: 'rgba(26,110,191,0.10)', background: '#FAFCFF' }}
              whileHover={{ y: -2, borderColor: `${feat.color}33` }}
            >
              <div className="shrink-0 w-12 h-12 rounded-2xl flex items-center justify-center"
                style={{ background: `${feat.color}15`, color: feat.color }}>
                {feat.icon}
              </div>
              <div>
                <h3 className="font-black text-base mb-2" style={{ color: '#0D2240' }}>{feat.title}</h3>
                <p className="text-sm leading-relaxed" style={{ color: '#4A6080' }}>{feat.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 5 — ENTERPRISE BUBBLES
───────────────────────────────────────────────────────────── */
const industries = [
  {
    id: 'offices',
    icon: <Building2 size={22} />,
    label: 'Corporate Offices',
    emoji: '🏢',
    tagline: 'The Holographic Boardroom',
    desc: 'Open-concept offices are a nightmare for standard Wi-Fi. When 100 employees are pulling cloud data, taking video calls, and presenting simultaneously, the network chokes. Every ceiling light becomes a private 10 Gbps connection. No shared channels. No dropped Zoom calls.',
    advantage: 'Because light cannot pass through walls, your sensitive corporate data is physically contained within your boardroom. Impossible for someone in the lobby to intercept.',
    color: '#1A6EBF',
    bgColor: 'rgba(26,110,191,0.07)',
    borderColor: 'rgba(26,110,191,0.20)',
  },
  {
    id: 'manufacturing',
    icon: <Factory size={22} />,
    label: 'Manufacturing',
    emoji: '🏭',
    tagline: 'The Unbreakable Forge',
    desc: 'Heavy machinery, motors, and steel structures create massive Electromagnetic Interference (EMI) storms that completely blind traditional Wi-Fi, causing robots to disconnect and assembly lines to halt.',
    advantage: 'Light is 100% immune to electromagnetic interference. Beam a LiFi connection through a factory floor filled with sparks and arc welders — the 10 Gbps link remains perfectly unbothered.',
    color: '#0FB89A',
    bgColor: 'rgba(15,184,154,0.07)',
    borderColor: 'rgba(15,184,154,0.20)',
  },
  {
    id: 'ai-data',
    icon: <Cpu size={22} />,
    label: 'AI Data Centers',
    emoji: '🧠',
    tagline: 'AI Command Centers',
    desc: "Today's AI data centers are brilliant brains trapped behind a bottleneck. They're suffocating under miles of copper cable required to link server racks, creating thermal bottlenecks and limiting how fast neural networks can train.",
    advantage: 'Lumen LiFi severs the tether. Convert the server floor into a wireless optical matrix — massive AI clusters communicate through pure light, beaming exabytes of training data through the air at the speed of light.',
    color: '#00C2C7',
    bgColor: 'rgba(0,194,199,0.07)',
    borderColor: 'rgba(0,194,199,0.20)',
  },
  {
    id: 'education',
    icon: <GraduationCap size={22} />,
    label: 'Schools & Education',
    emoji: '🎓',
    tagline: 'The Immersive Campus',
    desc: 'Put 35 students in a classroom, hand them all tablets, and ask them to stream 4K educational content simultaneously. Standard school Wi-Fi instantly crashes under the load.',
    advantage: "LiFi thrives in ultra-high-density zones. Every student gets a flawless, unthrottled beam of internet simultaneously. The network is physically bound to the classroom — incredibly secure from campus-wide cyber threats.",
    color: '#2AABDB',
    bgColor: 'rgba(42,171,219,0.07)',
    borderColor: 'rgba(42,171,219,0.20)',
  },
  {
    id: 'healthcare',
    icon: <Stethoscope size={22} />,
    label: 'Healthcare',
    emoji: '🏥',
    tagline: 'The Zero-RF Operating Theatre',
    desc: 'Hospitals have a critical problem: Wi-Fi and cellular signals can interfere with highly sensitive medical equipment — MRI machines, pacemakers, and telemetry monitors.',
    advantage: 'Because it uses safe, visible light instead of radio waves, LiFi creates a "Zero RF" zone. Surgeons can download massive 3D imaging files to their tablets inside an operating room without causing a single ripple of interference to life-saving equipment.',
    color: '#6B4EFF',
    bgColor: 'rgba(107,78,255,0.07)',
    borderColor: 'rgba(107,78,255,0.20)',
  },
];

function EnterpriseSection() {
  const [active, setActive] = useState(null);
  const cur = industries.find(i => i.id === active);

  return (
    <section className="py-24 relative overflow-hidden" id="enterprise">
      {/* Room-bg image used as a subtle atmospheric background */}
      <div className="absolute inset-0 pointer-events-none">
        <Image
          src={roomBg}
          alt="LiFi in a corporate office — ceiling device beaming cyan light beams to workers"
          fill
          className="object-cover object-center"
        />
        {/* Strong overlay to keep text readable and on-brand */}
        <div className="absolute inset-0"
          style={{ background: 'linear-gradient(160deg, rgba(240,248,255,0.94) 0%, rgba(234,249,249,0.96) 50%, rgba(240,248,255,0.92) 100%)' }} />
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4"
            style={{ background: 'rgba(26,110,191,0.10)', color: '#1A6EBF' }}>
            LumenFi Enterprise
          </div>
          <h2 className="text-4xl font-black tracking-tight mb-4" style={{ color: '#0D2240' }}>
            Enterprise Connectivity{' '}
            <span style={{ background: 'linear-gradient(135deg, #1A6EBF, #00C2C7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Reimagined
            </span>
          </h2>
          <p className="text-[#4A6080] max-w-xl mx-auto">
            Select your industry to discover how LiFi transforms connectivity at every scale.
          </p>
        </motion.div>

        {/* Industry Bubbles */}
        <div className="flex flex-wrap justify-center gap-4 mb-10">
          {industries.map((ind, i) => (
            <motion.button
              key={ind.id}
              initial={{ opacity: 0, scale: 0.8 }} whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }} transition={{ delay: i * 0.07 }}
              onClick={() => setActive(active === ind.id ? null : ind.id)}
              className="flex flex-col items-center gap-2 px-6 py-4 rounded-3xl border-2 font-bold text-sm transition-all duration-250"
              style={{
                borderColor: active === ind.id ? ind.color : 'rgba(26,110,191,0.12)',
                background: active === ind.id ? ind.bgColor : 'white',
                color: active === ind.id ? ind.color : '#4A6080',
                boxShadow: active === ind.id ? `0 6px 30px ${ind.color}25` : '0 2px 10px rgba(0,0,0,0.04)',
                transform: active === ind.id ? 'scale(1.05)' : 'scale(1)',
              }}
            >
              <span style={{ color: active === ind.id ? ind.color : '#94A3B8' }}>{ind.icon}</span>
              <span className="text-xs font-mono uppercase tracking-widest">{ind.label}</span>
              <span className="text-xl">{ind.emoji}</span>
            </motion.button>
          ))}
        </div>

        {/* Detail panel */}
        <AnimatePresence mode="wait">
          {cur && (
            <motion.div
              key={cur.id}
              initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
              transition={{ duration: 0.3 }}
              className="rounded-3xl p-8 md:p-10 border-2 grid grid-cols-1 md:grid-cols-2 gap-8"
              style={{ borderColor: cur.borderColor, background: 'white', boxShadow: `0 10px 50px ${cur.color}18` }}
            >
              <div>
                <div className="flex items-center gap-3 mb-4">
                  <div className="w-10 h-10 rounded-2xl flex items-center justify-center"
                    style={{ background: cur.bgColor, color: cur.color }}>
                    {cur.icon}
                  </div>
                  <div>
                    <div className="text-[10px] font-mono font-bold uppercase tracking-widest" style={{ color: cur.color }}>
                      {cur.label}
                    </div>
                    <h3 className="text-xl font-black" style={{ color: '#0D2240' }}>{cur.tagline}</h3>
                  </div>
                </div>
                <p className="text-sm leading-relaxed" style={{ color: '#4A6080' }}>{cur.desc}</p>
              </div>
              <div className="rounded-2xl p-6" style={{ background: cur.bgColor, border: `1px solid ${cur.borderColor}` }}>
                <div className="text-xs font-mono font-bold uppercase tracking-widest mb-3" style={{ color: cur.color }}>
                  ⚡ The LiFi Advantage
                </div>
                <p className="text-sm leading-relaxed font-medium" style={{ color: '#0D2240' }}>{cur.advantage}</p>
                <Link href={`/contact`}
                  className="inline-flex items-center gap-2 mt-5 text-xs font-mono font-bold uppercase tracking-widest transition-all"
                  style={{ color: cur.color }}
                >
                  Learn More <ChevronRight size={14} />
                </Link>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 6 — SHOP THE ECOSYSTEM
───────────────────────────────────────────────────────────── */
const ecosystemCategories = [
  {
    category: 'The Network Foundation',
    emoji: '📡',
    color: '#1A6EBF',
    products: [
      { name: 'Lumen Core Downlighters', desc: 'Architectural LED ceiling lights that act as your invisible routers, beaming dedicated 10 Gbps data cones to every room while providing pristine, tunable ambient lighting.', badge: 'Best Seller' },
      { name: 'Lumen Photon Dongle (USB-C)', desc: 'Plug this microscopic receiver into any laptop, PC, or tablet to instantly transition from crowded Wi-Fi to a dedicated 10 Gbps optical link.', badge: 'Plug & Play' },
    ],
  },
  {
    category: 'Entertainment & Computing',
    emoji: '🎮',
    color: '#00C2C7',
    products: [
      { name: 'Lumen Matrix 8K TV', desc: 'The first television that doesn\'t compress your media. Streams raw, uncompressed 8K video and cloud gaming, entirely immune to household bandwidth usage.', badge: 'New' },
      { name: 'Lumen Studio Laptop', desc: 'With an integrated Li-Fi transceiver built directly into the lid, you receive hardwired 10 Gbps speeds without ever plugging in an ethernet cable.', badge: 'Pro' },
      { name: 'Lumen Echo Soundbar', desc: 'Connected via sub-millisecond light beams, this smart speaker processes voice commands the literal millisecond you finish speaking.', badge: 'Smart' },
    ],
  },
  {
    category: 'Security & Perimeter',
    emoji: '🛡️',
    color: '#0FB89A',
    products: [
      { name: 'Lumen Sentinel Video Doorbell', desc: 'Unjammable front-door security. Because it relies on light, it is mathematically impossible for thieves to use Wi-Fi jammers to blind it.', badge: 'Unjammable' },
      { name: 'Lumen Aegis Floodlight Cams', desc: 'Ultra-bright exterior lights that double as multi-gigabit data transmitters, securely linking outdoor cameras to your local server.', badge: 'Perimeter' },
    ],
  },
  {
    category: 'Smart Appliances',
    emoji: '🏠',
    color: '#2AABDB',
    products: [
      { name: 'Lumen Glacier Smart Fridge', desc: 'The zero-lag kitchen command center. Stream 4K cooking tutorials, sync AI grocery trackers, and run your home dashboard with zero buffering.', badge: 'IoT Ready' },
      { name: 'Lumen Precision Robot Vacuum', desc: 'Processes real-time 3D spatial mapping and AI obstacle avoidance with zero latency via continuous optical link — never bumps into a chair leg again.', badge: 'Autonomous' },
      { name: 'Lumen Eclipse Window Shades', desc: 'These motorized shades communicate instantly with your ceiling\'s optical sensors, adjusting silently to sunlight and your circadian rhythm.', badge: 'Ambient' },
      { name: 'Lumen Climate Hub', desc: 'Uses invisible infrared beams to detect exactly how many people are in a room, micro-adjusting temperature instantly with zero network delay.', badge: 'AI-Powered' },
    ],
  },
];

function EcosystemSection() {
  const [openCat, setOpenCat] = useState(0);

  return (
    <section className="py-24 bg-white" id="shop">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4"
            style={{ background: 'rgba(0,194,199,0.10)', color: '#1A6EBF' }}>
            🛒 Shop the Ecosystem
          </div>
          <h2 className="text-4xl font-black tracking-tight mb-4" style={{ color: '#0D2240' }}>
            Shop the Conscious Home{' '}
            <span style={{ background: 'linear-gradient(135deg, #1A6EBF, #00C2C7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
              Ecosystem
            </span>
          </h2>
          <p className="text-[#4A6080] max-w-2xl mx-auto">
            The world's first fully optical smart home. Every device in the LumenFi ecosystem ships with
            integrated Li-Fi receivers — zero lag, unjammable security, and infinite bandwidth.
          </p>
        </motion.div>

        {/* Category tabs */}
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {ecosystemCategories.map((cat, i) => (
            <button
              key={i}
              onClick={() => setOpenCat(i)}
              className="flex items-center gap-2 px-5 py-2.5 rounded-2xl text-sm font-bold border-2 transition-all duration-200"
              style={{
                borderColor: openCat === i ? cat.color : 'rgba(26,110,191,0.12)',
                background: openCat === i ? `${cat.color}12` : 'white',
                color: openCat === i ? cat.color : '#4A6080',
                boxShadow: openCat === i ? `0 4px 20px ${cat.color}20` : 'none',
              }}
            >
              <span>{cat.emoji}</span> {cat.category}
            </button>
          ))}
        </div>

        {/* Products grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={openCat}
            initial={{ opacity: 0, y: 12 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5"
          >
            {ecosystemCategories[openCat].products.map((prod, i) => {
              const cat = ecosystemCategories[openCat];
              return (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: i * 0.07 }}
                  className="rounded-2xl p-6 border bg-white group hover:shadow-lg transition-all duration-300"
                  style={{ borderColor: 'rgba(26,110,191,0.10)' }}
                  whileHover={{ y: -4, borderColor: `${cat.color}33` }}
                >
                  <div className="flex items-start justify-between mb-3">
                    <h4 className="font-black text-sm leading-tight" style={{ color: '#0D2240' }}>{prod.name}</h4>
                    <span className="shrink-0 ml-2 text-[10px] font-mono font-bold px-2 py-0.5 rounded-full"
                      style={{ background: `${cat.color}15`, color: cat.color }}>
                      {prod.badge}
                    </span>
                  </div>
                  <p className="text-xs leading-relaxed mb-5" style={{ color: '#4A6080' }}>{prod.desc}</p>
                  <Link href="/products"
                    className="inline-flex items-center gap-1.5 text-xs font-mono font-bold uppercase tracking-widest transition-all"
                    style={{ color: cat.color }}
                  >
                    Learn More <ChevronRight size={12} />
                  </Link>
                </motion.div>
              );
            })}
          </motion.div>
        </AnimatePresence>

        <div className="text-center mt-12">
          <Link href="/products"
            className="inline-flex items-center gap-2 h-12 px-8 rounded-2xl text-white font-bold text-sm transition-all hover:scale-[1.03] hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)', boxShadow: '0 6px 30px rgba(0,194,199,0.25)' }}
          >
            View Full Catalog <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 7 — STATS
───────────────────────────────────────────────────────────── */
function useCounter(target, duration = 1600) {
  const [count, setCount] = useState(0);
  const ref = useRef(null);
  const inView = useRef(false);
  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !inView.current) {
        inView.current = true;
        const start = Date.now();
        const step = () => {
          const elapsed = Date.now() - start;
          const progress = Math.min(elapsed / duration, 1);
          setCount(Math.round(progress * target));
          if (progress < 1) requestAnimationFrame(step);
        };
        requestAnimationFrame(step);
      }
    }, { threshold: 0.2 });
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target, duration]);
  return { ref, count };
}

function StatCard({ target, suffix = '', label, emoji }) {
  const { ref, count } = useCounter(target);
  return (
    <div ref={ref} className="text-center p-8 rounded-3xl bg-white border"
      style={{ borderColor: 'rgba(26,110,191,0.10)', boxShadow: '0 4px 24px rgba(0,194,199,0.08)' }}>
      <div className="text-3xl mb-3">{emoji}</div>
      <div className="text-4xl font-black mb-1"
        style={{ background: 'linear-gradient(135deg, #1A6EBF, #00C2C7)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-xs text-[#4A6080] uppercase tracking-widest font-mono">{label}</div>
    </div>
  );
}

function StatsSection() {
  return (
    <section className="py-20" style={{ background: 'linear-gradient(160deg, #EAF9F9, #F0F8FF)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <h2 className="text-3xl font-black" style={{ color: '#0D2240' }}>
            Validated at Scale
          </h2>
        </motion.div>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-5">
          <StatCard target={10} suffix=" Gbps" label="Peak Speed" emoji="⚡" />
          <StatCard target={500} suffix="+" label="Global Nodes" emoji="🌐" />
          <StatCard target={40} suffix="+" label="Regions Active" emoji="🗺️" />
          <StatCard target={100} suffix="%" label="Physical Isolation" emoji="🔒" />
        </div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   SECTION 8 — FINAL CTA
───────────────────────────────────────────────────────────── */
function FinalCTASection() {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="rounded-3xl p-12 md:p-16 relative overflow-hidden"
            style={{ background: 'linear-gradient(135deg, #0D2240 0%, #1A4A7A 50%, #0D3D5C 100%)' }}>
            {/* Glow overlay */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,194,199,0.15) 0%, transparent 60%)' }} />
            {/* Grid pattern */}
            <div className="absolute inset-0 pointer-events-none"
              style={{ backgroundImage: 'linear-gradient(rgba(0,194,199,0.05) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,199,0.05) 1px, transparent 1px)', backgroundSize: '32px 32px' }} />

            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-6"
                style={{ background: 'rgba(0,194,199,0.15)', color: '#00C2C7', border: '1px solid rgba(0,194,199,0.25)' }}>
                <Zap size={12} /> Limited Early Access
              </div>
              <h2 className="text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
                Step out of the radio age.
                <br />
                <span style={{ background: 'linear-gradient(135deg, #00C2C7, #0FB89A)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent', backgroundClip: 'text' }}>
                  Live at the speed of light.
                </span>
              </h2>
              <p className="text-blue-200 text-base mb-10 max-w-lg mx-auto">
                Wi-Fi was built to connect computers. Lumen LiFi is built to connect your life.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link href="/products"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-[#0D2240] font-bold text-sm tracking-wide transition-all hover:scale-[1.03]"
                  style={{ background: 'linear-gradient(135deg, #00C2C7, #0FB89A)', boxShadow: '0 6px 30px rgba(0,194,199,0.35)' }}
                >
                  Explore Home Kits <ArrowRight size={16} />
                </Link>
                <Link href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border-2 border-white/20 text-white hover:bg-white/10 transition-all"
                >
                  Request a Demo
                </Link>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ─────────────────────────────────────────────────────────────
   ROOT PAGE EXPORT
───────────────────────────────────────────────────────────── */
export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased" style={{ background: '#F0F8FF', color: '#0D2240' }}>
      <Head>
<<<<<<< HEAD
        <title>Lumen LiFi — Internet at the Speed of Light</title>
        <meta name="description" content="Lumen LiFi turns your everyday ceiling lights into a super-fast 10 Gbps internet connection. No Wi-Fi, no radio waves, no traffic jams — just pure light-speed connectivity." />
=======
        <title>Lumen LIFI</title>
        <meta name="description" content="Lumen LIFI — secure optical wireless connectivity powered by light." />
>>>>>>> 3f0864a2b11d6f22933447709a4b5bd81bd6b260
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
        <StatsSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}