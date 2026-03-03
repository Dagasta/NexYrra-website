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
          </head>
          <body style="margin: 0; padding: 0; background-color: #030408; font-family: 'Outfit', 'Helvetica Neue', Helvetica, Arial, sans-serif;">
            <table border="0" cellpadding="0" cellspacing="0" width="100%" style="background-color: #030408; min-height: 100vh;">
              <tr>
                <td align="center" style="padding: 60px 20px;">
                  
                  <!-- Ultra Premium Container -->
                  <table border="0" cellpadding="0" cellspacing="0" width="600" style="background-color: #08090f; border: 1px solid rgba(139, 92, 246, 0.3); border-radius: 32px; overflow: hidden; box-shadow: 0 30px 60px rgba(0,0,0,0.8), 0 0 40px rgba(139, 92, 246, 0.1);">
                    
                    <!-- Branded Video/Banner Area -->
                    <tr>
                      <td style="padding: 0; position: relative;">
                        <img src="https://www.nexyrra.com/assets/og-image.png" alt="Nexyrra Intelligence" width="600" style="display: block; width: 100%; height: auto;">
                        <div style="background: linear-gradient(to bottom, transparent, #08090f); height: 100px; margin-top: -100px; position: relative; z-index: 1;"></div>
                      </td>
                    </tr>

                    <!-- Main Intel -->
                    <tr>
                      <td style="padding: 20px 60px 50px 60px;">
                        
                        <!-- Mini Header Strip -->
                        <table border="0" cellpadding="0" cellspacing="0" width="100%" style="margin-bottom: 40px;">
                          <tr>
                            <td>
                              <img src="https://www.nexyrra.com/assets/logo.png" alt="Logo" width="48" style="filter: drop-shadow(0 0 15px rgba(139,92,246,0.8));">
                            </td>
                            <td align="right">
                              <div style="display: inline-block; padding: 6px 14px; background: rgba(34, 211, 238, 0.1); border: 1px solid rgba(34, 211, 238, 0.3); border-radius: 999px; color: #22d3ee; font-size: 9px; font-weight: 900; letter-spacing: 0.2em; text-transform: uppercase; font-family: monospace;">CONNECTION SECURE</div>
                            </td>
                          </tr>
                        </table>

                        <h1 style="color: #ffffff; font-size: 34px; font-weight: 900; margin: 0 0 10px 0; letter-spacing: -0.04em; line-height: 1.1;">
                          SYNC <span style="background: linear-gradient(90deg, #8B5CF6, #22D3EE); -webkit-background-clip: text; color: #8B5CF6;">COMPLETE</span>
                        </h1>
                        <p style="color: #475569; font-size: 11px; font-weight: 800; letter-spacing: 0.3em; text-transform: uppercase; margin-bottom: 30px;">Access: Level Alpha (Secured)</p>

                        <p style="color: #94A3B8; font-size: 17px; line-height: 1.8; margin-bottom: 40px;">
                          Hello ${name || 'Operator'},<br><br>
                          Your connection to the <strong>Nexyrra Neural Network</strong> is now active. You have been prioritized for high-fidelity intelligence direct from our Dubai HQ.
                        </p>

                        <!-- Box Feature -->
                        <div style="background: linear-gradient(135deg, rgba(139,92,246,0.1), rgba(34,211,238,0.05)); border: 1px solid rgba(139,92,246,0.25); border-radius: 20px; padding: 30px; margin-bottom: 45px;">
                          <p style="margin: 0 0 20px 0; font-weight: 900; color: #ffffff; font-size: 14px; letter-spacing: 0.1em; text-transform: uppercase; border-bottom: 1px solid rgba(255,255,255,0.05); padding-bottom: 10px;">Intel Pipeline Status:</p>
                          <table border="0" cellpadding="0" cellspacing="0" width="100%">
                            <tr>
                              <td style="color: #cbd5e1; font-size: 15px; padding: 5px 0;">• Strategic Alpha Reports</td>
                              <td align="right" style="color: #8B5CF6; font-size: 11px; font-weight: 800;">LIVE</td>
                            </tr>
                            <tr>
                              <td style="color: #cbd5e1; font-size: 15px; padding: 5px 0;">• Neural Research Deep-dives</td>
                              <td align="right" style="color: #8B5CF6; font-size: 11px; font-weight: 800;">LIVE</td>
                            </tr>
                            <tr>
                              <td style="color: #cbd5e1; font-size: 15px; padding: 5px 0;">• UAE Business Automation</td>
                              <td align="right" style="color: #22d3ee; font-size: 11px; font-weight: 800;">ENCRYPTED</td>
                            </tr>
                          </table>
                        </div>

                        <!-- CTA -->
                        <div style="text-align: center;">
                          <a href="https://www.nexyrra.com/signals" style="display: inline-block; background: linear-gradient(135deg, #8B5CF6, #7C3AED); color: #ffffff; padding: 22px 45px; border-radius: 16px; font-weight: 900; text-decoration: none; font-size: 16px; letter-spacing: 0.1em; box-shadow: 0 15px 35px rgba(139, 92, 246, 0.4); text-transform: uppercase;">Launch Archives</a>
                        </div>
                      </td>
                    </tr>

                    <!-- Footer -->
                    <tr>
                      <td style="padding: 40px 60px; background-color: #05060b; border-top: 1px solid rgba(139, 92, 246, 0.15); text-align: center;">
                        <p style="color: #64748b; font-size: 10px; font-weight: 800; margin: 0; letter-spacing: 0.3em; text-transform: uppercase;">
                          © 2026 NEXYRRA AI AGENCY | DUBAI, UAE
                        </p>
                        <p style="color: #334155; font-size: 10px; margin-top: 15px; line-height: 1.6;">
                          You are receiving this encrypted signal because your profile was synchronized with Nexyrra.<br>
                          <a href="#" style="color: #8B5CF6; text-decoration: none; font-weight: 800;">TERMINATE CONNECTION</a>
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
