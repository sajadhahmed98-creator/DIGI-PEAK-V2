import qrcode from "qrcode";

export interface SvgGeneratorOptions {
  value: string;
  ecLevel: "L" | "M" | "Q" | "H";
  bgColor: string;
  fgColor: string;
  qrStyle: "squares" | "dots" | "fluid";
  eyeFrameStyle: "square" | "rounded" | "circle";
  eyeBallStyle: "square" | "rounded" | "circle";
  eyeOuterColor: string;
  eyeInnerColor: string;
  logoImage?: string;
  logoWidthPercent?: number; // e.g. 20 (meaning 20% of size)
  removeQrCodeBehindLogo?: boolean;
}

export function generateQrSvgString(opts: SvgGeneratorOptions): string {
  const {
    value,
    ecLevel = "M",
    bgColor = "#ffffff",
    fgColor = "#000000",
    qrStyle = "squares",
    eyeFrameStyle = "square",
    eyeBallStyle = "square",
    eyeOuterColor = fgColor,
    eyeInnerColor = fgColor,
    logoImage,
    logoWidthPercent = 20,
    removeQrCodeBehindLogo = true,
  } = opts;

  // Create QR Matrix using qrcode package
  const qr = qrcode.create(value, { errorCorrectionLevel: ecLevel });
  const size = qr.modules.size;
  const padding = 2; // Add a small margin inside the SVG coordinate space
  const totalSize = size + padding * 2;

  let svgContent = "";

  // 1. Draw Background
  if (bgColor && bgColor !== "transparent") {
    svgContent += `<rect width="${totalSize}" height="${totalSize}" fill="${bgColor}" />\n`;
  } else {
    svgContent += `<rect width="${totalSize}" height="${totalSize}" fill="none" />\n`;
  }

  // Group container to apply coordinate translation for padding
  svgContent += `<g transform="translate(${padding}, ${padding})">\n`;

  // Logo parameters
  const logoSize = Math.max(2, Math.floor((size * logoWidthPercent) / 100));
  const logoStart = Math.floor((size - logoSize) / 2);
  const logoEnd = logoStart + logoSize;

  const isCenterZone = (row: number, col: number) => {
    if (!removeQrCodeBehindLogo || !logoImage) return false;
    return row >= logoStart && row < logoEnd && col >= logoStart && col < logoEnd;
  };

  const isEyeZone = (row: number, col: number) => {
    // Top-Left Eye (7x7)
    if (row < 7 && col < 7) return true;
    // Top-Right Eye
    if (row < 7 && col >= size - 7) return true;
    // Bottom-Left Eye
    if (row >= size - 7 && col < 7) return true;
    return false;
  };

  // 2. Draw standard dots/squares
  for (let r = 0; r < size; r++) {
    for (let c = 0; c < size; c++) {
      if (qr.modules.get(r, c) === 1 && !isEyeZone(r, c) && !isCenterZone(r, c)) {
        if (qrStyle === "dots") {
          svgContent += `  <circle cx="${c + 0.5}" cy="${r + 0.5}" r="0.4" fill="${fgColor}" />\n`;
        } else if (qrStyle === "fluid") {
          // Standard fluid rounding logic or smooth square
          svgContent += `  <rect x="${c}" y="${r}" width="1.01" height="1.01" rx="0.25" ry="0.25" fill="${fgColor}" />\n`;
        } else {
          svgContent += `  <rect x="${c}" y="${r}" width="1.01" height="1.01" fill="${fgColor}" />\n`;
        }
      }
    }
  }

  // 3. Draw Eyes (Top-Left, Top-Right, Bottom-Left)
  const drawEye = (x: number, y: number) => {
    const cx = x + 3.5;
    const cy = y + 3.5;

    // Draw Outer Frame
    if (eyeFrameStyle === "circle") {
      svgContent += `  <circle cx="${cx}" cy="${cy}" r="3.0" stroke="${eyeOuterColor}" stroke-width="1.0" fill="none" />\n`;
    } else if (eyeFrameStyle === "rounded") {
      svgContent += `  <rect x="${x + 0.5}" y="${y + 0.5}" width="6.0" height="6.0" rx="1.5" ry="1.5" stroke="${eyeOuterColor}" stroke-width="1.0" fill="none" />\n`;
    } else {
      svgContent += `  <rect x="${x + 0.5}" y="${y + 0.5}" width="6.0" height="6.0" stroke="${eyeOuterColor}" stroke-width="1.0" fill="none" />\n`;
    }

    // Draw Inner Eyeball (3x3 modules inside 7x7)
    if (eyeBallStyle === "circle") {
      svgContent += `  <circle cx="${cx}" cy="${cy}" r="1.5" fill="${eyeInnerColor}" />\n`;
    } else if (eyeBallStyle === "rounded") {
      svgContent += `  <rect x="${x + 2}" y="${y + 2}" width="3" height="3" rx="0.8" ry="0.8" fill="${eyeInnerColor}" />\n`;
    } else {
      svgContent += `  <rect x="${x + 2}" y="${y + 2}" width="3" height="3" fill="${eyeInnerColor}" />\n`;
    }
  };

  // Top-Left (0, 0)
  drawEye(0, 0);
  // Top-Right (size - 7, 0)
  drawEye(size - 7, 0);
  // Bottom-Left (0, size - 7)
  drawEye(0, size - 7);

  // 4. Draw Logo
  if (logoImage) {
    svgContent += `  <image href="${logoImage}" x="${logoStart}" y="${logoStart}" width="${logoSize}" height="${logoSize}" />\n`;
  }

  svgContent += "</g>\n";

  // Wrap in complete SVG root
  return `<?xml version="1.0" encoding="UTF-8" standalone="no"?>
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 ${totalSize} ${totalSize}" width="800" height="800">
${svgContent}</svg>`;
}
