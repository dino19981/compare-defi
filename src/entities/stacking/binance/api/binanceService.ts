import axios from 'axios';
import crypto from 'crypto';

import { BinanceEarnsDto } from '../model';

class _BinanceService {
  private url: string = 'https://api.binance.com';
  private axios = axios.create({
    timeout: 5000,
    responseType: 'json',
    withCredentials: true,
    headers: {
      'Content-Type': 'application/json',
      Accept: 'application/json',
      'X-MBX-APIKEY': process.env.BINANCE_API_KEY,
      // 'User-Agent': `${constants.appName}/${constants.appVersion}`,
    },
  });

  getEarnings = async () => {
    const endpoint = '/sapi/v1/simple-earn/flexible/list';
    const queryString = this.getQueryString();
    const data = await this.axios<BinanceEarnsDto>(
      'https://www.binance.com/bapi/earn/v1/friendly/finance-earn/homepage/overview?pageSize=100',
    );
    // const data = await this.axios<BinanceEarnsDto>(this.url + endpoint + queryString);

    return data.data;
  };

  private getQueryString = () => {
    const queryString = buildQueryString({
      timestamp: Date.now(),
    });
    const signature = crypto
      .createHmac('sha256', process.env.BINANCE_SECRET_KEY!)
      .update(queryString)
      .digest('hex');

    return `?${queryString}&signature=${encodeURIComponent(signature)}`;
  };
}

export const BinanceService = new _BinanceService();

const buildQueryString = (params: Record<string, any>) => {
  if (!params) return '';
  return Object.entries(params).map(stringifyKeyValuePair).join('&');
};

/**
 * NOTE: The array conversion logic is different from usual query string.
 * E.g. symbols=["BTCUSDT","BNBBTC"] instead of symbols[]=BTCUSDT&symbols[]=BNBBTC
 */
const stringifyKeyValuePair = ([key, value]: [string, string]) => {
  const valueString = Array.isArray(value) ? `["${value.join('","')}"]` : value;
  return `${key}=${encodeURIComponent(valueString)}`;
};
