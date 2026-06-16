import type { Metadata } from "next";
import Script from "next/script";
import { ResellerHero } from "@/components/partners/ResellerHero";
import { ResellerWhoThisIsFor } from "@/components/partners/ResellerWhoThisIsFor";
import { ResellerHowItWorks } from "@/components/partners/ResellerHowItWorks";
import { ResellerServices } from "@/components/partners/ResellerServices";
import { ResellerWhyChoose } from "@/components/partners/ResellerWhyChoose";
import { ResellerCalculator } from "@/components/partners/ResellerCalculator";
import { ResellerProfitOpportunity } from "@/components/partners/ResellerProfitOpportunity";
import { ResellerWhyDigipeak } from "@/components/partners/ResellerWhyDigipeak";
import { ResellerApplicationForm } from "@/components/partners/ResellerApplicationForm";
import { ResellerFAQ } from "@/components/partners/ResellerFAQ";
import { ResellerSEOBlock } from "@/components/partners/ResellerSEOBlock";
import { ResellerCTA } from "@/components/partners/ResellerCTA";

export const metadata: Metadata = {
  title: "SEO Reseller Program | Web Design & Digital Marketing Reseller Partnership",
  description:
    "Join the Digipeak Reseller Program and sell web design, SEO, digital marketing, branding, AI solutions, and business growth services under a profitable reseller model.",
  keywords: [
    "Digital Marketing Reseller",
    "SEO Reseller Program",
    "Web Design Reseller",
    "Agency Reseller Program",
    "Website Reseller Partnership",
    "Digital Agency Reseller",
    "Marketing Services Reseller",
    "SEO Outsourcing Partner",
    "Website Development Reseller",
    "White Label Reseller Program",
  ],
  alternates: {
    canonical: "https://www.digipeak.agency/partners/reseller-program",
  },
  openGraph: {
    title: "SEO Reseller Program | Digipeak Agency",
    description:
      "Join the Digipeak Reseller Program and sell web design, SEO, digital marketing, and AI solutions under a profitable margins structure.",
    url: "https://www.digipeak.agency/partners/reseller-program",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "SEO Reseller Program | Digipeak Agency",
    description:
      "Join the Digipeak Reseller Program and resell premium websites, SEO, and marketing packages.",
  },
};

export default function ResellerProgramPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/partners/reseller-program/#webpage",
        url: "https://www.digipeak.agency/partners/reseller-program",
        name: "SEO Reseller Program | Digipeak Agency",
        isPartOf: { "@id": "https://www.digipeak.agency/#website" },
        description:
          "Resell premium B2B websites, search engine marketing, and business automation solutions under your own pricing.",
      },
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
              "@id": "https://www.digipeak.agency/partners/reseller-program/",
              name: "Reseller Program",
            },
          },
        ],
      },
      {
        "@type": "Service",
        "@id": "https://www.digipeak.agency/partners/reseller-program/#service",
        serviceType: "Digital Agency Reseller Program",
        provider: { "@id": "https://www.digipeak.agency/#organization" },
        description:
          "Enables independent sales professionals, consultants, and marketing consultants to sell web design, SEO, branding, automation and AI projects.",
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who can join the reseller program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Anyone capable of generating business opportunities for digital services. Freelancers, consultants, and sales teams are all welcome.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need technical knowledge?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Digipeak handles delivery and execution. You focus entirely on lead generation and sales.",
            },
          },
          {
            "@type": "Question",
            name: "Can I set my own pricing?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. You control your pricing strategy and profit margins. We charge you reseller rates and you choose your client-facing billing.",
            },
          },
          {
            "@type": "Question",
            name: "Is there a joining fee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. The reseller program is completely free to join.",
            },
          },
          {
            "@type": "Question",
            name: "Can I sell internationally?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. International opportunities are welcome and coordinated remotely.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide partner support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We support active resellers with technical scoping guidelines and estimations support to help close opportunities.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="reseller-program-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-black text-white relative min-h-screen">
        <ResellerHero />
        <ResellerWhoThisIsFor />
        <ResellerHowItWorks />
        <ResellerServices />
        <ResellerWhyChoose />
        <ResellerCalculator />
        <ResellerProfitOpportunity />
        <ResellerWhyDigipeak />
        <ResellerApplicationForm />
        <ResellerFAQ />
        <ResellerSEOBlock />
        <ResellerCTA />
      </main>
    </>
  );
}
