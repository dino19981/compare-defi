import { getEarns } from 'entities/earn';
import { EARN_ITEMS_DEFAULT_LIMIT } from 'entities/earn/constants/pagination';
import { Metadata } from 'next';
import Head from 'next/head';
import { EarnPage } from 'pageModules/Earn';
import { SortDirectionEnum } from 'shared/api/generated/Api';
import { Routes } from 'shared/config';
import { generateLocalizedMetadata } from 'shared/lib/metadata';
import { ParamsWithLocale } from 'shared/model';

export async function generateMetadata({ params }: ParamsWithLocale): Promise<Metadata> {
  return generateLocalizedMetadata({
    params,
    namespace: 'pages.earn',
    link: Routes.Earn,
  });
}

// Настройка TTL для страницы - обновление раз в час
export const revalidate = 3600; // 1 час в секундах

const Page = async () => {
  const data = await getEarns({
    sort: {
      field: 'maxRate',
      direction: SortDirectionEnum.Desc,
    },
    limit: EARN_ITEMS_DEFAULT_LIMIT,
    skip: 0,
  });

  return (
    <div>
      <Head>
        <link rel="alternate" href={`${process.env.BASE_URL}/en${Routes.Earn}`} hrefLang="en" />
        <link rel="alternate" href={`${process.env.BASE_URL}/ru${Routes.Earn}`} hrefLang="ru" />
      </Head>

      <EarnPage data={data} />
    </div>
  );
};

export default Page;
