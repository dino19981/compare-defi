import {
  getBinanceEarnings,
  getBingXEarnings,
  getBitgetEarnings,
  getBybitEarnings,
  getHtxEarnings,
  getKucoinEarnings,
  getOkxEarnings,
} from 'entities/stacking';

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
