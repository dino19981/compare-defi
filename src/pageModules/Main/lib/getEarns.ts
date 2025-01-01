import { getBinanceEarnings } from 'features/binance/api';
import { getBitgetEarnings } from 'features/bitget/api';
import { getBybitEarnings } from 'features/bybit/api';
import { getOkxEarnings } from 'features/okx/api';

const ITEMS_PER_PAGE = 10;

export const getEarns = async () => {
    const earns = await Promise.all([getOkxEarnings(), getBinanceEarnings(), getBybitEarnings(), getBitgetEarnings()]);

    const flattedEarns = earns.flat();

    const pages = Math.ceil(flattedEarns.length / ITEMS_PER_PAGE);

    return {
        data: flattedEarns,
        pages,
    };
};
