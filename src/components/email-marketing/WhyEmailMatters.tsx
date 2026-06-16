"use client";

import { motion } from "framer-motion";
import { TrendingUp, DollarSign, Target, Heart, Zap, Mail, Cpu, BarChart } from "lucide-react";

const benefits = [
  { 
    title: "High ROI Return", 
    desc: "Email marketing remains the highest converting channel, returning an average of $36 for every $1 spent.", 
    icon: TrendingUp 
  },
  { 
    title: "Predictable Revenue", 
    desc: "Own your subscriber database directly. Never rely on fluctuating search engine or social media algorithmic changes.", 
    icon: DollarSign 
  },
  { 
    title: "Lead Nurturing", 
    desc: "Seamlessly convert cold traffic and passive list signups into active paying customers through automated welcome campaigns.", 
    icon: Target 
  },
  { 
    title: "Customer Loyalty", 
    desc: "Drive consistent repeat purchases, reward brand loyalty, and build deep lifelong customer lifetime value (LTV).", 
    icon: Heart 
  },
  { 
    title: "Behavioral Triggers", 
    desc: "Leverage smart segmentation to trigger emails based on exact clicks, scrolls, signups, and transaction details.", 
    icon: Zap 
  },
  { 
    title: "High Open Rates", 
    desc: "Avoid the noise of public feeds. Speak directly to your users in their personal, professional email inbox environment.", 
    icon: Mail 
  },
  { 
    title: "Automated Workflows", 
    desc: "Set up behavioral automation funnels once to capture abandoned checkouts and qualify B2B leads 24/7.", 
    icon: Cpu 
  },
  { 
    title: "Attribution Data", 
    desc: "Measure conversion funnels, open rates, CTRs, and revenue attribution down to the exact recipient and cent.", 
    icon: BarChart 
  },
];

export function WhyEmailMatters() {
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
              Why Email Marketing <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-purple-500">Matters.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Email is the backbone of customer retention. We build optimized marketing funnels and automation triggers that nurture lists and drive predictable sales.
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
              className="glass p-6 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-colors group flex flex-col items-center text-center"
            >
              <div className="mb-5 h-12 w-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                <benefit.icon className="h-6 w-6 text-indigo-400" />
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
