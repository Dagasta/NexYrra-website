import type { Metadata, Viewport } from 'next';
import './globals.css';
import Cursor from '../components/Cursor';

export const metadata: Metadata = {
  title: 'Nexyrra | Spatial Intelligence',
  description: 'An advanced digital intelligence platform.',
  generator: 'Nexyrra Project Omnis',
  applicationName: 'Nexyrra',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#000000',
  maximumScale: 1,
  userScalable: false
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=Syncopate:wght@400;700&family=Manrope:wght@200;300;400;500;700;800&family=JetBrains+Mono:wght@100;300;400;500&display=swap"
          rel="stylesheet"
        />
        <link rel="icon" href="/assets/logo.png" />
      </head>
      {/* 
        The body is locked (overflow hidden). 
        All scrolling is hijacked by @react-three/drei ScrollControls in the main page.
      */}
      <body suppressHydrationWarning>
        <Cursor />
        {children}
      </body>
    </html>
  );
}
