"use client";

import { motion } from "framer-motion";
import { Globe, Plug, Gauge, ArrowRightLeft } from "lucide-react";

export function WooCommerceServices() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-b border-white/5 bg-black relative overflow-hidden">
      {/* Subtle Woo Purple Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#96588a]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          
          <div className="lg:w-1/2 w-full relative">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass p-8 rounded-3xl border border-white/10 shadow-2xl relative z-10 flex flex-col gap-6"
             >
                {/* WooCommerce Dashboard Mockup */}
                <div className="flex justify-between items-end border-b border-white/10 pb-4">
                   <div>
                      <div className="text-xs text-[#96588a] font-bold uppercase tracking-wider mb-1">WooCommerce Analytics</div>
                      <div className="text-3xl font-bold text-white">$145,280.00</div>
                   </div>
                   <div className="text-sm font-bold text-[#25D366] bg-[#25D366]/10 px-2 py-1 rounded">+24.5%</div>
                </div>
                
                <div className="flex gap-4">
                   <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-xs text-muted mb-2">Orders</div>
                      <div className="text-xl font-bold text-white">1,248</div>
                   </div>
                   <div className="flex-1 bg-white/5 border border-white/10 rounded-xl p-4">
                      <div className="text-xs text-muted mb-2">Conversion Rate</div>
                      <div className="text-xl font-bold text-white">4.2%</div>
                   </div>
                </div>

                {/* Simulated Chart */}
                <div className="h-32 w-full mt-4 relative flex items-end">
                   <svg className="absolute inset-0 w-full h-full" preserveAspectRatio="none">
                     <path d="M 0,100 Q 50,80 100,50 T 200,20 T 300,10" fill="none" stroke="#96588a" strokeWidth="3" />
                   </svg>
                   <div className="absolute bottom-0 w-full h-full bg-gradient-to-t from-[#96588a]/20 to-transparent" />
                </div>
             </motion.div>
          </div>

          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#96588a]/10 border border-[#96588a]/20 text-[#96588a] text-sm font-bold mb-6">
                 <Globe className="w-4 h-4" />
                 Open Source Freedom
               </div>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Custom <span className="text-gradient-primary">WooCommerce</span> Solutions.
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                For brands requiring total ownership and unlimited customization, we build high-performance WooCommerce architectures. We strip out plugin bloat, optimize database queries, and secure the platform for enterprise scale.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Custom Plugin Development", icon: Plug },
                { title: "Performance Optimization", icon: Gauge },
                { title: "Migration to WooCommerce", icon: ArrowRightLeft },
                { title: "Complex Integrations", icon: Globe },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-white/[0.02] hover:border-[#96588a]/50 transition-colors group"
                >
                  <div className="h-8 w-8 rounded bg-[#96588a]/10 flex items-center justify-center text-[#96588a] group-hover:scale-110 transition-transform">
                     <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm text-foreground/90 group-hover:text-white transition-colors">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
        </div>
      </div>
    </section>
  );
}
