import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { ChevronRight, MapPin } from "lucide-react";
import { LocationHero } from "@/components/shared/LocationHero";
import { LeadGeneration } from "@/components/home/LeadGeneration";
import { australiaHubData, citiesData } from "@/data/australiaData";

export const metadata: Metadata = {
  title: australiaHubData.metaTitle,
  description: australiaHubData.metaDescription,
  keywords: [
    "Digital Marketing Agency Australia", "SEO Agency Australia", "Web Design Company Australia",
    "Business Growth Australia", "Next.js Web Development Australia", "AI Automation Australia",
    "B2B Lead Generation Australia", "Branding Agency Australia"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/locations/australia',
  },
  openGraph: {
    title: australiaHubData.metaTitle,
    description: australiaHubData.metaDescription,
    url: "https://www.digipeak.agency/locations/australia",
    images: ["/og-australia.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: australiaHubData.metaTitle,
    description: australiaHubData.metaDescription,
  }
};

export default function AustraliaHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/locations/australia/#webpage",
        "url": "https://www.digipeak.agency/locations/australia",
        "name": australiaHubData.h1,
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/locations/", "name": "Locations" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/locations/australia/", "name": "Australia Services" } }
        ]
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
        "@type": "LocalBusiness",
        "@id": "https://www.digipeak.agency/locations/australia/#localbusiness",
        "name": "Digipeak Agency Australia",
        "image": "https://www.digipeak.agency/og-image.jpg",
        "url": "https://www.digipeak.agency/locations/australia",
        "description": "Premium B2B web design, search engine optimization, and business automation partner serving the Australian market.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.digipeak.agency/locations/australia/#service",
        "name": "Digital Marketing & Web Design Services Australia",
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": "AU"
      }
    ]
  };

  return (
    <>
      <Script
        id="australia-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-black text-white relative">
        <LocationHero
          badgeText={australiaHubData.badge}
          titlePrimary="Digital Growth Services"
          titleGradient="Across Australia"
          description={australiaHubData.heroDesc}
          primaryCtaText="Get Proposal"
          primaryCtaLink="/contact?location=australia"
        />

        {/* City Hub Gateways Grid */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black border-b border-white/5">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/10 px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
                Australian City Portals
              </span>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                Select Your Regional <span className="text-gradient-primary">Growth Hub.</span>
              </h2>
              <p className="text-muted text-lg max-w-2xl mx-auto leading-relaxed">
                Choose your city page below to access highly tailored digital strategies, local industry focus maps, and localized technical solutions.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {citiesData.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-accent-primary/40 hover:bg-white/5 hover:translate-y-[-2px] transition-all group"
                >
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/10 group-hover:border-accent-primary/25 transition-colors">
                      <MapPin className="w-5 h-5 text-muted group-hover:text-accent-primary transition-colors" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3 tracking-tight">
                      {city.name} Services
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-6">
                      Custom design, target SEO, lead acquisition, and CRM setup tailored to {city.name}&apos;s local market.
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent-primary">
                    Explore {city.name} Hub
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* B2B Market Overview Section */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-white/[0.01]">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-12">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-white uppercase mb-6">
                Market Context
              </span>
              <h2 className="font-heading text-3xl md:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
                B2B Digital Positioning in the Australian Market
              </h2>
            </div>
            <div className="space-y-6 text-muted text-base leading-relaxed">
              <p>{australiaHubData.introText}</p>
              {australiaHubData.seoBlockParas.map((para, idx) => (
                <p key={idx}>{para}</p>
              ))}
            </div>
          </div>
        </section>

        <div className="border-t border-white/5">
          <LeadGeneration />
        </div>
      </main>
    </>
  );
}
