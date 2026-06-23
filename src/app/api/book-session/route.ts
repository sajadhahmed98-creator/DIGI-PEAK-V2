import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { z } from "zod";

const bookingSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(100),
  date: z.string().min(1, "Date is required").max(100),
  time: z.string().min(1, "Time slot is required").max(50),
  timezone: z.string().min(1, "Timezone is required").max(100),
  funnel: z.string().max(100).optional().nullable(),
  turnstileToken: z.string().max(2000, "Turnstile token is too long").optional().nullable(),
});

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');
const ADMIN_EMAIL = process.env.CONTACT_EMAIL || process.env.COMPANY_EMAIL || 'hello@digipeak.agency';
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
    const parseResult = bookingSchema.safeParse(rawPayload);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid request payload", details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { name, email, date, time, timezone, funnel, turnstileToken } = parseResult.data;

    // 2. Cloudflare Turnstile Verification
    const secretKey = process.env.TURNSTILE_SECRET_KEY || '1x00000000000000000000000000000000A';
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
      console.warn(`[SPAM BLOCKED] Turnstile token missing for IP: ${ip}`);
      return NextResponse.json({ error: "Spam check token missing. Please try again." }, { status: 400 });
    }
    
    // Generate simulated Google Meet link
    const meetingLink = `https://meet.google.com/dgp-peak-${Math.random().toString(36).substring(2, 5)}-${Math.random().toString(36).substring(2, 6)}`;
    
    const emailSubjectAdmin = `📅 Strategy Session Booked | ${name}`;
    const emailSubjectUser = `📅 Your Strategy Call Is Confirmed — Digipeak Agency`;

    // 1. Dispatch Admin Notification Email
    const adminEmailHtml = `
      <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc;">
        <div style="max-w: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
          <h2 style="color: #7c5cff; margin-top: 0; font-size: 20px;">🎉 Strategy Session Booked</h2>
          <p style="font-size: 14px; line-height: 1.5;">A new discovery call has been booked through the <strong>${funnel || "general"}</strong> funnel.</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 150px;">Prospect Name:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Prospect Email:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155; font-family: monospace;">${email}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Selected Date:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155; font-weight: bold;">${date}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Selected Time Slot:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155; font-weight: bold;">${time}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Timezone:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155; font-family: monospace;">${timezone}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Video Call Link:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #7c5cff; font-weight: bold;"><a href="${meetingLink}" style="color: #7c5cff;">Join Google Meet</a></td>
            </tr>
          </table>
          
          <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; text-align: center; font-family: monospace;">
            Booked on: ${new Date().toUTCString()}
          </p>
        </div>
      </div>
    `;

    // 2. Dispatch Client Confirmation Email
    const userEmailHtml = `
      <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc;">
        <div style="max-w: 600px; margin: 0 auto; background-color: #ffffff; padding: 35px; border-radius: 16px; box-shadow: 0 10px 15px -3px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
          <div style="text-align: center; margin-bottom: 30px;">
            <div style="display: inline-block; width: 50px; height: 50px; line-height: 50px; background-color: #7c5cff; color: #ffffff; font-size: 24px; border-radius: 12px; font-weight: bold;">DP</div>
            <h2 style="color: #0f172a; margin-top: 15px; font-size: 22px; font-weight: 800; letter-spacing: -0.025em;">Strategy Session Confirmed</h2>
            <p style="color: #64748b; font-size: 14px; margin-top: 5px;">We have reserved your slot. Let's build your growth system.</p>
          </div>
          
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">Hello ${name},</p>
          <p style="font-size: 14px; line-height: 1.6; color: #334155;">Your discovery call with the Digipeak Strategy Team is officially confirmed. Below are the details for our upcoming session:</p>
          
          <div style="background-color: #f1f5f9; padding: 20px; border-radius: 12px; margin: 25px 0;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px;">
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600; width: 120px;">Date:</td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${date}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Time Slot:</td>
                <td style="padding: 6px 0; color: #0f172a; font-weight: bold;">${time}</td>
              </tr>
              <tr>
                <td style="padding: 6px 0; color: #64748b; font-weight: 600;">Timezone:</td>
                <td style="padding: 6px 0; color: #0f172a; font-family: monospace;">${timezone}</td>
              </tr>
              <tr>
                <td style="padding: 12px 0 6px 0; color: #64748b; font-weight: 600;">Video Room:</td>
                <td style="padding: 12px 0 6px 0; font-weight: bold;"><a href="${meetingLink}" style="color: #7c5cff; text-decoration: none;">Join Google Meet Room</a></td>
              </tr>
            </table>
          </div>

          <div style="text-align: center; margin-top: 30px; margin-bottom: 20px;">
            <a href="${meetingLink}" style="display: inline-block; background-color: #7c5cff; color: #ffffff; padding: 12px 24px; font-size: 14px; font-weight: bold; border-radius: 8px; text-decoration: none; box-shadow: 0 4px 6px -1px rgba(124, 92, 255, 0.2);">Join Video Meeting</a>
          </div>

          <p style="font-size: 13px; line-height: 1.6; color: #475569;">
            <strong>What to prepare:</strong> Please have a browser window ready with your current website and any analytics/advertising dashboards you'd like us to inspect during the session.
          </p>
          
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 30px 0;" />
          <p style="font-size: 12px; color: #94a3b8; text-align: center; line-height: 1.5;">
            Digipeak Agency &bull; AI-Powered Digital Growth Eco-systems<br/>
            Need to reschedule? Email us at <a href="mailto:hello@digipeak.agency" style="color: #7c5cff; text-decoration: none;">hello@digipeak.agency</a>
          </p>
        </div>
      </div>
    `;

    // 3. Dispatch Slack/Discord webhook notification
    const webhookUrl = process.env.SLACK_WEBHOOK_URL || process.env.DISCORD_WEBHOOK_URL;
    if (webhookUrl) {
      try {
        const isDiscord = webhookUrl.includes("discord.com");
        let body = {};
        if (isDiscord) {
          body = {
            embeds: [{
              title: emailSubjectAdmin,
              description: `A strategy call has been booked.`,
              color: 0x10b981, // emerald/green
              fields: [
                { name: "Name", value: name, inline: true },
                { name: "Email", value: email, inline: true },
                { name: "Date", value: date, inline: true },
                { name: "Time Slot", value: time, inline: true },
                { name: "Timezone", value: timezone, inline: true },
                { name: "Video Link", value: meetingLink, inline: false },
                { name: "Funnel", value: funnel || "General", inline: true }
              ]
            }]
          };
        } else {
          body = {
            text: `*${emailSubjectAdmin}*\n` +
              `• *Name:* ${name}\n` +
              `• *Email:* ${email}\n` +
              `• *Date:* ${date}\n` +
              `• *Time Slot:* ${time}\n` +
              `• *Timezone:* ${timezone}\n` +
              `• *Video Room:* ${meetingLink}\n` +
              `• *Funnel:* ${funnel || "General"}`
          };
        }
        await fetch(webhookUrl, {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify(body)
        });
      } catch (webhookErr) {
        console.error("Slack/Discord webhook dispatch failed for booking:", webhookErr);
      }
    }

    // 4. Send Emails via Resend
    if (process.env.RESEND_API_KEY) {
      // Send Admin Notification
      await resend.emails.send({
        from: SENDER,
        to: [ADMIN_EMAIL],
        subject: emailSubjectAdmin,
        html: adminEmailHtml,
        replyTo: email
      });

      // Send User Confirmation
      await resend.emails.send({
        from: SENDER,
        to: [email],
        subject: emailSubjectUser,
        html: userEmailHtml,
        replyTo: ADMIN_EMAIL,
      });
    } else {
      console.log("\n--- SIMULATED SMTP BOOKING DISPATCH (No API Key) ---");
      console.log(`To Admin (${ADMIN_EMAIL}): Subject: ${emailSubjectAdmin}`);
      console.log(`To User (${email}): Subject: ${emailSubjectUser}`);
      console.log("--------------------------------\n");
    }

    return NextResponse.json({
      success: true,
      message: "Discovery call booked successfully.",
      meetingLink
    });
  } catch (error: any) {
    console.error("Error booking session in API route:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to book discovery call." },
      { status: 500 }
    );
  }
}
