import { NextRequest, NextResponse } from "next/server";
import { Resend } from 'resend';
import { z } from "zod";

const updateSchema = z.object({
  name: z.string().min(1, "Name is required").max(100),
  email: z.string().email("Invalid email address").max(100),
  service: z.string().max(100).optional().nullable(),
  budget: z.string().max(100).optional().nullable(),
  timeline: z.string().max(100).optional().nullable(),
});

const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy_key');
const ADMIN_EMAIL = process.env.CONTACT_EMAIL || process.env.COMPANY_EMAIL || 'hello@digipeak.agency';
const SENDER = `Digipeak Agency <${process.env.SENDER_EMAIL || 'hello@digipeak.agency'}>`;

export async function POST(req: NextRequest) {
  try {
    const rawPayload = await req.json();
    const parseResult = updateSchema.safeParse(rawPayload);
    if (!parseResult.success) {
      return NextResponse.json(
        { error: "Invalid request payload", details: parseResult.error.format() },
        { status: 400 }
      );
    }

    const { name, email, service, budget, timeline } = parseResult.data;

    const emailSubject = `🔥 Lead Update | Qualification Details — ${name}`;
    const adminEmailHtml = `
      <div style="font-family: sans-serif; padding: 20px; color: #1e293b; background-color: #f8fafc;">
        <div style="max-w: 600px; margin: 0 auto; background-color: #ffffff; padding: 30px; border-radius: 12px; box-shadow: 0 4px 6px rgba(0,0,0,0.05); border: 1px solid #e2e8f0;">
          <h2 style="color: #7c5cff; margin-top: 0; font-size: 20px;">🔥 Lead Qualification Updated</h2>
          <p style="font-size: 14px; line-height: 1.5;">We received additional qualification details for <strong>${name}</strong> (${email}).</p>
          
          <table style="width: 100%; border-collapse: collapse; margin-top: 20px; font-size: 14px;">
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold; width: 150px;">Service Interest:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${service || "Not selected"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Monthly Budget:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${budget || "Not selected"}</td>
            </tr>
            <tr>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; font-weight: bold;">Timeline:</td>
              <td style="padding: 10px 0; border-bottom: 1px solid #f1f5f9; color: #334155;">${timeline || "Not selected"}</td>
            </tr>
          </table>
          
          <p style="font-size: 11px; color: #94a3b8; margin-top: 30px; text-align: center; font-family: monospace;">
            Submitted on: ${new Date().toUTCString()}
          </p>
        </div>
      </div>
    `;

    if (process.env.RESEND_API_KEY) {
      await resend.emails.send({
        from: SENDER,
        to: [ADMIN_EMAIL],
        subject: emailSubject,
        html: adminEmailHtml,
        replyTo: email
      });
    } else {
      console.log("\n--- SIMULATED SMTP DISPATCH (No API Key) ---");
      console.log(`To Admin (${ADMIN_EMAIL}): Subject: ${emailSubject}`);
      console.log(`Body:\n${adminEmailHtml}`);
      console.log("--------------------------------\n");
    }

    return NextResponse.json({
      success: true,
      message: "Lead qualification details processed successfully.",
    });
  } catch (error: any) {
    console.error("Error updating lead in API route:", error);
    return NextResponse.json(
      { error: "Internal server error. Failed to update lead details." },
      { status: 500 }
    );
  }
}
