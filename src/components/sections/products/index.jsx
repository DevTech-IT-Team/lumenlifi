import React, { useState } from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import {
    Zap,
    ShieldCheck,
    Cpu,
    ArrowRight,
    Check,
    Info,
    HelpCircle,
    FileText,
    Mail,
    Phone,
    MapPin,
    Globe,
    Laptop,
    Radio,
    Sun,
    ShieldAlert
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

/* ==========================================================================
   1. RESIDENTIAL LIFI CONCEPT DATA MATRIX
   ========================================================================== */
const productsData = [
    {
        slug: 'lumen-core-router',
        name: 'Lumen LIFI',
        badge: 'Central Gateway Unit',
        tagline: 'The optical heart of your residential lightwave network.',
        desc: 'Translates incoming fiber gigabit data lines directly into high-frequency optical signals. Plugs right into your home connection and powers the ceiling light array without emitting radio clutter.',
        icon: Cpu,
        accent: 'from-emerald-500 to-teal-500',
        bg: 'bg-emerald-50/30',
        border: 'border-emerald-100',
        imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
        specs: ['Fiber-to-Light Processing Unit', 'Zero Radio Frequency Clutter', 'Multi-room Driver Array']
    },
    {
        slug: 'photon-antenna-light',
        name: 'Lumen LIFI',
        badge: 'Optical Transmitter Node',
        tagline: 'High-speed broadband beams hidden inside architectural lighting.',
        desc: 'Replaces traditional radio antennas with premium, flicker-free ceiling transceivers. Floods your workspace or living room with warm illumination and multi-gigabit data simultaneously.',
        icon: Sun,
        accent: 'from-amber-500 to-orange-500',
        bg: 'bg-amber-50/30',
        border: 'border-amber-100',
        imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600',
        specs: ['Dual-Function LED Engineering', 'Symmetric Gigabit Downlink', 'Complete Wall-Contained Signal']
    },
    {
        slug: 'lumen-usb-dongle',
        name: 'Lumen LIFI',
        badge: 'Client Device Adapter',
        tagline: 'Instant LiFi capability for your laptops and computers.',
        desc: 'An ultra-lightweight high-tech adapter that snaps into any standard USB-C port. Houses microscopic optical sensors that capture the data beam from your lighting layout seamlessly.',
        icon: Laptop,
        accent: 'from-cyan-500 to-blue-500',
        bg: 'bg-cyan-50/30',
        border: 'border-cyan-100',
        imageUrl: 'https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600',
        specs: ['Plug-and-Play Configuration', 'Microscopic Optical Array', 'Low Power Consumption Rate']
    }
];

/* ==========================================================================
   2. MAIN PRODUCTION ROUTE INTEGRATION
   ========================================================================== */
export default function LumenPhiProductsSuite() {
    const [selectedProductSlug, setSelectedProductSlug] = useState(null);
    const [activeFaq, setActiveFaq] = useState(0);

    const activeProduct = productsData.find(p => p.slug === selectedProductSlug) || null;

    return (
        <div className="min-h-screen font-sans bg-white text-slate-800 antialiased selection:bg-emerald-100">
            <Head>
                <title>Lumen LIFI</title>
                <meta name="description" content="Lumen LIFI — residential optical wireless internet plans and hardware." />
            </Head>

            <Header />

            <main className="pt-24 select-none">

                {/* MERCHANT CHECKLIST AUDIT COMPLIANCE BANNER */}
                <div className="bg-slate-900 text-slate-200 text-xs py-2.5 px-4 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
                        <p className="flex items-center gap-2 font-mono">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Verified Merchant Processing Compliance Layer Active</span>
                        </p>
                        <div className="flex gap-4 font-mono text-[11px]">
                            <span className="text-slate-400">100% Secure Checkout</span>
                            <span className="text-slate-400">30-Day Money-Back Guarantee</span>
                        </div>
                    </div>
                </div>

                <AnimatePresence mode="wait">
                    {!activeProduct ? (

                        /* ──── STAGE A: THE MASTER CATALOG LAYOUT & EXPLAINERS ──── */
                        <motion.div
                            key="catalog-view"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="py-12"
                        >

                            {/* PRIMARY HIGH-TECH HERO & TECHNOLOGY RESTRICTION MATRIX */}
                            <div className="max-w-7xl mx-auto px-6 mb-20">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-950 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative shadow-2xl">
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none" />

                                    <div className="lg:col-span-7 space-y-6">
                                        <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950 border border-emerald-800/60 px-3 py-1 rounded-full w-max block">
                                            The Next Leap in Home Internet
                                        </span>
                                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                                            Internet Delivered at the <br />
                                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                                Speed of Light.
                                            </span>
                                        </h1>
                                        <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                                            Lumen LIFI replaces congested, traditional home broadband with lightning-fast optical wireless technology. Experience pristine, dedicated connectivity built for modern streaming, professional home workspaces, and advanced AI application tracking.
                                        </p>
                                        <div className="flex flex-wrap gap-4 pt-2">
                                            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-mono text-slate-300">
                                                <Check className="w-4 h-4 text-emerald-400" /> Outperforms Traditional WiFi
                                            </div>
                                            <div className="flex items-center gap-2 bg-slate-900 border border-slate-800 px-4 py-2 rounded-xl text-xs font-mono text-slate-300">
                                                <Check className="w-4 h-4 text-emerald-400" /> No Signal Dead Zones
                                            </div>
                                        </div>
                                    </div>

                                    {/* paulmichael's clarification note requirement: lifi vs wifi explicitly mapped */}
                                    <div className="lg:col-span-5 bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-4">
                                        <div className="flex items-center gap-2 text-amber-400">
                                            <Info className="w-4 h-4 shrink-0" />
                                            <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Crucial Science Parameter</h3>
                                        </div>
                                        <h4 className="text-base font-bold text-white tracking-tight">How is LiFi different from WiFi?</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            Traditional **WiFi uses congested radio waves** to pass data, which easily drops speeds due to neighboring router interference.
                                        </p>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            **Lumen LIFI transmits data through pristine light waves** emitted from advanced LED components. This provides dedicated high-bandwidth beams that cannot be choked or intercepted from outside your walls.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* ASYMMETRIC DESIGN CONCEPT ART HARDWARE GRID */}
                            <div className="max-w-7xl mx-auto px-6 mb-24">
                                <div className="max-w-3xl mb-12 space-y-2">
                                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">
                                        Futuristic Component Architecture
                                    </h2>
                                    <p className="text-slate-500 text-xs font-medium font-mono">
                                        EXPLORE THE INDIVIDUAL CONCEPT DESIGNS DRIVING THE LUMEN PHI BROADBAND ECOSYSTEM:
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {productsData.map((product) => {
                                        const IconComp = product.icon;
                                        return (
                                            <div
                                                key={product.slug}
                                                className="flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow"
                                            >
                                                {/* Concept Art Visual Container */}
                                                <div className="relative w-full aspect-video bg-slate-950 overflow-hidden">
                                                    <img
                                                        src={product.imageUrl}
                                                        alt={product.name}
                                                        className="w-full h-full object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
                                                    />
                                                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest border border-slate-700">
                                                        Concept Visualization
                                                    </div>
                                                </div>

                                                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="p-1.5 bg-slate-50 border border-slate-100 rounded-md text-slate-600">
                                                                <IconComp className="w-3.5 h-3.5" />
                                                            </div>
                                                            <span className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase">
                                                                {product.badge}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-lg font-black text-slate-900 tracking-tight">{product.name}</h3>
                                                        <p className="text-xs text-slate-500 leading-relaxed font-normal">{product.desc}</p>
                                                    </div>

                                                    <div className="space-y-4 pt-4 border-t border-slate-100">
                                                        <div className="space-y-1.5">
                                                            {product.specs.map((s, idx) => (
                                                                <p key={idx} className="text-[11px] font-mono text-slate-600 flex items-center gap-2">
                                                                    <span className="w-1 h-1 rounded-full bg-emerald-500" /> {s}
                                                                </p>
                                                            ))}
                                                        </div>

                                                        <button
                                                            onClick={() => {
                                                                setSelectedProductSlug(product.slug);
                                                                if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                                                            }}
                                                            className="w-full py-2.5 px-4 rounded-xl bg-slate-50 hover:bg-emerald-50 border border-slate-200 hover:border-emerald-200 text-slate-700 hover:text-emerald-700 font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                                                        >
                                                            View Specification Sheet <ArrowRight className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            {/* MERCHANT PROCESSOR AUDIT VERIFICATION MODULE */}
                            <div className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">

                                {/* Column 1: Mandatory Legal Boilerplates */}
                                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2 text-slate-900">
                                        <FileText className="w-4 h-4 text-emerald-600" />
                                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider">Required Documentation</h3>
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Review our operational rules, consumer consumer data protections, and terms of service guidelines for legal merchant transparency.
                                    </p>
                                    <div className="space-y-2 pt-2 font-mono text-xs font-bold">
                                        <Link href="/privacy-policy" className="block text-emerald-600 hover:underline">
                                            → Privacy Policy Blueprint
                                        </Link>
                                        <Link href="/terms-and-conditions" className="block text-emerald-600 hover:underline">
                                            → Terms & Conditions Template
                                        </Link>
                                        <Link href="/refund-policy" className="block text-emerald-600 hover:underline">
                                            → Cancellation & Refund Policy
                                        </Link>
                                    </div>
                                </div>

                                {/* Column 2: Verifiable Operational Registry Contact Info */}
                                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2 text-slate-900">
                                        <Mail className="w-4 h-4 text-emerald-600" />
                                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider">Corporate Identification</h3>
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed">
                                        Official deployment inquiries or merchant processing clearance verifications can communicate directly with our centralized desk:
                                    </p>
                                    <div className="space-y-2 pt-1 text-xs font-mono text-slate-600">
                                        <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-slate-400" /> +91 (Commercial Support Line)</p>
                                        <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-slate-400" /> operations@lumenlifi.com</p>
                                        <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-slate-400" /> Residential Node Core, India Hub</p>
                                    </div>
                                </div>

                                {/* Column 3: Processing Checklist Items */}
                                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2 text-slate-900">
                                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider">Merchant Checklist Clearance</h3>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2 text-xs text-slate-600">
                                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>**Delivery Timeframes**: Hardware kits ship within 3–5 operational days across domestic hub registries.</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-xs text-slate-600">
                                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>**Transparent Invoicing**: No hidden spectrum taxations or regional equipment surcharges.</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* CONSUMER COMPETITOR FAQ COMPARISON SECTION (Airtel, Jio Framework) */}
                            <div className="max-w-4xl mx-auto px-6 mb-12">
                                <div className="text-center space-y-2 mb-12">
                                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">
                                        Frequently Answered Science
                                    </h2>
                                    <p className="text-slate-500 text-xs font-mono">
                                        HOW LUMEN PHI REDEFINES INDIAN HOME BROADBAND EXPECTATIONS:
                                    </p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "How does this replace my standard Jio or Airtel fiber network setup?",
                                            a: "Lumen LIFI functions similarly to standard premium home ISPs, except for the internal room distribution method. Instead of projecting a messy WiFi radio wave signal that slows down across walls, our technology patches data cleanly via ceiling light illumination arrays."
                                        },
                                        {
                                            q: "What is the return and transaction cancellation policy structure?",
                                            a: "To ensure full clearance transparency for our merchant merchant processors, Lumen LIFI offers a comprehensive 30-day structural testing window. If the equipment configuration fails to achieve parameters, a full resource refund is issued immediately."
                                        }
                                    ].map((faq, index) => (
                                        <div
                                            key={index}
                                            className="border border-slate-200 rounded-xl p-5 bg-white cursor-pointer"
                                            onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                                        >
                                            <div className="flex justify-between items-center gap-4">
                                                <h4 className="text-sm font-bold text-slate-900 font-mono">{faq.q}</h4>
                                                <HelpCircle className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${activeFaq === index ? 'rotate-180 text-emerald-600' : ''}`} />
                                            </div>
                                            {activeFaq === index && (
                                                <p className="text-xs text-slate-500 mt-3 leading-relaxed border-t border-slate-100 pt-3">
                                                    {faq.a}
                                                </p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>

                        </motion.div>
                    ) : (

                        /* ──── STAGE B: ISOLATED PRODUCT SPECIFICATION SHEET VIEW ──── */
                        <motion.div
                            key="detail-view"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            className="max-w-6xl mx-auto px-6 py-12 pb-24"
                        >
                            <button
                                onClick={() => setSelectedProductSlug(null)}
                                className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-emerald-600 transition-colors mb-12 group font-bold"
                            >
                                ← BACK TO HARDWARE OVERVIEW
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                                <div className="lg:col-span-5 relative">
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${activeProduct.accent} rounded-2xl transform rotate-2 scale-[1.02] opacity-10 blur-sm`} />
                                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 relative">
                                        <img src={activeProduct.imageUrl} alt={activeProduct.name} className="w-full h-full object-cover opacity-90" />
                                    </div>
                                </div>

                                <div className="lg:col-span-7 space-y-6">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[10px] font-bold uppercase">
                                        PRODUCT IDENTITY CONFIG: {activeProduct.badge}
                                    </span>

                                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">{activeProduct.name}</h2>
                                    <p className="text-sm text-slate-500 font-mono font-medium leading-relaxed">{activeProduct.tagline}</p>

                                    <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-600 leading-relaxed">
                                        {activeProduct.desc}
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">Architecture Checklist Attributes:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {activeProduct.specs.concat(['Certified Encryption Protocol Layer', 'Residential Installation Blueprint Included']).map((spec, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-600">
                                                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                                    <span>{spec}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                                        <Link href="/contact" className="h-11 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center">
                                            Pre-Order Evaluation Unit
                                        </Link>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </main>

            <Footer />
        </div>
    );
}