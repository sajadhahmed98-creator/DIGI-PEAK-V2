import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { 
  MapPin, ChevronRight, CheckCircle2, Star, Shield, HelpCircle, 
  Briefcase, FileText, ArrowRight, BarChart, Users, Laptop, Globe,
  ShieldCheck, ArrowUpRight, TrendingUp, Zap, HelpCircle as HelpIcon, Cpu,
  Bot, Settings, Sparkles, MessageSquare, Terminal
} from "lucide-react";
import { LocationHero } from "@/components/shared/LocationHero";
import { LeadGeneration } from "@/components/home/LeadGeneration";

export const metadata: Metadata = {
  title: "Digital Marketing Agency USA | SEO, PPC & Web Design Services",
  description: "Digipeak is a premium AI-powered digital marketing agency and SEO company. We help US businesses grow through advanced SEO optimization, PPC services, and custom website design.",
  keywords: [
    "Digital Marketing Agency USA", "SEO Agency USA", "Web Design Company USA",
    "PPC Agency USA", "Local SEO Services USA", "SEO Company USA", "SEO Companies USA",
    "SEO Firm USA", "SEO Services USA", "AI SEO Agency USA", "AI Marketing Agency"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/locations/usa',
  },
  openGraph: {
    title: "Digital Marketing Agency USA | SEO, PPC & Web Design Services",
    description: "Digipeak is a premium AI-powered digital marketing agency and SEO company. We help US businesses grow through advanced SEO optimization, PPC services, and custom website design.",
    url: "https://www.digipeak.agency/locations/usa",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency USA | SEO, PPC & Web Design Services",
    description: "Digipeak is a premium AI-powered digital marketing agency and SEO company. We help US businesses grow through advanced SEO optimization, PPC services, and custom website design.",
  }
};

const cities = [
  {
    name: "Austin",
    slug: "usa/austin",
    desc: "The SaaS and technology epicentre of Texas. We build custom search optimization models and high-performance Web design setups for high-growth tech platforms and local healthcare systems."
  },
  {
    name: "San Diego",
    slug: "usa/san-diego",
    desc: "A highly competitive B2B biotech, SaaS, and coastal tourism market. Digipeak engineers localized search intent maps and conversion-optimized web designs to stand out."
  },
  {
    name: "Dallas",
    slug: "usa/dallas",
    desc: "A massive business gateway. We build enterprise-grade local SEO keyword mappings and CRM automation integrations for Dallas real estate and logistics companies."
  },
  {
    name: "Houston",
    slug: "usa/houston",
    desc: "A diverse market driven by energy, legal, and healthcare. Digipeak builds high-speed digital marketing funnels and authority content mapping to capture local business leads."
  },
  {
    name: "Miami",
    slug: "usa/miami",
    desc: "The fast-growing capital of trade, tourism, and real estate. We structure bilingual local search setups and creative brand identity maps to lock down market share."
  },
  {
    name: "Chicago",
    slug: "usa/chicago",
    desc: "A powerhouse for logistics, finance, and industrial enterprises. Our custom search engine optimization frameworks capture commercial-intent search queries."
  },
  {
    name: "New York",
    slug: "usa/new-york",
    desc: "The global hub of finance and professional services. Digipeak designs ultra-fast, sub-second headless websites and authority content strategies to outperform."
  },
  {
    name: "Los Angeles",
    slug: "usa/los-angeles",
    desc: "The creative capital of media, entertainment, and e-commerce. We build visual brand assets and high-converting paid ad campaigns that command attention."
  },
  {
    name: "San Francisco",
    slug: "usa/san-francisco",
    desc: "The epicentre of venture capital, software, and biotech. We design and scale Next.js platforms and local search maps built for enterprise acquisition."
  }
];

const faqItems = [
  // SEO Category
  {
    q: "What is SEO?",
    category: "SEO",
    a: "SEO (Search Engine Optimization) is the process of optimizing a website to increase its visibility when people search for products, services, or information related to your business on search engines like Google. The goal is to drive organic (unpaid) high-intent traffic to your site, establishing long-term authority and reducing dependency on paid ads."
  },
  {
    q: "How does SEO work?",
    category: "SEO",
    a: "Search engines use crawlers (like Googlebot) to scan, index, and analyze millions of pages on the web. Algorithms then evaluate hundreds of ranking signals—such as site load speed, mobile responsiveness, semantic keywords, page structure, backlinks, and user intent alignment—to display the most relevant, high-authority pages first in the search results."
  },
  {
    q: "How long does SEO take?",
    category: "SEO",
    a: "While technical crawlability fixes and minor on-page updates show initial indexing shifts within 30 to 45 days, a comprehensive search engine optimization campaign typically takes 4 to 6 months to generate sustainable rankings, qualified leads, and organic traffic growth. Highly competitive US B2B niches can require 9 to 12 months of compounding topical authority."
  },
  {
    q: "What does an SEO company do?",
    category: "SEO",
    a: "An SEO company like Digipeak handles the technical, content, and link profile management of your site. We run detailed crawl diagnostics, optimize Core Web Vitals, construct semantic keyword maps, write high-E-E-A-T landing page content, audit competitor gaps, resolve local map-pack issues, and establish high-quality domain citations to drive organic conversions."
  },
  {
    q: "Is local SEO worth it?",
    category: "SEO",
    a: "Absolutely. Over 46% of all Google searches have local intent. Local SEO connects physical and regional B2B service providers directly to nearby buyers at the exact moment they search. By ranking in the local map pack and target city queries, businesses acquire high-value regional leads with zero direct ad-spend costs."
  },
  // Digital Marketing Category
  {
    q: "What does a digital marketing agency do?",
    category: "Digital Marketing",
    a: "A full-service digital marketing agency manages and scales a business's online acquisition channels. This includes organic search strategy (SEO), paid advertisement campaigns (PPC), conversion-rate-optimized web design, content distribution, CRM integrations, and sales funnel automation to consistently generate leads and revenue."
  },
  {
    q: "Why hire a digital marketing agency?",
    category: "Digital Marketing",
    a: "Hiring an agency gives you immediate access to a complete team of specialized experts—including SEO strategists, headless developers, PPC media buyers, copywriters, and CRM specialists—for a fraction of the cost of building, training, and retaining an in-house marketing department."
  },
  {
    q: "How do I choose a digital marketing agency?",
    category: "Digital Marketing",
    a: "Look for technical transparent practices, customized non-templated strategies, and verified metrics matching actual pipeline value (leads, revenue, conversions) rather than simple impressions. Avoid agencies making unverifiable guarantees, claiming fake local office addresses, or using proprietary locked hosting systems."
  },
  {
    q: "How much does digital marketing cost?",
    category: "Digital Marketing",
    a: "Pricing varies based on industry competition and campaign scope. Local SEO and custom web design projects typically range from $1,500 to $5,000 monthly, while national enterprise campaigns, PPC management, and AI workflow integrations can range from $5,000 to $15,000+ per month. We build custom-scoped pricing for each client brief."
  },
  // AI Services Category
  {
    q: "What is AI SEO?",
    category: "AI Services",
    a: "AI SEO is the integration of artificial intelligence and machine learning technologies to accelerate and scale search optimization. We use AI for semantic keyword analysis, scanning search engine algorithm updates, structuring schema databases, and optimizing layout relevance tags to align with Google's AI-powered search features like AI Overviews (SGE)."
  },
  {
    q: "Can AI improve SEO performance?",
    category: "AI Services",
    a: "Yes. AI enables automated data collection, deep semantic mapping, and structural page analysis that would take weeks to perform manually. However, AI content must always be curated, restructured, and validated by human E-E-A-T strategists to ensure maximum quality, original research, and compliance with Google's Helpful Content guidelines."
  },
  {
    q: "What does an AI marketing agency do?",
    category: "AI Services",
    a: "An AI marketing agency like Digipeak builds smart marketing systems. We construct autonomous AI agents, deploy custom customer support chatbots, setup automated lead scoring databases, run AI-powered search optimization campaigns, and configure automated workflow pipelines to reduce operational costs and accelerate growth."
  },
  {
    q: "How can AI help generate leads?",
    category: "AI Services",
    a: "AI automates lead capturing and qualification. By embedding conversational AI chat interfaces on Next.js websites, we capture user interest 24/7, ask profiling scoping questions, route qualified briefs instantly to your CRM, and schedule strategy calls via calendar links automatically without manual intervention."
  },
  {
    q: "Do you provide AI automation services?",
    category: "AI Services",
    a: "Yes, we design and deploy custom AI business automation systems. This includes syncing CRM routing maps (HubSpot/Salesforce), setting up automated webhook triggers, deploying custom customer support chatbots, and building data parsing scripts to automate manual team operations."
  },
  // Web Design Category
  {
    q: "How much does website design cost?",
    category: "Web Design",
    a: "Custom Web design and headless development projects typically start around $5,000 for standard B2B business websites and scale up to $15,000+ for enterprise headless applications with complex API integrations, database dependencies, or specialized CRM synchronizations."
  },
  {
    q: "Do you build WordPress websites?",
    category: "Web Design",
    a: "While we can support and optimize legacy WordPress sites, we specialize in modern headless architectures using React and Next.js. Headless setups deliver sub-second load speeds, absolute security, and superior Core Web Vitals, dramatically outperforming WordPress template configurations in both conversion rates and organic search indexing."
  },
  {
    q: "Do you build Shopify stores?",
    category: "Web Design",
    a: "Yes, we design and develop conversion-focused e-commerce platforms. We build both standard Shopify theme configurations and high-end headless Shopify frontends connected to Next.js, allowing online brands to achieve lightning-fast loading speeds and custom product layouts."
  },
  {
    q: "How long does website development take?",
    category: "Web Design",
    a: "A standard custom B2B web design and headless build takes between 6 to 10 weeks from initial visual wireframing and intent mapping to frontend engineering, SEO migration, content population, and launch checks."
  }
];

export default function USALocationsHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/locations/usa/#webpage",
        "url": "https://www.digipeak.agency/locations/usa",
        "name": "Digital Marketing Agency USA | SEO, PPC & Web Design Services",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/locations/", "name": "Locations" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/locations/usa/", "name": "USA Services" } }
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
        "description": "AI-Powered B2B Digital Marketing Agency, SEO Company, and Web Design Company specializing in search engine optimization, paid advertising, and Next.js site development.",
        "foundingDate": "2022-01-01",
        "founder": {
          "@type": "Person",
          "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
          "name": "Sajadh Ahmed",
          "jobTitle": "Founder & Strategist",
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
        "@type": "FAQPage",
        "@id": "https://www.digipeak.agency/locations/usa/#faq",
        "mainEntity": faqItems.map(item => ({
          "@type": "Question",
          "name": item.q,
          "acceptedAnswer": {
            "@type": "Answer",
            "text": item.a
          }
        }))
      }
    ]
  };

  return (
    <>
      <Script
        id="usa-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-premium-dark-glow text-white relative min-h-screen">
        
        {/* 1. Hero Section */}
        <LocationHero
          badgeText="USA AI-Powered SEO & Design Hub"
          titlePrimary="Scale Your USA Business"
          titleGradient="With AI-Powered Digital Growth"
          description="Digipeak is an AI-powered digital growth agency, SEO company, and web design company. We build sub-second headless websites, deploy advanced AI SEO systems, and execute high-ROI paid media campaigns to drive leads and pipeline revenue for US enterprises."
          primaryCtaText="Request Growth Proposal"
          primaryCtaLink="/proposal"
        />

        {/* 2. Why Businesses Across America Choose Digipeak */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase">
                  AI-Powered Digital Growth Agency
                </span>
                <h2 className="font-heading text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Next-Generation SEO Company & Website Development Partner.
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  As a modern SEO agency and full-service digital marketing agency, we reject template-driven processes and outdated local SEO mailboxes. We build custom-engineered, speed-optimized digital solutions designed to rank, capture, and convert.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Our positioning as an AI-powered agency means we merge machine-learning data pipelines with human E-E-A-T expertise. We handle search engine optimization, Google ads, custom website design services, and AI workflow integrations to deliver predictable business growth.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Advanced AI SEO Services",
                    desc: "We utilize custom AI models to scan search engine changes, parse semantic ranking opportunities, and optimize metadata systems. This ensures your site ranks for commercial queries."
                  },
                  {
                    title: "Custom Website Design Company",
                    desc: "No WordPress bloat. We build custom Next.js, React, and server-rendered web systems that load instantly, secure your database, and maximize conversion rates."
                  },
                  {
                    title: "Predictable PPC Marketing Agency",
                    desc: "We manage high-intent campaigns across Google Search and LinkedIn. We draft intent-focused ad copy, optimize bid metrics, and minimize cost-per-acquisition (CPA)."
                  },
                  {
                    title: "AI Business Automation & Syncs",
                    desc: "We sync website lead captures directly into enterprise CRM networks (HubSpot/Salesforce) using automated AI workflows to reduce manual team overhead."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="glass p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-accent-primary/25 transition-all">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Dedicated Content Section: AI-Powered Search & Automation Systems */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
                AI SEO & Automation Framework
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                How We Integrate AI to Accelerate Growth
              </h2>
              <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Explore the technical systems our AI digital marketing agency uses to drive commercial search rankings, scale content, and automate sales pipelines.
              </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
              {/* Left Side: Detail Blocks */}
              <div className="lg:col-span-6 space-y-6">
                {[
                  {
                    title: "How AI Supports SEO & Rankings",
                    desc: "Search engines evaluate relevance using complex NLP (Natural Language Processing) models. We utilize specialized AI tools to cross-reference search engine algorithms, identify structural site gaps, and align layout tagging structures to secure placement in organic result sets and AI Overviews."
                  },
                  {
                    title: "AI-Powered Content Optimization",
                    desc: "Topical authority requires deep semantic clustering. Our AI content optimization tools analyze competing content, map missing subtopics, and guide our human copywriters to write highly structured, helpful resources that rank and establish industry authority."
                  },
                  {
                    title: "AI-Driven Keyword Research",
                    desc: "Instead of relying on raw search volume, our AI keyword research models map user intent, identify long-tail buyer queries, and cluster keywords by commercial readiness. This ensures your SEO strategy targets prospects ready to convert."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="glass p-6 md:p-8 rounded-2xl border border-white/10 flex items-start gap-4 hover:border-accent-primary/25 transition-colors">
                    <div className="w-10 h-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary shrink-0">
                      <Sparkles className="w-5 h-5" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white mb-2">{item.title}</h3>
                      <p className="text-xs text-muted leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Right Side: Large Automation Block */}
              <div className="lg:col-span-6 glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between relative overflow-hidden">
                <div className="absolute top-0 right-0 w-48 h-48 bg-accent-secondary/5 rounded-full blur-3xl pointer-events-none" />
                <div className="space-y-6">
                  <div className="w-12 h-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-secondary">
                    <Terminal className="w-6 h-6" />
                  </div>
                  <h3 className="font-heading text-2.5xl font-bold text-white">AI Workflow & Marketing Automation</h3>
                  <p className="text-sm text-muted leading-relaxed">
                    Customer acquisition requires fast response times. We build and configure automated pipelines that connect Next.js lead capture forms to automated workflows. 
                  </p>
                  <p className="text-sm text-muted leading-relaxed">
                    Our systems use automated chatbot development and AI lead generation parameters to score incoming briefs, route data instantly to your CRM (HubSpot, Salesforce), check domain metrics, and schedule strategic follow-ups without manual staff delay.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <span className="text-xs text-white font-bold block mb-1">AI Lead Generation</span>
                      <p className="text-[10px] text-muted leading-relaxed">Capture, parse, and score B2B scoping parameters 24/7.</p>
                    </div>
                    <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <span className="text-xs text-white font-bold block mb-1">AI Business Automation</span>
                      <p className="text-[10px] text-muted leading-relaxed">Sync datasets, trigger custom webhooks, and map CRM profiles.</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 3. Digital Marketing Services */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/35 bg-accent-secondary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
                Core Capabilities
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                National Services, <span className="text-gradient-secondary">Local Execution.</span>
              </h2>
              <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Explore our core capabilities engineered as a technical web design company, SEO firm, and AI automation agency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "SEO Services & Optimization",
                  desc: "Enterprise search engine optimization engineered to scale organic visibility. We run technical audits, structure crawl paths, build semantic keyword maps, and construct authority content clusters. By aligning your website structure with search engine criteria, we target and secure top rankings for high-intent search queries that drive customer acquisition."
                },
                {
                  title: "PPC Management & Ads",
                  desc: "High-ROI paid advertising campaigns targeting Google Search, Google Display, LinkedIn, and Meta networks. We build custom landing page setups, write copy focused on user action, construct conversion tracking models, and manage bids using data-grounded metrics. We focus on optimizing cost-per-acquisition (CPA) to ensure profitable client acquisition."
                },
                {
                  title: "Website Design & Development",
                  desc: "Premium custom website design built using headless Next.js, React, and server-side components. We develop sub-second, fully responsive layouts that yield superior Core Web Vitals, bulletproof security, and seamless API integrations. Our sites are built from the ground up to convert visits into revenue, avoiding bloated templates."
                },
                {
                  title: "Local SEO & Citations",
                  desc: "Geographic search engine optimization for businesses targeting specific regional markets. We build localized schema setups, structure citation portfolios, and optimize Google Business Profile configurations. We target map-pack visibility and local search query clusters to connect your brand with regional customers ready to purchase."
                },
                {
                  title: "Content Marketing & E-E-A-T",
                  desc: "High-authority, search-optimized copywriting and B2B brand strategy. We draft deep-dive resource hubs, technical whitepapers, and targeted articles that answer real search intent. Our content systems establish topical authority, earn natural citations, and guide users smoothly through the sales funnel."
                },
                {
                  title: "AI & CRM Workflow Automation",
                  desc: "Synchronizing custom CRM mappings (HubSpot/Salesforce), setting up automated webhook triggers, deploying custom customer support chatbots, and building data parsing scripts to automate manual team operations, capture prospects, and reduce sales cycle friction."
                }
              ].map((service, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-accent-primary/20 transition-all duration-300 group">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-accent-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed">
                      {service.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 4. Industries We Serve */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase">
                  Industry Focus
                </span>
                <h2 className="font-heading text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Tailored Marketing Systems for Niche Industries.
                </h2>
                <p className="text-muted text-base leading-relaxed">
                  We don&apos;t believe in one-size-fits-all strategies. Different industries require distinct search intent tracking, conversion paths, and regulatory compliance parameters.
                </p>
                <p className="text-muted text-sm leading-relaxed">
                  Digipeak builds custom acquisition funnels designed for the operational realities of modern enterprise niches. From compliance-heavy healthcare to fast-scaling SaaS, we optimize for conversion.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "SaaS & Software", icon: Cpu },
                  { name: "B2B Professional", icon: Briefcase },
                  { name: "Healthcare & Med", icon: ShieldCheck },
                  { name: "Real Estate & Dev", icon: Globe },
                  { name: "Logistics & Supply", icon: Zap },
                  { name: "E-Commerce Brands", icon: Laptop }
                ].map((ind, idx) => {
                  const Icon = ind.icon;
                  return (
                    <div key={idx} className="glass p-6 rounded-2xl border border-white/10 flex flex-col justify-between items-center text-center hover:border-accent-primary/30 transition-colors">
                      <div className="h-10 w-10 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-accent-primary mb-4">
                        <Icon className="w-5 h-5" />
                      </div>
                      <span className="font-heading text-xs font-bold text-white leading-tight">{ind.name}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        </section>

        {/* 5. Cities We Serve */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/35 bg-accent-secondary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
                Metropolitan Hubs
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Select Your Regional <span className="text-gradient-secondary">USA Growth Hub.</span>
              </h2>
              <p className="text-muted text-base md:text-lg max-w-2xl mx-auto leading-relaxed">
                Choose your city portal below to explore regional competitive analysis, neighborhood-specific keyword mappings, and tailored local B2B lead generation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-accent-primary/40 hover:bg-white/5 hover:translate-y-[-2px] transition-all group"
                >
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/[0.03] group-hover:border-accent-primary/25 transition-colors">
                      <MapPin className="w-5 h-5 text-muted group-hover:text-accent-primary transition-colors" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3 tracking-tight">
                      {city.name} Services
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-6">
                      {city.desc}
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

        {/* 6. Why Digipeak */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-white uppercase mb-6">
                Agency Values
              </span>
              <h2 className="font-heading text-3xl md:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white mb-4">
                What Guides Our USA Operations
              </h2>
            </div>
            <div className="space-y-8 text-muted text-base leading-relaxed">
              <p>
                Digipeak is built on transparency, technical precision, and absolute search engine compliance. We avoid automated mass content generation that search engines easily detect and penalize. Instead, we manually write and structure our location ecosystems using real economic, industry, and neighborhood data.
              </p>
              <p>
                By decoupling our frontend layouts from the backend server via modern headless Next.js setups, we guarantee superior loading speeds and high conversion ratios. Our campaigns are designed around a simple metric: building pipeline value and revenue growth for our B2B and enterprise clients.
              </p>
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-white font-bold block">Author Byline</span>
                  <span className="text-xs text-muted">Sajadh Ahmed — Digital Marketing Strategist & Graphic Designer</span>
                </div>
                <div className="flex items-center gap-1.5 text-xs text-accent-primary font-mono">
                  <Star className="w-4 h-4 fill-accent-primary" />
                  <span>EEAT & Trust Compliant Framework</span>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* 7. Frequently Asked Questions */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
                FAQ Portal
              </span>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                USA FAQ Integration <span className="text-gradient-primary">Database.</span>
              </h2>
              <p className="text-muted text-sm max-w-2xl mx-auto leading-relaxed">
                Find clear, programmatic, and technically accurate answers to common search engine optimization, web design, digital marketing, and AI service queries.
              </p>
            </div>

            {/* Accordion List Grouped by Category */}
            <div className="space-y-12">
              {["SEO", "Digital Marketing", "AI Services", "Web Design"].map((cat) => (
                <div key={cat} className="space-y-4">
                  <h3 className="font-heading text-xl font-bold text-accent-primary border-b border-white/5 pb-2 uppercase tracking-wider font-mono text-left">
                    {cat} Queries
                  </h3>
                  <div className="grid grid-cols-1 gap-4">
                    {faqItems.filter(item => item.category === cat).map((faq, idx) => (
                      <div key={idx} className="glass p-6 md:p-8 rounded-2xl border border-white/10 text-left">
                        <h4 className="font-heading font-bold text-white text-base md:text-lg mb-3">
                          {faq.q}
                        </h4>
                        <p className="text-xs text-muted leading-relaxed">
                          {faq.a}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
            </div>

          </div>
        </section>

        {/* 8. Final CTA */}
        <div className="border-t border-white/5 bg-transparent">
          <LeadGeneration />
        </div>

      </main>
    </>
  );
}
