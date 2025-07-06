import axios from 'axios';

import { KucoinEarnsDto } from '../model';

class _KucoinService {
  private url: string = 'https://www.kucoin.com';
  private axios = axios.create({
    timeout: 5000,
    responseType: 'json',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
    },
  });

  getEarnings = async () => {
    const { data } = await this.axios<KucoinEarnsDto>(
      `${this.url}/_pxapi/pool-staking/v4/low-risk/currencies-products?lang=ru_RU`,
    );

    return data.data;
  };
}

export const KucoinService = new _KucoinService();
