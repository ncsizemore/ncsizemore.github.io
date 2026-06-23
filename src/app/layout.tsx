import React from 'react';
import type { Metadata } from 'next';
import './globals.css';

const title = 'Nicholas Sizemore | Computational Scientist & Research Software Engineer';
const description =
  'Computational scientist and research software engineer building reproducible scientific modeling infrastructure, cloud pipelines, and public tools, with current work in epidemiology.';

export const metadata: Metadata = {
  metadataBase: new URL('https://ncsizemore.github.io'),
  title,
  description,
  keywords: [
    'computational scientist',
    'research software engineer',
    'scientific software',
    'scientific modeling',
    'epidemiological modeling',
    'reproducible computing',
  ],
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
    title,
    description,
    url: '/',
    siteName: 'Nicholas Sizemore',
    type: 'website',
  },
  twitter: {
    card: 'summary',
    title,
    description,
  },
  alternates: {
    canonical: '/',
  },
  robots: {
    index: true,
    follow: true,
  }
};

export const viewport = {
  width: 'device-width',
  initialScale: 1,
  themeColor: '#fafaf9'
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
