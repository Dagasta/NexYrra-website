import type { Metadata, Viewport } from 'next';
import './globals.css';
import Navbar from '../components/Navbar';

export const metadata: Metadata = {
  title: 'Nexyrra | Matrix Architecture',
  description: 'High-performance systems engineering at the intersection of AI and human legacy.',
};

export const viewport: Viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#06080F',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/assets/logo.png" />
      </head>
      {/* Restored standard scrolling. Background grid is handled via CSS in globals. */}
      <body suppressHydrationWarning>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
