import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';


export async function POST(req: NextRequest) {
  try {
    const supabase = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://placeholder.supabase.co',
      process.env.SUPABASE_SERVICE_ROLE_KEY || 'placeholder'
    );
    const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');
    const { title, excerpt, image_url, category } = await req.json();

    // 1. Fetch all subscribers from database
    const { data: subscribers, error: subError } = await supabase
      .from('newsletter_subscribers')
      .select('email');

    if (subError) throw subError;
    if (!subscribers || subscribers.length === 0) {
      return NextResponse.json({ success: true, message: 'No subscribers to notify' });
    }

    const emails = subscribers.map(s => s.email);

    // 2. Send broadcast via Resend (use batches if many)
    const { data, error } = await resend.emails.send({
      from: 'Nexyrra Signals <intelligence@signals.nexyrra.com>', // MUST match verified subdomain
      to: emails,
      subject: `NEXYRRA SIGNAL: ${title}`,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Nexyrra Intelligence Report</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #05060b; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #05060b;">
              <tr>
                <td align="center" style="padding: 40px 0;">
                  <!-- Main Intelligence Capsule -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0d0e19; border: 1px solid #1e1f2e; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="padding: 30px 50px; border-bottom: 1px solid #1e1f2e;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td>
                              <img src="https://www.nexyrra.com/assets/logo.png" alt="Nexyrra Logo" width="40">
                            </td>
                            <td align="right">
                              <span style="color: #8B5CF6; font-size: 10px; font-weight: 800; letter-spacing: 0.2em; text-transform: uppercase;">NEURAL INTEL</span>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Cover Image if exists -->
                    ${image_url ? `
                    <tr>
                      <td style="padding: 0;">
                        <img src="${image_url}" alt="${title}" width="600" style="display: block; width: 100%; height: auto;">
                      </td>
                    </tr>
                    ` : ''}

                    <!-- Intel Content -->
                    <tr>
                      <td style="padding: 45px 50px;">
                        <div style="display: inline-block; padding: 5px 12px; background-color: rgba(34,211,238,0.1); border: 1px solid rgba(34,211,238,0.2); border-radius: 99px; color: #22D3EE; font-size: 10px; font-weight: 800; letter-spacing: 0.1em; margin-bottom: 20px; text-transform: uppercase;">
                          ${category || 'GENERAL INTEL'}
                        </div>

                        <h1 style="color: #ffffff; font-size: 32px; font-weight: 900; margin: 0 0 25px 0; line-height: 1.2; letter-spacing: -0.03em;">
                          ${title}
                        </h1>

                        <p style="color: #94a3b8; font-size: 17px; line-height: 1.8; margin-bottom: 35px; font-weight: 400;">
                          ${excerpt}
                        </p>

                        <!-- CTA -->
                        <div style="text-align: left;">
                          <a href="https://www.nexyrra.com/signals" style="display: inline-block; background-color: #8B5CF6; color: #ffffff; padding: 18px 40px; border-radius: 12px; font-weight: 800; text-decoration: none; font-size: 15px; letter-spacing: 0.05em; box-shadow: 0 10px 20px rgba(139,92,246,0.2);">ACTIVATE REPORT</a>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding: 30px 50px; background-color: #0a0b14; border-top: 1px solid #1e1f2e; text-align: center;">
                        <p style="color: #475569; font-size: 11px; margin: 0; letter-spacing: 0.05em; text-transform: uppercase;">
                          © 2026 NEXYRRA AI AGENCY | DUBAI, UAE
                        </p>
                        <p style="color: #334155; font-size: 10px; margin-top: 10px;">
                          Intelligence delivered via the Nexyrra Signals infrastructure.<br>
                          <a href="mailto:nexyrra@gmail.com" style="color: #8B5CF6; text-decoration: none;">Contact Support</a>
                        </p>
                      </td>
                    </tr>
                  </table>
                </td>
              </tr>
            </table>
          </body>
        </html>
      `,
    });

    if (error) {
      console.error('Broadcast Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, count: emails.length });
  } catch (err: any) {
    console.error('Broadcast API Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
