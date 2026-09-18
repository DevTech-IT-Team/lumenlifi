import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Wifi, Zap, Sparkles, LayoutGrid, ArrowRight } from 'lucide-react';

const highlights = [
  {
    id: '01',
    title: 'WiFi 7 Boosted Signal',
    desc: 'Strong, stable coverage across the room — next-gen WiFi 7 keeps every device connected without the usual dead zones.',
    icon: Wifi,
  },
  {
    id: '02',
    title: 'Built-in LiFi',
    desc: 'High-speed internet through light, paired with WiFi so your home gets seamless, light-speed connectivity in one Lamp.',
    icon: Zap,
  },
  {
    id: '03',
    title: 'Fashionable & Decorative',
    desc: 'Designed for modern interiors — a sleek floor-to-ceiling Lamp that looks like décor while it powers your network.',
    icon: Sparkles,
  },
  {
    id: '04',
    title: 'Practical & Versatile',
    desc: 'Shelves, lighting, screens, and smart gear — one Lamp adapts to home offices, living rooms, and entertainment setups.',
    icon: LayoutGrid,
  },
];

const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.1 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { type: 'spring', stiffness: 300, damping: 24 } },
};

export default function LiFiEcosystem() {
  return (
    <section className="relative w-full overflow-hidden bg-gradient-to-b from-slate-50 to-[#E8F0F8] py-16 sm:py-20" id="ecosystem-gateway">
      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-[#1A6EBF]/10 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-[#1A6EBF]">
            Coming Soon — LiFi Pillar
          </div>
          <h2 className="mb-4 text-3xl font-bold leading-tight tracking-tight text-[#0D2240] sm:text-4xl lg:text-5xl">
            One Pillar. <br className="hidden sm:block" />
            <span className="text-[#1A6EBF]">Connectivity Meets Design.</span>
          </h2>
          <p className="mx-auto max-w-2xl text-base font-normal leading-relaxed text-[#4A6080] sm:text-lg">
            The LiFi Lamp brings WiFi 7 and LiFi into a single decorative column — stylish enough for your living room, practical enough for every room in the home.
          </p>
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: '-50px' }}
          className="mb-10 grid grid-cols-1 gap-4 sm:gap-6 lg:grid-cols-4"
        >
          <motion.div
            variants={itemVariants}
            className="group relative flex flex-col overflow-hidden rounded-3xl border border-slate-200/80 bg-white shadow-sm lg:col-span-2 lg:row-span-2"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A6EBF]/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100" />

            <div className="relative flex flex-grow items-center justify-center p-4 sm:p-8">
              <Image
                src="/images/pole/poles_ind.png"
                alt="LumenFi LiFi Pillar in a modern home interior"
                width={900}
                height={700}
                className="h-auto w-full object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>

            <div className="relative border-t border-slate-200 bg-[#F4F7FA] p-5">
              <h4 className="mb-1 text-base font-bold text-[#0D2240]">LiFi Lamp Visualized</h4>
              <p className="text-sm font-normal text-[#4A6080]">
                See how one elegant pillar delivers light-speed internet and everyday utility.
              </p>
            </div>
          </motion.div>

          {highlights.map((item) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-md lg:col-span-1"
              >
                <div className="absolute right-0 top-0 origin-top-right p-5 text-[#1A6EBF] opacity-5 transition-all duration-500 group-hover:scale-150 group-hover:opacity-10">
                  <Icon className="h-20 w-20" />
                </div>

                <div className="relative z-10 flex h-full flex-col">
                  <div className="mb-4 flex h-10 w-10 items-center justify-center rounded-xl bg-[#1A6EBF]/10 text-[#1A6EBF] transition-colors duration-300 group-hover:bg-[#1A6EBF] group-hover:text-white">
                    <Icon className="h-5 w-5" />
                  </div>

                  <div className="mt-auto">
                    <span className="mb-1 block text-xs font-bold text-[#1A6EBF]">{item.id}</span>
                    <h3 className="mb-2 text-base font-bold leading-tight text-[#0D2240]">{item.title}</h3>
                    <p className="text-xs font-normal leading-relaxed text-[#4A6080]">{item.desc}</p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col items-center justify-between gap-4 rounded-[2rem] border border-slate-200/80 bg-white p-5 shadow-sm sm:flex-row sm:p-6"
        >
          <div>
            <h4 className="mb-1 text-lg font-bold text-[#0D2240]">Ready for the LiFi Lamp?</h4>
            <p className="text-sm text-[#4A6080]">Explore the coming-soon indoor pillar that mixes style with light-speed connectivity.</p>
          </div>
          <Link
            href="/products/lifi-pole"
            className="group inline-flex h-12 w-full items-center justify-center gap-2 rounded-xl px-6 text-sm font-semibold tracking-wide text-white shadow-md transition-all hover:scale-[1.02] sm:w-auto"
            style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
          >
            Explore LiFi Lamp
            <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}
