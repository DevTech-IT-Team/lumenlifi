import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import { FileText, BookOpen, ChevronDown, ExternalLink, Download, Star, ArrowRight } from 'lucide-react';

/* ── Technical Documents repository ── */
const techDocs = [
  { title: 'IEEE 802.11bb LiFi Standard — Overview', type: 'Standard', date: 'Jun 2023', badge: 'IEEE', size: '2.4 MB' },
  { title: 'Lumen LIFI — Engineering Design Map', type: 'Design Asset', date: 'Mar 2026', badge: 'Internal', size: '1.1 MB' },
  { title: 'Optical Spectrum vs RF Spectrum — Comparative Analysis', type: 'Whitepaper', date: 'Jan 2026', badge: 'Research', size: '800 KB' },
  { title: 'LiFi Deployment Guide — Enterprise Environments', type: 'Guide', date: 'Apr 2026', badge: 'Deployment', size: '3.2 MB' },
  { title: 'Signal Containment Protocols — Physical Layer Security', type: 'Technical Note', date: 'Feb 2026', badge: 'Security', size: '560 KB' },
];

/* ── Validated studies / reviews ── */
const allStudies = [
  { org: 'Lumen LIFI × Fraunhofer Institute', title: 'Validated 10 Gbps Peak Throughput in Dense Office Deployment', category: 'Performance', date: 'May 2026', stars: 5, excerpt: 'Independent lab validation achieved consistent 10 Gbps symmetric throughput across 40 luminaire nodes in a 1,200 m² open-plan office environment with zero packet degradation.' },
  { org: 'UK Ministry of Defence', title: 'LiFi Signal Containment Verification — Classified Zone Trials', category: 'Security', date: 'Apr 2026', stars: 5, excerpt: 'Empirical containment tests confirmed zero RF signal propagation beyond designated perimeter in 100% of trials across 12 test configurations.' },
  { org: 'NHS Digital Innovation Hub', title: 'LiFi Interference Assessment in Surgical Environments', category: 'Healthcare', date: 'Mar 2026', stars: 5, excerpt: 'Zero electromagnetic interference detected across 34 connected medical devices during simultaneous 1 Gbps data transfer in active operating theatre.' },
  { org: 'Singapore Smart Infrastructure', title: 'Urban LiFi Mesh Deployment — 200-Node Performance Audit', category: 'Industrial', date: 'Feb 2026', stars: 5, excerpt: 'Sub-1 ms handoff latency achieved across 200 luminaire nodes in a transit authority smart infrastructure pilot covering 15,000 m².' },
  { org: 'Goldman Sachs Technology', title: 'HFT Latency Benchmarks — LiFi vs Fibre Optical', category: 'Finance', date: 'Jan 2026', stars: 4, excerpt: 'LiFi demonstrated sub-0.8 ms deterministic latency, surpassing Wi-Fi 6E by 94% in dense trading floor conditions with 300+ concurrent sessions.' },
  { org: 'MIT Media Lab', title: 'Optical Wireless Spectrum Utilization Study', category: 'Research', date: 'Dec 2025', stars: 5, excerpt: 'Demonstrated effective use of 400 THz bandwidth headroom compared to 300 GHz ceiling on radio spectrum — confirming 1,000× advantage of optical wireless.' },
];

const INITIAL_SHOW = 3;

const badgeColors = {
  IEEE: 'bg-emerald-500/20 text-emerald-300 border-emerald-500/30',
  Internal: 'bg-slate-500/20 text-slate-300 border-slate-500/30',
  Research: 'bg-blue-500/20 text-blue-300 border-blue-500/30',
  Deployment: 'bg-teal-500/20 text-teal-300 border-teal-500/30',
  Security: 'bg-rose-500/20 text-rose-300 border-rose-500/30',
};

const categoryColors = {
  Performance: 'text-emerald-400 bg-emerald-500/10',
  Security: 'text-rose-400 bg-rose-500/10',
  Healthcare: 'text-blue-400 bg-blue-500/10',
  Industrial: 'text-amber-400 bg-amber-500/10',
  Finance: 'text-violet-400 bg-violet-500/10',
  Research: 'text-teal-400 bg-teal-500/10',
};

export default function ResourceEnginePage() {
  const [showAll, setShowAll] = useState(false);
  const [activeFilter, setActiveFilter] = useState('All');
  const filters = ['All', 'Performance', 'Security', 'Healthcare', 'Industrial', 'Finance', 'Research'];

  const filtered = activeFilter === 'All' ? allStudies : allStudies.filter(s => s.category === activeFilter);
  const visible = showAll ? filtered : filtered.slice(0, INITIAL_SHOW);

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased bg-[#020D08] text-slate-100">
      <Head>
        <title>Insights | Lumen LIFI</title>
        <meta name="description" content="Access IEEE 802.11bb documentation, validated deployment studies, and technical design assets for LiFi optical wireless systems." />
      </Head>

      <Header />

      <main className="flex-grow">
        {/* Hero */}
        <section className="relative pt-36 pb-16 border-b border-emerald-900/20 overflow-hidden">
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_40%_at_50%_-10%,rgba(16,185,129,0.07),transparent)]" />
          <div className="max-w-5xl mx-auto px-6 text-center relative z-10">
            <span className="inline-flex items-center gap-2 text-[10px] font-bold tracking-[0.2em] text-emerald-400 uppercase bg-emerald-500/10 border border-emerald-500/20 px-4 py-2 rounded-full mb-6">
              Resource Engine
            </span>
            <h1 className="text-4xl sm:text-6xl font-black tracking-tight text-white mb-5">
              Knowledge Portal
            </h1>
            <p className="text-slate-400 text-lg max-w-xl mx-auto leading-relaxed">
              IEEE documentation, validated performance studies, and technical design assets — consolidated in one place.
            </p>
          </div>
        </section>

        <div className="max-w-5xl mx-auto px-6 py-20 space-y-24">

          {/* ── Technical Repository ── */}
          <section id="technical">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-blue-500/20 border border-blue-500/30 flex items-center justify-center">
                  <FileText className="w-4 h-4 text-blue-400" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white">Technical Repository</h2>
                  <p className="text-xs text-slate-500">IEEE 802.11bb documentation and design asset maps</p>
                </div>
              </div>

              <div className="rounded-3xl border border-slate-800 overflow-hidden bg-slate-900/30">
                {techDocs.map((doc, i) => (
                  <motion.div
                    key={doc.title}
                    initial={{ opacity: 0, x: -10 }} whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }} transition={{ delay: i * 0.07 }}
                    className="flex items-center justify-between px-6 py-4 border-b border-slate-800/60 last:border-0 hover:bg-white/3 transition-colors group"
                  >
                    <div className="flex items-center gap-4 min-w-0">
                      <div className="w-8 h-8 rounded-lg bg-slate-800 flex items-center justify-center shrink-0">
                        <FileText className="w-3.5 h-3.5 text-slate-400" />
                      </div>
                      <div className="min-w-0">
                        <p className="text-sm font-semibold text-slate-200 truncate group-hover:text-white transition-colors">{doc.title}</p>
                        <div className="flex items-center gap-2 mt-1">
                          <span className={`text-[9px] font-bold px-1.5 py-0.5 rounded border ${badgeColors[doc.badge] || 'bg-slate-700 text-slate-300 border-slate-600'}`}>{doc.badge}</span>
                          <span className="text-[10px] text-slate-600">{doc.type} · {doc.date} · {doc.size}</span>
                        </div>
                      </div>
                    </div>
                    <div className="flex items-center gap-2 shrink-0 ml-4">
                      <button className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-emerald-400 transition-colors" aria-label="Download">
                        <Download className="w-3.5 h-3.5" />
                      </button>
                      <button className="p-2 rounded-lg hover:bg-white/5 text-slate-500 hover:text-blue-400 transition-colors" aria-label="Open">
                        <ExternalLink className="w-3.5 h-3.5" />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          </section>

          {/* ── Validation Studies / Show More Hub ── */}
          <section id="studies">
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="flex items-center gap-3 mb-8">
                <div className="w-9 h-9 rounded-xl bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center">
                  <BookOpen className="w-4 h-4 text-emerald-400" />
                </div>
                <div>
                  <h2 className="text-xl font-black text-white">Validation Study Hub</h2>
                  <p className="text-xs text-slate-500">Progressive disclosure — user-validated performance studies</p>
                </div>
              </div>

              {/* Category filters */}
              <div className="flex flex-wrap gap-2 mb-8">
                {filters.map(f => (
                  <button
                    key={f}
                    onClick={() => { setActiveFilter(f); setShowAll(false); }}
                    id={`filter-${f.toLowerCase()}`}
                    className={`px-4 py-2 rounded-xl text-xs font-bold transition-all duration-200 ${
                      activeFilter === f
                        ? 'bg-emerald-500 text-white shadow-lg shadow-emerald-900/30'
                        : 'bg-white/5 border border-white/10 text-slate-400 hover:bg-white/10 hover:text-slate-200'
                    }`}
                  >
                    {f}
                  </button>
                ))}
              </div>

              <div className="space-y-4">
                <AnimatePresence>
                  {visible.map((study, i) => (
                    <motion.div
                      key={study.title}
                      initial={{ opacity: 0, y: 15 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
                      transition={{ delay: i * 0.05, duration: 0.4 }}
                      className="bg-slate-900/40 border border-slate-800 rounded-2xl p-6 hover:border-emerald-500/30 transition-colors group"
                    >
                      <div className="flex items-start justify-between gap-4 mb-3">
                        <div className="flex items-center gap-2 flex-wrap">
                          <span className={`text-[9px] font-bold px-2 py-1 rounded-lg ${categoryColors[study.category]}`}>{study.category}</span>
                          <span className="text-[10px] text-slate-600">{study.org} · {study.date}</span>
                        </div>
                        <div className="flex items-center gap-0.5 shrink-0">
                          {[...Array(study.stars)].map((_, j) => (
                            <Star key={j} className="w-3 h-3 text-amber-400 fill-amber-400" />
                          ))}
                        </div>
                      </div>
                      <h3 className="text-sm font-bold text-slate-200 mb-2 group-hover:text-white transition-colors">{study.title}</h3>
                      <p className="text-xs text-slate-500 leading-relaxed">{study.excerpt}</p>
                    </motion.div>
                  ))}
                </AnimatePresence>
              </div>

              {/* Progressive "Show More" disclosure */}
              {filtered.length > INITIAL_SHOW && (
                <div className="text-center mt-8">
                  <button
                    onClick={() => setShowAll(!showAll)}
                    id="show-more-studies"
                    className="inline-flex items-center gap-2 px-8 py-3 rounded-xl bg-white/5 border border-white/10 text-slate-300 font-bold text-sm hover:bg-white/10 hover:border-emerald-500/30 hover:text-emerald-400 transition-all duration-200"
                  >
                    {showAll ? 'Show Less' : `Show ${filtered.length - INITIAL_SHOW} More Studies`}
                    <ChevronDown className={`w-4 h-4 transition-transform duration-200 ${showAll ? 'rotate-180' : ''}`} />
                  </button>
                </div>
              )}
            </motion.div>
          </section>

        </div>
      </main>

      <Footer />
    </div>
  );
}