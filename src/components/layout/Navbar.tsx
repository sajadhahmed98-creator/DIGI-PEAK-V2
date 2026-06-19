"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { MagneticButton } from "@/components/ui/MagneticButton";

export function Navbar() {
  const pathname = usePathname();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { scrollY } = useScroll();
  
  // Transform values for shrinking header
  const headerPy = useTransform(scrollY, [0, 100], ["1rem", "0.5rem"]);
  const navPx = useTransform(scrollY, [0, 100], ["1.5rem", "1rem"]);
  const navBlur = useTransform(scrollY, [0, 100], ["blur(12px)", "blur(20px)"]);
  const navBg = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0.02)", "rgba(10,15,30,0.6)"]);
  const navBorder = useTransform(scrollY, [0, 100], ["rgba(255,255,255,0.05)", "rgba(255,255,255,0.1)"]);
  const navShadow = useTransform(scrollY, [0, 100], ["0 4px 30px rgba(0, 0, 0, 0.1)", "0 10px 30px rgba(0, 0, 0, 0.3)"]);

  // Lock body scroll when mobile menu is open
  useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isMobileMenuOpen]);

  if (pathname === '/digiai') return null;

  const links = [
    { name: "Home", path: "/" },
    { name: "Services", path: "/services" },
    { name: "Portfolio", path: "/portfolio" },
    { name: "Blog", path: "/blog" },
    { name: "DigiAI", path: "/digiai", isAI: true },
    { name: "About", path: "/about" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <motion.header 
      style={{ paddingTop: headerPy, paddingBottom: headerPy }}
      className={`fixed top-0 left-0 right-0 z-50 px-6 ${isMobileMenuOpen ? "h-screen" : "h-auto"}`}
    >
      {/* Mobile Menu Backdrop Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsMobileMenuOpen(false)}
            className="fixed inset-0 bg-black/60 backdrop-blur-sm z-30 md:hidden"
          />
        )}
      </AnimatePresence>

      <motion.nav 
        style={{ 
          paddingLeft: navPx, 
          paddingRight: navPx,
          backgroundColor: navBg,
          backdropFilter: navBlur,
          borderColor: navBorder,
          boxShadow: navShadow
        }}
        className="mx-auto flex max-w-7xl items-center justify-between rounded-full py-2.5 border transition-colors duration-500 relative z-40"
      >
        <Link href="/" className="flex items-center gap-2.5 font-heading text-lg font-bold tracking-tight text-foreground transition-opacity hover:opacity-90 pl-2">
          <img src="/logo.png" alt="Digipeak Logo" className="w-6 h-6 object-contain" />
          <span>Digipeak <span className="text-gradient-primary">Agency</span></span>
        </Link>
        
        <div className="hidden items-center gap-1 md:flex relative">
          {links.map((link) => {
            const isActive = pathname === link.path || (link.path !== "/" && pathname?.startsWith(link.path));
            
            return (
              <Link 
                key={link.name}
                href={link.path} 
                className={`relative py-2 px-4 rounded-full transition-colors duration-300 font-medium text-[13px] tracking-wide flex items-center justify-center group ${
                  isActive ? "text-white" : "text-muted hover:text-white"
                }`}
              >
                {isActive && (
                  <motion.div
                    layoutId="navbar-indicator"
                    className="absolute inset-0 rounded-full bg-white/[0.08] shadow-[0_2px_10px_rgba(168,85,247,0.15)]"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                
                <span className="relative z-10 flex items-center gap-1.5">
                  {link.name}
                  {link.isAI && (
                    <span className="flex items-center gap-1 px-1.5 py-[1px] rounded text-[9px] font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/10 border border-accent-primary/20 shadow-[0_0_10px_rgba(168,85,247,0.15)] group-hover:bg-accent-primary/20 group-hover:shadow-[0_0_15px_rgba(168,85,247,0.3)] transition-all">
                      <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse"></span>
                      AI
                    </span>
                  )}
                </span>
              </Link>
            );
          })}
        </div>
        
        <div className="flex items-center gap-3">
          <div className="hidden md:block pr-1">
            <MagneticButton>
              <Link 
                href="/contact" 
                className="btn-primary px-6 py-2.5 text-xs font-bold uppercase tracking-wider inline-flex items-center justify-center shadow-lg"
              >
                Get Proposal
              </Link>
            </MagneticButton>
          </div>
          {/* Mobile menu button */}
          <button
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            className="flex items-center justify-center min-w-[44px] min-h-[44px] rounded-full md:hidden text-muted hover:text-white bg-white/[0.03] border border-white/5 transition-colors duration-200"
            aria-label="Toggle Menu"
          >
            {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
          </button>
        </div>
      </motion.nav>

      {/* Mobile navigation panel */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div 
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.2 }}
            className="md:hidden nav-glass absolute top-[84px] left-6 right-6 rounded-3xl p-6 flex flex-col gap-3.5 z-40 pointer-events-auto"
          >
            {links.map(link => {
              const isActive = pathname === link.path || (link.path !== "/" && pathname?.startsWith(link.path));
              return (
                <Link 
                  key={link.name}
                  href={link.path} 
                  onClick={() => setIsMobileMenuOpen(false)} 
                  className={`relative py-2 px-4 rounded-full transition-all duration-300 font-medium text-[13px] tracking-wide flex items-center justify-center group ${
                    isActive ? "text-accent-primary bg-white/[0.06]" : "text-muted hover:text-white hover:bg-white/[0.03]"
                  }`}
                >
                  {link.name}
                  {link.isAI && (
                    <span className="ml-1.5 flex items-center gap-1 px-1.5 py-[1px] rounded text-[9px] font-bold uppercase tracking-wider text-accent-primary bg-accent-primary/10 border border-accent-primary/20 shadow-[0_0_10px_rgba(168,85,247,0.15)] group-hover:bg-accent-primary/20 transition-all">
                      <span className="w-1 h-1 rounded-full bg-green-400 animate-pulse"></span>
                      AI
                    </span>
                  )}
                </Link>
              )
            })}
            <Link 
              href="/contact" 
              onClick={() => setIsMobileMenuOpen(false)}
              className="btn-primary w-full py-3.5 mt-2 text-xs font-bold uppercase tracking-wider text-center"
            >
              Get Proposal
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}
