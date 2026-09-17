'use client';

import { useEffect, useMemo, useRef, useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'framer-motion';
import { ArrowLeft, ArrowRight } from 'lucide-react';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const PRE_ORDER_URL =
  'https://app.tilled.com/pay/cs_8WrwuiIiMrBieL21ZoLNZ#fidkdWxabmB8Jz8ndW5aR1d1bkgwdTxVYlNhd2tzbjFDMU8xNmZ2TE9WYDNTQEZjRjBkcF9UfH83fEpwSUl1Z2dMbDI8TWlHR2FPUTRsfEx9SFVSYElIdV82b0BWTzRLQDFkTXQzZkJ2UlIzNEg2MX9xTCcpJ2RmZmpwa3FabGEnPydkZmZxWkJpQmlWS1Z3bEtoPHJQMnFwfXJqYScpJ2RmZmpwa3Faa2RoYCc%2FJ0xodWB3bHBoJUJ3anB1J3g%3D';

const CATALOG = [
  {
    id: 'white',
    color: 'White',
    swatch: '#F4F1EA',
    src: '/images/pole/a.jpg',
    alt: 'White LiFi Pillar styled as a standing-desk corner in a workspace',
    category: 'Workspace',
    title: 'Turn a corner into a desk',
    desc: 'The LiFi Pillar lights the room and carries your connection. You can make an unused corner work harder — add a standing-desk shelf for your laptop, a lower tray for a router, and use the top beam as a task light.',
    body: 'We do not ship hooks or shelves on the pillar. This look is inspiration: clip on what your home needs, keep cables off the floor, and let the pole stay décor and LiFi while the extras make it useful.',
    highlights: [
      'Add a standing-desk shelf for your laptop',
      'Keep a router on a lower tray, off the floor',
      'Hang a hook for headphones beside you',
      'Use the overhead light as a task lamp',
    ],
  },
  {
    id: 'black',
    color: 'Black',
    swatch: '#1a2332',
    src: '/images/pole/c.jpg',
    alt: 'Black LiFi Pillar styled as a gaming and media setup',
    category: 'Gaming',
    title: 'Hang what you actually use',
    desc: 'Think of the pillar as a media spine. Hang headphones, rest a console nearby, keep cables off the floor — the pole stays the light and the LiFi; you make it work for play.',
    body: 'A hook, a small shelf, a place for a speaker — none of that comes on the pillar. These photos show how useful it can become once you add the pieces your setup already needs.',
    highlights: [
      'Hang headphones on a clip-on hook',
      'Park a console or speaker beside it',
      'Keep cables and gear off the floor',
      'Let the top light wash the room while you play',
    ],
  },
  {
    id: 'silver',
    color: 'Silver',
    swatch: '#C5CED8',
    src: '/images/pole/f.jpg',
    alt: 'Silver LiFi Pillar styled in a home office',
    category: 'Home office',
    title: 'Keep the desk clear',
    desc: 'A hanging hook for headphones, a small tray for hubs and chargers — the kind of add-ons that leave your desk for work, while LiFi lights the room from above.',
    body: 'The pillar is lighting and connectivity. Everything else in this look is how you might live with it: hang what you reach for, park the tech, keep the desk empty for the work itself.',
    highlights: [
      'Hook for headphones next to the desk',
      'Tray for hubs, dongles, and chargers',
      'Router or mesh node off the desktop',
      'Overhead LiFi light while you work',
    ],
  },
  {
    id: 'gold',
    color: 'Gold',
    swatch: '#C9A227',
    src: '/images/pole/b.jpg',
    alt: 'Gold LiFi Pillar styled beside a vanity',
    category: 'Vanity',
    title: 'Make a dressing corner useful',
    desc: 'Style it beside a mirror. Add a tray for everyday things and let the top light warm the space — the pillar is décor and connection; the extras are how you live with it.',
    body: 'A tray, a hook, a place for jewelry or a phone — inspiration, not included. Use the column as the light in the room, then add only what makes this corner yours.',
    highlights: [
      'Pair it with a mirror in the dressing corner',
      'A tray for daily essentials',
      'A hook for a robe or bag',
      'Warm light from above while you get ready',
    ],
  },
];

const GALLERY_EXTRAS = [
  {
    id: 'white-living',
    color: 'White',
    swatch: '#F4F1EA',
    src: '/images/pole/e.jpg',
    alt: 'White LiFi Pillar styled with display shelves in a living room',
    category: 'Living space',
    title: 'A column that earns its place',
    desc: 'In the living room it can hold more than light. You can add shelves for a plant, a speaker, a book — a pole that looks at home and still connects the room.',
    body: 'Display pieces and tech trays are styling ideas you can add later. The LiFi Pillar stays the light and the connection; you decide how useful the column becomes.',
    highlights: [
      'Display a plant or object you already love',
      'Park a speaker or router on a small shelf',
      'Keep cables out of sight',
      'Let one column light and connect the room',
    ],
  },
  {
    id: 'gold-bedroom',
    color: 'Gold',
    swatch: '#C9A227',
    src: '/images/pole/d.jpg',
    alt: 'Gold LiFi Pillar styled with coat hooks in a bedroom',
    category: 'Bedroom',
    title: 'Hang it, then skip the clutter',
    desc: 'Add hooks for a bag or jacket, a small shelf so the router leaves the nightstand — the LiFi Pillar lights and connects; you decide how useful it becomes.',
    body: 'Coat hooks and shelves are not on the pillar. This is a bedroom idea: hang what you drop at the door, free the nightstand, and keep soft light by the bed.',
    highlights: [
      'Hooks for bags, jackets, or a robe',
      'Router off the nightstand',
      'A small shelf for what you reach for at night',
      'Soft light beside the bed',
    ],
  },
];

const ALL_ITEMS = [...CATALOG, ...GALLERY_EXTRAS];
const FINISHES = CATALOG.map(({ color, swatch }) => ({ color, swatch }));
const ROOMS = ['All', ...ALL_ITEMS.map((item) => item.category).filter((room, i, arr) => arr.indexOf(room) === i)];

export default function PoleImageScroller() {
  const [activeId, setActiveId] = useState(ALL_ITEMS[0].id);
  const [finish, setFinish] = useState('All');
  const [room, setRoom] = useState('All');
  const sliderRef = useRef(null);

  const visibleItems = useMemo(
    () =>
      ALL_ITEMS.filter((item) => {
        const finishOk = finish === 'All' || item.color === finish;
        const roomOk = room === 'All' || item.category === room;
        return finishOk && roomOk;
      }),
    [finish, room],
  );

  const active = visibleItems.find((item) => item.id === activeId) ?? visibleItems[0] ?? ALL_ITEMS[0];

  const scrollSlider = (dir) => {
    const node = sliderRef.current;
    if (!node) return;
    node.scrollBy({ left: dir * Math.min(320, node.clientWidth * 0.7), behavior: 'smooth' });
  };

  useEffect(() => {
    const track = sliderRef.current;
    const thumb = track?.querySelector(`[data-look-id="${active.id}"]`);
    if (!track || !(thumb instanceof HTMLElement)) return;
    const left = thumb.offsetLeft - (track.clientWidth - thumb.offsetWidth) / 2;
    track.scrollTo({ left: Math.max(0, left), behavior: 'smooth' });
  }, [active.id]);

  const selectFinish = (nextFinish) => {
    setFinish(nextFinish);
    const nextItems = ALL_ITEMS.filter((item) => {
      const finishOk = nextFinish === 'All' || item.color === nextFinish;
      const roomOk = room === 'All' || item.category === room;
      return finishOk && roomOk;
    });
    if (nextItems.length && !nextItems.some((item) => item.id === activeId)) {
      setActiveId(nextItems[0].id);
    }
  };

  const selectRoom = (nextRoom) => {
    setRoom(nextRoom);
    const nextItems = ALL_ITEMS.filter((item) => {
      const finishOk = finish === 'All' || item.color === finish;
      const roomOk = nextRoom === 'All' || item.category === nextRoom;
      return finishOk && roomOk;
    });
    if (nextItems.length && !nextItems.some((item) => item.id === activeId)) {
      setActiveId(nextItems[0].id);
    }
  };

  return (
    <section className="relative w-full overflow-hidden bg-[#F4F8FC]" aria-label="LiFi Pillar catalog">
      <div className="mx-auto max-w-[1520px] px-4 py-14 sm:px-8 sm:py-16 lg:py-20">
        <div className="flex flex-col gap-8 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-xl">
            <p
              className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)]"
              style={inter}
            >
              LiFi Pillar catalogue
            </p>
            <h2
              className="!mt-3 !m-0 !text-[clamp(2rem,4vw,3.1rem)] !font-normal leading-[1.08] tracking-[-0.03em] text-[#0D2240]"
              style={geist}
            >
              Make the LiFi Pillar useful at home
            </h2>
          </div>

          <div>
            <p className="!mb-3 !text-xs !font-normal text-[#0D2240]/50" style={inter}>
              Available in 4 finishes
            </p>
            <div className="flex flex-wrap gap-2">
              <button
                type="button"
                onClick={() => selectFinish('All')}
                className={`rounded-full border px-4 py-2 text-xs !font-normal transition-colors ${
                  finish === 'All'
                    ? 'border-[#0D2240] bg-[#0D2240] text-white'
                    : 'border-[#0D2240]/12 bg-white text-[#0D2240]/70 hover:border-[#0D2240]/30'
                }`}
                style={inter}
              >
                All
              </button>
              {FINISHES.map((item) => (
                <button
                  key={item.color}
                  type="button"
                  onClick={() => selectFinish(item.color)}
                  className={`inline-flex items-center gap-2 rounded-full border bg-white px-3.5 py-2 text-xs !font-normal transition-colors ${
                    finish === item.color
                      ? 'border-[var(--lumen-cyan)] text-[#0D2240] shadow-[0_0_0_3px_rgba(0,194,199,0.16)]'
                      : 'border-[#0D2240]/12 text-[#0D2240]/70 hover:border-[#0D2240]/30'
                  }`}
                  style={inter}
                >
                  <span
                    className="h-4 w-4 shrink-0 rounded-full border border-black/10 shadow-inner"
                    style={{ backgroundColor: item.swatch }}
                    aria-hidden
                  />
                  {item.color}
                </button>
              ))}
            </div>
          </div>
        </div>

        <div className="mt-6 flex gap-2 overflow-x-auto pb-1 [scrollbar-width:none]">
          {ROOMS.map((label) => (
            <button
              key={label}
              type="button"
              onClick={() => selectRoom(label)}
              className={`shrink-0 rounded-full px-3.5 py-1.5 text-[11px] !font-normal uppercase tracking-[0.14em] transition-colors ${
                room === label
                  ? 'bg-white text-[#0D2240] shadow-sm'
                  : 'text-[#0D2240]/45 hover:text-[#0D2240]'
              }`}
              style={inter}
            >
              {label}
            </button>
          ))}
        </div>

        <div className="mt-8 grid grid-cols-1 items-start gap-6 lg:grid-cols-[minmax(0,36rem)_minmax(0,1fr)] lg:items-stretch lg:gap-8 xl:grid-cols-[minmax(0,40rem)_minmax(0,1fr)]">
          <div className="relative mx-auto w-full max-w-md overflow-hidden rounded-[1.75rem] bg-[#EDE7DC] lg:mx-0 lg:max-w-none">
            <div className="relative aspect-[2/3]">
              <AnimatePresence mode="wait">
                <motion.div
                  key={active.id}
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.3 }}
                  className="absolute inset-0"
                >
                  <Image
                    src={active.src}
                    alt={active.alt}
                    fill
                    sizes="(max-width: 1024px) 90vw, 40rem"
                    className="object-cover object-top"
                    priority
                  />
                </motion.div>
              </AnimatePresence>
            </div>
          </div>

          <div className="flex min-h-0 min-w-0 flex-col lg:h-full">
            <div className="max-w-xl">
              <div className="flex flex-wrap items-center gap-2">
                <span
                  className="rounded-full bg-[#EBF5FF] px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[#0D2240]"
                  style={inter}
                >
                  {active.category}
                </span>
                <span className="inline-flex items-center gap-1.5 text-[11px] text-[#0D2240]/55" style={inter}>
                  <span
                    className="h-2.5 w-2.5 rounded-full border border-black/10"
                    style={{ backgroundColor: active.swatch }}
                    aria-hidden
                  />
                  {active.color} finish
                </span>
                <span
                  className="rounded-full border border-[#0D2240]/10 px-2.5 py-1 text-[10px] uppercase tracking-[0.12em] text-[#0D2240]/45"
                  style={inter}
                >
                  Inspiration
                </span>
              </div>

              <h3
                className="!mt-4 !m-0 !text-[clamp(1.7rem,2.8vw,2.35rem)] !font-normal leading-[1.12] tracking-[-0.03em] text-[#0D2240]"
                style={geist}
              >
                {active.title}
              </h3>
              <p
                className="!mt-3 max-w-lg !mb-0 !text-[15px] !font-normal leading-relaxed text-[#0D2240]/65"
                style={inter}
              >
                {active.desc}
              </p>
              <p
                className="!mt-3 max-w-lg !mb-0 !text-[15px] !font-normal leading-relaxed text-[#0D2240]/65"
                style={inter}
              >
                {active.body}
              </p>

              {active.highlights?.length ? (
                <ul className="mt-5 flex flex-col gap-2.5">
                  {active.highlights.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2.5 text-[15px] leading-snug text-[#0D2240]/80"
                      style={inter}
                    >
                      <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--lumen-cyan)]" aria-hidden />
                      {point}
                    </li>
                  ))}
                </ul>
              ) : null}

              <a
                href={PRE_ORDER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-5 inline-flex min-h-[2.85rem] w-full items-center justify-center gap-2 rounded-full bg-[#0D2240] px-7 text-sm !font-normal !text-white transition-opacity hover:opacity-90 sm:w-auto"
                style={inter}
              >
                Pre order now
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
            </div>

            <div className="mt-8 min-h-0 lg:mt-auto">
              <div className="mb-3 flex items-center justify-between gap-3">
                <p className="!m-0 !text-sm !font-normal text-[#0D2240]" style={geist}>
                  Home inspiration
                </p>
                <div className="flex gap-2">
                  <button
                    type="button"
                    onClick={() => scrollSlider(-1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0D2240]/12 bg-white text-[#0D2240] transition hover:border-[#0D2240]/30"
                    aria-label="Previous looks"
                  >
                    <ArrowLeft className="h-4 w-4" />
                  </button>
                  <button
                    type="button"
                    onClick={() => scrollSlider(1)}
                    className="flex h-9 w-9 items-center justify-center rounded-full border border-[#0D2240]/12 bg-white text-[#0D2240] transition hover:border-[#0D2240]/30"
                    aria-label="Next looks"
                  >
                    <ArrowRight className="h-4 w-4" />
                  </button>
                </div>
              </div>

              <div
                ref={sliderRef}
                className="flex gap-3 overflow-x-auto pb-1 snap-x snap-mandatory [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden"
              >
                {visibleItems.map((item) => {
                  const isActive = item.id === active.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      data-look-id={item.id}
                      onClick={() => setActiveId(item.id)}
                      aria-pressed={isActive}
                      className={`w-[8.75rem] shrink-0 snap-start overflow-hidden rounded-2xl border bg-[#F3EEE6] text-left sm:w-[10rem] ${
                        isActive
                          ? 'border-[var(--lumen-cyan)] ring-2 ring-[var(--lumen-cyan)]/20'
                          : 'border-[#0D2240]/8 hover:border-[#0D2240]/20'
                      }`}
                    >
                      <div className="relative aspect-[2/3]">
                        <Image
                          src={item.src}
                          alt={item.alt}
                          fill
                          sizes="180px"
                          className="object-cover object-top"
                        />
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
