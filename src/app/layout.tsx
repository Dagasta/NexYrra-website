import type { Metadata, Viewport } from 'next';
import './globals.css';
import WhatsAppButton from '../components/WhatsAppButton';
import Cursor from '../components/Cursor';

export const metadata: Metadata = {
  title: 'Nexyrra | High-Performance Technology & Systems Company',
  description: 'Nexyrra is a premier technology firm that architects, engineers, and scales digital infrastructure at the highest levels of performance.',
  generator: 'Nexyrra Systems Architecture',
  applicationName: 'Nexyrra',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexyrra.com/',
    siteName: 'Nexyrra',
    title: 'Nexyrra | Digital Infrastructure & Systems Architecture',
    description: 'Deconstruct. Engineer. Scale. — High-authority technology firm, Dubai UAE',
    images: [{ url: '/assets/og-image.png', width: 1200, height: 630 }],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexyrra | Systems Architecture',
    description: 'Bespoke Software Engineering & Autonomous Systems — Dubai, UAE',
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
        <Cursor />
        {children}
        <WhatsAppButton />
      </body>
    </html>
  );
}
