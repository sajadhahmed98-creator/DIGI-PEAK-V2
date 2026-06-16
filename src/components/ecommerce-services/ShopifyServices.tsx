"use client";

import { motion } from "framer-motion";
import { ShoppingBag, Settings2, Zap, LayoutTemplate } from "lucide-react";

export function ShopifyServices() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Subtle Shopify Green Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#95BF47]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#95BF47]/10 border border-[#95BF47]/20 text-[#95BF47] text-sm font-bold mb-6">
                 <ShoppingBag className="w-4 h-4" />
                 Shopify Experts
               </div>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Enterprise <span className="text-gradient-secondary">Shopify</span> Development.
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                As certified Shopify Partners, we build, migrate, and scale high-volume storefronts. We bypass standard themes to develop custom, headless Shopify Plus experiences engineered for massive traffic and conversions.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Shopify Setup & Redesign", icon: LayoutTemplate },
                { title: "Shopify Plus Development", icon: Zap },
                { title: "Custom App Integrations", icon: Settings2 },
                { title: "Headless Commerce (Hydrogen)", icon: ShoppingBag },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-black/50 hover:border-[#95BF47]/50 transition-colors group"
                >
                  <div className="h-8 w-8 rounded bg-[#95BF47]/10 flex items-center justify-center text-[#95BF47] group-hover:scale-110 transition-transform">
                     <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm text-foreground/90 group-hover:text-white transition-colors">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
             <motion.div 
               initial={{ opacity: 0, x: 20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass p-2 rounded-3xl border border-white/10 shadow-2xl relative z-10"
             >
                {/* Minimal Shopify Mockup */}
                <div className="bg-[#0b0f19] rounded-2xl overflow-hidden border border-white/5">
                   {/* Browser Header */}
                   <div className="h-10 bg-white/5 border-b border-white/5 flex items-center px-4 gap-2">
                      <div className="flex gap-1.5">
                         <div className="w-3 h-3 rounded-full bg-red-500/80" />
                         <div className="w-3 h-3 rounded-full bg-yellow-500/80" />
                         <div className="w-3 h-3 rounded-full bg-green-500/80" />
                      </div>
                      <div className="mx-auto h-5 w-1/2 bg-black/50 rounded flex items-center justify-center text-[10px] text-muted">
                         yourstore.com
                      </div>
                   </div>
                   {/* Store Body */}
                   <div className="p-6">
                      <div className="flex justify-between items-center mb-8">
                         <div className="text-xl font-bold font-heading text-white">BRAND</div>
                         <div className="flex gap-4 text-xs text-muted">
                            <span>Shop</span>
                            <span>Collections</span>
                            <span>About</span>
                         </div>
                      </div>
                      <div className="h-48 w-full bg-gradient-to-br from-[#95BF47]/20 to-transparent rounded-xl border border-[#95BF47]/20 mb-8 flex items-center justify-center">
                         <div className="text-center">
                            <div className="text-2xl font-bold text-white mb-2">New Collection</div>
                            <div className="h-8 w-24 bg-white text-black text-xs font-bold flex items-center justify-center mx-auto rounded">Shop Now</div>
                         </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
                         <div className="h-24 bg-white/5 rounded-lg" />
                         <div className="h-24 bg-white/5 rounded-lg" />
                         <div className="h-24 bg-white/5 rounded-lg" />
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
