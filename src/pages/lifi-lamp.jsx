import Head from 'next/head';
import Header from '../components/common/Header';
import PageMeta from '../components/seo/PageMeta';
import Footer from '../components/common/Footer';
import PoleHeroSection from '../components/sections/products/PoleHeroSection';
import PoleFeaturesSection from '../components/sections/products/PoleFeaturesSection';
import PoleImageScroller from '../components/sections/products/PoleImageScroller';
import FinalCTASection from '../components/sections/home/FinalCTASection';

export default function LifiLampPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip lumen-page-bg text-[var(--lumen-navy)] antialiased">
      <PageMeta
        title="LiFi Lamp | Wireless Internet Through Light | Lumen LiFi"
        description="Meet the LiFi lamp: a smart light that doubles as a secure, high-speed wireless connection. See features and how it works, and get in touch."
        path="/lifi-lamp"
        image="/images/pole/poles_ind.webp"
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'LiFi Lamp', path: '/lifi-lamp' },
        ]}
      />
      <Head>
        <meta
          name="keywords"
          content="LiFi lamp, LiFi desk lamp, LiFi device, LiFi light, buy LiFi lamp, LiFi product, LumenFi, Lumen LiFi"
        />
      </Head>

      <Header />

      <main className="relative z-10">
        <PoleHeroSection />
        <PoleImageScroller />
        <PoleFeaturesSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
