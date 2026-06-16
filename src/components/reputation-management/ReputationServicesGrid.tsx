"use client";

import { motion } from "framer-motion";
import { 
  Star, Send, Shield, Eye, Heart, MessageSquare, 
  MapPin, Sparkles, Layers, AlertTriangle 
} from "lucide-react";

const reputationServices = [
  { 
    title: "Google Review Management", 
    desc: "Campaign setups to generate verified customer reviews, Google Business Profile tuning, and ongoing response strategy.", 
    icon: Star 
  },
  { 
    title: "Review Generation Systems", 
    desc: "Custom automated review request links deployed via SMS, Email, or WhatsApp to collect customer feedback post-transaction.", 
    icon: Send 
  },
  { 
    title: "Brand Monitoring", 
    desc: "Real-time alerts tracking brand mentions, online sentiment monitoring, social listening, and competitor listings audits.", 
    icon: Shield 
  },
  { 
    title: "Online Reputation Management", 
    desc: "Strategic ORM campaigns designed to address and repair negative online sentiment, building a secure corporate image.", 
    icon: Eye 
  },
  { 
    title: "Customer Feedback Systems", 
    desc: "Private intercept surveys that resolve client complaints internally before they escalate into negative public reviews.", 
    icon: Heart 
  },
  { 
    title: "Review Response Management", 
    desc: "Prompt, AI-assisted review responses that demonstrate active customer support, resolving negative reports professionally.", 
    icon: MessageSquare 
  },
  { 
    title: "Local Reputation SEO", 
    desc: "Citations building, local 3-pack listing optimization, and geo-targeted review acquisitions to dominate local searches.", 
    icon: MapPin 
  },
  { 
    title: "Trust Building Strategies", 
    desc: "Website widget integrations showing real-time reviews badges, customer testimonials, and case studies dashboards.", 
    icon: Sparkles 
  },
  { 
    title: "Business Listings Management", 
    desc: "Syncing, auditing, and optimizing listings across Yelp, Trustpilot, TripAdvisor, Google, and industry platforms.", 
    icon: Layers 
  },
  { 
    title: "Crisis Reputation Support", 
    desc: "Emergency PR management and brand sentiment mitigation to protect corporate integrity during press incidents.", 
    icon: AlertTriangle 
  },
];

export function ReputationServicesGrid() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 bg-black border-y border-white/5">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-24">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white">
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-emerald-400">Reputation Management Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We monitor brand mentions, automate customer feedback systems, and build authentic social proof that secures digital trust.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {reputationServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.08 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-colors group flex flex-col"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(245,158,11,0.3)] group-hover:bg-amber-500/20 transition-all duration-300 mb-5">
                <service.icon className="h-5 w-5" />
              </div>
              <h3 className="font-bold text-base mb-2 text-foreground group-hover:text-white transition-colors">{service.title}</h3>
              <p className="text-xs text-muted leading-relaxed flex-grow">{service.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
