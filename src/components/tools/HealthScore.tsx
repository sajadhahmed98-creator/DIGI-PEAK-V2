import React from "react";
import { CheckCircle2, AlertTriangle, HelpCircle } from "lucide-react";

interface HealthScoreProps {
  fgColor: string;
  bgColor: string;
  ecLevel: "L" | "M" | "Q" | "H";
  valueLength: number;
}

// Convert hex color to relative luminance
function getLuminance(hex: string): number {
  let cleanHex = hex.replace("#", "");
  if (cleanHex.length === 3) {
    cleanHex = cleanHex
      .split("")
      .map((char) => char + char)
      .join("");
  }
  const r = parseInt(cleanHex.substring(0, 2), 16) / 255;
  const g = parseInt(cleanHex.substring(2, 4), 16) / 255;
  const b = parseInt(cleanHex.substring(4, 6), 16) / 255;

  const a = [r, g, b].map((v) => {
    return v <= 0.03928 ? v / 12.92 : Math.pow((v + 0.055) / 1.055, 2.4);
  });
  return a[0] * 0.2126 + a[1] * 0.7152 + a[2] * 0.0722;
}

export function HealthScore({ fgColor, bgColor, ecLevel, valueLength }: HealthScoreProps) {
  // Compute contrast ratio
  let contrast = 21;
  let contrastText = "Excellent";
  let contrastColor = "text-emerald-400";
  let isContrastOk = true;

  try {
    const l1 = getLuminance(bgColor === "transparent" ? "#ffffff" : bgColor);
    const l2 = getLuminance(fgColor);
    const brightest = Math.max(l1, l2);
    const darkest = Math.min(l1, l2);
    contrast = (brightest + 0.05) / (darkest + 0.05);

    if (contrast < 2.5) {
      contrastText = "Critical (Low Contrast)";
      contrastColor = "text-red-400 border-red-500/20";
      isContrastOk = false;
    } else if (contrast < 4.5) {
      contrastText = "Fair (Low Light Issues)";
      contrastColor = "text-amber-400 border-amber-500/20";
      isContrastOk = false;
    }
  } catch {
    // Fail-safe
  }

  // Value density logic (longer text = harder to read)
  const isTooLong = valueLength > 200;
  const isDensityHigh = valueLength > 100;

  // Compute overall score (starts at 100)
  let score = 100;
  if (!isContrastOk) {
    score -= contrast < 2.5 ? 40 : 20;
  }
  if (isTooLong) {
    score -= 15;
  } else if (isDensityHigh) {
    score -= 5;
  }
  if (ecLevel === "L") {
    score -= 5; // Low error correction leaves less room for wear-and-tear
  } else if (ecLevel === "H") {
    score += 5; // High error correction helps scanning
  }
  score = Math.min(100, Math.max(10, score));

  // Determine physical size recommendation
  let sizeRec = "2.5 cm (1.0 inch)";
  if (valueLength > 120) {
    sizeRec = "4.0 cm (1.6 inches)";
  } else if (valueLength > 60) {
    sizeRec = "3.2 cm (1.25 inches)";
  }

  return (
    <div className="glass border border-white/5 p-6 rounded-3xl space-y-6 relative overflow-hidden">
      <div className="absolute top-0 right-0 w-24 h-24 bg-accent-primary/5 rounded-full blur-xl pointer-events-none" />

      {/* Header & Overall Score */}
      <div className="flex items-center justify-between pb-4 border-b border-white/5">
        <div className="space-y-1">
          <h4 className="text-sm font-semibold text-white uppercase tracking-wider">QR Code Health Score</h4>
          <p className="text-xs text-muted">Real-time scan reliability audit</p>
        </div>
        <div className="text-right">
          <div className="text-3xl font-black font-heading text-gradient-primary">
            {score}/100
          </div>
          <span className="text-[10px] bg-white/5 border border-white/10 px-2 py-0.5 rounded-full text-muted uppercase font-bold">
            {score >= 90 ? "Excellent" : score >= 70 ? "Good" : "Action Required"}
          </span>
        </div>
      </div>

      {/* Audit Checklist */}
      <div className="space-y-4">
        <div className="flex items-start gap-3">
          {isContrastOk ? (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          ) : (
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          )}
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-white flex items-center gap-1.5">
              Color Contrast Ratio: {contrast.toFixed(1)}:1
            </div>
            <p className="text-xs text-muted leading-relaxed">
              {isContrastOk
                ? "Excellent contrast between dots and background. Compatible with all camera lens standards."
                : "Warning: High contrast is required. Light colors or custom pastels can prevent phone scans."}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          {isTooLong ? (
            <AlertTriangle className="w-5 h-5 text-amber-400 shrink-0 mt-0.5" />
          ) : (
            <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          )}
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-white">
              Data Payload Density: {valueLength} chars
            </div>
            <p className="text-xs text-muted leading-relaxed">
              {isTooLong
                ? "High character count makes the QR grid highly dense and smaller modules harder to read."
                : "Optimal payload length. Clean spacing between modules ensures rapid camera acquisition."}
            </p>
          </div>
        </div>

        <div className="flex items-start gap-3">
          <CheckCircle2 className="w-5 h-5 text-emerald-400 shrink-0 mt-0.5" />
          <div className="space-y-0.5">
            <div className="text-xs font-bold text-white">
              Error Correction Level: {ecLevel === "H" ? "30% (High)" : ecLevel === "Q" ? "25%" : ecLevel === "M" ? "15% (Medium)" : "7% (Low)"}
            </div>
            <p className="text-xs text-muted leading-relaxed">
              {ecLevel === "H"
                ? "Standardized for wear-and-tear. QR remains readable even if up to 30% of the area is damaged or obscured by a logo."
                : "Standard level. Provides reliable read rates under ordinary conditions."}
            </p>
          </div>
        </div>
      </div>

      {/* Printing & Sizing Recommendations */}
      <div className="pt-4 border-t border-white/5 space-y-3">
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-white/[0.02] border border-white/5 p-3 rounded-2xl space-y-1">
            <span className="text-[10px] text-muted uppercase tracking-wider block">Min Print Size</span>
            <span className="text-xs font-bold text-white">{sizeRec}</span>
          </div>
          <div className="bg-white/[0.02] border border-white/5 p-3 rounded-2xl space-y-1">
            <span className="text-[10px] text-muted uppercase tracking-wider block">Scan Distance</span>
            <span className="text-xs font-bold text-white">
              Max {Math.round(valueLength > 100 ? 2.5 : 4)} meters
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
