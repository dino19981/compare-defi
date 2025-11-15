import { Metadata } from 'next';
import { getTranslations } from 'next-intl/server';

interface GenerateMetadataParams {
  params: Promise<{ locale: string }>;
  namespace: string;
  link: string;
  titleKey?: string;
  descriptionKey?: string;
}

export const generateLocalizedMetadata = async ({
  params,
  namespace,
  link,
  titleKey = 'title',
  descriptionKey = 'description',
}: GenerateMetadataParams): Promise<Metadata> => {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace });

  return {
    title: t(titleKey),
    description: t(descriptionKey),
    alternates: {
      canonical: `${process.env.BASE_URL}/${locale}${link}`,
    },
    openGraph: {
      title: 'Сравнение стейкинга криптовалют',
      description: 'Лучшие ставки и условия стейкинга криптовалют – выберите оптимальный вариант.',
      url: `${process.env.BASE_URL}/${locale}${link}`,
      siteName: 'CompareDefi',
      type: 'website',
    },
    // twitter: {
    //   card: 'summary_large_image',
    //   title: 'Сравнение стейкинга криптовалют',
    //   description: 'Доходность и условия стейкинга – выберите лучший вариант.',
    // },
  };
};
