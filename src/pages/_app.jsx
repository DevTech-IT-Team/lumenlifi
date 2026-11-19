import { Inter } from 'next/font/google';
import Script from 'next/script';
import '../assets/styles/global.css';
import JsonLd from '../components/seo/JsonLd';
import { organizationSchema, websiteSchema } from '../lib/schema';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});

const GTM_ID = 'GTM-PMFVNZLW';

const GTM_SNIPPET = `(function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
})(window,document,'script','dataLayer','${GTM_ID}');`;

export default function App({ Component, pageProps }) {
  return (
    <div className={`${inter.variable} ${inter.className} min-h-screen`}>
      <Script id="gtm" strategy="afterInteractive">
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
