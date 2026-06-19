import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { ChevronDown, ArrowRight, Lightbulb, Cpu, Globe, Award, Users } from 'lucide-react';

/* ── Interactive History Timeline ── */
const historyItems = [
  {
    year: '2012',
    title: 'Founded',
    desc: 'Co-founded by Professor Harald Haas — the inventor of LiFi — at the University of Edinburgh.',
  },
  {
    year: '2016',
    title: 'First Commercial Product',
    desc: 'Launched the LiFiMAX — the world\'s first commercial LiFi system, proving viability at enterprise scale.',
  },
  {
    year: '2018',
    title: 'Defense Sector Entry',
    desc: 'Secured first classified defense deployment contracts with NATO-member government agencies.',
  },
  {
    year: '2020',
    title: 'LiFi Module Chip',
    desc: 'Released the world\'s first LiFi integrated circuit module enabling OEM integration into laptops and smartphones.',
  },
  {
    year: '2023',
    title: 'IEEE 802.11bb Standard Ratified',
    desc: 'Our technology became the basis for the global LiFi standard IEEE 802.11bb, cementing industry leadership.',
  },
  {
    year: '2025',
    title: 'Lumen LIFI Launch',
    desc: 'Released next-generation Lumen LIFI hardware for residential and enterprise optical wireless connectivity.',
  },
  {
    year: '2026',
    title: 'Global Scale — 40+ Countries',
    desc: 'Active deployments in 40+ countries across defense, healthcare, finance, and industrial sectors.',
  },
];

function HistoryTimeline() {
  const [expanded, setExpanded] = useState(null);

  return (
    <div className="relative" id="history">
      {/* Vertical spine */}
      <div className="absolute left-8 top-0 bottom-0 w-px bg-gradient-to-b from-emerald-500/60 via-emerald-500/20 to-transparent" />

      <div className="space-y-2">
        {historyItems.map((item, i) => (
          <motion.div
            key={item.year}
            initial={{ opacity: 0, x: -15 }} whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }} transition={{ delay: i * 0.06, duration: 0.5 }}
          >
            <button
              onClick={() => setExpanded(expanded === item.year ? null : item.year)}
              id={`history-${item.year}`}
              className="w-full flex items-center gap-5 text-left group"
            >
              {/* Year node */}
              <div className={`w-16 h-16 rounded-2xl flex flex-col items-center justify-center shrink-0 border transition-all duration-200 ${
                expanded === item.year
                  ? 'bg-emerald-500 border-emerald-400 shadow-lg shadow-emerald-500/30'
                  : 'bg-slate-900 border-slate-800 group-hover:border-emerald-500/40'
              }`}>
                <span className={`text-xs font-black ${expanded === item.year ? 'text-white' : 'text-emerald-400'}`}>
                  {item.year}
                </span>
              </div>

              <div className="flex-1 flex items-center justify-between py-4 border-b border-slate-800/60">
                <h4 className={`text-sm font-bold transition-colors duration-200 ${
                  expanded === item.year ? 'text-emerald-400' : 'text-slate-300 group-hover:text-white'
                }`}>
                  {item.title}
                </h4>
                <ChevronDown className={`w-4 h-4 text-slate-500 transition-transform duration-200 shrink-0 mr-2 ${expanded === item.year ? 'rotate-180 text-emerald-400' : 'group-hover:text-slate-300'}`} />
              </div>
            </button>

            <AnimatePresence>
              {expanded === item.year && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }} animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }} transition={{ duration: 0.25 }}
                  className="overflow-hidden ml-21 pl-5"
                  style={{ marginLeft: '84px' }}
                >
                  <p className="text-sm text-slate-400 leading-relaxed pb-4 pr-6">{item.desc}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}

/* ── Careers section ── */
const openRoles = [
  { title: 'Senior RF & Photonics Engineer', location: 'Edinburgh, UK', type: 'Full-time', dept: 'Engineering' },
  { title: 'Embedded Firmware Developer', location: 'Remote / Edinburgh', type: 'Full-time', dept: 'Engineering' },
  { title: 'Defense Sector Business Development', location: 'London, UK', type: 'Full-time', dept: 'Sales' },
  { title: 'Signal Processing Research Scientist', location: 'Edinburgh, UK', type: 'Full-time', dept: 'Research' },
];

export default function AboutUsPage() {
  return (
    <div className="flex flex-col min-h-screen font-sans antialiased bg-[#020D08] text-slate-100">
      <Head>
        <title>About | Lumen LIFI</title>
        <meta name="description" content="About Lumen LIFI — pioneers of optical wireless LiFi technology." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero — concise, no jargon bloat */}
        <section className="relative pt-36 pb-16 border-b border-emerald-900/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_50%_40%_at_50%_-10%,rgba(16,185,129,0.07),transparent)]" />
          <div className="max-w-4xl mx-auto px-6 relative z-10">
            <motion.span
              initial={{ opacity: 0 }} animate={{ opacity: 1 }}
              className="text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase block mb-5"
            >
              About Us
            </motion.span>
            <motion.h1
              initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }}
              className="text-4xl sm:text-6xl font-black text-white tracking-tight mb-6 leading-tight"
            >
              Inventing the Future<br />
              <span className="bg-gradient-to-r from-emerald-300 to-teal-300 bg-clip-text text-transparent">
                of Wireless
              </span>
            </motion.h1>
            <motion.p
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.1 }}
              className="text-slate-400 text-lg max-w-2xl leading-relaxed"
            >
              Co-founded by Professor Harald Haas in 2012 — the inventor of LiFi. We build the hardware and standards that deliver data through light, globally.
            </motion.p>

            {/* 3 key facts */}
            <motion.div
              initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 0.2 }}
              className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-white/5"
            >
              {[
                { val: '2012', label: 'Founded', icon: Lightbulb },
                { val: '40+', label: 'Countries', icon: Globe },
                { val: '500+', label: 'Deployments', icon: Cpu },
              ].map(({ val, label, icon: Icon }) => (
                <div key={label} className="flex items-center gap-3">
                  <Icon className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <div className="text-xl font-black text-white">{val}</div>
                    <div className="text-[10px] text-slate-500 uppercase tracking-widest">{label}</div>
                  </div>
                </div>
              ))}
            </motion.div>
          </div>
        </section>

        {/* Our History — interactive dropdown timeline */}
        <section className="py-20 max-w-4xl mx-auto px-6">
          <div className="flex items-center gap-3 mb-10">
            <div className="w-8 h-8 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
              <Award className="w-4 h-4 text-emerald-400" />
            </div>
            <div>
              <h2 className="text-2xl font-black text-white">Our History</h2>
              <p className="text-xs text-slate-500">Click any milestone to expand</p>
            </div>
          </div>
          <HistoryTimeline />
        </section>

        {/* Team — minimal */}
        <section className="py-20 border-t border-slate-800/60 max-w-4xl mx-auto px-6" id="team">
          <h2 className="text-2xl font-black text-white mb-10">Leadership</h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              { name: 'Prof. Harald Haas', role: 'Founder & Chief Scientific Officer', note: 'Inventor of LiFi · TED Talk · 600+ papers' },
              { name: 'Alistair Banham', role: 'Chief Executive Officer', note: 'Serial deep-tech entrepreneur' },
              { name: 'Dr. Wasiu O. Popoola', role: 'VP Engineering', note: 'Optical wireless communications PhD' },
            ].map((member, i) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }} transition={{ delay: i * 0.1 }}
                className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors"
              >
                <div className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-500 to-teal-600 mb-4 flex items-center justify-center">
                  <Users className="w-6 h-6 text-white" />
                </div>
                <h4 className="text-sm font-black text-white mb-1">{member.name}</h4>
                <p className="text-xs text-emerald-400 font-bold mb-2">{member.role}</p>
                <p className="text-xs text-slate-500">{member.note}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* Careers — purpose-driven */}
        <section className="py-20 border-t border-slate-800/60" id="careers">
          <div className="max-w-4xl mx-auto px-6">
            <div className="flex items-start justify-between gap-6 mb-10">
              <div>
                <h2 className="text-2xl font-black text-white mb-2">Purpose-Driven Careers</h2>
                <p className="text-slate-500 text-sm max-w-md">Help build technology that will connect billions of people through light. We hire world-class engineers, scientists, and operators.</p>
              </div>
              <span className="shrink-0 text-[9px] font-bold px-2.5 py-1 rounded-full bg-emerald-500/20 text-emerald-300 border border-emerald-500/30 uppercase tracking-widest">
                Hiring Now
              </span>
            </div>

            {/* Core values — brief */}
            <div className="grid grid-cols-3 gap-4 mb-12">
              {[
                { label: 'Deep Technical Ownership', desc: 'Ship real products at the frontier of physics.' },
                { label: 'Mission-Driven Culture', desc: 'Every hire moves a global standard forward.' },
                { label: 'Flexible & Remote', desc: 'Edinburgh HQ + full distributed team support.' },
              ].map((v) => (
                <div key={v.label} className="bg-slate-900/30 border border-slate-800 rounded-xl p-5">
                  <p className="text-xs font-black text-white mb-1.5">{v.label}</p>
                  <p className="text-[11px] text-slate-500">{v.desc}</p>
                </div>
              ))}
            </div>

            {/* Open roles */}
            <div className="space-y-3">
              {openRoles.map((role, i) => (
                <motion.div
                  key={role.title}
                  initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                  className="flex items-center justify-between px-6 py-4 bg-slate-900/30 border border-slate-800 rounded-2xl hover:border-emerald-500/30 hover:bg-slate-900/50 transition-all group"
                >
                  <div>
                    <p className="text-sm font-bold text-slate-200 group-hover:text-white transition-colors">{role.title}</p>
                    <p className="text-xs text-slate-500 mt-0.5">{role.dept} · {role.location} · {role.type}</p>
                  </div>
                  <button className="flex items-center gap-1.5 text-xs font-bold text-slate-500 group-hover:text-emerald-400 transition-colors shrink-0 ml-4">
                    Apply <ArrowRight size={12} />
                  </button>
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}