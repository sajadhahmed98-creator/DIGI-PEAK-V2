import type { Metadata } from "next";
import Script from "next/script";
import Link from "next/link";
import { 
  MapPin, ChevronRight, CheckCircle2, Star, Shield, HelpCircle, 
  Briefcase, FileText, ArrowRight, BarChart, Users, Laptop, Globe,
  ShieldCheck, ArrowUpRight, TrendingUp, Zap, HelpCircle as HelpIcon, Cpu
} from "lucide-react";
import { LocationHero } from "@/components/shared/LocationHero";
import { LeadGeneration } from "@/components/home/LeadGeneration";

export const metadata: Metadata = {
  title: "Digital Marketing Agency USA | SEO, PPC & Web Design Services",
  description: "Digipeak helps businesses across the United States grow through SEO, PPC, web design, local SEO, and content marketing strategies focused on measurable business growth.",
  keywords: [
    "Digital Marketing Agency USA", "SEO Agency USA", "Web Design Company USA",
    "PPC Agency USA", "Local SEO Services USA", "B2B Lead Generation USA",
    "Next.js Web Development USA", "Enterprise Search Engine Optimization"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/locations/usa',
  },
  openGraph: {
    title: "Digital Marketing Agency USA | SEO, PPC & Web Design Services",
    description: "Digipeak helps businesses across the United States grow through SEO, PPC, web design, local SEO, and content marketing strategies focused on measurable business growth.",
    url: "https://www.digipeak.agency/locations/usa",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency USA | SEO, PPC & Web Design Services",
    description: "Digipeak helps businesses across the United States grow through SEO, PPC, web design, local SEO, and content marketing strategies focused on measurable business growth.",
  }
};

const cities = [
  {
    name: "Austin",
    slug: "austin",
    desc: "The SaaS and technology epicentre of Texas. We build custom search optimization models and high-performance Web design setups for high-growth tech platforms and local healthcare systems."
  },
  {
    name: "San Diego",
    slug: "san-diego",
    desc: "A highly competitive B2B biotech, SaaS, and coastal tourism market. Digipeak engineers localized search intent maps and conversion-optimized web designs to stand out."
  },
  {
    name: "Dallas",
    slug: "dallas",
    desc: "A massive business gateway. We build enterprise-grade local SEO keyword mappings and CRM automation integrations for Dallas real estate and logistics companies."
  },
  {
    name: "Houston",
    slug: "houston",
    desc: "A diverse market driven by energy, legal, and healthcare. Digipeak builds high-speed digital marketing funnels and authority content mapping to capture local business leads."
  },
  {
    name: "Miami",
    slug: "miami",
    desc: "The fast-growing capital of trade, tourism, and real estate. We structure bilingual local search setups and creative brand identity maps to lock down market share."
  },
  {
    name: "Chicago",
    slug: "chicago",
    desc: "A powerhouse for logistics, finance, and industrial enterprises. Our custom search engine optimization frameworks capture commercial-intent search queries."
  },
  {
    name: "New York",
    slug: "new-york",
    desc: "The global hub of finance and professional services. Digipeak designs ultra-fast, sub-second headless websites and authority content strategies to outperform."
  },
  {
    name: "Los Angeles",
    slug: "los-angeles",
    desc: "The creative capital of media, entertainment, and e-commerce. We build visual brand assets and high-converting paid ad campaigns that command attention."
  },
  {
    name: "San Francisco",
    slug: "san-francisco",
    desc: "The epicentre of venture capital, software, and biotech. We design and scale Next.js platforms and local search maps built for enterprise acquisition."
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
        "description": "Premium Digital Growth Agency specializing in Website Design, SEO, Branding, AI Automation, CRM Systems, Digital Marketing, and Lead Generation.",
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
        "mainEntity": [
          {
            "@type": "Question",
            "name": "What digital marketing services does Digipeak offer in the USA?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Digipeak offers a comprehensive suite of digital marketing services across the USA, including search engine optimization (SEO), pay-per-click (PPC) advertising management, custom web design and headless development, local SEO strategies, and authority content marketing. All campaigns are mapped to specific business objectives, focused on lead generation and revenue expansion."
            }
          },
          {
            "@type": "Question",
            "name": "How does Digipeak structure its USA client coordination?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Client communication is structured entirely through high-speed, secure remote workspaces. We utilize Slack channels for daily syncs, Notion dashboards for project tracking, and Zoom or Google Meet for monthly strategic reviews. This allows us to serve enterprise and growth-stage brands across all US time zones with absolute efficiency."
            }
          },
          {
            "@type": "Question",
            "name": "Why does Digipeak emphasize headless web design for US businesses?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "Headless web architectures (using frameworks like Next.js and React) decouple the frontend visual layer from the backend database. This yields sub-second loading speeds, absolute security, and superior Core Web Vitals. For US businesses facing highly competitive digital spaces, headless setups drive higher conversion rates and outperform traditional legacy CMS setups in search rankings."
            }
          },
          {
            "@type": "Question",
            "name": "How long does it take to see results from a local SEO campaign?",
            "acceptedAnswer": {
              "@type": "Answer",
              "text": "While immediate technical crawling enhancements and indexation fixes occur within the first 30 days, sustainable organic keyword authority and local map-pack positioning typically take 3 to 6 months. Timeline variables depend on competitor density, site authority, and the complexity of local search query clusters in your metropolitan area."
            }
          }
        ]
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
          badgeText="USA Strategic Hub"
          titlePrimary="Scale Your USA Business"
          titleGradient="Through Search & Web"
          description="Digipeak delivers high-performance search engine optimization, headless web design, and conversion-focused paid campaigns for enterprises and fast-growing brands across the United States. We build authority that ranks, attracts qualified traffic, and converts."
          primaryCtaText="Get Custom Proposal"
          primaryCtaLink="/proposal"
        />

        {/* 2. Why Businesses Across America Choose Digipeak */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent">
          <div className="mx-auto max-w-7xl">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
              <div className="lg:col-span-5 space-y-6">
                <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase">
                  Proven Strategic Differentiators
                </span>
                <h2 className="font-heading text-3xl md:text-3xl lg:text-4xl font-bold tracking-tight text-white leading-tight">
                  Engineering USA Digital Dominance Without Fake Offices or Shortcuts.
                </h2>
                <p className="text-muted text-base md:text-lg leading-relaxed">
                  In a saturated agency market, Digipeak stands out by rejecting standard templates and artificial local business schemas. We do not set up virtual mailboxes or rent empty offices to manipulate local search results. Instead, we build real, authoritative geographic setups.
                </p>
                <p className="text-muted text-sm md:text-base leading-relaxed">
                  Our team leverages modern, headless Next.js platforms, data-grounded SEO frameworks, and transparent reporting systems. We operate as an integrated digital growth partner, coordinating seamlessly across US time zones to deliver measurable ROI.
                </p>
              </div>

              <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-6">
                {[
                  {
                    title: "Headless Web Performance",
                    desc: "We build Next.js frontends that load in under 1 second. Fast sites rank higher on search engines and convert visitors into active leads at a significantly higher rate."
                  },
                  {
                    title: "Semantic Content Optimization",
                    desc: "We build authoritative topical relevance clusters. By focusing on search intent instead of raw keyword density, our content assets remain highly visible through core search updates."
                  },
                  {
                    title: "Transparent Funnel Analytics",
                    desc: "No vanity reporting. We track actual phone calls, completed forms, booked calls, and CRM pipeline changes, ensuring complete alignment with your revenue goals."
                  },
                  {
                    title: "Compliant E-E-A-T Setup",
                    desc: "Every recommendation is backed by real, verified expertise. We adhere to search guidelines to build lasting organic trust that drives digital growth."
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
                Explore our core capabilities engineered to solve complex marketing problems and deliver predictable customer acquisition.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                {
                  title: "SEO Services",
                  desc: "Enterprise search engine optimization engineered to scale organic visibility. We run detailed technical audits, structure crawl paths, build semantic keyword maps, and construct authority content clusters. By aligning your website structure with search engine criteria, we target and secure top rankings for high-intent search queries that drive customer acquisition."
                },
                {
                  title: "PPC Management",
                  desc: "High-ROI paid advertising campaigns targeting Google Search, Google Display, LinkedIn, and Meta networks. We build custom landing page setups, write copy focused on user action, construct conversion tracking models, and manage bids using data-grounded metrics. We focus on optimizing cost-per-acquisition (CPA) to ensure profitable client acquisition."
                },
                {
                  title: "Web Design & Development",
                  desc: "Premium custom website design built using headless Next.js, React, and server-side components. We develop sub-second, fully responsive layouts that yield superior Core Web Vitals, bulletproof security, and seamless API integrations. Our sites are built from the ground up to convert visits into revenue, avoiding bloated templates."
                },
                {
                  title: "Local SEO",
                  desc: "Geographic search engine optimization for businesses targeting specific regional markets. We build localized schema setups, structure citation portfolios, and optimize Google Business Profile configurations. We target map-pack visibility and local search query clusters to connect your brand with regional customers ready to purchase."
                },
                {
                  title: "Content Marketing",
                  desc: "High-authority, search-optimized copywriting and B2B brand strategy. We draft deep-dive resource hubs, technical whitepapers, and targeted articles that answer real search intent. Our content systems establish topical authority, earn natural citations, and guide users smoothly through the sales funnel."
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
                  href={`/locations/usa/${city.slug}`}
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
                FAQ
              </span>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white">
                Frequently Asked <span className="text-gradient-primary">Questions.</span>
              </h2>
            </div>

            <div className="space-y-4">
              {[
                {
                  q: "What digital marketing services does Digipeak offer in the USA?",
                  a: "Digipeak offers a comprehensive suite of digital marketing services across the USA, including search engine optimization (SEO), pay-per-click (PPC) advertising management, custom web design and headless development, local SEO strategies, and authority content marketing. All campaigns are mapped to specific business objectives, focused on lead generation and revenue expansion."
                },
                {
                  q: "How does Digipeak structure its USA client coordination?",
                  a: "Client communication is structured entirely through high-speed, secure remote workspaces. We utilize Slack channels for daily syncs, Notion dashboards for project tracking, and Zoom or Google Meet for monthly strategic reviews. This allows us to serve enterprise and growth-stage brands across all US time zones with absolute efficiency."
                },
                {
                  q: "Why does Digipeak emphasize headless web design for US businesses?",
                  a: "Headless web architectures (using frameworks like Next.js and React) decouple the frontend visual layer from the backend database. This yields sub-second loading speeds, absolute security, and superior Core Web Vitals. For US businesses facing highly competitive digital spaces, headless setups drive higher conversion rates and outperform traditional legacy CMS setups in search rankings."
                },
                {
                  q: "How long does it take to see results from a local SEO campaign?",
                  a: "While immediate technical crawling enhancements and indexation fixes occur within the first 30 days, sustainable organic keyword authority and local map-pack positioning typically take 3 to 6 months. Timeline variables depend on competitor density, site authority, and the complexity of local search query clusters in your metropolitan area."
                }
              ].map((faq, idx) => (
                <div key={idx} className="glass p-6 md:p-8 rounded-2xl border border-white/10">
                  <h3 className="font-heading font-bold text-white text-base md:text-lg mb-3">
                    {faq.q}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed">
                    {faq.a}
                  </p>
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
