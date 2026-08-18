import Head from 'next/head';
import Link from 'next/link';
import Image from 'next/image';
import {
  ArrowRight,
  Wifi,
  Zap,
  Coins,
  ShieldCheck,
  Layers3,
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
    <div className="relative overflow-hidden min-h-screen bg-slate-950 text-slate-100 antialiased selection:bg-cyan-500 selection:text-slate-950">
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
        <section className="relative pt-36 pb-24 overflow-hidden bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
          {/* Ambient Glow Elements */}
          <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-gradient-to-tr from-sky-500/15 via-teal-500/20 to-emerald-500/10 rounded-full blur-[120px] pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(#1e293b_1px,transparent_1px)] [background-size:24px_24px] opacity-20 pointer-events-none z-0" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
              <div>
                <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight leading-[1.1] mb-6 text-white overflow-visible">
                  Meet the LumenFi 3-in-1 Router:{' '}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-sky-400 via-cyan-300 to-teal-400">
                    The Future of Connectivity is Here
                  </span>
                </h1>
                <p className="text-base sm:text-lg leading-relaxed text-slate-400 mb-8 max-w-xl">
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
                    className="inline-flex items-center justify-center gap-2 h-12 px-7 rounded-xl font-bold text-sm tracking-wide border border-slate-700/80 text-slate-200 bg-slate-900/50 hover:bg-slate-800/80 hover:border-slate-600 backdrop-blur-md transition-all duration-200"
                  >
                    Contact Sales
                    <ArrowRight className="w-4 h-4 text-slate-400" />
                  </Link>
                </div>
              </div>

              {/* Product Showcase Container */}
              <div className="relative group">
                <div className="absolute -inset-1 rounded-[2rem] bg-gradient-to-r from-cyan-500 to-teal-500 opacity-20 blur-xl group-hover:opacity-40 transition duration-500" />
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
                          <p className="text-sm sm:text-base font-extrabold text-white tracking-wide">{s.value}</p>
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

          return (
            <section
              key={layer.id}
              id={layer.id}
              className={`relative py-20 sm:py-24 border-t border-slate-800/60 ${
                index % 2 === 0 ? 'bg-slate-950' : 'bg-slate-900/40'
              }`}
            >
              <div className="max-w-7xl mx-auto px-6">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-start">
                  <div className="lg:col-span-4">
                    <div
                      className="sticky top-28 rounded-3xl border p-8 shadow-xl backdrop-blur-xl relative overflow-hidden group"
                      style={{
                        backgroundColor: 'rgba(15, 23, 42, 0.6)',
                        borderColor: layer.border,
                      }}
                    >
                      <div 
                        className="absolute -top-12 -right-12 w-32 h-32 rounded-full blur-2xl opacity-20 pointer-events-none"
                        style={{ backgroundColor: layer.accent }}
                      />
                      <div
                        className="inline-flex p-3.5 rounded-2xl mb-6 shadow-inner"
                        style={{ backgroundColor: layer.accentBg, color: layer.accent }}
                      >
                        <Icon className="w-8 h-8" strokeWidth={2} />
                      </div>
                      <p
                        className="text-xs font-mono font-bold uppercase tracking-widest mb-2"
                        style={{ color: layer.accent }}
                      >
                        {layer.badge}
                      </p>
                      <h2 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight mb-3 leading-tight">
                        {layer.title}
                      </h2>
                      <p className="text-sm text-slate-400 leading-relaxed">{layer.subtitle}</p>
                    </div>
                  </div>

                  {/* Feature List */}
                  <div className="lg:col-span-8 space-y-4">
                    {layer.features.map((feature, fi) => (
                      <div
                        key={feature.title}
                        className="group rounded-2xl bg-slate-900/60 border border-slate-800 p-6 sm:p-8 hover:border-slate-700 hover:bg-slate-900/90 hover:shadow-lg hover:shadow-slate-950/50 transition-all duration-300"
                      >
                        <div className="flex items-start gap-5">
                          <span
                            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl font-mono text-xs font-bold text-slate-950 shadow-md"
                            style={{ backgroundColor: layer.accent }}
                          >
                            0{fi + 1}
                          </span>
                          <div>
                            <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-300 transition-colors">
                              {feature.title}
                            </h3>
                            <p className="text-sm text-slate-400 leading-relaxed">{feature.desc}</p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </section>
          );
        })}

        {/* Stack Summary Section */}
        <section className="relative py-24 sm:py-32 overflow-hidden bg-slate-950 border-t border-slate-800">
          {/* Accent lighting for summary */}
          <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-96 bg-gradient-to-t from-cyan-500/10 via-transparent to-transparent pointer-events-none" />

          <div className="relative z-10 max-w-7xl mx-auto px-6">
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 mb-16">
              {LAYERS.map((layer) => {
                const Icon = layer.icon;
                return (
                  <div
                    key={layer.id}
                    className="rounded-2xl border border-slate-800 bg-slate-900/40 backdrop-blur-md p-8 text-center transition-all duration-300 hover:border-slate-700 hover:scale-[1.02]"
                  >
                    <div
                      className="inline-flex p-3 rounded-2xl mb-4 shadow-inner"
                      style={{ backgroundColor: layer.accentBg, color: layer.accent }}
                    >
                      <Icon className="w-6 h-6" />
                    </div>
                    <h3 className="font-bold text-lg text-white mb-1.5">{layer.title}</h3>
                    <p className="text-xs text-slate-400 font-mono uppercase tracking-wider font-semibold">{layer.badge}</p>
                  </div>
                );
              })}
            </div>

            <div className="max-w-2xl mx-auto text-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-cyan-950/60 border border-cyan-800/50 text-cyan-300 font-mono text-xs font-semibold uppercase tracking-wider mb-6 backdrop-blur-md">
                <ShieldCheck className="w-4 h-4 text-cyan-400" />
                One Router. Three Revolutions.
              </div>
              <h2 className="text-3xl sm:text-5xl font-black text-white tracking-tight mb-5 leading-tight">
                Upgrade Your Network Today
              </h2>
              <p className="text-slate-400 text-base leading-relaxed mb-10">
                Wi-Fi 7 for every device you own. Li-Fi for speed and security that radio cannot match.
                DePIN rewards that turn your router into an asset—not another monthly expense.
              </p>
              <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
                <Link
                  href="/products"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl text-slate-950 font-bold text-sm bg-white hover:bg-slate-200 transition-all duration-200 w-full sm:w-auto shadow-lg shadow-white/10"
                >
                  Explore Full Catalog
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  href="/what-is-lifi"
                  className="inline-flex items-center justify-center gap-2 h-12 px-8 rounded-xl font-bold text-sm text-slate-200 border border-slate-700 bg-slate-900/60 hover:bg-slate-800 hover:border-slate-600 transition-all duration-200 w-full sm:w-auto backdrop-blur-md"
                >
                  Learn About Li-Fi
                </Link>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}