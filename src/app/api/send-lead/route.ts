import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { z } from "zod";
import { leadNotificationHtml, clientAutoReplyHtml, contactFormNotificationHtml, resourceDeliveryHtml, nurtureDay1Html, nurtureDay3Html } from "@/data/emailTemplates";
import resourcesData from "@/data/resources.json";
import PDFDocument from 'pdfkit';

async function generateAuditPdf(name: string, website: string): Promise<Buffer> {
  return new Promise((resolve, reject) => {
    try {
      const doc = new PDFDocument({ margin: 50, size: 'A4' });
      const chunks: Buffer[] = [];
      doc.on('data', (chunk) => chunks.push(chunk));
      doc.on('end', () => resolve(Buffer.concat(chunks)));
      doc.on('error', (err) => reject(err));

      // Draw background
      doc.rect(0, 0, doc.page.width, doc.page.height).fill('#03050c');
      
      // Header
      doc.fillColor('#a855f7').fontSize(24).font('Helvetica-Bold').text('DIGIPEAK AGENCY', 50, 60);
      doc.fillColor('#ffffff').fontSize(14).font('Helvetica-Bold').text('PERFORMANCE & GROWTH AUDIT', 50, 95);
      
      doc.strokeColor('#ffffff').opacity(0.1).moveTo(50, 125).lineTo(545, 125).stroke().opacity(1);
      
      // Lead details
      doc.fillColor('#94a3b8').fontSize(9).font('Helvetica').text('PREPARED FOR:', 50, 150);
      doc.fillColor('#ffffff').fontSize(11).font('Helvetica-Bold').text(name, 50, 165);
      
      doc.fillColor('#94a3b8').fontSize(9).font('Helvetica').text('TARGET WEBSITE:', 300, 150);
      doc.fillColor('#a855f7').fontSize(11).font('Helvetica-Bold').text(website, 300, 165);

      // Section 1: Overview
      doc.fillColor('#ffffff').fontSize(15).font('Helvetica-Bold').text('1. Executive Performance Score', 50, 210);
      doc.rect(50, 235, 495, 80).fill('#0b0b0f');
      doc.strokeColor('#a855f7').opacity(0.2).rect(50, 235, 495, 80).stroke().opacity(1);
      
      // Draw big score
      doc.fillColor('#a855f7').fontSize(36).font('Helvetica-Bold').text('87', 75, 252);
      doc.fillColor('#94a3b8').fontSize(14).font('Helvetica').text('/100', 120, 269);
      
      doc.fillColor('#ffffff').fontSize(11).font('Helvetica-Bold').text('Performance Status: Good', 180, 252);
      doc.fillColor('#94a3b8').fontSize(9).font('Helvetica').text('Your website foundation is strong, but critical optimization gaps are hindering lead capture, speed, and GCC visibility.', 180, 270, { width: 340 });
      
      // Section 2: Technical Gaps
      doc.fillColor('#ffffff').fontSize(15).font('Helvetica-Bold').text('2. Identified Optimization Gaps', 50, 345);
      
      let y = 380;
      const gaps = [
        { title: 'Largest Contentful Paint (LCP) Delay', desc: 'Hero section images are not lazy-loaded/optimized, adding 1.8s load delay.' },
        { title: 'Missing Schema Structured Data', desc: 'No B2B LocalBusiness or Article schemas found, limiting search snippet features.' },
        { title: 'Unencrypted WhatsApp & Handoff Links', desc: 'Contact page links open generic flows without conversational parameter state.' },
        { title: 'Mobile WCAG Color Contrast Gaps', desc: 'Footer & legal text ratios are under 4.5:1, failing Google Lighthouse mobile accessibility.' }
      ];
      
      gaps.forEach((gap) => {
        doc.rect(50, y + 3, 6, 6).fill('#a855f7');
        doc.fillColor('#ffffff').fontSize(11).font('Helvetica-Bold').text(gap.title, 65, y);
        doc.fillColor('#94a3b8').fontSize(9).font('Helvetica').text(gap.desc, 65, y + 14, { width: 475 });
        y += 42;
      });

      // Footer
      doc.strokeColor('#ffffff').opacity(0.1).moveTo(50, 770).lineTo(545, 770).stroke().opacity(1);
      doc.fillColor('#94a3b8').fontSize(8).font('Helvetica').text('Confidential Document - Generated programmatically by Digipeak Growth Engine.', 50, 785);
      doc.fillColor('#a855f7').fontSize(8).font('Helvetica-Bold').text('www.digipeak.agency', 450, 785);

      doc.end();
    } catch (e) {
      reject(e);
    }
  });
}

const leadSchema = z.object({
  name: z.string().min(1, "Name is required").max(100, "Name is too long"),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
  whatsapp: z.string().max(30, "WhatsApp number is too long").optional().nullable(),
  company: z.string().max(100, "Company name is too long").optional().nullable(),
  country: z.string().max(100, "Country is too long").optional().nullable(),
  budget: z.string().max(100, "Budget is too long").optional().nullable(),
  service: z.string().max(100, "Service is too long").optional().nullable(),
  details: z.string().max(10000, "Details are too long").optional().nullable(),
  resourceName: z.string().max(200, "Resource name is too long").optional().nullable(),
  industry: z.string().max(100, "Industry is too long").optional().nullable(),
  leadSource: z.string().max(100, "Lead source is too long").optional().nullable(),
  leadScore: z.string().max(50, "Lead score is too long").optional().nullable(),
  resourceCategory: z.string().max(100, "Resource category is too long").optional().nullable(),
  website: z.string().max(200, "Website is too long").optional().nullable(),
  monthlyVolume: z.string().max(100, "Monthly volume is too long").optional().nullable(),
  referralPotential: z.string().max(100, "Referral potential is too long").optional().nullable(),
  howHeard: z.string().max(200, "How heard is too long").optional().nullable(),
  pageUrl: z.string().max(300, "Page URL is too long").optional().nullable(),
  _gotcha: z.string().max(100, "Gotcha is too long").optional().nullable(),
  turnstileToken: z.string().max(2000, "Turnstile token is too long").optional().nullable(),
});

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');
const ADMIN_EMAIL = process.env.CONTACT_EMAIL || process.env.COMPANY_EMAIL || 'hello@digipeak.agency';
// Always send as 'Digipeak Agency' — ignore FROM_EMAIL if it has no display name
const SENDER = `Digipeak Agency <${process.env.SENDER_EMAIL || 'hello@digipeak.agency'}>`;

// Basic in-memory rate limiting map (IP -> timestamp array)
const rateLimitMap = new Map<string, number[]>();

export async function POST(req: NextRequest) {
  try {
    // 1. Rate Limiting Check
    const ip = req.headers.get("x-forwarded-for") || "unknown";
    const now = Date.now();
    const windowMs = 60 * 1000; // 1 minute
    const maxRequests = 5;

    let timestamps = rateLimitMap.get(ip) || [];
    timestamps = timestamps.filter(time => now - time < windowMs);
    
    if (timestamps.length >= maxRequests) {
      return NextResponse.json({ error: "Too many requests. Please try again later." }, { status: 429 });
    }
    timestamps.push(now);
    rateLimitMap.set(ip, timestamps);

    const rawPayload = await req.json();
    const parseResult = leadSchema.safeParse(rawPayload);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid request payload", details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const payload = parseResult.data;
    const { 
      name, 
      email, 
      whatsapp, 
      company, 
      country, 
      budget, 
      service, 
      details,
      resourceName,
      industry,
      leadSource,
      leadScore,
      resourceCategory,
      website,
      monthlyVolume,
      referralPotential,
      howHeard,
      pageUrl,
      _gotcha, // Honeypot
      turnstileToken
    } = payload;

    // 2. Anti-spam (Honeypot)
    if (_gotcha) {
      console.log(`[SPAM BLOCKED] Honeypot filled by IP: ${ip}`);
      // Return 200 to trick bots
      return NextResponse.json({ success: true, message: "Lead processed." });
    }

    // 3. Cloudflare Turnstile Verification
    const secretKey = process.env.TURNSTILE_SECRET_KEY || '1x00000000000000000000000000000000A';
    const targetSpamSources = [
      "Proposal Request Form",
      "Free Website Audit Form",
      "B2B Growth Audit Form",
      "DigiAI Lead Capture",
      "DigiAI Chat Lead Capture",
      "DigiAI Widget Lead Capture"
    ];
    const needsTurnstile = targetSpamSources.includes(leadSource || "");

    if (needsTurnstile || turnstileToken) {
      if (turnstileToken) {
        try {
          const verifyRes = await fetch("https://challenges.cloudflare.com/turnstile/v0/siteverify", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams({
              secret: secretKey,
              response: turnstileToken,
              remoteip: ip,
            }),
          });
          const verifyData = await verifyRes.json();
          if (!verifyData.success) {
            console.warn(`[SPAM BLOCKED] Turnstile token verification failed for IP: ${ip}`);
            return NextResponse.json({ error: "Spam check failed. Please try again." }, { status: 400 });
          }
        } catch (e) {
          console.error("Turnstile verification error:", e);
        }
      } else {
        console.warn(`[SPAM BLOCKED] Turnstile token missing for IP: ${ip} (Source: ${leadSource})`);
        return NextResponse.json({ error: "Spam check token missing. Please try again." }, { status: 400 });
      }
    }

    const isPartnerLead = service && (service.includes("Partnership") || service.includes("Partner"));
    const isCareerLead = service && (service.includes("Career") || service.includes("Careers") || service.includes("Talent Network"));

    let destinationEmail = ADMIN_EMAIL;
    if (isPartnerLead) {
      destinationEmail = "partnerships@digipeak.agency";
    } else if (isCareerLead) {
      destinationEmail = "careers@digipeak.agency";
    }

    let emailSubject = `🔥 New Lead Qualified | ${service || "General Inquiry"} — ${name}`;
    let adminEmailHtml = "";

    const metadataBlockHtml = `
      <hr />
      <h3>Submission Metadata</h3>
      <p><strong>Lead Source:</strong> ${leadSource || "Direct / Organic"}</p>
      <p><strong>Date & Time (UTC):</strong> ${new Date().toISOString()}</p>
      <p><strong>Page URL:</strong> ${pageUrl || "Not provided"}</p>
    `;

    if (service === "Resource Download") {
      emailSubject = `🔥 New Lead Qualified | Resource Download: ${resourceName} — ${name}`;
      adminEmailHtml = leadNotificationHtml
        .replace("New Website Lead Received", `New Lead: Resource Download`)
        .replace("High Priority &bull; Lead Score: 92/100", `Score: ${leadScore || "Warm"}`)
        .replace("Alexander Mercer", name)
        .replace("Mercer Creative Group", company || "Not provided")
        .replace("alex@mercercreative.com", email)
        .replace("+1 (555) 019-2834", country || "Not provided")
        .replace("Technical SEO &amp; Speed Optimization", `Resource: ${resourceName}`)
        .replace("$10,000 - $15,000 / mo", `Category: ${resourceCategory || "General"}`)
        .replace("We are relaunching our Next.js corporate platform and need expert B2B SEO schema setups, RTL localization, and PageSpeed optimizations to secure GCC organic search visibility.", `Downloaded resource: ${resourceName}. Industry: ${industry || "Not specified"}. IP Address: ${ip}. Source: ${leadSource || "Direct"}`);
    } else if (isPartnerLead) {
      emailSubject = `🤝 New Partner Lead | ${service} — ${name} (${company || "No Company"})`;
      adminEmailHtml = contactFormNotificationHtml
        .replace("Contact Form Submission", "New Partner Application")
        .replace("General Inquiry &bull; Status: Open", `Source: ${leadSource || "Partnership Page"}`)
        .replace("Sarah Jenkins", name)
        .replace("Partnership / Subcontracting", service || "Partnership Inquiry")
        .replace("sarah.j@techventures.io", email)
        .replace("+971 (50) 123-4567", website || "Not provided")
        .replace("Hello Digipeak Team, I am the lead marketing director at Techventures KSA. We are looking for an authorized digital agency partner in Dubai to manage local speed optimization and technical SEO schema generation for our portfolio of SaaS platforms. Let's schedule a call.", `Country: ${country || "Not specified"}. Monthly Volume/Referral: ${monthlyVolume || referralPotential || "Not specified"}. Details: ${details || "No details provided."}`);
    } else {
      adminEmailHtml = leadNotificationHtml
        .replace("Alexander Mercer", name)
        .replace("Mercer Creative Group", company || "Not provided")
        .replace("alex@mercercreative.com?subject=Re%3A%20Your%20Digipeak%20Inquiry", `${email}?subject=Re%3A%20Your%20Digipeak%20Inquiry`)
        .replace("alex@mercercreative.com", email)
        .replace("+1 (555) 019-2834", whatsapp || "Not provided")
        .replace("Technical SEO &amp; Speed Optimization", service || "General Client Inquiry")
        .replace("$10,000 - $15,000 / mo", budget || "Not specified")
        .replace("We are relaunching our Next.js corporate platform and need expert B2B SEO schema setups, RTL localization, and PageSpeed optimizations to secure GCC organic search visibility.", `Country: ${country || "Not specified"}. Project details: ${details || "No details provided."}`)
        .replace("High Priority &bull; Lead Score: 92/100", `Score: ${leadScore || "Warm"}`)
        .replace("Not provided", pageUrl || "Not provided");
    }

    // Create User Confirmation HTML
    let userEmailHtml = "";
    let userEmailSubject = "📥 We Received Your Request — Digipeak Agency";

    if (service === "Resource Download") {
      let resourceSlug = "gcc-local-seo-checklist";
      if (resourceName) {
        const match = resourcesData.find(r => r.title === resourceName || r.id === resourceName);
        if (match) {
          resourceSlug = match.slug;
        }
      }
      userEmailSubject = "Your Resource Is Ready";
      userEmailHtml = resourceDeliveryHtml
        .replace("{{NAME}}", name || "there")
        .replace("{{RESOURCE_NAME}}", resourceName || "gated B2B resource")
        .replace("{{DOWNLOAD_LINK}}", `https://www.digipeak.agency/api/resources/${resourceSlug}/download`);
    } else {
      userEmailHtml = clientAutoReplyHtml
        .replace("Hello,", `Hello ${name || 'there'},`)
        .replace("View Our Services", "View Our Services");
    }

    // Slack/Discord Webhook Dispatcher
    const webhookUrl = process.env.SLACK_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const isDiscord = webhookUrl.includes("discord.com");
        let body = {};
        if (isDiscord) {
          body = {
            embeds: [{
              title: emailSubject,
              description: details || "No project details provided.",
              color: 0xa855f7, // purple
              fields: [
                { name: "Name", value: name || "N/A", inline: true },
                { name: "Email", value: email || "N/A", inline: true },
                { name: "WhatsApp", value: whatsapp || "N/A", inline: true },
                { name: "Company", value: company || "N/A", inline: true },
                { name: "Website", value: website || "N/A", inline: true },
                { name: "Service", value: service || "N/A", inline: true },
                { name: "Budget", value: budget || "N/A", inline: true },
                { name: "Source", value: leadSource || "N/A", inline: true }
              ].filter(f => f.value !== "N/A")
            }]
          };
        } else {
          body = {
            text: `*${emailSubject}*\n` +
              `• *Name:* ${name || "N/A"}\n` +
              `• *Email:* ${email || "N/A"}\n` +
              `• *WhatsApp:* ${whatsapp || "N/A"}\n` +
              `• *Company:* ${company || "N/A"}\n` +
              `• *Website:* ${website || "N/A"}\n` +
              `• *Service:* ${service || "N/A"}\n` +
              `• *Budget:* ${budget || "N/A"}\n` +
              `• *Source:* ${leadSource || "N/A"}\n` +
              `• *Details:* ${details || "None"}`
          };
        }
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
      } catch (webhookErr) {
        console.error("Slack/Discord webhook dispatch failed:", webhookErr);
      }
    }

    // Generate PDF Audit if source matches
    let pdfBuffer: Buffer | null = null;
    if (leadSource === "Free Website Audit Form") {
      try {
        pdfBuffer = await generateAuditPdf(name, website || "your website");
      } catch (pdfErr) {
        console.error("PDF generation failed:", pdfErr);
      }
    }

    // Only send if API key exists (otherwise just log to prevent crashing in dev)
    if (process.env.RESEND_API_KEY) {
      const attachments = pdfBuffer ? [{
        filename: "digipeak-performance-audit.pdf",
        content: pdfBuffer
      }] : undefined;

      // Send Admin Notification
      await resend.emails.send({
        from: SENDER,
        to: [destinationEmail],
        subject: emailSubject,
        html: adminEmailHtml,
        replyTo: email,
        attachments
      });

      // Send User Confirmation
      await resend.emails.send({
        from: SENDER,
        to: [email],
        subject: userEmailSubject,
        html: userEmailHtml,
        replyTo: ADMIN_EMAIL,
        attachments
      });

      // Schedule nurture sequences if resource download lead
      if (service === "Resource Download") {
        try {
          const day1Html = nurtureDay1Html
            .replace("{{NAME}}", name || "there")
            .replace("{{RESOURCE_NAME}}", resourceName || "gated B2B resource");
          
          await resend.emails.send({
            from: SENDER,
            to: [email],
            subject: "Quick question about your B2B checklist",
            html: day1Html,
            replyTo: ADMIN_EMAIL,
            scheduledAt: new Date(Date.now() + 24 * 60 * 60 * 1000).toISOString() // +24 hours
          });

          const day3Html = nurtureDay3Html
            .replace("{{NAME}}", name || "there");

          await resend.emails.send({
            from: SENDER,
            to: [email],
            subject: "How Digipeak automates B2B pipeline growth",
            html: day3Html,
            replyTo: ADMIN_EMAIL,
            scheduledAt: new Date(Date.now() + 72 * 60 * 60 * 1000).toISOString() // +72 hours
          });

          console.log(`[RESEND QUEUED] Day 1 & Day 3 nurture sequences scheduled successfully for ${email}`);
        } catch (nurtureErr) {
          console.error("Failed to queue email nurture sequences:", nurtureErr);
        }
      }
    } else {
      console.log("\n--- SIMULATED SMTP DISPATCH (No API Key) ---");
      console.log(`To Admin (${destinationEmail}): Subject: ${emailSubject}`);
      if (pdfBuffer) {
        console.log(`Attachment generated successfully: ${pdfBuffer.length} bytes`);
      }
      console.log(`To User (${email}): Subject: ${userEmailSubject}`);
      if (service === "Resource Download") {
        console.log(`[SIMULATED Nurture Day 1 Scheduled] To User (${email}): Subject: Quick question about your B2B checklist`);
        console.log(`[SIMULATED Nurture Day 3 Scheduled] To User (${email}): Subject: How Digipeak automates B2B pipeline growth`);
      }
      console.log("--------------------------------\n");
    }

    return NextResponse.json({
      success: true,
      message: "Lead successfully processed and dispatched.",
    });
  } catch (error: any) {
    console.error("Error processing lead in API route:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to process lead." },
      { status: 500 }
    );
  }
}
