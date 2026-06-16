"use client";

import { motion, AnimatePresence } from "framer-motion";
import { Smartphone, Star, ShieldCheck, ShoppingCart, CreditCard, Sparkles, Check, Tablet, Watch } from "lucide-react";
import { useState, useEffect } from "react";

export function MobileVisualSection() {
  const [selectedProduct, setSelectedProduct] = useState(0);
  const [cartCount, setCartCount] = useState(0);
  const [checkoutStep, setCheckoutStep] = useState("cart"); // cart, paying, complete

  const products = [
    { name: "Digipeak Ultra Watch", price: "$299", desc: "Titanium Edition Smartwatch", img: "⌚", color: "from-indigo-500 to-purple-600" },
    { name: "Aura Pods Pro", price: "$149", desc: "Spatial Audio Earbuds", img: "🎧", color: "from-cyan-400 to-indigo-500" },
    { name: "Neo Charger 100W", price: "$59", desc: "GaN Fast Multi-Charger", img: "🔌", color: "from-pink-500 to-rose-500" }
  ];

  // Auto trigger cart addition simulation in demo mode if idle
  useEffect(() => {
    if (checkoutStep === "complete") {
      const timer = setTimeout(() => {
        setCheckoutStep("cart");
        setCartCount(0);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [checkoutStep]);

  const handleAddToCart = () => {
    setCartCount(prev => prev + 1);
    setCheckoutStep("paying");
    
    // Simulate Apple Pay sheet opening and auto-completing
    setTimeout(() => {
      setCheckoutStep("complete");
    }, 2000);
  };

  return (
    <section className="py-12 md:py-20 lg:py-24 px-6 relative overflow-hidden bg-black/60 border-b border-white/5 z-20">
      {/* Dynamic light glows */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[900px] h-[500px] bg-gradient-to-r from-indigo-500/5 via-blue-500/5 to-cyan-500/5 blur-[150px] pointer-events-none rounded-full" />

      <div className="mx-auto max-w-7xl relative z-10">
        <div className="text-center mb-16 md:mb-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
          >
            <span className="text-indigo-400 font-bold uppercase text-xs tracking-widest font-mono">Interactive Ecosystem Simulator</span>
            <h2 className="font-heading text-3xl md:text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mt-2 mb-4 text-white">
              Seamless <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-blue-400 to-cyan-400">Mobile Experiences.</span>
            </h2>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              We build smooth, native app interactions. Experience a live simulated transaction in our code-crafted iPhone mockup.
            </p>
          </motion.div>
        </div>

        <div className="relative rounded-3xl border border-white/10 glass bg-white/[0.01] p-6 lg:p-12 shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden">
          
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            
            {/* COLUMN 1: High Fidelity Code-Crafted iPhone Device */}
            <div className="lg:col-span-6 flex justify-center order-2 lg:order-1">
              
              {/* Phone Frame */}
              <div className="relative w-[290px] h-[580px] rounded-[45px] border-4 border-[#1e293b] bg-black shadow-[0_25px_60px_rgba(0,0,0,0.8)] p-3.5 flex flex-col justify-between overflow-hidden">
                {/* Speaker Ear Piece & Dynamic Island */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-28 h-6 rounded-full bg-black z-40 border border-white/5 flex items-center justify-center gap-1.5 px-2">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse" />
                  <span className="text-[7px] text-white/40 font-mono font-bold uppercase tracking-wider">Dynamic Island</span>
                </div>

                {/* Simulated Screen Body */}
                <div className="flex-grow rounded-[32px] bg-[#090a0f] p-4 flex flex-col justify-between overflow-hidden relative z-30 pt-8 border border-white/5">
                  
                  {/* Internal App Navigation */}
                  <div className="flex justify-between items-center pb-3 border-b border-white/5 mb-3">
                    <span className="text-[8px] font-bold text-indigo-400 font-mono">★ DIGIPEAK LUXE</span>
                    <div className="flex items-center gap-2">
                      <div className="relative">
                        <ShoppingCart className="h-3.5 w-3.5 text-white/80" />
                        {cartCount > 0 && (
                          <span className="absolute -top-1.5 -right-1.5 h-3.5 w-3.5 rounded-full bg-indigo-500 text-white font-bold text-[7px] flex items-center justify-center shadow">
                            {cartCount}
                          </span>
                        )}
                      </div>
                    </div>
                  </div>

                  {/* App Screen: Cart State */}
                  {checkoutStep === "cart" && (
                    <div className="flex-grow flex flex-col justify-between">
                      <div>
                        {/* Interactive Product Viewer */}
                        <div className={`rounded-xl bg-gradient-to-br ${products[selectedProduct].color} p-4 aspect-[1.3] flex items-center justify-center text-2xl md:text-3xl lg:text-4xl shadow-inner relative group overflow-hidden`}>
                          <div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none" />
                          <span className="drop-shadow-lg transform group-hover:scale-110 transition-transform duration-300">{products[selectedProduct].img}</span>
                        </div>

                        {/* Title and details */}
                        <div className="mt-3">
                          <h4 className="font-heading text-xs font-bold text-white leading-tight">{products[selectedProduct].name}</h4>
                          <p className="text-[9px] text-muted mt-0.5">{products[selectedProduct].desc}</p>
                          <div className="text-sm font-extrabold text-white mt-1.5">{products[selectedProduct].price}</div>
                        </div>

                        {/* Mini products pagination bullets */}
                        <div className="flex items-center gap-1.5 mt-4 justify-center">
                          {products.map((p, idx) => (
                            <button 
                              key={idx} 
                              onClick={() => setSelectedProduct(idx)}
                              className={`h-6 w-8 rounded-lg flex items-center justify-center text-xs border transition-all ${selectedProduct === idx ? 'bg-white/10 border-indigo-400 text-white' : 'bg-white/5 border-white/5 text-muted hover:border-white/20'}`}
                            >
                              {p.img}
                            </button>
                          ))}
                        </div>
                      </div>

                      {/* Buy Button */}
                      <button 
                        onClick={handleAddToCart}
                        className="w-full py-2.5 rounded-xl bg-gradient-to-r from-indigo-500 to-cyan-400 text-white font-bold text-[10px] transition-all hover:opacity-90 shadow-[0_4px_15px_rgba(99,102,241,0.3)] mt-4 uppercase tracking-wider flex items-center justify-center gap-1.5"
                      >
                        <CreditCard className="h-3 w-3" />
                        Quick Apple Pay
                      </button>
                    </div>
                  )}

                  {/* App Screen: Paying State */}
                  {checkoutStep === "paying" && (
                    <div className="flex-grow flex flex-col justify-center items-center text-center">
                      <div className="h-16 w-16 rounded-full bg-indigo-500/10 border border-indigo-500/30 flex items-center justify-center text-indigo-400 mb-4 animate-pulse">
                        <CreditCard className="h-8 w-8" />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1">Authenticating Apple Pay</h4>
                      <p className="text-[8px] text-muted max-w-[160px] leading-relaxed">Simulating touch-ID verification in secure mobile sandbox environment...</p>
                      
                      {/* Loading spinner */}
                      <div className="mt-4 h-1.5 w-16 bg-white/10 rounded-full overflow-hidden">
                        <motion.div 
                          animate={{ x: [-60, 60] }} 
                          transition={{ duration: 1.5, repeat: Infinity, ease: "easeInOut" }} 
                          className="h-full w-8 bg-indigo-500 rounded-full" 
                        />
                      </div>
                    </div>
                  )}

                  {/* App Screen: Complete State */}
                  {checkoutStep === "complete" && (
                    <div className="flex-grow flex flex-col justify-center items-center text-center">
                      <div className="h-14 w-14 rounded-full bg-emerald-500/20 border border-emerald-500/30 flex items-center justify-center text-emerald-400 mb-4">
                        <Check className="h-6 w-6" />
                      </div>
                      <h4 className="text-xs font-bold text-white mb-1">Payment Successful!</h4>
                      <p className="text-[8px] text-muted max-w-[160px] leading-relaxed">Thank you! Your transaction completed securely. Product order has been synchronized with the database.</p>
                      <div className="text-[9px] font-bold text-emerald-400 font-mono mt-3">Order ID: #DPK-89420</div>
                    </div>
                  )}

                </div>
              </div>
            </div>

            {/* COLUMN 2: Descriptive details & Multi-device Ecosystem Panels */}
            <div className="lg:col-span-6 space-y-6 order-1 lg:order-2">
              <h3 className="font-heading text-xl md:text-2xl font-bold text-white leading-tight">
                Responsive Device <br />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 to-cyan-400">Ecosystem Framework.</span>
              </h3>
              <p className="text-sm text-muted leading-relaxed">
                We design with full responsiveness in mind, ensuring your mobile product adapts beautifully across every possible device, resolution, and operating system.
              </p>

              {/* Floating Panels showing multi-device details */}
              <div className="space-y-4">
                
                {/* Panel 1: App Store Badge & Ratings */}
                <div className="glass p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-indigo-500/20 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-amber-500/10 border border-amber-500/20 flex items-center justify-center text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.1)]">
                    <Star className="h-5 w-5 fill-amber-500/20" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-muted uppercase tracking-wider">App Store Performance</div>
                    <div className="text-sm font-bold text-white mt-0.5">4.9 Average Rating (12k+ Reviews)</div>
                  </div>
                </div>

                {/* Panel 2: Table Responsive Frame */}
                <div className="glass p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-indigo-500/20 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400">
                    <Tablet className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-muted uppercase tracking-wider">Tablet Adaptability</div>
                    <div className="text-sm font-bold text-white mt-0.5">Shared Layout Systems for iPad & Android Tablets</div>
                  </div>
                </div>

                {/* Panel 3: Watch OS / Smartwatch System */}
                <div className="glass p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-indigo-500/20 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-cyan-500/10 border border-cyan-500/20 flex items-center justify-center text-cyan-400">
                    <Watch className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-muted uppercase tracking-wider">Wearable OS Integration</div>
                    <div className="text-sm font-bold text-white mt-0.5">WatchOS & Wear OS Notification Engines</div>
                  </div>
                </div>

                {/* Panel 4: Security Compliant Seal */}
                <div className="glass p-5 rounded-2xl border border-white/5 flex items-center gap-4 hover:border-indigo-500/20 transition-colors">
                  <div className="h-10 w-10 rounded-xl bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center text-emerald-400">
                    <ShieldCheck className="h-5 w-5" />
                  </div>
                  <div>
                    <div className="text-[10px] font-semibold text-muted uppercase tracking-wider">Compliance Guarantee</div>
                    <div className="text-sm font-bold text-white mt-0.5">100% GDPR, PCI-DSS, & ISO 27001 Compliant</div>
                  </div>
                </div>

              </div>
            </div>

          </div>
        </div>
      </div>
    </section>
  );
}
