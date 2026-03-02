import { createClient } from '@supabase/supabase-js';
import { NextRequest, NextResponse } from 'next/server';

export async function POST(req: NextRequest) {
    try {
        const formData = await req.formData();
        const file = formData.get('file') as File;
        const path = formData.get('path') as string;

        if (!file || !path) {
            return NextResponse.json({ error: 'Missing file or path' }, { status: 400 });
        }

        // Use Service Role Key to bypass RLS policies
        const supabase = createClient(
            process.env.NEXT_PUBLIC_SUPABASE_URL!,
            process.env.SUPABASE_SERVICE_ROLE_KEY!
        );

        const buffer = await file.arrayBuffer();

        const { data, error } = await supabase.storage
            .from('nexyrra-media')
            .upload(path, Buffer.from(buffer), {
                contentType: file.type,
                upsert: true
            });

        if (error) {
            console.error('API Upload Error:', error);
            return NextResponse.json({ error: error.message }, { status: 500 });
        }

        const { data: urlData } = supabase.storage
            .from('nexyrra-media')
            .getPublicUrl(path);

        return NextResponse.json({ publicUrl: urlData.publicUrl });
    } catch (err: any) {
        console.error('API Server Error:', err);
        return NextResponse.json({ error: err.message }, { status: 500 });
    }
}
