"use client";

import { motion } from "framer-motion";
import { Search, MapPin, MousePointerClick, BarChart3 } from "lucide-react";

export function GoogleAdsServices() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Subtle Google Blue Glow */}
      <div className="absolute top-1/2 right-0 -translate-y-1/2 w-96 h-96 bg-[#4285F4]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#4285F4]/10 border border-[#4285F4]/20 text-[#4285F4] text-sm font-bold mb-6">
                 <Search className="w-4 h-4" />
                 Google Ads Agency
               </div>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Capture High-Intent <span className="text-[#4285F4]">Search Traffic.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                We manage elite Google Ads campaigns that place your brand directly in front of users who are actively searching for your exact services. We focus strictly on conversion value, not just clicks.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Search Campaigns", icon: Search },
                { title: "Performance Max", icon: BarChart3 },
                { title: "Display & Remarketing", icon: MousePointerClick },
                { title: "Local Services Ads", icon: MapPin },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-black/50 hover:border-[#4285F4]/50 transition-colors group"
                >
                  <div className="h-8 w-8 rounded bg-[#4285F4]/10 flex items-center justify-center text-[#4285F4] group-hover:scale-110 transition-transform">
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
                {/* Minimal Google Search Mockup */}
                <div className="bg-white rounded-2xl overflow-hidden border border-white/5">
                   <div className="p-4 border-b border-gray-100 flex items-center gap-4">
                      <div className="w-16 h-5 bg-gray-200 rounded animate-pulse" />
                      <div className="flex-grow h-8 bg-gray-50 rounded-full flex items-center px-4 border border-gray-200 shadow-inner">
                         <div className="h-3 w-1/2 bg-gray-300 rounded" />
                      </div>
                   </div>
                   <div className="p-6 bg-gray-50">
                      {/* Sponsored Result */}
                      <div className="mb-6 bg-white p-4 rounded-xl border border-blue-100 shadow-sm relative overflow-hidden">
                         <div className="absolute left-0 top-0 bottom-0 w-1 bg-[#4285F4]" />
                         <div className="text-xs font-bold text-gray-800 mb-1 flex items-center gap-2">
                            <span className="font-bold">Sponsored</span>
                         </div>
                         <div className="text-sm text-slate-300 mb-1 flex items-center gap-1">
                            <div className="w-4 h-4 rounded-full bg-blue-100 flex items-center justify-center text-[#4285F4] text-[8px]">Ad</div>
                            yourdomain.com
                         </div>
                         <div className="text-lg font-bold text-[#1a0dab] mb-1 hover:underline cursor-pointer">
                            Premium Services | Request a Free Proposal Today
                         </div>
                         <div className="text-sm text-gray-600 mb-3">
                            Premium services engineered for enterprise growth. Contact our experts to scale your business operations seamlessly.
                         </div>
                         <div className="flex gap-4 text-xs font-semibold text-[#1a0dab]">
                            <span>Contact Us</span>
                            <span>Pricing</span>
                            <span>Case Studies</span>
                         </div>
                      </div>
                      
                      {/* Organic Result skeleton */}
                      <div className="bg-white p-4 rounded-xl border border-gray-100 opacity-50">
                         <div className="text-sm text-slate-300 mb-1">competitor.com</div>
                         <div className="text-lg font-bold text-[#1a0dab] mb-1">Standard Services</div>
                         <div className="text-sm text-gray-600">Basic service offering for general needs.</div>
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
