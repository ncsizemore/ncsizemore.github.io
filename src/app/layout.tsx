import React from 'react';
import './globals.css';

export const metadata = {
  title: 'Nicholas Sizemore | Computational Biology',
  description: 'Research in network science, computational biology, and AI-driven biological systems analysis.',
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: '16x16', type: 'image/x-icon' },
      { url: '/favicon.svg', type: 'image/svg+xml' }
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' }
    ],
  },
  openGraph: {
    title: 'Nicholas Sizemore | Computational Biology',
    description: 'Research in network science, computational biology, and AI-driven biological systems analysis.',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#ffffff'
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}