import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request: Request) {
    try {
        const body = await request.json();
        const { name, email, phone, subject, message } = body;

        if (!name || !email || !phone || !subject || !message) {
            return NextResponse.json(
                { message: "All fields are required" },
                { status: 400 }
            );
        }

        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: process.env.EMAIL_USER,
            to: process.env.EMAIL_USER, // Send to the same address (pawcare376@gmail.com)
            replyTo: email,
            subject: `Contact Form: ${subject} - From ${name}`,
            html: `
                <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px; border: 1px solid #eee; border-radius: 10px;">
                    <h2 style="color: #333; border-bottom: 2px solid #000; padding-bottom: 10px;">New Contact Enquiry</h2>
                    
                    <div style="margin-top: 20px;">
                        <p><strong>Name:</strong> ${name}</p>
                        <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                        <p><strong>Phone:</strong> ${phone}</p>
                        <p><strong>Subject:</strong> ${subject}</p>
                    </div>

                    <div style="margin-top: 20px; padding: 20px; background-color: #f9f9f9; border-left: 4px solid #000;">
                        <h4 style="margin-top: 0; color: #555;">Message:</h4>
                        <p style="white-space: pre-wrap; margin-bottom: 0;">${message}</p>
                    </div>
                    
                    <div style="margin-top: 30px; font-size: 12px; color: #888; text-align: center;">
                        <p>This email was sent from the Electro Store Contact Form.</p>
                    </div>
                </div>
            `,
        };

        const result = await transporter.sendMail(mailOptions);

        return NextResponse.json(
            { message: "Email sent successfully", result },
            { status: 200 }
        );
    } catch (error: any) {
        console.error("Error sending email:", error);
        return NextResponse.json(
            { message: "Failed to send email", error: error.message },
            { status: 500 }
        );
    }
}
