import Image from 'next/image';
import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function PoleHeroSection() {
  return (
    <section className="relative min-h-[min(100svh,880px)] overflow-hidden bg-[#0D2240]">
      <Image
        src="/images/pole/poles_ind.png"
        alt=""
        fill
        priority
        sizes="100vw"
        className="pointer-events-none object-cover object-center"
        aria-hidden="true"
      />
      <div
        className="pointer-events-none absolute inset-0 z-[1]"
        style={{
          background:
            'linear-gradient(90deg, rgba(13,34,64,0.88) 0%, rgba(13,34,64,0.65) 34%, rgba(13,34,64,0.22) 58%, transparent 78%)',
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto flex min-h-[min(100svh,880px)] max-w-7xl flex-col justify-center px-4 pb-16 pt-28 sm:px-6 sm:pb-20 sm:pt-32">
        <div className="max-w-xl">
          <div className="flex flex-wrap items-center gap-3">
            <p
              className="!m-0 !text-[11px] !font-normal uppercase tracking-[0.22em] text-[var(--lumen-cyan)] sm:!text-xs"
              style={inter}
            >
              Indoor LiFi
            </p>
            <span
              className="inline-flex items-center rounded-full border border-[var(--lumen-cyan)]/40 bg-[var(--lumen-cyan)]/10 px-3 py-1 !text-[10px] !font-normal uppercase tracking-[0.16em] text-[var(--lumen-cyan)]"
              style={inter}
            >
              Pre order now
            </span>
          </div>
          <h1
            className="!mt-4 !m-0 !text-[clamp(2.25rem,5vw,3.75rem)] !font-normal leading-[1.08] tracking-[-0.03em] text-[#EBF5FF]"
            style={geist}
          >
            LiFi Lamp
          </h1>
          <p
            className="!mt-6 max-w-md !text-sm !font-normal leading-[1.75] text-white/70 sm:!text-[15px]"
            style={inter}
          >
            An indoor decor Lamp for your home — stylish lighting with built-in LiFi technology.
            This product is available for preorder now.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link
              href="/contact"
              prefetch={false}
              className="inline-flex min-h-[3rem] items-center justify-center gap-2 rounded-full bg-white px-7 text-sm !font-normal !text-[#0D2240] transition-opacity hover:opacity-90"
              style={inter}
            >
              Get notified
              <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
            </Link>
            <a
              href="https://app.tilled.com/pay/cs_8WrwuiIiMrBieL21ZoLNZ#fidkdWxabmB8Jz8ndW5aR1d1bkgwdTxVYlNhd2tzbjFDMU8xNmZ2TE9WYDNTQEZjRjBkcF9UfH83fEpwSUl1Z2dMbDI8TWlHR2FPUTRsfEx9SFVSYElIdV82b0BWTzRLQDFkTXQzZkJ2UlIzNEg2MX9xTCcpJ2RmZmpwa3FabGEnPydkZmZxWkJpQmlWS1Z3bEtoPHJQMnFwfXJqYScpJ2RmZmpwa3Faa2RoYCc%2FJ0xodWB3bHBoJUJ3anB1J3g%3D"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex min-h-[3rem] items-center justify-center rounded-full border border-white/25 px-7 text-sm !font-normal !text-white transition-colors hover:border-white/50"
              style={inter}
            >
              Pre order now
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
