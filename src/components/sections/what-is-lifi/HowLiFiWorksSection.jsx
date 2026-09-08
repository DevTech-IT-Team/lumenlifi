'use client';

import { motion } from 'framer-motion';

const steps = [
  {
    step: '01',
    title: 'LED Modulation',
    desc: 'LED bulbs flick on and off millions of times per second to transmit binary code, completely invisible to the human eye.',
  },
  {
    step: '02',
    title: 'Optical Reception',
    desc: 'A specialized photoreceiver detects the imperceptible light signals and converts them into a high-speed data stream.',
  },
  {
    step: '03',
    title: 'Instant Connection',
    desc: 'Your device receives a secure, zero-latency network connection without causing or suffering from RF interference.',
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function HowLiFiWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#0D2240' }}
    >
      <div
        className="pointer-events-none absolute left-1/2 top-0 h-[480px] w-[min(900px,100%)] -translate-x-1/2 rounded-full opacity-50 blur-[120px]"
        style={{
          background:
            'radial-gradient(circle, rgba(0,194,199,0.22) 0%, rgba(26,110,191,0.1) 45%, transparent 70%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mx-auto mb-14 max-w-2xl text-center sm:mb-16 lg:mb-20"
        >
          <p
            className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
            style={inter}
          >
            Process
          </p>
          <h2
            className="!mt-3 !m-0 !text-[clamp(2rem,4.5vw,3.25rem)] !font-normal leading-[1.1] tracking-[-0.03em] text-[#EBF5FF]"
            style={{ ...geist, fontSize: 'clamp(2rem, 4.5vw, 3.25rem)' }}
          >
            How LiFi operates
          </h2>
          <p
            className="!mt-4 !text-sm !font-normal leading-relaxed text-white/55 sm:!text-base"
            style={inter}
          >
            Light carries your data in three invisible steps — from LED pulse to secure connection.
          </p>
        </motion.div>

        {/* Process flow */}
        <div className="relative">
          {/* Connector line — desktop */}
          <div
            className="pointer-events-none absolute left-[16.66%] right-[16.66%] top-7 hidden h-px bg-white/15 md:block"
            aria-hidden="true"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-[var(--lumen-cyan)]/50 to-transparent" />
          </div>

          <ol className="m-0 grid list-none grid-cols-1 gap-12 p-0 md:grid-cols-3 md:gap-8 lg:gap-12">
            {steps.map((item, idx) => (
              <motion.li
                key={item.step}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.35 }}
                transition={{ duration: 0.55, delay: idx * 0.1, ease: [0.22, 1, 0.36, 1] }}
                className="relative text-center md:text-left"
              >
                <div className="flex flex-col items-center md:items-start">
                  <span
                    className="relative z-10 flex h-14 w-14 items-center justify-center rounded-full border border-[var(--lumen-cyan)]/40 bg-[#0D2240] !text-sm !font-normal tracking-[0.12em] text-[var(--lumen-cyan)]"
                    style={inter}
                  >
                    {item.step}
                  </span>

                  {/* Mobile connector */}
                  {idx < steps.length - 1 && (
                    <span
                      className="my-4 h-10 w-px bg-gradient-to-b from-[var(--lumen-cyan)]/50 to-transparent md:hidden"
                      aria-hidden="true"
                    />
                  )}

                  <h3
                    className="!mt-6 !m-0 !text-[clamp(1.35rem,2.5vw,1.75rem)] !font-normal leading-snug tracking-[-0.02em] text-[#EBF5FF]"
                    style={geist}
                  >
                    {item.title}
                  </h3>
                  <p
                    className="!mt-3 !m-0 max-w-sm !text-sm !font-normal leading-relaxed text-white/55 sm:!text-[15px]"
                    style={inter}
                  >
                    {item.desc}
                  </p>
                </div>
              </motion.li>
            ))}
          </ol>
        </div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="!mt-14 text-center !text-[11px] !font-normal uppercase tracking-[0.2em] text-white/30 sm:!mt-16"
          style={inter}
        >
          LED Modulation · Optical Reception · Instant Connection
        </motion.p>
      </div>
    </section>
  );
}
