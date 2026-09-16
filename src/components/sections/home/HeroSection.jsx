import { useLayoutEffect, useRef } from 'react';
import { Instrument_Serif } from 'next/font/google';
import MainLiFiVideoSection from './MainLiFiVideoSection';

const speedOfLightFont = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  display: 'swap',
});

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
            <source
              src="/videos/vidpole.mp4"
              type="video/mp4"
            />
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
              Lumen LiFi turns your everyday light poles into a high-speed Internet connection. With Wi-Fi and LiFi working together, enjoy seamless, light-speed connectivity.

              </p>

              <div className="!mt-8">
                <p
                  className="!m-0 !text-2xl !font-semibold tracking-[-0.03em] text-white sm:!text-3xl"
                  style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
                >
                  High-speed{' '}
                  <span
                    className={`${speedOfLightFont.className} !font-normal italic text-white`}
                    style={{ fontFamily: speedOfLightFont.style.fontFamily }}
                  >
                    WiFi
                  </span>
                  {' & '}
                  <span
                    className={`${speedOfLightFont.className} !font-normal italic text-white`}
                    style={{ fontFamily: speedOfLightFont.style.fontFamily }}
                  >
                    LiFi
                  </span>
                  {' — together'}
                </p>
                <p
                  className="!mb-0 !mt-2 !text-sm !font-normal text-white/65 sm:!text-base"
                  style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                >
                  One seamless connection powered by both.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* <MainLiFiVideoSection /> */}
    </>
  );
}
