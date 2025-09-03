import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const {
      fullName,
      email,
      phone,
      organization,
      serviceType,
      date,
      location,
      message,
    } = body;

    // Validate required fields
    if (!fullName || !email || !phone || !serviceType) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Build HTML email
    const html = `
      <h2>New Contact Form Submission</h2>
      <p><b>Full Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Organization:</b> ${organization || "N/A"}</p>
      <p><b>Service Type:</b> ${serviceType}</p>
      <p><b>Date:</b> ${date || "N/A"}</p>
      <p><b>Location:</b> ${location || "N/A"}</p>
      <p><b>Message:</b></p>
      <p>${message || "No message provided"}</p>
    `;

    // Send email via Resend
    await resend.emails.send({
      from: "NLS Website <info@nlsindy.com>", // Use your domain email if possible
      to: "info@nlsindy.com", // Replace with your actual inbox
      subject: `New Contact Form: ${serviceType} Request`,
      replyTo: email, // so you can reply directly to client
      html,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Contact form submitted successfully. We will get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing contact form:", error);
    return NextResponse.json(
      {
        error:
          "Internal server error. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
