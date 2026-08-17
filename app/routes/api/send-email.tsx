import type { Route } from "./+types/send-email";
import nodemailer from "nodemailer";

// Configure your email service (Gmail, SendGrid, Mailgun, etc.)
const transporter = nodemailer.createTransport({
  service: "gmail", // or your email service
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASSWORD, // Use app-specific password for Gmail
  },
});

export async function action({ request }: Route.ActionArgs) {
  if (request.method !== "POST") {
    return new Response("Method not allowed", { status: 405 });
  }

  try {
    const { to, subject, message } = await request.json();

    // Validate inputs
    if (!to || !subject || !message) {
      return new Response(
        JSON.stringify({ error: "Missing required fields" }),
        { status: 400, headers: { "Content-Type": "application/json" } }
      );
    }

    // Send email
    const info = await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to,
      subject,
      html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <p>${message.replace(/\n/g, "<br />")}</p>
          <hr style="border: none; border-top: 1px solid #ddd; margin-top: 20px;" />
          <p style="color: #666; font-size: 12px;">
            This email was sent from BCS Free Health Clinic website
          </p>
        </div>
      `,
    });

    return new Response(
      JSON.stringify({
        success: true,
        message: "Email sent successfully",
        messageId: info.messageId,
      }),
      { status: 200, headers: { "Content-Type": "application/json" } }
    );
  } catch (error) {
    console.error("Email error:", error);
    return new Response(
      JSON.stringify({
        error: "Failed to send email",
        details: error instanceof Error ? error.message : "Unknown error",
      }),
      { status: 500, headers: { "Content-Type": "application/json" } }
    );
  }
}
