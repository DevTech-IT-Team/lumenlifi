import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="overflow-x-clip">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        {/* Small dedicated icons: the old 83 KB logo.png was fetched as the favicon on every page. */}
        <link rel="icon" href="/brand/favicon-32.png" type="image/png" sizes="32x32" />
        <link rel="icon" href="/brand/favicon-48.png" type="image/png" sizes="48x48" />
        <link rel="apple-touch-icon" href="/brand/apple-touch-icon.png" sizes="180x180" />
        {/* Geist is the site-wide UI font (global.css @font-face); preload it so text doesn't swap late. */}
        <link
          rel="preload"
          href="/fonts/Geist-Variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <script
          dangerouslySetInnerHTML={{
            __html:
              "if(location.hostname==='localhost'||location.hostname==='127.0.0.1'){if('serviceWorker'in navigator){navigator.serviceWorker.getRegistrations().then(function(r){r.forEach(function(x){x.unregister()})})}if(window.caches){caches.keys().then(function(k){k.forEach(function(n){caches.delete(n)})})}}",
          }}
        />
      </Head>
      <body>
        <noscript>
          <iframe
            src="https://www.googletagmanager.com/ns.html?id=GTM-PMFVNZLW"
            height="0"
            width="0"
            style={{ display: 'none', visibility: 'hidden' }}
          />
        </noscript>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
