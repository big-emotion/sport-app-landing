import type { Metadata } from 'next';
import '../globals.css';
import { notFound } from 'next/navigation';
import { hasLocale, NextIntlClientProvider } from 'next-intl';
import { getTranslations } from 'next-intl/server';
import React from 'react';

import { routing } from '@/i18n/routing';

const LANDING_ENV = process.env.NEXT_PUBLIC_NODE_ENV ?? '';
const COOKIE_BOT_ID = process.env.NEXT_PUBLIC_COOKIE_BOT_ID ?? '';

export async function generateMetadata(): Promise<Metadata> {
  const t = await getTranslations('metadata');

  return {
    title: t('title'),
    description: t('description'),
  };
}

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}): Promise<React.ReactNode> {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  const renderUsercentrics = () => {
    if (COOKIE_BOT_ID === '') {
      return null;
    }

    if (LANDING_ENV === 'STAGING') {
      return (
        <script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id={COOKIE_BOT_ID}
          data-draft="true"
          async
        ></script>
      );
    }

    return (
      <>
        <script src="https://web.cmp.usercentrics.eu/modules/autoblocker.js"></script>
        <script
          id="usercentrics-cmp"
          src="https://web.cmp.usercentrics.eu/ui/loader.js"
          data-settings-id={COOKIE_BOT_ID}
          async
        ></script>
      </>
    );
  };

  return (
    <html lang={locale}>
      <head>{renderUsercentrics()}</head>
      <body>
        <NextIntlClientProvider locale={locale}>
          <main className="min-h-screen bg-white">{children}</main>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
