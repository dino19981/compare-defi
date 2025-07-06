import { getBinanceEarnings } from 'features/binance/api';
import { getBingXEarnings } from 'features/bingX/api';
import { getBitgetEarnings } from 'features/bitget/api';
import { getBybitEarnings } from 'features/bybit/api';
import { getHtxEarnings } from 'features/htx/api';
import { getKucoinEarnings } from 'features/kukoin/api';
import { getOkxEarnings } from 'features/okx/api';

const ITEMS_PER_PAGE = 10;

export const getEarns = async () => {
  const earns = await Promise.all([
    getOkxEarnings(),
    getBinanceEarnings(),
    getBybitEarnings(),
    getBitgetEarnings(),
    getBingXEarnings(),
    getKucoinEarnings(),
    getHtxEarnings(),
  ]);

  const flattedEarns = earns.flat();

  const pages = Math.ceil(flattedEarns.length / ITEMS_PER_PAGE);

  return {
    data: flattedEarns,
    pages,
  };
};
