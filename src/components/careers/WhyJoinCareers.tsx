"use client";

import { motion } from "framer-motion";
import { Globe, Home, Cpu, Palette, Award, Zap, Users, BookOpen, Layers, MapPin } from "lucide-react";

const valueProps = [
  {
    title: "Global Client Exposure",
    description: "Work with enterprise-scale partners across the Middle East, Europe, and Asia-Pacific regions.",
    icon: Globe,
  },
  {
    title: "Remote-Friendly Opportunities",
    description: "Structure your work hours in a highly productive, asynchronous remote working model.",
    icon: Home,
  },
  {
    title: "Modern Technology Stack",
    description: "Build using bleeding-edge technologies including Next.js, Headless CMS architectures, and AI systems.",
    icon: Cpu,
  },
  {
    title: "Creative Freedom",
    description: "Take complete ownership of design decisions and propose bold creative strategies directly to clients.",
    icon: Palette,
  },
  {
    title: "Professional Development",
    description: "Gain rapid career acceleration with clear growth roadmaps and support.",
    icon: Award,
  },
  {
    title: "Performance-Based Growth",
    description: "We reward results, offering competitive bonuses and high-achiever raises regularly.",
    icon: Zap,
  },
  {
    title: "Collaborative Culture",
    description: "Share knowledge with an international team of expert developers, designers, and marketers.",
    icon: Users,
  },
  {
    title: "Continuous Learning",
    description: "Access dedicated professional learning credits to support certifications and technical skills.",
    icon: BookOpen,
  },
  {
    title: "Cross-Industry Experience",
    description: "Deliver solutions across real estate, medical groups, logistics, luxury fashion, and B2B SaaS.",
    icon: Layers,
  },
  {
    title: "International Projects",
    description: "Help expand brand operations globally by managing localized search campaigns and applications.",
    icon: MapPin,
  },
];

export function WhyJoinCareers() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black/40 border-t border-white/5">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[300px] bg-accent-primary/5 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-accent-secondary font-bold uppercase text-xs tracking-widest font-mono">Culture & Values</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Why Grow With <span className="text-gradient-primary">Digipeak?</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We empower builders, thinkers, and innovators to deliver high-impact results globally.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
          {valueProps.map((prop, index) => (
            <motion.div
              key={prop.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: (index % 3) * 0.1 }}
              className="glass p-8 rounded-3xl border border-white/10 hover:border-accent-primary/40 hover:shadow-[0_0_30px_rgba(168,85,247,0.1)] transition-all group flex flex-col items-start"
            >
              <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-white/5 border border-white/10 group-hover:border-accent-primary/50 group-hover:bg-accent-primary/10 transition-all duration-300">
                <prop.icon className="h-5 w-5 text-foreground group-hover:text-accent-primary transition-colors" />
              </div>
              <h3 className="font-heading text-xl font-bold text-white mb-2 group-hover:translate-x-1 transition-transform duration-300">
                {prop.title}
              </h3>
              <p className="text-muted text-sm leading-relaxed">{prop.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
