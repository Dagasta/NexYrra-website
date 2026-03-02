import { createClient } from '@supabase/supabase-js';

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL!;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!;

export const supabase = createClient(supabaseUrl, supabaseAnonKey);

// Types for newsletter issues
export interface NewsletterIssue {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    category: 'Market Intelligence' | 'Neural Research' | 'Strategic Alpha';
    image_url?: string;
    published_at: string;
    created_at?: string;
}

// Fallback mock data (used while Supabase tables are being set up)
export const mockIssues: NewsletterIssue[] = [
    {
        id: '1',
        title: 'Precision AI: Scaling Authority in 2026',
        excerpt: 'Exploring the shift from reactive tools to autonomous enterprise ecosystems that redefine industry benchmarks.',
        content: '',
        published_at: '2026-03-01',
        category: 'Strategic Alpha',
    },
    {
        id: '2',
        title: 'The Neural Grid: Architecture of the Future',
        excerpt: 'Detailed breakdown of high-performance LLM integration for retail giants and Fortune 500 innovators.',
        content: '',
        published_at: '2026-02-20',
        category: 'Neural Research',
    },
    {
        id: '3',
        title: 'Predictive ROI: Beyond Traditional Analytics',
        excerpt: 'How Nexyrra is achieving 400% efficiency gains through neural optimization in enterprise supply chains.',
        content: '',
        published_at: '2026-02-15',
        category: 'Market Intelligence',
    },
];
