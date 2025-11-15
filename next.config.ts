import { NextConfig } from 'next';
import createNextIntlPlugin from 'next-intl/plugin';

const nextConfig: NextConfig = {
  images: {
    formats: ['image/webp', 'image/avif'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 60 * 60 * 24 * 30, // 30 days
    dangerouslyAllowSVG: true,
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    remotePatterns: [
      // Известные CDN и сервисы изображений
      {
        protocol: 'https',
        hostname: 'tokens.pancakeswap.finance',
      },
      {
        protocol: 'https',
        hostname: 'coin-images.coingecko.com',
      },
      {
        protocol: 'https',
        hostname: 'raw.githubusercontent.com',
      },
      {
        protocol: 'https',
        hostname: 'token-icons.s3.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'gateway.irys.xyz',
      },
      {
        protocol: 'https',
        hostname: 'archive.cetus.zone',
      },
      {
        protocol: 'https',
        hostname: 'img-v1.raydium.io',
      },
      {
        protocol: 'https',
        hostname: 'cdn.1stdigital.com',
      },
      {
        protocol: 'https',
        hostname: 'www.bucketprotocol.io',
      },
      {
        protocol: 'https',
        hostname: 's1.bycsi.com',
      },
      {
        protocol: 'https',
        hostname: 'momentum-statics.s3.us-west-1.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: 'node1.irys.xyz',
      },
      {
        protocol: 'https',
        hostname: 'aftermath.finance',
      },
      // Arweave домены (децентрализованное хранилище)
      {
        protocol: 'https',
        hostname: '*.arweave.net',
      },
      // S3 buckets (AWS)
      {
        protocol: 'https',
        hostname: '*.s3.*.amazonaws.com',
      },
      {
        protocol: 'https',
        hostname: '*.s3.amazonaws.com',
      },
      // GitHub
      {
        protocol: 'https',
        hostname: 'github.com',
        pathname: '/**',
      },
      {
        protocol: 'https',
        hostname: 'githubusercontent.com',
      },
    ],
  },
  experimental: {
    optimizeCss: true,
  },
};

const withNextIntl = createNextIntlPlugin();
export default withNextIntl(nextConfig);
