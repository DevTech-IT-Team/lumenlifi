import dynamic from 'next/dynamic';
import Head from 'next/head';
import Header from '../components/common/Header';
import PageMeta from '../components/seo/PageMeta';
import HeroSection from '../components/sections/home/HeroSection';
import HeroPreorderSection from '../components/sections/home/HeroPreorderSection';
import AboutSection from '../components/sections/home/AboutSection';
import LazyOnVisible from '../components/sections/home/LazyOnVisible';
import ConsciousHomeSection from '../components/sections/home/ConsciousHomeSection';
import FinalCTASection from '../components/sections/home/FinalCTASection';
import DeferredAnalytics from '../components/common/DeferredAnalytics';
import LiFiEcosystem from '../components/sections/home/LiFiEcosystem';


const Footer = dynamic(() => import('../components/common/Footer'), { ssr: false });
const ComingSoonPolePopup = dynamic(() => import('../components/common/ComingSoonPolePopup'), {
  ssr: false,
});

export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-[#030914] antialiased font-sans text-white">
      <PageMeta
        title="LiFi Lamps & Light-Based Wireless Internet | Lumen LiFi"
        description="Discover Lumen LiFi: LiFi lamps that deliver fast, secure wireless internet through light. Explore LiFi technology, products, learning resources and more."
        path="/"
        image="/images/hero/wifiandlifi.webp"
      />
      <Head>
        <meta
          name="keywords"
          content="LiFi, LiFi lamp, light fidelity, LiFi technology, wireless internet through light, secure wireless, LumenFi, Lumen LiFi"
        />
        <meta name="google-site-verification" content="p7igAeUvEgb6CSKU_7ZtQzpNA2wZIvToRGFQCZ3eIUs" />
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
        <HeroPreorderSection />
        {/* <AboutSection /> */}
        <LazyOnVisible load={() => import('../components/sections/home/HomeFeaturesSection')} minHeight="28rem" />
        <ConsciousHomeSection />
        {/* <LazyOnVisible load={() => import('../components/sections/home/EnterpriseSection')} minHeight="24rem" /> */}
        <LazyOnVisible load={() => import('../components/sections/home/EcosystemSection')} minHeight="28rem" />
        <FinalCTASection />
      </main>

      <Footer />

      <ComingSoonPolePopup />
      <DeferredAnalytics />
    </div>
  );
}
