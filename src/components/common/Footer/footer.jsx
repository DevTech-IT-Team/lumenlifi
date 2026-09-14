import Link from 'next/link';
import Image from 'next/image';

const mainLinks = [
  { label: 'What is LiFi', href: '/what-is-lifi', number: '01' },
  { label: 'Products', href: '/products', number: '02' },
  { label: 'LiFi Pole', href: '/products/lifi-pole', number: '03' },
  { label: 'Academy', href: '/Academy', number: '04' },
  { label: 'Blogs', href: '/blog', number: '05' },
];

const utilityLinks = [
  { label: 'Security', href: '/privacy' },
  { label: 'Privacy Policy', href: '/privacy' },
  { label: 'Terms of Use', href: '/terms' },
  { label: 'Resources', href: '/Academy' },
];

export default function Footer() {
  return (
    <footer className="w-full bg-[#161C3B]">
      <div className="grid w-full grid-cols-1 lg:grid-cols-12">
        {/* Left — logo + description */}
        <div className="flex flex-col justify-between gap-10 border-b border-white/10 px-8 py-10 sm:px-12 sm:py-14 lg:col-span-3 lg:border-b-0 lg:border-r">
          <div className="flex items-center gap-4">
            <div className="relative h-12 w-12 shrink-0 overflow-hidden rounded-full border border-white/20 bg-white p-1.5">
              <Image
                src="/brand/logo.webp"
                alt="LumenFi"
                fill
                loading="lazy"
                sizes="48px"
                className="object-contain"
              />
            </div>
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/20">
              <span className="text-center text-[8px] font-normal uppercase leading-tight tracking-[0.12em] text-neutral-400">
                LiFi
                <br />
                Ready
              </span>
            </div>
          </div>

          <p
            className="max-w-[240px] text-sm font-normal leading-relaxed text-neutral-400"
            style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
          >
            Built for the next generation of connected homes. Where light defines speed and LiFi
            accelerates execution.
          </p>
        </div>

        {/* Center — numbered nav */}
        <div className="border-b border-white/10 lg:col-span-4 lg:border-b-0 lg:border-r">
          {mainLinks.map((item, index) => (
            <Link
              key={item.label}
              href={item.href}
              className={`group flex items-center justify-between px-8 py-5 transition-colors hover:bg-white/[0.03] sm:px-12 sm:py-6 ${
                index !== mainLinks.length - 1 ? 'border-b border-white/10' : ''
              }`}
            >
              <span
                className="text-2xl font-normal tracking-[-0.02em] text-white sm:text-[1.75rem]"
                style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
              >
                {item.label}
              </span>
              <span className="text-xs font-normal tracking-[0.2em] text-neutral-500">
                {item.number}
              </span>
            </Link>
          ))}
        </div>

        {/* Legal links */}
        <div className="flex flex-col justify-center border-b border-white/10 px-8 py-10 sm:px-12 sm:py-14 lg:col-span-2 lg:border-b-0 lg:border-r">
          <ul className="space-y-3">
            {utilityLinks.map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="!text-[10px] !font-normal uppercase tracking-[0.16em] text-white transition-opacity hover:opacity-70 sm:!text-[11px]"
                  style={{
                    fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif',
                    fontWeight: 400,
                  }}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Right — USA + partnership + social */}
        <div className="flex flex-col justify-between gap-12 px-8 py-10 sm:px-12 sm:py-14 lg:col-span-3">
          <div className="flex items-start gap-3">
            <span
              className="text-sm font-normal text-white"
              style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
            >
              US
            </span>
            <p
              className="max-w-[140px] text-[10px] font-normal uppercase leading-relaxed tracking-[0.16em] text-neutral-400"
              style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
            >
              Proudly built by operators in the USA
            </p>
          </div>

          <div className="flex flex-wrap items-end justify-between gap-6">
            <div>
              <p
                className="mb-2 text-[11px] font-normal text-neutral-400"
                style={{ fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' }}
              >
                For a Partnership
              </p>
              <a
                href="mailto:rupali@lifilumen.com"
                className="text-base font-normal text-white transition-opacity hover:opacity-70 sm:text-lg"
                style={{ fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' }}
              >
                rupali@lifilumen.com
              </a>
            </div>

            <div className="flex flex-wrap items-center gap-3">
              <a
                href="https://www.facebook.com/lumenlifi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LumenFi on Facebook"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M22 12.07C22 6.48 17.52 2 11.93 2S1.86 6.48 1.86 12.07c0 5.02 3.66 9.18 8.44 9.93v-7.02H7.9v-2.91h2.4V9.41c0-2.37 1.41-3.68 3.57-3.68 1.03 0 2.12.18 2.12.18v2.33h-1.2c-1.18 0-1.55.73-1.55 1.48v1.78h2.64l-.42 2.91h-2.22V22c4.78-.75 8.44-4.91 8.44-9.93z" />
                </svg>
              </a>
              <a
                href="https://www.instagram.com/lumenlifi/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LumenFi on Instagram"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M12 2.16c3.2 0 3.58.01 4.85.07 3.25.15 4.77 1.69 4.92 4.92.06 1.27.07 1.65.07 4.85s-.01 3.58-.07 4.85c-.15 3.23-1.66 4.77-4.92 4.92-1.27.06-1.65.07-4.85.07s-3.58-.01-4.85-.07c-3.26-.15-4.77-1.7-4.92-4.92-.06-1.27-.07-1.65-.07-4.85s.01-3.58.07-4.85C2.38 3.92 3.9 2.38 7.15 2.23 8.42 2.17 8.8 2.16 12 2.16zm0 1.8c-3.15 0-3.52.01-4.76.07-2.25.1-3.3 1.17-3.4 3.4-.06 1.24-.07 1.61-.07 4.76s.01 3.52.07 4.76c.1 2.22 1.16 3.3 3.4 3.4 1.24.06 1.61.07 4.76.07s3.52-.01 4.76-.07c2.23-.1 3.3-1.17 3.4-3.4.06-1.24.07-1.61.07-4.76s-.01-3.52-.07-4.76c-.1-2.23-1.17-3.3-3.4-3.4-1.24-.06-1.61-.07-4.76-.07zm0 3.06a5.18 5.18 0 110 10.36A5.18 5.18 0 0112 7.02zm0 1.8a3.38 3.38 0 100 6.76 3.38 3.38 0 000-6.76zm5.4-2.1a1.21 1.21 0 110 2.42 1.21 1.21 0 010-2.42z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/company/lumen-lifi"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LumenFi on LinkedIn"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="https://www.youtube.com/@lifilumen"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LumenFi on YouTube"
                className="flex h-10 w-10 items-center justify-center rounded-full border border-white/20 text-white transition-colors hover:border-white/40 hover:bg-white/5"
              >
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                  <path d="M23.5 6.2a3.02 3.02 0 00-2.12-2.14C19.54 3.5 12 3.5 12 3.5s-7.54 0-9.38.56A3.02 3.02 0 00.5 6.2 31.6 31.6 0 000 12a31.6 31.6 0 00.5 5.8 3.02 3.02 0 002.12 2.14c1.84.56 9.38.56 9.38.56s7.54 0 9.38-.56a3.02 3.02 0 002.12-2.14A31.6 31.6 0 0024 12a31.6 31.6 0 00-.5-5.8zM9.75 15.57V8.43L15.84 12l-6.09 3.57z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
