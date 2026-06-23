import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  compress: true,
  serverExternalPackages: ["pdfkit"],
  experimental: {
    optimizePackageImports: ["framer-motion", "lucide-react"],
  },
  async redirects() {
    return [
      // Legacy UAE/Dubai redirects to locations hub
      {
        source: "/uae",
        destination: "/locations/uae",
        permanent: true,
      },
      {
        source: "/dubai",
        destination: "/locations/uae/dubai",
        permanent: true,
      },
      // Legacy Qatar/Saudi/Doha redirects to locations hub
      {
        source: "/saudi-arabia",
        destination: "/locations/saudi-arabia",
        permanent: true,
      },
      {
        source: "/qatar",
        destination: "/locations/qatar",
        permanent: true,
      },
      {
        source: "/doha",
        destination: "/locations/qatar/doha",
        permanent: true,
      },
      // Legacy Australia redirects to nested location architecture
      {
        source: "/locations/sydney",
        destination: "/locations/australia/sydney",
        permanent: true,
      },
      {
        source: "/locations/melbourne",
        destination: "/locations/australia/melbourne",
        permanent: true,
      },
      {
        source: "/locations/brisbane",
        destination: "/locations/australia/brisbane",
        permanent: true,
      },
      {
        source: "/locations/perth",
        destination: "/locations/australia/perth",
        permanent: true,
      },
      {
        source: "/locations/adelaide",
        destination: "/locations/australia/adelaide",
        permanent: true,
      },
      {
        source: "/locations/gold-coast",
        destination: "/locations/australia/gold-coast",
        permanent: true,
      },
      {
        source: "/locations/canberra",
        destination: "/locations/australia/canberra",
        permanent: true,
      },
      // Australia custom service links redirect mappings
      {
        source: "/local-seo-services",
        destination: "/seo-services",
        permanent: true,
      },
      {
        source: "/ppc-management",
        destination: "/digital-marketing",
        permanent: true,
      },
      {
        source: "/web-design",
        destination: "/web-design-development",
        permanent: true,
      },
      {
        source: "/web-development",
        destination: "/web-design-development",
        permanent: true,
      },
      {
        source: "/ai-automation",
        destination: "/ai-solutions",
        permanent: true,
      },
      {
        source: "/ai-chatbot-development",
        destination: "/ai-solutions",
        permanent: true,
      },
      {
        source: "/social-media-marketing",
        destination: "/social-media-management",
        permanent: true,
      },
      {
        source: "/google-ads-management",
        destination: "/digital-marketing",
        permanent: true,
      },
      {
        source: "/shopify-development",
        destination: "/ecommerce-development",
        permanent: true,
      },
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
            value: "default-src 'self'; script-src 'self' 'unsafe-inline' 'unsafe-eval' https://www.googletagmanager.com https://www.clarity.ms; style-src 'self' 'unsafe-inline' https://fonts.googleapis.com https://api.fontshare.com; font-src 'self' https://fonts.gstatic.com https://cdn.fontshare.com; img-src 'self' data: blob: https://images.unsplash.com https://www.googletagmanager.com https://*.clarity.ms; connect-src 'self' https://www.google-analytics.com https://*.google-analytics.com https://*.analytics.google.com https://*.clarity.ms https://www.googleapis.com https://pagespeedonline.googleapis.com; frame-src 'self'; object-src 'none'; upgrade-insecure-requests;",
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
