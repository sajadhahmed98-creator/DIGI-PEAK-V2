"use client";

import { motion } from "framer-motion";
import { Search, Sparkles, Plus, Award, Settings, BookOpen, LineChart, TrendingUp } from "lucide-react";
import { useState, useEffect } from "react";

export function ContentVisualSection() {
  const [sliderVal, setSliderVal] = useState(45);
  const [activeWorkflow, setActiveWorkflow] = useState(true);

  // Auto-animate background particle or triggers
  useEffect(() => {
    if (activeWorkflow) {
      const timer = setInterval(() => {
        setSliderVal(prev => {
          const next = prev + 5;
          return next > 95 ? 40 : next;
        });
      }, 3000);
      return () => clearInterval(timer);
    }
  }, [activeWorkflow]);

  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black/60 border-b border-white/5 z-20">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-amber-500/5 via-orange-500/5 to-rose-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Decorative top dividing glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/15 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-400 font-bold uppercase text-xs tracking-widest font-mono">SEO Topic Clustering & indexing</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Semantic <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-orange-400 to-rose-500">Authority maps.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We design modular topic clusters linked to high-authority pillar articles, driving massive index authority.
            </p>
          </motion.div>
        </div>

        {/* The Sandbox container */}
        <div className="relative rounded-3xl border border-white/10 glass bg-white/[0.01] p-6 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Grid Background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="editorialGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="#f59e0b" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#editorialGrid)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* COLUMN 1: Visual Topic Cluster Map */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[400px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <span className="text-[10px] font-bold text-muted font-mono uppercase tracking-wider">Semantic Topic Cluster Mapping</span>
                <span className="text-[8px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full font-mono">Autolayout Active</span>
              </div>

              {/* Dynamic cluster layout completely in SVG & CSS */}
              <div className="flex-grow flex items-center justify-center relative min-h-[220px]">
                
                {/* SVG Connections */}
                <svg className="absolute inset-0 w-full h-full z-0" xmlns="http://www.w3.org/2000/svg">
                  <motion.line x1="50%" y1="50%" x2="20%" y2="25%" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
                  <motion.line x1="50%" y1="50%" x2="80%" y2="25%" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
                  <motion.line x1="50%" y1="50%" x2="20%" y2="75%" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
                  <motion.line x1="50%" y1="50%" x2="80%" y2="75%" stroke="#f59e0b" strokeWidth="1" strokeDasharray="3,3" />
                </svg>

                {/* Center Pillar Node */}
                <motion.div 
                  whileHover={{ scale: 1.05 }}
                  className="absolute z-10 glass px-4 py-2.5 rounded-xl border border-amber-500/40 bg-gradient-to-br from-amber-500/10 to-orange-500/10 shadow-[0_0_20px_rgba(245,158,11,0.2)] text-center w-40"
                >
                  <span className="text-[9px] font-bold text-amber-400 uppercase tracking-widest font-mono">Pillar Page</span>
                  <div className="text-[10px] font-bold text-white mt-1 leading-tight">Custom B2B SEO Strategy</div>
                </motion.div>

                {/* Sub-node 1 (Top Left) */}
                <div className="absolute top-[10%] left-[5%] z-10 glass p-3 rounded-xl border border-white/5 bg-black/40 w-32 flex flex-col gap-1">
                  <span className="text-[7px] text-muted font-mono uppercase tracking-wider">Sub-topic article</span>
                  <div className="text-[9px] font-bold text-white leading-tight">Heuristic Keyword Guide</div>
                  <span className="text-[7px] text-emerald-400 font-mono mt-0.5">Rank #2 (Day 45)</span>
                </div>

                {/* Sub-node 2 (Top Right) */}
                <div className="absolute top-[10%] right-[5%] z-10 glass p-3 rounded-xl border border-white/5 bg-black/40 w-32 flex flex-col gap-1">
                  <span className="text-[7px] text-muted font-mono uppercase tracking-wider">Sub-topic article</span>
                  <div className="text-[9px] font-bold text-white leading-tight">Google Ads B2B tips</div>
                  <span className="text-[7px] text-emerald-400 font-mono mt-0.5">Rank #1 (Day 60)</span>
                </div>

                {/* Sub-node 3 (Bottom Left) */}
                <div className="absolute bottom-[10%] left-[5%] z-10 glass p-3 rounded-xl border border-white/5 bg-black/40 w-32 flex flex-col gap-1">
                  <span className="text-[7px] text-muted font-mono uppercase tracking-wider">Sub-topic article</span>
                  <div className="text-[9px] font-bold text-white leading-tight">HubSpot API Webhook Guide</div>
                  <span className="text-[7px] text-emerald-400 font-mono mt-0.5">Rank #3 (Day 30)</span>
                </div>

                {/* Sub-node 4 (Bottom Right) */}
                <div className="absolute bottom-[10%] right-[5%] z-10 glass p-3 rounded-xl border border-white/5 bg-black/40 w-32 flex flex-col gap-1">
                  <span className="text-[7px] text-muted font-mono uppercase tracking-wider">Sub-topic article</span>
                  <div className="text-[9px] font-bold text-white leading-tight">Mobile app optimization</div>
                  <span className="text-[7px] text-emerald-400 font-mono mt-0.5">Rank #1 (Day 90)</span>
                </div>

              </div>

              {/* Bottom cluster details */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white">Cluster Search Authority Score</span>
                  <span className="text-[8px] text-muted">compounding index relevance</span>
                </div>
                <div className="h-7 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1 text-[9px] font-bold">
                  <Award className="h-3 w-3" />
                  98.6% Dominant
                </div>
              </div>
            </div>

            {/* COLUMN 2: GSC Clicks Dashboard & Indexing Slider */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[400px]">
              <div className="absolute top-0 left-0 w-32 h-32 bg-rose-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <LineChart className="h-3 w-3" />
                  </div>
                  <span className="text-[10px] font-bold text-white font-heading leading-none">Organic Search Analytics Dashboard</span>
                </div>
                <span className="text-[7px] font-bold text-muted font-mono">Day {sliderVal} of 90</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">Total Clicks</div>
                  <div className="text-[11px] font-bold text-white">{(450 * sliderVal).toLocaleString()}</div>
                </div>
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">Total Impressions</div>
                  <div className="text-[11px] font-bold text-white">{(12000 * sliderVal).toLocaleString()}</div>
                </div>
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">Average Position</div>
                  <div className="text-[11px] font-bold text-amber-400">{(12 - (sliderVal / 10)).toFixed(1)}</div>
                </div>
              </div>

              {/* Graphical Line charting */}
              <div className="p-4 rounded-xl border border-white/5 bg-black/40 h-32 flex flex-col justify-between mb-4">
                <div className="flex justify-between text-[8px] text-muted font-mono leading-none">
                  <span>Page 4 (Day 0)</span>
                  <span>Page 1 Slot #1 (Day 90)</span>
                </div>

                <div className="flex items-end justify-between gap-1.5 h-20 pt-2">
                  {[20, 24, 22, 35, sliderVal - 10, sliderVal, sliderVal + 5, 82, 85, 92, 95, 98].map((barHeight, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                      <motion.div 
                        animate={{ height: `${Math.min(100, barHeight)}%` }} 
                        className={`w-full rounded-t-sm transition-all duration-500 ${idx === 5 || idx === 6 ? 'bg-gradient-to-t from-amber-500 to-rose-600 shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-white/10 group-hover/bar:bg-white/20'}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controller */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-center">
                <div className="flex justify-between text-[10px] text-muted mb-2 font-mono">
                  <span>Simulate Indexing Timeframe</span>
                  <span className="font-bold text-amber-400">Day {sliderVal}</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="90" 
                  value={sliderVal} 
                  onChange={(e) => setSliderVal(parseInt(e.target.value))}
                  className="w-full accent-amber-500 bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[7px] text-muted mt-1.5 font-mono">
                  <span>Initial crawling</span>
                  <span>Maximum Topical Dominance (Day 90)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
