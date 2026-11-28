import Head from 'next/head';
import Header from '../components/common/Header';
import PageMeta from '../components/seo/PageMeta';
import Footer from '../components/common/Footer';
import PoleHeroSection from '../components/sections/products/PoleHeroSection';
import PoleFeaturesSection from '../components/sections/products/PoleFeaturesSection';
import PoleImageScroller from '../components/sections/products/PoleImageScroller';
import LampBulbCompareSection, {
  LAMP_BULB_FAQS,
} from '../components/sections/products/LampBulbCompareSection';
import FinalCTASection from '../components/sections/home/FinalCTASection';
import JsonLd from '../components/seo/JsonLd';
import { faqSchema } from '../lib/schema';

export default function LifiLampPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip lumen-page-bg text-[var(--lumen-navy)] antialiased">
      <PageMeta
        title="LiFi Lamp | Wireless Internet Through Light | Lumen LiFi"
        description="Meet the LiFi Lamp: a décor lamp with LiFi and WiFi 7, a step beyond a LiFi bulb. See features and how it works, and get in touch."
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
        <LampBulbCompareSection />
        <FinalCTASection />
      </main>

      <JsonLd
        id="lifi-lamp-faq"
        data={{
          '@context': 'https://schema.org',
          ...faqSchema(LAMP_BULB_FAQS),
        }}
      />
      <Footer />
    </div>
  );
}
