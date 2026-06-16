import type { Metadata } from "next";
import Script from "next/script";
import { PersonalHero } from "@/components/personal-brand/PersonalHero";
import { PersonalIntro } from "@/components/personal-brand/PersonalIntro";
import { ExperienceEducation } from "@/components/personal-brand/ExperienceEducation";
import { CreativeServices } from "@/components/personal-brand/CreativeServices";
import { DigitalPresence } from "@/components/personal-brand/DigitalPresence";
import { FeaturedWork } from "@/components/personal-brand/FeaturedWork";
import { LatestArticles } from "@/components/personal-brand/LatestArticles";
import { ServiceAreas } from "@/components/personal-brand/ServiceAreas";
import { PersonalFAQ } from "@/components/personal-brand/PersonalFAQ";
import { PersonalContact } from "@/components/personal-brand/PersonalContact";


export const metadata: Metadata = {
  title: "Sajadh Ahmed | Founder, Digipeak | Graphic Designer & Digital Marketer",
  description:
    "Sajadh Ahmed is the Founder of Digipeak. With 6+ years of experience, he provides premium graphic design, branding, logo design, website design, photography, videography, and digital marketing across Qatar (Doha), UAE (Dubai), and globally.",
  keywords: [
    "Graphic Designer Qatar",
    "Graphic Designer Doha",
    "Freelance Graphic Designer Qatar",
    "Logo Designer Qatar",
    "Logo Designer Doha",
    "Brand Designer Qatar",
    "Brand Designer Doha",
    "Social Media Designer Qatar",
    "Social Media Designer Doha",
    "Website Designer Qatar",
    "Website Designer Doha",
    "Digital Marketer Qatar",
    "Photographer Qatar",
    "Photographer Doha",
    "Videographer Qatar",
    "Videographer Doha",
    "Personal Branding Qatar",
  ],
  alternates: {
    canonical: "https://www.digipeak.agency/author/sajadh-ahmed",
  },
  openGraph: {
    title: "Sajadh Ahmed | Founder, Digipeak | Graphic Designer & Digital Marketer",
    description:
      "Authentic personal brand authority profile for Sajadh Ahmed, showcasing 6+ years of expertise in graphic design, branding, website design, photography, and digital marketing.",
    url: "https://www.digipeak.agency/author/sajadh-ahmed",
    images: ["/sajadh-photo.jpg"],
    type: "profile",
    firstName: "Sajadh",
    lastName: "Ahmed",
    gender: "male",
    username: "sajadh98",
  },
  twitter: {
    card: "summary_large_image",
    title: "Sajadh Ahmed | Founder, Digipeak | Graphic Designer & Digital Marketer",
    description:
      "6+ years of creative expertise in graphic design, brand identity systems, logo design, photography, and digital marketing.",
    images: ["/sajadh-photo.jpg"],
  },
};

export default function SajadhAhmedAuthorPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // Person Schema (Full E-E-A-T Compliance)
      {
        "@type": "Person",
        "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
        name: "Sajadh Ahmed",
        jobTitle: "Founder, Digipeak | Graphic Designer & Digital Marketer",
        url: "https://www.digipeak.agency/author/sajadh-ahmed",
        image: "https://www.digipeak.agency/sajadh-photo.jpg",
        description:
          "Sajadh Ahmed is the Founder of Digipeak. He has over 6 years of experience specializing in graphic design, branding, logo design, website design, digital marketing, photography, videography, and personal branding.",
        sameAs: [
          "https://www.linkedin.com/in/sajadh-ahmed-6a62641a9/",
          "https://www.instagram.com/aham3dsm",
          "https://www.threads.com/@sajadhahm?igshid=NTc4MTIwNjQ2YQ==",
          "https://x.com/sajadhahmed?s=11&t=esyvwkDm1CU4N2JMX_w0dw",
          "https://www.facebook.com/share/1HRThmiG7S/?mibextid=wwXIfr",
          "https://pin.it/42522pkhe",
          "https://www.behance.net/sajathahm",
          "https://dribbble.com/sajadh98",
          "https://www.fiverr.com/sellers/sajadh",
          "https://www.freelancer.com/u/Sajadh98",
          "https://github.com/sajadhahmed98-creator",
          "https://medium.com/@sajathahmed/about",
          "https://sajadhahmed.com",
          "https://sajathahmed.link/",
        ],
        knowsAbout: [
          "Graphic Design",
          "Brand Identity Design",
          "Logo Design",
          "Social Media Design",
          "Website Design",
          "Digital Marketing",
          "Search Engine Optimization (SEO)",
          "Google Ads",
          "Photography",
          "Videography",
          "Personal Branding",
        ],
        address: {
          "@type": "PostalAddress",
          addressLocality: "Colombo",
          addressCountry: "Sri Lanka",
        },
      },
      // Founder Relationship Link
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
      // BreadcrumbList Schema
      {
        "@type": "BreadcrumbList",
        itemListElement: [
          {
            "@type": "ListItem",
            position: 1,
            item: {
              "@id": "https://www.digipeak.agency/",
              name: "Home",
            },
          },
          {
            "@type": "ListItem",
            position: 2,
            item: {
              "@id": "https://www.digipeak.agency/author/sajadh-ahmed",
              name: "Sajadh Ahmed",
            },
          },
        ],
      },
      // FAQ Schema (PAA-Optimized & Authentic)
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "Who is Sajadh Ahmed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sajadh Ahmed is the Founder of Digipeak. He has over 6 years of experience working as a graphic designer, logo designer, website designer, digital marketer, photographer, videographer, and personal branding strategist.",
            },
          },
          {
            "@type": "Question",
            name: "What creative and digital services does Sajadh Ahmed provide?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Sajadh provides comprehensive creative solutions including brand identity design, logo design, social media design, website design, search engine optimization (SEO), Google Ads, corporate/portrait photography, video editing, and personal brand strategy.",
            },
          },
          {
            "@type": "Question",
            name: "Where are Sajadh Ahmed's creative services available?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "While Sajadh is based in Colombo, Sri Lanka, he collaborates directly with businesses and creators globally. His key target service areas include Qatar (Doha, Lusail, West Bay, Al Wakrah, Al Rayyan), the UAE (Dubai, Abu Dhabi), and New Zealand (Auckland).",
            },
          },
          {
            "@type": "Question",
            name: "How can I collaborate with Sajadh Ahmed?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "You can easily connect with Sajadh by visiting his LinkedIn, viewing his Behance portfolio, or contacting him directly via the contact form on his profile page.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="sajadh-ahmed-author-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <PersonalHero />
      <PersonalIntro />
      <ExperienceEducation />
      <CreativeServices />
      <DigitalPresence />
      <FeaturedWork />
      <LatestArticles />
      <ServiceAreas />
      <PersonalFAQ />
      <PersonalContact />
    </>
  );
}
