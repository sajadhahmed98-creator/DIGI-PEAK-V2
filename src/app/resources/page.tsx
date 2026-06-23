import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { Download, Clock, BarChart2, Award } from "lucide-react";
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

  // Filter out featured resources for top showcase
  const featuredResources = resourcesData.filter((r) => r.isFeatured);

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

      <div className="relative min-h-screen bg-[#020203] text-white">
        {/* Decorative ambient gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[10%] left-[-10%] w-[600px] h-[600px] bg-accent-primary/[0.015] rounded-full blur-[150px]" />
          <div className="absolute top-[40%] right-[-10%] w-[500px] h-[500px] bg-accent-secondary/[0.015] rounded-full blur-[130px]" />
        </div>

        <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10 space-y-20">
          {/* Hero Intro Header */}
          <section className="text-center max-w-3xl mx-auto space-y-6">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-1.5 text-xs font-semibold text-accent-primary">
              <span className="w-2 h-2 rounded-full bg-accent-primary animate-pulse" />
              B2B Growth Hub & Gated Toolkits
            </span>
            <h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-white leading-tight">
              B2B Growth <span className="bg-gradient-to-r from-accent-primary via-accent-glow to-accent-secondary bg-clip-text text-transparent">Templates &amp; Resources</span>
            </h1>
            <p className="text-muted text-lg leading-relaxed">
              Accelerate your digital acquisition channels. Download technical checklists, website migration maps, ChatGPT prompt libraries, and CRM blueprints.
            </p>
          </section>

          {/* Featured Resources Section */}
          {featuredResources.length > 0 && (
            <section className="space-y-8">
              <div className="flex items-center gap-3 border-b border-white/5 pb-4">
                <Award className="w-5 h-5 text-amber-400" />
                <h2 className="font-heading text-xl font-bold text-white">Featured Agency Playbooks</h2>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {featuredResources.map((res) => (
                  <div
                    key={res.id}
                    className="glass border border-amber-500/20 rounded-2xl p-6 relative overflow-hidden bg-gradient-to-b from-[#0c0d21]/40 to-[#020203] hover:border-amber-500/40 transition-all group flex flex-col justify-between"
                  >
                    <div className="absolute top-0 right-0 w-24 h-24 bg-amber-400/[0.02] rounded-full blur-[20px] pointer-events-none" />
                    <div>
                      <div className="flex justify-between items-start mb-4">
                        <span className="text-[9px] uppercase font-black text-amber-400 tracking-wider bg-amber-400/[0.05] px-2.5 py-1 rounded">
                          {res.category.replace("-", " ")}
                        </span>
                        <span className="text-[9px] font-bold text-white/40 border border-white/15 px-2 py-0.5 rounded">
                          {res.downloadType}
                        </span>
                      </div>
                      <h3 className="font-heading text-lg font-bold text-white mb-2 line-clamp-1 group-hover:text-amber-400 transition-colors">
                        {res.title}
                      </h3>
                      <p className="text-muted text-xs leading-relaxed line-clamp-3 mb-4">
                        {res.description}
                      </p>
                      <div className="flex items-center gap-3 text-[10px] text-slate-400 mb-6 pb-4 border-b border-white/5">
                        <span className="flex items-center gap-1">
                          <Clock className="w-3.5 h-3.5 text-accent-primary/80" />
                          {res.readTime} min read
                        </span>
                        <span className="flex items-center gap-1">
                          <BarChart2 className="w-3.5 h-3.5 text-accent-secondary/80" />
                          {res.downloadCount?.toLocaleString()} downloads
                        </span>
                      </div>
                    </div>
                    <Link
                      href={`/resources/${res.slug}`}
                      className="w-full bg-amber-500/10 hover:bg-amber-500 border border-amber-500/30 hover:border-transparent text-amber-400 hover:text-black font-bold text-xs uppercase tracking-wider py-3 rounded-full flex items-center justify-center gap-2 transition-all cursor-pointer"
                    >
                      <Download className="w-3.5 h-3.5" />
                      Access Gated Landing Page
                    </Link>
                  </div>
                ))}
              </div>
            </section>
          )}

          {/* Core Interactive List */}
          <section className="glass border border-white/5 rounded-3xl p-8 relative overflow-hidden bg-radial-gradient from-white/[0.01] to-transparent">
            <div className="border-b border-white/5 pb-4 mb-8">
              <h2 className="font-heading text-xl font-bold text-white">Interactive B2B Toolkit Database</h2>
            </div>
            <ResourceHubClient resources={resourcesData} />
          </section>
        </main>
      </div>
    </>
  );
}
