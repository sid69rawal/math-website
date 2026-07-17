import type { NextConfig } from "next";

const isDev = process.env.NODE_ENV === 'development';

const nextConfig: NextConfig = {
  images: {
    // Disable image optimization locally — WSL2 + Turbopack has a known bug where
    // the image optimizer fails to read local files. On Vercel this is always false.
    unoptimized: isDev,
  },
  async redirects() {
    return [
      // Redirect www to non-www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'www.levelupmathacademy.ca',
          },
        ],
        destination: 'https://levelupmathacademy.ca/:path*',
        permanent: true,
      },
      // Redirect HTTP to HTTPS (if accessed via HTTP)
      {
        source: '/:path*',
        has: [
          {
            type: 'header',
            key: 'x-forwarded-proto',
            value: 'http',
          },
        ],
        destination: 'https://levelupmathacademy.ca/:path*',
        permanent: true,
      },
    ];
  },
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'X-Robots-Tag',
            value: 'index, follow',
          },
        ],
      },
    ];
  },
};

export default nextConfig;
