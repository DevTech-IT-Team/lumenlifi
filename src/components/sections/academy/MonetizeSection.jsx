'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';
import { Award, Cpu, Handshake, ArrowRight } from 'lucide-react';
import { fadeUp } from './variants';

const benefits = [
  {
    icon: Award,
    title: 'Become a Certified Reseller',
    desc: "Once you complete our core curriculum, you'll have the opportunity to become an official LumenFi technology reseller.",
    label: '01 / CERTIFY',
    featured: false,
  },
  {
    icon: Cpu,
    title: 'The Hardware Advantage',
    desc: 'As a certified partner, you will have access to the latest in Li-Fi technology — ready for real deployments.',
    label: '02 / HARDWARE',
    featured: true,
  },
  {
    icon: Handshake,
    title: 'Turnkey Business Model',
    desc: 'Marketing materials, sales strategies, and ongoing support to pitch and sell Li-Fi solutions in your market.',
    label: '03 / GROW',
    featured: false,
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

/** Asymmetric corners: large top-left + bottom-right */
const cardRadius = 'rounded-tl-[2.75rem] rounded-tr-2xl rounded-bl-2xl rounded-br-[2.75rem]';

export default function MonetizeSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#122244' }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-10 max-w-xl sm:mb-12"
        >
          <h2
            className="!m-0 !text-[clamp(1.85rem,4vw,2.75rem)] !font-normal leading-[1.1] tracking-[-0.03em] text-[#EBF5FF]"
            style={{ ...geist, fontSize: 'clamp(1.85rem, 4vw, 2.75rem)' }}
          >
            Monetize the Future
          </h2>
          <p
            className="!mt-4 border-l-2 border-[var(--lumen-cyan)] pl-4 !text-sm !font-normal leading-relaxed text-white/55 sm:!text-[15px]"
            style={inter}
          >
            LumenFi Academy isn&apos;t just about education — it&apos;s about empowerment. Turn your
            knowledge into a lucrative Li-Fi business.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {benefits.map(({ icon: Icon, title, desc, label, featured }, idx) => (
            <motion.article
              key={title}
              custom={idx}
              variants={fadeUp}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              className={`group flex min-h-[280px] flex-col p-6 sm:min-h-[300px] sm:p-7 ${cardRadius} ${
                featured
                  ? 'bg-[var(--lumen-cyan)] text-[#0D2240]'
                  : 'bg-white text-[#0D2240]'
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  featured
                    ? 'bg-white text-[#0D2240]'
                    : 'bg-[#0D2240] text-white'
                }`}
              >
                <Icon size={18} strokeWidth={1.75} />
              </div>

              <h3
                className="!mt-8 !m-0 !text-xl !font-normal leading-snug tracking-tight text-[#0D2240] sm:!text-[1.35rem]"
                style={geist}
              >
                {title}
              </h3>
              <p
                className={`!mt-3 flex-1 !text-sm !font-normal leading-relaxed ${
                  featured ? 'text-[#0D2240]/70' : 'text-[#0D2240]/60'
                }`}
                style={inter}
              >
                {desc}
              </p>

              <div className="mt-8 flex items-center justify-between gap-3">
                <span
                  className={`!text-[11px] !font-normal uppercase tracking-[0.16em] ${
                    featured ? 'text-[#0D2240]/55' : 'text-[var(--lumen-cyan)]'
                  }`}
                  style={inter}
                >
                  {label}
                </span>
                <Link
                  href="#cta-final"
                  className={`inline-flex h-9 w-9 items-center justify-center rounded-full transition-transform group-hover:scale-110 ${
                    featured
                      ? 'bg-[#0D2240] text-white'
                      : 'bg-[#0D2240] text-white'
                  }`}
                  aria-label={`Learn more about ${title}`}
                >
                  <ArrowRight size={15} strokeWidth={1.75} />
                </Link>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
