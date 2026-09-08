import Image from 'next/image';

export default function RouterHeroSection() {
  return (
    <section className="relative min-h-[min(100svh,880px)] overflow-hidden bg-[#0D2240]">
      <Image
        src="/images/lifi_wifi/lifi_wifi.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-right"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(13,34,64,0.92) 0%, rgba(13,34,64,0.75) 36%, rgba(13,34,64,0.25) 60%, transparent 78%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,880px)] max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32 lg:pb-24 lg:pt-36">
        <div className="max-w-xl translate-y-8 sm:translate-y-12 lg:translate-y-16">
          <h1 className="!m-0 text-[clamp(2.25rem,5vw,3.75rem)] font-normal leading-[1.08] tracking-[-0.03em] text-[#EBF5FF]">
            Wi-Fi 7 meets
            <br />
            light-speed Li-Fi.
          </h1>
          <p className="mt-6 max-w-md text-sm font-normal leading-[1.75] text-white/70 sm:text-[15px]">
            One hub for whole-home coverage, optical high-speed internet, and DePIN rewards —
            without stacking separate boxes.
          </p>
        </div>
      </div>
    </section>
  );
}
