'use client';

import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';

const KIT_ITEMS = [
  {
    id: 'router',
    label: 'Step 01',
    title: 'Router Box.',
    body: 'Plug your house internet feed into the LumenFi routing box — the bridge between your ISP and light-speed LiFi.',
    image: '/images/products/router.png',
    alt: 'LumenFi RevF router box with cyan accent lighting',
  },
  {
    id: 'injector',
    label: 'Step 02',
    title: 'PoE Injector.',
    body: 'Combine data and power into one cable run. Clean installs, fewer wall adapters, one powered line to the Access Point.',
    image: '/images/products/injector.png',
    alt: 'LumenFi PoE injector with DATA IN and PoE OUT ports',
  },
  {
    id: 'controller',
    label: 'Step 03',
    title: 'RevF Controller.',
    body: 'Connect the powered line to the RevF Access Point. Wall-mount ready — the control hub for every light cone in the room.',
    image: '/images/products/controller.png',
    alt: 'LumenFi RevF controller connected to photonic access point',
  },
  {
    id: 'photonic',
    label: 'Step 04',
    title: 'Photonic Antennas.',
    body: 'Mount ceiling antennas to broadcast secure light cones — high-bandwidth coverage without radio interference.',
    image: '/images/products/photonic.png',
    alt: 'LumenFi photonic antennas casting cyan LiFi light cones',
  },
  {
    id: 'dongle',
    label: 'Step 05',
    title: 'USB LiFi Dongles.',
    body: 'Plug dongles into laptops to catch optical signals. Instant uplink wherever the light reaches.',
    image: '/images/products/dongel.png',
    alt: 'LumenFi USB LiFi dongle projecting a cyan light beam',
  },
];

const fadeUp = {
  hidden: { opacity: 0, y: 28 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: [0.22, 1, 0.36, 1] },
  },
};

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

function KitCopy({ item }) {
  return (
    <motion.div
      className="flex max-w-md flex-col justify-center"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.35 }}
      variants={fadeUp}
    >
      <p
        className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
        style={inter}
      >
        {item.label}
      </p>
      <h3
        className="!mt-4 !m-0 !text-[clamp(2rem,4.2vw,3.25rem)] !font-normal leading-[1.08] tracking-[-0.03em] text-[#0D2240]"
        style={{ ...geist, fontSize: 'clamp(2rem, 4.2vw, 3.25rem)' }}
      >
        {item.title}
      </h3>
      <p
        className="!mt-5 !text-sm !font-normal leading-relaxed text-[#0D2240]/70 sm:!text-[15px]"
        style={inter}
      >
        {item.body}
      </p>
      <Link
        href="#product-gallery-title"
        className="mt-8 inline-flex h-11 max-w-[220px] items-center justify-center rounded-full border border-[#0D2240]/35 px-7 text-[11px] !font-normal uppercase tracking-[0.18em] text-[#0D2240] transition-colors hover:border-[var(--lumen-cyan)] hover:text-[var(--lumen-cyan)] sm:text-xs"
        style={inter}
      >
        Purchase  kit
      </Link>
    </motion.div>
  );
}

function KitMedia({ item }) {
  return (
    <motion.div
      className="relative aspect-[16/10] w-full overflow-hidden rounded-3xl bg-[#0D2240] sm:aspect-[16/9]"
      initial={{ opacity: 0, scale: 0.97 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
    >
      <Image
        src={item.image}
        alt={item.alt}
        fill
        sizes="(max-width: 1024px) 100vw, 48vw"
        className="object-cover object-center"
      />
    </motion.div>
  );
}

export default function RevFSystemKitExplorer() {
  return (
    <section
      id="concept-runbook"
      className="relative w-full scroll-mt-28"
      style={{ backgroundColor: '#EBF5FF' }}
      aria-label="RevF System Kit"
    >
      {/* Intro */}
      <div className="mx-auto max-w-6xl px-5 pb-6 pt-16 sm:px-8 sm:pt-20 lg:px-10 lg:pt-24">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
            style={inter}
          >
            System overview
          </p>
          <h2
            className="!mt-3 !m-0 max-w-xl !text-[clamp(2.25rem,5vw,3.75rem)] !font-normal leading-[1.08] tracking-[-0.03em] text-[#0D2240]"
            style={{ ...geist, fontSize: 'clamp(2.25rem, 5vw, 3.75rem)' }}
          >
            RevF System Kit
          </h2>
          <p
            className="!mt-4 max-w-lg !text-sm !font-normal leading-relaxed text-[#0D2240]/65 sm:!text-base"
            style={inter}
          >
            Five components. One light-powered network — from your ISP feed to every laptop in the room.
          </p>
        </motion.div>
      </div>

      {/* Alternating rows */}
      <div className="mx-auto max-w-6xl px-5 pb-16 sm:px-8 sm:pb-20 lg:px-10 lg:pb-28">
        {KIT_ITEMS.map((item, index) => {
          const imageLeft = index % 2 === 1;

          return (
            <article
              key={item.id}
              className={`grid grid-cols-1 items-center gap-10 py-12 sm:gap-12 sm:py-16 lg:grid-cols-2 lg:gap-16 lg:py-20 ${
                index > 0 ? 'border-t border-[#0D2240]/08' : ''
              }`}
            >
              <div className={imageLeft ? 'lg:order-1' : 'lg:order-2'}>
                <KitMedia item={item} />
              </div>
              <div className={imageLeft ? 'lg:order-2 lg:pl-4' : 'lg:order-1 lg:pr-4'}>
                <KitCopy item={item} />
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}
