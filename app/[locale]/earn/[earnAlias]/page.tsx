import { getEarns } from 'entities/earn';
import { fetchEarnItemsDefaultParams } from 'entities/earn/constants';
import { getSeoForPage } from 'entities/seo/api/getSeoForPage';
import { Metadata } from 'next';
import Head from 'next/head';
import { notFound } from 'next/navigation';
import { EarnPage } from 'pageModules/Earn';
import { Routes, earnRoutesList } from 'shared/config';
import { LayoutContainer } from 'shared/ui';
import { SeoBlocks } from 'widgets/SeoBlocks';

interface ParamsWithLocale {
  params: Promise<{ locale: string; earnAlias: string }>;
}

export async function generateMetadata({ params }: ParamsWithLocale): Promise<Metadata | null> {
  const { earnAlias, locale } = await params;

  const pathname = `${Routes.Earn}/${earnAlias}`;

  if (!earnRoutesList.includes(pathname)) {
    return null;
  }

  const seo = await getSeoForPage({
    pathname,
    language: locale,
  });

  return {
    ...(seo && {
      title: seo.head.title,
      description: seo.head.description,
    }),
    alternates: {
      canonical: `${process.env.BASE_URL}/${locale}${Routes.Earn}/${earnAlias}`,
    },
    openGraph: {
      title: seo?.head?.title || 'Сравнение стейкинга криптовалют',
      description:
        seo?.head?.description ||
        'Лучшие ставки и условия стейкинга криптовалют – выберите оптимальный вариант.',
      url: `${process.env.BASE_URL}/${locale}${Routes.Earn}/${earnAlias}`,
      siteName: 'compare-defi',
      type: 'website',
    },

    // twitter: {
    //   card: 'summary_large_image',
    //   title: 'Сравнение стейкинга криптовалют',
    //   description: 'Доходность и условия стейкинга – выберите лучший вариант.',
    // },
  };
}

export const revalidate = 600; // 10 минут

const Page = async ({ params }: ParamsWithLocale) => {
  const { earnAlias, locale } = await params;

  const pathname = `${Routes.Earn}/${earnAlias}`;

  if (!earnRoutesList.includes(pathname)) {
    notFound();
  }

  const [earns, seo] = await Promise.all([
    getEarns(fetchEarnItemsDefaultParams),
    getSeoForPage({
      pathname,
      language: locale,
    }),
  ]);

  return (
    <div>
      <Head>
        <link rel="alternate" href={`${process.env.BASE_URL}/en${pathname}`} hrefLang="en" />
        <link rel="alternate" href={`${process.env.BASE_URL}/ru${pathname}`} hrefLang="ru" />
      </Head>

      <LayoutContainer>
        <EarnPage data={earns} />
      </LayoutContainer>

      {seo && <SeoBlocks seo={seo} />}
    </div>
  );
};

export default Page;
