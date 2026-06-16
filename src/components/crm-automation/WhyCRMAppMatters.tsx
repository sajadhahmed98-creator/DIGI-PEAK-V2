"use client";

import { motion } from "framer-motion";
import { Zap, Clock, Users, Flame, Settings, Briefcase, DollarSign, Activity } from "lucide-react";

const benefits = [
  { 
    title: "Increase Productivity", 
    desc: "By centralizing customer profiles, communication threads, and pipeline data, teams work with immediate clarity and zero fragmentation.", 
    icon: Zap 
  },
  { 
    title: "Reduce Manual Work", 
    desc: "System automations eliminate tedious administrative overheads, copy-paste entry actions, and manual client tracking tasks.", 
    icon: Clock 
  },
  { 
    title: "Improve Customer Experience", 
    desc: "Deliver personalized, super-fast responses and tailored communication cycles throughout the entire client lifecycle.", 
    icon: Users 
  },
  { 
    title: "Accelerate Sales", 
    desc: "Automated deal stages, continuous tasks reminders, and immediate follow-ups guide deals through pipelines with maximal velocity.", 
    icon: Flame 
  },
  { 
    title: "Automate Repetitive Tasks", 
    desc: "Let workflows trigger transactional emails, update deal parameters, request approvals, and sync calendar dates programmatically.", 
    icon: Settings 
  },
  { 
    title: "Improve Team Efficiency", 
    desc: "Establish structured visibility, automated lead routing rules, shared task lists, and clear manager dashboards.", 
    icon: Briefcase 
  },
  { 
    title: "Generate More Revenue", 
    desc: "Meticulous lead capturing and nurturing pipelines prevent opportunities from slipping through cracks, expanding total margins.", 
    icon: DollarSign 
  },
  { 
    title: "Scale Operations Faster", 
    desc: "Intelligent background system automation allows transactional volumes to scale 10x without needing to double administrative headcount.", 
    icon: Activity 
  },
];

export function WhyCRMAppMatters() {
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
              Why CRM & Automation <span className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-400 to-purple-500">Matters.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              Your CRM is the central nervous system of your business. Combining it with advanced automation transforms chaotic operations into an optimized growth machine.
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
              className="glass p-6 rounded-2xl border border-white/10 hover:border-emerald-500/30 transition-colors group flex flex-col items-center text-center"
            >
              <div className="mb-5 h-12 w-12 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 group-hover:bg-emerald-500/20 transition-all duration-300">
                <benefit.icon className="h-6 w-6 text-emerald-400" />
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
