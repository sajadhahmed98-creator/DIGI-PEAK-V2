"use client";

import { motion } from "framer-motion";
import { Search, Eye, PenTool, CalendarClock, MessageCircle, TrendingUp, BarChart3, Settings } from "lucide-react";

const growthSteps = [
  { id: "01", title: "Audience Research", icon: Search, desc: "Deep demographic and psychographic analysis of your target buyers." },
  { id: "02", title: "Competitor Analysis", icon: Eye, desc: "Identifying market gaps and strategies to outperform industry leaders." },
  { id: "03", title: "Content Planning", icon: PenTool, desc: "Developing a strategic framework of content pillars and themes." },
  { id: "04", title: "Posting Schedule", icon: CalendarClock, desc: "Algorithmic timing to maximize early engagement velocity." },
  { id: "05", title: "Community Engagement", icon: MessageCircle, desc: "Proactive outbound and inbound interaction to build relationships." },
  { id: "06", title: "Growth Campaigns", icon: TrendingUp, desc: "Contests, collaborations, and paid boosts to accelerate reach." },
  { id: "07", title: "Performance Tracking", icon: BarChart3, desc: "Real-time monitoring of follower growth, reach, and engagement." },
  { id: "08", title: "Optimization", icon: Settings, desc: "Continuous refinement based on data-driven performance metrics." },
];

export function SocialGrowthSystem() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 bg-black border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
              The Growth <span className="text-gradient-primary">System.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We don't just post and pray. We utilize a rigid 8-step methodology engineered to systematically scale your social presence.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {growthSteps.map((step, index) => (
            <motion.div
              key={step.id}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
            >
              <div className="glass p-8 rounded-3xl border border-white/10 h-full hover:border-pink-500/40 transition-all duration-300 group relative overflow-hidden">
                <div className="absolute -top-4 -right-4 p-6 text-3xl md:text-5xl lg:text-6xl font-extrabold text-white/5 group-hover:text-white/10 transition-colors font-heading pointer-events-none">
                  {step.id}
                </div>
                
                <div className="h-12 w-12 rounded-xl bg-gradient-to-br from-pink-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center text-pink-400 group-hover:scale-110 group-hover:bg-pink-500/20 group-hover:border-pink-500/30 transition-all mb-6 relative z-10">
                  <step.icon className="h-6 w-6" />
                </div>
                
                <h3 className="font-bold text-lg text-foreground mb-3 relative z-10">{step.title}</h3>
                <p className="text-sm text-muted leading-relaxed relative z-10">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
