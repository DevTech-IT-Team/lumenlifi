'use client';

import React, { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion } from 'framer-motion';

const SCROLL_POINTS = [
  {
    id: 'router',
    title: 'Router Box.',
    body: 'Plug your house internet feed into the LumenFi routing box.',
  },
  {
    id: 'poe',
    title: 'PoE Injector.',
    body: 'Combine data and power into one cable run.',
  },
  {
    id: 'ap',
    title: 'RevF Controller.',
    body: 'Connect the powered line to the RevF Access Point.',
  },
  {
    id: 'antennas',
    title: 'Photonic Antennas.',
    body: 'Mount ceiling antennas to broadcast light cones.',
  },
  {
    id: 'dongles',
    title: 'USB LiFi Dongles.',
    body: 'Plug dongles into laptops to catch optical signals.',
  },
];

const POINT_COUNT = SCROLL_POINTS.length;
const VIDEO_SCRUB_SECONDS = 9.7;
/** Higher = snappier follow; lower = silkier lag */
const SMOOTHING = 10;

function clamp(value, min, max) {
  return Math.min(max, Math.max(min, value));
}

export default function RevFSystemKitExplorer() {
  const trackRef = useRef(null);
  const videoRef = useRef(null);
  const rafRef = useRef(0);
  const durationRef = useRef(0);
  const targetProgressRef = useRef(0);
  const smoothProgressRef = useRef(0);
  const pendingTimeRef = useRef(null);
  const seekingRef = useRef(false);
  const lastAppliedRef = useRef(0);
  const lastFrameRef = useRef(0);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onLoadedMetadata = () => {
      durationRef.current = video.duration || 0;
      video.pause();
      video.currentTime = 0;
      lastAppliedRef.current = 0;
    };

    const flushPendingSeek = () => {
      seekingRef.current = false;
      const pending = pendingTimeRef.current;
      if (pending == null) return;
      if (Math.abs(lastAppliedRef.current - pending) < 0.035) {
        pendingTimeRef.current = null;
        return;
      }
      pendingTimeRef.current = null;
      seekingRef.current = true;
      lastAppliedRef.current = pending;
      try {
        if (typeof video.fastSeek === 'function') video.fastSeek(pending);
        else video.currentTime = pending;
      } catch {
        seekingRef.current = false;
      }
    };

    video.addEventListener('loadedmetadata', onLoadedMetadata);
    video.addEventListener('seeked', flushPendingSeek);
    if (video.readyState >= 1) onLoadedMetadata();

    return () => {
      video.removeEventListener('loadedmetadata', onLoadedMetadata);
      video.removeEventListener('seeked', flushPendingSeek);
    };
  }, []);

  useEffect(() => {
    const track = trackRef.current;
    if (!track) return;

    let running = true;
    let seekUnlockTimer = 0;

    const readScrollProgress = () => {
      const rect = track.getBoundingClientRect();
      const trackHeight = track.offsetHeight;
      const viewport = window.innerHeight;
      const scrollable = Math.max(1, trackHeight - viewport);
      const scrolled = clamp(-rect.top, 0, scrollable);
      return scrolled / scrollable;
    };

    const queueSeek = (time) => {
      const video = videoRef.current;
      if (!video || video.readyState < 1) return;

      // Quantize to ~30fps — fewer conflicting seeks
      const quantized = Math.round(time * 30) / 30;
      pendingTimeRef.current = quantized;

      if (seekingRef.current) return;
      if (Math.abs(lastAppliedRef.current - quantized) < 0.035) {
        pendingTimeRef.current = null;
        return;
      }

      seekingRef.current = true;
      lastAppliedRef.current = quantized;
      pendingTimeRef.current = null;

      try {
        if (typeof video.fastSeek === 'function') video.fastSeek(quantized);
        else video.currentTime = quantized;
      } catch {
        seekingRef.current = false;
      }

      window.clearTimeout(seekUnlockTimer);
      seekUnlockTimer = window.setTimeout(() => {
        if (!seekingRef.current) return;
        seekingRef.current = false;
        if (pendingTimeRef.current != null) queueSeek(pendingTimeRef.current);
      }, 90);
    };

    const tick = (now) => {
      if (!running) return;

      const last = lastFrameRef.current || now;
      const dt = Math.min(0.05, Math.max(0.001, (now - last) / 1000));
      lastFrameRef.current = now;

      targetProgressRef.current = readScrollProgress();

      // Frame-rate independent exponential smoothing
      const alpha = 1 - Math.exp(-SMOOTHING * dt);
      const prev = smoothProgressRef.current;
      const target = targetProgressRef.current;
      smoothProgressRef.current =
        Math.abs(target - prev) < 0.00008 ? target : prev + (target - prev) * alpha;

      const progress = smoothProgressRef.current;
      const duration = durationRef.current;
      const scrubEnd = Math.min(VIDEO_SCRUB_SECONDS, duration || VIDEO_SCRUB_SECONDS);

      if (duration > 0) {
        queueSeek(progress * scrubEnd);
      }

      const nextIndex = Math.min(
        POINT_COUNT - 1,
        Math.floor(progress * POINT_COUNT + 0.001)
      );
      setActiveIndex((prevIndex) => (prevIndex === nextIndex ? prevIndex : nextIndex));

      rafRef.current = window.requestAnimationFrame(tick);
    };

    targetProgressRef.current = readScrollProgress();
    smoothProgressRef.current = targetProgressRef.current;
    lastFrameRef.current = performance.now();
    rafRef.current = window.requestAnimationFrame(tick);

    return () => {
      running = false;
      window.clearTimeout(seekUnlockTimer);
      if (rafRef.current) window.cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const active = SCROLL_POINTS[activeIndex];

  return (
    <section
      id="concept-runbook"
      ref={trackRef}
      className="relative w-full scroll-mt-28"
      style={{ height: `${POINT_COUNT * 180}vh`, backgroundColor: '#C2D7E7' }}
      aria-label="RevF System Kit scroll explorer"
    >
      <div
        className="sticky top-0 flex h-svh w-full overflow-hidden"
        style={{ backgroundColor: '#C2D7E7' }}
      >
        <div className="grid h-full w-full grid-cols-1 lg:grid-cols-5">
          {/* Left — text only */}
          <div
            className="relative flex h-full items-center px-6 py-10 sm:px-10 lg:col-span-2 lg:px-12 xl:px-16"
            style={{ backgroundColor: '#C2D7E7' }}
          >
            <div className="relative w-full max-w-md">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -6 }}
                  transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                >
                  <h2
                    className="!m-0 !text-[clamp(2.25rem,5vw,3.75rem)] !font-normal leading-[1.1] tracking-[-0.03em] text-slate-900"
                    style={{
                      fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif',
                      color: '#0f172a',
                    }}
                  >
                    {active.title}
                  </h2>
                  <p
                    className="!mt-4 !text-base !font-normal leading-relaxed text-[#0D2240]/80 sm:!text-lg"
                    style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                  >
                    {active.body}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          {/* Right — scroll-scrubbed video */}
          <div
            className="relative min-h-[45vh] lg:col-span-3 lg:min-h-0"
            style={{ backgroundColor: '#C2D7E7' }}
          >
            <video
              ref={videoRef}
              muted
              playsInline
              preload="auto"
              className="pointer-events-none absolute inset-0 h-full w-full object-cover"
              aria-hidden="true"
            >
              <source src="/videos/prdvid.mp4" type="video/mp4" />
            </video>
          </div>
        </div>
      </div>
    </section>
  );
}
