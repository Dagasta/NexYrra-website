// Nexyrra AI-Tech: Newsletter Data Layer (Mock/Local for initial dev)
// This can be replaced with Supabase or Prisma in production.

export interface NewsletterIssue {
    id: string;
    title: string;
    excerpt: string;
    content: string;
    date: string;
    category: 'Market Intelligence' | 'Neural Research' | 'Strategic Alpha';
    image?: string;
}

export let mockNewsletterIssues: NewsletterIssue[] = [
    {
        id: '1',
        title: 'Precision AI: Scaling Authority in 2026',
        excerpt: 'Exploring the shift from reactive tools to autonomous enterprise ecosystems.',
        content: 'Full intelligence report on the evolution of cognitive agents...',
        date: '2026-03-01',
        category: 'Strategic Alpha',
    },
    {
        id: '2',
        title: 'The Neural Grid: Architecture of the Future',
        excerpt: 'Detailed breakdown of high-performance LLM integration for retail giants.',
        content: 'Deep dive into decentralized compute nodes...',
        date: '2026-02-20',
        category: 'Neural Research',
    },
    {
        id: '3',
        title: 'Predictive ROI: Beyond Traditional Analytics',
        excerpt: 'How Nexyrra is achieving 400% efficiency gains for Fortune 500 partners.',
        content: 'Statistical proof of neural optimization in supply chains...',
        date: '2026-02-15',
        category: 'Market Intelligence',
    }
];

// Utility functions for the Newsletter System
export const getNewsletterIssues = () => {
    return [...mockNewsletterIssues].sort((a, b) => new Date(b.date).getTime() - new Date(a.date).getTime());
};

export const addNewsletterIssue = (issue: Omit<NewsletterIssue, 'id'>) => {
    const newIssue = { ...issue, id: Math.random().toString(36).substr(2, 9) };
    mockNewsletterIssues.push(newIssue);
    return newIssue;
};

export const deleteNewsletterIssue = (id: string) => {
    mockNewsletterIssues = mockNewsletterIssues.filter(issue => issue.id !== id);
};
