"use client";

import { motion } from "framer-motion";
import { Shield, Heart, Award, Search, TrendingUp, MapPin, Users, Sparkles } from "lucide-react";

const benefits = [
  { 
    title: "Build Deep Trust", 
    desc: "Over 93% of online consumers read reviews before finalizing purchase decisions. Solid ratings establish immediate trust.", 
    icon: Shield 
  },
  { 
    title: "Protect Your Brand", 
    desc: "Proactively monitor customer mentions, intercept negative sentiment, and address issues before they impact brand safety.", 
    icon: Heart 
  },
  { 
    title: "Grow Market Authority", 
    desc: "A consistent flow of authentic positive reviews positions your brand as the industry-wide authority and preferred choice.", 
    icon: Award 
  },
  { 
    title: "Boost SEO Authority", 
    desc: "Search engine algorithms prioritize business listings with active, detailed user feedback, improving organic visibility.", 
    icon: Search 
  },
  { 
    title: "Increase Conversions", 
    desc: "Improving listings from 3 to 5 stars boosts customer conversion rates and website click-throughs by up to 35%.", 
    icon: TrendingUp 
  },
  { 
    title: "Local Map Dominance", 
    desc: "Active Google reviews and local citation monitoring helps you claim dominant placements in local map search packs.", 
    icon: MapPin 
  },
  { 
    title: "Compounding Social Proof", 
    desc: "Convert customer success stories, ratings, and testimonials into high-performing sales collateral and ads assets.", 
    icon: Users 
  },
  { 
    title: "Competitor Displacement", 
    desc: "Leverage highly superior ratings and positive user sentiment metrics to capture leads from local market rivals.", 
    icon: Sparkles 
  },
];

export function WhyReputationMatters() {
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
              Why Reputation Management <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">Matters.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Your reputation is your strongest sales tool. We engineer automated review campaigns, brand monitoring alerts, and trust widgets to secure digital authority.
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
