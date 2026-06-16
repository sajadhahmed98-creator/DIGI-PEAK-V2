"use client";

import { useEffect, useState } from "react";
import { motion, useMotionValue, useSpring } from "framer-motion";

export function CursorGlow() {
  const [isMobile, setIsMobile] = useState(true); // Default true to avoid rendering on mobile until checked

  const mouseX = useMotionValue(-500); // Start off-screen
  const mouseY = useMotionValue(-500);

  const springConfig = { damping: 40, stiffness: 150, mass: 0.5 };
  const cursorX = useSpring(mouseX, springConfig);
  const cursorY = useSpring(mouseY, springConfig);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    };
    
    checkMobile();
    window.addEventListener("resize", checkMobile);
    
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  useEffect(() => {
    if (isMobile) return;
    
    const moveCursor = (e: MouseEvent) => {
      mouseX.set(e.clientX - 250); // Center the 500px glow
      mouseY.set(e.clientY - 250);
    };

    window.addEventListener("mousemove", moveCursor, { passive: true });
    return () => window.removeEventListener("mousemove", moveCursor);
  }, [isMobile, mouseX, mouseY]);

  if (isMobile) return null;

  return (
    <motion.div
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[500px] w-[500px] rounded-full mix-blend-screen"
      style={{
        x: cursorX,
        y: cursorY,
        background: "radial-gradient(circle, rgba(168,85,247,0.08) 0%, rgba(59,130,246,0.04) 40%, rgba(0,0,0,0) 70%)",
      }}
    />
  );
}
