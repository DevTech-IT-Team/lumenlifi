'use client';

import React, { useEffect, useRef, useState, useMemo, useCallback } from 'react';

// Video Data Collection
const rawVideos = [
  {
    src: '/videos/what is lifi.mp4',
    title: 'What is LiFi?',
    subtitle: 'Start Here',
    metric: 'LiFi 101',
    description: 'Discover how LiFi uses light instead of radio waves to provide ultra-fast, secure, and interference-free wireless communication.',
    accent: '#38bdf8',
    glow: 'rgba(56,189,248,0.45)',
  },
  {
    src: '/videos/main.mp4',
    title: 'How LiFi Delivers Internet Through Light',
    subtitle: 'How It Works',
    metric: 'Light Speed',
    description: 'Learn the core physics behind light modulation technology and how digital light emitters create high-speed data pipelines.',
    accent: '#00c2c7',
    glow: 'rgba(0,194,199,0.45)',
  },
  {
    src: '/videos/lifi vs wifi.mp4',
    title: "LiFi vs WiFi — What's the Difference?",
    subtitle: 'See The Difference',
    metric: 'LiFi vs WiFi',
    description: 'Compare spectrum availability, bandwidth capabilities, latency rates, and security boundaries between light and radio signals.',
    accent: '#818cf8',
    glow: 'rgba(129,140,248,0.45)',
  },
  {
    src: '/videos/walls advantage.mp4',
    title: "Secure by Design: Light Doesn't Pass Through Walls",
    subtitle: 'Private By Nature',
    metric: 'More Secure',
    description: 'Understand physical-layer security advantages where light confinement inherently blocks external eavesdropping and signal leakage.',
    accent: '#c084fc',
    glow: 'rgba(192,132,252,0.45)',
  },
  {
    src: '/videos/lifi main.mp4',
    title: 'See LiFi in Real-World Environments',
    subtitle: 'Made For Life',
    metric: 'Real World',
    description: 'Explore live deployments in hospitals, defense facilities, corporate offices, and aviation cabins where RF interference is prohibited.',
    accent: '#f59e0b',
    glow: 'rgba(245,158,11,0.42)',
  },
  {
    src: '/videos/lifi explain.mp4',
    title: 'Inside the Future of LiFi Technology',
    subtitle: 'Future Ready',
    metric: 'Next Generation',
    description: 'Peek into upcoming optical innovations, gigabit-speed semiconductor receivers, and seamless spatial tracking systems.',
    accent: '#ec4899',
    glow: 'rgba(236,72,153,0.42)',
  },
  {
    src: '/videos/home kit.mp4',
    title: 'Smart Home Control with Apple HomeKit',
    subtitle: 'A Smarter Home',
    metric: 'HomeKit',
    description: 'Integration possibilities for ultra-low latency smart home automation, high-speed streaming, and connected ambient lighting.',
    accent: '#10b981',
    glow: 'rgba(16,185,129,0.42)',
  },
];

const validVideos = rawVideos.filter((v) => v && v.src);

/**
 * Scaled 9:16 Video Card
 */
const VideoCard = React.memo(({ video, isActive, isPlaying, onTogglePlay, onEnded, onClick }) => {
  const videoRef = useRef(null);
  const [hasEnded, setHasEnded] = useState(false);

  useEffect(() => {
    const player = videoRef.current;
    if (!player) return;

    if (isPlaying) {
      if (hasEnded) {
        player.currentTime = 0;
        setHasEnded(false);
      }
      player.muted = false;
      player.play().catch(() => { });
    } else {
      player.pause();
    }
  }, [hasEnded, isPlaying]);

  const handlePlay = () => {
    document.querySelectorAll('[data-lifi-carousel-video]').forEach((otherPlayer) => {
      if (otherPlayer !== videoRef.current && !otherPlayer.paused) {
        otherPlayer.pause();
      }
    });
  };

  const handleEnded = () => {
    setHasEnded(true);
    onEnded();
  };

  const handleButtonClick = (e) => {
    e.stopPropagation();
    onTogglePlay();
  };

  return (
    <article
      onClick={onClick}
      className={`relative flex-shrink-0 cursor-pointer overflow-hidden rounded-2xl border-2 transition-all duration-300 select-none ${
        isActive ? 'scale-105 z-20' : 'opacity-70 hover:opacity-100 hover:scale-[1.02]'
      }`}
      style={{
        height: 'clamp(320px, 54svh, 540px)',
        aspectRatio: '9 / 16',
        borderColor: video.accent,
        boxShadow: isActive
          ? `0 0 40px ${video.glow}, 0 10px 30px rgba(0,0,0,0.8)`
          : `0 0 18px ${video.glow}`,
        backgroundColor: '#061022',
      }}
    >
      <video
        ref={videoRef}
        data-lifi-carousel-video
        src={video.src}
        className="absolute inset-0 h-full w-full object-cover"
        loop={false}
        muted={!isPlaying}
        playsInline
        preload="metadata"
        onPlay={handlePlay}
        onEnded={handleEnded}
        aria-label={video.title}
      />

      {/* Gradient overlay */}
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />

      {/* Scaled Play / Pause Toggle Button */}
      <button
        type="button"
        onClick={handleButtonClick}
        className="absolute left-1/2 top-1/2 z-20 flex h-14 w-14 -translate-x-1/2 -translate-y-1/2 items-center justify-center rounded-full border border-white/30 bg-[#030712]/75 text-white shadow-2xl backdrop-blur-md transition-all hover:scale-110 active:scale-95"
        aria-label={isPlaying ? `Pause ${video.title}` : `${hasEnded ? 'Replay' : 'Play'} ${video.title}`}
      >
        {isPlaying ? (
          /* Pause Icon */
          <svg className="h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M6 19h4V5H6v14zm8-14v14h4V5h-4z" />
          </svg>
        ) : (
          /* Play Icon */
          <svg className="ml-1 h-6 w-6 fill-current" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8 5v14l11-7z" />
          </svg>
        )}
      </button>
    </article>
  );
});

VideoCard.displayName = 'VideoCard';

/**
 * Draggable Horizontal Video Carousel
 */
function VideoCarousel({ videos, activeIndex, playingIndex, onSelectVideo, onTogglePlay, onVideoEnded }) {
  const containerRef = useRef(null);
  const [isDragging, setIsDragging] = useState(false);
  const [startX, setStartX] = useState(0);
  const [scrollLeft, setScrollLeft] = useState(0);

  const handleMouseDown = (e) => {
    setIsDragging(true);
    setStartX(e.pageX - containerRef.current.offsetLeft);
    setScrollLeft(containerRef.current.scrollLeft);
  };

  const handleMouseLeaveOrUp = () => {
    setIsDragging(false);
  };

  const handleMouseMove = (e) => {
    if (!isDragging) return;
    e.preventDefault();
    const x = e.pageX - containerRef.current.offsetLeft;
    const walk = (x - startX) * 1.8;
    containerRef.current.scrollLeft = scrollLeft - walk;
  };

  const handleScroll = useCallback(() => {
    if (!containerRef.current) return;
    const container = containerRef.current;
    const centerPosition = container.scrollLeft + container.offsetWidth / 2;

    const children = Array.from(container.children);
    let closestIndex = 0;
    let minDistance = Infinity;

    children.forEach((child, idx) => {
      const childCenter = child.offsetLeft + child.offsetWidth / 2;
      const distance = Math.abs(centerPosition - childCenter);
      if (distance < minDistance) {
        minDistance = distance;
        closestIndex = idx;
      }
    });

    if (closestIndex !== activeIndex) {
      onSelectVideo(closestIndex);
    }
  }, [activeIndex, onSelectVideo]);

  return (
    <div
      ref={containerRef}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseLeaveOrUp}
      onMouseLeave={handleMouseLeaveOrUp}
      onMouseMove={handleMouseMove}
      onScroll={handleScroll}
      className="flex w-full snap-x snap-mandatory gap-6 overflow-x-auto py-6 px-[calc(50vw-150px)] [scrollbar-width:none] [&::-webkit-scrollbar]:hidden cursor-grab active:cursor-grabbing"
    >
      {videos.map((video, idx) => (
        <div key={`${video.src}-${idx}`} className="snap-center flex-shrink-0">
          <VideoCard
            video={video}
            isActive={idx === activeIndex}
            isPlaying={idx === playingIndex}
            onTogglePlay={() => onTogglePlay(idx)}
            onEnded={onVideoEnded}
            onClick={() => onSelectVideo(idx)}
          />
        </div>
      ))}
    </div>
  );
}

/**
 * Dynamic Information Panel
 */
function ActiveVideoInfo({ video }) {
  const [animateKey, setAnimateKey] = useState(0);

  useEffect(() => {
    setAnimateKey((prev) => prev + 1);
  }, [video]);

  return (
    <div className="flex flex-col items-center text-center max-w-2xl mx-auto px-6 min-h-[90px] justify-center">
      <style>{`
        @keyframes fadeSlideUp {
          from {
            opacity: 0;
            transform: translateY(8px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.95);
          }
          to {
            opacity: 1;
            transform: scale(1);
          }
        }
        .animate-fade-slide {
          animation: fadeSlideUp 350ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-scale-in {
          animation: scaleIn 300ms cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
      `}</style>

      {/* Badge Component */}
      <div
        key={`badge-${animateKey}`}
        className="animate-scale-in inline-flex items-center gap-2 rounded-full border px-3.5 py-0.5 mb-1.5 shadow-md backdrop-blur-md"
        style={{
          color: video.accent,
          borderColor: `${video.accent}60`,
          backgroundColor: 'rgba(6, 16, 34, 0.75)',
        }}
      >
        <span className="h-1.5 w-1.5 rounded-full animate-pulse" style={{ backgroundColor: video.accent }} />
        <span className="font-mono text-[11px] font-bold uppercase tracking-wider">
          {video.subtitle} • {video.metric}
        </span>
      </div>

      {/* Title */}
      <h3
        key={`title-${animateKey}`}
        className="animate-fade-slide text-lg sm:text-2xl font-extrabold tracking-tight text-white mb-1"
      >
        {video.title}
      </h3>

      {/* Description */}
      <p
        key={`desc-${animateKey}`}
        className="animate-fade-slide text-xs sm:text-sm leading-relaxed text-slate-300 max-w-lg line-clamp-2"
        style={{ animationDelay: '50ms' }}
      >
        {video.description}
      </p>
    </div>
  );
}

/**
 * Progress Dots Indicator
 */
function ProgressDots({ total, activeIndex, onSelect }) {
  return (
    <div className="flex items-center justify-center gap-2 py-1">
      {Array.from({ length: total }).map((_, idx) => (
        <button
          key={idx}
          onClick={() => onSelect(idx)}
          className={`h-2 rounded-full transition-all duration-300 focus:outline-none ${
            idx === activeIndex
              ? 'w-6 bg-white shadow-[0_0_8px_rgba(255,255,255,0.8)]'
              : 'w-2 bg-white/20 hover:bg-white/40'
          }`}
          aria-label={`Go to slide ${idx + 1}`}
        />
      ))}
    </div>
  );
}

/**
 * Main Video Section Architecture
 */
export default function HeroVisual() {
  const sectionRef = useRef(null);
  const [activeIndex, setActiveIndex] = useState(0);
  const [playingIndex, setPlayingIndex] = useState(null);

  const activeVideo = useMemo(() => validVideos[activeIndex] || validVideos[0], [activeIndex]);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return undefined;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) setPlayingIndex(null);
      },
      { threshold: 0.15 },
    );

    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const handleSelectVideo = useCallback((index) => {
    setActiveIndex(index);
    setPlayingIndex((current) => (current === index ? current : null));
  }, []);

  const handleTogglePlay = useCallback((index) => {
    setPlayingIndex((prev) => (prev === index ? null : index));
  }, []);

  const handleVideoEnded = useCallback(() => {
    setPlayingIndex(null);
  }, []);

  return (
    <section ref={sectionRef} className="relative w-full h-[100svh] overflow-hidden bg-[#030712] text-white font-sans flex flex-col justify-between py-3 sm:py-5">
      {/* Background Ambience */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden bg-[#02050f]">
        <div
          className="absolute left-1/2 top-0 h-[850px] w-full max-w-[1920px] -translate-x-1/2 bg-top bg-no-repeat opacity-50"
          style={{ backgroundImage: "url('/images/academy/bg.webp')", backgroundSize: '100% auto' }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#02050f]/30 via-[#02050f]/60 to-[#02050f]" />
      </div>

      {/* Section Header */}
      <div className="relative z-10 mx-auto flex max-w-7xl flex-col items-center px-6 text-center">
        <h2 className="text-2xl sm:text-4xl font-extrabold tracking-tight text-white drop-shadow-[0_0_25px_rgba(255,255,255,0.2)]">
          Discover LiFi in Action
        </h2>
      </div>

      {/* Video Carousel Container */}
      <div className="relative z-10 w-full my-auto">
        <VideoCarousel
          videos={validVideos}
          activeIndex={activeIndex}
          playingIndex={playingIndex}
          onSelectVideo={handleSelectVideo}
          onTogglePlay={handleTogglePlay}
          onVideoEnded={handleVideoEnded}
        />
      </div>

      <div className="relative z-10 w-full border-t border-white/10 max-w-3xl mx-auto my-0.5" />

      {/* Dynamic Information Panel & Dots */}
      <div className="relative z-10 w-full flex flex-col justify-end">
        <ActiveVideoInfo video={activeVideo} />
        <ProgressDots
          total={validVideos.length}
          activeIndex={activeIndex}
          onSelect={(idx) => {
            handleSelectVideo(idx);
          }}
        />
      </div>
    </section>
  );
}