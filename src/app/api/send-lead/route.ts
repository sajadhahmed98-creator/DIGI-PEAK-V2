import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { z } from "zod";
import { leadNotificationHtml, clientAutoReplyHtml, contactFormNotificationHtml } from "@/data/emailTemplates";

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
      _gotcha // Honeypot
    } = payload;

    // 2. Anti-spam (Honeypot)
    if (_gotcha) {
      console.log(`[SPAM BLOCKED] Honeypot filled by IP: ${ip}`);
      // Return 200 to trick bots
      return NextResponse.json({ success: true, message: "Lead processed." });
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
    const userEmailHtml = clientAutoReplyHtml
      .replace("Hello,", `Hello ${name || 'there'},`)
      .replace("View Our Services", "View Our Services");

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

    // Only send if API key exists (otherwise just log to prevent crashing in dev)
    if (process.env.RESEND_API_KEY) {
      // Send Admin Notification
      await resend.emails.send({
        from: SENDER,
        to: [destinationEmail],
        subject: emailSubject,
        html: adminEmailHtml,
        replyTo: email
      });

      // Send User Confirmation
      await resend.emails.send({
        from: SENDER,
        to: [email],
        subject: "📥 We Received Your Request — Digipeak Agency",
        html: userEmailHtml,
        replyTo: ADMIN_EMAIL,
      });
    } else {
      console.log("\n--- SIMULATED SMTP DISPATCH (No API Key) ---");
      console.log(`To Admin (${destinationEmail}): Subject: ${emailSubject}`);
      console.log(`To User (${email}): Subject: We Received Your Request - Digipeak Agency`);
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
