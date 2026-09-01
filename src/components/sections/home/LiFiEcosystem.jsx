import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { Network, Zap, Smartphone, Expand, ArrowRight } from 'lucide-react';
import gatewayImg from '../../../../public/images/hero/lifi3.png';

const highlights = [
  {
    id: '01',
    title: 'Centralized Connectivity',
    desc: 'Connect your network infrastructure, access points, and Li-Fi devices through one intelligent gateway.',
    icon: Network,
  },
  {
    id: '02',
    title: 'Light-Based Communication',
    desc: 'Deliver high-speed data through photonic antennas while maintaining reliable network connectivity.',
    icon: Zap,
  },
  {
    id: '03',
    title: 'Flexible Device Support',
    desc: 'Connect laptops, tablets, and other compatible devices through dedicated Li-Fi receivers.',
    icon: Smartphone,
  },
  {
    id: '04',
    title: 'Scalable Coverage',
    desc: 'Extend Li-Fi coverage across your environment with multiple access points and antennas.',
    icon: Expand,
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
      <div className="relative z-10 max-w-7xl mx-auto px-6">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-10 sm:mb-12">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold tracking-widest text-[#1A6EBF] bg-[#1A6EBF]/10 mb-4 uppercase">
            The Lumenfi Ecosystem
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold tracking-tight text-[#0D2240] mb-4 leading-tight">
            One Gateway. <br className="hidden sm:block" />
            <span className="text-[#1A6EBF]">Multiple Ways to Connect.</span>
          </h2>
          <p className="text-base sm:text-lg text-[#4A6080] leading-relaxed max-w-2xl mx-auto font-normal">
            The central hub for next-generation Li-Fi. Bridge your existing network with photonic antennas and devices to experience light-based communication.
          </p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-1 lg:grid-cols-4 gap-4 sm:gap-6 mb-10"
        >
          
          {/* Main Hero Image Box (Spans 2 columns, 2 rows) */}
          <motion.div 
            variants={itemVariants}
            className="lg:col-span-2 lg:row-span-2 relative bg-white rounded-3xl border border-slate-200/80 shadow-sm overflow-hidden group flex flex-col"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#1A6EBF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            
            <div className="relative flex-grow flex items-center justify-center p-4 sm:p-8">
              <Image
                src={gatewayImg}
                alt="Lumenfi Multi-Mode Gateway Ecosystem"
                className="w-full h-auto object-contain transition-transform duration-700 group-hover:scale-[1.02]"
                sizes="(max-width: 1024px) 100vw, 50vw"
                priority
              />
            </div>
            
            {/* Banner at bottom of image box */}
            <div className="relative bg-[#F4F7FA] border-t border-slate-200 p-5">
              <h4 className="text-[#0D2240] font-bold text-base mb-1">Lumenfi Gateway Visualized</h4>
              <p className="text-[#4A6080] text-sm font-normal">See how data pulses seamlessly through light streams.</p>
            </div>
          </motion.div>

          {/* Feature Boxes */}
          {highlights.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={item.id}
                variants={itemVariants}
                className="lg:col-span-1 bg-white rounded-3xl border border-slate-200/80 shadow-sm p-6 group hover:shadow-md transition-all duration-300 hover:-translate-y-1 relative overflow-hidden"
              >
                <div className="absolute top-0 right-0 p-5 opacity-5 group-hover:opacity-10 group-hover:scale-150 transition-all duration-500 origin-top-right text-[#1A6EBF]">
                  <Icon className="w-20 h-20" />
                </div>

                <div className="relative z-10 flex flex-col h-full">
                  <div className="w-10 h-10 rounded-xl bg-[#1A6EBF]/10 text-[#1A6EBF] flex items-center justify-center mb-4 group-hover:bg-[#1A6EBF] group-hover:text-white transition-colors duration-300">
                    <Icon className="w-5 h-5" />
                  </div>
                  
                  <div className="mt-auto">
                    <span className="text-xs font-bold text-[#1A6EBF] mb-1 block">{item.id}</span>
                    <h3 className="text-base font-bold text-[#0D2240] mb-2 leading-tight">
                      {item.title}
                    </h3>
                    <p className="text-xs text-[#4A6080] leading-relaxed font-normal">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}

        </motion.div>

        {/* CTA Section */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="flex flex-col sm:flex-row items-center justify-between gap-4 p-5 sm:p-6 rounded-[2rem] bg-white border border-slate-200/80 shadow-sm"
        >
          <div>
            <h4 className="text-[#0D2240] font-bold text-lg mb-1">Ready to upgrade your network?</h4>
            <p className="text-[#4A6080] text-sm">Experience the stability and security of Li-Fi today.</p>
          </div>
          <Link
            href="/products"
            className="group inline-flex items-center justify-center gap-2 h-12 px-6 rounded-xl text-white font-semibold text-sm tracking-wide transition-all hover:scale-[1.02] shadow-md w-full sm:w-auto"
            style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
          >
            Explore Ecosystem
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>

      </div>
    </section>
  );
}
