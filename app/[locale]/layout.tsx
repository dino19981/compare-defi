import { routing } from 'i18n/routing';
import { NextIntlClientProvider } from 'next-intl';
import { getMessages } from 'next-intl/server';
import { notFound } from 'next/navigation';
import { Header } from 'widgets/Header/ui';

export default async function LocaleLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  // Ensure that the incoming `locale` is valid
  const { locale } = await params;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  if (!routing.locales.includes(locale as any)) {
    notFound();
  }

  // Providing all messages to the client
  // side is the easiest way to get started
  const messages = await getMessages();

  return (
    <NextIntlClientProvider messages={messages}>
      {/* <Head>
        
         {preloadedFonts.map((font) => (
          <link
            rel="preload"
            href={font.url}
            as="font"
            type={font.type}
            crossOrigin="anonymous"
            key={font.url}
            fetchPriority="high"
          />
        ))} 
      </Head>*/}
      <Header />

      {children}
    </NextIntlClientProvider>
  );
}
