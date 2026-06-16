"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Check, Users, Shield, Briefcase, Zap } from "lucide-react";

export interface PartnerProgramDetails {
  id: string;
  name: string;
  badge: string;
  description: string;
  forWho: string[];
  earningsModel: string;
  benefits: string[];
  link: string;
  ctaText: string;
  icon: any;
  highlighted?: boolean;
}

// Extensible registry of partnership models to satisfy the "Future Expansion" requirement
export const PARTNER_PROGRAMS: PartnerProgramDetails[] = [
  {
    id: "referral",
    name: "Referral Partner Program",
    badge: "Passive Commissions",
    description: "Ideal for professionals with an active business network who want to earn passive commission with zero delivery workload.",
    forWho: ["Freelancers", "Consultants", "Influencers", "Business Owners"],
    earningsModel: "Estimated 10% commission on client contract value.",
    benefits: [
      "No delivery or management involvement",
      "Dedicated tracking dashboard links",
      "Automated monthly payments",
      "No technical requirements"
    ],
    link: "/partners/referral-partner",
    ctaText: "Become A Partner",
    icon: Users,
  },
  {
    id: "white-label",
    name: "White Label Partnership",
    badge: "Silent Fulfillment Backend",
    description: "Designed for agencies looking to scale their digital delivery capabilities instantly without hiring full-time developers or SEO staff.",
    forWho: ["Agencies", "Studios", "Marketing Companies"],
    earningsModel: "Fixed wholesale agency rates. Keep 100% of your markups.",
    benefits: [
      "100% silent fulfillment (NDA guaranteed)",
      "15 core services executed by specialists",
      "Direct communication via client managers",
      "Scale up or down on demand"
    ],
    link: "/partners/white-label-agency",
    ctaText: "Scale Your Agency",
    icon: Shield,
    highlighted: true,
  },
  {
    id: "reseller",
    name: "Reseller Partnership",
    badge: "Profitable Margin System",
    description: "Best for consultants, growth advisors, and sales teams who want to pitch complete digital transformations and retain recurring margins.",
    forWho: ["Sales Teams", "Consultants", "Growth Advisors", "Freelancers"],
    earningsModel: "Purchase packages at discounted reseller rates and bill clients directly.",
    benefits: [
      "Set your own pricing models",
      "Calculated live estimator guides",
      "Sales support templates & scopes",
      "Branded collateral templates"
    ],
    link: "/partners/reseller-program",
    ctaText: "Become A Reseller",
    icon: Briefcase,
  }
];

export function PartnerComparison() {
  return (
    <section id="partner-comparison-section" className="py-12 md:py-20 lg:py-24 px-6 relative z-10 bg-black border-t border-white/5 scroll-mt-28">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Compare tracks</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            Choose Your Partnership Model
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            Find the right alignment that fits your audience, delivery resources, and revenue target goals.
          </p>
        </div>

        {/* Responsive Grid - Cards stack vertically on mobile, layout matches design system */}
        <div className="grid grid-cols-1 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {PARTNER_PROGRAMS.map((program, idx) => {
            const Icon = program.icon;
            return (
              <motion.div
                key={program.id}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`relative flex flex-col justify-between rounded-3xl p-8 border transition-all duration-300 ${
                  program.highlighted
                    ? "bg-indigo-950/10 border-indigo-500/40 shadow-[0_0_30px_rgba(99,102,241,0.08)]"
                    : "bg-white/[0.01] border-white/10 hover:border-white/20"
                }`}
              >
                {program.highlighted && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 bg-gradient-to-r from-indigo-500 to-purple-500 text-white font-mono text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wider flex items-center gap-1">
                    <Zap className="w-3 h-3 fill-current" /> Most Scalable
                  </div>
                )}

                <div>
                  {/* Badge & Icon */}
                  <div className="flex justify-between items-start mb-6">
                    <span className={`text-[10px] font-bold uppercase tracking-wider font-mono px-2.5 py-1 rounded-md ${
                      program.highlighted
                        ? "bg-indigo-500/20 text-indigo-300 border border-indigo-500/20"
                        : "bg-white/5 text-muted border border-white/5"
                    }`}>
                      {program.badge}
                    </span>
                    <div className={`w-10 h-10 rounded-xl flex items-center justify-center border ${
                      program.highlighted
                        ? "bg-indigo-500/10 border-indigo-500/20 text-indigo-400"
                        : "bg-white/5 border-white/10 text-muted"
                    }`}>
                      <Icon className="w-5 h-5" />
                    </div>
                  </div>

                  {/* Title & Desc */}
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white mb-3">
                    {program.name}
                  </h3>
                  <p className="text-xs text-muted leading-relaxed mb-6">
                    {program.description}
                  </p>

                  {/* Target Audience List */}
                  <div className="mb-6 border-t border-white/5 pt-5">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest font-mono block mb-3">
                      Best Suited For:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {program.forWho.map((item) => (
                        <span
                          key={item}
                          className="text-[10px] bg-white/[0.03] border border-white/5 text-foreground px-2 py-0.5 rounded-full font-medium"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Earnings Model */}
                  <div className="mb-6 bg-white/[0.02] border border-white/5 rounded-2xl p-4.5">
                    <span className="text-[10px] font-bold text-muted uppercase tracking-widest font-mono block mb-1">
                      Earnings Model:
                    </span>
                    <p className="text-xs font-semibold text-white">
                      {program.earningsModel}
                    </p>
                  </div>

                  {/* Benefits checklist */}
                  <div className="space-y-3.5 mb-8">
                    {program.benefits.map((benefit) => (
                      <div key={benefit} className="flex items-start gap-2.5">
                        <Check className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                        <span className="text-xs text-muted leading-relaxed">
                          {benefit}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* CTA Link */}
                <Link
                  href={program.link}
                  className={`w-full flex items-center justify-center gap-2 py-3.5 rounded-xl text-sm font-semibold transition-all duration-300 ${
                    program.highlighted
                      ? "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/20"
                      : "bg-white/5 hover:bg-white/10 text-white border border-white/10"
                  }`}
                >
                  {program.ctaText}
                  <ArrowRight className="w-4 h-4" />
                </Link>
              </motion.div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
