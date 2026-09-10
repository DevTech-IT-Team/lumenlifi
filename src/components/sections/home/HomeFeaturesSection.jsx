import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowUpRight, Zap } from 'lucide-react';
import gamingImg from '../../../../public/images/hero/gaminggg.png';
import streamingImg from '../../../../public/images/hero/fast_str.png';
import infiniteDevicesImg from '../../../../public/images/hero/infinite.png';
import invisibleInfraImg from '../../../../public/images/hero/free.png';

const fadeUp = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: [0.16, 1, 0.3, 1] } },
};

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

function ImageHoverCard({
  src,
  alt,
  sizes,
  eyebrow,
  title,
  desc,
  className = '',
  minHeightClass = 'min-h-[280px]',
  compact = false,
}) {
  return (
    <motion.div
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={fadeUp}
      className={`group relative overflow-hidden rounded-[1.25rem] border border-white/10 bg-[#0D2240] ${minHeightClass} ${className}`}
    >
      <Image
        src={src}
        alt={alt}
        fill
        loading="lazy"
        sizes={sizes}
        className="object-cover transition-transform duration-500 group-hover:scale-[1.04]"
      />

      {/* Hover: blur + related copy */}
      <div
        className={`absolute inset-0 flex flex-col justify-end bg-[#0c1228]/0 opacity-0 backdrop-blur-0 transition-all duration-300 ease-out group-hover:bg-[#0c1228]/55 group-hover:opacity-100 group-hover:backdrop-blur-md ${
          compact ? 'p-4 sm:p-4' : 'p-5 sm:p-6'
        }`}
      >
        <div className="translate-y-3 transition-transform duration-300 ease-out group-hover:translate-y-0">
          {eyebrow && (
            <span
              className={`font-normal uppercase tracking-[0.18em] text-[var(--lumen-cyan)] ${
                compact ? 'text-[10px]' : 'text-xs sm:text-sm'
              }`}
              style={inter}
            >
              {eyebrow}
            </span>
          )}
          <p
            className={`!m-0 !font-normal text-white ${
              compact ? '!mt-1 !text-base sm:!text-lg' : '!mt-2 !text-xl sm:!text-2xl'
            }`}
            style={geist}
          >
            {title}
          </p>
          {desc && (
            <p
              className={`!mb-0 max-w-sm !font-normal leading-relaxed text-white/75 ${
                compact ? '!mt-1.5 !text-xs sm:!text-sm' : '!mt-3 !text-base sm:!text-lg'
              }`}
              style={inter}
            >
              {desc}
            </p>
          )}
        </div>
      </div>
    </motion.div>
  );
}

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
            style={inter}
          >
            Leave old radio waves behind and move at the speed of light.
          </p>
          <Link
            href="/products"
            prefetch={false}
            className="mt-8 inline-flex items-center gap-2 rounded-full border border-[#161C3B]/10 bg-[#EBF5FF] px-6 py-3 text-sm !font-normal !text-black transition-colors hover:bg-[#dcecff]"
          >
            View Products
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
                    className="!text-3xl !font-normal leading-none text-white sm:!text-3xl"
                    style={geist}
                  >
                    High-Speed Internet
                  </p>
                  <p className="!mt-2 !text-sm !font-normal text-white/55" style={inter}>
                    Max connection speed
                  </p>
                </div>
                <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full border border-[var(--lumen-cyan)]/30 bg-[var(--lumen-cyan)]/10 text-[var(--lumen-cyan)]">
                  <Zap className="h-5 w-5" />
                </div>
              </div>
            </motion.div>

            <ImageHoverCard
              src={gamingImg}
              alt="Zero-Lag Gaming with LiFi"
              sizes="(max-width: 768px) 100vw, 25vw"
              eyebrow="Pure Light Connection"
              title="Zero-Lag Gaming"
              desc="Competitive play over light beams—no radio congestion, no mid-match dropouts."
              className="flex-1 lg:min-h-[340px]"
              minHeightClass="min-h-[280px]"
              compact
            />
          </div>

          {/* Center column */}
          <div className="flex flex-col gap-4 md:col-span-6 lg:col-span-6">
            <ImageHoverCard
              src={streamingImg}
              alt="Smooth 4K and 8K streaming with LiFi"
              sizes="(max-width: 768px) 100vw, 50vw"
              eyebrow="Ultra-Fast Signal"
              title="Cinema-Smooth Streaming"
              desc="4K and 8K video stays locked to the light path—no buffering when the house is online."
              minHeightClass="min-h-[220px] sm:min-h-[280px]"
            />

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
                  <h3 className="!text-lg !font-normal leading-snug text-white sm:!text-xl" style={geist}>
                    Connect Countless Devices
                  </h3>
                  <p className="!mt-3 !text-sm !font-normal leading-relaxed text-white/55" style={inter}>
                    Connect hundreds of smart gadgets in one room without slowing your network down.
                  </p>
                </div>
              </motion.div>

              <ImageHoverCard
                src={infiniteDevicesImg}
                alt="Connect countless devices with LiFi"
                sizes="(max-width: 768px) 100vw, 25vw"
                eyebrow="Room-Scale Capacity"
                title="Infinite Devices"
                desc="Phones, tablets, TVs, and sensors share one light field without fighting for Wi-Fi channels."
                minHeightClass="min-h-[200px]"
                compact
              />
            </div>
          </div>

          {/* Right column */}
          <ImageHoverCard
            src={invisibleInfraImg}
            alt="Hidden network hardware with LiFi"
            sizes="(max-width: 768px) 100vw, 25vw"
            eyebrow="Invisible Setup"
            title="100% Radio-Free"
            desc="Connectivity through ceiling light—no router clutter, no RF noise in the room."
            className="md:col-span-3 md:min-h-full lg:col-span-3"
            minHeightClass="min-h-[320px]"
          />
        </div>
      </div>
    </section>
  );
}
