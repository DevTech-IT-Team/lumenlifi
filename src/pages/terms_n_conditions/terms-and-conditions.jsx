import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import { ArrowLeft, Scale, FileText } from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

export default function TermsAndConditions() {
    return (
        <div className="min-h-screen bg-white text-slate-800 antialiased selection:bg-emerald-100">
            <Head>
                <title>Terms & Conditions | Lumen Phi</title>
                <meta name="description" content="Lumen Phi operational terms of service rules and user guidelines." />
            </Head>

            <Header />

            <main className="pt-32 pb-24 max-w-4xl mx-auto px-6 font-sans">
                <Link href="/products" className="inline-flex items-center gap-2 font-mono text-xs text-slate-400 hover:text-emerald-600 transition-colors mb-12 font-bold group">
                    <ArrowLeft className="w-3.5 h-3.5 transform group-hover:-translate-x-0.5 transition-transform" />
                    BACK TO ECOSYSTEM CATALOG
                </Link>

                <div className="space-y-6 border-b border-slate-100 pb-8 mb-8">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-slate-50 border border-slate-200 text-slate-600 font-mono text-[10px] font-bold uppercase">
                        <Scale className="w-3.5 h-3.5" /> Institutional Service Charter
                    </div>
                    <h1 className="text-4xl font-black text-slate-900 tracking-tight">Terms & Conditions</h1>
                    <p className="text-sm text-slate-400 font-mono">Effective Date: June 2026</p>
                </div>

                <div className="prose prose-slate max-w-none text-xs sm:text-sm leading-relaxed space-y-6 text-slate-600">
                    <p>
                        Welcome to <strong>Lumen Phi</strong>[cite: 9, 10]. These terms manage the usage, deployment constraints, and installation provisioning of our residential lightwave network hardware systems in India[cite: 9, 10]. By initiating a subscription layer or checking out, you accept these terms completely[cite: 9, 10].
                    </p>

                    <div className="p-4 bg-slate-50 border border-slate-200/60 rounded-xl space-y-2">
                        <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider flex items-center gap-2">
                            <FileText className="w-3.5 h-3.5 text-slate-700" /> 1. Acceptable Spectrum Parameters
                        </h3>
                        <p className="text-xs text-slate-500">
                            Subscribers understand that Lumen Phi provides home internet connectivity powered by high-frequency visible light waves instead of radio wave emissions[cite: 9, 10]. Hardware packages (Core Router, Ceiling Antennas, and USB Dongles) must be deployed in accordance with local safety metrics[cite: 9, 10].
                        </p>
                    </div>

                    <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">2. Subscription Accounting & Payments</h3>
                    <p>
                        Residential plans are processed on an automated rolling schedule[cite: 9, 10]. All prices listed reflect domestic Indian valuations. Accounts must provide active, verifiable funding channels to pass automated financial validations required by our merchant processors[cite: 9, 10].
                    </p>

                    <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">3. Device Allocation & Maintenance</h3>
                    <p>
                        Any optical transceiver arrays, ceiling luminaire antennas, or adapter dongles shipped to your coordinates remain systemic hardware investments of Lumen Phi unless bought out explicitly[cite: 9, 10]. Users agree not to modify internal diode arrays or break protective casings[cite: 10].
                    </p>

                    <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">4. Liability Safeguards</h3>
                    <p>
                        Lumen Phi is not responsible for temporary transmission drops caused by physical obstructions blocking structural overhead line-of-sight tracking arrays[cite: 10]. Optical pathways are contained strictly by solid walls, protecting adjacent residential environments[cite: 9, 10].
                    </p>

                    <h3 className="font-mono text-xs font-bold text-slate-900 uppercase tracking-wider pt-4">5. Technical Resolution</h3>
                    <p>
                        For compliance queries, billing updates, or general network setup cancellations, reach out directly to our processing office at <code>operations@lumenphi.com</code>[cite: 9, 10].
                    </p>
                </div>
            </main>

            <Footer />
        </div>
    );
}