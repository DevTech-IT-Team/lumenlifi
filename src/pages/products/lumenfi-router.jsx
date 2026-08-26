import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Wifi,
  Zap,
  Coins,
  ShieldCheck,
  ShoppingCart,
} from 'lucide-react';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';

const LAYERS = [
  {
    id: 'wifi',
    icon: Wifi,
    badge: 'The Convenience Layer',
    title: 'Boosted Wi-Fi 7',
    subtitle:
      'The ultimate whole-building coverage that powers all your current devices.',
    accent: '#1A6EBF',
    accentBg: 'rgba(26,110,191,0.08)',
    border: 'rgba(26,110,191,0.2)',
    features: [
      {
        title: 'Wall-to-Wall Blanket Coverage',
        desc: 'Utilizing the latest radio frequency advancements, the Wi-Fi 7 engine easily penetrates drywall, floors, and solid doors, ensuring every corner of your property stays connected without dead zones.',
      },
      {
        title: 'Massive Device Handling Capacity',
        desc: 'Say goodbye to buffering when the whole family is online. The boosted routing algorithms handle dozens of high-bandwidth devices simultaneously—from 4K streaming TVs and smart home sensors to laptops and gaming consoles—without choking or slowing down.',
      },
      {
        title: 'Universal Backwards Compatibility',
        desc: "You don't need to buy new devices to see the benefits. Your current smartphones, tablets, and legacy hardware will immediately experience a noticeable speed and stability upgrade the moment they connect.",
      },
    ],
  },
  {
    id: 'lifi',
    icon: Zap,
    badge: 'The Premium Layer',
    title: '10 Gbps Li-Fi Technology',
    subtitle: 'The speed and security of light, creating an interference-free hyper-lane.',
    accent: '#00C2C7',
    accentBg: 'rgba(0,194,199,0.08)',
    border: 'rgba(0,194,199,0.25)',
    features: [
      {
        title: 'Ultra-Fast 10 Gbps Throughput',
        desc: 'Step out of the congested radio spectrum and into the optical spectrum. By transmitting data via light waves, LumenFi delivers multi-gigabit speeds and ultra-low latency that perfectly mimics a hardwired Ethernet connection—entirely wirelessly.',
      },
      {
        title: 'Zero Radio Interference (EMI-Free)',
        desc: 'Crowded apartment buildings and dense office complexes suffer from overlapping Wi-Fi networks fighting for the same channels. Li-Fi operates entirely outside the radio frequency spectrum, offering a dedicated, clean connection immune to neighborhood network noise or heavy machinery interference.',
      },
      {
        title: 'Military-Grade Physical Security',
        desc: 'Radio waves bleed through walls, making traditional Wi-Fi vulnerable to outside snooping. Light cannot penetrate opaque surfaces. If the door is closed and the blinds are drawn, your Li-Fi network is physically contained inside the room, making it mathematically impossible to hack from the outside.',
      },
    ],
  },
  {
    id: 'depin',
    icon: Coins,
    badge: 'The Economic Layer',
    title: 'DePIN Infrastructure Tokenization',
    subtitle: 'Turn your internet bill into an income-generating asset.',
    accent: '#0FB89A',
    accentBg: 'rgba(15,184,154,0.08)',
    border: 'rgba(15,184,154,0.25)',
    features: [
      {
        title: 'Self-Subsidizing Hardware',
        desc: 'Why pay a monthly rental fee for a generic ISP modem? The LumenFi router is a node on a Decentralized Physical Infrastructure Network (DePIN). Just by keeping the device plugged in and providing network coverage, your router automatically earns cryptocurrency tokens, actively offsetting its own cost.',
      },
      {
        title: 'True Plug-and-Play Passive Earning',
        desc: 'Zero coding, zero technical expertise, and zero maintenance required. You plug the router into the wall and connect it to your modem. While you stream, work, or sleep, the router quietly validates the network in the background and deposits rewards into your digital wallet.',
      },
      {
        title: 'Gamified Network Growth',
        desc: "You aren't just a customer; you are a partner in a community-owned global network. As you provide reliable uptime and essential bandwidth to the ecosystem, you are financially rewarded for helping scale the future of decentralized telecom.",
      },
    ],
  },
];

const STACK_STATS = [
  { label: 'Wi-Fi Standard', value: 'Wi-Fi 7' },
  { label: 'Li-Fi Speed', value: '10 Gbps' },
  { label: 'Layers', value: '3-in-1' },
  { label: 'DePIN', value: 'Earn & Offset' },
];

export default function LumenFiRouterPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip lumen-page-bg text-[var(--lumen-navy)] antialiased">
      <Head>
        <title>Lumen LIFI — LumenFi 3-in-1 Router</title>
        <meta
          name="description"
          content="Meet the LumenFi 3-in-1 Router: Wi-Fi 7 convenience, 10 Gbps Li-Fi security, and DePIN tokenization that pays you for your bandwidth—all in one connectivity hub."
        />
        <link rel="canonical" href="https://lifilumen.com/products/lumenfi-router" />
      </Head>

      <Header />

      <main className="relative z-10">
        {/* Hero Section */}
        <section className="page-screen-top relative overflow-hidden lumen-hero-wash">
          <div className="absolute inset-0 lumen-grid-pattern-hero opacity-40 pointer-events-none z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h1 className="lumen-display mb-6">
                  Meet the LumenFi 3-in-1 Router:{' '}
                  <span className="text-gradient-lumen">
                    The Future of Connectivity is Here
                  </span>
                </h1>
                <p className="lumen-lead mb-8 max-w-xl">
                  Stop paying for internet hardware that only does one thing and constantly costs you money.
                  The LumenFi router is the world&apos;s first complete connectivity hub, fusing the universal
                  reach of Wi-Fi 7, the unbreakable security of optical Li-Fi, and a revolutionary economic
                  engine that actively pays you for your bandwidth.
                </p>
                <div className="flex flex-col sm:flex-row gap-4">
                  <Link
                    href="/products"
                    className="inline-flex items-center justify-center gap-2.5 h-12 px-7 rounded-xl text-slate-950 font-bold text-sm tracking-wide shadow-lg shadow-cyan-500/20 transition-all duration-300 hover:scale-[1.03] hover:shadow-cyan-500/40 bg-gradient-to-r from-cyan-400 via-teal-400 to-emerald-400"
                  >
                    <ShoppingCart className="w-4 h-4" />
                    View Products
                  </Link>
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl font-bold text-sm tracking-wide border-2 border-[var(--lumen-blue)] text-[var(--lumen-blue)] bg-white"
                  >
                    Contact Sales
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Product Showcase Container */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-lg bg-gradient-to-r from-cyan-500 to-teal-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
                <div className="relative rounded-3xl overflow-hidden border border-slate-800 bg-slate-900/90 shadow-2xl aspect-[4/3]">
                  <Image
                    src="/images/products/router.jpg"
                    alt="LumenFi 3-in-1 Router system"
                    fill
                    className="object-cover transition-transform duration-700 group-hover:scale-105 opacity-90"
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/20 to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-6">
                    <div className="grid grid-cols-2 sm:grid-cols-4 gap-2.5">
                      {STACK_STATS.map((s) => (
                        <div
                          key={s.label}
                          className="rounded-xl bg-slate-900/70 backdrop-blur-md border border-slate-700/50 p-3 text-center transition-all hover:bg-slate-800/80 hover:border-slate-600"
                        >
                          <p className="lumen-stat text-white">{s.value}</p>
                          <p className="text-[10px] font-mono uppercase tracking-wider text-cyan-400 mt-1 font-semibold">
                            {s.label}
                          </p>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Three Layers Section */}
        {LAYERS.map((layer, index) => {
          const Icon = layer.icon;
          const isDark = index % 2 === 0;
          const featuresOnRight = index % 2 === 0;

          return (
            <section
              key={layer.id}
              id={layer.id}
              className={`relative overflow-hidden py-16 sm:py-24 ${
                isDark ? 'section-wash-navy' : 'section-wash-white'
              }`}
            >
              <div className="mx-auto max-w-6xl px-4 sm:px-6">
                <div
                  className={`flex flex-col gap-12 lg:items-center lg:gap-20 ${
                    featuresOnRight ? 'lg:flex-row' : 'lg:flex-row-reverse'
                  }`}
                >
                  <div className="lg:w-[42%] lg:shrink-0">
                    <span
                      className="router-layer-kicker"
                      style={{ color: layer.accent }}
                    >
                      {layer.badge}
                    </span>
                    <div
                      className="mt-5 mb-6 inline-flex h-12 w-12 items-center justify-center rounded-lg"
                      style={{ backgroundColor: layer.accentBg, color: layer.accent }}
                    >
                      <Icon className="h-5 w-5" strokeWidth={2} />
                    </div>
                    <h2 className={`${isDark ? 'lumen-h2-light' : 'lumen-h2'} mb-4`}>
                      {layer.title}
                    </h2>
                    <p className={isDark ? 'lumen-body-sm-light' : 'lumen-body-sm'}>
                      {layer.subtitle}
                    </p>
                  </div>

                  <div className="lg:min-w-0 lg:flex-1">
                    <ul className="space-y-8">
                      {layer.features.map((feature, fi) => (
                        <li
                          key={feature.title}
                          className={`flex gap-5 ${
                            fi < layer.features.length - 1
                              ? isDark
                                ? 'border-b border-white/10 pb-8'
                                : 'border-b border-[var(--lumen-border)] pb-8'
                              : ''
                          }`}
                        >
                          <span
                            className="router-layer-num mt-0.5 shrink-0"
                            style={{ color: layer.accent }}
                          >
                            0{fi + 1}
                          </span>
                          <div>
                            <h3 className={`router-layer-feat-title mb-2 ${isDark ? 'text-white' : 'text-[var(--lumen-navy)]'}`}>
                              {feature.title}
                            </h3>
                            <p className={`router-layer-feat-desc ${isDark ? 'text-white/70' : 'text-[var(--lumen-muted)]'}`}>
                              {feature.desc}
                            </p>
                          </div>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        <section className="relative overflow-hidden py-16 sm:py-24 section-wash-white">
          <div className="relative z-10 mx-auto max-w-2xl px-4 text-center sm:px-6">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-[rgba(0,194,199,0.08)] border border-[var(--lumen-border)] text-[var(--lumen-blue)] text-xs font-semibold uppercase tracking-wider mb-6">
              <ShieldCheck className="w-4 h-4 text-[var(--lumen-cyan)]" />
              One Router. Three Revolutions.
            </div>
            <h2 className="lumen-h2 mb-5">Upgrade Your Network Today</h2>
            <p className="lumen-body mb-10">
              Wi-Fi 7 for every device you own. Li-Fi for speed and security that radio cannot match.
              DePIN rewards that turn your router into an asset—not another monthly expense.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl text-white font-bold text-sm w-full sm:w-auto"
                style={{ background: 'linear-gradient(135deg, #1A6EBF 0%, #00C2C7 100%)' }}
              >
                Explore Full Catalog
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl font-bold text-sm text-[var(--lumen-blue)] border-2 border-[var(--lumen-blue)] bg-white w-full sm:w-auto"
              >
                View All Products
              </Link>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}