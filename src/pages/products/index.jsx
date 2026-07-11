import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
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
  Layers3,
  ExternalLink,
  Info,
  Wrench,
  ArrowRight,
  Package,
  ShoppingCart,
  Sliders,
  Star,
  CheckCircle2,
  Leaf
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const productsData = [
  {
    slug: 'lumen-core-downlighters',
    name: 'Lumen Core Downlighters',
    price: '$349',
    category: 'Network Foundation',
    badge: 'NETWORK TRANSMITTERS',
    tagline: 'The heart of your home light network.',
    desc: 'These ceiling lights act like invisible internet routers. They beam super fast internet to every room while giving you beautiful light that you can adjust easily.',
    icon: Cpu,
    accent: 'from-gold-500/10 to-amber-600/10 border-amber-300',
    textAccent: 'text-gold-700',
    imageUrl: '/images/products/Lumen Core Downlighters.png',
    specs: ['Super Fast Internet Beams', 'Adjustable Room Lighting', 'No Radio Wave Mess'],
    rating: 4.9,
    reviews: 142
  },
  {
    slug: 'lumen-photon-dongle',
    name: 'Lumen Photon Dongle (USB-C)',
    price: '$129',
    category: 'Network Foundation',
    badge: 'NETWORK TRANSCEIVERS',
    tagline: 'Gives your current devices instant light-speed internet.',
    desc: 'Plug this tiny receiver into any laptop, computer, or tablet. It instantly switches your device from slow, crowded Wi-Fi to a super fast light connection.',
    icon: Laptop,
    accent: 'from-green-400/10 to-green-500/10 border-green-300',
    textAccent: 'text-green-700',
    imageUrl: '/images/products/Lumen Photon Dongle.png',
    specs: ['Tiny Light Receiver', 'Easy Plug-and-Play Setup', 'Private Fast Internet Beam'],
    rating: 4.8,
    reviews: 96
  },
  {
    slug: 'lumen-matrix-8k-tv',
    name: 'Lumen Matrix 8K TV',
    price: '$1,999',
    category: 'Entertainment & Computing',
    badge: 'ENTERTAINMENT & COMPUTING',
    tagline: "The first TV that plays perfect, crystal-clear videos without slowing down.",
    desc: 'Powered by a direct light connection from your ceiling. It streams perfect 8K videos and video games smoothly, without ever slowing down when other people use the internet.',
    icon: Sun,
    accent: 'from-green-400/10 to-green-500/10 border-green-300',
    textAccent: 'text-green-700',
    imageUrl: '/images/products/Lumen 8k TV.png',
    specs: ['Perfect 8K Video Quality', 'Smooth Video Gaming', 'Never Slows Down'],
    rating: 5.0,
    reviews: 34
  },
  {
    slug: 'lumen-studio-laptop',
    name: 'Lumen Laptop',
    price: '$2,499',
    category: 'Entertainment & Computing',
    badge: 'ENTERTAINMENT & COMPUTING',
    tagline: 'Made for heavy schoolwork, high-end design, and fast apps.',
    desc: 'With a built-in light receiver right inside the screen lid. You get super fast, stable internet speeds without ever needing a messy internet cable.',
    icon: Laptop,
    accent: 'from-green-400/10 to-green-500/10 border-green-300',
    textAccent: 'text-green-700',
    imageUrl: '/images/products/Lumen Studio Laptop.png',
    specs: ['Built-in Light Receiver', 'Super Fast Cable-Free Speeds', 'Great for Heavy Apps'],
    rating: 4.9,
    reviews: 51
  },
  {
    slug: 'lumen-echo-soundbar',
    name: 'Echo Soundbar',
    price: '$599',
    category: 'Entertainment & Computing',
    badge: 'ENTERTAINMENT & COMPUTING',
    tagline: 'Say goodbye to sound delays.',
    desc: 'Connected by super fast beams of light. This speaker answers your voice commands and smart home requests the very second you finish talking.',
    icon: Activity,
    accent: 'from-green-400/10 to-green-500/10 border-green-300',
    textAccent: 'text-green-700',
    imageUrl: '/images/products/Lumen Echo Soundbar.png',
    specs: ['Super Fast Light Beams', 'Instant Voice Answers', 'Perfect Sound Sync'],
    rating: 4.7,
    reviews: 88
  },
  {
    slug: 'lumen-sentinel-video-doorbell',
    name: 'Lumen Sentinel Video Doorbell',
    price: '$249',
    category: 'Security & Perimeter',
    badge: 'DOMESTIC & PERIMETER',
    tagline: 'Front-door security that cannot be blocked.',
    desc: 'Powered by the light beam from your porch bulb. It sends clear 4K video straight to your phone. Because it uses light, thieves cannot block it with Wi-Fi signal jammers.',
    icon: Shield,
    accent: 'from-green-400/10 to-green-500/10 border-green-300',
    textAccent: 'text-green-700',
    imageUrl: '/images/products/Lumen Sentinel Video Doorbell.png',
    specs: ['Porch Light Powered', 'Clear 4K Video Stream', 'Cannot Be Blocked'],
    rating: 4.8,
    reviews: 112
  },
  {
    slug: 'lumen-aegis-floodlight-cams',
    name: 'Lumen Aegis Floodlight Cams',
    price: '$499',
    category: 'Security & Perimeter',
    badge: 'DOMESTIC & PERIMETER',
    tagline: 'Complete safety around your house.',
    desc: 'These bright outdoor lights also work as fast internet transmitters. They safely link your outdoor cameras to your home computer without sending your private video out to the public street.',
    icon: ShieldCheck,
    accent: 'from-green-400/10 to-green-500/10 border-green-300',
    textAccent: 'text-green-700',
    imageUrl: '/images/products/Lumen Aegis Floodlight Cams.png',
    specs: ['Super Fast Video Links', 'Very Bright LED Bulbs', 'Private and Safe Feed'],
    rating: 4.9,
    reviews: 67
  },
  {
    slug: 'lumen-glacier-fridge',
    name: 'Glacier Fridge',
    price: '$3,499',
    category: 'Conscious Appliances & Home Automation',
    badge: 'CONSCIOUS APPLIANCES',
    tagline: 'A smart fridge with built-in light internet.',
    desc: 'Say goodbye to loading screens on your fridge. Stream cooking videos, track your food items, and run your smart home screen without any waiting, right from the door.',
    icon: Activity,
    accent: 'from-green-400/10 to-green-500/10 border-green-300',
    textAccent: 'text-green-700',
    imageUrl: '/images/products/Lumen Glacier Smart Fridge.png',
    specs: ['No-Wait Smart Screen', 'Smart Food Trackers', 'Smooth Video Streaming'],
    rating: 4.6,
    reviews: 23
  },
  {
    slug: 'lumen-precision-robot-vacuum',
    name: 'Precision Robot Vacuum',
    price: '$899',
    category: 'Conscious Appliances & Home Automation',
    badge: 'CONSCIOUS APPLIANCES',
    tagline: 'The smartest robot vacuum for your floors.',
    desc: 'Powered by a steady beam of light. This vacuum builds a 3D map of your room and avoids obstacles instantly, meaning it will never crash into chairs or tables.',
    icon: Zap,
    accent: 'from-green-400/10 to-green-500/10 border-green-300',
    textAccent: 'text-green-700',
    imageUrl: '/images/products/Lumen Precision Robot Vacuum.png',
    specs: ['Steady Light Connection', 'Smart 3D Room Maps', 'Instant Driving Logic'],
    rating: 4.8,
    reviews: 49
  }
];

const installationSteps = [
  { step: '01', title: 'Connect Router Box', desc: 'Plug your standard house internet feed directly into the LumenFi safe-enclosure central routing box assembly.' },
  { step: '02', title: 'Inject Plus Power', desc: 'Run the data cable into the PoE+ Injector to safely combine high-speed data streams and electricity into one wire.' },
  { step: '03', title: 'Link RevF Controller', desc: 'Connect that powered line directly into the RevF Access Point to handle master signal balancing duties.' },
  { step: '04', title: 'Mount Light Antennas', desc: 'Secure the two Photonic Antennas onto your ceiling surfaces to stream active data light-cones down over the entire room.' },
  { step: '05', title: 'Activate USB Dongles', desc: 'Pop the two mini USB LiFi Dongles directly into user laptops or computers to catch wireless optical signals instantly.' }
];

export default function ProductsPage() {
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);
  const [activeFaq, setActiveFaq] = useState(-1);
  const [activeKitItem, setActiveKitItem] = useState('ap');
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);
  const [currentPage, setCurrentPage] = useState(1);   // FAQ page: 1 = Q1–10, 2 = Q11–20
  const [isExpanded, setIsExpanded] = useState(false);  // false = show 5, true = show 10

  const activeProduct = productsData.find(p => p.slug === selectedProductSlug) || null;
  const categories = ['All', 'Network Foundation', 'Entertainment & Computing', 'Security & Perimeter', 'Conscious Appliances & Home Automation'];

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="min-h-screen font-sans bg-[#FBFDFB] text-slate-900 antialiased relative overflow-hidden selection:bg-green-500 selection:text-white">
      {/* Immersive Structural Background Layout Layers */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,#E7F2EC,transparent_65%)] pointer-events-none z-0" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#DAE3DF_1px,transparent_1px),linear-gradient(to_bottom,#DAE3DF_1px,transparent_1px)] bg-[size:3.5rem_3.5rem] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,#000_60%,transparent_100%)] opacity-35 z-0" />

      <Head>
        <title>LumenFi Hardware Hub | Next-Gen E-Commerce Wireless LiFi Store</title>
        <meta name="description" content="Deploy military-grade optical internet architecture directly into your luxury living space." />
      </Head>
      <Header />

      <main className="pt-36 pb-24 relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        <AnimatePresence mode="wait">
          {!activeProduct ? (
            <motion.div
              key="marketplace-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-16"
            >
              {/* --- HERO COMPONENT --- */}
              <div
                className="relative w-full min-h-[560px] lg:min-h-[640px] bg-cover bg-center bg-no-repeat rounded-[2rem] border border-slate-800/80 p-8 sm:p-12 lg:p-16 flex flex-col justify-between overflow-hidden shadow-2xl group"
                style={{ backgroundImage: "url('/images/products/fullbg.png')" }}
              >
                <div className="absolute inset-0 bg-gradient-to-br from-[#060B16]/80 via-[#060B16]/20 to-transparent pointer-events-none z-0" />
                <div className="absolute top-0 right-0 w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[140px] pointer-events-none z-0" />
                <div className="absolute -bottom-20 -left-10 w-96 h-96 bg-orange-500/[0.03] rounded-full blur-[100px] pointer-events-none z-0" />

                <div className="relative z-10 max-w-xl space-y-4">
                  <h1 className="text-4xl sm:text-5xl xl:text-6xl font-black text-white tracking-tight leading-[1.05]">
                    Shop the <span className='text-gradient-lumen' style={{ color: 'var(--color-lumen-cyan)' }}>Conscious Home</span> <br />
                    <span className="bg-gradient-to-r from-white via-slate-200 to-slate-400 bg-clip-text text-transparent opacity-90">
                      Light Network
                    </span>
                  </h1>
                  <p className="text-slate-200/90 text-sm sm:text-base font-normal leading-relaxed max-w-lg drop-shadow-md">
                    Welcome to the world's first home run entirely on light. Every device in our family has built-in light receivers. This gives you zero lag, completely safe security, and unlimited internet speed.
                  </p>
                </div>

                <div className="relative z-10 w-full flex justify-center pt-12 lg:pt-0">
                  <div className="relative max-w-xl w-full bg-gradient-to-b from-[#D4AF37]/25 via-[#AA7C11]/15 to-[#5A4106]/35 backdrop-blur-md border border-[#D4AF37]/40 rounded-xl p-4 px-6 text-center shadow-2xl flex flex-col items-center justify-center gap-2 overflow-hidden group/gold">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/gold:translate-x-full transition-transform duration-1000 ease-out" />
                    <div className="absolute top-2 left-2 w-1 h-1 rounded-full bg-[#D4AF37]/40 shadow-inner" />
                    <div className="absolute top-2 right-2 w-1 h-1 rounded-full bg-[#D4AF37]/40 shadow-inner" />
                    <div className="absolute bottom-2 left-2 w-1 h-1 rounded-full bg-[#D4AF37]/40 shadow-inner" />
                    <div className="absolute bottom-2 right-2 w-1 h-1 rounded-full bg-[#D4AF37]/40 shadow-inner" />
                    <div className="flex items-center justify-center">
                      <span className="relative flex h-2.5 w-2.5">
                        <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                        <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-cyan-400 border border-white/20" />
                      </span>
                    </div>
                    <p className="text-xs sm:text-sm font-sans font-medium text-amber-100 tracking-wide leading-relaxed">
                      Stop trying to fix a broken Wi-Fi network. <br className="hidden sm:inline" />
                      <span className="font-bold text-white">Build a smart home run on light.</span>
                    </p>
                  </div>
                </div>
              </div>

              {/* --- REST OF THE CONTENT LAYOUT --- */}
              <div id="concept-runbook" className="bg-[#E7F2EC]/80 backdrop-blur-xl border border-slate-300/80 rounded-3xl p-6 sm:p-10 space-y-10 scroll-mt-32 shadow-xl shadow-slate-100">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-6 pb-2 border-b border-slate-300/80">
                  <div className="space-y-1.5">
                    <span className="text-[10px] font-mono font-bold tracking-widest text-orange-700 uppercase bg-orange-100/50 border border-orange-300 px-2.5 py-0.5 rounded-full w-max block">
                      Engineering Deployment Lab
                    </span>
                    <h2 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight">
                      RevF System Kit: Component Concept Diagram
                    </h2>
                    <p className="text-xs text-slate-700 font-sans">
                      Select individual module channels to inspect active node responsibilities inside the complete residential framework.
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
                  <div className="lg:col-span-4 flex flex-col justify-between h-full gap-2">
                    {[
                      { id: 'ap', name: 'LumenFi RevF Access Point', sub: 'Main Waveform Balanced Controller' },
                      { id: 'antennas', name: 'Photonic Antennas (2)', sub: 'Ceiling Ambient Broadcast Nodes' },
                      { id: 'dongles', name: 'USB LiFi Dongles (2)', sub: 'Device Signal Decoders' },
                      { id: 'poe', name: 'Power over Ethernet Injector', sub: 'Single-Cable Energy Circuit' },
                      { id: 'router', name: 'LumenFi Router Box', sub: 'Enclosure Enclosure & Intake Hub' }
                    ].map((item) => (
                      <button
                        key={item.id}
                        onClick={() => setActiveKitItem(item.id)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between font-mono group ${activeKitItem === item.id
                          ? 'bg-[#F2F8F5] border-green-300 shadow-lg shadow-green-100'
                          : 'bg-transparent border-slate-300/60 hover:border-slate-400 hover:bg-slate-100'
                          }`}
                      >
                        <div>
                          <p className={`text-xs font-bold ${activeKitItem === item.id ? 'text-green-700' : 'text-slate-900'}`}>
                            {item.name}
                          </p>
                          <p className="text-[10px] text-slate-600 uppercase mt-0.5 tracking-wider">{item.sub}</p>
                        </div>
                        <ArrowRight size={14} className={`text-slate-600 transition-transform ${activeKitItem === item.id ? 'translate-x-1 text-green-700' : 'group-hover:translate-x-0.5'}`} />
                      </button>
                    ))}
                  </div>

                  <div className="lg:col-span-8 bg-[#F5FAF6] border border-slate-300 rounded-2xl flex flex-col justify-between relative shadow-inner overflow-hidden">
                    <img src="/images/products/Lumenfi Product overview.png" alt="Lumen Kit" className="w-full h-full object-cover" />
                  </div>
                </div>

                <div className="mt-6 w-full">
                  <a href="https://rzp.io/rzp/vv8HFbfc" target="_blank" rel="noopener noreferrer" className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3 px-8 rounded-xl shadow-lg transition-all transform hover:scale-[1.02] flex items-center justify-center gap-2">
                    <ShoppingCart size={18} /> Buy Now
                  </a>
                </div>

                <div className="pt-8 border-t border-slate-300 space-y-6">
                  <div className="flex items-center gap-2 text-xs font-mono font-bold tracking-wider text-slate-600">
                    <Leaf size={14} className="text-green-600" /> SYSTEM ARCHITECTURE &amp; INSTALLATION STEPS
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4 relative">
                    {installationSteps.map((stepObj) => (
                      <div key={stepObj.step} className="bg-[#FAFFFB] border border-slate-200/80 p-4 rounded-xl space-y-2 relative hover:border-green-300 transition-colors shadow-inner">
                        <div className="flex justify-between items-center">
                          <span className="text-[10px] font-mono font-bold px-2 py-0.5 rounded bg-slate-100 text-green-700 border border-slate-200">
                            PHASE {stepObj.step}
                          </span>
                          <span className="w-1.5 h-1.5 rounded-full bg-green-600 animate-pulse" />
                        </div>
                        <h4 className="text-xs font-bold text-slate-950 font-mono tracking-tight">{stepObj.title}</h4>
                        <p className="text-[11px] text-slate-700 leading-normal font-sans font-light">
                          {stepObj.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* --- COMMERCE CATALOG MATRIX --- */}
              {/* <div className="space-y-8">
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 pb-4 border-b border-slate-300">
                  <div className="space-y-1">
                    <h2 className="text-xl font-bold text-slate-950 tracking-tight flex items-center gap-2">
                      <Sliders size={16} className="text-green-600" /> Modular System Components Catalog
                    </h2>
                    <p className="text-xs text-slate-700">Expand your optical topology network piece by piece with standard industrial modules.</p>
                  </div>

                  <div className="flex flex-wrap gap-2 w-full md:w-auto">
                    {categories.map((cat) => (
                      <button
                        key={cat}
                        onClick={() => setSelectedCategory(cat)}
                        className={`px-3 py-1.5 rounded-lg text-[11px] font-mono font-bold tracking-tight transition-all border ${selectedCategory === cat
                            ? 'bg-green-100 border-green-400 text-green-800'
                            : 'bg-transparent border-slate-200 text-slate-600 hover:text-green-700 hover:border-green-300'
                          }`}
                      >
                        {cat === 'All' ? 'ALL MODULES' : cat.toUpperCase()}
                      </button>
                    ))}
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                  {filteredProducts.map((product) => (
                    <div
                      key={product.slug}
                      className="bg-[#F6FAF8] border border-slate-200 rounded-2xl p-5 flex flex-col justify-between hover:border-green-300 transition-all group hover:bg-[#F2FAF6] shadow-md relative"
                    >
                      <div className="absolute top-4 right-4 bg-white border border-slate-200 text-[9px] font-mono text-slate-500 px-2 py-0.5 rounded">
                        IN STOCK
                      </div>

                      <div className="space-y-4">
                        <div className="aspect-[16/10] rounded-xl overflow-hidden bg-white/60 border border-slate-100/60 relative">
                          <img src={product.imageUrl} alt={product.name} className="w-full h-full object-cover opacity-80 group-hover:opacity-100 transition-opacity duration-300" />
                          <div className="absolute inset-0 bg-gradient-to-t from-[#F6FAF8] via-transparent to-transparent pointer-events-none" />
                        </div>

                        <div className="space-y-1">
                          <div className="flex justify-between items-start gap-2">
                            <h3 className="text-sm font-bold text-slate-950 group-hover:text-green-700 transition-colors tracking-tight line-clamp-1">
                              {product.name}
                            </h3>
                            <span className="text-sm font-mono font-bold text-green-700 shrink-0">{product.price}</span>
                          </div>

                          <div className="flex items-center gap-1.5 text-[10px] font-mono text-orange-600">
                            <Star size={10} fill="currentColor" />
                            <span>{product.rating}</span>
                            <span className="text-slate-500 font-sans">({product.reviews} orders)</span>
                          </div>
                        </div>

                        <p className="text-slate-700 text-xs leading-relaxed line-clamp-3 font-light">
                          {product.desc}
                        </p>

                        <div className="pt-2 flex flex-wrap gap-1.5">
                          {product.specs.slice(0, 2).map((spec, sIdx) => (
                            <span key={sIdx} className="text-[9px] font-mono text-slate-600 bg-white px-2 py-0.5 rounded border border-slate-200">
                              ▪ {spec}
                            </span>
                          ))}
                        </div>
                      </div>

                      <div className="pt-5 mt-4 border-t border-slate-200 flex gap-2">
                        <button
                          onClick={() => setSelectedProductSlug(product.slug)}
                          className="flex-grow py-2 bg-white border border-slate-200 text-[10px] font-mono font-bold text-slate-600 rounded-lg hover:text-green-700 hover:border-green-300 transition-colors tracking-wider uppercase text-center"
                        >
                          SPEC SHEETS
                        </button>
                        <button
                          onClick={() => setCartCount(prev => prev + 1)}
                          className="px-3 bg-green-100/40 border border-green-300/60 text-green-700 rounded-lg hover:bg-green-600 hover:text-white transition-colors flex items-center justify-center"
                        >
                          <ShoppingCart size={13} />
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div> */}

              {/* --- SYSTEM VALIDATION FAQ BLOCK --- */}
              {/* ── LUMENFI LI-FI FAQ SYSTEM SECTION CONTAINER ── */}
              {/* ── LUMENFI LI-FI FAQ SYSTEM SECTION CONTAINER ── */}
              <div className="w-full max-w-4xl mx-auto pt-10 border-t border-slate-300">

                {/* Header text segment */}
                <div className="space-y-1 mb-6 text-center sm:text-left">
                  <h2 className="text-xl font-bold text-slate-950 font-mono tracking-tight">
                    Frequently Asked Questions: Lumenfi Li-Fi
                  </h2>
                  <p className="text-[11px] font-mono text-green-700 uppercase tracking-widest">
                    Getting Started &amp; Technical Specifications Protocol
                  </p>
                </div>

                {/* FAQ Grid List Container */}
                <div className="space-y-2.5">
                  {[
                    // ── SET 1 (Questions 1 - 10) ──
                    {
                      q: "1. What is Li-Fi?",
                      a: "Li-Fi (Light Fidelity) is a cutting-edge wireless communication technology that uses light waves instead of traditional radio frequencies to transmit data. By modulating LED light, it provides secure, high-speed internet connectivity."
                    },
                    {
                      q: "2. How does the Lumenfi kit work?",
                      a: "Our kits use photonic antennas that connect to your lighting infrastructure. These antennas receive data from your network and project it via light pulses, which are then captured by a receiver dongle attached to your device."
                    },
                    {
                      q: "3. How much space does a standard kit cover?",
                      a: "Each individual photonic antenna covers 500 square feet. Because each kit includes two antennas, you receive 1,000 square feet of total coverage right out of the box."
                    },
                    {
                      q: "4. Can I expand my coverage if my space is larger than 1,000 sq ft?",
                      a: "Absolutely. We offer the ability to purchase additional photonic antennas to increase your total coverage area according to your needs."
                    },
                    {
                      q: "5. Do I need additional hardware to connect more devices?",
                      a: "Yes, you can purchase additional receiver dongles upon request to accommodate more devices on your Li-Fi network."
                    },
                    {
                      q: "6. What is the typical lead time for a kit?",
                      a: "Please allow 4 to 6 weeks for your kit to be processed, prepared, and delivered to your doorstep."
                    },
                    {
                      q: "7. Is Li-Fi faster than Wi-Fi?",
                      a: "Li-Fi has the potential to be significantly faster than standard Wi-Fi because the light spectrum is far broader and less congested than the radio frequency spectrum."
                    },
                    {
                      q: "8. Do the lights need to be fully bright for Li-Fi to work?",
                      a: "No. Li-Fi systems can operate at dimmed levels that are comfortable for human eyes. High-end systems can even operate using invisible infrared light to maintain connectivity in total darkness."
                    },
                    {
                      q: "9. Does Li-Fi work through walls?",
                      a: "One of the primary benefits of Li-Fi is that light does not pass through walls. This provides an inherent layer of physical security, as your data is contained strictly within the illuminated space."
                    },
                    {
                      q: "10. Can Li-Fi cause interference with other electronics?",
                      a: "No. Because Li-Fi uses light waves rather than radio waves, it generates zero electromagnetic interference, making it perfect for environments where radio interference is a concern, such as hospitals or aviation."
                    },
                    // ── SET 2 (Questions 11 - 20) ──
                    {
                      q: "11. Is Li-Fi harmful to human eyes or health?",
                      a: "Not at all. The light used is standard LED illumination. The modulation happens at speeds far beyond what the human eye can perceive, causing no flicker or health risks."
                    },
                    {
                      q: "12. What devices are compatible with Lumenfi?",
                      a: "Any device equipped with a USB port can utilize our receiver dongles to connect to the network."
                    },
                    {
                      q: "13. Why is Li-Fi considered more secure than Wi-Fi?",
                      a: "Since light is blocked by walls and opaque materials, your network cannot be accessed by someone outside of your office or home, effectively eliminating the risk of remote hacking."
                    },
                    {
                      q: "14. Can I use Li-Fi outdoors?",
                      a: "Li-Fi is designed primarily for indoor use. Direct, intense sunlight can create significant interference with the optical signal, which may degrade performance."
                    },
                    {
                      q: "15. Does Li-Fi work if I move around the room?",
                      a: "Yes, as long as your device maintains a line-of-sight or receives reflected light from the ceiling-mounted antennas, you can enjoy seamless connectivity while moving within the coverage area."
                    },
                    {
                      q: "16. What happens if I accidentally block the light signal?",
                      a: "If you completely obstruct the line-of-sight between the light source and your device, the connection may drop. However, Li-Fi systems are designed to utilize reflected light off walls and surfaces to maintain a connection even when a direct line-of-sight is occasionally interrupted."
                    },
                    {
                      q: "17. Is Li-Fi a replacement for my current Wi-Fi?",
                      a: "Most users implement Li-Fi as a high-security, ultra-fast \"fast lane\" for data-intensive tasks, while keeping Wi-Fi for general coverage throughout the rest of the home or office."
                    },
                    {
                      q: "18. How do I request additional antennas or dongles?",
                      a: "You can contact our sales or support team directly through our website to request and purchase additional hardware for your setup."
                    },
                    {
                      q: "19. Is the Lumenfi kit difficult to install?",
                      a: "Our kits are designed for straightforward integration with existing lighting environments. Detailed installation guides are provided with every shipment."
                    },
                    {
                      q: "20. Who should use Li-Fi?",
                      a: "Li-Fi is ideal for anyone prioritizing data security, anyone working in high-interference environments, or anyone who simply wants to experience the next generation of high-speed, congestion-free wireless connectivity"
                    }
                  ]
                    .slice(((currentPage || 1) - 1) * 10, ((currentPage || 1) - 1) * 10 + 10)
                    .slice(0, isExpanded ? 10 : 5)
                    .map((faq, idx) => {
                      const globalId = (((currentPage || 1) - 1) * 10) + idx;
                      const isOpen = activeFaq === globalId;

                      return (
                        <div
                          key={globalId}
                          style={{
                            maxHeight: isOpen ? '280px' : '54px',
                            transition: 'all 0.35s cubic-bezier(0.4, 0, 0.2, 1)',
                            overflow: 'hidden'
                          }}
                          className={`border border-slate-200/80 rounded-xl p-4 cursor-pointer transition-colors ${isOpen ? 'bg-white border-green-400 shadow-xs' : 'bg-[#F5FAF6] hover:border-green-300'
                            }`}
                          onClick={() => setActiveFaq(isOpen ? -1 : globalId)}
                        >
                          <div className="flex justify-between items-center gap-4 h-6">
                            <h4 className="text-xs font-bold text-slate-950 font-mono tracking-wide">
                              {faq.q}
                            </h4>
                            <span style={{
                              transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)',
                              transition: 'transform 0.3s ease',
                              fontSize: '11px',
                              color: isOpen ? '#15803d' : '#64748b'
                            }}>
                              ▼
                            </span>
                          </div>

                          <div
                            style={{ opacity: isOpen ? 1 : 0, transition: 'opacity 0.25s ease' }}
                            className="text-xs text-slate-700 mt-2.5 border-t border-slate-200/60 pt-2.5 leading-relaxed font-sans font-light"
                          >
                            {faq.a}
                          </div>
                        </div>
                      );
                    })}
                </div>

                {/* Control Navigation Actions Bar */}
                <div className="mt-6 flex flex-col sm:flex-row items-center justify-between gap-4 pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2">
                    <span className="text-[11px] font-mono text-slate-400 uppercase tracking-wider mr-2">Sets:</span>
                    <button
                      type="button"
                      onClick={() => { setCurrentPage(1); setActiveFaq(-1); setIsExpanded(false); }}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${currentPage === 1
                        ? 'bg-green-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                      1 (Q1-10)
                    </button>
                    <button
                      type="button"
                      onClick={() => { setCurrentPage(2); setActiveFaq(-1); setIsExpanded(false); }}
                      className={`px-3 py-1.5 text-xs font-mono font-bold rounded-lg transition-all ${currentPage === 2
                        ? 'bg-green-700 text-white shadow-xs'
                        : 'bg-slate-100 text-slate-600 hover:bg-slate-200'
                        }`}
                    >
                      2 (Q11-20)
                    </button>
                  </div>

                  <button
                    type="button"
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="flex items-center gap-2 px-4 py-2 bg-slate-950 text-white font-mono text-xs font-bold rounded-xl hover:bg-slate-800 transition-all shadow-sm"
                  >
                    {isExpanded ? "Show Less" : "Show More Questions"}
                  </button>
                </div>

              </div>

            </motion.div>
          ) : (
            /* --- DETAILED COMPONENT LAYOUT --- */
            <motion.section
              key="detail-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="max-w-5xl mx-auto py-4"
            >
              <button
                onClick={() => setSelectedProductSlug(null)}
                className="inline-flex items-center gap-2 font-mono text-xs text-slate-600 hover:text-green-700 transition-colors mb-8 font-bold"
              >
                <ArrowLeft size={13} /> BACK TO COMPONENT MARKETPLACE
              </button>

              <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start bg-[#FAFFFB] border border-slate-200 rounded-3xl p-6 sm:p-8 relative shadow-lg">
                <div className="absolute inset-0 bg-radial from-green-500/[0.04] via-transparent to-transparent opacity-60 pointer-events-none" />

                <div className="lg:col-span-5 relative">
                  <div className="w-full aspect-square rounded-2xl overflow-hidden border border-slate-200 shadow-xl bg-white flex items-center justify-center">
                    <img src={activeProduct.imageUrl} alt={activeProduct.name} className="w-full h-full object-cover opacity-80" />
                  </div>
                  <div className="p-3 bg-white border border-slate-200 rounded-xl text-[11px] font-mono flex items-center justify-between text-slate-600 shadow-inner">
                    <span>SHIPPING SPEED:</span>
                    <span className="text-emerald-700 font-bold">24-48 HOUR DISPATCH</span>
                  </div>
                </div>

                <div className="lg:col-span-7 space-y-5 relative z-10">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-slate-200 text-slate-600 font-mono text-[10px] font-bold uppercase shadow-inner">
                    <Cpu size={12} className="text-green-600" /> COMPONENT LOG: {activeProduct.badge}
                  </div>

                  <div className="flex justify-between items-start gap-4 border-b border-slate-200 pb-4">
                    <div>
                      <h1 className="text-2xl sm:text-3xl font-black text-slate-950 tracking-tight leading-tight">{activeProduct.name}</h1>
                      <div className="flex items-center gap-1 mt-1 text-xs text-orange-600 font-mono">
                        <Star size={12} fill="currentColor" />
                        <span>{activeProduct.rating} ({activeProduct.reviews} customer ratings)</span>
                      </div>
                    </div>
                    <span className="text-2xl font-mono font-bold text-green-700 tracking-tight">{activeProduct.price}</span>
                  </div>

                  <p className="text-xs text-orange-700 font-semibold font-mono">✓ {activeProduct.tagline}</p>

                  <div className="p-5 bg-white border border-slate-200 rounded-xl text-xs text-slate-700 leading-relaxed font-light shadow-inner">
                    {activeProduct.desc}
                  </div>

                  <div className="space-y-3">
                    <h4 className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">HARDWARE METRIC SPECIFICATIONS:</h4>
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                      {activeProduct.specs.concat(['Hardware-isolated channel security encryption', 'Reflective barrier isolation bounds containment']).map((item) => (
                        <div key={item} className="flex items-center gap-2 text-xs text-slate-800 font-mono">
                          <Check size={13} className="text-green-600 shrink-0" />
                          <span className="truncate">{item}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="pt-6 border-t border-slate-200 flex flex-wrap gap-3">
                    <button
                      onClick={() => {
                        setCartCount(prev => prev + 1);
                        setSelectedProductSlug(null);
                      }}
                      className="h-11 px-6 bg-gradient-to-r from-green-600 to-emerald-600 hover:opacity-90 text-white font-mono font-bold text-xs uppercase tracking-wider rounded-xl transition-all shadow-lg shadow-green-200 flex items-center gap-2"
                    >
                      <ShoppingCart size={14} /> ADD COMPONENT MODULE TO CONFIG
                    </button>
                    <button className="h-11 px-4 bg-white border border-slate-200 hover:border-slate-300 text-slate-600 hover:text-green-800 font-mono font-bold text-xs uppercase tracking-wider transition-colors rounded-xl inline-flex items-center gap-2 shadow-inner">
                      <Download size={13} /> DIAGRAMS (PDF)
                    </button>
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