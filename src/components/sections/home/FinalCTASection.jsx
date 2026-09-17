import Link from 'next/link';
import { ArrowRight } from 'lucide-react';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

export default function FinalCTASection() {
  return (
    <section
      id="cta-final"
      className="relative w-full overflow-hidden pb-0 pt-10 sm:pt-12 lg:pt-14"
      style={{
        background: 'linear-gradient(180deg, #E8F3FF 0%, #F0F7FF 40%, #EBF5FF 100%)',
      }}
    >
      <div className="mx-auto w-full max-w-[1120px] px-4 sm:px-6">
        <div
          className="rounded-t-[4rem] rounded-b-none border border-b-0 border-[#0D2240]/10 px-10 pb-24 pt-24 sm:rounded-t-[5rem] sm:px-14 sm:pb-28 sm:pt-28 lg:rounded-t-[5.5rem] lg:px-16 lg:pb-32 lg:pt-32"
          style={{
            background:
              'linear-gradient(180deg, #0D2240 0%, #143356 40%, #1E4A72 70%, #2A5F8A 100%)',
          }}
        >
          <div className="mx-auto max-w-3xl text-center">
            <h2
              className="!m-0 !text-[clamp(1.85rem,4.5vw,2.85rem)] !font-bold leading-[1.15] tracking-[-0.03em] text-white"
              style={geist}
            >
              Your connection, Your choice ! Everyday Wi‑Fi and light-speed Li‑Fi
            </h2>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
              <a
                href="https://app.tilled.com/pay/cs_8WrwuiIiMrBieL21ZoLNZ#fidkdWxabmB8Jz8ndW5aR1d1bkgwdTxVYlNhd2tzbjFDMU8xNmZ2TE9WYDNTQEZjRjBkcF9UfH83fEpwSUl1Z2dMbDI8TWlHR2FPUTRsfEx9SFVSYElIdV82b0BWTzRLQDFkTXQzZkJ2UlIzNEg2MX9xTCcpJ2RmZmpwa3FabGEnPydkZmZxWkJpQmlWS1Z3bEtoPHJQMnFwfXJqYScpJ2RmZmpwa3Faa2RoYCc%2FJ0xodWB3bHBoJUJ3anB1J3g%3D"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-white px-9 text-base !font-normal !text-[#0D2240] transition-opacity hover:opacity-90"
                style={inter}
              >
                Pre Order Now
                <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
              </a>
              <Link
                href="/Academy"
                prefetch={false}
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/25 px-9 text-base !font-normal !text-white transition-colors hover:border-white/50"
                style={inter}
              >
                Academy Enrollment
              </Link>
              <Link
                href="/contact"
                prefetch={false}
                className="inline-flex min-h-[3.25rem] items-center justify-center rounded-full border border-white/25 px-9 text-base !font-normal !text-white transition-colors hover:border-white/50"
                style={inter}
              >
                Contact Us
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
