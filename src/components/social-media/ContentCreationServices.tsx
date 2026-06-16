"use client";

import { motion } from "framer-motion";
import { Image as ImageIcon, Video, LayoutTemplate, Layers, Wand2, MonitorPlay, Palette, Lightbulb, Zap } from "lucide-react";

export function ContentCreationServices() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-y border-white/5 bg-white/[0.01] relative overflow-hidden">
      {/* Abstract Glowing Content Orbs */}
      <div className="absolute top-1/4 left-0 -translate-x-1/2 w-64 h-64 bg-pink-500/10 blur-[100px] pointer-events-none rounded-full" />
      <div className="absolute bottom-1/4 right-0 translate-x-1/2 w-80 h-80 bg-purple-500/10 blur-[120px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2 relative z-10">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
               <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-pink-500/10 border border-pink-500/20 text-pink-400 text-sm font-bold mb-6">
                 <Palette className="w-4 h-4" />
                 Creative Studio
               </div>
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Premium <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-400 to-purple-500">Content Creation.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Your brand's visual identity dictates its perceived value. We produce high-end, scroll-stopping content that captures attention and commands respect in the feed.
              </p>
            </motion.div>

            <div className="grid grid-cols-1 sm:grid-cols-1 sm:grid-cols-2 gap-4">
              {[
                { title: "Post Design", icon: ImageIcon },
                { title: "Carousel Design", icon: Layers },
                { title: "Reels Strategy", icon: MonitorPlay },
                { title: "Short Form Video", icon: Video },
                { title: "Motion Graphics", icon: Wand2 },
                { title: "Story Design", icon: LayoutTemplate },
                { title: "Branded Content", icon: Zap },
                { title: "Creative Direction", icon: Lightbulb },
              ].map((item, i) => (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: i * 0.05 }}
                  className="flex items-center gap-3 p-4 rounded-xl border border-white/5 bg-black/50 hover:border-pink-500/50 transition-colors group"
                >
                  <div className="h-8 w-8 rounded bg-gradient-to-tr from-pink-500/20 to-purple-500/20 flex items-center justify-center text-pink-400 group-hover:scale-110 transition-transform">
                     <item.icon className="w-4 h-4" />
                  </div>
                  <span className="font-semibold text-sm text-foreground/90 group-hover:text-white transition-colors">{item.title}</span>
                </motion.div>
              ))}
            </div>
          </div>
          
          <div className="lg:w-1/2 w-full relative">
             <motion.div 
               initial={{ opacity: 0, scale: 0.95 }}
               whileInView={{ opacity: 1, scale: 1 }}
               viewport={{ once: true }}
               className="relative glass p-4 rounded-[2rem] border border-white/10 shadow-2xl z-10"
             >
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                   <div className="space-y-4">
                      {/* Vertical Post Mockup */}
                      <div className="rounded-2xl overflow-hidden bg-gradient-to-br from-gray-800 to-gray-900 border border-white/5 aspect-[4/5] relative group">
                         <div className="absolute inset-0 bg-pink-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm">
                            <span className="bg-white/10 px-4 py-2 rounded-full text-xs font-bold text-white border border-white/20">View Design</span>
                         </div>
                         <div className="absolute top-4 left-4 flex gap-2">
                            <div className="w-6 h-6 rounded-full bg-white/20" />
                            <div className="h-4 w-20 rounded bg-white/10 mt-1" />
                         </div>
                         <div className="absolute bottom-4 left-4 right-4 h-8 rounded bg-white/10" />
                      </div>
                      
                      {/* Square Post Mockup */}
                      <div className="rounded-2xl overflow-hidden bg-gradient-to-tr from-purple-900 to-indigo-900 border border-white/5 aspect-square relative group">
                         <div className="absolute inset-0 bg-purple-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm" />
                         <div className="w-full h-full flex items-center justify-center">
                            <MonitorPlay className="w-12 h-12 text-white/20" />
                         </div>
                      </div>
                   </div>

                   <div className="space-y-4 pt-8">
                      {/* Carousel Mockup */}
                      <div className="rounded-2xl overflow-hidden bg-gradient-to-bl from-pink-900 to-orange-900 border border-white/5 aspect-square relative group flex items-center justify-center">
                         <div className="absolute inset-0 bg-orange-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm" />
                         <Layers className="w-12 h-12 text-white/20" />
                      </div>

                      {/* Video/Story Mockup */}
                      <div className="rounded-2xl overflow-hidden bg-gradient-to-t from-gray-900 via-gray-800 to-gray-900 border border-white/5 aspect-[9/16] relative group">
                         <div className="absolute inset-0 bg-indigo-500/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center backdrop-blur-sm" />
                         <div className="absolute bottom-4 left-4 right-4 flex justify-between items-end">
                            <div className="space-y-2">
                               <div className="h-3 w-24 bg-white/20 rounded" />
                               <div className="h-2 w-32 bg-white/10 rounded" />
                            </div>
                            <div className="flex flex-col gap-2">
                               <div className="w-8 h-8 rounded-full bg-white/20" />
                               <div className="w-8 h-8 rounded-full bg-white/20" />
                            </div>
                         </div>
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
