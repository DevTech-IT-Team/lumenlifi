import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
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
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import RevFSystemKitExplorer from '../../components/sections/products/RevFSystemKitExplorer';
import ProductsFaqSection from '../../components/sections/products/ProductsFaqSection';

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

export default function ProductsPage() {
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);
  const [selectedCategory, setSelectedCategory] = useState('All');
  const [cartCount, setCartCount] = useState(0);

  const activeProduct = productsData.find(p => p.slug === selectedProductSlug) || null;
  const categories = ['All', 'Network Foundation', 'Entertainment & Computing', 'Security & Perimeter', 'Conscious Appliances & Home Automation'];

  const filteredProducts = selectedCategory === 'All'
    ? productsData
    : productsData.filter(p => p.category === selectedCategory);

  return (
    <div className="relative min-h-screen overflow-x-clip font-sans lumen-page-bg text-slate-900 antialiased selection:bg-green-500 selection:text-white">
      <Head>
        <title>LumenFi Hardware Hub | Next-Gen E-Commerce Wireless LiFi Store</title>
        <meta name="description" content="Deploy military-grade optical internet architecture directly into your luxury living space." />
      </Head>
      <Header />

      <main className="relative z-10 pb-16 sm:pb-24">
        <AnimatePresence mode="wait">
          {!activeProduct ? (
            <motion.div
              key="marketplace-view"
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -12 }}
              className="space-y-0"
            >
              <section className="relative isolate flex min-h-[min(100svh,920px)] w-full flex-col overflow-hidden bg-[#06131d]">
                <div className="absolute inset-0 -z-20">
                  <Image
                    src="/images/products/products_bgs.png"
                    alt=""
                    fill
                    priority
                    className="object-contain object-center"
                    sizes="100vw"
                  />
                </div>
                <div
                  className="pointer-events-none absolute inset-0 -z-10"
                  style={{
                    background:
                      'linear-gradient(90deg, rgba(6,19,29,0.72) 0%, rgba(6,19,29,0.35) 45%, rgba(6,19,29,0.1) 100%)',
                  }}
                  aria-hidden="true"
                />

                <div className="relative z-10 mx-auto flex w-full max-w-[1380px] flex-1 flex-col justify-end px-5 pb-12 pt-28 sm:px-8 sm:pb-14 lg:px-12 lg:pb-16">
                  <div className="flex max-w-3xl flex-col items-start gap-10 sm:gap-14 lg:gap-16">
                    <h1
                      className="!m-0 max-w-[14ch] !text-[clamp(2.75rem,6.8vw,4.75rem)] !font-normal leading-[1.05] tracking-[-0.035em] text-[#EBF5FF]"
                      style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
                    >
                      Shop the
                      <br />
                      Conscious Home.
                    </h1>

                    <div className="flex flex-col gap-4 sm:flex-row sm:items-center sm:gap-6">
                      <p
                        className="!m-0 max-w-[280px] !text-[15px] !font-normal leading-snug text-white/65"
                        style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                      >
                        Every device has built-in light receivers — zero lag, safe security, and unlimited speed
                      </p>
                      <ArrowRight
                        className="hidden h-4 w-4 shrink-0 text-white/40 sm:block"
                        strokeWidth={1.5}
                        aria-hidden="true"
                      />
                      <p
                        className="!m-0 max-w-[200px] !text-[15px] !font-normal leading-snug text-white/65"
                        style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                      >
                        The world&apos;s first home run entirely on light
                      </p>
                    </div>
                  </div>
                </div>
              </section>

              <RevFSystemKitExplorer />

              <section className="section-wash-navy relative w-full overflow-hidden py-16 sm:py-20" aria-labelledby="product-gallery-title">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                  <div className="mx-auto mb-12 max-w-2xl text-center">
                    <h2 id="product-gallery-title" className="lumen-h2-light mt-4">
                      Purchase Now
                    </h2>
                    <p className="lumen-body-sm-light mt-3">
                      Get the complete RevF System Kit — ships worldwide.
                    </p>
                  </div>

                  <div className="relative z-10 mb-12 rounded-3xl border border-white/15 bg-white/[0.06] p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-6">
                      <div className="space-y-2">
                        <div className="flex items-center gap-1 text-amber-400">
                          {[1, 2, 3, 4, 5].map((s) => (
                            <Star key={s} size={14} fill="currentColor" />
                          ))}
                          <span className="ml-1 font-mono text-xs text-white/60">4.9 · 128 reviews</span>
                        </div>
                        <h3 className="lumen-h3">Buy RevF Kit</h3>
                        <p className="lumen-price text-[var(--lumen-cyan)]">
                          $3,371
                          <span className="ml-2 text-sm font-normal text-white/60">Ships Worldwide</span>
                        </p>
                      </div>
                      <div className="flex w-full flex-col gap-3 sm:flex-row md:w-auto">
                        <motion.a
                          href="https://rzp.io/rzp/vv8HFbfc"
                          className="inline-flex h-12 w-full cursor-pointer items-center justify-center gap-2 rounded-full px-8 text-sm font-bold tracking-wide text-white sm:w-auto"
                          style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
                          whileHover={{ scale: 1.03 }}
                          whileTap={{ scale: 0.98 }}
                        >
                          <ShoppingCart size={18} />
                          Buy Now
                          <ArrowRight size={16} />
                        </motion.a>
                        {/* <a
                          href="#"
                          className="inline-flex h-12 w-full items-center justify-center gap-2 rounded-lg border border-[var(--lumen-cyan)]/40 bg-transparent px-8 text-sm font-bold text-[var(--lumen-cyan)] transition-colors hover:border-[var(--lumen-cyan)] hover:bg-white/5 sm:w-auto"
                        >
                          <Download size={16} />
                          View Datasheet
                        </a> */}
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <ProductsFaqSection />
            </motion.div>
          ) : (
            <motion.section
              key="detail-view"
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -15 }}
              transition={{ duration: 0.3 }}
              className="mx-auto max-w-5xl px-4 py-4 sm:px-6"
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
                    <Image
                      src={activeProduct.imageUrl}
                      alt={activeProduct.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover opacity-80"
                      loading="lazy"
                    />
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
                      <h1 className="lumen-h2 text-slate-950">{activeProduct.name}</h1>
                      <div className="flex items-center gap-1 mt-1 text-xs text-orange-600 font-mono">
                        <Star size={12} fill="currentColor" />
                        <span>{activeProduct.rating} ({activeProduct.reviews} customer ratings)</span>
                      </div>
                    </div>
                    <span className="lumen-price text-green-700">{activeProduct.price}</span>
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