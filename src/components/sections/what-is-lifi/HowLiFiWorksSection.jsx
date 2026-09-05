import Image from 'next/image';

const steps = [
  {
    step: '01',
    title: 'LED Modulation',
    desc: 'LED bulbs flick on and off millions of times per second to transmit binary code, completely invisible to the human eye.',
    tone: 'light',
    height: 'min-h-[240px] sm:min-h-[260px] md:min-h-[280px] md:h-[280px]',
    stepClass: '!text-[11px]',
    titleClass: '!text-[1.35rem] sm:!text-[1.5rem]',
    descClass: '!text-sm',
  },
  {
    step: '02',
    title: 'Optical Reception',
    desc: 'A specialized photoreceiver detects the imperceptible light signals and converts them into a high-speed data stream.',
    tone: 'accent',
    height: 'min-h-[290px] sm:min-h-[320px] md:min-h-[350px] md:h-[350px]',
    stepClass: '!text-xs sm:!text-sm',
    titleClass: '!text-[1.6rem] sm:!text-[1.85rem]',
    descClass: '!text-base sm:!text-[1.05rem]',
  },
  {
    step: '03',
    title: 'Instant Connection',
    desc: 'Your device receives a secure, zero-latency network connection without causing or suffering from RF interference.',
    tone: 'dark',
    height: 'min-h-[340px] sm:min-h-[390px] md:min-h-[430px] md:h-[430px]',
    stepClass: '!text-sm sm:!text-base',
    titleClass: '!text-[1.9rem] sm:!text-[2.25rem]',
    descClass: '!text-base sm:!text-lg',
    bgImage: '/images/about/about_c1.png',
  },
];

const toneStyles = {
  light: {
    card: 'bg-[#E8EEF5] text-[#0D2240]',
    title: 'text-[#0D2240]',
    desc: 'text-[#0D2240]/60',
    step: 'text-[#0D2240]/35',
  },
  accent: {
    card: 'bg-[var(--lumen-cyan)] text-white',
    title: 'text-white',
    desc: 'text-white/80',
    step: 'text-white/50',
  },
  dark: {
    card: 'bg-[#0c1228] text-white',
    title: 'text-[#EBF5FF]',
    desc: 'text-white/60',
    step: 'text-white/35',
  },
};

export default function HowLiFiWorksSection() {
  return (
    <section
      id="how-it-works"
      className="relative w-full overflow-hidden py-16 sm:py-20 lg:py-24"
      style={{
        background:
          'linear-gradient(180deg, #EBF5FF 0%, #c5d9ef 28%, #3a5578 62%, #0D2240 82%, #080e1c 100%)',
      }}
    >
      <div className="relative mx-auto max-w-[1380px] px-4 sm:px-6">
        {/* Header band — reference-style split + oversized watermark */}
        <div className="relative mb-10 overflow-hidden rounded-[1.5rem] sm:mb-14 lg:mb-16">
          <p
            className="pointer-events-none absolute inset-x-0 bottom-[-8%] select-none text-center !text-[clamp(5.5rem,20vw,12rem)] !font-normal leading-none tracking-[0.02em]"
            style={{
              fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif',
              fontWeight: 400,
              color: 'rgba(13, 34, 64, 0.12)',
            }}
            aria-hidden="true"
          >
            LiFi
          </p>

          <div className="relative z-10 grid grid-cols-1 gap-8 px-1 pb-10 pt-2 sm:grid-cols-2 sm:gap-12 sm:pb-14 lg:gap-16">
            <div>
              <h2
                className="!m-0 !text-lg !font-normal tracking-tight text-[#0D2240] sm:!text-xl"
                style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
              >
                How LiFi operates
              </h2>
              <p
                className="!mt-3 max-w-sm !text-sm !font-normal leading-relaxed text-[#0D2240]/60"
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                Light carries your data in three invisible steps — from LED pulse to secure
                connection.
              </p>
            </div>
            <div className="sm:text-right">
              <h3
                className="!m-0 !text-lg !font-normal tracking-tight text-[#0D2240] sm:!text-xl"
                style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
              >
                Three steps
              </h3>
              <p
                className="!mt-3 !text-sm !font-normal leading-relaxed text-[#0D2240]/55"
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                LED Modulation, Optical Reception, Instant Connection
              </p>
            </div>
          </div>
        </div>

        {/* Three feature cards — ascending heights */}
        <div className="grid grid-cols-1 items-end gap-4 md:grid-cols-3 md:gap-5 lg:gap-6">
          {steps.map((item) => {
            const tone = toneStyles[item.tone];

            return (
              <article
                key={item.step}
                className={`relative flex w-full flex-col overflow-hidden rounded-[1.75rem] p-6 sm:p-8 ${item.height} ${tone.card}`}
              >
                {item.bgImage ? (
                  <>
                    <div className="absolute inset-0 -z-0 overflow-hidden" aria-hidden="true">
                      <Image
                        src={item.bgImage}
                        alt=""
                        fill
                        sizes="(max-width: 768px) 100vw, 33vw"
                        className="object-cover object-right scale-110 blur-[6px]"
                      />
                      <div className="absolute inset-0 bg-[#0c1228]/55" />
                    </div>
                  </>
                ) : null}

                <div className="relative z-10 flex flex-col">
                  <span
                    className={`!font-normal uppercase tracking-[0.18em] ${item.stepClass} ${tone.step}`}
                    style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                  >
                    Step {item.step}
                  </span>
                  <h3
                    className={`!mt-4 !font-normal leading-tight tracking-[-0.02em] ${item.titleClass} ${tone.title}`}
                    style={{
                      fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif',
                      color: item.tone === 'dark' ? '#EBF5FF' : item.tone === 'accent' ? '#ffffff' : undefined,
                    }}
                  >
                    {item.title}
                  </h3>
                  <p
                    className={`!mt-3 max-w-[28ch] !font-normal leading-relaxed ${item.descClass} ${tone.desc}`}
                    style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
                  >
                    {item.desc}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
