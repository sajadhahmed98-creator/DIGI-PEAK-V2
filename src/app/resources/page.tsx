import type { Metadata } from "next";
import Script from "next/script";
import { ResourceHubClient } from "@/components/resources/ResourceHubClient";
import resourcesData from "@/data/resources.json";

export const metadata: Metadata = {
  title: "Free B2B SEO Templates, Branding kits & Growth resources | Digipeak",
  description: "Accelerate your corporate pipeline with our free templates library. Download B2B SEO checklists, website launch spreadsheets, Figma UI guidelines, and CRM blueprint templates.",
  alternates: {
    canonical: "https://www.digipeak.agency/resources",
  },
  openGraph: {
    title: "Free B2B SEO Templates, Branding kits & Growth resources | Digipeak",
    description: "Accelerate your corporate pipeline with our free templates library. Download B2B SEO checklists, website launch spreadsheets, Figma UI guidelines, and CRM blueprint templates.",
    url: "https://www.digipeak.agency/resources",
    images: [{ url: "/og-resources.jpg" }],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Free B2B SEO Templates & Resources | Digipeak",
    description: "Accelerate your corporate pipeline with our free templates library. Download B2B SEO checklists, website launch spreadsheets, and CRM blueprint templates.",
    images: ["/og-resources.jpg"],
  },
};

export default function ResourcesPage() {
  const url = "https://www.digipeak.agency/resources";

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": { "@id": "https://www.digipeak.agency/", "name": "Home" }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": { "@id": url, "name": "Resources" }
      }
    ]
  };

  const organizationSchema = {
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
      };

  const webPageSchema = {
    "@context": "https://schema.org",
    "@type": "WebPage",
    "@id": `${url}/#webpage`,
    "url": url,
    "name": "Free B2B SEO Templates, Branding kits & Growth resources | Digipeak",
    "description": "Accelerate your corporate pipeline with our free templates library. Download B2B SEO checklists, website launch spreadsheets, Figma UI guidelines, and CRM blueprint templates.",
    "isPartOf": { "@id": "https://www.digipeak.agency/#website" }
  };

  return (
    <>
      <Script
        id="resources-hub-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [breadcrumbSchema, organizationSchema, webPageSchema]
          })
        }}
      />

      <div className="relative min-h-screen bg-[#050816] text-white">
        {/* Decorative ambient gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-accent-primary/5 rounded-full blur-[150px]" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-accent-secondary/5 rounded-full blur-[130px]" />
        </div>

        <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10 space-y-16">
          {/* Hero Intro Header */}
          <section className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-1.5 text-xs font-semibold text-accent-primary">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              B2B Growth Toolkit
            </span>
            <h1 className="font-heading text-3xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              B2B Growth <span className="bg-gradient-to-r from-accent-primary via-accent-glow to-accent-secondary bg-clip-text text-transparent">Templates &amp; Resources</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Accelerate your digital acquisition channels. Download high-performance technical guides, Figma layout templates, Google Sheets launch checkers, and CRM blueprints.
            </p>
          </section>

          {/* Core Interactive List */}
          <section className="glass border border-white/5 rounded-3xl p-8 relative overflow-hidden bg-radial-gradient from-white/[0.01] to-transparent">
            <ResourceHubClient resources={resourcesData} />
          </section>
        </main>
      </div>
    </>
  );
}
