"use client";

import { motion } from "framer-motion";
import { MousePointerClick, ShieldCheck, Zap, Repeat } from "lucide-react";

export function WhyEcommerceMatters() {
  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 border-y border-white/5 bg-white/[0.01]">
      <div className="mx-auto max-w-7xl">
        <div className="flex flex-col lg:flex-row gap-16 items-center">
          <div className="lg:w-1/2">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6">
                Why E-Commerce Success Requires <span className="text-gradient-secondary">More Than A Store.</span>
              </h2>
              <p className="text-muted text-lg leading-relaxed mb-8">
                Anyone can build a basic store. We architect high-performance sales engines. To scale revenue in today's competitive landscape, your e-commerce platform must be optimized for trust, speed, and frictionless checkout.
              </p>
            </motion.div>

            <ul className="space-y-6">
              {[
                {
                  title: "Conversion Optimization (CRO)",
                  desc: "Every pixel is engineered to guide users to checkout. We implement A/B testing, cart recovery, and upselling systems to maximize Average Order Value (AOV).",
                  icon: MousePointerClick,
                },
                {
                  title: "Impenetrable Trust Signals",
                  desc: "Buyers won't convert without trust. We integrate enterprise-grade security, verified reviews, and transparent policies directly into the UI.",
                  icon: ShieldCheck,
                },
                {
                  title: "Fast Checkout & Mobile Commerce",
                  desc: "With 70%+ of traffic coming from mobile, we build one-click checkout flows and lightning-fast headless architectures to eliminate cart abandonment.",
                  icon: Zap,
                },
                {
                  title: "Revenue Growth & Repeat Purchases",
                  desc: "Acquisition is expensive. We build subscription models and retention sequences to drastically improve Customer Lifetime Value (CLV).",
                  icon: Repeat,
                },
              ].map((item, i) => (
                <motion.li 
                  key={item.title}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="flex gap-4 group"
                >
                  <div className="mt-1 h-12 w-12 shrink-0 rounded-full bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <item.icon className="h-6 w-6 text-emerald-400" />
                  </div>
                  <div>
                    <h3 className="font-bold text-foreground mb-1 text-lg">{item.title}</h3>
                    <p className="text-sm text-muted leading-relaxed">{item.desc}</p>
                  </div>
                </motion.li>
              ))}
            </ul>
          </div>
          <div className="lg:w-1/2 w-full">
            {/* Abstract Checkout Flow Visualization */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="relative w-full aspect-square md:aspect-[4/3] glass rounded-[2rem] border border-white/10 p-8 overflow-hidden flex flex-col items-center justify-center gap-6"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-emerald-600/5 to-teal-500/5 pointer-events-none" />
              
              <div className="absolute top-4 left-4 right-4 flex gap-2">
                 <div className="h-2 w-1/3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                 <div className="h-2 w-1/3 bg-emerald-500 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)]" />
                 <div className="h-2 w-1/3 bg-white/20 rounded-full overflow-hidden relative">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: "100%" }}
                      transition={{ duration: 1.5, delay: 0.5 }}
                      className="absolute inset-0 bg-emerald-500"
                    />
                 </div>
              </div>

              {/* Mockup Product Card -> Cart -> Checkout */}
              <motion.div 
                initial={{ y: 20, opacity: 0 }}
                whileInView={{ y: 0, opacity: 1 }}
                viewport={{ once: true }}
                className="w-full max-w-xs bg-white/5 border border-white/10 p-4 rounded-xl backdrop-blur-md"
              >
                <div className="h-32 w-full bg-white/10 rounded-lg mb-4 flex items-center justify-center">
                  <span className="text-muted text-xs">Premium Product</span>
                </div>
                <div className="h-4 w-3/4 bg-white/20 rounded mb-2" />
                <div className="h-4 w-1/4 bg-emerald-500/50 rounded mb-4" />
                <div className="h-10 w-full bg-emerald-600 rounded-lg flex items-center justify-center text-sm font-bold text-white shadow-[0_0_15px_rgba(16,185,129,0.4)]">
                  Add to Cart — $299
                </div>
              </motion.div>

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 1.5 }}
                className="absolute inset-0 bg-black/60 backdrop-blur-sm flex items-center justify-center z-10"
              >
                <div className="glass p-6 rounded-2xl border border-emerald-500/30 flex flex-col items-center text-center">
                   <div className="h-16 w-16 bg-emerald-500 rounded-full flex items-center justify-center mb-4 shadow-[0_0_30px_rgba(16,185,129,0.5)]">
                     <svg className="w-8 h-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                       <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                     </svg>
                   </div>
                   <h4 className="font-bold text-white text-xl">Payment Successful</h4>
                   <p className="text-muted text-sm mt-1">Zero Friction. High Conversion.</p>
                </div>
              </motion.div>

            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
