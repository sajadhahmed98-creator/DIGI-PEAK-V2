import type { Metadata } from "next";
import Script from "next/script";
import { PortfolioPlaceholder } from "@/components/portfolio/PortfolioPlaceholder";

export const metadata: Metadata = {
  title: "Portfolio | Client Projects & Success Stories | Digipeak Agency",
  description:
    "Explore upcoming client success stories and project showcases from Digipeak Agency — a premium digital agency serving Qatar, Dubai, Saudi Arabia, and globally.",
  keywords: [
    "Digital Agency Portfolio Qatar",
    "Web Design Portfolio Qatar",
    "SEO Case Studies Qatar",
    "Digital Marketing Portfolio Dubai",
    "Agency Work Portfolio",
    "Client Success Stories",
    "Web Development Portfolio",
    "Branding Portfolio Qatar",
  ],
  alternates: {
    canonical: "https://www.digipeak.agency/portfolio",
  },
  openGraph: {
    title: "Portfolio | Digipeak Agency",
    description:
      "Client projects and success stories from Digipeak — Qatar's premium digital growth agency.",
    url: "https://www.digipeak.agency/portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio | Digipeak Agency",
    description:
      "Client projects and success stories from Digipeak — Qatar's premium digital growth agency.",
  },
};

export default function PortfolioPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/portfolio/#webpage",
        url: "https://www.digipeak.agency/portfolio",
        name: "Portfolio | Digipeak Agency",
        isPartOf: { "@id": "https://www.digipeak.agency/#website" },
        description:
          "Upcoming client project portfolio and success case studies from Digipeak Agency.",
      },
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: { "@id": "https://www.digipeak.agency/", name: "Home" },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.digipeak.agency/portfolio/",
              name: "Portfolio",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="portfolio-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PortfolioPlaceholder />
    </>
  );
}
