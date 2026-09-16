'use client';

import { useState } from 'react';
import Image from 'next/image';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const PRE_ORDER_URL =
  'https://app.tilled.com/pay/cs_8WrwuiIiMrBieL21ZoLNZ#fidkdWxabmB8Jz8ndW5aR1d1bkgwdTxVYlNhd2tzbjFDMU8xNmZ2TE9WYDNTQEZjRjBkcF9UfH83fEpwSUl1Z2dMbDI8TWlHR2FPUTRsfEx9SFVSYElIdV82b0BWTzRLQDFkTXQzZkJ2UlIzNEg2MX9xTCcpJ2RmZmpwa3FabGEnPydkZmZxWkJpQmlWS1Z3bEtoPHJQMnFwfXJqYScpJ2RmZmpwa3Faa2RoYCc%2FJ0xodWB3bHBoJUJ3anB1J3g%3D';

const CATALOG = [
  {
    id: 'white',
    color: 'White',
    swatch: '#EBF5FF',
    src: '/images/pole/a.jpg',
    alt: 'White LiFi Pillar with standing desk shelf and task light in a minimal workspace',
    category: 'Workspace',
    title: 'Standing desk pole',
    desc: 'Integrated LED task light, modular wooden desk shelf for your laptop, and a lower shelf for your router — all on one floor-to-ceiling pole.',
    highlights: ['Warm white finish with light wood accents', 'Built-in task lighting', 'Desk + router shelves'],
  },
  {
    id: 'black',
    color: 'Black',
    swatch: '#1a2332',
    src: '/images/pole/c.jpg',
    alt: 'Black LiFi Pillar with monitor mount, headphones, and gaming console',
    category: 'Gaming',
    title: 'Gaming & media hub',
    desc: 'Monitor arm, headphone hook, console shelf, and under-shelf LiFi gear — light beams from the top keep your setup connected.',
    highlights: ['Matte black pole', 'Monitor mount & media shelf', 'Headphone hook'],
  },
  {
    id: 'silver',
    color: 'Silver',
    swatch: '#C5CED8',
    src: '/images/pole/f.jpg',
    alt: 'Silver-tone LiFi Pillar with headphone hook and networking shelf in a home office',
    category: 'Home office',
    title: 'Focused work corner',
    desc: 'Headphone hook, wooden tech shelf for hubs and gear, and a ceiling light emitter — tidy connectivity for your desk.',
    highlights: ['Brushed silver metal finish', 'Cable-managed tech shelf', 'Overhead LiFi emitter'],
  },
  {
    id: 'gold',
    color: 'Gold',
    swatch: '#C9A227',
    src: '/images/pole/b.jpg',
    alt: 'Gold LiFi Pillar with vanity mirror and makeup tray',
    category: 'Vanity',
    title: 'Vanity & storage',
    desc: 'Brushed-metal pole with a full mirror, circular tray for everyday essentials, and a top lamp that lights your space while it connects.',
    highlights: ['Polished gold / brass finish', 'Mirror & vanity tray', 'Ambient top lighting'],
  },
];

const GALLERY_EXTRAS = [
  {
    id: 'white-living',
    color: 'White',
    swatch: '#EBF5FF',
    src: '/images/pole/e.jpg',
    alt: 'White LiFi Pillar with circular shelves for décor, plants, and networking gear',
    category: 'Living space',
    title: 'Display & tech shelves',
    desc: 'Four circular shelves for plants, collectibles, audio, and networking hardware — cable-managed and lit from above.',
    highlights: ['White finish for living rooms', 'Four display shelves', 'Plants & décor friendly'],
  },
  {
    id: 'gold-bedroom',
    color: 'Gold',
    swatch: '#C9A227',
    src: '/images/pole/d.jpg',
    alt: 'Gold-tone LiFi Pillar with coat hooks and networking shelf in a bedroom',
    category: 'Bedroom',
    title: 'Coat rack meets connectivity',
    desc: 'Hooks for bags and jackets, a circular tech shelf for your router, and a focused light beam — style and signal in the bedroom.',
    highlights: ['Warm metallic finish', 'Coat hooks + tech shelf', 'Bedroom-ready layout'],
  },
];

const ALL_ITEMS = [...CATALOG, ...GALLERY_EXTRAS];

export default function PoleImageScroller() {
  const [activeId, setActiveId] = useState(CATALOG[0].id);
  const active = ALL_ITEMS.find((item) => item.id === activeId) ?? CATALOG[0];

  const isFinishSelected = (finishId) => {
    const finish = CATALOG.find((c) => c.id === finishId);
    if (!finish) return false;
    return (
      activeId === finishId ||
      (active.color === finish.color && !CATALOG.some((c) => c.id === activeId))
    );
  };

  return (
    <section className="relative w-full overflow-hidden" aria-label="LiFi Pillar catalog">
      <div className="grid grid-cols-1 lg:grid-cols-[1.2fr_0.8fr] lg:h-[min(100svh,900px)]">
        {/* Left — editorial dark panel */}
        <div
          className="relative flex flex-col px-6 py-12 sm:px-10 sm:py-14 lg:h-full lg:overflow-hidden lg:px-12 lg:py-12 xl:px-16"
          style={{
            background: 'linear-gradient(165deg, #0a1628 0%, #0D2240 45%, #143356 100%)',
          }}
        >
          <div
            className="pointer-events-none absolute right-0 top-0 h-64 w-64 rounded-full opacity-40 blur-[100px]"
            style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.35) 0%, transparent 70%)' }}
            aria-hidden
          />

          <div className="relative z-10 mx-auto w-full max-w-2xl shrink-0 lg:mx-0 lg:ml-auto">
            <h2
              className="!m-0 max-w-md !text-[clamp(1.75rem,3.5vw,2.65rem)] !font-normal leading-[1.12] tracking-[-0.03em] text-white"
              style={geist}
            >
              Inside the LiFi Pillar
            </h2>
            <p
              className="!mt-3 max-w-sm !text-sm !font-normal leading-relaxed text-white/60 sm:!text-[15px]"
              style={inter}
            >
              Choose a finish and explore real-room setups — select any layout from the catalog to
              preview it here.
            </p>
          </div>

          <div className="relative z-10 mx-auto mt-4 w-full max-w-2xl min-h-[300px] flex-[1.35] sm:min-h-[340px] lg:mx-0 lg:ml-auto lg:mt-5 lg:min-h-0">
            <Image
              key={active.src}
              src={active.src}
              alt={active.alt}
              fill
              sizes="(max-width: 1024px) 100vw, 60vw"
              className="object-contain object-center scale-[1.08] sm:scale-[1.12]"
              priority
            />
          </div>

          <div className="relative z-10 mx-auto mt-4 w-full max-w-2xl shrink-0 lg:mx-0 lg:ml-auto">
            <p
              className="!mb-4 !text-[10px] uppercase tracking-[0.18em] text-[var(--lumen-cyan)]"
              style={inter}
            >
              {active.category} · {active.color} finish
            </p>
            <a
              href={PRE_ORDER_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3rem] w-full items-center justify-center rounded-full bg-white px-7 text-sm !font-normal !text-[#0D2240] transition-opacity hover:opacity-90 sm:w-auto sm:min-w-[11rem]"
              style={inter}
            >
              Pre order now
            </a>
          </div>
        </div>

        {/* Right — catalog list with scrollbar */}
        <div className="flex min-h-0 flex-col bg-white px-5 py-8 sm:px-8 sm:py-10 lg:h-full lg:overflow-hidden lg:px-8 lg:py-12 xl:px-10">
          <div className="mx-auto w-full max-w-md shrink-0 border-b border-[#0D2240]/08 pb-4 lg:mx-0 lg:max-w-none">
            <p
              className="!m-0 !text-xs !font-normal text-[#0D2240]/55 sm:!text-sm"
              style={inter}
            >
              Also available in 4 colors
            </p>
            <div className="mt-3 flex flex-wrap gap-2">
              {CATALOG.map((finish) => (
                <button
                  key={finish.id}
                  type="button"
                  onClick={() => setActiveId(finish.id)}
                  className={`inline-flex items-center gap-2 rounded-full border px-3 py-1.5 text-xs !font-normal transition-colors ${
                    isFinishSelected(finish.id)
                      ? 'border-[var(--lumen-cyan)] bg-[#EBF5FF] text-[#0D2240]'
                      : 'border-[#0D2240]/12 text-[#0D2240]/70 hover:border-[#0D2240]/25'
                  }`}
                  style={inter}
                >
                  <span
                    className="h-3.5 w-3.5 shrink-0 rounded-full border border-[#0D2240]/15"
                    style={{ backgroundColor: finish.swatch }}
                    aria-hidden
                  />
                  {finish.color}
                </button>
              ))}
            </div>
          </div>

          <div className="mx-auto mt-1 w-full max-w-md min-h-0 flex-1 divide-y divide-[#0D2240]/08 overflow-y-auto overscroll-contain lg:mx-0 lg:max-w-none [scrollbar-width:thin] [scrollbar-color:rgba(13,34,64,0.35)_transparent]">
            {ALL_ITEMS.map((item) => {
              const isActive = item.id === activeId;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => setActiveId(item.id)}
                  className={`flex w-full gap-3 py-4 text-left transition-colors sm:gap-4 sm:py-5 ${
                    isActive ? 'bg-[#EBF5FF]/50' : 'hover:bg-[#F4F8FC]'
                  }`}
                  aria-pressed={isActive}
                >
                  <div className="relative h-16 w-16 shrink-0 overflow-hidden rounded-lg bg-[#F4F8FC] sm:h-20 sm:w-20 sm:rounded-xl">
                    <Image
                      src={item.src}
                      alt=""
                      fill
                      sizes="80px"
                      className="object-cover object-center"
                    />
                  </div>
                  <div className="min-w-0 flex-1 pt-0.5">
                    <div className="flex flex-wrap items-center gap-x-3 gap-y-1">
                      <span
                        className="text-[10px] uppercase tracking-[0.14em] text-[var(--lumen-cyan)]"
                        style={inter}
                      >
                        {item.category}
                      </span>
                      <span
                        className="inline-flex items-center gap-1.5 text-[10px] !font-normal text-[#0D2240]/45"
                        style={inter}
                      >
                        <span
                          className="h-2 w-2 rounded-full border border-[#0D2240]/15"
                          style={{ backgroundColor: item.swatch }}
                          aria-hidden
                        />
                        {item.color}
                      </span>
                    </div>
                    <h3
                      className="!mt-1.5 !m-0 !text-base !font-normal tracking-tight text-[#0D2240] sm:!text-lg"
                      style={geist}
                    >
                      {item.title}
                    </h3>
                    <p
                      className="!mt-1.5 !mb-0 line-clamp-2 !text-xs !font-normal leading-relaxed text-[#0D2240]/60 sm:!text-sm"
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
      </div>
    </section>
  );
}
