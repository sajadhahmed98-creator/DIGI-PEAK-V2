"use client";

import { motion } from "framer-motion";
import { AlertTriangle, Zap, Shield, Database, Heart, Search, AlertCircle, Activity } from "lucide-react";

const benefits = [
  { 
    title: "Reduce Downtime", 
    desc: "Every minute offline blocks checkout funnels. We secure your portal with redundant cloud networks to eliminate downtime.", 
    icon: AlertTriangle 
  },
  { 
    title: "Improve Website Speed", 
    desc: "Sub-second page speeds lower bounce rates, boost search indexes, and improve conversion metrics.", 
    icon: Zap 
  },
  { 
    title: "Strengthen Security", 
    desc: "Proactive firewalls, SSL, malware blockers, and automated patches protect your lists and customer data.", 
    icon: Shield 
  },
  { 
    title: "Protect Business Data", 
    desc: "Automated, redundant hourly and daily backups ensure that you can restore data instantly in any crisis.", 
    icon: Database 
  },
  { 
    title: "Improve User Experience", 
    desc: "Continuous updates to plugins, scripts, themes, and server stacks ensure a fast, bug-free customer experience.", 
    icon: Heart 
  },
  { 
    title: "Maintain SEO Position", 
    desc: "Google algorithms penalize unstable or slow websites. We maintain fast response times to preserve organic traffic.", 
    icon: Search 
  },
  { 
    title: "Prevent Costly Failures", 
    desc: "Real-time monitors detect software incompatibilities, PHP bugs, and SSL expiration before they impact client operations.", 
    icon: AlertCircle 
  },
  { 
    title: "Ensure Business Continuity", 
    desc: "Full disaster-recovery workflows and 24/7 technical assistance give you complete operational security.", 
    icon: Activity 
  },
];

export function WhyHostingMatters() {
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
              Why Hosting & Maintenance <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-400 to-emerald-400">Matters.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Your server is your storefront. We provide managed enterprise hosting, proactive patches, and 24/7 technical monitoring so your website stays secure and converts.
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
              className="glass p-6 rounded-2xl border border-white/10 hover:border-cyan-500/30 transition-colors group flex flex-col items-center text-center"
            >
              <div className="mb-5 h-12 w-12 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-cyan-500/20 transition-all duration-300">
                <benefit.icon className="h-6 w-6 text-cyan-400" />
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
