import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Script from "next/script";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
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
      images: [{ url: `/og-${slug}.jpg` }],
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

  // HowTo Schema injection for target resource checklists
  const howToStepsMap: Record<string, string[]> = {
    "gcc-local-seo-checklist": [
      "Claim and optimize Google Business Profile configurations.",
      "Track and audit local NAP citations on GCC directories.",
      "Verify right-to-left (RTL) layout crawl index parameters.",
      "Deploy localized Schema markup with dual-language hreflang mappings."
    ],
    "website-launch-checklist": [
      "Review technical indexability settings and redirects.",
      "Verify GA4 dataLayer event pushes across form funnels.",
      "Audit responsive grids and contrast levels for mobile QA.",
      "Enable Brotli/Gzip and verify SSL certificates status."
    ],
    "seo-audit-template": [
      "Perform a site-wide crawl to catalog crawl errors (404/5xx).",
      "Evaluate content quality and flag keyword cannibalization sites.",
      "Diagnose internal linking distributions and link orphan pages.",
      "Analyze Core Web Vitals (LCP, INP, CLS) performance."
    ],
    "google-business-profile-checklist": [
      "Secure profile owner access and complete verification.",
      "Optimize primary and secondary category mappings.",
      "Generate reviews and publish weekly promotional updates."
    ],
    "b2b-lead-generation-playbook": [
      "Map client personas and design high-value gated assets.",
      "Implement lead capture forms with corporate email validation.",
      "Configure CRM pipeline stages and Slack webhook alerts."
    ],
    "saas-pricing-strategy-template": [
      "Select your key B2B SaaS value metrics.",
      "Outline features allocation for Starter and Pro tiers.",
      "Optimize entry parameters and upgrade prompts."
    ],
    "e-commerce-conversion-audit-sheet": [
      "Audit checkout steps for cart friction bottlenecks.",
      "Verify layout hierarchy and CTA buttons above the fold.",
      "Optimize mobile checkout form inputs and tap grids.",
      "Sync local payment gateways and multi-currency formats."
    ],
    "cro-playbook": [
      "Design structured above-the-fold landing grids.",
      "Filter lead validation with corporate email blocks.",
      "Incorporate adjacent client testimonials and reviews.",
      "Deploy custom calculators and step selector tools."
    ],
    "seo-content-outline-template": [
      "Map user intent categories for target search terms.",
      "Build heading hierarchies targeting rich search snippets.",
      "List required keywords and semantic business entities.",
      "Define internal linkages and scope CTA triggers."
    ],
    "whatsapp-automation-blueprint": [
      "Verify phone numbers and set WhatsApp API gateways.",
      "Map automated dispatch conditions on CRM stages updates.",
      "Design compliant opt-in landing checkboxes.",
      "Write multi-day follow-up messaging structures."
    ],
    "linkedin-lead-generation-templates": [
      "Map sponsored content card layout specifications.",
      "Draft headline options utilizing copy hooks formulas.",
      "Integrate native forms mapping fields to your CRM."
    ]
  };

  const steps = howToStepsMap[slug];
  if (steps) {
    jsonLd["@graph"].push({
      "@type": "HowTo",
      "@id": `${url}/#howto`,
      "name": `How to implement the ${resource.title}`,
      "description": resource.description,
      "step": steps.map((stepText, idx) => ({
        "@type": "HowToStep",
        "position": idx + 1,
        "text": stepText,
        "name": `Step ${idx + 1}`
      }))
    });
  }

  // Actionable details content items mapping
  const includedDetailsMap: Record<string, string[]> = {
    "gcc-local-seo-checklist": [
      "Google Business Profile settings maps",
      "Local citation tracker for UAE/Qatar/KSA",
      "Bilingual Arabic/English Schema blocks",
      "RTL site speed optimization checklists"
    ],
    "website-launch-checklist": [
      "Technical redirection mapping sheets",
      "GA4 and GTM conversion audit rules",
      "WCAG 2.1 mobile QA contrast checks",
      "Server compression and SSL pre-flights"
    ],
    "seo-audit-template": [
      "Crawl error diagnosis roadmap",
      "Keyword cannibalization clean checklists",
      "Internal linking flow tracking blueprints",
      "Toxic backlink removal scripts templates"
    ],
    "google-business-profile-checklist": [
      "Owner claiming and verification guides",
      "Maps pack ranking triggers checklist",
      "Localized photo geolocation strategies",
      "NAP consistency directory checkers"
    ],
    "b2b-lead-generation-playbook": [
      "Multi-channel PPC ad mockup templates",
      "Gated lead captures email filters",
      "CRM workflow trigger parameter grids",
      "Automated auto-reply template builders"
    ],
    "saas-pricing-strategy-template": [
      "Value metric alignment templates",
      "Feature pricing grid models",
      "Upgrade triggers flowcharts",
      "Monetization benchmarking maps"
    ],
    "e-commerce-conversion-audit-sheet": [
      "Checkout friction scanner sheets",
      "Product page grid layout audits",
      "Mobile UX tap targets guides",
      "Payment gateway compatibility rules"
    ],
    "cro-playbook": [
      "Landing page wireframe blueprints",
      "Lead forms optimization sheets",
      "Social proof adjacent setups",
      "Interactive hook design checklists"
    ],
    "seo-content-outline-template": [
      "Intent mapping spreadsheets templates",
      "Snippet targeted heading checklists",
      "Semantic entity brief builders",
      "CTA placement coordinates blueprints"
    ],
    "whatsapp-automation-blueprint": [
      "Meta Business setup checklists",
      "HubSpot/Salesforce sync parameters",
      "Opt-in text compliance models",
      "Automated nurture copy sequences"
    ],
    "linkedin-lead-generation-templates": [
      "Ad copy hook outline blueprints",
      "Sponsored card layout wireframes",
      "Native lead form config checksheets",
      "Zapier CRM sync webhook templates"
    ]
  };

  const includedItems = includedDetailsMap[slug] || [
    "Structured B2B auditing checkpoints",
    "Real-world localized growth systems",
    "Customizable variables templates",
    "Step-by-step developer guidelines"
  ];

  // Dynamic entity rich copy block mapping for AI and search crawl optimization
  const renderCopyBlocks = () => {
    switch (slug) {
      case "gcc-local-seo-checklist":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">GCC Search Visibility: Why Localized SEO Matters</h2>
            <p>
              GCC Local SEO is the practice of optimizing your online presence to secure organic visibility on Google Maps and localized search pages in key Gulf hubs like Doha, Dubai, and Riyadh. Because search behaviors in these regions are highly multilingual and mobile-first, standard global SEO templates fail to rank.
            </p>
            <p>
              Our GCC local search model is built around three pillars: (1) Dual-Language GMB Optimization, (2) RTL Technical Schema validation, and (3) regional NAP syndication.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                To maximize local visibility, integrate this model alongside our premium <Link href="/services/seo" className="text-accent-primary hover:underline font-bold">Local SEO Services</Link> or submit details for a <Link href="/proposal" className="text-accent-primary hover:underline font-bold">Custom B2B Proposal</Link>.
              </p>
              <p className="text-xs">
                Receive an automatic crawling report via our <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free Website Audit Funnel</Link> or consult our artificial assistant <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI Chat</Link> to map your regional ranking potential. Learn more about GCC search trends on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      case "website-launch-checklist":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">B2B Deployment Excellence: Zero-Error Migrations</h2>
            <p>
              A website launch checklist is a comprehensive pre-flight technical document designed to verify performance benchmarks, redirects, canonical tags, and tracking endpoints before pushing code to production. Skipping this audit results in indexed search ranking drops.
            </p>
            <p>
              Our pre-launch checklist focuses on three stages: (1) Crawl-Ready index settings, (2) GA4/GTM conversion triggers validation, and (3) mobile QA responsiveness.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Ensure code quality with our expert <Link href="/services/web-design" className="text-accent-primary hover:underline font-bold">Website Design Services</Link> or outline contract terms using our <Link href="/proposal" className="text-accent-primary hover:underline font-bold">B2B Proposal Builder</Link>.
              </p>
              <p className="text-xs">
                Request a <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free Pre-Launch Audit</Link> or let our cognitive crawler <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI Interface</Link> scan your staging links. Check out developer blueprints on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      case "seo-audit-template":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">SEO Audit Engine: Systemic Search Diagnostics</h2>
            <p>
              An SEO audit template is an agency-grade checklist that inspects technical crawlers accessibility, content duplication, keyword cannibalization, internal page flows, and backlink safety to diagnostic site index health.
            </p>
            <p>
              We utilize three auditing layers: (1) Technical index validation via Search Console, (2) User Experience signals checks, and (3) backlinks profile sanitization.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Scale organic traffic with our customized <Link href="/services/seo" className="text-accent-primary hover:underline font-bold">SEO Optimization Services</Link> or map budgeting via the <Link href="/proposal" className="text-accent-primary hover:underline font-bold">B2B Proposal Tool</Link>.
              </p>
              <p className="text-xs">
                Request an instant crawler diagnostic through our <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free SEO Audit Form</Link> or ask <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI</Link> to inspect your domain crawl budget. Browse agency-grade tutorials on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      case "google-business-profile-checklist":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">GBP Optimization: Capturing High-Intent Local Searches</h2>
            <p>
              Google Business Profile optimization is the process of setting up, validating, and structuring your local business listing on Google Maps to rank in the local map pack. Optimized profiles generate up to 5x more clicks.
            </p>
            <p>
              Our GBP strategy includes: (1) NAP text alignment, (2) category maps selection, and (3) weekly content posting.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Partner with our local experts through <Link href="/services/seo" className="text-accent-primary hover:underline font-bold">Local SEO Agency Programs</Link> or map SLA pricing via our <Link href="/proposal" className="text-accent-primary hover:underline font-bold">Proposal Builder</Link>.
              </p>
              <p className="text-xs">
                Schedule a <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free Location Audit</Link> or let our automated assistant <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI</Link> optimize your service descriptions. Read maps ranking case studies on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      case "b2b-lead-generation-playbook":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">B2B Lead Generation: Building High-Intent Pipelines</h2>
            <p>
              A B2B lead generation playbook is a strategic roadmap that outlines target buyer personas, paid ads acquisition funnels (Google/LinkedIn/Meta), landing page templates, and CRM database automation parameters.
            </p>
            <p>
              We coordinate pipeline building via: (1) high-value gated assets hooks, (2) corporate work-email filters, and (3) CRM notification flows.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Build high-converting funnels with our <Link href="/services/marketing" className="text-accent-primary hover:underline font-bold">Digital Marketing Services</Link> or estimate project ROI inside our <Link href="/proposal" className="text-accent-primary hover:underline font-bold">Proposal Deck</Link>.
              </p>
              <p className="text-xs">
                Request an evaluation of your current conversion paths using the <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free Website Audit Form</Link> or hook up custom CRM webhooks with the help of <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI Integrator</Link>. Browse PPC guides on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      case "saas-pricing-strategy-template":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">SaaS Monetization: Designing High-Expansion Pricing</h2>
            <p>
              A SaaS pricing strategy is the structured framework a software company uses to charge clients based on product value, user seats, API requests, or compute consumption. Optimizing this system drives expansion revenue and improves client retention rates.
            </p>
            <p>
              Our template helps model: (1) Core Value Metric billing alignment, (2) Professional vs Enterprise feature gates, and (3) self-serve checkout triggers.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Design custom SaaS funnels with our <Link href="/services/marketing" className="text-accent-primary hover:underline font-bold">Performance Marketing Services</Link> or map metrics using our <Link href="/proposal" className="text-accent-primary hover:underline font-bold">B2B Proposal Funnel</Link>.
              </p>
              <p className="text-xs">
                Examine your landing page flow via a <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free CRO Audit</Link> or discuss monetization loops with <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI Engine</Link>. Read our SaaS scaling insights in the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      case "e-commerce-conversion-audit-sheet":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">E-Commerce Performance: Eliminating Friction Gaps</h2>
            <p>
              An E-commerce conversion rate audit is a diagnostic review of cart checkout processes, loading speed delays, product detail grids, and payment methods to discover cart abandonment leaks. Fixing these gaps directly lifts average order values (AOV).
            </p>
            <p>
              Our checklist audits: (1) Checkout mandatory fields limits, (2) image Cumulative Layout Shifts, and (3) mobile keyboard tap target errors.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Build fast shopping layouts with our <Link href="/services/web-design" className="text-accent-primary hover:underline font-bold">E-Commerce Development Services</Link> or outline project budgets with our <Link href="/proposal" className="text-accent-primary hover:underline font-bold">Proposal Builder</Link>.
              </p>
              <p className="text-xs">
                Benchmark your store performance with a <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free Website Audit</Link> or troubleshoot loading times with <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI Analyzer</Link>. Check out retail conversion studies on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      case "cro-playbook":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">B2B Conversion Rates: Translating Traffic into Pipeline</h2>
            <p>
              B2B conversion rate optimization is the process of testing and optimizing landing page grids, form fields, call-to-actions, and value messaging to increase qualified leads generation. 
            </p>
            <p>
              Our framework covers: (1) Value proposition placement grids, (2) corporate work-email validation filters, and (3) trust signals adjacent to form buttons.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Partner with our optimization team for <Link href="/services/marketing" className="text-accent-primary hover:underline font-bold">Digital Marketing Services</Link> or map retainers using the <Link href="/proposal" className="text-accent-primary hover:underline font-bold">Proposal Portal</Link>.
              </p>
              <p className="text-xs">
                Get your lander audited through our <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free Marketing Audit</Link> or consult with <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI Assistant</Link>. Learn CRO heuristics on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      case "seo-content-outline-template":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">B2B Content Briefs: Standardizing SEO Content Writing</h2>
            <p>
              An SEO content outline template is a strategic briefing document copywriters use to structure search articles, ensuring that headings align with Google's snippets criteria and keyword density rules match search engine signals.
            </p>
            <p>
              Our templates structures: (1) Core search intent classifications, (2) semantic entity keyword checklists, and (3) internal linking directives.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Boost your content authority with our <Link href="/services/seo" className="text-accent-primary hover:underline font-bold">SEO Writing Services</Link> or map copywriting timelines in a <Link href="/proposal" className="text-accent-primary hover:underline font-bold">B2B Proposal</Link>.
              </p>
              <p className="text-xs">
                Benchmark your current content density with a <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free Website Audit</Link> or outline topics with <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI Briefing Engine</Link>. Read our E-E-A-T guides on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      case "whatsapp-automation-blueprint":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">WhatsApp Workflows: Building Automated Mobile Nurturing</h2>
            <p>
              WhatsApp CRM automation involves connecting Meta's business API gateway with client databases (like HubSpot or Salesforce) to dispatch automated notifications, order confirmations, and sequence follow-ups directly to a user's mobile screen.
            </p>
            <p>
              Our blueprint guides: (1) Meta API webhook configurations, (2) opt-in landing checkpoints compliance, and (3) pipeline trigger conditions setups.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Integrate databases using our <Link href="/services/marketing" className="text-accent-primary hover:underline font-bold">CRM Automation Services</Link> or estimate Make/Zapier setup costs inside the <Link href="/proposal" className="text-accent-primary hover:underline font-bold">Proposal Builder</Link>.
              </p>
              <p className="text-xs">
                Test your integration capabilities using our <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free Tech Audit</Link> or configure custom SMS/WhatsApp gateways with <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI Solutions</Link>. Learn messaging strategies on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      case "linkedin-lead-generation-templates":
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">LinkedIn Paid Ads: Capturing Enterprise Contacts</h2>
            <p>
              LinkedIn Sponsored Content is a premium ad format that places gated whitepapers, checklist toolkits, or marketing webinars directly into the feeds of corporate decision-makers. Utilizing native Lead Gen forms captures accurate business email databases.
            </p>
            <p>
              Our layout guide outlines: (1) Copywriting problem hooks formulas, (2) visual content card wireframes, and (3) auto-reply extraction webhooks setups.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Run paid search and social with our <Link href="/services/marketing" className="text-accent-primary hover:underline font-bold">LinkedIn PPC Services</Link> or scope ad spend retainers inside the <Link href="/proposal" className="text-accent-primary hover:underline font-bold">Proposal Tool</Link>.
              </p>
              <p className="text-xs">
                Evaluate your landing page forms with a <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free Paid Ads Audit</Link> or optimize creative copy with the help of <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI Creative Bot</Link>. Browse PPC tutorials on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
      default:
        return (
          <>
            <h2 className="text-white font-bold text-xl font-heading">Leverage Verified B2B Frameworks</h2>
            <p>
              At Digipeak Agency, we run on absolute conversion transparency. Our internal checklists and pipelines have been built and battle-tested across Saudi Arabia, Qatar, the UAE, Australia, and the UK. Rather than keeping these methodologies closed, we publish them natively as free toolkits to empower in-house digital managers.
            </p>
            <p>
              This template provides drop-in variables to organize project timelines, define baseline scopes, verify technical index requirements, and execute performance optimizations. It bridges technical search elements directly with corporate lead qualification channels.
            </p>
            <div className="bg-[#0b0b0f] border border-white/5 rounded-xl p-4 space-y-2 mt-4">
              <h4 className="text-accent-secondary font-bold text-xs uppercase tracking-wider">Internal Resources & Links</h4>
              <p className="text-xs">
                Integrate these templates with our B2B Growth services: <Link href="/services/seo" className="text-accent-primary hover:underline font-bold">SEO</Link>, <Link href="/services/web-design" className="text-accent-primary hover:underline font-bold">Web Design</Link>, and <Link href="/services/marketing" className="text-accent-primary hover:underline font-bold">PPC Campaigns</Link>.
              </p>
              <p className="text-xs">
                Request a <Link href="/proposal" className="text-accent-primary hover:underline font-bold">Custom B2B proposal</Link>, run a <Link href="/#audit" className="text-accent-primary hover:underline font-bold">Free Website Performance Audit</Link>, or connect with <Link href="/digiai" className="text-accent-primary hover:underline font-bold">DigiAI</Link>. Read our organic insights on the <Link href="/blog" className="text-accent-primary hover:underline font-bold">Digipeak Blog</Link>.
              </p>
            </div>
          </>
        );
    }
  };

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
                
                <h1 className="font-heading text-3xl md:text-4xl lg:text-5xl font-black tracking-tight text-white leading-tight">
                  {resource.title}
                </h1>
                
                <p className="text-muted text-lg leading-relaxed pt-2">
                  {resource.description}
                </p>
              </div>

              {/* Actionable Points */}
              <div className="glass border border-white/5 rounded-2xl p-6 space-y-4">
                <h3 className="font-heading font-bold text-white text-base">What is included in this toolkit?</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs text-muted">
                  {includedItems.map((item, idx) => (
                    <div key={idx} className="flex items-start gap-2.5">
                      <CheckCircle2 className="w-4 h-4 text-accent-primary mt-0.5 flex-shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Long form text explaining the template value */}
              <div className="prose prose-invert text-muted leading-relaxed text-sm space-y-6 pt-4 border-t border-white/5">
                {renderCopyBlocks()}
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
                <div className="mb-6 border-b border-white/5 pb-4">
                  <h3 className="text-sm uppercase tracking-wider font-bold text-white">Gated Lead Capture</h3>
                  <p className="text-[11px] text-slate-400 mt-1">Fill out the credentials to unlock instant B2B checklist downloads.</p>
                </div>
                <ResourceHubClient resources={[resource]} initialSlug={resource.slug} />
              </div>
            </aside>

          </div>
        </main>
      </div>
    </>
  );
}
