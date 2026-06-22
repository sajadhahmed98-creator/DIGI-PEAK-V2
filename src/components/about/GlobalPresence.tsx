"use client";

import { motion } from "framer-motion";
import Link from "next/link";

const countries = [
  {
    flag: "🇱🇰",
    name: "Sri Lanka",
    role: "Headquarters",
    type: "hq",
  },
  {
    flag: "🇶🇦",
    name: "Qatar",
    role: "Key Market",
    type: "key",
  },
  {
    flag: "🇦🇪",
    name: "UAE",
    role: "Key Market",
    type: "key",
  },
  {
    flag: "🇸🇦",
    name: "Saudi Arabia",
    role: "Key Market",
    type: "key",
  },
  {
    flag: "🇸🇬",
    name: "Singapore",
    role: "Growth Market",
    type: "growth",
  },
  {
    flag: "🇦🇺",
    name: "Australia",
    role: "Growth Market",
    type: "growth",
  },
  {
    flag: "🇳🇿",
    name: "New Zealand",
    role: "Growth Market",
    type: "growth",
  },
  {
    flag: "🇬🇧",
    name: "United Kingdom",
    role: "International Market",
    type: "international",
  },
];

export function GlobalPresence() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Background ambient glows */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] bg-gradient-radial from-accent-primary/5 via-accent-secondary/2 to-transparent rounded-full blur-[100px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* Header */}
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-white uppercase">
              Global{" "}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary to-accent-secondary">
                Presence
              </span>
            </h2>
            <p className="text-muted text-base md:text-lg max-w-3xl mx-auto leading-relaxed">
              Headquartered in Sri Lanka, Digipeak works with businesses across <Link href="/locations/qatar" className="underline hover:text-accent-primary transition-colors">Qatar</Link>, <Link href="/locations/uae" className="underline hover:text-accent-primary transition-colors">UAE</Link>, <Link href="/locations/saudi-arabia" className="underline hover:text-accent-primary transition-colors">Saudi Arabia</Link>, Singapore, Australia, New Zealand, and the United Kingdom, helping brands grow through digital marketing, web development, branding, AI solutions, and business automation.
            </p>
          </motion.div>
        </div>

        {/* Countries Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {countries.map((country, index) => {
            const isHQ = country.type === "hq";
            const getLink = (name: string) => {
              if (name === "Qatar") return "/locations/qatar";
              if (name === "UAE") return "/locations/uae";
              if (name === "Saudi Arabia") return "/locations/saudi-arabia";
              return null;
            };
            const linkHref = getLink(country.name);
            const isLinkable = linkHref !== null;
            
            return (
              <motion.div
                key={country.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.05 }}
                className="relative"
              >
                {isLinkable ? (
                  <Link
                    href={linkHref}
                    className="flex flex-col items-center justify-center text-center glass p-6 md:p-8 rounded-2xl border border-white/10 hover:border-accent-primary/45 transition-all duration-300 group relative overflow-hidden h-full w-full"
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-accent-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="text-4xl md:text-3xl md:text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 select-none">
                        {country.flag}
                      </div>
                      
                      <h3 className="font-heading font-bold text-white text-lg md:text-xl mb-3">
                        {country.name}
                      </h3>

                      <span className="inline-block px-3 py-1 rounded-full text-xs font-semibold bg-white/5 border border-white/10 text-muted group-hover:border-accent-primary/20 group-hover:text-white transition-colors duration-300">
                        {country.role} (View Hub)
                      </span>
                    </div>
                  </Link>
                ) : (
                  <div
                    className={`glass p-6 md:p-8 rounded-2xl border transition-all duration-300 group relative overflow-hidden flex flex-col items-center justify-center text-center h-full w-full ${
                      isHQ
                        ? "border-accent-primary/40 shadow-[0_0_24px_rgba(168,85,247,0.15)] bg-white/[0.02]"
                        : "border-white/10 hover:border-accent-primary/25"
                    }`}
                  >
                    <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/3 to-accent-secondary/3 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                    
                    <div className="relative z-10 flex flex-col items-center">
                      <div className="text-4xl md:text-3xl md:text-4xl lg:text-5xl mb-4 group-hover:scale-110 transition-transform duration-300 select-none">
                        {country.flag}
                      </div>
                      
                      <h3 className="font-heading font-bold text-white text-lg md:text-xl mb-3">
                        {country.name}
                      </h3>

                      <span
                        className={`inline-block px-3 py-1 rounded-full text-xs font-semibold ${
                          isHQ
                            ? "bg-gradient-to-r from-accent-primary to-accent-secondary text-white shadow-[0_2px_10px_rgba(168,85,247,0.3)]"
                            : "bg-white/5 border border-white/10 text-muted group-hover:border-accent-primary/20 group-hover:text-white transition-colors duration-300"
                        }`}
                      >
                        {country.role}
                      </span>
                    </div>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
