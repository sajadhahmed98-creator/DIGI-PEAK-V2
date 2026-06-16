"use client";

import { motion } from "framer-motion";
import { Monitor, Smartphone, LayoutGrid, Search, PenTool, PlayCircle, Layers, FileCheck, ShoppingBag, Building } from "lucide-react";

const uiuxServices = [
  { 
    title: "Website UI Design", 
    desc: "Bespoke high-performance design for Corporate Websites, immersive Landing Pages, large-scale Enterprise portals, and conversion-focused marketing sites.", 
    icon: Monitor 
  },
  { 
    title: "Mobile App Design", 
    desc: "User-centric design interfaces for native iOS and Android apps, cross-platform layouts, and high-fidelity clickable mobile interactive prototypes.", 
    icon: Smartphone 
  },
  { 
    title: "SaaS Product Design", 
    desc: "Complex data dashboards, intuitive CRM management platforms, operational ERP systems, and highly scalable SaaS interface portals.", 
    icon: LayoutGrid 
  },
  { 
    title: "UX Research", 
    desc: "Deep user interviews, thorough usability testing, behavior analysis, customer persona building, and data-driven product insights.", 
    icon: Search 
  },
  { 
    title: "Wireframing & Mapping", 
    desc: "Low-fidelity wireframing architectures, complete user flow mapping, robust information architecture, and experience mapping journeys.", 
    icon: PenTool 
  },
  { 
    title: "Interactive Prototyping", 
    desc: "High-fidelity clickable web prototypes, user validation pipelines, realistic journey testing, and engaging immersive interactive simulations.", 
    icon: PlayCircle 
  },
  { 
    title: "Design Systems", 
    desc: "Comprehensive custom component libraries, comprehensive style guides, brand token consistency, and fully scalable systems.", 
    icon: Layers 
  },
  { 
    title: "UX Audits & Consulting", 
    desc: "Thorough experience reviews, heuristic usability analysis, conversion friction identification, and actionable optimization roadmaps.", 
    icon: FileCheck 
  },
  { 
    title: "E-Commerce UX", 
    desc: "Optimized product pages, seamless checkout flows, friction-free payment journeys, and high-intent conversion rate designs.", 
    icon: ShoppingBag 
  },
  { 
    title: "Enterprise Product Design", 
    desc: "Custom internal business applications, streamlined operational dashboards, employee workflow systems, and advanced platform architectures.", 
    icon: Building 
  },
];

export function UiUxServicesGrid() {
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
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-400 to-purple-500">UI/UX Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We design digital products that solve complex user problems and drive business growth through human-centered interface systems.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {uiuxServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 5) * 0.08 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-rose-500/40 transition-colors group flex flex-col lg:col-span-1 md:col-span-1"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-rose-500/10 border border-rose-500/20 flex items-center justify-center text-rose-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(244,63,94,0.3)] group-hover:bg-rose-500/20 transition-all duration-300 mb-5">
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
