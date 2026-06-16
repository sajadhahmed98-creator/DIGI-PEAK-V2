import type { Metadata } from "next";
import Script from "next/script";
import { PartnerHubHero } from "@/components/partners/PartnerHubHero";
import { PartnerComparison } from "@/components/partners/PartnerComparison";
import { PartnerHubBenefits } from "@/components/partners/PartnerHubBenefits";
import { PartnerHubHowItWorks } from "@/components/partners/PartnerHubHowItWorks";
import { PartnerHubFAQ } from "@/components/partners/PartnerHubFAQ";
import { PartnerHubCTA } from "@/components/partners/PartnerHubCTA";

export const metadata: Metadata = {
  title: "B2B Partner Program | Agency Partnership Opportunities & Web Design Referral",
  description:
    "Join the Digipeak Partner Program. Discover agency partnership opportunities, white label fulfillment services, and SEO reseller packages tailored for consultants, freelancers, and agency owners.",
  keywords: [
    "Partner Program",
    "Agency Partner Program",
    "Referral Partner Program",
    "White Label Agency Partner",
    "SEO Reseller Program",
    "Digital Marketing Reseller",
    "Agency Partnership Opportunities",
    "Web Design Referral Program",
    "B2B Partnership",
    "White Label Web Design",
  ],
  alternates: {
    canonical: "https://www.digipeak.agency/partners",
  },
  openGraph: {
    title: "B2B Partner Network Program | Digipeak Agency",
    description:
      "Partner with Digipeak and offer high-end SEO, web design, e-commerce, branding, and AI solutions under our referral, white label, or reseller tracks.",
    url: "https://www.digipeak.agency/partners",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "B2B Partner Network Program | Digipeak Agency",
    description:
      "Join the Digipeak B2B Partner Network and scale your agency fulfillment, referrals, or reseller models.",
  },
};

export default function PartnerHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/partners/#webpage",
        url: "https://www.digipeak.agency/partners",
        name: "B2B Partner Network Program | Digipeak Agency",
        isPartOf: { "@id": "https://www.digipeak.agency/#website" },
        description:
          "Discover Digipeak B2B partnership programs covering Referral, White Label Fulfillment, and Reseller package sales.",
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
              "@id": "https://www.digipeak.agency/partners/",
              name: "Partners",
            },
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "What is the difference between Referral, Reseller, and White Label tracks?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "The Referral track is for professionals who want to introduce opportunities and earn passive commissions with zero delivery workload. The Reseller track enables consultants and sales groups to sell package services and bill clients directly under custom margins. The White Label track is silent fulfillment outsourcing for agencies: we execute all work behind the scenes under your agency brand.",
            },
          },
          {
            "@type": "Question",
            name: "Do you sign NDAs to protect my agency's clients?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. For both White Label and Reseller partnerships, we execute strict B2B Non-Disclosure Agreements (NDAs) prior to onboarding or project scoping. We serve as your silent delivery team and guarantee that we will never contact your clients directly or solicit their business.",
            },
          },
          {
            "@type": "Question",
            name: "What regions or target markets do you serve borderlessly?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "We support clients globally with specialized execution experience in the Middle East GCC region (Qatar, UAE, Saudi Arabia) and international English-speaking markets (UK, Australia, Singapore). Our technical delivery and campaign teams are fully bilingual in English and Arabic.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="partner-hub-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-black text-white relative min-h-screen">
        <PartnerHubHero />
        <PartnerComparison />
        <PartnerHubBenefits />
        <PartnerHubHowItWorks />
        <PartnerHubFAQ />
        <PartnerHubCTA />
      </main>
    </>
  );
}
