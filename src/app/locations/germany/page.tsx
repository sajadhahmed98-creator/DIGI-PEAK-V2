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
  title: "Digital Marketing Agency Germany | SEO, AI Automation, PPC & Web Design",
  description: "Digipeak helps businesses across Germany grow through SEO, AI automation, PPC management, web design, ecommerce growth, branding, and digital marketing services.",
  keywords: [
    "Digital Marketing Agency Germany", "SEO Agency Germany", "AI Automation Agency Germany",
    "Web Design Company Germany", "PPC Agency Germany", "AI Marketing Agency Germany",
    "B2B Growth Germany", "Headless Next.js Germany", "Germany Digital Growth"
  ],
  alternates: {
    canonical: 'https://www.digipeak.agency/locations/germany',
  },
  openGraph: {
    title: "Digital Marketing Agency Germany | SEO, AI Automation, PPC & Web Design",
    description: "Digipeak helps businesses across Germany grow through SEO, AI automation, PPC management, web design, ecommerce growth, branding, and digital marketing services.",
    url: "https://www.digipeak.agency/locations/germany",
    images: ["/og-image.jpg"],
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing Agency Germany | SEO, AI Automation, PPC & Web Design",
    description: "Digipeak helps businesses across Germany grow through SEO, AI automation, PPC management, web design, ecommerce growth, branding, and digital marketing services.",
  }
};

const cities = [
  {
    name: "Berlin",
    slug: "germany/berlin",
    desc: "Optimized for Berlin's startup ecosystem, SaaS scale-ups, and creative digital brands. We deploy tailored SaaS SEO Berlin and AI Automation Berlin systems."
  },
  {
    name: "Munich",
    slug: "germany/munich",
    desc: "Designed for Munich's enterprise technology, finance, and automotive firms. We build enterprise SEO Munich and professional B2B digital growth setups."
  },
  {
    name: "Frankfurt",
    slug: "germany/frankfurt",
    desc: "Tailored to Frankfurt's Bankenviertel banking sector, FinTech startups, and legal services. We engineer custom FinTech Marketing Frankfurt platforms."
  },
  {
    name: "Hamburg",
    slug: "germany/hamburg",
    desc: "Focused on Hamburg's logistics networks, maritime traders, and ecommerce brands. We construct speed-optimized Ecommerce SEO Hamburg funnels."
  },
  {
    name: "Cologne",
    slug: "germany/cologne",
    desc: "Serving Cologne's media corporations, retail brands, and creative technology startups. We deploy specialized SEO Cologne and branding programs."
  },
  {
    name: "Stuttgart",
    slug: "germany/stuttgart",
    desc: "Optimized for Baden-Württemberg automotive suppliers, heavy manufacturing, and engineering firms. We build B2B Marketing Stuttgart setups."
  },
  {
    name: "Düsseldorf",
    slug: "germany/dusseldorf",
    desc: "Customized for Düsseldorf's fashion headquarters, technology consultants, and finance practices. We structure custom SEO Düsseldorf services."
  },
  {
    name: "Leipzig",
    slug: "germany/leipzig",
    desc: "Supporting Leipzig's logistics networks, manufacturing operations, and growing tech startup scene. We run targeted Startup Marketing Leipzig."
  }
];

const faqItems = [
  {
    q: "What makes Digipeak a leading Digital Marketing Agency in Germany?",
    category: "Agency",
    a: "Digipeak operates at the intersection of advanced web engineering and search acquisition. We reject bloated CMS templates and standard marketing packages. Instead, we write custom server-rendered Next.js frontends, implement schema graphs, structure targeted Google Ads setups, and configure automated workflows to reduce administration costs and turn traffic into qualified pipeline value."
  },
  {
    q: "Why is page speed critical for search engine optimization (SEO) in Germany?",
    category: "SEO",
    a: "Google uses Core Web Vitals as a direct ranking signal. Slow websites lose customers and drop in indexing positions. By building websites on headless Next.js frameworks and styling with clean Tailwind CSS, we guarantee sub-second page loads. This performance advantage directly supports our search engine optimization (SEO) campaigns, giving your site an organic ranking edge."
  },
  {
    q: "Do you provide AI business automation services for German companies?",
    category: "AI",
    a: "Yes, we are a leading AI automation agency and consulting partner. We integrate large language models (LLMs), build custom client onboarding databases, configure automated lead routing webhook triggers, and deploy customer support chat interfaces to reduce operational administration costs and scale B2B capabilities."
  },
  {
    q: "How does your PPC agency manage paid acquisition campaigns?",
    category: "PPC",
    a: "As an experienced PPC agency in Germany, we manage high-intent search campaigns across Google Ads and LinkedIn. We draft intent-focused ad copy, execute strict keyword matching, design optimized landing pages, and connect form events directly to your CRM to track CPA (cost-per-acquisition) and maximize campaign ROAS."
  },
  {
    q: "Can you build custom ecommerce storefronts for German brands?",
    category: "Ecommerce",
    a: "Certainly. We develop high-speed headless ecommerce setups connected to Next.js or configure standard Shopify theme setups. We focus on minimizing checkout friction, indexing product catalogs efficiently, and automating post-purchase email flows to maximize average order value (AOV) and customer lifetime value."
  }
];

export default function GermanyLocationsHubPage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "WebPage",
        "@id": "https://www.digipeak.agency/locations/germany/#webpage",
        "url": "https://www.digipeak.agency/locations/germany",
        "name": "Digital Marketing Agency Germany | SEO, AI Automation, PPC & Web Design",
        "isPartOf": { "@id": "https://www.digipeak.agency/#website" },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "item": { "@id": "https://www.digipeak.agency/", "name": "Home" } },
          { "@type": "ListItem", "position": 2, "item": { "@id": "https://www.digipeak.agency/locations/", "name": "Locations" } },
          { "@type": "ListItem", "position": 3, "item": { "@id": "https://www.digipeak.agency/locations/germany/", "name": "Germany Services" } }
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
        "@id": "https://www.digipeak.agency/locations/germany/#localbusiness",
        "name": "Digipeak Agency Germany",
        "image": "https://www.digipeak.agency/og-image.jpg",
        "url": "https://www.digipeak.agency/locations/germany",
        "description": "Premium digital growth, B2B web design, and search engine optimization partner serving German commercial markets.",
        "address": {
          "@type": "PostalAddress",
          "addressCountry": "DE"
        }
      },
      {
        "@type": "Service",
        "@id": "https://www.digipeak.agency/locations/germany/#service",
        "name": "B2B Digital Marketing & Web Engineering Services",
        "provider": { "@id": "https://www.digipeak.agency/#organization" },
        "areaServed": "DE"
      },
      {
        "@type": "FAQPage",
        "@id": "https://www.digipeak.agency/locations/germany/#faq",
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
        id="germany-schema"
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
          badgeText="Germany Digital Hub"
          titlePrimary="B2B Growth Engineering"
          titleGradient="Across Germany"
          description="Digipeak is a specialized digital marketing agency, SEO company, and web design partner serving the German market. We combine custom React development, technical SEO, performance paid media, and CRM automation to construct predictable, scalable acquisition pipelines."
          primaryCtaText="Get Proposal"
          primaryCtaLink="/contact?location=germany"
        />

        {/* 2. City Hub Portals Grid */}
        <section id="metro-hubs" className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 relative z-10">
          <div className="mx-auto max-w-7xl">
            <div className="text-center mb-16 md:mb-20">
              <span className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-2 text-xs font-mono font-bold tracking-widest text-accent-primary uppercase mb-6">
                Germany Metro Hubs
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
              Moving Beyond Generic Templates: The Digipeak Approach to the German Market
            </h2>
            <div className="space-y-6 text-slate-300 text-[15px] leading-relaxed font-light">
              <p>
                In today&apos;s digital economy, simply building a generic website and running superficial ad campaigns is no longer sufficient to secure a market-leading position. German businesses operate in an exceptionally competitive space, where rising paid client acquisition costs and complex search engine algorithm updates demand a highly technical, strategic approach. At Digipeak, we operate as a specialized **Digital Marketing Agency Germany**, aligning software engineering with search marketing to deliver predictable, compounding pipeline growth.
              </p>
              <p>
                Whether your organization is an enterprise located in Munich, a high-growth tech platform based in Berlin, or an industrial manufacturer out of Stuttgart, your web assets must load instantly, secure your data, and convert high-value prospects. That is why we avoid template builders like WordPress or generic layouts. We design custom Next.js and Tailwind CSS platforms, build deep topical authority through advanced search engine optimization, and implement business automation to reduce admin costs and scale your operations.
              </p>
              <p>
                Our capability as an **AI Marketing Agency Germany** enables us to integrate machine-learning pipelines into traditional acquisition funnels. We utilize custom LLMs, configure lead scoring databases, build automated calendar booking widgets, and deploy customer support chat interfaces. This ensures your sales channels are active 24/7, capturing and qualifying prospects without manual intervention, while maintaining absolute compliance with local regulatory guidelines.
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
                Explore the channels we deploy to establish authority, drive traffic, and automate operations for German brands.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "Search Engine Optimization",
                  keyword: "SEO Agency Germany",
                  desc: "We go beyond keyword targeting. We optimize page structures, configure local business schemas, audit codebases, and establish high-authority backlinks to drive target organic search acquisition.",
                  icon: BarChart
                },
                {
                  title: "Next.js Web Design",
                  keyword: "Web Design Company Germany",
                  desc: "We code custom interfaces using React and Next.js, eliminating third-party plug-in dependencies. We prioritize responsive, clean visuals and security.",
                  icon: Laptop
                },
                {
                  title: "AI Business Automation",
                  keyword: "AI Automation Agency Germany",
                  desc: "We configure automated onboarding systems, sync forms with databases, connect webhook structures, and integrate AI chat models to lower administrative friction.",
                  icon: Cpu
                },
                {
                  title: "Pay-Per-Click Advertising",
                  keyword: "PPC Agency Germany",
                  desc: "We structure Google Search, LinkedIn, and Meta ad structures to target buyer intent. We deploy targeted ad copy, custom landing pages, and UTM conversion trackers.",
                  icon: TrendingUp
                },
                {
                  title: "AI Chatbot Systems",
                  keyword: "AI Lead Generation Agency Germany",
                  desc: "We construct custom chatbots connected to internal knowledge bases to qualify leads, handle frequent support issues, and capture prospect data 24/7.",
                  icon: Bot
                },
                {
                  title: "Shopify & Ecommerce Development",
                  keyword: "Ecommerce SEO Company Germany",
                  desc: "We build custom Shopify themes and headless ecommerce platforms that load instantly, streamline store search navigation, and maximize cart checkouts.",
                  icon: Globe
                }
              ].map((svc) => {
                const Icon = svc.icon;
                return (
                  <div 
                    key={svc.title}
                    className="glass p-8 md:p-10 rounded-3xl border border-white/5 flex flex-col justify-between hover:border-accent-primary/30 hover:bg-white/[0.01] transition-all duration-300 relative group"
                  >
                    <div>
                      <div className="h-12 w-12 rounded-xl bg-accent-primary/[0.03] flex items-center justify-center text-accent-primary border border-accent-primary/20 mb-6 group-hover:scale-105 transition-transform">
                        <Icon className="w-5 h-5" />
                      </div>
                      <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:text-accent-primary transition-colors">
                        {svc.title}
                      </h3>
                      <p className="font-mono text-[10px] text-accent-secondary uppercase tracking-widest mb-4">
                        {svc.keyword}
                      </p>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        {svc.desc}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* 5. Detailed Consultative B2B Copy - Section B */}
        <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-transparent relative z-10">
          <div className="mx-auto max-w-4xl">
            <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-6">
              Technical Strategy
            </span>
            <h2 className="font-heading text-3xl md:text-4.5xl font-bold tracking-tight text-white mb-8 leading-tight">
              Unlocking Organic Pipeline Growth: The Digipeak Search Engineering Method
            </h2>
            <div className="space-y-6 text-slate-300 text-[15px] leading-relaxed font-light">
              <p>
                Organic search remains the highest-converting B2B acquisition channel, but standard search practices often rely on volume metrics rather than bottom-line results. As a specialized **SEO Agency Germany**, we build strategies that target buyer search intents. We structure comprehensive keyword lists, optimize internal linking frameworks, and build technical schema markup that allows search crawlers to identify and index your core services immediately.
              </p>
              <p>
                A high-speed site architecture is essential for modern search marketing. By migrating your brand to decoupled, headless Next.js platforms, we eliminate page load friction. This directly supports your search engine positioning, as Google prioritizes fast, secure, and mobile-friendly websites. Our search campaigns help German firms build a compounding organic presence that drives qualified sales opportunities without recurring ad costs.
              </p>
              <p>
                Furthermore, we recognize that content must satisfy Google&apos;s helpful content guidelines. We write authoritative, well-researched copy that answers user intents comprehensively. We avoid automated content scrapers, ensuring your brand stands out to search engine algorithms and remains resilient against algorithmic updates.
              </p>
            </div>
          </div>
        </section>

        {/* 6. FAQ Section */}
        <section id="faq-hub" className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-b border-white/5 bg-white/[0.003] relative z-10">
          <div className="mx-auto max-w-4xl">
            <div className="text-center mb-16">
              <span className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs font-mono font-bold tracking-widest text-slate-400 uppercase mb-6">
                Common Questions
              </span>
              <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
                Frequently Answered <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">Queries.</span>
              </h2>
              <p className="text-slate-400 text-lg max-w-2xl mx-auto leading-relaxed font-light">
                Learn more about our development methodologies, custom pricing, SEO timeframes, and automation processes.
              </p>
            </div>

            <div className="space-y-6">
              {faqItems.map((item, index) => (
                <div 
                  key={index}
                  className="glass p-8 rounded-3xl border border-white/5 hover:border-white/10 transition-colors"
                >
                  <div className="flex gap-4 items-start">
                    <div className="h-8 w-8 rounded-lg bg-accent-primary/[0.03] border border-accent-primary/20 flex items-center justify-center text-accent-primary shrink-0">
                      <HelpIcon className="w-4 h-4" />
                    </div>
                    <div>
                      <h3 className="font-heading text-lg font-bold text-white mb-3">
                        {item.q}
                      </h3>
                      <p className="text-sm text-slate-400 leading-relaxed font-light">
                        {item.a}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* 7. Lead Generation CTA */}
        <LeadGeneration />

      </main>
    </>
  );
}
