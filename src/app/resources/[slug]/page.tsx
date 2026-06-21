import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, FileText, CheckCircle2 } from "lucide-react";
import { ResourceHubClient } from "@/components/resources/ResourceHubClient";
import resourcesData from "@/data/resources.json";

interface PageProps {
  params: Promise<{ slug: string }>;
}

// Statically pre-render landing pages
export async function generateStaticParams() {
  return resourcesData.map((res) => ({
    slug: res.slug,
  }));
}

// Generate dynamic metadata for B2B SEO queries
export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const resource = resourcesData.find((r) => r.slug === slug);

  if (!resource) {
    return {
      title: "Resource Not Found",
    };
  }

  const url = `https://www.digipeak.agency/resources/${slug}`;

  return {
    title: resource.seoTitle,
    description: resource.seoDescription,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title: resource.seoTitle,
      description: resource.seoDescription,
      url: url,
      images: [{ url: `/og-${slug}.jpg` }], // Fallback template OG
      type: "article",
    },
    twitter: {
      card: "summary_large_image",
      title: resource.seoTitle,
      description: resource.seoDescription,
      images: [`/og-${slug}.jpg`],
    },
  };
}

export default async function ResourceLandingPage({ params }: PageProps) {
  const { slug } = await params;
  const resource = resourcesData.find((r) => r.slug === slug);

  if (!resource) {
    notFound();
  }

  const url = `https://www.digipeak.agency/resources/${slug}`;

  // JSON-LD breadcrumbs schema
  const breadcrumbSchema = {
    "@type": "BreadcrumbList",
    "@id": `${url}/#breadcrumbs`,
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "item": { "@id": "https://www.digipeak.agency/", "name": "Home" }
      },
      {
        "@type": "ListItem",
        "position": 2,
        "item": { "@id": "https://www.digipeak.agency/resources/", "name": "Resources" }
      },
      {
        "@type": "ListItem",
        "position": 3,
        "item": { "@id": url, "name": resource.title }
      }
    ]
  };

  // JSON-LD Product Schema for Gated Download Template ($0 value)
  const productSchema = {
    "@type": "Product",
    "@id": `${url}/#product`,
    "name": resource.title,
    "image": `https://www.digipeak.agency/og-${slug}.jpg`,
    "description": resource.description,
    "brand": {
      "@type": "Brand",
      "name": "Digipeak"
    },
    "offers": {
      "@type": "Offer",
      "price": "0.00",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock",
      "url": url
    }
  };

  const jsonLd: any = {
    "@context": "https://schema.org",
    "@graph": [breadcrumbSchema, productSchema]
  };

  // FAQ Schema injection
  if (resource.faqs && resource.faqs.length > 0) {
    jsonLd["@graph"].push({
      "@type": "FAQPage",
      "@id": `${url}/#faq`,
      "mainEntity": resource.faqs.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer
        }
      }))
    });
  }

  return (
    <>
      <Script
        id="resource-detail-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <div className="relative min-h-screen bg-[#020203] text-white">
        {/* Gradients */}
        <div className="absolute inset-0 pointer-events-none overflow-hidden">
          <div className="absolute top-[15%] left-[-5%] w-[500px] h-[500px] bg-accent-primary/[0.015] rounded-full blur-[130px]" />
          <div className="absolute top-[50%] right-[-5%] w-[500px] h-[500px] bg-accent-secondary/[0.015] rounded-full blur-[130px]" />
        </div>

        <main className="max-w-7xl mx-auto px-6 py-16 md:py-24 lg:py-32 relative z-10">
          {/* Back button */}
          <Link 
            href="/resources" 
            className="inline-flex items-center gap-2 text-sm text-muted hover:text-white transition-colors mb-12 group"
          >
            <ArrowLeft className="w-4 h-4 group-hover:-translate-x-1 transition-transform" />
            Back to B2B Resources Hub
          </Link>

          {/* Two-Column landing page layout */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
            
            {/* Template Copy Detail Column */}
            <section className="lg:col-span-7 space-y-8">
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <span className="text-xs uppercase font-bold text-accent-secondary tracking-widest bg-accent-secondary/[0.03] px-3 py-1 rounded">
                    {resource.category.replace("-", " ")}
                  </span>
                  <span className="text-xs font-semibold text-white/50 border border-white/10 px-3 py-0.5 rounded">
                    Format: {resource.downloadType}
                  </span>
                </div>
                
                <h1 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  {resource.title}
                </h1>
                
                <p className="text-muted text-lg leading-relaxed pt-2">
                  {resource.description}
                </p>
              </div>

              {/* Actionable Points */}
              <div className="glass border border-white/5 rounded-2xl p-6 space-y-4">
                <h3 className="font-heading font-bold text-white text-base">What is included in this toolkit?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-muted">
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                    <span>Structured corporate auditing checkpoints</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                    <span>Real-world GCC localized marketing guidelines</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                    <span>Fully customizable variables and layout assets</span>
                  </div>
                  <div className="flex items-start gap-2.5">
                    <CheckCircle2 className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                    <span>Step-by-step developer checklists</span>
                  </div>
                </div>
              </div>

              {/* Long form text explaining the template value */}
              <div className="prose prose-invert text-muted leading-relaxed text-sm space-y-4 pt-4 border-t border-white/5">
                <h3 className="text-white font-bold text-lg font-heading">Leverage Verified B2B Frameworks</h3>
                <p>
                  At Digipeak Agency, we run on absolute conversion transparency. Our internal checklists and pipelines have been built and battle-tested across Saudi Arabia, Qatar, the UAE, Australia, and the UK. Rather than keeping these methodologies closed, we publish them natively as free toolkits to empower in-house digital managers.
                </p>
                <p>
                  This template provides drop-in variables to organize project timelines, define baseline scopes, verify technical index requirements, and execute performance optimizations. It bridges technical search elements directly with corporate lead qualification channels.
                </p>
              </div>

              {/* FAQ Section */}
              {resource.faqs && resource.faqs.length > 0 && (
                <section className="space-y-4 pt-6 border-t border-white/5">
                  <h3 className="font-heading font-bold text-lg text-white">Frequently Asked Questions</h3>
                  <div className="space-y-3">
                    {resource.faqs.map((faq, index) => (
                      <div key={index} className="glass border border-white/5 rounded-xl p-5">
                        <h4 className="font-heading font-bold text-sm text-white mb-2">{faq.question}</h4>
                        <p className="text-muted text-xs leading-relaxed">{faq.answer}</p>
                      </div>
                    ))}
                  </div>
                </section>
              )}
            </section>

            {/* Sidebar Gated Download Trigger Form */}
            <aside className="lg:col-span-5">
              <div className="glass border border-accent-primary/20 rounded-3xl p-6 relative overflow-hidden bg-gradient-to-b from-[#0c0d21] to-[#020203]">
                <ResourceHubClient resources={[resource]} initialSlug={resource.slug} />
              </div>
            </aside>

          </div>
        </main>
      </div>
    </>
  );
}
