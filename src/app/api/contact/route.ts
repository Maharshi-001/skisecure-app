import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

const MAX_FULL_NAME_LENGTH = 200;
const MAX_EMAIL_LENGTH = 320;
const MAX_OPTIONAL_FIELD_LENGTH = 200;
const EMAIL_PATTERN = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
const CONTROL_CHARACTER_PATTERN = /[\u0000-\u001F\u007F]/;

function escapeHtml(value: string): string {
  return value.replace(/[&<>"']/g, (character) => {
    const entities: Record<string, string> = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#39;',
    };

    return entities[character];
  });
}

function readOptionalString(value: unknown, maxLength: number): string | null {
  if (value === undefined) return '';
  if (typeof value !== 'string') return null;

  const normalized = value.trim();
  return normalized.length <= maxLength ? normalized : null;
}

export async function POST(request: Request) {
  let data: unknown;

  try {
    data = await request.json();
  } catch {
    return NextResponse.json({ success: false, message: 'Invalid submission.' }, { status: 400 });
  }

  try {
    if (!data || typeof data !== 'object' || Array.isArray(data)) {
      return NextResponse.json({ success: false, message: 'Invalid submission.' }, { status: 400 });
    }

    const payload = data as Record<string, unknown>;
    const fullName = readOptionalString(payload.fullName, MAX_FULL_NAME_LENGTH);
    const email = readOptionalString(payload.email, MAX_EMAIL_LENGTH);
    const company = readOptionalString(payload.company, MAX_OPTIONAL_FIELD_LENGTH);
    const endpoints = readOptionalString(payload.endpoints, MAX_OPTIONAL_FIELD_LENGTH);
    const interest = readOptionalString(payload.interest, MAX_OPTIONAL_FIELD_LENGTH);

    if (
      fullName === null ||
      email === null ||
      company === null ||
      endpoints === null ||
      interest === null ||
      !fullName ||
      !email ||
      !EMAIL_PATTERN.test(email) ||
      CONTROL_CHARACTER_PATTERN.test(fullName) ||
      CONTROL_CHARACTER_PATTERN.test(email) ||
      CONTROL_CHARACTER_PATTERN.test(company) ||
      CONTROL_CHARACTER_PATTERN.test(endpoints) ||
      CONTROL_CHARACTER_PATTERN.test(interest)
    ) {
      return NextResponse.json({ success: false, message: 'Invalid submission.' }, { status: 400 });
    }

    const recipient = process.env.SMTP_USER || 'hello@skiesecure.com';

    const smtpUser = process.env.SMTP_USER || 'hello@skiesecure.com';
    const smtpPass = process.env.SMTP_PASSWORD?.replace(/^['"]|['"]$/g, '');

    if (!smtpPass) {
      console.error('Contact form submission unavailable: SMTP configuration is incomplete.');
      return NextResponse.json({ success: false, message: 'Unable to process submission.' }, { status: 500 });
    }

    const htmlFullName = escapeHtml(fullName);
    const htmlEmail = escapeHtml(email);
    const htmlCompany = escapeHtml(company);
    const htmlEndpoints = escapeHtml(endpoints);
    const htmlInterest = escapeHtml(interest);

    // Configure Nodemailer Outlook SMTP transporter
    const transporter = nodemailer.createTransport({
      host: 'smtp.office365.com',
      port: 587,
      secure: false, // true for 465, false for other ports
      auth: {
        user: smtpUser,
        pass: smtpPass,
      },
    });

    const mailOptions = {
      from: `"SkieSecure Notification" <${smtpUser}>`,
      to: recipient,
      replyTo: email,
      subject: `New Early Access Request: ${fullName} (${company || email})`,
      html: `
        <div style="font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 32px 24px; border: 1px solid #E2E8F0; border-radius: 12px; background-color: #FFFFFF; color: #1E293B;">
          
          <!-- Header Bar -->
          <div style="border-bottom: 2px solid #EE343F; padding-bottom: 20px; margin-bottom: 28px;">
            <table style="width: 100%; border-collapse: collapse;">
              <tr>
                <td style="vertical-align: middle;">
                  <span style="font-size: 20px; font-weight: 800; letter-spacing: -0.5px; color: #0F172A;">
                    Skie<span style="color: #EE343F;">Secure</span>
                  </span>
                </td>
                <td style="text-align: right; vertical-align: middle;">
                  <span style="display: inline-block; background-color: #FEE6E8; border: 1px solid #F7C7CE; color: #EE343F; font-size: 11px; font-weight: 700; letter-spacing: 0.5px; text-transform: uppercase; padding: 4px 10px; border-radius: 9999px;">
                    Early Access Lead
                  </span>
                </td>
              </tr>
            </table>
          </div>

          <h1 style="margin: 0 0 8px 0; font-size: 20px; font-weight: 700; color: #0F172A; letter-spacing: -0.3px;">
            New Early Access Submission
          </h1>
          <p style="margin: 0 0 24px 0; font-size: 14px; color: #64748B; line-height: 1.5;">
            A visitor has submitted their details to request priority access to the SkieSecure platform.
          </p>

          <!-- Lead Details Table -->
          <div style="background-color: #F8FAFC; border: 1px solid #E2E8F0; border-radius: 8px; padding: 16px 20px; margin-bottom: 24px;">
            <table style="width: 100%; border-collapse: collapse; font-size: 14px; line-height: 1.6;">
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #64748B; width: 140px; font-weight: 500;">Full Name</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 600;">${htmlFullName}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #64748B; font-weight: 500;">Work Email</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #EE343F; font-weight: 600;">
                  <a href="mailto:${htmlEmail}" style="color: #EE343F; text-decoration: none;">${htmlEmail}</a>
                </td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #64748B; font-weight: 500;">Company</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 500;">${htmlCompany || 'Not provided'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #64748B; font-weight: 500;">Environment</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #0F172A; font-weight: 500;">${htmlEndpoints || 'Not selected'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; border-bottom: 1px solid #E2E8F0; color: #64748B; font-weight: 500;">Plan Interest</td>
                <td style="padding: 10px 0; border-bottom: 1px solid #EE343F; color: #EE343F; font-weight: 600;">${htmlInterest || 'General'}</td>
              </tr>
              <tr>
                <td style="padding: 10px 0; color: #64748B; font-weight: 500;">Received At</td>
                <td style="padding: 10px 0; color: #64748B; font-size: 13px;">${new Date().toLocaleString('en-US', { dateStyle: 'medium', timeStyle: 'short' })}</td>
              </tr>
            </table>
          </div>

          <!-- Quick Action Button -->
          <div style="text-align: center;">
            <a href="mailto:${htmlEmail}?subject=Welcome%20to%20SkieSecure%20Early%20Access" style="display: inline-block; background-color: #EE343F; color: #FFFFFF; font-size: 14px; font-weight: 600; text-decoration: none; padding: 10px 24px; border-radius: 6px;">
              Reply to ${htmlFullName}
            </a>
          </div>
        </div>
      `,
    };

    await transporter.sendMail(mailOptions);
    console.log(`✅ Email successfully sent to ${recipient}`);

    return NextResponse.json({
      success: true,
      message: `Real email successfully delivered to ${recipient}`,
    });
  } catch (error) {
    console.error('❌ Error sending email via Outlook SMTP:', error);
    return NextResponse.json({ success: false, error: 'Failed to send email' }, { status: 500 });
  }
}
