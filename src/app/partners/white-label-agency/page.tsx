import type { Metadata } from "next";
import Script from "next/script";
import { WhiteLabelHero } from "@/components/partners/WhiteLabelHero";
import { WhiteLabelIntro } from "@/components/partners/WhiteLabelIntro";
import { WhiteLabelTargetGroups } from "@/components/partners/WhiteLabelTargetGroups";
import { WhiteLabelServices } from "@/components/partners/WhiteLabelServices";
import { WhiteLabelHowItWorks } from "@/components/partners/WhiteLabelHowItWorks";
import { WhiteLabelBenefits } from "@/components/partners/WhiteLabelBenefits";
import { WhiteLabelGuarantee } from "@/components/partners/WhiteLabelGuarantee";
import { WhiteLabelApplicationForm } from "@/components/partners/WhiteLabelApplicationForm";
import { WhiteLabelFAQ } from "@/components/partners/WhiteLabelFAQ";
import { WhiteLabelSEOBlock } from "@/components/partners/WhiteLabelSEOBlock";
import { WhiteLabelCTA } from "@/components/partners/WhiteLabelCTA";

export const metadata: Metadata = {
  title: "White Label Web Design & SEO Partner | Agency Fulfillment Services",
  description:
    "Scale your agency with Digipeak's White Label Partnership Program. Offer web design, SEO, digital marketing, branding, AI solutions, and development services under your agency brand.",
  keywords: [
    "White Label Agency Partner",
    "White Label Web Design",
    "SEO Outsourcing Partner",
    "Agency Fulfillment Services",
    "White Label Digital Marketing",
    "Silent Partner Fulfillment",
    "Agency Growth Partner",
  ],
  alternates: {
    canonical: "https://www.digipeak.agency/partners/white-label-agency",
  },
  openGraph: {
    title: "White Label Agency Fulfillment Partner | Digipeak Agency",
    description:
      "Scale your agency operations silently. We handle Next.js development, Enterprise SEO campaigns, and branding packages under your brand.",
    url: "https://www.digipeak.agency/partners/white-label-agency",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "White Label Agency Fulfillment Partner | Digipeak Agency",
    description:
      "Deliver custom websites, SEO campaigns, and AI solutions silently under your brand with our White Label program.",
  },
};

export default function WhiteLabelAgencyPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/partners/white-label-agency/#webpage",
        url: "https://www.digipeak.agency/partners/white-label-agency",
        name: "White Label Agency Fulfillment Partner | Digipeak Agency",
        isPartOf: { "@id": "https://www.digipeak.agency/#website" },
        description:
          "Outsource client project fulfillment silently. Access Next.js developers, SEO experts, and designers under your brand.",
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
            item: { "@id": "https://www.digipeak.agency/partners/", name: "Partners" },
          },
          {
            "@type": "ListItem",
            position: 3,
            item: {
              "@id": "https://www.digipeak.agency/partners/white-label-agency/",
              name: "White Label Agency Partnership",
            },
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How does client communication work under White Label?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You manage all client communication, updates, and direct messaging under your brand. We serve as your silent fulfillment team.",
            },
          },
          {
            "@type": "Question",
            name: "Do you ever showcase white-label client projects in your portfolio?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Never. All client work completed under a white-label agreement remains strictly confidential and protected under NDAs.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="white-label-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-black text-white relative min-h-screen">
        <WhiteLabelHero />
        <WhiteLabelIntro />
        <WhiteLabelTargetGroups />
        <WhiteLabelServices />
        <WhiteLabelHowItWorks />
        <WhiteLabelBenefits />
        <WhiteLabelGuarantee />
        <WhiteLabelApplicationForm />
        <WhiteLabelFAQ />
        <WhiteLabelSEOBlock />
        <WhiteLabelCTA />
      </main>
    </>
  );
}
