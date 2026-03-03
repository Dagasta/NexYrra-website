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
            <title>Welcome to Nexyrra Signals</title>
            <style>
              @import url('https://fonts.googleapis.com/css2?family=Outfit:wght@400;700;900&display=swap');
            </style>
          </head>
          <body style="margin: 0; padding: 0; background-color: #030408; font-family: 'Outfit', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Helvetica, Arial, sans-serif; color: #ffffff;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #030408;">
              <tr>
                <td align="center" style="padding: 60px 20px;">
                  
                  <!-- Main Capsule -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #08090f; border: 1px solid rgba(139, 92, 246, 0.2); border-radius: 24px; overflow: hidden; box-shadow: 0 40px 80px rgba(0,0,0,0.6);">
                    
                    <!-- Branded Header -->
                    <tr>
                      <td align="center" style="padding: 50px 40px 30px 40px;">
                        <img src="https://www.nexyrra.com/assets/logo.png" alt="Nexyrra" width="60" style="display: block; margin-bottom: 20px;">
                        <h2 style="color: #8B5CF6; font-size: 11px; font-weight: 900; letter-spacing: 0.3em; text-transform: uppercase; margin: 0;">Dubai · Global Intelligence</h2>
                      </td>
                    </tr>

                    <!-- Content -->
                    <tr>
                      <td style="padding: 40px 60px; text-align: center;">
                        <h1 style="font-size: 38px; font-weight: 900; margin: 0 0 20px 0; color: #ffffff; letter-spacing: -0.03em;">Intelligence <span style="color: #8B5CF6;">Priority</span> Confirmed</h1>
                        
                        <p style="font-size: 18px; line-height: 1.8; color: #94A3B8; margin-bottom: 40px; font-weight: 400;">
                          Operator <strong style="color: #ffffff;">${name || 'Member'}</strong>,<br><br>
                          You are now connected to Nexyrra's exclusive signal network. From our base in Dubai, we deliver high-impact AI intelligence and market strategies designed for those leading the future.
                        </p>

                        <!-- Focus List -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 45px; background: rgba(139, 92, 246, 0.03); border-radius: 16px; border: 1px solid rgba(139, 92, 246, 0.1);">
                          <tr>
                            <td style="padding: 25px;">
                              <p style="margin: 0 0 15px 0; color: #ffffff; font-weight: 800; font-size: 14px; text-transform: uppercase; letter-spacing: 0.1em;">What to Expect:</p>
                              <table border="0" cellpadding="0" cellspacing="0" width="100%">
                                <tr>
                                  <td style="padding: 8px 0; color: #cbd5e1; font-size: 15px;">• Advanced Neural Research</td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0; color: #cbd5e1; font-size: 15px;">• Strategic Market Alpha</td>
                                </tr>
                                <tr>
                                  <td style="padding: 8px 0; color: #cbd5e1; font-size: 15px;">• Dubai AI Agency Insights</td>
                                </tr>
                              </table>
                            </td>
                          </tr>
                        </table>

                        <!-- CTA -->
                        <div style="text-align: center;">
                          <a href="https://www.nexyrra.com/signals" style="display: inline-block; background: #8B5CF6; color: #ffffff; padding: 22px 45px; border-radius: 12px; font-weight: 900; text-decoration: none; font-size: 15px; letter-spacing: 0.05em; text-transform: uppercase; box-shadow: 0 10px 30px rgba(139, 92, 246, 0.3);">Access Signal Archives</a>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding: 40px 60px; background-color: #05060b; border-top: 1px solid rgba(139, 92, 246, 0.1); text-align: center;">
                        <p style="color: #475569; font-size: 10px; font-weight: 800; margin: 0; letter-spacing: 0.3em; text-transform: uppercase;">
                          © 2026 NEXYRRA | AI & INTELLIGENT TECHNOLOGY
                        </p>
                        <p style="color: #334155; font-size: 9px; margin-top: 20px; line-height: 1.8;">
                          This frequency is prioritized for registered members. <br>
                          <a href="#" style="color: #8B5CF6; text-decoration: none;">Unsubscribe from network</a>
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
