import Header from '../../components/common/Header';
import PageMeta from '../../components/seo/PageMeta';
import Footer from '../../components/common/Footer';
import RouterHeroSection from '../../components/sections/products/RouterHeroSection';
import RouterWifiSection from '../../components/sections/products/RouterWifiSection';
import RouterLifiSection from '../../components/sections/products/RouterLifiSection';
// import RouterDepinSection from '../../components/sections/products/RouterDepinSection';
import FinalCTASection from '../../components/sections/home/FinalCTASection';

export default function LumenFiRouterPage() {
  return (
    <div className="relative min-h-screen overflow-x-clip lumen-page-bg text-[var(--lumen-navy)] antialiased">
      <PageMeta
        title="LumenFi 3-in-1 Router | Wi-Fi 7 and LiFi | Lumen LiFi"
        description="Meet the LumenFi 3-in-1 Router: Wi-Fi 7 convenience, High-Speed Internet Li-Fi security, and DePIN tokenization that pays you for your bandwidth—all in one connectivity hub."
        path="/products/lumenfi-router"
        image="/images/lifi_wifi/lifi_wifi.webp"
        noindex
        crumbs={[
          { name: 'Home', path: '/' },
          { name: 'Products', path: '/products' },
          { name: 'LumenFi 3-in-1 Router', path: '/products/lumenfi-router' },
        ]}
      />

      <Header />

      <main className="relative z-10">
        <RouterHeroSection />
        <RouterWifiSection />
        <RouterLifiSection />
        {/* <RouterDepinSection /> */}
        <FinalCTASection />
      </main>

      <Footer />
    </div>
  );
}
