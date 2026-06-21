"use client";

import { motion } from "framer-motion";
import { Briefcase, GraduationCap, Award, CheckCircle } from "lucide-react";
import Link from "next/link";

const experience = {
  title: "Founder & Chief Strategist, Digipeak Agency",
  period: "2021 — Present",
  market: <>Leading growth campaigns across <Link href="/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, UAE, Singapore, Australia, and global markets.</>,
  focus: [
    "Enterprise SEO Strategy",
    "Next.js & Web Engineering",
    "B2B Conversion Systems",
    "CRM & Lead Pipeline Automation",
    "Performance Marketing Ads",
    "Organic Brand Positioning",
    "Technical Architecture Audit",
    "SLA Performance Auditing",
    "Client Growth Mapping",
  ],
};

const education = [
  {
    institution: "AMDT School of Creativity",
    type: "Professional Training",
    icon: Award,
    focus: [
      "Art Direction",
      "Graphic Design",
      "Digital Marketing",
      "UI/UX Design",
      "Visual Storytelling",
      "Advertising Design",
      "Creative Strategy",
    ],
  },
  {
    institution: "Pearson BTEC HND in Art & Design",
    type: "Specialization: Graphic Design",
    icon: GraduationCap,
    focus: [
      "Branding Systems",
      "Typography",
      "Color Theory",
      "Editorial Design",
      "Visual Communication",
      "Packaging Design",
      "Creative Strategy",
      "Design Thinking",
    ],
  },
];

export function ExperienceEducation() {
  return (
    <section className="py-12 md:py-20 lg:py-32 px-6 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Background ambient light */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-0 left-1/4 w-[500px] h-[300px] bg-accent-primary/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
          
          {/* Left Column — Professional Experience */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-accent-primary font-mono text-xs font-bold uppercase tracking-widest mb-4">
                <Briefcase className="w-4 h-4" />
                Experience
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Professional Journey
              </h2>
            </div>

            <div className="glass border border-white/10 rounded-3xl p-8 relative overflow-hidden group hover:border-accent-primary/20 transition-all duration-300">
              <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
                  <h3 className="font-heading text-xl md:text-2xl font-bold text-white">
                    {experience.title}
                  </h3>
                  <span className="font-mono text-xs font-semibold px-3 py-1 rounded-full bg-accent-primary/[0.03] border border-accent-primary/20 text-accent-primary">
                    {experience.period}
                  </span>
                </div>
                
                <p className="text-muted text-sm md:text-base mb-6 font-medium">
                  {experience.market}
                </p>

                <div className="h-px bg-white/5 my-6" />

                <h4 className="text-white text-xs font-bold uppercase tracking-widest mb-4 font-mono">
                  Areas of Focus:
                </h4>
                
                <div className="flex flex-wrap gap-2">
                  {experience.focus.map((item) => (
                    <div
                      key={item}
                      className="flex items-center gap-1.5 glass border border-white/5 rounded-full px-3.5 py-2 text-xs text-muted hover:text-white hover:border-accent-primary/20 transition-all"
                    >
                      <CheckCircle className="w-3.5 h-3.5 text-accent-primary" />
                      {item}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right Column — Education & Professional Training */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-8"
          >
            <div>
              <div className="inline-flex items-center gap-2 text-accent-secondary font-mono text-xs font-bold uppercase tracking-widest mb-4">
                <GraduationCap className="w-4 h-4" />
                Background
              </div>
              <h2 className="font-heading text-3xl lg:text-4xl font-bold text-white tracking-tight">
                Education &amp; Credentials
              </h2>
            </div>

            <div className="space-y-6">
              {education.map((item, index) => {
                const IconComponent = item.icon;
                return (
                  <div
                    key={item.institution}
                    className="glass border border-white/10 rounded-2xl p-6 relative overflow-hidden group hover:border-accent-secondary/20 transition-all duration-300"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-secondary/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10">
                      <div className="flex items-start gap-4">
                        <div className="w-10 h-10 rounded-xl bg-accent-secondary/[0.03] border border-accent-secondary/20 flex items-center justify-center flex-shrink-0 text-accent-secondary">
                          <IconComponent className="w-5 h-5" />
                        </div>
                        <div className="flex-1">
                          <h3 className="font-heading text-lg font-bold text-white mb-1 group-hover:text-accent-secondary transition-colors">
                            {item.institution}
                          </h3>
                          <p className="text-accent-secondary text-xs font-mono font-semibold uppercase tracking-wider mb-4">
                            {item.type}
                          </p>

                          <div className="flex flex-wrap gap-1.5">
                            {item.focus.map((f) => (
                              <span
                                key={f}
                                className="text-[10px] font-mono text-muted bg-white/[0.02] border border-white/5 rounded-md px-2 py-1"
                              >
                                {f}
                              </span>
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
