import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { useRouter } from 'next/router';
import {
  ChevronDown,
  Menu,
  X,
  ArrowUpRight,
  Zap,
  BookOpen,
  FileText,
  Users,
  Clock,
  Briefcase,
  Lightbulb,
  Cpu,
  HelpCircle,
  Box,
  FlaskConical
} from 'lucide-react';
import logoPl from '/public/brand/logo.png';

/* ---------- Nav config ---------- */
const navConfig = [
  {
    label: 'Solutions & Products',
    href: '/products',
    icon: Lightbulb,
    hoverClass: 'hover:text-[#EAB308]',
    iconColor: 'group-hover:text-yellow-500',
    activeIconColor: 'text-yellow-500',
    dropdown: [
      { label: 'What is LiFi?', desc: 'Discover optical wireless physics & architecture', href: '/what-is-lifi', icon: HelpCircle },
      { label: 'All Products Catalog', desc: 'Browse full optical networking line array', href: '/products', icon: Box },
      { label: 'Hardware Matrix', desc: 'Core LiFi ecosystem components', href: '/products', icon: Zap },
    ],
  },
  // {
  //   label: 'Lumen Lab',
  //   href: '/about',
  //   icon: FlaskConical,
  //   hoverClass: 'hover:text-[#0FB89A]',
  //   iconColor: 'group-hover:text-[#0FB89A]',
  //   activeIconColor: 'text-[#0FB89A]',
  //   dropdown: [
  //     { label: 'Technical Registry', desc: 'Deep-dives, whitepapers & specifications', href: '/insights', icon: FileText },
  //     { label: 'Research Lab', desc: 'Academic validations & optical studies', href: '/insights#studies', icon: BookOpen },
  //     { label: 'Core Engineering Team', desc: 'The architects behind the lightwave layer', href: '/about', icon: Users },
  //     { label: 'Operational History', desc: 'Milestones in IEEE 802.11bb evolution', href: '/about#timeline', icon: Clock },
  //     { label: 'Open Positions', desc: 'Shape next-generation communications infrastructure', href: '/about#careers', icon: Briefcase },
  //   ],
  // },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [mobileExpanded, setMobileExpanded] = useState(null);
  const [scrolled, setScrolled] = useState(false);
  const router = useRouter();
  const navRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    const handleClickOutside = (event) => {
      if (navRef.current && !navRef.current.contains(event.target)) {
        setActiveDropdown(null);
      }
    };
    window.addEventListener('scroll', handleScroll);
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      window.removeEventListener('scroll', handleScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setIsOpen(false);
    setActiveDropdown(null);
    setMobileExpanded(null);
  }, [router.asPath]);

  const toggleDropdown = (label) =>
    setActiveDropdown(activeDropdown === label ? null : label);
  const toggleMobileExpanded = (label) =>
    setMobileExpanded(mobileExpanded === label ? null : label);

  return (
    <header
      ref={navRef}
      className={`fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-md transition-all duration-300 border-b ${scrolled
        ? 'border-[rgba(26,110,191,0.15)] py-1 shadow-lg shadow-[rgba(0,194,199,0.08)]'
        : 'border-[rgba(26,110,191,0.08)] py-1.5'
        }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">

        {/* ── Logo (Brought to clean scale alignment) ── */}
        <Link href="/" className="flex items-center group shrink-0">
          <div className="relative w-[150px] h-[46px] md:w-[170px] md:h-[52px]">
            <Image
              src={logoPl}
              alt="LumenFi — Light Connectivity"
              fill
              priority
              sizes="(max-width: 768px) 150px, 170px"
              className="object-contain transition-transform duration-200 group-hover:scale-[1.01]"
            />
          </div>
        </Link>

        {/* ── Desktop nav ── */}
        <nav className="hidden lg:flex items-center gap-1">
          {navConfig.map((item) => {
            const isOpen_ = activeDropdown === item.label;
            const NavIcon = item.icon;
            return (
              <div key={item.label} className="relative">
                <button
                  onClick={() => toggleDropdown(item.label)}
                  className={`group flex items-center gap-1.5 px-4 py-2 rounded-xl text-xs font-semibold uppercase tracking-wider font-mono transition-all duration-200 ${isOpen_
                    ? 'bg-[rgba(0,194,199,0.08)] text-[#0D2240]'
                    : 'text-[#4A6080] hover:bg-[rgba(26,110,191,0.06)]'
                    } ${item.hoverClass}`}
                >
                  <NavIcon className={`w-3.5 h-3.5 transition-colors duration-200 ${isOpen_ ? item.activeIconColor : 'text-[#2AABDB]/60'} ${item.iconColor}`} />
                  <span>{item.label}</span>
                  <ChevronDown className={`w-3 h-3 transition-transform duration-200 text-[#2AABDB]/60 ${isOpen_ ? 'rotate-180' : ''}`} />
                </button>

                {item.dropdown && isOpen_ && (
                  <div className="absolute top-full left-0 mt-2 w-80 bg-white border border-[rgba(26,110,191,0.12)] rounded-2xl shadow-xl shadow-[rgba(0,194,199,0.10)] p-2 grid grid-cols-1 gap-0.5 animate-in fade-in slide-in-from-top-2 duration-150">
                    {item.dropdown.map((subItem) => {
                      const SubIcon = subItem.icon;
                      return (
                        <Link
                          key={subItem.href}
                          href={subItem.href}
                          className="group flex items-start gap-3.5 p-3 rounded-xl hover:bg-[rgba(0,194,199,0.06)] transition-colors"
                        >
                          <div className="mt-0.5 p-1.5 rounded-lg bg-[rgba(26,110,191,0.06)] border border-[rgba(26,110,191,0.10)] text-[#2AABDB] group-hover:bg-[rgba(0,194,199,0.10)] group-hover:border-[rgba(0,194,199,0.25)] group-hover:text-[#00C2C7] transition-colors shrink-0">
                            <SubIcon className="w-4 h-4" />
                          </div>
                          <div className="space-y-0.5">
                            <div className="text-xs font-bold text-[#0D2240] group-hover:text-[#1A6EBF] transition-colors">
                              {subItem.label}
                            </div>
                            <div className="text-[11px] text-[#4A6080] leading-normal font-sans">
                              {subItem.desc}
                            </div>
                          </div>
                        </Link>
                      );
                    })}
                  </div>
                )}
              </div>
            );
          })}
        </nav>

        {/* ── CTA ── */}
        <div className="hidden lg:flex items-center gap-4">
          <Link
            href="/contact"
            className="flex items-center gap-1.5 h-9 px-4 rounded-xl font-mono font-bold text-xs uppercase tracking-wider text-white transition-all hover:scale-[1.03] shadow-md"
            style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)', boxShadow: '0 4px 20px rgba(0,194,199,0.25)' }}
          >
            <span>Get Started</span>
            <ArrowUpRight className="w-3.5 h-3.5" />
          </Link>
        </div>

        {/* ── Mobile menu ── */}
        <div className="flex items-center gap-2 lg:hidden">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="p-1.5 rounded-xl text-[#1A6EBF] hover:bg-[rgba(26,110,191,0.08)] transition-colors"
            aria-label="Toggle menu"
          >
            {isOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </div>

      {/* ── Mobile drawer ── */}
      {isOpen && (
        <div className="lg:hidden fixed inset-0 top-[56px] bg-white border-t border-[rgba(26,110,191,0.10)] z-40 px-6 py-6 overflow-y-auto animate-in fade-in duration-200">
          <div className="space-y-2">
            {navConfig.map((item) => {
              const MobIcon = item.icon;
              return (
                <div key={item.label} className="border-b border-[rgba(26,110,191,0.08)] pb-2 last:border-0 last:pb-0">
                  <button
                    onClick={() => toggleMobileExpanded(item.label)}
                    className="flex items-center justify-between w-full py-2.5 text-xs font-bold font-mono uppercase tracking-wider text-[#0D2240] hover:text-[#1A6EBF] text-left"
                  >
                    <div className="flex items-center gap-2">
                      <MobIcon className={`w-4 h-4 ${item.activeIconColor}`} />
                      <span>{item.label}</span>
                    </div>
                    {item.dropdown && (
                      <ChevronDown className={`w-3.5 h-3.5 transition-transform duration-200 ${mobileExpanded === item.label ? `rotate-180 ${item.activeIconColor}` : 'text-[#4A6080]'}`} />
                    )}
                  </button>
                  {item.dropdown && mobileExpanded === item.label && (
                    <div className="ml-4 mt-1 space-y-1 border-l-2 border-[rgba(0,194,199,0.25)] pl-4">
                      {item.dropdown.map((sub) => (
                        <Link
                          key={sub.href}
                          href={sub.href}
                          onClick={() => setIsOpen(false)}
                          className="block px-3 py-2 rounded-lg text-[11px] text-[#4A6080] hover:text-[#1A6EBF] hover:bg-[rgba(26,110,191,0.06)] transition-colors"
                        >
                          {sub.label}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            })}
            <div className="pt-4 border-t border-[rgba(26,110,191,0.10)] mt-2">
              <Link
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex justify-center items-center gap-2 w-full text-center text-white py-3.5 rounded-xl font-mono font-bold tracking-wider text-xs uppercase"
                style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
              >
                <span>Get Started</span>
                <ArrowUpRight className="w-3.5 h-3.5" />
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}