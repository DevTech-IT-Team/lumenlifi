import Head from 'next/head';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import PoleHeroSection from '../../components/sections/products/PoleHeroSection';
import PoleFeaturesSection from '../../components/sections/products/PoleFeaturesSection';
import PoleImageScroller from '../../components/sections/products/PoleImageScroller';
import FinalCTASection from '../../components/sections/home/FinalCTASection';

export default function LifiPolePage() {
  return (
    <div className="relative min-h-screen overflow-x-clip lumen-page-bg text-[var(--lumen-navy)] antialiased">
      <Head>
        <title>Lumen LIFI — LiFi Lamp</title>
        <meta
          name="description"
          content="LiFi Lamp: an indoor décor Lamp for your home with stylish lighting and built-in LiFi technology. Coming soon."
        />
        <link rel="canonical" href="https://lifilumen.com/products/lifi-pole" />
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
