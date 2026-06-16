"use client";

import { motion } from "framer-motion";
import { Camera, Film, Play, BarChart, Settings, Sliders, Eye, TrendingUp, Sparkles, Volume2 } from "lucide-react";
import { useState, useEffect } from "react";

export function VideoVisualSection() {
  const [playheadPos, setPlayheadPos] = useState(45);
  const [isRecording, setIsRecording] = useState(true);
  const [audioLevels, setAudioLevels] = useState([20, 40, 30, 50, 70, 50, 40, 20]);

  // Animate audio levels slightly
  useEffect(() => {
    const interval = setInterval(() => {
      setAudioLevels(prev => prev.map(() => Math.floor(Math.random() * 60) + 15));
    }, 150);
    return () => clearInterval(interval);
  }, []);

  // Simulate playhead running
  useEffect(() => {
    const timer = setInterval(() => {
      setPlayheadPos(prev => {
        const next = prev + 1;
        return next > 100 ? 0 : next;
      });
    }, 500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black/60 border-b border-white/5 z-20">
      {/* Background soft glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-red-500/5 via-orange-500/5 to-amber-500/5 blur-[150px] pointer-events-none rounded-full" />

      {/* Decorative top dividing glow */}
      <div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent via-red-500/15 to-transparent" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-red-400 font-bold uppercase text-xs tracking-widest font-mono">CINEMATIC PRE-PRODUCTION & ANALYTICS</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Creative Production <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-500 via-orange-500 to-amber-400">Workspace.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We leverage professional workspaces and performance tracking metrics to refine engagement metrics at every cut.
            </p>
          </motion.div>
        </div>

        {/* The Sandbox container */}
        <div className="relative rounded-3xl border border-white/10 glass bg-white/[0.01] p-6 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          {/* Grid Background */}
          <div className="absolute inset-0 z-0 opacity-10 pointer-events-none">
            <svg className="w-full h-full" xmlns="http://www.w3.org/2000/svg">
              <pattern id="cinemaGrid" width="20" height="20" patternUnits="userSpaceOnUse">
                <circle cx="10" cy="10" r="0.5" fill="#ef4444" />
              </pattern>
              <rect width="100%" height="100%" fill="url(#cinemaGrid)" />
            </svg>
          </div>

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            
            {/* COLUMN 1: Cinema Viewfinder & Editing Timeline */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[420px]">
              <div className="absolute top-0 right-0 w-32 h-32 bg-red-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <span className="text-[10px] font-bold text-muted font-mono uppercase tracking-wider flex items-center gap-1.5">
                  <Camera className="h-3 w-3 text-red-500" /> Professional Camera Feed
                </span>
                <button 
                  onClick={() => setIsRecording(!isRecording)} 
                  className="text-[8px] font-bold bg-red-500/10 border border-red-500/20 px-2 py-0.5 rounded-full font-mono flex items-center gap-1.5"
                >
                  <span className={`h-1.5 w-1.5 rounded-full bg-red-500 ${isRecording ? 'animate-pulse' : 'opacity-40'}`}></span>
                  {isRecording ? "RECORDING" : "STANDBY"}
                </button>
              </div>

              {/* Viewfinder Mockup */}
              <div className="relative border border-white/10 rounded-xl overflow-hidden aspect-video bg-zinc-950 flex items-center justify-center mb-6">
                
                {/* Viewfinder grids */}
                <div className="absolute inset-0 border border-white/5 flex grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-rows-3 opacity-30 pointer-events-none">
                  {[...Array(9)].map((_, i) => (
                    <div key={i} className="border border-white/5" />
                  ))}
                </div>

                {/* Battery and Recording stats */}
                <div className="absolute top-2 left-3 text-[7px] font-mono text-muted flex gap-3">
                  <span>FPS: 23.976</span>
                  <span>FOCAL: 50mm</span>
                  <span>LUT: Digipeak_Cinematic</span>
                </div>

                <div className="absolute bottom-2 left-3 text-[7px] font-mono text-muted flex items-center gap-2">
                  <Volume2 className="h-2.5 w-2.5 text-green-400" />
                  <div className="flex gap-0.5 h-3 items-end">
                    {audioLevels.map((lvl, idx) => (
                      <div key={idx} style={{ height: `${lvl}%` }} className="w-1 bg-green-500/80 rounded-t-sm" />
                    ))}
                  </div>
                </div>

                <div className="absolute bottom-2 right-3 text-[7px] font-mono text-muted">
                  <span>SHUTTER: 180°</span>
                </div>

                {/* Center visual overlay */}
                <div className="flex flex-col items-center gap-2 relative z-10">
                  <motion.div 
                    animate={{ scale: [1, 1.05, 1] }} 
                    transition={{ duration: 4, repeat: Infinity }}
                    className="h-10 w-10 rounded-full border border-red-500/40 flex items-center justify-center bg-red-500/10 text-red-500 cursor-pointer shadow-[0_0_15px_rgba(239,68,68,0.3)]"
                  >
                    <Play className="h-4 w-4 fill-current ml-0.5" />
                  </motion.div>
                  <span className="text-[9px] font-bold text-white font-mono uppercase tracking-wider bg-black/60 px-2 py-0.5 rounded">Scene_01_A_Take_04</span>
                </div>
              </div>

              {/* Editing Timeline Timeline Track */}
              <div className="pt-4 border-t border-white/5 flex flex-col gap-2">
                <div className="flex items-center justify-between text-[8px] text-muted font-mono leading-none">
                  <span>00:00:00:00</span>
                  <span>00:00:15:00 (Total Cuts: 8)</span>
                </div>
                
                {/* Timeline tracks mockup */}
                <div className="relative rounded bg-black/40 border border-white/5 p-2 flex flex-col gap-1.5">
                  
                  {/* Playhead bar */}
                  <div 
                    style={{ left: `${playheadPos}%` }} 
                    className="absolute top-0 bottom-0 w-[1.5px] bg-red-500 z-10 transition-all duration-300 pointer-events-none"
                  >
                    <div className="w-1.5 h-1.5 rounded-full bg-red-500 -ml-0.5 -mt-0.5" />
                  </div>

                  <div className="h-3 rounded bg-red-500/20 border border-red-500/30 flex items-center px-1.5 text-[6px] font-mono text-white relative">
                    Track V1: brand_film_main_shot.mov
                  </div>
                  <div className="h-3 rounded bg-amber-500/20 border border-amber-500/30 flex items-center px-1.5 text-[6px] font-mono text-white relative">
                    Track A1: dialogue_narration.wav
                  </div>
                  <div className="h-3 rounded bg-white/5 border border-white/10 flex items-center px-1.5 text-[6px] font-mono text-muted relative">
                    Track A2: cinematic_background_beat.wav
                  </div>
                </div>
              </div>
            </div>

            {/* COLUMN 2: Retention Analytics Dashboard */}
            <div className="lg:col-span-6 flex flex-col justify-between rounded-2xl border border-white/5 bg-black/60 p-6 shadow-2xl relative overflow-hidden backdrop-blur-md min-h-[420px]">
              <div className="absolute top-0 left-0 w-32 h-32 bg-amber-500/5 blur-3xl pointer-events-none rounded-full" />
              
              {/* Header */}
              <div className="flex items-center justify-between pb-4 border-b border-white/5 mb-4">
                <div className="flex items-center gap-2">
                  <div className="h-5 w-5 rounded bg-red-500/20 flex items-center justify-center text-red-400">
                    <BarChart className="h-3 w-3" />
                  </div>
                  <span className="text-[10px] font-bold text-white font-heading leading-none">Audience Watch-Time Retention Dashboard</span>
                </div>
                <span className="text-[7px] font-bold text-muted font-mono">Live Campaign Metrics</span>
              </div>

              {/* Stats */}
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 mb-4">
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">Average Views</div>
                  <div className="text-[11px] font-bold text-white">{(2500 * playheadPos).toLocaleString()}</div>
                </div>
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">Watch Time Metric</div>
                  <div className="text-[11px] font-bold text-white">{(85 + (playheadPos / 10)).toFixed(1)}%</div>
                </div>
                <div className="p-2 rounded bg-white/[0.01] border border-white/5 text-center">
                  <div className="text-[7px] text-muted uppercase font-mono mb-0.5">Engagement Rate</div>
                  <div className="text-[11px] font-bold text-red-400">{(14.2 + (playheadPos / 20)).toFixed(2)}%</div>
                </div>
              </div>

              {/* Graphical Line charting */}
              <div className="p-4 rounded-xl border border-white/5 bg-black/40 h-32 flex flex-col justify-between mb-4 relative">
                <div className="flex justify-between text-[8px] text-muted font-mono leading-none z-10 relative">
                  <span>Hook (0s)</span>
                  <span>Climax (7s)</span>
                  <span>End CTA (15s)</span>
                </div>

                {/* Graph bars representing user retention */}
                <div className="flex items-end justify-between gap-1.5 h-20 pt-2 relative z-10">
                  {[95, 92, 88, 85, 82, 86, 90, 88, 85, 83, 80, 88, 92, 90, 89].map((barHeight, idx) => (
                    <div key={idx} className="flex-1 flex flex-col items-center gap-1 group/bar">
                      <motion.div 
                        animate={{ height: `${barHeight}%` }} 
                        className={`w-full rounded-t-sm transition-all duration-500 ${idx === Math.floor(playheadPos / 7) ? 'bg-gradient-to-t from-red-500 to-amber-500 shadow-[0_0_15px_rgba(239,68,68,0.4)]' : 'bg-white/10 group-hover/bar:bg-white/20'}`}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Interactive controller slider */}
              <div className="p-4 rounded-xl border border-white/5 bg-white/[0.02] flex flex-col justify-center">
                <div className="flex justify-between text-[10px] text-muted mb-2 font-mono">
                  <span>Track Timeline Playback</span>
                  <span className="font-bold text-red-400">{Math.floor(playheadPos / 6.6)}s / 15s</span>
                </div>
                <input 
                  type="range" 
                  min="0" 
                  max="100" 
                  value={playheadPos} 
                  onChange={(e) => setPlayheadPos(parseInt(e.target.value))}
                  className="w-full accent-red-500 bg-white/10 h-1 rounded-lg appearance-none cursor-pointer"
                />
                <div className="flex justify-between text-[7px] text-muted mt-1.5 font-mono">
                  <span>Intro Hook Optimization</span>
                  <span>Retention drop-off check (15s CTA)</span>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
