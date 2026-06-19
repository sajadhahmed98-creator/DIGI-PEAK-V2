import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { z } from "zod";
import fs from 'fs';
import path from 'path';

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

    let emailSubject = `[NEW LEAD QUALIFIED] ${service || "General Inquiry"} - ${name}`;
    let adminEmailHtml = "";

    // Helper to read template safely with fallback
    const getTemplateHtml = (filename: string): string => {
      try {
        const filePath = path.join(process.cwd(), 'emails/templates', filename);
        return fs.readFileSync(filePath, 'utf8');
      } catch (err) {
        console.error(`Failed to read template ${filename}:`, err);
        return "";
      }
    };

    const metadataBlockHtml = `
      <hr />
      <h3>Submission Metadata</h3>
      <p><strong>Lead Source:</strong> ${leadSource || "Direct / Organic"}</p>
      <p><strong>Date & Time (UTC):</strong> ${new Date().toISOString()}</p>
      <p><strong>Page URL:</strong> ${pageUrl || "Not provided"}</p>
    `;

    if (service === "Resource Download") {
      emailSubject = `[NEW LEAD QUALIFIED] Resource Download - ${resourceName} [Score: ${leadScore || "Warm"}]: ${name}`;
      
      const template = getTemplateHtml('lead-notification.html');
      if (template) {
        adminEmailHtml = template
          .replace("New Website Lead Received", `New Lead: Resource Download`)
          .replace("High Priority &bull; Lead Score: 92/100", `Score: ${leadScore || "Warm"}`)
          .replace("Alexander Mercer", name)
          .replace("Mercer Creative Group", company || "Not provided")
          .replace("alex@mercercreative.com", email)
          .replace("+1 (555) 019-2834", country || "Not provided")
          .replace("Technical SEO &amp; Speed Optimization", `Resource: ${resourceName}`)
          .replace("$10,000 - $15,000 / mo", `Category: ${resourceCategory || "General"}`)
          .replace("We are relaunching our Next.js corporate platform and need expert B2B SEO schema setups, RTL localization, and PageSpeed optimizations to secure GCC organic search visibility.", `Downloaded resource: ${resourceName}. Industry: ${industry || "Not specified"}. IP Address: ${ip}. Source: ${leadSource || "Direct"}`);
      } else {
        adminEmailHtml = `
          <h2>New Inbound Lead - Resource Download</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Country:</strong> ${country || "Not provided"}</p>
          <p><strong>Industry:</strong> ${industry || "Not provided"}</p>
          <p><strong>Lead Score:</strong> ${leadScore || "Warm"}</p>
          <hr />
          <h3>Resource Details</h3>
          <p><strong>Downloaded Resource:</strong> ${resourceName}</p>
          <p><strong>Category:</strong> ${resourceCategory || "General"}</p>
          <p><em>IP Address: ${ip}</em></p>
          ${metadataBlockHtml}
        `;
      }
    } else if (isPartnerLead) {
      emailSubject = `[NEW B2B PARTNER LEAD] ${service} - ${name} [${company || "No Company"}]`;
      
      const template = getTemplateHtml('contact-form-notification.html');
      if (template) {
        adminEmailHtml = template
          .replace("Contact Form Submission", "New Partner Application")
          .replace("General Inquiry &bull; Status: Open", `Source: ${leadSource || "Partnership Page"}`)
          .replace("Sarah Jenkins", name)
          .replace("Partnership / Subcontracting", service || "Partnership Inquiry")
          .replace("sarah.j@techventures.io", email)
          .replace("+971 (50) 123-4567", website || "Not provided")
          .replace("Hello Digipeak Team, I am the lead marketing director at Techventures KSA. We are looking for an authorized digital agency partner in Dubai to manage local speed optimization and technical SEO schema generation for our portfolio of SaaS platforms. Let's schedule a call.", `Country: ${country || "Not specified"}. Monthly Volume/Referral: ${monthlyVolume || referralPotential || "Not specified"}. Details: ${details || "No details provided."}`);
      } else {
        adminEmailHtml = `
          <h2>New B2B Partner Inbound Lead</h2>
          <p><strong>Partner Type:</strong> ${service}</p>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Country:</strong> ${country || "Not provided"}</p>
          <p><strong>Website:</strong> ${website || "Not provided"}</p>
          <p><strong>Industry:</strong> ${industry || "Not provided"}</p>
          <p><strong>Monthly Vol:</strong> ${monthlyVolume || referralPotential || "Not specified"}</p>
          <hr />
          <h3>Pitch & Experience</h3>
          <p>${details || "No extra pitch or details provided."}</p>
          <p><em>IP Address: ${ip}</em></p>
          ${metadataBlockHtml}
        `;
      }
    } else {
      const template = getTemplateHtml('lead-notification.html');
      if (template) {
        adminEmailHtml = template
          .replace("Alexander Mercer", name)
          .replace("Mercer Creative Group", company || "Not provided")
          .replace("alex@mercercreative.com", email)
          .replace("+1 (555) 019-2834", whatsapp || "Not provided")
          .replace("Technical SEO &amp; Speed Optimization", service || "General Client Inquiry")
          .replace("$10,000 - $15,000 / mo", budget || "Not specified")
          .replace("We are relaunching our Next.js corporate platform and need expert B2B SEO schema setups, RTL localization, and PageSpeed optimizations to secure GCC organic search visibility.", `Country: ${country || "Not specified"}. Project details: ${details || "No details provided."}`)
          .replace("High Priority &bull; Lead Score: 92/100", `Score: ${leadScore || "Warm"}`);
      } else {
        adminEmailHtml = `
          <h2>New Inbound Client Lead</h2>
          <p><strong>Name:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <p><strong>WhatsApp:</strong> ${whatsapp || "Not provided"}</p>
          <p><strong>Company:</strong> ${company || "Not provided"}</p>
          <p><strong>Country:</strong> ${country || "Not provided"}</p>
          <p><strong>Budget:</strong> ${budget || "Not specified"}</p>
          <p><strong>Service:</strong> ${service || "General Inquiry"}</p>
          <hr />
          <h3>Project Details</h3>
          <p>${details || "No extra details provided."}</p>
          <p><em>IP Address: ${ip}</em></p>
          ${metadataBlockHtml}
        `;
      }
    }

    // Create User Confirmation HTML
    let userEmailHtml = "";
    const userTemplate = getTemplateHtml('client-auto-reply.html');
    if (userTemplate) {
      userEmailHtml = userTemplate
        .replace("Hello,", `Hello ${name || 'there'},`)
        .replace("View Our Services", "View Our Services");
    } else {
      userEmailHtml = `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
          <h2>Hi ${name},</h2>
          <p>Thank you for reaching out to Digipeak Agency. We have received your inquiry regarding <strong>${service || 'our services'}</strong>.</p>
          <p>One of our growth specialists will review your details and get back to you within 24 hours.</p>
          <br/>
          <p>Best regards,</p>
          <p><strong>The Digipeak Team</strong><br/>
          <a href="https://www.digipeak.agency">digipeak.agency</a></p>
        </div>
      `;
    }

    // Only send if API key exists (otherwise just log to prevent crashing in dev)
    if (process.env.RESEND_API_KEY) {
      // Send Admin Notification
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Digipeak Leads <leads@digipeak.agency>',
        to: [destinationEmail],
        subject: emailSubject,
        html: adminEmailHtml,
        replyTo: email
      });

      // Send User Confirmation
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Digipeak Agency <hello@digipeak.agency>',
        to: [email],
        subject: "We Received Your Request - Digipeak Agency",
        html: userEmailHtml,
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
