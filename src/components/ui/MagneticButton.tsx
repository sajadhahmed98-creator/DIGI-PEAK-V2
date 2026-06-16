"use client";

import { motion, useMotionValue, useSpring } from "framer-motion";
import { useRef, useState, useEffect } from "react";

export function MagneticButton({
  children,
  className = "",
  strength = 15,
}: {
  children: React.ReactNode;
  className?: string;
  strength?: number;
}) {
  const ref = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.matchMedia("(max-width: 768px)").matches);
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springConfig = { stiffness: 150, damping: 15, mass: 0.1 };
  const springX = useSpring(x, springConfig);
  const springY = useSpring(y, springConfig);

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isMobile || !ref.current) return;
    const { clientX, clientY } = e;
    const { height, width, left, top } = ref.current.getBoundingClientRect();
    const centerX = left + width / 2;
    const centerY = top + height / 2;

    x.set(((clientX - centerX) / width) * strength);
    y.set(((clientY - centerY) / height) * strength);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={handleMouseLeave}
      animate={{ scale: isHovered && !isMobile ? 1.03 : 1 }}
      transition={{ type: "spring", stiffness: 300, damping: 20 }}
      style={{
        x: springX,
        y: springY,
      }}
      className={`inline-block relative z-10 ${className}`}
    >
      {children}
    </motion.div>
  );
}
