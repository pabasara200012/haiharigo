import type { Metadata } from 'next';
import './globals.css';
import { brand } from '../lib/partnerStores';

export const metadata: Metadata = {
  metadataBase: new URL('https://pabasara200012.github.io/haiharigo'),
  title: {
    default: brand.name,
    template: `%s | ${brand.name}`,
  },
  description: brand.description,
  openGraph: {
    title: brand.name,
    description: brand.description,
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title: brand.name,
    description: brand.description,
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden bg-white text-slate-900 antialiased">{children}</body>
    </html>
  );
}
