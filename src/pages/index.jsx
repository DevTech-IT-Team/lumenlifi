import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from '../components/common/Header';
import HeroSection from '../components/sections/home/HeroSection';
import LazyOnVisible from '../components/sections/home/LazyOnVisible';
import DeferredAnalytics from '../components/common/DeferredAnalytics';

const Footer = dynamic(() => import('../components/common/Footer'), { ssr: false });

export default function HomePage() {
  return (
    <div className="flex flex-col min-h-screen antialiased font-sans lumen-page-bg text-[var(--lumen-navy)]">
      <Head>
        <title key="title">Lumen LiFi &mdash; Internet at the Speed of Light</title>
        <meta
          name="description"
          content="Lumen LiFi turns your everyday ceiling lights into a super-fast 10 Gbps internet connection. No Wi-Fi, no radio waves &mdash; just pure light-speed connectivity."
          key="description"
        />
        <meta property="og:title" content="LumenFi | The Speed of Light in Your Living Room" />
        <meta property="og:description" content="Experience 8.5x faster speeds than fiber with LiFi technology." />
        <meta property="og:image" content="https://lifilumen.com/_next/static/media/hero.1021c54e.png" />
        <meta name="twitter:card" content="summary_large_image" />
        <link rel="canonical" href="https://lifilumen.com/" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'Organization',
              name: 'LumenFi',
              url: 'https://lifilumen.com',
              logo: 'https://lifilumen.com/logo.png',
              description: 'Provider of cutting-edge LiFi technology for high-speed, secure wireless communication via light.',
            }),
          }}
        />
        <meta name="google-site-verification" content="T6efBcvjmi30fle2K8zsdweDzPT2YH_t9b9mM6CzjKU" />
      </Head>

      <noscript>
        <img
          height="1"
          width="1"
          style={{ display: 'none' }}
          src="https://www.facebook.com/tr?id=2911650089213039&ev=PageView&noscript=1"
          alt=""
        />
      </noscript>

      <Header />

      <main className="flex-grow">
        <HeroSection />
        {/* <LazyOnVisible load={() => import('../components/sections/home/SpeedTableSection')} minHeight="100vh" /> */}
        <LazyOnVisible load={() => import('../components/sections/home/ConsciousHomeSection')} minHeight="900px" />
        <LazyOnVisible load={() => import('../components/sections/home/HomeFeaturesSection')} minHeight="80vh" />
        <LazyOnVisible load={() => import('../components/sections/home/EnterpriseSection')} minHeight="60vh" />
        <LazyOnVisible load={() => import('../components/sections/home/EcosystemSection')} minHeight="80vh" />
        <LazyOnVisible load={() => import('../components/sections/home/HeroVisual')} minHeight="700px" />
        <LazyOnVisible load={() => import('../components/sections/home/FinalCTASection')} minHeight="60vh" />
      </main>

      <Footer />

      <DeferredAnalytics />
    </div>
  );
}
