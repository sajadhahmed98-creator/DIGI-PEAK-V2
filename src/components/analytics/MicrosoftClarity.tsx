"use client";

import Script from "next/script";

interface MicrosoftClarityProps {
  clarityId: string;
}

// Global utility for event tracking
export const trackClarityEvent = (eventName: string) => {
  if (typeof window !== "undefined") {
    if ((window as any).clarity) {
      (window as any).clarity("event", eventName);
    }
    // Always console log in development environment to verify tracking
    if (process.env.NODE_ENV !== "production") {
      console.log(`[Microsoft Clarity Event]: ${eventName}`);
    }
  }
};

export default function MicrosoftClarity({ clarityId }: MicrosoftClarityProps) {
  const activeId = clarityId || "mv0z89qpf6"; // Placeholder fallback for production-ready integration

  // Only load in production
  if (process.env.NODE_ENV !== "production") {
    return (
      <Script id="microsoft-clarity-mock" strategy="afterInteractive">
        {`
          window.clarity = window.clarity || function() {
            (window.clarity.q = window.clarity.q || []).push(arguments);
          };
          console.log("Microsoft Clarity initialized in mock mode (development). Project ID: ${activeId}");
        `}
      </Script>
    );
  }

  return (
    <Script id="microsoft-clarity" strategy="afterInteractive">
      {`
        (function(c,l,a,r,i,t,y){
            c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
            t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
            y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
        })(window, document, "clarity", "script", "${activeId}");
      `}
    </Script>
  );
}

