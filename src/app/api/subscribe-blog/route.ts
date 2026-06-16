import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';

import { z } from "zod";

const subscribeSchema = z.object({
  name: z.string().max(100, "Name is too long").optional().nullable(),
  email: z.string().email("Invalid email address").max(100, "Email is too long"),
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
    const parseResult = subscribeSchema.safeParse(rawPayload);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid request payload", details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const payload = parseResult.data;
    const { name, email, _gotcha } = payload;

    // 2. Anti-spam (Honeypot)
    if (_gotcha) {
      console.log(`[SPAM BLOCKED] Honeypot filled by IP: ${ip}`);
      // Return 200 to trick bots
      return NextResponse.json({ success: true, message: "Subscribed successfully." });
    }

    const emailSubject = `[NEWSLETTER SUBSCRIBE] New Growth Insights Subscriber`;
    const adminEmailHtml = `
      <h2>New Newsletter Subscription - Grow Insights</h2>
      <p><strong>Name:</strong> ${name || "Anonymous Reader"}</p>
      <p><strong>Email:</strong> ${email}</p>
      <p><em>IP Address: ${ip}</em></p>
    `;

    const userEmailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2>Hi ${name || "there"},</h2>
        <p>Thank you for subscribing to Digipeak's Growth Insights!</p>
        <p>You'll receive our latest strategies, case studies, and resources straight to your inbox.</p>
        <br/>
        <p>Best regards,</p>
        <p><strong>The Digipeak Team</strong><br/>
        <a href="https://www.digipeak.agency">digipeak.agency</a></p>
      </div>
    `;

    if (process.env.RESEND_API_KEY) {
      // Send Admin Notification
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Digipeak Leads <leads@digipeak.agency>',
        to: [ADMIN_EMAIL],
        subject: emailSubject,
        html: adminEmailHtml,
      });

      // Send User Confirmation
      await resend.emails.send({
        from: process.env.FROM_EMAIL || 'Digipeak Agency <hello@digipeak.agency>',
        to: [email],
        subject: "Welcome to Growth Insights - Digipeak Agency",
        html: userEmailHtml,
      });
    } else {
      console.log("\n--- SIMULATED SMTP DISPATCH (No API Key) ---");
      console.log(`To Admin (${ADMIN_EMAIL}): Subject: ${emailSubject}`);
      console.log(`To User (${email}): Subject: Welcome to Growth Insights - Digipeak Agency`);
      console.log("--------------------------------\n");
    }

    return NextResponse.json({
      success: true,
      message: "Subscribed successfully.",
    });
  } catch (error: any) {
    console.error("Error subscribing to newsletter:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to subscribe." },
      { status: 500 }
    );
  }
}
