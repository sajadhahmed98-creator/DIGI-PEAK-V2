"use client";

import { motion } from "framer-motion";
import { Zap, MessageSquare, TrendingUp, Heart, Workflow, Award } from "lucide-react";

const benefits = [
  { 
    title: "Direct Customer Access", 
    desc: "Mobile apps reside directly on user home screens, enabling instant push notifications, high click-through rates, and sub-second brand visibility.", 
    icon: Zap 
  },
  { 
    title: "Better Engagement", 
    desc: "Interactive features, continuous customer dialogue, and simplified pathways drive massive user interactions compared to traditional websites.", 
    icon: MessageSquare 
  },
  { 
    title: "Increased Revenue", 
    desc: "Built-in checkout pipelines, easy-tap payment gateways, in-app checkout prompts, and subscription structures drive repeat purchasing cycles.", 
    icon: TrendingUp 
  },
  { 
    title: "Brand Loyalty", 
    desc: "Personalized experiences, tailored settings, and digital loyalty programs foster deep brand connections and secure active advocates.", 
    icon: Heart 
  },
  { 
    title: "Faster Operations", 
    desc: "Streamlined business logic, field-agent data synchronization, and automated workflows minimize delays and cut admin overheads.", 
    icon: Workflow 
  },
  { 
    title: "Competitive Advantage", 
    desc: "A custom native application outshines competitors relying purely on browser views, establishing your organization as the market leader.", 
    icon: Award 
  },
];

export function WhyMobileAppsMatters() {
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
              Why Mobile Apps <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Matter.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Mobile application architecture places your business directly into your user's hand. Speed, offline accessibility, and personalization drive massive ROI.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {benefits.map((benefit, index) => (
            <motion.div
              key={benefit.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-2xl border border-white/10 hover:border-indigo-500/30 transition-colors group flex flex-col items-center text-center"
            >
              <div className="mb-6 h-14 w-14 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-indigo-500/20 transition-all duration-300">
                <benefit.icon className="h-7 w-7 text-indigo-400" />
              </div>
              <h3 className="font-bold text-foreground mb-3 text-lg text-white">{benefit.title}</h3>
              <p className="text-sm text-muted leading-relaxed">{benefit.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
