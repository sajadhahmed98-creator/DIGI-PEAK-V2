import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
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
      },
      // SEO Guides redirect to prevent legacy 404
      {
        source: "/resources/seo-guides",
        destination: "/resources/gcc-local-seo-checklist",
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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms https://assets.calendly.com; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com https://assets.calendly.com; font-src 'self' https://fonts.gstatic.com https://cdn.fontshare.com; img-src 'self' data: blob: https://images.unsplash.com https://www.googletagmanager.com https://*.clarity.ms https://*.calendly.com; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.clarity.ms https://api.calendly.com https://www.googleapis.com https://pagespeedonline.googleapis.com; frame-src 'self' https://calendly.com https://*.calendly.com; object-src 'none'; upgrade-insecure-requests;",
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
    formats: ["image/avif", "image/webp"],
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'images.unsplash.com',
      },
    ],
  },
};

export default nextConfig;
