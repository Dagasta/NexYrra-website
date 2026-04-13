import type { Metadata, Viewport } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexyrra | OS Singularity',
  description: 'An intelligent digital operations center.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#020005',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo.png" />
      </head>
      {/* 
        NO NAVBAR. NO FOOTER.
        The entire application is mounted inside the children wrapper as a full-screen Dashboard.
      */}
      <body suppressHydrationWarning>
        {children}
      </body>
    </html>
  );
}
