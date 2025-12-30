import React from 'react';
import type { Metadata } from 'next';
import Header from '#/components/header';
import ThemeProvider from '#/components/theme-provider';
import './globals.css';

export const metadata: Metadata = {
  title: 'tinywaves',
  description: 'Personal website and portfolio',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className="mx-auto max-w-2xl px-6 antialiased">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
