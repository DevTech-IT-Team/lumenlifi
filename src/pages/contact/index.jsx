import { Mail, ShieldCheck, Terminal, ArrowUpRight } from 'lucide-react';
import Footer from '../../components/common/Footer';
import { ContactFormBlock } from '../../components/sections/contact';
import { Button } from '../../components/ui';

export default function ContactPage() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
      <div className="flex flex-col items-start text-left">
        <motion.div custom={0} variants={fadeUp} initial="hidden" animate="visible"
          className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-[var(--lumen-border)] text-[var(--lumen-blue)] font-mono text-[10px] font-bold uppercase tracking-widest mb-6 shadow-sm">
          <span className="h-1.5 w-1.5 rounded-full bg-[var(--lumen-cyan)] animate-pulse" />
          Pioneer Partner Program — Now Open
        </motion.div>

        <motion.h1 custom={1} variants={fadeUp} initial="hidden" animate="visible"
          className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.05] mb-6 text-[var(--lumen-navy)]">
          Ignite the{' '}
          <span className="text-gradient-lumen">Future.</span>
          <br />Command the{' '}
          <span className="text-gradient-lumen">Speed of Light.</span>
        </motion.h1>

        <motion.p custom={2} variants={fadeUp} initial="hidden" animate="visible"
          className="text-lg md:text-xl max-w-xl mb-8 leading-relaxed text-[var(--lumen-muted)]">
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
  );
}