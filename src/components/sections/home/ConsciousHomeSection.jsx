import { useState } from 'react';
import Link from 'next/link';
import { ArrowRight, Lightbulb, Home, ShieldCheck, Zap } from 'lucide-react';

const features = [
  {
    id: 'lighting',
    icon: Lightbulb,
    title: 'Automatic Smart Lighting',
    desc: 'Invisible light connects devices as you walk in — no apps, no switches.',
  },
  {
    id: 'vr',
    icon: Home,
    title: 'Virtual Living Room',
    desc: 'Ceiling light streams ultra-fast data for lag-free 3D and headset experiences.',
  },
  {
    id: 'safe',
    icon: ShieldCheck,
    title: 'Private Light Signal',
    desc: 'Light cannot pass through walls, so your network stays inside the room.',
  },
  {
    id: 'voice',
    icon: Zap,
    title: 'Instant Conversations',
    desc: 'Voice assistants respond the moment you finish speaking.',
  },
];

const stats = [
  { value: '100 Gbps', label: 'Peak Speed' },
  { value: '<2 ms', label: 'Latency' },
  { value: '0 RF', label: 'Interference' },
  { value: 'Private', label: 'Signal' },
];

function RouterHero() {
  return (
    <div className="conscious-router" aria-hidden="true">
      <div className="conscious-router-glow" />
      <svg viewBox="0 0 420 460" className="conscious-router-svg">
        <defs>
          <radialGradient id="ch-cone" cx="50%" cy="8%" r="72%">
            <stop offset="0%" stopColor="#00C2C7" stopOpacity="0.42" />
            <stop offset="55%" stopColor="#00C2C7" stopOpacity="0.08" />
            <stop offset="100%" stopColor="#00C2C7" stopOpacity="0" />
          </radialGradient>
          <linearGradient id="ch-body" x1="20%" y1="0%" x2="80%" y2="100%">
            <stop offset="0%" stopColor="#2A4A6E" />
            <stop offset="100%" stopColor="#0B1A2E" />
          </linearGradient>
          <filter id="ch-soft" x="-40%" y="-40%" width="180%" height="180%">
            <feGaussianBlur stdDeviation="8" />
          </filter>
        </defs>
        <ellipse cx="210" cy="300" rx="150" ry="28" fill="#00C2C7" opacity="0.08" filter="url(#ch-soft)" />
        <path className="conscious-beam" d="M150 56 L270 56 L360 300 L60 300 Z" fill="url(#ch-cone)" />
        <g className="conscious-lines" stroke="#00C2C7" fill="none">
          <path d="M48 118 H372" />
          <path d="M78 168 H342" />
          <path d="M112 218 H308" />
        </g>
        <g className="conscious-router-core">
          <ellipse cx="210" cy="58" rx="78" ry="16" fill="#0A1628" />
          <ellipse cx="210" cy="50" rx="78" ry="16" fill="url(#ch-body)" stroke="#00C2C7" strokeOpacity="0.55" />
          <ellipse cx="210" cy="48" rx="36" ry="7" fill="#07111f" />
          <circle cx="210" cy="47" r="4" fill="#00C2C7" className="conscious-led" />
        </g>
      </svg>
    </div>
  );
}

export default function ConsciousHomeSection() {
  const [activeIndex, setActiveIndex] = useState(0);

  return (
    <section id="conscious-home" className="conscious-home page-screen section-wash-white">
      <div className="conscious-home-inner">
        <div className="conscious-home-top">
          <div className="conscious-copy">
            <p className="conscious-eyebrow">Welcome to the future</p>
            <h2 className="conscious-heading">The Conscious Home</h2>
            <p className="conscious-lead">
              Powered by Light.
              <span> Faster. Safer. Smarter than Wi-Fi.</span>
            </p>

            <div className="conscious-actions">
              <Link href="/products" prefetch={false} className="conscious-btn-primary">
                Order Now
                <ArrowRight className="h-4 w-4" />
              </Link>
              <Link href="/what-is-lifi" prefetch={false} className="conscious-btn-secondary">
                <span className="conscious-play" aria-hidden="true">
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
                    <path d="M8 5v14l11-7z" />
                  </svg>
                </span>
                Watch Demo
              </Link>
            </div>

            <div className="conscious-stats">
              {stats.map((s) => (
                <div key={s.label}>
                  <p className="conscious-stat-value">{s.value}</p>
                  <p className="conscious-stat-label">{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          <RouterHero />
        </div>

        <div className="conscious-cards">
          {features.map((item, index) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.id}
                href="/products"
                prefetch={false}
                className={`conscious-card ${index === activeIndex ? 'is-active' : ''}`}
                onMouseEnter={() => setActiveIndex(index)}
                onFocus={() => setActiveIndex(index)}
              >
                <Icon className="h-5 w-5 text-[#0D2240]" />
                <h3>{item.title}</h3>
                <p>{item.desc}</p>
                <span>
                  Learn More
                  <ArrowRight className="h-3.5 w-3.5" />
                </span>
              </Link>
            );
          })}
        </div>

        <div className="conscious-progress">
          <span>0{activeIndex + 1}</span>
          <div className="conscious-progress-track">
            <div style={{ width: `${((activeIndex + 1) / features.length) * 100}%` }} />
          </div>
          <span>0{features.length}</span>
        </div>
      </div>
    </section>
  );
}
