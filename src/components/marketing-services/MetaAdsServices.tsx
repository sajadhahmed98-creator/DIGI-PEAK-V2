"use client";

import { motion } from "framer-motion";
import { Camera, Users, Target, Zap } from "lucide-react";

export function MetaAdsServices() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black">
      {/* Subtle Meta Blue Glow */}
      <div className="absolute top-1/2 left-0 -translate-y-1/2 w-96 h-96 bg-[#0668E1]/10 blur-[100px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col-reverse lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 w-full relative">
             <motion.div 
               initial={{ opacity: 0, x: -20 }}
               whileInView={{ opacity: 1, x: 0 }}
               viewport={{ once: true }}
               className="glass p-2 rounded-[2rem] border border-white/10 shadow-2xl relative z-10 max-w-md mx-auto lg:ml-0"
             >
                {/* Minimal Instagram Mockup */}
                <div className="bg-[#000] rounded-[1.8rem] border-[4px] border-gray-900 overflow-hidden h-[500px] flex flex-col">
                   <div className="h-12 border-b border-gray-800 flex items-center justify-between px-4 text-white">
                      <div className="font-bold font-sans">Instagram</div>
                      <div className="flex gap-3">
                         <div className="w-5 h-5 border-2 border-white rounded-lg" />
                         <div className="w-5 h-5 rounded-full border-2 border-white" />
                      </div>
                   </div>
                   <div className="flex-1 overflow-hidden flex flex-col">
                      <div className="p-3 flex items-center justify-between">
                         <div className="flex items-center gap-2">
                            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
                               <div className="w-full h-full bg-black rounded-full border border-black flex items-center justify-center">
                                  <div className="w-5 h-5 bg-white/20 rounded-full" />
                               </div>
                            </div>
                            <div>
                               <div className="text-xs font-bold text-white flex items-center gap-1">
                                  yourbrand
                                  <svg className="w-3 h-3 text-blue-500" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10 10-4.5 10-10S17.5 2 12 2zm-2 15l-5-5 1.4-1.4 3.6 3.6 7.6-7.6L19 8l-9 9z"/></svg>
                               </div>
                               <div className="text-[10px] text-gray-400">Sponsored</div>
                            </div>
                         </div>
                         <div className="w-4 h-1 flex gap-1 items-center"><div className="w-1 h-1 bg-white rounded-full"/><div className="w-1 h-1 bg-white rounded-full"/><div className="w-1 h-1 bg-white rounded-full"/></div>
                      </div>
                      <div className="flex-1 bg-gradient-to-br from-[#0668E1]/20 to-purple-600/20 flex items-center justify-center relative group">
                         <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                            <div className="bg-[#0668E1] text-white text-xs font-bold px-4 py-2 rounded-full cursor-pointer">Learn More</div>
                         </div>
                         <div className="text-center p-4">
                            <h3 className="text-2xl font-bold text-white mb-2 font-heading">Scale Revenue.</h3>
                            <p className="text-white/80 text-sm">Targeted B2B & B2C Growth.</p>
                         </div>
                      </div>
                      <div className="h-10 bg-gray-900 flex items-center justify-between px-4">
                         <div className="text-sm font-bold text-blue-400">Learn More</div>
                         <div className="text-xs text-gray-400 flex items-center gap-1">
                            Swipe Up <span className="animate-bounce">↑</span>
                         </div>
                      </div>
                      <div className="p-3 border-t border-gray-800">
                         <div className="flex gap-4 mb-2 text-white">
                            <div className="w-5 h-5 rounded-full border-2 border-white" />
                            <div className="w-5 h-5 rounded-full border-2 border-white" />
                            <div className="w-5 h-5 rounded-full border-2 border-white" />
                         </div>
                         <div className="text-xs font-bold text-white mb-1">4,821 likes</div>
                         <div className="text-xs text-white"><span className="font-bold mr-1">yourbrand</span>Ready to dominate your market? Request a free strategy...</div>
                      </div>
                   </div>
                </div>
             </motion.div>
          </div>

          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#0668E1]/10 border border-[#0668E1]/20 text-[#0668E1] text-sm font-bold mb-6">
                 <Camera className="w-4 h-4" />
                 Meta Ads Agency
               </div>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Scale With <span className="text-gradient-secondary">Meta Ads.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Harness the power of Facebook and Instagram's machine learning. We design high-converting visual creatives and build complex lookalike audiences to dramatically lower your Cost Per Lead.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Facebook Advertising", icon: Users },
                { title: "Instagram Advertising", icon: Camera },
                { title: "Lookalike Audiences", icon: Target },
                { title: "Creative A/B Testing", icon: Zap },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.1 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-black/50 hover:border-purple-500/50 transition-colors group"
                >
                  <div className="h-8 w-8 rounded bg-gradient-to-tr from-yellow-400/20 to-purple-600/20 flex items-center justify-center text-purple-400 group-hover:scale-110 transition-transform">
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
