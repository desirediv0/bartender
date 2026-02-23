import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(request) {
    try {
        const { name, email, phone, eventType, message } = await request.json();

        // Nodemailer transporter configuration
        const transporter = nodemailer.createTransport({
            host: process.env.SMTP_HOST,
            port: process.env.SMTP_PORT,
            secure: false, // true for 465, false for other ports
            auth: {
                user: process.env.SMTP_USER,
                pass: process.env.SMTP_PASSWORD,
            },
        });

        // Email to Admin
        const adminMailOptions = {
            from: `"Bartenders Club Delhi" <${process.env.FROM_EMAIL}>`,
            to: process.env.TO_EMAIL,
            subject: `New Inquiry: ${eventType} from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #ddd; border-radius: 8px; overflow: hidden; background-color: #f9f9f9;">
          <div style="background-color: #6a1b9a; color: #ffffff; padding: 20px; text-align: center;">
            <h1 style="margin: 0; font-size: 24px;">New Event Inquiry</h1>
          </div>
          <div style="padding: 24px; color: #333;">
            <p style="font-size: 16px; line-height: 1.5;">You have received a new inquiry from the website contact form.</p>
            <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold; width: 30%;">Name:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${name}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Phone:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${phone}</td>
              </tr>
              <tr>
                <td style="padding: 10px; border-bottom: 1px solid #eee; font-weight: bold;">Event Type:</td>
                <td style="padding: 10px; border-bottom: 1px solid #eee;">${eventType}</td>
              </tr>
              <tr>
                <td style="padding: 10px; font-weight: bold; vertical-align: top;">Message:</td>
                <td style="padding: 10px;">${message}</td>
              </tr>
            </table>
          </div>
          <div style="background-color: #eee; padding: 15px; text-align: center; color: #777; font-size: 12px;">
            <p style="margin: 0;">&copy; ${new Date().getFullYear()} Bartenders Club Delhi. All rights reserved.</p>
          </div>
        </div>
      `,
        };

        // Send the email to Admin
        await transporter.sendMail(adminMailOptions);

        // Email to User (Confirmation)
        if (email) {
            const userMailOptions = {
                from: `"Bartenders Club Delhi" <${process.env.FROM_EMAIL}>`,
                to: email,
                subject: `Your Inquiry is in Good Hands - Bartenders Club Delhi`,
                html: `
          <div style="font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; max-width: 600px; margin: 0 auto; border: 1px solid #e0e0e0; border-radius: 12px; overflow: hidden; background-color: #ffffff; box-shadow: 0 4px 20px rgba(0,0,0,0.1);">
            <!-- Header -->
            <div style="background: linear-gradient(135deg, #1a0b2e 0%, #2d1b4d 100%); color: #ffffff; padding: 40px 20px; text-align: center; border-bottom: 4px solid #d4af37;">
              <h1 style="margin: 0; font-size: 28px; letter-spacing: 2px; text-transform: uppercase;">Cheers, ${name}!</h1>
              <p style="margin: 15px 0 0; font-size: 18px; color: #d4af37; font-weight: 300;">We've received your inquiry</p>
            </div>

            <!-- Body -->
            <div style="padding: 40px 30px; color: #2d1b4d; line-height: 1.8;">
              <p style="font-size: 17px; margin-bottom: 25px;">Thank you for reaching out to <strong>Bartenders Club Delhi</strong>. We are thrilled to help you create an unforgettable experience for your upcoming <strong>${eventType}</strong>.</p>
              
              <div style="background-color: #f8f5ff; padding: 25px; border-radius: 8px; border-left: 4px solid #6a1b9a; margin: 30px 0;">
                <h3 style="margin-top: 0; color: #6a1b9a; font-size: 18px; text-transform: uppercase; letter-spacing: 1px;">Inquiry Overview</h3>
                <p style="margin: 10px 0; font-size: 15px;"><strong>Event Type:</strong> ${eventType}</p>
                <p style="margin: 10px 0; font-size: 15px;"><strong>Status:</strong> Received & Being Reviewed</p>
                <div style="margin-top: 15px; padding-top: 15px; border-top: 1px solid #e0d5f5;">
                  <p style="margin: 0; font-size: 14px; color: #666; font-style: italic;">Our team will review your requirements and reach out to you within 24 hours.</p>
                </div>
              </div>

              <p style="font-size: 16px;">In the meantime, explore our world of premium mixology and get some inspiration for your bar setup:</p>
              
              <div style="text-align: center; margin: 35px 0;">
                <a href="https://bartendersclubdelhi.com/services" style="background-color: #6a1b9a; color: #ffffff; padding: 15px 35px; text-decoration: none; font-weight: bold; border-radius: 4px; display: inline-block; box-shadow: 0 4px 10px rgba(106, 27, 154, 0.3);">Explore Our Services</a>
              </div>

              <p style="margin-top: 40px; font-size: 15px; color: #444;">Best Regards,<br/><strong style="color: #1a0b2e; font-size: 18px;">The Mixology Team</strong><br/>Bartenders Club Delhi</p>
            </div>

            <!-- Footer -->
            <div style="background-color: #f9f9f9; padding: 30px 20px; text-align: center; color: #999; font-size: 13px; border-top: 1px solid #eeeeee;">
              <div style="margin-bottom: 20px;">
                <a href="https://www.instagram.com/bartender_club_delhi" style="margin: 0 10px; text-decoration: none; color: #6a1b9a;">Instagram</a> | 
                <a href="https://www.facebook.com/share/1cjRhuYgXr/" style="margin: 0 10px; text-decoration: none; color: #6a1b9a;">Facebook</a>
              </div>
              <p style="margin: 0;">Bartenders Club Delhi | Serving Delhi & NCR</p>
              <p style="margin: 8px 0 0;">&copy; ${new Date().getFullYear()} All rights reserved.</p>
            </div>
          </div>
        `,
            };
            await transporter.sendMail(userMailOptions);
        }

        return NextResponse.json(
            { message: "Inquiry sent successfully" },
            { status: 200 }
        );
    } catch (error) {
        console.error("Email sending error:", error);
        return NextResponse.json(
            { error: "Failed to send inquiry" },
            { status: 500 }
        );
    }
}
