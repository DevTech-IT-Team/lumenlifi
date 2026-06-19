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
  Activity,
  Laptop,
  Sun,
  ShieldCheck,
  HelpCircle,
  FileText,
  Mail,
  Phone,
  MapPin,
  Info
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

/* ==========================================================================\
   6-PRODUCT ADVANCED RESIDENTIAL ECOSYSTEM MATRIX (LIGHT & EMERALD THEME)
   ========================================================================== */
const productsData = [
  {
    slug: 'phi-core-router',
    name: 'Lumen LIFI',
    badge: 'Central Gateway Unit',
    tagline: 'Translating incoming residential fiber links into raw optical data streams.',
    desc: 'The centralized processing brain of your home broadband network. It hooks directly into standard high-speed home fiber configurations and translates data lines instantly into high-frequency light frequencies without emitting radio clutter.',
    icon: Cpu,
    accent: 'from-emerald-500 to-teal-500',
    bg: 'bg-emerald-50/40',
    border: 'border-emerald-100',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-7',
    specs: ['Fiber-to-Light Direct Engine', 'Zero Radio Frequency Clutter', 'Multi-Beam Routing Backbone']
  },
  {
    slug: 'photon-antenna-one',
    name: 'Lumen LIFI',
    badge: 'Downlight Transceiver Array',
    tagline: 'High-speed home broadband hidden seamlessly inside beautiful lighting.',
    desc: 'Replaces archaic, vulnerable wireless antennas with premium, flicker-free ceiling transceivers. Floods your dynamic living spaces or home offices with deep, beautiful illumination and symmetric gigabit data lines simultaneously.',
    icon: Sun,
    accent: 'from-amber-500 to-orange-500',
    bg: 'bg-amber-50/40',
    border: 'border-amber-100',
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-5',
    specs: ['Dual-Emission LED Matrix', 'Symmetric Gigabit Downlink', 'Prism Containment Signal Boundary']
  },
  {
    slug: 'lightwave-usb-dongle',
    name: 'Lumen LIFI',
    badge: 'Client Device Adapter',
    tagline: 'Instant microscale lightwave reception for terminal devices.',
    desc: 'An ultra-compact structural terminal adapter that snaps directly into standard laptop or computer USB-C ports. Houses microscopic optical sensor grids engineered to track overhead light streams instantly.',
    icon: Laptop,
    accent: 'from-cyan-500 to-blue-500',
    bg: 'bg-cyan-50/40',
    border: 'border-cyan-100',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Plug-and-Play Wave Detection', 'Nanosecond Photodiode Array', 'Low-Voltage Power Footprint']
  },
  {
    slug: 'lumen-phi-bridge-node',
    name: 'Lumen LIFI',
    badge: 'Room-to-Room Relayer',
    tagline: 'Pristine light-wave propagation across residential barriers.',
    desc: 'Wireless room relay terminal configured to interconnect signal zones over structural optical lines without compromising speed parameters or suffering from traditional neighborhood signal interference.',
    icon: Activity,
    accent: 'from-emerald-600 to-teal-600',
    bg: 'bg-emerald-50/40',
    border: 'border-emerald-100',
    imageUrl: 'https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Integrated Optical Mirroring', 'Sub-Millisecond Multi-Hops', 'Wall-Contained Security Block']
  },
  {
    slug: 'the-ai-mesh-cube',
    name: 'Lumen LIFI',
    badge: 'Desktop Compute Array',
    tagline: 'Dedicated local AI application tracking and containment unit.',
    desc: 'Elegant, functional tabletop workspace hardware node splitting high-capacity optical backbones to handle un-throttled data loads required by modern desktop AI training configurations.',
    icon: Zap,
    accent: 'from-purple-500 to-indigo-500',
    bg: 'bg-purple-50/40',
    border: 'border-purple-100',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Desktop Compute Footprint', 'Microsecond Packet Trailing', 'AI Cloud Native Optimization']
  },
  {
    slug: 'lumen-overhead-driver',
    name: 'Lumen LIFI',
    badge: 'Whole-Home Mainframe Distribution',
    tagline: 'Smarter structural lighting array configuration power grids.',
    desc: 'Replaces crowded, vulnerable traditional RF configurations inside wide residential properties. Fits right inside electrical junction clusters to power multiple overhead light nodes with massive unlicensed band capabilities.',
    icon: Shield,
    accent: 'from-teal-600 to-cyan-500',
    bg: 'bg-teal-50/40',
    border: 'border-teal-100',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-12',
    specs: ['Whole-Home Node Handover Layer', '100+ Terminal Client Capacity', 'Unlicensed Band Optimization']
  }
];

export default function ProductsPage() {
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const activeProduct = productsData.find(p => p.slug === selectedProductSlug) || null;

  return (
    <div className="min-h-screen font-sans bg-white text-slate-800 antialiased selection:bg-emerald-100 selection:text-emerald-900">
      <Head>
        <title>Lumen LIFI</title>
        <meta name="description" content="Lumen LIFI — residential optical wireless internet plans and hardware." />
        <meta name="description" content="Explore next-generation residential broadband delivered via ultra-fast light waves outperforming consumer radio networks." />
      </Head>

      <Header />

      <main className="pt-24 select-none">
        {/* Merchant Layer Compliance Status Bar */}
        <div className="bg-slate-50 border-b border-slate-200/60 py-2.5 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-emerald-700 font-bold">
              <ShieldCheck className="w-4 h-4 shrink-0" />
              <span>Next-Generation Residential Internet Provider Framework</span>
            </div>
            <div className="flex gap-4 text-slate-400">
              <span>Verified Secure Checkout Compliance</span>
              <span>IEEE 802.11bb Protocol Standard</span>
            </div>
          </div>
        </div>

        <AnimatePresence mode="wait">
          {!activeProduct ? (
            <motion.div
              key="catalog-view"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="space-y-16 py-16"
            >
              {/* Concept Framework Text Block */}
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
                  <div className="lg:col-span-7 space-y-4">
                    <span className="text-xs font-bold font-mono tracking-widest text-emerald-700 uppercase bg-emerald-50 border border-emerald-100 px-3 py-1 rounded-full w-max block">
                      Velocity Registry
                    </span>
                    <h2 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">
                      Home Broadband <br />
                      <span className="bg-gradient-to-r from-emerald-600 to-teal-600 bg-clip-text text-transparent">
                        Delivered Via Light.
                      </span>
                    </h2>
                    <p className="text-slate-500 text-sm max-w-xl font-medium leading-relaxed">
                      Ditch congested traditional consumer ISPs. Traditional systems like Jio or Airtel depend on overlapping <strong>Radio Waves (Wi-Fi)</strong> that bottleneck behind barriers and leak metrics. Lumen LIFI transmits ultra-fast internet over secure, unlicensed <strong>Light Waves (Li-Fi)</strong> directly into your workspace.
                    </p>
                  </div>

                  {/* Physics Distinction Sidebar */}
                  <div className="lg:col-span-5 bg-slate-50 border border-slate-200/60 rounded-2xl p-5 space-y-2">
                    <h4 className="text-xs font-mono font-bold text-emerald-700 uppercase flex items-center gap-1.5">
                      <Zap className="w-3.5 h-3.5" /> Physics Separation Protocol
                    </h4>
                    <p className="text-[11px] text-slate-500 leading-relaxed font-normal">
                      Light waves are completely contained inside your walls and thousands of times wider than traditional radio channels. This structural setup is highly optimized for multi-gigabit streaming and local AI processing applications with zero micro-stutter.
                    </p>
                  </div>
                </div>
              </div>

              {/* 6-Product Layout Grid */}
              <div className="max-w-7xl mx-auto px-6 lg:px-8">
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
                              <div className="flex items-center gap-1 text-xs text-emerald-600 font-bold font-mono uppercase tracking-wider pt-4">
                                View Technical Blueprints
                                <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                              </div>
                            </div>

                            {/* Futuristic Concept Art Container */}
                            <div className="md:col-span-5 relative w-full aspect-[4/3] md:aspect-square order-1 md:order-2">
                              <div className={`absolute inset-0 bg-gradient-to-tr ${product.accent} rounded-[40px_20px_60px_30px] transform rotate-3 scale-[1.03] opacity-10 blur-sm group-hover:rotate-1 transition-transform duration-500`} />
                              <div className="w-full h-full rounded-[40px_20px_60px_30px] overflow-hidden border-2 border-white shadow-md relative bg-slate-900">
                                <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover transform scale-105 group-hover:scale-100 opacity-80 group-hover:opacity-100 mix-blend-luminosity hover:mix-blend-normal transition-all duration-700 ease-out" />
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                              </div>
                              <div className="absolute bottom-3 left-[-8px] bg-white/90 backdrop-blur-md rounded-xl px-3 py-1.5 border border-white/60 shadow-md pointer-events-none opacity-0 group-hover:opacity-100 translate-y-2 group-hover:translate-y-0 transition-all duration-300 hidden sm:block">
                                <p className="text-[9px] font-mono font-black text-slate-800 uppercase tracking-widest">Theme Architecture</p>
                                <p className="text-[10px] font-bold text-emerald-600 flex items-center gap-1">
                                  <span className="w-1 h-1 rounded-full bg-emerald-500" /> High-Tech Concept Art
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

              {/* Regulatory Transparency & Norms Framework Layout */}
              <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-slate-900">
                    <FileText className="w-4 h-4 text-emerald-600" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Required Documentation Links</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">Review our residential network configurations, transparent user guidelines, and operational deployment rules.</p>
                  <div className="space-y-2 pt-2 font-mono text-xs font-bold">
                    <Link href="/privacy" className="block text-emerald-600 hover:underline">→ Infrastructure Privacy Policy</Link>
                    <Link href="/terms" className="block text-emerald-600 hover:underline">→ System Terms & Conditions</Link>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-slate-900">
                    <Mail className="w-4 h-4 text-emerald-600" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Corporate Identification Desk</h3>
                  </div>
                  <p className="text-xs text-slate-500 leading-relaxed">Official commercial deployment requests or compliance verification checks can communicate directly with our centralized desk:</p>
                  <div className="space-y-1.5 pt-1 text-xs font-mono text-slate-600">
                    <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-slate-400" /> +91 (Commercial Support Hub)</p>
                    <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-slate-400" /> engineering@lumenfi.com</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-slate-400" /> Residential Operations Core, India Hub</p>
                  </div>
                </div>

                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-slate-900">
                    <ShieldCheck className="w-4 h-4 text-emerald-600" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Logistical Parameter Matrix</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Deployment Windows</strong>: Home hardware kits step into configuration cycles within 3–5 structural business days.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-600">
                      <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                      <span><strong>Transparent Invoicing</strong>: No localized frequency surcharges or surprise equipment taxes added later.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Science Clarification FAQ Block */}
              <div className="max-w-4xl mx-auto px-6 pt-8">
                <div className="text-center space-y-2 mb-12">
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">Frequently Evaluated Physics</h2>
                  <p className="text-emerald-700 text-xs font-mono uppercase tracking-widest font-bold">Unpacking The Signal Transmission Paradigm:</p>
                </div>

                <div className="space-y-4">
                  {[
                    {
                      q: "How does this scale beyond my standard Jio or Airtel Fiber setup?",
                      a: "Traditional fiber providers do an excellent job bringing high-speed data lines to your home boundary, but they bottleneck inside your rooms by handing that traffic over to standard radio wave Wi-Fi routers. Lumen LIFI takes your fiber line and routes it straight through clean overhead visible light waves, preventing your speeds from suffering wireless degradation across walls."
                    },
                    {
                      q: "Why is optical wireless internet highly optimized for next-generation AI platforms?",
                      a: "Modern AI network arrays require persistent, un-throttled data pipes with zero packet delay. Because light waves operate on an entirely separate, massive un-congested spectrum bands, it eliminates typical micro-stuttering or drops in tracking speed, giving local AI processing environments instantaneous data access metrics."
                    }
                  ].map((faq, index) => (
                    <div
                      key={index}
                      className="border border-slate-200 rounded-xl p-5 bg-white cursor-pointer hover:border-slate-300 transition-colors"
                      onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h4 className="text-sm font-bold text-slate-900 font-mono">{faq.q}</h4>
                        <HelpCircle className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${activeFaq === index ? 'rotate-180 text-emerald-600' : ''}`} />
                      </div>
                      {activeFaq === index && (
                        <p className="text-xs text-slate-500 mt-3 leading-relaxed border-t border-slate-100 pt-3 font-sans">
                          {faq.a}
                        </p>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ) : (
            /* Sub-Page Detail Specification Block */
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
                RETURN TO HARDWARE ECOSYSTEM
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${activeProduct.accent} rounded-[50px_20px_80px_40px] transform rotate-2 scale-[1.02] opacity-15 blur-sm`} />
                  <div className="w-full aspect-[4/5] rounded-[50px_20px_80px_40px] overflow-hidden border-4 border-slate-50 shadow-xl relative bg-slate-900">
                    <img src={activeProduct.imageUrl} alt={activeProduct.name} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[10px] font-bold uppercase">
                    <Cpu className="w-3.5 h-3.5 text-slate-700" /> CORE HARDWARE // {activeProduct.badge}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-black text-slate-900 tracking-tight leading-none">{activeProduct.name}</h1>
                  <p className="text-base text-emerald-700 font-semibold font-mono leading-relaxed">{activeProduct.tagline}</p>

                  <div className="p-6 bg-slate-50 border border-slate-200/70 rounded-2xl">
                    <h3 className="font-mono text-xs font-bold text-slate-800 uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-emerald-600" /> Architectural Statement
                    </h3>
                    <p className="text-xs text-slate-500 leading-relaxed font-normal">{activeProduct.desc}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-mono text-[11px] font-bold text-slate-400 uppercase tracking-widest">VERIFIED PROTOCOL SPECIFICATIONS</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeProduct.specs.concat(['Microsecond packet translation layer', '100% optical physical containment boundary']).map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs font-medium text-slate-600">
                          <Check className="w-4 h-4 text-emerald-500 shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                    <button className="h-12 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2">
                      <Download className="w-4 h-4" /> Download Tech Blueprint
                    </button>
                    <Link href="/contact" className="h-12 px-6 rounded-xl bg-emerald-600 hover:bg-emerald-500 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center shadow-md shadow-emerald-600/10">
                      Request Deployment Review
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