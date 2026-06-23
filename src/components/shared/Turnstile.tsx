"use client";

import { useEffect, useRef } from "react";

interface TurnstileProps {
  onVerify: (token: string) => void;
  options?: {
    theme?: "light" | "dark" | "auto";
  };
}

export function Turnstile({ onVerify, options = { theme: "dark" } }: TurnstileProps) {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    let widgetId: string | null = null;
    const siteKey = process.env.NEXT_PUBLIC_TURNSTILE_SITE_KEY || "1x00000000000000000000AA";

    const renderWidget = () => {
      if (window.turnstile && containerRef.current) {
        try {
          widgetId = window.turnstile.render(containerRef.current, {
            sitekey: siteKey,
            theme: options.theme || "dark",
            callback: (token: string) => {
              onVerify(token);
            },
          });
        } catch (e) {
          console.error("Turnstile render error:", e);
        }
      }
    };

    if (window.turnstile) {
      renderWidget();
    } else {
      // Poll until turnstile is available
      const interval = setInterval(() => {
        if (window.turnstile) {
          clearInterval(interval);
          renderWidget();
        }
      }, 100);
      return () => clearInterval(interval);
    }

    return () => {
      if (widgetId && window.turnstile) {
        try {
          window.turnstile.remove(widgetId);
        } catch (e) {
          // Ignore
        }
      }
    };
  }, [onVerify, options.theme]);

  return <div ref={containerRef} className="my-2 flex justify-center" />;
}

// Add global TypeScript interface for window.turnstile
declare global {
  interface Window {
    turnstile?: {
      render: (
        container: string | HTMLElement,
        options: {
          sitekey: string;
          theme?: "light" | "dark" | "auto";
          callback: (token: string) => void;
        }
      ) => string;
      remove: (widgetId: string) => void;
    };
  }
}
