import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu,
  Gamepad2, Factory, Car, Star, Sparkles,
  Building2, Users, TrendingUp, Award,
  Send, Mail, Handshake, Network, Rocket, Lock
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

import partnerHeroImg from '../../../public/images/hero/partner-hero.png';
import partnerSmartCityImg from '../../../public/images/hero/partner-smart-city.png';
import partnerCreatorImg from '../../../public/images/hero/partner-creator.png';
import partnerEvImg from '../../../public/images/hero/partner-ev.png';
import partnerFactoryImg from '../../../public/images/hero/partner-factory.png';
import partnerAiImg from '../../../public/images/hero/partner-ai.png';

/* ── Animation Variants ── */
const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: (i = 0) => ({
    opacity: 1, y: 0,
    transition: { duration: 0.65, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] },
  }),
};

const fadeIn = {
  hidden: { opacity: 0, scale: 0.96 },
  visible: (i = 0) => ({
    opacity: 1, scale: 1,
    transition: { duration: 0.5, delay: i * 0.08, ease: [0.16, 1, 0.3, 1] },
  }),
};

/* ── SECTION 1: HERO ── */
function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-0 overflow-hidden" style={{ background: 'linear-gradient(to bottom, #EAF3FA, #F4F9FC, #EBF3FC)' }}>
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[700px] h-[500px] rounded-full blur-[160px] opacity-55"
          style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.18) 0%, transparent 75%)' }} />
        <div className="absolute -top-20 right-1/4 w-[600px] h-[500px] rounded-full blur-[130px] opacity-45"
          style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.15) 0%, transparent 70%)' }} />
      </div>
      <div className="absolute inset-0 pointer-events-none z-0 opacity-50"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div className="flex flex-col items-start text-left">
          <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--lumen-border)] text-[var(--lumen-blue)] font-mono text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
            <span className="h-1.5 w-1.5 rounded-full bg-[var(--lumen-cyan)] animate-pulse" />
            Pioneer Partner Program — Now Open
          </motion.div>

          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-[#0D2240]">
            Ignite the{' '}
            <span className="text-gradient-lumen">Future.</span>
            <br />Command the{' '}
            <span className="text-gradient-lumen">Speed of Light.</span>
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed text-[#4A6080]">
            The world is moving faster than ever before. Become a certified Lumenfi partner and step onto the front lines of the greatest infrastructure revolution of our lifetime.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#apply"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl w-full sm:w-auto glow-blue"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
              Join the Revolution <ArrowRight size={16} />
            </a>
            <a href="#why-partner"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border-2 transition-all hover:scale-[1.02] w-full sm:w-auto border-[var(--lumen-blue)] text-[var(--lumen-blue)] bg-[rgba(26,110,191,0.03)]">
              Explore Opportunities
            </a>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-dashed border-[var(--lumen-border)]">
            {[
              { val: '10 Gbps', label: 'Optical Speed' },
              { val: '$4.3T', label: 'Creator Economy' },
              { val: '100%', label: 'RF-Free Network' },
            ].map(({ val, label }) => (
              <div key={label} className="flex flex-col items-start">
                <div className="font-black text-2xl sm:text-3xl tracking-tight text-[var(--lumen-navy)]">{val}</div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest mt-1 text-[var(--lumen-muted)]">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div custom={1} variants={fadeIn} initial="hidden" animate="visible"
          className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(13,34,64,0.15)] border border-[var(--lumen-border)] aspect-[4/3]">
          <Image src={partnerHeroImg} alt="Lumenfi Partner — Building the Future Together" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-[var(--lumen-border)] shadow-lg">
            <div className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
              <Zap size={14} className="text-white" />
            </div>
            <div>
              <div className="text-[11px] font-black text-[var(--lumen-navy)] uppercase tracking-wider">Pioneer Program Active</div>
              <div className="text-[10px] font-mono text-[var(--lumen-muted)]">Limited founding partner slots available</div>
            </div>
            <span className="ml-auto h-2 w-2 rounded-full bg-[var(--lumen-cyan)] animate-pulse shrink-0" />
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 h-16 bg-gradient-to-b from-transparent to-[#EBF3FC]" />
    </section>
  );
}

/* ── SECTION 2: OPPORTUNITIES ── */
const opportunities = [
  {
    icon: Gamepad2,
    title: 'The Billion-Dollar Creator Economy',
    desc: 'Gamers and professional streamers invest everything into their lifestyle, only to be paralyzed by lag. Massive cultural phenomena like Call of Duty and the upcoming Grand Theft Auto 6 demand colossal amounts of data.',
    highlight: 'Li-Fi obliterates download times — hours become seconds.',
    image: partnerCreatorImg,
    alt: 'Gaming & Streaming Economy',
    color: '#1A6EBF',
    tag: 'CREATOR ECONOMY',
  },
  {
    icon: Cpu,
    title: 'Artificial Intelligence Unbound',
    desc: "The world's most powerful AI models are locked away in massive data centers, struggling to reach the consumer. Real-time edge computing and instantaneous AI responses require massive, uninterrupted pipelines.",
    highlight: 'Li-Fi delivers raw computing power without a single stutter.',
    image: partnerAiImg,
    alt: 'AI & Edge Computing',
    color: '#00C2C7',
    tag: 'ARTIFICIAL INTELLIGENCE',
  },
  {
    icon: Car,
    title: 'Electric Vehicles & Streets of Tomorrow',
    desc: 'The future of transportation is instantaneous communication. Li-Fi empowers vehicles to share critical safety, braking, and traffic data directly through their LED headlights in a fraction of a millisecond.',
    highlight: 'A blazing-fast, interference-free network on the move.',
    image: partnerEvImg,
    alt: 'Electric Vehicles LiFi Network',
    color: '#0FB89A',
    tag: 'EV & TRANSPORT',
  },
  {
    icon: Factory,
    title: 'Limitless Manufacturing',
    desc: 'Industry 4.0 demands perfection. Automated factories and synchronized robotics cannot afford a single millisecond of delay.',
    highlight: 'Li-Fi delivers fiber-optic speeds completely wirelessly — unstoppable production.',
    image: partnerFactoryImg,
    alt: 'Smart Factory LiFi',
    color: '#1A6EBF',
    tag: 'INDUSTRY 4.0',
  },
];

function OpportunitiesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = opportunities[activeIdx];
  const ActiveIcon = active.icon;

  return (
    <section id="why-partner" className="relative overflow-hidden py-24 bg-[#EBF3FC]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.18) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--lumen-border)] text-[var(--lumen-blue)] font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
            <Sparkles size={11} className="text-[var(--lumen-cyan)]" /> Unleash the Impossible
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--lumen-navy)] mb-4">
            Industries Waiting for <span className="text-gradient-lumen">Light Speed</span>
          </h2>
          <p className="text-[var(--lumen-muted)] max-w-2xl mx-auto text-base leading-relaxed">
            Trillions of dollars are poured into breathtaking technologies that are currently suffocating on slow, outdated radio frequencies. As a Lumenfi partner, you hold the key to unlocking their true potential.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {opportunities.map((opp, idx) => {
            const TabIcon = opp.icon;
            const isActive = idx === activeIdx;
            return (
              <button key={idx} onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${isActive
                  ? 'bg-white border-[var(--lumen-blue)] text-[var(--lumen-navy)] shadow-md'
                  : 'bg-white/50 border-[var(--lumen-border)] text-[var(--lumen-muted)] hover:border-[var(--lumen-blue)] hover:text-[var(--lumen-navy)]'}`}
                style={isActive ? { boxShadow: `0 0 0 2px ${opp.color}22, 0 4px 20px rgba(26,110,191,0.12)` } : {}}>
                <TabIcon size={13} style={{ color: isActive ? opp.color : undefined }} />
                {opp.tag}
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div key={activeIdx}
            initial={{ opacity: 0, y: 16 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -16 }}
            transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            className="grid grid-cols-1 lg:grid-cols-2 gap-0 bg-white rounded-3xl border border-[var(--lumen-border)] shadow-xl overflow-hidden">
            <div className="relative w-full aspect-video lg:aspect-auto min-h-[280px]">
              <Image src={active.image} alt={active.alt} fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
              <div className="absolute top-4 left-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-white font-mono text-[10px] font-bold uppercase tracking-wider"
                  style={{ background: `linear-gradient(135deg, ${active.color} 0%, #00C2C7 100%)` }}>
                  <ActiveIcon size={11} /> {active.tag}
                </div>
              </div>
            </div>
            <div className="flex flex-col justify-center p-8 lg:p-12">
              <h3 className="text-2xl md:text-3xl font-black text-[var(--lumen-navy)] mb-4 leading-tight">{active.title}</h3>
              <p className="text-[var(--lumen-muted)] leading-relaxed mb-6 text-sm md:text-base">{active.desc}</p>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--lumen-light)] border border-[var(--lumen-border)]">
                <Zap size={16} className="shrink-0 mt-0.5" style={{ color: active.color }} />
                <p className="text-sm font-semibold text-[var(--lumen-navy)]">{active.highlight}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {opportunities.map((_, idx) => (
            <button key={idx} onClick={() => setActiveIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIdx ? 'w-8 bg-[var(--lumen-blue)]' : 'w-1.5 bg-[var(--lumen-border)]'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 3: SMART CITY ── */
function SmartCitySection() {
  const pillars = [
    { icon: Building2, label: 'Smart Cities', desc: 'Urban infrastructure operating simultaneously on an endless ocean of bandwidth.' },
    { icon: Network, label: 'True IoT', desc: 'Billions of devices free from crowded radio frequency highways.' },
    { icon: Lock, label: 'Ironclad Security', desc: 'Light cannot penetrate walls. Your network stays within your walls — always.' },
    { icon: Globe, label: 'Global Scale', desc: 'Every smart city, every hospital, every home, and every vehicle will communicate through light.' },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-[160px] opacity-35 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.15) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--lumen-light)] border border-[var(--lumen-border)] text-[var(--lumen-blue)] font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
            <Globe size={11} className="text-[var(--lumen-cyan)]" /> Rewiring the Physical World
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--lumen-navy)] mb-4">
            The Boundless Nervous System<br />of <span className="text-gradient-lumen">{"Tomorrow's Cities"}</span>
          </h2>
          <p className="text-[var(--lumen-muted)] max-w-2xl mx-auto text-base leading-relaxed">
            This is so much bigger than screens and routers. We are architecting the high-speed backbone that smart cities and automated industries have been waiting for.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(13,34,64,0.12)] border border-[var(--lumen-border)] mb-14"
          style={{ aspectRatio: '16/6' }}>
          <Image src={partnerSmartCityImg} alt="Lumenfi Smart City LiFi Network" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
            {[
              { label: '100 Gbps', sub: 'Urban Backbone' },
              { label: 'Zero RF', sub: 'Interference-Free' },
              { label: '∞ Devices', sub: 'Limitless Scale' },
            ].map(({ label, sub }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-[var(--lumen-border)] shadow-md">
                <div>
                  <div className="font-black text-sm text-[var(--lumen-navy)]">{label}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--lumen-muted)]">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ icon: PillarIcon, label, desc }, idx) => (
            <motion.div key={label} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-[var(--lumen-light)] border border-[var(--lumen-border)] hover:border-[var(--lumen-blue)] hover:shadow-lg hover:shadow-[rgba(0,194,199,0.08)] transition-all duration-300">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, rgba(26,110,191,0.1) 0%, rgba(0,194,199,0.1) 100%)', border: '1px solid var(--lumen-border)' }}>
                <PillarIcon size={18} className="text-[var(--lumen-blue)]" />
              </div>
              <h4 className="font-black text-sm text-[var(--lumen-navy)] mb-2">{label}</h4>
              <p className="text-xs text-[var(--lumen-muted)] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 4: PARTNER TIERS ── */
const tiers = [
  {
    name: 'Authorized Reseller',
    tag: 'Entry Tier',
    price: 'Start Here',
    color: '#2AABDB',
    gradient: 'linear-gradient(135deg, #2AABDB 0%, #1A6EBF 100%)',
    features: [
      'Access to Lumenfi product catalog',
      'Reseller pricing & margin structure',
      'Co-branded marketing materials',
      'Dedicated partner portal access',
      'Online training & certification',
    ],
    cta: 'Apply as Reseller',
  },
  {
    name: 'Certified Integrator',
    tag: 'Growth Tier',
    price: 'Scale Up',
    color: '#00C2C7',
    gradient: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)',
    featured: true,
    features: [
      'Everything in Authorized Reseller',
      'Priority technical support (< 4hrs)',
      'Joint go-to-market campaigns',
      'Lead generation program access',
      'Certified installation training',
      'Quarterly business reviews',
    ],
    cta: 'Apply as Integrator',
  },
  {
    name: 'Strategic Alliance',
    tag: 'Enterprise Tier',
    price: 'Co-Build',
    color: '#0FB89A',
    gradient: 'linear-gradient(135deg, #00C2C7 0%, #0FB89A 100%)',
    features: [
      'Everything in Certified Integrator',
      'Co-development roadmap access',
      'Exclusive territory agreements',
      'Executive sponsorship program',
      'Custom OEM & white-label options',
      'Revenue-share & equity pathways',
    ],
    cta: 'Apply for Alliance',
  },
];

function PartnerTiersSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[var(--lumen-bg)]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[180px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.2) 0%, rgba(26,110,191,0.15) 50%, transparent 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--lumen-border)] text-[var(--lumen-blue)] font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
            <Award size={11} className="text-[var(--lumen-cyan)]" /> Partnership Tiers
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--lumen-navy)] mb-4">
            Choose Your <span className="text-gradient-lumen">Level of Impact</span>
          </h2>
          <p className="text-[var(--lumen-muted)] max-w-xl mx-auto text-base leading-relaxed">
            Every single industry on the planet is going to be reconfigured for this standard. Pick the partnership tier that matches your vision.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {tiers.map((tier, idx) => (
            <motion.div key={tier.name} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className={`relative flex flex-col rounded-3xl border transition-all duration-300 overflow-hidden ${tier.featured
                ? 'border-[var(--lumen-blue)] shadow-2xl shadow-[rgba(0,194,199,0.15)] scale-[1.02]'
                : 'border-[var(--lumen-border)] shadow-md hover:shadow-xl hover:border-[var(--lumen-blue)] hover:scale-[1.01]'} bg-white`}>
              {tier.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: tier.gradient }} />
              )}
              <div className="p-7 pb-5">
                <div className="flex items-center justify-between mb-4">
                  <span className="font-mono text-[10px] font-bold uppercase tracking-widest text-[var(--lumen-muted)]">{tier.tag}</span>
                  {tier.featured && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-white font-mono text-[9px] font-bold uppercase tracking-wider"
                      style={{ background: tier.gradient }}>
                      <Star size={9} /> Most Popular
                    </span>
                  )}
                </div>
                <h3 className="text-xl font-black text-[var(--lumen-navy)] mb-1">{tier.name}</h3>
                <div className="font-black text-3xl tracking-tight mt-3 mb-0" style={{ color: tier.color }}>{tier.price}</div>
              </div>
              <div className="mx-7 border-t border-[var(--lumen-border)]" />
              <div className="p-7 flex-grow">
                <ul className="space-y-3">
                  {tier.features.map((feat) => (
                    <li key={feat} className="flex items-start gap-2.5">
                      <CheckCircle size={14} className="shrink-0 mt-0.5" style={{ color: tier.color }} />
                      <span className="text-xs text-[var(--lumen-muted)] leading-relaxed">{feat}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="p-7 pt-0">
                <a href="#apply"
                  className="flex items-center justify-center gap-2 w-full h-11 rounded-xl font-bold text-xs uppercase tracking-wider transition-all hover:scale-[1.02] duration-200"
                  style={tier.featured
                    ? { background: tier.gradient, color: 'white', boxShadow: `0 8px 24px rgba(0,194,199,0.25)` }
                    : { border: `2px solid ${tier.color}`, color: tier.color, background: 'transparent' }}>
                  {tier.cta} <ArrowRight size={13} />
                </a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 5: LEGACY ── */
function LegacySection() {
  const reasons = [
    { icon: TrendingUp, title: 'First-Mover Advantage', desc: 'Pioneer partners capture the most lucrative market positions before mass adoption. You are not chasing a trend — you are building the foundation.' },
    { icon: Globe, title: 'Universal Industry Reach', desc: 'Every smart city, every hospital, every home, and every vehicle will eventually communicate through light. Every industry on the planet is going to be reconfigured.' },
    { icon: Rocket, title: 'Monumental Financial Event', desc: 'This is not just a technological shift. It is a monumental financial event. Position yourself at the epicenter of the global tech economy.' },
    { icon: Handshake, title: 'Full Partner Support', desc: 'Technical certifications, co-marketing, lead generation, and a dedicated partner success team — we grow together every step of the way.' },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#EBF3FC]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--lumen-border)] text-[var(--lumen-blue)] font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
                <Star size={11} className="text-[var(--lumen-cyan)]" /> Your Legacy. Your Opportunity.
              </div>
              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--lumen-navy)] mb-6 leading-tight">
                The Future Belongs<br /> to the <span className="text-gradient-lumen">Fast.</span>
              </h2>
              <p className="text-[var(--lumen-muted)] text-base leading-relaxed mb-10">
                You are solving the greatest connectivity crisis of our generation. As a pioneer bringing this technology to market, you are not chasing a trend — you are building the foundation.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {reasons.map(({ icon: RIcon, title, desc }, idx) => (
                <motion.div key={title} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="group p-5 rounded-2xl bg-white border border-[var(--lumen-border)] hover:border-[var(--lumen-blue)] hover:shadow-lg transition-all duration-300">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 duration-200"
                    style={{ background: 'linear-gradient(135deg, rgba(26,110,191,0.1) 0%, rgba(0,194,199,0.1) 100%)', border: '1px solid var(--lumen-border)' }}>
                    <RIcon size={16} className="text-[var(--lumen-blue)]" />
                  </div>
                  <h4 className="font-black text-sm text-[var(--lumen-navy)] mb-1">{title}</h4>
                  <p className="text-[11px] text-[var(--lumen-muted)] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--lumen-border)] aspect-[4/3]">
              <Image src={partnerFactoryImg} alt="Industry 4.0 LiFi Manufacturing" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-[var(--lumen-border)] shadow-xl p-5 max-w-[200px]">
              <div className="font-black text-3xl text-gradient-lumen mb-1">$6.4T</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[var(--lumen-muted)]">Projected Global<br />LiFi Market by 2030</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl border border-[var(--lumen-border)] shadow-xl p-4 max-w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[var(--lumen-cyan)] animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-[var(--lumen-muted)] uppercase">Live Partners</span>
              </div>
              <div className="font-black text-2xl text-[var(--lumen-navy)]">2,400+</div>
              <div className="text-[10px] font-mono text-[var(--lumen-muted)] mt-0.5">Across 38 countries</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 6: APPLICATION FORM ── */
function ApplicationForm() {
  const [formState, setFormState] = useState({
    firstName: '', lastName: '', email: '', phone: '', company: '',
    industry: '', partnerType: '', message: '', agreed: false,
  });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormState(prev => ({ ...prev, [name]: type === 'checkbox' ? checked : value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);
    setTimeout(() => { setLoading(false); setSubmitted(true); }, 1800);
  };

  const inputCls = "w-full px-4 py-3 rounded-xl border border-[var(--lumen-border)] bg-white text-sm text-[var(--lumen-navy)] placeholder:text-[var(--lumen-muted)]/60 focus:outline-none focus:border-[var(--lumen-blue)] focus:ring-2 focus:ring-[rgba(26,110,191,0.12)] transition-all duration-200 font-sans";
  const labelCls = "block text-xs font-bold font-mono uppercase tracking-wider text-[var(--lumen-muted)] mb-1.5";

  return (
    <section id="apply" className="relative overflow-hidden py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.2) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.18) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[var(--lumen-light)] border border-[var(--lumen-border)] text-[var(--lumen-blue)] font-mono text-[10px] font-bold uppercase tracking-widest mb-4">
            <Send size={11} className="text-[var(--lumen-cyan)]" /> Apply Now
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[var(--lumen-navy)] mb-4">
            Join the Revolution.<br /><span className="text-gradient-lumen">Apply to Become a Partner.</span>
          </h2>
          <p className="text-[var(--lumen-muted)] max-w-xl mx-auto text-base leading-relaxed">
            Fill out the form below and our partner team will be in touch within 24 hours to discuss the best pathway forward.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-[var(--lumen-border)] shadow-2xl shadow-[rgba(13,34,64,0.08)] overflow-hidden">
          <div className="px-8 py-4 border-b border-[var(--lumen-border)] flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, rgba(26,110,191,0.05) 0%, rgba(0,194,199,0.05) 100%)' }}>
            <div className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
              <Handshake size={15} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-black text-[var(--lumen-navy)] uppercase tracking-wider">Partner Application Form</div>
              <div className="text-[10px] font-mono text-[var(--lumen-muted)]">All information is kept strictly confidential</div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[var(--lumen-cyan)] animate-pulse" />
              <span className="text-[10px] font-mono text-[var(--lumen-muted)] uppercase">Secure Form</span>
            </div>
          </div>

          {submitted ? (
            <div className="px-8 py-20 flex flex-col items-center justify-center text-center">
              <motion.div initial={{ scale: 0, opacity: 0 }} animate={{ scale: 1, opacity: 1 }}
                transition={{ type: 'spring', stiffness: 200, damping: 15 }}
                className="h-20 w-20 rounded-full flex items-center justify-center mb-6"
                style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
                <CheckCircle size={36} className="text-white" />
              </motion.div>
              <h3 className="text-2xl font-black text-[var(--lumen-navy)] mb-3">Application Received!</h3>
              <p className="text-[var(--lumen-muted)] max-w-md leading-relaxed text-sm">
                Thank you for stepping onto the front lines of the connectivity revolution. Our partner team will reach out within <strong>24 hours</strong> to begin your onboarding journey.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { val: '24hrs', label: 'Response Time' },
                  { val: '100%', label: 'Success Rate' },
                  { val: '∞', label: 'Opportunity' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div className="font-black text-xl text-gradient-lumen">{val}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[var(--lumen-muted)]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="partner-firstName" className={labelCls}>First Name *</label>
                  <input id="partner-firstName" name="firstName" type="text" required placeholder="John" value={formState.firstName} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="partner-lastName" className={labelCls}>Last Name *</label>
                  <input id="partner-lastName" name="lastName" type="text" required placeholder="Doe" value={formState.lastName} onChange={handleChange} className={inputCls} />
                </div>
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="partner-email" className={labelCls}>Business Email *</label>
                  <input id="partner-email" name="email" type="email" required placeholder="john@company.com" value={formState.email} onChange={handleChange} className={inputCls} />
                </div>
                <div>
                  <label htmlFor="partner-phone" className={labelCls}>Phone Number</label>
                  <input id="partner-phone" name="phone" type="tel" placeholder="+1 (555) 000-0000" value={formState.phone} onChange={handleChange} className={inputCls} />
                </div>
              </div>
              <div>
                <label htmlFor="partner-company" className={labelCls}>Company / Organization *</label>
                <input id="partner-company" name="company" type="text" required placeholder="Acme Technologies Inc." value={formState.company} onChange={handleChange} className={inputCls} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                <div>
                  <label htmlFor="partner-industry" className={labelCls}>Industry Vertical *</label>
                  <select id="partner-industry" name="industry" required value={formState.industry} onChange={handleChange} className={inputCls}>
                    <option value="" disabled>Select your industry...</option>
                    <option>Technology &amp; Software</option>
                    <option>Telecommunications</option>
                    <option>Gaming &amp; Entertainment</option>
                    <option>Healthcare &amp; Medical</option>
                    <option>Education &amp; Research</option>
                    <option>Manufacturing &amp; Robotics</option>
                    <option>Smart Cities &amp; Infrastructure</option>
                    <option>Automotive &amp; Transport</option>
                    <option>Real Estate &amp; Construction</option>
                    <option>Finance &amp; Banking</option>
                    <option>Other</option>
                  </select>
                </div>
                <div>
                  <label htmlFor="partner-partnerType" className={labelCls}>Partnership Type *</label>
                  <select id="partner-partnerType" name="partnerType" required value={formState.partnerType} onChange={handleChange} className={inputCls}>
                    <option value="" disabled>Select tier...</option>
                    <option>Authorized Reseller</option>
                    <option>Certified Integrator</option>
                    <option>Strategic Alliance</option>
                    <option>Not sure — advise me</option>
                  </select>
                </div>
              </div>
              <div>
                <label htmlFor="partner-message" className={labelCls}>Tell Us Your Vision</label>
                <textarea id="partner-message" name="message" rows={4}
                  placeholder="Describe your business, target market, and how you envision partnering with Lumenfi..."
                  value={formState.message} onChange={handleChange} className={`${inputCls} resize-none`} />
              </div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input type="checkbox" name="agreed" id="partner-agreed" required checked={formState.agreed} onChange={handleChange} className="sr-only" />
                  <div className={`h-[18px] w-[18px] rounded border-2 flex items-center justify-center transition-all duration-200 ${formState.agreed ? 'border-[var(--lumen-blue)] bg-[var(--lumen-blue)]' : 'border-[var(--lumen-border)] bg-white group-hover:border-[var(--lumen-blue)]'}`}>
                    {formState.agreed && <CheckCircle size={12} className="text-white" />}
                  </div>
                </div>
                <span className="text-xs text-[var(--lumen-muted)] leading-relaxed">
                  I agree to Lumenfi&#39;s{' '}
                  <Link href="/terms" className="text-[var(--lumen-blue)] hover:underline font-semibold" target="_blank">Terms &amp; Conditions</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-[var(--lumen-blue)] hover:underline font-semibold" target="_blank">Privacy Policy</Link>.
                  I consent to being contacted by the Lumenfi partner team regarding my application.
                </span>
              </label>
              <button type="submit" disabled={loading} id="partner-submit-btn"
                className="w-full h-14 rounded-2xl text-white font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)', boxShadow: '0 8px 32px rgba(0,194,199,0.28)' }}>
                {loading ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full" />
                    Submitting Application...
                  </>
                ) : (
                  <>Submit My Application <ArrowRight size={16} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Shield, label: 'Secure & Confidential', desc: 'Your data is never shared with third parties.' },
            { icon: Mail, label: 'Fast Response', desc: 'Our partner team responds within 24 hours.' },
            { icon: Users, label: 'Dedicated Support', desc: 'A dedicated partner success manager, always.' },
          ].map(({ icon: TIcon, label, desc }) => (
            <div key={label} className="flex items-start gap-3 p-4 rounded-2xl bg-[var(--lumen-light)] border border-[var(--lumen-border)]">
              <TIcon size={15} className="shrink-0 mt-0.5 text-[var(--lumen-blue)]" />
              <div>
                <div className="text-xs font-bold text-[var(--lumen-navy)]">{label}</div>
                <div className="text-[11px] text-[var(--lumen-muted)] mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── SECTION 7: FINAL BANNER ── */
function FinalBanner() {
  return (
    <section className="relative overflow-hidden py-20 bg-[var(--lumen-navy)]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(0,194,199,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,199,0.3) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,194,199,0.12) 0%, transparent 70%)' }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/15 text-[var(--lumen-cyan)] font-mono text-[10px] font-bold uppercase tracking-widest mb-6">
            <Zap size={11} /> The Future Belongs to the Fast
          </div>
          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            Ready to Flip the Switch?<br />
            <span className="text-gradient-lumen">Lead the Revolution.</span>
          </h2>
          <p className="text-blue-200/70 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            You are the one who will deliver the speed of light to a world that desperately needs it. Founding partner slots are limited. Apply today and secure your position at the epicenter of history.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#apply"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg, #00C2C7 0%, #0FB89A 100%)', boxShadow: '0 8px 32px rgba(0,194,199,0.35)' }}>
              Apply to Become a Partner <ArrowRight size={16} />
            </a>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl font-bold text-sm tracking-wider border-2 border-white/15 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300">
              Talk to Our Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── ROOT PAGE EXPORT ── */
export default function PartnerPage() {
  return (
    <div className="flex flex-col min-h-screen antialiased font-sans bg-[var(--lumen-bg)] text-[var(--lumen-navy)]">
      <Head>
        <title>Partner With Lumenfi — Join the Light Speed Revolution</title>
        <meta name="description" content="Become a certified Lumenfi partner and position yourself at the epicenter of the greatest connectivity revolution of our lifetime. Apply today to join the Pioneer Partner Program." />
        <meta property="og:title" content="Partner With Lumenfi — Join the Light Speed Revolution" />
        <meta property="og:description" content="Step onto the front lines of the Li-Fi infrastructure revolution. Founding partner slots are limited." />
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </Head>
      <Header />
      <main className="flex-grow">
        <HeroSection />
        <OpportunitiesSection />
        <SmartCitySection />
        <PartnerTiersSection />
        <LegacySection />
        <ApplicationForm />
        <FinalBanner />
      </main>
      <Footer />
    </div>
  );
}