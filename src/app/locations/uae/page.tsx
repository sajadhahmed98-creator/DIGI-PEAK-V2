import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { 
  MapPin, ChevronRight, CheckCircle2, Star, Shield, HelpCircle, 
  Briefcase, FileText, ArrowRight, BarChart, Users, Laptop, Globe,
  ShieldCheck, ArrowUpRight, TrendingUp, Zap, HelpCircle as HelpIcon, Cpu,
  Bot, Settings, Sparkles, MessageSquare, Terminal, Palmtree
} from "lucide-react";
import { LocationHero } from "@/components/shared/LocationHero";
import { LeadGeneration } from "@/components/home/LeadGeneration";

export const metadata: Metadata = {
  title: "Digital Marketing Agency UAE | SEO, AI Automation, PPC & Web Design Services",
  description: "Digipeak helps businesses across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain grow through SEO, AI automation, web design, PPC management, branding and digital marketing.",
  keywords: [
    "Digital Marketing Agency UAE", "SEO Agency UAE", "AI Automation Agency UAE",
    "Web Design Company UAE", "PPC Agency UAE", "AI Marketing Agency UAE",
    "SEO Company UAE", "Local SEO Services UAE", "SEO Services UAE", "Ecommerce Agency UAE"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/locations/uae',
  },
  openGraph: {
    title: "Digital Marketing Agency UAE | SEO, AI Automation, PPC & Web Design Services",
    description: "Digipeak helps businesses across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain grow through SEO, AI automation, web design, PPC management, branding and digital marketing.",
    url: "https://www.digipeak.agency/locations/uae",
    images: ["/og-uae.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency UAE | SEO, AI Automation, PPC & Web Design Services",
    description: "Digipeak helps businesses across Dubai, Abu Dhabi, Sharjah, Ajman, Ras Al Khaimah, Fujairah and Umm Al Quwain grow through SEO, AI automation, web design, PPC management, branding and digital marketing.",
  }
};

const emirates = [
  {
    name: "Dubai",
    slug: "uae/dubai",
    desc: "The commercial heart of the UAE. We engineer speed-optimized Next.js websites, deploy advanced AI SEO systems, and run high-intent acquisition campaigns in DIFC, Business Bay, and Dubai Marina."
  },
  {
    name: "Abu Dhabi",
    slug: "uae/abu-dhabi",
    desc: "The administrative and energy capital. We build enterprise-grade search footprints, technical SEO maps, and AI consulting services for financial entities, healthcare networks, and government contractors."
  },
  {
    name: "Sharjah",
    slug: "uae/sharjah",
    desc: "The manufacturing and academic center. Digipeak builds conversion-driving local search profiles, corporate branding strategies, and responsive web design frameworks to secure regional market share."
  },
  {
    name: "Ajman",
    slug: "uae/ajman",
    desc: "A rapidly growing SME and retail hub. We deliver capital-efficient SEO services, Google Ads optimization, and CRM business automation pipelines to streamline client operations and lead routing."
  },
  {
    name: "Ras Al Khaimah",
    slug: "uae/ras-al-khaimah",
    desc: "The northern tourism and hospitality center. We design high-converting hotel campaigns, localized hospitality marketing, and search visibility setups for luxury real estate developers."
  },
  {
    name: "Fujairah",
    slug: "uae/fujairah",
    desc: "A key logistics and maritime trade node. Digipeak designs custom B2B marketing funnels, logistics industry campaigns, and technical search engine optimization to capture wholesale trade intent."
  },
  {
    name: "Umm Al Quwain",
    slug: "uae/umm-al-quwain",
    desc: "A market driven by local commerce and coastal tourism. We implement targeted organic search optimization, local SEO profiles, and CRM workflow automation for expanding SMEs."
  }
];

const faqItems = [
  {
    q: "How does SEO help UAE businesses?",
    category: "SEO",
    a: "Search engine optimization helps UAE businesses build sustainable organic visibility, capturing high-intent search queries from customers looking for specific services in Dubai, Abu Dhabi, or the wider GCC. By optimizing site performance, mapping semantic keywords, and establishing local citations, businesses can outrank competitors, establish market credibility, and decrease reliance on rising paid advertising channels."
  },
  {
    q: "How much does SEO cost in the UAE?",
    category: "SEO",
    a: "SEO campaign services in the UAE generally range from AED 3,500 to AED 10,000+ per month, depending on keyword competition, content volume requirements, and the technical scope of the project. Specialized enterprise, SaaS, or luxury real estate search optimization campaigns typically range from AED 12,000 to AED 25,000+ monthly due to the need for advanced technical audits, continuous schema updates, and robust content clustering."
  },
  {
    q: "What is the best SEO agency in the UAE?",
    category: "SEO",
    a: "The best SEO agency in the UAE is one that aligns search marketing metrics with direct business outcomes, focusing on organic lead volume, pipeline conversion rates, and revenue ROI rather than vanity keyword rankings. Digipeak separates itself by replacing slow templates with headless Next.js code, using AI-driven NLP keyword clustering, and building authoritative backlink profiles that comply with Google's E-E-A-T and helpful content guidelines."
  },
  {
    q: "How long does SEO take in the UAE?",
    category: "SEO",
    a: "While basic technical schema updates, Core Web Vital speed fixes, and search crawl improvements yield index ranking shifts within 30 to 45 days, a full organic SEO campaign in the UAE requires 4 to 6 months to establish consistent ranking authority and stable lead flows. Highly competitive local spaces, such as Dubai real estate or financial consulting, can take 6 to 9 months to establish compound authority."
  },
  {
    q: "How much does digital marketing cost in the UAE?",
    category: "Digital Marketing",
    a: "Digital marketing agency retainer packages in the UAE typically average AED 5,000 to AED 15,000+ per month for mid-sized operations, and can scale up to AED 30,000+ for omni-channel campaigns encompassing Google Ads, Meta Ads, social media management, email automation, and graphic design. Custom website design and development services start around AED 15,000 for standard corporate sites."
  },
  {
    q: "What does a digital marketing agency do in the UAE?",
    category: "Digital Marketing",
    a: "A full-service digital marketing agency like Digipeak handles the complete customer acquisition funnel. We design fast, secure web design layouts, optimize search engine listings via local and technical SEO, manage paid search campaigns (Google, Facebook, LinkedIn Ads), and implement AI automation pipelines to nurture leads and convert anonymous web traffic into paying clients."
  },
  {
    q: "How do I choose a digital marketing agency in the UAE?",
    category: "Digital Marketing",
    a: "When choosing a UAE digital partner, prioritize technical transparency, client-side case studies, and customized strategic planning. Avoid companies that make absolute ranking guarantees, rely on cheap pre-built templates, or lack deep CRM database integrations. Look for partners who understand how to structure high-performing platforms using Next.js and React, and can demonstrate immediate conversion rate improvements."
  },
  {
    q: "How can AI automation help UAE businesses?",
    category: "AI Services",
    a: "AI business automation increases operational efficiency by deploying custom AI customer service chatbots to engage prospects 24/7, configuring automated lead scoring parameters inside CRMs like HubSpot, routing inquiries to sales staff instantly, and writing structured JSON-LD schema markups. This lowers client acquisition friction, saves manual team labor, and significantly accelerates sales response times."
  },
  {
    q: "What is CRM marketing automation?",
    category: "AI Services",
    a: "CRM marketing automation involves syncing website forms with databases like HubSpot, Salesforce, or Zoho to automate lead capture, categorization, and nurturing. Using triggers and webhooks, we ensure that when a prospect requests a proposal, they are instantly scored, mapped to a sales representative, and put into an automated email follow-up sequence."
  },
  {
    q: "How much does website design cost in the UAE?",
    category: "Web Design",
    a: "Custom website design and development services in the UAE generally range from AED 15,000 to AED 45,000+ for mid-sized corporate platforms built using headless, modern code. Complex ecommerce, multi-lingual systems, or enterprise SaaS portals with deep API database integrations can range from AED 50,000 to over AED 100,000 depending on UX complexity, security protocols, and speed parameters."
  },
  {
    q: "Why should UAE businesses choose headless Next.js over WordPress?",
    category: "Web Design",
    a: "Headless Next.js websites completely decouple the frontend layout from backend servers, which guarantees sub-second load times, absolute protection against database injection security vulnerabilities, and optimal Google Core Web Vitals. Bloated WordPress configurations often struggle with speed plugins and script load errors, dragging down mobile SEO rankings and conversion rates."
  }
];

export default function UaeHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/locations/uae/#webpage",
        "url": "https://www.digipeak.agency/locations/uae",
        "name": "Digital Marketing, SEO & Web Design Services in the UAE",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/locations/", "name": "Locations" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/locations/uae/", "name": "UAE Services" } }
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
        "@id": "https://www.digipeak.agency/locations/uae/#faq",
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
        id="uae-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-premium-dark-glow text-white relative min-h-screen">
        
        {/* 1. Hero Section */}
        <LocationHero
          badgeText="UAE AI-Powered SEO & Design Hub"
          titlePrimary="Scale Your UAE Business"
          titleGradient="With AI-Powered Digital Growth"
          description="Digipeak is a premium AI-powered digital growth agency, SEO company, and web design company. We build sub-second headless websites, deploy advanced AI SEO systems, and execute high-ROI paid media campaigns to drive leads and pipeline revenue for UAE enterprises across Dubai, Abu Dhabi, Sharjah, and the Northern Emirates."
          primaryCtaText="Request Growth Proposal"
          primaryCtaLink="/proposal"
        />

        {/* 2. Why Choose Digipeak */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase">
                  AI-Powered Digital Growth Agency
                </span>
                <h2 className="font-heading text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Next-Generation SEO Company & Website Development Partner in the UAE.
                </h2>
                <p className="text-muted text-base leading-relaxed font-light">
                  As a modern SEO agency and full-service digital marketing agency in the UAE, we reject template-driven processes and outdated local SEO mailboxes. We build custom-engineered, speed-optimized digital solutions designed to rank, capture, and convert.
                </p>
                <p className="text-muted text-sm leading-relaxed font-light">
                  Our positioning as an AI-powered agency means we merge machine-learning data pipelines with human E-E-A-T expertise. We handle search engine optimization, Google ads, custom website design services, and AI workflow integrations to deliver predictable business growth.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Advanced AI SEO Services UAE",
                    desc: "We utilize custom AI models to scan search engine changes, parse semantic ranking opportunities, and optimize metadata systems. This ensures your site ranks for commercial queries."
                  },
                  {
                    title: "Custom Web Design UAE",
                    desc: "No WordPress bloat. We build custom Next.js, React, and server-rendered web systems that load instantly, secure your database, and maximize conversion rates."
                  },
                  {
                    title: "PPC Management Agency UAE",
                    desc: "We manage high-intent campaigns across Google Search, Instagram, and LinkedIn. We draft intent-focused ad copy, optimize bid metrics, and minimize cost-per-acquisition (CPA)."
                  },
                  {
                    title: "AI Business Automation UAE",
                    desc: "We sync website lead captures directly into enterprise CRM networks (HubSpot/Salesforce) using automated AI workflows to reduce manual team overhead."
                  }
                ].map((item, idx) => (
                  <div key={idx} className="glass p-6 md:p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-accent-primary/25 transition-all">
                    <div>
                      <h3 className="font-heading text-xl font-bold text-white mb-3">{item.title}</h3>
                      <p className="text-xs text-muted leading-relaxed font-light">{item.desc}</p>
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
                How We Integrate AI to Accelerate UAE Growth
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
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
                      <p className="text-xs text-muted leading-relaxed font-light">{item.desc}</p>
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
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Customer acquisition requires fast response times. We build and configure automated pipelines that connect Next.js lead capture forms to automated workflows. 
                  </p>
                  <p className="text-sm text-muted leading-relaxed font-light">
                    Our systems use automated chatbot development and AI lead generation parameters to score incoming briefs, route data instantly to your CRM (HubSpot, Salesforce), check domain metrics, and schedule strategic follow-ups without manual staff delay.
                  </p>
                  <div className="grid grid-cols-2 gap-4 pt-4">
                    <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <span className="text-xs text-white font-bold block mb-1">AI Lead Generation UAE</span>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-light">Capture, parse, and score B2B scoping parameters 24/7.</p>
                    </div>
                    <div className="bg-white/[0.02] p-4 rounded-xl border border-white/5">
                      <span className="text-xs text-white font-bold block mb-1">AI Business Automation UAE</span>
                      <p className="text-[10px] text-slate-400 leading-relaxed font-light">Sync datasets, trigger custom webhooks, and map CRM profiles.</p>
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
                UAE National Services, <span className="text-gradient-secondary">Local Execution.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Explore our core capabilities engineered as a technical web design company, SEO firm, and AI automation agency.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "SEO Services & Optimization UAE",
                  desc: "Enterprise search engine optimization engineered to scale organic visibility. We run technical audits, structure crawl paths, build semantic keyword maps, and construct authority content clusters. By aligning your website structure with search engine criteria, we target and secure top rankings for high-intent search queries that drive customer acquisition."
                },
                {
                  title: "PPC Management UAE & Ads",
                  desc: "High-ROI paid advertising campaigns targeting Google Search, Google Display, LinkedIn, and Meta networks. We build custom landing page setups, write copy focused on user action, construct conversion tracking models, and manage bids using data-grounded metrics. We focus on optimizing cost-per-acquisition (CPA) to ensure profitable client acquisition."
                },
                {
                  title: "Website Design & Development UAE",
                  desc: "Premium custom website design built using headless Next.js, React, and server-side components. We develop sub-second, fully responsive layouts that yield superior Core Web Vitals, bulletproof security, and seamless API integrations. Our sites are built from the ground up to convert visits into revenue, avoiding bloated templates."
                },
                {
                  title: "Local SEO & Citations UAE",
                  desc: "Geographic search engine optimization for businesses targeting specific regional markets. We build localized schema setups, structure citation portfolios, and optimize Google Business Profile configurations. We target map-pack visibility and local search query clusters to connect your brand with regional customers ready to purchase."
                },
                {
                  title: "Content Marketing & E-E-A-T UAE",
                  desc: "High-authority, search-optimized copywriting and B2B brand strategy. We draft deep-dive resource hubs, technical whitepapers, and targeted articles that answer real search intent. Our content systems establish topical authority, earn natural citations, and guide users smoothly through the sales funnel."
                },
                {
                  title: "AI & CRM Workflow Automation UAE",
                  desc: "Synchronizing custom CRM mappings (HubSpot/Salesforce), setting up automated webhook triggers, deploying custom customer support chatbots, and building data parsing scripts to automate manual team operations, capture prospects, and reduce sales cycle friction."
                }
              ].map((service, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-accent-primary/20 transition-all duration-300 group">
                  <div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-4 group-hover:text-accent-primary transition-colors">
                      {service.title}
                    </h3>
                    <p className="text-xs text-muted leading-relaxed font-light">
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
                  Tailored Marketing Systems for UAE Industries.
                </h2>
                <p className="text-slate-400 text-base leading-relaxed font-light">
                  We don&apos;t believe in one-size-fits-all strategies. Different industries require distinct search intent tracking, conversion paths, and regional UAE regulatory compliance parameters.
                </p>
                <p className="text-slate-400 text-sm leading-relaxed font-light">
                  Digipeak builds custom acquisition funnels designed for the operational realities of UAE enterprise niches. From compliance-heavy healthcare to fast-scaling real estate developers, we optimize for conversion.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-4">
                {[
                  { name: "Real Estate & Dev", icon: Globe },
                  { name: "Luxury Brands", icon: Star },
                  { name: "E-Commerce Brands", icon: Laptop },
                  { name: "Hospitality & Tourism", icon: Palmtree },
                  { name: "Healthcare & Med", icon: ShieldCheck },
                  { name: "SaaS & Tech", icon: Cpu }
                ].map((ind, idx) => {
                  const Icon = ind.icon || Globe;
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
                Emirate Hubs
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-4">
                Select Your Regional <span className="text-gradient-secondary">UAE Growth Hub.</span>
              </h2>
              <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Choose your Emirate portal below to explore regional competitive analysis, neighborhood-specific keyword mappings, and tailored local B2B lead generation.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {emirates.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-accent-primary/40 hover:bg-white/5 hover:translate-y-[-2px] transition-all group"
                >
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/[0.03] group-hover:border-accent-primary/25 transition-colors">
                      <MapPin className="w-5 h-5 text-slate-400 group-hover:text-accent-primary transition-colors" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3 tracking-tight">
                      {city.name} Services
                    </h3>
                    <p className="text-xs text-muted leading-relaxed mb-6 font-light">
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
                What Guides Our UAE Operations
              </h2>
            </div>
            <div className="space-y-8 text-slate-400 text-base leading-relaxed font-light">
              <p>
                Digipeak is built on transparency, technical precision, and absolute search engine compliance. We avoid automated mass content generation that search engines easily detect and penalize. Instead, we manually write and structure our location ecosystems using real economic, industry, and neighborhood data.
              </p>
              <p>
                By decoupling our frontend layouts from the backend server via modern headless Next.js setups, we guarantee superior loading speeds and high conversion ratios. Our campaigns are designed around a simple metric: building pipeline value and revenue growth for our UAE B2B and enterprise clients.
              </p>
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs text-white font-bold block font-heading">Author Byline</span>
                  <span className="text-xs text-slate-400 font-mono">Sajadh Ahmed — Digital Marketing Strategist & Graphic Designer</span>
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
                UAE FAQ Integration <span className="text-gradient-primary">Database.</span>
              </h2>
              <p className="text-slate-400 text-sm max-w-2xl mx-auto leading-relaxed font-light">
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
                      <div key={idx} className="glass p-6 md:p-8 rounded-2xl border border-white/10 text-left animate-fade-in">
                        <h4 className="font-heading font-bold text-white text-base md:text-lg mb-3">
                          {faq.q}
                        </h4>
                        <p className="text-xs text-slate-400 leading-relaxed font-light">
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
