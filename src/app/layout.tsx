import type { Metadata } from 'next';
import { Anton } from 'next/font/google';
import '@/styles/globals.css';
import '@/libs/fontawesome';
import Header from '@/components/Header/Header';

const anton = Anton({
  subsets: ['latin'],
  weight: '400', // Anton só tem um peso
  variable: '--font-anton',
});

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
  viewport: 'width=device-width, initial-scale=0',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-br" className={anton.className}>
      <body>
        <Header />
        {children}
      </body>
    </html>
  );
}
