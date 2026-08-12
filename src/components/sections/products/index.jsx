import React, { useRef, useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Link from 'next/link';
// Residential Use Case Assets (Images 1-5)
import homeAutomationImg from '../../public/images/features/home-automation.png';   // image_58265e.png / item 1
import gamingImg from '../../public/images/features/gaming.png';               // image_582625.jpg / item 2
import streamingImg from '../../public/images/features/streaming.png';         // image_581ec3.jpg / item 3
import infiniteDevicesImg from '../../public/images/features/infinite-connection.png';     // image_56ba64.png / item 4
import invisibleInfraImg from '../../public/images/features/invisible.jpg';         // image_56ba41.jpg / item 5

// Enterprise Use Case Assets (Images 6-9)
import corporateBoardroomImg from '../../public/images/eco/holographic.png';     // image_56ba25.jpg / item 6
import manufacturingImg from '../../public/images/eco/manufacturing.png';     // image_56ba1e.jpg / item 7
import datacenterImg from '../../public/images/eco/data-centers.png';           // image_56ba00.png / item 8
import schoolImg from '../../public/images/eco/school.png';                   // image_56b9e5.png / item 9
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
    ShieldAlert,
    ChevronLeft,
    ChevronRight,
    Images
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

const productGalleryImages = [
    { id: 'gallery-a', src: '/images/products/A.jpg', alt: 'Lumen LiFi product gallery view A', label: 'System View 01' },
    { id: 'gallery-b', src: '/images/products/B.jpg', alt: 'Lumen LiFi product gallery view B', label: 'System View 02' },
    { id: 'gallery-c', src: '/images/products/C.jpg', alt: 'Lumen LiFi product gallery view C', label: 'System View 03' },
    { id: 'gallery-d', src: '/images/products/D.jpg', alt: 'Lumen LiFi product gallery view D', label: 'System View 04' },
    { id: 'gallery-e', src: '/images/products/E.jpg', alt: 'Lumen LiFi product gallery view E', label: 'System View 05' },
    { id: 'gallery-f', src: '/images/products/F.jpg', alt: 'Lumen LiFi product gallery view F', label: 'System View 06' },
    { id: 'gallery-g', src: '/images/products/G.jpg', alt: 'Lumen LiFi product gallery view G', label: 'System View 07' },
    { id: 'gallery-h', src: '/images/products/H.jpg', alt: 'Lumen LiFi product gallery view H', label: 'System View 08' },
];

/* ==========================================================================
   2. MAIN PRODUCTION ROUTE INTEGRATION
   ========================================================================== */
export default function LumenPhiProductsSuite() {
    const [selectedProductSlug, setSelectedProductSlug] = useState(null);
    const [activeFaq, setActiveFaq] = useState(0);
    const [activeGalleryIndex, setActiveGalleryIndex] = useState(0);
    const galleryTouchStart = useRef(null);

    const activeProduct = productsData.find(p => p.slug === selectedProductSlug) || null;
    const activeGalleryImage = productGalleryImages[activeGalleryIndex];

    const showPreviousGalleryImage = () => {
        setActiveGalleryIndex((current) => (
            current === 0 ? productGalleryImages.length - 1 : current - 1
        ));
    };

    const showNextGalleryImage = () => {
        setActiveGalleryIndex((current) => (
            current === productGalleryImages.length - 1 ? 0 : current + 1
        ));
    };

    const handleGalleryTouchEnd = (event) => {
        if (galleryTouchStart.current === null) return;
        const distance = galleryTouchStart.current - event.changedTouches[0].clientX;
        galleryTouchStart.current = null;
        if (Math.abs(distance) < 50) return;
        if (distance > 0) showNextGalleryImage();
        else showPreviousGalleryImage();
    };

    return (
        <div className="min-h-screen font-sans lumen-page-bg-white dark:bg-slate-950 text-slate-800 dark:text-slate-200 antialiased selection:bg-emerald-100 dark:selection:bg-emerald-950 transition-colors duration-300">
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
                                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight">
                                        Futuristic Component Architecture
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-medium font-mono">
                                        EXPLORE THE INDIVIDUAL CONCEPT DESIGNS DRIVING THE LUMEN PHI BROADBAND ECOSYSTEM:
                                    </p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {productsData.map((product) => {
                                        const IconComp = product.icon;
                                        return (
                                            <div
                                                key={product.slug}
                                                className="flex flex-col rounded-2xl border border-slate-200/80 dark:border-slate-800 bg-white dark:bg-slate-900/40 shadow-sm dark:shadow-none overflow-hidden hover:shadow-md transition-all duration-300"
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
                                                            <div className="p-1.5 bg-slate-50 dark:bg-slate-800 border border-slate-100 dark:border-slate-700 rounded-md text-slate-600 dark:text-slate-300">
                                                                <IconComp className="w-3.5 h-3.5" />
                                                            </div>
                                                            <span className="text-[10px] font-bold font-mono tracking-wider text-slate-400 dark:text-slate-500 uppercase">
                                                                {product.badge}
                                                            </span>
                                                        </div>
                                                        <h3 className="text-lg font-black text-slate-900 dark:text-white tracking-tight">{product.name}</h3>
                                                        <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed font-normal">{product.desc}</p>
                                                    </div>

                                                    <div className="space-y-4 pt-4 border-t border-slate-100 dark:border-slate-800">
                                                        <div className="space-y-1.5">
                                                            {product.specs.map((s, idx) => (
                                                                <p key={idx} className="text-[11px] font-mono text-slate-600 dark:text-slate-350 flex items-center gap-2">
                                                                    <span className="w-1 h-1 rounded-full bg-emerald-500" /> {s}
                                                                </p>
                                                            ))}
                                                        </div>

                                                        <button
                                                            onClick={() => {
                                                                setSelectedProductSlug(product.slug);
                                                                if (typeof window !== 'undefined') window.scrollTo({ top: 0, behavior: 'smooth' });
                                                            }}
                                                            className="w-full py-2.5 px-4 rounded-xl bg-slate-50 dark:bg-slate-800/40 hover:bg-emerald-50 dark:hover:bg-emerald-950/30 border border-slate-200 dark:border-slate-800 hover:border-emerald-200 dark:hover:border-emerald-800 text-slate-700 dark:text-slate-300 hover:text-emerald-700 dark:hover:text-emerald-400 font-mono font-bold text-xs uppercase tracking-wider transition-all flex items-center justify-center gap-2"
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
                                <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800 p-6 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                                        <FileText className="w-4 h-4 text-emerald-600" />
                                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider">Required Documentation</h3>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Review our operational rules, consumer consumer data protections, and terms of service guidelines for legal merchant transparency.
                                    </p>
                                    <div className="space-y-2 pt-2 font-mono text-xs font-bold">
                                        <Link href="/privacy" className="block text-emerald-600 hover:underline">
                                            → Privacy Policy Blueprint
                                        </Link>
                                        <Link href="/terms" className="block text-emerald-600 hover:underline">
                                            → Terms & Conditions Template
                                        </Link>
                                        <Link href="/terms#refund-policy" className="block text-emerald-600 hover:underline">
                                            → Cancellation & Refund Policy
                                        </Link>
                                    </div>
                                </div>

                                {/* Column 2: Verifiable Operational Registry Contact Info */}
                                <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800 p-6 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                                        <Mail className="w-4 h-4 text-emerald-600" />
                                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider">Corporate Identification</h3>
                                    </div>
                                    <p className="text-xs text-slate-500 dark:text-slate-400 leading-relaxed">
                                        Official deployment inquiries or merchant processing clearance verifications can communicate directly with our centralized desk:
                                    </p>
                                    <div className="space-y-2 pt-1 text-xs font-mono text-slate-600 dark:text-slate-350">
                                        <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-slate-400" /> +91 (Commercial Support Line)</p>
                                        <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-slate-400" /> operations@lumenlifi.com</p>
                                        <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-slate-400" /> Residential Node Core, India Hub</p>
                                    </div>
                                </div>

                                {/* Column 3: Processing Checklist Items */}
                                <div className="bg-slate-50 dark:bg-slate-900/30 border border-slate-200/60 dark:border-slate-800 p-6 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2 text-slate-900 dark:text-white">
                                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider">Merchant Checklist Clearance</h3>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-350">
                                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>**Delivery Timeframes**: Hardware kits ship within 3–5 operational days across domestic hub registries.</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-xs text-slate-600 dark:text-slate-350">
                                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span>**Transparent Invoicing**: No hidden spectrum taxations or regional equipment surcharges.</span>
                                        </div>
                                    </div>
                                </div>

                            </div>

                            {/* MANUALLY CONTROLLED PRODUCT IMAGE GALLERY */}
                            <section className="relative max-w-7xl mx-auto px-6 mb-24" aria-labelledby="product-gallery-title">
                                <div className="text-center max-w-2xl mx-auto mb-10">
                                    <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-3 py-1.5 text-[10px] font-mono font-bold uppercase tracking-[0.16em] text-emerald-700">
                                        <Images className="w-3.5 h-3.5" aria-hidden="true" />
                                        Product Gallery
                                    </div>
                                    <h2 id="product-gallery-title" className="mt-4 text-3xl sm:text-4xl font-black tracking-tight text-slate-900 dark:text-white">
                                        Explore Lumen LiFi Up Close
                                    </h2>
                                    <p className="mt-3 text-sm leading-relaxed text-slate-500 dark:text-slate-400">
                                        Browse every angle of the system. Use the controls, thumbnails, or swipe to move through the gallery.
                                    </p>
                                </div>

                                <div className="relative overflow-hidden rounded-[28px] border border-slate-200 dark:border-slate-800 bg-[#07111F] shadow-[0_24px_70px_rgba(15,23,42,0.16)]">
                                    <div
                                        className="relative aspect-[16/10] sm:aspect-[16/9] w-full touch-pan-y"
                                        onTouchStart={(event) => {
                                            galleryTouchStart.current = event.touches[0].clientX;
                                        }}
                                        onTouchEnd={handleGalleryTouchEnd}
                                    >
                                        <AnimatePresence mode="wait" initial={false}>
                                            <motion.div
                                                key={activeGalleryImage.id}
                                                initial={{ opacity: 0, x: 30 }}
                                                animate={{ opacity: 1, x: 0 }}
                                                exit={{ opacity: 0, x: -30 }}
                                                transition={{ duration: 0.28, ease: 'easeOut' }}
                                                className="absolute inset-0"
                                            >
                                                <Image
                                                    src={activeGalleryImage.src}
                                                    alt={activeGalleryImage.alt}
                                                    fill
                                                    sizes="(max-width: 640px) 100vw, (max-width: 1280px) 90vw, 1152px"
                                                    className="object-contain"
                                                    loading="lazy"
                                                />
                                            </motion.div>
                                        </AnimatePresence>

                                        <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#020817]/65 via-transparent to-[#020817]/10" />

                                        <div className="absolute left-4 top-4 sm:left-6 sm:top-6 rounded-full border border-white/15 bg-[#07111F]/75 px-3 py-1.5 font-mono text-[10px] font-bold uppercase tracking-[0.14em] text-white backdrop-blur-md">
                                            {activeGalleryImage.label}
                                        </div>

                                        <button
                                            type="button"
                                            onClick={showPreviousGalleryImage}
                                            className="absolute left-3 sm:left-5 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-[#07111F]/70 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                            aria-label="Show previous product image"
                                        >
                                            <ChevronLeft className="h-5 w-5" aria-hidden="true" />
                                        </button>

                                        <button
                                            type="button"
                                            onClick={showNextGalleryImage}
                                            className="absolute right-3 sm:right-5 top-1/2 -translate-y-1/2 flex h-11 w-11 sm:h-12 sm:w-12 items-center justify-center rounded-full border border-white/20 bg-[#07111F]/70 text-white shadow-lg backdrop-blur-md transition-all hover:scale-105 hover:bg-white hover:text-slate-900 focus:outline-none focus:ring-2 focus:ring-emerald-400"
                                            aria-label="Show next product image"
                                        >
                                            <ChevronRight className="h-5 w-5" aria-hidden="true" />
                                        </button>

                                        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 rounded-full border border-white/15 bg-[#07111F]/75 px-4 py-2 font-mono text-[10px] font-bold tracking-[0.16em] text-white backdrop-blur-md">
                                            {String(activeGalleryIndex + 1).padStart(2, '0')} / {String(productGalleryImages.length).padStart(2, '0')}
                                        </div>
                                    </div>

                                    <div className="border-t border-white/10 bg-[#07111F] p-3 sm:p-4">
                                        <div className="flex gap-2.5 overflow-x-auto pb-1 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden" aria-label="Choose gallery image">
                                            {productGalleryImages.map((image, index) => {
                                                const isActive = index === activeGalleryIndex;
                                                return (
                                                    <button
                                                        key={image.id}
                                                        type="button"
                                                        onClick={() => setActiveGalleryIndex(index)}
                                                        className={`relative h-16 w-24 sm:h-20 sm:w-28 shrink-0 overflow-hidden rounded-xl border-2 transition-all ${
                                                            isActive
                                                                ? 'border-emerald-400 opacity-100 shadow-[0_0_18px_rgba(52,211,153,0.25)]'
                                                                : 'border-white/10 opacity-55 hover:border-white/30 hover:opacity-100'
                                                        }`}
                                                        aria-label={`Show ${image.label}`}
                                                        aria-current={isActive ? 'true' : undefined}
                                                    >
                                                        <Image
                                                            src={image.src}
                                                            alt=""
                                                            fill
                                                            sizes="112px"
                                                            className="object-cover"
                                                            loading="lazy"
                                                        />
                                                    </button>
                                                );
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </section>

                            {/* CONSUMER COMPETITOR FAQ COMPARISON SECTION (Airtel, Jio Framework) */}
                            <div className="max-w-4xl mx-auto px-6 mb-12">
                                <div className="text-center space-y-2 mb-12">
                                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900 dark:text-white">
                                        Frequently Answered Science
                                    </h2>
                                    <p className="text-slate-500 dark:text-slate-400 text-xs font-mono">
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
                                            className="border border-slate-200 dark:border-slate-800 rounded-xl p-5 bg-white dark:bg-slate-900/40 cursor-pointer"
                                            onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}
                                        >
                                            <div className="flex justify-between items-center gap-4">
                                                <h4 className="text-sm font-bold text-slate-900 dark:text-slate-100 font-mono">{faq.q}</h4>
                                                <HelpCircle className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${activeFaq === index ? 'rotate-180 text-emerald-600' : ''}`} />
                                            </div>
                                            {activeFaq === index && (
                                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-3 leading-relaxed border-t border-slate-100 dark:border-slate-800 pt-3">
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
                                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 dark:border-slate-800 relative">
                                        <Image
                      src={activeProduct.imageUrl}
                      alt={activeProduct.name}
                      fill
                      sizes="(max-width: 768px) 100vw, 600px"
                      className="object-cover opacity-90"
                      loading="lazy"
                    />
                                    </div>
                                </div>

                                <div className="lg:col-span-7 space-y-6">
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 text-slate-500 dark:text-slate-400 font-mono text-[10px] font-bold uppercase">
                                        PRODUCT IDENTITY CONFIG: {activeProduct.badge}
                                    </span>

                                    <h2 className="text-3xl font-black text-slate-900 dark:text-white tracking-tight">{activeProduct.name}</h2>
                                    <p className="text-sm text-slate-500 dark:text-slate-400 font-mono font-medium leading-relaxed">{activeProduct.tagline}</p>

                                    <div className="p-5 bg-slate-50 dark:bg-slate-900 border border-slate-200/80 dark:border-slate-800 rounded-xl text-xs text-slate-600 dark:text-slate-350 leading-relaxed">
                                        {activeProduct.desc}
                                    </div>

                                    <div className="space-y-2">
                                        <h4 className="text-[10px] font-bold font-mono tracking-widest text-slate-400 dark:text-slate-500 uppercase">Architecture Checklist Attributes:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {activeProduct.specs.concat(['Certified Encryption Protocol Layer', 'Residential Installation Blueprint Included']).map((spec, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-slate-350">
                                                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                                    <span>{spec}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-100 dark:border-slate-800 flex flex-wrap gap-4">
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