"use client";

import dynamic from "next/dynamic";

const WhatsAppButton = dynamic(
  () => import("./WhatsAppButton").then((mod) => mod.WhatsAppButton),
  { ssr: false }
);

const CookieConsent = dynamic(
  () => import("../shared/CookieConsent").then((mod) => mod.CookieConsent),
  { ssr: false }
);

export function ClientWidgets() {
  return (
    <>
      <WhatsAppButton />
      <CookieConsent />
    </>
  );
}
