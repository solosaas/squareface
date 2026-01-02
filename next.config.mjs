/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },

  // Image optimization - Core Web Vitals
  images: {
    formats: ['image/avif', 'image/webp'],
    deviceSizes: [640, 750, 828, 1080, 1200, 1920, 2048, 3840],
    imageSizes: [16, 32, 48, 64, 96, 128, 256, 384],
    minimumCacheTTL: 31536000, // 1 year cache for optimized images
    dangerouslyAllowSVG: true,
  },

  turbopack: {
    root: process.cwd(),
  },

  // Core Web Vitals optimization
  compress: true,
  poweredByHeader: false,
  generateEtags: true,

  // Experimental performance features (2024)
  experimental: {
    optimizePackageImports: [
      'lucide-react',
      '@radix-ui/react-icons',
      'framer-motion',
      'clsx',
      'tailwind-merge',
    ],
  },

  // Headers for performance and security
  async headers() {
    return [
      {
        source: '/:all*',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on'
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff'
          },
          {
            key: 'X-Frame-Options',
            value: 'DENY'
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block'
          },
        ],
      },
      // Static assets - 1 year cache (immutable)
      {
        source: '/:all*(svg|jpg|jpeg|png|webp|avif|woff2|woff)',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // Avatars - long cache
      {
        source: '/avatars/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      // SWF file - cache but not immutable (may be updated)
      {
        source: '/square-face.swf',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=604800', // 7 days
          },
        ],
      },
      // HTML/pages - short cache for updates
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=3600, must-revalidate', // 1 hour
          },
        ],
      },
    ]
  },
}

export default nextConfig