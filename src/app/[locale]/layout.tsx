import type { Metadata } from 'next';
import '../styles/globals.scss';
import { NextIntlClientProvider, useMessages } from 'next-intl';
import { config } from '@fortawesome/fontawesome-svg-core';
import '@fortawesome/fontawesome-svg-core/styles.css';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v13-appRouter';
config.autoAddCss = false;

export const metadata: Metadata = {
  title: 'Kriszti & Dani',
  description: 'Generated by create next app',
};

export default function RootLayout({
  children,
  params: { locale },
}: {
  children: React.ReactNode;
  params: { locale: string };
}) {
  const messages = useMessages();
  return (
    <html lang={locale}>
      <body>
        <NextIntlClientProvider locale={locale} messages={messages}>
          <AppRouterCacheProvider>{children}</AppRouterCacheProvider>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
