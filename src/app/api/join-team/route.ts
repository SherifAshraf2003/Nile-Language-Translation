import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
  try {
    // Accept multipart form data for file uploads
    const formData = await request.formData();
    const fullName = String(formData.get("fullName") || "");
    const email = String(formData.get("email") || "");
    const phone = String(formData.get("phone") || "");
    const experience = String(formData.get("experience") || "");
    const certifications = String(formData.get("certifications") || "");
    const languages = String(formData.get("languages") || "");
    const availability = String(formData.get("availability") || "");
    const additionalInfo = String(formData.get("additionalInfo") || "");
    const resumeFile = formData.get("resume") as File | null;

    // Validate required fields
    if (!fullName || !email || !phone || !experience) {
      return NextResponse.json(
        { error: "Missing required fields" },
        { status: 400 }
      );
    }

    // Build HTML email
    const html = `
      <h2>New Join Our Team Application</h2>
      <p><b>Full Name:</b> ${fullName}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Phone:</b> ${phone}</p>
      <p><b>Experience:</b> ${experience}</p>
      <p><b>Certifications:</b> ${certifications || "N/A"}</p>
      <p><b>Languages & Specializations:</b> ${languages || "N/A"}</p>
      <p><b>Availability:</b> ${availability || "N/A"}</p>
      <p><b>Additional Info:</b></p>
      <p>${additionalInfo || "No additional information provided"}</p>
    `;

    // Prepare optional attachment if resume was uploaded
    let attachments: Array<{ filename: string; content: Buffer }> | undefined;
    if (resumeFile) {
      const arrayBuffer = await resumeFile.arrayBuffer();
      const buffer = Buffer.from(arrayBuffer);
      attachments = [
        {
          filename: resumeFile.name || "resume",
          content: buffer,
        },
      ];
    }

    // Send email via Resend
    await resend.emails.send({
      from: "NLS Website <info@nlsindy.com>",
      to: "info@nlsindy.com",
      subject: `New Team Application: ${fullName}`,
      replyTo: email,
      html,
      attachments,
    });

    return NextResponse.json(
      {
        success: true,
        message:
          "Application submitted successfully. We will get back to you soon!",
      },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error processing join team application:", error);
    return NextResponse.json(
      {
        error:
          "Internal server error. Please try again or contact us directly.",
      },
      { status: 500 }
    );
  }
}
