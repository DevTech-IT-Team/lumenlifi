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
   6-PRODUCT ADVANCED RESIDENTIAL ECOSYSTEM MATRIX (PHOTONICS CYAN THEME)
   ========================================================================== */
const productsData = [
  {
    slug: 'lumen-core-downlighters',
    name: 'Lumen Core Downlighters',
    price: '$349',
    category: 'Network Foundation',
    badge: 'Network Foundation',
    tagline: 'The heart of your network.',
    desc: 'These architectural LED ceiling lights act as your invisible routers, beaming dedicated 10 Gbps data cones to every room in your house while providing pristine, tunable ambient lighting.',
    icon: Cpu,
    accent: 'from-cyan-500 to-blue-600',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-6',
    specs: ['10 Gbps Data Cones', 'Tunable Ambient Light', 'Zero RF Radiation']
  },
  {
    slug: 'lumen-photon-dongle',
    name: 'Lumen Photon Dongle (USB-C)',
    price: '$129',
    category: 'Network Foundation',
    badge: 'Network Foundation',
    tagline: 'Instantly upgrade your current hardware.',
    desc: 'Plug this microscopic receiver into any laptop, PC, or tablet to instantly transition your device from crowded Wi-Fi to a dedicated 10 Gbps optical link.',
    icon: Laptop,
    accent: 'from-cyan-600 to-cyan-400',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-6',
    specs: ['Microscopic Receiver', 'USB-C Plug-and-Play', 'Dedicated 10 Gbps Link']
  },
  {
    slug: 'lumen-matrix-8k-tv',
    name: 'Lumen Matrix 8K TV',
    price: '$1,999',
    category: 'Entertainment & Computing',
    badge: 'Entertainment & Computing',
    tagline: "The first television that doesn't compress your media.",
    desc: 'Powered by a direct optical link from your ceiling, it streams raw, uncompressed 8K video and cloud gaming seamlessly, entirely immune to the bandwidth being used in the rest of the house.',
    icon: Sun,
    accent: 'from-blue-500 to-indigo-600',
    imageUrl: 'https://images.unsplash.com/photo-1507668077129-56e32842fceb?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Uncompressed 8K Video', 'Cloud Gaming Sync', 'Immune to Congestion']
  },
  {
    slug: 'lumen-studio-laptop',
    name: 'Lumen Studio Laptop',
    price: '$2,499',
    category: 'Entertainment & Computing',
    badge: 'Entertainment & Computing',
    tagline: 'Designed for spatial computing and extreme rendering.',
    desc: 'With an integrated Li-Fi transceiver built directly into the lid, you receive hardwired, 10 Gbps speeds without ever plugging in an ethernet cable.',
    icon: Laptop,
    accent: 'from-cyan-500 to-blue-500',
    imageUrl: 'https://images.unsplash.com/photo-1581092335397-9583fe92d232?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Integrated Transceiver', '10 Gbps Hardwired Speeds', 'Designed for Spatial Computing']
  },
  {
    slug: 'lumen-echo-soundbar',
    name: 'Lumen Echo Soundbar',
    price: '$599',
    category: 'Entertainment & Computing',
    badge: 'Entertainment & Computing',
    tagline: 'Forget audio syncing issues.',
    desc: 'Connected via sub-millisecond light beams, this speaker processes voice commands and AI home requests the literal millisecond you finish speaking.',
    icon: Activity,
    accent: 'from-purple-500 to-indigo-500',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Sub-millisecond Light Beams', 'Instant AI Processing', 'Pristine Audio Sync']
  },
  {
    slug: 'lumen-sentinel-video-doorbell',
    name: 'Lumen Sentinel Video Doorbell',
    price: '$349',
    category: 'Security & Perimeter',
    badge: 'Security & Perimeter',
    tagline: 'Unjammable front-door security.',
    desc: 'Powered by the Li-Fi beam from your porch light, it streams flawless 4K video instantly to your phone. Because it relies on light, it is mathematically impossible for thieves to use Wi-Fi jammers to blind it.',
    icon: Shield,
    accent: 'from-cyan-600 to-blue-400',
    imageUrl: 'https://images.unsplash.com/photo-1558494949-ef010cbdcc31?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-6',
    specs: ['Porch Light Powered', 'Flawless 4K Stream', 'Jamm-Proof Architecture']
  },
  {
    slug: 'lumen-aegis-floodlight-cams',
    name: 'Lumen Aegis Floodlight Cams',
    price: '$499',
    category: 'Security & Perimeter',
    badge: 'Security & Perimeter',
    tagline: 'Absolute perimeter control.',
    desc: 'These ultra-bright exterior lights double as multi-gigabit data transmitters, securely linking your outdoor cameras to your local server without broadcasting your security feed onto the public street.',
    icon: ShieldCheck,
    accent: 'from-slate-700 to-slate-900',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-6',
    specs: ['Multi-gigabit Uplink', 'Ultra-bright LEDs', 'Air-gapped Perimeter']
  },
  {
    slug: 'lumen-glacier-fridge',
    name: 'Lumen Glacier Fridge',
    price: '$3,499',
    category: 'Conscious Appliances & Home Automation',
    badge: 'Conscious Appliances & Home Automation',
    tagline: 'The zero-lag kitchen command center.',
    desc: 'Say goodbye to the loading screens of traditional fridges. Stream 4K cooking tutorials, sync your AI grocery trackers, and run your home dashboard with zero buffering, right from the door.',
    icon: Activity,
    accent: 'from-blue-600 to-cyan-500',
    imageUrl: 'https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Zero Buffering Dashboard', 'AI Grocery Trackers', '4K Tutorial Streaming']
  },
  {
    slug: 'lumen-precision-robot-vacuum',
    name: 'Lumen Precision Robot Vacuum',
    price: '$899',
    category: 'Conscious Appliances & Home Automation',
    badge: 'Conscious Appliances & Home Automation',
    tagline: 'Standard vacuums lose their maps in Wi-Fi dead zones.',
    desc: 'Powered by a continuous optical link, this vacuum processes real-time 3D spatial mapping and AI obstacle avoidance with zero latency, meaning it never bumps into a chair leg again.',
    icon: Zap,
    accent: 'from-cyan-500 to-indigo-500',
    imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Continuous Optical Link', '3D Spatial Mapping', 'Zero Latency Navigation']
  },
  {
    slug: 'lumen-eclipse-window-shades',
    name: 'Lumen Eclipse Window Shades',
    price: '$449',
    category: 'Conscious Appliances & Home Automation',
    badge: 'Conscious Appliances & Home Automation',
    tagline: 'True ambient intelligence.',
    desc: "These motorized shades communicate instantly with your ceiling's optical sensors, adjusting silently to the sun's position and your circadian rhythm without ever requiring a clunky, third-party bridge.",
    icon: Shield,
    accent: 'from-cyan-600 to-blue-400',
    imageUrl: 'https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-4',
    specs: ['Optical Sensor Sync', 'Circadian Adjustment', 'Silent Motor Drivers']
  },
  {
    slug: 'lumen-climate-hub',
    name: 'Lumen Climate Hub',
    price: '$299',
    category: 'Conscious Appliances & Home Automation',
    badge: 'Conscious Appliances & Home Automation',
    tagline: 'A thermostat that actually thinks.',
    desc: 'It uses invisible infrared beams to detect exactly how many people are in a room, micro-adjusting the temperature instantly with zero network delay.',
    icon: Cpu,
    accent: 'from-cyan-500 to-blue-600',
    imageUrl: 'https://images.unsplash.com/photo-1451187580459-43490279c0fa?auto=format&fit=crop&q=80&w=600',
    size: 'lg:col-span-12',
    specs: ['Infrared Occupancy Tracking', 'Micro-Adjust Temperature', 'Zero Network Delay']
  }
];

export default function ProductsPage() {
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);
  const [activeFaq, setActiveFaq] = useState(0);
  const activeProduct = productsData.find(p => p.slug === selectedProductSlug) || null;

  return (
    <div className="min-h-screen font-sans bg-[#0B111E] text-slate-200 antialiased selection:bg-cyan-950/50 selection:text-cyan-400 transition-colors duration-300">
      <Head>
        <title>Lumen LIFI | Shop the Conscious Home Ecosystem</title>
        <meta name="description" content="Welcome to the world's first fully optical conscious home. Every device in the LumenFi ecosystem is equipped with integrated Li-Fi receivers." />
      </Head>

      <Header />

      <main className="pt-24 select-none">
        {/* Merchant Layer Compliance Status Bar */}
        <div className="bg-[#090D1A] border-b border-slate-800/60 py-3 px-6">
          <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-xs font-mono">
            <div className="flex items-center gap-2 text-[#00D2FF] font-bold tracking-wide">
              <Zap className="w-4 h-4 text-[#00D2FF] animate-pulse" />
              <span>10 Gbps Unthrottled Speed</span>
            </div>
            <div className="flex items-center gap-2 text-[#00D2FF] font-bold tracking-wide">
              <Shield className="w-4 h-4 text-[#00D2FF]" />
              <span>Absolute Signal Privacy</span>
            </div>
            <div className="flex items-center gap-2 text-[#00D2FF] font-bold tracking-wide">
              <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
              <span>Zero Radio Frequency (RF)</span>
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
                <div className="space-y-4 max-w-3xl">
                  <h2 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">
                    Shop the Conscious Home Ecosystem
                  </h2>
                  <p className="text-slate-400 text-lg max-w-2xl font-medium leading-relaxed">
                    Welcome to the world's first fully optical conscious home. Every device in the LumenFi ecosystem is equipped with integrated Li-Fi receivers, guaranteeing zero lag, unjammable security, and infinite bandwidth.
                  </p>
                  <p className="text-sm font-mono font-bold uppercase tracking-widest text-[#00D2FF]">
                    Stop piecing together a broken Wi-Fi network. Build a Conscious Home.
                  </p>
                </div>
              </div>

              {/* Category Groups */}
              {['Network Foundation', 'Entertainment & Computing', 'Security & Perimeter', 'Conscious Appliances & Home Automation'].map((catName) => {
                const catProducts = productsData.filter(p => p.category === catName);
                return (
                  <div key={catName} className="max-w-7xl mx-auto px-6 lg:px-8 space-y-8">
                    <div className="border-b border-slate-800/80 pb-4">
                      <h3 className="text-2xl font-black text-white tracking-tight uppercase font-mono text-[#00D2FF]">
                        {catName}
                      </h3>
                    </div>
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                      {catProducts.map((product, index) => {
                        return (
                          <motion.div
                            key={product.slug}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-80px" }}
                            transition={{ duration: 0.65, delay: index * 0.05, ease: [0.16, 1, 0.3, 1] }}
                            className={`${product.size} flex flex-col`}
                          >
                            <div
                              className="w-full group relative flex flex-col h-full rounded-3xl border border-slate-800 bg-[#0F172A]/40 overflow-hidden transition-all duration-300 hover:border-[#00D2FF]/50 hover:shadow-[0_0_30px_rgba(0,210,255,0.15)]"
                            >
                              {/* Image Header with Badge Overlay */}
                              <div className="relative w-full aspect-[16/10] overflow-hidden bg-slate-950 border-b border-slate-800">
                                <img
                                  src={product.imageUrl}
                                  alt={product.name}
                                  className="w-full h-full object-cover transform scale-105 group-hover:scale-100 opacity-70 group-hover:opacity-90 transition-all duration-700 ease-out"
                                />
                                <span className="absolute top-4 left-4 bg-slate-900/90 backdrop-blur-md border border-slate-700 text-[10px] font-mono font-bold tracking-widest text-[#00D2FF] uppercase px-3 py-1 rounded-full">
                                  {product.badge}
                                </span>
                              </div>

                              {/* Content Body */}
                              <div className="p-6 sm:p-8 flex-1 flex flex-col justify-between space-y-6">
                                <div className="space-y-3">
                                  <div className="flex items-baseline justify-between gap-4">
                                    <h3 className="text-2xl font-extrabold text-white tracking-tight">
                                      {product.name}
                                    </h3>
                                    <span className="text-xl font-mono font-bold text-white">
                                      {product.price}
                                    </span>
                                  </div>
                                  <p className="text-sm text-[#00D2FF] font-medium tracking-wide">
                                    {product.tagline}
                                  </p>
                                  <p className="text-slate-400 text-xs leading-relaxed font-normal">
                                    {product.desc}
                                  </p>
                                </div>

                                {/* Specification Checklist Row */}
                                <div className="space-y-4 pt-2">
                                  <div className="space-y-2">
                                    {product.specs.map((spec) => (
                                      <div key={spec} className="flex items-center gap-2.5 text-xs text-slate-300 font-medium">
                                        <span className="text-[#00D2FF] text-sm">›</span>
                                        <span>{spec}</span>
                                      </div>
                                    ))}
                                  </div>

                                  {/* Action Call-To-Action Button */}
                                  <button
                                    onClick={() => setSelectedProductSlug(product.slug)}
                                    className="w-full h-11 border border-slate-700 hover:border-[#00D2FF] bg-slate-900/60 hover:bg-[#00D2FF]/10 text-white font-bold text-xs rounded-xl tracking-wider uppercase transition-all duration-300 shadow-inner"
                                  >
                                    Add to Cart
                                  </button>
                                </div>
                              </div>
                            </div>
                          </motion.div>
                        );
                      })}
                    </div>
                  </div>
                );
              })}

              {/* Regulatory Transparency & Norms Framework Layout */}
              <div className="max-w-7xl mx-auto px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-3 gap-8 pt-8">
                <div className="bg-[#0F172A]/30 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <FileText className="w-4 h-4 text-[#00D2FF]" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Required Documentation Links</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">Review our residential network configurations, transparent user guidelines, and operational deployment rules.</p>
                  <div className="space-y-2 pt-2 font-mono text-xs font-bold">
                    <Link href="/privacy" className="block text-[#00D2FF] hover:underline">→ Infrastructure Privacy Policy</Link>
                    <Link href="/terms" className="block text-[#00D2FF] hover:underline">→ System Terms & Conditions</Link>
                  </div>
                </div>

                <div className="bg-[#0F172A]/30 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <Mail className="w-4 h-4 text-[#00D2FF]" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Corporate Identification Desk</h3>
                  </div>
                  <p className="text-xs text-slate-400 leading-relaxed">Official commercial deployment requests or compliance verification checks can communicate directly with our centralized desk:</p>
                  <div className="space-y-1.5 pt-1 text-xs font-mono text-slate-400">
                    <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-slate-500" /> +91 (Commercial Support Hub)</p>
                    <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-slate-500" /> engineering@lumenfi.com</p>
                    <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-slate-500" /> Residential Operations Core, India Hub</p>
                  </div>
                </div>

                <div className="bg-[#0F172A]/30 border border-slate-800 p-6 rounded-2xl space-y-4">
                  <div className="flex items-center gap-2 text-white">
                    <ShieldCheck className="w-4 h-4 text-[#00D2FF]" />
                    <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Logistical Parameter Matrix</h3>
                  </div>
                  <div className="space-y-3">
                    <div className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                      <span><strong>Deployment Windows</strong>: Home hardware kits step into configuration cycles within 3–5 structural business days.</span>
                    </div>
                    <div className="flex items-start gap-2 text-xs text-slate-400">
                      <Check className="w-3.5 h-3.5 text-[#00D2FF] shrink-0 mt-0.5" />
                      <span><strong>Transparent Invoicing</strong>: No localized frequency surcharges or surprise equipment taxes added later.</span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Science Clarification FAQ Block */}
              <div className="max-w-4xl mx-auto px-6 pt-8">
                <div className="text-center space-y-2 mb-12">
                  <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white">Frequently Evaluated Physics</h2>
                  <p className="text-[#00D2FF] text-xs font-mono uppercase tracking-widest font-bold">Unpacking The Signal Transmission Paradigm:</p>
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
                      className="border border-slate-800 rounded-xl p-5 bg-[#0F172A]/40 cursor-pointer hover:border-slate-700 transition-colors"
                      onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                    >
                      <div className="flex justify-between items-center gap-4">
                        <h4 className="text-sm font-bold text-white font-mono">{faq.q}</h4>
                        <HelpCircle className={`w-4 h-4 text-slate-500 shrink-0 transition-transform ${activeFaq === index ? 'rotate-180 text-[#00D2FF]' : ''}`} />
                      </div>
                      {activeFaq === index && (
                        <p className="text-xs text-slate-400 mt-3 leading-relaxed border-t border-slate-800 pt-3 font-sans">
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
                className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-[#00D2FF] transition-colors mb-12 group font-bold"
              >
                <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
                RETURN TO HARDWARE ECOSYSTEM
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                <div className="lg:col-span-5 relative">
                  <div className={`absolute inset-0 bg-gradient-to-tr ${activeProduct.accent} rounded-[50px_20px_80px_40px] transform rotate-2 scale-[1.02] opacity-15 blur-sm`} />
                  <div className="w-full aspect-[4/5] rounded-[50px_20px_80px_40px] overflow-hidden border-4 border-slate-900 shadow-xl relative bg-slate-900">
                    <img src={activeProduct.imageUrl} alt={activeProduct.name} className="w-full h-full object-cover opacity-80 mix-blend-screen" />
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-900 border border-slate-800 text-slate-400 font-mono text-[10px] font-bold uppercase">
                    <Cpu className="w-3.5 h-3.5 text-[#00D2FF]" /> CORE HARDWARE // {activeProduct.badge}
                  </div>
                  <h1 className="text-4xl sm:text-5xl font-black text-white tracking-tight leading-none">{activeProduct.name}</h1>
                  <p className="text-base text-[#00D2FF] font-semibold font-mono leading-relaxed">{activeProduct.tagline}</p>

                  <div className="p-6 bg-slate-900/60 border border-slate-800 rounded-2xl">
                    <h3 className="font-mono text-xs font-bold text-white uppercase tracking-wider mb-2 flex items-center gap-2">
                      <Cpu className="w-3.5 h-3.5 text-[#00D2FF]" /> Architectural Statement
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-normal">{activeProduct.desc}</p>
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-mono text-[11px] font-bold text-slate-500 uppercase tracking-widest">VERIFIED PROTOCOL SPECIFICATIONS</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                      {activeProduct.specs.concat(['Microsecond packet translation layer', '100% optical physical containment boundary']).map((item) => (
                        <div key={item} className="flex items-start gap-2 text-xs font-medium text-slate-300">
                          <Check className="w-4 h-4 text-[#00D2FF] shrink-0 mt-0.5" />
                          <span>{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-800 flex flex-wrap gap-4">
                    <button className="h-12 px-6 rounded-xl bg-slate-900 border border-slate-700 hover:border-[#00D2FF] text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center gap-2">
                      <Download className="w-4 h-4" /> Download Tech Blueprint
                    </button>
                    <Link href="/contact" className="h-12 px-6 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 hover:opacity-90 text-white font-mono font-bold text-xs uppercase tracking-wider transition-all inline-flex items-center justify-center shadow-lg shadow-cyan-500/10">
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