import type { Metadata } from "next";
import Script from "next/script";
import { ContactHero } from "@/components/contact/ContactHero";
import { ContactTrust } from "@/components/contact/ContactTrust";
import { MultiStepContactForm } from "@/components/contact/MultiStepContactForm";
import { DirectContact } from "@/components/contact/DirectContact";
import { GlobalClients } from "@/components/contact/GlobalClients";
import { WhyClientsContact } from "@/components/contact/WhyClientsContact";
import { ContactFAQ } from "@/components/contact/ContactFAQ";
import { ContactCTA } from "@/components/contact/ContactCTA";

export const metadata: Metadata = {
  title: "Contact Digipeak Agency | Digital Marketing, Web Design & Growth Solutions",
  description:
    "Get in touch with Digipeak Agency for SEO, web design, branding, digital marketing, AI solutions, content marketing, CRM automation, mobile app development and business growth services.",
  keywords: [
    "Contact Digital Agency Qatar",
    "Digital Marketing Agency Qatar",
    "SEO Agency Qatar",
    "Web Design Company Qatar",
    "Branding Agency Qatar",
    "AI Agency Qatar",
    "Contact SEO Company Qatar",
    "Hire Digital Marketing Agency Qatar",
    "Contact Web Design Agency Qatar",
    "Digital Marketing Consultation Qatar",
    "Marketing Agency Dubai",
    "SEO Agency Dubai",
    "Digital Marketing Agency UAE",
    "Branding Agency Saudi Arabia",
    "Marketing Agency Riyadh",
    "Creative Agency Sri Lanka",
    "Digital Agency Singapore",
    "Digital Agency Sydney",
    "Digital Agency Auckland",
    "Digital Agency UK",
    "Global Digital Growth Agency",
  ],
  alternates: {
    canonical: "https://www.digipeak.agency/contact",
  },
  openGraph: {
    title: "Contact Digipeak Agency | Digital Marketing, Web Design & Growth Solutions",
    description:
      "Get in touch with Digipeak Agency for SEO, web design, branding, digital marketing, AI solutions, content marketing, CRM automation, mobile app development and business growth services.",
    url: "https://www.digipeak.agency/contact",
    images: ["/og-contact.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact Digipeak Agency | Digital Marketing, Web Design & Growth Solutions",
    description:
      "Get in touch with Digipeak Agency for SEO, web design, branding, digital marketing, AI solutions, content marketing, CRM automation, mobile app development and business growth services.",
    images: ["/og-contact.jpg"],
  },
};

export default function ContactPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      // ContactPage Schema
      {
        "@type": "ContactPage",
        "@id": "https://www.digipeak.agency/contact/#webpage",
        url: "https://www.digipeak.agency/contact",
        name: "Contact Digipeak Agency | Digital Marketing, Web Design & Growth Solutions",
        description:
          "Contact page for Digipeak Agency. Request a proposal, book a consultation, or connect directly to get started with SEO, web design, branding, digital marketing, and business automation.",
        isPartOf: {
          "@id": "https://www.digipeak.agency/#website",
        },
      },
      // Organization Schema
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
              "@id": "https://www.digipeak.agency/contact/",
              name: "Contact",
            },
          },
        ],
      },
      // FAQPage Schema
      {
        "@type": "FAQPage",
        mainEntity: [
          {
            "@type": "Question",
            name: "How do I start a project?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "To initiate a project, simply fill out our multi-step contact form on this page, specifying your business goals, required services, project timeline, and budget estimation. Alternatively, you can email your project brief directly to hello@digipeak.agency.",
            },
          },
          {
            "@type": "Question",
            name: "How long does a project take?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Project timelines vary depending on complexity and scope. Typical web design and development projects range from 4 to 8 weeks, brand identity design systems take 3 to 5 weeks, while marketing campaigns, SEO, and ongoing maintenance operate as retainer-based engagements.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work internationally?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, Digipeak is a global growth partner. While headquartered in Sri Lanka, we actively support corporate and SME clients across Qatar, the United Arab Emirates, Saudi Arabia, Singapore, Australia, New Zealand, the United Kingdom, and other international markets.",
            },
          },
          {
            "@type": "Question",
            name: "Can we schedule a consultation?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Absolutely. When you submit an inquiry, we review your project scope and follow up with a scheduler link. This allows you to book a free 30-minute discovery call directly with our strategy team.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide custom proposals?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. We do not use standard off-the-shelf templates. Following a discovery call, our strategists assemble a tailored proposal detailing deliverables, timelines, pricing options, and strategic ROI opportunities.",
            },
          },
          {
            "@type": "Question",
            name: "Do you work with startups?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we work with ambitious, funded startups looking to establish solid digital foundations, scale search footprint quickly, and deploy fast-converting assets to raise capital or win customers.",
            },
          },
          {
            "@type": "Question",
            name: "Do you provide ongoing support?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes. Our Hosting & Website Maintenance division provides ongoing managed updates, weekly backups, security audits, database cleaning, server speed tuning, and fast developer support tickets.",
            },
          },
          {
            "@type": "Question",
            name: "Can we request multiple services?",
            acceptedAnswer: {
              "@type": "Answer",
              text: "Yes, we build integrated systems. Most of our clients bundle services — combining Custom Web Design with SEO Campaigns and performance Paid Advertising to ensure visual and operational compounding results.",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="contact-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <ContactHero />
      <ContactTrust />
      <MultiStepContactForm />
      <DirectContact />
      <GlobalClients />
      <WhyClientsContact />
      <ContactFAQ />
      <ContactCTA />
    </>
  );
}
