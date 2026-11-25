import localFont from 'next/font/local';
import Script from 'next/script';
import '../assets/styles/global.css';
import JsonLd from '../components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '../lib/schema';

const geist = localFont({
  src: '../../public/fonts/Geist-Variable.woff2',
  variable: '--font-geist-sans',
  display: 'swap',
  weight: '100 900',
  fallback: ['ui-sans-serif', 'system-ui', 'sans-serif'],
  adjustFontFallback: 'Arial',
  preload: true,
});

const GTM_ID = 'GTM-PMFVNZLW';

const GTM_SNIPPET = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export default function App({ Component, pageProps }) {
  return (
    <div className={`${geist.variable} ${geist.className} min-h-screen`}>
      <style
        dangerouslySetInnerHTML={{
          __html: `:root{--font-geist-sans:${geist.style.fontFamily};--font-inter:${geist.style.fontFamily}}`,
        }}
      />
      <Script id="gtm" strategy="lazyOnload">
        {GTM_SNIPPET}
      </Script>
      <JsonLd
        id="site-jsonld"
        data={{
          '@context': 'https://schema.org',
          '@graph': [organizationSchema, websiteSchema],
        }}
      />
      <Component {...pageProps} />
    </div>
  );
}
