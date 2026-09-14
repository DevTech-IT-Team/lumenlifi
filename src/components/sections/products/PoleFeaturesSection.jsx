import { Home, Lightbulb, Shield } from 'lucide-react';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const FEATURES = [
  {
    icon: Lightbulb,
    title: 'Light that connects',
    desc: 'A beautiful indoor pole that lights your room and sends fast internet through LiFi.',
  },
  {
    icon: Home,
    title: 'Designed for the home',
    desc: 'Made to look like home décor — fits living rooms, offices, and stylish indoor spaces.',
  },
  {
    icon: Shield,
    title: 'Private by design',
    desc: 'LiFi stays inside the lit space, so your home network stays more secure.',
  },
];

export default function PoleFeaturesSection() {
  return (
    <section
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#EBF5FF' }}
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2
            className="!m-0 !text-[clamp(1.75rem,4vw,2.5rem)] !font-bold tracking-tight text-[#0D2240]"
            style={geist}
          >
            Why LiFi Pole
          </h2>
          <p
            className="!mt-4 !text-base !font-normal leading-relaxed text-[#0D2240]/60"
            style={inter}
          >
            Home décor that lights your room and connects your devices with LiFi — launching soon.
          </p>
        </div>

        <ul className="mt-12 grid list-none gap-8 p-0 sm:grid-cols-3 sm:gap-10">
          {FEATURES.map(({ icon: Icon, title, desc }) => (
            <li key={title}>
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-[#0D2240]/10 bg-white text-[var(--lumen-cyan)]">
                <Icon className="h-5 w-5" strokeWidth={1.75} />
              </span>
              <h3
                className="!mt-5 !m-0 !text-xl !font-normal tracking-tight text-[#0D2240]"
                style={geist}
              >
                {title}
              </h3>
              <p
                className="!mt-3 !text-sm !font-normal leading-relaxed text-[#0D2240]/60 sm:!text-[15px]"
                style={inter}
              >
                {desc}
              </p>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
