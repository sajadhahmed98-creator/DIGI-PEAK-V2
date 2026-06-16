"use client";

import { useEffect } from "react";
import { usePathname } from "next/navigation";

export function ScrollToTop() {
  const pathname = usePathname();

  useEffect(() => {
    try {
      // Force immediate reset of the window scroll position to the very top
      window.scrollTo({
        top: 0,
        left: 0,
        behavior: "instant" as ScrollBehavior,
      });

      // Secondary fallback for certain browsers or custom overflow elements
      document.documentElement.scrollTop = 0;
      document.body.scrollTop = 0;
    } catch (e) {
      // Direct fallback if scrollTo options are unsupported
      window.scrollTo(0, 0);
    }
  }, [pathname]);

  return null;
}
