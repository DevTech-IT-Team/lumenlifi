'use client';

import { useEffect, useState } from 'react';
import Image from 'next/image';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const SCROLLER_IMAGES = [
   {
    src: '/images/pole/10.png',
    alt: 'LiFi pole with mounted monitors in a modern office',
    orientation: 'portrait',
    category: 'Workspace',
    title: 'Triple-screen workspace',
    desc: 'Integrated pole lighting, monitor mounts, and shelf space for your home office setup.',
  },
  {
    src: '/images/pole/11.png',
    alt: 'Brass modular LiFi pole in a contemporary living room',
    orientation: 'portrait',
    category: 'Living room',
    title: 'Family living space',
    desc: 'Modular brass shelving for photos, plants, and everyday tech — all in one connected pole.',
  },
  {
    src: '/images/pole/12.png',
    alt: 'White LiFi pole with TV in a minimalist room',
    orientation: 'portrait',
    category: 'Entertainment',
    title: 'Corner entertainment',
    desc: 'TV mount, LED accent light, and open shelves — LiFi and streaming in a small footprint.',
  },
  {
    src: '/images/pole/4.png',
    alt: 'Black LiFi pole in a luxury home office',
    orientation: 'portrait',
    category: 'Home office',
    title: 'Executive study',
    desc: 'Floor-to-ceiling pole with adjustable shelves, warm lighting, and hidden networking gear.',
  },
  {
    src: '/images/pole/7.png',
    alt: 'White LiFi pole in a classic living room',
    orientation: 'portrait',
    category: 'Classic home',
    title: 'Elegant living room',
    desc: 'Decor that fits traditional interiors — light, books, and LiFi tech on one beautiful pole.',
  },
  {
    src: '/images/pole/9.png',
    alt: 'Brass LiFi pole in an industrial-style room',
    orientation: 'portrait',
    category: 'Industrial',
    title: 'Warm industrial loft',
    desc: 'Brass-finished pole with vintage character, shelves for books, and connected devices.',
  },
 
];

const CATEGORIES = ['All', ...SCROLLER_IMAGES.map((item) => item.category)];

function getOffset(index, active, length) {
  let offset = index - active;
  if (offset > length / 2) offset -= length;
  if (offset < -length / 2) offset += length;
  return offset;
}

export default function PoleImageScroller() {
  const [active, setActive] = useState(0);
  const [category, setCategory] = useState('All');
  const [paused, setPaused] = useState(false);

  const filtered =
    category === 'All'
      ? SCROLLER_IMAGES
      : SCROLLER_IMAGES.filter((item) => item.category === category);

  const items = filtered.length ? filtered : SCROLLER_IMAGES;
  const count = items.length;
  const safeActive = ((active % count) + count) % count;

  useEffect(() => {
    setActive(0);
  }, [category]);

  useEffect(() => {
    if (paused || count < 2) return undefined;
    const id = window.setInterval(() => {
      setActive((prev) => (prev + 1) % count);
    }, 3500);
    return () => window.clearInterval(id);
  }, [paused, count]);

  const goPrev = () => setActive((prev) => (prev - 1 + count) % count);
  const goNext = () => setActive((prev) => (prev + 1) % count);

  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background: 'linear-gradient(180deg, #F4F8FC 0%, #D7E6F5 28%, #6B8FB0 58%, #0D2240 100%)',
      }}
      aria-label="LiFi Pole gallery"
      onMouseEnter={() => setPaused(true)}
      onMouseLeave={() => setPaused(false)}
    >
      <div className="mx-auto max-w-5xl px-4 text-center sm:px-6">
      
        <h2
          className="!mt-3 !m-0 !text-[clamp(1.85rem,4vw,2.85rem)] !font-bold leading-[1.1] tracking-[-0.03em] text-[#0D2240]"
          style={geist}
        >
          Inside the LiFi Pole
        </h2>
        <p
          className="!mx-auto !mt-4 max-w-lg !text-sm !font-normal leading-relaxed text-[#0D2240]/60 sm:!text-base"
          style={inter}
        >
          See the LiFi Pole in real rooms — hover any card for details.
        </p>
      </div>

      <div className="mx-auto mt-8 flex max-w-4xl flex-wrap items-center justify-center gap-2 px-4 sm:mt-10 sm:gap-2.5">
        {CATEGORIES.map((label) => {
          const isActive = category === label;
          return (
            <button
              key={label}
              type="button"
              onClick={() => setCategory(label)}
              className={`rounded-full px-4 py-2 text-xs !font-normal transition-colors sm:text-sm ${
                isActive
                  ? 'bg-[#0D2240] text-white'
                  : 'border border-[#0D2240]/25 bg-white/40 text-[#0D2240] hover:border-[#0D2240]/45'
              }`}
              style={inter}
            >
              {label}
            </button>
          );
        })}
      </div>

      <div className="relative mx-auto mt-10 h-[380px] w-full max-w-[90rem] px-2 sm:mt-12 sm:h-[450px] lg:h-[500px]">
        <div className="absolute inset-0">
          {items.map((item, index) => {
            const offset = getOffset(index, safeActive, count);
            const abs = Math.abs(offset);
            if (abs > 2) return null;

            const isPortrait = item.orientation === 'portrait';
            const isCenter = offset === 0;
            const scale = isCenter ? 1 : abs === 1 ? 0.86 : 0.74;
            const spreadRem = abs === 2 ? 22 : abs === 1 ? 12 : 0;
            const spread = offset === 0 ? '0rem' : `${Math.sign(offset) * spreadRem}rem`;
            const zIndex = 20 - abs;
            const opacity = isCenter ? 1 : abs === 1 ? 0.92 : 0.62;

            return (
              <button
                key={`${item.src}-${index}`}
                type="button"
                onClick={() => setActive(index)}
                className="group absolute left-1/2 top-1/2 overflow-hidden rounded-[1.5rem] border border-white/30 bg-white shadow-[0_20px_50px_rgba(13,34,64,0.28)] transition-[transform,opacity] duration-500 ease-out focus:outline-none focus-visible:ring-2 focus-visible:ring-[var(--lumen-cyan)] sm:rounded-[1.75rem]"
                style={{
                  width: isPortrait ? 'clamp(196px, 23vw, 280px)' : 'clamp(280px, 46vw, 520px)',
                  height: isPortrait ? 'clamp(294px, 36vw, 420px)' : 'clamp(186px, 28vw, 320px)',
                  transform: `translate(calc(-50% + ${spread}), -50%) scale(${scale})`,
                  zIndex,
                  opacity,
                }}
                aria-label={item.title}
                aria-current={isCenter ? 'true' : undefined}
              >
                <Image
                  src={item.src}
                  alt={item.alt}
                  fill
                  sizes={isPortrait ? '280px' : '520px'}
                  className="object-cover object-center"
                />

                <div className="absolute inset-0 flex flex-col justify-end bg-[#0c1228]/0 p-4 opacity-0 backdrop-blur-0 transition-all duration-300 ease-out group-hover:bg-[#0c1228]/60 group-hover:opacity-100 group-hover:backdrop-blur-md sm:p-5">
                  <span
                    className="!text-[10px] !font-normal uppercase tracking-[0.16em] text-[var(--lumen-cyan)]"
                    style={inter}
                  >
                    {item.category}
                  </span>
                  <p
                    className="!m-0 !mt-1 !text-base !font-normal text-white sm:!text-lg"
                    style={geist}
                  >
                    {item.title}
                  </p>
                  <p
                    className="!mb-0 !mt-1 !text-xs !font-normal leading-relaxed text-white/75 sm:!text-sm"
                    style={inter}
                  >
                    {item.desc}
                  </p>
                </div>
              </button>
            );
          })}
        </div>
      </div>

      <div className="mt-8 flex items-center justify-center gap-4 sm:mt-10">
        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-[#0D2240]"
        >
          <ChevronLeft className="h-5 w-5" strokeWidth={1.75} />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-white/70 text-white transition-colors hover:bg-white hover:text-[#0D2240]"
        >
          <ChevronRight className="h-5 w-5" strokeWidth={1.75} />
        </button>
      </div>
    </section>
  );
}
