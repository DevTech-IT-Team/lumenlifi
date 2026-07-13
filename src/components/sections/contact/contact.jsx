import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import {
  Mail,
  ShieldCheck,
  Terminal,
  ArrowUpRight,
  HelpCircle,
  Clock,
  Send
} from 'lucide-react';

// Animation configs matching the semantic structure
const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: 'easeOut' }
  })
};

const fadeIn = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { duration: 0.6, ease: 'easeOut' } }
};

export default function ContactPage() {
  const [formData, setFormData] = useState({ name: '', email: '', subject: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle submission logic here
  };

  return (
    <main className="min-h-screen bg-slate-50/50 pt-32 pb-24 relative overflow-hidden">
      {/* Visual Background Accent Elements */}
      <div className="absolute top-0 right-1/4 w-96 h-96 bg-[rgba(0,194,199,0.05)] rounded-full filter blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-[rgba(26,110,191,0.05)] rounded-full filter blur-3xl pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">

        {/* ── Left Column: Contact Copy & Info Grid (Span 5) ── */}
        <div className="lg:col-span-5 flex flex-col items-start text-left h-full justify-between">
          <div>
            <motion.div
              custom={0}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[rgba(26,110,191,0.12)] text-[#1A6EBF] font-mono text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm shadow-[rgba(0,194,199,0.05)]"
            >
              <span className="h-1.5 w-1.5 rounded-full bg-[#00C2C7] animate-pulse" />
              Support Channels Active
            </motion.div>

            <motion.h1
              custom={1}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight leading-[1.08] mb-6 text-[#0D2240]"
            >
              Connect with <br />
              <span className="text-transparent bg-clip-text" style={{ backgroundImage: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>LumenFi Support.</span>
            </motion.h1>

            <motion.p
              custom={2}
              variants={fadeUp}
              initial="hidden"
              animate="visible"
              className="text-base md:text-lg max-w-xl mb-8 leading-relaxed text-[#4A6080] font-sans"
            >
              Have technical integration queries, scaling requests, or custom engineering inquiries? Get in touch with our network infrastructure unit.
            </motion.p>
          </div>

          {/* Quick Stats / Info Cards Grid */}
          <motion.div
            custom={3}
            variants={fadeUp}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 sm:grid-cols-2 gap-4 w-full mt-6"
          >
            {[
              { icon: Clock, val: '< 2 Hours', label: 'Average Response Time' },
              { icon: ShieldCheck, val: 'Encrypted', label: 'Secure Pipeline Communication' },
              { icon: HelpCircle, val: '24/7/365', label: 'Ecosystem Monitoring Support' },
              { icon: Terminal, val: 'API Ready', label: 'Developer Sandbox Routing' },
            ].map((card, idx) => {
              const CardIcon = card.icon;
              return (
                <div
                  key={idx}
                  className="p-4 rounded-2xl bg-white border border-[rgba(26,110,191,0.08)] shadow-sm flex items-start gap-3"
                >
                  <div className="p-2 rounded-xl bg-[rgba(26,110,191,0.05)] text-[#1A6EBF] shrink-0">
                    <CardIcon className="w-4 h-4" />
                  </div>
                  <div>
                    <div className="font-bold text-sm text-[#0D2240] tracking-tight">{card.val}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#4A6080] mt-0.5">{card.label}</div>
                  </div>
                </div>
              );
            })}
          </motion.div>
        </div>

        {/* ── Right Column: Interactive Glassmorphic Form Container (Span 7) ── */}
        <motion.div
          custom={1}
          variants={fadeIn}
          initial="hidden"
          animate="visible"
          className="lg:col-span-7 w-full bg-white border border-[rgba(26,110,191,0.12)] rounded-3xl shadow-[0_24px_70px_rgba(13,34,64,0.06)] p-6 sm:p-10 relative"
        >
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[#4A6080] font-bold">Your Full Name</label>
                <input
                  type="text"
                  required
                  placeholder="e.g. Alexander Wright"
                  className="w-full px-4 py-3 text-xs bg-slate-50 border border-[rgba(26,110,191,0.10)] rounded-xl outline-none transition-all focus:border-[#00C2C7] focus:bg-white text-[#0D2240]"
                  value={formData.name}
                  onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                />
              </div>
              <div className="space-y-2">
                <label className="block text-[10px] font-mono uppercase tracking-wider text-[#4A6080] font-bold">Email Address</label>
                <input
                  type="email"
                  required
                  placeholder="alexander@company.com"
                  className="w-full px-4 py-3 text-xs bg-slate-50 border border-[rgba(26,110,191,0.10)] rounded-xl outline-none transition-all focus:border-[#00C2C7] focus:bg-white text-[#0D2240]"
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#4A6080] font-bold">Inquiry Context / Subject</label>
              <input
                type="text"
                required
                placeholder="Select or enter your primary query vector"
                className="w-full px-4 py-3 text-xs bg-slate-50 border border-[rgba(26,110,191,0.10)] rounded-xl outline-none transition-all focus:border-[#00C2C7] focus:bg-white text-[#0D2240]"
                value={formData.subject}
                onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
              />
            </div>

            <div className="space-y-2">
              <label className="block text-[10px] font-mono uppercase tracking-wider text-[#4A6080] font-bold">Detailed Description</label>
              <textarea
                rows={5}
                required
                placeholder="Outline the technical parameters, scope, or requirements of your inquiry..."
                className="w-full px-4 py-3 text-xs bg-slate-50 border border border-[rgba(26,110,191,0.10)] rounded-xl outline-none transition-all focus:border-[#00C2C7] focus:bg-white text-[#0D2240] resize-none leading-relaxed"
                value={formData.message}
                onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              />
            </div>

            <button
              type="submit"
              className="w-full flex items-center justify-center gap-2 h-12 rounded-xl text-white font-mono font-bold text-xs uppercase tracking-wider shadow-md transition-all hover:scale-[1.01] duration-200 cursor-pointer"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)', boxShadow: '0 4px 20px rgba(0,194,199,0.15)' }}
            >
              <span>Dispatch Request</span>
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>

          {/* Under-form Micro Badge Footer */}
          <div className="mt-6 pt-4 border-t border-dashed border-[rgba(26,110,191,0.10)] flex flex-col sm:flex-row items-center justify-between gap-3 text-center sm:text-left">
            <div className="flex items-center gap-2 text-[11px] font-sans text-[#4A6080]">
              <Mail className="w-3.5 h-3.5 text-[#00C2C7]" />
              <span>Direct Route: <strong className="text-[#0D2240] font-mono">ops@lumenfi.com</strong></span>
            </div>
            <div className="flex items-center gap-1 text-[10px] font-mono text-[#4A6080] bg-slate-50 px-2.5 py-1 rounded-lg border border-[rgba(26,110,191,0.06)]">
              <span>Security Protocols: TLS 1.3 Active</span>
              <ArrowUpRight className="w-3 h-3 text-[#1A6EBF]" />
            </div>
          </div>
        </motion.div>

      </div>
    </main>
  );
}