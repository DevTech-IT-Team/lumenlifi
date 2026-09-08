import { ArrowRight, Wifi, Signal, Laptop, RefreshCw } from 'lucide-react';

const WIFI_FEATURES = [
  {
    title: 'Wall-to-Wall Blanket Coverage',
    desc: 'Utilizing the latest radio frequency advancements, the Wi-Fi 7 engine easily penetrates drywall, floors, and solid doors, ensuring every corner of your property stays connected without dead zones.',
    label: '01 / Coverage',
    icon: Signal,
    featured: false,
  },
  {
    title: 'Massive Device Handling Capacity',
    desc: 'Say goodbye to buffering when the whole family is online. The boosted routing algorithms handle dozens of high-bandwidth devices simultaneously—from 4K streaming TVs and smart home sensors to laptops and gaming consoles—without choking or slowing down.',
    label: '02 / Capacity',
    icon: Laptop,
    featured: true,
  },
  {
    title: 'Universal Backwards Compatibility',
    desc: "You don't need to buy new devices to see the benefits. Your current smartphones, tablets, and legacy hardware will immediately experience a noticeable speed and stability upgrade the moment they connect.",
    label: '03 / Compatible',
    icon: RefreshCw,
    featured: false,
  },
];

const cardRadius = 'rounded-tl-[2.75rem] rounded-tr-2xl rounded-bl-2xl rounded-br-[2.75rem]';
const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function RouterWifiSection() {
  return (
    <section
      id="wifi"
      className="relative overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{ backgroundColor: '#EBF5FF' }}
    >
      <div className="relative z-10 mx-auto max-w-6xl px-5 sm:px-8 lg:px-10">
        <div className="mx-auto mb-10 max-w-xl text-center sm:mb-12">
          <div className="mb-4 inline-flex items-center justify-center gap-3">
            <span className="text-[11px] font-normal uppercase tracking-[0.2em] text-[var(--lumen-cyan)] sm:text-xs">
              The Convenience Layer
            </span>
            <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#0D2240]/06 text-[var(--lumen-cyan)]">
              <Wifi className="h-3.5 w-3.5" strokeWidth={2} />
            </span>
          </div>
          <h2
            className="!m-0 !text-[clamp(1.85rem,4vw,2.75rem)] !font-bold leading-[1.1] tracking-[-0.03em] text-[#0D2240]"
            style={{ ...geist, fontSize: 'clamp(1.85rem, 4vw, 2.75rem)' }}
          >
            Boosted Wi-Fi 7
          </h2>
          <p
            className="!mt-4 mx-auto max-w-md !text-sm !font-normal leading-relaxed text-[#0D2240]/60 sm:!text-[15px]"
            style={inter}
          >
            The ultimate whole-building coverage that powers all your current devices.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:gap-6 md:grid-cols-3">
          {WIFI_FEATURES.map(({ icon: Icon, title, desc, label, featured }) => (
            <article
              key={title}
              className={`group flex min-h-[280px] flex-col p-6 transition-transform duration-300 hover:-translate-y-1 sm:min-h-[300px] sm:p-7 ${cardRadius} ${
                featured
                  ? 'bg-[var(--lumen-cyan)] text-[#0D2240]'
                  : 'bg-white text-[#0D2240] shadow-[0_12px_40px_-28px_rgba(13,34,64,0.35)]'
              }`}
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-full ${
                  featured ? 'bg-white text-[#0D2240]' : 'bg-[#0D2240] text-white'
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
                <span
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#0D2240] text-white transition-transform duration-300 group-hover:scale-110"
                  aria-hidden="true"
                >
                  <ArrowRight size={15} strokeWidth={1.75} />
                </span>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
