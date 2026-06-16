import type { Metadata } from "next";
import Script from "next/script";
import { ReferralHero } from "@/components/partners/ReferralHero";
import { WhyBecomePartner } from "@/components/partners/WhyBecomePartner";
import { WhoThisIsFor } from "@/components/partners/WhoThisIsFor";
import { HowItWorks } from "@/components/partners/HowItWorks";
import { ServicesToRefer } from "@/components/partners/ServicesToRefer";
import { PartnerEarnings } from "@/components/partners/PartnerEarnings";
import { WhyPartnerWithDigipeak } from "@/components/partners/WhyPartnerWithDigipeak";
import { PartnerApplicationForm } from "@/components/partners/PartnerApplicationForm";
import { PartnerFAQ } from "@/components/partners/PartnerFAQ";
import { PartnerCTA } from "@/components/partners/PartnerCTA";

export const metadata: Metadata = {
  title: "Referral Partner Program | Earn Commission Referring Web Design, SEO & Digital Marketing Clients",
  description:
    "Join the Digipeak Referral Partner Program and earn commissions by referring businesses that need web design, SEO, digital marketing, branding, AI solutions, and e-commerce development services.",
  keywords: [
    "Referral Partner Program",
    "Agency Referral Program",
    "Website Design Referral Program",
    "SEO Referral Program",
    "Digital Marketing Referral Program",
    "Referral Commission Program",
    "Partner Program For Agencies",
    "Web Design Partner Program",
    "Digital Marketing Partner Program",
    "Business Referral Program",
  ],
  alternates: {
    canonical: "https://www.digipeak.agency/partners/referral-partner",
  },
  openGraph: {
    title: "Referral Partner Program | Digipeak Agency",
    description:
      "Join the Digipeak Referral Partner Program and earn commissions by referring businesses that need web design, SEO, digital marketing, and AI growth solutions.",
    url: "https://www.digipeak.agency/partners/referral-partner",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Referral Partner Program | Digipeak Agency",
    description:
      "Join the Digipeak Referral Partner Program and earn commissions by referring businesses.",
  },
};

export default function ReferralPartnerPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/partners/referral-partner/#webpage",
        url: "https://www.digipeak.agency/partners/referral-partner",
        name: "Referral Partner Program | Digipeak Agency",
        isPartOf: { "@id": "https://www.digipeak.agency/#website" },
        description:
          "Join the Digipeak Referral Partner Program and earn commissions by referring businesses that need digital growth solutions.",
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
              "@id": "https://www.digipeak.agency/partners/referral-partner/",
              name: "Referral Partner Program",
            },
          },
        ],
      },
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who can join the referral program?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Anyone with a professional network interested in referring businesses. Freelancers, agency owners, consultants, and entrepreneurs are all welcome.",
            },
          },
          {
            "@type": "Question",
            name: "Do I need technical knowledge?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Digipeak handles all technical, strategy, and project work. You only make the initial introduction.",
            },
          },
          {
            "@type": "Question",
            name: "When do I receive my commission?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "After successful project completion and client invoice payment confirmation.",
            },
          },
          {
            "@type": "Question",
            name: "Can I refer international clients?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We accept referrals globally from any country or industry.",
            },
          },
          {
            "@type": "Question",
            name: "Is there any joining fee?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "No. Joining the referral partner program is completely free with zero hidden costs.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="referral-partner-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-black text-white relative min-h-screen">
        <ReferralHero />
        <WhyBecomePartner />
        <WhoThisIsFor />
        <HowItWorks />
        <ServicesToRefer />
        <PartnerEarnings />
        <WhyPartnerWithDigipeak />
        <PartnerApplicationForm />
        <PartnerFAQ />
        <PartnerCTA />
      </main>
    </>
  );
}
