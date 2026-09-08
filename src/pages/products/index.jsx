import React, { useState } from 'react';
import Head from 'next/head';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Cpu,
  Zap,
  Shield,
  Activity,
  Laptop,
  Sun,
  ShieldCheck,
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import ProductsHeroSection from '../../components/sections/products/ProductsHeroSection';
import RevFSystemKitExplorer from '../../components/sections/products/RevFSystemKitExplorer';
import ProductsPurchaseSection from '../../components/sections/products/ProductsPurchaseSection';
import ProductsFaqSection from '../../components/sections/products/ProductsFaqSection';
import ProductDetailSection from '../../components/sections/products/ProductDetailSection';

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
    reviews: 142,
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
    reviews: 96,
  },
  {
    slug: 'lumen-matrix-8k-tv',
    name: 'Lumen Matrix 8K TV',
    price: '$1,999',
    category: 'Entertainment & Computing',
    badge: 'ENTERTAINMENT & COMPUTING',
    tagline: 'The first TV that plays perfect, crystal-clear videos without slowing down.',
    desc: 'Powered by a direct light connection from your ceiling. It streams perfect 8K videos and video games smoothly, without ever slowing down when other people use the internet.',
    icon: Sun,
    accent: 'from-green-400/10 to-green-500/10 border-green-300',
    textAccent: 'text-green-700',
    imageUrl: '/images/products/Lumen 8k TV.png',
    specs: ['Perfect 8K Video Quality', 'Smooth Video Gaming', 'Never Slows Down'],
    rating: 5.0,
    reviews: 34,
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
    reviews: 51,
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
    reviews: 88,
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
    reviews: 112,
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
    reviews: 67,
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
    reviews: 23,
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
    reviews: 49,
  },
];

export default function ProductsPage() {
  const [selectedProductSlug, setSelectedProductSlug] = useState(null);
  const [, setCartCount] = useState(0);

  const activeProduct = productsData.find((p) => p.slug === selectedProductSlug) || null;

  return (
    <div className="relative min-h-screen overflow-x-clip font-sans lumen-page-bg text-slate-900 antialiased selection:bg-green-500 selection:text-white">
      <Head>
        <title>LumenFi Hardware Hub | Next-Gen E-Commerce Wireless LiFi Store</title>
        <meta
          name="description"
          content="Deploy military-grade optical internet architecture directly into your luxury living space."
        />
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
              <ProductsHeroSection />
              <RevFSystemKitExplorer />
              <ProductsPurchaseSection />
              <ProductsFaqSection />
            </motion.div>
          ) : (
            <ProductDetailSection
              product={activeProduct}
              onBack={() => setSelectedProductSlug(null)}
              onAddToCart={() => {
                setCartCount((prev) => prev + 1);
                        setSelectedProductSlug(null);
                      }}
            />
          )}
        </AnimatePresence>
      </main>

      <Footer />
    </div>
  );
}
