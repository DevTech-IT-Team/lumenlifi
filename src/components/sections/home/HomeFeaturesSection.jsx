import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Play, Zap } from 'lucide-react';
import gamingImg from '../../../../public/images/hero/gaming.png';
import streamingImg from '../../../../public/images/hero/streaming.png';
import infiniteDevicesImg from '../../../../public/images/hero/infinite.png';
import invisibleInfraImg from '../../../../public/images/hero/invisible.png';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

export default function HomeFeaturesSection() {
  return (
    <section
      className="page-screen section-wash-navy home-features relative overflow-hidden"
      style={{
        background:
          'radial-gradient(ellipse 120% 100% at 50% -15%, #0a1a32 0%, #0d2240 35%, #1a4468 65%, #ebf5ff 100%)',
      }}
    >
      <div className="mx-auto max-w-[1380px] px-4 sm:px-6">
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={fadeUp}
          className="mx-auto mb-12 max-w-3xl text-center sm:mb-16"
        >
          <h2
            className="!font-normal text-center text-white"
            style={{
              fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif',
              fontSize: 'var(--text-heading)',
              lineHeight: 1.2,
              fontWeight: 400,
            }}
          >
            WiFi connects your tech.
            <br />
            <span className="text-[var(--lumen-cyan)]">LiFi connects your life.</span>
          </h2>
          <p
            className="!mt-4 !text-sm !font-normal leading-relaxed text-white/75 [word-spacing:0.1em]"
            style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
          >
            Leave old radio waves behind and move at the speed of light.
          </p>
          <Link
            href="/products"
            prefetch={false}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#161C3B]/10 bg-[#EBF5FF] px-6 py-3 text-sm !font-normal !text-black transition-colors hover:bg-[#dcecff]"
          >
            Get Started
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-12 lg:gap-5">
          {/* Left column */}
          <div className="flex flex-col gap-4 md:col-span-3 lg:col-span-3">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="rounded-[1.25rem] border border-white/10 bg-[#0c1228] p-5 sm:p-6"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p
                    className="!text-3xl !font-normal leading-none text-white sm:!text-4xl"
                    style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
                  >
                    10 Gbps
                  </p>
                  <p
                    className="!mt-2 !text-sm !font-normal text-white/55"
                    style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                  >
                    Max connection speed
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--lumen-cyan)]/30 bg-[var(--lumen-cyan)]/10 text-[var(--lumen-cyan)]">
                  <Zap className="h-5 w-5" />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative min-h-[280px] flex-1 overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0D2240] lg:min-h-[340px]"
            >
              <Image
                src={gamingImg}
                alt="Zero-Lag Gaming with LiFi"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 25vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1228]/80 via-transparent to-transparent" />
              <div className="absolute bottom-4 left-4 right-4">
                <span className="text-[10px] font-normal uppercase tracking-[0.18em] text-[var(--lumen-cyan)]">
                  Pure Light Connection
                </span>
                <p
                  className="!mt-1 !text-base !font-normal text-white"
                  style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
                >
                  Zero-Lag Gaming
                </p>
              </div>
            </motion.div>
          </div>

          {/* Center column */}
          <div className="flex flex-col gap-4 md:col-span-6 lg:col-span-6">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              className="group relative min-h-[220px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0D2240] sm:min-h-[280px]"
            >
              <Image
                src={streamingImg}
                alt="Smooth 4K and 8K streaming with LiFi"
                fill
                loading="lazy"
                sizes="(max-width: 768px) 100vw, 50vw"
                className="object-cover transition-transform duration-500 group-hover:scale-[1.02]"
              />
              <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1228]/50 via-transparent to-transparent" />
              <div className="absolute bottom-4 right-4">
                <span className="inline-flex items-center gap-2 rounded-full border border-white/20 bg-[#0c1228]/70 px-4 py-2 text-xs !font-normal text-white backdrop-blur-md">
                  <Play className="h-3.5 w-3.5 fill-white text-white" />
                  Ultra-Fast Signal
                </span>
              </div>
            </motion.div>

            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="flex flex-col justify-between rounded-[1.25rem] border border-white/10 bg-[#0c1228] p-5 sm:p-6"
              >
                <span className="inline-flex w-fit rounded-full border border-[var(--lumen-cyan)]/30 bg-[var(--lumen-cyan)]/10 px-3 py-1 text-[10px] uppercase tracking-[0.16em] text-[var(--lumen-cyan)]">
                  No network overload
                </span>
                <div className="mt-6">
                  <h3
                    className="!text-lg !font-normal leading-snug text-white sm:!text-xl"
                    style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
                  >
                    Connect Countless Devices
                  </h3>
                  <p
                    className="!mt-3 !text-sm !font-normal leading-relaxed text-white/55"
                    style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                  >
                    Connect hundreds of smart gadgets in one room without slowing your network down.
                  </p>
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={fadeUp}
                className="group relative min-h-[200px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0D2240]"
              >
                <Image
                  src={infiniteDevicesImg}
                  alt="Connect countless devices with LiFi"
                  fill
                  loading="lazy"
                  sizes="(max-width: 768px) 100vw, 25vw"
                  className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
                />
              </motion.div>
            </div>
          </div>

          {/* Right column */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeUp}
            className="group relative min-h-[320px] overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0D2240] md:col-span-3 md:min-h-full lg:col-span-3"
          >
            <Image
              src={invisibleInfraImg}
              alt="Hidden network hardware with LiFi"
              fill
              loading="lazy"
              sizes="(max-width: 768px) 100vw, 25vw"
              className="object-cover transition-transform duration-500 group-hover:scale-[1.03]"
            />
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1228]/90 via-[#0c1228]/20 to-transparent" />

            <div className="absolute right-4 top-4 flex h-10 w-10 items-center justify-center rounded-full bg-[var(--lumen-cyan)] text-[#0c1228]">
              <ArrowUpRight className="h-4 w-4" />
            </div>

            <div className="absolute bottom-5 left-5 right-5">
              <p
                className="!text-3xl !font-normal leading-none text-white sm:!text-4xl"
                style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
              >
                100%
              </p>
              <p
                className="!mt-2 !text-sm !font-normal text-white/70"
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                Radio-free connectivity
              </p>
              <p
                className="!mt-4 !text-xs !font-normal uppercase tracking-[0.14em] text-[var(--lumen-cyan)]"
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                Invisible Setup
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
