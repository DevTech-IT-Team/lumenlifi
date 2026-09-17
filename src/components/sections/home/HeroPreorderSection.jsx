import Image from 'next/image';
import { ArrowRight } from 'lucide-react';

const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const PREORDER_HREF =
  'https://app.tilled.com/pay/cs_8WrwuiIiMrBieL21ZoLNZ#fidkdWxabmB8Jz8ndW5aR1d1bkgwdTxVYlNhd2tzbjFDMU8xNmZ2TE9WYDNTQEZjRjBkcF9UfH83fEpwSUl1Z2dMbDI8TWlHR2FPUTRsfEx9SFVSYElIdV82b0BWTzRLQDFkTXQzZkJ2UlIzNEg2MX9xTCcpJ2RmZmpwa3FabGEnPydkZmZxWkJpQmlWS1Z3bEtoPHJQMnFwfXJqYScpJ2RmZmpwa3Faa2RoYCc%2FJ0xodWB3bHBoJUJ3anB1J3g%3D';

export default function HeroPreorderSection() {
  return (
    <section
      id="hero-preorder"
      className="relative w-full bg-[#EBF5FF] px-4 py-12 sm:px-8 sm:py-16 lg:py-20"
      aria-label="LumenFi WiFi 7 and LiFi"
    >
      <div className="mx-auto max-w-[1520px]">
        <div className="overflow-hidden rounded-2xl border border-[#0D2240]/8 bg-white shadow-[0_20px_60px_rgba(13,34,64,0.08)] sm:rounded-3xl">
          <Image
            src="/images/hero/wifiandlifi.png"
            alt="LumenFi Wireless: WiFi 7 and LiFi connected together for one seamless experience"
            width={1920}
            height={1080}
            sizes="(max-width: 1520px) 100vw, 1520px"
            className="h-auto w-full"
          />
        </div>

        <div className="mt-8 flex justify-center sm:mt-10">
          <a
            href={PREORDER_HREF}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[3.25rem] items-center justify-center gap-2 rounded-full bg-[#0D2240] px-8 text-base !font-normal !text-white transition-opacity hover:opacity-90"
            style={inter}
          >
            Pre order now
            <ArrowRight className="h-4 w-4" strokeWidth={1.75} />
          </a>
        </div>
      </div>
    </section>
  );
}
