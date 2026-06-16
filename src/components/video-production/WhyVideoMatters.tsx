"use client";

import { motion } from "framer-motion";
import { Play, Award, TrendingUp, Share2, Search, Sparkles, Eye, Tv } from "lucide-react";

const benefits = [
  { 
    title: "Capture Attention", 
    desc: "Video grabs dynamic user focus instantly, driving over 80% higher initial engagement rates than text-only web content.", 
    icon: Play 
  },
  { 
    title: "Build Trust", 
    desc: "Cinematic, high-fidelity brand videos and interviews build trust, authority, and deep connection with prospective clients.", 
    icon: Award 
  },
  { 
    title: "Drive Results", 
    desc: "Including a high-end product or service explainer video on landing pages can increase conversion rates by up to 86%.", 
    icon: TrendingUp 
  },
  { 
    title: "Social Media Power", 
    desc: "Video is the absolute king of algorithms. High-quality Reels, TikToks, and Shorts drive organic reach and brand discoverability.", 
    icon: Share2 
  },
  { 
    title: "SEO Compound Effect", 
    desc: "Search engines favor media-rich landing pages. Embedding video increases average page dwell times, boosting core search rankings.", 
    icon: Search 
  },
  { 
    title: "Brand Perception", 
    desc: "Premium, agency-quality corporate video production establishes a luxurious, professional brand image that stands out.", 
    icon: Sparkles 
  },
  { 
    title: "Explain Complex Ideas", 
    desc: "Sleek 2D animation and explainer videos simplify technical workflows, SaaS architectures, and product features in seconds.", 
    icon: Eye 
  },
  { 
    title: "Omnichannel Scale", 
    desc: "A single comprehensive brand shoot yields multiple assets optimized for web, digital advertising, newsletters, and pitch presentations.", 
    icon: Tv 
  },
];

export function WhyVideoMatters() {
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
              Why Video Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Matters.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Visual content is the most persuasive tool online. We combine high-end cinematography, expert scripting, and custom motion graphics to turn viewers into loyal clients.
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
              className="glass p-6 rounded-2xl border border-white/10 hover:border-red-500/30 transition-colors group flex flex-col items-center text-center"
            >
              <div className="mb-5 h-12 w-12 rounded-xl bg-red-500/10 border border-red-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-red-500/20 transition-all duration-300">
                <benefit.icon className="h-6 w-6 text-red-400" />
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
