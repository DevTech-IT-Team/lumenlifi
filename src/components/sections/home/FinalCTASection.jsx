import Link from 'next/link';
import { motion } from 'framer-motion';
import { ArrowRight } from 'lucide-react';

function BackgroundPaths() {
  const paths = Array.from({ length: 18 }, (_, i) => ({
    id: i,
    d: `M-${200 + i * 20} ${100 + i * 15} C ${200 + i * 30} ${300 - i * 10}, ${400 + i * 20} ${-50 + i * 20}, ${1200 + i * 30} ${200 + i * 15}`,
    duration: 15 + (i % 5) * 3,
    delay: (i % 4) * 0.5,
  }));

  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-30">
      <svg
        className="h-full min-h-[300px] w-full min-w-[1000px]"
        viewBox="0 0 1200 400"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
      >
        {paths.map((path) => (
          <path
            key={path.id}
            d={path.d}
            stroke="var(--lumen-cyan, #00C2C7)"
            strokeWidth="1.2"
            strokeOpacity="0.4"
            className="animate-pulse"
            style={{
              animationDuration: `${path.duration}s`,
              animationDelay: `${path.delay}s`,
            }}
          />
        ))}
      </svg>
    </div>
  );
}

export default function FinalCTASection() {
  return (
    <section
      className="cta-banner page-screen relative w-full overflow-hidden"
      id="cta-final"
      style={{
        background:
          'radial-gradient(ellipse 80% 90% at 85% 20%, rgba(0,194,199,0.22), transparent 55%), radial-gradient(ellipse 70% 80% at 10% 90%, rgba(13,34,64,0.9), transparent 50%), #071820',
      }}
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-50"
        style={{
          backgroundImage: 'var(--lumen-grid-image-dark)',
          backgroundSize: 'var(--lumen-grid-size) var(--lumen-grid-size)',
        }}
      />
      <BackgroundPaths />

      <div className="relative z-10 mx-auto flex w-full max-w-7xl items-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="max-w-3xl text-left"
        >
          <h2 className="lumen-display-light mb-5">
            Leave old radio waves behind.
            <br />
            <span className="text-[var(--lumen-cyan)]">Live at the speed of light.</span>
          </h2>
          <p className="lumen-lead-light mb-8 max-w-xl">
            Upgrade your home to internet delivered through light — faster, private, and free of radio congestion.
          </p>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <Link
              href="/products"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg px-8 text-sm font-bold tracking-wide text-white"
              style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
            >
              Order Now
              <ArrowRight className="h-4 w-4" />
            </Link>
            <Link
              href="/contact"
              className="inline-flex h-12 items-center justify-center gap-2 rounded-lg border border-white/25 px-8 text-sm font-bold text-white transition-colors hover:border-[var(--lumen-cyan)] hover:text-[var(--lumen-cyan)]"
            >
              Contact Us
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
