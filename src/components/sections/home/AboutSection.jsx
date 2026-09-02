import Image from 'next/image';
import Link from 'next/link';

const cardBaseClass =
  'group relative flex overflow-hidden rounded-[1.75rem] border border-[#161C3B]/10 bg-[#0c1228] transition-shadow duration-300 hover:shadow-[0_20px_50px_rgba(22,28,59,0.18)]';

const contentClass =
  'relative z-10 transition-all duration-300 group-hover:translate-y-0';

const headingClass =
  '!font-normal leading-[1.2] tracking-[-0.02em] text-white transition-colors duration-300 group-hover:text-white';

const bodyClass =
  '!text-sm !font-normal leading-relaxed text-white/55 transition-colors duration-300 group-hover:text-white/85';

const bgImageClass =
  'object-cover transition-all duration-300 blur-[3px] scale-[1.03] group-hover:blur-[5px] group-hover:scale-[1.05]';

function CardBrandLink({ align = 'left' }) {
  return (
    <Link
      href="/"
      className={`${contentClass} mt-8 flex items-center gap-2.5 transition-opacity hover:opacity-80 ${
        align === 'right' ? 'justify-end' : align === 'center' ? 'justify-center' : ''
      }`}
    >
      <div className="relative h-8 w-8 shrink-0 overflow-hidden rounded-md bg-white p-0.5">
        <Image src="/brand/logo.webp" alt="LumenFi" fill sizes="32px" className="object-contain" />
      </div>
      <span
        className="!text-sm !font-normal uppercase tracking-[0.14em] text-white"
        style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
      >
        Lumen<span className="text-[var(--lumen-cyan)]">Fi</span>
      </span>
    </Link>
  );
}

export default function AboutSection() {
  return (
    <section className="w-full bg-[#EBF5FF] px-4 py-14 sm:px-8 sm:py-20 lg:py-18">
      <div className="mx-auto max-w-[1520px]">
        {/* Top header row */}
        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:mb-28 lg:grid-cols-2 lg:gap-16 xl:mb-32">
          <div>
            {/* <span className="inline-flex items-center gap-2 rounded-full bg-[var(--lumen-cyan)] px-3.5 py-1.5 text-[10px] uppercase tracking-[0.2em] text-[#0c1228] sm:text-[11px]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#0c1228]" />
              About Us
            </span> */}

            <h2
              className="!mt-6 !text-[2.25rem] !font-normal uppercase leading-[1.05] tracking-[-0.02em] text-[#161C3B] sm:!text-[2.75rem] lg:!text-[3.25rem]"
              style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
            >
              Where Light
              <br />
              Meets Innovation
            </h2>
          </div>

          <p
            className="!text-sm !font-normal leading-[1.85] text-[#161C3B]/70 sm:!text-base lg:pt-10"
            style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
          >
            LumenFi was born from a shared passion for next-generation connectivity and a desire to
            create an internet experience that transcends the ordinary. Built at the intersection of
            photonics and smart living, LumenFi brings together the reliability of light with the
            innovative spirit of seamless, secure, high-speed connectivity.
          </p>
        </div>

        {/* Three cards */}
        <div className="grid grid-cols-1 items-end gap-3 md:grid-cols-12 md:gap-4 lg:gap-5">
          {/* Left — ecosystem visual */}
          <div
            className={`${cardBaseClass} min-h-[360px] flex-col justify-between p-6 sm:min-h-[380px] sm:p-8 md:col-span-4 lg:min-h-[400px]`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/about/about_cm.png"
                alt="LumenFi LiFi ecosystem visualization"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`${bgImageClass} object-center`}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-r from-[#0c1228]/90 via-[#0c1228]/50 to-transparent transition-all duration-300 group-hover:from-[#0c1228]/95 group-hover:via-[#0c1228]/70"
              aria-hidden="true"
            />

            <div className={contentClass}>
              <h3
                className={`!mt-6 !text-[1.65rem] sm:!text-[1.85rem] lg:!text-[2rem] ${headingClass}`}
                style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
              >
                One light.
                <br />
                Infinite connections.
              </h3>

              <p
                className={`!mt-5 max-w-[300px] ${bodyClass}`}
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                Every bulb becomes a node in your home network — linking TVs, laptops, phones, and
                smart devices through pure light.
              </p>
            </div>

            <CardBrandLink />
          </div>

          {/* Center — vision copy (taller) */}
          <div
            className={`${cardBaseClass} min-h-[300px] flex-col justify-between p-6 sm:min-h-[380px] sm:p-8 md:col-span-4 md:-mt-8 md:min-h-[440px] lg:-mt-10 lg:min-h-[460px]`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/about/about_c1.png"
                alt=""
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`${bgImageClass} object-right`}
                aria-hidden="true"
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0c1228]/90 via-[#0c1228]/40 to-[#0c1228]/70 transition-all duration-300 group-hover:from-[#0c1228]/95 group-hover:via-[#0c1228]/50"
              aria-hidden="true"
            />

            <div className={`${contentClass} text-center`}>
              <h3
                className={`!mt-6 !text-[1.65rem] sm:!text-[1.85rem] lg:!text-[2rem] ${headingClass}`}
                style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
              >
                Connecting every room.
                <br />
                Powering every possibility.
              </h3>

              <p
                className={`!mt-5 mx-auto max-w-[300px] ${bodyClass}`}
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                LumenFi is the universal LiFi platform that makes high-speed, secure connectivity
                seamless through the lights already in your home.
              </p>
            </div>

            <CardBrandLink align="center" />
          </div>

          {/* Right — gaming / zero lag */}
          <div
            className={`${cardBaseClass} min-h-[300px] flex-col justify-between p-6 sm:min-h-[380px] sm:p-8 md:col-span-4 lg:min-h-[400px]`}
          >
            <div className="absolute inset-0 overflow-hidden">
              <Image
                src="/images/hero/partner-creator.png"
                alt="LiFi enabled gaming setup"
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className={`${bgImageClass} object-center`}
              />
            </div>
            <div
              className="pointer-events-none absolute inset-0 bg-gradient-to-l from-[#0c1228]/90 via-[#0c1228]/50 to-transparent transition-all duration-300 group-hover:from-[#0c1228]/95 group-hover:via-[#0c1228]/70"
              aria-hidden="true"
            />

            <div className={`${contentClass} ml-auto text-right`}>
              <h3
                className={`!mt-6 !text-[1.65rem] sm:!text-[1.85rem] lg:!text-[2rem] ${headingClass}`}
                style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
              >
                Play without
                <br />
                compromise.
              </h3>

              <p
                className={`!mt-5 ml-auto max-w-[300px] ${bodyClass}`}
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                A direct beam of light to your rig means instant response — no Wi-Fi congestion, no
                interference, no dropped frames.
              </p>
            </div>

            <CardBrandLink align="right" />
          </div>
        </div>
      </div>
    </section>
  );
}
