import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { 
  ChevronRight, MapPin, CheckCircle2, Star, Shield, HelpCircle, 
  Briefcase, FileText, ArrowRight, BarChart, Users, Laptop, Globe,
  ShieldCheck, ArrowUpRight, TrendingUp, Zap, HelpCircle as HelpIcon, Cpu,
  Bot, Settings, Sparkles, MessageSquare, PhoneCall
} from "lucide-react";
import { LocationHero } from "@/components/shared/LocationHero";
import { LeadGeneration } from "@/components/home/LeadGeneration";

export const metadata: Metadata = {
  title: "Digital Marketing Agency Australia | SEO, AI Automation, PPC & Web Design",
  description: "Digipeak helps Australian businesses grow through SEO, AI automation, web design, PPC management, branding, ecommerce growth, and digital marketing services.",
  keywords: [
    "Digital Marketing Agency Australia", "SEO Agency Australia", "AI Automation Agency Australia",
    "Web Design Company Australia", "PPC Agency Australia", "AI Marketing Agency Australia",
    "Web Development Australia", "B2B Lead Generation Australia", "Branding Agency Australia",
    "Social Media Marketing Australia", "Ecommerce Growth Australia"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/locations/australia',
  },
  openGraph: {
    title: "Digital Marketing Agency Australia | SEO, AI Automation, PPC & Web Design",
    description: "Digipeak helps Australian businesses grow through SEO, AI automation, web design, PPC management, branding, ecommerce growth, and digital marketing services.",
    url: "https://www.digipeak.agency/locations/australia",
    images: ["/og-australia.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency Australia | SEO, AI Automation, PPC & Web Design",
    description: "Digipeak helps Australian businesses grow through SEO, AI automation, web design, PPC management, branding, ecommerce growth, and digital marketing services.",
  }
};

const cities = [
  {
    name: "Sydney",
    slug: "australia/sydney",
    desc: "Targeting Sydney's competitive finance, professional services, technology, enterprise business, and ecommerce sectors. We deploy results-focused Web Design Sydney and SEO Agency Sydney campaigns."
  },
  {
    name: "Melbourne",
    slug: "australia/melbourne",
    desc: "Optimized for Melbourne's startup ecosystem, ecommerce growth, higher education, healthcare, and creative industries. Our SEO Company Melbourne strategies drive organic traffic and conversions."
  },
  {
    name: "Brisbane",
    slug: "australia/brisbane",
    desc: "Tailored to Brisbane's active construction, real estate, tourism, and healthcare sectors. We engineer Google Ads Brisbane and search engine optimization campaigns that capture local intent."
  },
  {
    name: "Perth",
    slug: "australia/perth",
    desc: "Designed for Western Australia's mining, energy, industrial services, and B2B markets. We build B2B SEO Perth and industrial marketing models for institutional contract acquisition."
  },
  {
    name: "Adelaide",
    slug: "australia/adelaide",
    desc: "Focused on Adelaide's manufacturing facilities, wine exporters, healthcare institutions, and educational centers. We modernize legacy tech stacks with custom React frontends."
  },
  {
    name: "Gold Coast",
    slug: "australia/gold-coast",
    desc: "Customized for Gold Coast's tourism complexes, hospitality brands, real estate developments, and lifestyle labels. We build fast, visually striking web designs that convert."
  },
  {
    name: "Canberra",
    slug: "australia/canberra",
    desc: "Serving Canberra's government departments, consulting practices, technology startups, and professional services. We construct secure, compliant, and accessible Next.js systems."
  }
];

const faqItems = [
  {
    q: "What makes Digipeak a premium Digital Marketing Agency in Australia?",
    category: "Agency",
    a: "Digipeak operates at the intersection of high-performance web engineering and organic search acquisition. We reject generic WordPress builders and standard marketing packages. Instead, we construct custom Next.js frontends, implement technical schema databases, run highly targeted Google Ads campaigns, and configure automated workflows that turn traffic into qualified pipeline revenue."
  },
  {
    q: "Why is page speed critical for search engine optimization in Australia?",
    category: "SEO",
    a: "Google uses Core Web Vitals as a direct ranking signal. Slow websites lose customers and drop in indexing positions. By building websites on headless Next.js frameworks and styling with clean Tailwind CSS, we guarantee sub-second page loads. This performance advantage directly supports our search engine optimization (SEO) campaigns, giving your site an organic ranking edge."
  },
  {
    q: "Do you provide AI business automation services for Australian companies?",
    category: "AI",
    a: "Yes, we are a leading AI automation agency and consulting partner. We integrate large language models (LLMs), build custom client onboarding databases, configure automated lead routing webhook triggers, and deploy customer support chat interfaces to reduce operational administration costs and scale B2B capabilities."
  },
  {
    q: "How does your PPC agency manage paid acquisition campaigns?",
    category: "PPC",
    a: "As an experienced PPC agency in Australia, we manage high-intent search campaigns across Google Ads and LinkedIn. We draft intent-focused ad copy, execute strict keyword matching, design optimized landing pages, and connect form events directly to your CRM to track CPA (cost-per-acquisition) and maximize campaign ROAS."
  },
  {
    q: "Can you build custom ecommerce storefronts for Australian brands?",
    category: "Ecommerce",
    a: "Certainly. We develop high-speed headless ecommerce setups connected to Next.js or configure standard Shopify theme setups. We focus on minimizing checkout friction, indexing product catalogs efficiently, and automating post-purchase email flows to maximize average order value (AOV) and customer lifetime value."
  }
];

export default function AustraliaHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/locations/australia/#webpage",
        "url": "https://www.digipeak.agency/locations/australia",
        "name": "Digital Marketing Agency Australia | SEO, AI Automation, PPC & Web Design",
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
        "description": "Premium B2B Digital Marketing Agency, SEO Company, and Web Design Company specializing in search engine optimization, paid advertising, and Next.js site development.",
        "foundingDate": "2022-01-01",
        "founder": {
          "@type": "Person",
          "@id": "https://www.digipeak.agency/author/sajadh-ahmed/#person",
          "name": "Sajadh Ahmed",
          "jobTitle": "Founder & Director",
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
        "image": "https://www.digipeak.agency/og-australia.jpg",
        "url": "https://www.digipeak.agency/locations/australia",
        "description": "Premium digital growth, B2B web design, and search engine optimization partner serving Australian commercial markets.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "AU"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.digipeak.agency/locations/australia/#service",
        "name": "B2B Digital Marketing & Web Engineering Services",
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": "AU"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.digipeak.agency/locations/australia/#faq",
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
        id="australia-schema"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />
      <main className="bg-[#020203] text-white relative min-h-screen">
        
        {/* Background Ambient Glows */}
        <div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-900/10 rounded-full blur-[140px] pointer-events-none z-0" />
        <div className="absolute top-[30vh] right-1/4 w-[500px] h-[500px] bg-accent-primary/[0.015] rounded-full blur-[120px] pointer-events-none z-0" />
        <div className="absolute bottom-[20vh] left-10 w-[700px] h-[700px] bg-accent-secondary/[0.015] rounded-full blur-[160px] pointer-events-none z-0" />

        {/* 1. Hero Section */}
        <LocationHero
          badgeText="Australia Digital Hub"
          titlePrimary="B2B Growth Engineering"
          titleGradient="Across Australia"
          description="Digipeak is a specialized digital marketing agency, SEO company, and web design partner serving the Australian market. We combine custom React development, technical SEO, performance paid media, and CRM automation to construct predictable, scalable acquisition pipelines."
          primaryCtaText="Get Proposal"
          primaryCtaLink="/contact?location=australia"
        />

        {/* 2. City Hub Portals Grid */}
        <section id="metro-hubs" className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 relative z-10">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
                Australian Metro Hubs
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                Select Your Regional <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Growth Portal.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Choose your specific metropolitan hub to access localized technical strategies, regional competitor insights, and target B2B frameworks.
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {cities.map((city) => (
                <Link
                  key={city.slug}
                  href={`/locations/${city.slug}`}
                  className="glass p-8 rounded-3xl border border-white/10 flex flex-col justify-between hover:border-accent-primary/40 hover:bg-white/5 hover:-translate-y-0.5 transition-all duration-300 group"
                >
                  <div>
                    <div className="h-12 w-12 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-center mb-6 group-hover:bg-accent-primary/[0.03] group-hover:border-accent-primary/25 transition-all duration-300">
                      <MapPin className="w-5 h-5 text-slate-400 group-hover:text-accent-primary transition-colors" />
                    </div>
                    <h3 className="font-heading text-2xl font-bold text-white mb-3 tracking-tight">
                      {city.name} Hub
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed mb-6 font-light">
                      {city.desc}
                    </p>
                  </div>
                  <div className="flex items-center gap-2 text-xs font-mono font-bold uppercase tracking-wider text-accent-primary group-hover:text-white transition-colors">
                    Explore {city.name} Services
                    <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </section>

        {/* 3. Detailed Consultative B2B Copy - Section A */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent relative z-10">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-6">
              Core Philosophy
            </span>
            <h2 className="font-heading text-3xl md:text-4.5xl font-bold tracking-tight text-white mb-8 leading-tight">
              Moving Beyond Generic Templates: The Digipeak Approach to the Australian Market
            </h2>
            <div className="space-y-6 text-slate-300 text-[15px] leading-relaxed font-light">
              <p>
                In today&apos;s digital economy, simply building a generic website and running superficial ad campaigns is no longer sufficient to secure a market-leading position. Australian businesses operate in an exceptionally competitive space, where rising paid client acquisition costs and complex search engine algorithm updates demand a highly technical, strategic approach. At Digipeak, we operate as a specialized **Digital Marketing Agency Australia**, aligning software engineering with search marketing to deliver predictable, compounding pipeline growth.
              </p>
              <p>
                Whether your organization is a financial enterprise located in the Sydney CBD, a high-growth startup based in Melbourne&apos;s creative hubs, or a B2B mining supplier out of Perth, your web assets must load instantly, secure your data, and convert high-value prospects. That is why we avoid template builders like WordPress or generic layouts. We design custom Next.js and Tailwind CSS platforms, build deep topical authority through advanced search engine optimization, and implement business automation to reduce admin costs and scale your operations.
              </p>
              <p>
                Our capability as an **AI Marketing Agency Australia** enables us to integrate machine-learning pipelines into traditional acquisition funnels. We utilize custom LLMs, configure lead scoring databases, build automated calendar booking widgets, and deploy customer support chat interfaces. This ensures your sales channels are active 24/7, capturing and qualifying prospects without manual intervention, while maintaining absolute compliance with local regulatory guidelines.
              </p>
            </div>
          </div>
        </section>

        {/* 4. Service Coverage Sections: Covering 13 Services */}
        <section id="services-coverage" className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-white/[0.003] relative z-10">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16 md:mb-24">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-secondary/30 bg-accent-secondary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-secondary uppercase mb-6">
                Comprehensive Capability Matrix
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                B2B Digital Capabilities Engineered for Scale
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Explore the 13 required channels we deploy to establish authority, drive traffic, and automate operations for Australian brands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Search Engine Optimization",
                  keyword: "SEO Agency Australia",
                  desc: "We build organic authority by managing technical crawls, structuring entity schema trees, and targeting high-intent commercial keywords that place your brand at the top of Google searches."
                },
                {
                  title: "Pay-Per-Click Management",
                  keyword: "PPC Agency Australia",
                  desc: "ROI-focused Google Search, Display, and LinkedIn campaigns structured with negative match filtering, bid optimization, and custom landing page experiences to lower cost-per-acquisition (CPA)."
                },
                {
                  title: "Web Design Services",
                  keyword: "Web Design Company Australia",
                  desc: "Bespoke, visual layouts engineered with modern typography, dark theme aesthetics, and responsive grids that represent corporate prestige and maximize conversion rates."
                },
                {
                  title: "Headless Web Development",
                  keyword: "Next.js Web Development",
                  desc: "We write clean, server-rendered code using Next.js and React, decoupling the front-end display from the database. This guarantees sub-second loading speeds and absolute security."
                },
                {
                  title: "AI Business Automation",
                  keyword: "AI Automation Agency Australia",
                  desc: "Eliminate manual database updates. We connect form submissions directly to backend systems via webhooks, automated triage scripts, and custom notification systems."
                },
                {
                  title: "AI Consulting Services",
                  keyword: "AI Solutions & Integrations",
                  desc: "We audit your team's manual operations, design custom generative pipelines, integrate local LLM structures, and map secure, compliant AI systems that save hours of manual labor."
                },
                {
                  title: "Corporate Branding & Creative",
                  keyword: "Branding Agency Australia",
                  desc: "Cohesive corporate identity design, brand styling, typography mapping, logo assets, and visual guidelines that communicate authority and reliability to institutional clients."
                },
                {
                  title: "Social Media Marketing",
                  keyword: "Performance Social Media",
                  desc: "Targeted campaigns across LinkedIn, Meta, and YouTube to build active community engagement, manage retargeting funnels, and capture top-of-mind sector authority."
                },
                {
                  title: "EEAT Content Marketing",
                  keyword: "Content Marketing Agency",
                  desc: "We draft authoritative, semantically rich articles, technical playbooks, and local business checklists that resolve user queries and build compounding organic search value."
                },
                {
                  title: "Automated Email Marketing",
                  keyword: "Email Lifecycle Sequences",
                  desc: "High-deliverability post-inquiry followups, client onboarding communications, and behavior-triggered marketing newsletters designed to nurture prospects and build long-term retention."
                },
                {
                  title: "CRM Automation Mapping",
                  keyword: "CRM Integration Services",
                  desc: "Seamless synchronization with HubSpot, Salesforce, or Zoho API endpoints to ensure every website lead is immediately scored, routed, and notified without delay."
                },
                {
                  title: "B2B Lead Generation",
                  keyword: "Lead Acquisition Pipelines",
                  desc: "Targeted lead magnets, multi-step contact forms, honeypot spam protection, and automated scoring algorithms to deliver qualified sales meetings."
                },
                {
                  title: "Ecommerce Growth Systems",
                  keyword: "Ecommerce Agency Australia",
                  desc: "Speed-optimized catalog page layouts, headless Shopify checkout integrations, shopping cart abandonment sequences, and search setups to scale digital transaction volumes."
                }
              ].map((item, idx) => (
                <div key={idx} className="glass p-8 rounded-3xl border border-white/5 hover:border-accent-primary/20 hover:bg-white/[0.01] transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className="flex justify-between items-start mb-6">
                      <span className="font-mono text-xs font-bold text-accent-primary uppercase tracking-widest bg-accent-primary/5 border border-accent-primary/20 px-3 py-1 rounded-full">
                        {item.keyword}
                      </span>
                      <span className="font-mono text-xs text-slate-400 font-bold group-hover:text-accent-secondary transition-colors">
                        0{idx + 1}
                      </span>
                    </div>
                    <h3 className="font-heading text-xl font-bold text-white mb-3 group-hover:text-accent-primary transition-colors">
                      {item.title}
                    </h3>
                    <p className="text-xs text-slate-400 leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 5. Detailed Consultative B2B Copy - Section B */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent relative z-10">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-6">
              Market Authority
            </span>
            <h2 className="font-heading text-3xl md:text-4.5xl font-bold tracking-tight text-white mb-8 leading-tight">
              Integrating Search Dominance with Custom Automation Systems
            </h2>
            <div className="space-y-6 text-slate-300 text-[15px] leading-relaxed font-light">
              <p>
                Organic search is the highest-yielding channel for sustainable B2B customer acquisition. When search engine bots crawl your domain, they evaluate ranking signals like site architecture, entity mappings, secure hosting parameters, and page responsiveness. As an expert **SEO Agency Australia**, we configure structural JSON-LD schemas, resolve crawl bottlenecks, and remove redirect loops. This helps search engine algorithms understand your local relevance across Sydney, Melbourne, Brisbane, and Perth.
              </p>
              <p>
                However, driving organic traffic is only half the battle. If a website loads slowly or relies on generic templates, visitors bounce. We solve this by implementing custom web design services, keeping front-end assets fast and lightweight. We remove unnecessary third-party scripts (such as legacy booking trackers) and replace them with native, timezone-detecting booking applications. This streamlines client scheduling and improves site performance.
              </p>
              <p>
                By connecting these speed-optimized landing pages with CRM systems and AI workflows, we help your business capture leads in seconds. When a prospect submits an inquiry near Canberra, Brisbane, or Adelaide, our database webhooks instantly process the brief, score the opportunity, update your sales pipeline, and trigger an automated email sequence. This reduces response time to seconds, which significantly improves conversion rates.
              </p>
            </div>
          </div>
        </section>

        {/* 6. FAQ Accordion Section */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-black border-b border-white/5 relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
                <HelpIcon className="w-3.5 h-3.5" />
                Australia B2B FAQ
              </div>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                Frequently Asked Questions
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Answers regarding our web engineering, search engine optimization, and custom business automation services.
              </p>
            </div>

            <div className="space-y-4 max-w-3xl mx-auto">
              {faqItems.map((item, idx) => (
                <div key={idx} className="glass border border-white/5 rounded-2xl p-6.5 hover:border-white/10 transition-all">
                  <h3 className="font-heading font-bold text-base md:text-lg text-white mb-2 flex gap-3">
                    <span className="text-accent-primary">Q:</span>
                    {item.q}
                  </h3>
                  <p className="text-xs md:text-sm text-slate-400 leading-relaxed pl-6 font-light">
                    {item.a}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. SaaS Style Conversion Widget */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-[radial-gradient(circle_at_bottom,rgba(131,21,113,0.08)_0%,transparent_60%)] border-b border-white/5 relative overflow-hidden z-10">
          <div className="absolute top-[40%] left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-accent-primary/[0.015] rounded-full blur-[90px] pointer-events-none z-0" />
          
          <div className="mx-auto max-w-5xl glass p-12 md:p-20 rounded-3.5xl border border-white/10 relative z-10 text-center shadow-2xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
              Claim Your Free Strategy Session
            </span>
            <h2 className="font-heading text-3xl md:text-5xl lg:text-6xl font-bold tracking-tight text-white mb-6 leading-tight">
              Ready to Scale Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-purple-400 to-accent-secondary">Australian Presence?</span>
            </h2>
            <p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto leading-relaxed mb-12 font-light">
              Get a custom B2B marketing proposal, core web vitals diagnostic, and CRM integration map worth $1,500.
            </p>

            <div className="flex flex-wrap gap-4.5 justify-center items-center">
              <Link href="/contact?location=australia" className="btn-primary px-9 py-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 shadow-lg hover:scale-[1.02] transition-transform">
                <PhoneCall className="w-3.5 h-3.5" /> Book Strategy Call
              </Link>
              <Link href="/proposal" className="btn-secondary px-9 py-4 text-xs font-bold uppercase tracking-wider flex items-center gap-2 border-white/10 hover:border-white/20 bg-white/5 hover:scale-[1.02] transition-transform">
                Request Proposal
              </Link>
            </div>
            
            <div className="mt-12 pt-8 border-t border-white/5 flex justify-center items-center gap-8 text-[10px] font-mono text-slate-400 uppercase tracking-widest">
              <span>SLA Secure Data</span>
              <span className="w-1.5 h-1.5 bg-white/10 rounded-full" />
              <span>NDAs Enforced</span>
              <span className="w-1.5 h-1.5 bg-white/10 rounded-full" />
              <span>No Retainer Lock-in</span>
            </div>
          </div>
        </section>

        {/* 8. Cross-Linking Regional Hub Network */}
        <section className="py-16 md:py-24 px-6 bg-transparent relative z-10">
          <div className="mx-auto max-w-7xl">
            <h3 className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mb-8 text-center">
              Regional Authority Hub Network
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              
              {/* Coverage Silo */}
              <div className="glass p-6 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white text-sm mb-4 flex items-center gap-2">
                  <MapPin className="w-4 h-4 text-accent-primary" />
                  Service Coverage Hubs
                </h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-400">
                  <Link href="/locations/usa" className="hover:text-white transition-colors">USA Hub</Link>
                  <Link href="/locations/uae" className="hover:text-white transition-colors">UAE Hub</Link>
                  <Link href="/locations/qatar" className="hover:text-white transition-colors">Qatar Hub</Link>
                  <Link href="/locations/saudi-arabia" className="hover:text-white transition-colors">Saudi Arabia Hub</Link>
                  <Link href="/locations/singapore" className="hover:text-white transition-colors">Singapore Services</Link>
                  <Link href="/locations/sri-lanka" className="hover:text-white transition-colors">Sri Lanka Hub</Link>
                </div>
              </div>

              {/* Core Links */}
              <div className="glass p-6 rounded-2xl border border-white/5">
                <h4 className="font-bold text-white text-sm mb-4">
                  Quick Service Portals
                </h4>
                <div className="grid grid-cols-2 gap-2.5 text-xs text-slate-400">
                  <Link href="/seo-services" className="hover:text-white transition-colors">SEO Services</Link>
                  <Link href="/web-design-development" className="hover:text-white transition-colors">Web Design</Link>
                  <Link href="/digital-marketing" className="hover:text-white transition-colors">Digital Marketing</Link>
                  <Link href="/ai-solutions" className="hover:text-white transition-colors">AI Solutions</Link>
                  <Link href="/crm-automation" className="hover:text-white transition-colors">CRM Automation</Link>
                  <Link href="/contact" className="hover:text-white transition-colors">Contact Us</Link>
                </div>
              </div>

            </div>
          </div>
        </section>

        <div className="border-t border-white/5 relative z-10">
          <LeadGeneration />
        </div>
      </main>
    </>
  );
}
