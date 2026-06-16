"use client";

import { motion } from "framer-motion";
import { PenTool, BookOpen, FileText, CheckCircle, Award, FileSpreadsheet, Layers, Calendar, Search, RefreshCw } from "lucide-react";

const contentServices = [
  { 
    title: "SEO Content Writing", 
    desc: "Bespoke keyword research, semantic search intent optimization, pillar pages, topic clusters, and evergreen content designed to rank on page 1.", 
    icon: PenTool 
  },
  { 
    title: "Blog Management", 
    desc: "Full editorial calendar planning, publishing schedules, continuous optimization, and analytics tracking to drive recurring organic visits.", 
    icon: BookOpen 
  },
  { 
    title: "Website Copywriting", 
    desc: "Bespoke, premium copywriting for service pages, brand storytelling, and landing pages that reflects your corporate authority.", 
    icon: FileText 
  },
  { 
    title: "Landing Page Copywriting", 
    desc: "High-converting sales pages, landing page copywriting, CTA development, and consumer psychology triggers to turn traffic into leads.", 
    icon: CheckCircle 
  },
  { 
    title: "Thought Leadership", 
    desc: "LinkedIn executive articles, expert positioning copy, authority columns, and industry articles that command industry attention.", 
    icon: Award 
  },
  { 
    title: "Industry Whitepapers", 
    desc: "Deep-dive technical articles, research-heavy whitepapers, B2B industry manuals, and executive case reports.", 
    icon: FileSpreadsheet 
  },
  { 
    title: "Content Strategy", 
    desc: "Audience persona mapping, buyer funnel planning, content mapping surveys, and lead-nurturing resource planning.", 
    icon: Layers 
  },
  { 
    title: "Content Calendars", 
    desc: "Cohesive multi-channel content maps, publication pipelines, and production schedules for smooth organizational sync.", 
    icon: Calendar 
  },
  { 
    title: "Content Audits", 
    desc: "Comprehensive SERP indexes scans, heuristic analysis, keyword gap reviews, and roadmap planning to optimize your current catalog.", 
    icon: Search 
  },
  { 
    title: "Content Refresh Services", 
    desc: "Evergreen updates, legacy article rewrites, schema updates, internal linking restoration, and ranking recovery actions.", 
    icon: RefreshCw 
  },
];

export function ContentServicesGrid() {
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
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 to-rose-500">Content Marketing Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We write, optimize, and orchestrate search-friendly editorial assets designed to build digital trust and drive organic business growth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {contentServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.08 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-amber-500/40 transition-colors group flex flex-col lg:col-span-1 md:col-span-1"
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
