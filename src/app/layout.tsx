import type { Metadata } from 'next';
import './globals.css';

export const metadata: Metadata = {
  title: 'Himanshu — Software Developer Portfolio',
  description: 'Production-ready developer portfolio built with Next.js, Java backend experience, React, and modern web stack.',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body>{children}</body>
    </html>
  );
}