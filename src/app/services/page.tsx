import type { Metadata } from "next";
import Script from "next/script";
import { ServicesHero } from "@/components/services/ServicesHero";
import { DetailedServicesGrid } from "@/components/services/DetailedServicesGrid";
import { PerformanceDashboard } from "@/components/services/PerformanceDashboard";
import { ServiceProcess } from "@/components/services/ServiceProcess";
import { TechStack } from "@/components/services/TechStack";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { ServiceFAQ } from "@/components/services/ServiceFAQ";
import { Testimonials } from "@/components/home/Testimonials";
import { LeadGeneration } from "@/components/home/LeadGeneration";

export const metadata: Metadata = {
  title: "Digital Marketing, SEO & Web Design Services For Ambitious Brands",
  description: "Results-focused Digital Marketing Agency offering enterprise SEO, custom Web Design, Branding, and AI Solutions in Qatar, Dubai, Singapore, and globally.",
  keywords: ["Digital Marketing Services Qatar", "SEO Services Qatar", "Web Design Services Qatar", "Digital Marketing Agency Dubai", "SEO Agency Dubai", "Web Design Company Dubai", "SEO Services Riyadh", "Digital Marketing Singapore", "SEO Agency Sydney", "Web Design Auckland", "Branding Agency UK", "AI Marketing Agency"],
  alternates: {
    canonical: '/services',
  },
  openGraph: {
    title: "Premium Digital Marketing & SEO Services | Digipeak",
    description: "Enterprise SEO, custom Web Design, Branding, and AI Solutions.",
    url: "https://www.digipeak.agency/services",
    images: ["/og-services.jpg"],
  },
};

export default function ServicesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/services/#webpage",
        "url": "https://www.digipeak.agency/services",
        "name": "Digital Marketing, SEO & Web Design Services",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/services/", "name": "Services" } }
        ]
      },
      ...[
        "Enterprise SEO Services", "Custom Web Design & Development", "E-Commerce Development", "Digital Marketing",
        "Social Media Marketing", "Branding & Creative", "AI Solutions", "UI / UX Design", "Mobile App Development",
        "CRM & Automation", "Content Marketing", "Video Production", "Email Marketing", "Reputation Management", "Hosting & Maintenance"
      ].map(serviceType => ({
        "@type": "Service",
        "serviceType": serviceType,
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": ["Qatar", "Dubai", "UAE", "Riyadh", "Saudi Arabia", "Singapore", "Sydney", "Auckland", "Colombo", "Sri Lanka", "United Kingdom"]
      })),
      {
        "@type": "FAQPage",
        "mainEntity": [
          {
            "@type": "Question",
            "name": "How long does it take to see results from SEO services in Dubai or Qatar?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "SEO is a long-term growth strategy. While technical SEO improvements can yield ranking bumps within weeks, generating high-intent commercial traffic typically takes 3 to 6 months depending on keyword competitiveness and current domain authority."
            }
          },
          {
            "@type": "Question",
            "name": "Do you build custom websites or use templates?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "We strictly build custom, enterprise-grade architectures. We utilize headless frameworks, Next.js, and advanced WordPress VIP solutions to ensure your brand stands out and loads in milliseconds."
            }
          }
        ]
      }
    ]
  };

  return (
    <>
      <Script
        id="services-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ServicesHero />
      <DetailedServicesGrid />
      <PerformanceDashboard />
      <ServiceProcess />
      <TechStack />
      <FeaturedWork />
      <ServiceFAQ />
      <Testimonials />
      <LeadGeneration />
    </>
  );
}
