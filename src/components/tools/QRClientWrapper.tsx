"use client";

import dynamic from "next/dynamic";

// Dynamically import the main generator client to prevent canvas hydration mismatch.
const QRCodeGeneratorClient = dynamic(
  () => import("./QRCodeGeneratorClient").then((mod) => mod.QRCodeGeneratorClient),
  { ssr: false }
);

export function QRClientWrapper() {
  return <QRCodeGeneratorClient />;
}
