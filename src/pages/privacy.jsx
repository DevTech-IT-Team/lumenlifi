import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

/** Legacy URL — redirects to /privacy-policy */
export default function PrivacyRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/privacy-policy');
  }, [router]);

  return (
    <Head>
      <title>Redirecting…</title>
      <meta httpEquiv="refresh" content="0;url=/privacy-policy" />
      <link rel="canonical" href="https://lifilumen.com/privacy-policy" />
    </Head>
  );
}
