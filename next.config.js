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
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
    formats: ['image/avif', 'image/webp'],
    // Optimized images were cached for only 4 hours (max-age=14400), so most visitors
    // triggered a fresh resize. Source files rarely change; keep the result for 31 days.
    minimumCacheTTL: 2678400,
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
    if (process.env.NODE_ENV !== 'development') {
      // Files in /public have stable (unhashed) names and were served with max-age=0,
      // so every page view re-downloaded fonts, icons and videos. Cache them for 30 days;
      // rename a file when its content changes. (/_next/static already gets 1 year immutable.)
      const publicAssetCache = [
        { key: 'Cache-Control', value: 'public, max-age=2592000, stale-while-revalidate=86400' },
      ];
      return ['/fonts/:path*', '/images/:path*', '/videos/:path*', '/brand/:path*'].map((source) => ({
        source,
        headers: publicAssetCache,
      }));
    }
    return [
      {
        source: '/:path*',
        headers: [
          { key: 'Cache-Control', value: 'no-store, no-cache, must-revalidate, max-age=0' },
          { key: 'Pragma', value: 'no-cache' },
        ],
      },
    ];
  },
});

export default nextConfig;
