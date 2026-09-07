'use client';

import { motion } from 'framer-motion';
import { BookOpen, Zap, Shield, Focus } from 'lucide-react';
import { fadeUp } from './variants';

const pillars = [
  {
    step: '01',
    icon: BookOpen,
    label: 'The Fundamentals of Li-Fi',
    desc: 'Understand the basic principles of Li-Fi, how light antennas transmit data through light waves, and why it is a powerful alternative to traditional Wi-Fi.',
  },
  {
    step: '02',
    icon: Zap,
    label: 'Speed and Performance',
    desc: 'Discover how Li-Fi achieves gigabit-per-second speeds and how its high-speed data transfer capabilities outpace current Wi-Fi technology.',
  },
  {
    step: '03',
    icon: Shield,
    label: 'Enhanced Security',
    desc: 'Learn why Li-Fi provides military-grade security. Since light cannot penetrate walls, data stays contained — eliminating outside interception.',
  },
  {
    step: '04',
    icon: Focus,
    label: 'Interference-Free Environments',
    desc: 'Explore how Li-Fi operates in the visible light spectrum, making it immune to the electromagnetic interference that plagues RF networks.',
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function CurriculumSection() {
  return (
    <section
      id="curriculum"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#EBF5FF' }}
    >
      <div
        className="pointer-events-none absolute -left-32 top-1/3 h-[420px] w-[420px] rounded-full opacity-50 blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(0,194,199,0.18) 0%, transparent 70%)' }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-5xl px-3 sm:px-5 lg:px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16"
        >
          <h2
            className="!mt-0 !m-0 !text-[clamp(2rem,4.5vw,3.25rem)] !font-bold leading-[1.1] tracking-[-0.03em] text-[#0D2240]"
            style={{ ...geist, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)', fontWeight: 700 }}
          >
            What you will learn
          </h2>
          <p
            className="!mt-4 !text-sm !font-semibold leading-relaxed text-[#0D2240]/65 sm:!text-base"
            style={{ ...inter, fontWeight: 600 }}
          >
            From curious beginner to Li-Fi expert — four focused pillars that turn complex optical
            networking into clear, actionable lessons.
          </p>
        </motion.div>

        {/* Zigzag path */}
        <div className="relative">
          {/* Center spine — desktop */}
          <div
            className="pointer-events-none absolute bottom-8 left-1/2 top-8 hidden w-px -translate-x-1/2 bg-[#0D2240]/12 lg:block"
            aria-hidden="true"
          />

          <ol className="relative m-0 list-none space-y-12 p-0 sm:space-y-16 lg:space-y-20">
            {pillars.map(({ step, icon: Icon, label, desc }, idx) => {
              const flip = idx % 2 === 1;

              return (
                <motion.li
                  key={label}
                  custom={idx}
                  variants={fadeUp}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, amount: 0.35 }}
                  className="relative grid grid-cols-1 items-center gap-6 lg:grid-cols-2 lg:gap-16"
                >
                  {/* Center node */}
                  <span
                    className="absolute left-0 top-0 z-10 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lumen-cyan)] text-[#0D2240] lg:left-1/2 lg:top-1/2 lg:-translate-x-1/2 lg:-translate-y-1/2"
                    aria-hidden="true"
                  >
                    <Icon size={18} strokeWidth={1.75} />
                  </span>

                  {/* Mobile left rail */}
                  {idx < pillars.length - 1 && (
                    <span
                      className="absolute left-5 top-10 bottom-[-3rem] w-px bg-[#0D2240]/12 lg:hidden"
                      aria-hidden="true"
                    />
                  )}

                  {/* Text block — zigzags left / right */}
                  <div
                    className={`pl-14 lg:pl-0 ${
                      flip
                        ? 'lg:col-start-2 lg:text-left'
                        : 'lg:col-start-1 lg:pr-10 lg:text-right'
                    }`}
                  >
                    <p
                      className={`!m-0 !text-[11px] !font-normal uppercase tracking-[0.2em] text-[var(--lumen-cyan)] ${
                        flip ? 'lg:text-left' : 'lg:text-right'
                      }`}
                      style={inter}
                    >
                      Step {step}
                    </p>
                    <h3
                      className="!mt-2 !m-0 !text-[clamp(1.35rem,2.5vw,1.85rem)] !font-normal leading-snug tracking-[-0.02em] text-[#0D2240]"
                      style={geist}
                    >
                      {label}
                    </h3>
                    <p
                      className={`!mt-3 !m-0 max-w-md !text-sm !font-normal leading-relaxed text-[#0D2240]/65 sm:!text-[15px] ${
                        flip ? 'lg:ml-0' : 'lg:ml-auto'
                      }`}
                      style={inter}
                    >
                      {desc}
                    </p>
                  </div>

                  {/* Opposite side — oversized step watermark */}
                  <div
                    className={`hidden select-none lg:block ${
                      flip ? 'lg:col-start-1 lg:row-start-1 lg:text-right lg:pr-10' : 'lg:col-start-2'
                    }`}
                    aria-hidden="true"
                  >
                    <span
                      className="!text-[clamp(4.5rem,10vw,7rem)] !font-normal leading-none tracking-tight text-[#0D2240]/10"
                      style={geist}
                    >
                      {step}
                    </span>
                  </div>
                </motion.li>
              );
            })}
          </ol>
        </div>
      </div>
    </section>
  );
}
