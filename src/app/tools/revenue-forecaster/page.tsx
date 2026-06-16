import type { Metadata } from "next";
import { RevenueForecasterClient } from "@/components/tools/RevenueForecasterClient";
import Script from "next/script";

export const metadata: Metadata = {
  title: "B2B Revenue Growth & Marketing ROI Calculator | Digipeak",
  description: "Calculate your B2B sales pipeline growth, monthly leads scaling, and digital marketing return on investment (ROI) over 12 months.",
  alternates: {
    canonical: "https://www.digipeak.agency/tools/revenue-forecaster",
  },
  openGraph: {
    title: "B2B B2B Revenue Growth & ROI Calculator | Digipeak Agency",
    description: "Model traffic scaling, conversion optimization, and annual ROI projections dynamically with our B2B Revenue Forecaster.",
    url: "https://www.digipeak.agency/tools/revenue-forecaster",
    images: [{ url: "/og-image.jpg" }],
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Revenue Growth & ROI Calculator | Digipeak",
    description: "Model traffic scaling, conversion optimization, and annual ROI projections dynamically with our B2B Revenue Forecaster.",
    images: ["/og-image.jpg"],
  }
};

export default function RevenueForecasterPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebApplication",
        "@id": "https://www.digipeak.agency/tools/revenue-forecaster/#application",
        "name": "B2B Revenue Growth & ROI Calculator",
        "url": "https://www.digipeak.agency/tools/revenue-forecaster",
        "applicationCategory": "BusinessApplication",
        "operatingSystem": "All",
        "browserRequirements": "Requires HTML5 & JavaScript",
        "offers": {
          "@type": "Offer",
          "price": "0.00",
          "priceCurrency": "USD"
        },
        "publisher": {
        "@type": "Organization",
        "@id": "https://www.digipeak.agency/#organization",
        "name": "Digipeak Agency",
        "url": "https://www.digipeak.agency",
        "email": "hello@digipeak.agency",
        "logo": {
          "@type": "ImageObject",
          "@id": "https://www.digipeak.agency/#logo",
          "url": "https://www.digipeak.agency/logo.png",
          "caption": "Digipeak Agency Logo"
        },
        "description": "Premium Digital Growth Agency specializing in Website Design, SEO, Branding, AI Automation, CRM Systems, Digital Marketing, and Lead Generation.",
        "foundingDate": "2022-01-01",
        "founder": {
          "@type": "Person",
          "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
          "name": "Sajadh Ahmed",
          "jobTitle": "Founder",
          "url": "https://www.digipeak.agency/author/sajadh-ahmed"
        },
        "sameAs": [
          "https://www.linkedin.com/company/digipeakagencyglobal",
          "https://www.instagram.com/digipeak.agency",
          "https://www.facebook.com/share/1BC3Xs8zW3/?mibextid=wwXIfr",
          "https://maps.app.goo.gl/9Gp2fifi3A15suaA6"
        ]
      }
      }
    ]
  };

  return (
    <>
      <Script
        id="revenue-forecaster-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <RevenueForecasterClient />
    </>
  );
}
