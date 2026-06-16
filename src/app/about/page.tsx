import type { Metadata } from "next";
import Script from "next/script";
import { AboutHero } from "@/components/about/AboutHero";
import { OurStory } from "@/components/about/OurStory";
import { MissionVision } from "@/components/about/MissionVision";
import { WhatWeDo } from "@/components/about/WhatWeDo";
import { WhyChooseDigipeak } from "@/components/about/WhyChooseDigipeak";
import { GlobalPresence } from "@/components/about/GlobalPresence";
import { FounderSection } from "@/components/about/FounderSection";
import { ValuesSection } from "@/components/about/ValuesSection";
import { HowWeWork } from "@/components/about/HowWeWork";
import { AboutFAQ } from "@/components/about/AboutFAQ";
import { AboutCTA } from "@/components/about/AboutCTA";

export const metadata: Metadata = {
  title: "About",
  description:
    "Learn about Digipeak Agency, a Sri Lanka-based digital growth partner helping businesses across Qatar, UAE, Saudi Arabia, Singapore, Australia, New Zealand, the UK and beyond through marketing, branding, web development, AI solutions and technology.",
  keywords: [
    "Digital Agency Qatar",
    "Digital Marketing Agency Qatar",
    "SEO Agency Qatar",
    "Web Design Company Qatar",
    "Branding Agency Qatar",
    "AI Agency Qatar",
    "Digital Agency Dubai",
    "Marketing Agency Dubai",
    "SEO Company UAE",
    "Digital Agency Saudi Arabia",
    "Marketing Agency Riyadh",
    "Creative Agency Sri Lanka",
    "Digital Agency Singapore",
    "Digital Agency Sydney",
    "Digital Agency Auckland",
    "Digital Agency United Kingdom",
    "Global Digital Growth Partner",
    "International Digital Agency",
    "Digipeak Agency",
    "Sajadh Ahmed",
    "Sajadh Ahmed Digital Marketing",
    "Sajadh Ahmed Entrepreneur",
    "Sajadh Ahmed Founder Digipeak",
    "Sajadh Ahmed Sri Lanka",
  ],
  alternates: {
    canonical: "https://www.digipeak.agency/about",
  },
  openGraph: {
    title: "About Digipeak Agency | Digital Growth, Marketing, Design & Technology",
    description:
      "Digipeak Agency — a Sri Lanka-based digital growth partner serving businesses across the Middle East, Southeast Asia, Oceania, and the United Kingdom.",
    url: "https://www.digipeak.agency/about",
    images: ["/og-about.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "About Digipeak Agency | Digital Growth, Marketing, Design & Technology",
    description:
      "Digipeak Agency — a Sri Lanka-based digital growth partner serving businesses across the Middle East, Southeast Asia, Oceania, and globally.",
  },
};

export default function AboutPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Organization schema
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
      // Person schema — Founder
      {
        "@type": "Person",
        "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
        name: "Sajadh Ahmed",
        jobTitle: "Founder",
        worksFor: {
          "@id": "https://www.digipeak.agency/#organization",
        },
        url: "https://www.digipeak.agency/author/sajadh-ahmed",
        description:
          "Sajadh Ahmed is the founder of Digipeak Agency. He focuses on helping businesses grow through digital marketing, web development, branding, automation, AI solutions and technology-driven strategies.",
        knowsAbout: [
          "Digital Marketing",
          "Web Development",
          "Brand Strategy",
          "AI Solutions",
          "Business Growth",
          "SEO",
          "E-Commerce",
          "CRM Automation",
        ],
      },
      // WebPage schema
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/about/#webpage",
        url: "https://www.digipeak.agency/about",
        name: "About Digipeak Agency | Digital Growth, Marketing, Design & Technology",
        isPartOf: { "@id": "https://www.digipeak.agency/#website" },
        about: { "@id": "https://www.digipeak.agency/#organization" },
        description:
          "Learn about Digipeak Agency, a Sri Lanka-based digital growth partner helping businesses across the Middle East, APAC, and globally.",
      },
      // Breadcrumb schema
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
            item: { "@id": "https://www.digipeak.agency/about/", name: "About" },
          },
        ],
      },
      // FAQ schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Digipeak?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Digipeak Agency is a full-service digital growth partner founded in 2022 and headquartered in Sri Lanka. We help businesses grow through web design, SEO, digital marketing, branding, AI solutions, CRM automation, video production, and more — serving clients locally and internationally.",
            },
          },
          {
            "@type": "Question",
            name: "Where is Digipeak located?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Digipeak Agency is headquartered in Sri Lanka. We serve clients across Qatar, UAE, Saudi Arabia, Singapore, Australia, New Zealand, the United Kingdom, and other international markets.",
            },
          },
          {
            "@type": "Question",
            name: "When was Digipeak founded?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Digipeak Agency was founded in 2022 in Sri Lanka.",
            },
          },
          {
            "@type": "Question",
            name: "What services does Digipeak offer?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Digipeak offers SEO, web design, e-commerce development, digital marketing, social media management, branding, AI solutions, UI/UX design, mobile app development, CRM automation, content marketing, video production, email marketing, reputation management, and hosting & maintenance.",
            },
          },
          {
            "@type": "Question",
            name: "Who is Sajadh Ahmed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sajadh Ahmed is the founder of Digipeak Agency. He focuses on helping businesses grow through digital marketing, web development, branding, automation, AI solutions and technology-driven strategies.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work internationally?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. While headquartered in Sri Lanka, Digipeak actively serves businesses across Qatar, UAE, Saudi Arabia, Singapore, Australia, New Zealand, the United Kingdom, and other global markets.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="about-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <AboutHero />
      <OurStory />
      <MissionVision />
      <WhatWeDo />
      <WhyChooseDigipeak />
      <GlobalPresence />
      <FounderSection />
      <ValuesSection />
      <HowWeWork />
      <AboutFAQ />
      <div className="border-t border-white/5">
        <AboutCTA />
      </div>
    </>
  );
}
