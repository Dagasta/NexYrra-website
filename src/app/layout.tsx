import type { Metadata, Viewport } from 'next';
import './globals.css';
import WhatsAppButton from '../components/WhatsAppButton';

export const metadata: Metadata = {
  title: 'Nexyrra: AI Agency Dubai | Autonomous AI Agents & Automation',
  description: 'Nexyrra is a UAE-licensed AI agency specializing in autonomous AI agents, workflow automation, bulk WhatsApp marketing, web development, and enterprise data intelligence.',
  generator: 'Nexyrra AI Agency',
  applicationName: 'Nexyrra',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexyrra.com/',
    siteName: 'Nexyrra',
    title: 'Nexyrra: AI Agency Dubai',
    description: 'Empowering Future with AI — UAE Licensed AI Agency',
    images: [{ url: 'https://nexyrra.com/og-image.jpg', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexyrra: AI Agency',
    description: 'Autonomous AI Agents, Automation & More — Dubai, UAE',
  },
  icons: {
    icon: '/assets/logo.png',
    apple: '/assets/logo.png',
  },
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#08090f',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Google Fonts loaded via link tag — avoids CSS @import issues with Turbopack */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&family=Outfit:wght@300;400;500;600;700;800;900&family=Orbitron:wght@400;500;600;700;800;900&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/logo.png" />
        <link rel="apple-touch-icon" href="/assets/logo.png" />
      </head>
      <body suppressHydrationWarning>
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
