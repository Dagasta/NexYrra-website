import { Resend } from 'resend';
import { NextRequest, NextResponse } from 'next/server';
import { createClient } from '@supabase/supabase-js';

const resend = new Resend(process.env.RESEND_API_KEY);
const supabase = createClient(
    process.env.NEXT_PUBLIC_SUPABASE_URL!,
    process.env.SUPABASE_SERVICE_ROLE_KEY!
);

export async function POST(req: NextRequest) {
    try {
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
        // Note: On professional domain verification, change "from" to nexyrra@gmail.com
        const { data, error } = await resend.emails.send({
            from: 'Nexyrra Signals <newsletter@resend.dev>',
            to: emails,
            subject: `NEW SIGNAL: ${title}`,
            html: `
        <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto; background: #08090f; color: white; padding: 40px; border-radius: 20px;">
          <div style="text-align: center; margin-bottom: 30px;">
            <span style="font-size: 11px; text-transform: uppercase; color: #8B5CF6; letter-spacing: 2px;">NEURAL INTELLIGENCE REPORT</span>
          </div>
          
          <h1 style="color: white; font-size: 28px; font-weight: 800; margin-bottom: 24px; line-height: 1.2;">${title}</h1>
          
          <div style="padding: 6px 14px; background: rgba(139,92,246,0.1); border: 1px solid rgba(139,92,246,0.2); display: inline-block; border-radius: 99px; color: #A78BFA; font-size: 10px; font-weight: bold; margin-bottom: 30px;">
            ${category.toUpperCase()}
          </div>

          ${image_url ? `<img src="${image_url}" style="width: 100%; border-radius: 14px; margin-bottom: 30px;" />` : ''}
          
          <p style="color: #94A3B8; font-size: 16px; line-height: 1.8;">${excerpt}</p>
          
          <a href="http://localhost:3000/signals" style="display: block; width: 100%; padding: 18px; background: #8B5CF6; color: white; text-align: center; text-decoration: none; border-radius: 12px; font-weight: 800; font-size: 15px; margin-top: 40px;">
            READ FULL SIGNAL
          </a>

          <hr style="border: 0; border-top: 1px solid rgba(139,92,246,0.1); margin: 40px 0;" />
          
          <div style="text-align: center; color: #475569; font-size: 12px;">
            <p>Sent via Nexyrra AI Agency | Dubai, UAE</p>
            <p>Support: <a href="mailto:nexyrra@gmail.com" style="color: #8B5CF6;">nexyrra@gmail.com</a></p>
          </div>
        </div>
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
