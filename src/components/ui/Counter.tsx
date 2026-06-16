"use client";

import { useEffect, useRef, useState } from "react";
import { useInView, useMotionValue, useSpring, animate } from "framer-motion";

interface CounterProps {
  from?: number;
  to: number;
  duration?: number;
  className?: string;
  suffix?: string;
  prefix?: string;
}

export function Counter({
  from = 0,
  to,
  duration = 2,
  className = "",
  suffix = "",
  prefix = "",
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-50px" });
  const [displayValue, setDisplayValue] = useState(from);

  useEffect(() => {
    if (inView) {
      const controls = animate(from, to, {
        duration: duration,
        ease: "easeOut",
        onUpdate(value) {
          setDisplayValue(Math.round(value));
        },
      });
      return () => controls.stop();
    }
  }, [inView, from, to, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}{displayValue}{suffix}
    </span>
  );
}
