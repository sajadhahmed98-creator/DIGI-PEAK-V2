"use client";

import { motion } from "framer-motion";
import { Search, Send, Landmark, Coins, CheckCircle2 } from "lucide-react";

const steps = [
  {
    step: "Step 1",
    num: "01",
    icon: Search,
    title: "Find Businesses",
    desc: "Connect with businesses that need digital growth services.",
  },
  {
    step: "Step 2",
    num: "02",
    icon: Send,
    title: "Submit Requirements",
    desc: "Share project details through the partner portal.",
  },
  {
    step: "Step 3",
    num: "03",
    icon: Landmark,
    title: "Receive Partner Pricing",
    desc: "Get reseller rates from Digipeak.",
  },
  {
    step: "Step 4",
    num: "04",
    icon: Coins,
    title: "Sell At Your Price",
    desc: "You choose your margin and profit.",
  },
  {
    step: "Step 5",
    num: "05",
    icon: CheckCircle2,
    title: "We Deliver",
    desc: "Digipeak handles fulfillment and execution.",
  },
];

export function ResellerHowItWorks() {
  return (
    <section className="py-10 md:py-16 lg:py-20 px-6 relative z-10 bg-black border-t border-white/5">
      <div className="mx-auto max-w-6xl w-full">
        
        {/* Section Header */}
        <div className="text-center mb-16">
          <span className="text-accent-primary font-bold uppercase text-xs tracking-widest font-mono">Process Flow</span>
          <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
            How The Reseller Program Works
          </h2>
          <p className="text-muted text-base max-w-xl mx-auto">
            A simple, secure process built to help you resell services and maintain client coordination.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6 relative">
          {steps.map((s, i) => (
            <motion.div
              key={s.step}
              initial={{ opacity: 0, y: 25 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              className="glass border border-white/5 bg-white/[0.01] rounded-2xl p-6 text-center relative group hover:border-indigo-500/20 transition-all duration-300"
            >
              <div className="absolute inset-0 bg-gradient-to-br from-indigo-500/3 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <div className="relative z-10">
                {/* Step indicator */}
                <span className="text-[10px] font-bold text-accent-primary uppercase tracking-widest font-mono mb-4 block">
                  {s.step}
                </span>

                {/* Icon box */}
                <div className="w-12 h-12 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 mb-5 mx-auto relative">
                  <s.icon className="w-5.5 h-5.5" />
                  <div className="absolute -top-1.5 -right-1.5 w-5 h-5 rounded-full bg-indigo-500 border border-indigo-400 flex items-center justify-center text-[9px] font-bold text-white font-mono">
                    {s.num}
                  </div>
                </div>

                <h3 className="font-heading text-base font-bold text-white mb-2 leading-snug">
                  {s.title}
                </h3>
                <p className="text-xs text-muted leading-relaxed">
                  {s.desc}
                </p>
              </div>
            </motion.div>
          ))}
        </div>

      </div>
    </section>
  );
}
