import { Hero } from "@/components/home/Hero";
import { TrustSection } from "@/components/home/TrustSection";
import { ServicesOverview } from "@/components/home/ServicesOverview";
import { WhyUs } from "@/components/home/WhyUs";
import { FeaturedWork } from "@/components/home/FeaturedWork";
import { Industries } from "@/components/home/Industries";
import { Process } from "@/components/home/Process";
import { Testimonials } from "@/components/home/Testimonials";
import { FAQ } from "@/components/home/FAQ";
import { LeadGeneration } from "@/components/home/LeadGeneration";
import Script from "next/script";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Digipeak Agency | Premium SEO, Web Design & AI Automation",
  description: "Digipeak is a specialist digital growth agency offering bespoke SEO strategies, custom web design, brand transformations, and enterprise AI automation across Qatar, UAE, Saudi Arabia, UK, Singapore, Australia, and New Zealand.",
  alternates: {
    canonical: "https://www.digipeak.agency",
  },
  openGraph: {
    title: "Digipeak Agency | Premium SEO, Web Design & AI Automation",
    description: "Scale your enterprise visibility with bespoke SEO strategies, high-end web design, branding, and AI integrations by Digipeak Agency.",
    url: "https://www.digipeak.agency",
    siteName: "Digipeak Agency",
    locale: "en_US",
    type: "website",
    images: [
      {
        url: "https://www.digipeak.agency/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Digipeak Agency - Premium Digital Growth Agency",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digipeak Agency | Premium SEO, Web Design & AI Automation",
    description: "Scale your enterprise visibility with bespoke SEO strategies, high-end web design, branding, and AI integrations by Digipeak Agency.",
    images: ["https://www.digipeak.agency/og-image.jpg"],
  },
};

export default function Home() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
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
      },
      {
        "@type": "Person",
        "@id": "https://www.digipeak.agency/#founder",
        "name": "Sajadh Ahmed",
        "url": "https://www.digipeak.agency/author/sajadh-ahmed",
        "jobTitle": "Founder & SEO Strategist",
        "worksFor": {
          "@id": "https://www.digipeak.agency/#organization"
        },
        "description": "Founder of Digipeak Agency, Graphic Designer, Digital Marketer, and SEO Strategist.",
        "sameAs": [
          "https://www.linkedin.com/in/sajadh-ahmed-6a62641a9/",
          "https://www.instagram.com/sajadh_ahmed/"
        ]
      },
      {
        "@type": "WebSite",
        "@id": "https://www.digipeak.agency/#website",
        "url": "https://www.digipeak.agency",
        "name": "Digipeak Agency",
        "description": "Premium digital growth agency offering bespoke Web Design, SEO, and AI automation.",
        "publisher": {
          "@id": "https://www.digipeak.agency/#organization"
        }
      },
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/#webpage",
        "url": "https://www.digipeak.agency",
        "name": "Digipeak Agency | Premium SEO, Web Design & AI Automation",
        "isPartOf": {
          "@id": "https://www.digipeak.agency/#website"
        },
        "about": {
          "@id": "https://www.digipeak.agency/#organization"
        },
        "description": "Digipeak is a specialist digital growth agency offering bespoke SEO strategies, custom web design, brand transformations, and enterprise AI automation.",
        "relatedLink": [
          "https://www.digipeak.agency/author/sajadh-ahmed",
          "https://www.digipeak.agency/digiai"
        ]
      },
      {
        "@type": "LocalBusiness",
        "@id": "https://www.digipeak.agency/#localbusiness",
        "name": "Digipeak Agency",
        "image": "https://www.digipeak.agency/og-image.jpg",
        "telephone": "+94773624413",
        "url": "https://www.digipeak.agency",
        "areaServed": [
          { "@type": "City", "name": "Doha" },
          { "@type": "Country", "name": "Qatar" },
          { "@type": "City", "name": "Dubai" },
          { "@type": "Country", "name": "UAE" },
          { "@type": "City", "name": "Riyadh" },
          { "@type": "Country", "name": "Saudi Arabia" },
          { "@type": "Country", "name": "Singapore" },
          { "@type": "City", "name": "Sydney" },
          { "@type": "City", "name": "Auckland" },
          { "@type": "City", "name": "Colombo" },
          { "@type": "Country", "name": "United Kingdom" }
        ]
      },
      {
        "@type": "Service",
        "serviceType": "Digital Marketing & SEO",
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": ["Qatar", "Dubai", "Saudi Arabia", "Singapore", "Sydney", "Auckland", "Colombo", "UK"]
      }
    ]
  };

  return (
    <>
      <Script
        id="schema-jsonld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <Hero />
      <TrustSection />
      <ServicesOverview />
      <WhyUs />
      <FeaturedWork />
      <Industries />
      <Process />
      <Testimonials />
      <FAQ />
      <LeadGeneration />
    </>
  );
}
