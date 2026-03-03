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
        <html lang="en">
          <head>
            <meta charset="utf-8">
            <title>Nexyrra Intelligence Signal</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&family=JetBrains+Mono:wght@700&display=swap');
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #030408; font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #030408;">
              <tr>
                <td align="center" style="padding: 40px 10px;">
                  
                  <!-- Intelligence Capsule -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #0c0d15; border: 1px solid #1e1b4b; border-radius: 4px; overflow: hidden; box-shadow: 0 50px 100px rgba(0,0,0,0.9);">
                    
                    <!-- Alert Status Bar -->
                    <tr>
                      <td style="background: #22D3EE; height: 4px;"></td>
                    </tr>

                    <!-- Header -->
                    <tr>
                      <td style="padding: 30px 40px; border-bottom: 1px solid rgba(255,255,255,0.05); background-color: #0a0b14;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td>
                              <img src="https://www.nexyrra.com/assets/logo.png" alt="Nexyrra" width="38" style="display: block;">
                            </td>
                            <td align="right">
                              <div style="font-family: 'JetBrains Mono', monospace; font-size: 9px; color: #22D3EE; letter-spacing: 0.3em; font-weight: 700; text-transform: uppercase;">NEURAL_BROADCAST_ACTIVE</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Signal Metadata -->
                    <tr>
                      <td style="padding: 30px 40px 10px 40px;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td width="50%">
                              <p style="font-family: 'JetBrains Mono', monospace; font-size: 9px; color: #475569; margin: 0; text-transform: uppercase; letter-spacing: 0.1em;">Clearance Level</p>
                              <p style="font-size: 13px; color: #ffffff; font-weight: 700; margin: 4px 0 0 0;">ALPHA ECHELON</p>
                            </td>
                            <td align="right">
                              <p style="font-family: 'JetBrains Mono', monospace; font-size: 9px; color: #475569; margin: 0; text-transform: uppercase; letter-spacing: 0.1em;">Origin</p>
                              <p style="font-size: 13px; color: #ffffff; font-weight: 700; margin: 4px 0 0 0;">NEXYRRA_HQ_DBX</p>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Cover Image Section -->
                    ${image_url ? `
                    <tr>
                      <td style="padding: 20px 40px;">
                        <img src="${image_url}" alt="${title}" width="520" style="display: block; width: 100%; border-radius: 8px; border: 1px solid rgba(139, 92, 246, 0.2);">
                      </td>
                    </tr>
                    ` : ''}

                    <!-- Content Body -->
                    <tr>
                      <td style="padding: 30px 40px 60px 40px;">
                        <div style="display: inline-block; padding: 4px 10px; background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 4px; color: #A78BFA; font-size: 9px; font-weight: 800; letter-spacing: 0.2em; margin-bottom: 20px; text-transform: uppercase; font-family: 'JetBrains Mono', monospace;">
                          ${category || 'SIGNAL'}
                        </div>

                        <h1 style="color: #ffffff; font-size: 38px; font-weight: 900; margin: 0 0 25px 0; line-height: 1.1; letter-spacing: -0.04em;">
                          ${title}
                        </h1>

                        <p style="color: #94A3B8; font-size: 18px; line-height: 1.8; margin-bottom: 40px; font-weight: 400;">
                          ${excerpt}
                        </p>

                        <!-- Action Terminal -->
                        <div style="text-align: left; padding: 35px; background: #08090f; border-radius: 4px; border: 1px solid #1e1b4b;">
                           <p style="font-family: 'JetBrains Mono', monospace; color: #475569; font-size: 11px; margin: 0 0 25px 0; font-weight: 700;">// ANALYZING SYSTEM LOGS... COMPLETE.</p>
                           <a href="https://www.nexyrra.com/signals" style="display: inline-block; background: #ffffff; color: #000000; padding: 22px 45px; border-radius: 4px; font-weight: 900; text-decoration: none; font-size: 14px; letter-spacing: 0.15em; text-transform: uppercase;">VIEW FULL SIGNAL</a>
                        </div>
                      </td>
                    </tr>

                    <!-- Tactical Footer -->
                    <tr>
                      <td style="padding: 40px 40px; background-color: #05060b; border-top: 1px solid #1e1b4b; text-align: center;">
                        <p style="color: #334155; font-size: 9px; font-weight: 800; margin: 0; letter-spacing: 0.4em; text-transform: uppercase;">
                          © 2026 NEXYRRA AI ARCHITECTS | UAE
                        </p>
                        <p style="color: #334155; font-size: 9px; margin-top: 25px; line-height: 1.8; letter-spacing: 0.05em;">
                          This frequency is reserved for authorized recipients only. Any unauthorized intercept will be met with protocol 7 termination.<br>
                          <a href="#" style="color: #475569; text-decoration: underline;">De-synchronize from network</a>
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
