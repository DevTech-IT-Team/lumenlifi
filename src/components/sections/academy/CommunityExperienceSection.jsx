'use client';

import { motion } from 'framer-motion';
import { MonitorPlay, Network, TrendingUp } from 'lucide-react';
import { fadeUp } from './variants';

const experiences = [
  {
    id: 'classes',
    step: '01',
    icon: MonitorPlay,
    title: 'Live interactive classes.',
    desc: 'Engage directly with industry experts in real-time. Ask questions, participate in discussions, and get hands-on guidance.',
  },
  {
    id: 'network',
    step: '02',
    icon: Network,
    title: 'Global networking that powers possibility.',
    desc: 'Connect with tech enthusiasts, entrepreneurs, and forward-thinkers. Share ideas, collaborate, and build a network that supports your journey.',
  },
  {
    id: 'ahead',
    step: '03',
    icon: TrendingUp,
    title: 'Stay ahead of the curve.',
    desc: 'Gain exclusive access to the latest research, developments, and breakthroughs in optical wireless communications.',
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function CommunityExperienceSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#EBF5FF' }}
    >
      <div
        className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full opacity-40 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.2) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="grid grid-cols-1 items-start gap-12 lg:grid-cols-12 lg:gap-14">
          {/* Left — header */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:col-span-4 lg:sticky lg:top-28"
          >
            <p
              className="!m-0 !text-[11px] !font-semibold uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
              style={inter}
            >
              Community
            </p>
            <h2
              className="!mt-3 !m-0 !text-[clamp(1.85rem,4vw,2.75rem)] !font-bold leading-[1.08] tracking-[-0.02em] text-[#0D2240]"
              style={{ ...geist, fontSize: 'clamp(1.85rem, 4vw, 2.75rem)', fontWeight: 700 }}
            >
              The LumenFi Network
            </h2>
            <p
              className="!mt-4 !text-sm !font-normal leading-relaxed text-[#0D2240]/60 sm:!text-[15px]"
              style={inter}
            >
              Learning doesn&apos;t happen in a vacuum. By joining LumenFi Academy, you become part
              of a movement — live classes, global connections, and exclusive insights into the
              future of light connectivity.
            </p>
          </motion.div>

          {/* Right — three items */}
          <div className="lg:col-span-8">
            <div className="flex flex-col">
              {experiences.map(({ id, step, icon: Icon, title, desc }, idx) => (
                <motion.div
                  key={id}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.3 }}
                  className={`relative flex flex-col py-8 sm:flex-row sm:items-start sm:gap-8 sm:py-10 ${
                    idx > 0 ? 'border-t border-[#0D2240]/10' : ''
                  }`}
                >
                  <div className="flex shrink-0 items-center gap-4 sm:w-24 sm:flex-col sm:items-start sm:gap-3">
                    <span className="inline-flex h-10 w-10 items-center justify-center text-[var(--lumen-cyan)]">
                      <Icon size={22} strokeWidth={1.5} />
                    </span>
                    {/* <span
                      className="select-none !text-3xl !font-normal leading-none tracking-tight text-[#0D2240]/15 sm:!text-4xl"
                      style={geist}
                      aria-hidden="true"
                    >
                      {step}
                    </span> */}
                  </div>
                  <div className="mt-4 min-w-0 flex-1 sm:mt-0">
                    <h3
                      className="!m-0 !text-[clamp(1.25rem,2vw,1.5rem)] !font-normal leading-snug tracking-[-0.02em] text-[#0D2240]"
                      style={geist}
                    >
                      {title}
                    </h3>
                    <p
                      className="!mt-3 !m-0 max-w-xl !text-sm !font-normal leading-relaxed text-[#0D2240]/60"
                      style={inter}
                    >
                      {desc}
                    </p>
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="mt-6 flex items-center gap-4">
              <span className="h-px flex-1 bg-[#0D2240]/10" aria-hidden="true" />
              <span
                className="!text-[11px] !font-normal uppercase tracking-[0.2em] text-[var(--lumen-cyan)]"
                style={inter}
              >
                Join the movement
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
