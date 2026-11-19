import { useEffect } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';

/** Legacy URL — redirects to /blogs */
export default function BlogRedirect() {
  const router = useRouter();

  useEffect(() => {
    router.replace('/blogs');
  }, [router]);

  return (
    <Head>
      <title>Redirecting…</title>
      <meta name="robots" content="noindex, follow" />
      <meta httpEquiv="refresh" content="0;url=/blogs" />
      <link key="canonical" rel="canonical" href="https://lifilumen.com/blogs" />
    </Head>
  );
}
