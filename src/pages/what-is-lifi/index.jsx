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
        <title>What Is LiFi? | Light Fidelity Technology Explained | Lumen LiFi</title>
        <meta
          name="description"
          content="Learn what LiFi (Light Fidelity) is, how it sends data using light, and how it compares to Wi-Fi in speed, security and reliability."
        />
        <meta
          name="keywords"
          content="what is LiFi, light fidelity, LiFi vs Wi-Fi, how LiFi works, visible light communication, VLC, LumenFi, Lumen LiFi"
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
