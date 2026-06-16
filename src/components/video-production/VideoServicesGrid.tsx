"use client";

import { motion } from "framer-motion";
import { 
  Users, Play, Film, BookOpen, ShoppingBag, Calendar, 
  MessageSquare, Layers, Airplay, Info, Globe, Scissors, Tv, Smartphone 
} from "lucide-react";

const videoServices = [
  { 
    title: "Corporate Videos", 
    desc: "Executive interviews, company profile videos, corporate presentations, and brand documentaries to establish corporate identity and trust.", 
    icon: Users 
  },
  { 
    title: "Commercial Ads", 
    desc: "High-end cinematic advertisements, promotional videos, and creative campaigns for television, web, and luxury marketing channels.", 
    icon: Play 
  },
  { 
    title: "Social Media Reels", 
    desc: "Highly engaging, custom-designed Instagram Reels, TikTok videos, and YouTube Shorts engineered to scale community growth.", 
    icon: Smartphone 
  },
  { 
    title: "Brand Story Videos", 
    desc: "Cinematic, documentary-style films exploring your brand's origins, values, mission, and long-term business vision.", 
    icon: BookOpen 
  },
  { 
    title: "Product Videos", 
    desc: "Premium, dynamic product launch videos, detailed demonstrations, and commercial close-up visual showcases.", 
    icon: ShoppingBag 
  },
  { 
    title: "Event Coverage", 
    desc: "Complete professional coverage for corporate conferences, brand exhibitions, product launches, and private galas.", 
    icon: Calendar 
  },
  { 
    title: "Testimonial Videos", 
    desc: "High-fidelity customer success interviews and case study videos that leverage social proof to convert leads.", 
    icon: MessageSquare 
  },
  { 
    title: "Motion Graphics", 
    desc: "Dynamic typography, sleek title overlays, custom identity brand bumpers, and visual effects for premium post-production.", 
    icon: Layers 
  },
  { 
    title: "Animation Videos", 
    desc: "Custom 2D character animation, high-end illustration assets, and animated marketing graphics that make concepts pop.", 
    icon: Airplay 
  },
  { 
    title: "Explainer Videos", 
    desc: "Interactive SaaS dashboards walkthroughs, technical product explanation videos, and business process guides.", 
    icon: Info 
  },
  { 
    title: "Drone Videography", 
    desc: "Cinematic 4K/8K aerial filming, commercial real estate walkthroughs, and large-scale industrial site captures.", 
    icon: Globe 
  },
  { 
    title: "Video Editing", 
    desc: "Premium post-production workflow, expert pacing, scene transitions, high-end color grading, and custom sound design.", 
    icon: Scissors 
  },
  { 
    title: "YouTube Content", 
    desc: "End-to-end production including script outlines, studio recording setup, professional edits, custom thumbnails, and SEO publishing.", 
    icon: Tv 
  },
  { 
    title: "Short Form Content", 
    desc: "Viral marketing clips, dynamic B2B video ads, and micro-content assets optimized for maximum click-through rates.", 
    icon: Film 
  },
];

export function VideoServicesGrid() {
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
              Enterprise <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 to-amber-500">Video Production Solutions.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We shoot, edit, and animate cinematic brand assets that engage global audiences, strengthen enterprise authority, and drive revenue.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {videoServices.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.4, delay: (index % 4) * 0.08 }}
              className="glass p-6 rounded-2xl border border-white/10 hover:border-red-500/40 transition-colors group flex flex-col"
            >
              <div className="shrink-0 h-10 w-10 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400 group-hover:scale-110 group-hover:shadow-[0_0_15px_rgba(239,68,68,0.3)] group-hover:bg-red-500/20 transition-all duration-300 mb-5">
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
