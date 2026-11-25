import { useEffect, useRef } from 'react';
import { Instrument_Serif } from 'next/font/google';

const speedOfLightFont = Instrument_Serif({
  subsets: ['latin'],
  weight: '400',
  style: 'italic',
  display: 'swap',
  adjustFontFallback: false,
});

export const HERO_POSTER = '/images/hero/vidpole-poster.webp';
const HERO_VIDEO_DESKTOP = '/videos/vidpole-1080.mp4'; // 0.9 MB, no audio track (was 3.9 MB)
const HERO_VIDEO_MOBILE = '/videos/vidpole-720.mp4'; // 0.3 MB

export default function HeroSection() {
  const videoRef = useRef(null);

  // Show the light poster first and start the background video only after the
  // page has loaded, so the video never competes with HTML, CSS, JS and fonts.
  // Skipped for Save-Data / 2G connections and reduced-motion users (poster stays).
  useEffect(() => {
    const video = videoRef.current;
    if (!video) return undefined;
    const conn = navigator.connection;
    if (conn && (conn.saveData || /(^|-)2g$/.test(conn.effectiveType || ''))) return undefined;
    if (window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches) return undefined;

    const start = () => {
      const wide = window.matchMedia && window.matchMedia('(min-width: 1024px)').matches;
      video.src = wide ? HERO_VIDEO_DESKTOP : HERO_VIDEO_MOBILE;
      video.load();
      const playing = video.play();
      if (playing && typeof playing.catch === 'function') playing.catch(() => {});
    };

    if (document.readyState === 'complete') {
      const id = window.setTimeout(start, 0);
      return () => window.clearTimeout(id);
    }
    window.addEventListener('load', start, { once: true });
    return () => window.removeEventListener('load', start);
  }, []);

  return (
    <>
      <section className="home-hero-landscape relative isolate min-h-[100svh] w-full overflow-hidden text-white">
        <div className="absolute inset-0 -z-20 h-full w-full">
          <video
            ref={videoRef}
            autoPlay
            loop
            muted
            playsInline
            preload="none"
            poster={HERO_POSTER}
            className="absolute inset-0 h-full w-full object-cover object-top"
            aria-hidden="true"
          />
        </div>

        <div
          className="pointer-events-none absolute inset-0 z-[1]"
          style={{
            background:
              'linear-gradient(90deg, rgba(3,9,20,0.78) 0%, rgba(3,9,20,0.52) 36%, rgba(3,9,20,0.18) 58%, transparent 78%)',
          }}
          aria-hidden="true"
        />

        <div className="relative z-10 mx-auto flex min-h-[100svh] w-full max-w-[1380px] flex-col px-4 pb-10 pt-24 sm:px-6 sm:pb-12 sm:pt-28">
          <div className="flex flex-1 flex-col justify-center">
            <div className="max-w-xl lg:max-w-2xl">
              <h1 className="home-hero-landscape-title m-0 text-left font-semibold tracking-[-0.03em] text-white">
                <span
                  className="block text-white"
                  style={{ fontSize: 'inherit', lineHeight: 'inherit' }}
                >
                  The{' '}
                  <span
                    className={`${speedOfLightFont.className} hero-serif text-white`}
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
                Your connection, Your choice! Enjoy everyday{' '}
                <span className="whitespace-nowrap" style={{ fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>
                  Wi-Fi
                </span>{' '}
                and light-speed{' '}
                <span className="whitespace-nowrap" style={{ fontSize: 'inherit', fontWeight: 'inherit', lineHeight: 'inherit' }}>
                  Li-Fi
                </span>{' '}
                working seamlessly together. Lumen LiFi’s light Lamps deliver ultra-fast internet exactly where you need it.
              </p>

              <div className="!mt-8">
                <p
                  className="!m-0 !text-2xl !font-semibold tracking-[-0.03em] text-white sm:!text-3xl"
                  style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
                >
                  High-speed{' '}
                  <span
                    className={`${speedOfLightFont.className} hero-serif !text-[1.08em] !font-normal italic text-white`}
                    style={{
                      fontFamily: speedOfLightFont.style.fontFamily,
                      fontSize: '1.08em',
                      lineHeight: 'inherit',
                    }}
                  >
                    WiFi
                  </span>
                  {' & '}
                  <span
                    className={`${speedOfLightFont.className} hero-serif !text-[1.08em] !font-normal italic text-white`}
                    style={{
                      fontFamily: speedOfLightFont.style.fontFamily,
                      fontSize: '1.08em',
                      lineHeight: 'inherit',
                    }}
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
    </>
  );
}
