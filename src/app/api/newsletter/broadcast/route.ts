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
          </head>
          <body style="margin: 0; padding: 0; background-color: #030408; font-family: 'Outfit', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #030408; min-height: 100vh;">
              <tr>
                <td align="center" style="padding: 60px 20px;">
                  
                  <!-- Intelligence Capsule -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #08090f; border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 32px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(34, 211, 238, 0.1);">
                    
                    <!-- Header -->
                    <tr>
                      <td style="padding: 30px 50px; background-color: #0a0b14; border-bottom: 1px solid rgba(139, 92, 246, 0.15);">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td>
                              <img src="https://www.nexyrra.com/assets/logo.png" alt="Nexyrra" width="42" style="filter: drop-shadow(0 0 10px rgba(139,92,246,0.6));">
                            </td>
                            <td align="right">
                              <div style="display: inline-block; padding: 5px 12px; background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 999px; color: #8B5CF6; font-size: 9px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase;">NEURAL BROADCAST</div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Cover Image -->
                    ${image_url ? `
                    <tr>
                      <td style="padding: 0; position: relative;">
                        <img src="${image_url}" alt="${title}" width="600" style="display: block; width: 100%; height: auto;">
                        <div style="background: linear-gradient(to bottom, transparent, #08090f); height: 80px; margin-top: -80px; position: relative;"></div>
                      </td>
                    </tr>
                    ` : ''}

                    <!-- Content Body -->
                    <tr>
                      <td style="padding: 40px 60px 50px 60px;">
                        <div style="display: inline-block; padding: 4px 10px; background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.2); border-radius: 4px; color: #22D3EE; font-size: 10px; font-weight: 900; letter-spacing: 0.1em; margin-bottom: 25px; text-transform: uppercase;">
                          ${category || 'INTEL'}
                        </div>

                        <h1 style="color: #ffffff; font-size: 32px; font-weight: 900; margin: 0 0 25px 0; line-height: 1.2; letter-spacing: -0.03em;">
                          ${title}
                        </h1>

                        <p style="color: #94A3B8; font-size: 17px; line-height: 1.8; margin-bottom: 40px; font-weight: 400;">
                          ${excerpt}
                        </p>

                        <!-- Action Area -->
                        <div style="text-align: left; padding: 30px; background: rgba(255,255,255,0.02); border-radius: 20px; border: 1px solid rgba(255,255,255,0.05);">
                           <p style="color: #64748b; font-size: 13px; margin: 0 0 20px 0; font-style: italic;">"Full intelligence report optimized for your clearance level."</p>
                           <a href="https://www.nexyrra.com/signals" style="display: inline-block; background: linear-gradient(135deg, #8B5CF6, #7C3AED); color: #ffffff; padding: 20px 40px; border-radius: 14px; font-weight: 900; text-decoration: none; font-size: 15px; letter-spacing: 0.05em; box-shadow: 0 10px 25px rgba(139, 92, 246, 0.3); text-transform: uppercase;">OPEN SIGNAL</a>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding: 40px 60px; background-color: #05060b; border-top: 1px solid rgba(139, 92, 246, 0.15); text-align: center;">
                        <p style="color: #64748b; font-size: 10px; font-weight: 800; margin: 0; letter-spacing: 0.3em; text-transform: uppercase;">
                          © 2026 NEXYRRA AI AGENCY | DUBAI, UAE
                        </p>
                        <p style="color: #334155; font-size: 10px; margin-top: 20px; line-height: 1.6;">
                          Secure transmission via Nexyrra Neural Infrastructure.<br>
                          <a href="https://www.nexyrra.com" style="color: #8B5CF6; text-decoration: none; font-weight: 800;">VISIT TERMINAL</a>
                        </p>
                      </td>
                    </tr>
                  </table>

                  <p style="margin-top: 30px; color: #334155; font-size: 10px; text-align: center;">
                    To stop receiving signals, <a href="#" style="color: #475569;">click here to de-synchronize</a>.
                  </p>
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
