import axios from 'axios';
import crypto from 'crypto';

import { BitgetEarnsDto } from '../model/bitgetEarnDto';

class _BitgetService {
  private url: string = 'https://api.bitget.com';
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
    const endpoint = '/api/v2/earn/savings/product?filter=available_and_held';
    const data = await this.axios<BitgetEarnsDto>(this.url + endpoint, {
      headers: this.getHeaders(),
    });

    return data.data;
  };

  private getHeaders = () => {
    const endpoint = '/api/v2/earn/savings/product?filter=available_and_held';

    const timestamp = Date.now().toString();
    const message = timestamp + 'GET' + endpoint;
    const signature = crypto
      .createHmac('sha256', process.env.BITGET_SECRET_KEY!)
      .update(message)
      .digest('base64');

    return {
      'ACCESS-KEY': process.env.BITGET_API_KEY,
      'ACCESS-SIGN': signature,
      'ACCESS-TIMESTAMP': timestamp,
      'ACCESS-PASSPHRASE': process.env.BITGET_PASS,
      'Content-Type': 'application/json',
    };
  };
}

export const BitgetService = new _BitgetService();
