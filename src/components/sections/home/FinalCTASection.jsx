import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, ShieldCheck, Mail, Sliders } from 'lucide-react';
import ctaImg from '../../../../public/images/hero/cta.png';

export default function FinalCTASection() {
  return (
    <section className="py-28 relative overflow-hidden section-wash-primary" id="cta-final">
      <div className="absolute inset-0 pointer-events-none z-0">
        <Image src={ctaImg} alt="cta" fill loading="lazy" />
        <div
          className="absolute -top-24 left-1/2 -translate-x-1/2 w-[600px] h-[400px] rounded-full blur-[140px] opacity-40"
          style={{ background: 'radial-gradient(circle, var(--lumen-cyan) 0%, transparent 75%)' }}
        />
        <div
          className="absolute -bottom-36 left-1/3 w-[500px] h-[350px] rounded-full blur-[120px] opacity-30"
          style={{ background: 'radial-gradient(circle, rgba(26,110,191,0.2) 0%, transparent 75%)' }}
        />
      </div>

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 35, scale: 0.98 }}
          whileInView={{ opacity: 1, y: 0, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: 'easeOut' }}
        >
          <div className="rounded-[2.5rem] p-10 sm:p-14 md:p-20 relative overflow-hidden section-wash-navy shadow-[0_32px_80px_rgba(13,34,64,0.3)] border border-white/5 group">
            <div
              className="absolute inset-0 pointer-events-none transition-opacity duration-500 group-hover:opacity-80"
              style={{ background: 'radial-gradient(circle at 50% 10%, rgba(0,194,199,0.12) 0%, transparent 50%)' }}
            />

            <div className="relative z-10 text-center max-w-3xl mx-auto">
              <h2 className="!text-white text-4xl sm:text-5xl md:text-6xl font-black mb-6 tracking-tight leading-[1.05]">
                Leave old radio waves behind.
                <br />
                <span
                  className="bg-clip-text text-transparent bg-gradient-to-r from-[#00C2C7] via-[#0FB89A] to-[#00C2C7] bg-[size:200%_auto] animate-pulse"
                  style={{ animationDuration: '4s' }}
                >
                  Live at the speed of light.
                </span>
              </h2>

              <p className="text-blue-100/80 text-sm sm:text-base md:text-lg mb-10 max-w-xl mx-auto font-medium leading-relaxed">
                Upgrade your home or office to the fastest and safest internet ever made. It is clean, private, and works instantly.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-6">
                <Link
                  href="/what-is-lifi"
                  className="glow-cyan inline-flex items-center justify-center gap-2.5 h-14 px-10 rounded-2xl text-[#0D2240] font-black text-sm tracking-wider transition-all duration-300 hover:scale-[1.04] hover:shadow-[0_0_30px_rgba(0,194,199,0.4)] w-full sm:w-auto"
                  style={{ background: 'linear-gradient(135deg, #00C2C7 0%, #0FB89A 100%)' }}
                >
                  What is LiFi?
                  <motion.span animate={{ x: [0, 4, 0] }} transition={{ repeat: Infinity, duration: 1.5, ease: 'easeInOut' }}>
                    <ArrowRight size={16} />
                  </motion.span>
                </Link>

                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center gap-2 h-14 px-10 rounded-2xl font-bold text-sm tracking-wider border-2 border-white/10 text-white hover:border-white/40 hover:bg-white/5 bg-transparent transition-all duration-300 w-full sm:w-auto"
                >
                  Request a Demo
                </Link>
              </div>

              <div className="mb-12 flex items-center justify-center gap-2 text-xs font-mono text-blue-200/70">
                <Mail size={14} className="text-[#00C2C7]" />
                <span>Sales ID:</span>
                <a
                  href="mailto:rupali@lifilumen.com"
                  className="text-white hover:text-[#00C2C7] underline underline-offset-4 font-semibold transition-colors"
                >
                  rupali@lifilumen.com
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 pt-8 border-t border-white/10 max-w-2xl mx-auto text-left sm:text-center">
                {[
                  { icon: Sparkles, label: 'Fast Active Ready' },
                  { icon: ShieldCheck, label: 'Military-Grade Security' },
                  { icon: Sliders, label: 'Zero Router Congestion' },
                ].map((feat, fIdx) => {
                  const FeatIcon = feat.icon;
                  return (
                    <div key={fIdx} className="flex sm:flex-col items-center gap-3 sm:gap-1.5 justify-start sm:justify-center">
                      <FeatIcon size={14} className="text-[var(--lumen-cyan)] shrink-0" />
                      <span className="text-xs font-mono font-medium tracking-wide text-blue-200/60 uppercase">{feat.label}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
