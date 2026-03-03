import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { supabase } from '@/lib/supabase';

export async function POST(req: NextRequest) {
  try {
    const resend = new Resend(process.env.RESEND_API_KEY || 're_dummy');
    const { email, name } = await req.json();

    if (!email) {
      return NextResponse.json({ error: 'Email is required' }, { status: 400 });
    }

    // 1. Save to Supabase Intelligence Network
    const { error: dbError } = await supabase
      .from('newsletter_subscribers')
      .insert([{ email, name: name || 'Anonymous Operator' }]);

    if (dbError) {
      console.error('Database Sync Error:', dbError);
      // We continue to send the email even if DB fails, or we can block it.
      // Usually better to block to ensure data integrity.
    }

    // 2. Send welcome email via Resend
    const { data: resendData, error: resendError } = await resend.emails.send({
      from: 'Nexyrra Signals <welcome@signals.nexyrra.com>', // MUST match verified subdomain
      to: email,
      subject: 'Intelligence Synchronized: Welcome to Nexyrra Signals',
      html: `
        <!DOCTYPE html>
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>Neural Access Synchronized</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=JetBrains+Mono:wght@700&display=swap');
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #030408; font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #030408;">
              <tr>
                <td align="center" style="padding: 40px 10px;">
                  
                  <!-- Elite Tactical Container -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0c0d15; border: 1px solid #1e1b4b; border-radius: 4px; overflow: hidden; box-shadow: 0 50px 100px rgba(0,0,0,0.9);">
                    
                    <!-- Top Sync Bar -->
                    <tr>
                      <td style="background: #8B5CF6; height: 4px;"></td>
                    </tr>

                    <!-- Branding Header -->
                    <tr>
                      <td style="padding: 40px 50px 0 50px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td>
                              <img src="https://www.nexyrra.com/assets/logo.png" alt="Nexyrra" width="45" style="display: block;">
                            </td>
                            <td align="right">
                              <div style="font-family: 'JetBrains Mono', monospace; font-size: 10px; color: #8B5CF6; letter-spacing: 0.3em; font-weight: 700;">PROTOCOL_226_SYNCED</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Main Hero Intel -->
                    <tr>
                      <td style="padding: 60px 50px; text-align: left;">
                        <h1 style="font-size: 48px; font-weight: 900; margin: 0 0 10px 0; letter-spacing: -0.05em; line-height: 1; text-transform: uppercase; color: #ffffff;">
                          ACCESS <span style="color: #8B5CF6;">GRANTED</span>
                        </h1>
                        <p style="font-family: 'JetBrains Mono', monospace; color: #22D3EE; font-size: 11px; font-weight: 700; letter-spacing: 0.4em; text-transform: uppercase; margin-bottom: 40px;">Connection Status: Ultra-High Fidelity</p>
                        
                        <p style="font-size: 18px; line-height: 1.7; color: #94A3B8; margin-bottom: 45px; font-weight: 400;">
                          Operator <strong style="color: #ffffff;">${name || 'Anonymous'}</strong>,<br><br>
                          Your profile has been successfully synchronized with the <strong>Nexyrra Neural Network</strong>. You are now authorized to receive high-level AI intelligence and strategic alpha directly from our Dubai command center.
                        </p>

                        <!-- Tactical Feature Box -->
                        <div style="background: rgba(139, 92, 246, 0.05); border-left: 3px solid #8B5CF6; padding: 30px; margin-bottom: 50px; border-radius: 0 12px 12px 0;">
                          <h4 style="margin: 0 0 20px 0; font-size: 12px; letter-spacing: 0.2em; color: #ffffff; text-transform: uppercase;">Incoming Intelligence Pipeline:</h4>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td style="padding: 8px 0; color: #cbd5e1; font-size: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">• Neural Research Deep-Dives</td>
                              <td align="right" style="color: #8B5CF6; font-family: 'JetBrains Mono', monospace; font-size: 10px;">ACTIVE</td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; color: #cbd5e1; font-size: 15px; border-bottom: 1px solid rgba(255,255,255,0.05);">• Market Alpha Signatures</td>
                              <td align="right" style="color: #8B5CF6; font-family: 'JetBrains Mono', monospace; font-size: 10px;">ACTIVE</td>
                            </tr>
                            <tr>
                              <td style="padding: 8px 0; color: #cbd5e1; font-size: 15px;">• Dubai Tech Hub Exclusives</td>
                              <td align="right" style="color: #22D3EE; font-family: 'JetBrains Mono', monospace; font-size: 10px;">ENCRYPTED</td>
                            </tr>
                          </table>
                        </div>

                        <!-- Main Call to Action -->
                        <div style="text-align: center;">
                          <a href="https://www.nexyrra.com/signals" style="display: inline-block; background: #8B5CF6; color: #ffffff; padding: 24px 50px; border-radius: 4px; font-weight: 900; text-decoration: none; font-size: 15px; letter-spacing: 0.2em; text-transform: uppercase; border: 1px solid #a78bfa;">OPEN COMMAND TERMINAL</a>
                        </div>
                      </td>
                    </tr>

                    <!-- Security Footer -->
                    <tr>
                      <td style="padding: 40px 50px; background-color: #08090f; border-top: 1px solid #1e1b4b; text-align: center;">
                        <img src="https://www.nexyrra.com/assets/logo.png" alt="" width="24" style="opacity: 0.3; margin-bottom: 20px;">
                        <p style="color: #475569; font-size: 10px; font-weight: 700; margin: 0; letter-spacing: 0.4em; text-transform: uppercase;">
                          © 2026 NEXYRRA AI | UAE LICENSED ARCHITECTS
                        </p>
                        <p style="color: #334155; font-size: 9px; margin-top: 20px; line-height: 1.8; letter-spacing: 0.05em;">
                          This signal is encrypted. Unauthorized reproduction is detected and logged.<br>
                          To terminate your link to the network, <a href="#" style="color: #8B5CF6; text-decoration: none;">click here</a>.
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

    if (resendError) {
      console.error('Email Error:', resendError);
      return NextResponse.json({ error: resendError.message }, { status: 500 });
    }

    return NextResponse.json({ success: true, id: resendData?.id });
  } catch (err: any) {
    console.error('Newsletter API Error:', err);
    return NextResponse.json({ error: err.message }, { status: 500 });
  }
}
