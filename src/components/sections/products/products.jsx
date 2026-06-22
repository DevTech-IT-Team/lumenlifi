import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ArrowUpRight,
  ArrowLeft,
  Cpu,
  Download,
  Check,
  Zap,
  Shield,
  Link2,
  Box,
  Antenna,
  Network
} from 'lucide-react';


/* ==========================================================================
   1. GLOBAL PRODUCT DATA MATRIX
   ========================================================================== */
const productsData = [
  {
    slug: 'light-antenna-one',
    name: 'Lumen LIFI',
    badge: 'Device Integration Core',
    tagline: "The world's first mass-market LiFi transceiver array.",
    desc: 'An ultra-compact optical antenna designed for seamless integration inside connected devices, laptops, and consumer electronics. Operates alongside traditional RF chips to open massive unlicensed bands.',
    icon: Antenna,
    accent: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50/40',
    border: 'border-amber-100',
    imageUrl: 'https://images.unsplash.com/photo-1518770660439-4636190af475?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-7',
    specs: ['Gigabit Speeds', 'Ultra-Low Profile', 'Low Power Draw']
  },
  {
    slug: 'bridge-xc',
    name: 'Lumen LIFI',
    badge: 'Infrastructure Bridge',
    tagline: 'Gigabit wireless bridge for uncompromised connectivity.',
    desc: 'Robust high-speed terminal station engineered to interconnect network nodes over secure lightbeams without complex data routing overhead.',
    icon: Link2,
    accent: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50/40',
    border: 'border-cyan-100',
    imageUrl: 'https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-5',
    specs: ['PoE Input', 'Plug-and-Play Bridge', 'Full Duplex Up/Down']
  },
  {
    slug: 'kitefin-xe',
    name: 'Lumen LIFI',
    badge: 'Tactical Extension',
    tagline: 'Mission-critical environmental signal encryption.',
    desc: 'An aerospace and tactical field-grade component capable of handling high-stress deployments where radio silences are strictly mandated.',
    icon: Shield,
    accent: 'from-emerald-600 to-teal-600',
    bg: 'bg-emerald-50/40',
    border: 'border-emerald-100',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['IP67 Certified', 'Zero Radio Trace', 'TEMPEST Secure']
  },
  {
    slug: 'kitefin-tactical',
    name: 'Lumen LIFI',
    badge: 'Defense Network Deployment',
    tagline: 'The premiere tactical lightwave communication suite.',
    desc: 'Complete portable operational command array. Deploys secure local area wireless zones inside shelters, tents, and forward outposts inside seconds.',
    icon: Network,
    accent: 'from-slate-700 to-slate-900',
    bg: 'bg-slate-50',
    border: 'border-slate-200',
    imageUrl: 'https://images.unsplash.com/photo-1504384308090-c894fdcc538d?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['NATO Approved', 'MIL-STD-810H', 'Rapid Case Assembly']
  },
  {
    slug: 'the-lifi-cube',
    name: 'Lumen LIFI',
    badge: 'Modern Workplace Point',
    tagline: 'Desktop localized optical network containment array.',
    desc: 'Elegant, functional tabletop device splitting high-capacity fiber downlinks directly to local workstations via structural desktop cones.',
    icon: Box,
    accent: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-50/40',
    border: 'border-purple-100',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Desktop Footprint', 'Integrated Array', 'Multi-User Beam Split']
  },
  {
    slug: 'kitefin-office',
    name: 'Lumen LIFI',
    badge: 'Enterprise Overhead',
    tagline: 'Advanced ceiling luminaire transceivers.',
    desc: 'Replaces crowded, vulnerable traditional RF access points inside corporate trading zones with high-density architectural downlighting lines.',
    icon: Zap,
    accent: 'from-teal-600 to-cyan-500',
    bg: 'bg-teal-50/40',
    border: 'border-teal-100',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-12',
    specs: ['100+ Active Clients', 'Whole-Home Coverage', 'Seamless Handover Layer']
  }
];

/* ==========================================================================
   2. MAIN INTEGRATED PAGE ROUTE COMPONENT
   ========================================================================== */
export default function ProductsPage() {
  // Built-in reactive state switcher to cycle between catalog grid and active detail view
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);

  const activeProduct = productsData.find(p => p.slug === selectedProductSlug) || null;

  return (
    <div className="min-h-screen font-sans bg-white text-slate-800 antialiased selection:bg-emerald-100">
      <Head>
        <title>Lumen LIFI</title>
        <meta name="description" content={activeProduct ? activeProduct.tagline : 'Lumen LIFI — optical wireless products and services.'} />
      </Head>

      <Header />

      <main className="pt-24 select-none">
        <AnimatePresence mode="wait">
          {!activeProduct ? (

            /* ──── STAGE A: ASYMMETRIC CATALOG GRID ──── */
            <motion.section
              key="catalog-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.4 }}
              className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white py-16 lg:py-20"
            >
              <div className="absolute top-0 right-0 w-1/2 h-full opacity-30 pointer-events-none hidden lg:block">
                <div className="absolute top-[-10%] right-[-5%] w-[650px] h-[650px] bg-gradient-to-tr from-emerald-100 to-teal-50 rounded-full blur-[130px]" />
              </div>

              <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">

                <div className="max-w-3xl mb-16 space-y-4">
                  <span className="text-xs font-bold font-mono tracking-widest text-emerald-600 uppercase bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full w-max block">
                    Ecosystem Registry
                  </span>
                  <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                    Optical Hardware <br />
                    <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                      Transmission Modules
                    </span>
                  </h2>
                  <p className="text-slate-500 text-sm max-w-xl font-medium">
                    Explore our next-gen operational catalog. Select any transmission unit profile to unpack physical deployment blueprints, spec data sheets, and wave propagation vectors.
                  </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  {productsData.map((product, index) => {
                    const IconComponent = product.icon;

                    return (
                      <motion.div
                        key={product.slug}
                        initial={{ opacity: 0, y: 30 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-80px" }}
                        transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                        className={`${product.size} flex flex-col`}
                      >
                        <button
                          onClick={() => {
                            setSelectedProductSlug(product.slug);
                            if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                          }}
                          className="text-left w-full group relative flex flex-col h-full rounded-3xl border border-slate-200/60 bg-white p-6 sm:p-8 overflow-hidden hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300 hover:-translate-y-1"
                        >
                          <div className="grid grid-cols-1 md:grid-cols-12 gap-6 items-center h-full w-full">

                            <div className="md:col-span-7 space-y-4 order-2 md:order-1">
                              <div className="flex items-center gap-2">
                                <div className="p-2 rounded-xl bg-white border border-slate-100 shadow-sm text-slate-700">
                                  <IconComponent className="w-4 h-4" />
                                </div>
                                <span className="text-[10px] font-mono font-bold uppercase tracking-wider text-slate-400">
                                  {product.badge}
                                </span>
                              </div>

                              <div>
                                <h3 className="text-xl font-black text-slate-900 group-hover:text-emerald-700 transition-colors">
                                  {product.name}
                                </h3>
                                <p className="text-xs text-slate-400 font-mono font-semibold mt-0.5">
                                  {product.tagline}
                                </p>
                              </div>

                              <p className="text-slate-500 text-xs leading-relaxed font-normal max-w-md">
                                {product.desc}
                              </p>

                              <div className="flex flex-wrap gap-1.5 pt-2">
                                {product.specs.map((spec) => (
                                  <span key={spec} className="bg-slate-50 border border-slate-200/60 text-slate-600 font-mono text-[9px] font-bold px-2.5 py-1 rounded-md">
                                    ✓ {spec}
                                  </span>
                                ))}
                              </div>

                              <div className="pt-4 flex items-center gap-1 text-xs text-emerald-600 font-bold font-mono uppercase tracking-wider">
                                Explore Technical Specs
                                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </div>
                            </div>

                            <div className="md:col-span-5 relative w-full aspect-[4/3] md:aspect-square order-1 md:order-2">
                              <div className={`absolute inset-0 bg-gradient-to-tr ${product.accent} rounded-[40px_20px_60px_30px] transform rotate-3 scale-[1.03] opacity-10 blur-sm group-hover:rotate-1 transition-transform duration-500`} />

                              <div className="w-full h-full rounded-[40px_20px_60px_30px] overflow-hidden border-2 border-white shadow-md relative">
                                <img
                                  src={product.imageUrl}
                                  alt={product.name}
                                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 transition-transform duration-700 ease-out"
                                />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/10 to-transparent mix-blend-multiply" />
                              </div>

                              <div className="absolute bottom-3 left-[-8px] bg-white/90 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/60 shadow-md pointer-events-none opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
                                <p className="text-[9px] font-mono font-black text-slate-800 uppercase tracking-widest">Protocol</p>
                                <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-emerald-500" /> IEEE 802.11bb
                                </p>
                              </div>
                            </div>

                          </div>
                        </button>
                      </motion.div>
                    );
                  })}
                </div>

              </div>
            </motion.section>
          ) : (

            /* ──── STAGE B: PREMIUM SPECIFICATION DEEP DIVE PANEL ──── */
            <motion.section
              key="detail-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.4, ease: 'easeInOut' }}
              className="max-w-6xl mx-auto px-6 py-12 pb-24"
            >
              <button
                onClick={() => setSelectedProductSlug(null)}
                className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-emerald-600 transition-colors mb-12 group font-bold"
              >
                <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
                BACK TO ECOSYSTEM CATALOG
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

                <div className="lg:col-span-5 relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${activeProduct.accent} rounded-[50px_20px_80px_40px] transform rotate-2 scale-[1.02] opacity-15 blur-sm`} />
                  <div className="w-full aspect-[4/5] rounded-[50px_20px_80px_40px] overflow-hidden border-4 border-slate-50 shadow-xl relative">
                    <img src={activeProduct.imageUrl} alt={activeProduct.name} className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[10px] font-bold uppercase">
                    <Cpu className="w-3.5 h-3.5 text-slate-700" /> SYSTEM NODE // {activeProduct.badge}
                  </div>

                  <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                    {activeProduct.name}
                  </h1>

                  <p className="text-base text-slate-500 font-medium font-mono leading-relaxed">
                    {activeProduct.tagline}
                  </p>

                  <div className="p-6 bg-slate-50 border border-slate-200/70 rounded-2xl">
                    <h3 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-emerald-600" /> Architectural Statement
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">
                      {activeProduct.desc}
                    </p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest">
                      VERIFIED HARDWARE PROTOCOLS
                    </h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeProduct.specs.concat(['Sub-millisecond latency profile', '100% physical containment isolation']).map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                    <button className="h-12 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2">
                      <Download className="w-4 h-4" /> Download CAD Data Sheets
                    </button>
                    <Link href="/contact" className="h-12 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center shadow-md shadow-emerald-600/10">
                      Request Engineering Review
                    </Link>
                  </div>

                </div>
              </div>

            </motion.section>
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}