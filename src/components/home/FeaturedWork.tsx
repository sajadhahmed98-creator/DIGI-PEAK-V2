"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { Reveal, StaggerContainer, StaggerItem } from "@/components/ui/Reveal";

const projects = [
  {
    title: "Aura Luxury Real Estate",
    industry: "Real Estate",
    country: "Qatar",
    services: ["Web Design", "SEO", "Branding"],
    image: "/images/aura-real-estate.png",
    slug: "/portfolio"
  },
  {
    title: "NexGen FinTech Solutions",
    industry: "FinTech",
    country: "UAE",
    services: ["App Design", "UI/UX", "Branding"],
    image: "/images/nexgen-fintech.png",
    slug: "/portfolio"
  },
  {
    title: "Alpha Medical Group",
    industry: "Healthcare",
    country: "Saudi Arabia",
    services: ["Enterprise SEO", "Local SEO", "Content"],
    image: "/images/alpha-medical.png",
    slug: "/portfolio"
  },
  {
    title: "Velocity Motors",
    industry: "Automotive",
    country: "Australia",
    services: ["E-Commerce", "Paid Ads", "CRO"],
    image: "/images/velocity-motors.png",
    slug: "/portfolio"
  }
];

export function FeaturedWork() {
  return (
    <section className="py-24 md:py-32 px-6 bg-[#03050c] relative">
      <div className="mx-auto max-w-7xl">
        <div className="mb-16 md:mb-20 text-center flex flex-col items-center">
          <Reveal delay={0.1}>
            <h2 className="font-heading text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-4">
              Featured <span className="text-gradient-secondary">Work.</span>
            </h2>
          </Reveal>
          <Reveal delay={0.2}>
            <p className="text-muted text-lg max-w-2xl mx-auto">
              A curated selection of our most impactful digital growth campaigns and enterprise website builds.
            </p>
          </Reveal>
        </div>

        {/* 4-Column Grid with Staggered Reveal */}
        <StaggerContainer delayOffset={0.1} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {projects.map((project, i) => (
            <StaggerItem key={project.title}>
              <Link href={project.slug} className="group block h-full">
                <div className="h-full flex flex-col bg-[#050816] rounded-2xl border border-white/5 overflow-hidden transition-all duration-500 group-hover:border-accent-primary/50 group-hover:-translate-y-2 group-hover:shadow-[0_15px_40px_rgba(168,85,247,0.15)] relative">
                  
                  {/* Thumbnail Image */}
                  <div className="relative w-full h-[220px] overflow-hidden bg-white/5">
                    <Image
                      src={project.image}
                      alt={project.title}
                      fill
                      sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                      className="object-cover transition-transform duration-700 ease-out group-hover:scale-[1.05] opacity-80 group-hover:opacity-100"
                    />
                    {/* Dark gradient overlay at bottom of image */}
                    <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#050816] to-transparent z-10" />
                  </div>
                  
                  {/* Card Content */}
                  <div className="p-6 flex flex-col flex-grow z-20 -mt-6">
                    <h3 className="font-heading text-xl font-bold mb-1.5 text-white group-hover:text-accent-primary transition-colors line-clamp-1">
                      {project.title}
                    </h3>
                    
                    <p className="text-sm text-muted mb-5">
                      {project.industry} <span className="mx-1.5">•</span> {project.country}
                    </p>
                    
                    {/* Tags slide up on hover */}
                    <div className="flex flex-wrap gap-2 mb-6 mt-auto transform translate-y-1 opacity-90 transition-all duration-300 group-hover:translate-y-0 group-hover:opacity-100">
                      {project.services.map(tag => (
                        <span key={tag} className="text-[10px] font-semibold uppercase tracking-wider text-white/70 bg-white/5 border border-white/10 px-2.5 py-1 rounded-md shadow-sm">
                          {tag}
                        </span>
                      ))}
                    </div>
                    
                    {/* CTA */}
                    <div className="flex items-center gap-2 text-sm font-bold text-white group-hover:text-accent-secondary transition-colors mt-auto">
                      View Project 
                      <ArrowRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1.5" />
                    </div>
                  </div>
                </div>
              </Link>
            </StaggerItem>
          ))}
        </StaggerContainer>
        
        {/* View Full Portfolio Button */}
        <div className="mt-20 text-center flex justify-center">
          <Reveal delay={0.4}>
            <Link 
              href="/portfolio" 
              className="inline-flex items-center justify-center px-8 py-3.5 rounded-xl border border-white/10 bg-white/5 hover:bg-white/10 hover:border-white/20 text-white font-bold transition-all duration-300 gap-2 hover:-translate-y-1 hover:shadow-[0_5px_20px_rgba(255,255,255,0.05)]"
            >
              View Full Portfolio
              <ArrowRight className="w-4 h-4" />
            </Link>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
