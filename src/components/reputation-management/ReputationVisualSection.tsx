"use client";

import { motion } from "framer-motion";
import { Star, Shield, TrendingUp, CheckCircle, AlertCircle, BarChart2, Bell } from "lucide-react";
import { useState, useEffect } from "react";

export function ReputationVisualSection() {
  const [ratingScore, setRatingScore] = useState(45);
  const [activeWorkflow, setActiveWorkflow] = useState(true);

  // Auto-animate list size slider slightly
  useEffect(() => {
    if (activeWorkflow) {
      const timer = setInterval(() => {
        setRatingScore(prev => {
          const next = prev + 2;
          return next > 98 ? 40 : next;
        });
      }, 3500);
      return () => clearInterval(timer);
    }
  }, [activeWorkflow]);

  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black/60 border-b border-white/5 z-20">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-amber-500/5 via-emerald-500/5 to-indigo-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Decorative top dividing glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-amber-500/15 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-amber-400 font-bold uppercase text-xs tracking-widest font-mono">LISTINGS AUDITS & SENTIMENT ANALYSIS</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Reputation & Trust <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-400 via-emerald-400 to-indigo-500">Dashboards.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We monitor online brand mentions, analyze keyword sentiment, and generate detailed conversion growth charts.
            </p>
          </motion.div>
        </div>

        {/* The Sandbox container */}
        <div className="relative rounded-3xl border border-white/10 glass bg-white/[0.01] p-6 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Grid Background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="reputationVisualGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="#f59e0b" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#reputationVisualGrid)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* COLUMN 1: Sentiment Listening Canvas */}
            <div className="lg:col-span-7 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[420px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-6">
                <span className="text-[10px] font-bold text-muted font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <Bell className="h-3.5 w-3.5 text-amber-400" /> Real-time Sentiment Mentions
                </span>
                <span className="text-[8px] font-bold text-amber-400 bg-amber-500/10 border border-amber-500/20 px-2 py-0.5 rounded-full font-mono">LISTENING ACTIVE</span>
              </div>

              {/* Mentions list simulator */}
              <div className="flex-grow flex flex-col gap-4 relative min-h-[260px] justify-center">
                
                {/* Mention 1 */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  className="glass p-3.5 rounded-xl border border-emerald-500/20 bg-emerald-950/10 flex items-start gap-3.5"
                >
                  <div className="h-7 w-7 rounded-full bg-emerald-500/20 flex items-center justify-center text-emerald-400 shrink-0">
                    <CheckCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold text-white font-mono">Trustpilot Review Verified</span>
                      <span className="text-[7px] text-muted font-mono">2 mins ago</span>
                    </div>
                    <p className="text-[9px] text-muted leading-relaxed mt-1">\"Excellent client onboarding and automated sales reports setups! 5 Stars!\"</p>
                    <div className="flex gap-0.5 mt-1.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-2 w-2 fill-amber-400 text-amber-400" />)}
                    </div>
                  </div>
                </motion.div>

                {/* Mention 2 */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.2 }}
                  className="glass p-3.5 rounded-xl border border-indigo-500/20 bg-indigo-950/10 flex items-start gap-3.5"
                >
                  <div className="h-7 w-7 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 shrink-0">
                    <Shield className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold text-white font-mono">Google Business Profile Listing</span>
                      <span className="text-[7px] text-muted font-mono">1 hour ago</span>
                    </div>
                    <p className="text-[9px] text-muted leading-relaxed mt-1">\"Digipeak updated our GBP settings. Our rankings and leads improved immediately.\"</p>
                    <div className="flex gap-0.5 mt-1.5">
                      {[...Array(5)].map((_, i) => <Star key={i} className="h-2 w-2 fill-amber-400 text-amber-400" />)}
                    </div>
                  </div>
                </motion.div>

                {/* Mention 3 */}
                <motion.div 
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.4 }}
                  className="glass p-3.5 rounded-xl border border-amber-500/20 bg-amber-950/10 flex items-start gap-3.5"
                >
                  <div className="h-7 w-7 rounded-full bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                    <AlertCircle className="h-4 w-4" />
                  </div>
                  <div>
                    <div className="flex items-center gap-2">
                      <span className="text-[9px] font-bold text-white font-mono">Interceded Feedback Request</span>
                      <span className="text-[7px] text-muted font-mono">3 hours ago</span>
                    </div>
                    <p className="text-[9px] text-muted leading-relaxed mt-1">\"Client reported onboarding confusion. Successfully resolved internally in 8 mins.\"</p>
                    <span className="text-[7px] text-emerald-400 font-mono mt-1 block">Rating Intercepted: GBP protected</span>
                  </div>
                </motion.div>

              </div>

              {/* Bottom cluster details */}
              <div className="pt-4 border-t border-white/5 flex items-center justify-between">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-white">Sentiment Alert Level</span>
                  <span className="text-[8px] text-muted">monitoring 15 target keywords</span>
                </div>
                <div className="h-7 px-3 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 flex items-center gap-1 text-[9px] font-bold">
                  <CheckCircle className="h-3 w-3" />
                  Secure
                </div>
              </div>
            </div>

            {/* COLUMN 2: Review Growth & Interactive Simulator */}
            <div className="lg:col-span-5 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[420px]">
              <div className="absolute top-0 left-0 w-32 h-32 bg-emerald-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded bg-amber-500/20 flex items-center justify-center text-amber-400">
                    <BarChart2 className="h-3.5 w-3.5" />
                  </div>
                  <span className="text-[10px] font-bold text-white font-heading leading-none">Trust Rating Simulator</span>
                </div>
                <span className="text-[7px] font-bold text-muted font-mono">Simulate ORM Campaign</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">Rating</div>
                  <div className="text-[10px] font-bold text-white">{(2.5 + (ratingScore / 40)).toFixed(1)}★</div>
                </div>
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">Reviews Count</div>
                  <div className="text-[10px] font-bold text-white">{(4 * ratingScore).toLocaleString()}</div>
                </div>
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">GBP Traffic Lift</div>
                  <div className="text-[10px] font-bold text-emerald-400">+{Math.floor(ratingScore * 3.5)}%</div>
                </div>
              </div>

              {/* Graphical Line charting */}
              <div className="p-4 rounded-xl border border-white/5 bg-black/40 h-32 flex flex-col justify-between mb-4">
                <div className="flex justify-between text-[8px] text-muted font-mono leading-none">
                  <span>Day 0 (Audit)</span>
                  <span>Day 90 (Topical Dominance)</span>
                </div>

                <div className="flex items-end justify-between gap-1.5 h-20 pt-2">
                  {[25, 30, 28, 42, ratingScore - 10, ratingScore, ratingScore + 5, 82, 88, 92, 95, 98].map((barHeight, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                      <motion.div 
                        animate={{ height: `${Math.min(100, barHeight)}%` }} 
                        className={`w-full rounded-t-sm transition-all duration-500 ${idx === 5 || idx === 6 ? 'bg-gradient-to-t from-amber-500 to-emerald-500 shadow-[0_0_15px_rgba(245,158,11,0.4)]' : 'bg-white/10 group-hover/bar:bg-white/20'}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Slider Controller */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-center">
                <div className="flex justify-between text-[10px] text-muted mb-2 font-mono">
                  <span>Simulate Rating Growth</span>
                  <span className="font-bold text-amber-400">Rating: {(2.5 + (ratingScore / 40)).toFixed(1)}★</span>
                </div>
                <input 
                  type="range" 
                  min="20" 
                  max="95" 
                  value={ratingScore} 
                  onChange={(e) => setRatingScore(parseInt(e.target.value))}
                  className="w-full accent-amber-500 bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[7px] text-muted mt-1.5 font-mono">
                  <span>Critical: 3.2★</span>
                  <span>Impenetrable Trust (4.9★)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
