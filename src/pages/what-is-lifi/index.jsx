import Head from 'next/head';
import Header from '../../components/common/Header';
import Footer from '../../components/common/Footer';
import WhatIsLiFiHero from '../../components/sections/what-is-lifi/WhatIsLiFiHero';
import HowLiFiWorksSection from '../../components/sections/what-is-lifi/HowLiFiWorksSection';
import FinalCTASection from '../../components/sections/home/FinalCTASection';


export default function WhatIsLiFiPage() {
  return (
    <div className="flex min-h-screen flex-col overflow-x-clip bg-white antialiased font-sans text-[#0D2240]">
      <Head>
        <title>What is LiFi? — Lumen LiFi</title>
        <meta
          name="description"
          content="LiFi is a high-speed, secure wireless technology that transmits data using light waves instead of radio frequencies."
        />
      </Head>

      <Header />

      <main className="flex-grow">
        <WhatIsLiFiHero />
        <HowLiFiWorksSection />
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
