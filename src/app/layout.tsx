import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Nexyrra: The Most Advanced AI-Tech Hub',
  description: 'Nexyrra is at the forefront of AI-tech innovations, providing custom solutions, high-end business insights, and the Nexyrra Signals newsletter.',
  generator: 'Nexyrra AI-Tech',
  applicationName: 'Nexyrra Website',
  viewport: 'width=device-width, initial-scale=1',
  themeColor: '#020617',
  robots: 'index, follow',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://nexyrra.com/',
    siteName: 'Nexyrra',
    title: 'Nexyrra: AI-Tech Engineering',
    description: 'Transforming businesses with advanced AI solutions and intelligent automation.',
    images: [
      {
        url: 'https://nexyrra.com/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Nexyrra: AI-Tech Engineering',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Nexyrra: AI-Tech Innovations',
    description: 'Leading the AI-tech revolution with scalable and intelligent solutions.',
    images: ['https://nexyrra.com/og-image.jpg'],
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body suppressHydrationWarning={true}>
        <div id="root-container">
          {children}
        </div>
      </body>
    </html>
  );
}
