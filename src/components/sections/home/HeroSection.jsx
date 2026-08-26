import Link from 'next/link';
import Image from 'next/image';
import { ArrowRight } from 'lucide-react';
import MainLiFiVideoSection from './MainLiFiVideoSection';

const PARTNERS = ['IEEE 802.11bb', 'LiFi Consortium', 'IEC', 'ITU-T', 'ISO'];

export default function HeroSection() {
  return (
    <>
      <section className="home-hero page-screen-hero relative isolate w-full overflow-hidden bg-[#06131d]">
        <div className="absolute inset-0 -z-20">
          <Image
            src="/images/hero/Homebg.png"
            alt="LumenFi home LiFi connectivity"
            fill
            priority
            quality={90}
            sizes="100vw"
            className="object-cover object-center"
          />
        </div>

        <div className="pointer-events-none absolute inset-0 -z-10 bg-[linear-gradient(180deg,rgba(6,19,29,0.38)_0%,rgba(6,19,29,0.52)_45%,rgba(6,19,29,0.78)_100%)]" />

        <div className="relative z-10 mx-auto flex min-h-0 w-full max-w-[1100px] flex-1 flex-col items-center justify-center gap-6 px-4 pb-12 pt-24 text-center sm:gap-10 sm:px-6 sm:pb-16 sm:pt-28">
          <p className="hero-eyebrow">Light-powered connectivity</p>

          <h1 className="hero-heading">
            <span className="hero-heading-main">The Speed of Light</span>
            <span className="hero-heading-accent">Now in Your Living Room</span>
          </h1>

          <p className="hero-copy">
            The world&apos;s first home internet powered entirely by invisible infrared light — delivering
            secure, ultra-fast connectivity without radio waves.
          </p>

          <div className="hero-actions">
            <Link href="/products" prefetch={false} className="hero-btn-primary">
              Order Now
              <ArrowRight className="h-5 w-5" />
            </Link>
            <Link href="/what-is-lifi" prefetch={false} className="hero-btn-secondary">
              Watch How It Works
            </Link>
          </div>

          <p className="hero-proof">Secure · Fast · Radio-free</p>
        </div>
      </section>

      <div className="hero-partners">
        <p>As featured by</p>
        <div className="hero-partner-row">
          {PARTNERS.map((name) => (
            <span key={name}>{name}</span>
          ))}
        </div>
      </div>

      <MainLiFiVideoSection />
    </>
  );
}
