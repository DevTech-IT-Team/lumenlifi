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

const CARDS = [
  {
    title: 'WiFi 7 boosted signal',
    body: 'Stronger coverage across every room — next-gen WiFi 7 keeps your home fast, stable, and ready for more devices.',
    image: '/images/hero/radio_wave1.png',
    alt: 'WiFi 7 boosted signal',
    object: 'object-center',
  },
  {
    title: 'LiFi',
    body: 'Internet through light — secure, low-interference connectivity that works alongside WiFi for light-speed performance.',
    image: '/images/about/about_cm.png',
    alt: 'LiFi light-based connectivity',
    object: 'object-center',
  },
  {
    title: 'Fashionable & decorative',
    body: 'Designed to look at home in modern interiors — a sleek pole that elevates your space while it connects it.',
    image: '/images/pole/11.png',
    alt: 'Decorative LiFi pole in a living room',
    object: 'object-center',
  },
  {
    title: 'Practical & versatile',
    body: 'One pole, many uses — shelves, lighting, screens, and smart gear. Built for real rooms and real routines.',
    image: '/images/pole/12.png',
    alt: 'Versatile LiFi pole with multiple use cases',
    object: 'object-center',
  },
];

function CardBrandLink() {
  return (
    <Link
      href="/"
      className={`${contentClass} mt-8 flex items-center gap-2.5 transition-opacity hover:opacity-80`}
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
        <div className="mb-16 grid grid-cols-1 items-start gap-8 lg:mb-28 lg:grid-cols-2 lg:gap-16 xl:mb-32">
          <div>
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
            LumenFi was created to bring faster, smarter connectivity into everyday life. By combining light and smart technology, we deliver a seamless, secure, and high-speed internet experience.
          </p>
        </div>

        <div className="grid grid-cols-1 items-end gap-3 sm:grid-cols-2 md:gap-4 lg:grid-cols-4 lg:gap-5">
          {CARDS.map((card, index) => {
            const isSide = index === 0 || index === CARDS.length - 1;
            return (
            <div
              key={card.title}
              className={`${cardBaseClass} flex-col justify-between p-6 sm:p-7 ${
                isSide
                  ? 'min-h-[340px] sm:min-h-[380px] lg:h-[440px] lg:min-h-[440px]'
                  : 'min-h-[300px] sm:min-h-[340px] lg:h-[380px] lg:min-h-[380px]'
              }`}
            >
              <div className="absolute inset-0 overflow-hidden">
                <Image
                  src={card.image}
                  alt={card.alt}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                  className={`${bgImageClass} ${card.object}`}
                />
              </div>
              <div
                className="pointer-events-none absolute inset-0 bg-gradient-to-t from-[#0c1228]/95 via-[#0c1228]/55 to-[#0c1228]/35 transition-all duration-300 group-hover:from-[#0c1228]/98 group-hover:via-[#0c1228]/70"
                aria-hidden="true"
              />

              <div className={contentClass}>
                <h3
                  className={`!mt-4 !text-[1.35rem] sm:!text-[1.5rem] lg:!text-[1.65rem] ${headingClass}`}
                  style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
                >
                  {card.title}
                </h3>

                <p
                  className={`!mt-4 max-w-[280px] ${bodyClass}`}
                  style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                >
                  {card.body}
                </p>
              </div>

              <CardBrandLink />
            </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
