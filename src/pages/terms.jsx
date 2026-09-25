import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

/** Legacy URL — redirects to /terms-and-conditions */
export default function TermsRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/terms-and-conditions');
  }, [router]);

  return (
    <Head>
      <title>Redirecting…</title>
      <meta httpEquiv="refresh" content="0;url=/terms-and-conditions" />
      <link rel="canonical" href="https://lifilumen.com/terms-and-conditions" />
    </Head>
  );
}
