import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, ArrowRight } from 'lucide-react';

const navConfig = [
  { label: 'What is LiFi', href: '/what-is-lifi' },
  { label: 'Products', href: '/products' },
  { label: 'Router', href: '/products/lumenfi-router' },
  { label: 'Academy', href: '/Academy' },
  { label: 'Contact', href: '/contact' },
];

function isNavActive(pathname, item) {
  if (item.href === '/products') {
    return pathname === '/products';
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
        scrolled ? 'py-2 sm:py-3' : 'py-2.5 sm:py-5'
      }`}
    >
      <div className="mx-auto max-w-[1380px]">
        <div
          className={`flex items-center justify-between rounded-2xl border transition-all duration-300 px-3 py-2 sm:px-5 sm:py-2.5 ${
            scrolled || isOpen
              ? 'border-cyan-500/20 bg-[#030c16]/85 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.8)]'
              : 'border-white/10 bg-[#06131d]/60 backdrop-blur-md'
          }`}
        >
          <Link href="/" className="group flex min-w-0 items-center gap-2 sm:gap-3 transition-opacity hover:opacity-90">
            <div className="relative h-9 w-9 shrink-0 overflow-hidden rounded-lg bg-white p-1 sm:h-11 sm:w-11">
              <Image
                src="/brand/logo.webp"
                alt="LumenFi"
                fill
                priority
                sizes="44px"
                className="object-contain"
              />
            </div>
            <span className="truncate text-base font-bold tracking-tight text-white sm:text-lg">
              Lumen<span className="text-[var(--lumen-cyan)]">Fi</span>
            </span>
          </Link>

          <div className="hidden items-center gap-1 md:flex">
            <nav className="flex items-center gap-1" aria-label="Primary">
              {navConfig.map((item) => {
                const active = isNavActive(router.pathname, item);
                return (
                  <Link
                    key={item.label}
                    href={item.href}
                    prefetch={false}
                    className={`block rounded-xl px-4 py-2 text-sm font-medium transition-all duration-200 ${
                      active ? 'text-white' : 'text-slate-300 hover:text-white'
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}
            </nav>

            <div className="ml-3 border-l border-white/10 pl-3">
              <Link
                href="https://lmsathena.com/login"
                className="flex items-center gap-2 rounded-xl bg-white px-4 py-2 text-sm font-semibold text-[#0D2240] transition-opacity hover:opacity-90"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>

          <button
            type="button"
            onClick={() => setIsOpen(!isOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-white/5 text-slate-200 transition-colors hover:bg-white/10 md:hidden"
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            {isOpen ? <X className="h-5 w-5 text-[#00c2c7]" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-[1380px] md:hidden">
          <div className="rounded-2xl border border-cyan-500/20 bg-[#030c16]/95 p-4 shadow-2xl backdrop-blur-2xl space-y-2 animate-in fade-in slide-in-from-top-2">
            {navConfig.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch={false}
                onClick={() => setIsOpen(false)}
                className={`flex items-center justify-between rounded-xl px-4 py-3 text-base font-medium transition-all ${
                  isNavActive(router.pathname, item)
                    ? 'bg-cyan-500/10 text-[#00c2c7] border border-cyan-500/30'
                    : 'text-slate-300 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-2">
              <Link
                href="https://lmsathena.com/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-2 rounded-xl bg-white px-4 py-3 text-sm font-semibold text-[#0D2240]"
              >
                <span>Get Started</span>
                <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
