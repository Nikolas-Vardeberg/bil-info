import './globals.css';
import type { Metadata } from 'next';
import { Funnel_Display } from 'next/font/google';
import { getLocale } from 'next-intl/server';
import { NextIntlClientProvider } from 'next-intl';

const funnelDisplay = Funnel_Display({
  variable: '--font-funnel_display',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Bil Info',
  description: 'Søk opp bilen din og få full kontroll over bilen din',
};

export default async function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const locale = await getLocale();

  return (
    <html lang={locale}>
        <body
          className={`${funnelDisplay.variable} antialiased`}
        >
          <NextIntlClientProvider>
            {children}
          </NextIntlClientProvider>
        </body>
    </html>
  );
}
