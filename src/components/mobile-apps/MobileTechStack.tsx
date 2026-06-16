"use client";

import { motion } from "framer-motion";
import { Layers, Cpu, Compass, Code, Target, Flame, Database, Zap, Box, Server, Terminal, Cloud, CloudLightning, Leaf, Table, CreditCard, DollarSign } from "lucide-react";

const tools = [
  { name: "Flutter", icon: Layers, color: "text-[#02569B]" },
  { name: "React Native", icon: Cpu, color: "text-[#61DAFB]" },
  { name: "Swift", icon: Compass, color: "text-[#F05138]" },
  { name: "Kotlin", icon: Code, color: "text-[#7F52FF]" },
  { name: "Dart", icon: Target, color: "text-[#00B4AB]" },
  { name: "Firebase", icon: Flame, color: "text-[#FFCA28]" },
  { name: "Supabase", icon: Database, color: "text-[#3ECF8E]" },
  { name: "Node.js", icon: Zap, color: "text-[#339933]" },
  { name: "Laravel", icon: Box, color: "text-[#FF2D20]" },
  { name: "PHP", icon: Server, color: "text-[#777BB4]" },
  { name: "Python", icon: Terminal, color: "text-[#3776AB]" },
  { name: "AWS", icon: Cloud, color: "text-[#FF9900]" },
  { name: "Google Cloud", icon: CloudLightning, color: "text-[#4285F4]" },
  { name: "MongoDB", icon: Leaf, color: "text-[#47A248]" },
  { name: "PostgreSQL", icon: Table, color: "text-[#4169E1]" },
  { name: "Stripe", icon: CreditCard, color: "text-[#008CD1]" },
  { name: "Razorpay", icon: DollarSign, color: "text-[#0A2540]" },
  { name: "OpenAI", icon: Cpu, color: "text-white" },
];

export function MobileTechStack() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative z-10 scroll-mt-24 border-b border-white/5 bg-black">
      <div className="mx-auto max-w-7xl text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mb-16"
        >
          <h2 className="font-heading text-3xl md:text-2xl md:text-3xl lg:text-4xl font-bold tracking-tight mb-4 text-white">
            Mobile Technology <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Stack.</span>
          </h2>
          <p className="text-muted max-w-2xl mx-auto">
            We build secure, robust mobile architectures utilizing industry-leading SDKs, high-performance backends, and certified payment platforms.
          </p>
        </motion.div>

        <div className="flex flex-wrap justify-center gap-4 md:gap-6">
          {tools.map((tool, index) => (
            <motion.div
              key={tool.name}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: index * 0.05 }}
              className="glass px-6 py-4 rounded-xl border border-white/10 flex items-center gap-3 hover:border-indigo-500/50 hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] transition-all group cursor-default"
            >
              <tool.icon className={`h-5 w-5 ${tool.color} group-hover:scale-110 transition-transform`} />
              <span className="font-semibold text-sm text-foreground/90 text-white">{tool.name}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
