import AboutFeatureCards from '../home/AboutFeatureCards';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function PoleFeaturesSection() {
  return (
    <section className="relative overflow-hidden bg-white py-14 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-[1520px] px-4 sm:px-8">
        <div className="mx-auto mb-12 max-w-2xl text-center sm:mb-16">
          <h2
            className="!m-0 !text-[clamp(1.75rem,4vw,2.5rem)] !font-bold tracking-tight text-[#0D2240]"
            style={geist}
          >
            Why LiFi Pillar
          </h2>
          <p
            className="!mt-4 !text-base !font-normal leading-relaxed text-[#0D2240]/60"
            style={inter}
          >
            Home décor that lights your room and connects your devices with LiFi — launching soon.
          </p>
        </div>

        <AboutFeatureCards />
      </div>
    </section>
  );
}
