import Image from 'next/image';
import enterpriseImg from '../../../../public/images/hero/enterprise.png';

export default function EnterpriseSection() {
  return (
    <section className="py-24 section-wash-navy relative overflow-hidden" id="enterprise">
      <div className="absolute inset-0 pointer-events-none opacity-10">
        <div className="absolute top-1/2 left-1/4 w-[600px] h-[600px] rounded-full bg-[var(--lumen-cyan)] blur-[140px]" />
      </div>
      <div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <span className="text-xs font-mono uppercase tracking-widest font-bold text-[var(--lumen-cyan)] mb-2 block">
            Business Settings
          </span>
          <h2 className="text-4xl font-black tracking-tight mb-6 text-white">Super Safe for Work</h2>
          <p className="text-slate-300 leading-relaxed mb-6">
            Because light cannot travel through solid building walls, your data stays perfectly safe inside your office. No one outside can see your files, track your data, or mess with your network connection.
          </p>
          <div className="inline-flex items-center gap-2 text-xs font-mono text-cyan-400 font-bold bg-cyan-950/40 border border-cyan-800/60 px-4 py-2 rounded-xl">
            🔒 Perfect Physical Safety Standard
          </div>
        </div>
        <div className="relative aspect-video rounded-2xl overflow-hidden bg-[#0A192F] border border-white/10 shadow-2xl flex flex-col items-center justify-center p-2 text-center font-mono text-xs">
          <div className="relative w-full h-full">
            <Image src={enterpriseImg} alt="Enterprise" fill loading="lazy" />
          </div>
          <div className="text-[10px] text-cyan-400/50 mt-1">Fast Light Systems Ready</div>
        </div>
      </div>
    </section>
  );
}
