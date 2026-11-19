import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

/** Legacy URL — redirects to /lifi-lamp */
export default function LifiPoleRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/lifi-lamp');
  }, [router]);

  return (
    <Head>
      <title>Redirecting…</title>
      <meta name="robots" content="noindex, follow" />
      <meta httpEquiv="refresh" content="0;url=/lifi-lamp" />
      <link key="canonical" rel="canonical" href="https://lifilumen.com/lifi-lamp" />
    </Head>
  );
}
