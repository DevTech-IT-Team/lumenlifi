'use client';

import { useRef, useState } from 'react';

export default function MainLiFiVideoSection() {
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);

  const toggleSound = () => {
    const video = videoRef.current;
    if (!video) return;

    video.muted = !video.muted;
    setIsMuted(video.muted);
    if (video.paused) video.play().catch(() => {});
  };

  return (
    <section id="main-lifi-video" className="page-screen relative z-10 flex !py-5 section-wash-white" aria-labelledby="main-lifi-video-title">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[80vh] w-[90vw] max-w-full -translate-x-1/2 -translate-y-1/2 rounded-full bg-[radial-gradient(ellipse,rgba(0,194,199,0.1),transparent_68%)] blur-3xl" />

      <div className="relative z-10 mx-auto w-full max-w-6xl">
        <div className="relative w-full overflow-hidden rounded-lg shadow-[0_24px_70px_rgba(13,34,64,0.15)]">

          <div className="relative aspect-video w-full overflow-hidden rounded-b-lg bg-[#020817]">
            <img src="/images/hero/hero.png" alt="Lumen LiFi main video" className="block h-full w-full object-cover" />
            {/* <video
              ref={videoRef}
              autoPlay
              loop
              muted
              playsInline
              preload="auto"
              className="block h-full w-full object-contain"
              aria-label="Lumen LiFi main video"
            >
              <source src="/videos/main.mp4" type="video/mp4" />
            </video> */}

            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-20 bg-gradient-to-b from-transparent to-[rgba(6,22,96,0.6)]" />

            {/* <button
              type="button"
              onClick={toggleSound}
              className="absolute bottom-4 right-4 z-10 flex h-12 w-12 items-center justify-center rounded-full border border-[var(--lumen-cyan)]/40 bg-[#0A2280]/75 text-[var(--lumen-cyan)] shadow-[0_8px_24px_rgba(0,0,0,0.35)] backdrop-blur-md transition-all duration-200 hover:scale-105 hover:bg-[#0A2280]/90 focus:outline-none focus:ring-2 focus:ring-[var(--lumen-cyan)] focus:ring-offset-2 focus:ring-offset-[#071b34] sm:bottom-6 sm:right-6"
              title={isMuted ? 'Unmute video' : 'Mute video'}
              aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
            >
              {isMuted ? (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3 3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4 9.91 6.09 12 8.18V4z" />
                </svg>
              ) : (
                <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
                </svg>
              )}
            </button> */}
          </div>
        </div>
      </div>
    </section>
  );
}
