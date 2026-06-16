"use client";

import { motion } from "framer-motion";
import { Palette, TrendingUp, Camera, Video, UserCheck } from "lucide-react";

const services = [
  {
    title: "Graphic Design",
    icon: Palette,
    accent: "text-accent-primary bg-accent-primary/10 border-accent-primary/20",
    href: "/branding-creative",
    offerings: [
      "Logo Design",
      "Brand Identity Design",
      "Social Media Design",
      "Marketing Materials",
    ],
  },
  {
    title: "Digital Marketing",
    icon: TrendingUp,
    accent: "text-accent-secondary bg-accent-secondary/10 border-accent-secondary/20",
    href: "/digital-marketing",
    offerings: [
      "SEO & Local SEO",
      "Google Ads (PPC)",
      "Social Media Marketing",
      "Content Marketing",
    ],
  },
  {
    title: "Photography",
    icon: Camera,
    accent: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20",
    href: "/branding-creative",
    offerings: [
      "Portrait Photography",
      "Corporate Photography",
      "Product Photography",
      "Event Photography",
    ],
  },
  {
    title: "Video Production",
    icon: Video,
    accent: "text-amber-400 bg-amber-400/10 border-amber-400/20",
    href: "/video-production",
    offerings: [
      "Video Editing",
      "Reel & Short-form Editing",
      "Promotional Videos",
      "Corporate Videos",
    ],
  },
  {
    title: "Personal Branding",
    icon: UserCheck,
    accent: "text-rose-400 bg-rose-400/10 border-rose-400/20",
    href: "/reputation-management",
    offerings: [
      "LinkedIn Branding",
      "Content Strategy",
      "Authority Building",
    ],
  },
];

export function CreativeServices() {
  return (
    <section className="py-20 md:py-24 lg:py-32 px-6 bg-black relative">
      {/* Background glow */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/3 w-[400px] h-[400px] bg-accent-primary/5 rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <span className="text-accent-primary font-mono text-xs font-bold uppercase tracking-widest mb-4 block">
            Capabilities
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Creative &amp; Digital <span className="text-gradient-secondary">Services.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            A comprehensive creative suite backed by over 6 years of practical execution, designed to scale search visibility and brand authority.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6">
          {services.map((svc, i) => {
            const Icon = svc.icon;
            return (
              <motion.div
                key={svc.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
              >
                <a href={svc.href} className="block h-full glass border border-white/10 rounded-3xl p-6 hover:border-white/20 transition-all duration-300 flex flex-col justify-between group">
                  <div>
                    <div className={`w-11 h-11 rounded-xl flex items-center justify-center border mb-6 ${svc.accent} group-hover:scale-105 transition-transform duration-300`}>
                      <Icon className="w-5 h-5" />
                    </div>
                    <h3 className="text-lg font-bold text-white mb-4 group-hover:text-accent-secondary transition-colors">
                      {svc.title}
                    </h3>
                    <ul className="space-y-2.5">
                      {svc.offerings.map((offering) => (
                        <li key={offering} className="text-xs text-muted flex items-center gap-2">
                          <span className="w-1.5 h-1.5 rounded-full bg-white/20 flex-shrink-0" />
                          {offering}
                        </li>
                      ))}
                    </ul>
                  </div>
                </a>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
