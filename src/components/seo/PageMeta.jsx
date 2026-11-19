import Head from 'next/head';
import { DEFAULT_OG_IMAGE, SITE_NAME, absoluteUrl, canonicalUrl } from '../../lib/seo';
import { serializeJsonLd } from './JsonLd';

/**
 * Pages Router equivalent of the Metadata API:
 * metadataBase is https://lifilumen.com and alternates.canonical is self-referencing.
 */
export default function PageMeta({
  title,
  description,
  path,
  image = DEFAULT_OG_IMAGE,
  type = 'website',
  noindex = false,
  crumbs,
  jsonLd,
}) {
  const url = canonicalUrl(path);
  const imageUrl = absoluteUrl(image);
  const graph = [];

  if (crumbs?.length) {
    graph.push({
      '@type': 'BreadcrumbList',
      itemListElement: crumbs.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url || canonicalUrl(item.path),
      })),
    });
  }

  if (jsonLd) {
    graph.push(...(Array.isArray(jsonLd) ? jsonLd : [jsonLd]));
  }

  return (
    <Head>
      <title key="title">{title}</title>
      <meta key="description" name="description" content={description} />
      <link key="canonical" rel="canonical" href={url} />
      <meta key="og:title" property="og:title" content={title} />
      <meta key="og:description" property="og:description" content={description} />
      <meta key="og:type" property="og:type" content={type} />
      <meta key="og:url" property="og:url" content={url} />
      <meta key="og:site_name" property="og:site_name" content={SITE_NAME} />
      <meta key="og:image" property="og:image" content={imageUrl} />
      <meta key="twitter:card" name="twitter:card" content="summary_large_image" />
      <meta key="twitter:title" name="twitter:title" content={title} />
      <meta key="twitter:description" name="twitter:description" content={description} />
      <meta key="twitter:image" name="twitter:image" content={imageUrl} />
      {noindex ? <meta key="robots" name="robots" content="noindex, follow" /> : null}
      {graph.length > 0 ? (
        <script
          key="page-jsonld"
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: serializeJsonLd({ '@context': 'https://schema.org', '@graph': graph }),
          }}
        />
      ) : null}
    </Head>
  );
}
