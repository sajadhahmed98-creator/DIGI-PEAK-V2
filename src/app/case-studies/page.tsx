import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/ui/Reveal";

export const metadata: Metadata = {
  title: "Case Studies | Real Client Results | Digipeak Agency",
  description:
    "Real, in-depth case studies and performance results from Digipeak Agency clients across Qatar, Dubai, Saudi Arabia, and global markets.",
  keywords: [
    "Digital Marketing Case Studies Qatar",
    "SEO Case Studies Qatar",
    "Web Design Case Studies Dubai",
    "Agency Results Qatar",
    "Client ROI Case Studies",
    "Digital Agency Success Stories",
    "Performance Marketing Results",
  ],
  alternates: {
    canonical: "https://www.digipeak.agency/case-studies",
  },
  openGraph: {
    title: "Case Studies | Digipeak Agency",
    description:
      "Real results, real impact. Case studies from Digipeak's enterprise digital campaigns across the Middle East and globally.",
    url: "https://www.digipeak.agency/case-studies",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Case Studies | Digipeak Agency",
    description:
      "Real results, real impact. Case studies from Digipeak's enterprise digital campaigns.",
  },
};

export default function CaseStudiesPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/case-studies/#webpage",
        url: "https://www.digipeak.agency/case-studies",
        name: "Case Studies | Digipeak Agency",
        isPartOf: { "@id": "https://www.digipeak.agency/#website" },
        description:
          "Upcoming real client performance case studies from Digipeak Agency.",
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
              "@id": "https://www.digipeak.agency/case-studies/",
              name: "Case Studies",
            },
          },
        ],
      },
    ],
  };

  return (
    <>
      <Script
        id="case-studies-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <div className="min-h-screen bg-[#03050c] pt-32 pb-24 px-6 text-white">
        <div className="max-w-7xl mx-auto">
          <Reveal>
            <div className="text-center mb-20">
              <h1 className="text-4xl md:text-6xl font-heading font-bold mb-6">Real Results. Real Growth.</h1>
              <p className="text-xl text-muted/90 max-w-2xl mx-auto">
                Explore our in-depth case studies showing how we transform brands and scale revenue for our enterprise clients.
              </p>
            </div>
          </Reveal>

          {/* Featured Case Study */}
          <Reveal delay={0.2}>
            <Link 
              href="/case-studies/elevate-marketing-group"
              className="group block relative rounded-3xl bg-[#050816] border border-white/10 overflow-hidden transition-all duration-500 hover:border-accent-primary/50 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)]"
            >
              <div className="grid grid-cols-1 lg:grid-cols-2">
                <div className="p-10 md:p-16 flex flex-col justify-center">
                  <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-bold uppercase tracking-widest text-accent-primary mb-8 w-max">
                    Enterprise Digital Transformation
                  </div>
                  <h2 className="text-3xl md:text-5xl font-heading font-bold mb-6">Elevate Marketing Group</h2>
                  <p className="text-lg text-muted/90 mb-10 leading-relaxed">
                    Transforming a service provider into a premium digital brand capable of attracting enterprise-level clients in Dubai. See how we generated a 487% increase in organic traffic and over 150 qualified leads monthly.
                  </p>
                  
                  <div className="flex flex-wrap gap-3 mb-10">
                    {["Brand Strategy", "Web Design", "SEO", "AI Automation"].map(tag => (
                      <span key={tag} className="px-3 py-1.5 rounded-lg bg-white/5 text-sm text-white/80">{tag}</span>
                    ))}
                  </div>

                  <div className="flex items-center gap-2 text-accent-primary font-bold group-hover:translate-x-2 transition-transform duration-300">
                    Read Full Case Study <ArrowRight className="w-5 h-5" />
                  </div>
                </div>
                <div className="relative aspect-square lg:aspect-auto border-t lg:border-t-0 lg:border-l border-white/10">
                  <Image 
                    src="/images/case-studies/elevate/website.png" 
                    alt="Elevate Marketing Group Transformation"
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-r from-[#050816] to-transparent opacity-50 hidden lg:block" />
                </div>
              </div>
            </Link>
          </Reveal>

          <Reveal delay={0.4}>
            <div className="mt-24 text-center p-12 rounded-3xl border border-dashed border-white/20 bg-white/[0.02]">
              <h3 className="text-2xl font-bold font-heading text-white/60 mb-2">More Case Studies Compiling...</h3>
              <p className="text-muted">We're finalizing data for our latest real estate and healthcare campaigns.</p>
            </div>
          </Reveal>
        </div>
      </div>
    </>
  );
}
