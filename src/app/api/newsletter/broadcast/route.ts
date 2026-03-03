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
              @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap');
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #030408; font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #030408;">
              <tr>
                <td align="center" style="padding: 60px 20px;">
                  
                  <!-- Signal Capsule -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #08090f; border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 24px; overflow: hidden; box-shadow: 0 40px 80px rgba(0,0,0,0.6);">
                    
                    <!-- Top Category Bar -->
                    <tr>
                      <td style="background: #8B5CF6; height: 6px;"></td>
                    </tr>

                    <!-- Header -->
                    <tr>
                      <td style="padding: 40px 50px; background-color: #0a0b14;">
                        <table border="0" cellpadding="0" cellspacing="0" width="100%">
                          <tr>
                            <td>
                              <img src="https://www.nexyrra.com/assets/logo.png" alt="Nexyrra" width="45" style="display: block;">
                            </td>
                            <td align="right">
                              <div style="display: inline-block; padding: 8px 16px; background: rgba(139, 92, 246, 0.1); border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 8px; color: #A78BFA; font-size: 10px; font-weight: 900; letter-spacing: 0.15em; text-transform: uppercase;">
                                ${category || 'Signal'}
                              </div>
                            </td>
                          </tr>
                        </table>
                      </td>
                    </tr>

                    <!-- Image Section -->
                    ${image_url ? `
                    <tr>
                      <td style="padding: 10px 50px;">
                        <img src="${image_url}" alt="${title}" width="500" style="display: block; width: 100%; border-radius: 12px; border: 1px solid rgba(255,255,255,0.05);">
                      </td>
                    </tr>
                    ` : ''}

                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 50px 60px 50px;">
                        <h1 style="color: #ffffff; font-size: 36px; font-weight: 900; margin: 0 0 20px 0; line-height: 1.1; letter-spacing: -0.03em;">
                          ${title}
                        </h1>

                        <p style="color: #94A3B8; font-size: 18px; line-height: 1.8; margin-bottom: 45px; font-weight: 400;">
                          ${excerpt}
                        </p>

                        <!-- Action Terminal -->
                        <div style="text-align: left; padding: 40px; background: #05060b; border-radius: 20px; border: 1px solid rgba(139, 92, 246, 0.1);">
                           <p style="color: #64748b; font-size: 13px; margin: 0 0 25px 0; font-style: italic;">Full analysis and technical deep-dive available in the Nexyrra terminal.</p>
                           <a href="https://www.nexyrra.com/signals" style="display: inline-block; background: #8B5CF6; color: #ffffff; padding: 22px 50px; border-radius: 12px; font-weight: 900; text-decoration: none; font-size: 15px; letter-spacing: 0.1em; text-transform: uppercase;">View Full Signal</a>
                        </div>
                      </td>
                    </tr>

                    <!-- Tactical Footer -->
                    <tr>
                      <td style="padding: 40px 50px; background-color: #05060b; border-top: 1px solid rgba(139, 92, 246, 0.1); text-align: center;">
                        <p style="color: #475569; font-size: 10px; font-weight: 800; margin: 0; letter-spacing: 0.3em; text-transform: uppercase;">
                          Nexyrra Intelligence · Dubai, UAE
                        </p>
                        <p style="color: #334155; font-size: 9px; margin-top: 25px; line-height: 1.8;">
                          You are receiving this professional briefing as a member of the Nexyrra network. <br>
                          <a href="#" style="color: #475569; text-decoration: underline;">Unsubscribe from insights</a>
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
