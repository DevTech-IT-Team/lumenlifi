import React from 'react';
import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import {
  Zap,
  ShieldCheck,
  Layers,
  Activity,
  WifiOff,
  Cpu,
  Tv,
  Smartphone,
  Eye,
  ArrowRight,
  HelpCircle,
  Network,
  Lock,
  Radio,
  Clock,
  Gauge
} from 'lucide-react';


export default function WhatIsLiFiPage() {

  // Framer Motion Orchestrators
  const staggerContainer = {
    hidden: {},
    visible: { transition: { staggerChildren: 0.12 } }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { type: "spring", stiffness: 100, damping: 16 }
    }
  };

  return (
    <div className="flex flex-col min-h-screen antialiased font-sans transition-colors duration-300 bg-[var(--lumen-bg)] text-[var(--lumen-navy)] selection:bg-cyan-500/20">
      <Head>
        <title>What is LiFi? Technology & Applications — Lumen LiFi</title>
        <meta name="description" content="Discover LiFi technology: a fast, reliable, and secure mobile wireless communications technology that uses light waves rather than radio frequencies to transmit data." />
      </Head>


      <main className="flex-grow">

        {/* 1. HERO SECTION: Technology Introduction */}
        <section className="relative pt-32 pb-24 overflow-hidden bg-[#0D2240] text-white">
          <div className="absolute inset-0 pointer-events-none z-0">
            <div
              className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[500px] rounded-full blur-[160px] opacity-25"
              style={{ background: 'radial-gradient(circle, var(--lumen-cyan) 0%, transparent 70%)' }}
            />
            <div
              className="absolute inset-0 opacity-5"
              style={{
                backgroundImage: 'linear-gradient(rgba(0,194,199,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(0,194,199,0.15) 1px, transparent 1px)',
                backgroundSize: '40px 40px'
              }}
            />
          </div>

          <div className="max-w-6xl mx-auto px-6 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

              {/* Left Content Column */}
              <div className="lg:col-span-7 text-left">
                <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.5 }}>
                  <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-mono font-bold mb-6 bg-cyan-500/10 text-[var(--lumen-cyan)] border border-cyan-500/20 shadow-inner">
                    About LiFi Technology
                  </span>
                </motion.div>

                <motion.h1
                  initial={{ opacity: 0, y: 24 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1, duration: 0.6 }}
                  className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight mb-6 leading-[1.1]"
                >
                  Wireless Data at the <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2C7] via-[#0FB89A] to-[#00C2C7]">
                    Speed of Light
                  </span>
                </motion.h1>

                <motion.p
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ delay: 0.3, duration: 0.6 }}
                  className="text-blue-100/80 text-sm sm:text-base md:text-lg max-w-2xl leading-relaxed mb-0"
                >
                  LiFi is a wireless technology that holds the key to solving challenges faced by WiFi and 5G. LiFi is fast, more reliable, virtually interference free and uniquely more secure than other wireless communications technologies.
                </motion.p>
              </div>

              {/* Right Image Asset Column */}
              <div className="lg:col-span-12">
                <motion.div
                  initial={{ opacity: 0, scale: 0.98, y: 20 }}
                  animate={{ opacity: 1, scale: 1, y: 0 }}
                  transition={{ delay: 0.2, duration: 0.6 }}
                  className="relative rounded-[2rem] overflow-hidden border border-white/10 bg-white/5 p-2 shadow-2xl backdrop-blur-sm group"
                >
                  <Image
                    src="/images/lifi/what-is-lifi.png"
                    alt="Lumen LiFi Architecture Topology Diagram"
                    width={600}
                    height={450}
                    className="w-full h-auto rounded-3xl object-cover transition-transform duration-700 group-hover:scale-[1.01]"
                    priority
                  />
                </motion.div>
              </div>

            </div>
          </div>
        </section>


        {/* 2. FUNCTIONAL COMPARISON: What is LiFi & How Does it Work? */}
        <section className="py-24 max-w-6xl mx-auto px-6 border-b border-[var(--lumen-border)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

            <div className="lg:col-span-6 space-y-5">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[var(--lumen-blue)]">Operational Overview</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--lumen-navy)]">
                What is LiFi & How Does it Work?
              </h2>
              <p className="text-[var(--lumen-muted)] text-sm sm:text-base leading-relaxed">
                LiFi is a mobile wireless communications technology that uses light rather than radio frequencies to transmit data. LiFi is fully networked, and mobile. The experience of using LiFi is similar to WiFi but offers a range of advantages.
              </p>
              <p className="text-[var(--lumen-muted)] text-sm sm:text-base leading-relaxed">
                Similar to other wireless communications technologies, LiFi can be used in a variety of applications such as internet access, phone-2-phone or phone-to-TV communications or in emerging use cases such as extended or mixed reality.
              </p>
              <div className="pt-2">
                <Link href="/faqs" className="h-11 px-5 rounded-xl border border-[var(--lumen-blue)] text-[var(--lumen-blue)] font-mono font-bold text-xs uppercase tracking-wider hover:bg-[var(--lumen-light)] transition-colors inline-flex items-center gap-2">
                  <HelpCircle size={14} /> View LiFi FAQs
                </Link>
              </div>
            </div>

            <div className="lg:col-span-6 grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="p-6 rounded-3xl bg-white border border-[var(--lumen-border)] shadow-sm">
                <div className="p-3 bg-red-50 text-red-500 rounded-2xl w-fit mb-4"><WifiOff size={20} /></div>
                <h3 className="text-base font-bold mb-2 text-[var(--lumen-navy)]">Radio Wave Bottlenecks</h3>
                <p className="text-xs text-[var(--lumen-muted)] leading-relaxed">
                  Traditional Wi-Fi signals penetrate walls seamlessly, expanding your threat perimeter and leading to severe cross-channel interference.
                </p>
              </div>

              <div className="p-6 rounded-3xl bg-white border border-cyan-500/20 shadow-md bg-gradient-to-br from-cyan-500/[0.02] to-transparent">
                <div className="p-3 bg-cyan-50 text-[var(--lumen-cyan)] rounded-2xl w-fit mb-4"><Eye size={20} /></div>
                <h3 className="text-base font-bold mb-2 text-[var(--lumen-navy)]">The Optical Paradigm</h3>
                <p className="text-xs text-[var(--lumen-muted)] leading-relaxed">
                  Light waves are perfectly localized within a specific physical cone, unlocking isolated multi-gigabit user pipelines effortlessly.
                </p>
              </div>
            </div>

          </div>
        </section>


        {/* 3. CORE MATRIX: Security & Performance Split */}
        <section className="py-24 bg-white border-b border-[var(--lumen-border)]">
          <div className="max-w-6xl mx-auto px-6 space-y-24">

            {/* Row A: Military-Grade Security */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 order-2 lg:order-1">
                <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 bg-white p-2 shadow-xl">
                  <Image
                    src="/images/lifi/security.png"
                    alt="Physical Boundary Containment Mapping Network Data Cones"
                    width={600}
                    height={380}
                    className="w-full h-auto rounded-3xl object-cover"
                  />
                </div>
              </div>
              <div className="lg:col-span-6 order-1 lg:order-2 space-y-4">
                <div className="p-3 bg-emerald-50 text-emerald-600 rounded-2xl w-fit mb-2"><Lock size={20} /></div>
                <h2 className="text-3xl font-black tracking-tight text-[var(--lumen-navy)]">Military Grade Security</h2>
                <p className="text-[var(--lumen-muted)] text-sm sm:text-base leading-relaxed">
                  LiFi is wireless communications that provide military-grade security by default. Light does not penetrate walls or leak through material such as canvas or curtains therefore can be contained in a space eliminating the ability for man-in-the-middle attacks outside a cone of coverage or room.
                </p>
                <p className="text-[var(--lumen-muted)] text-sm sm:text-base leading-relaxed font-semibold">
                  LiFi provides users with the privacy and security that all modern personal and professional networks require.
                </p>
              </div>
            </div>

            {/* Row B: Real World Performance */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-6 space-y-4">
                <div className="p-3 bg-blue-50 text-[var(--lumen-blue)] rounded-2xl w-fit mb-2"><Radio size={20} /></div>
                <h2 className="text-3xl font-black tracking-tight text-[var(--lumen-navy)]">Real World Performance</h2>
                <p className="text-[var(--lumen-muted)] text-sm sm:text-base leading-relaxed">
                  Radio frequency (RF) technologies such as WiFi suffer from common pitfalls such as interference, congestion and multi-user degradation. This is why users often do not experience consistent performance or advertised speeds.
                </p>
                <p className="text-[var(--lumen-muted)] text-sm sm:text-base leading-relaxed font-semibold">
                  LiFi overcomes these pitfalls by providing high bandwidth wireless communications that offer full consistent and reliable connections and do not suffer from interference, congestion and multiuser degradation.
                </p>
              </div>
              <div className="lg:col-span-6">
                <div className="relative rounded-[2rem] overflow-hidden border border-slate-200 bg-white p-2 shadow-xl">
                  <Image
                    src="/images/lifi/how-it-work.png"
                    alt="LiFi Real-World High Throughput Performance Tracking Chart"
                    width={600}
                    height={380}
                    className="w-full h-auto rounded-3xl object-cover"
                  />
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 4. PERFORMANCE PILLARS: Key Benefits Grid */}
        <section className="py-24 max-w-6xl mx-auto px-6 bg image src='/public/images/lifi/bg.png'">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[var(--lumen-blue)]">Features Spec Sheet</span>
            <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--lumen-navy)]">Technology Benefits</h2>
          </div>

          <motion.div
            variants={staggerContainer} initial="hidden" whileInView="visible" viewport={{ once: true, margin: "-100px" }}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            {[
              { icon: Gauge, title: "Speed & Bandwidth", desc: "LiFi can deliver multiple Gbps speeds in mobile devices. This next generation technology will drive wireless beyond any current capability, opening up unprecedented bandwidth.", color: "from-amber-500 to-rose-500" },
              { icon: ShieldCheck, title: "Military Grade Security", desc: "Light can be contained, and secured in a physical space. LiFi enables additional control as LiFi offers precise localisation for asset tracking and user authentication.", color: "from-emerald-500 to-teal-500" },
              { icon: Layers, title: "No Congestion", desc: "LiFi doesn't suffer from the same congestion and poor effects from multi user degradation as WiFi and other RF technologies.", color: "from-purple-500 to-pink-500" },
              { icon: Activity, title: "Reliability", desc: "LiFi provides enhanced reliability enabling interference-free communications and 1000 times the data density, dramatically improving the user experience.", color: "from-[var(--lumen-blue)] to-[var(--lumen-cyan)]" },
              { icon: Clock, title: "Low Latency", desc: "LiFi currently offers latency by a factor of three times lower than Wi-Fi and can radically enable innovation, automation, and applications such as AR and VR.", color: "from-indigo-500 to-blue-600" },
              { icon: WifiOff, title: "Interference Free", desc: "RF is vulnerable to interference from a wide range of devices such as cordless phones, microwaves and neighbouring Wi-Fi networks.", color: "from-orange-500 to-amber-500" }
            ].map((benefit, i) => {
              const IconComponent = benefit.icon;
              return (
                <motion.div
                  key={i} variants={fadeInUp} whileHover={{ y: -6 }}
                  className="p-6 rounded-[2rem] bg-white border border-[var(--lumen-border)] flex flex-col justify-between shadow-sm group transition-all duration-300"
                >
                  <div>
                    <div className={`p-3 rounded-2xl bg-gradient-to-br ${benefit.color} text-white w-fit mb-5 shadow-sm`}>
                      <IconComponent size={18} />
                    </div>
                    <h3 className="text-base font-bold mb-2 tracking-tight text-[var(--lumen-navy)]">{benefit.title}</h3>
                    <p className="text-xs text-[var(--lumen-muted)] leading-relaxed">{benefit.desc}</p>
                  </div>
                  <div className="w-full h-[2px] bg-slate-100 rounded-full overflow-hidden mt-6">
                    <div className={`h-full w-0 group-hover:w-full transition-all duration-500 bg-gradient-to-r ${benefit.color}`} />
                  </div>
                </motion.div>
              );
            })}
          </motion.div>
        </section>


        {/* 5. GLOBAL STANDARDS: The LiFi Alliance Ecosystem */}
        <section className="py-24 bg-white border-t border-[var(--lumen-border)]">
          <div className="max-w-6xl mx-auto px-6">

            <div className="text-center max-w-2xl mx-auto mb-16">
              <span className="text-[10px] font-mono font-black uppercase tracking-widest text-[var(--lumen-blue)]">Alliance Parameters</span>
              <h2 className="text-3xl sm:text-4xl font-black tracking-tight text-[var(--lumen-navy)]">The LiFi Ecosystem</h2>
              <p className="text-xs sm:text-sm text-[var(--lumen-muted)] mt-2">
                pureLiFi plays a role in the development of the LiFi ecosystem and has been instrumental in the creation of global standards and industry alliances.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {/* Alliance Card A */}
              <div className="p-8 rounded-[2rem] bg-[var(--lumen-bg)] border border-[var(--lumen-border)] flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-cyan-500/10 text-[var(--lumen-cyan)] w-fit border border-cyan-500/20">
                    IEEE 802.11bb Task Group
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[var(--lumen-navy)]">Global Light Communications Standard 802.11bb</h3>
                  <p className="text-xs text-[var(--lumen-muted)] leading-relaxed">
                    As chair of IEEE 802.11bb Task Group pureLiFi helped set the objective is to extend 802.11 to include the light medium. Since the launch of the Task Group in 2019 the standard gained international support and in 2023 has become a fully ratified global standard for Light Communications.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/updates" className="text-xs font-mono font-bold uppercase text-[var(--lumen-blue)] group-hover:text-[var(--lumen-sky)] transition-colors inline-flex items-center gap-1.5">
                    View Updates <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>

              {/* Alliance Card B */}
              <div className="p-8 rounded-[2rem] bg-[var(--lumen-bg)] border border-[var(--lumen-border)] flex flex-col justify-between group">
                <div className="space-y-4">
                  <div className="px-3 py-1 rounded-full text-[10px] font-mono font-bold tracking-wider bg-blue-50/50 dark:bg-slate-900 text-[var(--lumen-blue)] w-fit border border-[var(--lumen-border)]">
                    Founding Member Paradigm
                  </div>
                  <h3 className="text-lg font-bold tracking-tight text-[var(--lumen-navy)]">Light Communications Alliance</h3>
                  <p className="text-xs text-[var(--lumen-muted)] leading-relaxed">
                    As founding members of the Light Communications Alliance, pureLiFi have played a key role in bringing together a global community of industry leaders, researchers, and innovators who believe in the power of light communication to transform the way we connect and communicate.
                  </p>
                </div>
                <div className="pt-6">
                  <Link href="/updates" className="text-xs font-mono font-bold uppercase text-[var(--lumen-blue)] group-hover:text-[var(--lumen-sky)] transition-colors inline-flex items-center gap-1.5">
                    View Updates <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                  </Link>
                </div>
              </div>
            </div>

          </div>
        </section>


        {/* 6. CALL TO ACTION: Keep Updated Newsletter */}
        <section className="py-20 bg-[var(--lumen-surface)] border-t border-[var(--lumen-border)]">
          <div className="max-w-5xl mx-auto px-6">
            <div className="bg-[#0D2240] rounded-[2.5rem] p-8 md:p-14 text-center text-white relative overflow-hidden shadow-xl">
              <div className="absolute inset-0 pointer-events-none" style={{ background: 'radial-gradient(circle at 50% 0%, rgba(0,194,199,0.15) 0%, transparent 60%)' }} />

              <div className="relative z-10 max-w-xl mx-auto space-y-4">
                <h2 className="text-3xl sm:text-4xl font-black tracking-tight">Keep Updated</h2>
                <p className="text-blue-200/70 text-xs sm:text-sm">
                  Receive all our latest news and product info before anyone else.
                </p>

                <form onSubmit={(e) => e.preventDefault()} className="pt-4 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <input
                    type="email"
                    placeholder="Enter your professional email address"
                    required
                    className="flex-grow h-11 px-4 rounded-xl bg-white/5 border border-white/10 text-white text-xs font-mono focus:outline-none focus:border-[var(--lumen-cyan)] transition-colors"
                  />
                  <button type="submit" className="h-11 px-6 rounded-xl bg-gradient-to-r from-[#00C2C7] to-[#0FB89A] text-[#0D2240] font-mono font-bold text-xs uppercase tracking-wider transition-transform hover:scale-[1.02]">
                    Subscribe
                  </button>
                </form>
              </div>
            </div>
          </div>
        </section>

      </main>


    </div>
  );
}