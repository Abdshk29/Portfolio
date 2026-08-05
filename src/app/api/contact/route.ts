import { NextResponse } from "next/server";
import { Resend } from "resend";

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const { name, email, subject, message } = body;

    // Validate required fields
    if (!name || !email || !message) {
      return NextResponse.json(
        { error: "Name, email, and message are required." },
        { status: 400 }
      );
    }

    const apiKey = process.env.RESEND_API_KEY;
    const recipientEmail = process.env.CONTACT_TO_EMAIL || "abdshk28@gmail.com";

    if (!apiKey) {
      console.warn("RESEND_API_KEY environment variable is missing.");
      return NextResponse.json(
        {
          error:
            "Email service key missing. Please add RESEND_API_KEY to your .env.local file.",
        },
        { status: 500 }
      );
    }

    const resend = new Resend(apiKey);

    const emailSubject = subject?.trim()
      ? `[Portfolio] ${subject}`
      : `[Portfolio] New message from ${name}`;

    const { data, error } = await resend.emails.send({
      from: process.env.RESEND_FROM_EMAIL || "Portfolio Contact <onboarding@resend.dev>",
      to: [recipientEmail],
      replyTo: email,
      subject: emailSubject,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; border: 1px solid #e4e4e7; border-radius: 16px; background-color: #ffffff;">
          <h2 style="color: #ec4899; border-bottom: 2px solid #f472b6; padding-bottom: 12px; margin-top: 0;">New Message from Portfolio Website</h2>
          <table style="width: 100%; border-collapse: collapse; margin-bottom: 20px;">
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-weight: bold; width: 120px;">Name:</td>
              <td style="padding: 8px 0; color: #18181b;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-weight: bold;">Email:</td>
              <td style="padding: 8px 0; color: #18181b;"><a href="mailto:${email}" style="color: #ec4899;">${email}</a></td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #71717a; font-weight: bold;">Subject:</td>
              <td style="padding: 8px 0; color: #18181b;">${subject || "No subject provided"}</td>
            </tr>
          </table>
          <div style="padding: 16px; background-color: #fafafa; border-left: 4px solid #ec4899; border-radius: 8px;">
            <p style="margin: 0 0 8px 0; font-weight: bold; color: #27272a;">Message:</p>
            <p style="margin: 0; color: #3f3f46; line-height: 1.6; white-space: pre-wrap;">${message}</p>
          </div>
          <hr style="border: none; border-top: 1px solid #e4e4e7; margin: 24px 0 16px 0;" />
          <p style="font-size: 12px; color: #a1a1aa; text-align: center; margin: 0;">
            Sent automatically from your portfolio contact form. You can reply directly to this email to contact ${name}.
          </p>
        </div>
      `,
    });

    if (error) {
      console.error("Resend delivery error:", error);
      return NextResponse.json(
        { error: error.message || "Failed to deliver email." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true, data });
  } catch (err: any) {
    console.error("Contact API route error:", err);
    return NextResponse.json(
      { error: err.message || "An unexpected error occurred while sending the message." },
      { status: 500 }
    );
  }
}
