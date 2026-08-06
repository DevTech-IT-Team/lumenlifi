import { useEffect } from 'react';

export default function DeferredAnalytics() {
  useEffect(() => {
    const load = () => {
      if (window.__lumenAnalyticsLoaded) return;
      window.__lumenAnalyticsLoaded = true;

      if (!window.clarity) {
        (function (c, l, a, r, i, t, y) {
          c[a] =
            c[a] ||
            function () {
              (c[a].q = c[a].q || []).push(arguments);
            };
          t = l.createElement(r);
          t.async = 1;
          t.src = 'https://www.clarity.ms/tag/' + i;
          y = l.getElementsByTagName(r)[0];
          y.parentNode.insertBefore(t, y);
        })(window, document, 'clarity', 'script', 'xmpy53son7');
      }

      if (!window.gtag) {
        window.dataLayer = window.dataLayer || [];
        function gtag() {
          window.dataLayer.push(arguments);
        }
        window.gtag = gtag;
        gtag('js', new Date());
        gtag('config', 'G-LG4Z46NWW6');

        const gtagScript = document.createElement('script');
        gtagScript.async = true;
        gtagScript.src = 'https://www.googletagmanager.com/gtag/js?id=G-LG4Z46NWW6';
        document.head.appendChild(gtagScript);
      }

      if (!window.fbq) {
        !(function (f, b, e, v, n, t, s) {
          if (f.fbq) return;
          n = f.fbq = function () {
            n.callMethod ? n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          };
          if (!f._fbq) f._fbq = n;
          n.push = n;
          n.loaded = !0;
          n.version = '2.0';
          n.queue = [];
          t = b.createElement(e);
          t.async = !0;
          t.src = v;
          s = b.getElementsByTagName(e)[0];
          s.parentNode.insertBefore(t, s);
        })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
        window.fbq('init', '2911650089213039');
        window.fbq('track', 'PageView');
      }
    };

    const onInteraction = () => {
      load();
      window.removeEventListener('scroll', onInteraction);
      window.removeEventListener('click', onInteraction);
      window.removeEventListener('keydown', onInteraction);
    };

    window.addEventListener('scroll', onInteraction, { once: true, passive: true });
    window.addEventListener('click', onInteraction, { once: true });
    window.addEventListener('keydown', onInteraction, { once: true });

    const idleTimer = window.setTimeout(load, 5000);
    return () => window.clearTimeout(idleTimer);
  }, []);

  return (
    <noscript>
      <img
        height="1"
        width="1"
        style={{ display: 'none' }}
        src="https://www.facebook.com/tr?id=2911650089213039&ev=PageView&noscript=1"
        alt=""
      />
    </noscript>
  );
}
