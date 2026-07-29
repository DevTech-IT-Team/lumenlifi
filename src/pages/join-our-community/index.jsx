import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight, CheckCircle, Zap, Shield, Globe, Cpu,
  Gamepad2, Factory, Car, Star, Sparkles,
  Building2, Users, TrendingUp, Award,
  Send, Mail, Handshake, Network, Rocket, MessageSquare
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

import communityHeroImg from '../../../public/images/hero/partner-hero.png';
import communitySmartCityImg from '../../../public/images/hero/partner-smart-city.png';
import communityCreatorImg from '../../../public/images/hero/partner-creator.png';
import communityEvImg from '../../../public/images/hero/partner-ev.png';
import communityFactoryImg from '../../../public/images/hero/partner-factory.png';
import communityAiImg from '../../../public/images/hero/partner-ai.png';

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


          <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
            className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-[#0D2240]">
            Step into the{' '}
            <span className="text-gradient-lumen">future</span>
            <br />of{' '}
            <span className="text-gradient-lumen">light.</span>
          </motion.h1>

          <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
            className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed text-[#4A6080]">
            LiFi is more than a new way to connect. It is a new space being built by curious minds, innovators, learners, and people ready to be part of what comes next. Join the LiFi community and be part of the movement shaping the future of connected spaces.
          </motion.p>

          <motion.div custom={3} variants={fadeUp} initial="hidden" animate="visible"
            className="flex flex-col sm:flex-row items-center gap-4">
            <a href="#join"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl w-full sm:w-auto glow-blue"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
              Join the Community <ArrowRight size={16} />
            </a>
            <a href="#why-community"
              className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border-2 transition-all hover:scale-[1.02] w-full sm:w-auto border-[#1A6EBF] text-[#1A6EBF] bg-[rgba(26,110,191,0.03)]">
              Explore the Community
            </a>
          </motion.div>

          <motion.div custom={4} variants={fadeUp} initial="hidden" animate="visible"
            className="grid grid-cols-3 gap-6 mt-12 pt-8 border-t border-dashed border-[var(--lumen-border)]">
            {[
              { val: 'Learn', label: 'Discover LiFi' },
              { val: 'Connect', label: 'Meet the Community' },
              { val: 'Grow', label: 'Shape the Future' },
            ].map(({ val, label }) => (
              <div key={label} className="flex flex-col items-start">
                <div className="font-black text-2xl sm:text-3xl tracking-tight text-[#0D2240]">{val}</div>
                <div className="text-[10px] sm:text-[11px] font-mono uppercase tracking-widest mt-1 text-[#4A6080]">{label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        <motion.div custom={1} variants={fadeIn} initial="hidden" animate="visible"
          className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(13,34,64,0.15)] border border-[var(--lumen-border)] aspect-[4/3]">
          <Image src={communityHeroImg} alt="Lumenfi Community — Collaborating for Tomorrow" fill className="object-cover" priority sizes="(max-width: 1024px) 100vw, 50vw" />
          <div className="absolute bottom-4 left-4 right-4 flex items-center gap-3 px-4 py-3 rounded-2xl bg-white/90 backdrop-blur-md border border-[var(--lumen-border)] shadow-lg">
            <div className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
              <Users size={14} className="text-white" />
            </div>
            <div>
              <div className="text-[11px] font-black text-[#0D2240] uppercase tracking-wider">LiFi Community Growing</div>
              <div className="text-[10px] font-mono text-[#4A6080]">A place for curious minds and innovators</div>
            </div>
            <span className="ml-auto h-2 w-2 rounded-full bg-[#00C2C7] animate-pulse shrink-0" />
          </div>
        </motion.div>
      </div>
      <div className="relative z-10 h-16 bg-gradient-to-b from-transparent to-[#EBF3FC]" />
    </section>
  );
}

/* ── SECTION 2: COMMUNITY SECTORS ── */
const sectors = [
  {
    icon: Gamepad2,
    title: 'Gamers, Streamers & Creators',
    desc: 'Unite with next-gen content creators who refuse to accept wireless latency constraints. Discuss configurations, stream optimizations, and explore hardware matrices engineered for latency-free data pipelines.',
    highlight: 'Ditching radio frequencies for pure optical speed performance.',
    image: communityCreatorImg,
    alt: 'Gaming & Creator Community Hub',
    color: '#1A6EBF',
    tag: 'CREATOR HUB',
  },
  {
    icon: Cpu,
    title: 'AI Devs & System Architects',
    desc: "Collaborate on real-time edge processing nodes and ultra-low-latency pipelines. Talk model offloading, locally synchronized LLM pipelines, and hardware integration maps for hardware environments.",
    highlight: 'Feeding raw computing capacity directly without architectural bottlenecks.',
    image: communityAiImg,
    alt: 'AI Developer Network',
    color: '#00C2C7',
    tag: 'AI DEVELOPERS',
  },
  {
    icon: Car,
    title: 'EV Hardware & Mobility Enthusiasts',
    desc: 'Deep dive into vehicle-to-everything communication topologies. Swap code bases and engineering ideas behind high-frequency light pulses via vehicle headlights for automated road maps.',
    highlight: 'Designing responsive networks designed for moving environments.',
    image: communityEvImg,
    alt: 'Electric Vehicle Open Innovation',
    color: '#0FB89A',
    tag: 'MOBILITY LABS',
  },
  {
    icon: Factory,
    title: 'Industry 4.0 & Automation Builders',
    desc: 'Exchange frameworks on wireless factory synchronizations. Optimize robotics orchestration rules and eliminate signal reflections across crowded commercial and industrial spaces.',
    highlight: 'Building robust, localized network configurations that do not sleep.',
    image: communityFactoryImg,
    alt: 'Industrial Tech Sub-Community',
    color: '#1A6EBF',
    tag: 'AUTOMATION ECOSYSTEM',
  },
];

function OpportunitiesSection() {
  const [activeIdx, setActiveIdx] = useState(0);
  const active = sectors[activeIdx];
  const ActiveIcon = active.icon;

  return (
    <section id="why-community" className="relative overflow-hidden py-24 bg-[#EBF3FC]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[140px] opacity-40 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.18) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2240] mb-4">
            A New Space Is <span className="text-gradient-lumen">Being Created.</span>
          </h2>
          <p className="text-[#4A6080] max-w-2xl mx-auto text-base leading-relaxed">
            The world is discovering a new way to connect. And we believe the future of LiFi should not be built by a few people alone. Whether you are discovering LiFi for the first time, exploring new opportunities, building something meaningful, or simply curious about where this technology can take us — there is a place for you here. This is a community for people who want to learn, connect, explore, and grow with LiFi.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-10">
          {sectors.map((opp, idx) => {
            const TabIcon = opp.icon;
            const isActive = idx === activeIdx;
            return (
              <button key={idx} onClick={() => setActiveIdx(idx)}
                className={`flex items-center gap-2 px-4 py-2 rounded-xl font-mono text-xs font-bold uppercase tracking-wider transition-all duration-200 border ${isActive
                  ? 'bg-white border-[#1A6EBF] text-[#0D2240] shadow-md'
                  : 'bg-white/50 border-[var(--lumen-border)] text-[#4A6080] hover:border-[#1A6EBF] hover:text-[#0D2240]'}`}
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
              <h3 className="text-2xl md:text-3xl font-black text-[#0D2240] mb-4 leading-tight">{active.title}</h3>
              <p className="text-[#4A6080] leading-relaxed mb-6 text-sm md:text-base">{active.desc}</p>
              <div className="flex items-start gap-3 p-4 rounded-2xl bg-[#EAF3FA] border border-[var(--lumen-border)]">
                <Zap size={16} className="shrink-0 mt-0.5" style={{ color: active.color }} />
                <p className="text-sm font-semibold text-[#0D2240]">{active.highlight}</p>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        <div className="flex justify-center gap-2 mt-6">
          {sectors.map((_, idx) => (
            <button key={idx} onClick={() => setActiveIdx(idx)}
              className={`h-1.5 rounded-full transition-all duration-300 ${idx === activeIdx ? 'w-8 bg-[#1A6EBF]' : 'w-1.5 bg-[var(--lumen-border)]'}`} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 3: CORE PILLARS ── */
function SmartCitySection() {
  const pillars = [
    { icon: Building2, label: 'Learn', desc: 'Discover LiFi for the first time or go deeper — there is always something new to explore here.' },
    { icon: Network, label: 'Connect', desc: 'Meet curious minds, innovators, and explorers from across the globe who are shaping what comes next.' },
    { icon: Sparkles, label: 'Explore', desc: 'Dive into opportunities, ideas, and possibilities that LiFi opens up across industries and everyday life.' },
    { icon: Award, label: 'Be Recognised', desc: 'Every member gets a unique community identity — a personal way to be seen within the LiFi ecosystem.' },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute bottom-0 left-0 w-[600px] h-[400px] rounded-full blur-[160px] opacity-35 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.15) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2240] mb-4">
            You Don't Just Join.<br />You Get Your Own <span className="text-gradient-lumen">Place In It.</span>
          </h2>
          <p className="text-[#4A6080] max-w-2xl mx-auto text-base leading-relaxed">
            When you join our community, you become part of something bigger. Every member gets a unique community identity — a personal way to be recognised within the LiFi ecosystem. As the community grows, your journey grows with it.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
          transition={{ duration: 0.7 }}
          className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_80px_rgba(13,34,64,0.12)] border border-[var(--lumen-border)] mb-14"
          style={{ aspectRatio: '16/6' }}>
          <Image src={communitySmartCityImg} alt="Lumenfi Distributed Community Network" fill className="object-cover" sizes="100vw" />
          <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
          <div className="absolute bottom-6 left-6 right-6 flex flex-wrap gap-3">
            {[
              { label: 'Learn', sub: 'Discover LiFi' },
              { label: 'Connect', sub: 'Meet the Community' },
              { label: 'Be Recognised', sub: 'Your Unique Identity' },
            ].map(({ label, sub }) => (
              <div key={label} className="flex items-center gap-3 px-4 py-2.5 rounded-xl bg-white/90 backdrop-blur-md border border-[var(--lumen-border)] shadow-md">
                <div>
                  <div className="font-black text-sm text-[#0D2240]">{label}</div>
                  <div className="text-[10px] font-mono uppercase tracking-wider text-[#4A6080]">{sub}</div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
          {pillars.map(({ icon: PillarIcon, label, desc }, idx) => (
            <motion.div key={label} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="group p-6 rounded-2xl bg-[#EAF3FA] border border-[var(--lumen-border)] hover:border-[#1A6EBF] hover:shadow-lg hover:shadow-[rgba(0,194,199,0.08)] transition-all duration-300">
              <div className="h-10 w-10 rounded-xl flex items-center justify-center mb-4 transition-transform duration-200 group-hover:scale-110"
                style={{ background: 'linear-gradient(135deg, rgba(26,110,191,0.1) 0%, rgba(0,194,199,0.1) 100%)', border: '1px solid var(--lumen-border)' }}>
                <PillarIcon size={18} className="text-[#1A6EBF]" />
              </div>
              <h4 className="font-black text-sm text-[#0D2240] mb-2">{label}</h4>
              <p className="text-xs text-[#4A6080] leading-relaxed">{desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 4: TESTIMONIALS ── */
const testimonials = [
  {
    quote: 'LiFi opened my eyes to a completely new way of thinking about connectivity.',
    name: 'Community Member',
    role: 'LiFi Explorer',
    featured: false,
  },
  {
    quote: 'I joined because I was curious. I stayed because there was so much more to discover.',
    name: 'LiFi Explorer',
    role: 'Community Member',
    featured: true,
  },
  {
    quote: 'Being part of the LiFi community feels like being early to something truly important.',
    name: 'Community Member',
    role: 'LiFi Enthusiast',
    featured: false,
  },
];

function PartnerTiersSection() {
  return (
    <section className="relative overflow-hidden py-24 bg-[#F4F9FC]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-[180px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.2) 0%, rgba(26,110,191,0.15) 50%, transparent 100%)' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-14">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2240] mb-4">
            Hear It From People Already <span className="text-gradient-lumen">Exploring LiFi.</span>
          </h2>
          <p className="text-[#4A6080] max-w-xl mx-auto text-base leading-relaxed">
            Real feedback from real people exploring the future of LiFi.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 items-stretch">
          {testimonials.map((t, idx) => (
            <motion.div key={idx} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
              className="relative flex flex-col rounded-3xl border border-[var(--lumen-border)] shadow-md hover:shadow-xl hover:border-[#1A6EBF] hover:scale-[1.01] transition-all duration-300 bg-white overflow-hidden">
              {t.featured && (
                <div className="absolute top-0 left-0 right-0 h-0.5" style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }} />
              )}
              <div className="p-7 flex-grow flex flex-col">
                <div className="flex items-center gap-2 mb-5">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} size={14} fill="#00C2C7" stroke="none" />
                  ))}
                </div>
                <p className="text-[#4A6080] text-sm leading-relaxed flex-grow italic">&ldquo;{t.quote}&rdquo;</p>
                <div className="mt-6 pt-5 border-t border-[var(--lumen-border)]">
                  <div className="font-black text-sm text-[#0D2240]">{t.name}</div>
                  <div className="text-[11px] font-mono text-[#1A6EBF] mt-0.5 uppercase tracking-wider">{t.role}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 5: JOURNEY STARTS HERE ── */
function LegacySection() {
  const benefits = [
    { icon: TrendingUp, title: 'For the Curious', desc: 'Just discovered LiFi? This is the perfect place to start learning without pressure.' },
    { icon: Globe, title: 'For the Explorer', desc: 'Explore new opportunities and possibilities that LiFi is unlocking across industries and everyday life.' },
    { icon: Rocket, title: 'For the Builder', desc: 'Building something meaningful with LiFi? Connect with others on the same path and grow together.' },
    { icon: Handshake, title: 'For the Community Seeker', desc: 'Looking for your tribe? Find people who are as excited about LiFi as you are.' },
  ];

  return (
    <section className="relative overflow-hidden py-24 bg-[#EBF3FC]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-40"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />

      <div className="relative z-10 max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

              <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2240] mb-6 leading-tight">
                Your LiFi Journey<br /> Starts <span className="text-gradient-lumen">Here.</span>
              </h2>
              <p className="text-[#4A6080] text-base leading-relaxed mb-10">
                You don't need to be an expert. You don't need to know everything about LiFi. You just need to be curious. Tell us a little about yourself and become part of a growing community discovering what comes next.
              </p>
            </motion.div>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
              {benefits.map(({ icon: BIcon, title, desc }, idx) => (
                <motion.div key={title} custom={idx} variants={fadeUp} initial="hidden" whileInView="visible" viewport={{ once: true }}
                  className="group p-5 rounded-2xl bg-white border border-[var(--lumen-border)] hover:border-[#1A6EBF] hover:shadow-lg transition-all duration-300">
                  <div className="h-9 w-9 rounded-xl flex items-center justify-center mb-3 transition-transform group-hover:scale-110 duration-200"
                    style={{ background: 'linear-gradient(135deg, rgba(26,110,191,0.1) 0%, rgba(0,194,199,0.1) 100%)', border: '1px solid var(--lumen-border)' }}>
                    <BIcon size={16} className="text-[#1A6EBF]" />
                  </div>
                  <h4 className="font-black text-sm text-[#0D2240] mb-1">{title}</h4>
                  <p className="text-[11px] text-[#4A6080] leading-relaxed">{desc}</p>
                </motion.div>
              ))}
            </div>
          </div>

          <div className="relative">
            <motion.div initial={{ opacity: 0, x: 30 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.7 }}
              className="relative rounded-3xl overflow-hidden shadow-2xl border border-[var(--lumen-border)] aspect-[4/3]">
              <Image src={communityFactoryImg} alt="Distributed Community Engineering Labs" fill className="object-cover" sizes="(max-width: 1024px) 100vw, 50vw" />
            </motion.div>
            <motion.div initial={{ opacity: 0, y: 20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="absolute -bottom-6 -left-6 bg-white rounded-2xl border border-[var(--lumen-border)] shadow-xl p-5 max-w-[200px]">
              <div className="font-black text-3xl text-gradient-lumen mb-1">Curious</div>
              <div className="text-[11px] font-mono uppercase tracking-wider text-[#4A6080]">That's all you<br />need to start</div>
            </motion.div>
            <motion.div initial={{ opacity: 0, y: -20, scale: 0.95 }} whileInView={{ opacity: 1, y: 0, scale: 1 }} viewport={{ once: true }}
              transition={{ delay: 0.5, duration: 0.5 }}
              className="absolute -top-5 -right-5 bg-white rounded-2xl border border-[var(--lumen-border)] shadow-xl p-4 max-w-[180px]">
              <div className="flex items-center gap-2 mb-2">
                <span className="h-2 w-2 rounded-full bg-[#00C2C7] animate-pulse" />
                <span className="text-[10px] font-mono font-bold text-[#4A6080] uppercase">Community Growing</span>
              </div>
              <div className="font-black text-2xl text-[#0D2240]">Join Now</div>
              <div className="text-[10px] font-mono text-[#4A6080] mt-0.5">Be part of what comes next</div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ── SECTION 6: REGISTRATION FORM ── */
function ApplicationForm() {
  const [formState, setFormState] = useState({
    firstName: '', lastName: '', email: '', discordHandle: '', githubProfile: '',
    primaryInterest: '', engagementLevel: '', message: '', agreed: false,
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

  const inputCls = "w-full px-4 py-3 rounded-xl border border-[var(--lumen-border)] bg-white text-sm text-[#0D2240] placeholder:text-[#4A6080]/60 focus:outline-none focus:border-[#1A6EBF] focus:ring-2 focus:ring-[rgba(26,110,191,0.12)] transition-all duration-200 font-sans";
  const labelCls = "block text-xs font-bold font-mono uppercase tracking-wider text-[#4A6080] mb-1.5";

  return (
    <section id="join" className="relative overflow-hidden py-24 bg-white">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-30"
        style={{ backgroundImage: 'linear-gradient(var(--lumen-border) 1px, transparent 1px), linear-gradient(90deg, var(--lumen-border) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute top-0 right-0 w-[500px] h-[500px] rounded-full blur-[160px] opacity-30 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.2) 0%, transparent 70%)' }} />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] rounded-full blur-[140px] opacity-25 pointer-events-none"
        style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.18) 0%, transparent 70%)' }} />

      <div className="relative z-10 max-w-5xl mx-auto px-6">
        <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-12">

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-[#0D2240] mb-4">
            Join the <span className="text-gradient-lumen">LiFi Community.</span>
          </h2>
          <p className="text-[#4A6080] max-w-xl mx-auto text-base leading-relaxed">
            Tell us a little about yourself and become part of a growing community discovering what comes next. You just need to be curious.
          </p>
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }}
          className="bg-white rounded-3xl border border-[var(--lumen-border)] shadow-2xl shadow-[rgba(13,34,64,0.08)] overflow-hidden">
          <div className="px-8 py-4 border-b border-[var(--lumen-border)] flex items-center gap-3"
            style={{ background: 'linear-gradient(135deg, rgba(26,110,191,0.05) 0%, rgba(0,194,199,0.05) 100%)' }}>
            <div className="h-8 w-8 rounded-xl flex items-center justify-center shrink-0"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}>
              <Users size={15} className="text-white" />
            </div>
            <div>
              <div className="text-xs font-black text-[#0D2240] uppercase tracking-wider">Become a Community Member</div>
              <div className="text-[10px] font-mono text-[#4A6080]">Your information stays secure</div>
            </div>
            <div className="ml-auto flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#00C2C7] animate-pulse" />
              <span className="text-[10px] font-mono text-[#4A6080] uppercase">Encrypted Form</span>
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
              <h3 className="text-2xl font-black text-[#0D2240] mb-3">Welcome to the Future!</h3>
              <p className="text-[#4A6080] max-w-md leading-relaxed text-sm">
                You are now part of the LiFi community. The next chapter of connectivity is being written now — and you are part of the story. Check your inbox for what comes next.
              </p>
              <div className="mt-8 grid grid-cols-3 gap-4 text-center">
                {[
                  { val: 'Learn', label: 'Discover LiFi' },
                  { val: 'Connect', label: 'Meet the Community' },
                  { val: 'Grow', label: 'Shape the Future' },
                ].map(({ val, label }) => (
                  <div key={label}>
                    <div className="font-black text-xl text-gradient-lumen">{val}</div>
                    <div className="text-[10px] font-mono uppercase tracking-wider text-[#4A6080]">{label}</div>
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="p-8 space-y-6">
              <div>
                <label htmlFor="comm-name" className={labelCls}>Name *</label>
                <input id="comm-name" name="firstName" type="text" required placeholder="Your name" value={formState.firstName} onChange={handleChange} className={inputCls} />
              </div>
              <div>
                <label htmlFor="comm-email" className={labelCls}>Email Address *</label>
                <input id="comm-email" name="email" type="email" required placeholder="your@email.com" value={formState.email} onChange={handleChange} className={inputCls} />
              </div>
              <div>
                <label htmlFor="comm-interest" className={labelCls}>What brings you to LiFi? *</label>
                <select id="comm-interest" name="primaryInterest" required value={formState.primaryInterest} onChange={handleChange} className={inputCls}>
                  <option value="" disabled>Select an option...</option>
                  <option>I want to learn</option>
                  <option>I want to explore opportunities</option>
                  <option>I want to connect with the community</option>
                  <option>I am interested in becoming a partner</option>
                  <option>I am simply curious</option>
                </select>
              </div>
              <label className="flex items-start gap-3 cursor-pointer group">
                <div className="relative mt-0.5 shrink-0">
                  <input type="checkbox" name="agreed" id="comm-agreed" required checked={formState.agreed} onChange={handleChange} className="sr-only" />
                  <div className={`h-[18px] w-[18px] rounded border-2 flex items-center justify-center transition-all duration-200 ${formState.agreed ? 'border-[#1A6EBF] bg-[#1A6EBF]' : 'border-[var(--lumen-border)] bg-white group-hover:border-[#1A6EBF]'}`}>
                    {formState.agreed && <CheckCircle size={12} className="text-white" />}
                  </div>
                </div>
                <span className="text-xs text-[#4A6080] leading-relaxed">
                  I agree to Lumenfi&#39;s{' '}
                  <Link href="/terms" className="text-[#1A6EBF] hover:underline font-semibold" target="_blank">Terms &amp; Conditions</Link>
                  {' '}and{' '}
                  <Link href="/privacy" className="text-[#1A6EBF] hover:underline font-semibold" target="_blank">Privacy Policy</Link>.
                  I consent to receiving community alerts and digital space links via my submitted vectors.
                </span>
              </label>
              <button type="submit" disabled={loading} id="comm-submit-btn"
                className="w-full h-14 rounded-2xl text-white font-bold text-sm tracking-wider flex items-center justify-center gap-2 transition-all duration-300 hover:scale-[1.01] hover:shadow-xl disabled:opacity-70 disabled:cursor-not-allowed"
                style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)', boxShadow: '0 8px 32px rgba(0,194,199,0.28)' }}>
                {loading ? (
                  <>
                    <motion.div animate={{ rotate: 360 }} transition={{ duration: 0.8, repeat: Infinity, ease: 'linear' }}
                      className="h-4 w-4 border-2 border-white/40 border-t-white rounded-full" />
                    Joining Community...
                  </>
                ) : (
                  <>Become a Community Member <ArrowRight size={16} /></>
                )}
              </button>
            </form>
          )}
        </motion.div>

        <motion.div initial={{ opacity: 0, y: 16 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.3 }}
          className="mt-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
          {[
            { icon: Shield, label: 'Your Data is Safe', desc: 'We keep your information secure and never share it without your consent.' },
            { icon: Mail, label: 'Quick Response', desc: 'We will be in touch soon after you submit — no long waits.' },
            { icon: MessageSquare, label: 'Welcoming Space', desc: 'A friendly, open community where every question is a good question.' },
          ].map(({ icon: TIcon, label, desc }) => (
            <div key={label} className="flex items-start gap-3 p-4 rounded-2xl bg-[#EAF3FA] border border-[var(--lumen-border)]">
              <TIcon size={15} className="shrink-0 mt-0.5 text-[#1A6EBF]" />
              <div>
                <div className="text-xs font-bold text-[#0D2240]">{label}</div>
                <div className="text-[11px] text-[#4A6080] mt-0.5">{desc}</div>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}

/* ── SECTION 7: FINAL CALL TO ACTION ── */
function FinalBanner() {
  return (
    <section className="relative overflow-hidden py-20 bg-[#0D2240]">
      <div className="absolute inset-0 pointer-events-none z-0 opacity-10"
        style={{ backgroundImage: 'linear-gradient(rgba(0,194,199,0.3) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,199,0.3) 1px, transparent 1px)', backgroundSize: '64px 64px' }} />
      <div className="absolute inset-0 pointer-events-none z-0"
        style={{ background: 'radial-gradient(ellipse at 50% 50%, rgba(0,194,199,0.12) 0%, transparent 70%)' }} />
      <div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
        <motion.div initial={{ opacity: 0, y: 24 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>

          <h2 className="text-4xl md:text-5xl font-black tracking-tight text-white mb-6 leading-tight">
            Welcome to the Future.<br />
            <span className="text-gradient-lumen">The next chapter starts now.</span>
          </h2>
          <p className="text-blue-200/70 text-base leading-relaxed max-w-2xl mx-auto mb-10">
            The next chapter of connectivity is being written now. Come be part of the community shaping it.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a href="#join"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-[1.03]"
              style={{ background: 'linear-gradient(135deg, #00C2C7 0%, #0FB89A 100%)', boxShadow: '0 8px 32px rgba(0,194,199,0.35)' }}>
              Join the Community <ArrowRight size={16} />
            </a>
            <Link href="/contact"
              className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl font-bold text-sm tracking-wider border-2 border-white/15 text-white hover:border-white/40 hover:bg-white/5 transition-all duration-300">
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

/* ── ROOT PAGE EXPORT ── */
export default function CommunityPage() {
  return (
    <div className="flex flex-col min-h-screen antialiased font-sans bg-[#F4F9FC] text-[#0D2240]">
      <Head>
        <title>Join the LiFi Community — Be Part of What Comes Next</title>
        <meta name="description" content="Join the LiFi community and be part of the movement shaping the future of connected spaces. Whether you are curious, learning, or building — there is a place for you here." />
        <meta property="og:title" content="Join the LiFi Community — Be Part of What Comes Next" />
        <meta property="og:description" content="Step inside the dynamic global community for Lumenfi developers, creators, and technical enthusiasts." />
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