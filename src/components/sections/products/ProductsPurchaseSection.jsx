import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const INCLUDES = ['Router Box', 'PoE Injector', 'RevF Controller', 'Photonic Antennas', 'USB Dongles'];

const BUY_URL = 'https://rzp.io/rzp/vv8HFbfc';

export default function ProductsPurchaseSection() {
  return (
    <section
      className="section-wash-navy relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      aria-labelledby="product-gallery-title"
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 70% 55% at 50% 100%, rgba(0,194,199,0.18) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <motion.div
          className="mx-auto max-w-2xl text-center"
          initial={{ opacity: 0, y: 14 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.6 }}
          transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
        >
          <p
            className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
            style={inter}
          >
            Ready to order
          </p>
          <h2
            id="product-gallery-title"
            className="!mt-3 !m-0 !text-[clamp(1.85rem,4vw,2.75rem)] !font-bold leading-[1.1] tracking-[-0.03em] text-white"
            style={geist}
          >
            RevF System Kit
          </h2>
        </motion.div>

        <div className="mt-12 grid items-center gap-10 sm:mt-14 lg:grid-cols-2 lg:gap-14 xl:gap-16">
          <motion.div
            className="flex justify-center lg:justify-end"
            initial={{ opacity: 0, x: -18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
          >
            <div className="relative aspect-[16/10] w-full max-w-sm overflow-hidden rounded-2xl border border-white/15 bg-[#071b34] shadow-[0_24px_60px_rgba(0,0,0,0.4)] sm:max-w-md sm:rounded-3xl">
              <Image
                src="/images/lifi/kit.png"
                alt="LumenFi RevF System Kit unboxed"
                fill
                sizes="(max-width: 640px) 90vw, 28rem"
                className="object-cover object-center"
              />
            </div>
          </motion.div>

          <motion.div
            className="flex flex-col items-center text-center lg:items-start lg:text-left"
            initial={{ opacity: 0, x: 18 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.35 }}
            transition={{ duration: 0.6, delay: 0.06, ease: [0.22, 1, 0.36, 1] }}
          >
            <h3
              className="!m-0 !text-[clamp(1.35rem,2.5vw,1.75rem)] !font-bold leading-snug tracking-[-0.02em] text-white"
              style={geist}
            >
              Light-powered. Future-ready.
            </h3>
            <p
              className="!mt-3 max-w-md !text-sm !font-normal leading-relaxed text-white/65 sm:!text-base"
              style={inter}
            >
              Everything you need to bring secure Li-Fi into your home — from the router box to USB
              receivers — in one complete kit.
            </p>

            <ul className="mt-6 flex list-none flex-wrap justify-center gap-2 p-0 lg:justify-start">
              {INCLUDES.map((item) => (
                <li
                  key={item}
                  className="rounded-full border border-white/15 px-3.5 py-1.5 text-xs text-white/70"
                  style={inter}
                >
                  {item}
                </li>
              ))}
            </ul>

            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 lg:justify-start">
              <motion.a
                href={BUY_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white px-9 text-base !font-normal !text-[#0D2240] transition-opacity hover:opacity-90"
                style={inter}
                whileHover={{ scale: 1.03 }}
                whileTap={{ scale: 0.98 }}
              >
                Purchase Now
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </motion.a>
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/25 px-8 text-base !font-normal !text-white transition-colors hover:border-white/50"
                style={inter}
              >
                Ask a question
              </Link>
            </div>

            {/* <p className="!mt-4 !text-xs !font-normal text-white/40" style={inter}>
              Ships worldwide · 4–6 week lead time
            </p> */}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
