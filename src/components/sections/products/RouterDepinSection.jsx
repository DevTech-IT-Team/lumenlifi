import { Coins } from 'lucide-react';

const FEATURES = [
  {
    title: 'Self-Subsidizing Hardware',
    desc: 'Your LumenFi router is a DePIN node. Keep it plugged in and providing coverage, and it earns tokens that actively offset its own cost—no monthly rental fees for a dead-end modem.',
  },
  {
    title: 'Plug-and-Play Earning',
    desc: 'Zero coding or maintenance. Connect to your modem, and while you stream, work, or sleep, the router validates the network and deposits rewards into your wallet.',
  },
  {
    title: 'Gamified Network Growth',
    desc: "You're a partner in a community-owned network. Reliable uptime and bandwidth earn you rewards for helping scale decentralized telecom.",
  },
];

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function RouterDepinSection() {
  return (
    <section
      id="depin"
      className="relative overflow-hidden py-16 sm:py-24"
      style={{ backgroundColor: '#EBF5FF' }}
    >
      <div
        className="pointer-events-none absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse 50% 55% at 90% 40%, rgba(15,184,154,0.1) 0%, transparent 55%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-12 lg:flex-row lg:items-center lg:gap-16 xl:gap-20">
          {/* Left — intro */}
          <div className="lg:w-[38%] lg:shrink-0">
            <div className="mb-5 inline-flex items-center gap-3">
              <span
                className="text-[11px] font-normal uppercase tracking-[0.22em] text-[#0FB89A] sm:text-xs"
                style={inter}
              >
                The Economic Layer
              </span>
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-md bg-[#0D2240]/06 text-[#0FB89A]">
                <Coins className="h-3.5 w-3.5" strokeWidth={2} />
              </span>
            </div>

            <h2
              className="!m-0 !text-[clamp(1.85rem,4vw,2.85rem)] !font-bold leading-[1.1] tracking-[-0.03em] text-[#0D2240]"
              style={geist}
            >
              DePIN Infrastructure Tokenization
            </h2>

            <p
              className="!mt-5 max-w-sm border-l-2 border-[#0FB89A] pl-4 !text-sm !font-normal leading-relaxed text-[#0D2240]/60 sm:!text-[15px]"
              style={inter}
            >
              Turn your internet bill into an income-generating asset.
            </p>
          </div>

          {/* Right — three feature blocks */}
          <div className="lg:min-w-0 lg:flex-1">
            <ul className="m-0 list-none space-y-0 border-t border-[#0D2240]/10 p-0">
              {FEATURES.map((feature, fi) => (
                <li
                  key={feature.title}
                  className="group grid grid-cols-[auto_1fr] gap-5 border-b border-[#0D2240]/10 py-6 sm:gap-6 sm:py-7"
                >
                  <span
                    className="pt-0.5 !text-xs !font-normal tracking-[0.16em] text-[#0FB89A]"
                    style={inter}
                  >
                    0{fi + 1}
                  </span>
                  <div>
                    <h3
                      className="!m-0 !text-lg !font-normal leading-snug tracking-tight text-[#0D2240] transition-colors group-hover:text-[#0FB89A] sm:!text-xl"
                      style={geist}
                    >
                      {feature.title}
                    </h3>
                    <p
                      className="!mt-2 max-w-lg !text-sm !font-normal leading-relaxed text-[#0D2240]/55 sm:!text-[15px]"
                      style={inter}
                    >
                      {feature.desc}
                    </p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
