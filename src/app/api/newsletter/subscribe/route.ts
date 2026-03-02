import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
    try {
        const { email, name } = await req.json();

        if (!email) {
            return NextResponse.json({ error: 'Email is required' }, { status: 400 });
        }

        // Send welcome email
        const { data, error } = await resend.emails.send({
            from: 'Nexyrra Signals <onboarding@resend.dev>', // You can change this to nexyrra@gmail.com after domain verification
            to: email,
            subject: 'Welcome to Nexyrra Signals: Intelligence Synchronized',
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #08090f; color: white; padding: 40px; border-radius: 20px;">
          <h1 style="color: #8B5CF6; font-size: 24px; font-weight: 800; margin-bottom: 20px;">WELCOME TO THE INNER CIRCLE</h1>
          <p style="color: #94A3B8; font-size: 16px; line-height: 1.6;">Hello ${name || 'Operator'},</p>
          <p style="color: #94A3B8; font-size: 16px; line-height: 1.6;">You have successfully synchronized with <strong>Nexyrra Signals</strong>. You are now part of an elite group receiving weekly AI intelligence reports direct from Dubai.</p>
          <div style="background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.2); padding: 20px; border-radius: 12px; margin: 30px 0;">
            <p style="margin: 0; font-weight: 700; color: white;">What to expect:</p>
            <ul style="color: #94A3B8; margin-top: 10px;">
              <li>Weekly Strategic Alpha reports</li>
              <li>Neural Research deep-dives</li>
              <li>Market Intelligence alerts</li>
            </ul>
          </div>
          <p style="color: #64748B; font-size: 14px;">Next signal incoming shortly.</p>
          <hr style="border: 0; border-top: 1px solid rgba(139,92,246,0.1); margin: 30px 0;" />
          <p style="font-size: 12px; color: #475569;">© Nexyrra AI Agency | Dubai, UAE</p>
        </div>
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
