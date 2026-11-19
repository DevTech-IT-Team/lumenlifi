import Head from 'next/head';

export function serializeJsonLd(data) {
  return JSON.stringify(data).replace(/</g, '\\u003c');
}

export default function JsonLd({ id = 'jsonld', data }) {
  if (!data) return null;

  return (
    <Head>
      <script
        key={id}
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: serializeJsonLd(data) }}
      />
    </Head>
  );
}
