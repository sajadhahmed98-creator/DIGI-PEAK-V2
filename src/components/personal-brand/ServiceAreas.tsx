"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const regions = [
  {
    country: "Qatar",
    href: "/qatar",
    description: "Serving businesses and enterprises across metropolitan Doha and key growth hubs.",
    hubs: [
      "Graphic Designer Doha",
      "Graphic Designer Lusail",
      "Graphic Designer West Bay",
      "Graphic Designer Al Wakrah",
      "Graphic Designer Al Rayyan",
      "Graphic Designer Qatar",
    ],
  },
  {
    country: "United Arab Emirates",
    href: "/uae",
    description: "Strategic creative and branding solutions for key corporate regions.",
    hubs: [
      "Graphic Designer Dubai",
      "Graphic Designer Abu Dhabi",
      "Graphic Designer UAE",
    ],
  },
  {
    country: "New Zealand",
    href: "/locations/new-zealand",
    description: "Creative design partnership for high-growth local businesses.",
    hubs: [
      "Graphic Designer Auckland",
      "Graphic Designer New Zealand",
    ],
  },
];

export function ServiceAreas() {
  return (
    <section className="py-12 md:py-20 lg:py-32 px-6 bg-black relative border-t border-white/5">
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute bottom-1/4 left-1/4 w-[400px] h-[400px] bg-accent-primary/[0.015] rounded-full blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20">
          <span className="text-accent-primary font-mono text-xs font-bold uppercase tracking-widest mb-4 block">
            Target Markets
          </span>
          <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight text-white mb-6">
            Service <span className="text-gradient-secondary">Areas.</span>
          </h2>
          <p className="text-muted text-lg max-w-2xl">
            Providing localized, high-end branding, graphic design, and marketing services to elevate regional business footprints.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {regions.map((region, i) => (
            <motion.div
              key={region.country}
              initial={{ opacity: 0, y: 15 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <a href={region.href} className="block h-full glass border border-white/8 rounded-3xl p-6 hover:border-white/15 transition-all duration-300 flex flex-col justify-between group">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-accent-primary">
                    <MapPin className="w-5 h-5 flex-shrink-0 group-hover:scale-110 transition-transform duration-300" />
                    <h3 className="font-heading text-xl font-bold text-white">
                      {region.country}
                    </h3>
                  </div>
                  <p className="text-xs text-muted leading-relaxed mb-6">
                    {region.description}
                  </p>
                  <div className="h-px bg-white/5 mb-6" />
                  <ul className="space-y-2">
                    {region.hubs.map((hub) => (
                      <li key={hub} className="text-xs text-muted flex items-center gap-2">
                        <span className="w-1 h-1 rounded-full bg-accent-secondary" />
                        {hub}
                      </li>
                    ))}
                  </ul>
                </div>
              </a>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
