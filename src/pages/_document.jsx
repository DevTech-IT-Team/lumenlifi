import { Html, Head, Main, NextScript } from 'next/document';

export default function Document() {
  return (
    <Html lang="en" className="overflow-x-clip">
      <Head>
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/brand/logo.png" type="image/png" />
        <link rel="shortcut icon" href="/brand/logo.png" type="image/png" />
        <link rel="apple-touch-icon" href="/brand/logo.png" />
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
