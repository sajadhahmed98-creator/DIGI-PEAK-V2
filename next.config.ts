import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Clean up legacy .html extensions
      {
        source: "/:path*\\.html",
        destination: "/:path*",
        permanent: true,
      },
      // Localized landing page mappings
      {
        source: "/web-designer-qatar.html",
        destination: "/web-design-development",
        permanent: true,
      },
      {
        source: "/graphic-designer-doha.html",
        destination: "/qatar",
        permanent: true,
      },
      {
        source: "/ui-ux-designer-dubai.html",
        destination: "/ui-ux-design",
        permanent: true,
      },
      {
        source: "/videographer-doha.html",
        destination: "/video-production",
        permanent: true,
      },
      // Sajadh Ahmed Personal Brand redirect
      {
        source: "/sajadh-ahmed",
        destination: "/author/sajadh-ahmed",
        permanent: true,
      }
    ];
  },
  async headers() {
    return [
      {
        source: "/:path*",
        headers: [
          {
            key: "Content-Security-Policy",
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com; font-src 'self' https://fonts.gstatic.com; img-src 'self' data: https://images.unsplash.com https://www.googletagmanager.com; connect-src 'self' https://www.google-analytics.com; frame-src 'self'; object-src 'none'; upgrade-insecure-requests;",
          },
          {
            key: "Strict-Transport-Security",
            value: "max-age=63072000; includeSubDomains; preload",
          },
          {
            key: "X-Frame-Options",
            value: "DENY",
          },
          {
            key: "X-Content-Type-Options",
            value: "nosniff",
          },
          {
            key: "Referrer-Policy",
            value: "strict-origin-when-cross-origin",
          },
        ],
      },
    ];
  },
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
