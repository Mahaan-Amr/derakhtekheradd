import './globals.css';
import '@fontsource-variable/vazirmatn/index.css';
import type { Metadata } from 'next';
import { Providers } from './providers';
import { Footer } from '@/components/footer';

export const metadata: Metadata = {
  title: 'درخت خرد | Derakhte Kherad',
  description: 'Educational Platform for Farsi/German Language Institution',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="fa" dir="rtl" suppressHydrationWarning>
      <body className="min-h-screen bg-white dark:bg-gray-900 flex flex-col">
        <Providers>
          <div className="flex-grow">
            {children}
          </div>
          <Footer />
        </Providers>
      </body>
    </html>
  );
}
