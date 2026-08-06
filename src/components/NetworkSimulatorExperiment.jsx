import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import {
  Wifi,
  Sun,
  ShieldAlert,
  ShieldCheck,
  Unlock
} from 'lucide-react';

export default function WhyJFVideoSection() {
  const [isMuted, setIsMuted] = useState(true);
  const videoRef = useRef(null);

  const toggleSound = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(videoRef.current.muted);
    }
  };

  return (
    <section
      className="relative overflow-hidden"
      style={{ padding: '10px 25px 72px' }}
    >
      {/* subtle radial glow */}
      <div style={{
        position: 'absolute', top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '900px', height: '500px',
        background: 'radial-gradient(ellipse, rgba(255,210,0,0.06), transparent 70%)',
        filter: 'blur(60px)', pointerEvents: 'none',
      }} />

      {/* Heading */}
      <div style={{ textAlign: 'center', marginBottom: '40px', position: 'relative', zIndex: 2 }}>
        <span style={{
          display: 'inline-block',
          fontSize: '11px', fontWeight: '800',
          letterSpacing: '0.22em', textTransform: 'uppercase',
          color: 'var(--lumen-cyan)', marginBottom: '18px',
        }}>LUMEN LIFI</span>
      </div>

      {/* Video Wrapper */}
      <div style={{
        position: 'relative', zIndex: 2,
        maxWidth: '1100px',
        margin: '0 auto',
        borderRadius: '20px',
        overflow: 'hidden',
        border: '1px solid rgba(255,255,255,0.12)',
        boxShadow: '0 40px 100px rgba(0,0,0,0.5), 0 0 0 1px rgba(255,210,0,0.08)',
        aspectRatio: '16/9',
      }}>
        <video
          ref={videoRef}
          autoPlay loop muted playsInline
          style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
        >
          <source src="/images/lifi/what_is_lifi.mp4" type="video/mp4" />
        </video>

        {/* Audio Control Icon Button */}
        <button
          onClick={toggleSound}
          style={{
            position: 'absolute',
            bottom: '24px',
            right: '24px',
            zIndex: 10,
            background: 'rgba(10, 34, 128, 0.75)',
            border: '1px solid rgba(255, 210, 0, 0.4)',
            backdropFilter: 'blur(8px)',
            color: '#FFD200',
            width: '46px',
            height: '46px',
            borderRadius: '50%',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            cursor: 'pointer',
            transition: 'transform 0.2s ease, background 0.2s ease',
            boxShadow: '0 8px 24px rgba(0,0,0,0.4)',
          }}
          title={isMuted ? 'Unmute Video' : 'Mute Video'}
          aria-label={isMuted ? 'Unmute video audio' : 'Mute video audio'}
        >
          {isMuted ? (
            /* Mute Icon SVG */
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M16.5 12c0-1.77-1.02-3.29-2.5-4.03v2.21l2.45 2.45c.03-.2.05-.41.05-.63zm2.5 0c0 .94-.2 1.82-.54 2.64l1.51 1.51C20.63 14.91 21 13.5 21 12c0-4.28-2.99-7.86-7-8.77v2.06c2.89.86 5 3.54 5 6.71zM4.27 3L3 4.27 7.73 9H3v6h4l5 5v-6.73l4.25 4.25c-.67.52-1.42.93-2.25 1.18v2.06c1.38-.31 2.63-.95 3.69-1.81L19.73 21 21 19.73 4.27 3zM12 4L9.91 6.09 12 8.18V4z" />
            </svg>
          ) : (
            /* Sound / Unmute Icon SVG */
            <svg width="22" height="22" viewBox="0 0 24 24" fill="currentColor">
              <path d="M3 9v6h4l5 5V4L7 9H3zm13.5 3c0-1.77-1.02-3.29-2.5-4.03v8.05c1.48-.73 2.5-2.25 2.5-4.02zM14 3.23v2.06c2.89.86 5 3.54 5 6.71s-2.11 5.85-5 6.71v2.06c4.01-.91 7-4.49 7-8.77s-2.99-7.86-7-8.77z" />
            </svg>
          )}
        </button>

        {/* subtle bottom fade into next section */}
        <div style={{
          position: 'absolute', bottom: 0, left: 0, right: 0,
          height: '80px',
          background: 'linear-gradient(to bottom, transparent, rgba(6,22,96,0.6))',
          pointerEvents: 'none',
        }} />
      </div>
    </section>
  );
}