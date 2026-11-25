import path from 'path';
import { fileURLToPath } from 'url';
import bundleAnalyzer from '@next/bundle-analyzer';

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const withBundleAnalyzer = bundleAnalyzer({ enabled: process.env.ANALYZE === 'true' });

/** @type {import('next').NextConfig} */
const nextConfig = withBundleAnalyzer({
  reactStrictMode: true,
  poweredByHeader: false,
  compress: true,
  productionBrowserSourceMaps: false,
  compiler: {
    removeConsole: process.env.NODE_ENV === 'production',
  },
  turbopack: {},
  images: {
    contentDispositionType: 'inline',
    minimumCacheTTL: 60 * 60 * 24 * 30,
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
  },
  webpack: (config, { dev, isServer }) => {
    if (dev && !isServer) {
      config.output.filename = 'static/chunks/webpack-[name].js';
      config.output.chunkFilename = 'static/chunks/webpack-[name]-[chunkhash].js';
    }
    return config;
  },
  async redirects() {
    return [
      {
        source: '/blogs/what-is-lifi',
        destination: '/what-is-lifi',
        permanent: true,
      },
      {
        source: '/logo.png',
        destination: '/brand/logo.png',
        permanent: true,
      },
      {
        source: '/hero.1021c54e.png',
        destination: '/images/hero/wifiandlifi.webp',
        permanent: true,
      },
      {
        source: '/images/hero.1021c54e.png',
        destination: '/images/hero/wifiandlifi.webp',
        permanent: true,
      },
      {
        source: '/_next/static/media/hero.1021c54e.png',
        destination: '/images/hero/wifiandlifi.webp',
        permanent: true,
      },
      {
        source: '/products/lifi-pole',
        destination: '/lifi-lamp',
        permanent: true,
      },
      {
        source: '/blog',
        destination: '/blogs',
        permanent: true,
      },
      {
        source: '/blog/:path*',
        destination: '/blogs/:path*',
        permanent: true,
      },
      {
        source: '/privacy',
        destination: '/privacy-policy',
        permanent: true,
      },
      {
        source: '/terms',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/terms-and-condition',
        destination: '/terms-and-conditions',
        permanent: true,
      },
      {
        source: '/help',
        destination: '/frequently-asked-questions',
        permanent: true,
      },
    ];
  },
  async headers() {
    if (process.env.NODE_ENV === 'development') {
      return [
        {
          source: '/:path*',
          headers: [
            { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, max-age=0' },
            { key: 'Pragma', value: 'no-cache' },
          ],
        },
      ];
    }

    const month = 'public, max-age=2592000, stale-while-revalidate=86400';
    const year = 'public, max-age=31536000, immutable';
    return [
      { source: '/images/:path*', headers: [{ key: 'Cache-Control', value: month }] },
      { source: '/fonts/:path*', headers: [{ key: 'Cache-Control', value: year }] },
      { source: '/brand/:path*', headers: [{ key: 'Cache-Control', value: month }] },
      { source: '/videos/:path*', headers: [{ key: 'Cache-Control', value: month }] },
    ];
  },
});

export default nextConfig;
