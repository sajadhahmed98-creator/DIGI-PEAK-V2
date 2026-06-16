"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { ArrowRight, Mail } from "lucide-react";

export function CareersCTA() {
  const scrollToForm = () => {
    const element = document.getElementById("application-form-section");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <section className="relative py-24 md:py-16 md:py-24 lg:py-32 overflow-hidden px-6">
      {/* Background with tech grid */}
      <div className="absolute inset-0 z-0 bg-black">
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center opacity-20" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-gradient-to-tr from-accent-primary/10 to-indigo-500/10 rounded-full blur-[100px] pointer-events-none" />
      </div>

      <div className="relative z-10 mx-auto max-w-4xl text-center glass p-8 md:p-16 rounded-[2rem] border border-white/10 shadow-2xl">
        <motion.div
          initial={{ opacity: 0, scale: 0.9 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <h2 className="font-heading text-3xl md:text-5xl lg:text-3xl md:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6 text-white leading-tight">
            Ready To Join <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-primary via-accent-secondary to-indigo-400">The Digipeak Talent Network?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted mb-10 max-w-2xl mx-auto leading-relaxed">
            Submit your profile today and become part of our future growth journey. Let's build digital authority together.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
            <button
              onClick={scrollToForm}
              className="w-full sm:w-auto btn-primary group flex items-center justify-center gap-2 px-8 py-4 text-base font-semibold text-white cursor-pointer"
            >
              Submit CV
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </button>
            
            <Link
              href="/contact"
              className="w-full sm:w-auto group flex items-center justify-center gap-2 rounded-full border border-white/20 glass px-8 py-4 text-base font-medium transition-colors hover:bg-white/10 text-white"
            >
              <Mail className="h-4.5 w-4.5 text-muted group-hover:text-white" />
              Contact Recruitment Team
            </Link>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
