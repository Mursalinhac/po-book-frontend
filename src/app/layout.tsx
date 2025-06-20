import type { Metadata } from 'next';
import "./globals.css";
import Navigation from '../components/Navigation';
import SkipLink from '../components/SkipLink';

export const metadata: Metadata = {
  title: {
    default: 'Corvette Purchase Order',
    template: '%s | Corvette Purchase Order'
  },
  description: 'Configure and order your new Corvette with our interactive purchase order system. Choose from Stingray, Z06, E-Ray, and ZR1 models.',
  keywords: ['Corvette', 'Chevrolet', 'Purchase Order', 'Stingray', 'Z06', 'E-Ray', 'ZR1', 'Sports Car'],
  authors: [{ name: 'Ciocca Corvette' }],
  creator: 'Ciocca Corvette',
  publisher: 'Ciocca Corvette',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('http://localhost:3000'),
  openGraph: {
    title: 'Corvette Purchase Order',
    description: 'Configure and order your new Corvette with our interactive purchase order system',
    url: 'http://localhost:3000',
    siteName: 'Corvette Purchase Order',
    images: [
      {
        url: '/images/stingray.jpeg',
        width: 1200,
        height: 630,
        alt: 'Corvette Purchase Order System',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Corvette Purchase Order',
    description: 'Configure and order your new Corvette',
    images: ['/images/stingray.jpeg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'google-site-verification-code',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-corvette-bg text-white font-sans">
        <div id="root">
          <SkipLink href="#main-content">Skip to main content</SkipLink>
          <Navigation/>
          <main id="main-content" role="main">
            {children}
          </main>
        </div>
      </body>
    </html>
  );
}
