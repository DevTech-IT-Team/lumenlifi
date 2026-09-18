import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { useRouter } from 'next/router';
import { ArrowRight, X } from 'lucide-react';

const geist = { fontFamily: 'var(--font-geist-sans), Geist Sans, sans-serif' };
const inter = { fontFamily: 'var(--font-inter, Inter), ui-sans-serif, system-ui, sans-serif' };

const POLES = [
  {
    src: '/images/pole/7.png',
    alt: 'White LiFi Lamp in a classic living room',
    title: 'Classic living',
  },
  {
    src: '/images/pole/11.png',
    alt: 'Brass LiFi Lamp in a modern living room',
    title: 'Warm brass',
  },
  {
    src: '/images/pole/10.png',
    alt: 'LiFi Lamp workspace with monitors',
    title: 'Home office',
  },
];

function storageKey(pathname) {
  return `lumenfi-pole-popup-v2:${pathname || '/'}`;
}

function getScrollProgress() {
  const doc = document.documentElement;
  const body = document.body;
  const scrollTop = window.scrollY || doc.scrollTop || body.scrollTop || 0;
  const viewport = window.innerHeight || doc.clientHeight || 0;
  const pageHeight = Math.max(
    body.scrollHeight,
    body.offsetHeight,
    doc.clientHeight,
    doc.scrollHeight,
    doc.offsetHeight
  );

  if (pageHeight <= 0) return 0;
  // How far the bottom of the viewport has reached through the page
  return Math.min(1, (scrollTop + viewport) / pageHeight);
}

export default function ComingSoonPolePopup() {
  const router = useRouter();
  const [open, setOpen] = useState(false);
  const shownRef = useRef(false);
  const pathname = router.asPath?.split('?')[0] || router.pathname || '/';

  useEffect(() => {
    if (typeof window === 'undefined') return undefined;
    if (!router.isReady) return undefined;

    shownRef.current = false;
    setOpen(false);

    // Clear legacy global dismiss key so old tests don't block forever
    try {
      sessionStorage.removeItem('lumenfi-pole-popup-dismissed');
      if (sessionStorage.getItem(storageKey(pathname)) === '1') return undefined;
    } catch {
      // ignore
    }

    const tryOpen = () => {
      if (shownRef.current) return;
      if (getScrollProgress() >= 0.8) {
        shownRef.current = true;
        setOpen(true);
        window.removeEventListener('scroll', tryOpen);
        window.removeEventListener('resize', tryOpen);
      }
    };

    // Defer first check so layout/lazy sections can settle
    const startId = window.setTimeout(tryOpen, 300);
    window.addEventListener('scroll', tryOpen, { passive: true });
    window.addEventListener('resize', tryOpen);

    return () => {
      window.clearTimeout(startId);
      window.removeEventListener('scroll', tryOpen);
      window.removeEventListener('resize', tryOpen);
    };
  }, [pathname, router.isReady]);

  useEffect(() => {
    if (!open) return undefined;
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = prev;
    };
  }, [open]);

  const dismiss = () => {
    setOpen(false);
    try {
      sessionStorage.setItem(storageKey(pathname), '1');
    } catch {
      // ignore
    }
  };

  if (!open) return null;

  return (
    <div
      className="fixed inset-0 z-[100] flex items-end justify-center p-3 sm:items-center sm:p-5"
      role="dialog"
      aria-modal="true"
      aria-labelledby="coming-soon-pole-title"
    >
      <button
        type="button"
        className="absolute inset-0 bg-[#030914]/70 backdrop-blur-[2px]"
        aria-label="Close popup"
        onClick={dismiss}
      />

      <div className="relative z-10 w-full max-w-[26rem] overflow-hidden rounded-[1.5rem] bg-white shadow-[0_24px_60px_rgba(3,9,20,0.4)] sm:max-w-[30rem]">
        <div className="relative bg-[#0D2240] px-4 pb-4 pt-5 text-center sm:px-5 sm:pb-5 sm:pt-6">
          <button
            type="button"
            onClick={dismiss}
            className="absolute right-2.5 top-2.5 inline-flex h-8 w-8 items-center justify-center rounded-full border border-white/20 text-white/80 transition-colors hover:bg-white/10 hover:text-white"
            aria-label="Close"
          >
            <X className="h-3.5 w-3.5" strokeWidth={2} />
          </button>

          <span
            className="inline-flex items-center rounded-full border border-[var(--lumen-cyan)]/45 bg-[var(--lumen-cyan)]/10 px-2.5 py-0.5 !text-[9px] !font-normal uppercase tracking-[0.18em] text-[var(--lumen-cyan)]"
            style={inter}
          >
            Coming soon
          </span>
          <h2
            id="coming-soon-pole-title"
            className="!mt-2.5 !m-0 !text-[1.35rem] !font-bold leading-tight tracking-[-0.02em] text-[#EBF5FF] sm:!text-[1.5rem]"
            style={geist}
          >
            LiFi Lamp
          </h2>
          <p
            className="!mx-auto !mt-1.5 max-w-[16rem] !text-xs !font-normal leading-relaxed text-white/65"
            style={inter}
          >
            Indoor décor lamps with built-in LiFi — launching soon.
          </p>
        </div>

        <div className="px-3.5 pb-4 pt-3.5 sm:px-4 sm:pb-5 sm:pt-4">
          <ul className="m-0 grid list-none grid-cols-3 gap-2 p-0">
            {POLES.map((pole) => (
              <li key={pole.src} className="min-w-0">
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl bg-[#EBF5FF] ring-1 ring-[#0D2240]/08">
                  <Image
                    src={pole.src}
                    alt={pole.alt}
                    fill
                    sizes="140px"
                    className="object-contain object-center p-1.5"
                  />
                </div>
                <p
                  className="!mt-1.5 !mb-0 truncate text-center !text-[11px] !font-normal text-[#0D2240]"
                  style={inter}
                >
                  {pole.title}
                </p>
              </li>
            ))}
          </ul>

          <div className="mt-4 flex flex-col gap-2 sm:flex-row sm:justify-center">
            <a
              href="https://app.tilled.com/pay/cs_8WrwuiIiMrBieL21ZoLNZ#fidkdWxabmB8Jz8ndW5aR1d1bkgwdTxVYlNhd2tzbjFDMU8xNmZ2TE9WYDNTQEZjRjBkcF9UfH83fEpwSUl1Z2dMbDI8TWlHR2FPUTRsfEx9SFVSYElIdV82b0BWTzRLQDFkTXQzZkJ2UlIzNEg2MX9xTCcpJ2RmZmpwa3FabGEnPydkZmZxWkJpQmlWS1Z3bEtoPHJQMnFwfXJqYScpJ2RmZmpwa3Faa2RoYCc%2FJ0xodWB3bHBoJUJ3anB1J3g%3D"
              target="_blank"
              rel="noopener noreferrer"
              onClick={dismiss}
              className="inline-flex min-h-[2.5rem] items-center justify-center gap-1.5 rounded-full bg-[#0D2240] px-5 text-sm !font-normal !text-white transition-opacity hover:opacity-90"
              style={inter}
            >
              Pre order now
              <ArrowRight className="h-3.5 w-3.5" strokeWidth={1.75} />
            </a>
            <button
              type="button"
              onClick={dismiss}
              className="inline-flex min-h-[2.5rem] items-center justify-center rounded-full border border-[#0D2240]/18 px-5 text-sm !font-normal text-[#0D2240]/65 transition-colors hover:border-[#0D2240]/35"
              style={inter}
            >
              Maybe later
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
