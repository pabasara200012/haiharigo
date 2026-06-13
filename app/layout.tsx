import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'HariහරිGo – One Call. Any Service.',
  description: 'Premium on-demand delivery for medicines, groceries, food, parcels, documents, and essentials.',
  metadataBase: new URL('https://hariharigo.example.com'),
  openGraph: {
    title: 'HariහරිGo – One Call. Any Service.',
    description: 'Premium on-demand delivery for medicines, groceries, food, parcels, documents, and essentials.',
    type: 'website',
  },
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="min-h-screen overflow-x-hidden">{children}</body>
    </html>
  );
}
