import type { Metadata } from "next";
import Link from "next/link";
import { Code2, Zap, ArrowRight, Sparkles } from "lucide-react";

export const metadata: Metadata = {
  title: "B2B Lead Generation & SEO Growth Tools | Digipeak Agency",
  description:
    "Utilize our free, professional tools to audit Core Web Vitals, measure Largest Contentful Paint speeds, and build error-free JSON-LD schema markups.",
  alternates: {
    canonical: "https://www.digipeak.agency/tools",
  },
};

export default function ToolsHubPage() {
  const tools = [
    {
      title: "B2B Schema Markup Generator",
      description:
        "Generate valid JSON-LD schema markup code for Organizations, Persons, FAQs, and Breadcrumbs to command rich search snippets.",
      href: "/tools/schema-generator",
      icon: Code2,
      tag: "SEO Authority",
      color: "from-accent-primary to-accent-glow",
    },
    {
      title: "LCP & Page Speed Auditor",
      description:
        "Audit Largest Contentful Paint, analyze render-blocking scripts, and inspect web vitals dynamically to achieve sub-1.2s loads.",
      href: "/tools/page-speed-auditor",
      icon: Zap,
      tag: "Web Performance",
      color: "from-accent-secondary to-accent-glow",
    },
    {
      title: "B2B Revenue & ROI Forecaster",
      description:
        "Model 12-month traffic, lead, and revenue scaling paths with custom ad budgets and ACV to forecast sales pipelines.",
      href: "/tools/revenue-forecaster",
      icon: Sparkles,
      tag: "Growth Modeling",
      color: "from-accent-primary to-accent-glow",
    },
  ];

  return (
    <div className="relative min-h-screen bg-[#020203] text-white pt-32 pb-24 px-6 overflow-hidden">
      {/* Background orbs */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-[20%] left-1/4 w-[600px] h-[600px] bg-accent-primary/[0.015] rounded-full blur-[140px]" />
        <div className="absolute bottom-[20%] right-1/4 w-[500px] h-[500px] bg-accent-secondary/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 max-w-5xl mx-auto space-y-16">
        
        {/* Header section */}
        <div className="text-center max-w-3xl mx-auto space-y-6">
          <div className="inline-flex items-center gap-2 rounded-full border border-accent-primary/30 bg-accent-primary/[0.03] px-4 py-1.5 text-xs font-semibold text-accent-primary">
            <Sparkles className="w-3.5 h-3.5" />
            Performance &amp; SEO Tools
          </div>
          <h1 className="font-heading text-3xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-black tracking-tight leading-tight">
            B2B Growth <span className="text-gradient-primary">Engines</span>
          </h1>
          <p className="text-muted text-base md:text-lg leading-relaxed">
            Free, highly technical B2B tools engineered to diagnose core web vital blocks, validate structure mappings, and scale search rankings.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl mx-auto">
          {tools.map((t) => (
            <div 
              key={t.title} 
              className="glass border border-white/5 rounded-3xl p-8 relative overflow-hidden group hover:border-accent-primary/20 transition-all duration-300 flex flex-col justify-between"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent pointer-events-none" />
              
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${t.color} flex items-center justify-center text-white shadow-[0_0_20px_rgba(168,85,247,0.2)]`}>
                    <t.icon className="w-6 h-6" />
                  </div>
                  <span className="px-3 py-1 bg-white/5 border border-white/10 rounded-full text-[10px] uppercase font-bold tracking-wider text-muted">
                    {t.tag}
                  </span>
                </div>

                <div className="space-y-2">
                  <h3 className="font-heading text-2xl font-bold text-white group-hover:text-accent-primary transition-colors">
                    {t.title}
                  </h3>
                  <p className="text-muted text-sm leading-relaxed">
                    {t.description}
                  </p>
                </div>
              </div>

              <div className="pt-8 border-t border-white/5 mt-8 flex items-center justify-between">
                <span className="text-xs text-muted">Launch Web Tool</span>
                <Link
                  href={t.href}
                  className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/5 border border-white/10 group-hover:border-accent-primary group-hover:bg-accent-primary text-white transition-all"
                >
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-0.5 transition-transform" />
                </Link>
              </div>
            </div>
          ))}
        </div>

      </div>
    </div>
  );
}
