import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

/** Legacy URL — redirects to /frequently-asked-questions */
export default function HelpRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/frequently-asked-questions');
  }, [router]);

  return (
    <Head>
      <title>Redirecting…</title>
      <meta httpEquiv="refresh" content="0;url=/frequently-asked-questions" />
      <link rel="canonical" href="https://lifilumen.com/frequently-asked-questions" />
    </Head>
  );
}
