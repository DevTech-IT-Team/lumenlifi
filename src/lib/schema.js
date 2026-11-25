import { absoluteUrl, canonicalUrl, plainText } from './seo';

const ORG_ID = 'https://lifilumen.com/#organization';
const SITE_ID = 'https://lifilumen.com/#website';

export const organizationSchema = {
  '@type': 'Organization',
  '@id': ORG_ID,
  name: 'Lumen LiFi',
  alternateName: ['LumenFi', 'Lumen LIFI'],
  url: 'https://lifilumen.com/',
  logo: {
    '@type': 'ImageObject',
    url: 'https://lifilumen.com/brand/logo.webp',
  },
  email: 'rupali@lifilumen.com',
  sameAs: [
    'https://www.facebook.com/lumenlifi/',
    'https://www.instagram.com/lumenlifi/',
    'https://www.linkedin.com/company/lumen-lifi',
    'https://www.youtube.com/@lifilumen',
  ],
};

export const websiteSchema = {
  '@type': 'WebSite',
  '@id': SITE_ID,
  url: 'https://lifilumen.com/',
  name: 'Lumen LiFi',
  publisher: { '@id': ORG_ID },
  inLanguage: 'en',
};

export function productSchema({ name, description, image, category }) {
  return {
    '@type': 'Product',
    name,
    description,
    image: [absoluteUrl(image)],
    brand: { '@type': 'Brand', name: 'Lumen LiFi' },
    category,
    url: canonicalUrl('/lifi-lamp'),
  };
}

export function breadcrumbSchema(items) {
  return {
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, index) => ({
      '@type': 'ListItem',
      position: index + 1,
      name: item.name,
      item: item.url || canonicalUrl(item.path),
    })),
  };
}

export function faqSchema(items) {
  return {
    '@type': 'FAQPage',
    mainEntity: items.map((item) => ({
      '@type': 'Question',
      name: plainText(String(item.q || '').replace(/^\d+\.\s*/, '')),
      acceptedAnswer: {
        '@type': 'Answer',
        text: plainText(item.a),
      },
    })),
  };
}

export function blogPostingSchema(post) {
  const url = canonicalUrl(`/blogs/${post.slug}`);
  const schema = {
    '@type': 'BlogPosting',
    '@id': `${url}#article`,
    headline: post.title,
    description: post.metaDescription,
    datePublished: post.dateIso,
    author: { '@type': 'Organization', '@id': ORG_ID, name: 'Lumen LiFi' },
    publisher: { '@id': ORG_ID },
    mainEntityOfPage: url,
    articleSection: post.category,
    inLanguage: 'en',
    isPartOf: { '@id': SITE_ID },
  };

  if (post.image) schema.image = [absoluteUrl(post.image)];

  return schema;
}
