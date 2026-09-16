import AboutFeatureCards from './AboutFeatureCards';

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

        <AboutFeatureCards />
      </div>
    </section>
  );
}
