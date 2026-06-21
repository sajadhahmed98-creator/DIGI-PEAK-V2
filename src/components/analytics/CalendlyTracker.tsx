"use client";

import { useEffect } from "react";
import { trackClarityEvent } from "./MicrosoftClarity";

export function CalendlyTracker() {
  useEffect(() => {
    const handleMessage = (e: MessageEvent) => {
      // Check if message comes from Calendly
      if (e.origin === "https://calendly.com" || (e.data && e.data.event && e.data.event.indexOf("calendly") === 0)) {
        if (e.data.event === "calendly.event_scheduled") {
          // Identify which funnel this booking belongs to using sessionStorage
          const activeFunnel = sessionStorage.getItem("active_funnel") || "audit";
          
          if (activeFunnel === "proposal") {
            trackClarityEvent("proposal_booked");
          } else if (activeFunnel === "audit") {
            trackClarityEvent("audit_booked");
          } else if (activeFunnel === "digiai") {
            trackClarityEvent("digiai_booked");
          } else {
            trackClarityEvent("calendly_booked");
          }
        }
      }
    };
    
    window.addEventListener("message", handleMessage);
    return () => window.removeEventListener("message", handleMessage);
  }, []);

  return null;
}
