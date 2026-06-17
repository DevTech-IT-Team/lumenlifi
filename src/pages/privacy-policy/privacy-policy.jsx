import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, ShieldCheck, Lock } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export default function PrivacyPolicy() {
    return (
        <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-emerald-100">
            <Head>
                <title>Privacy Policy | Lumen Phi</title>
                <meta name="description" content="Lumen Phi consumer data protection and privacy policy boilerplate registry." />
            </Head>

            <Header />

            <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 font-sans">
                <Link href="/products" className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-emerald-600 transition-colors mb-12 font-bold group">
                    <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
                    BACK TO ECOSYSTEM CATALOG
                </Link>

                <div className="space-y-6 border-b border-slate-100 pb-8 mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-50 border border-emerald-100 text-emerald-700 font-mono text-[10px] font-bold uppercase">
                        <ShieldCheck className="w-3.5 h-3.5" /> Merchant Compliance Standard
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Privacy Policy</h1>
                    <p className="text-sm text-slate-400 font-mono">Last Updated: June 2026</p>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-600">
                    <p>
                        At <strong>Lumen Phi</strong> (hosted at <code>lumenphi.com</code>), we prioritize the security, privacy, and confidentiality of our residential internet customers in India[cite: 9]. This policy describes how we handle information collected during account registrations, equipment provisioning, and merchant audits[cite: 9].
                    </p>

                    <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-2">
                        <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                            <Lock className="w-3.5 h-3.5 text-emerald-600" /> 1. Data Encryption Matrix
                        </h3>
                        <p className="text-xs text-slate-500">
                            Because our hardware architecture utilizes localized light waves instead of uncontained radio waves, your raw data transmissions remain strictly enclosed within physical room barriers. We do not monitor, retain, or store individual browsing streams or package headers.
                        </p>
                    </div>

                    <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">2. Information We Collect</h3>
                    <p>
                        To activate physical subscription connections and manage billing data safely through processing networks, we store minimal consumer elements[cite: 9]:
                    </p>
                    <ul className="list-disc pl-5 space-y-1">
                        <li>Customer Name and verifiable Installation Coordinates[cite: 9].</li>
                        <li>Contact points including electronic mail addresses and domestic telephone networks[cite: 9].</li>
                        <li>Transactional tokens and card logs processed safely via encrypted third-party vendor checkouts[cite: 9].</li>
                    </ul>

                    <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">3. Data Sharing Restrictions</h3>
                    <p>
                        Lumen Phi does not trade, distribute, lease, or reveal consumer identifying details to marketing agencies[cite: 9]. Information is shared exclusively to comply with Indian telecommunication parameters or to resolve automated clearing house validation checks initiated by our institutional merchant processors[cite: 9].
                    </p>

                    <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">4. Client Security Controls</h3>
                    <p>
                        Subscribers maintain full authority to adjust profile data, request complete file deletion, or terminate lightwave equipment configurations at any time by contacting our centralized dispatch core at <code>operations@lumenphi.com</code>[cite: 9].
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}