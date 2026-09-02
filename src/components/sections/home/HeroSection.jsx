import { useLayoutEffect, useRef } from 'react';
import Link from 'next/link';
import { Instrument_Serif } from 'next/font/google';
import MainLiFiVideoSection from './MainLiFiVideoSection';

const speedOfLightFont = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  display: 'swap',
});

const STATS = [
  { value: '10 Gbps', label: 'Max connection speed' },
  { value: '100%', label: 'Radio-free connectivity' },
  { value: '8.5x', label: 'Faster than fiber' },
];

export default function HeroSection() {
  const speedOfLightRef = useRef(null);

  useLayoutEffect(() => {
    const line = speedOfLightRef.current;
    if (!line) return;

    line.style.setProperty('font-family', speedOfLightFont.style.fontFamily, 'important');
    line.style.setProperty('font-style', 'italic', 'important');
    line.style.setProperty('font-weight', '400', 'important');
    line.style.setProperty('letter-spacing', '0.01em', 'important');
  }, []);

  return (
    <>
      <section className="home-hero-landscape relative isolate h-[100svh] min-h-[100svh] w-full overflow-hidden text-white">
        <div className="absolute inset-0 -z-20 h-full w-full">
          <video
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
            className="absolute inset-0 h-full w-full object-cover object-top"
            aria-hidden="true"
          >
            <source src="/videos/vidd.mp4" type="video/mp4" />
          </video>
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-br from-transparent via-[#030914]/25 to-[#030914]/20" />

        <div className="relative z-10 mx-auto flex h-full min-h-[100svh] w-full max-w-[1380px] flex-col px-4 pb-6 pt-20 sm:px-6 sm:pb-8 sm:pt-28">
          <div className="flex flex-1 flex-col justify-center">
            <div className="max-w-xl lg:max-w-2xl">
              <h1 className="m-0 text-left font-semibold tracking-[-0.03em] text-white text-6xl">
                <span
                  className="block text-white"
                  style={{ fontSize: 'inherit', lineHeight: 'inherit' }}
                >
                  The{' '}
                  <span
                    ref={speedOfLightRef}
                    className={`${speedOfLightFont.className} text-white `}
                    style={{
                      fontSize: 'inherit',
                      lineHeight: 'inherit',
                      color: '#ffffff',
                      
                    }}
                  >
                    Speed of Light
                  </span>
                  .
                </span>
                <span
                  className="block font-sans text-white"
                  style={{
                    fontSize: 'inherit',
                    lineHeight: 'inherit',
                    fontFamily: 'var(--font-geist-sans), ui-sans-serif, system-ui, sans-serif',
                  }}
                >
                  Now in Your Living Room.
                </span>
              </h1>

              <p className="home-hero-landscape-copy">
                Lumen LiFi turns your everyday ceiling lights into a super-fast 10 Gbps internet
                connection. No Wi-Fi, no radio waves — just pure light-speed connectivity.
              </p>

              <Link href="/products" prefetch={false} className="home-hero-landscape-cta">
                Get started
              </Link>

              <div className="home-hero-landscape-stats">
                {STATS.map((stat) => (
                  <div key={stat.label} className="home-hero-landscape-stat">
                    <p className="home-hero-landscape-stat-value">{stat.value}</p>
                    <p className="home-hero-landscape-stat-label">{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <MainLiFiVideoSection /> */}
    </>
  );
}
