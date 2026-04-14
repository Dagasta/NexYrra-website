import type { Metadata, Viewport } from 'next';
import './globals.css';
import Cursor from '../components/Cursor';
import SystemInit from '../components/SystemInit';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata: Metadata = {
    title: 'Nexyrra | Technology Operating System — Dubai, UAE',
    description: 'Nexyrra architects advanced software ecosystems, custom technology infrastructure, and autonomous AI solutions for enterprise leaders globally.',
    robots: 'index, follow',
    openGraph: {
        type: 'website',
        locale: 'en_US',
        url: 'https://nexyrra.com/',
        siteName: 'Nexyrra',
        title: 'Nexyrra | Technology Operating System',
        description: 'Building the Future of Technology — Software & AI Agency Dubai, UAE',
        images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }],
    },
    twitter: {
        card: 'summary_large_image',
        title: 'Nexyrra | Technology Operating System',
        description: 'Building the Future of Technology — Software & AI Agency Dubai, UAE',
        images: ['/assets/og-image.png'],
    },
    icons: {
        icon: '/assets/logo.png',
        apple: '/assets/logo.png',
    },
};

export const viewport: Viewport = {
    width: 'device-width',
    initialScale: 1,
    themeColor: '#050508',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <link
                    href="https://fonts.googleapis.com/css2?family=Space+Grotesk:wght@300;400;500;600;700&family=Sora:wght@300;400;600;700;800&family=JetBrains+Mono:wght@300;400;500;700&display=swap"
                    rel="stylesheet"
                />
                <link rel="icon" href="/assets/logo.png" />
            </head>
            <body suppressHydrationWarning>
                <SystemInit />
                <Cursor />
                <WhatsAppButton />
                {children}
            </body>
        </html>
    );
}
