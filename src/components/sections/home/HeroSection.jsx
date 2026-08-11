import Link from 'next/link';
import Image from 'next/image';
import dynamic from 'next/dynamic';
import logoPl from '/public/brand/logo.webp';

const HeroVisual = dynamic(() => import('./HeroVisual'), {
  ssr: false,
  loading: () => <div className="min-h-[420px] sm:min-h-[520px]" aria-hidden="true" />,
});

export default function HeroSection() {
  return (
    <section className="relative w-full pt-32 pb-20 overflow-hidden lumen-hero-wash">
      <div className="absolute inset-0 pointer-events-none z-0 lumen-grid-pattern-hero opacity-45" />

      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center mb-16">
        <div className="relative w-full max-w-[440px] sm:max-w-[560px] md:max-w-[640px] lg:max-w-[720px] aspect-[360/110] ">
          <Image
            src={logoPl}
            alt="LumenFi"
            fill
            priority
            sizes="(max-width: 640px) 100vw, (max-width: 768px) 560px, (max-width: 1024px) 640px, 720px"
            className="object-contain"
          />
        </div>
        <h1 className="text-5xl sm:text-6xl md:text-7xl font-black tracking-tight leading-[1.25] sm:leading-[1.2] mb-6 max-w-4xl text-[#0D2240] overflow-visible pb-1">
          The Speed of Light.{' '}
          <span className="text-gradient-lumen">Now in Your Living Room.</span>
        </h1>

        <p className="text-lg md:text-xl max-w-2xl mb-8 leading-relaxed text-[#4A6080]">
          The world&apos;s first home Internet provider run entirely on invisible infrared light (Li-Fi) not radio waves (Wi-Fi).
        </p>

        <div className="flex flex-col sm:flex-row items-center gap-4">
          <Link
            href="/what-is-lifi"
            prefetch={false}
            className="glow-blue inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl text-white font-bold text-sm tracking-wide shadow-lg transition-all hover:scale-[1.03] hover:shadow-xl w-full sm:w-auto"
            style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
          >
            What is LiFi?
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </Link>
          <Link
            href="/products"
            prefetch={false}
            className="inline-flex items-center justify-center gap-2 h-14 px-8 rounded-2xl font-bold text-sm tracking-wide border-2 transition-all hover:scale-[1.02] w-full sm:w-auto border-[var(--lumen-blue)] text-[var(--lumen-blue)] bg-[rgba(26,110,191,0.03)]"
          >
            Order Now
          </Link>
        </div>
      </div>

      <HeroVisual />
    </section>
  );
}
