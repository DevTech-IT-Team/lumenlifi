import React, { useState } from 'react';
import Head from 'next/head';
import Image from 'next/image';
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
    Laptop,
    Sun
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const productsData = [
    {
        slug: 'lumen-core-router',
        name: 'Lumen Core Router',
        badge: 'Central Gateway Unit',
        tagline: 'The heart of your home light network.',
        desc: 'Turns your incoming high-speed internet cables into clean light signals. It plugs right into your home connection and runs your ceiling lights without any messy radio waves.',
        icon: Cpu,
        accent: 'from-emerald-500 to-teal-500',
        bg: 'bg-emerald-50/30',
        border: 'border-emerald-100',
        imageUrl: 'https://images.unsplash.com/photo-1544244015-0df4b3ffc6b0?auto=format&fit=crop&q=80&w=600',
        specs: ['Fiber-to-Light Converter', 'No Radio Wave Mess', 'Runs Multiple Rooms']
    },
    {
        slug: 'photon-antenna-light',
        name: 'Lumen Photon Antenna Light',
        badge: 'Optical Transmitter Node',
        tagline: 'Super fast internet hidden right inside your lights.',
        desc: 'Replaces ugly radio antennas with smooth, flicker-free ceiling lights. It fills your room with beautiful warm light and super-fast internet at the exact same time.',
        icon: Sun,
        accent: 'from-amber-500 to-orange-500',
        bg: 'bg-amber-50/30',
        border: 'border-amber-100',
        imageUrl: 'https://images.unsplash.com/photo-1513506003901-1e6a229e2d15?auto=format&fit=crop&q=80&w=600',
        specs: ['Two-in-One Smart LED Lights', 'Super Fast Download and Upload', 'Internet Signal Stays Inside the Walls']
    },
    {
        slug: 'lumen-usb-dongle',
        name: 'Lumen USB Dongle',
        badge: 'Client Device Adapter',
        tagline: 'Gives your laptops and computers instant light-speed internet.',
        desc: 'A small, lightweight adapter that plugs into any standard USB-C port. It has tiny light sensors inside that easily catch the internet beams from your ceiling lights.',
        icon: Laptop,
        accent: 'from-cyan-500 to-blue-500',
        bg: 'bg-cyan-50/30',
        border: 'border-cyan-100',
        imageUrl: 'https://images.unsplash.com/photo-1601524909162-be87252be298?auto=format&fit=crop&q=80&w=600',
        specs: ['Easy Plug-and-Play Setup', 'Tiny Built-in Light Sensors', 'Uses Very Little Power']
    }
];

export default function LumenPhiProductsSuite() {
    const [selectedProductSlug, setSelectedProductSlug] = useState(null);
    const [activeFaq, setActiveFaq] = useState(0);
    const activeProduct = productsData.find(p => p.slug === selectedProductSlug) || null;

    return (
        <div className="min-h-screen font-sans lumen-page-bg-white text-slate-800 antialiased selection:bg-emerald-100">
            <Head>
                <title>Lumen LIFI</title>
                <meta name="description" content="Lumen LIFI — residential optical wireless internet plans and hardware." />
            </Head>

            <Header />

            <main className="pt-24 select-none">
                <div className="bg-slate-900 text-slate-200 text-xs py-2.5 px-4 border-b border-slate-800">
                    <div className="max-w-7xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-2 text-center sm:text-left">
                        <p className="flex items-center gap-2 font-mono">
                            <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                            <span>Safe and Verified Payment System Active</span>
                        </p>
                        <div className="flex gap-4 font-mono text-[11px]">
                            <span className="text-slate-400">100% Secure Checkout</span>
                            <span className="text-slate-400">30-Day Money-Back Guarantee</span>
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
                            className="py-12"
                        >
                            <div className="max-w-7xl mx-auto px-6 mb-20">
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center bg-slate-950 rounded-3xl p-8 sm:p-12 text-white overflow-hidden relative shadow-2xl">
                                    <div className="absolute inset-0 lumen-grid-pattern-hero-dark opacity-35 pointer-events-none z-0" />
                                    <div className="absolute top-0 right-0 w-96 h-96 bg-emerald-500/10 rounded-full blur-[100px] pointer-events-none z-0" />

                                    <div className="lg:col-span-7 space-y-6 relative z-10">
                                        <span className="text-xs font-bold font-mono tracking-widest text-emerald-400 uppercase bg-emerald-950 border border-emerald-800/60 px-3 py-1 rounded-full w-max block">
                                            The Next Big Step for Home Internet
                                        </span>
                                        <h1 className="text-4xl sm:text-5xl font-black tracking-tight leading-tight">
                                            Internet Delivered at the <br />
                                            <span className="bg-gradient-to-r from-emerald-400 to-teal-400 bg-clip-text text-transparent">
                                                Speed of Light.
                                            </span>
                                        </h1>
                                        <p className="text-slate-400 text-sm leading-relaxed max-w-xl">
                                            Lumen LiFi replaces crowded, slow home internet with super-fast light technology. Enjoy a private, clean connection made for smooth video streaming, home school, working from home, and fast apps.
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

                                    <div className="lg:col-span-5 bg-slate-900 border border-slate-800/80 p-6 rounded-2xl space-y-4 relative z-10">
                                        <div className="flex items-center gap-2 text-amber-400">
                                            <Info className="w-4 h-4 shrink-0" />
                                            <h3 className="text-xs font-mono font-bold uppercase tracking-wider">Important Science Fact</h3>
                                        </div>
                                        <h4 className="text-base font-bold text-white tracking-tight">How is LiFi different from WiFi?</h4>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            Traditional <strong>WiFi uses crowded radio waves</strong> to send data. This easily slows down when your neighbors are using their internet at the same time.
                                        </p>
                                        <p className="text-xs text-slate-400 leading-relaxed">
                                            <strong>Lumen LIFI sends data through clean waves of light</strong> from advanced LED bulbs. This gives you your very own fast internet beam that never gets jammed or stolen from outside your walls.
                                        </p>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-7xl mx-auto px-6 mb-24">
                                <div className="max-w-3xl mb-12 space-y-2">
                                    <h2 className="text-2xl sm:text-3xl font-black text-slate-900 tracking-tight">How Our System Works</h2>
                                    <p className="text-slate-500 text-xs font-medium font-mono">LOOK AT THE SMART DEVICES THAT BRING LIGHT-SPEED INTERNET TO YOUR HOME:</p>
                                </div>

                                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                                    {productsData.map((product) => {
                                        const IconComp = product.icon;
                                        return (
                                            <div key={product.slug} className="flex flex-col rounded-2xl border border-slate-200/80 bg-white shadow-sm overflow-hidden hover:shadow-md transition-shadow">
                                                <div className="relative w-full aspect-video bg-slate-950 overflow-hidden">
                                                    <Image
                                                      src={product.imageUrl}
                                                      alt={product.name}
                                                      fill
                                                      sizes="(max-width: 768px) 100vw, 600px"
                                                      className="object-cover opacity-80 mix-blend-luminosity hover:opacity-100 hover:mix-blend-normal transition-all duration-500"
                                                      loading="lazy"
                                                    />
                                                    <div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur-md px-2.5 py-1 rounded-md text-[9px] font-mono font-bold text-emerald-400 uppercase tracking-widest border border-slate-700">Product Picture</div>
                                                </div>

                                                <div className="p-6 flex-grow flex flex-col justify-between space-y-6">
                                                    <div className="space-y-2">
                                                        <div className="flex items-center gap-2">
                                                            <div className="p-1.5 bg-slate-50 border border-slate-100 rounded-md text-slate-600">
                                                                <IconComp className="w-3.5 h-3.5" />
                                                            </div>
                                                            <span className="text-[10px] font-bold font-mono tracking-wider text-slate-400 uppercase">{product.badge}</span>
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
                                                            See Full Details <ArrowRight className="w-3.5 h-3.5" />
                                                        </button>
                                                    </div>
                                                </div>
                                            </div>
                                        );
                                    })}
                                </div>
                            </div>

                            <div className="max-w-7xl mx-auto px-6 mb-24 grid grid-cols-1 lg:grid-cols-3 gap-8">
                                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2 text-slate-900">
                                        <FileText className="w-4 h-4 text-emerald-600" />
                                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider">Important Documents</h3>
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed">Read our simple rules, data protection guidelines, and terms of service so you know exactly how we help you.</p>
                                    <div className="space-y-2 pt-2 font-mono text-xs font-bold">
                                        <Link href="/privacy" className="block text-emerald-600 hover:underline">→ Privacy Policy Rules</Link>
                                        <Link href="/terms" className="block text-emerald-600 hover:underline">→ Terms and Conditions</Link>
                                    </div>
                                </div>

                                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2 text-slate-900">
                                        <Mail className="w-4 h-4 text-emerald-600" />
                                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider">Contact Information</h3>
                                    </div>
                                    <p className="text-xs text-slate-500 leading-relaxed">For questions about setting up your system or verifying orders, you can contact our main desk directly:</p>
                                    <div className="space-y-2 pt-1 text-xs font-mono text-slate-600">
                                        <p className="flex items-center gap-2"><Phone className="w-3.5 h-3.5 text-slate-400" /> +91 (Help and Support Line)</p>
                                        <p className="flex items-center gap-2"><Mail className="w-3.5 h-3.5 text-slate-400" /> operations@lumenlifi.com</p>
                                        <p className="flex items-center gap-2"><MapPin className="w-3.5 h-3.5 text-slate-400" /> Main Office Hub, India</p>
                                    </div>
                                </div>

                                <div className="bg-slate-50 border border-slate-200/60 p-6 rounded-2xl space-y-4">
                                    <div className="flex items-center gap-2 text-slate-900">
                                        <ShieldCheck className="w-4 h-4 text-emerald-600" />
                                        <h3 className="text-sm font-mono font-bold uppercase tracking-wider">Shipping and Payment Info</h3>
                                    </div>
                                    <div className="space-y-2">
                                        <div className="flex items-start gap-2 text-xs text-slate-600">
                                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span><strong>Fast Shipping</strong>: Your hardware kit will ship within 3 to 5 business days anywhere in India.</span>
                                        </div>
                                        <div className="flex items-start gap-2 text-xs text-slate-600">
                                            <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0 mt-0.5" />
                                            <span><strong>Honest Prices</strong>: No hidden fees, extra taxes, or surprise gear charges.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="max-w-4xl mx-auto px-6 mb-12">
                                <div className="text-center space-y-2 mb-12">
                                    <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-slate-900">Common Questions</h2>
                                    <p className="text-slate-500 text-xs font-mono">LEARN HOW LUMEN LIFI MAKES INDIAN HOME INTERNET BETTER:</p>
                                </div>

                                <div className="space-y-4">
                                    {[
                                        {
                                            q: "How does this replace my standard Jio or Airtel fiber network setup?",
                                            a: "Lumen LiFi works just like your fast Jio or Airtel internet, but it sends the signal around the room differently. Instead of using messy Wi-Fi radio waves that slow down through walls, our system sends data cleanly through your ceiling lights."
                                        },
                                        {
                                            q: "What is your return and refund policy?",
                                            a: "To give you peace of mind, Lumen LiFi comes with a 30-day test window. If the devices do not work perfectly in your home, you can return them for a full refund right away."
                                        }
                                    ].map((faq, index) => (
                                        <div key={index} className="border border-slate-200 rounded-xl p-5 bg-white cursor-pointer" onClick={() => setActiveFaq(activeFaq === index ? -1 : index)}>
                                            <div className="flex justify-between items-center gap-4">
                                                <h4 className="text-sm font-bold text-slate-900 font-mono">{faq.q}</h4>
                                                <HelpCircle className={`w-4 h-4 text-slate-400 shrink-0 transition-transform ${activeFaq === index ? 'rotate-180 text-emerald-600' : ''}`} />
                                            </div>
                                            {activeFaq === index && (
                                                <p className="text-xs text-slate-500 mt-3 leading-relaxed border-t border-slate-100 pt-3">{faq.a}</p>
                                            )}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ) : (
                        <motion.div
                            key="detail-view"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                            exit={{ opacity: 0, y: -15 }}
                            className="max-w-6xl mx-auto px-6 py-12 pb-24"
                        >
                            <button onClick={() => setSelectedProductSlug(null)} className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-emerald-600 transition-colors mb-12 group font-bold">
                                ← BACK TO ALL PRODUCTS
                            </button>

                            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                                <div className="lg:col-span-5 relative">
                                    <div className={`absolute inset-0 bg-gradient-to-tr ${activeProduct.accent} rounded-2xl transform rotate-2 scale-[1.02] opacity-10 blur-sm`} />
                                    <div className="w-full aspect-square rounded-2xl overflow-hidden bg-slate-950 border border-slate-200 relative">
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
                                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-500 font-mono text-[10px] font-bold uppercase">
                                        PRODUCT TYPE: {activeProduct.badge}
                                    </span>
                                    <h2 className="text-3xl font-black text-slate-900 tracking-tight">{activeProduct.name}</h2>
                                    <p className="text-sm text-slate-500 font-mono font-medium leading-relaxed">{activeProduct.tagline}</p>

                                    <div className="p-5 bg-slate-50 border border-slate-200/80 rounded-xl text-xs text-slate-600 leading-relaxed">{activeProduct.desc}</div>

                                    <div className="space-y-2">
                                        <h4 className="text-[10px] font-bold font-mono tracking-widest text-slate-400 uppercase">Key Features of This Product:</h4>
                                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                                            {activeProduct.specs.concat(['Super Safe Built-in Data Security', 'Easy Home Installation Guide Included']).map((spec, i) => (
                                                <div key={i} className="flex items-center gap-2 text-xs font-mono text-slate-600">
                                                    <Check className="w-3.5 h-3.5 text-emerald-500 shrink-0" />
                                                    <span>{spec}</span>
                                                </div>
                                            ))}
                                        </div>
                                    </div>

                                    <div className="pt-6 border-t border-slate-100 flex flex-wrap gap-4">
                                        <Link href="/contact" className="h-11 px-6 rounded-xl bg-slate-900 hover:bg-slate-800 text-white font-mono font-bold text-xs uppercase tracking-wider transition-colors inline-flex items-center justify-center">
                                            Pre-Order Your Kit Now
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