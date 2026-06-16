"use client";

import { motion } from "framer-motion";
import { TrendingUp, Award, Search, Users, Sparkles, Heart, LineChart, FileText } from "lucide-react";

const benefits = [
  { 
    title: "Increase Organic Traffic", 
    desc: "By creating helpful, optimized articles that address specific search questions, we drive massive, continuous streams of free organic visitors.", 
    icon: TrendingUp 
  },
  { 
    title: "Improve Search Rankings", 
    desc: "Search engines reward deep, semantic, and well-researched topic coverage, pushing your entire website higher in organic index listings.", 
    icon: Search 
  },
  { 
    title: "Build Industry Authority", 
    desc: "Thought leadership articles and in-depth guides show prospective clients that you possess complete mastery over your business domain.", 
    icon: Award 
  },
  { 
    title: "Generate Qualified Leads", 
    desc: "Targeted landing pages and middle-of-funnel downloads filter incoming traffic to capture leads that possess genuine intent to buy.", 
    icon: Users 
  },
  { 
    title: "Support SEO Growth", 
    desc: "High-quality, authoritative copy naturally attracts backlinks and internal links, compounding the overall domain authority of your portal.", 
    icon: Sparkles 
  },
  { 
    title: "Increase Brand Trust", 
    desc: "When customers find free, actionable, and accurate solutions on your blog, they build a deep emotional relationship of trust with your brand.", 
    icon: Heart 
  },
  { 
    title: "Improve Conversion Rates", 
    desc: "Copywriting designed with client psychology in mind establishes immediate value, reduces purchasing hesitation, and urges users to act.", 
    icon: LineChart 
  },
  { 
    title: "Create Long-Term Assets", 
    desc: "Unlike paid advertising which stops driving visitors the minute budgets run dry, evergreen content acts as an asset that yields traffic for years.", 
    icon: FileText 
  },
];

export function WhyContentMatters() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Why Content Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">Matters.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Content is the atomic particle of all digital marketing. From search indexes to conversion funnels, authoritative copy builds authority and compounds revenue.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 4) * 0.08 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-amber-500/30 transition-colors group flex flex-col items-center text-center"
            >
              <div className="mb-5 h-12 w-12 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-amber-500/20 transition-all duration-300">
                <benefit.icon className="h-6 w-6 text-amber-400" />
              </div>
              <h3 className="font-bold text-foreground mb-2.5 text-base text-white">{benefit.title}</h3>
              <p className="text-xs text-muted leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
