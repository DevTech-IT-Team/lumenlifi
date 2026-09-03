import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Building2, Factory, GraduationCap, Server } from 'lucide-react';
import corporateBoardroomImg from '../../../../public/images/hero/corporate.png';
import manufacturingImg from '../../../../public/images/hero/manufacturing.png';
import datacenterImg from '../../../../public/images/hero/data-centers.png';
import schoolImg from '../../../../public/images/hero/education.png';

const sectors = [
  {
    id: 'corp',
    kicker: 'Corporate office',
    title: 'Holographic Boardroom',
    desc: 'Make office teamwork better with fast light hubs. Show smooth 3D presentations, share files instantly, and remove messy internet cables from the building.',
    feature: 'Private Walls Protection',
    img: corporateBoardroomImg,
    icon: Building2,
  },
  {
    id: 'factory',
    kicker: 'Heavy machinery',
    title: 'Industrial Floors',
    desc: 'Keep factory robots running smoothly without network problems. Light waves never get mixed up by big machines, sending data right where it needs to go.',
    feature: 'Zero radio interference',
    img: manufacturingImg,
    icon: Factory,
  },
  {
    id: 'data',
    kicker: 'Optical between racks',
    title: 'Next-Gen Data Centers',
    desc: 'Replace piles of cables with beams of light between server racks. Computer rooms stay cooler and files move much faster.',
    feature: 'Faster core links',
    img: datacenterImg,
    icon: Server,
  },
  {
    id: 'school',
    kicker: 'High-density classrooms',
    title: 'Smart Campuses',
    desc: 'Stop school internet from slowing down when every student goes online. Each light gives a direct connection down to the desk.',
    feature: 'Lag-free classrooms',
    img: schoolImg,
    icon: GraduationCap,
  },
];

export default function EcosystemSection() {
  const [activeId, setActiveId] = useState(sectors[0].id);

  return (
    <section
      id="shop"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background:
          'radial-gradient(ellipse 120% 100% at 50% 115%, #0a1a32 0%, #0d2240 35%, #1a4468 60%, #ebf5ff 100%)',
      }}
    >
      <div className="mx-auto w-full max-w-[1380px] px-4 sm:px-6">
        <div className="mx-auto mb-10 max-w-3xl text-center sm:mb-14">
          <h2
            className="!m-0 !text-[clamp(2.25rem,5vw,3.25rem)] !font-normal leading-[1.15] tracking-[-0.02em] text-[#0D2240]"
            style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
          >
            Everything You Need to{' '}
            <span className="text-[var(--lumen-cyan)]">Connect</span>
          </h2>
          <p
            className="!mt-4 !text-base !font-normal leading-relaxed text-[#0D2240]/60 sm:!text-lg"
            style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
          >
            One LiFi platform. All the light-speed tools your business needs to secure, scale, and
            deliver connectivity at work.
          </p>
        </div>

        {/* Accordion cards — stack on mobile, row on desktop */}
        <div
          className="flex flex-col gap-3 sm:gap-4 lg:h-[420px] lg:flex-row"
          onMouseLeave={() => setActiveId(sectors[0].id)}
        >
          {sectors.map((item) => {
            const isActive = activeId === item.id;
            const Icon = item.icon;

            return (
              <article
                key={item.id}
                onMouseEnter={() => setActiveId(item.id)}
                onFocus={() => setActiveId(item.id)}
                tabIndex={0}
                className={`group relative min-h-[220px] overflow-hidden rounded-[1.25rem] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] sm:min-h-[260px] lg:min-h-0 ${
                  isActive
                    ? 'flex-[2.6] bg-white shadow-[0_20px_50px_rgba(13,34,64,0.12)] lg:flex-[3.2]'
                    : 'flex-[1] bg-[#0D2240] shadow-[0_12px_32px_rgba(13,34,64,0.1)]'
                }`}
              >
                {/* Expanded layout */}
                <div
                  className={`absolute inset-0 flex transition-opacity duration-300 ${
                    isActive ? 'pointer-events-auto opacity-100' : 'pointer-events-none opacity-0'
                  }`}
                >
                  <div className="flex w-full flex-col justify-between p-5 sm:p-6 lg:w-[46%] lg:p-8">
                    <div>
                      <p
                        className="!m-0 inline-flex items-center gap-1.5 !text-xs !font-normal uppercase tracking-[0.18em] text-[var(--lumen-cyan)] sm:!text-sm"
                        style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                      >
                        <Icon className="h-4 w-4" />
                        {item.kicker}
                      </p>
                      <h3
                        className="!mt-3 !text-2xl !font-normal leading-snug text-[#0D2240] sm:!text-3xl lg:!text-[2rem]"
                        style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <p
                        className="!mt-3 !text-base !font-normal leading-relaxed text-[#0D2240]/65 sm:!text-lg"
                        style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                      >
                        {item.desc}
                      </p>
                    </div>
                    <div className="mt-6 flex flex-wrap items-center gap-3">
                      <span className="rounded-full bg-[var(--lumen-cyan)]/15 px-3 py-1.5 text-sm !font-normal text-[#0D2240]">
                        {item.feature}
                      </span>
                      <Link
                        href="/products"
                        prefetch={false}
                        className="inline-flex items-center gap-1.5 text-base !font-normal text-[var(--lumen-cyan)] transition-opacity hover:opacity-70"
                      >
                        Read More
                        <ArrowUpRight className="h-4 w-4" />
                      </Link>
                    </div>
                  </div>
                  <div className="relative hidden min-h-[180px] flex-1 overflow-hidden lg:block">
                    <Image
                      src={item.img}
                      alt={item.title}
                      fill
                      loading="lazy"
                      sizes="40vw"
                      className="object-cover"
                    />
                    <div className="pointer-events-none absolute inset-0 bg-gradient-to-l from-transparent to-white/10" />
                  </div>
                </div>

                {/* Collapsed layout */}
                <div
                  className={`absolute inset-0 transition-opacity duration-300 ${
                    isActive ? 'pointer-events-none opacity-0' : 'pointer-events-auto opacity-100'
                  }`}
                >
                  <Image
                    src={item.img}
                    alt=""
                    fill
                    loading="lazy"
                    sizes="(max-width: 1024px) 100vw, 20vw"
                    className="object-cover"
                    aria-hidden="true"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0D2240] via-[#0D2240]/55 to-[#0D2240]/15" />
                  <div className="absolute inset-x-0 bottom-0 flex items-end justify-between gap-2 p-4 sm:p-5">
                    <div className="min-w-0">
                      <h3
                        className="!m-0 !text-base !font-normal uppercase leading-tight tracking-[0.04em] text-white sm:!text-lg"
                        style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
                      >
                        {item.title}
                      </h3>
                      <p className="!mt-2 !text-sm !font-normal text-white/70">Read More</p>
                    </div>
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-white/20 bg-[#0D2240]/70 text-white backdrop-blur-sm">
                      <ArrowUpRight className="h-4 w-4" />
                    </span>
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        <div className="mt-10 text-center sm:mt-12">
          <Link
            href="/products"
            prefetch={false}
            className="inline-flex h-12 items-center gap-2 rounded-full bg-[#EBF5FF] px-8 text-sm !font-normal !text-[#0D2240] ring-1 ring-[#0D2240]/15 transition-colors hover:bg-white"
          >
            View Production Catalog
            <ArrowUpRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </section>
  );
}
