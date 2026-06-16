"use client";

import { motion } from "framer-motion";
import { MapPin } from "lucide-react";

const cities = [
  "Colombo", "Kandy", "Gampaha", "Negombo", 
  "Nugegoda", "Nittambuwa", "Ragama", "Akurana", 
  "Trincomalee", "Jaffna", "Kalutara", "Beruwala", 
  "Wellawatte", "Dehiwala", "Kollupitiya", "Matara"
];

export function SriLankaCities() {
  return (
    <section className="py-24 md:py-16 md:py-24 lg:py-32 px-6 bg-background">
      <div className="mx-auto max-w-7xl">
        <div className="text-center mb-16 md:mb-20">
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4 text-white">
            Areas We Serve Across <span className="text-gradient-primary">Sri Lanka.</span>
          </h2>
          <p className="text-muted text-lg max-w-3xl mx-auto leading-relaxed">
            As the leading digital marketing agency and web design company in Sri Lanka, we deliver premium growth solutions nationwide. Whether you need corporate SEO in Colombo, e-commerce development in Kandy, social media marketing in Gampaha, or custom web design in Negombo, Nugegoda, and Jaffna, our team provides tailored strategies. We also serve growing businesses in Nittambuwa, Ragama, Akurana, Trincomalee, Kalutara, Beruwala, Wellawatte, Dehiwala, Kollupitiya, Matara, and surrounding regions across Sri Lanka.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 md:gap-6">
          {cities.map((city, i) => (
            <motion.div
              key={city}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.4, delay: i * 0.05 }}
              className="glass p-5 rounded-2xl border border-white/10 flex items-center gap-4 group hover:bg-white/5 hover:border-accent-primary/30 transition-all cursor-default"
            >
              <div className="h-10 w-10 shrink-0 rounded-full bg-white/5 flex items-center justify-center group-hover:bg-accent-primary/20 transition-colors">
                <MapPin className="h-5 w-5 text-muted group-hover:text-accent-primary transition-colors" />
              </div>
              <span className="font-semibold text-sm md:text-base text-foreground group-hover:text-white transition-colors">
                {city}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
