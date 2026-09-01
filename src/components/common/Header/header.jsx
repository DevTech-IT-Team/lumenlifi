import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { Menu, X, ArrowRight } from 'lucide-react';
import { LayoutGroup, motion } from 'framer-motion';

const navConfig = [
  { label: 'About', href: '/what-is-lifi' },
  { label: 'Products', href: '/products' },
  { label: 'Router', href: '/products/lumenfi-router' },
  { label: 'Academy', href: '/Academy' },
  { label: 'Contact', href: '/contact' },
];

const pillClass =
  'flex items-center rounded-full border border-white/15 bg-[#0a1520]/55 backdrop-blur-xl';

const layoutTransition = {
  type: 'spring',
  stiffness: 120,
  damping: 22,
  mass: 0.9,
};

function isNavActive(pathname, item) {
  if (item.href === '/products') {
    return pathname === '/products';
  }
  return pathname === item.href || pathname.startsWith(`${item.href}/`);
}

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [compactNav, setCompactNav] = useState(false);
  const router = useRouter();
  const navRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    setIsOpen(false);
  }, [router.asPath]);

  useEffect(() => {
    const handleScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;

      if (Math.abs(delta) < 4) return;

      const scrollingDown = delta > 0;
      const pastThreshold = currentY > 80;

      setCompactNav(scrollingDown && pastThreshold);
      lastScrollY.current = currentY;
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = () => (
    <nav className="hidden items-center gap-4 lg:flex xl:gap-5" aria-label="Primary">
      {navConfig.map((item) => {
        const active = isNavActive(router.pathname, item);
        return (
          <Link
            key={item.label}
            href={item.href}
            prefetch={false}
            className={`whitespace-nowrap text-[11px] !font-normal transition-colors duration-300 xl:text-xs ${
              active ? 'text-white' : 'text-white/55 hover:text-white'
            }`}
          >
            {item.label}
          </Link>
        );
      })}
    </nav>
  );

  const brandLink = (
    <Link
      href="/"
      className="flex shrink-0 items-center gap-2 transition-opacity hover:opacity-90"
    >
      <div className="relative h-7 w-7 shrink-0 overflow-hidden rounded-md bg-white p-0.5 sm:h-8 sm:w-8">
        <Image
          src="/brand/logo.webp"
          alt="LumenFi"
          fill
          priority
          sizes="32px"
          className="object-contain"
        />
      </div>
      <span className="text-[11px] !font-normal uppercase tracking-[0.14em] text-white sm:text-xs">
        Lumen<span className="text-[var(--lumen-cyan)]">Fi</span>
      </span>
    </Link>
  );

  const getStartedMotion = (inline = false) => (
    <motion.div layoutId="nav-get-started" transition={layoutTransition}>
      <Link
        href="https://lmsathena.com/login"
        className={
          inline
            ? 'inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 px-4 py-2 text-[11px] !font-normal text-white transition-colors duration-300 hover:bg-white/5 xl:text-xs'
            : 'inline-flex shrink-0 items-center gap-1.5 rounded-full border border-white/20 bg-[#0a1520]/40 px-4 py-2.5 text-[11px] !font-normal text-white backdrop-blur-xl transition-colors duration-300 hover:bg-white/5 xl:text-xs'
        }
      >
        <span>Get Started</span>
        <ArrowRight className="h-3 w-3" />
      </Link>
    </motion.div>
  );

  return (
    <header ref={navRef} className="fixed top-0 inset-x-0 z-50 pb-2 pt-4 sm:pb-2.5 sm:pt-5">
      <LayoutGroup>
        <motion.div
          layout
          transition={layoutTransition}
          className={`mx-auto flex max-w-[1380px] items-center gap-2 px-4 sm:px-6 ${
            compactNav ? 'justify-center' : 'justify-between'
          }`}
        >
          <motion.div
            layout
            layoutId="nav-left-pill"
            transition={layoutTransition}
            className={`${pillClass} min-w-0 px-4 py-2.5 lg:flex-none lg:px-5 lg:py-2.5 ${
              compactNav ? 'flex-initial' : 'flex-1 lg:flex-none'
            } ${isOpen ? 'border-white/25 bg-[#0a1520]/75' : ''}`}
          >
            {brandLink}
            <div className="mx-3 hidden h-4 w-px shrink-0 bg-white/20 lg:block" aria-hidden="true" />
            {navLinks()}

            {compactNav && (
              <>
                <motion.div
                  layout
                  initial={{ opacity: 0, width: 0 }}
                  animate={{ opacity: 1, width: 'auto' }}
                  exit={{ opacity: 0, width: 0 }}
                  transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
                  className="mx-3 hidden h-4 w-px shrink-0 bg-white/20 lg:block"
                  aria-hidden="true"
                />
                <div className="hidden lg:block">{getStartedMotion(true)}</div>
              </>
            )}

            <button
              type="button"
              onClick={() => setIsOpen(!isOpen)}
              className="ml-auto flex h-7 w-7 items-center justify-center rounded-full text-white/80 transition-colors hover:bg-white/10 hover:text-white lg:hidden"
              aria-label="Toggle menu"
              aria-expanded={isOpen}
            >
              {isOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
            </button>
          </motion.div>

          {!compactNav && <div className="hidden lg:block">{getStartedMotion(false)}</div>}
        </motion.div>
      </LayoutGroup>

      {isOpen && (
        <div className="mx-auto mt-2 max-w-[1380px] px-4 sm:px-6 lg:hidden">
          <div className="animate-in fade-in slide-in-from-top-2 space-y-0.5 rounded-2xl border border-white/15 bg-[#0a1520]/90 p-2.5 shadow-2xl backdrop-blur-2xl">
            {navConfig.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                prefetch={false}
                onClick={() => setIsOpen(false)}
                className={`flex items-center rounded-xl px-3 py-2.5 text-xs !font-normal transition-all ${
                  isNavActive(router.pathname, item)
                    ? 'bg-white/10 text-white'
                    : 'text-white/60 hover:bg-white/5 hover:text-white'
                }`}
              >
                {item.label}
              </Link>
            ))}
            <div className="border-t border-white/10 pt-2">
              <Link
                href="https://lmsathena.com/login"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center gap-1.5 rounded-full border border-white/20 px-3 py-2 text-xs !font-normal text-white"
              >
                <span>Get Started</span>
                <ArrowRight className="h-3 w-3" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}
