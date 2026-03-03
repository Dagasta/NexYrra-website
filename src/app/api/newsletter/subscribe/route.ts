import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // Send welcome email
    const { data, error } = await resend.emails.send({
      from: 'Nexyrra Signals <welcome@signals.nexyrra.com>', // MUST match verified subdomain
      to: email,
      subject: 'Intelligence Synchronized: Welcome to Nexyrra Signals',
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Welcome to Nexyrra</title>
          </head>
          <body style="margin: 0; padding: 0; background-color: #05060b; font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #05060b;">
              <tr>
                <td align="center" style="padding: 40px 0;">
                  <!-- Main Capsule -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0d0e19; border: 1px solid #1e1f2e; border-radius: 24px; overflow: hidden; box-shadow: 0 20px 50px rgba(0,0,0,0.5);">
                    
                    <!-- Branded Banner -->
                    <tr>
                      <td style="padding: 0;">
                        <img src="https://www.nexyrra.com/assets/og-image.png" alt="Nexyrra Intelligence" width="600" style="display: block; width: 100%; height: auto;">
                      </td>
                    </tr>

                    <!-- Content Body -->
                    <tr>
                      <td style="padding: 40px 50px;">
                        <!-- Logo -->
                        <div style="margin-bottom: 30px; text-align: left;">
                          <img src="https://www.nexyrra.com/assets/logo.png" alt="Nexyrra Logo" width="50" style="filter: drop-shadow(0 0 10px rgba(139,92,246,0.6));">
                        </div>

                        <h1 style="color: #ffffff; font-size: 28px; font-weight: 800; margin: 0 0 20px 0; letter-spacing: -0.02em; text-transform: uppercase;">
                          Access <span style="color: #8B5CF6;">Synchronized</span>
                        </h1>

                        <p style="color: #94a3b8; font-size: 16px; line-height: 1.8; margin-bottom: 30px;">
                          Hello ${name || 'Operator'},<br><br>
                          You have successfully integrated with <strong>Nexyrra Signals</strong>. You are now part of an elite network receiving hyper-growth AI intelligence reports direct from Dubai.
                        </p>

                        <!-- Box Feature -->
                        <div style="background-color: rgba(139,92,246,0.05); border: 1px solid rgba(139,92,246,0.2); border-radius: 16px; padding: 25px; margin-bottom: 40px;">
                          <p style="margin: 0 0 15px 0; font-weight: 800; color: #ffffff; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;">Intel Pipeline:</p>
                          <ul style="color: #94a3b8; margin: 0; padding-left: 20px; font-size: 15px; line-height: 2;">
                            <li>Strategic Alpha (ROI & Growth)</li>
                            <li>Neural Research Deep-dives</li>
                            <li>Autonomous Workflow Patterns</li>
                          </ul>
                        </div>

                        <!-- CTA -->
                        <div style="text-align: center;">
                          <a href="https://www.nexyrra.com/signals" style="display: inline-block; background-color: #8B5CF6; color: #ffffff; padding: 18px 35px; border-radius: 12px; font-weight: 800; text-decoration: none; font-size: 15px; box-shadow: 0 10px 20px rgba(139,92,246,0.2);">EXPLORE ARCHIVE</a>
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
                          You received this because you requested access to Nexyrra Signals. 
                          <a href="#" style="color: #8B5CF6; text-decoration: none;">Unsubscribe</a>
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
      console.error('Email Error:', error);
      return NextResponse.json({ error: error.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: data?.id });
  } catch (err: any) {
    console.error('Newsletter API Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
