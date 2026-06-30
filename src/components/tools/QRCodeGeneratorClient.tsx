"use client";

import React, { useState, useEffect, useRef } from "react";
import { QRCode } from "react-qrcode-logo";
import { generateQrSvgString } from "@/utils/qrSvgGenerator";
import { HealthScore } from "./HealthScore";
import { MockupGenerator } from "./MockupGenerator";
import {
  Link as LinkIcon,
  AlignLeft,
  Wifi,
  Mail,
  Phone,
  MessageSquare,
  FileText,
  User,
  Sliders,
  Palette,
  Image as ImageIcon,
  Check,
  Download,
  Printer,
  Sparkles,
  HelpCircle,
} from "lucide-react";

type QRType = "url" | "text" | "wifi" | "whatsapp" | "email" | "phone" | "vcard" | "social";

export function QRCodeGeneratorClient() {
  const [activeTab, setActiveTab] = useState<QRType>("url");

  // QR Value Inputs
  const [urlVal, setUrlVal] = useState("https://www.digipeak.agency");
  const [textVal, setTextVal] = useState("Hello from Digipeak Agency!");
  const [wifiSsid, setWifiSsid] = useState("My Home WiFi");
  const [wifiPassword, setWifiPassword] = useState("Password123");
  const [wifiSecurity, setWifiSecurity] = useState("WPA");
  const [waPhone, setWaPhone] = useState("+974 5555 1234");
  const [waMessage, setWaMessage] = useState("Hi, I want to inquire about your services.");
  const [emailTo, setEmailTo] = useState("hello@digipeak.agency");
  const [emailSubject, setEmailSubject] = useState("Growth Query");
  const [emailBody, setEmailBody] = useState("I would like to audit my website performance.");
  const [phoneNum, setPhoneNum] = useState("+974 5555 1234");
  
  // vCard Inputs
  const [vcFirst, setVcFirst] = useState("Sajadh");
  const [vcLast, setVcLast] = useState("Ahmed");
  const [vcPhone, setVcPhone] = useState("+974 5555 1234");
  const [vcEmail, setVcEmail] = useState("hello@digipeak.agency");
  const [vcCompany, setVcCompany] = useState("Digipeak Agency");
  const [vcTitle, setVcTitle] = useState("Founder");
  const [vcUrl, setVcUrl] = useState("https://www.digipeak.agency");
  const [vcAddress, setVcAddress] = useState("West Bay, Doha, Qatar");

  // Social Inputs
  const [socialPlatform, setSocialPlatform] = useState("linkedin");
  const [socialUser, setSocialUser] = useState("sajadh-ahmed");

  // Styling Customization State
  const [fgColor, setFgColor] = useState("#000000");
  const [bgColor, setBgColor] = useState("#ffffff");
  const [qrStyle, setQrStyle] = useState<"squares" | "dots" | "fluid">("squares");
  
  // Custom eye styles (Frame / Ball)
  const [eyeFrameStyle, setEyeFrameStyle] = useState<"square" | "rounded" | "circle">("square");
  const [eyeBallStyle, setEyeBallStyle] = useState<"square" | "rounded" | "circle">("square");
  const [customEyeColors, setCustomEyeColors] = useState(false);
  const [eyeOuterColor, setEyeOuterColor] = useState("#000000");
  const [eyeInnerColor, setEyeInnerColor] = useState("#000000");

  // Logo Customization State
  const [logoFile, setLogoFile] = useState<string | undefined>(undefined);
  const [logoSize, setLogoSize] = useState(20); // 10% to 30%
  const [logoPadding, setLogoPadding] = useState(4);
  const [removeBgBehindLogo, setRemoveBgBehindLogo] = useState(true);

  // Settings state
  const [ecLevel, setEcLevel] = useState<"L" | "M" | "Q" | "H">("H");
  const [quietZone, setQuietZone] = useState(10);

  // Live Canvas Data URL for downloads
  const [qrPngUrl, setQrPngUrl] = useState("");
  const [finalQrValue, setFinalQrValue] = useState("");

  const canvasRef = useRef<HTMLDivElement>(null);

  // Re-calculate the absolute final QR value string when any input changes
  useEffect(() => {
    let computedValue = "";
    switch (activeTab) {
      case "url":
        computedValue = urlVal.startsWith("http") ? urlVal : `https://${urlVal}`;
        break;
      case "text":
        computedValue = textVal;
        break;
      case "wifi":
        // WIFI:S:SSID;T:WPA;P:PASSWORD;;
        computedValue = `WIFI:S:${wifiSsid};T:${wifiSecurity};P:${wifiPassword};;`;
        break;
      case "whatsapp":
        const cleanPhone = waPhone.replace(/\s+/g, "");
        computedValue = `https://wa.me/${cleanPhone}?text=${encodeURIComponent(waMessage)}`;
        break;
      case "email":
        computedValue = `mailto:${emailTo}?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;
        break;
      case "phone":
        computedValue = `tel:${phoneNum}`;
        break;
      case "vcard":
        computedValue = `BEGIN:VCARD
VERSION:3.0
N:${vcLast};${vcFirst};;;
FN:${vcFirst} ${vcLast}
ORG:${vcCompany}
TITLE:${vcTitle}
TEL;TYPE=CELL:${vcPhone}
EMAIL;TYPE=PREF,INTERNET:${vcEmail}
URL:${vcUrl}
ADR;TYPE=WORK:;;${vcAddress};;;;
END:VCARD`;
        break;
      case "social":
        if (socialPlatform === "instagram") {
          computedValue = `https://instagram.com/${socialUser}`;
        } else if (socialPlatform === "linkedin") {
          computedValue = `https://linkedin.com/in/${socialUser}`;
        } else if (socialPlatform === "twitter") {
          computedValue = `https://twitter.com/${socialUser}`;
        } else if (socialPlatform === "youtube") {
          computedValue = `https://youtube.com/@${socialUser}`;
        } else {
          computedValue = socialUser;
        }
        break;
      default:
        computedValue = urlVal;
    }
    setFinalQrValue(computedValue || " ");
  }, [
    activeTab,
    urlVal,
    textVal,
    wifiSsid,
    wifiPassword,
    wifiSecurity,
    waPhone,
    waMessage,
    emailTo,
    emailSubject,
    emailBody,
    phoneNum,
    vcFirst,
    vcLast,
    vcPhone,
    vcEmail,
    vcCompany,
    vcTitle,
    vcUrl,
    vcAddress,
    socialPlatform,
    socialUser,
  ]);

  // Extract canvas data URL after QR Code finishes rendering on the canvas
  useEffect(() => {
    const timer = setTimeout(() => {
      if (canvasRef.current) {
        const canvas = canvasRef.current.querySelector("canvas");
        if (canvas) {
          setQrPngUrl(canvas.toDataURL("image/png"));
        }
      }
    }, 150);
    return () => clearTimeout(timer);
  }, [finalQrValue, fgColor, bgColor, qrStyle, eyeFrameStyle, eyeBallStyle, customEyeColors, eyeOuterColor, eyeInnerColor, logoFile, logoSize, logoPadding, removeBgBehindLogo, ecLevel, quietZone]);

  // Handle logo file upload
  const handleLogoUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onload = (event) => {
        if (event.target?.result) {
          setLogoFile(event.target.result as string);
        }
      };
      reader.readAsDataURL(file);
    }
  };

  // Convert custom eye frames/balls into coordinate boundary radii
  // eyeRadius can be [outer, inner] or [topLeft, topRight, bottomLeft]
  const getEyeRadii = (): any => {
    const getRadiusValue = (style: "square" | "rounded" | "circle", isOuter: boolean) => {
      if (style === "circle") return isOuter ? 100 : 100;
      if (style === "rounded") return isOuter ? 12 : 6;
      return 0; // square
    };

    const radii = {
      outer: getRadiusValue(eyeFrameStyle, true),
      inner: getRadiusValue(eyeBallStyle, false),
    };

    return [radii, radii, radii]; // Apply same radius style to all three eyes
  };

  // Dynamic colors for eyes
  const getEyeColors = (): any => {
    if (!customEyeColors) return undefined;
    const colors = {
      outer: eyeOuterColor,
      inner: eyeInnerColor,
    };
    return [colors, colors, colors];
  };

  // Trigger file download
  const downloadFile = (dataUrl: string, extension: string) => {
    const link = document.createElement("a");
    link.href = dataUrl;
    link.download = `digipeak-qrcode-${Date.now()}.${extension}`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  // JPG / WEBP Download
  const downloadRaster = (format: "jpeg" | "webp") => {
    if (!qrPngUrl) return;
    const canvas = document.createElement("canvas");
    const ctx = canvas.getContext("2d");
    const img = new Image();
    img.src = qrPngUrl;
    img.onload = () => {
      canvas.width = img.width;
      canvas.height = img.height;
      if (ctx) {
        ctx.fillStyle = bgColor === "transparent" ? "#ffffff" : bgColor;
        ctx.fillRect(0, 0, canvas.width, canvas.height);
        ctx.drawImage(img, 0, 0);
        downloadFile(canvas.toDataURL(`image/${format}`), format === "jpeg" ? "jpg" : "webp");
      }
    };
  };

  // Custom SVG download
  const handleSvgDownload = () => {
    const svgString = generateQrSvgString({
      value: finalQrValue,
      ecLevel: ecLevel,
      bgColor: bgColor,
      fgColor: fgColor,
      qrStyle: qrStyle,
      eyeFrameStyle: eyeFrameStyle,
      eyeBallStyle: eyeBallStyle,
      eyeOuterColor: customEyeColors ? eyeOuterColor : fgColor,
      eyeInnerColor: customEyeColors ? eyeInnerColor : fgColor,
      logoImage: logoFile,
      logoWidthPercent: logoSize,
      removeQrCodeBehindLogo: removeBgBehindLogo,
    });

    const blob = new Blob([svgString], { type: "image/svg+xml;charset=utf-8" });
    const blobUrl = URL.createObjectURL(blob);
    downloadFile(blobUrl, "svg");
    URL.revokeObjectURL(blobUrl);
  };

  // Print & PDF Export Window
  const handlePdfExport = () => {
    if (!qrPngUrl) return;
    const pdfWindow = window.open("", "_blank");
    if (!pdfWindow) return;
    pdfWindow.document.write(`
      <html>
        <head>
          <title>Print QR Code | Digipeak Agency</title>
          <style>
            body {
              margin: 0;
              padding: 0;
              display: flex;
              flex-direction: column;
              align-items: center;
              justify-content: center;
              height: 100vh;
              font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
              background-color: #ffffff;
              color: #030712;
            }
            .container {
              text-align: center;
              max-width: 500px;
              padding: 40px;
              border: 1px solid #f3f4f6;
              border-radius: 24px;
              box-shadow: 0 20px 40px rgba(0, 0, 0, 0.03);
            }
            .logo {
              font-weight: 900;
              font-size: 18px;
              letter-spacing: 2px;
              margin-bottom: 24px;
              color: #000;
            }
            .qr-wrapper {
              display: inline-block;
              padding: 16px;
              border: 1px solid #e5e7eb;
              border-radius: 16px;
              background: #fff;
            }
            .qr-img {
              width: 300px;
              height: 300px;
              display: block;
            }
            .meta {
              margin-top: 24px;
              font-size: 11px;
              color: #6b7280;
              word-break: break-all;
            }
            .btn {
              margin-top: 32px;
              padding: 12px 30px;
              background-color: #000000;
              color: #ffffff;
              border: none;
              border-radius: 9999px;
              font-size: 13px;
              font-weight: 700;
              cursor: pointer;
              transition: all 0.2s;
            }
            .btn:hover {
              opacity: 0.9;
            }
            @media print {
              .btn {
                display: none;
              }
              body {
                height: auto;
              }
              .container {
                border: none;
                box-shadow: none;
                padding: 0;
              }
            }
          </style>
        </head>
        <body>
          <div class="container">
            <div class="logo">DIGIPEAK</div>
            <div class="qr-wrapper">
              <img class="qr-img" src="${qrPngUrl}" />
            </div>
            <div class="meta">
              <strong>Scan Destination:</strong><br/>
              ${finalQrValue}
            </div>
            <button class="btn" onclick="window.print()">PRINT / SAVE AS PDF</button>
          </div>
        </body>
      </html>
    `);
    pdfWindow.document.close();
  };

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* 1. Left controls section (7 cols) */}
      <div className="lg:col-span-7 space-y-6">
        {/* Core Input Tabs Card */}
        <div className="glass border border-white/5 p-6 rounded-3xl space-y-6">
          <div className="flex items-center justify-between border-b border-white/5 pb-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">1. Select QR Destination Type</h3>
          </div>

          {/* Types grid */}
          <div className="grid grid-cols-3 sm:grid-cols-4 gap-2">
            {[
              { id: "url", label: "Website URL", icon: LinkIcon },
              { id: "text", label: "Plain Text", icon: AlignLeft },
              { id: "wifi", label: "WiFi Access", icon: Wifi },
              { id: "whatsapp", label: "WhatsApp", icon: MessageSquare },
              { id: "email", label: "Email Mailto", icon: Mail },
              { id: "phone", label: "Phone Call", icon: Phone },
              { id: "vcard", label: "Contact vCard", icon: User },
              { id: "social", label: "Social Profile", icon: Sparkles },
            ].map((t) => {
              const Icon = t.icon;
              const isActive = activeTab === t.id;
              return (
                <button
                  key={t.id}
                  onClick={() => setActiveTab(t.id as QRType)}
                  className={`flex flex-col items-center justify-center p-3 rounded-2xl border transition-all text-center gap-1.5 ${
                    isActive
                      ? "bg-accent-primary/[0.08] border-accent-primary/50 text-white shadow-[0_0_15px_rgba(168,85,247,0.15)]"
                      : "bg-white/[0.01] border-white/5 text-muted hover:bg-white/[0.03] hover:text-white"
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="text-[10px] font-bold tracking-wide uppercase">{t.label}</span>
                </button>
              );
            })}
          </div>

          {/* Content Inputs fields */}
          <div className="bg-white/[0.01] border border-white/5 p-5 rounded-2xl space-y-4">
            {activeTab === "url" && (
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Enter Destination Link</label>
                <input
                  type="text"
                  value={urlVal}
                  onChange={(e) => setUrlVal(e.target.value)}
                  placeholder="https://example.com"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                />
              </div>
            )}

            {activeTab === "text" && (
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Enter Text Message</label>
                <textarea
                  value={textVal}
                  onChange={(e) => setTextVal(e.target.value)}
                  placeholder="Enter standard text info here..."
                  rows={4}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary resize-none"
                />
              </div>
            )}

            {activeTab === "wifi" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Network Name (SSID)</label>
                  <input
                    type="text"
                    value={wifiSsid}
                    onChange={(e) => setWifiSsid(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Security Type</label>
                  <select
                    value={wifiSecurity}
                    onChange={(e) => setWifiSecurity(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                  >
                    <option value="WPA">WPA/WPA2</option>
                    <option value="WEP">WEP</option>
                    <option value="nopass">Unsecured</option>
                  </select>
                </div>
                {wifiSecurity !== "nopass" && (
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">WiFi Password</label>
                    <input
                      type="password"
                      value={wifiPassword}
                      onChange={(e) => setWifiPassword(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                )}
              </div>
            )}

            {activeTab === "whatsapp" && (
              <div className="space-y-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted tracking-wider">WhatsApp Phone Number</label>
                  <input
                    type="text"
                    value={waPhone}
                    onChange={(e) => setWaPhone(e.target.value)}
                    placeholder="+974 5555 1234"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                  />
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Pre-filled Chat Message</label>
                  <textarea
                    value={waMessage}
                    onChange={(e) => setWaMessage(e.target.value)}
                    rows={3}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary resize-none"
                  />
                </div>
              </div>
            )}

            {activeTab === "email" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Receiver Email</label>
                    <input
                      type="email"
                      value={emailTo}
                      onChange={(e) => setEmailTo(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Subject Line</label>
                    <input
                      type="text"
                      value={emailSubject}
                      onChange={(e) => setEmailSubject(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Body Message</label>
                  <textarea
                    value={emailBody}
                    onChange={(e) => setEmailBody(e.target.value)}
                    rows={3}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary resize-none"
                  />
                </div>
              </div>
            )}

            {activeTab === "phone" && (
              <div className="space-y-2">
                <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Phone Number</label>
                <input
                  type="text"
                  value={phoneNum}
                  onChange={(e) => setPhoneNum(e.target.value)}
                  placeholder="+974 5555 1234"
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                />
              </div>
            )}

            {activeTab === "vcard" && (
              <div className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">First Name</label>
                    <input
                      type="text"
                      value={vcFirst}
                      onChange={(e) => setVcFirst(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Last Name</label>
                    <input
                      type="text"
                      value={vcLast}
                      onChange={(e) => setVcLast(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Phone</label>
                    <input
                      type="text"
                      value={vcPhone}
                      onChange={(e) => setVcPhone(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Email</label>
                    <input
                      type="email"
                      value={vcEmail}
                      onChange={(e) => setVcEmail(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Company</label>
                    <input
                      type="text"
                      value={vcCompany}
                      onChange={(e) => setVcCompany(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Job Title</label>
                    <input
                      type="text"
                      value={vcTitle}
                      onChange={(e) => setVcTitle(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Website URL</label>
                    <input
                      type="text"
                      value={vcUrl}
                      onChange={(e) => setVcUrl(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                  <div className="sm:col-span-2 space-y-2">
                    <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Physical Address</label>
                    <input
                      type="text"
                      value={vcAddress}
                      onChange={(e) => setVcAddress(e.target.value)}
                      className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === "social" && (
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Select Platform</label>
                  <select
                    value={socialPlatform}
                    onChange={(e) => setSocialPlatform(e.target.value)}
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                  >
                    <option value="linkedin">LinkedIn</option>
                    <option value="instagram">Instagram</option>
                    <option value="twitter">Twitter / X</option>
                    <option value="youtube">YouTube</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-[10px] uppercase font-bold text-muted tracking-wider">Username / Handle</label>
                  <input
                    type="text"
                    value={socialUser}
                    onChange={(e) => setSocialUser(e.target.value)}
                    placeholder="profile-name"
                    className="w-full bg-black/40 border border-white/10 rounded-xl px-4 py-3 text-sm text-white focus:outline-none focus:border-accent-primary"
                  />
                </div>
              </div>
            )}
          </div>
        </div>

        {/* Customization Accordion Section */}
        <div className="glass border border-white/5 rounded-3xl overflow-hidden divide-y divide-white/5">
          {/* Section 1: Colors */}
          <div className="p-6 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Palette className="w-4 h-4 text-accent-primary" /> 2. Brand Colors
            </h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] text-muted uppercase tracking-wider font-bold">QR Modules (Foreground)</label>
                <div className="flex gap-2 items-center">
                  <input
                    type="color"
                    value={fgColor}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="w-10 h-10 border-0 bg-transparent rounded cursor-pointer"
                  />
                  <input
                    type="text"
                    value={fgColor.toUpperCase()}
                    onChange={(e) => setFgColor(e.target.value)}
                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white uppercase focus:outline-none"
                  />
                </div>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] text-muted uppercase tracking-wider font-bold">Background Color</label>
                <div className="flex gap-2 items-center">
                  <input
                    type="color"
                    value={bgColor === "transparent" ? "#ffffff" : bgColor}
                    onChange={(e) => setBgColor(e.target.value)}
                    disabled={bgColor === "transparent"}
                    className="w-10 h-10 border-0 bg-transparent rounded cursor-pointer disabled:opacity-30"
                  />
                  <input
                    type="text"
                    value={bgColor.toUpperCase()}
                    onChange={(e) => setBgColor(e.target.value)}
                    disabled={bgColor === "transparent"}
                    className="flex-1 bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white uppercase focus:outline-none disabled:opacity-30"
                  />
                </div>
                <div className="flex items-center gap-2 pt-1">
                  <input
                    type="checkbox"
                    id="transBg"
                    checked={bgColor === "transparent"}
                    onChange={(e) => setBgColor(e.target.checked ? "transparent" : "#ffffff")}
                    className="rounded border-white/10 bg-black/40 text-accent-primary focus:ring-0"
                  />
                  <label htmlFor="transBg" className="text-[10px] text-muted uppercase font-bold cursor-pointer">
                    Transparent Background
                  </label>
                </div>
              </div>
            </div>
          </div>

          {/* Section 2: Patterns & Eyes */}
          <div className="p-6 space-y-6">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4 text-accent-secondary" /> 3. Pattern &amp; Eye Styling
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              {/* Dot Shape */}
              <div className="space-y-2">
                <label className="text-[10px] text-muted uppercase tracking-wider font-bold block">QR Code Module Shape</label>
                <div className="flex flex-col gap-1.5">
                  {[
                    { id: "squares", label: "Classic Squares" },
                    { id: "dots", label: "Modern Circles" },
                    { id: "fluid", label: "Fluid Rounded" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setQrStyle(option.id as any)}
                      className={`text-left px-3 py-2 rounded-xl text-xs border ${
                        qrStyle === option.id
                          ? "bg-accent-primary/10 border-accent-primary text-white"
                          : "bg-white/[0.01] border-white/5 text-muted hover:text-white"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Eye Outer Frame */}
              <div className="space-y-2">
                <label className="text-[10px] text-muted uppercase tracking-wider font-bold block">Position Eye Frame</label>
                <div className="flex flex-col gap-1.5">
                  {[
                    { id: "square", label: "Sharp Square" },
                    { id: "rounded", label: "Rounded Frame" },
                    { id: "circle", label: "Circular Eye" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setEyeFrameStyle(option.id as any)}
                      className={`text-left px-3 py-2 rounded-xl text-xs border ${
                        eyeFrameStyle === option.id
                          ? "bg-accent-secondary/10 border-accent-secondary text-white"
                          : "bg-white/[0.01] border-white/5 text-muted hover:text-white"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Eye Inner Ball */}
              <div className="space-y-2">
                <label className="text-[10px] text-muted uppercase tracking-wider font-bold block">Center Eye Ball</label>
                <div className="flex flex-col gap-1.5">
                  {[
                    { id: "square", label: "Sharp Square" },
                    { id: "rounded", label: "Rounded Ball" },
                    { id: "circle", label: "Circular Ball" },
                  ].map((option) => (
                    <button
                      key={option.id}
                      onClick={() => setEyeBallStyle(option.id as any)}
                      className={`text-left px-3 py-2 rounded-xl text-xs border ${
                        eyeBallStyle === option.id
                          ? "bg-accent-primary/10 border-accent-primary text-white"
                          : "bg-white/[0.01] border-white/5 text-muted hover:text-white"
                      }`}
                    >
                      {option.label}
                    </button>
                  ))}
                </div>
              </div>
            </div>

            {/* Custom Eye Colors toggler */}
            <div className="pt-4 border-t border-white/5 space-y-4">
              <div className="flex items-center gap-2">
                <input
                  type="checkbox"
                  id="customEyeColors"
                  checked={customEyeColors}
                  onChange={(e) => setCustomEyeColors(e.target.checked)}
                  className="rounded border-white/10 bg-black/40 text-accent-primary focus:ring-0"
                />
                <label htmlFor="customEyeColors" className="text-[10px] text-muted uppercase font-bold cursor-pointer">
                  Customize Position Eye Colors
                </label>
              </div>

              {customEyeColors && (
                <div className="grid grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-muted uppercase tracking-wider font-bold block">Outer Eye Frame</span>
                    <input
                      type="color"
                      value={eyeOuterColor}
                      onChange={(e) => setEyeOuterColor(e.target.value)}
                      className="w-full h-8 bg-transparent border-0 cursor-pointer"
                    />
                  </div>
                  <div className="space-y-1.5">
                    <span className="text-[10px] text-muted uppercase tracking-wider font-bold block">Inner Eye Ball</span>
                    <input
                      type="color"
                      value={eyeInnerColor}
                      onChange={(e) => setEyeInnerColor(e.target.value)}
                      className="w-full h-8 bg-transparent border-0 cursor-pointer"
                    />
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 3: Logo Upload */}
          <div className="p-6 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <ImageIcon className="w-4 h-4 text-accent-primary" /> 4. Logo Integration
            </h4>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 items-center">
              <div className="space-y-3">
                <label className="text-[10px] text-muted uppercase tracking-wider font-bold block">Upload Brand Logo</label>
                <div className="relative">
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleLogoUpload}
                    className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-10"
                  />
                  <div className="border border-white/10 bg-white/[0.01] hover:bg-white/[0.03] transition-colors rounded-2xl py-6 px-4 text-center cursor-pointer">
                    <span className="text-xs font-semibold text-accent-primary block">Select PNG/SVG Logo</span>
                    <span className="text-[9px] text-muted block mt-1">Logo displays centered inside QR</span>
                  </div>
                </div>
                {logoFile && (
                  <button
                    onClick={() => setLogoFile(undefined)}
                    className="text-[9px] text-red-400 uppercase font-bold tracking-wide hover:underline block"
                  >
                    Remove Logo File
                  </button>
                )}
              </div>

              {logoFile && (
                <div className="space-y-4">
                  <div className="space-y-1">
                    <div className="flex justify-between items-center text-[10px] font-bold text-muted uppercase">
                      <span>Logo Size Scale</span>
                      <span className="text-white">{logoSize}%</span>
                    </div>
                    <input
                      type="range"
                      min="10"
                      max="30"
                      value={logoSize}
                      onChange={(e) => setLogoSize(Number(e.target.value))}
                      className="w-full h-1 bg-white/10 rounded-lg appearance-none cursor-pointer accent-accent-primary"
                    />
                  </div>

                  <div className="flex items-center gap-2">
                    <input
                      type="checkbox"
                      id="removeBg"
                      checked={removeBgBehindLogo}
                      onChange={(e) => setRemoveBgBehindLogo(e.target.checked)}
                      className="rounded border-white/10 bg-black/40 text-accent-primary focus:ring-0"
                    />
                    <label htmlFor="removeBg" className="text-[10px] text-muted uppercase font-bold cursor-pointer">
                      Remove modules behind logo
                    </label>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Section 4: Advanced settings */}
          <div className="p-6 space-y-4">
            <h4 className="text-xs font-bold text-white uppercase tracking-wider flex items-center gap-2">
              <Sliders className="w-4 h-4 text-accent-secondary" /> 5. Error Correction &amp; Density
            </h4>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-1.5">
                <label className="text-[10px] text-muted uppercase tracking-wider font-bold block">Error Correction Level</label>
                <select
                  value={ecLevel}
                  onChange={(e) => setEcLevel(e.target.value as any)}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                >
                  <option value="L">Level L (7% recovery)</option>
                  <option value="M">Level M (15% recovery)</option>
                  <option value="Q">Level Q (25% recovery)</option>
                  <option value="H">Level H (30% recovery - Best for logo)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-[10px] text-muted uppercase tracking-wider font-bold block">Quiet Zone (Margin)</label>
                <input
                  type="number"
                  min="0"
                  max="40"
                  value={quietZone}
                  onChange={(e) => setQuietZone(Number(e.target.value))}
                  className="w-full bg-black/40 border border-white/10 rounded-xl px-3 py-2 text-xs text-white focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 2. Right output section (5 cols) */}
      <div className="lg:col-span-5 space-y-6">
        {/* Core Live QR preview and Download Card */}
        <div className="glass border border-white/5 p-6 rounded-3xl space-y-6 flex flex-col items-center relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-accent-primary/5 via-transparent to-transparent pointer-events-none" />
          
          <div className="text-center w-full border-b border-white/5 pb-4">
            <h3 className="text-sm font-semibold text-white uppercase tracking-wider">QR Code Preview</h3>
            <p className="text-[10px] text-muted">Updates in real-time as you edit parameters</p>
          </div>

          {/* QR Canvas Render Container */}
          <div 
            ref={canvasRef} 
            className="p-4 bg-white border border-white/10 rounded-3xl shadow-[0_20px_50px_rgba(0,0,0,0.4)] flex justify-center items-center"
          >
            <QRCode
              value={finalQrValue || " "}
              size={260}
              bgColor={bgColor}
              fgColor={fgColor}
              qrStyle={qrStyle}
              eyeRadius={getEyeRadii()}
              eyeColor={getEyeColors()}
              logoImage={logoFile}
              logoWidth={logoFile ? Math.max(26, Math.floor((260 * logoSize) / 100)) : undefined}
              logoHeight={logoFile ? Math.max(26, Math.floor((260 * logoSize) / 100)) : undefined}
              logoPadding={logoFile ? logoPadding : undefined}
              logoPaddingStyle="square"
              removeQrCodeBehindLogo={removeBgBehindLogo}
              ecLevel={ecLevel}
              quietZone={quietZone}
            />
          </div>

          {/* Download Action Triggers */}
          <div className="w-full space-y-3 pt-4">
            <div className="grid grid-cols-2 gap-3">
              <button
                onClick={() => downloadFile(qrPngUrl, "png")}
                className="flex items-center justify-center gap-1.5 px-4 py-3 bg-accent-primary hover:bg-accent-primary/90 text-white rounded-xl text-xs font-bold transition-all shadow-[0_0_20px_rgba(168,85,247,0.3)]"
              >
                <Download className="w-4 h-4" /> Download PNG
              </button>

              <button
                onClick={handleSvgDownload}
                className="flex items-center justify-center gap-1.5 px-4 py-3 bg-white/5 border border-white/10 text-white hover:bg-white/10 rounded-xl text-xs font-bold transition-colors"
              >
                <Download className="w-4 h-4 text-accent-secondary" /> Download SVG
              </button>
            </div>

            <div className="grid grid-cols-3 gap-2">
              <button
                onClick={() => downloadRaster("jpeg")}
                className="px-2 py-2 bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] text-muted hover:text-white rounded-xl text-[10px] uppercase font-bold tracking-wide text-center"
              >
                JPG Export
              </button>
              <button
                onClick={() => downloadRaster("webp")}
                className="px-2 py-2 bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] text-muted hover:text-white rounded-xl text-[10px] uppercase font-bold tracking-wide text-center"
              >
                WEBP Export
              </button>
              <button
                onClick={handlePdfExport}
                className="flex items-center justify-center gap-1 px-2 py-2 bg-white/[0.01] border border-white/5 hover:bg-white/[0.03] text-muted hover:text-white rounded-xl text-[10px] uppercase font-bold tracking-wide text-center"
              >
                <Printer className="w-3.5 h-3.5 mr-0.5 text-accent-primary" /> Print PDF
              </button>
            </div>
          </div>
        </div>

        {/* Real-time Health Audit score */}
        <HealthScore
          fgColor={fgColor}
          bgColor={bgColor}
          ecLevel={ecLevel}
          valueLength={finalQrValue.length}
        />

        {/* Interactive Mockups component */}
        {qrPngUrl && <MockupGenerator qrDataUrl={qrPngUrl} />}
      </div>
    </div>
  );
}
