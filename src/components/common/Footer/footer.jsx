import Link from 'next/link';
import Image from 'next/image';
import { Send, ShieldCheck, ArrowUpRight } from 'lucide-react';
import logoPl from '/public/brand/logo.png';
export default function Footer() {
  return (
    <footer
      className="relative pt-20 pb-12 overflow-hidden"
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

      <div className="relative max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 z-10">
        {/* Brand Column */}
        <div className="md:col-span-4 space-y-5">
          {/* Extra-Large Logo Container matching Hero sizing */}
          <div className="relative w-64 h-20 sm:w-80 sm:h-24 flex items-center justify-start">
            <Image
              src={logoPl}
              alt="LumenFi Logo"
              fill
              className="object-contain object-left"
            
            />
          </div>

          {/* Simplified, easy-to-read text for a 6th-grade level */}
          <p
            className="text-sm leading-relaxed max-w-sm"
            style={{ color: '#4A6080' }}
          >
            <strong className="text-[#0D2240] text-base">
              Light turns into Internet data.
            </strong>
            <br />
            LiFi makes it easy to get online using bright light beams instead of regular Wi-Fi radio waves. It is super fast wireless internet powered by pure light!
          </p>

          <div
            className="flex items-center gap-2 text-xs font-mono font-bold px-3 py-1.5 rounded-lg w-max"
            style={{
              background: 'rgba(0,194,199,0.10)',
              border: '1px solid rgba(0,194,199,0.20)',
              color: '#1A6EBF',
            }}
          >
            <ShieldCheck
              className="w-4 h-4"
              style={{ color: '#00C2C7' }}
            />
            <span>Built to Official Global LiFi Technology Standards</span>
          </div>
        </div>
        {/* Links Column 1 */}
        <div className="md:col-span-2 space-y-4">
          <h4
            className="text-xs font-bold font-mono tracking-wider uppercase pb-2"
            style={{
              color: '#0D2240',
              borderBottom: '1px solid rgba(26,110,191,0.12)',
            }}
          >
            Ecosystem
          </h4>

          <ul
            className="space-y-2.5 text-xs font-medium"
            style={{ color: '#4A6080' }}
          >
            {[
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

        {/* Newsletter Column */}
        <div className="md:col-span-4 space-y-4">
          <h4
            className="text-xs font-bold font-mono tracking-wider uppercase pb-2"
            style={{
              color: '#0D2240',
              borderBottom: '1px solid rgba(26,110,191,0.12)',
            }}
          >
            Engineering Digest
          </h4>

          <p
            className="text-xs leading-relaxed"
            style={{ color: '#4A6080' }}
          >
            Receive deployment logs, specification revisions, and operational
            hardware notifications.
          </p>

          <form
            onSubmit={(e) => e.preventDefault()}
            className="relative flex items-center mt-2 rounded-xl p-1 transition-all duration-200"
            style={{
              border: '1px solid rgba(26,110,191,0.15)',
              background: 'white',
            }}
          >
            <input
              type="email"
              placeholder="Enter your email..."
              required
              className="bg-transparent placeholder:text-[#94A3B8] font-mono text-xs px-3 py-2 w-full focus:outline-none pr-12"
              style={{ color: '#0D2240' }}
            />

            <button
              type="submit"
              className="absolute right-1 p-2 text-white rounded-lg transition-all duration-200 flex items-center justify-center"
              style={{
                background:
                  'linear-gradient(135deg, #1A6EBF, #00C2C7)',
              }}
              aria-label="Subscribe"
            >
              <Send className="w-3.5 h-3.5" />
            </button>
          </form>
        </div>
      </div>

      {/* Bottom bar */}
      {/* Bottom bar */}
      <div
        className="max-w-7xl mx-auto px-6 mt-16 pt-6 text-[11px] font-mono flex flex-col md:flex-row justify-between items-center gap-4"
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
            href="/privacy"
            className="px-3 py-1.5 rounded-lg border border-[#1A6EBF]/20 hover:border-[#1A6EBF] hover:text-[#1A6EBF] transition-all duration-200"
          >
            Privacy Policy
          </Link>

          <Link
            href="/terms"
            className="px-3 py-1.5 rounded-lg border border-[#1A6EBF]/20 hover:border-[#1A6EBF] hover:text-[#1A6EBF] transition-all duration-200"
          >
            Terms & Conditions
          </Link>
        </div>
      </div>
    </footer>
  );
}