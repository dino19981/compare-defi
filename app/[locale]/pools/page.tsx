import { EARN_ITEMS_DEFAULT_LIMIT, EARN_ITEMS_DEFAULT_SORT } from 'entities/earn';
import { getPools } from 'entities/pool/api';
import { Metadata, NextPage } from 'next';
import Head from 'next/head';
import { PoolsPage } from 'pageModules/Pools';
import { Routes } from 'shared/config';
import { generateLocalizedMetadata } from 'shared/lib/metadata';
import { ParamsWithLocale } from 'shared/model';

export async function generateMetadata({ params }: ParamsWithLocale): Promise<Metadata> {
  return generateLocalizedMetadata({
    params,
    namespace: 'pages.pools',
    link: Routes.Pools,
  });
}

// Настройка TTL для страницы - обновление раз в час
export const revalidate = 3600; // 1 час в секундах

const Pools: NextPage = async () => {
  const data = await getPools({
    limit: EARN_ITEMS_DEFAULT_LIMIT,
    skip: 0,
    sort: EARN_ITEMS_DEFAULT_SORT,
  });

  return (
    <>
      <Head>
        <link rel="alternate" href={`${process.env.BASE_URL}/en${Routes.Pools}`} hrefLang="en" />
        <link rel="alternate" href={`${process.env.BASE_URL}/ru${Routes.Pools}`} hrefLang="ru" />
      </Head>

      <PoolsPage data={data} />
    </>
  );
};

export default Pools;
