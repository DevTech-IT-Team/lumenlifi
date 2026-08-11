import Image from 'next/image';
import heroImg from '../../../../public/images/hero/hero.png';

export default function HeroVisual() {
  return (
    <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
      <div className="relative w-full rounded-3xl overflow-hidden shadow-[0_24px_70px_rgba(13,34,64,0.15)] border bg-[#0D2240] border-[var(--lumen-border)]">
        <div className="w-full h-11 bg-[#0A192F] flex items-center px-4 gap-2 border-b border-white/5">
          <div className="w-3 h-3 rounded-full bg-[#FF5F56]/80" />
          <div className="w-3 h-3 rounded-full bg-[#FFBD2E]/80" />
          <div className="w-3 h-3 rounded-full bg-[#27C93F]/80" />
          <div className="mx-auto bg-[#0D2240] text-[11px] font-mono text-[var(--lumen-cyan)] px-4 py-1 rounded-md border border-white/5 tracking-wider">
            Lumen LiFi uses light instead of radio waves to give you faster internet, zero lag, better privacy, and no slowdowns.
          </div>
        </div>
        <div className="relative w-full aspect-[16/7.2] min-h-[320px] sm:min-h-[450px] md:min-h-[550px] lg:min-h-[600px]">
          <Image
            src={heroImg}
            alt="Lumen LiFi Ecosystem Matrix Graphic"
            fill
            priority
            loading="eager"
            quality={60}
            className="object-contain w-full h-full p-2"
            sizes="(max-width: 768px) 100vw, 450px"
          />
        </div>
      </div>

      <div className="grid grid-cols-3 gap-4 max-w-3xl mx-auto mt-12 pt-8 border-t border-dashed border-[var(--lumen-border)] text-center">
        {[
          { val: '10 Gbps', label: 'Top Speed' },
          { val: '80 sec', label: 'To download a huge movie' },
          { val: 'Zero RF', label: 'No radio waves' },
        ].map(({ val, label }) => (
          <div key={label} className="flex flex-col items-center">
            <div className="font-black text-xl sm:text-2xl md:text-3xl tracking-tight text-[var(--lumen-navy)]">{val}</div>
            <div className="text-[10px] sm:text-xs font-mono uppercase tracking-widest mt-1 text-[var(--lumen-muted)]">{label}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
