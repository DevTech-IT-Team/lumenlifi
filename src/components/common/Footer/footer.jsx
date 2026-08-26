import Link from 'next/link';
import Image from 'next/image';
import { Send, ArrowUpRight } from 'lucide-react';

export default function Footer() {
  return (
    <footer
      className="relative overflow-hidden pt-12 pb-10 sm:pt-20 sm:pb-12"
      style={{
        background: 'linear-gradient(160deg, #F0F8FF 0%, #EAF9F9 100%)',
        borderTop: '1px solid rgba(26,110,191,0.10)',
      }}
    >
          {/* Ambient glow */}
          <div
            className="absolute bottom-0 right-1/4 w-[500px] h-[200px] rounded-full blur-[100px] pointer-events-none"
            style={{ background: 'rgba(0,194,199,0.08)' }}
          />

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 sm:px-6 md:grid-cols-12 md:gap-12">
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-5">
          {/* Extra-Large Logo Container matching Hero sizing */}
          <div className="relative flex h-16 w-48 items-center justify-start sm:h-24 sm:w-80">
            <Image
              src="/brand/logo.webp"
              alt="LumenFi Logo"
              fill
              loading="lazy"
              sizes="320px"
              className="object-contain object-left"
            />
          </div>

          <p
            className="text-sm leading-relaxed max-w-sm"
            style={{ color: '#4A6080' }}
          >
            <strong className="text-[#0D2240] text-base">
              Light turns into Internet data.
            </strong>
            <br />
            LiFi gets you online with light instead of Wi-Fi radio waves — fast wireless internet powered by light.
          </p>

          <p className="text-sm" style={{ color: '#4A6080' }}>
            Sales:{' '}
            <a href="mailto:rupali@lifilumen.com" className="font-semibold text-[#0D2240] hover:text-[#00C2C7]">
              rupali@lifilumen.com
            </a>
          </p>
        </div>

        {/* Links Column 1 */}
        <div className="md:col-span-2 space-y-4">
          <div
            role="heading"
            aria-level="2"
            className="text-xs font-bold tracking-wider uppercase pb-2"
            style={{
              color: '#0D2240',
              borderBottom: '1px solid rgba(26,110,191,0.12)',
            }}
          >
            Explore
          </div>

          <ul
            className="space-y-2.5 text-xs font-medium"
            style={{ color: '#4A6080' }}
          >
            {[
              { label: 'LumenFi Router', href: '/products/lumenfi-router' },
              { label: 'Home Kits', href: '/products' },
              { label: 'Enterprise', href: '/#enterprise' },
              { label: 'Hardware Core', href: '/products' },
              { label: 'Desktop Receivers', href: '/products' },
            ].map((item) => (
              <li key={item.label}>
                <Link
                  href={item.href}
                  className="flex items-center gap-1 group transition-colors hover:text-[#1A6EBF]"
                >
                  {item.label}
                  <ArrowUpRight className="w-3 h-3 opacity-0 group-hover:opacity-100 transition-opacity" />
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* Social Links Column */}
        <div className="md:col-span-2 space-y-4">
          <div
            role="heading"
            aria-level="2"
            className="text-xs font-bold tracking-wider uppercase pb-2"
            style={{
              color: '#0D2240',
              borderBottom: '1px solid rgba(26,110,191,0.12)',
            }}
          >
            Follow
          </div>

          <ul className="space-y-2.5" aria-label="Lumen LiFi social media">
            {[
              {
                label: 'Facebook',
                href: 'https://www.facebook.com/lumenlifi/',
                color: '#1877F2',
                path: 'M24 12.073C24 5.405 18.627 0 12 0S0 5.405 0 12.073C0 18.098 4.388 23.093 10.125 24v-8.437H7.078v-3.49h3.047V9.414c0-3.025 1.792-4.697 4.533-4.697 1.312 0 2.686.235 2.686.235v2.97h-1.513c-1.49 0-1.956.931-1.956 1.887v2.264h3.328l-.532 3.49h-2.796V24C19.612 23.093 24 18.098 24 12.073z',
              },
              {
                label: 'Instagram',
                href: 'https://www.instagram.com/lumenlifi/',
                color: '#E4405F',
                path: 'M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12s.014 3.668.072 4.948c.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24s3.668-.014 4.948-.072c4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948s-.014-3.667-.072-4.947C23.73 2.699 21.31.273 16.948.073 15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z',
              },
              {
                label: 'LinkedIn',
                href: 'https://www.linkedin.com/company/lumen-lifi',
                color: '#0A66C2',
                path: 'M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.047c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 110-4.124 2.062 2.062 0 010 4.124zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z',
              },
            ].map(({ label, href, color, path }) => (
              <li key={label}>
                <a
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2.5 text-xs font-medium text-[#4A6080] transition-colors hover:text-[#1A6EBF] focus:outline-none focus:text-[#1A6EBF]"
                  aria-label={`Follow Lumen LiFi on ${label}`}
                >
                  <span
                    className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-white"
                    style={{ color }}
                  >
                    <svg className="h-[18px] w-[18px]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                      <path d={path} />
                    </svg>
                  </span>
                  <span>{label}</span>
                  <ArrowUpRight className="h-3 w-3 opacity-0 transition-opacity group-hover:opacity-100" aria-hidden="true" />
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Newsletter Column */}
        <div className="md:col-span-4 space-y-4">
          <h4
            className="text-xs font-bold tracking-wider uppercase pb-2"
            style={{
              color: '#0D2240',
              borderBottom: '1px solid rgba(26,110,191,0.12)',
            }}
          >
            Newsletter
          </h4>

          <p
            className="text-xs leading-relaxed"
            style={{ color: '#4A6080' }}
          >
            Get product updates and hardware notes.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex items-center mt-2 rounded-xl p-1"
            style={{
              background: 'white',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email..."
              required
              className="bg-transparent placeholder:text-[#94A3B8] text-xs px-3 py-2 w-full focus:outline-none pr-12"
              style={{ color: '#0D2240' }}
            />

            <button
              type="submit"
              className="absolute right-1 p-2 text-white rounded-lg transition-all duration-200 flex items-center justify-center"
              style={{
                background: '#0D2240',
              }}
              aria-label="Subscribe"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto mt-16 pt-6 text-[11px] flex flex-col md:flex-row justify-between items-center gap-4"
        style={{
          borderTop: '1px solid rgba(26,110,191,0.10)',
          color: '#94A3B8',
        }}
      >
        <p>
          © {new Date().getFullYear()} LumenFi Global Systems. All rights
          reserved.
        </p>

        <div className="flex flex-wrap items-center gap-3">
          <Link
            href="/contact"
            className="hover:text-[#0D2240] transition-colors"
          >
            Contact
          </Link>

          <Link
            href="/privacy"
            className="hover:text-[#0D2240] transition-colors"
          >
            Privacy
          </Link>

          <Link
            href="/terms"
            className="hover:text-[#0D2240] transition-colors"
          >
            Terms
          </Link>
        </div>
      </div>
    </footer>
  );
}