/** Public site origin. No www. Mirrors Next.js metadataBase. */
export const metadataBase = new URL('https://lifilumen.com');

export const SITE_NAME = 'Lumen LiFi';

export const DEFAULT_OG_IMAGE = '/brand/logo.webp';

/**
 * Self-referencing canonical for a path.
 * Home is https://lifilumen.com/ ; every other path has no trailing slash.
 */
export function canonicalUrl(path = '/') {
  const raw = String(path || '/').split('?')[0].split('#')[0] || '/';
  if (raw === '/' || raw === '') return new URL('/', metadataBase).href;

  const withSlash = raw.startsWith('/') ? raw : `/${raw}`;
  const trimmed = withSlash.replace(/\/+$/, '') || '/';
  return new URL(trimmed, metadataBase).href;
}

export function absoluteUrl(path = '/') {
  if (!path) return canonicalUrl('/');
  if (/^https?:\/\//i.test(path)) return path;
  const withSlash = path.startsWith('/') ? path : `/${path}`;
  return new URL(withSlash, metadataBase).href;
}

export function plainText(value) {
  return String(value || '')
    .replace(/\[([^\]]+)\]\([^)]+\)/g, '$1')
    .replace(/<[^>]+>/g, '')
    .replace(/\s+/g, ' ')
    .trim();
}
