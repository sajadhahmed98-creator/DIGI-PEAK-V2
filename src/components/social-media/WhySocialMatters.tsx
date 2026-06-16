"use client";

import { motion } from "framer-motion";
import { Shield, Eye, HeartHandshake, TrendingUp, Users, Target, MessageSquarePlus, Trophy } from "lucide-react";

const benefits = [
  { title: "Brand Awareness", desc: "Keep your brand top-of-mind with consistent, high-quality visual content that dominates the feed.", icon: Eye },
  { title: "Trust Building", desc: "Establish industry authority through thought leadership, educational content, and social proof.", icon: Shield },
  { title: "Customer Engagement", desc: "Turn passive scrollers into active brand advocates through strategic community management.", icon: HeartHandshake },
  { title: "Lead Generation", desc: "Drive high-intent traffic from organic social directly to your optimized conversion funnels.", icon: Target },
  { title: "Audience Growth", desc: "Attract a hyper-targeted following using algorithm-optimized content and viral strategies.", icon: Users },
  { title: "Sales Growth", desc: "Leverage social commerce and direct response strategies to generate immediate revenue.", icon: TrendingUp },
  { title: "Community Building", desc: "Foster a loyal, engaged community that defends your brand and drives word-of-mouth.", icon: MessageSquarePlus },
  { title: "Competitive Advantage", desc: "Out-publish and out-perform competitors with a superior aesthetic and data-driven strategy.", icon: Trophy },
];

export function WhySocialMatters() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              Why Social Media <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-500">Matters.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              In today's digital landscape, your social media presence is often the first interaction a prospect has with your brand. We make sure it's unforgettable.
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
              transition={{ duration: 0.5, delay: (index % 4) * 0.1 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-pink-500/30 transition-colors group"
            >
              <div className="mb-6 h-12 w-12 rounded-xl bg-pink-500/10 border border-pink-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-pink-500/20 transition-all duration-300">
                <benefit.icon className="h-6 w-6 text-pink-400" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg">{benefit.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
