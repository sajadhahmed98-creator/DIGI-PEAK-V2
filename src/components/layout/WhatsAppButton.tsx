"use client";

import { motion, AnimatePresence } from "framer-motion";
import { useState, useEffect } from "react";
import { X, MessageCircle } from "lucide-react";
import { usePathname } from "next/navigation";

const WHATSAPP_NUMBER = "94773624413";
const PRE_FILLED_MESSAGE = encodeURIComponent(
  "Hello Digipeak,\n\nI would like to discuss my project and receive a proposal."
);
const WHATSAPP_URL = `https://wa.me/${WHATSAPP_NUMBER}?text=${PRE_FILLED_MESSAGE}`;

export function WhatsAppButton() {
  const [isVisible, setIsVisible] = useState(false);
  const [isTooltipVisible, setIsTooltipVisible] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);
  const pathname = usePathname();

  // Hide on specific pages if needed
  useEffect(() => {
    setIsVisible(!["/thank-you", "/digiai"].includes(pathname));
  }, [pathname]);

  // Delay mount to avoid layout shift
  useEffect(() => {
    const t = setTimeout(() => setHasMounted(true), 800);
    return () => clearTimeout(t);
  }, []);

  // Auto-show tooltip briefly after mount to draw attention
  useEffect(() => {
    if (!hasMounted) return;
    const t = setTimeout(() => setIsTooltipVisible(true), 1200);
    const t2 = setTimeout(() => setIsTooltipVisible(false), 4500);
    return () => { clearTimeout(t); clearTimeout(t2); };
  }, [hasMounted]);

  if (!hasMounted || !isVisible) return null;

  return (
    <div
      className="fixed bottom-6 right-6 z-[9999] flex flex-col items-end gap-3"
      style={{ fontFamily: "var(--font-heading, 'Satoshi', sans-serif)" }}
    >
      {/* Tooltip bubble */}
      <AnimatePresence>
        {isTooltipVisible && (
          <motion.div
            initial={{ opacity: 0, y: 8, scale: 0.95 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.95 }}
            transition={{ duration: 0.25, ease: "easeOut" }}
            className="relative flex items-start gap-3 glass rounded-2xl border border-white/10 px-4 py-3 shadow-[0_8px_32px_rgba(0,0,0,0.4)] max-w-[220px]"
          >
            {/* Close button */}
            <button
              onClick={() => setIsTooltipVisible(false)}
              className="absolute top-2 right-2 text-muted hover:text-white transition-colors cursor-pointer"
              aria-label="Dismiss"
            >
              <X className="w-3 h-3" />
            </button>

            <div className="w-8 h-8 rounded-full bg-[#25D366]/15 border border-[#25D366]/30 flex items-center justify-center flex-shrink-0 mt-0.5">
              <MessageCircle className="w-4 h-4 text-[#25D366]" />
            </div>
            <div>
              <p className="text-white text-xs font-semibold leading-tight mb-0.5">
                Chat with us
              </p>
              <p className="text-muted text-[10px] leading-relaxed pr-4">
                Get a free proposal. We reply fast.
              </p>
            </div>

            {/* Tail */}
            <div className="absolute -bottom-[6px] right-6 w-3 h-3 glass border-b border-r border-white/10 rotate-45" />
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main WhatsApp Button */}
      <motion.a
        href={WHATSAPP_URL}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="Chat with Digipeak on WhatsApp"
        initial={{ scale: 0, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20, delay: 0.1 }}
        whileHover={{ scale: 1.15 }}
        whileTap={{ scale: 0.9 }}
        onHoverStart={() => setIsTooltipVisible(true)}
        className="relative flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-full cursor-pointer group"
        style={{
          background: "linear-gradient(135deg, #4ade80 0%, #22c55e 50%, #16a34a 100%)",
          boxShadow: "0 8px 32px rgba(34,197,94,0.4), inset 0 2px 0 rgba(255,255,255,0.2)",
        }}
      >
        {/* Pulse ring (animation every 6s defined via tailwind or framer. Since we need an interval, we'll use a continuous animation) */}
        <span className="absolute inset-0 rounded-full animate-[ping_6s_cubic-bezier(0,0,0.2,1)_infinite] opacity-40 bg-[#22c55e]" />
        
        {/* Glow behind icon */}
        <span className="absolute inset-0 rounded-full bg-[#4ade80] blur-md opacity-0 group-hover:opacity-40 transition-opacity duration-500" />

        {/* Solid White Premium WhatsApp SVG icon */}
        <svg
          className="relative z-10 w-8 h-8 md:w-9 md:h-9 text-white drop-shadow-md"
          viewBox="0 0 24 24"
          fill="currentColor"
          xmlns="http://www.w3.org/2000/svg"
          aria-hidden="true"
        >
          <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
        </svg>
      </motion.a>
    </div>
  );
}
