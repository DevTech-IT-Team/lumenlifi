import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, Building2, Factory, Cpu, GraduationCap, Sparkles, ShieldCheck, Mail, Sliders } from 'lucide-react';
import corporateBoardroomImg from '../../../../public/images/hero/corporate.png';
import manufacturingImg from '../../../../public/images/hero/manufacturing.png';
import datacenterImg from '../../../../public/images/hero/data-centers.png';
import schoolImg from '../../../../public/images/hero/education.png';

const sectors = [
  {
    id: 'corp',
    title: 'Holographic Boardroom',
    subtitle: 'Corporate Office Sectors',
    icon: Building2,
    desc: 'Make office teamwork better with fast light hubs. Show smooth 3D presentations, share files instantly, and remove all messy internet cables from the building.',
    img: corporateBoardroomImg,
    metric: 'Private Walls Protection',
  },
  {
    id: 'factory',
    title: 'Industrial Manufacturing Floors',
    subtitle: 'Heavy Machinery Automation',
    icon: Factory,
    desc: 'Keep factory robots running smoothly without any network problems. Light waves never get mixed up by big factory machines, sending data right where it needs to go.',
    img: manufacturingImg,
    metric: '0% Radio Interference',
  },
  {
    id: 'data',
    title: 'Next-Gen Data Centers',
    subtitle: 'Inter-Rack Optical Pipes',
    icon: Cpu,
    desc: 'Get rid of messy piles of internet cables by using fast beams of light between server racks. This keeps computer rooms cooler and makes them transfer files much faster.',
    img: datacenterImg,
    metric: 'Fast Core Node Matrix',
  },
  {
    id: 'school',
    title: 'Smart Schools & Campuses',
    subtitle: 'High-Density Classroom Networks',
    icon: GraduationCap,
    desc: 'Stop school internet from slowing down when all students go online at once. Every light bulb gives a direct connection straight down to each desk without any lag.',
    img: schoolImg,
    metric: 'Safe and Lag-Free Link',
  },
];

export default function EcosystemSection() {
  const [activeTab, setActiveTab] = useState('corp');
  const current = sectors.find((s) => s.id === activeTab) || sectors[0];

  return (
    <section className="py-24 section-wash-primary border-t border-b border-[var(--lumen-border)]" id="shop">
      <div className="max-w-6xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center max-w-2xl mx-auto mb-16"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-mono font-bold mb-4 section-wash-secondary border border-[var(--lumen-border)] text-[var(--lumen-blue)]">
            🛒 Business Places
          </div>
          <h2 className="text-4xl font-black tracking-tight text-[var(--lumen-navy)]">Made for Businesses</h2>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {sectors.map((s) => {
            const Icon = s.icon;
            const isActive = s.id === activeTab;
            return (
              <button
                key={s.id}
                onClick={() => setActiveTab(s.id)}
                className="flex items-center gap-2 px-6 py-3.5 rounded-xl text-xs font-bold font-mono tracking-wider transition-all border shadow-sm"
                style={{
                  background: isActive ? '#0D2240' : 'var(--lumen-surface)',
                  color: isActive ? 'var(--lumen-cyan)' : 'var(--lumen-muted)',
                  borderColor: isActive ? '#0D2240' : 'var(--lumen-border)',
                }}
              >
                <Icon size={16} style={{ color: isActive ? 'var(--lumen-cyan)' : 'var(--lumen-blue)' }} />
                {s.title}
              </button>
            );
          })}
        </div>

        <div className="card-surface rounded-3xl p-6 lg:p-10 shadow-xl flex flex-col lg:flex-row gap-10 items-center">
          <div className="w-full lg:w-1/2 flex flex-col justify-center">
            <span className="text-xs font-mono font-bold uppercase tracking-widest text-[var(--lumen-blue)] mb-2 block">
              {current.subtitle}
            </span>
            <h3 className="text-3xl font-black text-[var(--lumen-navy)] tracking-tight mb-4">Lumen for {current.title}</h3>
            <p className="text-sm sm:text-base leading-relaxed text-[var(--lumen-muted)] mb-8">{current.desc}</p>
            <div className="inline-flex self-start px-4 py-2 rounded-xl text-xs font-mono font-bold text-emerald-700 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/30 border border-emerald-100 dark:border-emerald-900/60">
              ✓ Core Features: {current.metric}
            </div>
          </div>

          <div className="w-full lg:w-1/2">
            <div className="relative w-full aspect-video bg-[#0D2240] rounded-2xl overflow-hidden border border-[var(--lumen-border)]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={current.id}
                  initial={{ opacity: 0, scale: 0.98 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.98 }}
                  transition={{ duration: 0.4 }}
                  className="relative w-full h-full"
                >
                  <Image
                    src={current.img}
                    alt={current.title}
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 600px"
                    className="object-contain w-full h-full p-2"
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <Link
            href="/products"
            className="glow-blue inline-flex items-center gap-2 h-12 px-8 rounded-2xl text-white font-bold text-sm transition-all hover:scale-[1.03] hover:shadow-xl"
            style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
          >
            View Production Catalog <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  );
}
